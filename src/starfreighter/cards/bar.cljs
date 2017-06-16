(ns starfreighter.cards.bar
  (:require [starfreighter.db :as db]
            [starfreighter.gen :as gen]))

;; TODO
;; * Multiple possible outcomes (of which the fight-or-flight branch is only one)
;; * Refactor fight code to generalize it somewhat
;; * Add more fight options (injury instead of immediate KO, advantages for strong chars, fleeing, etc)

(def some-conscious-crew
  (db/some-where (complement db/unconscious?) db/crew))

(defn some-conscious-opponent [state]
  (some->> state :fight-info :opponents vals (remove db/unconscious?) seq rand-nth))

(defn recover-if-unconscious [char]
  (cond-> char (db/has-trait? char :unconscious)
    (-> (db/drop-trait* :unconscious)
        (db/add-trait* :injured))))

(defn init-fight [state]
  (let [opponents (repeatedly 3 #(gen/gen-local-character state))]
    (assoc state :fight-info {:opponents (zipmap (map :name opponents) opponents)})))

(def bar-fight-deck [

{:id :you-win
 :prereq (complement some-conscious-opponent)
 :weight (constantly 1)
 :gen (fn [state]
        (prn (:fight-info state))
        (let [last-hitter (:last-hitter (:fight-info state))]
          {:type :info
           :speaker last-hitter
           :text ["That’ll teach you to mess with " (:name last-hitter) "! "
                  "C’mon, Cap’n, let’s get outta here."]
           :ok [[:call #(dissoc % :fight-info)]
                [:unset-deck]
                [:add-whole-crew-memory :won-bar-fight]
                [:update-all-crew recover-if-unconscious]]}))}

{:id :they-win
 :prereq (complement some-conscious-crew)
 :weight (constantly 1)
 :gen (fn [state]
        {:type :game-over
         :text ["You die tragically in a bar fight on " (:location state) "."]
         :deadly? true})}

{:id :hit-with-object
 :repeatable? true
 :bind   {:hitter some-conscious-crew
          :target some-conscious-opponent}
 :weight (constantly 1)
 :gen (fn [{{:keys [hitter target]} :bound}]
        {:type :info
         :text [(:shortname hitter) " hits one of your assailants with a "
                (rand-nth ["bottle" "chair" "pitcher" "table leg"])
                ", knocking them to the ground. It doesn’t look like they’ll be "
                "getting up any time soon."]
         :ok [[:call
               #(-> % (update-in [:fight-info :opponents (:name target)] db/add-trait* :unconscious)
                      (assoc-in [:fight-info :last-hitter] hitter))]]
         :icon "💥"})}

{:id :get-hit-with-object
 :repeatable? true
 :bind   {:hitter some-conscious-opponent
          :target some-conscious-crew}
 :weight (constantly 1)
 :gen (fn [{{:keys [hitter target]} :bound}]
        {:type :info
         :text ["One of your assailants hits " (:shortname target) " with a "
                (rand-nth ["bottle" "chair" "pitcher" "table leg"])
                ", knocking them to the ground. It doesn’t look like they’ll be "
                "getting up any time soon."]
         :ok [[:add-trait target :unconscious]]
         :icon "💥"})}

])

(def cards [

{:id :request-drinking
 :prereq (db/can-afford? 50)
 :bind   {:speaker (db/some-where (db/mood-at-least? 20) db/crew)}
 :weight (constantly 1)
 :gen (fn [{{:keys [speaker]} :bound :as state}]
        (let [bar-fight
              {:type :info
               :speaker {:name "Rowdy Bar Patron"}
               :text "Can’t take a hint, huh? Guess we’ll just have to teach you a lesson!"
               :ok [[:set-deck bar-fight-deck]
                    [:call init-fight]]}
              walk-away
              {:type :info
               :text ["You gather your crew and walk out of the bar, determinedly ignoring "
                      "the look of protest on " (:shortname speaker) "’s face."]
               :ok [[:add-memory speaker :backed-down-from-bar-fight]]}
              confrontation
              {:type :yes-no
               :speaker {:name "Rowdy Bar Patron"}
               :text (rand-nth [["Oi! We don’t take too kindly to spacers round these parts. "
                                 "How’s about you shove off afore we start doin’ the shoving!"]
                                ["Spacer, eh? Don’t see too many of your kind round these parts. "
                                 "Reckon you oughta be on your way now."]])
               :yes [[:set-next-card walk-away]]
               :no [[:set-next-card bar-fight]]}
              walk-to-bar
              {:type :yes-no
               :speaker {:name "Bartender"}
               :text "So, what’ll it be? You havin’ anything?"
               :yes [[:spend 50]
                     [:set-next-card confrontation]]
               :no [[:set-next-card confrontation]]}]
          {:type :yes-no
           :speaker speaker
           :text ["Hey, Cap’n – have you even left the ship since we got into port? "
                  "C’mon, come have a drink with us!"]
           :yes [[:set-next-card walk-to-bar]]
           :no []}))}

])
