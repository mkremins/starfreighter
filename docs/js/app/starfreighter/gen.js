// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('starfreighter.gen');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('starfreighter.lang');
goog.require('starfreighter.rand');
goog.require('starfreighter.db');
goog.require('clojure.math.combinatorics');
goog.require('starfreighter.geom');
goog.require('starfreighter.util');
goog.require('clojure.string');
var next_id_17976 = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
starfreighter.gen.gen_id = ((function (next_id_17976){
return (function starfreighter$gen$gen_id(){
var id = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(next_id_17976) : cljs.core.deref.call(null,next_id_17976));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(next_id_17976,cljs.core.inc);

return id;
});})(next_id_17976))
;
starfreighter.gen.nicknames = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Arrow","Barker","Bird","Cat","Divvy","Dizzy","Fidget","Howler","Lefty","Lucky","Mouse","Quark","Sand","Savvy","Snake","Snapper","Sneak","Spanner","Specs","Trick","Wolf"], null);
starfreighter.gen.single_letter_nicknames = cljs.core.PersistentHashMap.fromArrays(["T","K","L","G","J","M","S","Y","Z","R","C","F","B","V","N","I","D"],["Tee","Kay","Ell","Gee","Jay","Em","Ess","Why","Zee","Arr","Cee","Eff","Bee","Vee","En","Eye","Dee"]);
starfreighter.gen.gen_nickname = (function starfreighter$gen$gen_nickname(fname,lname){
return starfreighter.util.bucket(starfreighter.rand.rand.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [.9,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [.95,starfreighter.rand.rand_nth(starfreighter.gen.nicknames)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.get.cljs$core$IFn$_invoke$arity$3(starfreighter.gen.single_letter_nicknames,cljs.core.first(fname),cljs.core.first(fname))], null)], null));
});
starfreighter.gen.gen_traits = (function starfreighter$gen$gen_traits(){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,starfreighter.rand.rand_nth(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fighter,cljs.core.cst$kw$mechanic,cljs.core.cst$kw$medic,null,null,null], null))),starfreighter.rand.rand_nth(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$generous,cljs.core.cst$kw$stingy,null,null,null,null], null))),starfreighter.rand.rand_nth(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trustworthy,cljs.core.cst$kw$untrustworthy,null,null,null,null], null))),null);
});
starfreighter.gen.gen_character = (function starfreighter$gen$gen_character(var_args){
var args17977 = [];
var len__7479__auto___17983 = arguments.length;
var i__7480__auto___17984 = (0);
while(true){
if((i__7480__auto___17984 < len__7479__auto___17983)){
args17977.push((arguments[i__7480__auto___17984]));

var G__17985 = (i__7480__auto___17984 + (1));
i__7480__auto___17984 = G__17985;
continue;
} else {
}
break;
}

var G__17979 = args17977.length;
switch (G__17979) {
case 2:
return starfreighter.gen.gen_character.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return starfreighter.gen.gen_character.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17977.length)].join('')));

}
});

starfreighter.gen.gen_character.cljs$core$IFn$_invoke$arity$2 = (function (state,place){
var culture = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cultures,cljs.core.cst$kw$culture.cljs$core$IFn$_invoke$arity$1(place)], null));
var language = cljs.core.cst$kw$language.cljs$core$IFn$_invoke$arity$1(culture);
var vec__17980 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,starfreighter.rand.unique_runs.cljs$core$IFn$_invoke$arity$variadic((2),starfreighter.lang.gen_word,cljs.core.array_seq([language], 0)));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17980,(0),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17980,(1),null);
var nick = starfreighter.gen.gen_nickname(fname,lname);
var nick_only_QMARK_ = (function (){var and__6392__auto__ = nick;
if(cljs.core.truth_(and__6392__auto__)){
return starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$2((1),(4));
} else {
return and__6392__auto__;
}
})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$id,starfreighter.gen.gen_id(),cljs.core.cst$kw$type,cljs.core.cst$kw$char,cljs.core.cst$kw$name,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(nick_only_QMARK_)?null:fname),(cljs.core.truth_(nick)?[cljs.core.str("\u201C"),cljs.core.str(nick),cljs.core.str("\u201D")].join(''):null),lname], null))),cljs.core.cst$kw$shortname,(function (){var or__6404__auto__ = nick;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return fname;
}
})(),cljs.core.cst$kw$traits,starfreighter.gen.gen_traits(),cljs.core.cst$kw$home,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(place),cljs.core.cst$kw$culture,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(culture),cljs.core.cst$kw$memories,cljs.core.PersistentVector.EMPTY], null);
});

