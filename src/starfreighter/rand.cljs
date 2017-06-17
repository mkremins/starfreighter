(ns starfreighter.rand
  "Various utilities for working with randomness and generator fns."
  (:refer-clojure :exclude [rand rand-int rand-nth shuffle])
  (:require [rand-cljc.core :as rng]
            [starfreighter.util :as util]))

;;; rebindable RNG stuff

(def ^:dynamic *rng*
  "The current RNG for the entire game. For controllable randomness, can be
  rebound to an RNG constructed with an explicit seed."
  (rng/rng))

(def rng
  "Re-export the `rand-cljc.core/rng` RNG constructor fn so that consumers of
  this namespace don't need to import it separately."
  rng/rng)

(defn rand
  ([] (rng/rand *rng*))
  ([n] (rng/rand *rng* n)))

(defn rand-int [n]
  (rng/rand-int *rng* n))

(defn rand-nth [coll]
  (rng/rand-nth *rng* coll))

(defn shuffle [coll]
  (rng/shuffle *rng* coll))

;;; actually novel fns

(defn approx-normal-rand
  "Returns approximately normally distributed random numbers between 0 and 1.
  Uses the central limit theorem (averaging `n` uniform random variates, where
  `n` defaults to 6)."
  ([] (approx-normal-rand 6))
  ([n] (/ (reduce + (repeatedly n rand)) n)))

(defn biased-rand-nth
  "Like `clojure.core/rand-nth`, but biased towards earlier items in `pool`.
  Borrowed from [Martin O'Leary](http://mewo2.com/notes/naming-language)."
  [pool]
  (let [r (rand)
        r (* r r)] ; square to bias towards the low end
    (nth pool (js/Math.floor (* r (count pool))))))

(defn chance
  "Randomly returns either true (with probability `n`) or false (with
  probability `(- 1 n)`). If passed two arguments, will have an `m` in `n`
  chance of returning true."
  ([n] (< (rand) n))
  ([m n] (< (rand) (/ m n))))

(defn pick-n
  "Randomly selects `n` items from `pool`, without replacement."
  [n pool]
  (take n (shuffle pool)))

(defn pick-n-with-replacement
  "Randomly selects `n` items from `pool`, with replacement."
  [n pool]
  (repeatedly n #(rand-nth pool)))

(defn rand-int*
  "Like `clojure.core/rand-int`, but includes `n` in the range of possible
  outputs. Can also be passed two arguments to get a random integer between
  `lo` and `hi` (both inclusive)."
  ([n] (rand-int* 0 n))
  ([lo hi] (+ lo (rand-int (- (inc hi) lo)))))

(defn restrict
  "Repeatedly runs `gen`, a generator fn, until the output passes `pred`, then
  returns the passing output. Extra `args`, if provided, are passed to `gen`."
  [pred gen & args]
  (loop [x (apply gen args)]
    (if (pred x) x (recur (apply gen args)))))

(defn restricted
  "Returns a generator fn that behaves like `gen`, but will only output values
  that pass `pred`. Uses `restrict` internally."
  [pred gen]
  #(apply restrict pred gen %&))

(defn shuffle-cycle
  "Returns an infinite lazy sequence of repetitions of the items in `pool`
  (much like `clojure.core/cycle`), but randomizes the order of the items on
  each iteration of the cycle (much like `clojure.core/shuffle`).

  Useful when you have a finite pool to choose from and need an indefinite
  number of items, but want to avoid repetition as much as possible. The items
  in the pool will show up in a random order, but you're always guaranteed to
  see each item exactly once before any of them are repeated."
  [pool]
  (when-let [pool (seq pool)]
    (lazy-seq (concat (shuffle pool) (shuffle-cycle pool)))))

(defn unique-runs
  "Repeatedly runs `gen`, a generator fn, until exactly `n` unique outputs have
  been generated. Extra `args`, if provided, are passed to `gen`."
  [n gen & args]
  (take n (distinct (repeatedly #(apply gen args)))))

(defn unique-runs-by
  "Like a combination of `unique-runs` and the `medley.core/distinct-by` fn
  from [Medley](https://github.com/weavejester/medley). Repeatedly runs `gen`,
  a generator fn, until exactly `n` unique outputs have been generated, using
  `f` to determine uniqueness. Extra `args`, if provided, are passed to `gen`."
  [f n gen & args]
  (take n (util/distinct-by f (repeatedly #(apply gen args)))))

(defn weighted-choice
  "Randomly selects a key from the map `choices-with-weights`. The likelihood
  that a given key will be selected is determined by its weight, i.e. its
  associated non-negative numeric value in the map."
  [choices-with-weights]
  (assert (not (empty? choices-with-weights)))
  (let [choices-with-thresholds
        (reduce (fn [choices-with-thresholds [choice weight]]
                  (assert (>= weight 0))
                  (let [threshold (+ weight (or (some-> choices-with-thresholds peek val) 0))]
                    (conj choices-with-thresholds [choice threshold])))
                [] (seq choices-with-weights))
        r (* (rand) (val (peek choices-with-thresholds)))]
    (->> choices-with-thresholds (filter #(< r (val %))) first key)))
