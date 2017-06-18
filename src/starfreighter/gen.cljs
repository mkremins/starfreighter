(ns starfreighter.gen
  (:refer-clojure :exclude [rand rand-int rand-nth shuffle])
  (:require [clojure.math.combinatorics :as comb]
            [clojure.set :as set]
            [clojure.string :as str]
            [starfreighter.db :as db]
            [starfreighter.geom :as geom]
            [starfreighter.lang :as lang]
            [starfreighter.rand :as rand :refer [rand-nth]]
            [starfreighter.util :as util]))

(let [next-id (atom 0)]
  (defn- gen-id []
    (let [id @next-id]
      (swap! next-id inc)
      id)))

;;; characters

(def nicknames
  ["Arrow"
   "Barker"
   "Bird"
   "Cat"
   "Divvy"
   "Dizzy"
   "Fidget"
   "Howler"
   "Lefty"
   "Lucky"
   "Mouse"
   "Quark"
   "Sand"
   "Savvy"
   "Snake"
   "Snapper"
   "Sneak"
   "Spanner"
   "Specs"
   "Trick"
   "Wolf"])

(def single-letter-nicknames
  {"B" "Bee"
   "C" "Cee"
   "D" "Dee"
   "F" "Eff"
   "G" "Gee"
   "I" "Eye"
   "J" "Jay"
   "K" "Kay"
   "L" "Ell"
   "M" "Em"
   "N" "En"
   "R" "Arr"
   "S" "Ess"
   "T" "Tee"
   "V" "Vee"
   "Y" "Why"
   "Z" "Zee"})

(defn gen-nickname [fname lname]
  (util/bucket (rand/rand)
    [[.9  nil]
     [.95 (rand-nth nicknames)]
     [ 1  (get single-letter-nicknames (first fname) (first fname))]]))

(defn gen-traits []
  (-> #{}
      (conj (rand-nth [:fighter :mechanic :medic nil nil nil]))
      (conj (rand-nth [:generous :stingy nil nil nil nil]))
      (conj (rand-nth [:trustworthy :untrustworthy nil nil nil nil]))
      (disj nil)))

(defn gen-character
  ([place]
    (let [lang (:language place)
          [fname lname] (map str/capitalize (rand/unique-runs 2 lang/gen-word lang))
          nick (gen-nickname fname lname)
          nick-only? (and nick (rand/chance 1 4))]
      {:id (gen-id)
       :type :char
       :name
       (->> [(when-not nick-only? fname) (when nick (str "“" nick "”")) lname]
            (filter identity)
            (str/join " "))
       :shortname (or nick fname)
       :traits    (gen-traits)
       :home      (:name place)
       :culture   (:name lang)
       :memories  []}))
  ([place role]
    (assoc (gen-character place) :role role)))

(def gen-local-character
  (comp gen-character db/current-place))

;;; jobs & cargo

