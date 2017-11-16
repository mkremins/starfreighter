(ns starfreighter.cards.space
  (:refer-clojure :exclude [rand rand-int rand-nth shuffle])
  (:require [starfreighter.db :as db]
            [starfreighter.desc :as desc :refer [a o r]]
            [starfreighter.rand :as rand :refer [rand-nth]]
            [starfreighter.util :as util]))

(def cards [

;;; flavor

{:id :flavor-cruise-ship
 :prereq (comp (db/find-module :tourism) db/current-dest)
 :weight (constantly 4)
 :gen (fn [state]
        {:type :info
         :text ["You " (r "overtake" "pass by") " a slow-moving, gaudily painted vessel, configured as "
                "a passenger liner: a cruise ship ferrying wealthy tourists " (o "lazily ") "between the stars."]
         :ok []})}

{:id :flavor-diplo-ship
 :prereq (comp (db/find-module :diplomacy) db/current-dest)
 :weight (constantly 4)
 :gen (fn [state]
        (let [base-escorts (r "fighters" "interceptors")
              escorts [(o (r "heavy" "heavily armed" "light" "lightly armed")) " " base-escorts]
              group   ["a " (r "company" "flight" "handful" "squadron" "pair" "wing") " of " escorts]]
          {:type :info
           :text ["You" (r "’re overtaken by" " overtake" " pass by") " " (r "a" "some sort of") " light "
                  (o "passenger ") (r "courier" "shuttle" "transport") ", "
                  (r ["accompanied by " (r ["an escort of " escorts] group)] ["escorted by " group]
                     ["protected by " (r ["an escort of " escorts] group)] ["with " group " as an escort"])
                  "."
                  (r [(a [(o "important ") (r "ambassador" "diplomat" "politician")])
                      ", en route to " (:name (db/current-dest state)) "?"]
                     ["One of the " base-escorts " "
                      (r ["edges " (o "just ") "a bit closer" (o " to you")]
                         ["keeps its " (r "cannons" "guns" "weapons") " trained " (r "in your direction" "on you")]
                         [(r "pivots" "swivels" "tilts" "trains") " its " (r "cannons" "guns" "weapons") " "
                          (r "briefly" "menacingly") " " (r "in your direction" "towards you")])
                      " as you pass" (o [", as if warning you to " (r "keep your distance" "stay away")]) "."]
                     "")]
           :ok []}))}

{:id :flavor-space-battle
 :prereq (comp (db/find-module :warzone) db/current-dest)
 :weight (constantly 4)
 :gen (fn [state]
        {:type :info
         :text ["In the distance, you " (o "think you ") "can " (o "just barely ") (r "glimpse" "make out" "see")
                " the " (r "telltale" "unmistakable") " bright flashes of "
                (r "beam cannon" "disruptor" "plasma" "wavebeam artillery") " fire: "
                (o [(r "a pair" "clusters" "two groups") " of"]) " " (r "enemy" "hostile" "rival" "") " "
                (r "attack ships" "battlecruisers" "gunboats" "warships") " " (r "exchanging" "trading") " blows."]
         :ok []})}

{:id :flavor-old-wreck
 :prereq (comp (some-fn (db/find-module :warzone) (db/find-module :piracy)) db/current-dest)
 :weight (constantly 4)
 :gen (fn [state]
        {:type :info
         :text ["You drift past the "
                (desc/adj-list [(o "distant") (o (r "broken" "burned-out" "deteriorating" "skeletal" "twisted"))]) " "
                (r "carcass" "hulk" "remains" "wreck") " of "
                (a (r "abandoned" "defeated" "fallen" "scuttled")) " " (r "ship" "vessel") "."
                "A " (r "gunboat" ["patrol " (r "boat" "ship")] "picket ship") "? A "
                (o (r "cargo" "civilian" "heavy" "light" "merchant")) " freighter?"
                "The damage is too " (r "complete" "heavy" "thorough") " to say for sure."]
         :ok []})}

;;; damage & repairs

{:id :info-ship-damaged
 :prereq (constantly true)
 :weight (constantly 8)
 :gen (fn [state]
        (let [damage (rand/rand-int* 5 10)]
          {:type :info
           :speaker (db/some-preferably state db/mechanic? db/crew)
           :text (if (> damage 7)
                   [(o (r "Ack! " "Ouch! "))
                    (r "What in the blazes was that?!" "What just happened?!"
                       "What the hell was that?!" "What was that?!")
                    " " (r "Cap’n, I think" "Felt like" "I think" "Sounds like")
                    " something big " (o "might’ve ") "just "
                    (r "bounced off" "crashed into" "hit") " the " (r "hull" "ship") "!"]
                   [(r "Ah, hell." "Blasted space junk.") " Something just "
                    (r "bounced off" "crashed into" "hit") " the " (r "hull" "ship") "."])
           :ok [[:damage-ship damage]]}))}

{:id :info-ship-repaired
 :prereq #(< (:ship %) 100)
 :bind   {:mechanic (db/some-where db/mechanic? db/crew)}
 :weight #(util/bucket (:ship %) [[20 2] [40 4] [60 2] [100 1]])
 :gen (fn [state]
        {:type :info
         :speaker (-> state :bound :mechanic)
         :text ["I’ve managed to make a few tweaks that might get this "
                (r "hunk of junk" "rust bucket") " running a little smoother. "
                "Hopefully it’ll " (o "be enough to ")
                (r "keep us going" "keep us moving" "smooth things over" "tide us over")
                " until we can get a proper repair done in port."]
         :ok [[:repair-ship 5]]})}

{:id :request-try-fix-engine
 :prereq #(<= (:ship %) 60)
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
        (let [complainer (db/some* state db/crew)
              dest (:name (db/current-dest state))]
          {:type :yes-no
           :speaker complainer
           :text ["I am starving! I know money’s tight and all, Cap’n, but can you please "
                  "promise me we’ll at least earn enough at " dest
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
                (r "agree on everything" ["get along" (o " so well")] "see eye-to-eye")
                ". But lately, I’ve really been enjoying "
                (r "having them around" "having them around the ship" "their company") ". "
                (o [(o "It ")
                    (o (r "certainly" "definitely")) " "
                    (r "helps keep" "keeps") " "
                    (r "me from getting bored" "me on my toes" "the boredom away") "!"])]
         :ok [[:add-memory crew-1 :got-along-with-crewmate]
              [:add-memory crew-2 :got-along-with-crewmate]]})}

{:id :info-crew-unfriendly
 :prereq #(not (contains? (:recent-picks %) :info-crew-friendly))
 :bind   [[:annoyed (db/some* db/crew)]
          [:annoyer #(db/some-where % (partial not= (-> % :bound :annoyed)) db/crew)]]
 :weight #(if (<= (db/avg-crew-mood %) 40) 4 2)
 :gen (fn [{{:keys [annoyed annoyer]} :bound}]
        {:type :info
         :speaker annoyed
         :text ["I can’t stand it anymore. " (:shortname annoyer) " "
                (r "is driving me" "is going to drive me") " "
                (r "crazy" "insane" "mad" "nuts") "!"]
         :ok [[:add-memory annoyed :was-annoyed-by-crewmate]
              [:add-memory annoyer :annoyed-crewmate]]})}

{:id :info-crew-lonely
 :prereq (every-pred #(= (count (:crew %)) 1) (comp empty? db/passengers))
 :bind   {:complainer (db/some* db/crew)}
 :weight (constantly 2)
 :gen (fn [{{:keys [complainer]} :bound}]
        {:type :info
         :speaker complainer
         :text ["Kinda " (r "lonely" "quiet") " around here, isn’t it, Cap’n? "
                "I’m starting to think maybe we should hire on another crew member just for the company."]
         :ok [[:add-memory complainer :felt-lonely]]})}

{:id :info-too-many-passengers
 :prereq #(> (count (db/passengers %)) (count (:crew %)))
 :bind   {:complainer (db/some* db/crew)}
 :weight #(js/Math.pow 2 (- (count (db/passengers %)) (count (:crew %))))
 :gen (fn [{{:keys [complainer]} :bound :as state}]
        (let [dest (:name (db/current-dest state))]
          {:type :info
           :speaker complainer
           :text ["There are too many passengers on board this boat! "
                  ;; TODO variants replacing "they"/"them" with a specific passenger name?
                  (r ["I can’t get any" (r " shut-eye" " sleep" "thing done" " work done")
                      (o " with them around") " – they keep"]
                     ["It’s impossible to get any" (r " shut-eye" " sleep" "thing done" " work done")
                      " " (o "around here ") "with them" (r " always" " constantly" "")]
                     "They keep"
                     ["They’re " (r "always" "constantly")]) " "
                  (r "acting like tourists and" "eating all the food and"
                     "hogging the bathroom and" "stumbling around the corridors and" "")
                  "getting underfoot. "
                  (r ["Can’t wait until we can " (o "finally") " let them off at " dest "."]
                     "Dammit, Cap’n, we’re a trading vessel, not a cruise ship!"
                     ["I’ll be so glad to see them go when we get to " dest "."]
                     "")]
           :ok [[:add-memory complainer :was-annoyed-by-passenger]]}))}

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
                  (r "compensate you" "pay you a little extra") " – " [:cash tip]
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
         :text [(r "Looks like we made it"
                   "Looks like we made it in one piece"
                   "Made it in one piece")
                ", Cap’n! Now approaching " (:name (db/current-dest state)) "."]
         :ok [[:begin-arrival]]})}
])
