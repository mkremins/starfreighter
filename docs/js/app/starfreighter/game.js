// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('starfreighter.game');
goog.require('cljs.core');
goog.require('starfreighter.cards.bar');
goog.require('starfreighter.cards.gambling');
goog.require('starfreighter.cards.space');
goog.require('starfreighter.desc');
goog.require('starfreighter.cards.departure');
goog.require('starfreighter.gen');
goog.require('starfreighter.rand');
goog.require('starfreighter.cards.arrival');
goog.require('starfreighter.db');
goog.require('starfreighter.cards.loans');
goog.require('starfreighter.util');
goog.require('starfreighter.cards.port');
/**
 * Returns whether a given `card` is interruptible – i.e. whether it's OK (both
 *   gameplay- and narrative-wise) for the player to "just walk away" from the
 *   situation the card represents, e.g. by initiating travel to another place.
 */
starfreighter.game.interruptible_QMARK_ = (function starfreighter$game$interruptible_QMARK_(card){
if(cljs.core.contains_QMARK_(card,cljs.core.cst$kw$interruptible_QMARK_)){
return cljs.core.cst$kw$interruptible_QMARK_.cljs$core$IFn$_invoke$arity$1(card);
} else {
return cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.cst$kw$effects),cljs.core.cst$kw$choices.cljs$core$IFn$_invoke$arity$1(card));
}
});
starfreighter.game.affordable_QMARK_ = (function starfreighter$game$affordable_QMARK_(state,choice){
var total_cost = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22327_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__22327_SHARP_),cljs.core.cst$kw$spend);
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(choice))));
return starfreighter.db.can_afford_QMARK_.cljs$core$IFn$_invoke$arity$2(state,total_cost);
});
starfreighter.game.compile_choices = (function starfreighter$game$compile_choices(state,card){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,cljs.core.cst$kw$choices,(function (){var G__22329 = (((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(card) instanceof cljs.core.Keyword))?cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(card).fqn:null);
switch (G__22329) {
case "custom":
var choices = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(starfreighter.game.affordable_QMARK_,state),cljs.core.cst$kw$choices.cljs$core$IFn$_invoke$arity$1(card));
if((cljs.core.count(choices) > (0))){
} else {
throw (new Error("Assert failed: (> (count choices) 0)"));
}

return choices;

break;
case "game-over":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$icon,(cljs.core.truth_(cljs.core.cst$kw$deadly_QMARK_.cljs$core$IFn$_invoke$arity$1(card))?"\u2620\uFE0F":"\uD83D\uDD01"),cljs.core.cst$kw$background,"brown",cljs.core.cst$kw$effects,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$call,starfreighter.game.restart_game], null)], null)], null)], null);

break;
case "info":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$icon,"\uD83D\uDC4C",cljs.core.cst$kw$background,"steelblue",cljs.core.cst$kw$effects,cljs.core.cst$kw$ok.cljs$core$IFn$_invoke$arity$1(card)], null)], null);

break;
case "yes-no":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$icon,"\uD83D\uDC4E",cljs.core.cst$kw$background,"brown",cljs.core.cst$kw$effects,cljs.core.cst$kw$no.cljs$core$IFn$_invoke$arity$1(card)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$icon,"\uD83D\uDC4D",cljs.core.cst$kw$background,"darkgreen",cljs.core.cst$kw$effects,cljs.core.cst$kw$yes.cljs$core$IFn$_invoke$arity$1(card)], null)], null);

