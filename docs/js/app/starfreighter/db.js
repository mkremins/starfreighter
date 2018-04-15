// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('starfreighter.db');
goog.require('cljs.core');
goog.require('starfreighter.rand');
goog.require('starfreighter.util');
starfreighter.db.some_STAR_ = (function starfreighter$db$some_STAR_(var_args){
var args17628 = [];
var len__7479__auto___17632 = arguments.length;
var i__7480__auto___17633 = (0);
while(true){
if((i__7480__auto___17633 < len__7479__auto___17632)){
args17628.push((arguments[i__7480__auto___17633]));

var G__17634 = (i__7480__auto___17633 + (1));
i__7480__auto___17633 = G__17634;
continue;
} else {
}
break;
}

var G__17630 = args17628.length;
switch (G__17630) {
case 1:
return starfreighter.db.some_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.some_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17628.length)].join('')));

}
});

starfreighter.db.some_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (query){
return (function (p1__17617__17618__auto__){
return starfreighter.db.some_STAR_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,query);
});
});

starfreighter.db.some_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (state,query){
var G__17631 = (query.cljs$core$IFn$_invoke$arity$1 ? query.cljs$core$IFn$_invoke$arity$1(state) : query.call(null,state));
var G__17631__$1 = (((G__17631 == null))?null:cljs.core.seq(G__17631));
if((G__17631__$1 == null)){
return null;
} else {
return starfreighter.rand.rand_nth(G__17631__$1);
}
});

starfreighter.db.some_STAR_.cljs$lang$maxFixedArity = 2;

starfreighter.db.some_where = (function starfreighter$db$some_where(var_args){
var args17636 = [];
var len__7479__auto___17640 = arguments.length;
var i__7480__auto___17641 = (0);
while(true){
if((i__7480__auto___17641 < len__7479__auto___17640)){
args17636.push((arguments[i__7480__auto___17641]));

var G__17642 = (i__7480__auto___17641 + (1));
i__7480__auto___17641 = G__17642;
continue;
} else {
}
break;
}

var G__17638 = args17636.length;
switch (G__17638) {
case 2:
return starfreighter.db.some_where.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return starfreighter.db.some_where.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17636.length)].join('')));

}
});

starfreighter.db.some_where.cljs$core$IFn$_invoke$arity$2 = (function (pred,query){
return (function (p1__17617__17618__auto__){
return starfreighter.db.some_where.cljs$core$IFn$_invoke$arity$3(p1__17617__17618__auto__,pred,query);
});
});

starfreighter.db.some_where.cljs$core$IFn$_invoke$arity$3 = (function (state,pred,query){
var G__17639 = (query.cljs$core$IFn$_invoke$arity$1 ? query.cljs$core$IFn$_invoke$arity$1(state) : query.call(null,state));
var G__17639__$1 = (((G__17639 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,G__17639));
var G__17639__$2 = (((G__17639__$1 == null))?null:cljs.core.seq(G__17639__$1));
if((G__17639__$2 == null)){
return null;
} else {
return starfreighter.rand.rand_nth(G__17639__$2);
}
});

starfreighter.db.some_where.cljs$lang$maxFixedArity = 3;

starfreighter.db.some_preferably = (function starfreighter$db$some_preferably(var_args){
var args17644 = [];
var len__7479__auto___17650 = arguments.length;
var i__7480__auto___17651 = (0);
while(true){
if((i__7480__auto___17651 < len__7479__auto___17650)){
args17644.push((arguments[i__7480__auto___17651]));

var G__17652 = (i__7480__auto___17651 + (1));
i__7480__auto___17651 = G__17652;
continue;
} else {
}
break;
}

var G__17646 = args17644.length;
switch (G__17646) {
case 2:
return starfreighter.db.some_preferably.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return starfreighter.db.some_preferably.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17644.length)].join('')));

}
});

starfreighter.db.some_preferably.cljs$core$IFn$_invoke$arity$2 = (function (pred,query){
return (function (p1__17617__17618__auto__){
return starfreighter.db.some_preferably.cljs$core$IFn$_invoke$arity$3(p1__17617__17618__auto__,pred,query);
});
});

starfreighter.db.some_preferably.cljs$core$IFn$_invoke$arity$3 = (function (state,pred,query){
var results = (query.cljs$core$IFn$_invoke$arity$1 ? query.cljs$core$IFn$_invoke$arity$1(state) : query.call(null,state));
var or__6404__auto__ = (function (){var G__17648 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,results);
var G__17648__$1 = (((G__17648 == null))?null:cljs.core.seq(G__17648));
if((G__17648__$1 == null)){
return null;
} else {
return starfreighter.rand.rand_nth(G__17648__$1);
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var G__17649 = results;
var G__17649__$1 = (((G__17649 == null))?null:cljs.core.seq(G__17649));
if((G__17649__$1 == null)){
return null;
} else {
return starfreighter.rand.rand_nth(G__17649__$1);
}
}
});

starfreighter.db.some_preferably.cljs$lang$maxFixedArity = 3;

/**
 * Used to retrieve vars bound in a card's :bind clause from the state.
 */
starfreighter.db.var_STAR_ = (function starfreighter$db$var_STAR_(var_args){
var args17654 = [];
var len__7479__auto___17657 = arguments.length;
var i__7480__auto___17658 = (0);
while(true){
if((i__7480__auto___17658 < len__7479__auto___17657)){
args17654.push((arguments[i__7480__auto___17658]));

var G__17659 = (i__7480__auto___17658 + (1));
i__7480__auto___17658 = G__17659;
continue;
} else {
}
break;
}

var G__17656 = args17654.length;
switch (G__17656) {
case 1:
return starfreighter.db.var_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.var_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17654.length)].join('')));

}
});

starfreighter.db.var_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (var_name){
return (function (p1__17617__17618__auto__){
return starfreighter.db.var_STAR_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,var_name);
});
});

starfreighter.db.var_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (state,var_name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bound.cljs$core$IFn$_invoke$arity$1(state),var_name);
});

starfreighter.db.var_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Used in a card's :bind clause to ensure that an earlier bound var passes the
 *   predicate `pred`.
 */
starfreighter.db.enforce = (function starfreighter$db$enforce(var_args){
var args17661 = [];
var len__7479__auto___17664 = arguments.length;
var i__7480__auto___17665 = (0);
while(true){
if((i__7480__auto___17665 < len__7479__auto___17664)){
args17661.push((arguments[i__7480__auto___17665]));

var G__17666 = (i__7480__auto___17665 + (1));
i__7480__auto___17665 = G__17666;
continue;
} else {
}
break;
}

var G__17663 = args17661.length;
switch (G__17663) {
case 1:
return starfreighter.db.enforce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.enforce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17661.length)].join('')));

}
});

starfreighter.db.enforce.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (p1__17617__17618__auto__){
return starfreighter.db.enforce.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,pred);
});
});

starfreighter.db.enforce.cljs$core$IFn$_invoke$arity$2 = (function (state,pred){
var or__6404__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(state) : pred.call(null,state));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return null;
}
});

starfreighter.db.enforce.cljs$lang$maxFixedArity = 2;

starfreighter.db.char_QMARK_ = (function starfreighter$db$char_QMARK_(thing){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(thing),cljs.core.cst$kw$char);
});
starfreighter.db.can_afford_QMARK_ = (function starfreighter$db$can_afford_QMARK_(var_args){
var args17668 = [];
var len__7479__auto___17671 = arguments.length;
var i__7480__auto___17672 = (0);
while(true){
if((i__7480__auto___17672 < len__7479__auto___17671)){
args17668.push((arguments[i__7480__auto___17672]));

var G__17673 = (i__7480__auto___17672 + (1));
i__7480__auto___17672 = G__17673;
continue;
} else {
}
break;
}

var G__17670 = args17668.length;
switch (G__17670) {
case 1:
return starfreighter.db.can_afford_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.can_afford_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17668.length)].join('')));

}
});

starfreighter.db.can_afford_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (amount){
return (function (p1__17617__17618__auto__){
return starfreighter.db.can_afford_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,amount);
});
});

starfreighter.db.can_afford_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (state,amount){
return (cljs.core.cst$kw$cash.cljs$core$IFn$_invoke$arity$1(state) >= amount);
});

starfreighter.db.can_afford_QMARK_.cljs$lang$maxFixedArity = 2;

starfreighter.db.earn = (function starfreighter$db$earn(var_args){
var args17676 = [];
var len__7479__auto___17679 = arguments.length;
var i__7480__auto___17680 = (0);
while(true){
if((i__7480__auto___17680 < len__7479__auto___17679)){
args17676.push((arguments[i__7480__auto___17680]));

var G__17681 = (i__7480__auto___17680 + (1));
i__7480__auto___17680 = G__17681;
continue;
} else {
}
break;
}

var G__17678 = args17676.length;
switch (G__17678) {
case 1:
return starfreighter.db.earn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.earn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17676.length)].join('')));

}
});