starfreighter.gen.gen_character.cljs$core$IFn$_invoke$arity$3 = (function (state,place,role){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(starfreighter.gen.gen_character.cljs$core$IFn$_invoke$arity$2(state,place),cljs.core.cst$kw$role,role);
});

starfreighter.gen.gen_character.cljs$lang$maxFixedArity = 3;

starfreighter.gen.gen_local_character = (function starfreighter$gen$gen_local_character(var_args){
var args17987 = [];
var len__7479__auto___17990 = arguments.length;
var i__7480__auto___17991 = (0);
while(true){
if((i__7480__auto___17991 < len__7479__auto___17990)){
args17987.push((arguments[i__7480__auto___17991]));

var G__17992 = (i__7480__auto___17991 + (1));
i__7480__auto___17991 = G__17992;
continue;
} else {
}
break;
}

var G__17989 = args17987.length;
switch (G__17989) {
case 1:
return starfreighter.gen.gen_local_character.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.gen.gen_local_character.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17987.length)].join('')));

}
});

starfreighter.gen.gen_local_character.cljs$core$IFn$_invoke$arity$1 = (function (state){
return starfreighter.gen.gen_character.cljs$core$IFn$_invoke$arity$2(state,starfreighter.db.current_place(state));
});

starfreighter.gen.gen_local_character.cljs$core$IFn$_invoke$arity$2 = (function (state,role){
return starfreighter.gen.gen_character.cljs$core$IFn$_invoke$arity$3(state,starfreighter.db.current_place(state),role);
});

starfreighter.gen.gen_local_character.cljs$lang$maxFixedArity = 2;

