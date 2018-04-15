(ns starfreighter.lang
  (:refer-clojure :exclude [rand rand-int rand-nth shuffle])
  (:require [clojure.string :as str]
            [starfreighter.rand :as rand :refer [rand-nth]]))

(def possible-expressions
  {;; long vowels
   \ā ["ae" "ai" "ay" "ei" "ey" "ue"]
   \ē ["ea" "ee" "i" "ie" "y"]
   \ī ["ai" "i" "y"]
   \ō ["o" "oe"]
   \ū ["eu" "oo" "u"]
   ;; short vowels
   \ă ["a"]
   \ĕ ["e"]
   \ĭ ["i" "y"]
   \ŏ ["a" "aa" "au" "aw" "o"]
   \ŭ ["u"]
   ;; other vowels
   ;\ä ["a" "aa" "au" "aw" "o"]
   ;\ô ["a" "aa" "au" "aw" "o"]
   ;missing "uh" as in "put"
   \ʊ ["au" "ou" "ow"]
   \ə ["a" "e"]
   ;; consonants
   \B ["b" "v"]
   \F ["f" "ph" "v"]
   \K ["c" "ch" "k" "kh" "q"]
   \J ["j" "y"]
   \ŋ ["ng"]
   \θ ["th"]
   \ð ["th"]
   \ʃ ["sh"]
   \ʒ ["ch" "s" "sh" "z" "zh"]})

(def all-vowels
  [;; long vowels
   \ā ; day, pain
   \ē ; weed
   \ī ; my, rice
   \ō ; foe, row
   \ū ; truth
   ;; short vowels
   \ă ; bad, cat, ran
   \ĕ ; bet
   \ĭ ; bit, cIty, sit
   \ŏ ; not, wasp
   \ŭ ; enOUgh, run, up
   ;; other vowels
  ;\ä ; fAther, palm (merged with ŏ for now)
  ;\ô ; caught, law (merged with ŏ for now)
      ; put (missing for now)
   \ʊ ; abOUt (actually using the wrong IPA symbol – full is aʊ)
   \ə ; About, Afraid, commA, sofA
   ])

(def all-stops
  ;; TODO technically m & n aren't stops, but they fit better here than anywhere else rn
  {\B 1
   \d 2
   \g 1
   \K 2
   \m 1
   \n 1
   \p 1
   \t 2})

(def all-liquids
  {\J 1
   \l 3
   \r 3
   \w 1})

(def all-sibilants
  {\F 1
   \s 8
   \ʃ 1
   \θ 1
   \ʒ 1})

(def all-consonants
  (reduce into [\h] (map keys [all-stops all-liquids all-sibilants])))

(def consonant? (partial contains? (set all-consonants)))
(def vowel?     (partial contains? (set all-vowels)))
(def liquid?    (partial contains? (set all-liquids)))
(def sibilant?  (partial contains? (set all-sibilants)))
(def stop?      (partial contains? all-stops))

(defn gen-consonant-cluster [stops liquids sibilants]
  (let [r (rand/rand)]
    (cond
      (< r 0.5)   (rand-nth stops)
      (< r 0.625) (rand-nth liquids)
      (< r 0.75)  (rand-nth sibilants)
      (< r 0.8)   (str (rand-nth stops) (rand-nth liquids))
      (< r 0.85)  (str (rand-nth stops) (rand-nth stops))
      (< r 0.9)   (str (rand-nth sibilants) (rand-nth liquids))
      :else       (let [all (reduce into [] [stops liquids sibilants])]
                    (str (rand-nth all) (rand-nth all))))))

(defn legal-at-start? [chunk]
  (let [chunk (str chunk)]
    (or (= (count chunk) 1)
        (let [[c1 c2] (take 2 chunk)]
          (or (vowel? c1)
              (liquid? c2)
              (and (sibilant? c1) (stop? c2)))))))

(defn legal-at-end? [chunk]
  (let [chunk (str chunk)]
    (or (= (count chunk) 1)
        (let [[c1 c2] (take-last 2 chunk)]
          (or (vowel? c2) ; vowel
              (= c1 c2)   ; duplicated consonant
              (= c2 \t)   ; (any consonant)+T
              (= c2 \z)   ; (any consonant)+Z
              (and (not= c1 \z) (= c2 \s)) ; (any consonant but Z)+S
              (#{"mB" "mn" "mp" "nd" "ng" "nK"} (str c1 c2)) ; valid nasal+stop combo
              )))))

(defn gen-init-syllable [con-clusters vowels]
  (let [init-vowel? (rand/chance 1 3)]
    (str (when init-vowel? (rand-nth vowels))
         (rand-nth (cond->> con-clusters (not init-vowel?) (filter legal-at-start?)))
         (rand-nth vowels))))

(defn gen-final-syllable [con-clusters vowels]
  (str (rand-nth con-clusters)
       (rand-nth vowels)
       (when (rand/chance 2 3) (rand-nth (filter legal-at-end? con-clusters)))))

(defn gen-orthography [stops liqs sibs vows]
  (let [phones (->> (reduce into [] [stops liqs sibs vows])
                    (filter (partial contains? possible-expressions)))]
    (->> phones
         (map (fn [phone]
                (let [possible (possible-expressions phone)
                      n (if (and (> (count possible) 1) (rand/chance 1 3)) 2 1)]
                  (vec (rand/pick-n n possible)))))
         (zipmap phones))))

(defn express [phones orthography]
  (str/join (map #(or (some-> % orthography rand-nth) %) phones)))

(defn gen-word [{:keys [inits finals orthography]}]
  (express (str (rand-nth inits) (rand-nth finals)) orthography))

(defn gen-language []
  (let [stops  (rand/unique-runs (rand/rand-int* 4 8) rand/weighted-choice all-stops)
        liqs   (distinct (repeatedly 4 #(rand/weighted-choice all-liquids)))
        sibs   (distinct (repeatedly 4 #(rand/weighted-choice all-sibilants)))
        vows   (rand/unique-runs (rand/rand-int* 5 8) rand-nth all-vowels)
        ccs    (rand/unique-runs 12 gen-consonant-cluster stops liqs sibs)
        inits  (rand/unique-runs 9 gen-init-syllable ccs vows)
        finals (rand/unique-runs 9 gen-final-syllable ccs vows)
        lang   {:inits inits
                :finals finals
                :orthography (gen-orthography stops liqs sibs vows)
                :consonant-clusters ccs
                :stops stops
                :liquids liqs
                :sibilants sibs
                :vowels vows}]
    (assoc lang :name (str/capitalize (gen-word lang)))))
