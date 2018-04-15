// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('clojure.math.combinatorics');
goog.require('cljs.core');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 * to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__7184__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__16670(s__16671){
return (new cljs.core.LazySeq(null,(function (){
var s__16671__$1 = s__16671;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16671__$1);
if(temp__4657__auto__){
var s__16671__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16671__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__16671__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__16673 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__16672 = (0);
while(true){
if((i__16672 < size__7183__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__16672);
cljs.core.chunk_append(b__16673,((j + cnt) + (- (n + (1)))));

var G__16678 = (i__16672 + (1));
i__16672 = G__16678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16673),clojure$math$combinatorics$index_combinations_$_iter__16670(cljs.core.chunk_rest(s__16671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16673),null);
}
} else {
var j = cljs.core.first(s__16671__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__16670(cljs.core.rest(s__16671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));
var iter_comb = ((function (c){
return (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)) - (1)));
if(((c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(j) : c__$2.call(null,j)) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__16679 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__16680 = (j__$1 - (1));
c__$3 = G__16679;
j__$1 = G__16680;
continue;
}
break;
}
}
}
});})(c))
;
var step = ((function (c,iter_comb){
return (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons(cljs.core.rseq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,((function (c,iter_comb){
return (function (){
var next_step = iter_comb(c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step((next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((0)) : next_step.call(null,(0))),(next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((1)) : next_step.call(null,(1))));
} else {
return null;
}
});})(c,iter_comb))
,null,null)));
});})(c,iter_comb))
;
return step(c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count(m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(index__$1) : m.call(null,index__$1));
if((quantity_to_distribute <= mi)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__16681 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__16682 = (index__$1 + (1));
var G__16683 = (already_distributed__$1 + mi);
distribution__$1 = G__16681;
index__$1 = G__16682;
already_distributed__$1 = G__16683;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__16690 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16690,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16690,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16690,(2),null);
if((index < (cljs.core.count(m) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop(distribution);
while(true){
var vec__16693 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16693,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16693,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16693,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__16696 = distribution__$2;
distribution__$1 = G__16696;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons(distribution,(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = clojure.math.combinatorics.next_distribution(m,t,distribution);
if(cljs.core.truth_(temp__4657__auto__)){
var next_step = temp__4657__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step(next_step);
} else {
return null;
}
}),null,null)));
});
return step(clojure.math.combinatorics.distribute(m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var domain = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v));
var m = cljs.core.vec((function (){var iter__7184__auto__ = ((function (f,v,domain){
return (function clojure$math$combinatorics$multi_comb_$_iter__16785(s__16786){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__16786__$1 = s__16786;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16786__$1);
if(temp__4657__auto__){
var s__16786__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16786__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__16786__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__16788 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__16787 = (0);
while(true){
if((i__16787 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__16787);
cljs.core.chunk_append(b__16788,(function (){var G__16793 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16793) : f.call(null,G__16793));
})());

var G__16873 = (i__16787 + (1));
i__16787 = G__16873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16788),clojure$math$combinatorics$multi_comb_$_iter__16785(cljs.core.chunk_rest(s__16786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16788),null);
}
} else {
var i = cljs.core.first(s__16786__$2);
return cljs.core.cons((function (){var G__16794 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16794) : f.call(null,G__16794));
})(),clojure$math$combinatorics$multi_comb_$_iter__16785(cljs.core.rest(s__16786__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain))
,null,null));
});})(f,v,domain))
;
return iter__7184__auto__(domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions(m,t);
var iter__7184__auto__ = ((function (f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__16795(s__16796){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
return (function (){
var s__16796__$1 = s__16796;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16796__$1);
if(temp__4657__auto__){
var s__16796__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16796__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__16796__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__16798 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__16797 = (0);
while(true){
if((i__16797 < size__7183__auto__)){
var q = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__16797);
cljs.core.chunk_append(b__16798,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7184__auto__ = ((function (i__16797,q,c__7182__auto__,size__7183__auto__,b__16798,s__16796__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__16795_$_iter__16837(s__16838){
return (new cljs.core.LazySeq(null,((function (i__16797,q,c__7182__auto__,size__7183__auto__,b__16798,s__16796__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function (){
var s__16838__$1 = s__16838;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__16838__$1);
if(temp__4657__auto____$1){
var s__16838__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16838__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__16838__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__16840 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__16839 = (0);
while(true){
if((i__16839 < size__7183__auto____$1)){
var vec__16849 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__16839);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16849,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16849,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16849,(2),null);
cljs.core.chunk_append(b__16840,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__16874 = (i__16839 + (1));
i__16839 = G__16874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16840),clojure$math$combinatorics$multi_comb_$_iter__16795_$_iter__16837(cljs.core.chunk_rest(s__16838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16840),null);
}
} else {
var vec__16852 = cljs.core.first(s__16838__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16852,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16852,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16852,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__16795_$_iter__16837(cljs.core.rest(s__16838__$2)));
}
} else {
return null;
}
break;
}
});})(i__16797,q,c__7182__auto__,size__7183__auto__,b__16798,s__16796__$2,temp__4657__auto__,f,v,domain,m,qs))
,null,null));
});})(i__16797,q,c__7182__auto__,size__7183__auto__,b__16798,s__16796__$2,temp__4657__auto__,f,v,domain,m,qs))
;
return iter__7184__auto__(q);
})()));

