(ns starfreighter.gen
  (:require [clojure.math.combinatorics :as comb]
            [clojure.set :as set]
            [clojure.string :as str]
            [starfreighter.db :as db]
            [starfreighter.desc :as desc]
            [starfreighter.lang :as lang]
            [starfreighter.rand :as rand]
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
  (util/bucket (rand)
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
        weights (->> indexes reverse (map inc) (map #(* % % %)))
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
          real-pay    (* (rand-base-pay merchant) dist)
          split-pay?  (cond (db/stingy? merchant) false
                            (and (db/generous? merchant) (>= rep 0)) true
                            (<= rep 0)  false
                            (<= rep 10) (rand/weighted-choice {true 1 false 5})
                            (<= rep 20) (rand/weighted-choice {true 2 false 4})
                            (<= rep 30) (rand/weighted-choice {true 3 false 3})
                            (<= rep 40) (rand/weighted-choice {true 4 false 2})
                            (<= rep 50) (rand/weighted-choice {true 5 false 1}))]
      {:name        (rand-nth (:exports (db/current-place state)))
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
      :pay-before  (* (rand-base-pay passenger) dist))))

(defn gen-goods-for-sale [state]
  (when-let [seller (db/some-trusting-merchant state)]
    (let [stuff (db/rand-export state)]
      {:name   stuff
       :seller seller
       :price  (* 3 (rand-base-price seller))
       :counterfeit?
       (rand/weighted-choice
         (cond (db/trustworthy? seller) {true 1 false 4}
               (db/untrustworthy? seller) {true 4 false 1}
               :else {true 1 false 2}))})))

;;; places

(def goods
  ["antimatter" "carbon dioxide" "dark matter" "fertilizer" "grain" "medicine" "oxygen" "spice"])

(defn gen-place [lang]
  (let [exports   (rand/pick-n 3 goods)
        place     {:type :place
                   :name (str/capitalize (lang/gen-word lang))
                   :exports exports
                   :imports (set (rand/pick-n 2 (remove (set exports) goods)))
                   :language lang}
        merchants (repeatedly (rand-nth [3 3 4]) #(gen-character place :merchant))
        place     (assoc place :merchants merchants)]
    (assoc place :desc (desc/gen-place-desc place))))

(defn gen-places []
  (let [;; 1. generate a group of 3-7 places for each of 5 generated languages
        groups
        (for [lang (repeatedly 5 lang/gen-language)
              :let [group-size (rand/rand-int* 3 7)]]
          (rand/unique-runs-by :name group-size gen-place lang))
        name-groups
        (map (partial map :name) groups)
        ;; 2. within each group, connect the first place ("hub") to the others ("spokes")
        connections
        (reduce (fn [connections [hub & spokes]]
                  (assoc connections hub (set spokes)))
                {} name-groups)
        ;; 3. within each group, randomly make a few internal connections between spokes
        connections
        (reduce (fn [connections [_ & spokes]]
                  (let [pairs (comb/combinations spokes 2)]
                    (->> pairs
                         (rand/pick-n (rand/rand-int* 1 (dec (count pairs))))
                         (map (fn [[a b]] {a #{b}}))
                         (apply merge-with set/union connections))))
                connections name-groups)
        ;; 4. make a single spoke-to-spoke connection from each group to the next
        [connections borders]
        (loop [connections connections
               borders #{} ; remember which places already have an outgroup connection
                           ; (so we don't accidentally use the same place twice)
               group-pairs (partition 2 1 name-groups name-groups)]
          (if-let [[[_ & spokes-a] [_ & spokes-b]] (first group-pairs)]
            (let [spoke-a (rand-nth (remove borders spokes-a))
                  spoke-b (rand-nth (remove borders spokes-b))]
              (recur (update connections spoke-a (fnil conj #{}) spoke-b)
                     (into borders [spoke-a spoke-b])
                     (rest group-pairs)))
            [connections borders]))
        ;; 5. mirror all connections (so they'll work both ways)
        connections
        (reduce (fn [connections [origin destinations]]
                  (->> (for [dest destinations] {dest #{origin}})
                       (apply merge-with set/union connections)))
                connections connections)]
    (->> ;; 6. mark the first place in each group as a hub
         (map (fn [[hub & spokes]] (conj spokes (assoc hub :hub? true))) groups)
         ;; 7. flatten the list of groups of places into a flat list of places
         (reduce into [])
         ;; 8. update each place with the set of other places it's connected to,
         ;;    and whether or not it's on the border between two groups
         (map #(assoc % :connections (vec (get connections (:name %)))
                        :border? (contains? borders (:name %)))))))

;;; start-of-game setup

(defn gen-init-state []
  (let [places (gen-places)
        chars  (mapcat :merchants places)
        places (map #(update % :merchants (partial map :id)) places)
        place  (rand-nth places)
        crew   (repeatedly 2 #(gen-character place :crew))
        chars  (into chars crew)]
    {;; universe
     :chars     (util/indexed-by :id chars)
     :places    (util/indexed-by :name places)
     ;; your stuff
     :cargo     []
     :max-cargo 6
     :crew      (set (map :id crew))
     :max-crew  3
     :stats     {:cash 40 :ship 40}
     ;; coordinates
     :docked?   true
     :location  (:name place)
     :turn      0
     :recent-picks #{:offer-join-crew}} ; prevent init crew from "reminscing" about a place they haven't left yet
     ))
