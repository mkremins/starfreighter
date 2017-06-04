(ns starfreighter.cards
  (:require [starfreighter.gen :as gen]
            [starfreighter.rand :as rand]
            [starfreighter.util :as util]))

(defonce places [
"Cael" "Dolor" "Esgar" "Firth" "Gennar" "Laudan" "Maurni" "Rigel" "Salvation" "Torek"
])

(defonce goods [
"antimatter" "carbon dioxide" "dark matter" "fertilizer" "grain" "oxygen" "spice"
])

(defn rand-destination [state]
  (rand-nth (filter #(not= % (:location state)) places)))

(defn can-hold-more-cargo? [state]
  (< (count (:cargo state)) (:max-cargo state)))

(defn can-hold-more-crew? [state]
  (< (count (:crew state)) (:max-crew state)))

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
  (some #(and (:passenger? %)
              (= (:destination %) (:location state)))
        (:cargo state)))

(defn has-freely-sellable-cargo? [state]
  (some #(not (or (:passenger? %) (:destination %))) (:cargo state)))

(defn crew-member-with-trait
  ([trait] #(crew-member-with-trait % trait))
  ([state trait] (first (filter #(contains? (:traits %) trait) (:crew state)))))

(defn adjust-stat
  ([stat amount] #(adjust-stat % stat amount))
  ([state stat amount]
    (update-in state [:stats stat] #(-> % (+ amount) (min 100) (max 0)))))

(defonce port-deck [
{:prereq (every-pred (has-at-most? :ship 80) (has-at-least? :cash 40))
 :weight #(util/bucket (:ship (:stats %)) [[20 8] [40 6] [100 4]])
 :gen (fn [state]
        {:type :yes-no
         :speaker (gen/gen-name)
         :text (str "Looks like your ship’s in need of some repair – it’s practically falling apart! "
                    "Want me to help you out with that?")
         :yes #(-> % (adjust-stat :cash -40)
                     (adjust-stat :ship +20))
         :no identity})}

{:prereq can-hold-more-cargo?
 :weight (constantly 8)
 :gen (fn [state]
        (let [stuff      (rand-nth goods)
              dest       (rand-destination state)
              split-pay? (rand-nth [true false])
              pay-now    (if split-pay? 5 0)
              pay-later  (if split-pay? 5 10)]
          {:type :yes-no
           :speaker (gen/gen-name)
           :text (str "I’d like to enlist your services, Captain. Can you deliver this shipment of "
                      stuff " to " dest "? "
                      (if split-pay?
                        (str "You’ll get half the pay now, and half upon successful delivery of the " stuff ".")
                        (str "You’ll be paid in full when you make it to " dest ".")))
           :yes #(-> % (update :cargo conj {:name stuff :destination dest :pay pay-later})
                       (adjust-stat :cash pay-now))
           :no identity}))}

{:prereq (every-pred can-hold-more-cargo? (has-at-least? :cash 20))
 :weight (constantly 2)
 :gen (fn [state]
        (let [stuff (rand-nth goods)]
          {:type :yes-no
           :speaker (gen/gen-name)
           :text (str "Looking for " stuff "? Have I got a great deal for you! I’ve got the cheapest "
                      stuff " this side of " (rand-destination state) ".")
           :yes #(-> % (update :cargo conj {:name stuff :counterfeit? (rand-nth [true false false])})
                       (adjust-stat :cash -15))
           :no identity}))}

{:prereq has-freely-sellable-cargo?
 :weight (constantly 2)
 :gen (fn [state]
        (let [item    (rand-nth (remove #(or (:passenger? %) (:destination %)) (:cargo state)))
              stuff   (:name item)
              speaker (gen/gen-name)
              amount  (rand-nth [+20 +20 +30])]
          {:type :yes-no
           :speaker speaker
           :text (str "Hello, Captain. I’m in the market to buy some " stuff ", and it looks like "
                      "you’ve got some for sale. Want to make a deal?")
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
                                       " what’re you trynna pull? This " stuff " is counterfeit! "
                                       "Ain’t even worth a quarter credit!")
                            :ok (adjust-stat :cash (- amount))})))}))}

{:prereq can-hold-more-cargo?
 :weight (constantly 4)
 :gen (fn [state]
        (let [dest      (rand-destination state)
              passenger (assoc (gen/gen-crew-member) :destination dest :passenger? true)]
          {:type :yes-no
           :speaker (:name passenger)
           :text (str "I’m in need of safe passage to " dest ". Can you take me there?")
           :yes #(-> % (update :cargo conj passenger)
                       (adjust-stat :cash 10))
           :no identity}))}

{:prereq (every-pred can-hold-more-crew? (has-at-least? :cash 30))
 :weight (constantly 1)
 :gen (fn [_]
        (let [member (gen/gen-crew-member)]
          {:type :yes-no
           :speaker (:name member)
           :text "I’m looking for work, Captain. Any chance you’d have a place for someone like me in your crew?"
           :yes #(-> % (update :crew conj member)
                       (adjust-stat :cash -30))
           :no identity}))}

{:prereq (every-pred #(< (:max-crew %) 6) (has-at-least? :cash 60))
 :weight (constantly 1)
 :gen (fn [state]
        {:type :yes-no
         :speaker (gen/gen-name)
         :text (str "Your vessel looks a bit cramped, Captain. If you’d like, I could modify it "
                    "to give you a little more breathing room… for a fair price, of course.")
         :yes #(-> % (update :max-crew inc)
                     (adjust-stat :cash -60))
         :no identity})}

{:prereq (every-pred #(< (:max-cargo %) 6) (has-at-least? :cash 60))
 :weight (constantly 1)
 :gen (fn [state]
        {:type :yes-no
         :speaker (gen/gen-name)
         :text (str "You’re a spacer, yes? Surely it’d help your trade if you could carry more cargo at once. "
                    "How about I do you a favor and modify this bucket of bolts? For a price, of course.")
         :yes #(-> % (update :max-cargo inc)
                     (adjust-stat :cash -60))
         :no identity})}

{:prereq (has-at-least? :cash 40)
 :weight #(+ (util/bucket (:cash (:stats %)) [[60 1] [80 2] [100 3]])
             (util/bucket (:crew (:stats %)) [[40 3] [60 2] [80 1] [100 0]]))
 :gen (fn [state]
        {:type :yes-no
         :speaker (:name (rand-nth (:crew state)))
         :text (str "Say, Cap’n… we’ve all been working pretty hard lately, and the rest of the crew and I "
                    "were wondering if we might be due a small bonus for everything we do.")
         :yes #(-> % (adjust-stat :cash (* -5 (count (:crew %))))
                     (adjust-stat :crew (* +5 (count (:crew %)))))
         :no #(adjust-stat % :crew (* -2 (count (:crew %))))})}

{:prereq #(>= (count (:cargo %)) 2)
 :weight #(util/bucket (count (:cargo %)) [[2 1] [3 2] [4 4]])
 :gen (fn [state]
        {:type :yes-no
         :speaker (:name (rand-nth (:crew state)))
         :text (rand-nth ["We’re all getting pretty restless, Cap’n. How about we get a move on already?"
                          (str "Dunno ‘bout you, Cap’n, but it looks to me like the pickings to be had round here "
                               "are pretty slim. What do you say we shove off now?")])
         :yes #(assoc % :docked? false
                        :destination (or (rand-nth (filter identity (map :destination (:cargo %))))
                                         (rand-destination state)))
         :no #(adjust-stat % :crew -10)})}
])

(defonce starbound-deck [
{:prereq (constantly true)
 :weight (constantly 8)
 :gen (fn [state]
        (let [mechanic-if-any (crew-member-with-trait state :mechanic)]
          {:type :info
           :speaker (:name (or mechanic-if-any (rand-nth (:crew state))))
           :text "What in the blazes was that?! Cap’n, I think something big just hit the ship!"
           :ok #(adjust-stat % :ship -10)}))}

{:prereq #(> (count (:crew %)) 1)
 :weight #(if (>= (:crew (:stats %)) 60) 4 2)
 :gen (fn [state]
        (let [[crew-1 crew-2] (rand/pick-n 2 (:crew state))]
          {:type :info
           :speaker (:name crew-1)
           :text (str "Y’know, Cap’n, " (:name crew-2) " and I don’t always "
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
           :ok #(adjust-stat % :crew +5)}))}

{:prereq (every-pred can-hold-more-crew?
                     #(some :passenger? (:cargo %))
                     (has-at-least? :crew 60)
                     (has-at-least? :cash 20))
 :weight #(+ (util/bucket (count (:crew %)) [[1 3] [2 2] [3 1] [6 0]])
             (util/bucket (:crew (:stats %)) [[75 1] [90 2] [100 3]]))
 :gen (fn [state]
        (let [passenger (rand-nth (filter :passenger? (:cargo state)))]
          {:type :yes-no
           :speaker (:name passenger)
           :text (str "Seems like you could really use an extra pair of hands around here, Captain. "
                      "And I am looking for work… d’you think there might be a place for me in your crew?")
           :yes #(-> % (update :crew conj passenger)
                       (update :cargo (comp vec (partial remove #{passenger})))
                       (adjust-stat :cash -20))
           :no identity}))}

{:prereq (every-pred (crew-member-with-trait :mechanic) (has-at-most? :ship 60))
 :weight #(if (<= (:ship (:stats %)) 20) 2 1)
 :gen (fn [state]
        (let [mechanic (crew-member-with-trait state :mechanic)
              would-succeed? (rand-nth [true true false])
              next-if-yes
              (if would-succeed?
                {:type :info
                 :speaker (:name mechanic)
                 :text "Hah! Toldja I was up to the task."
                 :ok #(adjust-stat % :crew +10)}
                (let [speaker (or (first (filter #(not= % mechanic) (shuffle (:crew state)))) mechanic)]
                  {:type :info
                   :speaker (:name speaker)
                   :text (if (= speaker mechanic)
                           "Dammit… apparently you shouldn’t have trusted me after all."
                           (str "What a disaster! It’s just like I’m always saying: you can’t trust "
                                (:name mechanic) " with anything complicated. You should know that by now!"))
                   :ok #(adjust-stat % :crew -10)}))]
          {:type :yes-no
           :speaker (:name mechanic)
           :text (str "The engine’s really struggling, but I think I might know how to fix it! "
                      "It’s a bit dangerous, though. Can I give it a try?")
           :yes #(-> % (assoc :next-card next-if-yes)
                       (adjust-stat :ship (if would-succeed? +10 -15)))
           :no identity}))}

{:prereq (constantly true)
 :weight (constantly 4)
 :gen (fn [state]
        {:type :info
         :speaker (:name (rand-nth (:crew state)))
         :text (str "Looks like we made it, Cap’n! Now approaching " (:destination state) ".")
         :ok #(assoc % :docked? true :location (:destination %))})}
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
         :speaker (:name (rand-nth (:crew state)))
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
         :speaker (:name (rand-nth dropping))
         :text "Thanks for the ride, Captain! It’ll be good to get a fresh start here."
         :ok #(assoc % :cargo (vec keeping))})))

(defn draw-next-card [state]
  (or (applicable-game-over-if-any state)
      (applicable-arrival-if-any state)
      (:next-card state)
      (let [deck     (if (:docked? state) port-deck starbound-deck)
            pickable (filter #((:prereq %) state) deck)
            weights  (zipmap pickable (map #((:weight %) state) pickable))
            metacard (rand/weighted-choice weights)]
        ((:gen metacard) state))))
