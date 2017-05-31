(ns starfreighter.gen)

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
   "Caspian"
   "Cecil"
   "Chennar"
   "Dennett"
   "Emerek"
   "Emmett"
   "Erek"
   "Federico"
   "Galen"
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
   "Mirrim"
   "Nat"
   "Nigel"
   "Nisha"
   "Orrim"
   "Rach"
   "Ren"
   "Sarah"
   "Silas"
   "Stellen"
   "Taryn"
   "Vekh"
   "Vincent"
   "Virgil"
   "Yvain"
   "Zee"])

(defonce last-names
  ["Alander"
   "Anderssen"
   "Calder"
   "Campos"
   "Chandrasekhar"
   "Choi"
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
   "Seltssen"
   "Stern"
   "Stiles"
   "Tal"
   "Udenai"
   "Vadhyam"
   "Yomi"])

(defn gen-name []
  (str (rand-nth first-names) " " (rand-nth last-names)))

(defn gen-crew-member []
  {:name (gen-name)
   :traits (rand-nth [#{} #{} #{} #{:fighter} #{:mechanic} #{:medic}])})
