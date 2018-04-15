// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('starfreighter.app');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('starfreighter.game');
goog.require('om_tools.core');
goog.require('starfreighter.desc');
goog.require('starfreighter.db');
goog.require('starfreighter.util');
goog.require('om.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(typeof starfreighter.app.app_state !== 'undefined'){
} else {
starfreighter.app.app_state = (function (){var G__23255 = starfreighter.game.restart_game();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23255) : cljs.core.atom.call(null,G__23255));
})();
}

var ufv___23275 = schema.utils.use_fn_validation;
var output_schema23258_23276 = schema.core.Any;
var input_schema23259_23277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23260_23278 = schema.core.checker(input_schema23259_23277);
var output_checker23261_23279 = schema.core.checker(output_schema23258_23276);
/**
 * Inputs: [data owner]
 */
starfreighter.app.info_link = ((function (ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279){
return (function starfreighter$app$info_link(G__23262,G__23263){
var validate__18351__auto__ = ufv___23275.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23262,G__23263], null);
var temp__4657__auto___23281 = (input_checker23260_23278.cljs$core$IFn$_invoke$arity$1 ? input_checker23260_23278.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23280) : input_checker23260_23278.call(null,args__18352__auto___23280));
if(cljs.core.truth_(temp__4657__auto___23281)){
var error__18353__auto___23282 = temp__4657__auto___23281;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$info_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23282], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23259_23277,cljs.core.cst$kw$value,args__18352__auto___23280,cljs.core.cst$kw$error,error__18353__auto___23282], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23262;
var owner = G__23263;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23268 = (function (output_schema23258,input_checker23260,owner,data,G__23263,output_checker23261,validate__18351__auto__,G__23262,info_link,input_schema23259,ufv__,meta23269){
this.output_schema23258 = output_schema23258;
this.input_checker23260 = input_checker23260;
this.owner = owner;
this.data = data;
this.G__23263 = G__23263;
this.output_checker23261 = output_checker23261;
this.validate__18351__auto__ = validate__18351__auto__;
this.G__23262 = G__23262;
this.info_link = info_link;
this.input_schema23259 = input_schema23259;
this.ufv__ = ufv__;
this.meta23269 = meta23269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279){
return (function (_23270,meta23269__$1){
var self__ = this;
var _23270__$1 = this;
return (new starfreighter.app.t_starfreighter$app23268(self__.output_schema23258,self__.input_checker23260,self__.owner,self__.data,self__.G__23263,self__.output_checker23261,self__.validate__18351__auto__,self__.G__23262,self__.info_link,self__.input_schema23259,self__.ufv__,meta23269__$1));
});})(validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279))
;

starfreighter.app.t_starfreighter$app23268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279){
return (function (_23270){
var self__ = this;
var _23270__$1 = this;
return self__.meta23269;
});})(validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279))
;

starfreighter.app.t_starfreighter$app23268.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23268.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279){
return (function (_){
var self__ = this;
var ___$1 = this;
return "info-link";
});})(validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279))
;

starfreighter.app.t_starfreighter$app23268.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23268.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279){
return (function (_){
var self__ = this;
var ___$1 = this;
var linked = (function (){var G__23271 = self__.data;
if(cljs.core.sequential_QMARK_(self__.data)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(starfreighter.app.app_state) : cljs.core.deref.call(null,starfreighter.app.app_state)),G__23271);
} else {
return G__23271;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.a,({"className": "info-link", "onClick": om_tools.dom.format_opts(((function (linked,___$1,validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279){
return (function (p1__23256_SHARP_){
p1__23256_SHARP_.stopPropagation();

return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.root_cursor(starfreighter.app.app_state),cljs.core.cst$kw$info_DASH_target,linked);
});})(linked,___$1,validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(linked)],null))));
});})(validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279))
;

starfreighter.app.t_starfreighter$app23268.getBasis = ((function (validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema23258,cljs.core.cst$sym$input_DASH_checker23260,cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.with_meta(cljs.core.cst$sym$G__23263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker23261,cljs.core.cst$sym$validate__18351__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__23262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$info_DASH_link,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23258,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23259], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$input_DASH_schema23259,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta23269], null);
});})(validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279))
;

starfreighter.app.t_starfreighter$app23268.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23268.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23268";

starfreighter.app.t_starfreighter$app23268.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23268");
});})(validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279))
;

starfreighter.app.__GT_t_starfreighter$app23268 = ((function (validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279){
return (function starfreighter$app$info_link_$___GT_t_starfreighter$app23268(output_schema23258__$1,input_checker23260__$1,owner__$1,data__$1,G__23263__$1,output_checker23261__$1,validate__18351__auto____$1,G__23262__$1,info_link__$1,input_schema23259__$1,ufv____$1,meta23269){
return (new starfreighter.app.t_starfreighter$app23268(output_schema23258__$1,input_checker23260__$1,owner__$1,data__$1,G__23263__$1,output_checker23261__$1,validate__18351__auto____$1,G__23262__$1,info_link__$1,input_schema23259__$1,ufv____$1,meta23269));
});})(validate__18351__auto__,ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279))
;

}

return (new starfreighter.app.t_starfreighter$app23268(output_schema23258_23276,input_checker23260_23278,owner,data,G__23263,output_checker23261_23279,validate__18351__auto__,G__23262,starfreighter$app$info_link,input_schema23259_23277,ufv___23275,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23283 = (output_checker23261_23279.cljs$core$IFn$_invoke$arity$1 ? output_checker23261_23279.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23261_23279.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23283)){
var error__18353__auto___23284 = temp__4657__auto___23283;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$info_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23284], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23258_23276,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23284], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23275,output_schema23258_23276,input_schema23259_23277,input_checker23260_23278,output_checker23261_23279))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.info_link),schema.core.make_fn_schema(output_schema23258_23276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23259_23277], null)));

starfreighter.app.__GT_info_link = (function starfreighter$app$__GT_info_link(var_args){
var args23272 = [];
var len__7479__auto___23285 = arguments.length;
var i__7480__auto___23286 = (0);
while(true){
if((i__7480__auto___23286 < len__7479__auto___23285)){
args23272.push((arguments[i__7480__auto___23286]));

var G__23287 = (i__7480__auto___23286 + (1));
i__7480__auto___23286 = G__23287;
continue;
} else {
}
break;
}

var G__23274 = args23272.length;
switch (G__23274) {
case 1:
return starfreighter.app.__GT_info_link.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_info_link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23272.length)].join('')));

}
});

starfreighter.app.__GT_info_link.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.info_link,cursor__23200__auto__);
});

starfreighter.app.__GT_info_link.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23257){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.info_link,cursor__23200__auto__,m23257);
});

starfreighter.app.__GT_info_link.cljs$lang$maxFixedArity = 2;


var ufv___23309 = schema.utils.use_fn_validation;
var output_schema23290_23310 = schema.core.Any;
var input_schema23291_23311 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23292_23312 = schema.core.checker(input_schema23291_23311);
var output_checker23293_23313 = schema.core.checker(output_schema23290_23310);
/**
 * Inputs: [data owner]
 */
starfreighter.app.content_span = ((function (ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313){
return (function starfreighter$app$content_span(G__23294,G__23295){
var validate__18351__auto__ = ufv___23309.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23294,G__23295], null);
var temp__4657__auto___23315 = (input_checker23292_23312.cljs$core$IFn$_invoke$arity$1 ? input_checker23292_23312.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23314) : input_checker23292_23312.call(null,args__18352__auto___23314));
if(cljs.core.truth_(temp__4657__auto___23315)){
var error__18353__auto___23316 = temp__4657__auto___23315;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$content_DASH_span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23316], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23291_23311,cljs.core.cst$kw$value,args__18352__auto___23314,cljs.core.cst$kw$error,error__18353__auto___23316], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23294;
var owner = G__23295;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23301 = (function (owner,output_checker23293,data,validate__18351__auto__,G__23294,G__23295,input_schema23291,input_checker23292,content_span,output_schema23290,ufv__,meta23302){
this.owner = owner;
this.output_checker23293 = output_checker23293;
this.data = data;
this.validate__18351__auto__ = validate__18351__auto__;
this.G__23294 = G__23294;
this.G__23295 = G__23295;
this.input_schema23291 = input_schema23291;
this.input_checker23292 = input_checker23292;
this.content_span = content_span;
this.output_schema23290 = output_schema23290;
this.ufv__ = ufv__;
this.meta23302 = meta23302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313){
return (function (_23303,meta23302__$1){
var self__ = this;
var _23303__$1 = this;
return (new starfreighter.app.t_starfreighter$app23301(self__.owner,self__.output_checker23293,self__.data,self__.validate__18351__auto__,self__.G__23294,self__.G__23295,self__.input_schema23291,self__.input_checker23292,self__.content_span,self__.output_schema23290,self__.ufv__,meta23302__$1));
});})(validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313))
;

starfreighter.app.t_starfreighter$app23301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313){
return (function (_23303){
var self__ = this;
var _23303__$1 = this;
return self__.meta23302;
});})(validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313))
;

starfreighter.app.t_starfreighter$app23301.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23301.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313){
return (function (_){
var self__ = this;
var ___$1 = this;
return "content-span";
});})(validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313))
;

starfreighter.app.t_starfreighter$app23301.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23301.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(self__.data)){
var G__23304 = (((cljs.core.first(self__.data) instanceof cljs.core.Keyword))?cljs.core.first(self__.data).fqn:null);
switch (G__23304) {
case "cash":
var amount = cljs.core.second(self__.data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": om_tools.dom.format_opts([cljs.core.str("cash-value "),cljs.core.str((((amount < (0)))?"neg":"pos"))].join(''))}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__23305 = cljs.core.second(self__.data);
return Math.abs(G__23305);
})()],null))));

break;
case "subject":
return om_tools.dom.element(React.DOM.strong,om.core.build_all.cljs$core$IFn$_invoke$arity$2(self__.content_span,cljs.core.rest(self__.data)),cljs.core.PersistentVector.EMPTY);

break;
case "link":
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.info_link,cljs.core.second(self__.data));

break;
default:
return om_tools.dom.element(React.DOM.span,om.core.build_all.cljs$core$IFn$_invoke$arity$2(self__.content_span,self__.data),cljs.core.PersistentVector.EMPTY);

}
} else {
return om_tools.dom.element(React.DOM.span,self__.data,cljs.core.PersistentVector.EMPTY);
}
});})(validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313))
;

starfreighter.app.t_starfreighter$app23301.getBasis = ((function (validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$output_DASH_checker23293,cljs.core.cst$sym$data,cljs.core.cst$sym$validate__18351__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__23294,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__23295,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema23291,cljs.core.cst$sym$input_DASH_checker23292,cljs.core.with_meta(cljs.core.cst$sym$content_DASH_span,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23290,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23291], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$output_DASH_schema23290,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta23302], null);
});})(validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313))
;

starfreighter.app.t_starfreighter$app23301.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23301.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23301";

starfreighter.app.t_starfreighter$app23301.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23301");
});})(validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313))
;

starfreighter.app.__GT_t_starfreighter$app23301 = ((function (validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313){
return (function starfreighter$app$content_span_$___GT_t_starfreighter$app23301(owner__$1,output_checker23293__$1,data__$1,validate__18351__auto____$1,G__23294__$1,G__23295__$1,input_schema23291__$1,input_checker23292__$1,content_span__$1,output_schema23290__$1,ufv____$1,meta23302){
return (new starfreighter.app.t_starfreighter$app23301(owner__$1,output_checker23293__$1,data__$1,validate__18351__auto____$1,G__23294__$1,G__23295__$1,input_schema23291__$1,input_checker23292__$1,content_span__$1,output_schema23290__$1,ufv____$1,meta23302));
});})(validate__18351__auto__,ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313))
;

}

