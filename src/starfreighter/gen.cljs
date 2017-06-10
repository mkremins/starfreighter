(ns starfreighter.gen
  (:require [clojure.math.combinatorics :as comb]
            [clojure.set :as set]
            [clojure.string :as str]
            [starfreighter.lang :as lang]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(def goods
  ["antimatter" "carbon dioxide" "dark matter" "fertilizer" "grain" "medicine" "oxygen" "spice"])

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

(defn gen-character
  ([place]
    (let [lang (:language place)
          [fname lname] (map str/capitalize (rand/unique-runs 2 lang/gen-word lang))
          nick (gen-nickname fname lname)
          nick-only? (and nick (rand/chance 1 4))]
      {:name
       (->> [(when-not nick-only? fname) (when nick (str "“" nick "”")) lname]
            (filter identity)
            (str/join " "))
       :shortname (or nick fname)
       :traits    (rand-nth [#{} #{} #{} #{:fighter} #{:mechanic} #{:medic}])
       :home      (:name place)}))
  ([place role]
    (assoc (gen-character place) :role role)))

(defn gen-place [lang]
  (let [exports (rand/pick-n 3 goods)
        place {:name (str/capitalize (lang/gen-word lang))
               :exports exports
               :imports (set (rand/pick-n 2 (remove (set exports) goods)))
               :language lang}]
    (assoc place :merchants (vec (repeatedly 4 (partial gen-character place :merchant))))))

(defn gen-places []
  (let [;; 1. generate "cultures" (actually just languages for now)
        langs  (repeatedly 5 lang/gen-language)
        ;; 2. generate a bunch of places (5 for each "culture")
        places (reduce into [] (repeatedly 5 #(map gen-place langs)))
        names  (map :name places)
        ;; 3. sort the places into "hubs" and "spokes"
        hubs   (rand/pick-n 5 names)
        spokes (remove (set hubs) names)
        ;; 4. decide how many spokes each hub will have
        spoke-counts (rand-nth [[3 3 4 5 5] [3 4 4 4 5] [2 4 4 5 5] [2 3 4 5 6]])
        ;; 5. sort the places into "neighborhoods" of one hub and 2-5 spokes each
        neighborhoods
        (loop [neighborhoods {}
               hubs-with-spoke-counts (zipmap hubs spoke-counts)
               spokes spokes]
          (if-let [[hub spoke-count] (first hubs-with-spoke-counts)]
            (let [[spokes-to-use remaining-spokes] (split-at spoke-count spokes)]
              (recur (assoc neighborhoods hub (set spokes-to-use))
                     (rest hubs-with-spoke-counts)
                     remaining-spokes))
            neighborhoods))
        ;; 6. in each neighborhood, randomly make a few internal connections between spokes
        connections
        (reduce (fn [connections [_ spokes]]
                  (let [pairs (comb/combinations spokes 2)]
                    (->> pairs
                         (rand/pick-n (max 1 (rand-int (count pairs))))
                         (map (fn [[a b]] {a #{b}}))
                         (apply merge-with set/union connections))))
                neighborhoods neighborhoods)
        ;; 7. make a single spoke-to-spoke connection from each neighborhood to the next
        connections
        (reduce (fn [connections [[_ spokes-a] [_ spokes-b]]]
                  (let [spoke-a (rand-nth (vec spokes-a))
                        spoke-b (rand-nth (vec spokes-b))]
                    (update connections spoke-a (fnil conj #{}) spoke-b)))
                connections
                (partition 2 1 neighborhoods neighborhoods))
        ;; 8. mirror all connections (so they'll work both ways)
        connections
        (reduce (fn [connections [origin destinations]]
                  (->> (for [dest destinations] {dest #{origin}})
                       (apply merge-with set/union connections)))
                connections connections)]
    (->> places
         ;; 9. update each place with the set of other places it's connected to,
         ;;    and whether or not it's considered a hub
         (map #(assoc % :common-destinations (vec (get connections (:name %)))
                        :hub? (contains? (set hubs) (:name %))))
         ;; 10. return a "galaxy" mapping names to generated places
         (zipmap names))))
