// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('starfreighter.cards.gambling');
goog.require('cljs.core');
goog.require('starfreighter.db');
goog.require('starfreighter.desc');
goog.require('starfreighter.rand');
goog.require('starfreighter.util');
starfreighter.cards.gambling.base_bet_amount = (5000);
starfreighter.cards.gambling.can_keep_playing_QMARK_ = starfreighter.db.can_afford_QMARK_.cljs$core$IFn$_invoke$arity$1(starfreighter.cards.gambling.base_bet_amount);
starfreighter.cards.gambling.gen_walk_away_card = (function starfreighter$cards$gambling$gen_walk_away_card(p__22128){
var map__22131 = p__22128;
var map__22131__$1 = ((((!((map__22131 == null)))?((((map__22131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22131):map__22131);
var state = map__22131__$1;
var gambling_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22131__$1,cljs.core.cst$kw$gambling_DASH_info);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$info,cljs.core.cst$kw$speaker,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Dealer"], null),cljs.core.cst$kw$text,"Walking away already? Well, I certainly hope you enjoyed yourself!",cljs.core.cst$kw$ok,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_memory,cljs.core.cst$kw$speaker.cljs$core$IFn$_invoke$arity$1(gambling_info),(function (){var amount_won = (cljs.core.cst$kw$init_DASH_cash.cljs$core$IFn$_invoke$arity$1(gambling_info) - cljs.core.cst$kw$cash.cljs$core$IFn$_invoke$arity$1(state));
if((amount_won < (0))){
return cljs.core.cst$kw$went_DASH_gambling_DASH_did_DASH_poorly;
} else {
if((amount_won <= starfreighter.cards.gambling.base_bet_amount)){
return cljs.core.cst$kw$went_DASH_gambling_DASH_broke_DASH_even;
} else {
return cljs.core.cst$kw$went_DASH_gambling_DASH_did_DASH_well;

}
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$call,((function (map__22131,map__22131__$1,state,gambling_info){
return (function (p1__22127_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22127_SHARP_,cljs.core.cst$kw$gambling_DASH_info);
});})(map__22131,map__22131__$1,state,gambling_info))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unset_DASH_deck], null)], null)], null);
});
starfreighter.cards.gambling.gen_keep_playing_card = (function starfreighter$cards$gambling$gen_keep_playing_card(var_args){
var args22134 = [];
var len__7479__auto___22137 = arguments.length;
var i__7480__auto___22138 = (0);
while(true){
if((i__7480__auto___22138 < len__7479__auto___22137)){
args22134.push((arguments[i__7480__auto___22138]));

var G__22139 = (i__7480__auto___22138 + (1));
i__7480__auto___22138 = G__22139;
continue;
} else {
}
break;
}

var G__22136 = args22134.length;
switch (G__22136) {
case 1:
return starfreighter.cards.gambling.gen_keep_playing_card.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.cards.gambling.gen_keep_playing_card.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22134.length)].join('')));

}
});

starfreighter.cards.gambling.gen_keep_playing_card.cljs$core$IFn$_invoke$arity$1 = (function (text){
return (function (p1__17617__17618__auto__){
return starfreighter.cards.gambling.gen_keep_playing_card.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,text);
});
});

starfreighter.cards.gambling.gen_keep_playing_card.cljs$core$IFn$_invoke$arity$2 = (function (state,text){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$yes_DASH_no,cljs.core.cst$kw$speaker,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Dealer"], null),cljs.core.cst$kw$text,text,cljs.core.cst$kw$yes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spend,starfreighter.cards.gambling.base_bet_amount], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$call,(function (p1__22133_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__22133_SHARP_,cljs.core.cst$kw$gambling_DASH_info,cljs.core.dissoc,cljs.core.cst$kw$just_DASH_earned);
})], null)], null),cljs.core.cst$kw$no,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_next_DASH_card,starfreighter.cards.gambling.gen_walk_away_card(state)], null)], null)], null);
});

starfreighter.cards.gambling.gen_keep_playing_card.cljs$lang$maxFixedArity = 2;