return (new starfreighter.app.t_starfreighter$app23301(owner,output_checker23293_23313,data,validate__18351__auto__,G__23294,G__23295,input_schema23291_23311,input_checker23292_23312,starfreighter$app$content_span,output_schema23290_23310,ufv___23309,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23318 = (output_checker23293_23313.cljs$core$IFn$_invoke$arity$1 ? output_checker23293_23313.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23293_23313.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23318)){
var error__18353__auto___23319 = temp__4657__auto___23318;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$content_DASH_span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23319], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23290_23310,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23319], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23309,output_schema23290_23310,input_schema23291_23311,input_checker23292_23312,output_checker23293_23313))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.content_span),schema.core.make_fn_schema(output_schema23290_23310,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23291_23311], null)));

starfreighter.app.__GT_content_span = (function starfreighter$app$__GT_content_span(var_args){
var args23306 = [];
var len__7479__auto___23320 = arguments.length;
var i__7480__auto___23321 = (0);
while(true){
if((i__7480__auto___23321 < len__7479__auto___23320)){
args23306.push((arguments[i__7480__auto___23321]));

var G__23322 = (i__7480__auto___23321 + (1));
i__7480__auto___23321 = G__23322;
continue;
} else {
}
break;
}

var G__23308 = args23306.length;
switch (G__23308) {
case 1:
return starfreighter.app.__GT_content_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_content_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23306.length)].join('')));

}
});

starfreighter.app.__GT_content_span.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.content_span,cursor__23200__auto__);
});

starfreighter.app.__GT_content_span.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23289){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.content_span,cursor__23200__auto__,m23289);
});

starfreighter.app.__GT_content_span.cljs$lang$maxFixedArity = 2;


var ufv___23346 = schema.utils.use_fn_validation;
var output_schema23325_23347 = schema.core.Any;
var input_schema23326_23348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23327_23349 = schema.core.checker(input_schema23326_23348);
var output_checker23328_23350 = schema.core.checker(output_schema23325_23347);
/**
 * Inputs: [data owner]
 */
starfreighter.app.card_view = ((function (ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350){
return (function starfreighter$app$card_view(G__23329,G__23330){
var validate__18351__auto__ = ufv___23346.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23329,G__23330], null);
var temp__4657__auto___23352 = (input_checker23327_23349.cljs$core$IFn$_invoke$arity$1 ? input_checker23327_23349.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23351) : input_checker23327_23349.call(null,args__18352__auto___23351));
if(cljs.core.truth_(temp__4657__auto___23352)){
var error__18353__auto___23353 = temp__4657__auto___23352;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$card_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23353], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23326_23348,cljs.core.cst$kw$value,args__18352__auto___23351,cljs.core.cst$kw$error,error__18353__auto___23353], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23329;
var owner = G__23330;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23337 = (function (owner,G__23329,input_checker23327,data,G__23330,output_checker23328,validate__18351__auto__,input_schema23326,card_view,output_schema23325,ufv__,meta23338){
this.owner = owner;
this.G__23329 = G__23329;
this.input_checker23327 = input_checker23327;
this.data = data;
this.G__23330 = G__23330;
this.output_checker23328 = output_checker23328;
this.validate__18351__auto__ = validate__18351__auto__;
this.input_schema23326 = input_schema23326;
this.card_view = card_view;
this.output_schema23325 = output_schema23325;
this.ufv__ = ufv__;
this.meta23338 = meta23338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350){
return (function (_23339,meta23338__$1){
var self__ = this;
var _23339__$1 = this;
return (new starfreighter.app.t_starfreighter$app23337(self__.owner,self__.G__23329,self__.input_checker23327,self__.data,self__.G__23330,self__.output_checker23328,self__.validate__18351__auto__,self__.input_schema23326,self__.card_view,self__.output_schema23325,self__.ufv__,meta23338__$1));
});})(validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350))
;

starfreighter.app.t_starfreighter$app23337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350){
return (function (_23339){
var self__ = this;
var _23339__$1 = this;
return self__.meta23338;
});})(validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350))
;

starfreighter.app.t_starfreighter$app23337.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23337.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350){
return (function (_){
var self__ = this;
var ___$1 = this;
return "card-view";
});})(validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350))
;

starfreighter.app.t_starfreighter$app23337.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23337.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "card"}),cljs.core.flatten((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var speaker = cljs.core.cst$kw$speaker.cljs$core$IFn$_invoke$arity$1(self__.data);
var role = (function (){var G__23340 = speaker;
var G__23340__$1 = (((G__23340 == null))?null:cljs.core.cst$kw$role.cljs$core$IFn$_invoke$arity$1(G__23340));
if((G__23340__$1 == null)){
return null;
} else {
return cljs.core.name(G__23340__$1);
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": om_tools.dom.format_opts([cljs.core.str("speaker "),cljs.core.str(role)].join(''))}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(role)?om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.info_link,speaker):cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(speaker))],null))));
})()," ",om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.content_span,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(self__.data)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.cst$kw$game_DASH_over))?(function (){var G__23341 = ({"className": "game-over"});
var G__23342 = "[Game Over]";
return React.DOM.p(G__23341,G__23342);
})():null)],null))));
});})(validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350))
;

starfreighter.app.t_starfreighter$app23337.getBasis = ((function (validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__23329,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker23327,cljs.core.cst$sym$data,cljs.core.with_meta(cljs.core.cst$sym$G__23330,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker23328,cljs.core.cst$sym$validate__18351__auto__,cljs.core.cst$sym$input_DASH_schema23326,cljs.core.with_meta(cljs.core.cst$sym$card_DASH_view,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23325,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23326], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$output_DASH_schema23325,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta23338], null);
});})(validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350))
;

starfreighter.app.t_starfreighter$app23337.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23337.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23337";

starfreighter.app.t_starfreighter$app23337.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23337");
});})(validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350))
;

starfreighter.app.__GT_t_starfreighter$app23337 = ((function (validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350){
return (function starfreighter$app$card_view_$___GT_t_starfreighter$app23337(owner__$1,G__23329__$1,input_checker23327__$1,data__$1,G__23330__$1,output_checker23328__$1,validate__18351__auto____$1,input_schema23326__$1,card_view__$1,output_schema23325__$1,ufv____$1,meta23338){
return (new starfreighter.app.t_starfreighter$app23337(owner__$1,G__23329__$1,input_checker23327__$1,data__$1,G__23330__$1,output_checker23328__$1,validate__18351__auto____$1,input_schema23326__$1,card_view__$1,output_schema23325__$1,ufv____$1,meta23338));
});})(validate__18351__auto__,ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350))
;

}

return (new starfreighter.app.t_starfreighter$app23337(owner,G__23329,input_checker23327_23349,data,G__23330,output_checker23328_23350,validate__18351__auto__,input_schema23326_23348,starfreighter$app$card_view,output_schema23325_23347,ufv___23346,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23354 = (output_checker23328_23350.cljs$core$IFn$_invoke$arity$1 ? output_checker23328_23350.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23328_23350.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23354)){
var error__18353__auto___23355 = temp__4657__auto___23354;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$card_DASH_view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23355], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23325_23347,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23355], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23346,output_schema23325_23347,input_schema23326_23348,input_checker23327_23349,output_checker23328_23350))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.card_view),schema.core.make_fn_schema(output_schema23325_23347,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23326_23348], null)));

starfreighter.app.__GT_card_view = (function starfreighter$app$__GT_card_view(var_args){
var args23343 = [];
var len__7479__auto___23356 = arguments.length;
var i__7480__auto___23357 = (0);
while(true){
if((i__7480__auto___23357 < len__7479__auto___23356)){
args23343.push((arguments[i__7480__auto___23357]));

var G__23358 = (i__7480__auto___23357 + (1));
i__7480__auto___23357 = G__23358;
continue;
} else {
}
break;
}

var G__23345 = args23343.length;
switch (G__23345) {
case 1:
return starfreighter.app.__GT_card_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_card_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23343.length)].join('')));

}
});

starfreighter.app.__GT_card_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.card_view,cursor__23200__auto__);
});

starfreighter.app.__GT_card_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23324){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.card_view,cursor__23200__auto__,m23324);
});

starfreighter.app.__GT_card_view.cljs$lang$maxFixedArity = 2;


var ufv___23389 = schema.utils.use_fn_validation;
var output_schema23362_23390 = schema.core.Any;
var input_schema23363_23391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23364_23392 = schema.core.checker(input_schema23363_23391);
var output_checker23365_23393 = schema.core.checker(output_schema23362_23390);
/**
 * Inputs: [data owner]
 */
starfreighter.app.choice_buttons = ((function (ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function starfreighter$app$choice_buttons(G__23366,G__23367){
var validate__18351__auto__ = ufv___23389.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23366,G__23367], null);
var temp__4657__auto___23395 = (input_checker23364_23392.cljs$core$IFn$_invoke$arity$1 ? input_checker23364_23392.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23394) : input_checker23364_23392.call(null,args__18352__auto___23394));
if(cljs.core.truth_(temp__4657__auto___23395)){
var error__18353__auto___23396 = temp__4657__auto___23395;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$choice_DASH_buttons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23396], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23363_23391,cljs.core.cst$kw$value,args__18352__auto___23394,cljs.core.cst$kw$error,error__18353__auto___23396], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23366;
var owner = G__23367;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23377 = (function (output_schema23362,input_checker23364,owner,data,validate__18351__auto__,input_schema23363,G__23366,output_checker23365,ufv__,G__23367,choice_buttons,meta23378){
this.output_schema23362 = output_schema23362;
this.input_checker23364 = input_checker23364;
this.owner = owner;
this.data = data;
this.validate__18351__auto__ = validate__18351__auto__;
this.input_schema23363 = input_schema23363;
this.G__23366 = G__23366;
this.output_checker23365 = output_checker23365;
this.ufv__ = ufv__;
this.G__23367 = G__23367;
this.choice_buttons = choice_buttons;
this.meta23378 = meta23378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (_23379,meta23378__$1){
var self__ = this;
var _23379__$1 = this;
return (new starfreighter.app.t_starfreighter$app23377(self__.output_schema23362,self__.input_checker23364,self__.owner,self__.data,self__.validate__18351__auto__,self__.input_schema23363,self__.G__23366,self__.output_checker23365,self__.ufv__,self__.G__23367,self__.choice_buttons,meta23378__$1));
});})(validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
;

starfreighter.app.t_starfreighter$app23377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (_23379){
var self__ = this;
var _23379__$1 = this;
return self__.meta23378;
});})(validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
;

starfreighter.app.t_starfreighter$app23377.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23377.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (_){
var self__ = this;
var ___$1 = this;
return "choice-buttons";
});})(validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
;

starfreighter.app.t_starfreighter$app23377.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23377.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "choices"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function starfreighter$app$choice_buttons_$_iter__23380(s__23381){
return (new cljs.core.LazySeq(null,((function (___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (){
var s__23381__$1 = s__23381;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23381__$1);
if(temp__4657__auto__){
var s__23381__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23381__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23381__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23383 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23382 = (0);
while(true){
if((i__23382 < size__7183__auto__)){
var choice = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23382);
cljs.core.chunk_append(b__23383,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "choice", "style": ({"background": om_tools.dom.format_opts(cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(choice))}), "onClick": om_tools.dom.format_opts(((function (i__23382,choice,c__7182__auto__,size__7183__auto__,b__23383,s__23381__$2,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (ev){
ev.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,((function (i__23382,choice,c__7182__auto__,size__7183__auto__,b__23383,s__23381__$2,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (p1__23360_SHARP_){
return starfreighter.game.handle_choice(p1__23360_SHARP_,cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(choice));
});})(i__23382,choice,c__7182__auto__,size__7183__auto__,b__23383,s__23381__$2,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
);
});})(i__23382,choice,c__7182__auto__,size__7183__auto__,b__23383,s__23381__$2,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(choice)],null)))));

var G__23397 = (i__23382 + (1));
i__23382 = G__23397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23383),starfreighter$app$choice_buttons_$_iter__23380(cljs.core.chunk_rest(s__23381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23383),null);
}
} else {
var choice = cljs.core.first(s__23381__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "choice", "style": ({"background": om_tools.dom.format_opts(cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(choice))}), "onClick": om_tools.dom.format_opts(((function (choice,s__23381__$2,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (ev){
ev.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,((function (choice,s__23381__$2,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (p1__23360_SHARP_){
return starfreighter.game.handle_choice(p1__23360_SHARP_,cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(choice));
});})(choice,s__23381__$2,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
);
});})(choice,s__23381__$2,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(choice)],null)))),starfreighter$app$choice_buttons_$_iter__23380(cljs.core.rest(s__23381__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
,null,null));
});})(___$1,validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
;
return iter__7184__auto__(cljs.core.cst$kw$choices.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$card.cljs$core$IFn$_invoke$arity$1(self__.data)));
})()],null))));
});})(validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
;

starfreighter.app.t_starfreighter$app23377.getBasis = ((function (validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema23362,cljs.core.cst$sym$input_DASH_checker23364,cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$validate__18351__auto__,cljs.core.cst$sym$input_DASH_schema23363,cljs.core.with_meta(cljs.core.cst$sym$G__23366,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker23365,cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$G__23367,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$choice_DASH_buttons,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23362,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23363], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$meta23378], null);
});})(validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
;

starfreighter.app.t_starfreighter$app23377.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23377.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23377";

starfreighter.app.t_starfreighter$app23377.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23377");
});})(validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
;

starfreighter.app.__GT_t_starfreighter$app23377 = ((function (validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393){
return (function starfreighter$app$choice_buttons_$___GT_t_starfreighter$app23377(output_schema23362__$1,input_checker23364__$1,owner__$1,data__$1,validate__18351__auto____$1,input_schema23363__$1,G__23366__$1,output_checker23365__$1,ufv____$1,G__23367__$1,choice_buttons__$1,meta23378){
return (new starfreighter.app.t_starfreighter$app23377(output_schema23362__$1,input_checker23364__$1,owner__$1,data__$1,validate__18351__auto____$1,input_schema23363__$1,G__23366__$1,output_checker23365__$1,ufv____$1,G__23367__$1,choice_buttons__$1,meta23378));
});})(validate__18351__auto__,ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
;

}

return (new starfreighter.app.t_starfreighter$app23377(output_schema23362_23390,input_checker23364_23392,owner,data,validate__18351__auto__,input_schema23363_23391,G__23366,output_checker23365_23393,ufv___23389,G__23367,starfreighter$app$choice_buttons,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23398 = (output_checker23365_23393.cljs$core$IFn$_invoke$arity$1 ? output_checker23365_23393.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23365_23393.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23398)){
var error__18353__auto___23399 = temp__4657__auto___23398;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$choice_DASH_buttons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23399], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23362_23390,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23399], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23389,output_schema23362_23390,input_schema23363_23391,input_checker23364_23392,output_checker23365_23393))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.choice_buttons),schema.core.make_fn_schema(output_schema23362_23390,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23363_23391], null)));

