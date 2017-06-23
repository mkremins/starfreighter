(ns starfreighter.cards.departure
  (:require [starfreighter.db :as db]))

(def cards [

{:id :depart
 :weight (constantly 1)
 :gen (fn [state]
        {:type :info
         :text ["Your departure from " (:from (:travel state)) " is uneventful."]
         :ok [[:depart]]})}

])
