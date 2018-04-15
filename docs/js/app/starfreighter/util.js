// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('starfreighter.util');
goog.require('cljs.core');
/**
 * Given a numerical `value` and a seq of pairs `[threshold bucket]`, returns
 *   the value of `bucket` for the first pair where `value` <= `threshold`.
 */
starfreighter.util.bucket = (function starfreighter$util$bucket(value,threshold_bucket_pairs){
return cljs.core.second(cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p__16480){
var vec__16481 = p__16480;
var threshold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16481,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16481,(1),null);
return (value > threshold);
}),threshold_bucket_pairs)));
});
starfreighter.util.clamp = (function starfreighter$util$clamp(value,lo,hi){
var x__6742__auto__ = (function (){var x__6735__auto__ = value;
var y__6736__auto__ = lo;
return ((x__6735__auto__ > y__6736__auto__) ? x__6735__auto__ : y__6736__auto__);
})();
var y__6743__auto__ = hi;
return ((x__6742__auto__ < y__6743__auto__) ? x__6742__auto__ : y__6743__auto__);
});
/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
starfreighter.util.distinct_by = (function starfreighter$util$distinct_by(var_args){
var args16484 = [];
var len__7479__auto___16497 = arguments.length;
var i__7480__auto___16498 = (0);
while(true){
if((i__7480__auto___16498 < len__7479__auto___16497)){
args16484.push((arguments[i__7480__auto___16498]));

var G__16499 = (i__7480__auto___16498 + (1));
i__7480__auto___16498 = G__16499;
continue;
} else {
}
break;
}

var G__16486 = args16484.length;
switch (G__16486) {
case 1:
return starfreighter.util.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.util.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16484.length)].join('')));

}
});

starfreighter.util.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__16501 = null;
var G__16501__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__16501__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__16501__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen) : cljs.core.deref.call(null,seen)),fx)){
return result;
} else {
cljs.core._vreset_BANG_(seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__16501 = function(result,x){
switch(arguments.length){
case 0:
return G__16501__0.call(this);
case 1:
return G__16501__1.call(this,result);
case 2:
return G__16501__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16501.cljs$core$IFn$_invoke$arity$0 = G__16501__0;
G__16501.cljs$core$IFn$_invoke$arity$1 = G__16501__1;
G__16501.cljs$core$IFn$_invoke$arity$2 = G__16501__2;
return G__16501;
})()
;})(seen))
});
});

starfreighter.util.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function starfreighter$util$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__16493,seen__$1){
while(true){
var vec__16494 = p__16493;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16494,(0),null);
var xs__$1 = vec__16494;
var temp__4657__auto__ = cljs.core.seq(xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__16502 = cljs.core.rest(s);
var G__16503 = seen__$1;
p__16493 = G__16502;
seen__$1 = G__16503;
continue;
} else {
return cljs.core.cons(x,starfreighter$util$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

starfreighter.util.distinct_by.cljs$lang$maxFixedArity = 2;

starfreighter.util.error = (function starfreighter$util$error(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16505 = arguments.length;
var i__7480__auto___16506 = (0);
while(true){
if((i__7480__auto___16506 < len__7479__auto___16505)){
args__7486__auto__.push((arguments[i__7480__auto___16506]));

var G__16507 = (i__7480__auto___16506 + (1));
i__7480__auto___16506 = G__16507;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return starfreighter.util.error.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

starfreighter.util.error.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,strs)));
});

starfreighter.util.error.cljs$lang$maxFixedArity = (0);

starfreighter.util.error.cljs$lang$applyTo = (function (seq16504){
return starfreighter.util.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16504));
});

/**
 * Returns a map from `(f item)` to `item` for every `item` in `coll`.
 */
starfreighter.util.indexed_by = (function starfreighter$util$indexed_by(f,coll){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll),coll);
});
/**
 * Converts the value `n` from a (presumably linear) scale `[old-min old-max]`
 *   to the new scale `[new-min new-max]`, using a power function with exponent
 *   `exp` to perform the conversion.
 */
starfreighter.util.pow_scale = (function starfreighter$util$pow_scale(exp,n,p__16508,p__16509){
var vec__16518 = p__16508;
var old_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16518,(0),null);
var old_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16518,(1),null);
var vec__16521 = p__16509;
var new_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16521,(0),null);
var new_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16521,(1),null);
var old_range = (old_max - old_min);
var new_range = (new_max - new_min);
return (((function (){var G__16524 = ((n - old_min) / old_range);
var G__16525 = exp;
return Math.pow(G__16524,G__16525);
})() * new_range) + new_min);
});
starfreighter.util.sift = (function starfreighter$util$sift(pred,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