starfreighter.cards.gambling.gambling_deck = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$cant_DASH_afford,cljs.core.cst$kw$prereq,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(starfreighter.cards.gambling.can_keep_playing_QMARK_),(function (p1__22141_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$gambling_DASH_info.cljs$core$IFn$_invoke$arity$1(p1__22141_SHARP_),cljs.core.cst$kw$just_DASH_earned);
})),cljs.core.cst$kw$weight,cljs.core.constantly((1)),cljs.core.cst$kw$gen,(function (p__22148){
var map__22149 = p__22148;
var map__22149__$1 = ((((!((map__22149 == null)))?((((map__22149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22149):map__22149);
var state = map__22149__$1;
var gambling_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22149__$1,cljs.core.cst$kw$gambling_DASH_info);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$info,cljs.core.cst$kw$speaker,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Dealer"], null),cljs.core.cst$kw$text,"Oh, what a pity \u2013 seems you can\u2019t afford to play any more. Do be sure to return when you can!",cljs.core.cst$kw$ok,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_memory,cljs.core.cst$kw$speaker.cljs$core$IFn$_invoke$arity$1(gambling_info),cljs.core.cst$kw$went_DASH_gambling_DASH_did_DASH_poorly], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$call,((function (map__22149,map__22149__$1,state,gambling_info){
return (function (p1__22142_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22142_SHARP_,cljs.core.cst$kw$gambling_DASH_info);
});})(map__22149,map__22149__$1,state,gambling_info))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unset_DASH_deck], null)], null)], null);
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$roll_DASH_the_DASH_dice,cljs.core.cst$kw$repeatable_QMARK_,true,cljs.core.cst$kw$prereq,(function (p1__22143_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$gambling_DASH_info.cljs$core$IFn$_invoke$arity$1(p1__22143_SHARP_),cljs.core.cst$kw$just_DASH_earned));
}),cljs.core.cst$kw$weight,cljs.core.constantly((1)),cljs.core.cst$kw$gen,(function (state){
var amount = starfreighter.rand.weighted_choice(new cljs.core.PersistentArrayMap(null, 5, [(0),(7),(5000),(7),(10000),(1),(15000),(1),(20000),(1)], null));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$info,cljs.core.cst$kw$speaker,cljs.core.cst$kw$speaker.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$gambling_DASH_info.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$text,"C\u2019mon, Cap\u2019n \u2013 let\u2019s see how we do!",cljs.core.cst$kw$icon,"\uD83C\uDFB2",cljs.core.cst$kw$ok,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$earn,amount], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$call,((function (amount){
return (function (p1__22144_SHARP_){
return cljs.core.assoc_in(p1__22144_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gambling_DASH_info,cljs.core.cst$kw$just_DASH_earned], null),amount);
});})(amount))
], null)], null)], null);
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$did_DASH_well,cljs.core.cst$kw$repeatable_QMARK_,true,cljs.core.cst$kw$prereq,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(starfreighter.cards.gambling.can_keep_playing_QMARK_,(function (p1__22145_SHARP_){
var G__22151 = p1__22145_SHARP_;
var G__22151__$1 = (((G__22151 == null))?null:cljs.core.cst$kw$gambling_DASH_info.cljs$core$IFn$_invoke$arity$1(G__22151));
var G__22151__$2 = (((G__22151__$1 == null))?null:cljs.core.cst$kw$just_DASH_earned.cljs$core$IFn$_invoke$arity$1(G__22151__$1));
if((G__22151__$2 == null)){
return null;
} else {
return (G__22151__$2 > starfreighter.cards.gambling.base_bet_amount);
}
})),cljs.core.cst$kw$weight,cljs.core.constantly((1)),cljs.core.cst$kw$gen,starfreighter.cards.gambling.gen_keep_playing_card.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ooh, that\u2019s not bad at all! You, my friend, might just be in for an exceptionally good night. ","Alright then, let\u2019s have another go!"], null))], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$broke_DASH_even,cljs.core.cst$kw$repeatable_QMARK_,true,cljs.core.cst$kw$prereq,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(starfreighter.cards.gambling.can_keep_playing_QMARK_,(function (p1__22146_SHARP_){
var G__22152 = p1__22146_SHARP_;
var G__22152__$1 = (((G__22152 == null))?null:cljs.core.cst$kw$gambling_DASH_info.cljs$core$IFn$_invoke$arity$1(G__22152));
var G__22152__$2 = (((G__22152__$1 == null))?null:cljs.core.cst$kw$just_DASH_earned.cljs$core$IFn$_invoke$arity$1(G__22152__$1));
if((G__22152__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__22152__$2,starfreighter.cards.gambling.base_bet_amount);
}
})),cljs.core.cst$kw$weight,cljs.core.constantly((1)),cljs.core.cst$kw$gen,starfreighter.cards.gambling.gen_keep_playing_card.cljs$core$IFn$_invoke$arity$1("How inconclusive! That\u2019s simply no fun at all \u2013 best have another go!")], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$did_DASH_poorly,cljs.core.cst$kw$repeatable_QMARK_,true,cljs.core.cst$kw$prereq,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(starfreighter.cards.gambling.can_keep_playing_QMARK_,(function (p1__22147_SHARP_){
var G__22153 = p1__22147_SHARP_;
var G__22153__$1 = (((G__22153 == null))?null:cljs.core.cst$kw$gambling_DASH_info.cljs$core$IFn$_invoke$arity$1(G__22153));
var G__22153__$2 = (((G__22153__$1 == null))?null:cljs.core.cst$kw$just_DASH_earned.cljs$core$IFn$_invoke$arity$1(G__22153__$1));
if((G__22153__$2 == null)){
return null;
} else {
return (G__22153__$2 < starfreighter.cards.gambling.base_bet_amount);
}
})),cljs.core.cst$kw$weight,cljs.core.constantly((1)),cljs.core.cst$kw$gen,starfreighter.cards.gambling.gen_keep_playing_card.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ooh, that\u2019s too bad! Never mind that, though \u2013 I\u2019m sure your luck will turn around before long. ","Why don\u2019t you have another go?"], null))], null)], null);
starfreighter.cards.gambling.cards = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$request_DASH_gambling,cljs.core.cst$kw$prereq,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(starfreighter.db.can_afford_QMARK_.cljs$core$IFn$_invoke$arity$1(starfreighter.cards.gambling.base_bet_amount),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(starfreighter.db.find_module.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$gambling),starfreighter.db.current_place)),cljs.core.cst$kw$bind,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$speaker,starfreighter.db.some_where.cljs$core$IFn$_invoke$arity$2(starfreighter.db.mood_at_least_QMARK_.cljs$core$IFn$_invoke$arity$1((20)),starfreighter.db.crew)], null),cljs.core.cst$kw$weight,cljs.core.constantly((4)),cljs.core.cst$kw$gen,(function (p__22155){
var map__22156 = p__22155;
var map__22156__$1 = ((((!((map__22156 == null)))?((((map__22156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22156):map__22156);
var state = map__22156__$1;
var map__22157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22156__$1,cljs.core.cst$kw$bound);
var map__22157__$1 = ((((!((map__22157 == null)))?((((map__22157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22157):map__22157);
var speaker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22157__$1,cljs.core.cst$kw$speaker);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$yes_DASH_no,cljs.core.cst$kw$speaker,speaker,cljs.core.cst$kw$text,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hey, Cap\u2019n \u2013 as long as we\u2019re in port, I\u2019m gonna go try my ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hand","luck"], 0))," at some gambling. Wanna come along?"], null),cljs.core.cst$kw$yes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_next_DASH_card,starfreighter.cards.gambling.gen_keep_playing_card.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.o("Are you")," feeling lucky ",starfreighter.desc.o(", Captain"),"? It\u2019s only",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cash,starfreighter.cards.gambling.base_bet_amount], null),"to play, so step right on up to the table and place your bets."], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_deck,starfreighter.cards.gambling.gambling_deck], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$call,((function (map__22156,map__22156__$1,state,map__22157,map__22157__$1,speaker){
return (function (p1__22154_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22154_SHARP_,cljs.core.cst$kw$gambling_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$init_DASH_cash,cljs.core.cst$kw$cash.cljs$core$IFn$_invoke$arity$1(p1__22154_SHARP_),cljs.core.cst$kw$speaker,speaker], null));
});})(map__22156,map__22156__$1,state,map__22157,map__22157__$1,speaker))
], null)], null),cljs.core.cst$kw$no,cljs.core.PersistentVector.EMPTY], null);
})], null)], null);
