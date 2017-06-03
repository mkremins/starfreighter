(ns starfreighter.util)

(defn bucket
  "Given a numerical `value` and a seq of pairs `[threshold bucket]`, returns
  the value of `bucket` for the first pair where `value` <= `threshold`."
  [value threshold-bucket-pairs]
  (->> threshold-bucket-pairs
       (drop-while (fn [[threshold _]] (> value threshold)))
       first second))

(defn sift [pred coll]
  [(filter pred coll) (remove pred coll)])
