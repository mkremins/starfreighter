(ns starfreighter.db
  (:require [starfreighter.rand :as rand]
            [starfreighter.util :as util :refer-macros [defcurried]]))

;;; stats

(defcurried has-at-least? [state stat amount]
  (>= (get-in state [:stats stat]) amount))

(defcurried has-at-most? [state stat amount]
  (<= (get-in state [:stats stat]) amount))

(defcurried adjust-stat [state stat amount]
  (update-in state [:stats stat] #(util/clamp (+ % amount) 0 100)))

;;; cargo, passengers, crew

(defn open-cargo-slots [state]
  (- (:max-cargo state) (count (:cargo state))))

(defn open-crew-slots [state]
  (- (:max-crew state) (count (:crew state))))

(def can-hold-more-cargo?
  (comp pos? open-cargo-slots))

(def can-hold-more-crew?
  (comp pos? open-crew-slots))

(defcurried add-cargo [state cargo]
  (update state :cargo conj cargo))

(defcurried add-crew [state char]
  (update state :crew conj (assoc char :role :crew)))

(defcurried drop-cargo [state cargo]
  ;; TODO will cheat people out of duplicates if they have any
  (update state :cargo (comp vec (partial remove #{cargo}))))

(defcurried drop-crew [state char]
  (update state :crew (comp vec (partial remove #{char}))))

(defn passengers [state]
  (filter :passenger? (:cargo state)))

(defn has-cargo-to-drop? [state]
  (some #(and (not (:passenger? %))
              (= (:destination %) (:location state)))
        (:cargo state)))

(defn has-passengers-to-drop? [state]
  (some #(= (:destination %) (:location state)) (passengers state)))

(defn freely-sellable? [cargo]
  (not (or (:passenger? cargo) (:destination cargo))))

(defn has-freely-sellable-cargo? [state]
  (some freely-sellable? (:cargo state)))

(defcurried has-trait? [char trait]
  (contains? (:traits char) trait))

;; skills
(def fighter?       (has-trait? :fighter))
(def mechanic?      (has-trait? :mechanic))
(def medic?         (has-trait? :medic))
;; personality traits
(def generous?      (has-trait? :generous))
(def stingy?        (has-trait? :stingy))
(def trustworthy?   (has-trait? :trustworthy))
(def untrustworthy? (has-trait? :untrustworthy))
;; temporary "status effects"
(def unconscious?   (has-trait? :unconscious))

(defcurried crew-member-with-trait [state trait]
  (first (filter (has-trait? trait) (:crew state))))

(defn rand-crew-member [state]
  (rand-nth (:crew state)))

;;; places, the map

(defn current-place [state]
  (get (:places state) (:location state)))

(defn adjacencies [state loc]
  (:connections (cond->> loc (string? loc) (get (:places state)))))

(defn pathfind
  ([state to] (pathfind state (:location state) to))
  ([state from to]
    (let [from (cond-> from (map? from) (:name from))
          to   (cond-> to (map? to) (:name to))]
      (if (= from to)
        [from]
        (loop [paths [[from]]
               visited #{from}]
          (let [adjacencies* #(remove visited (adjacencies state %))
                paths' (mapcat #(map (partial conj %) (adjacencies* (peek %))) paths)]
            (or (first (filter #(= (peek %) to) paths'))
                (recur paths' (into visited (map peek paths'))))))))))

(defn rand-destination [state]
  (rand-nth
    (conj (:connections (current-place state))
          (rand-nth (remove #{(:location state)} (keys (:places state)))))))

(defn where-to-next [state]
  (let [place (current-place state)
        cargo-dests (filter identity (map :destination (:cargo state)))]
    (if (empty? cargo-dests)
      (rand-nth (:connections place))
      (->> (map (partial pathfind state) cargo-dests)
           (sort-by count <)
           (first)
           (second)))))

(defcurried depart-for [state dest]
  (assoc state
    :docked? false
    :destination dest
    :recent-picks #{}))

(defn arrive [state]
  (assoc state
    :docked? true
    :location (:destination state)
    :recent-picks #{}))

;;; jobs, merchants

(def rand-merchant
  (comp rand-nth vals :merchants current-place))

(def rand-export
  (comp rand-nth :exports current-place))

(defcurried adjust-player-rep [state merchant reason]
  (update-in state [:places (:home merchant) :merchants (:name merchant) :history] conj reason))

(def base-rep-values
  {:bought-goods +1
   :completed-delivery +5
   :sold-goods +2
   :refused-repay-fought-collector -20
   :tried-sell-counterfeit-goods -10})

(defn calc-player-rep [merchant]
  (let [generous? (has-trait? merchant :generous)
        stingy?   (has-trait? merchant :stingy)
        total-rep (reduce +
                    (for [event (:history merchant)
                          :let [value (get base-rep-values event)]]
                      (if (neg? value)
                        (cond generous? (/ value 2) stingy? (* value 2) :else value)
                        (cond generous? (* value 2) stingy? (/ value 2) :else value))))]
    (util/clamp total-rep -50 50)))

(defn will-trust-with-normal-job? [merchant]
  (> (calc-player-rep merchant) -15))

;;; cards

(defcurried set-next-card [state card]
  (assoc state :next-card card))

(defcurried set-deck [state deck]
  (assoc state :deck deck))

(defn unset-deck [state]
  (dissoc state :deck))
