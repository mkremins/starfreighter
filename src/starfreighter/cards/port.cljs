(ns starfreighter.cards.port
  (:require [starfreighter.db :as db]
            [starfreighter.gen :as gen]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(def cards [

;;; "normal" repeatable jobs, cargo buy/sell offers, etc

{:id :job-deliver-cargo
 :repeatable? true
 :prereq db/can-hold-more-cargo?
 :bind   {:cargo gen/gen-normal-delivery-job}
 :weight #(* 4 (db/open-cargo-slots %))
 :gen (fn [{{:keys [cargo]} :bound :as state}]
        (let [{dest :destination, pay-before :pay-before, stuff :name} cargo
              pay [:cash (+ pay-before (:pay-after cargo))]]
          {:type :yes-no
           :speaker (:merchant cargo)
           :text [(rand-nth ["I’d like to enlist your services"
                             "I’ve got a job for you"
                             "I have a job for you"])
                  ", Captain. Can you deliver this shipment of " stuff " to "
                  [:link [:places dest]] "? "
                  (if (pos? pay-before)
                    [(rand-nth [["I’ll pay you " pay " – half now"]
                                ["Payment will be " pay " – half up front"]
                                ["You’ll be paid " pay " – half the pay now"]])
                     [", and " (rand-nth ["half" "the rest"])]]
                    ["Pay will be " pay ", to be paid in full"])
                  " "
                  (rand-nth [["upon successful delivery of the " stuff]
                             ["upon your arrival at " dest]
                             ["when you arrive at " dest " with the " stuff]
                             ["when you drop the " stuff " off at " dest]
                             ["when you make it to " dest]])
                  "."]
           :yes [[:add-cargo cargo]
                 [:earn pay-before]]
           :no []}))}

{:id :job-deliver-passenger
 :repeatable? true
 :prereq db/can-hold-more-cargo?
 :bind   {:char gen/gen-passenger-delivery-job}
 :weight (constantly 4)
 :gen (fn [{{:keys [char]} :bound :as state}]
        (let [fare (:pay-before char)]
          {:type :yes-no
           :speaker char
           :text ["I’m in need of safe passage to "
                  [:link [:places (:destination char)]]
                  ". Can you take me there? I don’t have much, but "
                  (rand-nth ["I can offer you" "I’ve saved up"]) " " [:cash fare]
                  (rand-nth [" – hopefully that’ll be enough."
                             " – I do hope that’s enough."
                             " – that should be enough, right?"
                             " – that’s about standard, right?"])]
           :yes [[:add-cargo char]
                 [:earn fare]]
           :no []}))}

{:id :offer-buy-cargo
 :repeatable? true
 :bind   [[:item    db/some-sellable-cargo]
          [:buyer   db/some-trusting-merchant]
          [:import? #(contains? (:imports (db/current-place %)) (-> % :bound :item :name))]]
 :weight #(cond-> 4 (-> % :bound :import?) (* 2))
 :gen (fn [{{:keys [buyer import? item]} :bound :as state}]
        (let [stuff  (:name item)
              amount (if import? +30 +20)]
          {:type :yes-no
           :speaker buyer
           :text [(rand-nth ["Greetings" "Hello"])
                  ", Captain. I’m " (rand-nth ["in the market" "looking"])
                  " to buy some " stuff ", and it looks like you’ve got some for sale. "
                  (rand-nth [["How does " [:cash amount] " sound to you?"]
                             ["I can offer you " [:cash amount] " – sound like a deal?"]])]
           :yes [[:earn amount]
                 [:drop-cargo item]
                 (if (:counterfeit? item)
                   [:set-next-card
                    {:type :info
                     :speaker buyer
                     :text [(rand-nth ["Hey…" "Hey, hold on a second…" "Hey, wait a minute…"])
                            " "
                            (rand-nth ["are you trying to pull one over on me"
                                       "just who do you think you’re fooling"
                                       "what’re you trying to pull"
                                       "who do you think you’re fooling"])
                            "? This " stuff " is counterfeit! I demand a refund!"]
                     :ok [[:spend amount]
                          [:add-memory buyer :tried-sell-counterfeit-goods]]}]
                   [:add-memory buyer :sold-goods])]
           :no []}))}

{:id :offer-sell-cargo
 :repeatable? true
 :prereq (every-pred db/can-hold-more-cargo? (db/can-afford? 18))
 :bind   {:item gen/gen-goods-for-sale}
 :weight db/open-cargo-slots
 :gen (fn [{{:keys [item]} :bound :as state}]
        (let [{:keys [price seller], stuff :name} item]
          {:type :yes-no
           :speaker seller
           :text ["Looking for " stuff "? "
                  (rand-nth [[(rand-nth ["Boy howdy, have" "Have"]) " I got a "
                              (rand-nth ["" "great "]) "deal for you"]
                             "How fortunate you are"
                             "It’s your lucky day"
                             "Well, you’re in luck"
                             "Well, you’ve come to the right place"
                             ["What incredible " (rand-nth ["fortune" "luck"])]])
                   "! I’m currently selling " stuff " for " (rand-nth ["just" "only"]) " "
                   [:cash price] " " (rand-nth ["a pop" "per unit"])
                   (rand-nth [[" – the lowest price you’ll get this side of " (db/rand-destination state)]
                              [". With prices like these, I’m practically giving this " stuff " away"]])
                   (rand-nth ["." "!"])]
           :yes [[:add-cargo item]
                 [:spend price]
                 [:add-memory seller :bought-goods]]
           :no []}))}

{:id :offer-join-crew
 :repeatable? true
 :prereq (every-pred db/can-hold-more-crew? (db/can-afford? 30))
 :weight db/open-crew-slots
 :gen (fn [state]
        (let [char (gen/gen-local-character state)]
          {:type :yes-no
           :speaker char
           ;; TODO work a mention of pay into this somewhere
           :text [(rand-nth ["Excuse me, Captain. "
                             "I’m looking for work, Captain. "
                             "You’re a spacer, right? "
                             ""])
                  (rand-nth ["Any chance you’d have"
                             "Do you have"
                             "Do you think there might be"
                             "Have you got"
                             "Is there by any chance"
                             "Might there be"
                             "Might you have"])
                  " "
                  (rand-nth ["a place" "a use" "room"])
                  " for "
                  (rand-nth ["" "someone like "])
                  "me in your crew? "
                  (cond
                    (db/fighter? char)
                      ["I’m not much of a deep thinker, but I can hold my own in a "
                       (rand-nth ["fight" "scrap"]) "."]
                    (db/mechanic? char)
                      ["If there’s one thing " (rand-nth ["I know" "I’m good at"])
                       ", it’s fixing spaceships. I grew up around them, so I’ve been "
                       (rand-nth ["at it" "doing it" "learning" "practicing"]) " my whole life."]
                    (db/medic? char)
                      ["I don’t have any formal medical training, but "
                       (rand-nth ["I know" "I’ve picked up"]) " enough to patch people up "
                       "and keep them going after a close scrape."]
                    :else
                      (rand-nth [""
                                 [(rand-nth ["I don’t have any"
                                             "I don’t have much in the way of"
                                             "I haven’t got any"
                                             "I’ve got no"
                                             "I’ve not got much in the way of"])
                                  " special skills"
                                  (rand-nth [" or anything" " or anything like that" ""])
                                  ", but I’m a hard worker and I’m " (rand-nth ["eager" "willing"])
                                  " to learn."]]))]
           :yes [[:add-crew char]
                 [:spend 30]]
           :no []}))}

;;; special offers from merchants

{:id :offer-repair-ship
 :prereq (every-pred (db/has-at-most? :ship 70) (db/can-afford? 30))
 :bind   {:merchant db/some-trusting-merchant}
 :weight #(util/bucket (:ship (:stats %)) [[20 16] [40 6] [100 4]])
 :gen (fn [{{:keys [merchant]} :bound :as state}]
        (let [price -30]
          {:type :yes-no
           :speaker merchant
           :text ["Looks like your ship’s in need of some repair – it’s practically falling apart! "
                  "Want me to help you out with that? It’ll only run you about " [:cash price] "."]
           :yes [[:spend 30]
                 [:repair-ship 20]]
           :no []}))}

{:id :offer-upgrade-crew-quarters
 :prereq (every-pred #(< (:max-crew %) 6) (db/can-afford? 50))
 :bind   {:merchant db/some-trusting-merchant}
 :weight #(if (db/can-hold-more-crew? %) 1 2)
 :gen (fn [{{:keys [merchant]} :bound :as state}]
        (let [price -50]
          {:type :yes-no
           :speaker merchant
           :text ["Your vessel looks a bit cramped, Captain. If you’d like, I could modify it "
                  "to give you a little more breathing room… for a fair price, of course. "
                  "How does " [:cash price] " sound" (rand-nth ["" " to you"]) "?"]
           :yes [[:call #(update % :max-crew inc)]
                 [:spend price]]
           :no []}))}

{:id :offer-upgrade-cargo-hold
 :prereq (every-pred #(< (:max-cargo %) 12) (db/can-afford? 50))
 :bind   {:merchant db/some-trusting-merchant}
 :weight #(if (db/can-hold-more-cargo? %) 1 2)
 :gen (fn [{{:keys [merchant]} :bound :as state}]
        (let [price -50]
          {:type :yes-no
           :speaker merchant
           :text ["You’re a spacer, yes? Surely it’d help your trade if you could carry more cargo at once. "
                  "How about I do you a favor and modify this bucket of bolts? For a price, of course. "
                  "Does " [:cash price] " sound good" (rand-nth ["" " to you"]) "?"]
           :yes [[:call #(update % :max-cargo inc)]
                 [:spend price]]
           :no []}))}

;;; requests from the crew

{:id :request-bonus
 :prereq #(db/can-afford? % (* (count (:crew %)) 5))
 :bind   {:speaker (db/some* db/crew)}
 :weight #(+ (util/bucket (:cash (:stats %)) [[60 1] [80 2] [100 3]])
             (util/bucket (db/avg-crew-mood %) [[40 3] [60 2] [80 1] [100 0]]))
 :gen (fn [{{:keys [speaker]} :bound :as state}]
        (let [crew-size (count (:crew state))
              just-one? (= crew-size 1)]
          {:type :yes-no
           :speaker speaker
           ;; TODO work a mention of amount into this somewhere
           :text ["Say, Cap’n… "
                  (rand-nth (if just-one? ["I’ve" "we’ve" "we’ve both"] ["we’ve" "we’ve all"]))
                  " been working pretty hard lately, and "
                  (if just-one?
                    "I was"
                    [(rand-nth ["the rest of the crew and I" "we"]) " were"])
                  " wondering if " (rand-nth ["maybe " ""]) (if just-one? "I" "we")
                  " might be due a small bonus for everything " (if just-one? "I" "we")
                  " do" (rand-nth ["." " around here."])]
           :yes [[:spend (* 5 crew-size)]
                 [:add-whole-crew-memory :gave-bonus]]
           :no [[:add-whole-crew-memory :declined-bonus-request]]}))}

{:id :request-depart
 :repeatable? true
 :prereq #(>= (count (:cargo %)) 2)
 :weight #(+ (util/bucket (count (:cargo %)) [[2 1] [3 2] [4 4] [5 6] [6 8]])
             (util/bucket (count (:recent-picks %)) [[5 1] [7 2] [100 3]]))
 :gen (fn [state]
        (let [proposed-dest (db/where-to-next state)
              speaker (db/some* state db/crew)]
          {:type :yes-no
           ;; TODO Making this card interruptible allows the player to "cheat" by manually initiating
           ;; travel (via the map) when it comes up, then immediately canceling the initiated travel.
           ;; This gets them a new card without imposing a penalty for rejecting the crew request.
           ;;
           ;; Practically speaking, the utility of this loophole seems pretty limited. If the crew
           ;; wants to leave, you've probably already exhausted most of your other options in port,
           ;; so this card is likely to come up again within the next few draws anyway. I'd like to
           ;; close the hole at some point, but I'm not yet sure what the solution looks like, and
           ;; it's not a priority for the time being. Still, this definitely seems like the sort of
           ;; thing that's worth noting in case it turns out to have weird repercussions somewhere
           ;; further down the line.
           :interruptible? true
           :speaker speaker
           :text [(rand-nth [["Dunno ‘bout you, Cap’n, but it looks to me like the pickings "
                              "to be had round here are pretty slim."]
                             "Say, Cap’n… we’ve been in port a while, haven’t we?"
                             "Sitting here in port is getting mighty boring, Cap’n."
                             "We’re all getting pretty restless, Cap’n."
                             "We’ve been in port a good while now."])
                  " "
                  (rand-nth ["Don’tcha think it’s about time" "How about" "What do you say"])
                  " we "
                  (rand-nth ["get a move on" "get going" "hit the road"
                             ["set out for " [:link [:places proposed-dest]]]
                             ["shove off for " [:link [:places proposed-dest]]]])
                  (rand-nth ["" " already"]) "?"]
           :yes [[:depart-for proposed-dest]]
           :no [[:add-memory speaker :declined-depart-request]]}))}

{:id :request-gambling
 :prereq (db/can-afford? 5)
 :bind   {:speaker (db/some-where (db/mood-at-least? 20) db/crew)}
 :weight (constantly 1)
 :gen (fn [{{:keys [speaker]} :bound :as state}]
        (let [dealer {:name "Dealer"}
              did-well
              ["Ooh, that’s not bad at all! You, my friend, might just be in for an exceptionally good night. "
               "Alright then, let’s have another go!"]
              broke-even
              "How inconclusive! That’s simply no fun at all – best have another go!"
              did-poorly
              "Ooh, that’s too bad! Never mind that, though – I’m sure your luck will turn around before long!"
              cant-afford
              "Oh, what a pity – seems you can’t afford to play any more. Do be sure to return when you can!"]
          (letfn [(walk-away [attempts]
                    {:type :info
                     :speaker dealer
                     :text "Walking away already? Well, I certainly hope you enjoyed yourself!"
                     ;; TODO make this outcome dynamic again
                     :ok [[:add-memory speaker :went-gambling-broke-even]]})
                  (roll-the-dice [attempts]
                    (let [outcome (rand/weighted-choice {0 7, 5 7, 10 1, 15 1, 20 1})
                          next-card
                          (if (< (+ (:cash (:stats state)) outcome) 5)
                            (assoc (walk-away attempts) :text cant-afford)
                            (assoc (make-wager attempts) :text
                              (cond (< outcome 5) did-poorly
                                    (= outcome 5) broke-even
                                    (> outcome 5) did-well)))]
                      {:type :info
                       :speaker speaker
                       :text "C’mon, Cap’n – let’s see how we do!"
                       :icon "🎲"
                       :ok [[:earn outcome]
                            [:set-next-card next-card]]}))
                  (make-wager [attempts]
                    {:type :yes-no
                     :speaker dealer
                     :text "Are you feeling lucky? C’mon, then, step right on up to the table and place your bets."
                     :yes [[:spend 5]
                           ;; TODO we *should* be using :set-next-card here, but that causes an infinite loop :|
                           [:call #(assoc % :next-card (roll-the-dice (inc attempts)))]]
                     :no [[:set-next-card (walk-away attempts)]]})]
            {:type :yes-no
             :speaker speaker
             :text ["Hey, Cap’n – as long as we’re in port, I’m gonna go try my "
                    (rand-nth ["hand" "luck"]) " at some gambling. Wanna come along?"]
             :yes [[:set-next-card (make-wager 0)]]
             :no []})))}

{:id :request-resign
 :prereq #(> (count (:crew %)) 1)
 :bind   {:quitter (db/some-where (db/mood-at-most? 30) db/crew)}
 :weight #(util/bucket (-> % :bound :quitter db/calc-mood) [[5 8] [10 6] [15 4] [20 2] [30 1]])
 :gen (fn [{{:keys [quitter]} :bound :as state}]
        (let [bonus 30
              on-resign
              [[:add-whole-crew-memory :crewmate-resigned]
               [:drop-crew quitter]]
              fail-to-convince
              {:type :info
               :speaker quitter
               :ok on-resign}
              next-if-no
              (if (db/can-afford? bonus)
                {:type :yes-no
                 :speaker quitter
                 :text ["Hmm. Well, if you gave me a really substantial bonus – say, " [:cash bonus]
                        " – I suppose there’s a chance you might be able to convince me to stay on…"]
                 :yes [[:add-memory quitter :gave-bonus]
                       [:spend bonus]]
                 :no [[:set-next-card
                       (assoc fail-to-convince :text
                         "Alright, then – I guess it’s official. I quit.")]]}
                (assoc fail-to-convince :text
                  ["Sorry, but I just don’t think there’s anything you can offer me "
                   "that would be enough to convince me to stay."]))]
          {:type :yes-no
           :speaker quitter
           :text ["Sorry, Cap’n, but I think " (rand-nth ["this" (:location state)])
                  " might just be the end of the line for me. I’d like to request "
                  "your permission to resign."]
           :yes on-resign
           :no [[:set-next-card next-if-no]]}))}

;;; flavor/informational

{:id :info-crew-home
 :prereq #(not (contains? (:recent-picks %) :offer-join-crew))
 :bind   {:speaker #(db/some-where % (db/from? (db/current-place %)) db/crew)}
 :weight (constantly 4)
 :gen (fn [{{:keys [speaker]} :bound :as state}]
        {:type :info
         :speaker speaker
         :text ["Y’know, Cap’n, I never thought I’d say this, but it’s actually "
                "kind of nice to " (rand-nth ["see" "visit"]) " "
                (rand-nth ["home" "my home planet" "my old home planet"])
                " again. Especially since this time, I know I can leave whenever I want!"]
         :ok [[:add-memory speaker :visited-home]]})}

])
