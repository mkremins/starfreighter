(ns starfreighter.desc
  (:require [clojure.string :as str]))

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
