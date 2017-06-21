(ns starfreighter.app
  (:refer-clojure :exclude [rand rand-int rand-nth shuffle])
  (:require [clojure.string :as str]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [starfreighter.db :as db]
            [starfreighter.desc :as desc]
            [starfreighter.game :as game]
            [starfreighter.util :as util]))

(enable-console-print!)

(defonce app-state
  (atom (game/restart-game)))

(defcomponent info-link [data owner]
  (render [_]
    (let [linked (cond->> data (sequential? data) (get-in @app-state))]
      (dom/a {:class "info-link"
              :on-click #(do (.stopPropagation %)
                             (om/update! (om/root-cursor app-state) :info-target linked))}
        (:name linked)))))

(defcomponent content-span [data owner]
  (render [_]
    (if (sequential? data)
      (case (first data)
        :cash
          (let [amount (second data)]
            (dom/span {:class (str "cash-value " (if (neg? amount) "neg" "pos"))}
              (js/Math.abs (second data))))
        :subject
          (dom/strong (om/build-all content-span (rest data)))
        :link
          (om/build info-link (second data))
        ;else
          (dom/span (om/build-all content-span data)))
      (dom/span data))))

(defcomponent card-view [data owner]
  (render [_]
    (dom/div {:class "card"}
      (let [speaker (:speaker data)
            role (some-> speaker :role name)]
        (dom/span {:class (str "speaker " role)}
          (if role (om/build info-link speaker) (:name speaker))))
      " "
      (om/build content-span (:text data))
      (when (= (:type data) :game-over)
        (dom/p {:class "game-over"} "[Game Over]")))))

