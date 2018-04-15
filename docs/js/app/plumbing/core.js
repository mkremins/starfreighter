// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = cljs.core.cst$kw$plumbing$core_SLASH_missing;
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args21658 = [];
var len__7479__auto___21673 = arguments.length;
var i__7480__auto___21674 = (0);
while(true){
if((i__7480__auto___21674 < len__7479__auto___21673)){
args21658.push((arguments[i__7480__auto___21674]));

var G__21675 = (i__7480__auto___21674 + (1));
i__7480__auto___21674 = G__21675;
continue;
} else {
}
break;
}

var G__21666 = args21658.length;
switch (G__21666) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args21658.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7498__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21667) : f.call(null,G__21667));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__21669 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21668,G__21669) : f.call(null,G__21668,G__21669));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__21671 = x1;
var G__21672 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21670,G__21671,G__21672) : f.call(null,G__21670,G__21671,G__21672));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq21659){
var G__21660 = cljs.core.first(seq21659);
var seq21659__$1 = cljs.core.next(seq21659);
var G__21661 = cljs.core.first(seq21659__$1);
var seq21659__$2 = cljs.core.next(seq21659__$1);
var G__21662 = cljs.core.first(seq21659__$2);
var seq21659__$3 = cljs.core.next(seq21659__$2);
var G__21663 = cljs.core.first(seq21659__$3);
var seq21659__$4 = cljs.core.next(seq21659__$3);
var G__21664 = cljs.core.first(seq21659__$4);
var seq21659__$5 = cljs.core.next(seq21659__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__21660,G__21661,G__21662,G__21663,G__21664,seq21659__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);

/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__21396__auto__ = (function (){var G__21694 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21694) : cljs.core.atom.call(null,G__21694));
})();
var seq__21695_21709 = cljs.core.seq(m);
var chunk__21696_21710 = null;
var count__21697_21711 = (0);
var i__21698_21712 = (0);
while(true){
if((i__21698_21712 < count__21697_21711)){
var vec__21699_21713 = chunk__21696_21710.cljs$core$IIndexed$_nth$arity$2(null,i__21698_21712);
var k_21714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21699_21713,(0),null);
var v_21715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21699_21713,(1),null);
var m21693_21716 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__));
var G__21702_21717 = m_atom__21396__auto__;
var G__21703_21718 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m21693_21716,k_21714,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_21715) : f.call(null,v_21715)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21702_21717,G__21703_21718) : cljs.core.reset_BANG_.call(null,G__21702_21717,G__21703_21718));

var G__21719 = seq__21695_21709;
var G__21720 = chunk__21696_21710;
var G__21721 = count__21697_21711;
var G__21722 = (i__21698_21712 + (1));
seq__21695_21709 = G__21719;
chunk__21696_21710 = G__21720;
count__21697_21711 = G__21721;
i__21698_21712 = G__21722;
continue;
} else {
var temp__4657__auto___21723 = cljs.core.seq(seq__21695_21709);
if(temp__4657__auto___21723){
var seq__21695_21724__$1 = temp__4657__auto___21723;
if(cljs.core.chunked_seq_QMARK_(seq__21695_21724__$1)){
var c__7215__auto___21725 = cljs.core.chunk_first(seq__21695_21724__$1);
var G__21726 = cljs.core.chunk_rest(seq__21695_21724__$1);
var G__21727 = c__7215__auto___21725;
var G__21728 = cljs.core.count(c__7215__auto___21725);
var G__21729 = (0);
seq__21695_21709 = G__21726;
chunk__21696_21710 = G__21727;
count__21697_21711 = G__21728;
i__21698_21712 = G__21729;
continue;
} else {
var vec__21704_21730 = cljs.core.first(seq__21695_21724__$1);
var k_21731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21704_21730,(0),null);
var v_21732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21704_21730,(1),null);
var m21693_21733 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__));
var G__21707_21734 = m_atom__21396__auto__;
var G__21708_21735 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m21693_21733,k_21731,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_21732) : f.call(null,v_21732)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21707_21734,G__21708_21735) : cljs.core.reset_BANG_.call(null,G__21707_21734,G__21708_21735));