starfreighter.db.earn.cljs$core$IFn$_invoke$arity$1 = (function (amount){
return (function (p1__17617__17618__auto__){
return starfreighter.db.earn.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,amount);
});
});

starfreighter.db.earn.cljs$core$IFn$_invoke$arity$2 = (function (state,amount){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cash,(function (p1__17675_SHARP_){
return (p1__17675_SHARP_ + Math.abs(amount));
}));
});

starfreighter.db.earn.cljs$lang$maxFixedArity = 2;

starfreighter.db.spend = (function starfreighter$db$spend(var_args){
var args17684 = [];
var len__7479__auto___17687 = arguments.length;
var i__7480__auto___17688 = (0);
while(true){
if((i__7480__auto___17688 < len__7479__auto___17687)){
args17684.push((arguments[i__7480__auto___17688]));

var G__17689 = (i__7480__auto___17688 + (1));
i__7480__auto___17688 = G__17689;
continue;
} else {
}
break;
}

var G__17686 = args17684.length;
switch (G__17686) {
case 1:
return starfreighter.db.spend.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.spend.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17684.length)].join('')));

}
});

starfreighter.db.spend.cljs$core$IFn$_invoke$arity$1 = (function (amount){
return (function (p1__17617__17618__auto__){
return starfreighter.db.spend.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,amount);
});
});

starfreighter.db.spend.cljs$core$IFn$_invoke$arity$2 = (function (state,amount){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cash,(function (p1__17683_SHARP_){
return (p1__17683_SHARP_ - Math.abs(amount));
}));
});

starfreighter.db.spend.cljs$lang$maxFixedArity = 2;

starfreighter.db.repair_ship = (function starfreighter$db$repair_ship(var_args){
var args17692 = [];
var len__7479__auto___17695 = arguments.length;
var i__7480__auto___17696 = (0);
while(true){
if((i__7480__auto___17696 < len__7479__auto___17695)){
args17692.push((arguments[i__7480__auto___17696]));

var G__17697 = (i__7480__auto___17696 + (1));
i__7480__auto___17696 = G__17697;
continue;
} else {
}
break;
}

var G__17694 = args17692.length;
switch (G__17694) {
case 1:
return starfreighter.db.repair_ship.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.repair_ship.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17692.length)].join('')));

}
});

starfreighter.db.repair_ship.cljs$core$IFn$_invoke$arity$1 = (function (amount){
return (function (p1__17617__17618__auto__){
return starfreighter.db.repair_ship.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,amount);
});
});

starfreighter.db.repair_ship.cljs$core$IFn$_invoke$arity$2 = (function (state,amount){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$ship,(function (p1__17691_SHARP_){
return starfreighter.util.clamp((p1__17691_SHARP_ + amount),(0),(100));
}));
});

starfreighter.db.repair_ship.cljs$lang$maxFixedArity = 2;

starfreighter.db.damage_ship = (function starfreighter$db$damage_ship(var_args){
var args17700 = [];
var len__7479__auto___17703 = arguments.length;
var i__7480__auto___17704 = (0);
while(true){
if((i__7480__auto___17704 < len__7479__auto___17703)){
args17700.push((arguments[i__7480__auto___17704]));

var G__17705 = (i__7480__auto___17704 + (1));
i__7480__auto___17704 = G__17705;
continue;
} else {
}
break;
}

var G__17702 = args17700.length;
switch (G__17702) {
case 1:
return starfreighter.db.damage_ship.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.damage_ship.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17700.length)].join('')));

}
});

starfreighter.db.damage_ship.cljs$core$IFn$_invoke$arity$1 = (function (amount){
return (function (p1__17617__17618__auto__){
return starfreighter.db.damage_ship.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,amount);
});
});

starfreighter.db.damage_ship.cljs$core$IFn$_invoke$arity$2 = (function (state,amount){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$ship,(function (p1__17699_SHARP_){
return starfreighter.util.clamp((p1__17699_SHARP_ - amount),(0),(100));
}));
});

starfreighter.db.damage_ship.cljs$lang$maxFixedArity = 2;

starfreighter.db.remember_char = (function starfreighter$db$remember_char(var_args){
var args17707 = [];
var len__7479__auto___17710 = arguments.length;
var i__7480__auto___17711 = (0);
while(true){
if((i__7480__auto___17711 < len__7479__auto___17710)){
args17707.push((arguments[i__7480__auto___17711]));

var G__17712 = (i__7480__auto___17711 + (1));
i__7480__auto___17711 = G__17712;
continue;
} else {
}
break;
}

var G__17709 = args17707.length;
switch (G__17709) {
case 1:
return starfreighter.db.remember_char.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.remember_char.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17707.length)].join('')));

}
});

starfreighter.db.remember_char.cljs$core$IFn$_invoke$arity$1 = (function (char$){
return (function (p1__17617__17618__auto__){
return starfreighter.db.remember_char.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,char$);
});
});

starfreighter.db.remember_char.cljs$core$IFn$_invoke$arity$2 = (function (state,char$){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chars,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(char$)], null),char$);
});

starfreighter.db.remember_char.cljs$lang$maxFixedArity = 2;

starfreighter.db.forget_char = (function starfreighter$db$forget_char(var_args){
var args17714 = [];
var len__7479__auto___17717 = arguments.length;
var i__7480__auto___17718 = (0);
while(true){
if((i__7480__auto___17718 < len__7479__auto___17717)){
args17714.push((arguments[i__7480__auto___17718]));

var G__17719 = (i__7480__auto___17718 + (1));
i__7480__auto___17718 = G__17719;
continue;
} else {
}
break;
}

var G__17716 = args17714.length;
switch (G__17716) {
case 1:
return starfreighter.db.forget_char.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.forget_char.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17714.length)].join('')));

}
});

starfreighter.db.forget_char.cljs$core$IFn$_invoke$arity$1 = (function (char$){
return (function (p1__17617__17618__auto__){
return starfreighter.db.forget_char.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,char$);
});
});

starfreighter.db.forget_char.cljs$core$IFn$_invoke$arity$2 = (function (state,char$){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$chars,cljs.core.dissoc,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(char$));
});

starfreighter.db.forget_char.cljs$lang$maxFixedArity = 2;

starfreighter.db.__GT_char = (function starfreighter$db$__GT_char(state,char_or_id){
var G__17722 = char_or_id;
if(typeof char_or_id === 'number'){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chars,char_or_id], null),G__17722);
} else {
return G__17722;
}
});
starfreighter.db.update_char = (function starfreighter$db$update_char(var_args){
var args17723 = [];
var len__7479__auto___17726 = arguments.length;
var i__7480__auto___17727 = (0);
while(true){
if((i__7480__auto___17727 < len__7479__auto___17726)){
args17723.push((arguments[i__7480__auto___17727]));

var G__17728 = (i__7480__auto___17727 + (1));
i__7480__auto___17727 = G__17728;
continue;
} else {
}
break;
}

var G__17725 = args17723.length;
switch (G__17725) {
case 2:
return starfreighter.db.update_char.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return starfreighter.db.update_char.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17723.length)].join('')));

}
});

starfreighter.db.update_char.cljs$core$IFn$_invoke$arity$2 = (function (char$,f){
return (function (p1__17617__17618__auto__){
return starfreighter.db.update_char.cljs$core$IFn$_invoke$arity$3(p1__17617__17618__auto__,char$,f);
});
});

starfreighter.db.update_char.cljs$core$IFn$_invoke$arity$3 = (function (state,char$,f){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chars,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(char$)], null),f);
});

starfreighter.db.update_char.cljs$lang$maxFixedArity = 3;

starfreighter.db.from_QMARK_ = (function starfreighter$db$from_QMARK_(var_args){
var args17730 = [];
var len__7479__auto___17733 = arguments.length;
var i__7480__auto___17734 = (0);
while(true){
if((i__7480__auto___17734 < len__7479__auto___17733)){
args17730.push((arguments[i__7480__auto___17734]));

var G__17735 = (i__7480__auto___17734 + (1));
i__7480__auto___17734 = G__17735;
continue;
} else {
}
break;
}

var G__17732 = args17730.length;
switch (G__17732) {
case 1:
return starfreighter.db.from_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.from_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17730.length)].join('')));

}
});

starfreighter.db.from_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (place){
return (function (p1__17617__17618__auto__){
return starfreighter.db.from_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,place);
});
});

starfreighter.db.from_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (char$,place){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$home.cljs$core$IFn$_invoke$arity$1(char$),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(place));
});

starfreighter.db.from_QMARK_.cljs$lang$maxFixedArity = 2;

starfreighter.db.has_trait_QMARK_ = (function starfreighter$db$has_trait_QMARK_(var_args){
var args17737 = [];
var len__7479__auto___17740 = arguments.length;
var i__7480__auto___17741 = (0);
while(true){
if((i__7480__auto___17741 < len__7479__auto___17740)){
args17737.push((arguments[i__7480__auto___17741]));

var G__17742 = (i__7480__auto___17741 + (1));
i__7480__auto___17741 = G__17742;
continue;
} else {
}
break;
}

var G__17739 = args17737.length;
switch (G__17739) {
case 1:
return starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17737.length)].join('')));

}
});

starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (trait){
return (function (p1__17617__17618__auto__){
return starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,trait);
});
});

starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (char$,trait){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$traits.cljs$core$IFn$_invoke$arity$1(char$),trait);
});

starfreighter.db.has_trait_QMARK_.cljs$lang$maxFixedArity = 2;

starfreighter.db.fighter_QMARK_ = starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fighter);
starfreighter.db.mechanic_QMARK_ = starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mechanic);
starfreighter.db.medic_QMARK_ = starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$medic);
starfreighter.db.generous_QMARK_ = starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$generous);
starfreighter.db.stingy_QMARK_ = starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$stingy);
starfreighter.db.trustworthy_QMARK_ = starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$trustworthy);
starfreighter.db.untrustworthy_QMARK_ = starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$untrustworthy);
starfreighter.db.unconscious_QMARK_ = starfreighter.db.has_trait_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$unconscious);
starfreighter.db.add_trait_STAR_ = (function starfreighter$db$add_trait_STAR_(var_args){
var args17744 = [];
var len__7479__auto___17747 = arguments.length;
var i__7480__auto___17748 = (0);
while(true){
if((i__7480__auto___17748 < len__7479__auto___17747)){
args17744.push((arguments[i__7480__auto___17748]));

var G__17749 = (i__7480__auto___17748 + (1));
i__7480__auto___17748 = G__17749;
continue;
} else {
}
break;
}

var G__17746 = args17744.length;
switch (G__17746) {
case 1:
return starfreighter.db.add_trait_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.add_trait_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17744.length)].join('')));

}
});

starfreighter.db.add_trait_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (trait){
return (function (p1__17617__17618__auto__){
return starfreighter.db.add_trait_STAR_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,trait);
});
});

starfreighter.db.add_trait_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (char$,trait){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(char$,cljs.core.cst$kw$traits,cljs.core.conj,trait);
});

starfreighter.db.add_trait_STAR_.cljs$lang$maxFixedArity = 2;

starfreighter.db.drop_trait_STAR_ = (function starfreighter$db$drop_trait_STAR_(var_args){
var args17751 = [];
var len__7479__auto___17754 = arguments.length;
var i__7480__auto___17755 = (0);
while(true){
if((i__7480__auto___17755 < len__7479__auto___17754)){
args17751.push((arguments[i__7480__auto___17755]));

var G__17756 = (i__7480__auto___17755 + (1));
i__7480__auto___17755 = G__17756;
continue;
} else {
}
break;
}

var G__17753 = args17751.length;
switch (G__17753) {
case 1:
return starfreighter.db.drop_trait_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.drop_trait_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17751.length)].join('')));

}
});

starfreighter.db.drop_trait_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (trait){
return (function (p1__17617__17618__auto__){
return starfreighter.db.drop_trait_STAR_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,trait);
});
});

starfreighter.db.drop_trait_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (char$,trait){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(char$,cljs.core.cst$kw$traits,cljs.core.disj,trait);
});

starfreighter.db.drop_trait_STAR_.cljs$lang$maxFixedArity = 2;

starfreighter.db.add_memory_STAR_ = (function starfreighter$db$add_memory_STAR_(var_args){
var args17758 = [];
var len__7479__auto___17761 = arguments.length;
var i__7480__auto___17762 = (0);
while(true){
if((i__7480__auto___17762 < len__7479__auto___17761)){
args17758.push((arguments[i__7480__auto___17762]));

var G__17763 = (i__7480__auto___17762 + (1));
i__7480__auto___17762 = G__17763;
continue;
} else {
}
break;
}

var G__17760 = args17758.length;
switch (G__17760) {
case 1:
return starfreighter.db.add_memory_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.add_memory_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17758.length)].join('')));

}
});

starfreighter.db.add_memory_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (memory){
return (function (p1__17617__17618__auto__){
return starfreighter.db.add_memory_STAR_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,memory);
});
});

starfreighter.db.add_memory_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (char$,memory){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(char$,cljs.core.cst$kw$memories,cljs.core.conj,memory);
});

starfreighter.db.add_memory_STAR_.cljs$lang$maxFixedArity = 2;

starfreighter.db.add_trait = (function starfreighter$db$add_trait(var_args){
var args17765 = [];
var len__7479__auto___17768 = arguments.length;
var i__7480__auto___17769 = (0);
while(true){
if((i__7480__auto___17769 < len__7479__auto___17768)){
args17765.push((arguments[i__7480__auto___17769]));

var G__17770 = (i__7480__auto___17769 + (1));
i__7480__auto___17769 = G__17770;
continue;
} else {
}
break;
}

var G__17767 = args17765.length;
switch (G__17767) {
case 2:
return starfreighter.db.add_trait.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return starfreighter.db.add_trait.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17765.length)].join('')));

}
});

starfreighter.db.add_trait.cljs$core$IFn$_invoke$arity$2 = (function (char$,trait){
return (function (p1__17617__17618__auto__){
return starfreighter.db.add_trait.cljs$core$IFn$_invoke$arity$3(p1__17617__17618__auto__,char$,trait);
});
});

starfreighter.db.add_trait.cljs$core$IFn$_invoke$arity$3 = (function (state,char$,trait){
return starfreighter.db.update_char.cljs$core$IFn$_invoke$arity$3(state,char$,starfreighter.db.add_trait_STAR_.cljs$core$IFn$_invoke$arity$1(trait));
});

starfreighter.db.add_trait.cljs$lang$maxFixedArity = 3;

starfreighter.db.drop_trait = (function starfreighter$db$drop_trait(var_args){
var args17772 = [];
var len__7479__auto___17775 = arguments.length;
var i__7480__auto___17776 = (0);
while(true){
if((i__7480__auto___17776 < len__7479__auto___17775)){
args17772.push((arguments[i__7480__auto___17776]));

var G__17777 = (i__7480__auto___17776 + (1));
i__7480__auto___17776 = G__17777;
continue;
} else {
}
break;
}

var G__17774 = args17772.length;
switch (G__17774) {
case 2:
return starfreighter.db.drop_trait.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return starfreighter.db.drop_trait.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17772.length)].join('')));

}
});

starfreighter.db.drop_trait.cljs$core$IFn$_invoke$arity$2 = (function (char$,trait){
return (function (p1__17617__17618__auto__){
return starfreighter.db.drop_trait.cljs$core$IFn$_invoke$arity$3(p1__17617__17618__auto__,char$,trait);
});
});

starfreighter.db.drop_trait.cljs$core$IFn$_invoke$arity$3 = (function (state,char$,trait){
return starfreighter.db.update_char.cljs$core$IFn$_invoke$arity$3(state,char$,starfreighter.db.drop_trait_STAR_.cljs$core$IFn$_invoke$arity$1(trait));
});

starfreighter.db.drop_trait.cljs$lang$maxFixedArity = 3;

starfreighter.db.add_memory = (function starfreighter$db$add_memory(var_args){
var args17779 = [];
var len__7479__auto___17782 = arguments.length;
var i__7480__auto___17783 = (0);
while(true){
if((i__7480__auto___17783 < len__7479__auto___17782)){
args17779.push((arguments[i__7480__auto___17783]));

var G__17784 = (i__7480__auto___17783 + (1));
i__7480__auto___17783 = G__17784;
continue;
} else {
}
break;
}

var G__17781 = args17779.length;
switch (G__17781) {
case 2:
return starfreighter.db.add_memory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return starfreighter.db.add_memory.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17779.length)].join('')));

}
});

starfreighter.db.add_memory.cljs$core$IFn$_invoke$arity$2 = (function (char$,memory){
return (function (p1__17617__17618__auto__){
return starfreighter.db.add_memory.cljs$core$IFn$_invoke$arity$3(p1__17617__17618__auto__,char$,memory);
});
});

starfreighter.db.add_memory.cljs$core$IFn$_invoke$arity$3 = (function (state,char$,memory){
return starfreighter.db.update_char.cljs$core$IFn$_invoke$arity$3(state,char$,starfreighter.db.add_memory_STAR_.cljs$core$IFn$_invoke$arity$1(memory));
});

starfreighter.db.add_memory.cljs$lang$maxFixedArity = 3;

