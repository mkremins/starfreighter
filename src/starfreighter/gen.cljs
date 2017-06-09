(ns starfreighter.gen
  (:require [clojure.math.combinatorics :as comb]
            [clojure.set :as set]
            [clojure.string :as str]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(def place-names
  ["Alicar"
   "Asphodel"
   "Becquerel"
   "Bifrost"
   "Cael"
   "Cantor"
   "Cemeranth"
   "Certainty"
   "Desperation"
   "Dolor"
   "Esgar"
   "Euclid"
   "Firth"
   "Fortune"
   "Gennar"
   "Hercae"
   "Hope"
   "Imatra"
   "Jaunt"
   "Judgment"
   "Kalima"
   "Laudan"
   "Loss"
   "Maurni"
   "Morrow"
   "Myrddin"
   "Nineveh"
   "Orrim"
   "Perihel"
   "Praxim"
   "Qasim"
   "Rigel"
   "Safirah"
   "Salvation"
   "Solitude"
   "Tapestry"
   "Torek"
   "Ueda"
   "Vega"
   "Vere"
   "Yelden"])

(def goods
  ["antimatter" "carbon dioxide" "dark matter" "fertilizer" "grain" "oxygen" "spice"])

(def first-names
  ["Adrien"
   "Aeryn"
   "Aland"
   "Arach"
   "Alex"
   "Alexander"
   "Allison"
   "Alseph"
   "Ash"
   "Audrey"
   "Bel"
   "Ben"
   "Benj"
   "Cait"
   "Caspian"
   "Cecil"
   "Chennar"
   "Dennett"
   "Emerek"
   "Emily"
   "Emmett"
   "Esteban"
   "Erek"
   "Federico"
   "Galen"
   "Hari"
   "Istel"
   "Jukka"
   "Kanen"
   "Karin"
   "Katarin"
   "Kellam"
   "Kellen"
   "Kellis"
   "Kerris"
   "Lexan"
   "Liem"
   "Mirrim"
   "Nat"
   "Nigel"
   "Nisha"
   "Orrim"
   "Rach"
   "Rem"
   "Remy"
   "Ren"
   "Sarah"
   "Sev"
   "Silas"
   "Stellen"
   "Taryn"
   "Vekh"
   "Venn"
   "Vincent"
   "Virgil"
   "Viv"
   "Vivian"
   "Yvain"
   "Zed"])

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

(def last-names
  ["Alander"
   "Anderssen"
   "Burke"
   "Calder"
   "Campos"
   "Chandrasekhar"
   "Choi"
   "Clarke"
   "de Veldt"
   "Denekov"
   "Despard"
   "Everett"
   "Farb"
   "Feld"
   "Gaspard"
   "Ismail"
   "Jemalya"
   "Kawamoto"
   "Konno"
   "Kopit"
   "Leid"
   "Madarov"
   "Marek"
   "McElroy"
   "Nakamura"
   "Nesbit"
   "North"
   "Omakesh"
   "Polyani"
   "Prakash"
   "Price"
   "Raum"
   "Reeves"
   "Reid"
   "Sandoval"
   "Seldon"
   "Seltssen"
   "Stern"
   "Stiles"
   "Tal"
   "Udenai"
   "Vadhyam"
   "Yomi"])

(defn gen-nickname [fname lname]
  (util/bucket (rand)
    [[.9  nil]
     [.95 (rand-nth nicknames)]
     [ 1  (get single-letter-nicknames (first fname) (first fname))]]))

(defn gen-character [place]
  (let [fname (rand-nth (conj (:common-first-names place) (rand-nth first-names)))
        lname (rand-nth (conj (:common-last-names place) (rand-nth last-names)))
        nick  (gen-nickname fname lname)
        nick-only? (and nick (rand/chance 1 4))]
    {:name
     (->> [(when-not nick-only? fname) (when nick (str "“" nick "”")) lname]
          (filter identity)
          (str/join " "))
     :shortname (or nick fname)
     :traits    (rand-nth [#{} #{} #{} #{:fighter} #{:mechanic} #{:medic}])
     :home      (:name place)}))

(defn gen-place []
  (let [exports (rand/pick-n 3 goods)
        place {:name (rand-nth place-names)
               :common-first-names (rand/pick-n 8 first-names)
               :common-last-names (rand/pick-n 5 last-names)
               :exports exports
               :imports (set (rand/pick-n 2 (remove (set exports) goods)))}]
    (assoc place :merchants (vec (repeatedly 4 (partial gen-character place))))))

(defn gen-places []
  (let [;; 1. generate a bunch of places
        places (take 25 (util/distinct-by :name (repeatedly gen-place)))
        names  (map :name places)
        ;; 2. sort the places into "hubs" and "spokes"
        hubs   (rand/pick-n 5 names)
        spokes (remove (set hubs) names)
        ;; 3. decide how many spokes each hub will have
        spoke-counts (rand-nth [[3 3 4 5 5] [3 4 4 4 5] [2 4 4 5 5] [2 3 4 5 6]])
        ;; 4. sort the places into "neighborhoods" of one hub and 2-5 spokes each
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
        ;; 5. in each neighborhood, randomly make a few internal connections between spokes
        connections
        (reduce (fn [connections [_ spokes]]
                  (let [pairs (comb/combinations spokes 2)]
                    (->> pairs
                         (rand/pick-n (max 1 (rand-int (count pairs))))
                         (map (fn [[a b]] {a #{b}}))
                         (apply merge-with set/union connections))))
                neighborhoods neighborhoods)
        ;; 6. make a single spoke-to-spoke connection from each neighborhood to the next
        connections
        (reduce (fn [connections [[_ spokes-a] [_ spokes-b]]]
                  (let [spoke-a (rand-nth (vec spokes-a))
                        spoke-b (rand-nth (vec spokes-b))]
                    (update connections spoke-a (fnil conj #{}) spoke-b)))
                connections
                (partition 2 1 neighborhoods neighborhoods))
        ;; 7. mirror all connections (so they'll work both ways)
        connections
        (reduce (fn [connections [origin destinations]]
                  (->> (for [dest destinations] {dest #{origin}})
                       (apply merge-with set/union connections)))
                connections connections)]
    (->> places
         ;; 8. update each place with the set of other places it's connected to,
         ;;    and whether or not it's considered a hub
         (map #(assoc % :common-destinations (vec (get connections (:name %)))
                        :hub? (contains? (set hubs) (:name %))))
         ;; 9. return a "galaxy" mapping names to generated places
         (zipmap names))))