var G__21736 = cljs.core.next(seq__21695_21724__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21695_21709 = G__21736;
chunk__21696_21710 = G__21737;
count__21697_21711 = G__21738;
i__21698_21712 = G__21739;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__)));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__21396__auto__ = (function (){var G__21757 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21757) : cljs.core.atom.call(null,G__21757));
})();
var seq__21758_21772 = cljs.core.seq(m);
var chunk__21759_21773 = null;
var count__21760_21774 = (0);
var i__21761_21775 = (0);
while(true){
if((i__21761_21775 < count__21760_21774)){
var vec__21762_21776 = chunk__21759_21773.cljs$core$IIndexed$_nth$arity$2(null,i__21761_21775);
var k_21777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21762_21776,(0),null);
var v_21778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21762_21776,(1),null);
var m21756_21779 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__));
var G__21765_21780 = m_atom__21396__auto__;
var G__21766_21781 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m21756_21779,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_21777) : f.call(null,k_21777)),v_21778);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21765_21780,G__21766_21781) : cljs.core.reset_BANG_.call(null,G__21765_21780,G__21766_21781));

var G__21782 = seq__21758_21772;
var G__21783 = chunk__21759_21773;
var G__21784 = count__21760_21774;
var G__21785 = (i__21761_21775 + (1));
seq__21758_21772 = G__21782;
chunk__21759_21773 = G__21783;
count__21760_21774 = G__21784;
i__21761_21775 = G__21785;
continue;
} else {
var temp__4657__auto___21786 = cljs.core.seq(seq__21758_21772);
if(temp__4657__auto___21786){
var seq__21758_21787__$1 = temp__4657__auto___21786;
if(cljs.core.chunked_seq_QMARK_(seq__21758_21787__$1)){
var c__7215__auto___21788 = cljs.core.chunk_first(seq__21758_21787__$1);
var G__21789 = cljs.core.chunk_rest(seq__21758_21787__$1);
var G__21790 = c__7215__auto___21788;
var G__21791 = cljs.core.count(c__7215__auto___21788);
var G__21792 = (0);
seq__21758_21772 = G__21789;
chunk__21759_21773 = G__21790;
count__21760_21774 = G__21791;
i__21761_21775 = G__21792;
continue;
} else {
var vec__21767_21793 = cljs.core.first(seq__21758_21787__$1);
var k_21794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21767_21793,(0),null);
var v_21795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21767_21793,(1),null);
var m21756_21796 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__));
var G__21770_21797 = m_atom__21396__auto__;
var G__21771_21798 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m21756_21796,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_21794) : f.call(null,k_21794)),v_21795);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21770_21797,G__21771_21798) : cljs.core.reset_BANG_.call(null,G__21770_21797,G__21771_21798));

var G__21799 = cljs.core.next(seq__21758_21787__$1);
var G__21800 = null;
var G__21801 = (0);
var G__21802 = (0);
seq__21758_21772 = G__21799;
chunk__21759_21773 = G__21800;
count__21760_21774 = G__21801;
i__21761_21775 = G__21802;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__)));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__21396__auto__ = (function (){var G__21814 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21814) : cljs.core.atom.call(null,G__21814));
})();
var seq__21815_21823 = cljs.core.seq(ks);
var chunk__21816_21824 = null;
var count__21817_21825 = (0);
var i__21818_21826 = (0);
while(true){
if((i__21818_21826 < count__21817_21825)){
var k_21827 = chunk__21816_21824.cljs$core$IIndexed$_nth$arity$2(null,i__21818_21826);
var m21813_21828 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__));
var G__21819_21829 = m_atom__21396__auto__;
var G__21820_21830 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m21813_21828,k_21827,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_21827) : f.call(null,k_21827)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21819_21829,G__21820_21830) : cljs.core.reset_BANG_.call(null,G__21819_21829,G__21820_21830));

var G__21831 = seq__21815_21823;
var G__21832 = chunk__21816_21824;
var G__21833 = count__21817_21825;
var G__21834 = (i__21818_21826 + (1));
seq__21815_21823 = G__21831;
chunk__21816_21824 = G__21832;
count__21817_21825 = G__21833;
i__21818_21826 = G__21834;
continue;
} else {
var temp__4657__auto___21835 = cljs.core.seq(seq__21815_21823);
if(temp__4657__auto___21835){
var seq__21815_21836__$1 = temp__4657__auto___21835;
if(cljs.core.chunked_seq_QMARK_(seq__21815_21836__$1)){
var c__7215__auto___21837 = cljs.core.chunk_first(seq__21815_21836__$1);
var G__21838 = cljs.core.chunk_rest(seq__21815_21836__$1);
var G__21839 = c__7215__auto___21837;
var G__21840 = cljs.core.count(c__7215__auto___21837);
var G__21841 = (0);
seq__21815_21823 = G__21838;
chunk__21816_21824 = G__21839;
count__21817_21825 = G__21840;
i__21818_21826 = G__21841;
continue;
} else {
var k_21842 = cljs.core.first(seq__21815_21836__$1);
var m21813_21843 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__));
var G__21821_21844 = m_atom__21396__auto__;
var G__21822_21845 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m21813_21843,k_21842,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_21842) : f.call(null,k_21842)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21821_21844,G__21822_21845) : cljs.core.reset_BANG_.call(null,G__21821_21844,G__21822_21845));

