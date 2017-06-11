(ns starfreighter.cards.space
  (:require [starfreighter.db :as db]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(def cards [

;;; damage & repairs

{:id :info-ship-damaged
 :prereq (constantly true)
 :weight (constantly 8)
 :gen (fn [state]
        (let [mechanic-if-any (db/crew-member-with-trait state :mechanic)]
          {:type :info
           :speaker (or mechanic-if-any (db/rand-crew-member state))
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
           :ok (db/adjust-stat :ship -10)}))}

{:id :info-ship-repaired
 :prereq (every-pred (db/has-at-most? :ship 95) (db/crew-member-with-trait :mechanic))
 :weight #(util/bucket (:ship (:stats %)) [[20 2] [40 4] [60 2] [100 1]])
 :gen (fn [state]
        {:type :info
         :speaker (db/crew-member-with-trait state :mechanic)
         :text (str "I’ve managed to make a few tweaks that might get this "
                    (rand-nth ["hunk of junk" "rust bucket"])
                    " running a little smoother. Hopefully it’ll "
                    (rand-nth ["" "be enough to "])
                    (rand-nth ["keep us going" "keep us moving" "smooth things over" "tide us over"])
                    " until we can get a proper repair done in port.")
         :ok (db/adjust-stat :ship +5)})}

{:id :request-try-fix-engine
 :prereq (every-pred (db/crew-member-with-trait :mechanic) (db/has-at-most? :ship 60))
 :weight #(if (<= (:ship (:stats %)) 20) 2 1)
 :gen (fn [state]
        (let [mechanic (db/crew-member-with-trait state :mechanic)
              would-succeed? (rand-nth [true true false])
              next-if-yes
              (if would-succeed?
                {:type :info
                 :speaker mechanic
                 :text "Hah! Toldja I was up to the task."
                 :ok (db/adjust-stat :crew +10)}
                (let [speaker (or (first (filter #(not= % mechanic) (shuffle (:crew state)))) mechanic)]
                  {:type :info
                   :speaker speaker
                   :text (if (= speaker mechanic)
                           "Dammit… apparently you shouldn’t have trusted me after all."
                           (str "What a disaster! It’s just like I’m always saying: you can’t trust "
                                (:shortname mechanic) " with anything complicated. You should know that by now!"))
                   :ok (db/adjust-stat :crew -10)}))]
          {:type :yes-no
           :speaker mechanic
           :text (str "The engine’s really struggling, but I think I might know how to fix it! "
                      "It’s a bit dangerous, though. Can I give it a try?")
           :yes (comp (db/set-next-card next-if-yes)
                      (db/adjust-stat :ship (if would-succeed? +10 -15)))
           :no identity}))}

;;; crew moods

{:id :request-promise-cash
 :prereq (db/has-at-most? :cash 0)
 :weight (constantly 8)
 :gen (fn [state]
        {:type :yes-no
         :speaker (db/rand-crew-member state)
         :text (str "I am starving! I know money’s tight and all, Cap’n, but can you please "
                    "promise me we’ll at least earn enough at " (:destination state)
                    " to stock up on food before we leave port again?")
         :yes (db/adjust-stat :crew -10)
         :no (db/adjust-stat :crew -15)})}

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
           :ok (db/adjust-stat :crew +5)}))}

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
           :ok (db/adjust-stat :crew -10)}))}

{:id :info-crew-lonely
 :prereq #(and (= (count (:crew %)) 1) (= (count (db/passengers %)) 0))
 :weight (constantly 2)
 :gen (fn [state]
        {:type :info
         :speaker (first (:crew state))
         :text (str "Kinda " (rand-nth ["lonely" "quiet"]) " around here, isn’t it, Cap’n? "
                    "I’m starting to think maybe we should hire on another crew member just for the company.")
         :ok (db/adjust-stat :crew -2)})}

{:id :info-too-many-passengers
 :prereq #(>= (count (db/passengers %)) (count (:crew %)))
 :weight #(util/bucket (- (count (db/passengers %)) (count (:crew %)))
            [[0 1] [1 2] [2 4] [3 8] [4 16] [5 32]])
 :gen (fn [state]
        {:type :info
         :speaker (db/rand-crew-member state)
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
         :ok (db/adjust-stat :crew -10)})}

;;; passenger antics

{:id :offer-passenger-use-crew-bedspace
 :prereq #(> (count (db/passengers %)) 1)
 :weight (comp count db/passengers)
 :gen (fn [state]
        {:type :yes-no
         :speaker (rand-nth (db/passengers state))
         :text (str "Excuse me, Captain. The passenger quarters are kind of uncomfortable, "
                    "and I haven’t been able to get a lot of sleep. Could I maybe swap quarters "
                    "with one of the crew for the rest of the voyage? I’d be willing to "
                    (rand-nth ["compensate you" "pay you a little extra"]) " for your trouble.")
         :yes (comp (db/adjust-stat :crew -10)
                    (db/adjust-stat :cash +5))
         :no identity})}

{:id :offer-passenger-join-crew
 :prereq (every-pred db/can-hold-more-crew?
                     (comp pos? count db/passengers)
                     (db/has-at-least? :crew 60)
                     (db/has-at-least? :cash 20))
 :weight #(+ (db/open-crew-slots %)
             (util/bucket (:crew (:stats %)) [[75 1] [90 2] [100 3]]))
 :gen (fn [state]
        (let [passenger (rand-nth (db/passengers state))]
          {:type :yes-no
           :speaker passenger
           :text (str "Seems like you could really use an extra pair of hands around here, Captain. "
                      "And I am looking for work… d’you think there might be a place for me in your crew?")
           :yes (comp (db/add-crew passenger)
                      (db/drop-cargo passenger)
                      (db/adjust-stat :cash -20)
                      (db/adjust-stat :crew +5))
           :no identity}))}

;;; arrival in port

{:id :info-arrived
 :prereq #(> (count (:recent-picks %)) 0)
 :weight #(util/bucket (count (:recent-picks %)) [[3 4] [5 6] [7 8] [100 16]])
 :gen (fn [state]
        {:type :info
         :speaker (db/rand-crew-member state)
         :text (str "Looks like we made it, Cap’n! Now approaching " (:destination state) ".")
         :ok db/arrive})}
])