starfreighter.db.base_mood_values = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$won_DASH_bar_DASH_fight,cljs.core.cst$kw$fixed_DASH_engine,cljs.core.cst$kw$was_DASH_inconvenienced_DASH_by_DASH_passenger,cljs.core.cst$kw$declined_DASH_bonus_DASH_request,cljs.core.cst$kw$went_DASH_gambling_DASH_did_DASH_well,cljs.core.cst$kw$tried_DASH_sell_DASH_counterfeit_DASH_goods,cljs.core.cst$kw$ran_DASH_out_DASH_of_DASH_cash,cljs.core.cst$kw$went_DASH_out_DASH_drinking,cljs.core.cst$kw$visited_DASH_home,cljs.core.cst$kw$refused_DASH_repay_DASH_fought_DASH_collector,cljs.core.cst$kw$got_DASH_along_DASH_with_DASH_crewmate,cljs.core.cst$kw$witnessed_DASH_failure,cljs.core.cst$kw$was_DASH_reassured_DASH_about_DASH_cash,cljs.core.cst$kw$failed_DASH_to_DASH_fix_DASH_engine,cljs.core.cst$kw$was_DASH_annoyed_DASH_by_DASH_crewmate,cljs.core.cst$kw$completed_DASH_delivery,cljs.core.cst$kw$sold_DASH_goods,cljs.core.cst$kw$won_DASH_collector_DASH_fight,cljs.core.cst$kw$declined_DASH_depart_DASH_request,cljs.core.cst$kw$felt_DASH_lonely,cljs.core.cst$kw$backed_DASH_down_DASH_from_DASH_bar_DASH_fight,cljs.core.cst$kw$went_DASH_gambling_DASH_broke_DASH_even,cljs.core.cst$kw$gave_DASH_bonus,cljs.core.cst$kw$hired,cljs.core.cst$kw$crewmate_DASH_resigned,cljs.core.cst$kw$bought_DASH_goods,cljs.core.cst$kw$was_DASH_annoyed_DASH_by_DASH_passenger,cljs.core.cst$kw$annoyed_DASH_crewmate,cljs.core.cst$kw$went_DASH_gambling_DASH_did_DASH_poorly],[(5),(10),(-5),(-5),(15),(-10),(-15),(10),(5),(-20),(5),(-10),(5),(-10),(-10),(5),(2),(15),(-5),(-5),(-5),(10),(10),(10),(5),(1),(-10),(-5),(5)]);
starfreighter.db.calc_mood = (function starfreighter$db$calc_mood(char$){
var generous_QMARK_ = (starfreighter.db.generous_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.generous_QMARK_.cljs$core$IFn$_invoke$arity$1(char$) : starfreighter.db.generous_QMARK_.call(null,char$));
var stingy_QMARK_ = (starfreighter.db.stingy_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.stingy_QMARK_.cljs$core$IFn$_invoke$arity$1(char$) : starfreighter.db.stingy_QMARK_.call(null,char$));
var total_mood = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(50),(function (){var iter__7184__auto__ = ((function (generous_QMARK_,stingy_QMARK_){
return (function starfreighter$db$calc_mood_$_iter__17792(s__17793){
return (new cljs.core.LazySeq(null,((function (generous_QMARK_,stingy_QMARK_){
return (function (){
var s__17793__$1 = s__17793;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17793__$1);
if(temp__4657__auto__){
var s__17793__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17793__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17793__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17795 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17794 = (0);
while(true){
if((i__17794 < size__7183__auto__)){
var memory = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17794);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(starfreighter.db.base_mood_values,memory);
var _ = (cljs.core.truth_(value)?null:(function(){throw (new Error("Assert failed: value"))})());
cljs.core.chunk_append(b__17795,(((value < (0)))?(cljs.core.truth_(generous_QMARK_)?(value / (2)):(cljs.core.truth_(stingy_QMARK_)?(value * (2)):value
)):(cljs.core.truth_(generous_QMARK_)?(value * (2)):(cljs.core.truth_(stingy_QMARK_)?(value / (2)):value
))));

var G__17798 = (i__17794 + (1));
i__17794 = G__17798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17795),starfreighter$db$calc_mood_$_iter__17792(cljs.core.chunk_rest(s__17793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17795),null);
}
} else {
var memory = cljs.core.first(s__17793__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(starfreighter.db.base_mood_values,memory);
var _ = (cljs.core.truth_(value)?null:(function(){throw (new Error("Assert failed: value"))})());
return cljs.core.cons((((value < (0)))?(cljs.core.truth_(generous_QMARK_)?(value / (2)):(cljs.core.truth_(stingy_QMARK_)?(value * (2)):value
)):(cljs.core.truth_(generous_QMARK_)?(value * (2)):(cljs.core.truth_(stingy_QMARK_)?(value / (2)):value
))),starfreighter$db$calc_mood_$_iter__17792(cljs.core.rest(s__17793__$2)));
}
} else {
return null;
}
break;
}
});})(generous_QMARK_,stingy_QMARK_))
,null,null));
});})(generous_QMARK_,stingy_QMARK_))
;
return iter__7184__auto__(cljs.core.cst$kw$memories.cljs$core$IFn$_invoke$arity$1(char$));
})());
return starfreighter.util.clamp(total_mood,(0),(100));
});
starfreighter.db.mood_at_least_QMARK_ = (function starfreighter$db$mood_at_least_QMARK_(var_args){
var args17799 = [];
var len__7479__auto___17802 = arguments.length;
var i__7480__auto___17803 = (0);
while(true){
if((i__7480__auto___17803 < len__7479__auto___17802)){
args17799.push((arguments[i__7480__auto___17803]));

var G__17804 = (i__7480__auto___17803 + (1));
i__7480__auto___17803 = G__17804;
continue;
} else {
}
break;
}

var G__17801 = args17799.length;
switch (G__17801) {
case 1:
return starfreighter.db.mood_at_least_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.mood_at_least_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17799.length)].join('')));

}
});

starfreighter.db.mood_at_least_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (amount){
return (function (p1__17617__17618__auto__){
return starfreighter.db.mood_at_least_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,amount);
});
});

starfreighter.db.mood_at_least_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (char$,amount){
return (starfreighter.db.calc_mood(char$) >= amount);
});

starfreighter.db.mood_at_least_QMARK_.cljs$lang$maxFixedArity = 2;

starfreighter.db.mood_at_most_QMARK_ = (function starfreighter$db$mood_at_most_QMARK_(var_args){
var args17806 = [];
var len__7479__auto___17809 = arguments.length;
var i__7480__auto___17810 = (0);
while(true){
if((i__7480__auto___17810 < len__7479__auto___17809)){
args17806.push((arguments[i__7480__auto___17810]));

var G__17811 = (i__7480__auto___17810 + (1));
i__7480__auto___17810 = G__17811;
continue;
} else {
}
break;
}

var G__17808 = args17806.length;
switch (G__17808) {
case 1:
return starfreighter.db.mood_at_most_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.mood_at_most_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17806.length)].join('')));

}
});

starfreighter.db.mood_at_most_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (amount){
return (function (p1__17617__17618__auto__){
return starfreighter.db.mood_at_most_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,amount);
});
});

starfreighter.db.mood_at_most_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (char$,amount){
return (starfreighter.db.calc_mood(char$) <= amount);
});

starfreighter.db.mood_at_most_QMARK_.cljs$lang$maxFixedArity = 2;

starfreighter.db.open_crew_slots = (function starfreighter$db$open_crew_slots(state){
return (cljs.core.cst$kw$max_DASH_crew.cljs$core$IFn$_invoke$arity$1(state) - cljs.core.count(cljs.core.cst$kw$crew.cljs$core$IFn$_invoke$arity$1(state)));
});
starfreighter.db.can_hold_more_crew_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pos_QMARK_,starfreighter.db.open_crew_slots);
starfreighter.db.add_crew = (function starfreighter$db$add_crew(var_args){
var args17813 = [];
var len__7479__auto___17816 = arguments.length;
var i__7480__auto___17817 = (0);
while(true){
if((i__7480__auto___17817 < len__7479__auto___17816)){
args17813.push((arguments[i__7480__auto___17817]));

var G__17818 = (i__7480__auto___17817 + (1));
i__7480__auto___17817 = G__17818;
continue;
} else {
}
break;
}

var G__17815 = args17813.length;
switch (G__17815) {
case 1:
return starfreighter.db.add_crew.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.add_crew.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17813.length)].join('')));

}
});

starfreighter.db.add_crew.cljs$core$IFn$_invoke$arity$1 = (function (char$){
return (function (p1__17617__17618__auto__){
return starfreighter.db.add_crew.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,char$);
});
});

starfreighter.db.add_crew.cljs$core$IFn$_invoke$arity$2 = (function (state,char$){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(starfreighter.db.add_memory.cljs$core$IFn$_invoke$arity$3(starfreighter.db.remember_char.cljs$core$IFn$_invoke$arity$2(state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(char$,cljs.core.cst$kw$role,cljs.core.cst$kw$crew)),char$,cljs.core.cst$kw$hired),cljs.core.cst$kw$crew,cljs.core.conj,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(char$));
});

starfreighter.db.add_crew.cljs$lang$maxFixedArity = 2;

starfreighter.db.drop_crew = (function starfreighter$db$drop_crew(var_args){
var args17820 = [];
var len__7479__auto___17823 = arguments.length;
var i__7480__auto___17824 = (0);
while(true){
if((i__7480__auto___17824 < len__7479__auto___17823)){
args17820.push((arguments[i__7480__auto___17824]));

var G__17825 = (i__7480__auto___17824 + (1));
i__7480__auto___17824 = G__17825;
continue;
} else {
}
break;
}

var G__17822 = args17820.length;
switch (G__17822) {
case 1:
return starfreighter.db.drop_crew.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.drop_crew.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17820.length)].join('')));

}
});

