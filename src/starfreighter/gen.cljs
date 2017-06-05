(ns starfreighter.gen
  (:require [clojure.string :as str]
            [starfreighter.util :as util]))

(defonce first-names
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

(defonce nicknames
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

(defonce single-letter-nicknames
  {"B" "Bee"
   "C" "Cee"
   "D" "Dee"
   "F" "Eff"
   "G" "Gee"
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

(defonce last-names
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

(defn gen-character []
  (let [fname (rand-nth first-names)
        lname (rand-nth last-names)
        nick  (gen-nickname fname lname)
        nick-only? (and nick (> (rand) (/ 3 4)))]
    {:name
     (->> [(when-not nick-only? fname) (when nick (str "“" nick "”")) lname]
          (filter identity)
          (str/join " "))
     :shortname (or nick fname)
     :traits    (rand-nth [#{} #{} #{} #{:fighter} #{:mechanic} #{:medic}])}))
