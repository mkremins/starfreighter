(ns starfreighter.cards.loans
  (:refer-clojure :exclude [rand rand-int rand-nth shuffle])
  (:require [starfreighter.db :as db]
            [starfreighter.desc :refer [o r]]
            [starfreighter.gen :as gen]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

;; TODO
;; * Allow multiple simultaneous loans (up to one per merchant at a time)
;; * Provide an option to defer full repayment by paying some now + added interest later
;; * Track how fed up with you the lender is based on how many repayments you've deferred
;; * Expand fight with collector into a "real"/systematic fight (like the bar fight scene)
;; * Hang onto the collector (i.e. persist them as a character) for later use
;; * Vary loan amounts & plotlet progression based on lender traits

(def cards [

{:id :offer-loan
 :prereq (every-pred (complement (db/can-afford? 30000)) (complement :loan-info))
 :bind   {:lender db/some-trusting-merchant}
 :weight #(util/bucket (:cash %) [[10000 4] [20000 3] [30000 2]])
 :gen (fn [{{:keys [lender]} :bound :as state}]
        (let [amount 40000] ; TODO procedurally vary this
          {:type :yes-no
           :speaker lender
           :text [(r "Greetings, Captain!" "Hello, Captain." "So," "So, Captain,")
                  " I hear tell you’re " (r "running a bit short on" "strapped for")
                  " cash. I could certainly lend you, say," [:cash amount] "… "
                  "provided you agree to pay it back promptly, plus a bit of interest."
                  (r "Do we have a deal?" "What do you say?")]
           :yes [[:call
                  #(assoc % :loan-info
                     {:amount amount
                      :lender lender
                      :collector (gen/gen-local-character state)
                      :turn-borrowed (:turn state)})]
                 [:earn amount]]
           :no []}))}

{:id :collect-loan
 :prereq #(and (:loan-info %)
               (not (:collection-failed? (:loan-info %)))
               (>= (- (:turn %) (:turn-borrowed (:loan-info %))) 20))
 :weight #(util/bucket (- (:turn %) (:turn-borrowed (:loan-info %)))
            [[25 1] [30 2] [35 4] [40 8] [45 16] [50 32] [1000 100]])
 :gen (fn [state]
        (let [{:keys [amount collector lender]} (:loan-info state)
              interest 10000 ; TODO procedurally vary this
              total (+ amount interest)
              pay-up
              {:type :info
               :speaker collector
               :text ["Pleasure doing business with you, Captain." (:shortname lender) " sends their regards!"]
               :ok [[:call #(dissoc % :loan-info)]]}
              surrender
              {:type :game-over
               :text ["Your ship is repossessed and your remaining assets seized. Your only hope is that they are "
                      "collectively worth enough to clear the debt and keep you out of indentured servitude to "
                      (:name lender) "."]}
              fight-outcome
              (let [fight-score (reduce + (map #(if (db/fighter? %) 2 1) (db/crew state)))
                    enemy-fight-score (rand/rand-int* 2 5)]
                (cond
                  (> fight-score enemy-fight-score)
                    {:type :info
                     :speaker (db/some-preferably state db/fighter? db/crew)
                     :text ["Yee-haw, look at ‘em run! All you gotta do is zap the leader "
                            "and the rest’ll go running for the hills."]
                     :ok [[:call #(assoc-in % [:loan-info :collection-failed?] true)]
                          [:add-whole-crew-memory :won-collector-fight]]}
                  (= fight-score enemy-fight-score)
                    {:type :info
                     :speaker collector
                     :text ["Well then… looks like this is my cue to exit. When next we meet,"
                            "please do try to be a bit more civil – otherwise I might have to do "
                            "something we’ll both regret."]
                     :ok [[:call #(assoc-in % [:loan-info :collection-failed?] true)]]}
                  (< fight-score enemy-fight-score)
                    {:type :game-over
                     :deadly? true
                     :text ["All at once, your chest lights up with pain, and you instinctively "
                            "gasp for air. The last thing you see before you lose consciousness is "
                            "the slight frown of disapproval on " (:name collector) "’s face."]}))
              fight
              {:type :info
               :text ["You’re not sure who shoots first. Your crew are quick on the draw,"
                      "but so are " (:shortname collector) "’s goons. Dust flies in your face "
                      "as you duck for cover, the air around you full of searing light."]
               :icon "💥"
               :ok [[:set-next-card fight-outcome]
                    [:add-memory lender :refused-repay-fought-collector]]}
              cant-afford
              {:type :yes-no
               :speaker collector
               :text ["Ah, you can’t afford it? That is indeed a problem."
                      "In that case, I’m afraid I’ll have to ask you to surrender your vessel "
                      "and submit to arrest. We must recoup our losses somehow…"]
               :yes [[:spend 100]
                     [:set-next-card surrender]]
               :no [[:set-next-card fight]]}]
          {:type :yes-no
           :speaker collector
           :text ["Hello, Captain. Remember that" [:cash amount] "you borrowed from" [:link lender]
                  (o ["back on" [:link [:places (:home lender)]]]) "? Well, "
                  (r "I’m here to collect it" "I’ve been sent to collect it" "it’s time to pay up") "!"
                  (r "Counting" "Including" "Plus" "With") " interest," (r "the amount owed" "the debt")
                  "comes out to" [:cash total] (r "in all" "total" "") "." (o "Now,") "can we" (o " all")
                  " agree to do this the easy way?"]
           :yes (if (db/can-afford? state (+ amount interest))
                  [[:spend total]
                   [:set-next-card pay-up]]
                  [[:set-next-card cant-afford]])
           :no [[:set-next-card fight]]}))}

])