starfreighter.db.drop_crew.cljs$core$IFn$_invoke$arity$1 = (function (char$){
return (function (p1__17617__17618__auto__){
return starfreighter.db.drop_crew.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,char$);
});
});

starfreighter.db.drop_crew.cljs$core$IFn$_invoke$arity$2 = (function (state,char$){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(starfreighter.db.forget_char.cljs$core$IFn$_invoke$arity$2(state,char$),cljs.core.cst$kw$crew,cljs.core.disj,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(char$));
});

starfreighter.db.drop_crew.cljs$lang$maxFixedArity = 2;

starfreighter.db.crew = (function starfreighter$db$crew(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(starfreighter.db.__GT_char,state),cljs.core.cst$kw$crew.cljs$core$IFn$_invoke$arity$1(state));
});
starfreighter.db.avg_crew_mood = (function starfreighter$db$avg_crew_mood(state){
var crew = starfreighter.db.crew(state);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(starfreighter.db.calc_mood,crew)) / cljs.core.count(crew));
});
starfreighter.db.update_all_crew = (function starfreighter$db$update_all_crew(var_args){
var args17827 = [];
var len__7479__auto___17830 = arguments.length;
var i__7480__auto___17831 = (0);
while(true){
if((i__7480__auto___17831 < len__7479__auto___17830)){
args17827.push((arguments[i__7480__auto___17831]));

var G__17832 = (i__7480__auto___17831 + (1));
i__7480__auto___17831 = G__17832;
continue;
} else {
}
break;
}

var G__17829 = args17827.length;
switch (G__17829) {
case 1:
return starfreighter.db.update_all_crew.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.update_all_crew.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17827.length)].join('')));

}
});

starfreighter.db.update_all_crew.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (p1__17617__17618__auto__){
return starfreighter.db.update_all_crew.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,f);
});
});

starfreighter.db.update_all_crew.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,crew){
return starfreighter.db.update_char.cljs$core$IFn$_invoke$arity$3(state__$1,crew,f);
}),state,starfreighter.db.crew(state));
});

starfreighter.db.update_all_crew.cljs$lang$maxFixedArity = 2;

starfreighter.db.add_whole_crew_memory = (function starfreighter$db$add_whole_crew_memory(var_args){
var args17834 = [];
var len__7479__auto___17837 = arguments.length;
var i__7480__auto___17838 = (0);
while(true){
if((i__7480__auto___17838 < len__7479__auto___17837)){
args17834.push((arguments[i__7480__auto___17838]));

var G__17839 = (i__7480__auto___17838 + (1));
i__7480__auto___17838 = G__17839;
continue;
} else {
}
break;
}

var G__17836 = args17834.length;
switch (G__17836) {
case 1:
return starfreighter.db.add_whole_crew_memory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.add_whole_crew_memory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17834.length)].join('')));

}
});

starfreighter.db.add_whole_crew_memory.cljs$core$IFn$_invoke$arity$1 = (function (memory){
return (function (p1__17617__17618__auto__){
return starfreighter.db.add_whole_crew_memory.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,memory);
});
});

starfreighter.db.add_whole_crew_memory.cljs$core$IFn$_invoke$arity$2 = (function (state,memory){
return starfreighter.db.update_all_crew.cljs$core$IFn$_invoke$arity$2(state,starfreighter.db.add_memory_STAR_.cljs$core$IFn$_invoke$arity$1(memory));
});

starfreighter.db.add_whole_crew_memory.cljs$lang$maxFixedArity = 2;

starfreighter.db.travel_stage_EQ__QMARK_ = (function starfreighter$db$travel_stage_EQ__QMARK_(var_args){
var args17841 = [];
var len__7479__auto___17844 = arguments.length;
var i__7480__auto___17845 = (0);
while(true){
if((i__7480__auto___17845 < len__7479__auto___17844)){
args17841.push((arguments[i__7480__auto___17845]));

var G__17846 = (i__7480__auto___17845 + (1));
i__7480__auto___17845 = G__17846;
continue;
} else {
}
break;
}

var G__17843 = args17841.length;
switch (G__17843) {
case 1:
return starfreighter.db.travel_stage_EQ__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.travel_stage_EQ__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17841.length)].join('')));

}
});

starfreighter.db.travel_stage_EQ__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (stage){
return (function (p1__17617__17618__auto__){
return starfreighter.db.travel_stage_EQ__QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,stage);
});
});

starfreighter.db.travel_stage_EQ__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (state,stage){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$travel.cljs$core$IFn$_invoke$arity$1(state)),stage);
});

starfreighter.db.travel_stage_EQ__QMARK_.cljs$lang$maxFixedArity = 2;

starfreighter.db.in_port_QMARK_ = starfreighter.db.travel_stage_EQ__QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$in_DASH_port);
starfreighter.db.departing_QMARK_ = starfreighter.db.travel_stage_EQ__QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$departing);
starfreighter.db.in_transit_QMARK_ = starfreighter.db.travel_stage_EQ__QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$in_DASH_transit);
starfreighter.db.arriving_QMARK_ = starfreighter.db.travel_stage_EQ__QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$arriving);
starfreighter.db.current_place = (function starfreighter$db$current_place(p__17848){
var map__17852 = p__17848;
var map__17852__$1 = ((((!((map__17852 == null)))?((((map__17852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17852):map__17852);
var state = map__17852__$1;
var travel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17852__$1,cljs.core.cst$kw$travel);
var temp__4657__auto__ = (function (){var G__17854 = (((cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(travel) instanceof cljs.core.Keyword))?cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(travel).fqn:null);
switch (G__17854) {
case "arriving":
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(travel);

break;
case "in-port":
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(travel);

break;
case "departing":
return cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(travel);

break;
case "in-transit":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(travel))].join('')));

}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var place_name = temp__4657__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$places.cljs$core$IFn$_invoke$arity$1(state),place_name);
} else {
return null;
}
});
starfreighter.db.current_dest = (function starfreighter$db$current_dest(p__17856){
var map__17860 = p__17856;
var map__17860__$1 = ((((!((map__17860 == null)))?((((map__17860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17860):map__17860);
var state = map__17860__$1;
var travel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17860__$1,cljs.core.cst$kw$travel);
var temp__4657__auto__ = (function (){var G__17862 = (((cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(travel) instanceof cljs.core.Keyword))?cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(travel).fqn:null);
switch (G__17862) {
case "arriving":
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(travel);

break;
case "departing":
return cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(travel);

break;
case "in-transit":
return cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(travel);

break;
case "in-port":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(travel))].join('')));

}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var dest_name = temp__4657__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$places.cljs$core$IFn$_invoke$arity$1(state),dest_name);
} else {
return null;
}
});
starfreighter.db.find_module = (function starfreighter$db$find_module(var_args){
var args17865 = [];
var len__7479__auto___17868 = arguments.length;
var i__7480__auto___17869 = (0);
while(true){
if((i__7480__auto___17869 < len__7479__auto___17868)){
args17865.push((arguments[i__7480__auto___17869]));

var G__17870 = (i__7480__auto___17869 + (1));
i__7480__auto___17869 = G__17870;
continue;
} else {
}
break;
}

var G__17867 = args17865.length;
switch (G__17867) {
case 1:
return starfreighter.db.find_module.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.find_module.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17865.length)].join('')));

}
});

starfreighter.db.find_module.cljs$core$IFn$_invoke$arity$1 = (function (template){
return (function (p1__17617__17618__auto__){
return starfreighter.db.find_module.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,template);
});
});

starfreighter.db.find_module.cljs$core$IFn$_invoke$arity$2 = (function (place,template){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17864_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(p1__17864_SHARP_),template);
}),cljs.core.cst$kw$modules.cljs$core$IFn$_invoke$arity$1(place)));
});

starfreighter.db.find_module.cljs$lang$maxFixedArity = 2;

starfreighter.db.__GT_place = (function starfreighter$db$__GT_place(state,place){
var G__17873 = place;
if(typeof place === 'string'){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$places.cljs$core$IFn$_invoke$arity$1(state),G__17873);
} else {
return G__17873;
}
});
starfreighter.db.adjacencies = (function starfreighter$db$adjacencies(state,place){
return cljs.core.cst$kw$connections.cljs$core$IFn$_invoke$arity$1(starfreighter.db.__GT_place(state,place));
});
starfreighter.db.pathfind = (function starfreighter$db$pathfind(var_args){
var args17877 = [];
var len__7479__auto___17882 = arguments.length;
var i__7480__auto___17883 = (0);
while(true){
if((i__7480__auto___17883 < len__7479__auto___17882)){
args17877.push((arguments[i__7480__auto___17883]));

var G__17884 = (i__7480__auto___17883 + (1));
i__7480__auto___17883 = G__17884;
continue;
} else {
}
break;
}

var G__17879 = args17877.length;
switch (G__17879) {
case 2:
return starfreighter.db.pathfind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return starfreighter.db.pathfind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17877.length)].join('')));

}
});

