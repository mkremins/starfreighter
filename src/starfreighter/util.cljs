(ns starfreighter.util)

(defn bucket
  "Given a numerical `value` and a seq of pairs `[threshold bucket]`, returns
  the value of `bucket` for the first pair where `value` <= `threshold`."
  [value threshold-bucket-pairs]
  (->> threshold-bucket-pairs
       (drop-while (fn [[threshold _]] (> value threshold)))
       first second))

(defn clamp [value lo hi]
  (-> value (max lo) (min hi)))

;; from https://github.com/weavejester/medley
(defn distinct-by
  "Returns a lazy sequence of the elements of coll, removing any elements that
  return duplicate values when passed to a function f."
  ([f]
   (fn [rf]
     (let [seen (volatile! #{})]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result x]
          (let [fx (f x)]
            (if (contains? @seen fx)
              result
              (do (vswap! seen conj fx)
                  (rf result x)))))))))
  ([f coll]
   (let [step (fn step [xs seen]
                (lazy-seq
                 ((fn [[x :as xs] seen]
                    (when-let [s (seq xs)]
                      (let [fx (f x)]
                        (if (contains? seen fx)
                          (recur (rest s) seen)
                          (cons x (step (rest s) (conj seen fx)))))))
                  xs seen)))]
     (step coll #{}))))

(defn error [& strs]
  (throw (js/Error. (apply str strs))))

(defn indexed-by
  "Returns a map from `(f item)` to `item` for every `item` in `coll`."
  [f coll]
  (zipmap (map f coll) coll))

(defn pow-scale
  "Converts the value `n` from a (presumably linear) scale `[old-min old-max]`
  to the new scale `[new-min new-max]`, using a power function with exponent
  `exp` to perform the conversion."
  [exp n [old-min old-max] [new-min new-max]]
  (let [old-range (- old-max old-min)
        new-range (- new-max new-min)]
    (-> n (- old-min) (/ old-range) (js/Math.pow exp) (* new-range) (+ new-min))))

(defn sift [pred coll]
  [(filter pred coll) (remove pred coll)])
