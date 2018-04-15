// Compiled by ClojureScript 1.9.227 {}
goog.provide('starfreighter.cards');
goog.require('cljs.core');
goog.require('starfreighter.cards.bar');
goog.require('starfreighter.cards.gambling');
goog.require('starfreighter.cards.space');
goog.require('starfreighter.rand');
goog.require('starfreighter.db');
goog.require('starfreighter.cards.loans');
goog.require('starfreighter.util');
goog.require('starfreighter.cards.port');
var port_cards_7613 = (function (){var iter__7184__auto__ = (function starfreighter$cards$iter__7589(s__7590){
return (new cljs.core.LazySeq(null,(function (){
var s__7590__$1 = s__7590;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__7590__$1);
if(temp__4657__auto__){
var s__7590__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7590__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__7590__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__7592 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__7591 = (0);
while(true){
if((i__7591 < size__7183__auto__)){
var card = cljs.core._nth.call(null,c__7182__auto__,i__7591);
cljs.core.chunk_append.call(null,b__7592,cljs.core.update.call(null,card,new cljs.core.Keyword(null,"prereq","prereq",186870222),((function (i__7591,card,c__7182__auto__,size__7183__auto__,b__7592,s__7590__$2,temp__4657__auto__){
return (function (p1__7587_SHARP_){
var or__6404__auto__ = (function (){var G__7598 = p1__7587_SHARP_;
if((G__7598 == null)){
return null;
} else {
return cljs.core.every_pred.call(null,G__7598,new cljs.core.Keyword(null,"docked?","docked?",1296071485));
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return new cljs.core.Keyword(null,"docked?","docked?",1296071485);
}
});})(i__7591,card,c__7182__auto__,size__7183__auto__,b__7592,s__7590__$2,temp__4657__auto__))
));

var G__7615 = (i__7591 + (1));
i__7591 = G__7615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7592),starfreighter$cards$iter__7589.call(null,cljs.core.chunk_rest.call(null,s__7590__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7592),null);
}
} else {
var card = cljs.core.first.call(null,s__7590__$2);
return cljs.core.cons.call(null,cljs.core.update.call(null,card,new cljs.core.Keyword(null,"prereq","prereq",186870222),((function (card,s__7590__$2,temp__4657__auto__){
return (function (p1__7587_SHARP_){
var or__6404__auto__ = (function (){var G__7600 = p1__7587_SHARP_;
if((G__7600 == null)){
return null;
} else {
return cljs.core.every_pred.call(null,G__7600,new cljs.core.Keyword(null,"docked?","docked?",1296071485));
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return new cljs.core.Keyword(null,"docked?","docked?",1296071485);
}
});})(card,s__7590__$2,temp__4657__auto__))
),starfreighter$cards$iter__7589.call(null,cljs.core.rest.call(null,s__7590__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__.call(null,cljs.core.concat.call(null,starfreighter.cards.port.cards,starfreighter.cards.bar.cards,starfreighter.cards.gambling.cards,starfreighter.cards.loans.cards));
})();
var space_cards_7614 = (function (){var iter__7184__auto__ = ((function (port_cards_7613){
return (function starfreighter$cards$iter__7601(s__7602){
return (new cljs.core.LazySeq(null,((function (port_cards_7613){
return (function (){
var s__7602__$1 = s__7602;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__7602__$1);
if(temp__4657__auto__){
var s__7602__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7602__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__7602__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__7604 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__7603 = (0);
while(true){
if((i__7603 < size__7183__auto__)){
var card = cljs.core._nth.call(null,c__7182__auto__,i__7603);
cljs.core.chunk_append.call(null,b__7604,cljs.core.update.call(null,card,new cljs.core.Keyword(null,"prereq","prereq",186870222),((function (i__7603,card,c__7182__auto__,size__7183__auto__,b__7604,s__7602__$2,temp__4657__auto__,port_cards_7613){
return (function (p1__7588_SHARP_){
var or__6404__auto__ = (function (){var G__7610 = p1__7588_SHARP_;
if((G__7610 == null)){
return null;
} else {
return cljs.core.every_pred.call(null,G__7610,cljs.core.complement.call(null,new cljs.core.Keyword(null,"docked?","docked?",1296071485)));
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"docked?","docked?",1296071485));
}
});})(i__7603,card,c__7182__auto__,size__7183__auto__,b__7604,s__7602__$2,temp__4657__auto__,port_cards_7613))
));

var G__7616 = (i__7603 + (1));
i__7603 = G__7616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7604),starfreighter$cards$iter__7601.call(null,cljs.core.chunk_rest.call(null,s__7602__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7604),null);
}
} else {
var card = cljs.core.first.call(null,s__7602__$2);
return cljs.core.cons.call(null,cljs.core.update.call(null,card,new cljs.core.Keyword(null,"prereq","prereq",186870222),((function (card,s__7602__$2,temp__4657__auto__,port_cards_7613){
return (function (p1__7588_SHARP_){
var or__6404__auto__ = (function (){var G__7612 = p1__7588_SHARP_;
if((G__7612 == null)){
return null;
} else {
return cljs.core.every_pred.call(null,G__7612,cljs.core.complement.call(null,new cljs.core.Keyword(null,"docked?","docked?",1296071485)));
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"docked?","docked?",1296071485));
}
});})(card,s__7602__$2,temp__4657__auto__,port_cards_7613))
),starfreighter$cards$iter__7601.call(null,cljs.core.rest.call(null,s__7602__$2)));
}
} else {
return null;
}
break;
}
});})(port_cards_7613))
,null,null));
});})(port_cards_7613))
;
return iter__7184__auto__.call(null,starfreighter.cards.space.cards);
})();
starfreighter.cards.all_cards = cljs.core.into.call(null,cljs.core.vec.call(null,port_cards_7613),space_cards_7614);
/**
 * Returns whether a given `card` is interruptible – i.e. whether it's OK (both
 *   gameplay- and narrative-wise) for the player to "just walk away" from the
 *   situation the card represents, e.g. by initiating travel to another place.
 */
starfreighter.cards.interruptible_QMARK_ = (function starfreighter$cards$interruptible_QMARK_(card){
if(cljs.core.contains_QMARK_.call(null,card,new cljs.core.Keyword(null,"interruptible?","interruptible?",1750203066))){
return new cljs.core.Keyword(null,"interruptible?","interruptible?",1750203066).cljs$core$IFn$_invoke$arity$1(card);
} else {
var G__7618 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card).fqn:null);
switch (G__7618) {
case "game-over":
return false;

break;
case "info":
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(card));

break;
case "yes-no":
return (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"yes","yes",182838819).cljs$core$IFn$_invoke$arity$1(card))) || (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"no","no",-390373634).cljs$core$IFn$_invoke$arity$1(card)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card))].join('')));

}
}
});
starfreighter.cards.prepare_to_depart = (function starfreighter$cards$prepare_to_depart(state){
var dest = new cljs.core.Keyword(null,"info-target","info-target",-578645321).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"yes-no","yes-no",616078109),new cljs.core.Keyword(null,"interruptible?","interruptible?",1750203066),false,new cljs.core.Keyword(null,"speaker","speaker",-1931331620),starfreighter.db.some_STAR_.call(null,state,starfreighter.db.crew),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Oh, we\u2019re leaving for ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dest)," already? Guess I\u2019ll go fire up the engine!"], null),new cljs.core.Keyword(null,"yes","yes",182838819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depart-for","depart-for",1497678256),dest], null)], null),new cljs.core.Keyword(null,"no","no",-390373634),cljs.core.PersistentVector.EMPTY], null));
});
starfreighter.cards.applicable_game_over_if_any = (function starfreighter$cards$applicable_game_over_if_any(state){
if(cljs.core.truth_((function (){var and__6392__auto__ = (new cljs.core.Keyword(null,"crew","crew",63677131).cljs$core$IFn$_invoke$arity$1(state) === (0));
if(and__6392__auto__){
return new cljs.core.Keyword(null,"docked?","docked?",1296071485).cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__6392__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The crew, fed up with your leadership, steal your ship and depart, ","leaving you stranded on ",new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state),"."], null)], null);
} else {
if(((new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(state) === (0))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"docked?","docked?",1296071485).cljs$core$IFn$_invoke$arity$1(state)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"deadly?","deadly?",-700523456),true,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["With a horrific creak, your ship\u2019s hull gives way, wrenching itself apart. ","A torrential rush of air sucks you nigh instantaneously into the vacuum of space."], null)], null);
} else {
return null;

}
}
});
starfreighter.cards.applicable_arrival_if_any = (function starfreighter$cards$applicable_arrival_if_any(state){
if(cljs.core.truth_(starfreighter.db.has_cargo_to_drop_QMARK_.call(null,state))){
var vec__7642 = starfreighter.util.sift.call(null,(function (p1__7620_SHARP_){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"passenger?","passenger?",-1620776840).cljs$core$IFn$_invoke$arity$1(p1__7620_SHARP_))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(p1__7620_SHARP_),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state)));
}),new cljs.core.Keyword(null,"cargo","cargo",1523239588).cljs$core$IFn$_invoke$arity$1(state));
var dropping = cljs.core.nth.call(null,vec__7642,(0),null);
var keeping = cljs.core.nth.call(null,vec__7642,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"speaker","speaker",-1931331620),starfreighter.db.some_STAR_.call(null,state,starfreighter.db.crew),new cljs.core.Keyword(null,"text","text",-1790561697),"I\u2019ll go drop off the goods we\u2019re supposed to deliver.",new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call","call",-519999866),((function (vec__7642,dropping,keeping){
return (function (p1__7621_SHARP_){
return cljs.core.assoc.call(null,p1__7621_SHARP_,new cljs.core.Keyword(null,"cargo","cargo",1523239588),cljs.core.vec.call(null,keeping));
});})(vec__7642,dropping,keeping))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"earn","earn",-1668680829),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"pay","pay",-1672734919),dropping))], null)], null),(function (){var iter__7184__auto__ = ((function (vec__7642,dropping,keeping){
return (function starfreighter$cards$applicable_arrival_if_any_$_iter__7645(s__7646){
return (new cljs.core.LazySeq(null,((function (vec__7642,dropping,keeping){
return (function (){
var s__7646__$1 = s__7646;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__7646__$1);
if(temp__4657__auto__){
var s__7646__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7646__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__7646__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__7648 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__7647 = (0);
while(true){
if((i__7647 < size__7183__auto__)){
var map__7653 = cljs.core._nth.call(null,c__7182__auto__,i__7647);
var map__7653__$1 = ((((!((map__7653 == null)))?((((map__7653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7653):map__7653);
var merchant = cljs.core.get.call(null,map__7653__$1,new cljs.core.Keyword(null,"merchant","merchant",-1662127621));
if(cljs.core.truth_(merchant)){
cljs.core.chunk_append.call(null,b__7648,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-memory","add-memory",1427580566),merchant,new cljs.core.Keyword(null,"completed-delivery","completed-delivery",1852007372)], null));

var G__7660 = (i__7647 + (1));
i__7647 = G__7660;
continue;
} else {
var G__7661 = (i__7647 + (1));
i__7647 = G__7661;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7648),starfreighter$cards$applicable_arrival_if_any_$_iter__7645.call(null,cljs.core.chunk_rest.call(null,s__7646__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7648),null);
}
} else {
var map__7655 = cljs.core.first.call(null,s__7646__$2);
var map__7655__$1 = ((((!((map__7655 == null)))?((((map__7655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7655):map__7655);
var merchant = cljs.core.get.call(null,map__7655__$1,new cljs.core.Keyword(null,"merchant","merchant",-1662127621));
if(cljs.core.truth_(merchant)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-memory","add-memory",1427580566),merchant,new cljs.core.Keyword(null,"completed-delivery","completed-delivery",1852007372)], null),starfreighter$cards$applicable_arrival_if_any_$_iter__7645.call(null,cljs.core.rest.call(null,s__7646__$2)));
} else {
var G__7662 = cljs.core.rest.call(null,s__7646__$2);
s__7646__$1 = G__7662;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__7642,dropping,keeping))
,null,null));
});})(vec__7642,dropping,keeping))
;
return iter__7184__auto__.call(null,dropping);
})())], null);
} else {
if(cljs.core.truth_(starfreighter.db.has_passengers_to_drop_QMARK_.call(null,state))){
var vec__7657 = starfreighter.util.sift.call(null,(function (p1__7622_SHARP_){
var and__6392__auto__ = new cljs.core.Keyword(null,"passenger?","passenger?",-1620776840).cljs$core$IFn$_invoke$arity$1(p1__7622_SHARP_);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(p1__7622_SHARP_),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state));
} else {
return and__6392__auto__;
}
}),new cljs.core.Keyword(null,"cargo","cargo",1523239588).cljs$core$IFn$_invoke$arity$1(state));
var dropping = cljs.core.nth.call(null,vec__7657,(0),null);
var keeping = cljs.core.nth.call(null,vec__7657,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"speaker","speaker",-1931331620),cljs.core.rand_nth.call(null,dropping),new cljs.core.Keyword(null,"text","text",-1790561697),"Thanks for the ride, Captain! It\u2019ll be good to get a fresh start here.",new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call","call",-519999866),((function (vec__7657,dropping,keeping){
return (function (p1__7623_SHARP_){
return cljs.core.assoc.call(null,p1__7623_SHARP_,new cljs.core.Keyword(null,"cargo","cargo",1523239588),cljs.core.vec.call(null,keeping));
});})(vec__7657,dropping,keeping))
], null)], null)], null);
} else {
return null;
}
}
});
starfreighter.cards.try_pick = (function starfreighter$cards$try_pick(state,metacard){
if(cljs.core.truth_((function (){var and__6392__auto__ = (function (){var or__6404__auto__ = new cljs.core.Keyword(null,"repeatable?","repeatable?",-1423060987).cljs$core$IFn$_invoke$arity$1(metacard);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"recent-picks","recent-picks",-1556290830).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metacard)));
}
})();
if(cljs.core.truth_(and__6392__auto__)){
return new cljs.core.Keyword(null,"prereq","prereq",186870222).cljs$core$IFn$_invoke$arity$2(metacard,cljs.core.constantly.call(null,true)).call(null,state);
} else {
return and__6392__auto__;
}
})())){
var pairs = new cljs.core.Keyword(null,"bind","bind",-113428417).cljs$core$IFn$_invoke$arity$1(metacard);
var bindings = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,pairs);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__7666 = temp__4655__auto__;
var k = cljs.core.nth.call(null,vec__7666,(0),null);
var f = cljs.core.nth.call(null,vec__7666,(1),null);
var v = f.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bound","bound",587617170),bindings));
if((v == null)){
return null;
} else {
var G__7669 = cljs.core.rest.call(null,pairs);
var G__7670 = cljs.core.assoc.call(null,bindings,k,v);
pairs = G__7669;
bindings = G__7670;
continue;
}
} else {
return cljs.core.assoc.call(null,metacard,new cljs.core.Keyword(null,"bound","bound",587617170),bindings);
}
break;
}
} else {
return null;
}
});
starfreighter.cards.draw_next_card = (function starfreighter$cards$draw_next_card(state){
var or__6404__auto__ = starfreighter.cards.applicable_game_over_if_any.call(null,state);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = starfreighter.cards.applicable_arrival_if_any.call(null,state);
if(cljs.core.truth_(or__6404__auto____$1)){
return or__6404__auto____$1;
} else {
var or__6404__auto____$2 = new cljs.core.Keyword(null,"next-card","next-card",1557967926).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6404__auto____$2)){
return or__6404__auto____$2;
} else {
var deck = (function (){var or__6404__auto____$3 = new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6404__auto____$3)){
return or__6404__auto____$3;
} else {
return starfreighter.cards.all_cards;
}
})();
var pickable = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,starfreighter.cards.try_pick,state),deck));
var map__7674 = starfreighter.rand.weighted_choice.call(null,cljs.core.zipmap.call(null,pickable,cljs.core.map.call(null,((function (deck,pickable,or__6404__auto____$2,or__6404__auto____$1,or__6404__auto__){
return (function (p1__7671_SHARP_){
return new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__7671_SHARP_).call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bound","bound",587617170),new cljs.core.Keyword(null,"bound","bound",587617170).cljs$core$IFn$_invoke$arity$1(p1__7671_SHARP_)));
});})(deck,pickable,or__6404__auto____$2,or__6404__auto____$1,or__6404__auto__))
,pickable)));
var map__7674__$1 = ((((!((map__7674 == null)))?((((map__7674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7674):map__7674);
var bound = cljs.core.get.call(null,map__7674__$1,new cljs.core.Keyword(null,"bound","bound",587617170));
var gen = cljs.core.get.call(null,map__7674__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var id = cljs.core.get.call(null,map__7674__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.prn.call(null,id);

return cljs.core.assoc.call(null,gen.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bound","bound",587617170),bound)),new cljs.core.Keyword(null,"advance-time?","advance-time?",181567409),cljs.core.not.call(null,new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"id","id",-1388402092),id);
}
}
}
});

//# sourceMappingURL=cards.js.map