(ns starfreighter.db
  (:require [starfreighter.gen :as gen]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

;;; stats

(defn has-at-least?
  ([stat amount] #(has-at-least? % stat amount))
  ([state stat amount] (>= (get-in state [:stats stat]) amount)))

(defn has-at-most?
  ([stat amount] #(has-at-most? % stat amount))
  ([state stat amount] (<= (get-in state [:stats stat]) amount)))

(defn adjust-stat
  ([stat amount] #(adjust-stat % stat amount))
  ([state stat amount]
    (update-in state [:stats stat] #(-> % (+ amount) (min 100) (max 0)))))

;;; cargo, passengers, crew

(defn open-cargo-slots [state]
  (- (:max-cargo state) (count (:cargo state))))

(defn open-crew-slots [state]
  (- (:max-crew state) (count (:crew state))))

(def can-hold-more-cargo?
  (comp pos? open-cargo-slots))

(def can-hold-more-crew?
  (comp pos? open-crew-slots))

(defn add-cargo
  ([cargo] #(add-cargo % cargo))
  ([state cargo] (update state :cargo conj cargo)))

(defn add-crew
  ([char] #(add-crew % char))
  ([state char] (update state :crew conj (assoc char :role :crew))))

(defn drop-cargo
  ([cargo] #(drop-cargo % cargo))
  ([state cargo]
    ;; TODO will cheat people out of duplicates if they have any
    (update state :cargo (comp vec (partial remove #{cargo})))))

(defn drop-crew
  ([char] #(drop-crew % char))
  ([state char] (update state :crew (comp vec (partial remove #{char})))))

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

(defn has-trait?
  ([trait] #(has-trait? % trait))
  ([char trait] (contains? (:traits char) trait)))

(def unconscious? (has-trait? :unconscious))

(defn crew-member-with-trait
  ([trait] #(crew-member-with-trait % trait))
  ([state trait] (first (filter (has-trait? trait) (:crew state)))))

(defn rand-crew-member [state]
  (rand-nth (:crew state)))

;;; places, the map

(defn current-place [state]
  (get (:places state) (:location state)))

(def gen-local-character
  (comp gen/gen-character current-place))

(def rand-merchant
  (comp rand-nth :merchants current-place))

(def rand-export
  (comp rand-nth :exports current-place))

(defn adjacencies [state loc]
  (:connections (cond->> loc (string? loc) (get (:places state)))))

(defn distance-tiers [state]
  (let [first-tier (vec (:connections (current-place state)))]
    (loop [tiers [first-tier]
           visited (conj (set first-tier) (:location state))]
      (let [this-tier
            (->> (last tiers)
                 (mapcat (comp :connections (:places state)))
                 (remove visited)
                 (distinct)
                 (vec))]
        (if (empty? this-tier)
          tiers
          (recur (conj tiers this-tier)
                 (into visited this-tier)))))))

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

(defn depart-for
  ([dest] #(depart-for % dest))
  ([state dest]
    (assoc state
      :docked? false
      :destination dest
      :recent-picks #{})))

(defn arrive [state]
  (assoc state
    :docked? true
    :location (:destination state)
    :recent-picks #{}))

;;; cards

(defn set-next-card
  ([card] #(set-next-card % card))
  ([state card] (assoc state :next-card card)))

(defn set-deck
  ([deck] #(set-deck % deck))
  ([state deck] (assoc state :deck deck)))

(defn unset-deck [state]
  (dissoc state :deck))
