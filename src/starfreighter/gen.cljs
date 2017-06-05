(ns starfreighter.gen
  (:require [clojure.string :as str]
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
        nick-only? (and nick (> (rand) (/ 3 4)))]
    {:name
     (->> [(when-not nick-only? fname) (when nick (str "“" nick "”")) lname]
          (filter identity)
          (str/join " "))
     :shortname (or nick fname)
     :traits    (rand-nth [#{} #{} #{} #{:fighter} #{:mechanic} #{:medic}])
     :home      (:name place)}))

(defn gen-place [name]
  (let [exports (rand/pick-n 3 goods)
        place {:name name
               :common-first-names (rand/pick-n 8 first-names)
               :common-last-names (rand/pick-n 5 last-names)
               :common-destinations (rand/pick-n 5 (remove #{name} place-names))
               :exports exports
               :imports (set (rand/pick-n 2 (remove (set exports) goods)))}]
    (assoc place :merchants (vec (repeatedly 4 (partial gen-character place))))))

(defn gen-places []
  (zipmap place-names (map gen-place place-names)))
