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

(defn gen-description [thing]
  (case (:type thing)
    :char
      [[[:subject (:name thing)] " is a person from " [:link [:places (:home thing)]] ". "
        "They belong to the " (:culture thing) " culture. "
        (case (:role thing)
          :crew
            "They are a member of our crew."
          :merchant
            "They are a merchant."
          ;else
            "")]]
    ;else
      (:desc thing)))

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
      {:type :char
       :name
       (->> [(when-not nick-only? fname) (when nick (str "“" nick "”")) lname]
            (filter identity)
            (str/join " "))
       :shortname (or nick fname)
       :traits    (rand-nth [#{} #{} #{} #{:fighter} #{:mechanic} #{:medic}])
       :home      (:name place)
       :culture   (:name lang)}))
  ([place role]
    (assoc (gen-character place) :role role)))

(defn comma-list [items]
  (cond
    (empty? items) ""
    (= (count items) 1) (first items)
    (= (count items) 2) [(first items) " and " (second items)]
    :else (into (vec (interpose ", " (butlast items))) [", and " (last items)])))

(defn gen-place-desc [place]
  (let [are #(rand-nth ["are " "include "])]
    [[[:subject (:name place)] " is an inhabited "
      (rand-nth ["planetary " "solar " "star " ""]) "system. "
      "The " (rand-nth ["dominant" "majority"]) " culture is "
      (:name (:language place)) ". "
      (rand-nth ["Chief e" "E" "Key e" "Major e" "Notable e" "Primary e"])
      "xports " (are) (comma-list (map name (:exports place))) ". "
      (rand-nth ["Chief i" "I" "Key i" "Major i" "Notable i" "Primary i"])
      "mports " (are) (comma-list (map name (:imports place))) "."]
     ["Our merchant contacts here " (are)
      (comma-list (map #(-> [:link %]) (:merchants place))) "."]]))

(defn gen-place [lang]
  (let [exports   (rand/pick-n 3 goods)
        place     {:type :place
                   :name (str/capitalize (lang/gen-word lang))
                   :exports exports
                   :imports (set (rand/pick-n 2 (remove (set exports) goods)))
                   :language lang}
        merchants (vec (repeatedly 4 (partial gen-character place :merchant)))
        place     (assoc place :merchants merchants)]
    (assoc place :desc (gen-place-desc place))))

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
                        :border? (contains? borders (:name %))))
         ;; 9. return a "galaxy" mapping names to generated places
         (util/indexed-by :name))))