starfreighter.app.__GT_choice_buttons = (function starfreighter$app$__GT_choice_buttons(var_args){
var args23386 = [];
var len__7479__auto___23400 = arguments.length;
var i__7480__auto___23401 = (0);
while(true){
if((i__7480__auto___23401 < len__7479__auto___23400)){
args23386.push((arguments[i__7480__auto___23401]));

var G__23402 = (i__7480__auto___23401 + (1));
i__7480__auto___23401 = G__23402;
continue;
} else {
}
break;
}

var G__23388 = args23386.length;
switch (G__23388) {
case 1:
return starfreighter.app.__GT_choice_buttons.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_choice_buttons.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23386.length)].join('')));

}
});

starfreighter.app.__GT_choice_buttons.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.choice_buttons,cursor__23200__auto__);
});

starfreighter.app.__GT_choice_buttons.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23361){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.choice_buttons,cursor__23200__auto__,m23361);
});

starfreighter.app.__GT_choice_buttons.cljs$lang$maxFixedArity = 2;

starfreighter.app.mood__GT_icon = (function starfreighter$app$mood__GT_icon(mood){
return starfreighter.util.bucket(mood,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),"\uD83D\uDE21"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),"\uD83D\uDE12"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),"\uD83D\uDE10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),"\uD83D\uDE42"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),"\uD83D\uDE03"], null)], null));
});
starfreighter.app.trait__GT_icon = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$fighter,"\uD83D\uDC4A",cljs.core.cst$kw$medic,"\uD83D\uDC8A",cljs.core.cst$kw$mechanic,"\uD83D\uDD27",cljs.core.cst$kw$unconscious,"\uD83D\uDE35",cljs.core.cst$kw$injured,"\uD83E\uDD15",cljs.core.cst$kw$sick,"\uD83E\uDD12"], null);

var ufv___23420 = schema.utils.use_fn_validation;
var output_schema23405_23421 = schema.core.Any;
var input_schema23406_23422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23407_23423 = schema.core.checker(input_schema23406_23422);
var output_checker23408_23424 = schema.core.checker(output_schema23405_23421);
/**
 * Inputs: [data owner]
 */
starfreighter.app.status_bar = ((function (ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424){
return (function starfreighter$app$status_bar(G__23409,G__23410){
var validate__18351__auto__ = ufv___23420.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23409,G__23410], null);
var temp__4657__auto___23426 = (input_checker23407_23423.cljs$core$IFn$_invoke$arity$1 ? input_checker23407_23423.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23425) : input_checker23407_23423.call(null,args__18352__auto___23425));
if(cljs.core.truth_(temp__4657__auto___23426)){
var error__18353__auto___23427 = temp__4657__auto___23426;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$status_DASH_bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23427], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23406_23422,cljs.core.cst$kw$value,args__18352__auto___23425,cljs.core.cst$kw$error,error__18353__auto___23427], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23409;
var owner = G__23410;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23414 = (function (output_checker23408,input_checker23407,owner,output_schema23405,data,G__23409,validate__18351__auto__,G__23410,input_schema23406,status_bar,ufv__,meta23415){
this.output_checker23408 = output_checker23408;
this.input_checker23407 = input_checker23407;
this.owner = owner;
this.output_schema23405 = output_schema23405;
this.data = data;
this.G__23409 = G__23409;
this.validate__18351__auto__ = validate__18351__auto__;
this.G__23410 = G__23410;
this.input_schema23406 = input_schema23406;
this.status_bar = status_bar;
this.ufv__ = ufv__;
this.meta23415 = meta23415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424){
return (function (_23416,meta23415__$1){
var self__ = this;
var _23416__$1 = this;
return (new starfreighter.app.t_starfreighter$app23414(self__.output_checker23408,self__.input_checker23407,self__.owner,self__.output_schema23405,self__.data,self__.G__23409,self__.validate__18351__auto__,self__.G__23410,self__.input_schema23406,self__.status_bar,self__.ufv__,meta23415__$1));
});})(validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424))
;

starfreighter.app.t_starfreighter$app23414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424){
return (function (_23416){
var self__ = this;
var _23416__$1 = this;
return self__.meta23415;
});})(validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424))
;

starfreighter.app.t_starfreighter$app23414.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23414.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424){
return (function (_){
var self__ = this;
var ___$1 = this;
return "status-bar";
});})(validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424))
;

starfreighter.app.t_starfreighter$app23414.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23414.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "status-bar"}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "status cash"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cash.cljs$core$IFn$_invoke$arity$1(self__.data)],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "status ship"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ship.cljs$core$IFn$_invoke$arity$1(self__.data)],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "status mood"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[starfreighter.app.mood__GT_icon(starfreighter.db.avg_crew_mood(self__.data))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": om_tools.dom.format_opts([cljs.core.str("status here "),cljs.core.str(cljs.core.name(cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$travel.cljs$core$IFn$_invoke$arity$1(self__.data))))].join(''))}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.info_link,(cljs.core.truth_((starfreighter.db.in_transit_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.in_transit_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.data) : starfreighter.db.in_transit_QMARK_.call(null,self__.data)))?starfreighter.db.current_dest(self__.data):starfreighter.db.current_place(self__.data)))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "status time"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$turn.cljs$core$IFn$_invoke$arity$1(self__.data)],null))))],null))));
});})(validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424))
;

starfreighter.app.t_starfreighter$app23414.getBasis = ((function (validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_checker23408,cljs.core.cst$sym$input_DASH_checker23407,cljs.core.cst$sym$owner,cljs.core.cst$sym$output_DASH_schema23405,cljs.core.cst$sym$data,cljs.core.with_meta(cljs.core.cst$sym$G__23409,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__18351__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__23410,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema23406,cljs.core.with_meta(cljs.core.cst$sym$status_DASH_bar,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23406], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta23415], null);
});})(validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424))
;

starfreighter.app.t_starfreighter$app23414.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23414.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23414";

starfreighter.app.t_starfreighter$app23414.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23414");
});})(validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424))
;

starfreighter.app.__GT_t_starfreighter$app23414 = ((function (validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424){
return (function starfreighter$app$status_bar_$___GT_t_starfreighter$app23414(output_checker23408__$1,input_checker23407__$1,owner__$1,output_schema23405__$1,data__$1,G__23409__$1,validate__18351__auto____$1,G__23410__$1,input_schema23406__$1,status_bar__$1,ufv____$1,meta23415){
return (new starfreighter.app.t_starfreighter$app23414(output_checker23408__$1,input_checker23407__$1,owner__$1,output_schema23405__$1,data__$1,G__23409__$1,validate__18351__auto____$1,G__23410__$1,input_schema23406__$1,status_bar__$1,ufv____$1,meta23415));
});})(validate__18351__auto__,ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424))
;

}

return (new starfreighter.app.t_starfreighter$app23414(output_checker23408_23424,input_checker23407_23423,owner,output_schema23405_23421,data,G__23409,validate__18351__auto__,G__23410,input_schema23406_23422,starfreighter$app$status_bar,ufv___23420,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23428 = (output_checker23408_23424.cljs$core$IFn$_invoke$arity$1 ? output_checker23408_23424.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23408_23424.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23428)){
var error__18353__auto___23429 = temp__4657__auto___23428;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$status_DASH_bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23429], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23405_23421,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23429], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23420,output_schema23405_23421,input_schema23406_23422,input_checker23407_23423,output_checker23408_23424))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.status_bar),schema.core.make_fn_schema(output_schema23405_23421,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23406_23422], null)));

starfreighter.app.__GT_status_bar = (function starfreighter$app$__GT_status_bar(var_args){
var args23417 = [];
var len__7479__auto___23430 = arguments.length;
var i__7480__auto___23431 = (0);
while(true){
if((i__7480__auto___23431 < len__7479__auto___23430)){
args23417.push((arguments[i__7480__auto___23431]));

var G__23432 = (i__7480__auto___23431 + (1));
i__7480__auto___23431 = G__23432;
continue;
} else {
}
break;
}

var G__23419 = args23417.length;
switch (G__23419) {
case 1:
return starfreighter.app.__GT_status_bar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_status_bar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23417.length)].join('')));

}
});

starfreighter.app.__GT_status_bar.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.status_bar,cursor__23200__auto__);
});

starfreighter.app.__GT_status_bar.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23404){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.status_bar,cursor__23200__auto__,m23404);
});

starfreighter.app.__GT_status_bar.cljs$lang$maxFixedArity = 2;


var ufv___23458 = schema.utils.use_fn_validation;
var output_schema23435_23459 = schema.core.Any;
var input_schema23436_23460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23437_23461 = schema.core.checker(input_schema23436_23460);
var output_checker23438_23462 = schema.core.checker(output_schema23435_23459);
/**
 * Inputs: [data owner]
 */