var G__21846 = cljs.core.next(seq__21815_21836__$1);
var G__21847 = null;
var G__21848 = (0);
var G__21849 = (0);
seq__21815_21823 = G__21846;
chunk__21816_21824 = G__21847;
count__21817_21825 = G__21848;
i__21818_21826 = G__21849;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__)));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__21396__auto__ = (function (){var G__21861 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21861) : cljs.core.atom.call(null,G__21861));
})();
var seq__21862_21870 = cljs.core.seq(vs);
var chunk__21863_21871 = null;
var count__21864_21872 = (0);
var i__21865_21873 = (0);
while(true){
if((i__21865_21873 < count__21864_21872)){
var v_21874 = chunk__21863_21871.cljs$core$IIndexed$_nth$arity$2(null,i__21865_21873);
var m21860_21875 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__));
var G__21866_21876 = m_atom__21396__auto__;
var G__21867_21877 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m21860_21875,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_21874) : f.call(null,v_21874)),v_21874);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21866_21876,G__21867_21877) : cljs.core.reset_BANG_.call(null,G__21866_21876,G__21867_21877));

var G__21878 = seq__21862_21870;
var G__21879 = chunk__21863_21871;
var G__21880 = count__21864_21872;
var G__21881 = (i__21865_21873 + (1));
seq__21862_21870 = G__21878;
chunk__21863_21871 = G__21879;
count__21864_21872 = G__21880;
i__21865_21873 = G__21881;
continue;
} else {
var temp__4657__auto___21882 = cljs.core.seq(seq__21862_21870);
if(temp__4657__auto___21882){
var seq__21862_21883__$1 = temp__4657__auto___21882;
if(cljs.core.chunked_seq_QMARK_(seq__21862_21883__$1)){
var c__7215__auto___21884 = cljs.core.chunk_first(seq__21862_21883__$1);
var G__21885 = cljs.core.chunk_rest(seq__21862_21883__$1);
var G__21886 = c__7215__auto___21884;
var G__21887 = cljs.core.count(c__7215__auto___21884);
var G__21888 = (0);
seq__21862_21870 = G__21885;
chunk__21863_21871 = G__21886;
count__21864_21872 = G__21887;
i__21865_21873 = G__21888;
continue;
} else {
var v_21889 = cljs.core.first(seq__21862_21883__$1);
var m21860_21890 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__));
var G__21868_21891 = m_atom__21396__auto__;
var G__21869_21892 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m21860_21890,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_21889) : f.call(null,v_21889)),v_21889);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21868_21891,G__21869_21892) : cljs.core.reset_BANG_.call(null,G__21868_21891,G__21869_21892));

var G__21893 = cljs.core.next(seq__21862_21883__$1);
var G__21894 = null;
var G__21895 = (0);
var G__21896 = (0);
seq__21862_21870 = G__21893;
chunk__21863_21871 = G__21894;
count__21864_21872 = G__21895;
i__21865_21873 = G__21896;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__)));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__21897){
var vec__21905 = p__21897;
var seq__21906 = cljs.core.seq(vec__21905);
var first__21907 = cljs.core.first(seq__21906);
var seq__21906__$1 = cljs.core.next(seq__21906);
var k = first__21907;
var ks = seq__21906__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__6392__auto__ = ks;
if(and__6392__auto__){
return plumbing$core$dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__6392__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_(x)){
var m_atom__21396__auto__ = (function (){var G__21925 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21925) : cljs.core.atom.call(null,G__21925));
})();
var seq__21926_21940 = cljs.core.seq(x);
var chunk__21927_21941 = null;
var count__21928_21942 = (0);
var i__21929_21943 = (0);
while(true){
if((i__21929_21943 < count__21928_21942)){
var vec__21930_21944 = chunk__21927_21941.cljs$core$IIndexed$_nth$arity$2(null,i__21929_21943);
var k_21945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21930_21944,(0),null);
var v_21946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21930_21944,(1),null);
var m21924_21947 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__));
var G__21933_21948 = m_atom__21396__auto__;
var G__21934_21949 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m21924_21947,((typeof k_21945 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_21945):k_21945),plumbing$core$keywordize_map(v_21946));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21933_21948,G__21934_21949) : cljs.core.reset_BANG_.call(null,G__21933_21948,G__21934_21949));

