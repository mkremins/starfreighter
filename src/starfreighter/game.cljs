(ns starfreighter.game
  (:refer-clojure :exclude [rand rand-int rand-nth shuffle])
  (:require [starfreighter.cards.arrival :as arrival]
            [starfreighter.cards.bar :as bar]
            [starfreighter.cards.departure :as departure]
            [starfreighter.cards.gambling :as gambling]
            [starfreighter.cards.loans :as loans]
            [starfreighter.cards.port :as port]
            [starfreighter.cards.space :as space]
            [starfreighter.db :as db]
            [starfreighter.gen :as gen]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(defn interruptible?
  "Returns whether a given `card` is interruptible – i.e. whether it's OK (both
  gameplay- and narrative-wise) for the player to \"just walk away\" from the
  situation the card represents, e.g. by initiating travel to another place."
  [card]
  (if (contains? card :interruptible?)
    (:interruptible? card)
    (some (comp empty? :effects) (:choices card))))

(defn affordable? [state choice]
  (let [total-cost (reduce + (map second (filter #(= (first %) :spend) (:effects choice))))]
    (db/can-afford? state total-cost)))

(declare restart-game) ; so that we can refer to this fn as the effect of a :game-over card

(defn compile-choices [state card]
  (assoc card :choices
    (case (:type card)
      :custom
        (let [choices (filter (partial affordable? state) (:choices card))]
          (assert (> (count choices) 0))
          choices)
      :game-over
        [{:icon (if (:deadly? card) "☠️" "🔁")
          :background "brown" ; TODO move literal colors back out into CSS?
          :effects [[:call restart-game]]}]
      :info
        [{:icon "👌" :background "steelblue" :effects (:ok card)}]
      :yes-no
        [{:icon "👎" :background "brown"     :effects (:no card)}
         {:icon "👍" :background "darkgreen" :effects (:yes card)}]
      ;else
        (util/error "Invalid card type " (:type card)))))

(defn prepare-to-depart [state]
  (let [dest (:name (:info-target state))]
    (assoc state :card
      (compile-choices state
        {:id :prepare-to-depart
         :type :yes-no
         :interruptible? false
         :speaker (db/some* state db/crew)
         :text ["Oh, we’re leaving for " dest " already? Guess I’ll go fire up the engines!"]
         :yes [[:begin-departure-for dest]]
         :no []}))))

(defn applicable-game-over-if-any [state]
  (cond
    (and (zero? (:ship state)) (not (db/in-port? state)))
      {:id :ship-falls-apart
       :type :game-over
       :deadly? true
       :text ["With a horrific creak, your ship’s hull gives way, wrenching itself apart. "
              "A torrential rush of air sucks you nigh instantaneously into the vacuum of space."]}
    :else
      nil))

(defn applicable-arrival-if-any [state]
  (or ;; drop off (and cash in) cargo you're supposed to deliver
      (when-let [cargo-to-drop (seq (db/cargo-to-drop state))]
        {:id :drop-cargo
         :type :info
         :speaker (db/some* state db/crew)
         :text "I’ll go drop off the goods we’re supposed to deliver."
         :ok (flatten1 (for [item cargo-to-drop]
                         [[:drop-cargo item]
                          [:earn (:pay-after item)]
                          [:add-memory (:merchant item) :completed-delivery]]))})
      ;; drop off passengers you're supposed to deliver
      (when-let [passengers-to-drop (seq (db/passengers-to-drop state))]
        {:id :drop-passengers
         :type :info
         :speaker (rand/rand-nth passengers-to-drop)
         :text "Thanks for the ride, Captain! It’ll be good to get a fresh start here."
         :ok (for [char passengers-to-drop] [:drop-cargo char])})))

(let [port-cards (concat port/cards bar/cards gambling/cards loans/cards)]
  (defn default-deck [state]
    (condp #(%1 %2) state
      db/in-port?    port-cards
      db/departing?  departure/cards
      db/in-transit? space/cards
      db/arriving?   arrival/cards)))

(defn try-pick [state metacard]
  (when (and (or (:repeatable? metacard)
                 (not (contains? (:recent-picks state) (:id metacard))))
             ((:prereq metacard (constantly true)) state))
    (loop [pairs (:bind metacard)
           bindings {}]
      (if-let [[k f] (first pairs)]
        (let [v (f (assoc state :bound bindings))]
          (when-not (nil? v)
            (recur (rest pairs) (assoc bindings k v))))
        (assoc metacard :bound bindings)))))

(defn draw-next-card* [state]
  (or (applicable-game-over-if-any state)
      (applicable-arrival-if-any state)
      (:next-card state)
      (let [deck     (or (:deck state) (default-deck state))
            pickable (filter identity (map (partial try-pick state) deck))
            _        (assert (not (empty? pickable)))
            picked   (rand/weighted-choice
                       (->> pickable
                            (map #((:weight %) (assoc state :bound (:bound %))))
                            (zipmap pickable)))
            _        (println "Drew card:" (:id picked))
            card     ((:gen picked) (assoc state :bound (:bound picked)))]
        (assoc card
          :advance-time? (not (:deck state)) ; generally, only "top-level" cards should advance time
          :id (:id picked)))))

(defn draw-next-card [state]
  (compile-choices state (draw-next-card* state)))

(defn handle-choice [state effects]
  (let [state' (db/process-effects state effects)
        card   (draw-next-card state')]
    (-> state'
        (assoc :card card)
        (update :recent-picks conj (:id card))
        (cond-> (:advance-time? card) (update :turn inc))
        (dissoc :next-card))))

;;; start-of-game setup

(defn create-init-state []
  (let [{:keys [cultures places]} (gen/gen-map)
        chars  (mapcat :merchants places)
        places (map #(update % :merchants (partial map :id)) places)
        place  (rand/rand-nth places)
        crew   (repeatedly 2 #(gen/gen-character {:cultures cultures} place :crew))
        chars  (into chars crew)]
    {;; universe
     :chars     (util/indexed-by :id chars)
     :cultures  cultures
     :places    (util/indexed-by :name places)
     ;; your stuff
     :cargo     []
     :max-cargo 6
     :crew      (set (map :id crew))
     :max-crew  3
     :cash      10000
     :ship      60
     ;; coordinates
     :travel    {:stage :in-port :at (:name place)}
     :turn      1
     :recent-picks #{:offer-join-crew}} ; prevent init crew from "reminiscing" about a place they haven't left yet
     ))

(defn restart-game [& _]
  (let [state (create-init-state)
        card  (draw-next-card state)]
    (-> state (assoc :card card)
              (update :recent-picks conj (:id card)))))
