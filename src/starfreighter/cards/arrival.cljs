(ns starfreighter.cards.arrival
  (:require [starfreighter.db :as db]
            [starfreighter.desc :refer [a o r]]))

(defn has-business-here? [{:keys [travel] :as state}]
  (or (= (:at travel) (:final-dest travel))
      (some (db/headed-here? state) (:cargo state))))

(defn- port []
  [(r "space" "star" "") "port"])

(def cards [

{:id :arrive-flavor-megacorp
 :prereq (every-pred has-business-here?
                     (comp (db/find-module :megacorp) db/current-place))
 :weight (constantly 100000)
 :gen (fn [state]
        {:type :info
         :text [(r ["Scattered " (r "about" "around" "throughout") " the system"
                    (o [", and clustered especially tightly " (r "about" "around" "near") " the " (port) ","]) " are"]
                   ["The " (r [(o "entire ") "system is"] "spacelanes into the system are") " "
                    (r "cluttered" "littered") " with"])
                (o " holographic") " advertisements for " (o "something called ") "the "
                (:name (db/current-place state)) " "
                (r "Company" "Conglomerate" "Consortium" "Corporation" "Syndicate") "."]
         :ok [[:arrive]]})}

{:id :arrive-flavor-mining
 :prereq (every-pred has-business-here?
                     (comp (db/find-module :mining) db/current-place))
 :weight (constantly 100000)
 :gen (fn [state]
        {:type :info
         :text ["As you pass by the asteroid belt en route to the " (port) ", you "
                (r "glimpse" "make out" "notice")
                (r [" a " (o "distant ") "flurry of activity " (o "taking place ")]
                   [(o " a handful of") " ships darting " (r "back and forth" "to and fro" "") " "])
                (r "amidst" "among") " the rocks:"
                (r [(a [(o "asteroid ") "mining operation"])] [(o "asteroid ") "miners"]) " at work."]
         :ok [[:arrive]]})}

{:id :arrive-flavor-quarantine
 :prereq (every-pred has-business-here?
                     (comp (db/find-module :quarantine) db/current-place))
 :weight (constantly 100000)
 :gen (fn [state]
        {:type :info
         :text [(r ["As you draw " (r "closer" "nearer") " to the " (port) ", "
                    (r ["it becomes " (o "increasingly ") (r "clear" "obvious") (o " to you")]
                       "you can’t shake the impression")]
                   ["The " (r "closer" "nearer") " you draw to the " (port) ", "
                    "the " (r "clearer" "more obvious") " it becomes" (o " to you")])
                " that something is " (r "amiss" "wrong") ". "
                (r "Normally" "Ordinarily" "Under typical conditions") ", "
                (r [(o ["the primary " (port) " for "]) "such a populous system"]
                   [(o "the space around ") "a " (port) " of this size"])
                " would be "
                (r [(r "bustling" "buzzing" "humming" "teeming") " with " (r "activity" "life" "traffic")]
                   ["crowded with dozens" (r ", if not hundreds," " or even hundreds")
                    " of " (r "ships" "vessels")])
                ". " (r "But right now" "But today" "Today, though") ", "
                (r ["an eerie " (r "calm" "hush" "quiet" "silence" "stillness")
                    " hangs " (o "like a shadow") " over the port"]
                   "there’s not a single ship in sight") "."]
         :ok [[:arrive]]})}

{:id :arrive-flavor-religion
 :prereq (every-pred has-business-here?
                     (comp (db/find-module :religion) db/current-place))
 :weight (constantly 100000)
 :gen (fn [state]
        (let [culture (:name (get-in state [:cultures (:culture (db/current-place state))]))
              effigies
              [(o [(r "dozens" "hundreds") " of "])
               (r "breathtaking" "colossal" "enormous" "massive" "solemn" "tremendous" "vast") " " (o "stone ")
               (r "effigies" "monuments" "sculptures" "statues")]]
          {:type :info
           :text [(r [(r ["Arranged" (o " carefully")] ["Scattered" (o " haphazardly")]) " "
                      (r "about" "around" "throughout") " the system are " effigies]
                     [effigies " are " (r ["arranged" (o " carefully")] ["scattered" (o " haphazardly")]) " "
                      (r "about" "around" "throughout") " the system"]
                     ["The " (o "entire ") "system is " (r "decorated" "dotted") " with " effigies]
                     ["The spacelanes into the system are "
                      (r "bordered by" "bounded by" "decorated with" "guarded by" "marked by" "lined with")
                      " " effigies])
                  ": asteroids " (r "carved" "hewn" "sculpted" "reshaped") " "
                  (r "in the likenesses of"
                     ["into shrines " (r "for the worship of" "in veneration of" "venerating")]
                     "to resemble")
                  " the " (r culture "local" "") " gods."]
           :ok [[:arrive]]}))}

{:id :arrive-flavor-shipyard
 :prereq (every-pred has-business-here?
                     (comp (db/find-module :shipyard) db/current-place))
 :weight (constantly 100000)
 :gen (fn [state]
        {:type :info
         :text ["Even at "
                (r [(r "a" "a great" "great" "this" "this great") " distance from the " (port)]
                   [(o "this ") (o "great ") "range"])
                ", you can " (o (r "already" "clearly" "still")) " " (r "make out" "see")
                " the sprawling orbital complex "
                (r ["of the system’s " (r "famous" "legendary" "notorious" "") " shipyards"]
                   ["that constitutes the " (r "famous" "legendary" "notorious" "") " shipyards of "
                    (:name (db/current-place state))])
                "."]
         :ok [[:arrive]]})}

{:id :arrive-flavor-warzone
 :prereq (every-pred has-business-here?
                     (comp (db/find-module :warzone) db/current-place))
 :weight (constantly 100000)
 :gen (fn [state]
        {:type :info
         :text ["As you make your way to the " (port) ", there’s no sign of "
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
         :text ["As you pull in from the edge of the system towards the " (port) ", "
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