starfreighter.app.slot_details = ((function (ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462){
return (function starfreighter$app$slot_details(G__23439,G__23440){
var validate__18351__auto__ = ufv___23458.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23439,G__23440], null);
var temp__4657__auto___23464 = (input_checker23437_23461.cljs$core$IFn$_invoke$arity$1 ? input_checker23437_23461.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23463) : input_checker23437_23461.call(null,args__18352__auto___23463));
if(cljs.core.truth_(temp__4657__auto___23464)){
var error__18353__auto___23465 = temp__4657__auto___23464;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$slot_DASH_details,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23465], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23436_23460,cljs.core.cst$kw$value,args__18352__auto___23463,cljs.core.cst$kw$error,error__18353__auto___23465], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23439;
var owner = G__23440;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23448 = (function (owner,data,G__23439,output_checker23438,validate__18351__auto__,input_schema23436,G__23440,input_checker23437,slot_details,output_schema23435,ufv__,meta23449){
this.owner = owner;
this.data = data;
this.G__23439 = G__23439;
this.output_checker23438 = output_checker23438;
this.validate__18351__auto__ = validate__18351__auto__;
this.input_schema23436 = input_schema23436;
this.G__23440 = G__23440;
this.input_checker23437 = input_checker23437;
this.slot_details = slot_details;
this.output_schema23435 = output_schema23435;
this.ufv__ = ufv__;
this.meta23449 = meta23449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462){
return (function (_23450,meta23449__$1){
var self__ = this;
var _23450__$1 = this;
return (new starfreighter.app.t_starfreighter$app23448(self__.owner,self__.data,self__.G__23439,self__.output_checker23438,self__.validate__18351__auto__,self__.input_schema23436,self__.G__23440,self__.input_checker23437,self__.slot_details,self__.output_schema23435,self__.ufv__,meta23449__$1));
});})(validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462))
;

starfreighter.app.t_starfreighter$app23448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462){
return (function (_23450){
var self__ = this;
var _23450__$1 = this;
return self__.meta23449;
});})(validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462))
;

starfreighter.app.t_starfreighter$app23448.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23448.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462){
return (function (_){
var self__ = this;
var ___$1 = this;
return "slot-details";
});})(validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462))
;

starfreighter.app.t_starfreighter$app23448.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23448.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "details"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var traits = cljs.core.cst$kw$traits.cljs$core$IFn$_invoke$arity$1(self__.data);
var mood = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.cst$kw$char))?starfreighter.app.mood__GT_icon(starfreighter.db.calc_mood(self__.data)):null);
var dest = cljs.core.cst$kw$destination.cljs$core$IFn$_invoke$arity$1(self__.data);
var cash = (function (){var or__6404__auto__ = cljs.core.cst$kw$pay_DASH_after.cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.cst$kw$price.cljs$core$IFn$_invoke$arity$1(self__.data);
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "mood"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[mood],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "traits"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(starfreighter.app.trait__GT_icon,traits))],null)))),(cljs.core.truth_(dest)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "dest"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_((function (){var or__6404__auto__ = mood;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return traits;
}
})())?" ":null),(function (){var G__23451 = ({"className": "dest-icon"});
var G__23452 = "\u27A1\uFE0F ";
return React.DOM.span(G__23451,G__23452);
})(),om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.info_link,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$places,dest], null))],null)))):null),(cljs.core.truth_(cash)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "pay"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_((function (){var or__6404__auto__ = mood;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = traits;
if(cljs.core.truth_(or__6404__auto____$1)){
return or__6404__auto____$1;
} else {
return dest;
}
}
})())?" ":null),(function (){var G__23453 = ({"className": "pay-icon"});
var G__23454 = "\uD83D\uDCB0";
return React.DOM.span(G__23453,G__23454);
})(),cash],null)))):null)," "],null))));
})()],null))));
});})(validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462))
;

starfreighter.app.t_starfreighter$app23448.getBasis = ((function (validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.with_meta(cljs.core.cst$sym$G__23439,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker23438,cljs.core.cst$sym$validate__18351__auto__,cljs.core.cst$sym$input_DASH_schema23436,cljs.core.with_meta(cljs.core.cst$sym$G__23440,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_checker23437,cljs.core.with_meta(cljs.core.cst$sym$slot_DASH_details,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23435,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23436], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$output_DASH_schema23435,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta23449], null);
});})(validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462))
;

starfreighter.app.t_starfreighter$app23448.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23448.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23448";

starfreighter.app.t_starfreighter$app23448.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23448");
});})(validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462))
;

starfreighter.app.__GT_t_starfreighter$app23448 = ((function (validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462){
return (function starfreighter$app$slot_details_$___GT_t_starfreighter$app23448(owner__$1,data__$1,G__23439__$1,output_checker23438__$1,validate__18351__auto____$1,input_schema23436__$1,G__23440__$1,input_checker23437__$1,slot_details__$1,output_schema23435__$1,ufv____$1,meta23449){
return (new starfreighter.app.t_starfreighter$app23448(owner__$1,data__$1,G__23439__$1,output_checker23438__$1,validate__18351__auto____$1,input_schema23436__$1,G__23440__$1,input_checker23437__$1,slot_details__$1,output_schema23435__$1,ufv____$1,meta23449));
});})(validate__18351__auto__,ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462))
;

}

return (new starfreighter.app.t_starfreighter$app23448(owner,data,G__23439,output_checker23438_23462,validate__18351__auto__,input_schema23436_23460,G__23440,input_checker23437_23461,starfreighter$app$slot_details,output_schema23435_23459,ufv___23458,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23466 = (output_checker23438_23462.cljs$core$IFn$_invoke$arity$1 ? output_checker23438_23462.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23438_23462.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23466)){
var error__18353__auto___23467 = temp__4657__auto___23466;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$slot_DASH_details,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23467], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23435_23459,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23467], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23458,output_schema23435_23459,input_schema23436_23460,input_checker23437_23461,output_checker23438_23462))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.slot_details),schema.core.make_fn_schema(output_schema23435_23459,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23436_23460], null)));

starfreighter.app.__GT_slot_details = (function starfreighter$app$__GT_slot_details(var_args){
var args23455 = [];
var len__7479__auto___23468 = arguments.length;
var i__7480__auto___23469 = (0);
while(true){
if((i__7480__auto___23469 < len__7479__auto___23468)){
args23455.push((arguments[i__7480__auto___23469]));

var G__23470 = (i__7480__auto___23469 + (1));
i__7480__auto___23469 = G__23470;
continue;
} else {
}
break;
}

var G__23457 = args23455.length;
switch (G__23457) {
case 1:
return starfreighter.app.__GT_slot_details.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_slot_details.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23455.length)].join('')));

}
});

starfreighter.app.__GT_slot_details.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.slot_details,cursor__23200__auto__);
});

starfreighter.app.__GT_slot_details.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23434){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.slot_details,cursor__23200__auto__,m23434);
});

starfreighter.app.__GT_slot_details.cljs$lang$maxFixedArity = 2;


var ufv___23488 = schema.utils.use_fn_validation;
var output_schema23473_23489 = schema.core.Any;
var input_schema23474_23490 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23475_23491 = schema.core.checker(input_schema23474_23490);
var output_checker23476_23492 = schema.core.checker(output_schema23473_23489);
/**
 * Inputs: [data owner]
 */
starfreighter.app.slot = ((function (ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492){
return (function starfreighter$app$slot(G__23477,G__23478){
var validate__18351__auto__ = ufv___23488.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23477,G__23478], null);
var temp__4657__auto___23494 = (input_checker23475_23491.cljs$core$IFn$_invoke$arity$1 ? input_checker23475_23491.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23493) : input_checker23475_23491.call(null,args__18352__auto___23493));
if(cljs.core.truth_(temp__4657__auto___23494)){
var error__18353__auto___23495 = temp__4657__auto___23494;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$slot,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23495], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23474_23490,cljs.core.cst$kw$value,args__18352__auto___23493,cljs.core.cst$kw$error,error__18353__auto___23495], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23477;
var owner = G__23478;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23482 = (function (owner,G__23477,data,input_schema23474,slot,output_checker23476,validate__18351__auto__,G__23478,output_schema23473,input_checker23475,ufv__,meta23483){
this.owner = owner;
this.G__23477 = G__23477;
this.data = data;
this.input_schema23474 = input_schema23474;
this.slot = slot;
this.output_checker23476 = output_checker23476;
this.validate__18351__auto__ = validate__18351__auto__;
this.G__23478 = G__23478;
this.output_schema23473 = output_schema23473;
this.input_checker23475 = input_checker23475;
this.ufv__ = ufv__;
this.meta23483 = meta23483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492){
return (function (_23484,meta23483__$1){
var self__ = this;
var _23484__$1 = this;
return (new starfreighter.app.t_starfreighter$app23482(self__.owner,self__.G__23477,self__.data,self__.input_schema23474,self__.slot,self__.output_checker23476,self__.validate__18351__auto__,self__.G__23478,self__.output_schema23473,self__.input_checker23475,self__.ufv__,meta23483__$1));
});})(validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492))
;

starfreighter.app.t_starfreighter$app23482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492){
return (function (_23484){
var self__ = this;
var _23484__$1 = this;
return self__.meta23483;
});})(validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492))
;

starfreighter.app.t_starfreighter$app23482.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23482.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492){
return (function (_){
var self__ = this;
var ___$1 = this;
return "slot";
});})(validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492))
;

starfreighter.app.t_starfreighter$app23482.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23482.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"className": "slot crew"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(self__.data)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.info_link,self__.data)],null)))):" "),om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.slot_details,self__.data)],null))));
});})(validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492))
;

starfreighter.app.t_starfreighter$app23482.getBasis = ((function (validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.with_meta(cljs.core.cst$sym$G__23477,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$input_DASH_schema23474,cljs.core.with_meta(cljs.core.cst$sym$slot,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23473,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23474], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$output_DASH_checker23476,cljs.core.cst$sym$validate__18351__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__23478,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema23473,cljs.core.cst$sym$input_DASH_checker23475,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta23483], null);
});})(validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492))
;

starfreighter.app.t_starfreighter$app23482.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23482.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23482";

starfreighter.app.t_starfreighter$app23482.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23482");
});})(validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492))
;

starfreighter.app.__GT_t_starfreighter$app23482 = ((function (validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492){
return (function starfreighter$app$slot_$___GT_t_starfreighter$app23482(owner__$1,G__23477__$1,data__$1,input_schema23474__$1,slot__$1,output_checker23476__$1,validate__18351__auto____$1,G__23478__$1,output_schema23473__$1,input_checker23475__$1,ufv____$1,meta23483){
return (new starfreighter.app.t_starfreighter$app23482(owner__$1,G__23477__$1,data__$1,input_schema23474__$1,slot__$1,output_checker23476__$1,validate__18351__auto____$1,G__23478__$1,output_schema23473__$1,input_checker23475__$1,ufv____$1,meta23483));
});})(validate__18351__auto__,ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492))
;

}

return (new starfreighter.app.t_starfreighter$app23482(owner,G__23477,data,input_schema23474_23490,starfreighter$app$slot,output_checker23476_23492,validate__18351__auto__,G__23478,output_schema23473_23489,input_checker23475_23491,ufv___23488,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23496 = (output_checker23476_23492.cljs$core$IFn$_invoke$arity$1 ? output_checker23476_23492.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23476_23492.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23496)){
var error__18353__auto___23497 = temp__4657__auto___23496;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$slot,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23497], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23473_23489,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23497], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23488,output_schema23473_23489,input_schema23474_23490,input_checker23475_23491,output_checker23476_23492))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.slot),schema.core.make_fn_schema(output_schema23473_23489,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23474_23490], null)));

starfreighter.app.__GT_slot = (function starfreighter$app$__GT_slot(var_args){
var args23485 = [];
var len__7479__auto___23498 = arguments.length;
var i__7480__auto___23499 = (0);
while(true){
if((i__7480__auto___23499 < len__7479__auto___23498)){
args23485.push((arguments[i__7480__auto___23499]));

var G__23500 = (i__7480__auto___23499 + (1));
i__7480__auto___23499 = G__23500;
continue;
} else {
}
break;
}

var G__23487 = args23485.length;
switch (G__23487) {
case 1:
return starfreighter.app.__GT_slot.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_slot.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23485.length)].join('')));

}
});

starfreighter.app.__GT_slot.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.slot,cursor__23200__auto__);
});