var G__21950 = seq__21926_21940;
var G__21951 = chunk__21927_21941;
var G__21952 = count__21928_21942;
var G__21953 = (i__21929_21943 + (1));
seq__21926_21940 = G__21950;
chunk__21927_21941 = G__21951;
count__21928_21942 = G__21952;
i__21929_21943 = G__21953;
continue;
} else {
var temp__4657__auto___21954 = cljs.core.seq(seq__21926_21940);
if(temp__4657__auto___21954){
var seq__21926_21955__$1 = temp__4657__auto___21954;
if(cljs.core.chunked_seq_QMARK_(seq__21926_21955__$1)){
var c__7215__auto___21956 = cljs.core.chunk_first(seq__21926_21955__$1);
var G__21957 = cljs.core.chunk_rest(seq__21926_21955__$1);
var G__21958 = c__7215__auto___21956;
var G__21959 = cljs.core.count(c__7215__auto___21956);
var G__21960 = (0);
seq__21926_21940 = G__21957;
chunk__21927_21941 = G__21958;
count__21928_21942 = G__21959;
i__21929_21943 = G__21960;
continue;
} else {
var vec__21935_21961 = cljs.core.first(seq__21926_21955__$1);
var k_21962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935_21961,(0),null);
var v_21963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935_21961,(1),null);
var m21924_21964 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__));
var G__21938_21965 = m_atom__21396__auto__;
var G__21939_21966 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m21924_21964,((typeof k_21962 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_21962):k_21962),plumbing$core$keywordize_map(v_21963));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21938_21965,G__21939_21966) : cljs.core.reset_BANG_.call(null,G__21938_21965,G__21939_21966));

