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

(defn crew-member-with-trait
  ([trait] #(crew-member-with-trait % trait))
  ([state trait] (first (filter #(contains? (:traits %) trait) (:crew state)))))

(defn adjust-stat [state stat amount]
  (update-in state [:stats stat] #(-> % (+ amount) (min 100) (max 0))))

(defonce port-deck [
;; on arrival, drop off (and cash in) cargo you're supposed to deliver
{:prereq has-cargo-to-drop?
 :weight (constantly 50)
 :gen (fn [state]
        (let [[dropping keeping]
              (util/sift #(and (not (:passenger? %))
                               (= (:destination %) (:location state)))
                         (:cargo state))]
          {:type :info
           :speaker (:name (rand-nth (:crew state)))
           :text "I’ll go drop off the goods we’re supposed to deliver."
           :ok #(-> % (assoc :cargo (vec keeping))
                      (adjust-stat :cash (reduce + (map :pay dropping))))}))}

;; on arrival, drop off passengers you're supposed to deliver
{:prereq has-passengers-to-drop?
 :weight (constantly 50)
 :gen (fn [state]
        (let [[dropping keeping]
              (util/sift #(and (:passenger? %)
                               (= (:destination %) (:location state)))
                         (:cargo state))]
          {:type :info
           :speaker (:name (rand-nth dropping))
           :text "Thanks for the ride, Captain! It’ll be good to get a fresh start here."
           :ok #(assoc % :cargo (vec keeping))}))}

{:prereq can-hold-more-cargo?
 :weight (constantly 8)
 :gen (fn [state]
        (let [stuff      (rand-nth goods)
              dest       (rand-destination state)
              split-pay? (rand-nth [true false])
              pay-now    (if split-pay? 10 0)
              pay-later  (if split-pay? 10 20)]
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

{:prereq can-hold-more-cargo?
 :weight (constantly 4)
 :gen (fn [state]
        (let [dest (rand-destination state)
              name (gen/gen-name)]
          {:type :yes-no
           :speaker name
           :text (str "I’m in need of safe passage to " dest ". Can you take me there?")
           :yes #(-> % (update :cargo conj {:name name :destination dest :passenger? true})
                       (adjust-stat :cash 20))
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

{:prereq #(>= (count (:cargo %)) 2)
 :weight (constantly 4)
 :gen (fn [state]
        {:type :yes-no
         :speaker (:name (rand-nth (:crew state)))
         :text "We’re all getting pretty restless, Cap’n. How about we get a move on already?"
         :yes #(assoc % :docked? false
                        :destination (or (rand-nth (map :destination (:cargo %)))
                                         (rand-destination state)))
         :no #(adjust-stat % :crew -10)})}
])

(defonce starbound-deck [
{:prereq (constantly true)
 :weight (constantly 1)
 :gen (fn [state]
        (let [mechanic-if-any (crew-member-with-trait state :mechanic)]
          {:type :info
           :speaker (:name (or mechanic-if-any (rand-nth (:crew state))))
           :text "What in the blazes was that?! Cap’n, I think something big just hit the ship!"
           :ok #(adjust-stat % :ship -10)}))}

{:prereq (constantly true)
 :weight (constantly 1)
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

(defn draw-next-card [state]
  (or (applicable-game-over-if-any state)
      (let [deck     (if (:docked? state) port-deck starbound-deck)
            pickable (filter #((:prereq %) state) deck)
            weights  (zipmap pickable (map #((:weight %) state) pickable))
            metacard (rand/weighted-choice weights)]
        ((:gen metacard) state))))
