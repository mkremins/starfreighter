// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$proto_DASH_sym,cljs.core.cst$sym$s_SLASH_Schema,cljs.core.cst$kw$proto_DASH_pred,(function (p1__19121__19122__auto__){
if(!((p1__19121__19122__auto__ == null))){
if((false) || (p1__19121__19122__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__19121__19122__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__19121__19122__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__19121__19122__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.OutputSchema,cljs.core.cst$sym$output)], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20733_SHARP_){
return (cljs.core.val(p1__20733_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__20737 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20737,(1),null);
var p = vec__20737;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$missing_DASH_key,cljs.core.cst$kw$key,k,cljs.core.cst$kw$map,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return s1;

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___20745 = schema.utils.use_fn_validation;
var output_schema20740_20746 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema20741_20747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker20742_20748 = schema.core.checker(input_schema20741_20747);
var output_checker20743_20749 = schema.core.checker(output_schema20740_20746);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20745,output_schema20740_20746,input_schema20741_20747,input_checker20742_20748,output_checker20743_20749){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__20744){
var validate__18351__auto__ = ufv___20745.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___20750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20744], null);
var temp__4657__auto___20751 = (input_checker20742_20748.cljs$core$IFn$_invoke$arity$1 ? input_checker20742_20748.cljs$core$IFn$_invoke$arity$1(args__18352__auto___20750) : input_checker20742_20748.call(null,args__18352__auto___20750));
if(cljs.core.truth_(temp__4657__auto___20751)){
var error__18353__auto___20752 = temp__4657__auto___20751;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20752], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20741_20747,cljs.core.cst$kw$value,args__18352__auto___20750,cljs.core.cst$kw$error,error__18353__auto___20752], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var k = G__20744;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),cljs.core.cst$sym$schema$core_SLASH_optional_DASH_key))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___20753 = (output_checker20743_20749.cljs$core$IFn$_invoke$arity$1 ? output_checker20743_20749.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker20743_20749.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___20753)){
var error__18353__auto___20754 = temp__4657__auto___20753;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20754], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20740_20746,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___20754], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___20745,output_schema20740_20746,input_schema20741_20747,input_checker20742_20748,output_checker20743_20749))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema20740_20746,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20741_20747], null)));
var ufv___20760 = schema.utils.use_fn_validation;
var output_schema20755_20761 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema20756_20762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker20757_20763 = schema.core.checker(input_schema20756_20762);
var output_checker20758_20764 = schema.core.checker(output_schema20755_20761);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___20760,output_schema20755_20761,input_schema20756_20762,input_checker20757_20763,output_checker20758_20764){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__20759){
var validate__18351__auto__ = ufv___20760.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___20765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20759], null);
var temp__4657__auto___20766 = (input_checker20757_20763.cljs$core$IFn$_invoke$arity$1 ? input_checker20757_20763.cljs$core$IFn$_invoke$arity$1(args__18352__auto___20765) : input_checker20757_20763.call(null,args__18352__auto___20765));
if(cljs.core.truth_(temp__4657__auto___20766)){
var error__18353__auto___20767 = temp__4657__auto___20766;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20767], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20756_20762,cljs.core.cst$kw$value,args__18352__auto___20765,cljs.core.cst$kw$error,error__18353__auto___20767], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var s = G__20759;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___20768 = (output_checker20758_20764.cljs$core$IFn$_invoke$arity$1 ? output_checker20758_20764.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker20758_20764.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___20768)){
var error__18353__auto___20769 = temp__4657__auto___20768;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20769], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20755_20761,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___20769], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___20760,output_schema20755_20761,input_schema20756_20762,input_checker20757_20763,output_checker20758_20764))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema20755_20761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20756_20762], null)));
var ufv___20775 = schema.utils.use_fn_validation;
var output_schema20770_20776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$required),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$optional)], null);
var input_schema20771_20777 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null)], null)))], null);
var input_checker20772_20778 = schema.core.checker(input_schema20771_20777);
var output_checker20773_20779 = schema.core.checker(output_schema20770_20776);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___20775,output_schema20770_20776,input_schema20771_20777,input_checker20772_20778,output_checker20773_20779){
return (function plumbing$fnk$schema$split_schema_keys(G__20774){
var validate__18351__auto__ = ufv___20775.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___20780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20774], null);
var temp__4657__auto___20781 = (input_checker20772_20778.cljs$core$IFn$_invoke$arity$1 ? input_checker20772_20778.cljs$core$IFn$_invoke$arity$1(args__18352__auto___20780) : input_checker20772_20778.call(null,args__18352__auto___20780));
if(cljs.core.truth_(temp__4657__auto___20781)){
var error__18353__auto___20782 = temp__4657__auto___20781;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20782], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20771_20777,cljs.core.cst$kw$value,args__18352__auto___20780,cljs.core.cst$kw$error,error__18353__auto___20782], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var s = G__20774;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___20783 = (output_checker20773_20779.cljs$core$IFn$_invoke$arity$1 ? output_checker20773_20779.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker20773_20779.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___20783)){
var error__18353__auto___20784 = temp__4657__auto___20783;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20784], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20770_20776,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___20784], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___20775,output_schema20770_20776,input_schema20771_20777,input_checker20772_20778,output_checker20773_20779))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema20770_20776,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20771_20777], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20796 = arguments.length;
var i__7480__auto___20797 = (0);
while(true){
if((i__7480__auto___20797 < len__7479__auto___20796)){
args__7486__auto__.push((arguments[i__7480__auto___20797]));

var G__20798 = (i__7480__auto___20797 + (1));
i__7480__auto___20797 = G__20798;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__20789){
var vec__20790 = p__20789;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20790,(1),null);
var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__20793 = temp__4655__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20793,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20793,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq20785){
var G__20786 = cljs.core.first(seq20785);
var seq20785__$1 = cljs.core.next(seq20785);
var G__20787 = cljs.core.first(seq20785__$1);
var seq20785__$2 = cljs.core.next(seq20785__$1);
var G__20788 = cljs.core.first(seq20785__$2);
var seq20785__$3 = cljs.core.next(seq20785__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__20786,G__20787,G__20788,seq20785__$3);
});

