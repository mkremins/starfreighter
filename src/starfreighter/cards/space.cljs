(ns starfreighter.cards.space
  (:refer-clojure :exclude [rand rand-int rand-nth shuffle])
  (:require [starfreighter.db :as db]
            [starfreighter.rand :as rand :refer [rand-nth]]
            [starfreighter.util :as util]))

(def cards [

;;; damage & repairs

{:id :info-ship-damaged
 :prereq (constantly true)
 :weight (constantly 8)
 :gen (fn [state]
        {:type :info
         :speaker (db/some-preferably state db/mechanic? db/crew)
         :text [(rand-nth ["" "" "Ack! " "Ouch! "])
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
                " the ship!"]
         :ok [[:damage-ship 10]]})}

{:id :info-ship-repaired
 :prereq (db/has-at-most? :ship 99)
 :bind   {:mechanic (db/some-where db/mechanic? db/crew)}
 :weight #(util/bucket (:ship %) [[20 2] [40 4] [60 2] [100 1]])
 :gen (fn [state]
        {:type :info
         :speaker (-> state :bound :mechanic)
         :text ["I’ve managed to make a few tweaks that might get this "
                (rand-nth ["hunk of junk" "rust bucket"])
                " running a little smoother. Hopefully it’ll "
                (rand-nth ["" "be enough to "])
                (rand-nth ["keep us going" "keep us moving" "smooth things over" "tide us over"])
                " until we can get a proper repair done in port."]
         :ok [[:repair-ship 5]]})}

{:id :request-try-fix-engine
 :prereq (db/has-at-most? :ship 60)
 :bind   {:mechanic (db/some-where db/mechanic? db/crew)}
 :weight #(if (<= (:ship %) 20) 2 1)
 :gen (fn [{{:keys [mechanic]} :bound :as state}]
        (let [would-succeed? (rand-nth [true true false])
              next-if-yes
              (if would-succeed?
                {:type :info
                 :speaker mechanic
                 :text "Hah! Toldja I was up to the task."
                 :ok [[:add-memory mechanic :fixed-engine]]}
                (let [critic (db/some-preferably state #(not= % mechanic) db/crew)]
                  {:type :info
                   :speaker critic
                   :text (if (= critic mechanic)
                           "Dammit… apparently you shouldn’t have trusted me after all."
                           ["What a disaster! It’s just like I’m always saying: you can’t trust "
                            (:shortname mechanic) " with anything complicated. You should know that by now!"])
                   :ok [[:add-memory mechanic :failed-to-fix-engine]
                        [:add-memory critic :witnessed-failure]]}))]
          {:type :yes-no
           :speaker mechanic
           :text ["The engine’s really struggling, but I think I might know how to fix it! "
                  "It’s a bit dangerous, though. Can I give it a try?"]
           :yes [[:set-next-card next-if-yes]
                 (if would-succeed? [:repair-ship 10] [:damage-ship 15])]
           :no []}))}

;;; crew moods

{:id :request-promise-cash
 :prereq (complement (db/can-afford? 500))
 :weight (constantly 8)
 :gen (fn [state]
        (let [complainer (db/some* state db/crew)]
          {:type :yes-no
           :speaker complainer
           :text ["I am starving! I know money’s tight and all, Cap’n, but can you please "
                  "promise me we’ll at least earn enough at " (:destination state)
                  " to stock up on food before we leave port again?"]
           :yes [[:add-memory complainer :ran-out-of-cash]
                 [:add-memory complainer :was-reassured-about-cash]]
           :no [[:add-memory complainer :ran-out-of-cash]]}))}

{:id :info-crew-friendly
 :prereq #(not (contains? (:recent-picks %) :info-crew-unfriendly))
 :bind   [[:crew-1 (db/some* db/crew)]
          [:crew-2 #(db/some-where % (partial not= (-> % :bound :crew-1)) db/crew)]]
 :weight #(if (>= (db/avg-crew-mood %) 60) 4 2)
 :gen (fn [{{:keys [crew-1 crew-2]} :bound}]
        {:type :info
         :speaker crew-1
         :text ["Y’know, Cap’n, " (:shortname crew-2) " and I don’t always "
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
                           [(rand-nth ["Certainly helps keep"
                                       "Certainly keeps"
                                       "Definitely helps keep"
                                       "Definitely keeps"
                                       "Helps keep"
                                       "It certainly helps keep"
                                       "It certainly keeps"
                                       "It definitely helps keep"
                                       "It definitely keeps"
                                       "It keeps"
                                       "Keeps"])
                            " "
                            (rand-nth ["me from getting bored!"
                                       "me on my toes!"
                                       "the boredom away!"])]])]
         :ok [[:add-memory crew-1 :got-along-with-crewmate]
              [:add-memory crew-2 :got-along-with-crewmate]]})}

{:id :info-crew-unfriendly
 :prereq #(not (contains? (:recent-picks %) :info-crew-friendly))
 :bind   [[:annoyed (db/some* db/crew)]
          [:annoyer #(db/some-where % (partial not= (-> % :bound :crew-2)) db/crew)]]
 :weight #(if (<= (db/avg-crew-mood %) 40) 4 2)
 :gen (fn [{{:keys [annoyed annoyer]} :bound}]
        {:type :info
         :speaker annoyed
         :text ["I can’t stand it anymore. " (:shortname annoyer) " "
                (rand-nth ["is driving me" "is going to drive me"]) " "
                (rand-nth ["crazy" "insane" "mad" "nuts"]) "!"]
         :ok [[:add-memory annoyed :was-annoyed-by-crewmate]
              [:add-memory annoyer :annoyed-crewmate]]})}

{:id :info-crew-lonely
 :prereq (every-pred #(= (count (:crew %)) 1) (comp empty? db/passengers))
 :bind   {:complainer (db/some* db/crew)}
 :weight (constantly 2)
 :gen (fn [{{:keys [complainer]} :bound}]
        {:type :info
         :speaker complainer
         :text ["Kinda " (rand-nth ["lonely" "quiet"]) " around here, isn’t it, Cap’n? "
                "I’m starting to think maybe we should hire on another crew member just for the company."]
         :ok [[:add-memory complainer :felt-lonely]]})}

{:id :info-too-many-passengers
 :prereq #(> (count (db/passengers %)) (count (:crew %)))
 :bind   {:complainer (db/some* db/crew)}
 :weight #(js/Math.pow 2 (- (count (db/passengers %)) (count (:crew %))))
 :gen (fn [{{:keys [complainer]} :bound, dest :destination :as state}]
        {:type :info
         :speaker complainer
         :text ["There are too many passengers on board this boat! "
                ;; TODO variants replacing "they"/"them" with a specific passenger name?
                (rand-nth [["I can’t get any"
                            (rand-nth [" shut-eye" " sleep" "thing done" " work done"])
                            (rand-nth ["" " with them around"])
                            " – they keep"]
                           ["It’s impossible to get any"
                            (rand-nth [" shut-eye" " sleep" "thing done" " work done"])
                            " with them"
                            (rand-nth ["" " always" " constantly"])]
                           "They keep"
                           ["They’re " (rand-nth ["always" "constantly"])]])
                (rand-nth [" acting like tourists and"
                           " eating all the food and"
                           " hogging the bathroom and"
                           " stumbling around the corridors and"
                           ""])
                " getting underfoot. "
                (rand-nth [""
                           ["Can’t wait until we can let them off at " dest "."]
                           "Dammit, Cap’n, we’re a trading vessel, not a cruise ship!"
                           ["I’ll be so glad to see them go when we get to " dest "."]])]
         :ok [[:add-memory complainer :was-annoyed-by-passenger]]})}

;;; passenger antics

{:id :offer-passenger-use-crew-bedspace
 :bind   {:passenger (db/some* db/passengers)}
 :weight (comp count db/passengers)
 :gen (fn [{{:keys [passenger]} :bound :as state}]
        (let [tip 500]
          {:type :yes-no
           :speaker passenger
           :text ["Excuse me, Captain. The passenger quarters are kind of uncomfortable, "
                  "and I haven’t been able to get a lot of sleep. Could I maybe move over "
                  "to the crew quarters for the rest of the voyage? I’d be willing to "
                  (rand-nth ["compensate you" "pay you a little extra"]) " – " [:cash tip]
                  ", say – for your trouble."]
           :yes [[:earn tip]
                 [:add-whole-crew-memory :was-inconvenienced-by-passenger]]
           :no []}))}

{:id :offer-passenger-join-crew
 :prereq (every-pred db/can-hold-more-crew?
                     #(>= (db/avg-crew-mood %) 60)
                     (db/can-afford? 20))
 :bind   {:passenger (db/some* db/passengers)}
 :weight #(+ (db/open-crew-slots %)
             (util/bucket (db/avg-crew-mood %) [[75 1] [90 2] [100 3]]))
 :gen (fn [{{:keys [passenger]} :bound :as state}]
        {:type :yes-no
         :speaker passenger
         ;; TODO work a mention of pay into this somewhere
         :text ["Seems like you could really use an extra pair of hands around here, Captain. "
                "And I am looking for work… d’you think there might be a place for me in your crew?"]
         :yes [[:add-crew passenger]
               [:drop-cargo passenger]
               [:spend 2000]]
         :no []})}

;;; arrival in port

{:id :info-arrived
 :prereq #(> (count (:recent-picks %)) 0)
 :weight #(util/bucket (count (:recent-picks %)) [[3 4] [5 6] [7 8] [100 16]])
 :gen (fn [state]
        {:type :info
         :speaker (db/some* state db/crew)
         :text [(rand-nth ["Looks like we made it"
                           "Looks like we made it in one piece"
                           "Made it in one piece"])
                ", Cap’n! Now approaching " (:destination state) "."]
         :ok [[:arrive]]})}
])
