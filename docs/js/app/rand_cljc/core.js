// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('rand_cljc.core');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('goog.testing.PseudoRandom');

/**
 * @interface
 */
rand_cljc.core.IRandom = function(){};

rand_cljc.core._rand = (function rand_cljc$core$_rand(this$){
if((!((this$ == null))) && (!((this$.rand_cljc$core$IRandom$_rand$arity$1 == null)))){
return this$.rand_cljc$core$IRandom$_rand$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (rand_cljc.core._rand[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (rand_cljc.core._rand["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRandom.-rand",this$);
}
}
}
});

rand_cljc.core._shuffle = (function rand_cljc$core$_shuffle(this$,coll){
if((!((this$ == null))) && (!((this$.rand_cljc$core$IRandom$_shuffle$arity$2 == null)))){
return this$.rand_cljc$core$IRandom$_shuffle$arity$2(this$,coll);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (rand_cljc.core._shuffle[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$2(this$,coll) : m__7068__auto__.call(null,this$,coll));
} else {
var m__7068__auto____$1 = (rand_cljc.core._shuffle["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,coll) : m__7068__auto____$1.call(null,this$,coll));
} else {
throw cljs.core.missing_protocol("IRandom.-shuffle",this$);
}
}
}
});

goog.testing.PseudoRandom.prototype.rand_cljc$core$IRandom$ = true;

goog.testing.PseudoRandom.prototype.rand_cljc$core$IRandom$_rand$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.random();
});

goog.testing.PseudoRandom.prototype.rand_cljc$core$IRandom$_shuffle$arity$2 = (function (this$,coll){
var this$__$1 = this;
var arr = cljs.core.to_array(coll);
var G__16528_16530 = arr;
var G__16529_16531 = ((function (G__16528_16530,arr,this$__$1){
return (function (){
return this$__$1.random();
});})(G__16528_16530,arr,this$__$1))
;
goog.array.shuffle(G__16528_16530,G__16529_16531);

return cljs.core.vec(arr);
});
rand_cljc.core.rng = (function rand_cljc$core$rng(var_args){
var args16532 = [];
var len__7479__auto___16535 = arguments.length;
var i__7480__auto___16536 = (0);
while(true){
if((i__7480__auto___16536 < len__7479__auto___16535)){
args16532.push((arguments[i__7480__auto___16536]));

var G__16537 = (i__7480__auto___16536 + (1));
i__7480__auto___16536 = G__16537;
continue;
} else {
}
break;
}

var G__16534 = args16532.length;
switch (G__16534) {
case 0:
return rand_cljc.core.rng.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return rand_cljc.core.rng.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16532.length)].join('')));

}
});

rand_cljc.core.rng.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new goog.testing.PseudoRandom());
});

rand_cljc.core.rng.cljs$core$IFn$_invoke$arity$1 = (function (seed){
return (new goog.testing.PseudoRandom(seed));
});

rand_cljc.core.rng.cljs$lang$maxFixedArity = 1;

rand_cljc.core.rand = (function rand_cljc$core$rand(var_args){
var args16539 = [];
var len__7479__auto___16542 = arguments.length;
var i__7480__auto___16543 = (0);
while(true){
if((i__7480__auto___16543 < len__7479__auto___16542)){
args16539.push((arguments[i__7480__auto___16543]));

var G__16544 = (i__7480__auto___16543 + (1));
i__7480__auto___16543 = G__16544;
continue;
} else {
}
break;
}

var G__16541 = args16539.length;
switch (G__16541) {
case 1:
return rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16539.length)].join('')));

}
});

rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$1 = (function (rng){
return rand_cljc.core._rand(rng);
});

rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$2 = (function (rng,n){
return (n * rand_cljc.core._rand(rng));
});

rand_cljc.core.rand.cljs$lang$maxFixedArity = 2;

rand_cljc.core.rand_int = (function rand_cljc$core$rand_int(rng,n){
return ((n * rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$1(rng)) | (0));
});
rand_cljc.core.rand_nth = (function rand_cljc$core$rand_nth(rng,coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,rand_cljc.core.rand_int(rng,cljs.core.count(coll)));
});
rand_cljc.core.random_sample = (function rand_cljc$core$random_sample(var_args){
var args16546 = [];
var len__7479__auto___16549 = arguments.length;
var i__7480__auto___16550 = (0);
while(true){
if((i__7480__auto___16550 < len__7479__auto___16549)){
args16546.push((arguments[i__7480__auto___16550]));

var G__16551 = (i__7480__auto___16550 + (1));
i__7480__auto___16550 = G__16551;
continue;
} else {
}
break;
}

var G__16548 = args16546.length;
switch (G__16548) {
case 2:
return rand_cljc.core.random_sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rand_cljc.core.random_sample.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16546.length)].join('')));

}
});

rand_cljc.core.random_sample.cljs$core$IFn$_invoke$arity$2 = (function (rng,prob){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){
return (rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$1(rng) < prob);
}));
});

rand_cljc.core.random_sample.cljs$core$IFn$_invoke$arity$3 = (function (rng,prob,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){
return (rand_cljc.core.rand.cljs$core$IFn$_invoke$arity$1(rng) < prob);
}),coll);
});

rand_cljc.core.random_sample.cljs$lang$maxFixedArity = 3;

rand_cljc.core.shuffle = (function rand_cljc$core$shuffle(rng,coll){
return rand_cljc.core._shuffle(rng,coll);
});