var ufv___20806 = schema.utils.use_fn_validation;
var output_schema20800_20807 = plumbing.fnk.schema.InputSchema;
var input_schema20801_20808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker20802_20809 = schema.core.checker(input_schema20801_20808);
var output_checker20803_20810 = schema.core.checker(output_schema20800_20807);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___20806,output_schema20800_20807,input_schema20801_20808,input_checker20802_20809,output_checker20803_20810){
return (function plumbing$fnk$schema$union_input_schemata(G__20804,G__20805){
var validate__18351__auto__ = ufv___20806.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___20811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20804,G__20805], null);
var temp__4657__auto___20812 = (input_checker20802_20809.cljs$core$IFn$_invoke$arity$1 ? input_checker20802_20809.cljs$core$IFn$_invoke$arity$1(args__18352__auto___20811) : input_checker20802_20809.call(null,args__18352__auto___20811));
if(cljs.core.truth_(temp__4657__auto___20812)){
var error__18353__auto___20813 = temp__4657__auto___20812;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20813], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20801_20808,cljs.core.cst$kw$value,args__18352__auto___20811,cljs.core.cst$kw$error,error__18353__auto___20813], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var i1 = G__20804;
var i2 = G__20805;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__18351__auto__,ufv___20806,output_schema20800_20807,input_schema20801_20808,input_checker20802_20809,output_checker20803_20810){
return (function (p1__20799_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(p1__20799_SHARP_))){
return schema.core.explicit_schema_key(p1__20799_SHARP_);
} else {
return cljs.core.cst$kw$extra;
}
});})(validate__18351__auto__,ufv___20806,output_schema20800_20807,input_schema20801_20808,input_checker20802_20809,output_checker20803_20810))
,((function (validate__18351__auto__,ufv___20806,output_schema20800_20807,input_schema20801_20808,input_checker20802_20809,output_checker20803_20810){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_(k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(k1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error("Assert failed: (= k1 k2)"));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__18351__auto__,ufv___20806,output_schema20800_20807,input_schema20801_20808,input_checker20802_20809,output_checker20803_20810))
,((function (validate__18351__auto__,ufv___20806,output_schema20800_20807,input_schema20801_20808,input_checker20802_20809,output_checker20803_20810){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__6392__auto__ = plumbing.fnk.schema.map_schema_QMARK_(s1);
if(cljs.core.truth_(and__6392__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_(s2);
} else {
return and__6392__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__18351__auto__,ufv___20806,output_schema20800_20807,input_schema20801_20808,input_checker20802_20809,output_checker20803_20810))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___20814 = (output_checker20803_20810.cljs$core$IFn$_invoke$arity$1 ? output_checker20803_20810.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker20803_20810.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___20814)){
var error__18353__auto___20815 = temp__4657__auto___20814;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20815], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20800_20807,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___20815], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___20806,output_schema20800_20807,input_schema20801_20808,input_checker20802_20809,output_checker20803_20810))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema20800_20807,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20801_20808], null)));
var ufv___20821 = schema.utils.use_fn_validation;
var output_schema20816_20822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema20817_20823 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$input_DASH_schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker20818_20824 = schema.core.checker(input_schema20817_20823);
var output_checker20819_20825 = schema.core.checker(output_schema20816_20822);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___20821,output_schema20816_20822,input_schema20817_20823,input_checker20818_20824,output_checker20819_20825){
return (function plumbing$fnk$schema$required_toplevel_keys(G__20820){
var validate__18351__auto__ = ufv___20821.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___20826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20820], null);
var temp__4657__auto___20827 = (input_checker20818_20824.cljs$core$IFn$_invoke$arity$1 ? input_checker20818_20824.cljs$core$IFn$_invoke$arity$1(args__18352__auto___20826) : input_checker20818_20824.call(null,args__18352__auto___20826));
if(cljs.core.truth_(temp__4657__auto___20827)){
var error__18353__auto___20828 = temp__4657__auto___20827;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20828], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20817_20823,cljs.core.cst$kw$value,args__18352__auto___20826,cljs.core.cst$kw$error,error__18353__auto___20828], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var input_schema = G__20820;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__18351__auto__,ufv___20821,output_schema20816_20822,input_schema20817_20823,input_checker20818_20824,output_checker20819_20825){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k))){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__18351__auto__,ufv___20821,output_schema20816_20822,input_schema20817_20823,input_checker20818_20824,output_checker20819_20825))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___20829 = (output_checker20819_20825.cljs$core$IFn$_invoke$arity$1 ? output_checker20819_20825.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker20819_20825.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___20829)){
var error__18353__auto___20830 = temp__4657__auto___20829;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20830], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20816_20822,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___20830], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___20821,output_schema20816_20822,input_schema20817_20823,input_checker20818_20824,output_checker20819_20825))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema20816_20822,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20817_20823], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__20849(s__20850){
return (new cljs.core.LazySeq(null,(function (){
var s__20850__$1 = s__20850;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20850__$1);
if(temp__4657__auto__){
var s__20850__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20850__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20850__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20852 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20851 = (0);
while(true){
if((i__20851 < size__7183__auto__)){
var vec__20861 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20851);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20861,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20861,(1),null);
cljs.core.chunk_append(b__20852,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null));

var G__20867 = (i__20851 + (1));
i__20851 = G__20867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20852),plumbing$fnk$schema$guess_expr_output_schema_$_iter__20849(cljs.core.chunk_rest(s__20850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20852),null);
}
} else {
var vec__20864 = cljs.core.first(s__20850__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__20849(cljs.core.rest(s__20850__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(expr);
})());
} else {
return cljs.core.cst$sym$schema$core_SLASH_Any;
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.make_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.explain(output_schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$map_QMARK_);
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__20894(s__20895){
return (new cljs.core.LazySeq(null,(function (){
var s__20895__$1 = s__20895;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20895__$1);
if(temp__4657__auto__){
var s__20895__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20895__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20895__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20897 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20896 = (0);
while(true){
if((i__20896 < size__7183__auto__)){
var vec__20906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20896);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20906,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20906,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6404__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__20897,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__20912 = (i__20896 + (1));
i__20896 = G__20912;
continue;
} else {
var G__20913 = (i__20896 + (1));
i__20896 = G__20913;
continue;
}
} else {
var G__20914 = (i__20896 + (1));
i__20896 = G__20914;
continue;
}
} else {
var G__20915 = (i__20896 + (1));
i__20896 = G__20915;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20897),plumbing$fnk$schema$schema_diff_$_iter__20894(cljs.core.chunk_rest(s__20895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20897),null);
}
} else {
var vec__20909 = cljs.core.first(s__20895__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20909,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20909,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6404__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__20894(cljs.core.rest(s__20895__$2)));
} else {
var G__20916 = cljs.core.rest(s__20895__$2);
s__20895__$1 = G__20916;
continue;
}
} else {
var G__20917 = cljs.core.rest(s__20895__$2);
s__20895__$1 = G__20917;
continue;
}
} else {
var G__20918 = cljs.core.rest(s__20895__$2);
s__20895__$1 = G__20918;
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
return iter__7184__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$does_DASH_not_DASH_satisfy_DASH_schema,cljs.core.cst$kw$failures,fails], null));
} else {
return null;
}
});
var ufv___20965 = schema.utils.use_fn_validation;
var output_schema20919_20966 = schema.core.Any;
var input_schema20920_20967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null),cljs.core.cst$sym$arg1)], null);
var input_checker20921_20968 = schema.core.checker(input_schema20920_20967);
var output_checker20922_20969 = schema.core.checker(output_schema20919_20966);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___20965,output_schema20919_20966,input_schema20920_20967,input_checker20921_20968,output_checker20922_20969){
return (function plumbing$fnk$schema$compose_schemata(G__20923,G__20924){
var validate__18351__auto__ = true;
if(validate__18351__auto__){
var args__18352__auto___20970 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20923,G__20924], null);
var temp__4657__auto___20971 = (input_checker20921_20968.cljs$core$IFn$_invoke$arity$1 ? input_checker20921_20968.cljs$core$IFn$_invoke$arity$1(args__18352__auto___20970) : input_checker20921_20968.call(null,args__18352__auto___20970));
if(cljs.core.truth_(temp__4657__auto___20971)){
var error__18353__auto___20972 = temp__4657__auto___20971;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20972], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20920_20967,cljs.core.cst$kw$value,args__18352__auto___20970,cljs.core.cst$kw$error,error__18353__auto___20972], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var G__20951 = G__20923;
var vec__20953 = G__20951;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20953,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20953,(1),null);
var G__20952 = G__20924;
var vec__20956 = G__20952;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20956,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20956,(1),null);
var G__20951__$1 = G__20951;
var G__20952__$1 = G__20952;
while(true){
var vec__20959 = G__20951__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20959,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20959,(1),null);
var vec__20962 = G__20952__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20962,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20962,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__18351__auto__){
var temp__4657__auto___20973 = (output_checker20922_20969.cljs$core$IFn$_invoke$arity$1 ? output_checker20922_20969.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker20922_20969.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___20973)){
var error__18353__auto___20974 = temp__4657__auto___20973;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___20974], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20919_20966,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___20974], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___20965,output_schema20919_20966,input_schema20920_20967,input_checker20921_20968,output_checker20922_20969))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema20919_20966,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20920_20967], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___21137 = schema.utils.use_fn_validation;
var output_schema20975_21138 = schema.core.Any;
var input_schema20976_21139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(cljs.core.cst$sym$ks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null)], null)))], null);
var input_checker20977_21140 = schema.core.checker(input_schema20976_21139);
var output_checker20978_21141 = schema.core.checker(output_schema20975_21138);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141){
return (function plumbing$fnk$schema$split_schema(G__20979,G__20980){
var validate__18351__auto__ = ufv___21137.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___21142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20979,G__20980], null);
var temp__4657__auto___21143 = (input_checker20977_21140.cljs$core$IFn$_invoke$arity$1 ? input_checker20977_21140.cljs$core$IFn$_invoke$arity$1(args__18352__auto___21142) : input_checker20977_21140.call(null,args__18352__auto___21142));
if(cljs.core.truth_(temp__4657__auto___21143)){
var error__18353__auto___21144 = temp__4657__auto___21143;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___21144], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema20976_21139,cljs.core.cst$kw$value,args__18352__auto___21142,cljs.core.cst$kw$error,error__18353__auto___21144], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var s = G__20979;
var ks = G__20980;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__7184__auto__ = ((function (ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141){
return (function plumbing$fnk$schema$split_schema_$_iter__21059(s__21060){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141){
return (function (){
var s__21060__$1 = s__21060;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21060__$1);
if(temp__4657__auto__){
var s__21060__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21060__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21060__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21062 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21061 = (0);
while(true){
if((i__21061 < size__7183__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21061);
cljs.core.chunk_append(b__21062,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (i__21061,in_QMARK_,c__7182__auto__,size__7183__auto__,b__21062,s__21060__$2,temp__4657__auto__,ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141){
return (function plumbing$fnk$schema$split_schema_$_iter__21059_$_iter__21101(s__21102){
return (new cljs.core.LazySeq(null,((function (i__21061,in_QMARK_,c__7182__auto__,size__7183__auto__,b__21062,s__21060__$2,temp__4657__auto__,ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141){
return (function (){
var s__21102__$1 = s__21102;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__21102__$1);
if(temp__4657__auto____$1){
var s__21102__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21102__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__21102__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__21104 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__21103 = (0);
while(true){
if((i__21103 < size__7183__auto____$1)){
var vec__21113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__21103);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21113,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append(b__21104,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21145 = (i__21103 + (1));
i__21103 = G__21145;
continue;
} else {
var G__21146 = (i__21103 + (1));
i__21103 = G__21146;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21104),plumbing$fnk$schema$split_schema_$_iter__21059_$_iter__21101(cljs.core.chunk_rest(s__21102__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21104),null);
}
} else {
var vec__21116 = cljs.core.first(s__21102__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21116,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21116,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__21059_$_iter__21101(cljs.core.rest(s__21102__$2)));
} else {
var G__21147 = cljs.core.rest(s__21102__$2);
s__21102__$1 = G__21147;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__21061,in_QMARK_,c__7182__auto__,size__7183__auto__,b__21062,s__21060__$2,temp__4657__auto__,ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141))
,null,null));
});})(i__21061,in_QMARK_,c__7182__auto__,size__7183__auto__,b__21062,s__21060__$2,temp__4657__auto__,ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141))
;
return iter__7184__auto__(s);
})()));

var G__21148 = (i__21061 + (1));
i__21061 = G__21148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21062),plumbing$fnk$schema$split_schema_$_iter__21059(cljs.core.chunk_rest(s__21060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21062),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__21060__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (in_QMARK_,s__21060__$2,temp__4657__auto__,ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141){
return (function plumbing$fnk$schema$split_schema_$_iter__21059_$_iter__21119(s__21120){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21060__$2,temp__4657__auto__,ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141){
return (function (){
var s__21120__$1 = s__21120;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__21120__$1);
if(temp__4657__auto____$1){
var s__21120__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21120__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21120__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21122 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21121 = (0);
while(true){
if((i__21121 < size__7183__auto__)){
var vec__21131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21121);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21131,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21131,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append(b__21122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21149 = (i__21121 + (1));
i__21121 = G__21149;
continue;
} else {
var G__21150 = (i__21121 + (1));
i__21121 = G__21150;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21122),plumbing$fnk$schema$split_schema_$_iter__21059_$_iter__21119(cljs.core.chunk_rest(s__21120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21122),null);
}
} else {
var vec__21134 = cljs.core.first(s__21120__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21134,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21134,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__21059_$_iter__21119(cljs.core.rest(s__21120__$2)));
} else {
var G__21151 = cljs.core.rest(s__21120__$2);
s__21120__$1 = G__21151;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__21060__$2,temp__4657__auto__,ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141))
,null,null));
});})(in_QMARK_,s__21060__$2,temp__4657__auto__,ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141))
;
return iter__7184__auto__(s);
})()),plumbing$fnk$schema$split_schema_$_iter__21059(cljs.core.rest(s__21060__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141))
,null,null));
});})(ks__$1,validate__18351__auto__,ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141))
;
return iter__7184__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___21152 = (output_checker20978_21141.cljs$core$IFn$_invoke$arity$1 ? output_checker20978_21141.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker20978_21141.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___21152)){
var error__18353__auto___21153 = temp__4657__auto___21152;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___21153], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema20975_21138,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___21153], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___21137,output_schema20975_21138,input_schema20976_21139,input_checker20977_21140,output_checker20978_21141))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema20975_21138,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20976_21139], null)));
var ufv___21224 = schema.utils.use_fn_validation;
var output_schema21154_21225 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema21155_21226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),cljs.core.cst$sym$arg1)], null);
var input_checker21156_21227 = schema.core.checker(input_schema21155_21226);
var output_checker21157_21228 = schema.core.checker(output_schema21154_21225);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21224,output_schema21154_21225,input_schema21155_21226,input_checker21156_21227,output_checker21157_21228){
return (function plumbing$fnk$schema$sequence_schemata(G__21158,G__21159){
var validate__18351__auto__ = ufv___21224.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___21229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21158,G__21159], null);
var temp__4657__auto___21230 = (input_checker21156_21227.cljs$core$IFn$_invoke$arity$1 ? input_checker21156_21227.cljs$core$IFn$_invoke$arity$1(args__18352__auto___21229) : input_checker21156_21227.call(null,args__18352__auto___21229));
if(cljs.core.truth_(temp__4657__auto___21230)){
var error__18353__auto___21231 = temp__4657__auto___21230;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___21231], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21155_21226,cljs.core.cst$kw$value,args__18352__auto___21229,cljs.core.cst$kw$error,error__18353__auto___21231], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var G__21201 = G__21158;
var vec__21203 = G__21201;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21203,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21203,(1),null);
var G__21202 = G__21159;
var vec__21206 = G__21202;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21206,(0),null);
var vec__21209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21206,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21209,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21209,(1),null);
var G__21201__$1 = G__21201;
var G__21202__$1 = G__21202;
while(true){
var vec__21212 = G__21201__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21212,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21212,(1),null);
var vec__21215 = G__21202__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21215,(0),null);
var vec__21218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21215,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21218,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21218,(1),null);
if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__21221 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21221,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21221,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___21232 = (output_checker21157_21228.cljs$core$IFn$_invoke$arity$1 ? output_checker21157_21228.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker21157_21228.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___21232)){
var error__18353__auto___21233 = temp__4657__auto___21232;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___21233], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21154_21225,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___21233], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___21224,output_schema21154_21225,input_schema21155_21226,input_checker21156_21227,output_checker21157_21228))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema21154_21225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21155_21226], null)));
