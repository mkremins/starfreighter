(ns rand-cljc.core
  (:refer-clojure :exclude [rand
                            rand-int
                            rand-nth
                            random-sample
                            shuffle])
  #?(:cljs (:require [goog.array]))
  #?(:clj (:import [java.util Random ArrayList Collection Collections]))
  #?(:cljs (:import [goog.testing PseudoRandom])))

#?(:clj (set! *warn-on-reflection* true))

;; It would be nice if this could just be a single-function protocol,
;; but Java's shuffle wants a complete `Random` instance, not just a
;; nextFloat function or equivalent, so we can't build `shuffle`
;; directly on top of `-rand` if we want to use `Collections/shuffle`.

(defprotocol IRandom
  (-rand [this])
  (-shuffle [this coll]))

#?(:clj
   (extend-protocol IRandom
     Random
     (-rand [this] (.nextFloat this))
     (-shuffle [this coll]
       (let [arr (ArrayList. ^Collection coll)]
         (Collections/shuffle arr this)
         (vec arr)))))

#?(:cljs
   (extend-protocol IRandom
     PseudoRandom
     (-rand [this] (.random this))
     (-shuffle [this coll]
       (let [arr (to-array coll)]
         (goog.array/shuffle arr #(.random this))
         (vec arr)))))

(defn rng
  ([]
   #?(:clj (Random.)
      :cljs (PseudoRandom.)))
  ([seed]
   #?(:clj (Random. seed)
      :cljs (PseudoRandom. seed))))

(defn rand
  ([rng] (-rand rng))
  ([rng n] (* n (-rand rng))))

(defn rand-int
  [rng n]
  (int (* n (rand rng))))

(defn rand-nth
  [rng coll]
  (nth coll (rand-int rng (count coll))))

(defn random-sample
  ([rng prob]
     (filter (fn [_] (< (rand rng) prob))))
  ([rng prob coll]
     (filter (fn [_] (< (rand rng) prob)) coll)))

(defn shuffle
  [rng coll]
  (-shuffle rng coll))