starfreighter.app.__GT_slot.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23472){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.slot,cursor__23200__auto__,m23472);
});

starfreighter.app.__GT_slot.cljs$lang$maxFixedArity = 2;


var ufv___23530 = schema.utils.use_fn_validation;
var output_schema23503_23531 = schema.core.Any;
var input_schema23504_23532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23505_23533 = schema.core.checker(input_schema23504_23532);
var output_checker23506_23534 = schema.core.checker(output_schema23503_23531);
/**
 * Inputs: [data owner]
 */
starfreighter.app.crew_list = ((function (ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534){
return (function starfreighter$app$crew_list(G__23507,G__23508){
var validate__18351__auto__ = ufv___23530.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23507,G__23508], null);
var temp__4657__auto___23536 = (input_checker23505_23533.cljs$core$IFn$_invoke$arity$1 ? input_checker23505_23533.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23535) : input_checker23505_23533.call(null,args__18352__auto___23535));
if(cljs.core.truth_(temp__4657__auto___23536)){
var error__18353__auto___23537 = temp__4657__auto___23536;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$crew_DASH_list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23537], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23504_23532,cljs.core.cst$kw$value,args__18352__auto___23535,cljs.core.cst$kw$error,error__18353__auto___23537], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23507;
var owner = G__23508;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23518 = (function (owner,data,input_schema23504,validate__18351__auto__,output_schema23503,G__23507,output_checker23506,input_checker23505,G__23508,ufv__,crew_list,meta23519){
this.owner = owner;
this.data = data;
this.input_schema23504 = input_schema23504;
this.validate__18351__auto__ = validate__18351__auto__;
this.output_schema23503 = output_schema23503;
this.G__23507 = G__23507;
this.output_checker23506 = output_checker23506;
this.input_checker23505 = input_checker23505;
this.G__23508 = G__23508;
this.ufv__ = ufv__;
this.crew_list = crew_list;
this.meta23519 = meta23519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534){
return (function (_23520,meta23519__$1){
var self__ = this;
var _23520__$1 = this;
return (new starfreighter.app.t_starfreighter$app23518(self__.owner,self__.data,self__.input_schema23504,self__.validate__18351__auto__,self__.output_schema23503,self__.G__23507,self__.output_checker23506,self__.input_checker23505,self__.G__23508,self__.ufv__,self__.crew_list,meta23519__$1));
});})(validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534))
;

starfreighter.app.t_starfreighter$app23518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534){
return (function (_23520){
var self__ = this;
var _23520__$1 = this;
return self__.meta23519;
});})(validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534))
;

starfreighter.app.t_starfreighter$app23518.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23518.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534){
return (function (_){
var self__ = this;
var ___$1 = this;
return "crew-list";
});})(validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534))
;

starfreighter.app.t_starfreighter$app23518.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23518.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "list crew"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2(null,"Crew"),(function (){var crew = cljs.core.vec(starfreighter.db.crew(self__.data));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (crew,___$1,validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534){
return (function starfreighter$app$crew_list_$_iter__23521(s__23522){
return (new cljs.core.LazySeq(null,((function (crew,___$1,validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534){
return (function (){
var s__23522__$1 = s__23522;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23522__$1);
if(temp__4657__auto__){
var s__23522__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23522__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23522__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23524 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23523 = (0);
while(true){
if((i__23523 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23523);
cljs.core.chunk_append(b__23524,om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.slot,cljs.core.get.cljs$core$IFn$_invoke$arity$2(crew,i)));

var G__23538 = (i__23523 + (1));
i__23523 = G__23538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23524),starfreighter$app$crew_list_$_iter__23521(cljs.core.chunk_rest(s__23522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23524),null);
}
} else {
var i = cljs.core.first(s__23522__$2);
return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.slot,cljs.core.get.cljs$core$IFn$_invoke$arity$2(crew,i)),starfreighter$app$crew_list_$_iter__23521(cljs.core.rest(s__23522__$2)));
}
} else {
return null;
}
break;
}
});})(crew,___$1,validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534))
,null,null));
});})(crew,___$1,validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max_DASH_crew.cljs$core$IFn$_invoke$arity$1(self__.data)));
})()],null))));
})()],null))));
});})(validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534))
;

starfreighter.app.t_starfreighter$app23518.getBasis = ((function (validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$input_DASH_schema23504,cljs.core.cst$sym$validate__18351__auto__,cljs.core.cst$sym$output_DASH_schema23503,cljs.core.with_meta(cljs.core.cst$sym$G__23507,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker23506,cljs.core.cst$sym$input_DASH_checker23505,cljs.core.with_meta(cljs.core.cst$sym$G__23508,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$crew_DASH_list,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23503,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23504], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$meta23519], null);
});})(validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534))
;

starfreighter.app.t_starfreighter$app23518.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23518.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23518";

starfreighter.app.t_starfreighter$app23518.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23518");
});})(validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534))
;

starfreighter.app.__GT_t_starfreighter$app23518 = ((function (validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534){
return (function starfreighter$app$crew_list_$___GT_t_starfreighter$app23518(owner__$1,data__$1,input_schema23504__$1,validate__18351__auto____$1,output_schema23503__$1,G__23507__$1,output_checker23506__$1,input_checker23505__$1,G__23508__$1,ufv____$1,crew_list__$1,meta23519){
return (new starfreighter.app.t_starfreighter$app23518(owner__$1,data__$1,input_schema23504__$1,validate__18351__auto____$1,output_schema23503__$1,G__23507__$1,output_checker23506__$1,input_checker23505__$1,G__23508__$1,ufv____$1,crew_list__$1,meta23519));
});})(validate__18351__auto__,ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534))
;

}

return (new starfreighter.app.t_starfreighter$app23518(owner,data,input_schema23504_23532,validate__18351__auto__,output_schema23503_23531,G__23507,output_checker23506_23534,input_checker23505_23533,G__23508,ufv___23530,starfreighter$app$crew_list,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23539 = (output_checker23506_23534.cljs$core$IFn$_invoke$arity$1 ? output_checker23506_23534.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23506_23534.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23539)){
var error__18353__auto___23540 = temp__4657__auto___23539;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$crew_DASH_list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23540], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23503_23531,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23540], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23530,output_schema23503_23531,input_schema23504_23532,input_checker23505_23533,output_checker23506_23534))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.crew_list),schema.core.make_fn_schema(output_schema23503_23531,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23504_23532], null)));

starfreighter.app.__GT_crew_list = (function starfreighter$app$__GT_crew_list(var_args){
var args23527 = [];
var len__7479__auto___23541 = arguments.length;
var i__7480__auto___23542 = (0);
while(true){
if((i__7480__auto___23542 < len__7479__auto___23541)){
args23527.push((arguments[i__7480__auto___23542]));

var G__23543 = (i__7480__auto___23542 + (1));
i__7480__auto___23542 = G__23543;
continue;
} else {
}
break;
}

var G__23529 = args23527.length;
switch (G__23529) {
case 1:
return starfreighter.app.__GT_crew_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_crew_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23527.length)].join('')));

}
});

starfreighter.app.__GT_crew_list.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.crew_list,cursor__23200__auto__);
});

starfreighter.app.__GT_crew_list.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23502){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.crew_list,cursor__23200__auto__,m23502);
});

starfreighter.app.__GT_crew_list.cljs$lang$maxFixedArity = 2;


var ufv___23573 = schema.utils.use_fn_validation;
var output_schema23546_23574 = schema.core.Any;
var input_schema23547_23575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23548_23576 = schema.core.checker(input_schema23547_23575);
var output_checker23549_23577 = schema.core.checker(output_schema23546_23574);
/**
 * Inputs: [data owner]
 */
starfreighter.app.cargo_list = ((function (ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577){
return (function starfreighter$app$cargo_list(G__23550,G__23551){
var validate__18351__auto__ = ufv___23573.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23550,G__23551], null);
var temp__4657__auto___23579 = (input_checker23548_23576.cljs$core$IFn$_invoke$arity$1 ? input_checker23548_23576.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23578) : input_checker23548_23576.call(null,args__18352__auto___23578));
if(cljs.core.truth_(temp__4657__auto___23579)){
var error__18353__auto___23580 = temp__4657__auto___23579;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$cargo_DASH_list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23580], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23547_23575,cljs.core.cst$kw$value,args__18352__auto___23578,cljs.core.cst$kw$error,error__18353__auto___23580], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23550;
var owner = G__23551;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23561 = (function (output_schema23546,owner,data,output_checker23549,input_checker23548,validate__18351__auto__,G__23551,input_schema23547,G__23550,ufv__,cargo_list,meta23562){
this.output_schema23546 = output_schema23546;
this.owner = owner;
this.data = data;
this.output_checker23549 = output_checker23549;
this.input_checker23548 = input_checker23548;
this.validate__18351__auto__ = validate__18351__auto__;
this.G__23551 = G__23551;
this.input_schema23547 = input_schema23547;
this.G__23550 = G__23550;
this.ufv__ = ufv__;
this.cargo_list = cargo_list;
this.meta23562 = meta23562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577){
return (function (_23563,meta23562__$1){
var self__ = this;
var _23563__$1 = this;
return (new starfreighter.app.t_starfreighter$app23561(self__.output_schema23546,self__.owner,self__.data,self__.output_checker23549,self__.input_checker23548,self__.validate__18351__auto__,self__.G__23551,self__.input_schema23547,self__.G__23550,self__.ufv__,self__.cargo_list,meta23562__$1));
});})(validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577))
;

starfreighter.app.t_starfreighter$app23561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577){
return (function (_23563){
var self__ = this;
var _23563__$1 = this;
return self__.meta23562;
});})(validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577))
;

starfreighter.app.t_starfreighter$app23561.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23561.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577){
return (function (_){
var self__ = this;
var ___$1 = this;
return "cargo-list";
});})(validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577))
;

starfreighter.app.t_starfreighter$app23561.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23561.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "list cargo"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2(null,"Cargo"),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (___$1,validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577){
return (function starfreighter$app$cargo_list_$_iter__23564(s__23565){
return (new cljs.core.LazySeq(null,((function (___$1,validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577){
return (function (){
var s__23565__$1 = s__23565;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23565__$1);
if(temp__4657__auto__){
var s__23565__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23565__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23565__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23567 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23566 = (0);
while(true){
if((i__23566 < size__7183__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23566);
cljs.core.chunk_append(b__23567,om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.slot,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cargo.cljs$core$IFn$_invoke$arity$1(self__.data),i)));

var G__23581 = (i__23566 + (1));
i__23566 = G__23581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23567),starfreighter$app$cargo_list_$_iter__23564(cljs.core.chunk_rest(s__23565__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23567),null);
}
} else {
var i = cljs.core.first(s__23565__$2);
return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.slot,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cargo.cljs$core$IFn$_invoke$arity$1(self__.data),i)),starfreighter$app$cargo_list_$_iter__23564(cljs.core.rest(s__23565__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577))
,null,null));
});})(___$1,validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max_DASH_cargo.cljs$core$IFn$_invoke$arity$1(self__.data)));
})()],null))))],null))));
});})(validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577))
;

starfreighter.app.t_starfreighter$app23561.getBasis = ((function (validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema23546,cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_checker23549,cljs.core.cst$sym$input_DASH_checker23548,cljs.core.cst$sym$validate__18351__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__23551,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema23547,cljs.core.with_meta(cljs.core.cst$sym$G__23550,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$cargo_DASH_list,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23546,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23547], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$meta23562], null);
});})(validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577))
;

starfreighter.app.t_starfreighter$app23561.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23561.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23561";

starfreighter.app.t_starfreighter$app23561.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23561");
});})(validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577))
;

