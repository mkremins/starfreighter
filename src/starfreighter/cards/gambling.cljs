(ns starfreighter.cards.gambling
  (:require [starfreighter.db :as db]
            [starfreighter.rand :as rand]
            [starfreighter.util :refer-macros [defcurried]]))

(def ^:private base-bet-amount 5000)
(def ^:private can-keep-playing? (db/can-afford? base-bet-amount))

(defn- gen-walk-away-card [{:keys [gambling-info] :as state}]
  {:type :info
   :speaker {:name "Dealer"}
   :text "Walking away already? Well, I certainly hope you enjoyed yourself!"
   :ok [[:add-memory (:speaker gambling-info)
         (let [amount-won (- (:init-cash gambling-info) (:cash state))]
           (cond (neg? amount-won)               :went-gambling-did-poorly
                 (<= amount-won base-bet-amount) :went-gambling-broke-even
                 :else                           :went-gambling-did-well))]
        [:call #(dissoc % :gambling-info)]
        [:unset-deck]]})

(defcurried gen-keep-playing-card [state text]
  {:type :yes-no
   :speaker {:name "Dealer"}
   :text text
   :yes [[:spend base-bet-amount]
         [:call #(update % :gambling-info dissoc :just-earned)]]
   :no [[:set-next-card (gen-walk-away-card state)]]})

(def ^:private gambling-deck [

{:id :cant-afford
 :prereq (every-pred (complement can-keep-playing?) #(contains? (:gambling-info %) :just-earned))
 :weight (constantly 1)
 :gen (fn [{:keys [gambling-info] :as state}]
        {:type :info
         :speaker {:name "Dealer"}
         :text "Oh, what a pity – seems you can’t afford to play any more. Do be sure to return when you can!"
         :ok [;; TODO maybe special-case this outcome as :went-gambling-lost-everything
              [:add-memory (:speaker gambling-info) :went-gambling-did-poorly]
              [:call #(dissoc % :gambling-info)]
              [:unset-deck]]})}

{:id :roll-the-dice
 :repeatable? true
 :prereq #(not (contains? (:gambling-info %) :just-earned))
 :weight (constantly 1)
 :gen (fn [state]
        (let [amount (rand/weighted-choice {0 7, 5000 7, 10000 1, 15000 1, 20000 1})]
          {:type :info
           :speaker (:speaker (:gambling-info state))
           :text "C’mon, Cap’n – let’s see how we do!"
           :icon "🎲"
           :ok [[:earn amount]
                [:call #(assoc-in % [:gambling-info :just-earned] amount)]]}))}

{:id :did-well
 :repeatable? true
 :prereq (every-pred can-keep-playing? #(some-> % :gambling-info :just-earned (> base-bet-amount)))
 :weight (constantly 1)
 :gen (gen-keep-playing-card
        ["Ooh, that’s not bad at all! You, my friend, might just be in for an exceptionally good night. "
         "Alright then, let’s have another go!"])}

{:id :broke-even
 :repeatable? true
 :prereq (every-pred can-keep-playing? #(some-> % :gambling-info :just-earned (= base-bet-amount)))
 :weight (constantly 1)
 :gen (gen-keep-playing-card
        "How inconclusive! That’s simply no fun at all – best have another go!")}

{:id :did-poorly
 :repeatable? true
 :prereq (every-pred can-keep-playing? #(some-> % :gambling-info :just-earned (< base-bet-amount)))
 :weight (constantly 1)
 :gen (gen-keep-playing-card
        ["Ooh, that’s too bad! Never mind that, though – I’m sure your luck will turn around before long. "
         "Why don’t you have another go?"])}

])

(def cards [

{:id :request-gambling
 :prereq (db/can-afford? base-bet-amount)
 :bind   {:speaker (db/some-where (db/mood-at-least? 20) db/crew)}
 :weight (constantly 1)
 :gen (fn [{{:keys [speaker]} :bound :as state}]
        {:type :yes-no
         :speaker speaker
         :text ["Hey, Cap’n – as long as we’re in port, I’m gonna go try my "
                (rand-nth ["hand" "luck"]) " at some gambling. Wanna come along?"]
         :yes [[:set-next-card
                (gen-keep-playing-card state
                  [(rand-nth ["Are you feeling lucky" "Feeling lucky"])
                   (rand-nth ["" ", Captain"]) "? It’s only " [:cash base-bet-amount]
                   " to play, so step right on up to the table and place your bets."])]
               [:set-deck gambling-deck]
               [:call #(assoc % :gambling-info {:init-cash (:cash %) :speaker speaker})]]
         :no []})}

])
