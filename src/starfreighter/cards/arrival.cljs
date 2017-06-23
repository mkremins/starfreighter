(ns starfreighter.cards.arrival
  (:require [starfreighter.db :as db]))

(defn has-business-here? [{:keys [travel] :as state}]
  (or (= (:at travel) (:final-dest travel))
      (some (db/headed-here? state) (:cargo state))))

(def cards [

{:id :arrive-normally
 :prereq has-business-here?
 :weight (constantly 1)
 :gen (fn [state]
        {:type :info
         :text ["As you pull in from the edge of the system towards the spaceport, "
                "you see dozens of other ships tracing their own paths through the void."]
         :ok [[:arrive]]})}

{:id :chance-to-bounce
 :prereq (complement has-business-here?)
 :weight (constantly 1)
 :gen (fn [state]
        {:type :yes-no
         :speaker (db/some* state db/crew)
         :text ["I don’t think we’ve actually got any business here, Cap’n. "
                "Want to keep pressing on to " (:final-dest (:travel state)) "?"]
         :yes [[:bounce]]
         :no [[:call #(assoc-in % [:travel :final-dest] (:at (:travel %)))]
              [:arrive]]})}

])
