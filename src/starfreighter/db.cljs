(ns starfreighter.db
  (:refer-clojure :exclude [char? rand rand-int rand-nth shuffle])
  (:require [starfreighter.rand :as rand :refer [rand-nth]]
            [starfreighter.util :as util :refer-macros [defcurried]]))

;;; queries

(defcurried some* [state query]
  (some->> (query state) seq rand-nth))

(defcurried some-where [state pred query]
  (some->> (query state) (filter pred) seq rand-nth))

(defcurried some-preferably [state pred query]
  (let [results (query state)]
    (or (some->> (filter pred results) seq rand-nth)
        (some->> results seq rand-nth))))

(defcurried var*
  "Used to retrieve vars bound in a card's :bind clause from the state."
  [state var-name]
  (get (:bound state) var-name))

(defcurried enforce
  "Used in a card's :bind clause to ensure that an earlier bound var passes the
  predicate `pred`."
  [state pred]
  (or (pred state) nil))


;;; generic predicates

(defn char? [thing]
  (= (:type thing) :char))


;;; stats

(defcurried can-afford? [state amount]
  (>= (:cash state) amount))

(defcurried earn [state amount]
  (update state :cash #(+ % (js/Math.abs amount))))

(defcurried spend [state amount]
  (update state :cash #(- % (js/Math.abs amount))))


(defcurried repair-ship [state amount]
  (update state :ship #(util/clamp (+ % amount) 0 100)))

(defcurried damage-ship [state amount]
  (update state :ship #(util/clamp (- % amount) 0 100)))


;;; characters

(defcurried remember-char [state char]
  (assoc-in state [:chars (:id char)] char))

(defcurried forget-char [state char]
  (update state :chars dissoc (:id char)))

(defn ->char [state char-or-id]
  (cond->> char-or-id (number? char-or-id) (get-in state [:chars char-or-id])))

(defcurried update-char [state char f]
  ;; would love to add `& args` at the end, but can't have multiple variadic clauses :(
  (update-in state [:chars (:id char)] f))

(defcurried from? [char place]
  (= (:home char) (:name place)))

(defcurried has-trait? [char trait]
  (contains? (:traits char) trait))

;; skills
(def fighter?       (has-trait? :fighter))
(def mechanic?      (has-trait? :mechanic))
(def medic?         (has-trait? :medic))
;; personality traits
(def generous?      (has-trait? :generous))
(def stingy?        (has-trait? :stingy))
(def trustworthy?   (has-trait? :trustworthy))
(def untrustworthy? (has-trait? :untrustworthy))
;; temporary "status effects"
(def unconscious?   (has-trait? :unconscious))

(defcurried add-trait* [char trait]
  (update char :traits conj trait))

(defcurried drop-trait* [char trait]
  (update char :traits disj trait))

(defcurried add-memory* [char memory]
  (update char :memories conj memory))

(defcurried add-trait [state char trait]
  (update-char state char (add-trait* trait)))

(defcurried drop-trait [state char trait]
  (update-char state char (drop-trait* trait)))

(defcurried add-memory [state char memory]
  (update-char state char (add-memory* memory)))

(def base-mood-values
  {;; crew
   :hired +10
   :gave-bonus +10
   :declined-bonus-request -5
   :declined-depart-request -5
   :backed-down-from-bar-fight -5
   :won-bar-fight +5
   :won-collector-fight +15
   :went-gambling-did-poorly +5
   :went-gambling-broke-even +10
   :went-gambling-did-well +15
   :went-out-drinking +10
   :crewmate-resigned +5
   :visited-home +5
   :fixed-engine +10
   :failed-to-fix-engine -10
   :witnessed-failure -10
   :ran-out-of-cash -15
   :was-reassured-about-cash +5
   :got-along-with-crewmate +5
   :was-annoyed-by-crewmate -10
   :annoyed-crewmate -5
   :felt-lonely -5
   :was-annoyed-by-passenger -10
   :was-inconvenienced-by-passenger -5
   ;; merchants
   :bought-goods +1
   :completed-delivery +5
   :sold-goods +2
   :refused-repay-fought-collector -20
   :tried-sell-counterfeit-goods -10})

(defn calc-mood [char]
  (let [generous?  (generous? char)
        stingy?    (stingy? char)
        total-mood (reduce + 50
                     (for [memory (:memories char)
                           :let [value (get base-mood-values memory)
                                 _     (assert value)]]
                       (if (neg? value)
                         (cond generous? (/ value 2) stingy? (* value 2) :else value)
                         (cond generous? (* value 2) stingy? (/ value 2) :else value))))]
    (util/clamp total-mood 0 100)))

(defcurried mood-at-least? [char amount]
  (>= (calc-mood char) amount))

(defcurried mood-at-most? [char amount]
  (<= (calc-mood char) amount))


;;; crew

(defn open-crew-slots [state]
  (- (:max-crew state) (count (:crew state))))

(def can-hold-more-crew?
  (comp pos? open-crew-slots))

(defcurried add-crew [state char]
  (-> state
      (remember-char (assoc char :role :crew))
      (add-memory char :hired)
      (update :crew conj (:id char))))

(defcurried drop-crew [state char]
  (-> state
      (forget-char char) ;; ok for now, but will probably want to hang onto ex-crew later
      (update :crew disj (:id char))))

(defn crew [state]
  (map (partial ->char state) (:crew state)))

(defn avg-crew-mood [state]
  (let [crew (crew state)]
    (/ (reduce + (map calc-mood crew)) (count crew))))

(defcurried update-all-crew [state f]
  (reduce (fn [state crew] (update-char state crew f)) state (crew state)))

(defcurried add-whole-crew-memory [state memory]
  (update-all-crew state (add-memory* memory)))


;;; places, the map

(defcurried ^:private travel-stage=? [state stage]
  (= (:stage (:travel state)) stage))

(def in-port?    (travel-stage=? :in-port))
(def departing?  (travel-stage=? :departing))
(def in-transit? (travel-stage=? :in-transit))
(def arriving?   (travel-stage=? :arriving))

(defn current-place [{:keys [travel] :as state}]
  (when-let [place-name (case (:stage travel)
                          (:arriving :in-port) (:at travel)
                          :departing (:from travel)
                          :in-transit nil)]
    (get (:places state) place-name)))

(defn current-dest [{:keys [travel] :as state}]
  (when-let [dest-name (case (:stage travel)
                         :arriving (:at travel)
                         (:departing :in-transit) (:to travel)
                         :in-port nil)]
    (get (:places state) dest-name)))

(defn ->place [state place]
  (cond->> place (string? place) (get (:places state))))

(defn adjacencies [state place]
  (:connections (->place state place)))

(defn pathfind
  ([state to]
    (pathfind state (or (current-place state) (:from (:travel state))) to))
  ([state from to]
    (assert (or (string? from) (and (map? from) (= (:type from) :place))))
    (assert (or (string? to)   (and (map? to)   (= (:type to)   :place))))
    (let [from (cond-> from (map? from) :name)
          to   (cond-> to   (map? to)   :name)]
      (if (= from to)
        [from]
        (loop [paths [[from]]
               visited #{from}]
          (let [adjacencies* #(remove visited (adjacencies state %))
                paths' (mapcat #(map (partial conj %) (adjacencies* (peek %))) paths)]
            (or (first (filter #(= (peek %) to) paths'))
                (recur paths' (into visited (map peek paths'))))))))))

(defn rand-destination [state]
  (let [place (current-place state)]
    (rand-nth
      (conj (:connections place)
            (rand-nth (remove #{(:name place)} (keys (:places state))))))))

;; TODO: should this pay attention to [:travel :final-dest] if we have one saved?
(defn where-to-next [state]
  (let [place (current-place state)
        cargo-dests (filter identity (map :destination (:cargo state)))]
    (if (empty? cargo-dests)
      (rand-nth (:connections place))
      (->> (map (partial pathfind state) cargo-dests)
           (sort-by count <)
           (first)
           (last)))))


;;; travel state transitions

;; :in-port => :departing (when we're ready to leave port)
(defcurried begin-departure-for [state dest]
  (assert (in-port? state))
  (assoc state
    :travel {:stage :departing
             :from (:name (current-place state))
             :to (second (pathfind state dest))
             :final-dest dest}
    :recent-picks #{}))

;; :departing => :in-port (when something prevents us from leaving the system)
;;
;; TODO: not sure what should happen here – going back to normal in-port deck doesn't make sense really.
;; maybe any card that uses this effect will have to decide for itself by setting :deck/:next-card?
(defn abort-departure [state]
  (assert (departing? state))
  (assoc state
    :travel {:stage :in-port :at (:from (:travel state))}
    :recent-picks #{}))

;; :departing => :in-transit (when we successfully leave the system)
(defn depart [state]
  (assert (departing? state))
  (-> state
      (assoc-in [:travel :stage] :in-transit)
      (assoc :recent-picks #{})))

;; :in-transit => :arriving (when we arrive at the edge of the destination system)
(defn begin-arrival [state]
  (assert (in-transit? state))
  (-> state
      ;; Q: why not just `(assoc :travel ...)` here?
      ;; A: bc we want to preserve [:travel :final-dest] if we have one.
      (update :travel assoc :stage :arriving :at (:to (:travel state)))
      (update :travel dissoc :from :to)
      (assoc :recent-picks #{})))

;; :arriving => :in-transit
;;
;; when we decide, after arriving at the edge of a system but before getting into port,
;; to "bounce" onward to the next system (en route to [:travel :final-dest]) instead of
;; docking and starting a new in-port "episode" like we normally would.
(defn bounce [{:keys [travel] :as state}]
  (assert (and (arriving? state)
               (:final-dest travel)
               (not= (:at travel) (:final-dest travel))))
  (-> state
      (update :travel assoc
        :stage :in-transit
        :from (:at travel)
        :to (second (pathfind state (:final-dest travel))))
      (assoc :recent-picks #{})))

;; :arriving => :in-port (when we actually get into port in the destination system)
(defn arrive [state]
  (assert (arriving? state))
  (-> state
      (assoc-in [:travel :stage] :in-port)
      (assoc :recent-picks #{})))


;;; cargo, passengers

(defn open-cargo-slots [state]
  (- (:max-cargo state) (count (:cargo state))))

(def can-hold-more-cargo?
  (comp pos? open-cargo-slots))

(defcurried add-cargo [state cargo]
  (let [cargo (cond-> cargo (char? cargo) (assoc :role :passenger))]
    (update state :cargo conj cargo)))

(defcurried drop-cargo [state cargo]
  ;; TODO will cheat people out of duplicates if they have any
  (update state :cargo (comp vec (partial remove #{cargo}))))

(defn passengers [state]
  (filter char? (:cargo state)))

(defcurried import? [item place]
  (contains? (:imports place) (cond-> item (map? item) :name)))

(defcurried headed-to? [thing loc]
  (= (:destination thing) loc))

(defn headed-here? [state]
  (headed-to? (:name (current-place state))))

(defn cargo-to-drop [state]
  (->> state :cargo (remove char?) (filter (headed-here? state))))

(defn passengers-to-drop [state]
  (filter (headed-here? state) (passengers state)))

(defn freely-sellable? [cargo]
  (not (or (char? cargo) (:destination cargo))))

(defn some-sellable-cargo [state]
  (let [exports (set (:exports (current-place state)))
        cargo   (->> (:cargo state)
                     (filter freely-sellable?)
                     (remove #(contains? exports (:name %))))]
    (when (> (count cargo) 0) (rand-nth cargo))))


;;; jobs, merchants

(defn merchants [state]
  (map (partial ->char state) (:merchants (current-place state))))

(def rand-export
  (comp rand-nth :exports current-place))

(defn will-trust-with-normal-job? [merchant]
  (> (calc-mood merchant) -15))

(defn some-trusting-merchant [state]
  (some-where state will-trust-with-normal-job? merchants))


;;; cards

(defcurried set-next-card [state card]
  (assoc state :next-card card))

(defcurried set-deck [state deck]
  (assoc state :deck deck))

(defn unset-deck [state]
  (dissoc state :deck))


;;; effects

(def char-effect-fns
  {:add-trait  add-trait*
   :drop-trait drop-trait*
   :add-memory add-memory*
   :call       (fn [char f & args] (apply f char args))})

(defn process-char-effect [state char effect]
  (if-let [[op & args] effect]
    (if-let [f (get char-effect-fns op)]
      (update-char state char (apply f args))
      (util/error "No such char effect " op))
    (util/error "Expected char effect [:op &args], got " (pr-str effect))))

(def effect-fns
  {;; cash
   :earn                  earn
   :spend                 spend
   ;; ship
   :repair-ship           repair-ship
   :damage-ship           damage-ship
   ;; characters
   :remember-char         remember-char
   :forget-char           forget-char
   :update-char           update-char ;; TODO will need to be custom (using char effects)
   :add-memory            add-memory
   :add-trait             add-trait
   :drop-trait            drop-trait
   ;; crew
   :add-crew              add-crew
   :drop-crew             drop-crew
   :update-all-crew       update-all-crew ;; TODO will need to be custom (using char effects)
   :add-whole-crew-memory add-whole-crew-memory
   ;; travel
   :begin-departure-for   begin-departure-for
   :depart                depart
   :begin-arrival         begin-arrival
   :bounce                bounce
   :arrive                arrive
   ;; cargo
   :add-cargo             add-cargo
   :drop-cargo            drop-cargo
   ;; cards
   :set-next-card         set-next-card
   :set-deck              set-deck
   :unset-deck            unset-deck
   ;; generic
   :call                  (fn [state f & args] (apply f state args))
   })

(defn process-effect [state effect]
  (if-let [[op & args] effect]
    (if-let [f (get effect-fns op)]
      (apply f state args)
      (case op
        :update-char
          (let [[char char-effect] args]
            (process-char-effect state char char-effect))
        :update-all-crew
          (let [char-effect (second args)]
            (reduce #(process-char-effect %1 %2 char-effect) state (crew state)))
        ;else
          (util/error "No such effect " op)))
    (util/error "Expected effect [:op &args], got " (pr-str effect))))

(defn process-effects [state effects]
  (reduce process-effect state effects))
