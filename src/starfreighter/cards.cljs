(ns starfreighter.cards
  (:require [starfreighter.cards.port :as port]
            [starfreighter.cards.space :as space]
            [starfreighter.db :as db]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(def all-cards
  (into (mapv #(update % :prereq (partial every-pred :docked?)) port/cards)
        (mapv #(update % :prereq (partial every-pred (complement :docked?))) space/cards)))

(defn interruptible?
  "Returns whether a given `card` is interruptible – i.e. whether it's OK (both
  gameplay- and narrative-wise) for the player to \"just walk away\" from the
  situation the card represents, e.g. by initiating travel to another place."
  [card]
  (if (contains? card :interruptible?)
    (:interruptible? card)
    (case (:type card)
      :game-over false
      :info (= (:ok card) identity)
      :yes-no (or (= (:yes card) identity)
                  (= (:no card) identity)))))

(defn prepare-to-depart [state]
  (let [dest (:info-target state)]
    (assoc state :card
      {:type :yes-no
       :interruptible? false
       :speaker (db/rand-crew-member state)
       :text ["Oh, we’re leaving for " (:name dest) " already? Guess I’ll go fire up the engine!"]
       :yes (db/depart-for (second (db/pathfind state dest)))
       :no identity})))

(defn applicable-game-over-if-any [{:keys [stats] :as state}]
  (cond
    (and (zero? (:crew stats)) (:docked? state))
      {:type :game-over
       :text ["The crew, fed up with your leadership, steal your ship and depart, "
              "leaving you stranded on " (:location state) "."]}
    (and (zero? (:ship stats)) (not (:docked? state)))
      {:type :game-over
       :deadly? true
       :text ["With a horrific creak, your ship’s hull gives way, wrenching itself apart. "
              "A torrential rush of air sucks you nigh instantaneously into the vacuum of space."]}
    :else
      nil))

(defn applicable-arrival-if-any [state]
  (cond
    ;; drop off (and cash in) cargo you're supposed to deliver
    (db/has-cargo-to-drop? state)
      (let [[dropping keeping]
            (util/sift #(and (not (:passenger? %))
                             (= (:destination %) (:location state)))
                       (:cargo state))]
        {:type :info
         :speaker (rand-nth (:crew state))
         :text "I’ll go drop off the goods we’re supposed to deliver."
         :ok (comp #(assoc % :cargo (vec keeping))
                   (db/adjust-stat :cash (reduce + (map :pay dropping)))
                   (apply comp
                     (for [{:keys [merchant]} dropping :when merchant]
                       (db/adjust-player-rep merchant :completed-delivery))))})
    ;; drop off passengers you're supposed to deliver
    (db/has-passengers-to-drop? state)
      (let [[dropping keeping]
            (util/sift #(and (:passenger? %)
                             (= (:destination %) (:location state)))
                       (:cargo state))]
        {:type :info
         :speaker (rand-nth dropping)
         :text "Thanks for the ride, Captain! It’ll be good to get a fresh start here."
         :ok #(assoc % :cargo (vec keeping))})))

(defn can-pick? [state metacard]
  (and (or (:repeatable? metacard)
           (not (contains? (:recent-picks state) (:id metacard))))
       ((:prereq metacard) state)))

(defn draw-next-card [state]
  (or (applicable-game-over-if-any state)
      (applicable-arrival-if-any state)
      (:next-card state)
      (let [deck     (or (:deck state) all-cards)
            pickable (filter (partial can-pick? state) deck)
            weights  (zipmap pickable (map #((:weight %) state) pickable))
            metacard (rand/weighted-choice weights)]
        (prn (:id metacard))
        (assoc ((:gen metacard) state) :id (:id metacard)))))
