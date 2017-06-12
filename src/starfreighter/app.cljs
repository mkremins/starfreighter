(ns starfreighter.app
  (:require [clojure.string :as str]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [starfreighter.cards :as cards]
            [starfreighter.db :as db]
            [starfreighter.gen :as gen]
            [starfreighter.geom :as geom]
            [starfreighter.util :as util]))

(enable-console-print!)

(defn restart-game [& _]
  (let [places (gen/gen-places)
        place (get places (rand-nth (keys places)))
        state {:stats {:cash 40 :ship 40 :crew 40}
               :crew [(gen/gen-character place :crew) (gen/gen-character place :crew)]
               :cargo []
               :max-crew 3
               :max-cargo 3
               :places places
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
        (dom/span {:class (str "speaker " role)
                   :on-click (when role
                               #(om/update! (om/root-cursor app-state) :info-target speaker))}
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

;;; map rendering stuff

(def ^:private map-colors ["lightcoral" "gold" "darkseagreen" "cadetblue" "mediumpurple" "lightsalmon"])
(def ^:private map-size 480)

(defn- build-core-ring [places]
  (loop [ring [(:name (first (filter :hub? (vals places))))]]
    (let [prev (get places (peek ring))
          belongs-in-ring?
          (fn [place]
            (or (:hub? place)
                (and (:border? place)
                     (or (:hub? prev)
                         (not= (:name (:language place)) (:name (:language prev)))))))]
      (if-let [next
               (->> (:connections prev)
                    (remove (set ring))
                    (map places)
                    (filter belongs-in-ring?)
                    (first))]
        (recur (conj ring (:name next)))
        ring))))

(defn- layout-places [places]
  (let [core-ring    (build-core-ring places)
        ring-angles  (zipmap core-ring (range 0 360 (/ 360 (count core-ring))))
        map-center   {:x (/ map-size 2) :y (/ map-size 2)}
        place-points (zipmap core-ring (map #(geom/displace map-center (ring-angles %) 140) core-ring))]
    (apply merge place-points
      (for [hub (filter (comp :hub? places) core-ring)
            :let [angle (get ring-angles hub)
                  point (get place-points hub)
                  non-ring-spokes (remove place-points (get-in places [hub :connections]))
                  spoke-angles (rest (range (- angle 90) (+ angle 90) (/ 180 (inc (count non-ring-spokes)))))
                  spoke-points (map #(geom/displace point % 70) spoke-angles)]]
        (zipmap non-ring-spokes spoke-points)))))

(defcomponent galaxy-map [data owner]
  (render [_]
    (let [{:keys [destination docked? info-target location places]} data
          place-points (layout-places places)
          target-place (when (= (:type info-target) :place) info-target)
          set-target!  (fn [target ev]
                         (.stopPropagation ev)
                         (om/update! data :info-target target))]
      (dom/svg
        {:class "galaxy-map"
         :xmlns "http://www.w3.org/2000/svg"
         :width map-size :height map-size
         :viewBox (str "0 0 " map-size " " map-size)
         :on-click (partial set-target! nil)}
        ;; draw connections
        (let [target-path (some->> target-place (db/pathfind data) set)
              travel-ends [location destination]
              connections (->> (vals places)
                               (mapcat (fn [{:keys [name connections]}]
                                         (map #(-> [name %]) connections)))
                               (util/distinct-by set))]
          (dom/g {:class "connections"}
            (for [[end1 end2 :as conn-ends] connections
                  :let [here?   (and (not docked?) (= (set conn-ends) (set travel-ends)))
                        ends    (if here? travel-ends conn-ends)
                        target? (every? (partial contains? target-path) ends)
                        [p1 p2] (map place-points ends)]]
              (dom/line
                {:class (cond here? "here" target? "target")
                 :x1 (:x p1) :y1 (:y p1) :x2 (:x p2) :y2 (:y p2)}))))
        ;; draw places
        (let [lang-names  (distinct (map (comp :name :language) (vals places)))
              lang-colors (zipmap lang-names map-colors)
              job-dests   (set (map :destination (:cargo data)))]
          (dom/g {:class "places"}
            (for [{:keys [name] :as place} (vals places)
                  :let [{:keys [x y]} (get place-points name)
                        color   (get lang-colors (:name (:language place)))
                        dest?   (and (not docked?) (= name destination))
                        here?   (or (= name location) dest?)
                        job?    (contains? job-dests name)
                        target? (= name (:name target-place))
                        radius  (if (:hub? place) 16 10)]]
              (dom/g {:class (cond-> "map-location" here? (str " here") target? (str " target"))}
                (dom/circle
                  {:cx x :cy y :r radius :fill color
                   :on-click (partial set-target! place)})
                (dom/text
                  {:x x :y (- y (+ radius 4))
                   :text-anchor "middle" :font-size 12
                   :on-click (partial set-target! place)}
                  (dom/tspan (cond (and here? docked?) "📍" dest? "➡️ " job? "🚩"))
                  (dom/tspan name))))))
        ;; draw indicator of current location/travel
        (dom/text {:class "whereami"
                   :x (cond-> 12 docked? (- 4)) :y 462
                   :text-anchor "start" :font-size 18}
          (if docked? (str "📍 " location) (str "➡️ " destination)))
        ;; draw button to depart for target (if any)
        (when (some-> target-place :name (not= location))
          (let [enabled? (and docked? (cards/interruptible? (:card data)))]
            (dom/text {:class (cond-> "depart-button" (not enabled?) (str " disabled"))
                       :x 468 :y 462 :text-anchor "end" :font-size 18
                       :on-click (if enabled?
                                   #(do (.stopPropagation %)
                                        (om/transact! data cards/prepare-to-depart))
                                   #(.stopPropagation %))}
              (str "➡️ " (:name target-place)))))))))

(defcomponent info-span [data owner]
  (render [_]
    (if (sequential? data)
      (case (first data)
        :subject
          (dom/strong (om/build-all info-span (rest data)))
        :link
          (let [linked (second data)
                linked (cond->> linked (sequential? linked) (get-in @app-state))]
            (prn linked)
            (dom/a {:on-click #(om/update! (om/root-cursor app-state) :info-target linked)}
              (:name linked)))
        ;else
          (dom/span (om/build-all info-span data)))
      (dom/span data))))

(defcomponent info-box [data owner]
  (render [_]
    (when-let [target (or (:info-target data)
                          (and (:docked? data) (db/current-place data))
                          (get-in data [:places (:destination data)]))]
      (dom/div {:class "info-box"}
        (for [paragraph (gen/gen-description target)]
          (dom/p (om/build-all info-span paragraph)))))))

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"}
      (dom/div {:class "left"}
        (om/build card-view (:card data))
        (om/build choice-buttons data)
        (om/build stat-bars (:stats data))
        (dom/div {:class "lists"}
          (om/build crew-list data)
          (om/build cargo-list data)))
      (dom/div {:class "right"}
        (om/build galaxy-map data)
        (om/build info-box data)))))

(defn init! []
  (om/root app app-state {:target (js/document.getElementById "app")}))

(init!)