starfreighter.app.__GT_t_starfreighter$app23561 = ((function (validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577){
return (function starfreighter$app$cargo_list_$___GT_t_starfreighter$app23561(output_schema23546__$1,owner__$1,data__$1,output_checker23549__$1,input_checker23548__$1,validate__18351__auto____$1,G__23551__$1,input_schema23547__$1,G__23550__$1,ufv____$1,cargo_list__$1,meta23562){
return (new starfreighter.app.t_starfreighter$app23561(output_schema23546__$1,owner__$1,data__$1,output_checker23549__$1,input_checker23548__$1,validate__18351__auto____$1,G__23551__$1,input_schema23547__$1,G__23550__$1,ufv____$1,cargo_list__$1,meta23562));
});})(validate__18351__auto__,ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577))
;

}

return (new starfreighter.app.t_starfreighter$app23561(output_schema23546_23574,owner,data,output_checker23549_23577,input_checker23548_23576,validate__18351__auto__,G__23551,input_schema23547_23575,G__23550,ufv___23573,starfreighter$app$cargo_list,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23582 = (output_checker23549_23577.cljs$core$IFn$_invoke$arity$1 ? output_checker23549_23577.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23549_23577.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23582)){
var error__18353__auto___23583 = temp__4657__auto___23582;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$cargo_DASH_list,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23583], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23546_23574,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23583], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23573,output_schema23546_23574,input_schema23547_23575,input_checker23548_23576,output_checker23549_23577))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.cargo_list),schema.core.make_fn_schema(output_schema23546_23574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23547_23575], null)));

starfreighter.app.__GT_cargo_list = (function starfreighter$app$__GT_cargo_list(var_args){
var args23570 = [];
var len__7479__auto___23584 = arguments.length;
var i__7480__auto___23585 = (0);
while(true){
if((i__7480__auto___23585 < len__7479__auto___23584)){
args23570.push((arguments[i__7480__auto___23585]));

var G__23586 = (i__7480__auto___23585 + (1));
i__7480__auto___23585 = G__23586;
continue;
} else {
}
break;
}

var G__23572 = args23570.length;
switch (G__23572) {
case 1:
return starfreighter.app.__GT_cargo_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_cargo_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23570.length)].join('')));

}
});

starfreighter.app.__GT_cargo_list.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.cargo_list,cursor__23200__auto__);
});

starfreighter.app.__GT_cargo_list.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23545){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.cargo_list,cursor__23200__auto__,m23545);
});

starfreighter.app.__GT_cargo_list.cljs$lang$maxFixedArity = 2;

starfreighter.app.map_colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lightcoral","gold","darkseagreen","cadetblue","mediumpurple","lightsalmon"], null);
starfreighter.app.map_size = (480);

var ufv___23736 = schema.utils.use_fn_validation;
var output_schema23593_23737 = schema.core.Any;
var input_schema23594_23738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23595_23739 = schema.core.checker(input_schema23594_23738);
var output_checker23596_23740 = schema.core.checker(output_schema23593_23737);
/**
 * Inputs: [data owner]
 */
starfreighter.app.starmap = ((function (ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function starfreighter$app$starmap(G__23597,G__23598){
var validate__18351__auto__ = ufv___23736.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23597,G__23598], null);
var temp__4657__auto___23742 = (input_checker23595_23739.cljs$core$IFn$_invoke$arity$1 ? input_checker23595_23739.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23741) : input_checker23595_23739.call(null,args__18352__auto___23741));
if(cljs.core.truth_(temp__4657__auto___23742)){
var error__18353__auto___23743 = temp__4657__auto___23742;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$starmap,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23743], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23594_23738,cljs.core.cst$kw$value,args__18352__auto___23741,cljs.core.cst$kw$error,error__18353__auto___23743], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23597;
var owner = G__23598;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23666 = (function (owner,data,output_schema23593,G__23598,input_schema23594,validate__18351__auto__,G__23597,output_checker23596,input_checker23595,ufv__,starmap,meta23667){
this.owner = owner;
this.data = data;
this.output_schema23593 = output_schema23593;
this.G__23598 = G__23598;
this.input_schema23594 = input_schema23594;
this.validate__18351__auto__ = validate__18351__auto__;
this.G__23597 = G__23597;
this.output_checker23596 = output_checker23596;
this.input_checker23595 = input_checker23595;
this.ufv__ = ufv__;
this.starmap = starmap;
this.meta23667 = meta23667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (_23668,meta23667__$1){
var self__ = this;
var _23668__$1 = this;
return (new starfreighter.app.t_starfreighter$app23666(self__.owner,self__.data,self__.output_schema23593,self__.G__23598,self__.input_schema23594,self__.validate__18351__auto__,self__.G__23597,self__.output_checker23596,self__.input_checker23595,self__.ufv__,self__.starmap,meta23667__$1));
});})(validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;

starfreighter.app.t_starfreighter$app23666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (_23668){
var self__ = this;
var _23668__$1 = this;
return self__.meta23667;
});})(validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;

starfreighter.app.t_starfreighter$app23666.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23666.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (_){
var self__ = this;
var ___$1 = this;
return "starmap";
});})(validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;

starfreighter.app.t_starfreighter$app23666.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23666.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__23669 = self__.data;
var map__23669__$1 = ((((!((map__23669 == null)))?((((map__23669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23669):map__23669);
var info_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23669__$1,cljs.core.cst$kw$info_DASH_target);
var places = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23669__$1,cljs.core.cst$kw$places);
var location = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(starfreighter.db.current_place(self__.data));
var destination = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(starfreighter.db.current_dest(self__.data));
var target_place = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(info_target),cljs.core.cst$kw$place))?info_target:null);
var set_target_BANG_ = ((function (map__23669,map__23669__$1,info_target,places,location,destination,target_place,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (target){
return ((function (map__23669,map__23669__$1,info_target,places,location,destination,target_place,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (p1__23588_SHARP_){
p1__23588_SHARP_.stopPropagation();

return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$info_DASH_target,target);
});
;})(map__23669,map__23669__$1,info_target,places,location,destination,target_place,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
});})(map__23669,map__23669__$1,info_target,places,location,destination,target_place,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.svg,({"className": "starmap", "xmlns": "http://www.w3.org/2000/svg", "width": om_tools.dom.format_opts(starfreighter.app.map_size), "height": om_tools.dom.format_opts(starfreighter.app.map_size), "viewBox": om_tools.dom.format_opts([cljs.core.str("0 0 "),cljs.core.str(starfreighter.app.map_size),cljs.core.str(" "),cljs.core.str(starfreighter.app.map_size)].join(''))}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var target_path = (function (){var G__23671 = target_place;
var G__23671__$1 = (((G__23671 == null))?null:starfreighter.db.pathfind.cljs$core$IFn$_invoke$arity$2(self__.data,G__23671));
if((G__23671__$1 == null)){
return null;
} else {
return cljs.core.set(G__23671__$1);
}
})();
var travel_ends = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6404__auto__ = location;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$travel.cljs$core$IFn$_invoke$arity$1(self__.data));
}
})(),destination], null);
var connections = starfreighter.util.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (target_path,travel_ends,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (p__23672){
var map__23673 = p__23672;
var map__23673__$1 = ((((!((map__23673 == null)))?((((map__23673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23673):map__23673);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23673__$1,cljs.core.cst$kw$name);
var connections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23673__$1,cljs.core.cst$kw$connections);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__23673,map__23673__$1,name,connections,target_path,travel_ends,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (p1__23589_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,p1__23589_SHARP_], null);
});})(map__23673,map__23673__$1,name,connections,target_path,travel_ends,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
,connections);
});})(target_path,travel_ends,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
,cljs.core.array_seq([cljs.core.vals(places)], 0)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.g,({"className": "connections"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (target_path,travel_ends,connections,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function starfreighter$app$starmap_$_iter__23675(s__23676){
return (new cljs.core.LazySeq(null,((function (target_path,travel_ends,connections,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (){
var s__23676__$1 = s__23676;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23676__$1);
if(temp__4657__auto__){
var s__23676__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23676__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23676__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23678 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23677 = (0);
while(true){
if((i__23677 < size__7183__auto__)){
var vec__23695 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23677);
var end1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23695,(0),null);
var end2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23695,(1),null);
var conn_ends = vec__23695;
var here_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(conn_ends),cljs.core.set(travel_ends));
var ends = ((here_QMARK_)?travel_ends:conn_ends);
var target_QMARK_ = cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,target_path),ends);
var vec__23698 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(places,ends);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23698,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23698,(1),null);
cljs.core.chunk_append(b__23678,(function (){var G__23701 = ({"className": om_tools.dom.format_opts(((here_QMARK_)?"travel":((target_QMARK_)?"target":null))), "x1": om_tools.dom.format_opts(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p1)), "y1": om_tools.dom.format_opts(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p1)), "x2": om_tools.dom.format_opts(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p2)), "y2": om_tools.dom.format_opts(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p2))});
return React.DOM.line(G__23701);
})());

var G__23744 = (i__23677 + (1));
i__23677 = G__23744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23678),starfreighter$app$starmap_$_iter__23675(cljs.core.chunk_rest(s__23676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23678),null);
}
} else {
var vec__23702 = cljs.core.first(s__23676__$2);
var end1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23702,(0),null);
var end2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23702,(1),null);
var conn_ends = vec__23702;
var here_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(conn_ends),cljs.core.set(travel_ends));
var ends = ((here_QMARK_)?travel_ends:conn_ends);
var target_QMARK_ = cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,target_path),ends);
var vec__23705 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(places,ends);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23705,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23705,(1),null);
return cljs.core.cons((function (){var G__23708 = ({"className": om_tools.dom.format_opts(((here_QMARK_)?"travel":((target_QMARK_)?"target":null))), "x1": om_tools.dom.format_opts(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p1)), "y1": om_tools.dom.format_opts(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p1)), "x2": om_tools.dom.format_opts(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(p2)), "y2": om_tools.dom.format_opts(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(p2))});
return React.DOM.line(G__23708);
})(),starfreighter$app$starmap_$_iter__23675(cljs.core.rest(s__23676__$2)));
}
} else {
return null;
}
break;
}
});})(target_path,travel_ends,connections,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
,null,null));
});})(target_path,travel_ends,connections,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;
return iter__7184__auto__(connections);
})()],null))));
})(),(function (){var culture_ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$culture,cljs.core.vals(places)));
var culture_colors = cljs.core.zipmap(culture_ids,starfreighter.app.map_colors);
var job_dests = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$destination,cljs.core.cst$kw$cargo.cljs$core$IFn$_invoke$arity$1(self__.data)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.g,({"className": "places"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (culture_ids,culture_colors,job_dests,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function starfreighter$app$starmap_$_iter__23709(s__23710){
return (new cljs.core.LazySeq(null,((function (culture_ids,culture_colors,job_dests,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (){
var s__23710__$1 = s__23710;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23710__$1);
if(temp__4657__auto__){
var s__23710__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23710__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23710__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23712 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23711 = (0);
while(true){
if((i__23711 < size__7183__auto__)){
var map__23723 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23711);
var map__23723__$1 = ((((!((map__23723 == null)))?((((map__23723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23723):map__23723);
var place = map__23723__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23723__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23723__$1,cljs.core.cst$kw$y);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23723__$1,cljs.core.cst$kw$name);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(culture_colors,cljs.core.cst$kw$culture.cljs$core$IFn$_invoke$arity$1(place));
var dest_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,destination);
var here_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,location);
var travel_QMARK_ = (function (){var or__6404__auto__ = dest_QMARK_;
if(or__6404__auto__){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = here_QMARK_;
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
return cljs.core.PersistentHashSet.fromArray([cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$travel.cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$travel.cljs$core$IFn$_invoke$arity$1(self__.data))], true).call(null,name);
}
}
})();
var job_QMARK_ = cljs.core.contains_QMARK_(job_dests,name);
var target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(target_place));
var radius = (cljs.core.truth_(cljs.core.cst$kw$hub_QMARK_.cljs$core$IFn$_invoke$arity$1(place))?(16):(10));
cljs.core.chunk_append(b__23712,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.g,({"className": om_tools.dom.format_opts((function (){var G__23725 = "map-location";
var G__23725__$1 = (cljs.core.truth_(travel_QMARK_)?[cljs.core.str(G__23725),cljs.core.str(" travel")].join(''):G__23725);
if(target_QMARK_){
return [cljs.core.str(G__23725__$1),cljs.core.str(" target")].join('');
} else {
return G__23725__$1;
}
})())}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__23726 = ({"cx": om_tools.dom.format_opts(x), "cy": om_tools.dom.format_opts(y), "r": om_tools.dom.format_opts(radius), "fill": om_tools.dom.format_opts(color), "onClick": om_tools.dom.format_opts(set_target_BANG_(place))});
return React.DOM.circle(G__23726);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.text,({"x": om_tools.dom.format_opts(x), "y": om_tools.dom.format_opts((y - (radius + (4)))), "textAnchor": "middle", "fontSize": (12), "onClick": om_tools.dom.format_opts(set_target_BANG_(place))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.tspan,((here_QMARK_)?"\uD83D\uDCCD":((dest_QMARK_)?"\u27A1\uFE0F ":((job_QMARK_)?"\uD83D\uDEA9":null))),cljs.core.PersistentVector.EMPTY),om_tools.dom.element(React.DOM.tspan,name,cljs.core.PersistentVector.EMPTY)],null))))],null)))));

var G__23745 = (i__23711 + (1));
i__23711 = G__23745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23712),starfreighter$app$starmap_$_iter__23709(cljs.core.chunk_rest(s__23710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23712),null);
}
} else {
var map__23727 = cljs.core.first(s__23710__$2);
var map__23727__$1 = ((((!((map__23727 == null)))?((((map__23727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23727):map__23727);
var place = map__23727__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23727__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23727__$1,cljs.core.cst$kw$y);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23727__$1,cljs.core.cst$kw$name);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(culture_colors,cljs.core.cst$kw$culture.cljs$core$IFn$_invoke$arity$1(place));
var dest_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,destination);
var here_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,location);
var travel_QMARK_ = (function (){var or__6404__auto__ = dest_QMARK_;
if(or__6404__auto__){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = here_QMARK_;
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
return cljs.core.PersistentHashSet.fromArray([cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$travel.cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$travel.cljs$core$IFn$_invoke$arity$1(self__.data))], true).call(null,name);
}
}
})();
var job_QMARK_ = cljs.core.contains_QMARK_(job_dests,name);
var target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(target_place));
var radius = (cljs.core.truth_(cljs.core.cst$kw$hub_QMARK_.cljs$core$IFn$_invoke$arity$1(place))?(16):(10));
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.g,({"className": om_tools.dom.format_opts((function (){var G__23729 = "map-location";
var G__23729__$1 = (cljs.core.truth_(travel_QMARK_)?[cljs.core.str(G__23729),cljs.core.str(" travel")].join(''):G__23729);
if(target_QMARK_){
return [cljs.core.str(G__23729__$1),cljs.core.str(" target")].join('');
} else {
return G__23729__$1;
}
})())}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__23730 = ({"cx": om_tools.dom.format_opts(x), "cy": om_tools.dom.format_opts(y), "r": om_tools.dom.format_opts(radius), "fill": om_tools.dom.format_opts(color), "onClick": om_tools.dom.format_opts(set_target_BANG_(place))});
return React.DOM.circle(G__23730);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.text,({"x": om_tools.dom.format_opts(x), "y": om_tools.dom.format_opts((y - (radius + (4)))), "textAnchor": "middle", "fontSize": (12), "onClick": om_tools.dom.format_opts(set_target_BANG_(place))}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.tspan,((here_QMARK_)?"\uD83D\uDCCD":((dest_QMARK_)?"\u27A1\uFE0F ":((job_QMARK_)?"\uD83D\uDEA9":null))),cljs.core.PersistentVector.EMPTY),om_tools.dom.element(React.DOM.tspan,name,cljs.core.PersistentVector.EMPTY)],null))))],null)))),starfreighter$app$starmap_$_iter__23709(cljs.core.rest(s__23710__$2)));
}
} else {
return null;
}
break;
}
});})(culture_ids,culture_colors,job_dests,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
,null,null));
});})(culture_ids,culture_colors,job_dests,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;
return iter__7184__auto__(cljs.core.vals(places));
})()],null))));
})(),(cljs.core.truth_((function (){var G__23731 = target_place;
var G__23731__$1 = (((G__23731 == null))?null:cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__23731));
if((G__23731__$1 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__23731__$1,location);
}
})())?(function (){var enabled_QMARK_ = (function (){var and__6392__auto__ = (starfreighter.db.in_port_QMARK_.cljs$core$IFn$_invoke$arity$1 ? starfreighter.db.in_port_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.data) : starfreighter.db.in_port_QMARK_.call(null,self__.data));
if(cljs.core.truth_(and__6392__auto__)){
return starfreighter.game.interruptible_QMARK_(cljs.core.cst$kw$card.cljs$core$IFn$_invoke$arity$1(self__.data));
} else {
return and__6392__auto__;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.text,({"className": om_tools.dom.format_opts((function (){var G__23732 = "depart-button";
if(cljs.core.not(enabled_QMARK_)){
return [cljs.core.str(G__23732),cljs.core.str(" disabled")].join('');
} else {
return G__23732;
}
})()), "x": (468), "y": (462), "textAnchor": "end", "fontSize": (18), "onClick": om_tools.dom.format_opts((cljs.core.truth_(enabled_QMARK_)?((function (enabled_QMARK_,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (p1__23590_SHARP_){
p1__23590_SHARP_.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,starfreighter.game.prepare_to_depart);
});})(enabled_QMARK_,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
:((function (enabled_QMARK_,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (p1__23591_SHARP_){
return p1__23591_SHARP_.stopPropagation();
});})(enabled_QMARK_,map__23669,map__23669__$1,info_target,places,location,destination,target_place,set_target_BANG_,___$1,validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
))}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str("\u27A1\uFE0F "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(target_place))].join('')],null))));
})():null)],null))));
});})(validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;

starfreighter.app.t_starfreighter$app23666.getBasis = ((function (validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_schema23593,cljs.core.with_meta(cljs.core.cst$sym$G__23598,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema23594,cljs.core.cst$sym$validate__18351__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__23597,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker23596,cljs.core.cst$sym$input_DASH_checker23595,cljs.core.cst$sym$ufv__,cljs.core.with_meta(cljs.core.cst$sym$starmap,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23593,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23594], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$meta23667], null);
});})(validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;

starfreighter.app.t_starfreighter$app23666.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23666.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23666";

starfreighter.app.t_starfreighter$app23666.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23666");
});})(validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;

starfreighter.app.__GT_t_starfreighter$app23666 = ((function (validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740){
return (function starfreighter$app$starmap_$___GT_t_starfreighter$app23666(owner__$1,data__$1,output_schema23593__$1,G__23598__$1,input_schema23594__$1,validate__18351__auto____$1,G__23597__$1,output_checker23596__$1,input_checker23595__$1,ufv____$1,starmap__$1,meta23667){
return (new starfreighter.app.t_starfreighter$app23666(owner__$1,data__$1,output_schema23593__$1,G__23598__$1,input_schema23594__$1,validate__18351__auto____$1,G__23597__$1,output_checker23596__$1,input_checker23595__$1,ufv____$1,starmap__$1,meta23667));
});})(validate__18351__auto__,ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;

}

return (new starfreighter.app.t_starfreighter$app23666(owner,data,output_schema23593_23737,G__23598,input_schema23594_23738,validate__18351__auto__,G__23597,output_checker23596_23740,input_checker23595_23739,ufv___23736,starfreighter$app$starmap,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23746 = (output_checker23596_23740.cljs$core$IFn$_invoke$arity$1 ? output_checker23596_23740.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23596_23740.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23746)){
var error__18353__auto___23747 = temp__4657__auto___23746;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$starmap,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23747], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23593_23737,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23747], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23736,output_schema23593_23737,input_schema23594_23738,input_checker23595_23739,output_checker23596_23740))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.starmap),schema.core.make_fn_schema(output_schema23593_23737,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23594_23738], null)));

