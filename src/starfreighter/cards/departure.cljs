(ns starfreighter.cards.departure
  (:require [starfreighter.db :as db]
            [starfreighter.desc :as desc :refer [o r]]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(def cards [

{:id :depart-high-ship
 :prereq #(>= (:ship %) 60)
 :weight #(util/pow-scale 3 (:ship %) [50 100] [0 50])
 :gen (fn [state]
        (let [as-you
              ["as you "
               (r (r "depart" "embark" "leave" "push off" "set out")
                  [(r "depart from" "leave" "pull away from" "pull clear of" "pull free of" "set out from"
                      "take your leave of")
                   " the " (o (o (:from (:travel state)))) " " (r (desc/port) "system")])
               (o [" for " (:to (:travel state))])]
              the-ship
              ["the " (o "ship’s ") "engine " (r "hums" "purrs") " "
               (r "gently" "quietly" "smoothly" "softly") (o " along")]]
          {:type :info
           :text [(r [as-you ", " the-ship] [the-ship " " as-you]) "."]
           :ok [[:depart]]}))}

{:id :depart-normally
 :weight (constantly 1)
 :gen (fn [state]
        {:type :info
         :text ["Your departure from " (:from (:travel state)) " "
                (r "goes off without a hitch" "is uneventful") "."]
         :ok [[:depart]]})}

{:id :depart-low-ship
 :prereq #(<= (:ship %) 40)
 :weight #(util/pow-scale 3 (:ship %) [50 0] [0 50])
 :gen (fn [state]
        (let [as-you
              ["as you " (o [(r "begin" "make ready" "prepare") " to "])
               (r (r "depart" "embark" "leave" "push off" "set out")
                  [(r "clear" "depart from" "leave" "pull away from" "pull free of" "set out from"
                      "take your leave of")
                   " the " (o (o (:from (:travel state)))) " " (r (desc/port) "system")])
               (o [" for " (:to (:travel state))])]
              the-ship
              ["the " (o "ship’s ") "engine "
               (r "creaks" "groans" "rattles" "shudders" "strains" "struggles" "trembles")
               (o [" " (r "threateningly" "uncomfortably" "violently")]) " " (o "in protest ")
               (o ["under the " (r "load" "stress" "weight")])]]
          {:type :info
           :text [(r [as-you ", " the-ship "."] [the-ship " " as-you "."])
                  (o [(o [" For a moment, you " (r "fear" "worry") " it might " (r "fail" "give out") " "
                          (r "altogether" "completely" "entirely") "."])
                      " But it " (r "keeps running" "keeps working" "recovers quickly" "seems to recover quickly")
                      ", and before long, "
                      (r ["you’re " (o "safely") " on your way" (o " out of the system")]
                         ["you’ve made it out of the system "
                          (o (r "in one piece" "intact" "none the worse for wear" "unharmed"))]
                         ["you’re " (o "safely ") (r ["en route to " (:to (:travel state))] "underway")])
                      "."])]
           :ok [[:damage-ship (rand/rand-int* 0 5)]
                [:depart]]}))}

])
