(ns starfreighter.geom)

(defn deg->rad [deg]
  (* deg (/ js/Math.PI 180)))

(defn rad->deg [rad]
  (* rad (/ 180 js/Math.PI)))

(defn sin [deg]
  (js/Math.sin (deg->rad deg)))

(defn cos [deg]
  (js/Math.cos (deg->rad deg)))

(defn displace [point angle distance]
  {:x (+ (:x point) (* distance (sin angle)))
   :y (+ (:y point) (* distance (cos angle)))})

(defn interpolate [{x1 :x y1 :y} {x2 :x y2 :y} frac-dist]
  {:x (+ (* (- x2 x1) frac-dist) x1)
   :y (+ (* (- y2 y1) frac-dist) y1)})