(defcomponent choice-buttons [data owner]
  (render [_]
    (dom/div {:class "choices"}
      (for [choice (:choices (:card data))]
        (dom/div {:class "choice"
                  :style {:background (:background choice)}
                  :on-click (fn [ev]
                              (.stopPropagation ev)
                              (om/transact! data #(game/handle-choice % (:effects choice))))}
          (:icon choice))))))

(defn mood->icon [mood]
  (util/bucket mood [[20 "😡"] [40 "😒"] [60 "😐"] [80 "🙂"] [100 "😃"]]))

(def trait->icon
  {:fighter     "👊"
   :medic       "💊"
   :mechanic    "🔧"
   :unconscious "😵"
   :injured     "🤕"
   :sick        "🤒"})

(defcomponent status-bar [data owner]
  (render [_]
    (dom/div {:class "status-bar"}
      (dom/span {:class "status cash"} (:cash data))
      (dom/span {:class "status ship"} (:ship data))
      (dom/span {:class "status mood"} (mood->icon (db/avg-crew-mood data)))
      (dom/span {:class (str "status here " (if (:docked? data) "port" "space"))}
        (om/build info-link
          [:places (if (:docked? data) (:location data) (:destination data))]))
      (dom/span {:class "status time"} (:turn data)))))

(defcomponent slot-details [data owner]
  (render [_]
    (dom/span {:class "details"}
      (let [traits (:traits data)
            mood   (when (= (:type data) :char) (mood->icon (db/calc-mood data)))
            dest   (:destination data)
            cash   (or (:pay-after data) (:price data))]
        (dom/span {}
          (dom/span {:class "mood"} mood)
          (dom/span {:class "traits"} (str/join (map trait->icon traits)))
          (when dest
            (dom/span {:class "dest"}
              (when (or mood traits) " ")
              (dom/span {:class "dest-icon"} "➡️ ")
              (om/build info-link [:places dest])))
          (when cash
            (dom/span {:class "pay"}
              (when (or mood traits dest) " ")
              (dom/span {:class "pay-icon"} "💰")
              cash))
          " ")))))

(defcomponent slot [data owner]
  (render [_]
    (dom/p {:class "slot crew"}
      (if data
        (dom/span {} (om/build info-link data))
        " ")
      (om/build slot-details data))))

(defcomponent crew-list [data owner]
  (render [_]
    (dom/div {:class "list crew"}
      (dom/h2 "Crew")
      (let [crew (vec (db/crew data))]
        (dom/div {}
          (for [i (range (:max-crew data))]
            (om/build slot (get crew i))))))))

(defcomponent cargo-list [data owner]
  (render [_]
    (dom/div {:class "list cargo"}
      (dom/h2 "Cargo")
      (dom/div {}
        (for [i (range (:max-cargo data))]
          (om/build slot (get (:cargo data) i)))))))

;;; map rendering stuff

(def ^:private map-colors ["lightcoral" "gold" "darkseagreen" "cadetblue" "mediumpurple" "lightsalmon"])
(def ^:private map-size 480)

(defcomponent starmap [data owner]
  (render [_]
    (let [{:keys [destination docked? info-target location places]} data
          target-place (when (= (:type info-target) :place) info-target)
          set-target!  (fn [target]
                         #(do (.stopPropagation %)
                              (om/update! data :info-target target)))]
      (dom/svg
        {:class "starmap"
         :xmlns "http://www.w3.org/2000/svg"
         :width map-size :height map-size
         :viewBox (str "0 0 " map-size " " map-size)}
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
                        [p1 p2] (map places ends)]]
              (dom/line
                {:class (cond here? "here" target? "target")
                 :x1 (:x p1) :y1 (:y p1) :x2 (:x p2) :y2 (:y p2)}))))
        ;; draw places
        (let [culture-ids    (distinct (map :culture (vals places)))
              culture-colors (zipmap culture-ids map-colors)
              job-dests      (set (map :destination (:cargo data)))]
          (dom/g {:class "places"}
            (for [{:keys [x y name] :as place} (vals places)
                  :let [color   (get culture-colors (:culture place))
                        dest?   (and (not docked?) (= name destination))
                        here?   (or (= name location) dest?)
                        job?    (contains? job-dests name)
                        target? (= name (:name target-place))
                        radius  (if (:hub? place) 16 10)]]
              (dom/g {:class (cond-> "map-location" here? (str " here") target? (str " target"))}
                (dom/circle
                  {:cx x :cy y :r radius :fill color
                   :on-click (set-target! place)})
                (dom/text
                  {:x x :y (- y (+ radius 4))
                   :text-anchor "middle" :font-size 12
                   :on-click (set-target! place)}
                  (dom/tspan (cond (and here? docked?) "📍" dest? "➡️ " job? "🚩"))
                  (dom/tspan name))))))
        ;; draw button to depart for target (if any)
        (when (some-> target-place :name (not= location))
          (let [enabled? (and docked? (game/interruptible? (:card data)))]
            (dom/text {:class (cond-> "depart-button" (not enabled?) (str " disabled"))
                       :x 468 :y 462 :text-anchor "end" :font-size 18
                       :on-click (if enabled?
                                   #(do (.stopPropagation %)
                                        (om/transact! data game/prepare-to-depart))
                                   #(.stopPropagation %))}
              (str "➡️ " (:name target-place)))))))))

(defcomponent info-box [data owner]
  (render [_]
    (when-let [target (or (:info-target data)
                          (and (:docked? data) (db/current-place data))
                          (get-in data [:places (:destination data)]))]
      (dom/div {:class "info-box"}
        (for [paragraph (desc/describe target)]
          (dom/p (om/build-all content-span paragraph)))))))

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"
              ;; clicking anywhere *except* on an info link should reset :info-target
              :on-click #(do (.stopPropagation %)
                             (om/update! data :info-target nil))}
      (dom/div {:class "left"}
        (om/build status-bar data)
        (om/build card-view (:card data))
        (om/build choice-buttons data)
        (dom/div {:class "lists"}
          (om/build crew-list data)
          (om/build cargo-list data)))
      (dom/div {:class "right"}
        (om/build starmap data)
        (om/build info-box data)))))

(defn init! []
  (om/root app app-state {:target (js/document.getElementById "app")}))

(init!)
