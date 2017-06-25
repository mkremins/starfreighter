(ns starfreighter.desc
  (:refer-clojure :exclude [rand rand-int rand-nth shuffle])
  (:require [clojure.string :as str]
            [starfreighter.rand :as rand :refer [rand-nth]]))

;;; text cleanup/normalization helpers

(defn tag? [span]
  (and (sequential? span) (keyword? (first span))))

(defn flatten-but-preserve-tags [text]
  (if (sequential? text)
    (reduce (fn [text span]
              (cond (tag? span) (conj text span)
                    (sequential? span) (into text (flatten-but-preserve-tags span))
                    :else (conj text span)))
            [] text)
    [(str text)]))

(defn append-span [text span]
  (case [(tag? span) (empty? text)]
    [true true]   [span " "]
    [true false]  (into (pop text) [(str (peek text) " ") span " "])
    [false true]  (let [span (str span)] (if (empty? span) [] [(str span)]))
    [false false] (conj (pop text) (str (peek text) span))))

(defn consolidate-strings [text]
  (reduce append-span [] text))

(defn normalize-span [span]
  (if (string? span)
    (-> span
        ;; "fancy" ellipses
        (str/replace "..." "…")
        ;; fix whitespace around end-of-word punctuation
        (str/replace #"\s*([\.\?!,;:…])\s*"
          (fn [[_ punct]] (str punct " ")))
        ;; still allow interrobangs to exist tho
        (str/replace "? !" "?!")
        ;; consolidate runs of whitespace into a single space
        (str/replace #"\s+" " ")
        ;; ensure proper capitalization at the start of new sentences
        (str/replace #"([\.\?!]) ([a-z])"
          (fn [[_ punct lower]] (str punct " " (str/capitalize lower)))))
    span))

(defn normalize-first [span]
  (if (string? span)
    (-> (str/triml span)
        ;; ensure proper capitalization at the start of the first sentence
        (str/replace #"^([a-z])"
          (fn [[_ lower]] (str/capitalize lower))))
    span))

(defn normalize-last [span]
  ;; the last span in a text should always be a string (for closing punctuation)
  (assert (string? span))
  (str/trimr span))

(defn normalize* [text]
  (assert (pos? (count text)))
  (if (= (count text) 1)
    [(-> text first normalize-first normalize-last normalize-span)]
    (let [fst (first text)
          fst (cond-> fst (string? fst) normalize-first)
          lst (normalize-last (last text))]
      (mapv normalize-span (concat [fst] (butlast (rest text)) [lst])))))

(def normalize
  (comp normalize* consolidate-strings flatten-but-preserve-tags))

;;; helpers

(defn comma-list [items]
  (let [items (remove empty? items)]
    (cond
      (empty? items) ""
      (= (count items) 1) (first items)
      (= (count items) 2) [(first items) " and " (second items)]
      :else (into (vec (interpose ", " (butlast items))) [", and " (last items)]))))

(defn o [opt]
  (when (rand/chance 0.5) opt))

(defn r [& opts]
  (rand/rand-nth opts))

(defn culture-link [thing]
  [:link [:cultures (:culture thing)]])

(defn dest-link [thing]
  [:link [:places (:destination thing)]])

(defn home-link [char]
  [:link [:places (:home char)]])

(defn subj [thing]
  [:subject (:name thing)])

;;; modules

(defmulti describe-module :template)

(defmethod describe-module :agriculture [_]
  [(rand-nth ["Agriculture" "Farming"]) " is a"
   (rand-nth ["n important" " key" " major"]) " industry here."])

(defmethod describe-module :aristocracy [_]
  "An aristocratic class of hereditary nobility holds a substantial amount of political power here.")

(defmethod describe-module :corruption [_]
  "This system’s local government has developed a reputation for corruption.")

(defmethod describe-module :diplomacy [_]
  ["This system is widely recognized as an important diplomatic hub, "
   "where representatives of many different cultures can come together and meet."])

(defmethod describe-module :gambling [_]
  ["Gambling is legal here"
   (when (rand/chance 0.5)
     [", " (rand-nth ["albeit" "and" "but"]) " "
      (rand-nth ["largely unregulated" "strictly regulated" "tightly regulated"])
      (rand-nth ["" " by the government"])])
   "."])

(defmethod describe-module :hospital [_]
  ["This system is known for its especially well-equipped "
   (rand-nth ["healthcare" "hospital" "medical"]) " facilities."])

(defmethod describe-module :independence [_]
  (let [movement [(rand-nth ["" "growing " "powerful "]) "system-wide independence movement"]]
    (rand-nth
      [["A " movement " enjoys a good deal of support from the populace here."]
       ["Many residents of this system " (rand-nth ["are" "have become"]) " "
        (rand-nth ["involved with" "sympathetic to"]) " a " movement "."]])))

(defmethod describe-module :megacorp [_]
  ["Much of this system is controlled by a single megacorporation, "
   "which employs at least half of the system’s residents in some capacity or another."])

(defmethod describe-module :mining [_]
  [(rand-nth ["Asteroid m" "M"]) "ining is a"
   (rand-nth ["n important" " key" " major"]) " industry here."])

(defmethod describe-module :neutral [_]
  [(rand-nth ["By treaty, this" "Legally, this" "This"]) " system is "
   (rand-nth ["" "intended to be"]) " " (rand-nth ["" "governed as"])
   " a neutral zone, " (rand-nth ["" "officially "]) "unaffiliated with "
   "any of the established multi-system powers."])

(defmethod describe-module :piracy [_]
  (rand-nth
    [["This system is known as a haven for "
      (comma-list
        ["pirates"
         (when (rand/chance 0.5) "smugglers")
         (when (rand/chance 0.5)
           ["other " (rand-nth ["spacefarers" "spacers" "starfarers" "voidfarers"]) " of ill repute"])])
      "."]
     ["Piracy is "
      (rand-nth [["a major " (rand-nth ["issue" "problem"])]
                 "commonplace" "prevalent" "rampant" "widespread"])
      " here."]]))

(defmethod describe-module :prohibition [_]
  (let [substances [(rand-nth ["" "many kinds of "]) "intoxicating substances"]]
    (rand-nth
      [["The government of this system has imposed a prohibition "
        "on the import, manufacturing, and consumption of " substances "."]
       ["The import, manufacturing, and consumption of " substances " is prohibited here."]])))

(defmethod describe-module :quarantine [_]
  ["This system is currently struggling to "
   (rand-nth ["contain" "deal with" "fend off"]) " "
   (rand-nth ["a" "an outbreak of a" "the spread of a"])
   (rand-nth ["n especially" " particularly"]) " virulent "
   (rand-nth ["contagion" "illness" "infection" "infectious disease" "plague"]) "."])

(defmethod describe-module :reactor [_]
  ["The synthesis of exotic forms of matter is a"
   (rand-nth ["n important" " key" " major"]) " industry here."])

(defmethod describe-module :religion [_]
  "Residents of this system have a reputation for being highly religious.")

(defmethod describe-module :shipyard [_]
  "This system is known for its shipyards.")

(defmethod describe-module :tourism [_]
  (rand-nth
    [["Tourism is a" (rand-nth ["n important" " key" " major"]) " industry here."]
     ["This system is a popular " (rand-nth ["destination for tourists" "tourist destination"]) "."]]))

(defmethod describe-module :warzone [_]
  "This system is on the front lines of an ongoing war.")

(defmethod describe-module :weapons [_]
  [(rand-nth ["Arms manufacturing" "Weapons manufacturing" "The manufacturing of weapons and explosives"])
   " is a" (rand-nth ["n important" " key" " major"]) " industry here."])

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
    "They belong to the " (culture-link char) " culture. "
    (case (:role char)
      :crew
        "They are a member of our crew."
      :merchant
        "They are a merchant."
      :passenger
        ["They are a passenger en route to " (dest-link char) "."]
      ;else
        "")]])

(defmethod describe :culture [culture]
  [[(subj culture) " is a distinct culture in this region of the galaxy."]])

(defmethod describe :place [place]
  (binding [rand/*rng* (rand/rng (hash (:name place)))] ; ensure we pick the same text variations every time
    (let [are #(rand-nth ["are " "include "])]
      [[(subj place) " is an inhabited "
        (rand-nth ["planetary " "solar " "star " ""]) "system. "
        "The " (rand-nth ["dominant" "majority"]) " culture is "
        (culture-link place) ". "
        (rand-nth ["Chief e" "E" "Key e" "Major e" "Notable e" "Primary e"])
        "xports " (are) (comma-list (map name (:exports place))) ". "
        (rand-nth ["Chief i" "I" "Key i" "Major i" "Notable i" "Primary i"])
        "mports " (are) (comma-list (map name (:imports place))) "."]
       ["Our merchant contacts here " (are)
        (comma-list (map #(-> [:link [:chars %]]) (:merchants place))) "."]
       [(interpose " " (mapv describe-module (:modules place)))]])))

(defmethod describe :default [{:keys [desc]}] desc)
