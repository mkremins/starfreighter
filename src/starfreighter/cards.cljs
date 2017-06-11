(ns starfreighter.cards
  (:require [starfreighter.gen :as gen]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(defn passengers [state]
  (filter :passenger? (:cargo state)))

(defn current-place [state]
  (get (:places state) (:location state)))

(defn adjacencies [state loc]
  (:connections (cond->> loc (string? loc) (get (:places state)))))

(defn distance-tiers [state]
  (let [first-tier (vec (:connections (current-place state)))]
    (loop [tiers [first-tier]
           visited (conj (set first-tier) (:location state))]
      (let [this-tier
            (->> (last tiers)
                 (mapcat (comp :connections (:places state)))
                 (remove visited)
                 (distinct)
                 (vec))]
        (if (empty? this-tier)
          tiers
          (recur (conj tiers this-tier)
                 (into visited this-tier)))))))

(defn pathfind [state from to]
  (let [from  (cond-> from (map? from) (:name from))
        to    (cond-> to (map? to) (:name to))]
    (if (= from to)
      [from]
      (loop [paths [[from]]
             visited #{from}]
        (let [adjacencies* #(remove visited (adjacencies state %))
              paths' (mapcat #(map (partial conj %) (adjacencies* (peek %))) paths)]
          (or (first (filter #(= (peek %) to) paths'))
              (recur paths' (into visited (map peek paths')))))))))

(defn rand-destination [state]
  (rand-nth
    (conj (:connections (current-place state))
          (rand-nth (remove #{(:location state)} (keys (:places state)))))))

(defn open-cargo-slots [state]
  (- (:max-cargo state) (count (:cargo state))))

(defn open-crew-slots [state]
  (- (:max-crew state) (count (:crew state))))

(def can-hold-more-cargo?
  (comp pos? open-cargo-slots))

(def can-hold-more-crew?
  (comp pos? open-crew-slots))

(defn has-at-least?
  ([stat amount] #(has-at-least? % stat amount))
  ([state stat amount] (>= (get-in state [:stats stat]) amount)))

(defn has-at-most?
  ([stat amount] #(has-at-most? % stat amount))
  ([state stat amount] (<= (get-in state [:stats stat]) amount)))

(defn has-cargo-to-drop? [state]
  (some #(and (not (:passenger? %))
              (= (:destination %) (:location state)))
        (:cargo state)))

(defn has-passengers-to-drop? [state]
  (some #(= (:destination %) (:location state)) (passengers state)))

(defn freely-sellable? [cargo]
  (not (or (:passenger? cargo) (:destination cargo))))

(defn has-freely-sellable-cargo? [state]
  (some freely-sellable? (:cargo state)))

(defn crew-member-with-trait
  ([trait] #(crew-member-with-trait % trait))
  ([state trait] (first (filter #(contains? (:traits %) trait) (:crew state)))))

(defn adjust-stat
  ([stat amount] #(adjust-stat % stat amount))
  ([state stat amount]
    (update-in state [:stats stat] #(-> % (+ amount) (min 100) (max 0)))))

(declare starbound-deck)

(defonce port-deck [
{:id :offer-repair-ship
 :prereq (every-pred (has-at-most? :ship 70) (has-at-least? :cash 30))
 :weight #(util/bucket (:ship (:stats %)) [[20 16] [40 6] [100 4]])
 :gen (fn [state]
        {:type :yes-no
         :speaker (rand-nth (:merchants (current-place state)))
         :text (str "Looks like your ship’s in need of some repair – it’s practically falling apart! "
                    "Want me to help you out with that?")
         :yes #(-> % (adjust-stat :cash -30)
                     (adjust-stat :ship +20))
         :no identity})}

{:id :job-deliver-cargo
 :repeatable? true
 :prereq can-hold-more-cargo?
 :weight #(* 4 (open-cargo-slots %))
 :gen (fn [state]
        (let [place      (current-place state)
              stuff      (rand-nth (:exports place))
              dest       (rand-destination state)
              split-pay? (rand-nth [true false])
              pay-now    (if split-pay? 5 0)
              pay-later  (if split-pay? 5 10)]
          {:type :yes-no
           :speaker (rand-nth (:merchants place))
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
           :yes #(-> % (update :cargo conj {:name stuff :destination dest :pay pay-later})
                       (adjust-stat :cash pay-now))
           :no identity}))}

{:id :offer-sell-cargo
 :repeatable? true
 :prereq (every-pred can-hold-more-cargo? (has-at-least? :cash 20))
 :weight open-cargo-slots
 :gen (fn [state]
        (let [place (current-place state)
              stuff (rand-nth (:exports place))]
          {:type :yes-no
           :speaker (rand-nth (:merchants place))
           :text (str "Looking for " stuff "? "
                      (rand-nth [(str (rand-nth ["Boy howdy, have" "Have"]) " I got a "
                                      (rand-nth ["" "great "]) "deal for you")
                                 "How fortunate you are"
                                 "It’s your lucky day"
                                 "Well, you’re in luck"
                                 "Well, you’ve come to the right place"
                                 (str "What incredible " (rand-nth ["fortune" "luck"]))])
                      "! "
                      (rand-nth [(str "I’ve got the cheapest " stuff " this side of " (rand-destination state))
                                 (str "With prices like these, I’m practically giving this " stuff " away")])
                      ".")
           :yes #(-> % (update :cargo conj {:name stuff :counterfeit? (rand-nth [true false false])})
                       (adjust-stat :cash -15))
           :no identity}))}

{:id :offer-buy-cargo
 :repeatable? true
 :prereq (every-pred has-freely-sellable-cargo?
                     #(not (contains? (:recent-picks %) :offer-sell-cargo)))
 ;; TODO adjust weight significantly upward if player has an import specific to this place
 :weight #(* 2 (count (filter freely-sellable? (:cargo %))))
 :gen (fn [state]
        (let [place   (current-place state)
              item    (rand-nth (filter freely-sellable? (:cargo state)))
              stuff   (:name item)
              speaker (rand-nth (:merchants place))
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
           :yes #(-> % (adjust-stat :cash amount)
                       ;; TODO will cheat people out of duplicates if they have any
                       (update :cargo (comp vec (partial remove #{item})))
                       (cond-> (:counterfeit? item)
                         (assoc :next-card
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
                            :ok (adjust-stat :cash (- amount))})))}))}

{:id :job-deliver-passenger
 :repeatable? true
 :prereq can-hold-more-cargo?
 :weight (constantly 4)
 :gen (fn [state]
        (let [dest (rand-destination state)
              char (assoc (gen/gen-character (current-place state))
                          :destination dest :passenger? true)]
          {:type :yes-no
           :speaker char
           :text (str "I’m in need of safe passage to " dest ". Can you take me there?")
           :yes #(-> % (update :cargo conj char)
                       (adjust-stat :cash 10))
           :no identity}))}

{:id :offer-join-crew
 :repeatable? true
 :prereq (every-pred can-hold-more-crew? (has-at-least? :cash 30))
 :weight open-crew-slots
 :gen (fn [state]
        (let [char (gen/gen-character (current-place state))]
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
           :yes #(-> % (update :crew conj (assoc char :role :crew))
                       (adjust-stat :cash -30)
                       (adjust-stat :crew +5))
           :no identity}))}

{:id :offer-upgrade-crew-quarters
 :prereq (every-pred #(< (:max-crew %) 6) (has-at-least? :cash 50))
 :weight #(if (can-hold-more-crew? %) 1 2)
 :gen (fn [state]
        {:type :yes-no
         :speaker (rand-nth (:merchants (current-place state)))
         :text (str "Your vessel looks a bit cramped, Captain. If you’d like, I could modify it "
                    "to give you a little more breathing room… for a fair price, of course.")
         :yes #(-> % (update :max-crew inc)
                     (adjust-stat :cash -50))
         :no identity})}

{:id :offer-upgrade-cargo-hold
 :prereq (every-pred #(< (:max-cargo %) 6) (has-at-least? :cash 50))
 :weight #(if (can-hold-more-cargo? %) 1 2)
 :gen (fn [state]
        {:type :yes-no
         :speaker (rand-nth (:merchants (current-place state)))
         :text (str "You’re a spacer, yes? Surely it’d help your trade if you could carry more cargo at once. "
                    "How about I do you a favor and modify this bucket of bolts? For a price, of course.")
         :yes #(-> % (update :max-cargo inc)
                     (adjust-stat :cash -50))
         :no identity})}

{:id :offer-loan
 :prereq (every-pred (has-at-most? :cash 30) #(not (:loan-info %)))
 :weight #(util/bucket (:cash (:stats %)) [[10 4] [20 3] [30 2]])
 :gen (fn [state]
        (let [place    (current-place state)
              creditor (rand-nth (:merchants place))]
          {:type :yes-no
           :speaker creditor
           :text (str (rand-nth ["Greetings, Captain!" "Hello, Captain." "So," "So, Captain,"])
                      " I hear tell you’re "
                      (rand-nth ["running a bit short on" "strapped for"])
                      " cash. I could certainly lend you some… "
                      "provided you agree to pay it back promptly, plus a bit of interest. "
                      (rand-nth ["Do we have a deal?" "What do you say?"]))
           :yes #(-> % (assoc :loan-info
                         {:creditor creditor
                          :collector (gen/gen-character place)
                          :turn-borrowed (:turn state)})
                       (adjust-stat :cash +40))
           :no identity}))}

{:id :collect-loan
 :prereq #(and (:loan-info %)
               (not (:collection-failed? (:loan-info %)))
               (>= (- (:turn %) (:turn-borrowed (:loan-info %))) 20))
 :weight #(util/bucket (- (:turn %) (:turn-borrowed (:loan-info %)))
            [[25 1] [30 2] [35 4] [40 8] [45 16] [50 32] [1000 100]])
 :gen (fn [state]
        (let [{:keys [collector creditor]} (:loan-info state)
              pay-up
              {:type :info
               :speaker collector
               :text (str "Pleasure doing business with you, Captain. "
                          (:shortname creditor) " sends their regards!")
               :ok #(dissoc % :loan-info)}
              surrender
              {:type :game-over
               :text (str "Your ship is repossessed and your remaining assets seized. "
                          "Your only hope is that they are collectively worth enough "
                          "to clear the debt and keep you out of indentured servitude "
                          "to " (:name creditor) ".")}
              fight-outcome
              (let [fight-score (reduce + (map #(if (contains? (:traits %) :fighter) 2 1) (:crew state)))
                    enemy-fight-score (rand/rand-int* 2 5)
                    fighter-if-any (crew-member-with-trait state :fighter)]
                (cond
                  (> fight-score enemy-fight-score)
                    {:type :info
                     :speaker (or fighter-if-any (rand-nth (:crew state)))
                     :text (str "Yee-haw, look at ‘em run! All you gotta do is zap the leader "
                                "and the rest’ll go running for the hills.")
                     :ok #(-> % (adjust-stat :crew +15)
                                (assoc-in [:loan-info :collection-failed?] true))}
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
               :ok #(assoc % :next-card fight-outcome)}
              cant-afford
              {:type :yes-no
               :speaker collector
               :text (str "Ah, you can’t afford it? That is indeed a problem. "
                          "In that case, I’m afraid I’ll have to ask you to surrender your vessel "
                          "and submit to arrest. We must recoup our losses somehow…")
               :yes #(-> % (adjust-stat :cash -100)
                           (assoc :next-card surrender))
               :no #(assoc % :next-card fight)}]
          {:type :yes-no
           :speaker collector
           :text (str "Hello, Captain. Remember that money you borrowed from "
                      (:name creditor)
                      (rand-nth ["" (str " back on " (:home creditor))])
                      "? Well, I’ve been sent to collect it! "
                      "Can we all agree to do this the easy way?")
           :yes #(if (has-at-least? % :cash 50)
                   (-> % (adjust-stat :cash -50)
                         (assoc :next-card pay-up))
                   (assoc % :next-card cant-afford))
           :no #(assoc % :next-card fight)}))}

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
         :ok (adjust-stat :crew +10)})}

{:id :request-gambling
 :prereq (every-pred (has-at-least? :cash 5) (has-at-least? :crew 20))
 :weight (constantly 1)
 :gen (fn [state]
        (let [speaker (rand-nth (:crew state))
              dealer  (rand-nth (:merchants (current-place state)))
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
                     :ok (adjust-stat :crew (min (* 3 attempts) 15))})
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
                                 (adjust-stat :cash outcome)
                                 (assoc :next-card
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
                     :yes #(-> % (adjust-stat :cash -5)
                                 (assoc :next-card (roll-the-dice (inc attempts))))
                     :no #(assoc % :next-card (walk-away attempts))})]
            {:type :yes-no
             :speaker speaker
             :text (str "Hey, Cap’n – as long as we’re in port, I’m gonna go try my "
                        (rand-nth ["hand" "luck"]) " at some gambling. Wanna come along?")
             :yes #(assoc % :next-card (make-wager 0))
             :no identity})))}

{:id :request-drinking
 :prereq (every-pred (has-at-least? :cash 5) (has-at-least? :crew 20))
 :weight (constantly 1)
 :gen (fn [state]
        (let [speaker (rand-nth (:crew state))
              patron  (assoc (gen/gen-character (current-place state))
                             :name "Rowdy Bar Patron")
              unconscious?
              #(contains? (:traits %) :unconscious)
              your-side-active?
              (fn [{:keys [crew]}]
                (some (complement unconscious?) crew))
              their-side-active?
              (fn [{:keys [fight-info]}]
                (some (complement unconscious?) (vals (:opponents fight-info))))
              bar-fight-deck
              [{:id :you-win
                :prereq (every-pred your-side-active? (complement their-side-active?))
                :weight (constantly 1)
                :gen (fn [state]
                       (let [last-hitter (:last-hitter (:fight-info state))]
                         {:type :info
                          :speaker last-hitter
                          :text (str "That’ll teach you to mess with " (:name speaker) "! "
                                     "C’mon, Cap’n, let’s get outta here.")
                          :ok #(-> % (dissoc :fight-info)
                                     (assoc :deck port-deck)
                                     (adjust-stat :crew +5)
                                     (update :crew
                                       (partial mapv
                                         (fn [c]
                                           (cond-> c (contains? (:traits c) :unconscious)
                                             (-> (update :traits disj :unconscious)
                                                 (update :traits conj :injured)))))))}))}

               {:id :they-win
                :prereq (every-pred their-side-active? (complement your-side-active?))
                :weight (constantly 1)
                :gen (fn [state]
                       {:type :game-over
                        :text (str "You die tragically in a bar fight on " (:location state) ". ")
                        :deadly? true})}

               {:id :hit-with-object
                :repeatable? true
                :prereq (every-pred your-side-active? their-side-active?)
                :weight (constantly 1)
                :gen (fn [{:keys [crew fight-info] :as state}]
                       (let [hitter (rand-nth (remove unconscious? crew))
                             target (rand-nth (remove unconscious? (vals (:opponents fight-info))))]
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
                       (let [hitter (rand-nth (remove unconscious? (vals (:opponents fight-info))))
                             target (rand-nth (remove unconscious? crew))]
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
                     (let [opponents (into [patron] (repeatedly 2 #(gen/gen-character (current-place state))))]
                       (assoc state :deck bar-fight-deck
                                    :fight-info {:opponents (zipmap (map :name opponents) opponents)})))}
              walk-away
              {:type :info
               :text (str "You gather your crew and walk out of the bar, determinedly ignoring "
                          "the look of protest on " (:shortname speaker) "’s face.")
               :ok (adjust-stat :crew -5)}
              confrontation
              {:type :yes-no
               :speaker patron
               :text (rand-nth [(str "Oi! We don’t take too kindly to spacers round these parts. "
                                     "How’s about you shove off afore we start doin’ the shoving!")
                                (str "Spacer, eh? Don’t see too many of your kind round these parts. "
                                     "Reckon you oughta be on your way now.")])
               :yes #(assoc % :next-card walk-away)
               :no #(assoc % :next-card bar-fight)}
              walk-to-bar
              {:type :yes-no
               :speaker {:name "Bartender"}
               :text "So, what’ll it be? You havin’ anything?"
               :yes #(-> % (adjust-stat :cash -2)
                           (assoc :next-card confrontation))
               :no #(assoc % :next-card confrontation)}]
          {:type :yes-no
           :speaker speaker
           :text (str "Hey, Cap’n – have you even left the ship since we got into port? "
                      "C’mon, come have a drink with us!")
           :yes #(assoc % :next-card walk-to-bar)
           :no identity}))}

{:id :request-bonus
 :prereq (has-at-least? :cash 40)
 :weight #(+ (util/bucket (:cash (:stats %)) [[60 1] [80 2] [100 3]])
             (util/bucket (:crew (:stats %)) [[40 3] [60 2] [80 1] [100 0]]))
 :gen (fn [state]
        {:type :yes-no
         :speaker (rand-nth (:crew state))
         :text (str "Say, Cap’n… we’ve all been working pretty hard lately, and the rest of the crew and I "
                    "were wondering if we might be due a small bonus for everything we do.")
         :yes #(-> % (adjust-stat :cash (* -5 (count (:crew %))))
                     (adjust-stat :crew (* +5 (count (:crew %)))))
         :no (adjust-stat :crew (* -2 (count (:crew state))))})}

{:id :request-resign
 :prereq (every-pred (has-at-most? :crew 30) #(> (count (:crew %)) 1))
 :weight #(util/bucket (:crew (:stats %)) [[5 8] [10 6] [15 4] [20 2] [30 1]])
 :gen (fn [state]
        (let [speaker (rand-nth (:crew state))
              fail-to-convince
              {:type :info
               :speaker speaker
               :ok #(-> % (update :crew (comp vec (partial remove #{speaker})))
                          (adjust-stat :crew +5))}
              next-if-no
              (if (>= (:cash (:stats state)) 30)
                {:type :yes-no
                 :speaker speaker
                 :text (str "Hmm. Well, if you gave me a really substantial bonus, "
                            "I suppose there’s a chance you might be able to convince me to stay on…")
                 :yes #(-> % (adjust-stat :crew +10)
                             (adjust-stat :cash -30))
                 :no #(assoc % :next-card
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
           :yes #(-> % (update :crew (comp vec (partial remove #{speaker})))
                       (adjust-stat :crew +10))
           :no #(assoc % :next-card next-if-no)}))}

{:id :request-depart
 :repeatable? true
 :prereq #(>= (count (:cargo %)) 2)
 :weight #(+ (util/bucket (count (:cargo %)) [[2 1] [3 2] [4 4] [5 6] [6 8]])
             (util/bucket (count (:recent-picks %)) [[5 1] [7 2] [100 3]]))
 :gen (fn [state]
        {:type :yes-no
         :speaker (rand-nth (:crew state))
         :text (str (rand-nth [(str "Dunno ‘bout you, Cap’n, but it looks to me like the pickings "
                                    "to be had round here are pretty slim.")
                               "Say, Cap’n… we’ve been in port a while, haven’t we?"
                               "Sitting here in port is getting mighty boring, Cap’n."
                               "We’re all getting pretty restless, Cap’n."
                               "We’ve been in port a good while now."])
                    " "
                    (rand-nth ["Don’tcha think it’s about time" "How about" "What do you say"])
                    " we "
                    (rand-nth ["get a move on" "get going" "hit the road"])
                    (rand-nth ["" " already"]) "?")
         :yes #(assoc % :docked? false
                        :deck starbound-deck
                        :destination (let [dests (filter identity (map :destination (:cargo %)))]
                                       (if (seq dests) (rand-nth dests) (rand-destination state)))
                        :recent-picks #{})
         :no (adjust-stat :crew -5)})}
])

(defonce starbound-deck [
{:id :info-ship-damaged
 :prereq (constantly true)
 :weight (constantly 8)
 :gen (fn [state]
        (let [mechanic-if-any (crew-member-with-trait state :mechanic)]
          {:type :info
           :speaker (or mechanic-if-any (rand-nth (:crew state)))
           :text (str (rand-nth ["" "" "Ack! " "Ouch! "])
                      (rand-nth ["What in the blazes was that?!"
                                 "What in the name of Zark was that?!"
                                 "What just happened?!"
                                 "What was that?!"])
                      " "
                      (rand-nth ["Cap’n, I think" "Felt like" "I think" "Sounds like"])
                      " something big "
                      (rand-nth ["" "might’ve "])
                      "just "
                      (rand-nth ["bounced off" "crashed into" "hit"])
                      " the ship!")
           :ok (adjust-stat :ship -10)}))}

{:id :info-ship-repaired
 :prereq (every-pred (has-at-most? :ship 95) (crew-member-with-trait :mechanic))
 :weight #(util/bucket (:ship (:stats %)) [[20 2] [40 4] [60 2] [100 1]])
 :gen (fn [state]
        {:type :info
         :speaker (crew-member-with-trait state :mechanic)
         :text (str "I’ve managed to make a few tweaks that might get this "
                    (rand-nth ["hunk of junk" "rust bucket"])
                    " running a little smoother. Hopefully it’ll "
                    (rand-nth ["" "be enough to "])
                    (rand-nth ["keep us going" "keep us moving" "smooth things over" "tide us over"])
                    " until we can get a proper repair done in port.")
         :ok (adjust-stat :ship +5)})}

{:id :request-promise-cash
 :prereq (has-at-most? :cash 0)
 :weight (constantly 8)
 :gen (fn [state]
        {:type :yes-no
         :speaker (rand-nth (:crew state))
         :text (str "I am starving! I know money’s tight and all, Cap’n, but can you please "
                    "promise me we’ll at least earn enough at " (:destination state)
                    " to stock up on food before we leave port again?")
         :yes (adjust-stat :crew -10)
         :no (adjust-stat :crew -15)})}

{:id :info-crew-friendly
 :prereq #(and (> (count (:crew %)) 1)
               (not (contains? (:recent-picks %) :info-crew-unfriendly)))
 :weight #(if (>= (:crew (:stats %)) 60) 4 2)
 :gen (fn [state]
        (let [[crew-1 crew-2] (rand/pick-n 2 (:crew state))]
          {:type :info
           :speaker crew-1
           :text (str "Y’know, Cap’n, " (:shortname crew-2) " and I don’t always "
                      (rand-nth ["agree on everything"
                                 "get along"
                                 "get along so well"
                                 "see eye-to-eye"])
                      ". But lately, I’ve really been enjoying "
                      (rand-nth ["having them around"
                                 "having them around the ship"
                                 "their company"])
                      ". "
                      (rand-nth [""
                                 (str (rand-nth ["Certainly helps keep"
                                                 "Certainly keeps"
                                                 "Definitely helps keep"
                                                 "Definitely keeps"
                                                 "It certainly helps keep"
                                                 "It certainly keeps"
                                                 "It definitely helps keep"
                                                 "It definitely keeps"
                                                 "It keeps"
                                                 "Keeps"])
                                      " "
                                      (rand-nth ["me from getting bored!"
                                                 "the boredom away!"]))]))
           :ok (adjust-stat :crew +5)}))}

{:id :info-crew-unfriendly
 :prereq #(and (> (count (:crew %)) 1)
               (not (contains? (:recent-picks %) :info-crew-friendly)))
 :weight #(if (<= (:crew (:stats %)) 40) 4 2)
 :gen (fn [state]
        (let [[crew-1 crew-2] (rand/pick-n 2 (:crew state))]
          {:type :info
           :speaker crew-1
           :text (str "I can’t stand it anymore. " (:shortname crew-2) " "
                      (rand-nth ["is driving me" "is going to drive me"]) " "
                      (rand-nth ["crazy" "insane" "mad" "nuts"]) "!")
           :ok (adjust-stat :crew -10)}))}

{:id :info-crew-lonely
 :prereq #(and (= (count (:crew %)) 1) (= (count (passengers %)) 0))
 :weight (constantly 2)
 :gen (fn [state]
        {:type :info
         :speaker (first (:crew state))
         :text (str "Kinda " (rand-nth ["lonely" "quiet"]) " around here, isn’t it, Cap’n? "
                    "I’m starting to think maybe we should hire on another crew member just for the company.")
         :ok (adjust-stat :crew -2)})}

{:id :info-too-many-passengers
 :prereq #(>= (count (passengers %)) (count (:crew %)))
 :weight #(util/bucket (- (count (passengers %)) (count (:crew %)))
            [[0 1] [1 2] [2 4] [3 8] [4 16] [5 32]])
 :gen (fn [state]
        {:type :info
         :speaker (rand-nth (:crew state))
         :text (str "There are too many passengers on board this boat! "
                    ;; TODO variants replacing "they"/"them" with a specific passenger name?
                    (rand-nth [(str "I can’t get any"
                                    (rand-nth [" shut-eye" " sleep" "thing done" " work done"])
                                    (rand-nth ["" " with them around"])
                                    " – they keep")
                               (str "It’s impossible to get any"
                                    (rand-nth [" shut-eye" " sleep" "thing done" " work done"])
                                    " with them"
                                    (rand-nth ["" " always" " constantly"]))
                               "They keep"
                               (str "They’re " (rand-nth ["always" "constantly"]))])
                    (rand-nth [" acting like tourists and"
                               " eating all the food and"
                               " hogging the bathroom and"
                               " stumbling around the corridors and"
                               ""])
                    " getting underfoot. "
                    (rand-nth [""
                               (str "Can’t wait until we can let them off at " (:destination state) ".")
                               "Dammit, Cap’n, we’re a trading vessel, not a cruise ship!"
                               (str "I’ll be so glad to see them go when we get to " (:destination state) ".")]))
         :ok (adjust-stat :crew -10)})}

{:id :offer-passenger-use-crew-bedspace
 :prereq #(> (count (passengers %)) 1)
 :weight (comp count passengers)
 :gen (fn [state]
        {:type :yes-no
         :speaker (rand-nth (passengers state))
         :text (str "Excuse me, Captain. The passenger quarters are kind of uncomfortable, "
                    "and I haven’t been able to get a lot of sleep. Could I maybe swap quarters "
                    "with one of the crew for the rest of the voyage? I’d be willing to "
                    (rand-nth ["compensate you" "pay you a little extra"]) " for your trouble.")
         :yes #(-> % (adjust-stat :crew -10)
                     (adjust-stat :cash +5))
         :no identity})}

{:id :offer-passenger-join-crew
 :prereq (every-pred can-hold-more-crew?
                     #(some :passenger? (:cargo %))
                     (has-at-least? :crew 60)
                     (has-at-least? :cash 20))
 :weight #(+ (open-crew-slots %)
             (util/bucket (:crew (:stats %)) [[75 1] [90 2] [100 3]]))
 :gen (fn [state]
        (let [passenger (rand-nth (passengers state))]
          {:type :yes-no
           :speaker passenger
           :text (str "Seems like you could really use an extra pair of hands around here, Captain. "
                      "And I am looking for work… d’you think there might be a place for me in your crew?")
           :yes #(-> % (update :crew conj (assoc passenger :role :crew))
                       (update :cargo (comp vec (partial remove #{passenger})))
                       (adjust-stat :cash -20)
                       (adjust-stat :crew +5))
           :no identity}))}

{:id :request-try-fix-engine
 :prereq (every-pred (crew-member-with-trait :mechanic) (has-at-most? :ship 60))
 :weight #(if (<= (:ship (:stats %)) 20) 2 1)
 :gen (fn [state]
        (let [mechanic (crew-member-with-trait state :mechanic)
              would-succeed? (rand-nth [true true false])
              next-if-yes
              (if would-succeed?
                {:type :info
                 :speaker mechanic
                 :text "Hah! Toldja I was up to the task."
                 :ok (adjust-stat :crew +10)}
                (let [speaker (or (first (filter #(not= % mechanic) (shuffle (:crew state)))) mechanic)]
                  {:type :info
                   :speaker speaker
                   :text (if (= speaker mechanic)
                           "Dammit… apparently you shouldn’t have trusted me after all."
                           (str "What a disaster! It’s just like I’m always saying: you can’t trust "
                                (:shortname mechanic) " with anything complicated. You should know that by now!"))
                   :ok (adjust-stat :crew -10)}))]
          {:type :yes-no
           :speaker mechanic
           :text (str "The engine’s really struggling, but I think I might know how to fix it! "
                      "It’s a bit dangerous, though. Can I give it a try?")
           :yes #(-> % (assoc :next-card next-if-yes)
                       (adjust-stat :ship (if would-succeed? +10 -15)))
           :no identity}))}

{:id :info-arrived
 :prereq #(> (count (:recent-picks %)) 0)
 :weight #(util/bucket (count (:recent-picks %)) [[3 4] [5 6] [7 8] [100 16]])
 :gen (fn [state]
        {:type :info
         :speaker (rand-nth (:crew state))
         :text (str "Looks like we made it, Cap’n! Now approaching " (:destination state) ".")
         :ok #(assoc % :docked? true
                       :deck port-deck
                       :location (:destination %)
                       :recent-picks #{})})}
])

(defn applicable-game-over-if-any [{:keys [stats] :as state}]
  (cond
    (and (zero? (:crew stats)) (:docked? state))
      {:type :game-over
       :text (str "The crew, fed up with your leadership, steal your ship and depart, "
                  "leaving you stranded on " (:location state) ".")}
    (and (zero? (:ship stats)) (not (:docked? state)))
      {:type :game-over
       :deadly? true
       :text (str "With a horrific creak, your ship’s hull gives way, wrenching itself apart. "
                  "A torrential rush of air sucks you nigh instantaneously into the vacuum of space.")}
    :else
      nil))

(defn applicable-arrival-if-any [state]
  (cond
    ;; drop off (and cash in) cargo you're supposed to deliver
    (has-cargo-to-drop? state)
      (let [[dropping keeping]
            (util/sift #(and (not (:passenger? %))
                             (= (:destination %) (:location state)))
                       (:cargo state))]
        {:type :info
         :speaker (rand-nth (:crew state))
         :text "I’ll go drop off the goods we’re supposed to deliver."
         :ok #(-> % (assoc :cargo (vec keeping))
                    (adjust-stat :cash (reduce + (map :pay dropping))))})
    ;; drop off passengers you're supposed to deliver
    (has-passengers-to-drop? state)
      (let [[dropping keeping]
            (util/sift #(and (:passenger? %)
                             (= (:destination %) (:location state)))
                       (:cargo state))]
        {:type :info
         :speaker (rand-nth dropping)
         :text "Thanks for the ride, Captain! It’ll be good to get a fresh start here."
         :ok #(assoc % :cargo (vec keeping))})))

(defn can-pick? [state metacard]
  (and (or (:repeatable? metacard)
           (not (contains? (:recent-picks state) (:id metacard))))
       ((:prereq metacard) state)))

(defn draw-next-card [state]
  (or (applicable-game-over-if-any state)
      (applicable-arrival-if-any state)
      (:next-card state)
      (let [pickable (filter (partial can-pick? state) (:deck state))
            weights  (zipmap pickable (map #((:weight %) state) pickable))
            metacard (rand/weighted-choice weights)]
        (assoc ((:gen metacard) state) :id (:id metacard)))))