(defn distance-tiers [state]
  (let [first-tier (vec (:connections (db/current-place state)))]
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

(defn rand-dest-with-dist [state]
  (let [tiers   (distance-tiers state)
        indexes (range (count tiers))
        weights (reverse (map #(js/Math.pow 5 %) indexes))
        index   (rand/weighted-choice (zipmap indexes weights))]
    [(rand-nth (nth tiers index)) (inc index)]))

(defn rand-base-pay [payer]
  ;; TODO bump up somewhat if high trust?
  (cond (db/generous? payer) (rand/rand-int* 4 5)
        (db/stingy? payer)   (rand/rand-int* 2 3)
        :else                (rand/rand-int* 3 4)))

(defn rand-base-price [seller]
  ;; TODO bump up somewhat if high trust?
  (cond (db/generous? seller) (rand/rand-int* 4 5)
        (db/stingy? seller)   (rand/rand-int* 6 7)
        :else                 (rand/rand-int* 5 6)))

(defn gen-normal-delivery-job [state]
  (when-let [merchant (db/some-trusting-merchant state)]
    (let [[dest dist] (rand-dest-with-dist state)
          rep         (db/calc-mood merchant)
          real-pay    (* (rand-base-pay merchant) dist 1000)
          split-pay?  (cond (db/stingy? merchant) false
                            (and (db/generous? merchant) (>= rep 0)) true
                            (<= rep 0)  false
                            (<= rep 10) (rand/weighted-choice {true 1 false 5})
                            (<= rep 20) (rand/weighted-choice {true 2 false 4})
                            (<= rep 30) (rand/weighted-choice {true 3 false 3})
                            (<= rep 40) (rand/weighted-choice {true 4 false 2})
                            (<= rep 50) (rand/weighted-choice {true 5 false 1}))]
      {:type        :cargo
       :name        (rand-nth (:exports (db/current-place state)))
       :destination dest
       :distance    dist
       :merchant    merchant
       :pay-before  (if split-pay? (/ real-pay 2) 0)
       :pay-after   (if split-pay? (/ real-pay 2) real-pay)})))

(defn gen-passenger-delivery-job [state]
  (let [[dest dist] (rand-dest-with-dist state)
        passenger   (gen-local-character state)]
    (assoc passenger
      :destination dest
      :distance    dist
      :passenger?  true
      :pay-before  (* (rand-base-pay passenger) dist 1000))))

(defn gen-goods-for-sale [state]
  (when-let [seller (db/some-trusting-merchant state)]
    (let [stuff (db/rand-export state)]
      {:type   :cargo
       :name   stuff
       :seller seller
       :price  (* 3 (rand-base-price seller) 1000)
       :counterfeit?
       (rand/weighted-choice
         (cond (db/trustworthy? seller) {true 1 false 4}
               (db/untrustworthy? seller) {true 4 false 1}
               :else {true 1 false 2}))})))

;;; places

(def goods
  ["antimatter" "carbon dioxide" "computronium" "dark matter" "exotic matter" "explosives"
   "fertilizer" "gold" "grain" "livestock" "medicine" "metamatter" "oxygen" "spice" "synthstim"
   "weapons" "water"])

(def modules
  [{:template :agriculture
    :imports ["water" "fertilizer"]
    :exports ["grain" "livestock"]}
   {:template :aristocracy}
   {:template :corruption}
   {:template :diplomacy}
   {:template :gambling}
   {:template :hospital}
   {:template :independence
    :imports ["explosives" "weapons"]}
   {:template :megacorp}
   {:template :mining
    :exports ["gold"]
    :imports ["explosives"]}
   {:template :neutral}
   {:template :piracy}
   {:template :prohibition}
   {:template :quarantine
    :imports ["medicine"]}
   {:template :reactor
    :exports ["antimatter" "dark matter" "exotic matter"]}
   {:template :religion}
   {:template :shipyard}
   {:template :tourism
    :excludes #{:warzone}}
   {:template :warzone
    :imports ["explosives" "weapons"]
    :excludes #{:tourism}}
   {:template :weapons
    :exports ["explosives" "weapons"]}])

(defn gen-place [lang]
  (let [modules   (rand/pick-n 3 modules)
        exports   (rand/pick-n 3 goods)
        place     {:type :place
                   :name (str/capitalize (lang/gen-word lang))
                   :modules modules
                   :exports exports
                   :imports (set (rand/pick-n 2 (remove (set exports) goods)))
                   :language lang}
        merchants (repeatedly (rand-nth [3 3 4]) #(gen-character place :merchant))]
    (assoc place :merchants merchants)))

(defn- point-is-ok? [points {:keys [x y] :as point}]
  (and (<= 40 x 440) (<= 40 y 420)
       (every? #(>= (geom/distance % point) 55) (remove #{point} points))))

(defn- place-points []
  (let [start {:id (gen-id)
               :x (rand/rand-int* 120 360)
               :y (rand/rand-int* 120 360)
               :connections #{}}]
    (loop [points   {(:id start) start}
           frontier #{(:id start)}]
      (if (pos? (count frontier))
        (let [parent (get points (rand/rand-nth (vec frontier)))
              offset (rand/rand-int* 0 60)
              angles (->> (iterate #(+ % (rand/rand-int* 60 120)) (rand/rand-int* 0 60))
                          (take-while #(< % 360)))
              dists  (repeatedly (count angles) #(rand/rand-int* 55 80))
              kids   (map (partial geom/displace parent) angles dists)
              kids   (->> (filter (partial point-is-ok? (into (vals points) kids)) kids)
                          (map #(assoc % :id (gen-id) :connections #{(:id parent)})))]
          (recur
            (-> (update-in points [(:id parent) :connections] into (map :id kids))
                (merge (util/indexed-by :id kids)))
            (-> (disj frontier (:id parent))
                (into (map :id kids)))))
        points))))

(defn- should-connect? [p1 p2]
  (util/bucket (geom/distance p1 p2)
    [[70  (rand/chance 0.8)]
     [75  (rand/chance 0.6)]
     [80  (rand/chance 0.3)]
     [90  (rand/chance 0.1)]
     [100 (rand/chance 0.05)]
     [500 false]]))

(defn- make-extra-connections [points]
  (let [pairs (->> (comb/combinations (vals points) 2)
                   (sort-by #(geom/distance (first %) (second %)))
                   ;(take-while #(< (geom/distance (first %) (second %)) 75))
                   (filter #(should-connect? (first %) (second %))))]
    (reduce (fn [points [{id1 :id} {id2 :id}]]
              (-> points (update-in [id1 :connections] conj id2)
                         (update-in [id2 :connections] conj id1)))
            points pairs)))

(defn- spread-cultures [points]
  (loop [points points]
    (let [groups        (group-by (comp :language points) (keys points)) ; map culture => list of claimed IDs
          unclaimed-ids (set (get groups nil))]
      (if (empty? unclaimed-ids)
        points ; nowhere to expand to, so we must be done
        (let [groups (dissoc groups nil)
              group-frontiers ; map culture => "frontier" (set of unclaimed neighbor IDs)
              (->> (vals groups)
                   (map #(mapcat (comp :connections points) %))
                   (map #(set/intersection (set %) unclaimed-ids))
                   (zipmap (keys groups)))
              [group-to-expand frontier]
              (->> group-frontiers
                   (filter (comp pos? count val))    ; ignore groups with no unclaimed neighbors
                   (sort-by (comp count groups key)) ; groups with fewer points already claimed go first
                   (first))
              _ (assert (pos? (count frontier))) ; if we got this far, we must have somewhere to expand to
              expand-to-id (rand/rand-nth (vec frontier))]
          (recur (assoc-in points [expand-to-id :language] group-to-expand)))))))

(defn- points->places [points]
  (loop [points points
         places []
         names  #{}]
    (if-let [point (first points)]
      ;; need to make sure the name isn't already taken by an earlier generated place
      (let [place (rand/restrict #(not (contains? names (:name %))) gen-place (:language point))]
        (recur (rest points) (conj places (merge point place)) (conj names (:name place))))
      places)))

(defn gen-places []
  (let [;; 1. generate 5-6 distinct cultures
        cultures (repeatedly (rand/rand-int* 5 6) lang/gen-language)
        ;; 2. starting at the center of the map, build a network of points
        points   (place-points)
        ;; 3. make some random connections between nearby points
        points   (make-extra-connections points)
        ;; 4. "claim" one random point as the "hub" for each culture
        points   (reduce (fn [points [id culture]]
                           (update points id assoc :hub? true :language culture))
                         points
                         (zipmap (rand/shuffle (keys points)) cultures))
        ;; 5. iteratively spread cultures to unclaimed adjacent points until all points are claimed
        points   (spread-cultures points)
        ;; 6. transform all points into "places" (i.e. generate a name, merchants, etc)
        places   (util/indexed-by :id (points->places (vals points)))]
    ;; 7. use names, not IDs, as keys for connections
    ;; (TODO switch to using IDs as the primary keys for places throughout the game?)
    (map #(update % :connections (partial mapv (comp :name places))) (vals places))))