starfreighter.db.pathfind.cljs$core$IFn$_invoke$arity$2 = (function (state,to){
return starfreighter.db.pathfind.cljs$core$IFn$_invoke$arity$3(state,(function (){var or__6404__auto__ = starfreighter.db.current_place(state);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$travel.cljs$core$IFn$_invoke$arity$1(state));
}
})(),to);
});

starfreighter.db.pathfind.cljs$core$IFn$_invoke$arity$3 = (function (state,from,to){
if((typeof from === 'string') || ((cljs.core.map_QMARK_(from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(from),cljs.core.cst$kw$place)))){
} else {
throw (new Error("Assert failed: (or (string? from) (and (map? from) (= (:type from) :place)))"));
}

if((typeof to === 'string') || ((cljs.core.map_QMARK_(to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(to),cljs.core.cst$kw$place)))){
} else {
throw (new Error("Assert failed: (or (string? to) (and (map? to) (= (:type to) :place)))"));
}

var from__$1 = (function (){var G__17880 = from;
if(cljs.core.map_QMARK_(from)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__17880);
} else {
return G__17880;
}
})();
var to__$1 = (function (){var G__17881 = to;
if(cljs.core.map_QMARK_(to)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__17881);
} else {
return G__17881;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from__$1,to__$1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from__$1], null);
} else {
var paths = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from__$1], null)], null);
var visited = cljs.core.PersistentHashSet.fromArray([from__$1], true);
while(true){
var adjacencies_STAR_ = ((function (paths,visited,from__$1,to__$1){
return (function (p1__17874_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(visited,starfreighter.db.adjacencies(state,p1__17874_SHARP_));
});})(paths,visited,from__$1,to__$1))
;
var paths_SINGLEQUOTE_ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (paths,visited,adjacencies_STAR_,from__$1,to__$1){
return (function (p1__17875_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,p1__17875_SHARP_),adjacencies_STAR_(cljs.core.peek(p1__17875_SHARP_)));
});})(paths,visited,adjacencies_STAR_,from__$1,to__$1))
,cljs.core.array_seq([paths], 0));
var or__6404__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (paths,visited,adjacencies_STAR_,paths_SINGLEQUOTE_,from__$1,to__$1){
return (function (p1__17876_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(p1__17876_SHARP_),to__$1);
});})(paths,visited,adjacencies_STAR_,paths_SINGLEQUOTE_,from__$1,to__$1))
,paths_SINGLEQUOTE_));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var G__17886 = paths_SINGLEQUOTE_;
var G__17887 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(visited,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,paths_SINGLEQUOTE_));
paths = G__17886;
visited = G__17887;
continue;
}
break;
}
}
});

starfreighter.db.pathfind.cljs$lang$maxFixedArity = 3;

starfreighter.db.rand_destination = (function starfreighter$db$rand_destination(state){
var place = starfreighter.db.current_place(state);
return starfreighter.rand.rand_nth(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$connections.cljs$core$IFn$_invoke$arity$1(place),starfreighter.rand.rand_nth(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(place)], true),cljs.core.keys(cljs.core.cst$kw$places.cljs$core$IFn$_invoke$arity$1(state))))));
});
starfreighter.db.where_to_next = (function starfreighter$db$where_to_next(state){
var place = starfreighter.db.current_place(state);
var cargo_dests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$destination,cljs.core.cst$kw$cargo.cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.empty_QMARK_(cargo_dests)){
return starfreighter.rand.rand_nth(cljs.core.cst$kw$connections.cljs$core$IFn$_invoke$arity$1(place));
} else {
return cljs.core.last(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._LT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(starfreighter.db.pathfind,state),cargo_dests))));
}
});
starfreighter.db.begin_departure_for = (function starfreighter$db$begin_departure_for(var_args){
var args17888 = [];
var len__7479__auto___17891 = arguments.length;
var i__7480__auto___17892 = (0);
while(true){
if((i__7480__auto___17892 < len__7479__auto___17891)){
args17888.push((arguments[i__7480__auto___17892]));

var G__17893 = (i__7480__auto___17892 + (1));
i__7480__auto___17892 = G__17893;
continue;
} else {
}
break;
}

var G__17890 = args17888.length;
switch (G__17890) {
case 1:
return starfreighter.db.begin_departure_for.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.begin_departure_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17888.length)].join('')));

}
});

starfreighter.db.begin_departure_for.cljs$core$IFn$_invoke$arity$1 = (function (dest){
return (function (p1__17617__17618__auto__){
return starfreighter.db.begin_departure_for.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,dest);
});
});

