(ns starfreighter.util)

(defn sift [pred coll]
  [(filter pred coll) (remove pred coll)])