var G__16875 = (i__16797 + (1));
i__16797 = G__16875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16798),clojure$math$combinatorics$multi_comb_$_iter__16795(cljs.core.chunk_rest(s__16796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16798),null);
}
} else {
var q = cljs.core.first(s__16796__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7184__auto__ = ((function (q,s__16796__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__16795_$_iter__16855(s__16856){
return (new cljs.core.LazySeq(null,((function (q,s__16796__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function (){
var s__16856__$1 = s__16856;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__16856__$1);
if(temp__4657__auto____$1){
var s__16856__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16856__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__16856__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__16858 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__16857 = (0);
while(true){
if((i__16857 < size__7183__auto__)){
var vec__16867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__16857);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16867,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16867,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16867,(2),null);
cljs.core.chunk_append(b__16858,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__16876 = (i__16857 + (1));
i__16857 = G__16876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16858),clojure$math$combinatorics$multi_comb_$_iter__16795_$_iter__16855(cljs.core.chunk_rest(s__16856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16858),null);
}
} else {
var vec__16870 = cljs.core.first(s__16856__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16870,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16870,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16870,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__16795_$_iter__16855(cljs.core.rest(s__16856__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__16796__$2,temp__4657__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__16796__$2,temp__4657__auto__,f,v,domain,m,qs))
;
return iter__7184__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__16795(cljs.core.rest(s__16796__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain,m,qs))
,null,null));
});})(f,v,domain,m,qs))
;
return iter__7184__auto__(qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec(cljs.core.reverse(items));
if((t === (0))){
var x__7238__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
} else {
var cnt = cljs.core.count(items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
var iter__7184__auto__ = ((function (cnt,v_items){
return (function clojure$math$combinatorics$combinations_$_iter__16884(s__16885){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__16885__$1 = s__16885;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16885__$1);
if(temp__4657__auto__){
var s__16885__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16885__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__16885__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__16887 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__16886 = (0);
while(true){
if((i__16886 < size__7183__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__16886);
cljs.core.chunk_append(b__16887,(function (){var x__7238__auto__ = item;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})());

var G__16890 = (i__16886 + (1));
i__16886 = G__16890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16887),clojure$math$combinatorics$combinations_$_iter__16884(cljs.core.chunk_rest(s__16885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16887),null);
}
} else {
var item = cljs.core.first(s__16885__$2);
return cljs.core.cons((function (){var x__7238__auto__ = item;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),clojure$math$combinatorics$combinations_$_iter__16884(cljs.core.rest(s__16885__$2)));
}
} else {
return null;
}
break;
}
});})(cnt,v_items))
,null,null));
});})(cnt,v_items))
;
return iter__7184__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cnt)){
var x__7238__auto__ = cljs.core.seq(items);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cnt,v_items){
return (function (p1__16877_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__16877_SHARP_);
});})(cnt,v_items))
,clojure.math.combinatorics.index_combinations(t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb(items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),clojure$math$combinatorics$unchunk(cljs.core.rest(s)));
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (n){
return clojure.math.combinatorics.combinations(items,n);
}),cljs.core.array_seq([clojure.math.combinatorics.unchunk(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(items) + (1))))], 0));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16894 = arguments.length;
var i__7480__auto___16895 = (0);
while(true){
if((i__7480__auto___16895 < len__7479__auto___16894)){
args__7486__auto__.push((arguments[i__7480__auto___16895]));

var G__16896 = (i__7480__auto___16895 + (1));
i__7480__auto___16895 = G__16896;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function clojure$math$combinatorics$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__4655__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__4655__auto__){
var rst = temp__4655__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__16897 = (i - (1));
var G__16898 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__16897;
v_seqs__$2 = G__16898;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return clojure$math$combinatorics$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0);

clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq16892){
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16892));
});

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count(v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__16900 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__16900) : v.call(null,G__16900));
})())){
return i;
} else {
var G__16901 = (i - (1));
i = G__16901;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j));
var l = (function (){var i = (len - (1));
while(true){
if((vj < (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)))){
return i;
} else {
var G__16902 = (i - (1));
i = G__16902;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(l) : v.call(null,l)),cljs.core.array_seq([l,vj], 0));
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__16903 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.array_seq([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__16904 = (k + (1));
var G__16905 = (l__$1 - (1));
v__$1 = G__16903;
k = G__16904;
l__$1 = G__16905;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons(v,(new cljs.core.LazySeq(null,(function (){
return clojure$math$combinatorics$vec_lex_permutations(clojure.math.combinatorics.iter_perm(v));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(c));
if((cljs.core.count(vec_sorted) === (0))){
var x__7238__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
} else {
return clojure.math.combinatorics.vec_lex_permutations(vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__6392__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,s);
if(and__6392__auto__){
var or__6404__auto__ = cljs.core.empty_QMARK_(s);
if(or__6404__auto__){
return or__6404__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else {
return and__6392__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var indices = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7184__auto__ = ((function (f,v){
return (function clojure$math$combinatorics$multi_perm_$_iter__16917(s__16918){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__16918__$1 = s__16918;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16918__$1);
if(temp__4657__auto__){
var s__16918__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16918__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__16918__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__16920 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__16919 = (0);
while(true){
if((i__16919 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__16919);
cljs.core.chunk_append(b__16920,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__16925 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16925) : f.call(null,G__16925));
})(),i));

var G__16927 = (i__16919 + (1));
i__16919 = G__16927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16920),clojure$math$combinatorics$multi_perm_$_iter__16917(cljs.core.chunk_rest(s__16918__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16920),null);
}
} else {
var i = cljs.core.first(s__16918__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__16926 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16926) : f.call(null,G__16926));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__16917(cljs.core.rest(s__16918__$2)));
}
} else {
return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.lex_permutations(indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 * (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
return clojure.math.combinatorics.lex_permutations(items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (v){
return (function (p1__16928_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__16928_SHARP_);
});})(v))
,clojure.math.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else {
return clojure.math.combinatorics.multi_perm(items);

}
}
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__16929 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__16930 = (n__$1 - (1));
acc = G__16929;
n__$1 = G__16930;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot(n__$1,divisor);
var r = cljs.core.rem(n__$1,divisor);
var G__16931 = q;
var G__16932 = cljs.core.cons(r,digits);
var G__16933 = (divisor + (1));
n__$1 = G__16931;
digits = G__16932;
divisor = G__16933;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.rest(l__$1));
} else {
var G__16934 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__16935 = cljs.core.rest(l__$1);
var G__16936 = (n__$1 - (1));
acc = G__16934;
l__$1 = G__16935;
n__$1 = G__16936;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial(cljs.core.count(l)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([n,"is too large. Input has only",clojure.math.combinatorics.factorial(cljs.core.count(l)),"permutations."], 0))),cljs.core.str("\n"),cljs.core.str("(< n (factorial (count l)))")].join('')));
}

var length = cljs.core.count(l);
var fact_nums = clojure.math.combinatorics.factorial_numbers(n);
var indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((length - cljs.core.count(fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l__$1,i);
var G__16937 = cljs.core.rest(indices);
var G__16938 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__16939 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__16937;
l__$1 = G__16938;
perm = G__16939;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals(freqs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,clojure.math.combinatorics.factorial(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(l))){
return clojure.math.combinatorics.factorial(cljs.core.count(l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.frequencies(l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__7184__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__16958(s__16959){
return (new cljs.core.LazySeq(null,(function (){
var s__16959__$1 = s__16959;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16959__$1);
if(temp__4657__auto__){
var s__16959__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16959__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__16959__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__16961 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__16960 = (0);
while(true){
if((i__16960 < size__7183__auto__)){
var vec__16970 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__16960);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970,(1),null);
cljs.core.chunk_append(b__16961,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__16976 = (i__16960 + (1));
i__16960 = G__16976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16961),clojure$math$combinatorics$initial_perm_numbers_$_iter__16958(cljs.core.chunk_rest(s__16959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16961),null);
}
} else {
var vec__16973 = cljs.core.first(s__16959__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__16958(cljs.core.rest(s__16959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if(((cljs.core.first(perm_numbers__$1) <= n)) && ((n < cljs.core.second(perm_numbers__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first(perm_numbers__$1))], null);
} else {
var G__16977 = cljs.core.rest(perm_numbers__$1);
var G__16978 = (index + (1));
perm_numbers__$1 = G__16977;
index = G__16978;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(digits,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(freqs__$1)),(0)));
} else {
var vec__16982 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16982,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16982,(1),null);
var G__16985 = remainder;
var G__16986 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__16987 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__16985;
digits = G__16986;
freqs__$1 = G__16987;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations(l))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([n,"is too large. Input has only",clojure.math.combinatorics.count_permutations(l),"permutations."], 0))),cljs.core.str("\n"),cljs.core.str("(< n (count-permutations l))")].join('')));
}

var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates(n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs),i);
var G__16988 = clojure.math.combinatorics.dec_key(freqs,item);
var G__16989 = cljs.core.rest(indices);
var G__16990 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__16988;
indices = G__16989;
perm = G__16990;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_permutation_distinct(items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates(items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7184__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$nth_permutation_$_iter__17001(s__17002){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__17002__$1 = s__17002;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17002__$1);
if(temp__4657__auto__){
var s__17002__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17002__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17002__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17004 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17003 = (0);
while(true){
if((i__17003 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17003);
cljs.core.chunk_append(b__17004,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__17009 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17009) : f.call(null,G__17009));
})(),i));

var G__17011 = (i__17003 + (1));
i__17003 = G__17011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17004),clojure$math$combinatorics$nth_permutation_$_iter__17001(cljs.core.chunk_rest(s__17002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17004),null);
}
} else {
var i = cljs.core.first(s__17002__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__17010 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17010) : f.call(null,G__17010));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__17001(cljs.core.rest(s__17002__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations(items);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,clojure.math.combinatorics.count_permutations(items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_distinct(items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7184__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$drop_permutations_$_iter__17022(s__17023){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__17023__$1 = s__17023;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17023__$1);
if(temp__4657__auto__){
var s__17023__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17023__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17023__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17025 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17024 = (0);
while(true){
if((i__17024 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17024);
cljs.core.chunk_append(b__17025,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__17030 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17030) : f.call(null,G__17030));
})(),i));

var G__17032 = (i__17024 + (1));
i__17024 = G__17032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17025),clojure$math$combinatorics$drop_permutations_$_iter__17022(cljs.core.chunk_rest(s__17023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17025),null);
}
} else {
var i = cljs.core.first(s__17023__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__17031 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17031) : f.call(null,G__17031));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__17022(cljs.core.rest(s__17023__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return n;
} else {
if((k > cljs.core.quot(n,(2)))){
var G__17033 = n;
var G__17034 = (n - k);
n = G__17033;
k = G__17034;
continue;
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(((n - k) + (1)),(n + (1)))) / cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals(freqs);
var sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
return cljs.core.count(freqs);
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k(cljs.core.count(freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,sum)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__17041 = clojure$math$combinatorics$count_combinations_from_frequencies(new_freqs,(t - (1)));
var G__17042 = clojure$math$combinatorics$count_combinations_from_frequencies(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__17041,G__17042) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__17041,G__17042));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.n_take_k(cljs.core.count(items),t);
} else {
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(cljs.core.frequencies(items),t) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies(items),t));
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies17044 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies17044;
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__17045 = n__$1;
var G__17046 = y;
var G__17047 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__17045;
y = G__17046;
z = G__17047;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__17048 = n__$1;
var G__17049 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__17050 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__17048;
y = G__17049;
z = G__17050;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_(items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.expt_int((2),cljs.core.count(items));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__7184__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__17057(s__17058){
return (new cljs.core.LazySeq(null,(function (){
var s__17058__$1 = s__17058;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17058__$1);
if(temp__4657__auto__){
var s__17058__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17058__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17058__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17060 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17059 = (0);
while(true){
if((i__17059 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17059);
cljs.core.chunk_append(b__17060,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__17063 = (i__17059 + (1));
i__17059 = G__17063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17060),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__17057(cljs.core.chunk_rest(s__17058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17060),null);
}
} else {
var i = cljs.core.first(s__17058__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__17057(cljs.core.rest(s__17058__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies17065 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies17065;
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_(items__$1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k((cljs.core.count(items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__17066 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__17067 = cljs.core.rest(items__$1);
var G__17068 = (t__$1 - (1));
var G__17069 = n__$1;
comb = G__17066;
items__$1 = G__17067;
t__$1 = G__17068;
n__$1 = G__17069;
continue;
} else {
var G__17070 = comb;
var G__17071 = cljs.core.rest(items__$1);
var G__17072 = t__$1;
var G__17073 = (n__$1 - dc_dt);
comb = G__17070;
items__$1 = G__17071;
t__$1 = G__17072;
n__$1 = G__17073;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_(freqs__$1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7184__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__17092(s__17093){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__17093__$1 = s__17093;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17093__$1);
if(temp__4657__auto__){
var s__17093__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17093__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17093__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17095 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17094 = (0);
while(true){
if((i__17094 < size__7183__auto__)){
var vec__17104 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17094);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17104,(1),null);
cljs.core.chunk_append(b__17095,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__17110 = (i__17094 + (1));
i__17094 = G__17110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17095),clojure$math$combinatorics$nth_combination_freqs_$_iter__17092(cljs.core.chunk_rest(s__17093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17095),null);
}
} else {
var vec__17107 = cljs.core.first(s__17093__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17107,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__17092(cljs.core.rest(s__17093__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__7184__auto__(freqs__$1);
})())));
} else {
var first_key = cljs.core.first(cljs.core.keys(freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key(freqs__$1,first_key);
var dc_dt = (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(remove_one_key,(t__$1 - (1))) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1))));
if((n__$1 < dc_dt)){
var G__17111 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__17112 = remove_one_key;
var G__17113 = (t__$1 - (1));
var G__17114 = n__$1;
comb = G__17111;
freqs__$1 = G__17112;
t__$1 = G__17113;
n__$1 = G__17114;
continue;
} else {
var G__17115 = comb;
var G__17116 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__17117 = t__$1;
var G__17118 = (n__$1 - dc_dt);
comb = G__17115;
freqs__$1 = G__17116;
t__$1 = G__17117;
n__$1 = G__17118;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations(items,t))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized(items,t),"combinations."], 0))),cljs.core.str("\n"),cljs.core.str("(< n (count-combinations items t))")].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_combination_distinct(items,t,n);
} else {
var count_combinations_from_frequencies17130 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__7184__auto__ = ((function (v,f,count_combinations_from_frequencies17130){
return (function clojure$math$combinatorics$nth_combination_$_iter__17131(s__17132){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies17130){
return (function (){
var s__17132__$1 = s__17132;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17132__$1);
if(temp__4657__auto__){
var s__17132__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17132__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17132__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17134 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17133 = (0);
while(true){
if((i__17133 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17133);
cljs.core.chunk_append(b__17134,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__17139 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17139) : f.call(null,G__17139));
})(),i));

var G__17141 = (i__17133 + (1));
i__17133 = G__17141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17134),clojure$math$combinatorics$nth_combination_$_iter__17131(cljs.core.chunk_rest(s__17132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17134),null);
}
} else {
var i = cljs.core.first(s__17132__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__17140 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17140) : f.call(null,G__17140));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__17131(cljs.core.rest(s__17132__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies17130))
,null,null));
});})(v,f,count_combinations_from_frequencies17130))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
var indices_freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(indices));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_combination_freqs(indices_freqs,t,n)));
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies17130;
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets(items))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([n,"is too large. Input has only",clojure.math.combinatorics.count_subsets(items),"subsets."], 0))),cljs.core.str("\n"),cljs.core.str("(< n (count-subsets items))")].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations(items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination(items,size,n__$1);
} else {
var G__17142 = (size + (1));
var G__17143 = (n__$1 - num_combinations);
size = G__17142;
n__$1 = G__17143;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq(l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(l__$1))){
return n;
} else {
var G__17144 = cljs.core.rest(l__$1);
var G__17145 = (n + (1));
l__$1 = G__17144;
n = G__17145;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count(l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__17154 = cljs.core.rest(l__$1);
var G__17155 = (function (){var G__17150 = index;
var G__17151 = (function (){var G__17152 = clojure.math.combinatorics.factorial(n);
var G__17153 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__17152,G__17153) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__17152,G__17153));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__17150,G__17151) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__17150,G__17151));
})();
var G__17156 = (n - (1));
l__$1 = G__17154;
index = G__17155;
n = G__17156;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l__$1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__17170 = cljs.core.rest(l__$1);
var G__17171 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__7184__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__17164(s__17165){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__17165__$1 = s__17165;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17165__$1);
if(temp__4657__auto__){
var s__17165__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17165__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17165__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17167 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17166 = (0);
while(true){
if((i__17166 < size__7183__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17166);
cljs.core.chunk_append(b__17167,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__17173 = (i__17166 + (1));
i__17166 = G__17173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17167),clojure$math$combinatorics$permutation_index_duplicates_$_iter__17164(cljs.core.chunk_rest(s__17165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17167),null);
}
} else {
var k = cljs.core.first(s__17165__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__17164(cljs.core.rest(s__17165__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__7184__auto__(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (l__$1,index,freqs,iter__7184__auto__){
return (function (p1__17157_SHARP_){
return (cljs.core.compare(p1__17157_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__7184__auto__))
,cljs.core.keys(freqs)));
})());
var G__17172 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__17170;
index = G__17171;
freqs = G__17172;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.permutation_index_distinct(items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates(items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(index) : vec.call(null,index));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item)));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec((function (){var iter__7184__auto__ = (function clojure$math$combinatorics$init_$_iter__17180(s__17181){
return (new cljs.core.LazySeq(null,(function (){
var s__17181__$1 = s__17181;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17181__$1);
if(temp__4657__auto__){
var s__17181__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17181__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17181__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17183 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17182 = (0);
while(true){
if((i__17182 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17182);
cljs.core.chunk_append(b__17183,(function (){var x__6735__auto__ = (0);
var y__6736__auto__ = (i - ((n - s) - (-1)));
return ((x__6735__auto__ > y__6736__auto__) ? x__6735__auto__ : y__6736__auto__);
})());

var G__17186 = (i__17182 + (1));
i__17182 = G__17186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17183),clojure$math$combinatorics$init_$_iter__17180(cljs.core.chunk_rest(s__17181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17183),null);
}
} else {
var i = cljs.core.first(s__17181__$2);
return cljs.core.cons((function (){var x__6735__auto__ = (0);
var y__6736__auto__ = (i - ((n - s) - (-1)));
return ((x__6735__auto__ > y__6736__auto__) ? x__6735__auto__ : y__6736__auto__);
})(),clojure$math$combinatorics$init_$_iter__17180(cljs.core.rest(s__17181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var args17187 = [];
var len__7479__auto___17193 = arguments.length;
var i__7480__auto___17194 = (0);
while(true){
if((i__7480__auto___17194 < len__7479__auto___17193)){
args17187.push((arguments[i__7480__auto___17194]));

var G__17195 = (i__7480__auto___17194 + (1));
i__7480__auto___17194 = G__17195;
continue;
} else {
}
break;
}

var G__17189 = args17187.length;
switch (G__17189) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17187.length)].join('')));

}
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__6392__auto__ = (cljs.core.peek(b) > cljs.core.peek(a));
if(and__6392__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek(a) < (r - (1)));
} else {
return true;
}
} else {
return and__6392__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__6392__auto__ = ((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)));
if(and__6392__auto__){
var and__6392__auto____$1 = (cljs.core.truth_(r)?((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (r - (1))):true);
if(and__6392__auto____$1){
if(cljs.core.truth_(s)){
return (((s - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))) - clojure.math.combinatorics.reify_bool((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) + (1)) === (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))) <= (n - j));
} else {
return true;
}
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})()){
return j;
} else {
var G__17197 = (j - (1));
j = G__17197;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update(a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - ((b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)) + clojure.math.combinatorics.reify_bool(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(j) : a__$1.call(null,j)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)))))):null);
var vec__17190 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = ((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) + clojure.math.combinatorics.reify_bool(((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) === (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(j) : a__$2.call(null,j)))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = s;
if(cljs.core.truth_(and__6392__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__6392__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__17198 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__17199 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__17200 = (i + (1));
var G__17201 = (function (){var x__6735__auto__ = current_max;
var y__6736__auto__ = (new_a_i + (1));
return ((x__6735__auto__ > y__6736__auto__) ? x__6735__auto__ : y__6736__auto__);
})();
a__$2 = G__17198;
b__$1 = G__17199;
i = G__17200;
current_max = G__17201;
continue;
} else {
var G__17202 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__17203 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__17204 = (i + (1));
var G__17205 = current_max;
a__$2 = G__17202;
b__$1 = G__17203;
i = G__17204;
current_max = G__17205;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17190,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17190,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__7486__auto__ = [];
var len__7479__auto___17217 = arguments.length;
var i__7480__auto___17218 = (0);
while(true){
if((i__7480__auto___17218 < len__7479__auto___17217)){
args__7486__auto__.push((arguments[i__7480__auto___17218]));

var G__17219 = (i__7480__auto___17218 + (1));
i__7480__auto___17218 = G__17219;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__17208){
var map__17209 = p__17208;
var map__17209__$1 = ((((!((map__17209 == null)))?((((map__17209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17209):map__17209);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17209__$1,cljs.core.cst$kw$min);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17209__$1,cljs.core.cst$kw$max);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
if((((function (){var or__6404__auto__ = from;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__6404__auto__ = to;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__6392__auto__ = from;
if(cljs.core.truth_(and__6392__auto__)){
return (from <= (1));
} else {
return and__6392__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__6392__auto__ = to;
if(cljs.core.truth_(and__6392__auto__)){
return (to >= N);
} else {
return and__6392__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__6404__auto__ = from__$1;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__6404__auto__ = from__$1;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (1);
}
})() <= (function (){var or__6404__auto__ = to__$1;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return N;
}
})())) && (((function (){var or__6404__auto__ = to__$1;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7238__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7238__auto__ = cljs.core.range.cljs$core$IFn$_invoke$arity$1(N);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})())));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);
var iter__7184__auto__ = ((function (growth_strings,from__$1,to__$1,map__17209,map__17209__$1,from,to){
return (function clojure$math$combinatorics$iter__17211(s__17212){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__17209,map__17209__$1,from,to){
return (function (){
var s__17212__$1 = s__17212;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17212__$1);
if(temp__4657__auto__){
var s__17212__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17212__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17212__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17214 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17213 = (0);
while(true){
if((i__17213 < size__7183__auto__)){
var growth_string = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17213);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__17214,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__17220 = (i__17213 + (1));
i__17213 = G__17220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17214),clojure$math$combinatorics$iter__17211(cljs.core.chunk_rest(s__17212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17214),null);
}
} else {
var growth_string = cljs.core.first(s__17212__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__17211(cljs.core.rest(s__17212__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__17209,map__17209__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__17209,map__17209__$1,from,to))
;
return iter__7184__auto__(growth_strings);

}
}
}
}
}
});

clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq17206){
var G__17207 = cljs.core.first(seq17206);
var seq17206__$1 = cljs.core.next(seq17206);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__17207,seq17206__$1);
});

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__7486__auto__ = [];
var len__7479__auto___17253 = arguments.length;
var i__7480__auto___17254 = (0);
while(true){
if((i__7480__auto___17254 < len__7479__auto___17253)){
args__7486__auto__.push((arguments[i__7480__auto___17254]));

var G__17255 = (i__7480__auto___17254 + (1));
i__7480__auto___17254 = G__17255;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec(items);
var N = cljs.core.count(items__$1);
var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__7184__auto__ = ((function (items__$1,N,lex){
return (function clojure$math$combinatorics$iter__17223(s__17224){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__17224__$1 = s__17224;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17224__$1);
if(temp__4657__auto__){
var s__17224__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17224__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17224__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17226 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17225 = (0);
while(true){
if((i__17225 < size__7183__auto__)){
var parts = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17225);
cljs.core.chunk_append(b__17226,(function (){var iter__7184__auto__ = ((function (i__17225,parts,c__7182__auto__,size__7183__auto__,b__17226,s__17224__$2,temp__4657__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__17223_$_iter__17241(s__17242){
return (new cljs.core.LazySeq(null,((function (i__17225,parts,c__7182__auto__,size__7183__auto__,b__17226,s__17224__$2,temp__4657__auto__,items__$1,N,lex){
return (function (){
var s__17242__$1 = s__17242;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__17242__$1);
if(temp__4657__auto____$1){
var s__17242__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17242__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__17242__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__17244 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__17243 = (0);
while(true){
if((i__17243 < size__7183__auto____$1)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__17243);
cljs.core.chunk_append(b__17244,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__17243,i__17225,part,c__7182__auto____$1,size__7183__auto____$1,b__17244,s__17242__$2,temp__4657__auto____$1,parts,c__7182__auto__,size__7183__auto__,b__17226,s__17224__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__17243,i__17225,part,c__7182__auto____$1,size__7183__auto____$1,b__17244,s__17242__$2,temp__4657__auto____$1,parts,c__7182__auto__,size__7183__auto__,b__17226,s__17224__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__17256 = (i__17243 + (1));
i__17243 = G__17256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17244),clojure$math$combinatorics$iter__17223_$_iter__17241(cljs.core.chunk_rest(s__17242__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17244),null);
}
} else {
var part = cljs.core.first(s__17242__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__17225,part,s__17242__$2,temp__4657__auto____$1,parts,c__7182__auto__,size__7183__auto__,b__17226,s__17224__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__17225,part,s__17242__$2,temp__4657__auto____$1,parts,c__7182__auto__,size__7183__auto__,b__17226,s__17224__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__17223_$_iter__17241(cljs.core.rest(s__17242__$2)));
}
} else {
return null;
}
break;
}
});})(i__17225,parts,c__7182__auto__,size__7183__auto__,b__17226,s__17224__$2,temp__4657__auto__,items__$1,N,lex))
,null,null));
});})(i__17225,parts,c__7182__auto__,size__7183__auto__,b__17226,s__17224__$2,temp__4657__auto__,items__$1,N,lex))
;
return iter__7184__auto__(parts);
})());

var G__17257 = (i__17225 + (1));
i__17225 = G__17257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17226),clojure$math$combinatorics$iter__17223(cljs.core.chunk_rest(s__17224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17226),null);
}
} else {
var parts = cljs.core.first(s__17224__$2);
return cljs.core.cons((function (){var iter__7184__auto__ = ((function (parts,s__17224__$2,temp__4657__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__17223_$_iter__17247(s__17248){
return (new cljs.core.LazySeq(null,((function (parts,s__17224__$2,temp__4657__auto__,items__$1,N,lex){
return (function (){
var s__17248__$1 = s__17248;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__17248__$1);
if(temp__4657__auto____$1){
var s__17248__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17248__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17248__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17250 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17249 = (0);
while(true){
if((i__17249 < size__7183__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17249);
cljs.core.chunk_append(b__17250,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__17249,part,c__7182__auto__,size__7183__auto__,b__17250,s__17248__$2,temp__4657__auto____$1,parts,s__17224__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__17249,part,c__7182__auto__,size__7183__auto__,b__17250,s__17248__$2,temp__4657__auto____$1,parts,s__17224__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__17258 = (i__17249 + (1));
i__17249 = G__17258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17250),clojure$math$combinatorics$iter__17223_$_iter__17247(cljs.core.chunk_rest(s__17248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17250),null);
}
} else {
var part = cljs.core.first(s__17248__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__17248__$2,temp__4657__auto____$1,parts,s__17224__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__17248__$2,temp__4657__auto____$1,parts,s__17224__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__17223_$_iter__17247(cljs.core.rest(s__17248__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__17224__$2,temp__4657__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__17224__$2,temp__4657__auto__,items__$1,N,lex))
;
return iter__7184__auto__(parts);
})(),clojure$math$combinatorics$iter__17223(cljs.core.rest(s__17224__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;
return iter__7184__auto__(lex);
});

clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq17221){
var G__17222 = cljs.core.first(seq17221);
var seq17221__$1 = cljs.core.next(seq17221);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__17222,seq17221__$1);
});


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var args17259 = [];
var len__7479__auto___17304 = arguments.length;
var i__7480__auto___17305 = (0);
while(true){
if((i__7480__auto___17305 < len__7479__auto___17304)){
args17259.push((arguments[i__7480__auto___17305]));

var G__17306 = (i__7480__auto___17305 + (1));
i__7480__auto___17305 = G__17306;
continue;
} else {
}
break;
}

var G__17261 = args17259.length;
switch (G__17261) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17259.length)].join('')));

}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));
var m = cljs.core.count(multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__17262 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__17308 = (j + (1));
var G__17309 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__17310 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__17265 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__17265) : multiset.call(null,G__17265));
})());
var G__17311 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__17266 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__17266) : multiset.call(null,G__17266));
})());
j = G__17308;
c__$1 = G__17309;
u__$1 = G__17310;
v__$1 = G__17311;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17262,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17262,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17262,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.array_seq([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__17267 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(j) : u__$1.call(null,j)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)),(0))){
var G__17312 = (j + (1));
var G__17313 = k;
var G__17314 = true;
var G__17315 = u__$2;
var G__17316 = v__$1;
var G__17317 = c__$1;
j = G__17312;
k = G__17313;
x = G__17314;
u__$1 = G__17315;
v__$1 = G__17316;
c__$1 = G__17317;
continue;
} else {
if(!(x)){
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__6742__auto__ = (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j));
var y__6743__auto__ = (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k));
return ((x__6742__auto__ < y__6743__auto__) ? x__6742__auto__ : y__6743__auto__);
})());
var x__$1 = ((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)) < (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(j) : v__$2.call(null,j)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__17318 = j__$1;
var G__17319 = k__$1;
var G__17320 = x__$1;
var G__17321 = u__$2;
var G__17322 = v__$2;
var G__17323 = c__$2;
j = G__17318;
k = G__17319;
x = G__17320;
u__$1 = G__17321;
v__$1 = G__17322;
c__$1 = G__17323;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__17324 = j__$1;
var G__17325 = k__$1;
var G__17326 = x;
var G__17327 = u__$2;
var G__17328 = v__$2;
var G__17329 = c__$2;
j = G__17324;
k = G__17325;
x = G__17326;
u__$1 = G__17327;
v__$1 = G__17328;
c__$1 = G__17329;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17267,(4),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = r;
if(cljs.core.truth_(and__6392__auto__)){
return ((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1))));
} else {
return and__6392__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = s;
if(cljs.core.truth_(and__6392__auto__)){
return ((k <= b)) && (((l + (1)) < s));
} else {
return and__6392__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);
var G__17330 = n;
var G__17331 = m;
var G__17332 = f__$1;
var G__17333 = c__$1;
var G__17334 = u__$1;
var G__17335 = v__$1;
var G__17336 = a__$1;
var G__17337 = b__$1;
var G__17338 = l__$1;
var G__17339 = r;
var G__17340 = s;
n = G__17330;
m = G__17331;
f = G__17332;
c = G__17333;
u = G__17334;
v = G__17335;
a = G__17336;
b = G__17337;
l = G__17338;
r = G__17339;
s = G__17340;
continue;
} else {
var part = (function (){var iter__7184__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__17267,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__17270(s__17271){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__17267,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__17271__$1 = s__17271;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17271__$1);
if(temp__4657__auto__){
var s__17271__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17271__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17271__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17273 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17272 = (0);
while(true){
if((i__17272 < size__7183__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17272);
cljs.core.chunk_append(b__17273,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__17290 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17290) : f.call(null,G__17290));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (i__17272,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__7182__auto__,size__7183__auto__,b__17273,s__17271__$2,temp__4657__auto__,vec__17267,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__17270_$_iter__17291(s__17292){
return (new cljs.core.LazySeq(null,((function (i__17272,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__7182__auto__,size__7183__auto__,b__17273,s__17271__$2,temp__4657__auto__,vec__17267,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__17292__$1 = s__17292;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__17292__$1);
if(temp__4657__auto____$1){
var s__17292__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17292__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__17292__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__17294 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__17293 = (0);
while(true){
if((i__17293 < size__7183__auto____$1)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__17293);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__17294,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__17341 = (i__17293 + (1));
i__17293 = G__17341;
continue;
} else {
var G__17342 = (i__17293 + (1));
i__17293 = G__17342;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17294),clojure$math$combinatorics$iter__17270_$_iter__17291(cljs.core.chunk_rest(s__17292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17294),null);
}
} else {
var z = cljs.core.first(s__17292__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__17270_$_iter__17291(cljs.core.rest(s__17292__$2)));
} else {
var G__17343 = cljs.core.rest(s__17292__$2);
s__17292__$1 = G__17343;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__17272,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__7182__auto__,size__7183__auto__,b__17273,s__17271__$2,temp__4657__auto__,vec__17267,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__17272,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__7182__auto__,size__7183__auto__,b__17273,s__17271__$2,temp__4657__auto__,vec__17267,u__$1,v__$1,c__$1,j,k))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__17344 = (i__17272 + (1));
i__17272 = G__17344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17273),clojure$math$combinatorics$iter__17270(cljs.core.chunk_rest(s__17271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17273),null);
}
} else {
var y = cljs.core.first(s__17271__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__17297 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17297) : f.call(null,G__17297));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17271__$2,temp__4657__auto__,vec__17267,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__17270_$_iter__17298(s__17299){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17271__$2,temp__4657__auto__,vec__17267,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__17299__$1 = s__17299;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__17299__$1);
if(temp__4657__auto____$1){
var s__17299__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17299__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17299__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17301 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17300 = (0);
while(true){
if((i__17300 < size__7183__auto__)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17300);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__17301,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__17345 = (i__17300 + (1));
i__17300 = G__17345;
continue;
} else {
var G__17346 = (i__17300 + (1));
i__17300 = G__17346;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17301),clojure$math$combinatorics$iter__17270_$_iter__17298(cljs.core.chunk_rest(s__17299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17301),null);
}
} else {
var z = cljs.core.first(s__17299__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__17270_$_iter__17298(cljs.core.rest(s__17299__$2)));
} else {
var G__17347 = cljs.core.rest(s__17299__$2);
s__17299__$1 = G__17347;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17271__$2,temp__4657__auto__,vec__17267,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17271__$2,temp__4657__auto__,vec__17267,u__$1,v__$1,c__$1,j,k))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__17270(cljs.core.rest(s__17271__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__17267,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__17267,u__$1,v__$1,c__$1,j,k))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__17267,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__17267,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11;

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(0))){
return j;
} else {
var G__17360 = (j - (1));
j = G__17360;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__6392__auto__ = r;
if(cljs.core.truth_(and__6392__auto__)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)) - (1)) * (r - l)) < (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(j) : u.call(null,j))));
} else {
return and__6392__auto__;
}
})())){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(1)))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
var v__$1 = clojure.math.combinatorics.update(v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__7184__auto__ = ((function (v__$1,j){
return (function clojure$math$combinatorics$m5_$_iter__17354(s__17355){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__17355__$1 = s__17355;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17355__$1);
if(temp__4657__auto__){
var s__17355__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17355__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17355__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17357 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17356 = (0);
while(true){
if((i__17356 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17356);
cljs.core.chunk_append(b__17357,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__17361 = (i__17356 + (1));
i__17356 = G__17361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17357),clojure$math$combinatorics$m5_$_iter__17354(cljs.core.chunk_rest(s__17355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17357),null);
}
} else {
var i = cljs.core.first(s__17355__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__17354(cljs.core.rest(s__17355__$2)));
}
} else {
return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_(ks)){
return v__$2;
} else {
var k = cljs.core.first(ks);
var G__17362 = cljs.core.rest(ks);
var G__17363 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__17362;
v__$2 = G__17363;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__6735__auto__ = (0);
var y__6736__auto__ = (min_partitions_after_this - diff_uv);
return ((x__6735__auto__ > y__6736__auto__) ? x__6735__auto__ : y__6736__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(k_1) : v__$3.call(null,k_1));
if((amount > vk)){
var G__17364 = (k_1 - (1));
var G__17365 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__17366 = (amount - vk);
k_1 = G__17364;
v__$3 = G__17365;
amount = G__17366;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l__$1) : f.call(null,l__$1));
return clojure.math.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__7486__auto__ = [];
var len__7479__auto___17492 = arguments.length;
var i__7480__auto___17493 = (0);
while(true){
if((i__7480__auto___17493 < len__7479__auto___17492)){
args__7486__auto__.push((arguments[i__7480__auto___17493]));

var G__17494 = (i__7480__auto___17493 + (1));
i__7480__auto___17493 = G__17494;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__17369){
var map__17370 = p__17369;
var map__17370__$1 = ((((!((map__17370 == null)))?((((map__17370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17370):map__17370);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17370__$1,cljs.core.cst$kw$min);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17370__$1,cljs.core.cst$kw$max);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
if((((function (){var or__6404__auto__ = from;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__6404__auto__ = to;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec(items);
var ditems = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items__$1));
var freqs = cljs.core.frequencies(items__$1);
var N = cljs.core.count(items__$1);
var M = cljs.core.count(ditems);
var from__$1 = (cljs.core.truth_((function (){var and__6392__auto__ = from;
if(cljs.core.truth_(and__6392__auto__)){
return (from <= (1));
} else {
return and__6392__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__6392__auto__ = to;
if(cljs.core.truth_(and__6392__auto__)){
return (to >= N);
} else {
return and__6392__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__6404__auto__ = from__$1;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__6404__auto__ = from__$1;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (1);
}
})() <= (function (){var or__6404__auto__ = to__$1;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return N;
}
})())) && (((function (){var or__6404__auto__ = to__$1;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7238__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7238__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7238__auto__ = cljs.core.first(items__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})())));
} else {
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function clojure$math$combinatorics$iter__17372(s__17373){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function (){
var s__17373__$1 = s__17373;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17373__$1);
if(temp__4657__auto__){
var s__17373__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17373__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17373__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17375 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17374 = (0);
while(true){
if((i__17374 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17374);
var j = (i + (1));
cljs.core.chunk_append(b__17375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__17380 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__17380) : freqs.call(null,G__17380));
})()], null));

var G__17495 = (i__17374 + (1));
i__17374 = G__17495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17375),clojure$math$combinatorics$iter__17372(cljs.core.chunk_rest(s__17373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17375),null);
}
} else {
var i = cljs.core.first(s__17373__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__17381 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__17381) : freqs.call(null,G__17381));
})()], null),clojure$math$combinatorics$iter__17372(cljs.core.rest(s__17373__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);
var iter__7184__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function clojure$math$combinatorics$iter__17382(s__17383){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function (){
var s__17383__$1 = s__17383;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17383__$1);
if(temp__4657__auto__){
var s__17383__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17383__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17383__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17385 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17384 = (0);
while(true){
if((i__17384 < size__7183__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17384);
cljs.core.chunk_append(b__17385,(function (){var iter__7184__auto__ = ((function (i__17384,part,c__7182__auto__,size__7183__auto__,b__17385,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function clojure$math$combinatorics$iter__17382_$_iter__17440(s__17441){
return (new cljs.core.LazySeq(null,((function (i__17384,part,c__7182__auto__,size__7183__auto__,b__17385,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function (){
var s__17441__$1 = s__17441;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__17441__$1);
if(temp__4657__auto____$1){
var s__17441__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17441__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__17441__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__17443 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__17442 = (0);
while(true){
if((i__17442 < size__7183__auto____$1)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__17442);
cljs.core.chunk_append(b__17443,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__17442,i__17384,multiset,c__7182__auto____$1,size__7183__auto____$1,b__17443,s__17441__$2,temp__4657__auto____$1,part,c__7182__auto__,size__7183__auto__,b__17385,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function (p__17456){
var vec__17457 = p__17456;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17457,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17457,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__17460 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__17460) : ditems.call(null,G__17460));
})());
});})(i__17442,i__17384,multiset,c__7182__auto____$1,size__7183__auto____$1,b__17443,s__17441__$2,temp__4657__auto____$1,part,c__7182__auto__,size__7183__auto__,b__17385,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
,cljs.core.array_seq([multiset], 0))));

var G__17496 = (i__17442 + (1));
i__17442 = G__17496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17443),clojure$math$combinatorics$iter__17382_$_iter__17440(cljs.core.chunk_rest(s__17441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17443),null);
}
} else {
var multiset = cljs.core.first(s__17441__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__17384,multiset,s__17441__$2,temp__4657__auto____$1,part,c__7182__auto__,size__7183__auto__,b__17385,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function (p__17461){
var vec__17462 = p__17461;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__17465 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__17465) : ditems.call(null,G__17465));
})());
});})(i__17384,multiset,s__17441__$2,temp__4657__auto____$1,part,c__7182__auto__,size__7183__auto__,b__17385,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
,cljs.core.array_seq([multiset], 0))),clojure$math$combinatorics$iter__17382_$_iter__17440(cljs.core.rest(s__17441__$2)));
}
} else {
return null;
}
break;
}
});})(i__17384,part,c__7182__auto__,size__7183__auto__,b__17385,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
,null,null));
});})(i__17384,part,c__7182__auto__,size__7183__auto__,b__17385,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
;
return iter__7184__auto__(part);
})());

