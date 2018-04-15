// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('starfreighter.lang');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('starfreighter.rand');
starfreighter.lang.possible_expressions = cljs.core.PersistentHashMap.fromArrays(["\u0101","B","\u0103","\u0283","F","J","\u028A","K","\u012B","\u014B","\u016B","\u012D","\u014D","\u016D","\u014F","\u00F0","\u0292","\u0113","\u0115","\u03B8","\u0259"],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ae","ai","ay","ei","ey","ue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","v"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sh"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f","ph","v"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["j","y"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["au","ou","ow"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c","ch","k","kh","q"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ai","i","y"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ng"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eu","oo","u"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["i","y"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["o","oe"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["u"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","aa","au","aw","o"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["th"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ch","s","sh","z","zh"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ea","ee","i","ie","y"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["th"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","e"], null)]);
starfreighter.lang.all_vowels = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0101","\u0113","\u012B","\u014D","\u016B","\u0103","\u0115","\u012D","\u014F","\u016D","\u028A","\u0259"], null);
starfreighter.lang.all_stops = new cljs.core.PersistentArrayMap(null, 8, ["B",(1),"d",(2),"g",(1),"K",(2),"m",(1),"n",(1),"p",(1),"t",(2)], null);
starfreighter.lang.all_liquids = new cljs.core.PersistentArrayMap(null, 4, ["J",(1),"l",(3),"r",(3),"w",(1)], null);
starfreighter.lang.all_sibilants = new cljs.core.PersistentArrayMap(null, 5, ["F",(1),"s",(8),"\u0283",(1),"\u03B8",(1),"\u0292",(1)], null);
starfreighter.lang.all_consonants = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["h"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.lang.all_stops,starfreighter.lang.all_liquids,starfreighter.lang.all_sibilants], null)));
starfreighter.lang.consonant_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.set(starfreighter.lang.all_consonants));
starfreighter.lang.vowel_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.set(starfreighter.lang.all_vowels));
starfreighter.lang.liquid_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.set(starfreighter.lang.all_liquids));
starfreighter.lang.sibilant_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.set(starfreighter.lang.all_sibilants));
starfreighter.lang.stop_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,starfreighter.lang.all_stops);
starfreighter.lang.gen_consonant_cluster = (function starfreighter$lang$gen_consonant_cluster(stops,liquids,sibilants){
var r = starfreighter.rand.rand.cljs$core$IFn$_invoke$arity$0();
if((r < 0.5)){
return starfreighter.rand.rand_nth(stops);
} else {
if((r < 0.625)){
return starfreighter.rand.rand_nth(liquids);
} else {
if((r < 0.75)){
return starfreighter.rand.rand_nth(sibilants);
} else {
if((r < 0.8)){
return [cljs.core.str(starfreighter.rand.rand_nth(stops)),cljs.core.str(starfreighter.rand.rand_nth(liquids))].join('');
} else {
if((r < 0.85)){
return [cljs.core.str(starfreighter.rand.rand_nth(stops)),cljs.core.str(starfreighter.rand.rand_nth(stops))].join('');
} else {
if((r < 0.9)){
return [cljs.core.str(starfreighter.rand.rand_nth(sibilants)),cljs.core.str(starfreighter.rand.rand_nth(liquids))].join('');
} else {
var all = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stops,liquids,sibilants], null));
return [cljs.core.str(starfreighter.rand.rand_nth(all)),cljs.core.str(starfreighter.rand.rand_nth(all))].join('');

}
}
}
}
}
}
});
starfreighter.lang.legal_at_start_QMARK_ = (function starfreighter$lang$legal_at_start_QMARK_(chunk){
var chunk__$1 = [cljs.core.str(chunk)].join('');
var or__6404__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(chunk__$1),(1));
if(or__6404__auto__){
return or__6404__auto__;
} else {
var vec__16633 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),chunk__$1);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16633,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16633,(1),null);
var or__6404__auto____$1 = (starfreighter.lang.vowel_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.lang.vowel_QMARK_.cljs$core$IFn$_invoke$arity$1(c1) : starfreighter.lang.vowel_QMARK_.call(null,c1));
if(cljs.core.truth_(or__6404__auto____$1)){
return or__6404__auto____$1;
} else {
var or__6404__auto____$2 = (starfreighter.lang.liquid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.lang.liquid_QMARK_.cljs$core$IFn$_invoke$arity$1(c2) : starfreighter.lang.liquid_QMARK_.call(null,c2));
if(cljs.core.truth_(or__6404__auto____$2)){
return or__6404__auto____$2;
} else {
var and__6392__auto__ = (starfreighter.lang.sibilant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.lang.sibilant_QMARK_.cljs$core$IFn$_invoke$arity$1(c1) : starfreighter.lang.sibilant_QMARK_.call(null,c1));
if(cljs.core.truth_(and__6392__auto__)){
return (starfreighter.lang.stop_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.lang.stop_QMARK_.cljs$core$IFn$_invoke$arity$1(c2) : starfreighter.lang.stop_QMARK_.call(null,c2));
} else {
return and__6392__auto__;
}
}
}
}
});
starfreighter.lang.legal_at_end_QMARK_ = (function starfreighter$lang$legal_at_end_QMARK_(chunk){
var chunk__$1 = [cljs.core.str(chunk)].join('');
var or__6404__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(chunk__$1),(1));
if(or__6404__auto__){
return or__6404__auto__;
} else {
var vec__16645 = cljs.core.take_last((2),chunk__$1);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16645,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16645,(1),null);
var or__6404__auto____$1 = (starfreighter.lang.vowel_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.lang.vowel_QMARK_.cljs$core$IFn$_invoke$arity$1(c2) : starfreighter.lang.vowel_QMARK_.call(null,c2));
if(cljs.core.truth_(or__6404__auto____$1)){
return or__6404__auto____$1;
} else {
var or__6404__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c1,c2);
if(or__6404__auto____$2){
return or__6404__auto____$2;
} else {
var or__6404__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c2,"t");
if(or__6404__auto____$3){
return or__6404__auto____$3;
} else {
var or__6404__auto____$4 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c2,"z");
if(or__6404__auto____$4){
return or__6404__auto____$4;
} else {
var or__6404__auto____$5 = (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c1,"z")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c2,"s"));
if(or__6404__auto____$5){
return or__6404__auto____$5;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["mB",null,"nK",null,"ng",null,"mn",null,"mp",null,"nd",null], null), null).call(null,[cljs.core.str(c1),cljs.core.str(c2)].join(''));
}
}
}
}
}
}
});
starfreighter.lang.gen_init_syllable = (function starfreighter$lang$gen_init_syllable(con_clusters,vowels){
var init_vowel_QMARK_ = starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$2((1),(3));
return [cljs.core.str((cljs.core.truth_(init_vowel_QMARK_)?starfreighter.rand.rand_nth(vowels):null)),cljs.core.str(starfreighter.rand.rand_nth((function (){var G__16649 = con_clusters;
if(cljs.core.not(init_vowel_QMARK_)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(starfreighter.lang.legal_at_start_QMARK_,G__16649);
} else {
return G__16649;
}
})())),cljs.core.str(starfreighter.rand.rand_nth(vowels))].join('');
});
starfreighter.lang.gen_final_syllable = (function starfreighter$lang$gen_final_syllable(con_clusters,vowels){
return [cljs.core.str(starfreighter.rand.rand_nth(con_clusters)),cljs.core.str(starfreighter.rand.rand_nth(vowels)),cljs.core.str((cljs.core.truth_(starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$2((2),(3)))?starfreighter.rand.rand_nth(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(starfreighter.lang.legal_at_end_QMARK_,con_clusters)):null))].join('');
});
starfreighter.lang.gen_orthography = (function starfreighter$lang$gen_orthography(stops,liqs,sibs,vows){
var phones = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,starfreighter.lang.possible_expressions),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [stops,liqs,sibs,vows], null)));
return cljs.core.zipmap(phones,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (phones){
return (function (phone){
var possible = (starfreighter.lang.possible_expressions.cljs$core$IFn$_invoke$arity$1 ? starfreighter.lang.possible_expressions.cljs$core$IFn$_invoke$arity$1(phone) : starfreighter.lang.possible_expressions.call(null,phone));
var n = (cljs.core.truth_((function (){var and__6392__auto__ = (cljs.core.count(possible) > (1));
if(and__6392__auto__){
return starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$2((1),(3));
} else {
return and__6392__auto__;
}
})())?(2):(1));
return cljs.core.vec(starfreighter.rand.pick_n(n,possible));
});})(phones))
,phones));
});
starfreighter.lang.express = (function starfreighter$lang$express(phones,orthography){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16650_SHARP_){
var or__6404__auto__ = (function (){var G__16654 = p1__16650_SHARP_;
var G__16654__$1 = (((G__16654 == null))?null:(orthography.cljs$core$IFn$_invoke$arity$1 ? orthography.cljs$core$IFn$_invoke$arity$1(G__16654) : orthography.call(null,G__16654)));
if((G__16654__$1 == null)){
return null;
} else {
return starfreighter.rand.rand_nth(G__16654__$1);
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return p1__16650_SHARP_;
}
}),phones));
});
starfreighter.lang.gen_word = (function starfreighter$lang$gen_word(p__16655){
var map__16658 = p__16655;
var map__16658__$1 = ((((!((map__16658 == null)))?((((map__16658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16658):map__16658);
var inits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16658__$1,cljs.core.cst$kw$inits);
var finals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16658__$1,cljs.core.cst$kw$finals);
var orthography = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16658__$1,cljs.core.cst$kw$orthography);
return starfreighter.lang.express([cljs.core.str(starfreighter.rand.rand_nth(inits)),cljs.core.str(starfreighter.rand.rand_nth(finals))].join(''),orthography);
});
starfreighter.lang.gen_language = (function starfreighter$lang$gen_language(){
var stops = starfreighter.rand.unique_runs.cljs$core$IFn$_invoke$arity$variadic(starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((4),(8)),starfreighter.rand.weighted_choice,cljs.core.array_seq([starfreighter.lang.all_stops], 0));
var liqs = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((4),((function (stops){
return (function (){
return starfreighter.rand.weighted_choice(starfreighter.lang.all_liquids);
});})(stops))
));
var sibs = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((4),((function (stops,liqs){
return (function (){
return starfreighter.rand.weighted_choice(starfreighter.lang.all_sibilants);
});})(stops,liqs))
));
var vows = starfreighter.rand.unique_runs.cljs$core$IFn$_invoke$arity$variadic(starfreighter.rand.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((5),(8)),starfreighter.rand.rand_nth,cljs.core.array_seq([starfreighter.lang.all_vowels], 0));
var ccs = starfreighter.rand.unique_runs.cljs$core$IFn$_invoke$arity$variadic((12),starfreighter.lang.gen_consonant_cluster,cljs.core.array_seq([stops,liqs,sibs], 0));
var inits = starfreighter.rand.unique_runs.cljs$core$IFn$_invoke$arity$variadic((9),starfreighter.lang.gen_init_syllable,cljs.core.array_seq([ccs,vows], 0));
var finals = starfreighter.rand.unique_runs.cljs$core$IFn$_invoke$arity$variadic((9),starfreighter.lang.gen_final_syllable,cljs.core.array_seq([ccs,vows], 0));
var lang = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$inits,inits,cljs.core.cst$kw$finals,finals,cljs.core.cst$kw$orthography,starfreighter.lang.gen_orthography(stops,liqs,sibs,vows),cljs.core.cst$kw$consonant_DASH_clusters,ccs,cljs.core.cst$kw$stops,stops,cljs.core.cst$kw$liquids,liqs,cljs.core.cst$kw$sibilants,sibs,cljs.core.cst$kw$vowels,vows], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lang,cljs.core.cst$kw$name,clojure.string.capitalize(starfreighter.lang.gen_word(lang)));
});
