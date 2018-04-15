// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('starfreighter.desc');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('starfreighter.rand');
starfreighter.desc.tag_QMARK_ = (function starfreighter$desc$tag_QMARK_(span){
return (cljs.core.sequential_QMARK_(span)) && ((cljs.core.first(span) instanceof cljs.core.Keyword));
});
starfreighter.desc.flatten_but_preserve_tags = (function starfreighter$desc$flatten_but_preserve_tags(text){
if(cljs.core.sequential_QMARK_(text)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (text__$1,span){
if(cljs.core.truth_(starfreighter.desc.tag_QMARK_(span))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(text__$1,span);
} else {
if(cljs.core.sequential_QMARK_(span)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(text__$1,starfreighter$desc$flatten_but_preserve_tags(span));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(text__$1,span);

}
}
}),cljs.core.PersistentVector.EMPTY,text);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(text)].join('')], null);
}
});
starfreighter.desc.append_span = (function starfreighter$desc$append_span(text,span){
var G__22073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.tag_QMARK_(span),cljs.core.empty_QMARK_(text)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__22073)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [span," "], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__22073)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(text),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.peek(text)),cljs.core.str(" ")].join(''),span," "], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__22073)){
var span__$1 = [cljs.core.str(span)].join('');
if(cljs.core.empty_QMARK_(span__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(span__$1)].join('')], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),G__22073)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(text),[cljs.core.str(cljs.core.peek(text)),cljs.core.str(span)].join(''));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.tag_QMARK_(span),cljs.core.empty_QMARK_(text)], null))].join('')));

}
}
}
}
});
starfreighter.desc.consolidate_strings = (function starfreighter$desc$consolidate_strings(text){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(starfreighter.desc.append_span,cljs.core.PersistentVector.EMPTY,text);
});
starfreighter.desc.normalize_span = (function starfreighter$desc$normalize_span(span){
if(typeof span === 'string'){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(span,"...","\u2026"),/\s*([\.\?!,;:…])\s*/,(function (p__22082){
var vec__22083 = p__22082;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(0),null);
var punct = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(1),null);
return [cljs.core.str(punct),cljs.core.str(" ")].join('');
})),"? !","?!"),/\s+/," "),/([\.\?!]) ([a-z])/,(function (p__22086){
var vec__22087 = p__22086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22087,(0),null);
var punct = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22087,(1),null);
var lower = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22087,(2),null);
return [cljs.core.str(punct),cljs.core.str(" "),cljs.core.str(clojure.string.capitalize(lower))].join('');
}));
} else {
return span;
}
});
starfreighter.desc.normalize_first = (function starfreighter$desc$normalize_first(span){
if(typeof span === 'string'){
return clojure.string.replace(clojure.string.triml(span),/^([a-z])/,(function (p__22094){
var vec__22095 = p__22094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22095,(0),null);
var lower = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22095,(1),null);
return clojure.string.capitalize(lower);
}));
} else {
return span;
}
});
starfreighter.desc.normalize_last = (function starfreighter$desc$normalize_last(span){
if(typeof span === 'string'){
} else {
throw (new Error("Assert failed: (string? span)"));
}

return clojure.string.trimr(span);
});
starfreighter.desc.normalize_STAR_ = (function starfreighter$desc$normalize_STAR_(text){
if((cljs.core.count(text) > (0))){
} else {
throw (new Error("Assert failed: (pos? (count text))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(text),(1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.normalize_span(starfreighter.desc.normalize_last(starfreighter.desc.normalize_first(cljs.core.first(text))))], null);
} else {
var fst = cljs.core.first(text);
var fst__$1 = (function (){var G__22099 = fst;
if(typeof fst === 'string'){
return starfreighter.desc.normalize_first(G__22099);
} else {
return G__22099;
}
})();
var lst = starfreighter.desc.normalize_last(cljs.core.last(text));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(starfreighter.desc.normalize_span,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fst__$1], null),cljs.core.butlast(cljs.core.rest(text)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lst], null)], 0)));
}
});
starfreighter.desc.normalize = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(starfreighter.desc.normalize_STAR_,starfreighter.desc.consolidate_strings,starfreighter.desc.flatten_but_preserve_tags);
starfreighter.desc.a = (function starfreighter$desc$a(word){
var word__$1 = (function (){var G__22101 = word;
if(cljs.core.sequential_QMARK_(word)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(G__22101);
} else {
return G__22101;
}
})();
if(typeof word__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? word)"));
}

return [cljs.core.str((cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["a",null,"e",null,"i",null,"o",null,"u",null], null), null).call(null,cljs.core.first(clojure.string.lower_case(word__$1))))?"an":"a")),cljs.core.str(" "),cljs.core.str(word__$1)].join('');
});
starfreighter.desc.adj_list = (function starfreighter$desc$adj_list(adjs){
var adjs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,adjs);
if(cljs.core.empty_QMARK_(adjs__$1)){
return "";
} else {
return cljs.core.vec(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",adjs__$1));
}
});
starfreighter.desc.comma_list = (function starfreighter$desc$comma_list(items){
var items__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,items);
if(cljs.core.empty_QMARK_(items__$1)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items__$1),(1))){
return cljs.core.first(items__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items__$1),(2))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(items__$1)," and ",cljs.core.second(items__$1)], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.butlast(items__$1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [", and ",cljs.core.last(items__$1)], null));

}
}
}
});
starfreighter.desc.o = (function starfreighter$desc$o(opt){
if(cljs.core.truth_(starfreighter.rand.chance.cljs$core$IFn$_invoke$arity$1(0.5))){
return opt;
} else {
return null;
}
});
starfreighter.desc.r = (function starfreighter$desc$r(var_args){
var args__7486__auto__ = [];
var len__7479__auto___22103 = arguments.length;
var i__7480__auto___22104 = (0);
while(true){
if((i__7480__auto___22104 < len__7479__auto___22103)){
args__7486__auto__.push((arguments[i__7480__auto___22104]));

var G__22105 = (i__7480__auto___22104 + (1));
i__7480__auto___22104 = G__22105;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
return starfreighter.rand.rand_nth(opts);
});

starfreighter.desc.r.cljs$lang$maxFixedArity = (0);

starfreighter.desc.r.cljs$lang$applyTo = (function (seq22102){
return starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22102));
});