starfreighter.app.__GT_starmap = (function starfreighter$app$__GT_starmap(var_args){
var args23733 = [];
var len__7479__auto___23748 = arguments.length;
var i__7480__auto___23749 = (0);
while(true){
if((i__7480__auto___23749 < len__7479__auto___23748)){
args23733.push((arguments[i__7480__auto___23749]));

var G__23750 = (i__7480__auto___23749 + (1));
i__7480__auto___23749 = G__23750;
continue;
} else {
}
break;
}

var G__23735 = args23733.length;
switch (G__23735) {
case 1:
return starfreighter.app.__GT_starmap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_starmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23733.length)].join('')));

}
});

starfreighter.app.__GT_starmap.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.starmap,cursor__23200__auto__);
});

starfreighter.app.__GT_starmap.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23592){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.starmap,cursor__23200__auto__,m23592);
});

starfreighter.app.__GT_starmap.cljs$lang$maxFixedArity = 2;


var ufv___23780 = schema.utils.use_fn_validation;
var output_schema23753_23781 = schema.core.Any;
var input_schema23754_23782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23755_23783 = schema.core.checker(input_schema23754_23782);
var output_checker23756_23784 = schema.core.checker(output_schema23753_23781);
/**
 * Inputs: [data owner]
 */
starfreighter.app.info_box = ((function (ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784){
return (function starfreighter$app$info_box(G__23757,G__23758){
var validate__18351__auto__ = ufv___23780.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23757,G__23758], null);
var temp__4657__auto___23786 = (input_checker23755_23783.cljs$core$IFn$_invoke$arity$1 ? input_checker23755_23783.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23785) : input_checker23755_23783.call(null,args__18352__auto___23785));
if(cljs.core.truth_(temp__4657__auto___23786)){
var error__18353__auto___23787 = temp__4657__auto___23786;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$info_DASH_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23787], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23754_23782,cljs.core.cst$kw$value,args__18352__auto___23785,cljs.core.cst$kw$error,error__18353__auto___23787], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23757;
var owner = G__23758;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23768 = (function (G__23758,owner,data,output_checker23756,info_box,validate__18351__auto__,input_checker23755,G__23757,input_schema23754,output_schema23753,ufv__,meta23769){
this.G__23758 = G__23758;
this.owner = owner;
this.data = data;
this.output_checker23756 = output_checker23756;
this.info_box = info_box;
this.validate__18351__auto__ = validate__18351__auto__;
this.input_checker23755 = input_checker23755;
this.G__23757 = G__23757;
this.input_schema23754 = input_schema23754;
this.output_schema23753 = output_schema23753;
this.ufv__ = ufv__;
this.meta23769 = meta23769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784){
return (function (_23770,meta23769__$1){
var self__ = this;
var _23770__$1 = this;
return (new starfreighter.app.t_starfreighter$app23768(self__.G__23758,self__.owner,self__.data,self__.output_checker23756,self__.info_box,self__.validate__18351__auto__,self__.input_checker23755,self__.G__23757,self__.input_schema23754,self__.output_schema23753,self__.ufv__,meta23769__$1));
});})(validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784))
;

starfreighter.app.t_starfreighter$app23768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784){
return (function (_23770){
var self__ = this;
var _23770__$1 = this;
return self__.meta23769;
});})(validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784))
;

starfreighter.app.t_starfreighter$app23768.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23768.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784){
return (function (_){
var self__ = this;
var ___$1 = this;
return "info-box";
});})(validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784))
;

