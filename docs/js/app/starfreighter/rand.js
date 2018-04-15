// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('starfreighter.rand');
goog.require('cljs.core');
goog.require('rand_cljc.core');
goog.require('starfreighter.util');
/**
 * The current RNG for the entire game. For controllable randomness, can be
 *   rebound to an RNG constructed with an explicit seed.
 */
starfreighter.rand._STAR_rng_STAR_ = rand_cljc.core.rng.cljs$core$IFn$_invoke$arity$0();
/**
 * Re-export the `rand-cljc.core/rng` RNG constructor fn so that consumers of
 *   this namespace don't need to import it separately.
 */
starfreighter.rand.rng = rand_cljc.core.rng;
starfreighter.rand.rand = (function starfreighter$rand$rand(var_args){
var args16555 = [];
var len__7479__auto___16558 = arguments.length;
var i__7480__auto___16559 = (0);
while(true){
if((i__7480__auto___16559 < len__7479__auto___16558)){
args16555.push((arguments[i__7480__auto___16559]));

var G__16560 = (i__7480__auto___16559 + (1));
i__7480__auto___16559 = G__16560;
continue;
} else {
}
break;
}

var G__16557 = args16555.length;
switch (G__16557) {
case 0:
return starfreighter.rand.rand.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return starfreighter.rand.rand.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16555.length)].join('')));

}
});

starfreighter.rand.rand.cljs$core$IFn$_invoke$arity$0 = (function (){
return rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$1(starfreighter.rand._STAR_rng_STAR_);
});

starfreighter.rand.rand.cljs$core$IFn$_invoke$arity$1 = (function (n){
return rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$2(starfreighter.rand._STAR_rng_STAR_,n);
});

starfreighter.rand.rand.cljs$lang$maxFixedArity = 1;

starfreighter.rand.rand_int = (function starfreighter$rand$rand_int(n){
return rand_cljc.core.rand_int(starfreighter.rand._STAR_rng_STAR_,n);
});
starfreighter.rand.rand_nth = (function starfreighter$rand$rand_nth(coll){
return rand_cljc.core.rand_nth(starfreighter.rand._STAR_rng_STAR_,coll);
});
starfreighter.rand.shuffle = (function starfreighter$rand$shuffle(coll){
return rand_cljc.core.shuffle(starfreighter.rand._STAR_rng_STAR_,coll);
});
/**
 * Returns approximately normally distributed random numbers between 0 and 1.
 *   Uses the central limit theorem (averaging `n` uniform random variates, where
 *   `n` defaults to 6).
 */
starfreighter.rand.approx_normal_rand = (function starfreighter$rand$approx_normal_rand(var_args){
var args16562 = [];
var len__7479__auto___16565 = arguments.length;
var i__7480__auto___16566 = (0);
while(true){
if((i__7480__auto___16566 < len__7479__auto___16565)){
args16562.push((arguments[i__7480__auto___16566]));

var G__16567 = (i__7480__auto___16566 + (1));
i__7480__auto___16566 = G__16567;
continue;
} else {
}
break;
}

var G__16564 = args16562.length;
switch (G__16564) {
case 0:
return starfreighter.rand.approx_normal_rand.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return starfreighter.rand.approx_normal_rand.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16562.length)].join('')));

}
});

starfreighter.rand.approx_normal_rand.cljs$core$IFn$_invoke$arity$0 = (function (){
return starfreighter.rand.approx_normal_rand.cljs$core$IFn$_invoke$arity$1((6));
});

starfreighter.rand.approx_normal_rand.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,starfreighter.rand.rand)) / n);
});

starfreighter.rand.approx_normal_rand.cljs$lang$maxFixedArity = 1;

/**
 * Like `clojure.core/rand-nth`, but biased towards earlier items in `pool`.
 *   Borrowed from [Martin O'Leary](http://mewo2.com/notes/naming-language).
 */
starfreighter.rand.biased_rand_nth = (function starfreighter$rand$biased_rand_nth(pool){
var r = starfreighter.rand.rand.cljs$core$IFn$_invoke$arity$0();
var r__$1 = (r * r);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pool,(function (){var G__16570 = (r__$1 * cljs.core.count(pool));
return Math.floor(G__16570);
})());
});
/**
 * Randomly returns either true (with probability `n`) or false (with
 *   probability `(- 1 n)`). If passed two arguments, will have an `m` in `n`
 *   chance of returning true.
 */
starfreighter.rand.chance = (function starfreighter$rand$chance(var_args){
var args16571 = [];
var len__7479__auto___16574 = arguments.length;
var i__7480__auto___16575 = (0);
while(true){
if((i__7480__auto___16575 < len__7479__auto___16574)){
args16571.push((arguments[i__7480__auto___16575]));

var G__16576 = (i__7480__auto___16575 + (1));
i__7480__auto___16575 = G__16576;
continue;
} else {
}
break;
}

var G__16573 = args16571.length;
switch (G__16573) {
case 1:
return starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16571.length)].join('')));

}
});

starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (starfreighter.rand.rand.cljs$core$IFn$_invoke$arity$0() < n);
});

starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$2 = (function (m,n){
return (starfreighter.rand.rand.cljs$core$IFn$_invoke$arity$0() < (m / n));
});

starfreighter.rand.chance.cljs$lang$maxFixedArity = 2;

/**
 * Randomly selects `n` items from `pool`, without replacement.
 */
starfreighter.rand.pick_n = (function starfreighter$rand$pick_n(n,pool){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,starfreighter.rand.shuffle(pool));
});
/**
 * Randomly selects `n` items from `pool`, with replacement.
 */
starfreighter.rand.pick_n_with_replacement = (function starfreighter$rand$pick_n_with_replacement(n,pool){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return starfreighter.rand.rand_nth(pool);
}));
});
/**
 * Like `clojure.core/rand-int`, but includes `n` in the range of possible
 *   outputs. Can also be passed two arguments to get a random integer between
 *   `lo` and `hi` (both inclusive).
 */
starfreighter.rand.rand_int_STAR_ = (function starfreighter$rand$rand_int_STAR_(var_args){
var args16578 = [];
var len__7479__auto___16581 = arguments.length;
var i__7480__auto___16582 = (0);
while(true){
if((i__7480__auto___16582 < len__7479__auto___16581)){
args16578.push((arguments[i__7480__auto___16582]));

var G__16583 = (i__7480__auto___16582 + (1));
i__7480__auto___16582 = G__16583;
continue;
} else {
}
break;
}

var G__16580 = args16578.length;
switch (G__16580) {
case 1:
return starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16578.length)].join('')));

}
});

starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((0),n);
});

starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (lo,hi){
return (lo + starfreighter.rand.rand_int(((hi + (1)) - lo)));
});

starfreighter.rand.rand_int_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Repeatedly runs `gen`, a generator fn, until the output passes `pred`, then
 *   returns the passing output. Extra `args`, if provided, are passed to `gen`.
 */
starfreighter.rand.restrict = (function starfreighter$rand$restrict(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16588 = arguments.length;
var i__7480__auto___16589 = (0);
while(true){
if((i__7480__auto___16589 < len__7479__auto___16588)){
args__7486__auto__.push((arguments[i__7480__auto___16589]));

var G__16590 = (i__7480__auto___16589 + (1));
i__7480__auto___16589 = G__16590;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return starfreighter.rand.restrict.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});

starfreighter.rand.restrict.cljs$core$IFn$_invoke$arity$variadic = (function (pred,gen,args){
var x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gen,args);
while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
var G__16591 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gen,args);
x = G__16591;
continue;
}
break;
}
});

starfreighter.rand.restrict.cljs$lang$maxFixedArity = (2);

starfreighter.rand.restrict.cljs$lang$applyTo = (function (seq16585){
var G__16586 = cljs.core.first(seq16585);
var seq16585__$1 = cljs.core.next(seq16585);
var G__16587 = cljs.core.first(seq16585__$1);
var seq16585__$2 = cljs.core.next(seq16585__$1);
return starfreighter.rand.restrict.cljs$core$IFn$_invoke$arity$variadic(G__16586,G__16587,seq16585__$2);
});

/**
 * Returns a generator fn that behaves like `gen`, but will only output values
 *   that pass `pred`. Uses `restrict` internally.
 */
starfreighter.rand.restricted = (function starfreighter$rand$restricted(pred,gen){
return (function() { 
var G__16593__delegate = function (rest__16592_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(starfreighter.rand.restrict,pred,gen,rest__16592_SHARP_);
};
var G__16593 = function (var_args){
var rest__16592_SHARP_ = null;
if (arguments.length > 0) {
var G__16594__i = 0, G__16594__a = new Array(arguments.length -  0);
while (G__16594__i < G__16594__a.length) {G__16594__a[G__16594__i] = arguments[G__16594__i + 0]; ++G__16594__i;}
  rest__16592_SHARP_ = new cljs.core.IndexedSeq(G__16594__a,0);
} 
return G__16593__delegate.call(this,rest__16592_SHARP_);};
G__16593.cljs$lang$maxFixedArity = 0;
G__16593.cljs$lang$applyTo = (function (arglist__16595){
var rest__16592_SHARP_ = cljs.core.seq(arglist__16595);
return G__16593__delegate(rest__16592_SHARP_);
});
G__16593.cljs$core$IFn$_invoke$arity$variadic = G__16593__delegate;
return G__16593;
})()
;
});
/**
 * Returns an infinite lazy sequence of repetitions of the items in `pool`
 *   (much like `clojure.core/cycle`), but randomizes the order of the items on
 *   each iteration of the cycle (much like `clojure.core/shuffle`).
 * 
 *   Useful when you have a finite pool to choose from and need an indefinite
 *   number of items, but want to avoid repetition as much as possible. The items
 *   in the pool will show up in a random order, but you're always guaranteed to
 *   see each item exactly once before any of them are repeated.
 */