starfreighter.desc.port = (function starfreighter$desc$port(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["space","star",""], 0)),"port"], null);
});
starfreighter.desc.culture_link = (function starfreighter$desc$culture_link(thing){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cultures,cljs.core.cst$kw$culture.cljs$core$IFn$_invoke$arity$1(thing)], null)], null);
});
starfreighter.desc.dest_link = (function starfreighter$desc$dest_link(thing){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$places,cljs.core.cst$kw$destination.cljs$core$IFn$_invoke$arity$1(thing)], null)], null);
});
starfreighter.desc.home_link = (function starfreighter$desc$home_link(char$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$places,cljs.core.cst$kw$home.cljs$core$IFn$_invoke$arity$1(char$)], null)], null);
});
starfreighter.desc.subj = (function starfreighter$desc$subj(thing){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subject,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(thing)], null);
});
if(typeof starfreighter.desc.describe_module !== 'undefined'){
} else {
starfreighter.desc.describe_module = (function (){var method_table__7329__auto__ = (function (){var G__22106 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22106) : cljs.core.atom.call(null,G__22106));
})();
var prefer_table__7330__auto__ = (function (){var G__22107 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22107) : cljs.core.atom.call(null,G__22107));
})();
var method_cache__7331__auto__ = (function (){var G__22108 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22108) : cljs.core.atom.call(null,G__22108));
})();
var cached_hierarchy__7332__auto__ = (function (){var G__22109 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22109) : cljs.core.atom.call(null,G__22109));
})();
var hierarchy__7333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("starfreighter.desc","describe-module"),cljs.core.cst$kw$template,cljs.core.cst$kw$default,hierarchy__7333__auto__,method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__));
})();
}
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$agriculture,(function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Agriculture","Farming"], 0))," is ",starfreighter.desc.a(starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["important","key","major"], 0)))," industry here."], null);
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$aristocracy,(function (_){
return "An aristocratic class of hereditary nobility holds a substantial amount of political power here.";
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$corruption,(function (_){
return "This system\u2019s local government has developed a reputation for corruption.";
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$diplomacy,(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This system is widely recognized as an important diplomatic hub, ","where representatives of many different cultures can come together and meet."], null);
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$gambling,(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Gambling is legal here",starfreighter.desc.o(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [", ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["albeit","and","but"], 0))," ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["largely unregulated","strictly regulated","tightly regulated"], 0)),starfreighter.desc.o(" by the government")], null)),"."], null);
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hospital,(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This system is known for its especially well-equipped ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["healthcare","hospital","medical"], 0))," facilities."], null);
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$independence,(function (_){
var movement = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["","growing ","powerful "], 0)),"system-wide independence movement"], null);
return starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A ",movement," enjoys a good deal of support from the populace here."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Many residents of this system ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["are","have become"], 0))," ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["involved with","sympathetic to"], 0))," a ",movement,"."], null)], 0));
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$megacorp,(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Much of this system is controlled by a single megacorporation, ","which employs at least half of the system\u2019s residents in some capacity or another."], null);
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mining,(function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.o("Asteroid ")," mining is ",starfreighter.desc.a(starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["important","key","major"], 0)))," industry here."], null);
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$neutral,(function (_){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.o(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["By treaty","Legally"], 0)),", "], null)),"this system is ",starfreighter.desc.o("intended to be")," ",starfreighter.desc.o("governed as")," a neutral zone, ",starfreighter.desc.o("officially "),"unaffiliated with any of the established multi-system powers."], null);
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$piracy,(function (_){
return starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This system is known as a haven for ",starfreighter.desc.comma_list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pirates",starfreighter.desc.o("smugglers"),starfreighter.desc.o(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["other ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["spacefarers","spacers","starfarers","voidfarers"], 0))," of ill repute"], null))], null)),"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piracy is ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a major ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["issue","problem"], 0))], null),"commonplace","prevalent","rampant","widespread"], 0))," here."], null)], 0));
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prohibition,(function (_){
var substances = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.o("many kinds of "),"intoxicating substances"], null);
return starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The government of this system has imposed a prohibition ","on the import, manufacturing, and consumption of ",substances,"."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The import, manufacturing, and consumption of ",substances," is prohibited here."], null)], 0));
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$quarantine,(function (_){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This system is currently struggling to ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["contain","deal with","fend off"], 0))," ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["","an outbreak of","the spread of"], 0))," ",starfreighter.desc.a(starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["especially","particularly"], 0)))," ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dangerous","virulent"], 0))," ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["contagion","illness","infection","infectious disease","plague"], 0)),"."], null);
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$reactor,(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The synthesis of exotic forms of matter is ",starfreighter.desc.a(starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["important","key","major"], 0)))," industry here."], null);
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$religion,(function (_){
return "Residents of this system have a reputation for being highly religious.";
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$shipyard,(function (_){
return "This system is known for its shipyards.";
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tourism,(function (_){
return starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tourism is ",starfreighter.desc.a(starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["important","key","major"], 0)))," industry here."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This system is a popular ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["destination for tourists","tourist destination"], 0)),"."], null)], 0));
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$warzone,(function (_){
return "This system is on the front lines of an ongoing war.";
}));
starfreighter.desc.describe_module.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$weapons,(function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Arms manufacturing","The manufacturing of weapons and explosives","Weapons manufacturing"], 0))," is ",starfreighter.desc.a(starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["important","key","major"], 0)))," industry here."], null);
}));
if(typeof starfreighter.desc.describe_STAR_ !== 'undefined'){
} else {
starfreighter.desc.describe_STAR_ = (function (){var method_table__7329__auto__ = (function (){var G__22110 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22110) : cljs.core.atom.call(null,G__22110));
})();
var prefer_table__7330__auto__ = (function (){var G__22111 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22111) : cljs.core.atom.call(null,G__22111));
})();
var method_cache__7331__auto__ = (function (){var G__22112 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22112) : cljs.core.atom.call(null,G__22112));
})();
var cached_hierarchy__7332__auto__ = (function (){var G__22113 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22113) : cljs.core.atom.call(null,G__22113));
})();
var hierarchy__7333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("starfreighter.desc","describe*"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__7333__auto__,method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__));
})();
}
starfreighter.desc.describe_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$cargo,(function (p__22114){
var map__22115 = p__22114;
var map__22115__$1 = ((((!((map__22115 == null)))?((((map__22115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22115):map__22115);
var item = map__22115__$1;
var dest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22115__$1,cljs.core.cst$kw$destination);
var merchant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22115__$1,cljs.core.cst$kw$merchant);
var pay_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22115__$1,cljs.core.cst$kw$pay_DASH_before);
var pay_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22115__$1,cljs.core.cst$kw$pay_DASH_after);
var seller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22115__$1,cljs.core.cst$kw$seller);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A shipment of ",starfreighter.desc.subj(item),(cljs.core.truth_(dest)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [", bound for ",starfreighter.desc.dest_link(item)], null):null),". ",(cljs.core.truth_(merchant)?(((pay_before > (0)))?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["We received ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cash,pay_before], null)," from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,merchant], null)," at ",starfreighter.desc.home_link(merchant)," for agreeing to deliver this cargo, and will receive ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cash,pay_after], null)," more when we drop it off at ",dest,"."], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["We will receive ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cash,pay_after], null)," in payment from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,merchant], null)," (a merchant at ",starfreighter.desc.home_link(merchant),") when we drop it off at ",dest,". "], null)):null),(cljs.core.truth_(seller)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["We bought this ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)," from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,seller], null)," at ",starfreighter.desc.home_link(seller)," for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cash,cljs.core.cst$kw$price.cljs$core$IFn$_invoke$arity$1(item)], null),"."], null):null)], null)], null);
}));
starfreighter.desc.describe_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$char,(function (char$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.subj(char$)," is a person from ",starfreighter.desc.home_link(char$),". ","They belong to the ",starfreighter.desc.culture_link(char$)," culture. ",(function (){var G__22117 = (((cljs.core.cst$kw$role.cljs$core$IFn$_invoke$arity$1(char$) instanceof cljs.core.Keyword))?cljs.core.cst$kw$role.cljs$core$IFn$_invoke$arity$1(char$).fqn:null);
switch (G__22117) {
case "crew":
return "They are a member of our crew.";

break;
case "merchant":
return "They are a merchant.";

break;
case "passenger":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["They are a passenger en route to ",starfreighter.desc.dest_link(char$),"."], null);

break;
default:
return "";

}
})()], null)], null);
}));
starfreighter.desc.describe_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$culture,(function (culture){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.subj(culture)," is a distinct culture in this region of the galaxy."], null)], null);
}));
starfreighter.desc.describe_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$place,(function (place){
var _STAR_rng_STAR_22120 = starfreighter.rand._STAR_rng_STAR_;
starfreighter.rand._STAR_rng_STAR_ = (function (){var G__22121 = cljs.core.hash(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(place));
return (starfreighter.rand.rng.cljs$core$IFn$_invoke$arity$1 ? starfreighter.rand.rng.cljs$core$IFn$_invoke$arity$1(G__22121) : starfreighter.rand.rng.call(null,G__22121));
})();

try{var are = ((function (_STAR_rng_STAR_22120){
return (function (){
return starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["are ","include "], 0));
});})(_STAR_rng_STAR_22120))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [starfreighter.desc.subj(place)," is an inhabited ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["planetary ","solar ","star ",""], 0)),"system. ","The ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dominant","majority"], 0))," culture is ",starfreighter.desc.culture_link(place),". ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Chief","Key","Major","Notable","Primary",""], 0))," exports ",are(),starfreighter.desc.comma_list(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cst$kw$exports.cljs$core$IFn$_invoke$arity$1(place))),". ",starfreighter.desc.r.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Chief","Key","Major","Notable","Primary",""], 0))," imports ",are(),starfreighter.desc.comma_list(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(place))),"."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Our merchant contacts here ",are(),starfreighter.desc.comma_list(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (are,_STAR_rng_STAR_22120){
return (function (p1__22119_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chars,p1__22119_SHARP_], null)], null);
});})(are,_STAR_rng_STAR_22120))
,cljs.core.cst$kw$merchants.cljs$core$IFn$_invoke$arity$1(place))),"."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(starfreighter.desc.describe_module,cljs.core.cst$kw$modules.cljs$core$IFn$_invoke$arity$1(place)))], null)], null);
}finally {starfreighter.rand._STAR_rng_STAR_ = _STAR_rng_STAR_22120;
}}));
starfreighter.desc.describe_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__22122){
var map__22123 = p__22122;
var map__22123__$1 = ((((!((map__22123 == null)))?((((map__22123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22123):map__22123);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22123__$1,cljs.core.cst$kw$desc);
return desc;
}));
starfreighter.desc.describe = (function starfreighter$desc$describe(thing){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(starfreighter.desc.normalize,(starfreighter.desc.describe_STAR_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.desc.describe_STAR_.cljs$core$IFn$_invoke$arity$1(thing) : starfreighter.desc.describe_STAR_.call(null,thing)));
});