starfreighter.gen.distance_tiers = (function starfreighter$gen$distance_tiers(state){
var place = starfreighter.db.current_place(state);
var first_tier = cljs.core.vec(cljs.core.cst$kw$connections.cljs$core$IFn$_invoke$arity$1(place));
var tiers = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_tier], null);
var visited = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(first_tier),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(place));
while(true){
var this_tier = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(visited,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$connections,cljs.core.cst$kw$places.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.array_seq([cljs.core.last(tiers)], 0)))));
if(cljs.core.empty_QMARK_(this_tier)){
return tiers;
} else {
var G__17994 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiers,this_tier);
var G__17995 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(visited,this_tier);
tiers = G__17994;
visited = G__17995;
continue;
}
break;
}
});
starfreighter.gen.rand_dest_with_dist = (function starfreighter$gen$rand_dest_with_dist(state){
var tiers = starfreighter.gen.distance_tiers(state);
var indexes = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiers));
var weights = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tiers,indexes){
return (function (p1__17996_SHARP_){
return Math.pow((5),p1__17996_SHARP_);
});})(tiers,indexes))
,indexes));
var index = starfreighter.rand.weighted_choice(cljs.core.zipmap(indexes,weights));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.rand.rand_nth(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiers,index)),(index + (1))], null);
});
starfreighter.gen.rand_base_pay = (function starfreighter$gen$rand_base_pay(payer){
if(cljs.core.truth_((starfreighter.db.generous_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.generous_QMARK_.cljs$core$IFn$_invoke$arity$1(payer) : starfreighter.db.generous_QMARK_.call(null,payer)))){
return starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((4),(5));
} else {
if(cljs.core.truth_((starfreighter.db.stingy_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.stingy_QMARK_.cljs$core$IFn$_invoke$arity$1(payer) : starfreighter.db.stingy_QMARK_.call(null,payer)))){
return starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((2),(3));
} else {
return starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((3),(4));

}
}
});
starfreighter.gen.rand_base_price = (function starfreighter$gen$rand_base_price(seller){
if(cljs.core.truth_((starfreighter.db.generous_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.generous_QMARK_.cljs$core$IFn$_invoke$arity$1(seller) : starfreighter.db.generous_QMARK_.call(null,seller)))){
return starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((4),(5));
} else {
if(cljs.core.truth_((starfreighter.db.stingy_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.stingy_QMARK_.cljs$core$IFn$_invoke$arity$1(seller) : starfreighter.db.stingy_QMARK_.call(null,seller)))){
return starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((6),(7));
} else {
return starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((5),(6));

}
}
});
starfreighter.gen.gen_normal_delivery_job = (function starfreighter$gen$gen_normal_delivery_job(state){
var temp__4657__auto__ = starfreighter.db.some_trusting_merchant(state);
if(cljs.core.truth_(temp__4657__auto__)){
var merchant = temp__4657__auto__;
var vec__18000 = starfreighter.gen.rand_dest_with_dist(state);
var dest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18000,(0),null);
var dist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18000,(1),null);
var rep = starfreighter.db.calc_mood(merchant);
var real_pay = ((starfreighter.gen.rand_base_pay(merchant) * dist) * (1000));
var split_pay_QMARK_ = (cljs.core.truth_((starfreighter.db.stingy_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.stingy_QMARK_.cljs$core$IFn$_invoke$arity$1(merchant) : starfreighter.db.stingy_QMARK_.call(null,merchant)))?false:(cljs.core.truth_((function (){var and__6392__auto__ = (starfreighter.db.generous_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.generous_QMARK_.cljs$core$IFn$_invoke$arity$1(merchant) : starfreighter.db.generous_QMARK_.call(null,merchant));
if(cljs.core.truth_(and__6392__auto__)){
return (rep >= (0));
} else {
return and__6392__auto__;
}
})())?true:(((rep <= (0)))?false:(((rep <= (10)))?starfreighter.rand.weighted_choice(new cljs.core.PersistentArrayMap(null, 2, [true,(1),false,(5)], null)):(((rep <= (20)))?starfreighter.rand.weighted_choice(new cljs.core.PersistentArrayMap(null, 2, [true,(2),false,(4)], null)):(((rep <= (30)))?starfreighter.rand.weighted_choice(new cljs.core.PersistentArrayMap(null, 2, [true,(3),false,(3)], null)):(((rep <= (40)))?starfreighter.rand.weighted_choice(new cljs.core.PersistentArrayMap(null, 2, [true,(4),false,(2)], null)):(((rep <= (50)))?starfreighter.rand.weighted_choice(new cljs.core.PersistentArrayMap(null, 2, [true,(5),false,(1)], null)):null))))))));
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,cljs.core.cst$kw$cargo,cljs.core.cst$kw$name,starfreighter.rand.rand_nth(cljs.core.cst$kw$exports.cljs$core$IFn$_invoke$arity$1(starfreighter.db.current_place(state))),cljs.core.cst$kw$destination,dest,cljs.core.cst$kw$distance,dist,cljs.core.cst$kw$merchant,merchant,cljs.core.cst$kw$pay_DASH_before,(cljs.core.truth_(split_pay_QMARK_)?(real_pay / (2)):(0)),cljs.core.cst$kw$pay_DASH_after,(cljs.core.truth_(split_pay_QMARK_)?(real_pay / (2)):real_pay)], null);
} else {
return null;
}
});
starfreighter.gen.gen_passenger_delivery_job = (function starfreighter$gen$gen_passenger_delivery_job(state){
var vec__18006 = starfreighter.gen.rand_dest_with_dist(state);
var dest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18006,(0),null);
var dist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18006,(1),null);
var passenger = starfreighter.gen.gen_local_character.cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(passenger,cljs.core.cst$kw$destination,dest,cljs.core.array_seq([cljs.core.cst$kw$distance,dist,cljs.core.cst$kw$passenger_QMARK_,true,cljs.core.cst$kw$pay_DASH_before,((starfreighter.gen.rand_base_pay(passenger) * dist) * (1000))], 0));
});
starfreighter.gen.gen_goods_for_sale = (function starfreighter$gen$gen_goods_for_sale(state){
var temp__4657__auto__ = starfreighter.db.some_trusting_merchant(state);
if(cljs.core.truth_(temp__4657__auto__)){
var seller = temp__4657__auto__;
var stuff = (starfreighter.db.rand_export.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.rand_export.cljs$core$IFn$_invoke$arity$1(state) : starfreighter.db.rand_export.call(null,state));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$cargo,cljs.core.cst$kw$name,stuff,cljs.core.cst$kw$seller,seller,cljs.core.cst$kw$price,(((3) * starfreighter.gen.rand_base_price(seller)) * (1000)),cljs.core.cst$kw$counterfeit_QMARK_,starfreighter.rand.weighted_choice((cljs.core.truth_((starfreighter.db.trustworthy_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.trustworthy_QMARK_.cljs$core$IFn$_invoke$arity$1(seller) : starfreighter.db.trustworthy_QMARK_.call(null,seller)))?new cljs.core.PersistentArrayMap(null, 2, [true,(1),false,(4)], null):(cljs.core.truth_((starfreighter.db.untrustworthy_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.untrustworthy_QMARK_.cljs$core$IFn$_invoke$arity$1(seller) : starfreighter.db.untrustworthy_QMARK_.call(null,seller)))?new cljs.core.PersistentArrayMap(null, 2, [true,(4),false,(1)], null):new cljs.core.PersistentArrayMap(null, 2, [true,(1),false,(2)], null)
)))], null);
} else {
return null;
}
});
starfreighter.gen.gen_culture = (function starfreighter$gen$gen_culture(){
var language = starfreighter.lang.gen_language();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,starfreighter.gen.gen_id(),cljs.core.cst$kw$type,cljs.core.cst$kw$culture,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(language),cljs.core.cst$kw$language,language], null);
});
starfreighter.gen.gen_cultures = (function starfreighter$gen$gen_cultures(){
return starfreighter.util.indexed_by(cljs.core.cst$kw$id,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((5),(6)),starfreighter.gen.gen_culture));
});
starfreighter.gen.goods = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, ["antimatter","carbon dioxide","computronium","dark matter","exotic matter","explosives","fertilizer","gold","grain","livestock","medicine","metamatter","oxygen","spice","synthstim","weapons","water"], null);
starfreighter.gen.all_modules = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$template,cljs.core.cst$kw$agriculture,cljs.core.cst$kw$imports,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["water","fertilizer"], null),cljs.core.cst$kw$exports,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grain","livestock"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$aristocracy], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$corruption], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$diplomacy], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$gambling], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$hospital], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$template,cljs.core.cst$kw$independence,cljs.core.cst$kw$imports,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["explosives","weapons"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$megacorp], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$template,cljs.core.cst$kw$mining,cljs.core.cst$kw$exports,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gold"], null),cljs.core.cst$kw$imports,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["explosives"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$neutral], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$piracy], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$prohibition], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$template,cljs.core.cst$kw$quarantine,cljs.core.cst$kw$imports,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["medicine"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$template,cljs.core.cst$kw$reactor,cljs.core.cst$kw$exports,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["antimatter","dark matter","exotic matter"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$religion], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$template,cljs.core.cst$kw$shipyard], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$template,cljs.core.cst$kw$tourism,cljs.core.cst$kw$excludes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$warzone,null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$template,cljs.core.cst$kw$warzone,cljs.core.cst$kw$imports,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["explosives","weapons"], null),cljs.core.cst$kw$excludes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tourism,null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$template,cljs.core.cst$kw$weapons,cljs.core.cst$kw$exports,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["explosives","weapons"], null)], null)], null);
starfreighter.gen.gen_modules = (function starfreighter$gen$gen_modules(){
var modules = cljs.core.PersistentVector.EMPTY;
while(true){
if((cljs.core.count(modules) >= (3))){
return modules;
} else {
var excludes = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$template,modules)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$excludes,modules));
var export_QMARK_ = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$exports,cljs.core.array_seq([modules], 0)));
var import_QMARK_ = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$imports,cljs.core.array_seq([modules], 0)));
var pickable = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (modules,excludes,export_QMARK_,import_QMARK_){
return (function (p1__18011_SHARP_){
return cljs.core.not_any_QMARK_(import_QMARK_,cljs.core.cst$kw$exports.cljs$core$IFn$_invoke$arity$1(p1__18011_SHARP_));
});})(modules,excludes,export_QMARK_,import_QMARK_))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (modules,excludes,export_QMARK_,import_QMARK_){
return (function (p1__18010_SHARP_){
return cljs.core.not_any_QMARK_(export_QMARK_,cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(p1__18010_SHARP_));
});})(modules,excludes,export_QMARK_,import_QMARK_))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (modules,excludes,export_QMARK_,import_QMARK_){
return (function (p1__18009_SHARP_){
return cljs.core.contains_QMARK_(excludes,cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(p1__18009_SHARP_));
});})(modules,excludes,export_QMARK_,import_QMARK_))
,starfreighter.gen.all_modules)));
if((cljs.core.count(pickable) > (0))){
var G__18012 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(modules,starfreighter.rand.rand_nth(pickable));
modules = G__18012;
continue;
} else {
return modules;
}
}
break;
}
});
starfreighter.gen.gen_place = (function starfreighter$gen$gen_place(culture){
var modules = starfreighter.gen.gen_modules();
var exports = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$exports,cljs.core.array_seq([modules], 0)));
var imports = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$imports,cljs.core.array_seq([modules], 0)));
var exports__$1 = (function (){var G__18015 = exports;
if((cljs.core.count(exports) < (3))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__18015,starfreighter.rand.pick_n(((3) - cljs.core.count(exports)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(imports,exports)),starfreighter.gen.goods)));
} else {
return G__18015;
}
})();
var imports__$1 = (function (){var G__18016 = imports;
if((cljs.core.count(imports) < (3))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__18016,starfreighter.rand.pick_n(((3) - cljs.core.count(imports)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(imports,exports__$1)),starfreighter.gen.goods)));
} else {
return G__18016;
}
})();
var place = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,cljs.core.cst$kw$place,cljs.core.cst$kw$name,clojure.string.capitalize(starfreighter.lang.gen_word(cljs.core.cst$kw$language.cljs$core$IFn$_invoke$arity$1(culture))),cljs.core.cst$kw$modules,modules,cljs.core.cst$kw$exports,exports__$1,cljs.core.cst$kw$imports,imports__$1,cljs.core.cst$kw$culture,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(culture)], null);
var merchants = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(starfreighter.rand.rand_nth(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(3)], null)),((function (modules,exports,imports,exports__$1,imports__$1,place){
return (function (){
return starfreighter.gen.gen_character.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cultures,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(culture),culture], true, false)], null),place,cljs.core.cst$kw$merchant);
});})(modules,exports,imports,exports__$1,imports__$1,place))
);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(place,cljs.core.cst$kw$merchants,merchants);
});
starfreighter.gen.point_is_ok_QMARK_ = (function starfreighter$gen$point_is_ok_QMARK_(points,p__18018){
var map__18021 = p__18018;
var map__18021__$1 = ((((!((map__18021 == null)))?((((map__18021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18021):map__18021);
var point = map__18021__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18021__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18021__$1,cljs.core.cst$kw$y);
return ((((40) <= x)) && ((x <= (440)))) && ((((40) <= y)) && ((y <= (420)))) && (cljs.core.every_QMARK_(((function (map__18021,map__18021__$1,point,x,y){
return (function (p1__18017_SHARP_){
return (starfreighter.geom.distance(p1__18017_SHARP_,point) >= (55));
});})(map__18021,map__18021__$1,point,x,y))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([point], true),points)));
});
starfreighter.gen.place_points = (function starfreighter$gen$place_points(){
var start = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,starfreighter.gen.gen_id(),cljs.core.cst$kw$x,starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((120),(360)),cljs.core.cst$kw$y,starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((120),(360)),cljs.core.cst$kw$connections,cljs.core.PersistentHashSet.EMPTY], null);
var points = cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(start),start], true, false);
var frontier = cljs.core.PersistentHashSet.fromArray([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(start)], true);
while(true){
if((cljs.core.count(frontier) > (0))){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(points,starfreighter.rand.rand_nth(cljs.core.vec(frontier)));
var offset = starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((0),(60));
var angles = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (points,frontier,parent,offset,start){
return (function (p1__18024_SHARP_){
return (p1__18024_SHARP_ < (360));
});})(points,frontier,parent,offset,start))
,cljs.core.iterate(((function (points,frontier,parent,offset,start){
return (function (p1__18023_SHARP_){
return (p1__18023_SHARP_ + starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((60),(120)));
});})(points,frontier,parent,offset,start))
,starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((0),(60))));
var dists = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(angles),((function (points,frontier,parent,offset,angles,start){
return (function (){
return starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((55),(80));
});})(points,frontier,parent,offset,angles,start))
);
var kids = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(starfreighter.geom.displace,parent),angles,dists);
var kids__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points,frontier,parent,offset,angles,dists,kids,start){
return (function (p1__18025_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__18025_SHARP_,cljs.core.cst$kw$id,starfreighter.gen.gen_id(),cljs.core.array_seq([cljs.core.cst$kw$connections,cljs.core.PersistentHashSet.fromArray([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(parent)], true)], 0));
});})(points,frontier,parent,offset,angles,dists,kids,start))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(starfreighter.gen.point_is_ok_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(points),kids)),kids));
var G__18026 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$connections], null),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,kids__$1)),starfreighter.util.indexed_by(cljs.core.cst$kw$id,kids__$1)], 0));
var G__18027 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(frontier,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(parent)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,kids__$1));
points = G__18026;
frontier = G__18027;
continue;
} else {
return points;
}
break;
}
});
starfreighter.gen.should_connect_QMARK_ = (function starfreighter$gen$should_connect_QMARK_(p1,p2){
return starfreighter.util.bucket(starfreighter.geom.distance(p1,p2),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(70),starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$1(0.8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(75),starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$1(0.6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$1(0.3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$1(0.1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$1(0.05)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),false], null)], null));
});
starfreighter.gen.make_extra_connections = (function starfreighter$gen$make_extra_connections(points){
var pairs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18029_SHARP_){
return starfreighter.gen.should_connect_QMARK_(cljs.core.first(p1__18029_SHARP_),cljs.core.second(p1__18029_SHARP_));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__18028_SHARP_){
return starfreighter.geom.distance(cljs.core.first(p1__18028_SHARP_),cljs.core.second(p1__18028_SHARP_));
}),clojure.math.combinatorics.combinations(cljs.core.vals(points),(2))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (points__$1,p__18038){
var vec__18039 = p__18038;
var map__18042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18039,(0),null);
var map__18042__$1 = ((((!((map__18042 == null)))?((((map__18042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18042):map__18042);
var id1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18042__$1,cljs.core.cst$kw$id);
var map__18043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18039,(1),null);
var map__18043__$1 = ((((!((map__18043 == null)))?((((map__18043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18043):map__18043);
var id2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18043__$1,cljs.core.cst$kw$id);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(points__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id1,cljs.core.cst$kw$connections], null),cljs.core.conj,id2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id2,cljs.core.cst$kw$connections], null),cljs.core.conj,id1);
});})(pairs))
,points,pairs);
});
starfreighter.gen.spread_cultures = (function starfreighter$gen$spread_cultures(points){
var points__$1 = points;
while(true){
var groups = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$culture,points__$1),cljs.core.keys(points__$1));
var unclaimed_ids = cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,null));
if(cljs.core.empty_QMARK_(unclaimed_ids)){
return points__$1;
} else {
var groups__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(groups,null);
var group_frontiers = cljs.core.zipmap(cljs.core.keys(groups__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points__$1,groups__$1,groups,unclaimed_ids){
return (function (p1__18047_SHARP_){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(p1__18047_SHARP_),unclaimed_ids);
});})(points__$1,groups__$1,groups,unclaimed_ids))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points__$1,groups__$1,groups,unclaimed_ids){
return (function (p1__18046_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$connections,points__$1),cljs.core.array_seq([p1__18046_SHARP_], 0));
});})(points__$1,groups__$1,groups,unclaimed_ids))
,cljs.core.vals(groups__$1))));
var vec__18051 = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.count,groups__$1,cljs.core.key),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.val),group_frontiers)));
var group_to_expand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18051,(0),null);
var frontier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18051,(1),null);
var _ = (((cljs.core.count(frontier) > (0)))?null:(function(){throw (new Error("Assert failed: (pos? (count frontier))"))})());
var expand_to_id = starfreighter.rand.rand_nth(cljs.core.vec(frontier));
var G__18054 = cljs.core.assoc_in(points__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expand_to_id,cljs.core.cst$kw$culture], null),group_to_expand);
points__$1 = G__18054;
continue;
}
break;
}
});
starfreighter.gen.points__GT_places = (function starfreighter$gen$points__GT_places(points,cultures){
var points__$1 = points;
var places = cljs.core.PersistentVector.EMPTY;
var names = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first(points__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var point = temp__4655__auto__;
var culture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cultures,cljs.core.cst$kw$culture.cljs$core$IFn$_invoke$arity$1(point));
var place = starfreighter.rand.restrict.cljs$core$IFn$_invoke$arity$variadic(((function (points__$1,places,names,culture,point,temp__4655__auto__){
return (function (p1__18055_SHARP_){
return !(cljs.core.contains_QMARK_(names,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__18055_SHARP_)));
});})(points__$1,places,names,culture,point,temp__4655__auto__))
,starfreighter.gen.gen_place,cljs.core.array_seq([culture], 0));
var G__18056 = cljs.core.rest(points__$1);
var G__18057 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(places,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([point,place], 0)));
var G__18058 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(names,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(place));
points__$1 = G__18056;
places = G__18057;
names = G__18058;
continue;
} else {
return places;
}
break;
}
});
starfreighter.gen.gen_map = (function starfreighter$gen$gen_map(){
var cultures = starfreighter.gen.gen_cultures();
var points = starfreighter.gen.place_points();
var points__$1 = starfreighter.gen.make_extra_connections(points);
var points__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cultures,points,points__$1){
return (function (points__$2,p__18064){
var vec__18065 = p__18064;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18065,(0),null);
var culture_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18065,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(points__$2,id,cljs.core.assoc,cljs.core.cst$kw$hub_QMARK_,true,cljs.core.cst$kw$culture,cljs.core.array_seq([culture_id], 0));
});})(cultures,points,points__$1))
,points__$1,cljs.core.zipmap(starfreighter.rand.shuffle(cljs.core.keys(points__$1)),cljs.core.keys(cultures)));
var points__$3 = starfreighter.gen.spread_cultures(points__$2);
var places = starfreighter.util.indexed_by(cljs.core.cst$kw$id,starfreighter.gen.points__GT_places(cljs.core.vals(points__$3),cultures));
var places__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cultures,points,points__$1,points__$2,points__$3,places){
return (function (p1__18059_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__18059_SHARP_,cljs.core.cst$kw$connections,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,places)));
});})(cultures,points,points__$1,points__$2,points__$3,places))
,cljs.core.vals(places));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cultures,cultures,cljs.core.cst$kw$places,places__$1], null);
});