var G__17497 = (i__17384 + (1));
i__17384 = G__17497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17385),clojure$math$combinatorics$iter__17382(cljs.core.chunk_rest(s__17383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17385),null);
}
} else {
var part = cljs.core.first(s__17383__$2);
return cljs.core.cons((function (){var iter__7184__auto__ = ((function (part,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function clojure$math$combinatorics$iter__17382_$_iter__17466(s__17467){
return (new cljs.core.LazySeq(null,((function (part,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function (){
var s__17467__$1 = s__17467;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__17467__$1);
if(temp__4657__auto____$1){
var s__17467__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17467__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__17467__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__17469 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__17468 = (0);
while(true){
if((i__17468 < size__7183__auto__)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__17468);
cljs.core.chunk_append(b__17469,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__17468,multiset,c__7182__auto__,size__7183__auto__,b__17469,s__17467__$2,temp__4657__auto____$1,part,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function (p__17482){
var vec__17483 = p__17482;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17483,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17483,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__17486 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__17486) : ditems.call(null,G__17486));
})());
});})(i__17468,multiset,c__7182__auto__,size__7183__auto__,b__17469,s__17467__$2,temp__4657__auto____$1,part,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
,cljs.core.array_seq([multiset], 0))));

var G__17498 = (i__17468 + (1));
i__17468 = G__17498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17469),clojure$math$combinatorics$iter__17382_$_iter__17466(cljs.core.chunk_rest(s__17467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17469),null);
}
} else {
var multiset = cljs.core.first(s__17467__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (multiset,s__17467__$2,temp__4657__auto____$1,part,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to){
return (function (p__17487){
var vec__17488 = p__17487;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17488,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17488,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__17491 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__17491) : ditems.call(null,G__17491));
})());
});})(multiset,s__17467__$2,temp__4657__auto____$1,part,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
,cljs.core.array_seq([multiset], 0))),clojure$math$combinatorics$iter__17382_$_iter__17466(cljs.core.rest(s__17467__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
,null,null));
});})(part,s__17383__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
;
return iter__7184__auto__(part);
})(),clojure$math$combinatorics$iter__17382(cljs.core.rest(s__17383__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17370,map__17370__$1,from,to))
;
return iter__7184__auto__(parts);

}
}
}
});

clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq17367){
var G__17368 = cljs.core.first(seq17367);
var seq17367__$1 = cljs.core.next(seq17367);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic(G__17368,seq17367__$1);
});

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__7486__auto__ = [];
var len__7479__auto___17501 = arguments.length;
var i__7480__auto___17502 = (0);
while(true){
if((i__7480__auto___17502 < len__7479__auto___17501)){
args__7486__auto__.push((arguments[i__7480__auto___17502]));

var G__17503 = (i__7480__auto___17502 + (1));
i__7480__auto___17502 = G__17503;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_M,items,args);

}
}
});

clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq17499){
var G__17500 = cljs.core.first(seq17499);
var seq17499__$1 = cljs.core.next(seq17499);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic(G__17500,seq17499__$1);
});