break;
default:
return starfreighter.util.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid card type ",cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(card)], 0));

}
})());
});
starfreighter.game.prepare_to_depart = (function starfreighter$game$prepare_to_depart(state){
var dest = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info_DASH_target.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$card,starfreighter.game.compile_choices(state,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$id,cljs.core.cst$kw$prepare_DASH_to_DASH_depart,cljs.core.cst$kw$type,cljs.core.cst$kw$yes_DASH_no,cljs.core.cst$kw$interruptible_QMARK_,false,cljs.core.cst$kw$speaker,starfreighter.db.some_STAR_.cljs$core$IFn$_invoke$arity$2(state,starfreighter.db.crew),cljs.core.cst$kw$text,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Oh, we\u2019re leaving for ",dest," already? Guess I\u2019ll go fire up the engines!"], null),cljs.core.cst$kw$yes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$begin_DASH_departure_DASH_for,dest], null)], null),cljs.core.cst$kw$no,cljs.core.PersistentVector.EMPTY], null)));
});
starfreighter.game.applicable_game_over_if_any = (function starfreighter$game$applicable_game_over_if_any(state){
if(((cljs.core.cst$kw$ship.cljs$core$IFn$_invoke$arity$1(state) === (0))) && (cljs.core.not((starfreighter.db.in_port_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.in_port_QMARK_.cljs$core$IFn$_invoke$arity$1(state) : starfreighter.db.in_port_QMARK_.call(null,state))))){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$ship_DASH_falls_DASH_apart,cljs.core.cst$kw$type,cljs.core.cst$kw$game_DASH_over,cljs.core.cst$kw$deadly_QMARK_,true,cljs.core.cst$kw$text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["With a horrific creak, your ship\u2019s hull gives way, wrenching itself apart. ","A torrential rush of air sucks you nigh instantaneously into the vacuum of space."], null)], null);
} else {
return null;

}
});
starfreighter.game.applicable_arrival_if_any = (function starfreighter$game$applicable_arrival_if_any(state){
if(cljs.core.truth_((starfreighter.db.in_port_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.in_port_QMARK_.cljs$core$IFn$_invoke$arity$1(state) : starfreighter.db.in_port_QMARK_.call(null,state)))){
var or__6404__auto__ = (function (){var temp__4657__auto__ = cljs.core.seq(starfreighter.db.cargo_to_drop(state));
if(temp__4657__auto__){
var cargo_to_drop = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$drop_DASH_cargo,cljs.core.cst$kw$type,cljs.core.cst$kw$info,cljs.core.cst$kw$speaker,starfreighter.db.some_STAR_.cljs$core$IFn$_invoke$arity$2(state,starfreighter.db.crew),cljs.core.cst$kw$text,"I\u2019ll go drop off the goods we\u2019re supposed to deliver.",cljs.core.cst$kw$ok,cljs.core.flatten1((function (){var iter__7184__auto__ = ((function (cargo_to_drop,temp__4657__auto__){
return (function starfreighter$game$applicable_arrival_if_any_$_iter__22355(s__22356){
return (new cljs.core.LazySeq(null,((function (cargo_to_drop,temp__4657__auto__){
return (function (){
var s__22356__$1 = s__22356;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__22356__$1);
if(temp__4657__auto____$1){
var s__22356__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22356__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22356__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22358 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22357 = (0);
while(true){
if((i__22357 < size__7183__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22357);
cljs.core.chunk_append(b__22358,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drop_DASH_cargo,item], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$earn,cljs.core.cst$kw$pay_DASH_after.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_memory,cljs.core.cst$kw$merchant.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$completed_DASH_delivery], null)], null));

var G__22367 = (i__22357 + (1));
i__22357 = G__22367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22358),starfreighter$game$applicable_arrival_if_any_$_iter__22355(cljs.core.chunk_rest(s__22356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22358),null);
}
} else {
var item = cljs.core.first(s__22356__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drop_DASH_cargo,item], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$earn,cljs.core.cst$kw$pay_DASH_after.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_memory,cljs.core.cst$kw$merchant.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$completed_DASH_delivery], null)], null),starfreighter$game$applicable_arrival_if_any_$_iter__22355(cljs.core.rest(s__22356__$2)));
}
} else {
return null;
}
break;
}
});})(cargo_to_drop,temp__4657__auto__))
,null,null));
});})(cargo_to_drop,temp__4657__auto__))
;
return iter__7184__auto__(cargo_to_drop);
})())], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var temp__4657__auto__ = cljs.core.seq(starfreighter.db.passengers_to_drop(state));
if(temp__4657__auto__){
var passengers_to_drop = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$drop_DASH_passengers,cljs.core.cst$kw$type,cljs.core.cst$kw$info,cljs.core.cst$kw$speaker,starfreighter.rand.rand_nth(passengers_to_drop),cljs.core.cst$kw$text,"Thanks for the ride, Captain! It\u2019ll be good to get a fresh start here.",cljs.core.cst$kw$ok,(function (){var iter__7184__auto__ = ((function (passengers_to_drop,temp__4657__auto__,or__6404__auto__){
return (function starfreighter$game$applicable_arrival_if_any_$_iter__22361(s__22362){
return (new cljs.core.LazySeq(null,((function (passengers_to_drop,temp__4657__auto__,or__6404__auto__){
return (function (){
var s__22362__$1 = s__22362;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__22362__$1);
if(temp__4657__auto____$1){
var s__22362__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22362__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22362__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22364 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22363 = (0);
while(true){
if((i__22363 < size__7183__auto__)){
var char$ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22363);
cljs.core.chunk_append(b__22364,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drop_DASH_cargo,char$], null));

var G__22368 = (i__22363 + (1));
i__22363 = G__22368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22364),starfreighter$game$applicable_arrival_if_any_$_iter__22361(cljs.core.chunk_rest(s__22362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22364),null);
}
} else {
var char$ = cljs.core.first(s__22362__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drop_DASH_cargo,char$], null),starfreighter$game$applicable_arrival_if_any_$_iter__22361(cljs.core.rest(s__22362__$2)));
}
} else {
return null;
}
break;
}
});})(passengers_to_drop,temp__4657__auto__,or__6404__auto__))
,null,null));
});})(passengers_to_drop,temp__4657__auto__,or__6404__auto__))
;
return iter__7184__auto__(passengers_to_drop);
})()], null);
} else {
return null;
}
}
} else {
return null;
}
});
var port_cards_22377 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(starfreighter.cards.port.cards,starfreighter.cards.bar.cards,cljs.core.array_seq([starfreighter.cards.gambling.cards,starfreighter.cards.loans.cards], 0));
starfreighter.game.default_deck = ((function (port_cards_22377){
return (function starfreighter$game$default_deck(state){
var pred__22374 = ((function (port_cards_22377){
return (function (p1__22369_SHARP_,p2__22370_SHARP_){
return (p1__22369_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22369_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__22370_SHARP_) : p1__22369_SHARP_.call(null,p2__22370_SHARP_));
});})(port_cards_22377))
;
var expr__22375 = state;
if(cljs.core.truth_(pred__22374(starfreighter.db.in_port_QMARK_,expr__22375))){
return port_cards_22377;
} else {
if(cljs.core.truth_(pred__22374(starfreighter.db.departing_QMARK_,expr__22375))){
return starfreighter.cards.departure.cards;
} else {
if(cljs.core.truth_(pred__22374(starfreighter.db.in_transit_QMARK_,expr__22375))){
return starfreighter.cards.space.cards;
} else {
if(cljs.core.truth_(pred__22374(starfreighter.db.arriving_QMARK_,expr__22375))){
return starfreighter.cards.arrival.cards;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22375)].join('')));
}
}
}
}
});})(port_cards_22377))
;
starfreighter.game.try_pick = (function starfreighter$game$try_pick(state,metacard){
if(cljs.core.truth_((function (){var and__6392__auto__ = (function (){var or__6404__auto__ = cljs.core.cst$kw$repeatable_QMARK_.cljs$core$IFn$_invoke$arity$1(metacard);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$recent_DASH_picks.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(metacard)));
}
})();
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core.cst$kw$prereq.cljs$core$IFn$_invoke$arity$2(metacard,cljs.core.constantly(true)).call(null,state);
} else {
return and__6392__auto__;
}
})())){
var pairs = cljs.core.cst$kw$bind.cljs$core$IFn$_invoke$arity$1(metacard);
var bindings = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first(pairs);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__22382 = temp__4655__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22382,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22382,(1),null);
var v = (function (){var G__22385 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$bound,bindings);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22385) : f.call(null,G__22385));
})();
if((v == null)){
return null;
} else {
var G__22386 = cljs.core.rest(pairs);
var G__22387 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,k,v);
pairs = G__22386;
bindings = G__22387;
continue;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metacard,cljs.core.cst$kw$bound,bindings);
}
break;
}
} else {
return null;
}
});
starfreighter.game.draw_next_card_STAR_ = (function starfreighter$game$draw_next_card_STAR_(state){
var or__6404__auto__ = starfreighter.game.applicable_game_over_if_any(state);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = starfreighter.game.applicable_arrival_if_any(state);
if(cljs.core.truth_(or__6404__auto____$1)){
return or__6404__auto____$1;
} else {
var or__6404__auto____$2 = cljs.core.cst$kw$next_DASH_card.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6404__auto____$2)){
return or__6404__auto____$2;
} else {
var deck = (function (){var or__6404__auto____$3 = cljs.core.cst$kw$deck.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6404__auto____$3)){
return or__6404__auto____$3;
} else {
return starfreighter.game.default_deck(state);
}
})();
var pickable = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(starfreighter.game.try_pick,state),deck));
var _ = ((!(cljs.core.empty_QMARK_(pickable)))?null:(function(){throw (new Error("Assert failed: (not (empty? pickable))"))})());
var picked = starfreighter.rand.weighted_choice(cljs.core.zipmap(pickable,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deck,pickable,_,or__6404__auto____$2,or__6404__auto____$1,or__6404__auto__){
return (function (p1__22388_SHARP_){
return cljs.core.cst$kw$weight.cljs$core$IFn$_invoke$arity$1(p1__22388_SHARP_).call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$bound,cljs.core.cst$kw$bound.cljs$core$IFn$_invoke$arity$1(p1__22388_SHARP_)));
});})(deck,pickable,_,or__6404__auto____$2,or__6404__auto____$1,or__6404__auto__))
,pickable)));
var ___$1 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Drew card:",cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(picked)], 0));
var card = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(picked).call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$bound,cljs.core.cst$kw$bound.cljs$core$IFn$_invoke$arity$1(picked)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(card,cljs.core.cst$kw$advance_DASH_time_QMARK_,cljs.core.not(cljs.core.cst$kw$deck.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(picked)], 0));
}
}
}
});
starfreighter.game.draw_next_card = (function starfreighter$game$draw_next_card(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(starfreighter.game.compile_choices(state,starfreighter.game.draw_next_card_STAR_(state)),cljs.core.cst$kw$text,starfreighter.desc.normalize);
});
starfreighter.game.handle_choice = (function starfreighter$game$handle_choice(state,effects){
var state_SINGLEQUOTE_ = starfreighter.db.process_effects(state,effects);
var card = starfreighter.game.draw_next_card(state_SINGLEQUOTE_);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var G__22390 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_SINGLEQUOTE_,cljs.core.cst$kw$card,card),cljs.core.cst$kw$recent_DASH_picks,cljs.core.conj,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(card));
if(cljs.core.truth_(cljs.core.cst$kw$advance_DASH_time_QMARK_.cljs$core$IFn$_invoke$arity$1(card))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__22390,cljs.core.cst$kw$turn,cljs.core.inc);
} else {
return G__22390;
}
})(),cljs.core.cst$kw$next_DASH_card);
});
starfreighter.game.create_init_state = (function starfreighter$game$create_init_state(){
var map__22394 = starfreighter.gen.gen_map();
var map__22394__$1 = ((((!((map__22394 == null)))?((((map__22394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22394):map__22394);
var cultures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22394__$1,cljs.core.cst$kw$cultures);
var places = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22394__$1,cljs.core.cst$kw$places);
var chars = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$merchants,cljs.core.array_seq([places], 0));
var places__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__22394,map__22394__$1,cultures,places,chars){
return (function (p1__22391_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__22391_SHARP_,cljs.core.cst$kw$merchants,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.cst$kw$id));
});})(map__22394,map__22394__$1,cultures,places,chars))
,places);
var place = starfreighter.rand.rand_nth(places__$1);
var crew = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),((function (map__22394,map__22394__$1,cultures,places,chars,places__$1,place){
return (function (){
return starfreighter.gen.gen_character.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cultures,cultures], null),place,cljs.core.cst$kw$crew);
});})(map__22394,map__22394__$1,cultures,places,chars,places__$1,place))
);
var chars__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(chars,crew);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$cultures,cljs.core.cst$kw$cargo,cljs.core.cst$kw$crew,cljs.core.cst$kw$travel,cljs.core.cst$kw$cash,cljs.core.cst$kw$turn,cljs.core.cst$kw$ship,cljs.core.cst$kw$recent_DASH_picks,cljs.core.cst$kw$chars,cljs.core.cst$kw$places,cljs.core.cst$kw$max_DASH_crew,cljs.core.cst$kw$max_DASH_cargo],[cultures,cljs.core.PersistentVector.EMPTY,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,crew)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stage,cljs.core.cst$kw$in_DASH_port,cljs.core.cst$kw$at,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(place)], null),(10000),(1),(60),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offer_DASH_join_DASH_crew,null], null), null),starfreighter.util.indexed_by(cljs.core.cst$kw$id,chars__$1),starfreighter.util.indexed_by(cljs.core.cst$kw$name,places__$1),(3),(6)]);
});
starfreighter.game.restart_game = (function starfreighter$game$restart_game(var_args){
var args__7486__auto__ = [];
var len__7479__auto___22397 = arguments.length;
var i__7480__auto___22398 = (0);
while(true){
if((i__7480__auto___22398 < len__7479__auto___22397)){
args__7486__auto__.push((arguments[i__7480__auto___22398]));

var G__22399 = (i__7480__auto___22398 + (1));
i__7480__auto___22398 = G__22399;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return starfreighter.game.restart_game.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

starfreighter.game.restart_game.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var state = starfreighter.game.create_init_state();
var card = starfreighter.game.draw_next_card(state);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$card,card),cljs.core.cst$kw$recent_DASH_picks,cljs.core.conj,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(card));
});

starfreighter.game.restart_game.cljs$lang$maxFixedArity = (0);

starfreighter.game.restart_game.cljs$lang$applyTo = (function (seq22396){
return starfreighter.game.restart_game.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22396));
});