starfreighter.app.t_starfreighter$app23768.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23768.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784){
return (function (_){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = (function (){var or__6404__auto__ = cljs.core.cst$kw$info_DASH_target.cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = starfreighter.db.current_place(self__.data);
if(cljs.core.truth_(or__6404__auto____$1)){
return or__6404__auto____$1;
} else {
return starfreighter.db.current_dest(self__.data);
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var target = temp__4657__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "info-box"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (target,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784){
return (function starfreighter$app$info_box_$_iter__23771(s__23772){
return (new cljs.core.LazySeq(null,((function (target,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784){
return (function (){
var s__23772__$1 = s__23772;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__23772__$1);
if(temp__4657__auto____$1){
var s__23772__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23772__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__23772__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__23774 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__23773 = (0);
while(true){
if((i__23773 < size__7183__auto__)){
var paragraph = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__23773);
cljs.core.chunk_append(b__23774,om_tools.dom.element(React.DOM.p,om.core.build_all.cljs$core$IFn$_invoke$arity$2(starfreighter.app.content_span,paragraph),cljs.core.PersistentVector.EMPTY));

var G__23788 = (i__23773 + (1));
i__23773 = G__23788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23774),starfreighter$app$info_box_$_iter__23771(cljs.core.chunk_rest(s__23772__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23774),null);
}
} else {
var paragraph = cljs.core.first(s__23772__$2);
return cljs.core.cons(om_tools.dom.element(React.DOM.p,om.core.build_all.cljs$core$IFn$_invoke$arity$2(starfreighter.app.content_span,paragraph),cljs.core.PersistentVector.EMPTY),starfreighter$app$info_box_$_iter__23771(cljs.core.rest(s__23772__$2)));
}
} else {
return null;
}
break;
}
});})(target,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784))
,null,null));
});})(target,temp__4657__auto__,___$1,validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784))
;
return iter__7184__auto__(starfreighter.desc.describe(target));
})()],null))));
} else {
return null;
}
});})(validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784))
;

starfreighter.app.t_starfreighter$app23768.getBasis = ((function (validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$G__23758,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_checker23756,cljs.core.with_meta(cljs.core.cst$sym$info_DASH_box,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23753,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23754], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$validate__18351__auto__,cljs.core.cst$sym$input_DASH_checker23755,cljs.core.with_meta(cljs.core.cst$sym$G__23757,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema23754,cljs.core.cst$sym$output_DASH_schema23753,cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta23769], null);
});})(validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784))
;

starfreighter.app.t_starfreighter$app23768.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23768.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23768";

starfreighter.app.t_starfreighter$app23768.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23768");
});})(validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784))
;

starfreighter.app.__GT_t_starfreighter$app23768 = ((function (validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784){
return (function starfreighter$app$info_box_$___GT_t_starfreighter$app23768(G__23758__$1,owner__$1,data__$1,output_checker23756__$1,info_box__$1,validate__18351__auto____$1,input_checker23755__$1,G__23757__$1,input_schema23754__$1,output_schema23753__$1,ufv____$1,meta23769){
return (new starfreighter.app.t_starfreighter$app23768(G__23758__$1,owner__$1,data__$1,output_checker23756__$1,info_box__$1,validate__18351__auto____$1,input_checker23755__$1,G__23757__$1,input_schema23754__$1,output_schema23753__$1,ufv____$1,meta23769));
});})(validate__18351__auto__,ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784))
;

}

return (new starfreighter.app.t_starfreighter$app23768(G__23758,owner,data,output_checker23756_23784,starfreighter$app$info_box,validate__18351__auto__,input_checker23755_23783,G__23757,input_schema23754_23782,output_schema23753_23781,ufv___23780,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23789 = (output_checker23756_23784.cljs$core$IFn$_invoke$arity$1 ? output_checker23756_23784.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23756_23784.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23789)){
var error__18353__auto___23790 = temp__4657__auto___23789;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$info_DASH_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23790], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23753_23781,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23790], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23780,output_schema23753_23781,input_schema23754_23782,input_checker23755_23783,output_checker23756_23784))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.info_box),schema.core.make_fn_schema(output_schema23753_23781,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23754_23782], null)));

starfreighter.app.__GT_info_box = (function starfreighter$app$__GT_info_box(var_args){
var args23777 = [];
var len__7479__auto___23791 = arguments.length;
var i__7480__auto___23792 = (0);
while(true){
if((i__7480__auto___23792 < len__7479__auto___23791)){
args23777.push((arguments[i__7480__auto___23792]));

var G__23793 = (i__7480__auto___23792 + (1));
i__7480__auto___23792 = G__23793;
continue;
} else {
}
break;
}

var G__23779 = args23777.length;
switch (G__23779) {
case 1:
return starfreighter.app.__GT_info_box.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_info_box.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23777.length)].join('')));

}
});

starfreighter.app.__GT_info_box.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.info_box,cursor__23200__auto__);
});

starfreighter.app.__GT_info_box.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23752){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.info_box,cursor__23200__auto__,m23752);
});

starfreighter.app.__GT_info_box.cljs$lang$maxFixedArity = 2;


var ufv___23812 = schema.utils.use_fn_validation;
var output_schema23797_23813 = schema.core.Any;
var input_schema23798_23814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker23799_23815 = schema.core.checker(input_schema23798_23814);
var output_checker23800_23816 = schema.core.checker(output_schema23797_23813);
/**
 * Inputs: [data owner]
 */
starfreighter.app.app = ((function (ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816){
return (function starfreighter$app$app(G__23801,G__23802){
var validate__18351__auto__ = ufv___23812.get_cell();
if(cljs.core.truth_(validate__18351__auto__)){
var args__18352__auto___23817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23801,G__23802], null);
var temp__4657__auto___23818 = (input_checker23799_23815.cljs$core$IFn$_invoke$arity$1 ? input_checker23799_23815.cljs$core$IFn$_invoke$arity$1(args__18352__auto___23817) : input_checker23799_23815.call(null,args__18352__auto___23817));
if(cljs.core.truth_(temp__4657__auto___23818)){
var error__18353__auto___23819 = temp__4657__auto___23818;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23819], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema23798_23814,cljs.core.cst$kw$value,args__18352__auto___23817,cljs.core.cst$kw$error,error__18353__auto___23819], null));
} else {
}
} else {
}

var o__18354__auto__ = (function (){var data = G__23801;
var owner = G__23802;
while(true){
if(typeof starfreighter.app.t_starfreighter$app23806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
starfreighter.app.t_starfreighter$app23806 = (function (owner,data,input_checker23799,output_schema23797,G__23801,G__23802,output_checker23800,validate__18351__auto__,input_schema23798,app,ufv__,meta23807){
this.owner = owner;
this.data = data;
this.input_checker23799 = input_checker23799;
this.output_schema23797 = output_schema23797;
this.G__23801 = G__23801;
this.G__23802 = G__23802;
this.output_checker23800 = output_checker23800;
this.validate__18351__auto__ = validate__18351__auto__;
this.input_schema23798 = input_schema23798;
this.app = app;
this.ufv__ = ufv__;
this.meta23807 = meta23807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
starfreighter.app.t_starfreighter$app23806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816){
return (function (_23808,meta23807__$1){
var self__ = this;
var _23808__$1 = this;
return (new starfreighter.app.t_starfreighter$app23806(self__.owner,self__.data,self__.input_checker23799,self__.output_schema23797,self__.G__23801,self__.G__23802,self__.output_checker23800,self__.validate__18351__auto__,self__.input_schema23798,self__.app,self__.ufv__,meta23807__$1));
});})(validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816))
;

starfreighter.app.t_starfreighter$app23806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816){
return (function (_23808){
var self__ = this;
var _23808__$1 = this;
return self__.meta23807;
});})(validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816))
;

starfreighter.app.t_starfreighter$app23806.prototype.om$core$IDisplayName$ = true;

starfreighter.app.t_starfreighter$app23806.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816))
;

starfreighter.app.t_starfreighter$app23806.prototype.om$core$IRender$ = true;

starfreighter.app.t_starfreighter$app23806.prototype.om$core$IRender$render$arity$1 = ((function (validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "app", "onClick": om_tools.dom.format_opts(((function (___$1,validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816){
return (function (p1__23795_SHARP_){
p1__23795_SHARP_.stopPropagation();

return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$info_DASH_target,null);
});})(___$1,validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "left"}),cljs.core.flatten((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.status_bar,self__.data),om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.card_view,cljs.core.cst$kw$card.cljs$core$IFn$_invoke$arity$1(self__.data)),om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.choice_buttons,self__.data),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "lists"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.crew_list,self__.data),om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.cargo_list,self__.data)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "right"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.starmap,self__.data),om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.info_box,self__.data)],null))))],null))));
});})(validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816))
;

starfreighter.app.t_starfreighter$app23806.getBasis = ((function (validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$input_DASH_checker23799,cljs.core.cst$sym$output_DASH_schema23797,cljs.core.with_meta(cljs.core.cst$sym$G__23801,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__23802,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_checker23800,cljs.core.cst$sym$validate__18351__auto__,cljs.core.cst$sym$input_DASH_schema23798,cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema23797,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema23798], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta23807], null);
});})(validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816))
;

starfreighter.app.t_starfreighter$app23806.cljs$lang$type = true;

starfreighter.app.t_starfreighter$app23806.cljs$lang$ctorStr = "starfreighter.app/t_starfreighter$app23806";

starfreighter.app.t_starfreighter$app23806.cljs$lang$ctorPrWriter = ((function (validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"starfreighter.app/t_starfreighter$app23806");
});})(validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816))
;

starfreighter.app.__GT_t_starfreighter$app23806 = ((function (validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816){
return (function starfreighter$app$app_$___GT_t_starfreighter$app23806(owner__$1,data__$1,input_checker23799__$1,output_schema23797__$1,G__23801__$1,G__23802__$1,output_checker23800__$1,validate__18351__auto____$1,input_schema23798__$1,app__$1,ufv____$1,meta23807){
return (new starfreighter.app.t_starfreighter$app23806(owner__$1,data__$1,input_checker23799__$1,output_schema23797__$1,G__23801__$1,G__23802__$1,output_checker23800__$1,validate__18351__auto____$1,input_schema23798__$1,app__$1,ufv____$1,meta23807));
});})(validate__18351__auto__,ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816))
;

}

return (new starfreighter.app.t_starfreighter$app23806(owner,data,input_checker23799_23815,output_schema23797_23813,G__23801,G__23802,output_checker23800_23816,validate__18351__auto__,input_schema23798_23814,starfreighter$app$app,ufv___23812,null));
break;
}
})();
if(cljs.core.truth_(validate__18351__auto__)){
var temp__4657__auto___23820 = (output_checker23800_23816.cljs$core$IFn$_invoke$arity$1 ? output_checker23800_23816.cljs$core$IFn$_invoke$arity$1(o__18354__auto__) : output_checker23800_23816.call(null,o__18354__auto__));
if(cljs.core.truth_(temp__4657__auto___23820)){
var error__18353__auto___23821 = temp__4657__auto___23820;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__18353__auto___23821], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema23797_23813,cljs.core.cst$kw$value,o__18354__auto__,cljs.core.cst$kw$error,error__18353__auto___23821], null));
} else {
}
} else {
}

return o__18354__auto__;
});})(ufv___23812,output_schema23797_23813,input_schema23798_23814,input_checker23799_23815,output_checker23800_23816))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(starfreighter.app.app),schema.core.make_fn_schema(output_schema23797_23813,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23798_23814], null)));

starfreighter.app.__GT_app = (function starfreighter$app$__GT_app(var_args){
var args23809 = [];
var len__7479__auto___23822 = arguments.length;
var i__7480__auto___23823 = (0);
while(true){
if((i__7480__auto___23823 < len__7479__auto___23822)){
args23809.push((arguments[i__7480__auto___23823]));

var G__23824 = (i__7480__auto___23823 + (1));
i__7480__auto___23823 = G__23824;
continue;
} else {
}
break;
}

var G__23811 = args23809.length;
switch (G__23811) {
case 1:
return starfreighter.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return starfreighter.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23809.length)].join('')));

}
});

starfreighter.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23200__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(starfreighter.app.app,cursor__23200__auto__);
});

starfreighter.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23200__auto__,m23796){
return om.core.build.cljs$core$IFn$_invoke$arity$3(starfreighter.app.app,cursor__23200__auto__,m23796);
});

starfreighter.app.__GT_app.cljs$lang$maxFixedArity = 2;

starfreighter.app.init_BANG_ = (function starfreighter$app$init_BANG_(){
return om.core.root(starfreighter.app.app,starfreighter.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("app")], null));
});
starfreighter.app.init_BANG_();
