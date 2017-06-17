(ns starfreighter.game
  (:require [starfreighter.cards.bar :as bar]
            [starfreighter.cards.gambling :as gambling]
            [starfreighter.cards.loans :as loans]
            [starfreighter.cards.port :as port]
            [starfreighter.cards.space :as space]
            [starfreighter.db :as db]
            [starfreighter.gen :as gen]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(let [port-cards
      (for [card (concat port/cards bar/cards gambling/cards loans/cards)]
        (update card :prereq #(or (some-> % (every-pred :docked?)) :docked?)))
      space-cards
      (for [card space/cards]
        (update card :prereq #(or (some-> % (every-pred (complement :docked?))) (complement :docked?))))]
  (def all-cards
    (into (vec port-cards) space-cards)))

(defn interruptible?
  "Returns whether a given `card` is interruptible – i.e. whether it's OK (both
  gameplay- and narrative-wise) for the player to \"just walk away\" from the
  situation the card represents, e.g. by initiating travel to another place."
  [card]
  (if (contains? card :interruptible?)
    (:interruptible? card)
    (some (comp empty? :effects) (:choices card))))

(declare restart-game) ; so that we can refer to this fn as the effect of a :game-over card

(defn compile-choices [card]
  (assoc card :choices
    (case (:type card)
      :custom
        (:choices card)
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
  (let [dest (:info-target state)]
    (assoc state :card
      (compile-choices
        {:id :prepare-to-depart
         :type :yes-no
         :interruptible? false
         :speaker (db/some* state db/crew)
         :text ["Oh, we’re leaving for " (:name dest) " already? Guess I’ll go fire up the engine!"]
         :yes [[:depart-for dest]]
         :no []}))))

(defn applicable-game-over-if-any [state]
  (cond
    (and (zero? (:ship state)) (not (:docked? state)))
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
         :speaker (rand-nth passengers-to-drop)
         :text "Thanks for the ride, Captain! It’ll be good to get a fresh start here."
         :ok (for [char passengers-to-drop] [:drop-cargo char])})))

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
      (let [deck     (or (:deck state) all-cards)
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

(def draw-next-card
  (comp compile-choices draw-next-card*))

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
  (let [places (gen/gen-places)
        chars  (mapcat :merchants places)
        places (map #(update % :merchants (partial map :id)) places)
        place  (rand-nth places)
        crew   (repeatedly 2 #(gen/gen-character place :crew))
        chars  (into chars crew)]
    {;; universe
     :chars     (util/indexed-by :id chars)
     :places    (util/indexed-by :name places)
     ;; your stuff
     :cargo     []
     :max-cargo 6
     :crew      (set (map :id crew))
     :max-crew  3
     :cash      10000
     :ship      60
     ;; coordinates
     :docked?   true
     :location  (:name place)
     :turn      1
     :recent-picks #{:offer-join-crew}} ; prevent init crew from "reminiscing" about a place they haven't left yet
     ))

(defn restart-game [& _]
  (let [state (create-init-state)
        card  (draw-next-card state)]
    (-> state (assoc :card card)
              (update :recent-picks conj (:id card)))))
