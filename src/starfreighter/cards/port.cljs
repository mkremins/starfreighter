(ns starfreighter.cards.port
  (:require [starfreighter.db :as db]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(def cards [

;;; "normal" repeatable jobs, cargo buy/sell offers, etc

{:id :job-deliver-cargo
 :repeatable? true
 :prereq db/can-hold-more-cargo?
 :weight #(* 4 (db/open-cargo-slots %))
 :gen (fn [state]
        (let [stuff      (db/rand-export state)
              dest       (db/rand-destination state)
              split-pay? (rand-nth [true false])
              pay-now    (if split-pay? 5 0)
              pay-later  (if split-pay? 5 10)]
          {:type :yes-no
           :speaker (db/rand-merchant state)
           :text (str (rand-nth ["I’d like to enlist your services"
                                 "I’ve got a job for you"
                                 "I have a job for you"])
                      ", Captain. Can you deliver this shipment of " stuff " to " dest "? "
                      (if split-pay?
                        (str (rand-nth ["I’ll pay you half now"
                                        "Payment will be half up front"
                                        "You’ll get half the pay now"])
                             ", and half")
                        (str "You’ll " (rand-nth ["be paid" "receive payment"]) " in full"))
                      " "
                      (rand-nth [(str "upon successful delivery of the " stuff)
                                 (str "upon your arrival at " dest)
                                 (str "when you arrive at " dest " with the " stuff)
                                 (str "when you make it to " dest)])
                      ".")
           :yes (comp (db/add-cargo {:name stuff :destination dest :pay pay-later})
                      (db/adjust-stat :cash pay-now))
           :no identity}))}

{:id :job-deliver-passenger
 :repeatable? true
 :prereq db/can-hold-more-cargo?
 :weight (constantly 4)
 :gen (fn [state]
        (let [dest (db/rand-destination state)
              char (assoc (db/gen-local-character state)
                          :destination dest :passenger? true)]
          {:type :yes-no
           :speaker char
           :text (str "I’m in need of safe passage to " dest ". Can you take me there?")
           :yes (comp (db/add-cargo char)
                      (db/adjust-stat :cash 10))
           :no identity}))}

{:id :offer-buy-cargo
 :repeatable? true
 :prereq (every-pred db/has-freely-sellable-cargo?
                     #(not (contains? (:recent-picks %) :offer-sell-cargo)))
 ;; TODO adjust weight significantly upward if player has an import specific to this place
 :weight #(* 2 (count (filter db/freely-sellable? (:cargo %))))
 :gen (fn [state]
        (let [place   (db/current-place state)
              item    (rand-nth (filter db/freely-sellable? (:cargo state)))
              stuff   (:name item)
              speaker (db/rand-merchant state)
              amount  (if (contains? (:imports place) stuff) +30 +20)]
          {:type :yes-no
           :speaker speaker
           :text (str (rand-nth ["Greetings" "Hello"])
                      ", Captain. I’m " (rand-nth ["in the market" "looking"])
                      " to buy some " stuff ", and it looks like you’ve got some for sale. "
                      (rand-nth ["Care to make"
                                 "Could I interest you in"
                                 "Want to make"
                                 "Would you like to make"])
                      " a deal?")
           :yes (comp (db/adjust-stat :cash amount)
                      (db/drop-cargo item)
                      #(cond-> % (:counterfeit? item)
                         (db/set-next-card
                           {:type :info
                            :speaker speaker
                            :text (str (rand-nth ["Hey…"
                                                  "Hey, hold on a second…"
                                                  "Hey, wait a minute…"])
                                       " "
                                       (rand-nth ["are you trying to pull one over on me"
                                                  "just who do you think you’re fooling"
                                                  "what’re you trying to pull"
                                                  "who do you think you’re fooling"])
                                       "? This " stuff " is counterfeit! I demand a refund!")
                            :ok (db/adjust-stat :cash (- amount))})))}))}

{:id :offer-sell-cargo
 :repeatable? true
 :prereq (every-pred db/can-hold-more-cargo? (db/has-at-least? :cash 20))
 :weight db/open-cargo-slots
 :gen (fn [state]
        (let [place (db/current-place state)
              stuff (db/rand-export state)]
          {:type :yes-no
           :speaker (db/rand-merchant state)
           :text (str "Looking for " stuff "? "
                      (rand-nth [(str (rand-nth ["Boy howdy, have" "Have"]) " I got a "
                                      (rand-nth ["" "great "]) "deal for you")
                                 "How fortunate you are"
                                 "It’s your lucky day"
                                 "Well, you’re in luck"
                                 "Well, you’ve come to the right place"
                                 (str "What incredible " (rand-nth ["fortune" "luck"]))])
                      "! "
                      (rand-nth [(str "I’ve got the cheapest " stuff " this side of " (db/rand-destination state))
                                 (str "With prices like these, I’m practically giving this " stuff " away")])
                      ".")
           :yes (comp (db/add-cargo {:name stuff :counterfeit? (rand-nth [true false false])})
                      (db/adjust-stat :cash -15))
           :no identity}))}

{:id :offer-join-crew
 :repeatable? true
 :prereq (every-pred db/can-hold-more-crew? (db/has-at-least? :cash 30))
 :weight db/open-crew-slots
 :gen (fn [state]
        (let [char (db/gen-local-character state)]
          {:type :yes-no
           :speaker char
           :text (str (rand-nth ["Excuse me, Captain. "
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
                        (contains? (:traits char) :fighter)
                          (str "I’m not much of a deep thinker, but I can hold my own in a "
                               (rand-nth ["fight" "scrap"]) ".")
                        (contains? (:traits char) :mechanic)
                          (str "If there’s one thing " (rand-nth ["I know" "I’m good at"])
                               ", it’s fixing spaceships. I grew up around them, so I’ve been "
                               (rand-nth ["at it" "doing it" "learning" "practicing"]) " my whole life.")
                        (contains? (:traits char) :medic)
                          (str "I don’t have any formal medical training, but "
                               (rand-nth ["I know" "I’ve picked up"]) " enough to patch people up "
                               "and keep them going after a close scrape.")
                        :else
                          (rand-nth [""
                                     (str (rand-nth ["I don’t have any"
                                                     "I don’t have much in the way of"
                                                     "I haven’t got any"
                                                     "I’ve got no"
                                                     "I’ve not got much in the way of"])
                                          " special skills"
                                          (rand-nth [" or anything" " or anything like that" ""])
                                          ", but I’m a hard worker and I’m " (rand-nth ["eager" "willing"])
                                          " to learn.")])))
           :yes (comp (db/add-crew char)
                      (db/adjust-stat :cash -30)
                      (db/adjust-stat :crew +5))
           :no identity}))}

;;; special offers from merchants

{:id :offer-loan
 :prereq (every-pred (db/has-at-most? :cash 30) #(not (:loan-info %)))
 :weight #(util/bucket (:cash (:stats %)) [[10 4] [20 3] [30 2]])
 :gen (fn [state]
        (let [lender (db/rand-merchant state)]
          {:type :yes-no
           :speaker lender
           :text (str (rand-nth ["Greetings, Captain!" "Hello, Captain." "So," "So, Captain,"])
                      " I hear tell you’re "
                      (rand-nth ["running a bit short on" "strapped for"])
                      " cash. I could certainly lend you some… "
                      "provided you agree to pay it back promptly, plus a bit of interest. "
                      (rand-nth ["Do we have a deal?" "What do you say?"]))
           :yes (comp #(assoc % :loan-info
                         {:lender lender
                          :collector (db/gen-local-character state)
                          :turn-borrowed (:turn state)})
                      (db/adjust-stat :cash +40))
           :no identity}))}

{:id :offer-repair-ship
 :prereq (every-pred (db/has-at-most? :ship 70) (db/has-at-least? :cash 30))
 :weight #(util/bucket (:ship (:stats %)) [[20 16] [40 6] [100 4]])
 :gen (fn [state]
        {:type :yes-no
         :speaker (db/rand-merchant state)
         :text (str "Looks like your ship’s in need of some repair – it’s practically falling apart! "
                    "Want me to help you out with that?")
         :yes (comp (db/adjust-stat :cash -30)
                    (db/adjust-stat :ship +20))
         :no identity})}

{:id :offer-upgrade-crew-quarters
 :prereq (every-pred #(< (:max-crew %) 6) (db/has-at-least? :cash 50))
 :weight #(if (db/can-hold-more-crew? %) 1 2)
 :gen (fn [state]
        {:type :yes-no
         :speaker (db/rand-merchant state)
         :text (str "Your vessel looks a bit cramped, Captain. If you’d like, I could modify it "
                    "to give you a little more breathing room… for a fair price, of course.")
         :yes (comp #(update % :max-crew inc)
                    (db/adjust-stat :cash -50))
         :no identity})}

{:id :offer-upgrade-cargo-hold
 :prereq (every-pred #(< (:max-cargo %) 6) (db/has-at-least? :cash 50))
 :weight #(if (db/can-hold-more-cargo? %) 1 2)
 :gen (fn [state]
        {:type :yes-no
         :speaker (db/rand-merchant state)
         :text (str "You’re a spacer, yes? Surely it’d help your trade if you could carry more cargo at once. "
                    "How about I do you a favor and modify this bucket of bolts? For a price, of course.")
         :yes (comp #(update % :max-cargo inc)
                    (db/adjust-stat :cash -50))
         :no identity})}

;;; requests from the crew

{:id :request-bonus
 :prereq (db/has-at-least? :cash 40)
 :weight #(+ (util/bucket (:cash (:stats %)) [[60 1] [80 2] [100 3]])
             (util/bucket (:crew (:stats %)) [[40 3] [60 2] [80 1] [100 0]]))
 :gen (fn [state]
        (let [crew-size (count (:crew state))
              just-one? (= crew-size 1)]
          {:type :yes-no
           :speaker (db/rand-crew-member state)
           :text (str "Say, Cap’n… "
                      (rand-nth (if just-one? ["I’ve" "we’ve" "we’ve both"] ["we’ve" "we’ve all"]))
                      " been working pretty hard lately, and "
                      (if just-one?
                        "I was"
                        (str (rand-nth ["the rest of the crew and I" "we"]) " were"))
                      " wondering if " (rand-nth ["maybe " ""]) (if just-one? "I" "we")
                      " might be due a small bonus for everything " (if just-one? "I" "we")
                      " do" (rand-nth ["." " around here."]))
           :yes (comp (db/adjust-stat :cash (* -5 crew-size))
                      (db/adjust-stat :crew (* +5 crew-size)))
           :no (db/adjust-stat :crew (* -2 (count (:crew state))))}))}

{:id :request-depart
 :repeatable? true
 :prereq #(>= (count (:cargo %)) 2)
 :weight #(+ (util/bucket (count (:cargo %)) [[2 1] [3 2] [4 4] [5 6] [6 8]])
             (util/bucket (count (:recent-picks %)) [[5 1] [7 2] [100 3]]))
 :gen (fn [state]
        (let [proposed-dest (db/where-to-next state)]
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
           :speaker (db/rand-crew-member state)
           :text (str (rand-nth [(str "Dunno ‘bout you, Cap’n, but it looks to me like the pickings "
                                      "to be had round here are pretty slim.")
                                 "Say, Cap’n… we’ve been in port a while, haven’t we?"
                                 "Sitting here in port is getting mighty boring, Cap’n."
                                 "We’re all getting pretty restless, Cap’n."
                                 "We’ve been in port a good while now."])
                      " "
                      (rand-nth ["Don’tcha think it’s about time" "How about" "What do you say"])
                      " we "
                      (rand-nth ["get a move on" "get going" "hit the road"
                                 (str "set out for " proposed-dest)
                                 (str "shove off for " proposed-dest)])
                      (rand-nth ["" " already"]) "?")
           :yes (db/depart-for proposed-dest)
           :no (db/adjust-stat :crew -5)}))}

{:id :request-drinking
 :prereq (every-pred (db/has-at-least? :cash 5) (db/has-at-least? :crew 20))
 :weight (constantly 1)
 :gen (fn [state]
        (let [speaker (db/rand-crew-member state)
              patron  (assoc (db/gen-local-character state) :name "Rowdy Bar Patron")
              your-side-active?
              (fn [{:keys [crew]}]
                (some (complement db/unconscious?) crew))
              their-side-active?
              (fn [{:keys [fight-info]}]
                (some (complement db/unconscious?) (vals (:opponents fight-info))))
              bar-fight-deck
              [{:id :you-win
                :prereq (every-pred your-side-active? (complement their-side-active?))
                :weight (constantly 1)
                :gen (fn [state]
                       (let [last-hitter (:last-hitter (:fight-info state))]
                         {:type :info
                          :speaker last-hitter
                          :text (str "That’ll teach you to mess with " (:name last-hitter) "! "
                                     "C’mon, Cap’n, let’s get outta here.")
                          :ok #(-> % (dissoc :fight-info)
                                     (db/unset-deck)
                                     (db/adjust-stat :crew +5)
                                     (update :crew
                                       (partial mapv
                                         (fn [c]
                                           (cond-> c (db/unconscious? c)
                                             (-> (update :traits disj :unconscious)
                                                 (update :traits conj :injured)))))))}))}

               {:id :they-win
                :prereq (every-pred their-side-active? (complement your-side-active?))
                :weight (constantly 1)
                :gen (fn [state]
                       {:type :game-over
                        :text (str "You die tragically in a bar fight on " (:location state) ".")
                        :deadly? true})}

               {:id :hit-with-object
                :repeatable? true
                :prereq (every-pred your-side-active? their-side-active?)
                :weight (constantly 1)
                :gen (fn [{:keys [crew fight-info] :as state}]
                       (let [hitter (rand-nth (remove db/unconscious? crew))
                             target (rand-nth (remove db/unconscious? (vals (:opponents fight-info))))]
                         {:type :info
                          :text (str (:shortname hitter) " hits one of your assailants with a "
                                     (rand-nth ["bottle" "chair" "pitcher" "table leg"])
                                     ", knocking them to the ground. It doesn’t look like they’ll be "
                                     "getting up any time soon.")
                          :ok #(-> % (update-in [:fight-info :opponents (:name target) :traits] conj :unconscious)
                                     (assoc-in [:fight-info :last-hitter] (:name hitter)))
                          :icon "💥"}))}

               {:id :get-hit-with-object
                :repeatable? true
                :prereq (every-pred your-side-active? their-side-active?)
                :weight (constantly 1)
                :gen (fn [{:keys [crew fight-info] :as state}]
                       (let [hitter (rand-nth (remove db/unconscious? (vals (:opponents fight-info))))
                             target (rand-nth (remove db/unconscious? crew))]
                         {:type :info
                          :text (str "One of your assailants hits " (:shortname target) " with a "
                                     (rand-nth ["bottle" "chair" "pitcher" "table leg"])
                                     ", knocking them to the ground. It doesn’t look like they’ll be "
                                     "getting up any time soon.")
                          :ok (fn [state]
                                (update state :crew
                                  (partial mapv #(cond-> % (= % target) (update :traits conj :unconscious)))))
                          :icon "💥"}))}]
              bar-fight
              {:type :info
               :speaker patron
               :text "Can’t take a hint, huh? Guess we’ll just have to teach you a lesson!"
               :ok (fn [state]
                     (let [opponents (into [patron] (repeatedly 2 #(db/gen-local-character state)))]
                       (-> state (db/set-deck bar-fight-deck)
                                 (assoc :fight-info {:opponents (zipmap (map :name opponents) opponents)}))))}
              walk-away
              {:type :info
               :text (str "You gather your crew and walk out of the bar, determinedly ignoring "
                          "the look of protest on " (:shortname speaker) "’s face.")
               :ok (db/adjust-stat :crew -5)}
              confrontation
              {:type :yes-no
               :speaker patron
               :text (rand-nth [(str "Oi! We don’t take too kindly to spacers round these parts. "
                                     "How’s about you shove off afore we start doin’ the shoving!")
                                (str "Spacer, eh? Don’t see too many of your kind round these parts. "
                                     "Reckon you oughta be on your way now.")])
               :yes (db/set-next-card walk-away)
               :no (db/set-next-card bar-fight)}
              walk-to-bar
              {:type :yes-no
               :speaker {:name "Bartender"}
               :text "So, what’ll it be? You havin’ anything?"
               :yes (comp (db/adjust-stat :cash -2)
                          (db/set-next-card confrontation))
               :no (db/set-next-card confrontation)}]
          {:type :yes-no
           :speaker speaker
           :text (str "Hey, Cap’n – have you even left the ship since we got into port? "
                      "C’mon, come have a drink with us!")
           :yes (db/set-next-card walk-to-bar)
           :no identity}))}

{:id :request-gambling
 :prereq (every-pred (db/has-at-least? :cash 5) (db/has-at-least? :crew 20))
 :weight (constantly 1)
 :gen (fn [state]
        (let [speaker (db/rand-crew-member state)
              dealer  (db/rand-merchant state)
              did-well
              (str "Ooh, that’s not bad at all! You, my friend, might just be in for an exceptionally good night. "
                   "Alright then, let’s have another go!")
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
                     :ok (db/adjust-stat :crew (min (* 3 attempts) 15))})
                  (roll-the-dice [attempts]
                    {:type :info
                     :speaker speaker
                     :text "C’mon, Cap’n – let’s see how we do!"
                     :icon "🎲"
                     :ok (fn [state]
                           (let [outcome (rand-nth [0  0  0  0  0  0  0
                                                    5  5  5  5  5  5  5
                                                    10 15 20])]
                             (-> state
                                 (db/adjust-stat :cash outcome)
                                 (db/set-next-card
                                   (if (< (+ (:cash (:stats state)) outcome) 5)
                                     (assoc (walk-away attempts) :text cant-afford)
                                     (assoc (make-wager attempts) :text
                                       (cond (< outcome 5) did-poorly
                                             (= outcome 5) broke-even
                                             (> outcome 5) did-well)))))))})
                  (make-wager [attempts]
                    {:type :yes-no
                     :speaker dealer
                     :text "Are you feeling lucky? C’mon, then, step right on up to the table and place your bets."
                     :yes #(-> % (db/adjust-stat :cash -5)
                                 (db/set-next-card (roll-the-dice (inc attempts))))
                     :no (db/set-next-card (walk-away attempts))})]
            {:type :yes-no
             :speaker speaker
             :text (str "Hey, Cap’n – as long as we’re in port, I’m gonna go try my "
                        (rand-nth ["hand" "luck"]) " at some gambling. Wanna come along?")
             :yes (db/set-next-card (make-wager 0))
             :no identity})))}

{:id :request-resign
 :prereq (every-pred (db/has-at-most? :crew 30) #(> (count (:crew %)) 1))
 :weight #(util/bucket (:crew (:stats %)) [[5 8] [10 6] [15 4] [20 2] [30 1]])
 :gen (fn [state]
        (let [speaker (db/rand-crew-member state)
              fail-to-convince
              {:type :info
               :speaker speaker
               :ok (comp (db/drop-crew speaker)
                         (db/adjust-stat :crew +5))}
              next-if-no
              (if (>= (:cash (:stats state)) 30)
                {:type :yes-no
                 :speaker speaker
                 :text (str "Hmm. Well, if you gave me a really substantial bonus, "
                            "I suppose there’s a chance you might be able to convince me to stay on…")
                 :yes (comp (db/adjust-stat :crew +10)
                            (db/adjust-stat :cash -30))
                 :no (db/set-next-card
                        (assoc fail-to-convince :text
                          "Alright, then – I guess it’s official. I quit."))}
                (assoc fail-to-convince :text
                  (str "Sorry, but I just don’t think there’s anything you can offer me "
                       "that would be enough to convince me to stay.")))]
          {:type :yes-no
           :speaker speaker
           :text (str "Sorry, Cap’n, but I think " (rand-nth ["this" (:location state)])
                      " might just be the end of the line for me. I’d like to request "
                      "your permission to resign.")
           :yes (comp (db/drop-crew speaker)
                      (db/adjust-stat :crew +10))
           :no (db/set-next-card next-if-no)}))}

;;; flavor/informational

{:id :info-crew-home
 :prereq (fn [state]
           (and (some #(= (:home %) (:location state)) (:crew state))
                (not (contains? (:recent-picks state) :offer-join-crew))))
 :weight (constantly 4)
 :gen (fn [state]
        {:type :info
         :speaker (rand-nth (filter #(= (:home %) (:location state)) (:crew state)))
         :text (str "Y’know, Cap’n, I never thought I’d say this, but it’s actually "
                    "kind of nice to " (rand-nth ["see" "visit"]) " "
                    (rand-nth ["home" "my home planet" "my old home planet"])
                    " again. Especially since this time, I know I can leave whenever I want!")
         :ok (db/adjust-stat :crew +10)})}

;;; followups for ongoing plotlines

{:id :collect-loan
 :prereq #(and (:loan-info %)
               (not (:collection-failed? (:loan-info %)))
               (>= (- (:turn %) (:turn-borrowed (:loan-info %))) 20))
 :weight #(util/bucket (- (:turn %) (:turn-borrowed (:loan-info %)))
            [[25 1] [30 2] [35 4] [40 8] [45 16] [50 32] [1000 100]])
 :gen (fn [state]
        (let [{:keys [collector lender]} (:loan-info state)
              pay-up
              {:type :info
               :speaker collector
               :text (str "Pleasure doing business with you, Captain. "
                          (:shortname lender) " sends their regards!")
               :ok #(dissoc % :loan-info)}
              surrender
              {:type :game-over
               :text (str "Your ship is repossessed and your remaining assets seized. "
                          "Your only hope is that they are collectively worth enough "
                          "to clear the debt and keep you out of indentured servitude "
                          "to " (:name lender) ".")}
              fight-outcome
              (let [fight-score (reduce + (map #(if (contains? (:traits %) :fighter) 2 1) (:crew state)))
                    enemy-fight-score (rand/rand-int* 2 5)
                    fighter-if-any (db/crew-member-with-trait state :fighter)]
                (cond
                  (> fight-score enemy-fight-score)
                    {:type :info
                     :speaker (or fighter-if-any (db/rand-crew-member state))
                     :text (str "Yee-haw, look at ‘em run! All you gotta do is zap the leader "
                                "and the rest’ll go running for the hills.")
                     :ok (comp #(assoc-in % [:loan-info :collection-failed?] true)
                               (db/adjust-stat :crew +15))}
                  (= fight-score enemy-fight-score)
                    {:type :info
                     :speaker collector
                     :text (str "Well then… looks like this is my cue to exit. When next we meet, "
                                "please do try to be a bit more civil – otherwise I might have to do "
                                "something we’ll both regret.")
                     :ok #(assoc-in % [:loan-info :collection-failed?] true)}
                  (< fight-score enemy-fight-score)
                    {:type :game-over
                     :deadly? true
                     :text (str "All at once, your chest lights up with pain, and you instinctively "
                                "gasp for air. The last thing you see before you lose consciousness is "
                                "the slight frown of disapproval on " (:name collector) "’s face.")}))
              fight
              {:type :info
               :text (str "You’re not sure who shoots first. Your crew are quick on the draw, "
                          "but so are " (:shortname collector) "’s goons. Dust flies in your face "
                          "as you duck for cover, the air around you full of searing light.")
               :icon "💥"
               :ok (db/set-next-card fight-outcome)}
              cant-afford
              {:type :yes-no
               :speaker collector
               :text (str "Ah, you can’t afford it? That is indeed a problem. "
                          "In that case, I’m afraid I’ll have to ask you to surrender your vessel "
                          "and submit to arrest. We must recoup our losses somehow…")
               :yes (comp (db/adjust-stat :cash -100)
                          (db/set-next-card surrender))
               :no (db/set-next-card fight)}]
          {:type :yes-no
           :speaker collector
           :text (str "Hello, Captain. Remember that money you borrowed from "
                      (:name lender)
                      (rand-nth ["" (str " back on " (:home lender))])
                      "? Well, "
                      (rand-nth ["I’m here to collect it"
                                 "I’ve been sent to collect it"
                                 "it’s time to pay up"])
                      "! "
                      (rand-nth ["C" "Now, c"]) "an we"
                      (rand-nth [" all" ""])
                      " agree to do this the easy way?")
           :yes (if (db/has-at-least? state :cash 50)
                  (comp (db/adjust-stat :cash -50)
                        (db/set-next-card pay-up))
                  (db/set-next-card cant-afford))
           :no (db/set-next-card fight)}))}
])
