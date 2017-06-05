(ns starfreighter.app
  (:require [clojure.string :as str]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [starfreighter.cards :as cards]
            [starfreighter.gen :as gen]
            [starfreighter.util :as util]))

(defn restart-game [& _]
  (let [state {:stats {:cash 50 :ship 50 :crew 50}
               :crew [(gen/gen-character) (gen/gen-character)]
               :cargo []
               :max-crew 4
               :max-cargo 4
               :docked? true
               :location (rand-nth cards/places)
               :turn 0}
        card (cards/draw-next-card state)]
    (assoc state :card card :recent-picks #{(:id card)})))

(defonce app-state
  (atom (restart-game)))

(defn handle-choice [decision state]
  (let [update-fn (get-in state [:card decision])
        state' (update-fn state)
        card (cards/draw-next-card state')]
    (-> state'
        (assoc :card card)
        (update :recent-picks conj (:id card))
        (update :turn inc)
        (dissoc :next-card))))

(defcomponent card-view [data owner]
  (render [_]
    (dom/div {:class "card"}
      (dom/span {:class "speaker"}
        (let [speaker (:speaker data)]
          (cond-> speaker (not (string? speaker)) :name)))
      " " (:text data)
      (when (= (:type data) :game-over)
        (dom/p {:class "game-over"} "[Game Over]")))))

(defcomponent choice-buttons [data owner]
  (render [_]
    (dom/div {:class "choices"}
      (case (:type (:card data))
        :yes-no
          [(dom/div {:class "choice no"
                     :on-click #(om/transact! data (partial handle-choice :no))}
             "👎")
           (dom/div {:class "choice yes"
                     :on-click #(om/transact! data (partial handle-choice :yes))}
             "👍")]
        :info
          (dom/div {:class "choice ok"
                    :on-click #(om/transact! data (partial handle-choice :ok))}
            (or (:icon (:card data)) "👌"))
        :game-over
          (dom/div {:class "choice restart"
                    :on-click #(om/transact! data restart-game)}
            (if (:deadly? (:card data)) "☠️" "🔁"))))))

(defcomponent stat-bars [data owner]
  (render [_]
    (dom/div {:class "stats"}
      (let [crew-icon
            (util/bucket (:crew data)
              [[20 "😡"] [40 "😒"] [60 "😐"] [80 "🙂"] [100 "😃"]])]
        (for [[stat icon] [[:cash "💰"] [:ship "🚀"] [:crew crew-icon]]]
          (dom/div {:class (str "stat " (name stat))}
            (dom/div {:class "stat-label"} icon)
            (dom/div {:class "stat-bar"}
              (dom/div {:class "stat-bar-fill"
                        :style {:width (str (get data stat) "%")}}))))))))

(defcomponent crew-slot [data owner]
  (render [_]
    (dom/p {:class "slot crew"}
      (if data
        (dom/span {}
          (:name data)
          (let [traits (:traits data)
                icons  {:fighter "👊"
                        :medic "💊"
                        :mechanic "🔧"}]
            (when (pos? (count traits))
              (str " " (str/join (map icons traits))))))
        " "))))

(defcomponent crew-list [data owner]
  (render [_]
    (dom/div {:class "list crew"}
      (dom/h2 "Crew")
      (dom/div {}
        (for [i (range (:max-crew data))]
          (om/build crew-slot (get (:crew data) i)))))))

(defcomponent cargo-slot [data owner]
  (render [_]
    (dom/p {:class "slot cargo"}
      (if data
        (dom/span {}
          (:name data)
          (let [destination (:destination data)]
            (if destination
              (str " ➡️ " destination)
              "")))
        " "))))

(defcomponent cargo-list [data owner]
  (render [_]
    (dom/div {:class "list cargo"}
      (dom/h2 "Cargo")
      (dom/div {}
        (for [i (range (:max-cargo data))]
          (om/build cargo-slot (get (:cargo data) i)))))))

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"}
      (dom/div {:class "location"}
        (if (:docked? data)
          (:location data)
          (str "En route to: " (:destination data))))
      (om/build card-view (:card data))
      (om/build choice-buttons data)
      (om/build stat-bars (:stats data))
      (dom/div {:class "lists"}
        (om/build crew-list data)
        (om/build cargo-list data)))))

(defn init! []
  (enable-console-print!)
  (om/root app app-state {:target (js/document.getElementById "app")}))

(init!)