var G__21967 = cljs.core.next(seq__21926_21955__$1);
var G__21968 = null;
var G__21969 = (0);
var G__21970 = (0);
seq__21926_21940 = G__21967;
chunk__21927_21941 = G__21968;
count__21928_21942 = G__21969;
i__21929_21943 = G__21970;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__21396__auto__) : cljs.core.deref.call(null,m_atom__21396__auto__)));
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4655__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__21472__auto__ = temp__4655__auto__;
return cljs.core.val(pair__21472__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__21971 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__21972 = cljs.core.next(ks);
m = G__21971;
ks = G__21972;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___21993 = arguments.length;
var i__7480__auto___21994 = (0);
while(true){
if((i__7480__auto___21994 < len__7479__auto___21993)){
args__7486__auto__.push((arguments[i__7480__auto___21994]));

var G__21995 = (i__7480__auto___21994 + (1));
i__7480__auto___21994 = G__21995;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__6404__auto__ = m;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__7184__auto__ = (function plumbing$core$iter__21975(s__21976){
return (new cljs.core.LazySeq(null,(function (){
var s__21976__$1 = s__21976;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21976__$1);
if(temp__4657__auto__){
var s__21976__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21976__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21976__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21978 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21977 = (0);
while(true){
if((i__21977 < size__7183__auto__)){
var vec__21987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21977);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21987,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21987,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__21978,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21996 = (i__21977 + (1));
i__21977 = G__21996;
continue;
} else {
var G__21997 = (i__21977 + (1));
i__21977 = G__21997;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21978),plumbing$core$iter__21975(cljs.core.chunk_rest(s__21976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21978),null);
}
} else {
var vec__21990 = cljs.core.first(s__21976__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21990,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__21975(cljs.core.rest(s__21976__$2)));
} else {
var G__21998 = cljs.core.rest(s__21976__$2);
s__21976__$1 = G__21998;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq21973){
var G__21974 = cljs.core.first(seq21973);
var seq21973__$1 = cljs.core.next(seq21973);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__21974,seq21973__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___22003 = arguments.length;
var i__7480__auto___22004 = (0);
while(true){
if((i__7480__auto___22004 < len__7479__auto___22003)){
args__7486__auto__.push((arguments[i__7480__auto___22004]));

var G__22005 = (i__7480__auto___22004 + (1));
i__7480__auto___22004 = G__22005;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq21999){
var G__22000 = cljs.core.first(seq21999);
var seq21999__$1 = cljs.core.next(seq21999);
var G__22001 = cljs.core.first(seq21999__$1);
var seq21999__$2 = cljs.core.next(seq21999__$1);
var G__22002 = cljs.core.first(seq21999__$2);
var seq21999__$3 = cljs.core.next(seq21999__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__22000,G__22001,G__22002,seq21999__$3);
});

/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(x) : map_fn.call(null,x))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.next(s);
if(temp__4657__auto__){
var n = temp__4657__auto__;
return plumbing$core$aconcat(n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk(cljs.core.rest(s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args22007 = [];
var len__7479__auto___22010 = arguments.length;
var i__7480__auto___22011 = (0);
while(true){
if((i__7480__auto___22011 < len__7479__auto___22010)){
args22007.push((arguments[i__7480__auto___22011]));

var G__22012 = (i__7480__auto___22011 + (1));
i__7480__auto___22011 = G__22012;
continue;
} else {
}
break;
}

var G__22009 = args22007.length;
switch (G__22009) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22007.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;

/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4657__auto__ = cljs.core.seq(xs);
if(temp__4657__auto__){
var xs__$1 = temp__4657__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = (function (){var G__22021 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22021) : cljs.core.atom.call(null,G__22021));
})();
var iter__7184__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__22022(s__22023){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__22023__$1 = s__22023;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22023__$1);
if(temp__4657__auto__){
var s__22023__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22023__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__22023__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__22025 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__22024 = (0);
while(true){
if((i__22024 < size__7183__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__22024);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
cljs.core.chunk_append(b__22025,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__22028 = (i__22024 + (1));
i__22024 = G__22028;
continue;
} else {
var G__22029 = (i__22024 + (1));
i__22024 = G__22029;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22025),plumbing$core$distinct_by_$_iter__22022(cljs.core.chunk_rest(s__22023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22025),null);
}
} else {
var x = cljs.core.first(s__22023__$2);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__22022(cljs.core.rest(s__22023__$2)));
} else {
var G__22030 = cljs.core.rest(s__22023__$2);
s__22023__$1 = G__22030;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__7184__auto__(xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__7486__auto__ = [];
var len__7479__auto___22033 = arguments.length;
var i__7480__auto___22034 = (0);
while(true){
if((i__7480__auto___22034 < len__7479__auto___22033)){
args__7486__auto__.push((arguments[i__7480__auto___22034]));

var G__22035 = (i__7480__auto___22034 + (1));
i__7480__auto___22034 = G__22035;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq22031){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22031));
});

/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args22036 = [];
var len__7479__auto___22042 = arguments.length;
var i__7480__auto___22043 = (0);
while(true){
if((i__7480__auto___22043 < len__7479__auto___22042)){
args22036.push((arguments[i__7480__auto___22043]));

var G__22044 = (i__7480__auto___22043 + (1));
i__7480__auto___22043 = G__22044;
continue;
} else {
}
break;
}

var G__22041 = args22036.length;
switch (G__22041) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args22036.slice((2)),(0),null));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__22046 = plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__22047 = cljs.core.first(xs);
var G__22048 = cljs.core.next(xs);
coll = G__22046;
x = G__22047;
xs = G__22048;
continue;
} else {
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq22037){
var G__22038 = cljs.core.first(seq22037);
var seq22037__$1 = cljs.core.next(seq22037);
var G__22039 = cljs.core.first(seq22037__$1);
var seq22037__$2 = cljs.core.next(seq22037__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__22038,G__22039,seq22037__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args22050 = [];
var len__7479__auto___22056 = arguments.length;
var i__7480__auto___22057 = (0);
while(true){
if((i__7480__auto___22057 < len__7479__auto___22056)){
args22050.push((arguments[i__7480__auto___22057]));

var G__22058 = (i__7480__auto___22057 + (1));
i__7480__auto___22057 = G__22058;
continue;
} else {
}
break;
}

var G__22055 = args22050.length;
switch (G__22055) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args22050.slice((2)),(0),null));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var new_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__22049_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__22049_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq22051){
var G__22052 = cljs.core.first(seq22051);
var seq22051__$1 = cljs.core.next(seq22051);
var G__22053 = cljs.core.first(seq22051__$1);
var seq22051__$2 = cljs.core.next(seq22051__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22052,G__22053,seq22051__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args22060 = [];
var len__7479__auto___22066 = arguments.length;
var i__7480__auto___22067 = (0);
while(true){
if((i__7480__auto___22067 < len__7479__auto___22066)){
args22060.push((arguments[i__7480__auto___22067]));

var G__22068 = (i__7480__auto___22067 + (1));
i__7480__auto___22067 = G__22068;
continue;
} else {
}
break;
}

var G__22065 = args22060.length;
switch (G__22065) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args22060.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq22061){
var G__22062 = cljs.core.first(seq22061);
var seq22061__$1 = cljs.core.next(seq22061);
var G__22063 = cljs.core.first(seq22061__$1);
var seq22061__$2 = cljs.core.next(seq22061__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__22062,G__22063,seq22061__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

