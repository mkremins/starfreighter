(ns starfreighter.app
  (:require [clojure.string :as str]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [starfreighter.cards :as cards]
            [starfreighter.gen :as gen]
            [starfreighter.geom :as geom]
            [starfreighter.util :as util]))

(defn restart-game [& _]
  (let [places (gen/gen-places)
        place (get places (rand-nth (keys places)))
        state {:stats {:cash 40 :ship 40 :crew 40}
               :crew [(gen/gen-character place :crew) (gen/gen-character place :crew)]
               :cargo []
               :max-crew 3
               :max-cargo 3
               :places places
               :deck cards/port-deck
               :docked? true
               :location (:name place)
               :turn 0
               :recent-picks #{:offer-join-crew}} ; to simulate having just "hired" starting crew
        card (cards/draw-next-card state)]
    (-> state (assoc :card card)
              (update :recent-picks conj (:id card)))))

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
      (let [speaker (:speaker data)
            role (when-not (string? speaker) (some-> speaker :role name))]
        (dom/span {:class (str "speaker " role)}
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
                        :mechanic "🔧"
                        :unconscious "😵"
                        :injured "🤕"
                        :sick "🤒"}]
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

(defcomponent galaxy-map [data owner]
  (render [_]
    (let [map-size    480
          places      (:places data)
          lang-names  (distinct (map (comp :name :language) (vals places)))
          lang-colors (zipmap lang-names
                              ["lightcoral" "gold" "darkseagreen" "cadetblue" "mediumpurple" "lightsalmon"])
          core-ring
          (loop [ring [(:name (first (filter :hub? (vals places))))]]
            (let [prev (get places (last ring))
                  in-core-ring?
                  (fn [name]
                    (let [place (get places name)]
                      (or (:hub? place)
                          (and (:border? place)
                               (or (:hub? prev)
                                   (not= (:name (:language place)) (:name (:language prev))))))))]
              (if-let [next
                       (->> (:connections prev)
                            (remove (set ring))
                            (filter in-core-ring?)
                            (first))]
                (recur (conj ring next))
                ring)))
          ring-angles  (zipmap core-ring (range 0 360 (/ 360 (count core-ring))))
          place-points (zipmap core-ring
                               (map #(geom/displace {:x (/ map-size 2) :y (/ map-size 2)}
                                       (get ring-angles %) 140)
                                    core-ring))
          place-points
          (apply merge place-points
            (for [hub (filter (comp :hub? places) core-ring)
                  :let [angle (get ring-angles hub)
                        point (get place-points hub)
                        non-ring-spokes (remove place-points (get-in places [hub :connections]))
                        spoke-angles (rest (range (- angle 90) (+ angle 90) (/ 180 (inc (count non-ring-spokes)))))
                        spoke-points (map #(geom/displace point % 70) spoke-angles)]]
              (zipmap non-ring-spokes spoke-points)))
          connections
          (->> (for [{:keys [name connections]} (vals places)
                     connection connections]
                 (sort [name connection]))
               (distinct)
               (map (partial mapv place-points)))]
      (dom/svg {:class "galaxy-map"
                :xmlns "http://www.w3.org/2000/svg"
                :width map-size
                :height map-size
                :viewBox (str "0 0 " map-size " " map-size)}
        (dom/g {:class "connections"}
          (for [[{x1 :x y1 :y} {x2 :x y2 :y}] connections]
            (dom/line {:x1 x1 :y1 y1 :x2 x2 :y2 y2})))
        (dom/g {:class "places"}
          (for [place (vals places)
                :let [{:keys [hub? name]} place
                      {:keys [x y]} (get place-points name)
                      color  (get lang-colors (:name (:language place)))
                      radius (if hub? 16 10)]]
            (dom/g {:class (cond-> "map-location" hub? (str " hub"))}
              (dom/circle {:cx x :cy y :r radius :fill color})
              (dom/text {:x x
                         :y (- y (+ radius 4))
                         :text-anchor "middle"
                         :font-size 12}
                name))))))))

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
        (om/build cargo-list data))
      (om/build galaxy-map data))))

(defn init! []
  (enable-console-print!)
  (om/root app app-state {:target (js/document.getElementById "app")}))

(init!)
