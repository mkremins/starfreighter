(ns starfreighter.desc
  (:require [clojure.string :as str]))

;;; helpers for creating specific kinds of tags

(defn dest-link [thing]
  [:link [:places (:destination thing)]])

(defn home-link [char]
  [:link [:places (:home char)]])

(defn subj [thing]
  [:subject (:name thing)])

;;; main entry point

(defmulti describe :type)

(defmethod describe :cargo
  [{:keys [merchant pay-before pay-after seller], dest :destination :as item}]
  [["A shipment of " (subj item)
    (when dest [", bound for " (dest-link item)]) ". "
    (when merchant
      (if (pos? pay-before)
        ["We received " [:cash pay-before] " from " [:link merchant]
         " at " (home-link merchant) " for agreeing to deliver this cargo, and will receive "
         [:cash pay-after] " more when we drop it off at " dest "."]
        ["We will receive " [:cash pay-after] " in payment from " [:link merchant]
         " (a merchant at " (home-link merchant) ") when we drop it off at " dest ". "]))
    (when seller
      ["We bought this " (:name item) " from " [:link seller] " at " (home-link seller)
       " for " [:cash (:price item)] "."])]])

(defmethod describe :char [char]
  [[(subj char) " is a person from " (home-link char) ". "
    "They belong to the " (:culture char) " culture. "
    (case (:role char)
      :crew
        "They are a member of our crew."
      :merchant
        "They are a merchant."
      :passenger
        ["They are a passenger en route to " (dest-link char) "."]
      ;else
        "")]])

(defmethod describe :default [{:keys [desc]}] desc)

;;; pre-generate and cache :desc for places (to avoid issues with randomized bits being re-run)
;;; TODO use a seeded RNG (where seed is e.g. place name) and generate these on the fly instead?

(defn comma-list [items]
  (cond
    (empty? items) ""
    (= (count items) 1) (first items)
    (= (count items) 2) [(first items) " and " (second items)]
    :else (into (vec (interpose ", " (butlast items))) [", and " (last items)])))

(defn gen-place-desc [place]
  (let [are #(rand-nth ["are " "include "])]
    [[(subj place) " is an inhabited "
      (rand-nth ["planetary " "solar " "star " ""]) "system. "
      "The " (rand-nth ["dominant" "majority"]) " culture is "
      (:name (:language place)) ". "
      (rand-nth ["Chief e" "E" "Key e" "Major e" "Notable e" "Primary e"])
      "xports " (are) (comma-list (map name (:exports place))) ". "
      (rand-nth ["Chief i" "I" "Key i" "Major i" "Notable i" "Primary i"])
      "mports " (are) (comma-list (map name (:imports place))) "."]
     ["Our merchant contacts here " (are)
      (comma-list (map #(-> [:link %]) (:merchants place))) "."]]))
