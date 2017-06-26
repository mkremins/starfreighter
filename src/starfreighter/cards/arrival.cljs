(ns starfreighter.cards.arrival
  (:require [starfreighter.db :as db]
            [starfreighter.desc :refer [o r]]))

(defn has-business-here? [{:keys [travel] :as state}]
  (or (= (:at travel) (:final-dest travel))
      (some (db/headed-here? state) (:cargo state))))

(def cards [

{:id :arrive-flavor-quarantine
 :prereq (every-pred has-business-here?
                     (comp (db/find-module :quarantine) db/current-place))
 :weight (constantly 100000)
 :gen (fn [state]
        {:type :info
         :text [(r ["As you draw " (r "closer" "nearer") " to the spaceport, "
                    (r ["it becomes " (o "increasingly ") (r "clear" "obvious") (o " to you")]
                       "you can’t shake the impression")]
                   ["The " (r "closer" "nearer") " you draw to the spaceport, "
                    "the " (r "clearer" "more obvious") " it becomes" (o " to you")])
                " that something is " (r "amiss" "wrong") ". "
                (r "Normally" "Ordinarily" "Under typical conditions") ", "
                (r [(o "the primary spaceport for ") "such a populous system"]
                   [(o "the space around ") "a port of this size"])
                " would be "
                (r [(r "bustling" "buzzing" "humming" "teeming") " with " (r "activity" "life" "traffic")]
                   ["crowded with dozens" (r ", if not hundreds," " or even hundreds")
                    " of " (r "ships" "vessels")])
                ". " (r "But right now" "But today" "Today, though") ", "
                (r ["an eerie " (r "calm" "hush" "quiet" "silence" "stillness")
                    " hangs " (o "like a shadow") " over the port"]
                   "there’s not a single ship in sight") "."]
         :ok [[:arrive]]})}

{:id :arrive-flavor-warzone
 :prereq (every-pred has-business-here?
                     (comp (db/find-module :warzone) db/current-place))
 :weight (constantly 100000)
 :gen (fn [state]
        {:type :info
         :text ["As you make your way to the spaceport, there’s no sign of "
                (r "active" "ongoing") " " (r "combat" "fighting" "hostilities") ". But the "
                (r "near-total emptiness of the space around the port speaks for itself"
                   [(o "occasional ") "swirling clouds of " (r "debris" "wreckage") " speak for themselves"]
                   [(r "damaged-looking" "visibly damaged") " orbital defense emplacements speak for themselves"])
                (o [": by no means is this " (o "system ") "a " (r "uniformly" "wholly") " safe place to be"]) "."]
         :ok [[:arrive]]})}

{:id :arrive-normally
 :prereq has-business-here?
 :weight (constantly 1)
 :gen (fn [state]
        {:type :info
         :text ["As you pull in from the edge of the system towards the spaceport, "
                "you see dozens of other ships tracing their own paths through the void."]
         :ok [[:arrive]]})}

{:id :chance-to-bounce
 :prereq (complement has-business-here?)
 :weight (constantly 1)
 :gen (fn [state]
        {:type :yes-no
         :speaker (db/some* state db/crew)
         :text ["I don’t think we’ve actually got any business here, Cap’n. "
                "Want to keep pressing on to " (:final-dest (:travel state)) "?"]
         :yes [[:bounce]]
         :no [[:call #(assoc-in % [:travel :final-dest] (:at (:travel %)))]]})}

])