starfreighter.db.begin_departure_for.cljs$core$IFn$_invoke$arity$2 = (function (state,dest){
if(cljs.core.truth_((starfreighter.db.in_port_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.in_port_QMARK_.cljs$core$IFn$_invoke$arity$1(state) : starfreighter.db.in_port_QMARK_.call(null,state)))){
} else {
throw (new Error("Assert failed: (in-port? state)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$travel,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$stage,cljs.core.cst$kw$departing,cljs.core.cst$kw$from,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(starfreighter.db.current_place(state)),cljs.core.cst$kw$to,cljs.core.second(starfreighter.db.pathfind.cljs$core$IFn$_invoke$arity$2(state,dest)),cljs.core.cst$kw$final_DASH_dest,dest], null),cljs.core.array_seq([cljs.core.cst$kw$recent_DASH_picks,cljs.core.PersistentHashSet.EMPTY], 0));
});

starfreighter.db.begin_departure_for.cljs$lang$maxFixedArity = 2;

starfreighter.db.abort_departure = (function starfreighter$db$abort_departure(state){
if(cljs.core.truth_((starfreighter.db.departing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.departing_QMARK_.cljs$core$IFn$_invoke$arity$1(state) : starfreighter.db.departing_QMARK_.call(null,state)))){
} else {
throw (new Error("Assert failed: (departing? state)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$travel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stage,cljs.core.cst$kw$in_DASH_port,cljs.core.cst$kw$at,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$travel.cljs$core$IFn$_invoke$arity$1(state))], null),cljs.core.array_seq([cljs.core.cst$kw$recent_DASH_picks,cljs.core.PersistentHashSet.EMPTY], 0));
});
starfreighter.db.depart = (function starfreighter$db$depart(state){
if(cljs.core.truth_((starfreighter.db.departing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.departing_QMARK_.cljs$core$IFn$_invoke$arity$1(state) : starfreighter.db.departing_QMARK_.call(null,state)))){
} else {
throw (new Error("Assert failed: (departing? state)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$travel,cljs.core.cst$kw$stage], null),cljs.core.cst$kw$in_DASH_transit),cljs.core.cst$kw$recent_DASH_picks,cljs.core.PersistentHashSet.EMPTY);
});
starfreighter.db.begin_arrival = (function starfreighter$db$begin_arrival(state){
if(cljs.core.truth_((starfreighter.db.in_transit_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.in_transit_QMARK_.cljs$core$IFn$_invoke$arity$1(state) : starfreighter.db.in_transit_QMARK_.call(null,state)))){
} else {
throw (new Error("Assert failed: (in-transit? state)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$travel,cljs.core.assoc,cljs.core.cst$kw$stage,cljs.core.cst$kw$arriving,cljs.core.cst$kw$at,cljs.core.array_seq([cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$travel.cljs$core$IFn$_invoke$arity$1(state))], 0)),cljs.core.cst$kw$travel,cljs.core.dissoc,cljs.core.cst$kw$from,cljs.core.cst$kw$to),cljs.core.cst$kw$recent_DASH_picks,cljs.core.PersistentHashSet.EMPTY);
});
starfreighter.db.bounce = (function starfreighter$db$bounce(p__17895){
var map__17898 = p__17895;
var map__17898__$1 = ((((!((map__17898 == null)))?((((map__17898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17898):map__17898);
var state = map__17898__$1;
var travel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17898__$1,cljs.core.cst$kw$travel);
if(cljs.core.truth_((function (){var and__6392__auto__ = (starfreighter.db.arriving_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.arriving_QMARK_.cljs$core$IFn$_invoke$arity$1(state) : starfreighter.db.arriving_QMARK_.call(null,state));
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = cljs.core.cst$kw$final_DASH_dest.cljs$core$IFn$_invoke$arity$1(travel);
if(cljs.core.truth_(and__6392__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(travel),cljs.core.cst$kw$final_DASH_dest.cljs$core$IFn$_invoke$arity$1(travel));
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (arriving? state) (:final-dest travel) (not= (:at travel) (:final-dest travel)))"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$travel,cljs.core.assoc,cljs.core.cst$kw$stage,cljs.core.cst$kw$in_DASH_transit,cljs.core.cst$kw$from,cljs.core.array_seq([cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(travel),cljs.core.cst$kw$to,cljs.core.second(starfreighter.db.pathfind.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$final_DASH_dest.cljs$core$IFn$_invoke$arity$1(travel)))], 0)),cljs.core.cst$kw$recent_DASH_picks,cljs.core.PersistentHashSet.EMPTY);
});
starfreighter.db.arrive = (function starfreighter$db$arrive(state){
if(cljs.core.truth_((starfreighter.db.arriving_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.arriving_QMARK_.cljs$core$IFn$_invoke$arity$1(state) : starfreighter.db.arriving_QMARK_.call(null,state)))){
} else {
throw (new Error("Assert failed: (arriving? state)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$travel,cljs.core.cst$kw$stage], null),cljs.core.cst$kw$in_DASH_port),cljs.core.cst$kw$recent_DASH_picks,cljs.core.PersistentHashSet.EMPTY);
});
starfreighter.db.open_cargo_slots = (function starfreighter$db$open_cargo_slots(state){
return (cljs.core.cst$kw$max_DASH_cargo.cljs$core$IFn$_invoke$arity$1(state) - cljs.core.count(cljs.core.cst$kw$cargo.cljs$core$IFn$_invoke$arity$1(state)));
});
starfreighter.db.can_hold_more_cargo_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pos_QMARK_,starfreighter.db.open_cargo_slots);
starfreighter.db.add_cargo = (function starfreighter$db$add_cargo(var_args){
var args17900 = [];
var len__7479__auto___17904 = arguments.length;
var i__7480__auto___17905 = (0);
while(true){
if((i__7480__auto___17905 < len__7479__auto___17904)){
args17900.push((arguments[i__7480__auto___17905]));

var G__17906 = (i__7480__auto___17905 + (1));
i__7480__auto___17905 = G__17906;
continue;
} else {
}
break;
}

var G__17902 = args17900.length;
switch (G__17902) {
case 1:
return starfreighter.db.add_cargo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.add_cargo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17900.length)].join('')));

}
});

starfreighter.db.add_cargo.cljs$core$IFn$_invoke$arity$1 = (function (cargo){
return (function (p1__17617__17618__auto__){
return starfreighter.db.add_cargo.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,cargo);
});
});

starfreighter.db.add_cargo.cljs$core$IFn$_invoke$arity$2 = (function (state,cargo){
var cargo__$1 = (function (){var G__17903 = cargo;
if(cljs.core.truth_(starfreighter.db.char_QMARK_(cargo))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17903,cljs.core.cst$kw$role,cljs.core.cst$kw$passenger);
} else {
return G__17903;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$cargo,cljs.core.conj,cargo__$1);
});

starfreighter.db.add_cargo.cljs$lang$maxFixedArity = 2;

starfreighter.db.drop_cargo = (function starfreighter$db$drop_cargo(var_args){
var args17908 = [];
var len__7479__auto___17911 = arguments.length;
var i__7480__auto___17912 = (0);
while(true){
if((i__7480__auto___17912 < len__7479__auto___17911)){
args17908.push((arguments[i__7480__auto___17912]));

var G__17913 = (i__7480__auto___17912 + (1));
i__7480__auto___17912 = G__17913;
continue;
} else {
}
break;
}

var G__17910 = args17908.length;
switch (G__17910) {
case 1:
return starfreighter.db.drop_cargo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.drop_cargo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17908.length)].join('')));

}
});

starfreighter.db.drop_cargo.cljs$core$IFn$_invoke$arity$1 = (function (cargo){
return (function (p1__17617__17618__auto__){
return starfreighter.db.drop_cargo.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,cargo);
});
});

starfreighter.db.drop_cargo.cljs$core$IFn$_invoke$arity$2 = (function (state,cargo){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cargo,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.PersistentHashSet.fromArray([cargo], true))));
});

starfreighter.db.drop_cargo.cljs$lang$maxFixedArity = 2;

starfreighter.db.passengers = (function starfreighter$db$passengers(state){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(starfreighter.db.char_QMARK_,cljs.core.cst$kw$cargo.cljs$core$IFn$_invoke$arity$1(state));
});
starfreighter.db.import_QMARK_ = (function starfreighter$db$import_QMARK_(var_args){
var args17915 = [];
var len__7479__auto___17919 = arguments.length;
var i__7480__auto___17920 = (0);
while(true){
if((i__7480__auto___17920 < len__7479__auto___17919)){
args17915.push((arguments[i__7480__auto___17920]));

var G__17921 = (i__7480__auto___17920 + (1));
i__7480__auto___17920 = G__17921;
continue;
} else {
}
break;
}

var G__17917 = args17915.length;
switch (G__17917) {
case 1:
return starfreighter.db.import_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.import_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17915.length)].join('')));

}
});

starfreighter.db.import_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (place){
return (function (p1__17617__17618__auto__){
return starfreighter.db.import_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,place);
});
});

starfreighter.db.import_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (item,place){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(place),(function (){var G__17918 = item;
if(cljs.core.map_QMARK_(item)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__17918);
} else {
return G__17918;
}
})());
});

starfreighter.db.import_QMARK_.cljs$lang$maxFixedArity = 2;

starfreighter.db.headed_to_QMARK_ = (function starfreighter$db$headed_to_QMARK_(var_args){
var args17923 = [];
var len__7479__auto___17926 = arguments.length;
var i__7480__auto___17927 = (0);
while(true){
if((i__7480__auto___17927 < len__7479__auto___17926)){
args17923.push((arguments[i__7480__auto___17927]));

var G__17928 = (i__7480__auto___17927 + (1));
i__7480__auto___17927 = G__17928;
continue;
} else {
}
break;
}

var G__17925 = args17923.length;
switch (G__17925) {
case 1:
return starfreighter.db.headed_to_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.headed_to_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17923.length)].join('')));

}
});

starfreighter.db.headed_to_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (loc){
return (function (p1__17617__17618__auto__){
return starfreighter.db.headed_to_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,loc);
});
});

starfreighter.db.headed_to_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (thing,loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$destination.cljs$core$IFn$_invoke$arity$1(thing),loc);
});

starfreighter.db.headed_to_QMARK_.cljs$lang$maxFixedArity = 2;

starfreighter.db.headed_here_QMARK_ = (function starfreighter$db$headed_here_QMARK_(state){
return starfreighter.db.headed_to_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(starfreighter.db.current_place(state)));
});
starfreighter.db.cargo_to_drop = (function starfreighter$db$cargo_to_drop(state){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(starfreighter.db.headed_here_QMARK_(state),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(starfreighter.db.char_QMARK_,cljs.core.cst$kw$cargo.cljs$core$IFn$_invoke$arity$1(state)));
});
starfreighter.db.passengers_to_drop = (function starfreighter$db$passengers_to_drop(state){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(starfreighter.db.headed_here_QMARK_(state),starfreighter.db.passengers(state));
});
starfreighter.db.freely_sellable_QMARK_ = (function starfreighter$db$freely_sellable_QMARK_(cargo){
return cljs.core.not((function (){var or__6404__auto__ = starfreighter.db.char_QMARK_(cargo);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.cst$kw$destination.cljs$core$IFn$_invoke$arity$1(cargo);
}
})());
});
starfreighter.db.some_sellable_cargo = (function starfreighter$db$some_sellable_cargo(state){
var exports = cljs.core.set(cljs.core.cst$kw$exports.cljs$core$IFn$_invoke$arity$1(starfreighter.db.current_place(state)));
var cargo = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (exports){
return (function (p1__17930_SHARP_){
return cljs.core.contains_QMARK_(exports,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__17930_SHARP_));
});})(exports))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(starfreighter.db.freely_sellable_QMARK_,cljs.core.cst$kw$cargo.cljs$core$IFn$_invoke$arity$1(state)));
if((cljs.core.count(cargo) > (0))){
return starfreighter.rand.rand_nth(cargo);
} else {
return null;
}
});
starfreighter.db.merchants = (function starfreighter$db$merchants(state){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(starfreighter.db.__GT_char,state),cljs.core.cst$kw$merchants.cljs$core$IFn$_invoke$arity$1(starfreighter.db.current_place(state)));
});
starfreighter.db.rand_export = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(starfreighter.rand.rand_nth,cljs.core.cst$kw$exports,starfreighter.db.current_place);
starfreighter.db.will_trust_with_normal_job_QMARK_ = (function starfreighter$db$will_trust_with_normal_job_QMARK_(merchant){
return (starfreighter.db.calc_mood(merchant) > (-15));
});
starfreighter.db.some_trusting_merchant = (function starfreighter$db$some_trusting_merchant(state){
return starfreighter.db.some_where.cljs$core$IFn$_invoke$arity$3(state,starfreighter.db.will_trust_with_normal_job_QMARK_,starfreighter.db.merchants);
});
starfreighter.db.set_next_card = (function starfreighter$db$set_next_card(var_args){
var args17931 = [];
var len__7479__auto___17934 = arguments.length;
var i__7480__auto___17935 = (0);
while(true){
if((i__7480__auto___17935 < len__7479__auto___17934)){
args17931.push((arguments[i__7480__auto___17935]));

var G__17936 = (i__7480__auto___17935 + (1));
i__7480__auto___17935 = G__17936;
continue;
} else {
}
break;
}

var G__17933 = args17931.length;
switch (G__17933) {
case 1:
return starfreighter.db.set_next_card.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.set_next_card.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17931.length)].join('')));

}
});