starfreighter.rand.shuffle_cycle = (function starfreighter$rand$shuffle_cycle(pool){
var temp__4657__auto__ = cljs.core.seq(pool);
if(temp__4657__auto__){
var pool__$1 = temp__4657__auto__;
return (new cljs.core.LazySeq(null,((function (pool__$1,temp__4657__auto__){
return (function (){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(starfreighter.rand.shuffle(pool__$1),starfreighter$rand$shuffle_cycle(pool__$1));
});})(pool__$1,temp__4657__auto__))
,null,null));
} else {
return null;
}
});
/**
 * Repeatedly runs `gen`, a generator fn, until exactly `n` unique outputs have
 *   been generated. Extra `args`, if provided, are passed to `gen`.
 */
starfreighter.rand.unique_runs = (function starfreighter$rand$unique_runs(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16599 = arguments.length;
var i__7480__auto___16600 = (0);
while(true){
if((i__7480__auto___16600 < len__7479__auto___16599)){
args__7486__auto__.push((arguments[i__7480__auto___16600]));

var G__16601 = (i__7480__auto___16600 + (1));
i__7480__auto___16600 = G__16601;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return starfreighter.rand.unique_runs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});

starfreighter.rand.unique_runs.cljs$core$IFn$_invoke$arity$variadic = (function (n,gen,args){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gen,args);
}))));
});

starfreighter.rand.unique_runs.cljs$lang$maxFixedArity = (2);

starfreighter.rand.unique_runs.cljs$lang$applyTo = (function (seq16596){
var G__16597 = cljs.core.first(seq16596);
var seq16596__$1 = cljs.core.next(seq16596);
var G__16598 = cljs.core.first(seq16596__$1);
var seq16596__$2 = cljs.core.next(seq16596__$1);
return starfreighter.rand.unique_runs.cljs$core$IFn$_invoke$arity$variadic(G__16597,G__16598,seq16596__$2);
});

/**
 * Like a combination of `unique-runs` and the `medley.core/distinct-by` fn
 *   from [Medley](https://github.com/weavejester/medley). Repeatedly runs `gen`,
 *   a generator fn, until exactly `n` unique outputs have been generated, using
 *   `f` to determine uniqueness. Extra `args`, if provided, are passed to `gen`.
 */
starfreighter.rand.unique_runs_by = (function starfreighter$rand$unique_runs_by(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16606 = arguments.length;
var i__7480__auto___16607 = (0);
while(true){
if((i__7480__auto___16607 < len__7479__auto___16606)){
args__7486__auto__.push((arguments[i__7480__auto___16607]));

var G__16608 = (i__7480__auto___16607 + (1));
i__7480__auto___16607 = G__16608;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return starfreighter.rand.unique_runs_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

starfreighter.rand.unique_runs_by.cljs$core$IFn$_invoke$arity$variadic = (function (f,n,gen,args){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,starfreighter.util.distinct_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gen,args);
}))));
});

starfreighter.rand.unique_runs_by.cljs$lang$maxFixedArity = (3);

starfreighter.rand.unique_runs_by.cljs$lang$applyTo = (function (seq16602){
var G__16603 = cljs.core.first(seq16602);
var seq16602__$1 = cljs.core.next(seq16602);
var G__16604 = cljs.core.first(seq16602__$1);
var seq16602__$2 = cljs.core.next(seq16602__$1);
var G__16605 = cljs.core.first(seq16602__$2);
var seq16602__$3 = cljs.core.next(seq16602__$2);
return starfreighter.rand.unique_runs_by.cljs$core$IFn$_invoke$arity$variadic(G__16603,G__16604,G__16605,seq16602__$3);
});

/**
 * Randomly selects a key from the map `choices-with-weights`. The likelihood
 *   that a given key will be selected is determined by its weight, i.e. its
 *   associated non-negative numeric value in the map.
 */
starfreighter.rand.weighted_choice = (function starfreighter$rand$weighted_choice(choices_with_weights){
if(!(cljs.core.empty_QMARK_(choices_with_weights))){
} else {
throw (new Error("Assert failed: (not (empty? choices-with-weights))"));
}

var choices_with_thresholds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (choices_with_thresholds,p__16616){
var vec__16617 = p__16616;
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16617,(0),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16617,(1),null);
if((weight >= (0))){
} else {
throw (new Error("Assert failed: (>= weight 0)"));
}

var threshold = (weight + (function (){var or__6404__auto__ = (function (){var G__16621 = choices_with_thresholds;
var G__16621__$1 = (((G__16621 == null))?null:cljs.core.peek(G__16621));
if((G__16621__$1 == null)){
return null;
} else {
return cljs.core.val(G__16621__$1);
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})());
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(choices_with_thresholds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [choice,threshold], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.seq(choices_with_weights));
var r = (starfreighter.rand.rand.cljs$core$IFn$_invoke$arity$0() * cljs.core.val(cljs.core.peek(choices_with_thresholds)));
return cljs.core.key(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (choices_with_thresholds,r){
return (function (p1__16609_SHARP_){
return (r < cljs.core.val(p1__16609_SHARP_));
});})(choices_with_thresholds,r))
,choices_with_thresholds)));
});
