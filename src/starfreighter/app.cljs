(ns starfreighter.app
  (:require [clojure.string :as str]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [starfreighter.cards :as cards]
            [starfreighter.rand :as rand]))

(defn draw-next-card [state]
  (let [deck     (filter #((:prereq %) state) (if (:docked? state) cards/port-deck cards/starbound-deck))
        weights  (zipmap deck (map #((:weight %) state) deck))
        metacard (rand/weighted-choice weights)]
    ((:gen metacard))))

(defonce app-state
  (let [state {:stats {:cash 50 :ship 50 :crew 50}
               :crew [{:name "Kellen Choi" :traits #{:mechanic}}]
               :cargo []
               :docked? true}]
    (atom (assoc state :card (draw-next-card state)))))

(defn handle-choice [decision state]
  (let [update-fn (get-in state [:card decision])
        state'    (update-fn state)]
    (assoc state' :card (draw-next-card state'))))

(defcomponent card-view [data owner]
  (render [_]
    (dom/div {:class "card"}
      (:text data))))

(defcomponent choice-buttons [data owner]
  (render [_]
    (dom/div {:class "choices"}
      (dom/div {:class "choice no"
                :on-click #(om/transact! data (partial handle-choice :no))}
        "👎")
      (dom/div {:class "choice yes"
                :on-click #(om/transact! data (partial handle-choice :yes))}
        "👍"))))

(defcomponent stat-bars [data owner]
  (render [_]
    (dom/div {:class "stats"}
      (for [[stat-name icon] [[:cash "💰"] [:ship "🚀"] [:crew "😐"]]]
        (dom/div {:class (str "stat " (name stat-name))}
          (dom/div {:class "stat-label"} icon)
          (dom/div {:class "stat-bar"}
            (dom/div {:class "stat-bar-fill"
                      :style {:width (str (get data stat-name) "%")}})))))))

(defcomponent crew-member [data owner]
  (render [_]
    (dom/p {:class "crew-member"}
      (dom/strong (:name data))
      (let [traits (:traits data)]
        (when (pos? (count traits))
          (str " [" (str/join "; " (map name traits)) "]"))))))

(defcomponent crew-list [data owner]
  (render [_]
    (dom/div {:class "crew-list"}
      (dom/h2 "crew")
      (dom/div {}
        (if (zero? (count data))
          (dom/span {:class "empty"} "No crew to show")
          (om/build-all crew-member data))))))

(defcomponent cargo-item [data owner]
  (render [_]
    (dom/p {:class "cargo-item"}
      (dom/strong (:name data))
      (let [destination (:destination data)]
        (if destination
          (str " [destination: " destination "]")
          "")))))

(defcomponent cargo-list [data owner]
  (render [_]
    (dom/div {:class "cargo-list"}
      (dom/h2 "cargo")
      (dom/div {}
        (if (zero? (count data))
          (dom/span {:class "empty"} "No cargo to show")
          (om/build-all cargo-item data))))))

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"}
      (om/build card-view (:card data))
      (om/build choice-buttons data)
      (om/build stat-bars (:stats data))
      (om/build crew-list (:crew data))
      (om/build cargo-list (:cargo data)))))

(defn init! []
  (enable-console-print!)
  (om/root app app-state {:target (js/document.getElementById "app")}))

(init!)