starfreighter.db.set_next_card.cljs$core$IFn$_invoke$arity$1 = (function (card){
return (function (p1__17617__17618__auto__){
return starfreighter.db.set_next_card.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,card);
});
});

starfreighter.db.set_next_card.cljs$core$IFn$_invoke$arity$2 = (function (state,card){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$next_DASH_card,card);
});

starfreighter.db.set_next_card.cljs$lang$maxFixedArity = 2;

starfreighter.db.set_deck = (function starfreighter$db$set_deck(var_args){
var args17938 = [];
var len__7479__auto___17941 = arguments.length;
var i__7480__auto___17942 = (0);
while(true){
if((i__7480__auto___17942 < len__7479__auto___17941)){
args17938.push((arguments[i__7480__auto___17942]));

var G__17943 = (i__7480__auto___17942 + (1));
i__7480__auto___17942 = G__17943;
continue;
} else {
}
break;
}

var G__17940 = args17938.length;
switch (G__17940) {
case 1:
return starfreighter.db.set_deck.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.db.set_deck.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17938.length)].join('')));

}
});

starfreighter.db.set_deck.cljs$core$IFn$_invoke$arity$1 = (function (deck){
return (function (p1__17617__17618__auto__){
return starfreighter.db.set_deck.cljs$core$IFn$_invoke$arity$2(p1__17617__17618__auto__,deck);
});
});

starfreighter.db.set_deck.cljs$core$IFn$_invoke$arity$2 = (function (state,deck){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$deck,deck);
});

starfreighter.db.set_deck.cljs$lang$maxFixedArity = 2;

starfreighter.db.unset_deck = (function starfreighter$db$unset_deck(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$deck);
});
starfreighter.db.char_effect_fns = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$add_DASH_trait,starfreighter.db.add_trait_STAR_,cljs.core.cst$kw$drop_DASH_trait,starfreighter.db.drop_trait_STAR_,cljs.core.cst$kw$add_DASH_memory,starfreighter.db.add_memory_STAR_,cljs.core.cst$kw$call,(function() { 
var G__17945__delegate = function (char$,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,char$,args);
};
var G__17945 = function (char$,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__17946__i = 0, G__17946__a = new Array(arguments.length -  2);
while (G__17946__i < G__17946__a.length) {G__17946__a[G__17946__i] = arguments[G__17946__i + 2]; ++G__17946__i;}
  args = new cljs.core.IndexedSeq(G__17946__a,0);
} 
return G__17945__delegate.call(this,char$,f,args);};
G__17945.cljs$lang$maxFixedArity = 2;
G__17945.cljs$lang$applyTo = (function (arglist__17947){
var char$ = cljs.core.first(arglist__17947);
arglist__17947 = cljs.core.next(arglist__17947);
var f = cljs.core.first(arglist__17947);
var args = cljs.core.rest(arglist__17947);
return G__17945__delegate(char$,f,args);
});
G__17945.cljs$core$IFn$_invoke$arity$variadic = G__17945__delegate;
return G__17945;
})()
], null);
starfreighter.db.process_char_effect = (function starfreighter$db$process_char_effect(state,char$,effect){
var temp__4655__auto__ = effect;
if(cljs.core.truth_(temp__4655__auto__)){
var vec__17951 = temp__4655__auto__;
var seq__17952 = cljs.core.seq(vec__17951);
var first__17953 = cljs.core.first(seq__17952);
var seq__17952__$1 = cljs.core.next(seq__17952);
var op = first__17953;
var args = seq__17952__$1;
var temp__4655__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(starfreighter.db.char_effect_fns,op);
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return starfreighter.db.update_char.cljs$core$IFn$_invoke$arity$3(state,char$,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args));
} else {
return starfreighter.util.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["No such char effect ",op], 0));
}
} else {
return starfreighter.util.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Expected char effect [:op &args], got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([effect], 0))], 0));
}
});
starfreighter.db.effect_fns = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$add_DASH_whole_DASH_crew_DASH_memory,cljs.core.cst$kw$add_DASH_cargo,cljs.core.cst$kw$add_DASH_crew,cljs.core.cst$kw$earn,cljs.core.cst$kw$forget_DASH_char,cljs.core.cst$kw$call,cljs.core.cst$kw$damage_DASH_ship,cljs.core.cst$kw$depart,cljs.core.cst$kw$spend,cljs.core.cst$kw$begin_DASH_arrival,cljs.core.cst$kw$update_DASH_all_DASH_crew,cljs.core.cst$kw$drop_DASH_cargo,cljs.core.cst$kw$drop_DASH_crew,cljs.core.cst$kw$bounce,cljs.core.cst$kw$unset_DASH_deck,cljs.core.cst$kw$add_DASH_trait,cljs.core.cst$kw$update_DASH_char,cljs.core.cst$kw$set_DASH_deck,cljs.core.cst$kw$add_DASH_memory,cljs.core.cst$kw$repair_DASH_ship,cljs.core.cst$kw$remember_DASH_char,cljs.core.cst$kw$drop_DASH_trait,cljs.core.cst$kw$arrive,cljs.core.cst$kw$set_DASH_next_DASH_card,cljs.core.cst$kw$begin_DASH_departure_DASH_for],[starfreighter.db.add_whole_crew_memory,starfreighter.db.add_cargo,starfreighter.db.add_crew,starfreighter.db.earn,starfreighter.db.forget_char,(function() { 
var G__17954__delegate = function (state,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
};
var G__17954 = function (state,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__17955__i = 0, G__17955__a = new Array(arguments.length -  2);
while (G__17955__i < G__17955__a.length) {G__17955__a[G__17955__i] = arguments[G__17955__i + 2]; ++G__17955__i;}
  args = new cljs.core.IndexedSeq(G__17955__a,0);
} 
return G__17954__delegate.call(this,state,f,args);};
G__17954.cljs$lang$maxFixedArity = 2;
G__17954.cljs$lang$applyTo = (function (arglist__17956){
var state = cljs.core.first(arglist__17956);
arglist__17956 = cljs.core.next(arglist__17956);
var f = cljs.core.first(arglist__17956);
var args = cljs.core.rest(arglist__17956);
return G__17954__delegate(state,f,args);
});
G__17954.cljs$core$IFn$_invoke$arity$variadic = G__17954__delegate;
return G__17954;
})()
,starfreighter.db.damage_ship,starfreighter.db.depart,starfreighter.db.spend,starfreighter.db.begin_arrival,starfreighter.db.update_all_crew,starfreighter.db.drop_cargo,starfreighter.db.drop_crew,starfreighter.db.bounce,starfreighter.db.unset_deck,starfreighter.db.add_trait,starfreighter.db.update_char,starfreighter.db.set_deck,starfreighter.db.add_memory,starfreighter.db.repair_ship,starfreighter.db.remember_char,starfreighter.db.drop_trait,starfreighter.db.arrive,starfreighter.db.set_next_card,starfreighter.db.begin_departure_for]);
starfreighter.db.process_effect = (function starfreighter$db$process_effect(state,effect){
var temp__4655__auto__ = effect;
if(cljs.core.truth_(temp__4655__auto__)){
var vec__17966 = temp__4655__auto__;
var seq__17967 = cljs.core.seq(vec__17966);
var first__17968 = cljs.core.first(seq__17967);
var seq__17967__$1 = cljs.core.next(seq__17967);
var op = first__17968;
var args = seq__17967__$1;
var temp__4655__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(starfreighter.db.effect_fns,op);
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
} else {
var G__17969 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__17969) {
case "update-char":
var vec__17970 = args;
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17970,(0),null);
var char_effect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17970,(1),null);
return starfreighter.db.process_char_effect(state,char$,char_effect);

break;
case "update-all-crew":
var char_effect = cljs.core.second(args);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (char_effect,G__17969,temp__4655__auto____$1,vec__17966,seq__17967,first__17968,seq__17967__$1,op,args,temp__4655__auto__){
return (function (p1__17957_SHARP_,p2__17958_SHARP_){
return starfreighter.db.process_char_effect(p1__17957_SHARP_,p2__17958_SHARP_,char_effect);
});})(char_effect,G__17969,temp__4655__auto____$1,vec__17966,seq__17967,first__17968,seq__17967__$1,op,args,temp__4655__auto__))
,state,starfreighter.db.crew(state));

break;
default:
return starfreighter.util.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["No such effect ",op], 0));

}
}
} else {
return starfreighter.util.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Expected effect [:op &args], got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([effect], 0))], 0));
}
});
starfreighter.db.process_effects = (function starfreighter$db$process_effects(state,effects){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(starfreighter.db.process_effect,state,effects);
});
