// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.spec.collection');
goog.require('schema.spec.core');
goog.require('schema.spec.variant');
goog.require('schema.spec.leaf');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (schema.core.spec[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (schema.core.spec["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (schema.core.explain[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (schema.core.explain["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return ((function (c){
return (function (value){
var temp__4657__auto___19869 = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
if(cljs.core.truth_(temp__4657__auto___19869)){
var error_19870 = temp__4657__auto___19869;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_19870], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$value,value,cljs.core.cst$kw$error,error_19870], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator(schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__19871_SHARP_){
var and__6392__auto__ = !((p1__19871_SHARP_ == null));
if(and__6392__auto__){
var or__6404__auto__ = (klass === p1__19871_SHARP_.constructor);
if(or__6404__auto__){
return or__6404__auto__;
} else {
return p1__19871_SHARP_ instanceof klass;
}
} else {
return and__6392__auto__;
}
}),(function (p1__19872_SHARP_){
return cljs.core._conj((function (){var x__7238__auto__ = klass;
return cljs.core._conj((function (){var x__7238__auto____$1 = p1__19872_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
})(),cljs.core.cst$sym$instance_QMARK_);
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__4655__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4655__auto__)){
var class_schema = temp__4655__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__4655__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4655__auto__)){
var more_schema = temp__4655__auto__;
return schema.core.explain(more_schema);
} else {
var pred__19873 = cljs.core._EQ_;
var expr__19874 = this$;
if(cljs.core.truth_((pred__19873.cljs$core$IFn$_invoke$arity$2 ? pred__19873.cljs$core$IFn$_invoke$arity$2(null,expr__19874) : pred__19873.call(null,null,expr__19874)))){
return cljs.core.cst$sym$Str;
} else {
if(cljs.core.truth_((pred__19873.cljs$core$IFn$_invoke$arity$2 ? pred__19873.cljs$core$IFn$_invoke$arity$2(Boolean,expr__19874) : pred__19873.call(null,Boolean,expr__19874)))){
return cljs.core.cst$sym$Bool;
} else {
if(cljs.core.truth_((pred__19873.cljs$core$IFn$_invoke$arity$2 ? pred__19873.cljs$core$IFn$_invoke$arity$2(Number,expr__19874) : pred__19873.call(null,Number,expr__19874)))){
return cljs.core.cst$sym$Num;
} else {
if(cljs.core.truth_((pred__19873.cljs$core$IFn$_invoke$arity$2 ? pred__19873.cljs$core$IFn$_invoke$arity$2(null,expr__19874) : pred__19873.call(null,null,expr__19874)))){
return cljs.core.cst$sym$Regex;
} else {
if(cljs.core.truth_((pred__19873.cljs$core$IFn$_invoke$arity$2 ? pred__19873.cljs$core$IFn$_invoke$arity$2(Date,expr__19874) : pred__19873.call(null,Date,expr__19874)))){
return cljs.core.cst$sym$Inst;
} else {
if(cljs.core.truth_((pred__19873.cljs$core$IFn$_invoke$arity$2 ? pred__19873.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__19874) : pred__19873.call(null,cljs.core.UUID,expr__19874)))){
return cljs.core.cst$sym$Uuid;
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k19877,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__19879 = (((k19877 instanceof cljs.core.Keyword))?k19877.fqn:null);
switch (G__19879) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19877,else__7029__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.AnythingSchema{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19876){
var self__ = this;
var G__19876__$1 = this;
return (new cljs.core.RecordIter((0),G__19876__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__19876){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__19880 = cljs.core.keyword_identical_QMARK_;
var expr__19881 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__19883 = cljs.core.cst$kw$_;
var G__19884 = expr__19881;
return (pred__19880.cljs$core$IFn$_invoke$arity$2 ? pred__19880.cljs$core$IFn$_invoke$arity$2(G__19883,G__19884) : pred__19880.call(null,G__19883,G__19884));
})())){
return (new schema.core.AnythingSchema(G__19876,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__19876),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__19876){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__19876,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Any;
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__19878){
return (new schema.core.AnythingSchema(cljs.core.cst$kw$_.cljs$core$IFn$_invoke$arity$1(G__19878),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19878,cljs.core.cst$kw$_),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k19889,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__19891 = (((k19889 instanceof cljs.core.Keyword))?k19889.fqn:null);
switch (G__19891) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19889,else__7029__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.EqSchema{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19888){
var self__ = this;
var G__19888__$1 = this;
return (new cljs.core.RecordIter((0),G__19888__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__19888){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__19892 = cljs.core.keyword_identical_QMARK_;
var expr__19893 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__19895 = cljs.core.cst$kw$v;
var G__19896 = expr__19893;
return (pred__19892.cljs$core$IFn$_invoke$arity$2 ? pred__19892.cljs$core$IFn$_invoke$arity$2(G__19895,G__19896) : pred__19892.call(null,G__19895,G__19896));
})())){
return (new schema.core.EqSchema(G__19888,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__19888),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__19888){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__19888,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__19886_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__19886_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19887_SHARP_){
return cljs.core._conj((function (){var x__7238__auto__ = self__.v;
return cljs.core._conj((function (){var x__7238__auto____$1 = p1__19887_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
})(),cljs.core.cst$sym$_EQ_);
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__7238__auto__ = self__.v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$eq);
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__19890){
return (new schema.core.EqSchema(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__19890),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19890,cljs.core.cst$kw$v),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k19901,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__19903 = (((k19901 instanceof cljs.core.Keyword))?k19901.fqn:null);
switch (G__19903) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19901,else__7029__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.Isa{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19900){
var self__ = this;
var G__19900__$1 = this;
return (new cljs.core.RecordIter((0),G__19900__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$parent], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parent,null,cljs.core.cst$kw$h,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__19900){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__19904 = cljs.core.keyword_identical_QMARK_;
var expr__19905 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__19907 = cljs.core.cst$kw$h;
var G__19908 = expr__19905;
return (pred__19904.cljs$core$IFn$_invoke$arity$2 ? pred__19904.cljs$core$IFn$_invoke$arity$2(G__19907,G__19908) : pred__19904.call(null,G__19907,G__19908));
})())){
return (new schema.core.Isa(G__19900,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19909 = cljs.core.cst$kw$parent;
var G__19910 = expr__19905;
return (pred__19904.cljs$core$IFn$_invoke$arity$2 ? pred__19904.cljs$core$IFn$_invoke$arity$2(G__19909,G__19910) : pred__19904.call(null,G__19909,G__19910));
})())){
return (new schema.core.Isa(self__.h,G__19900,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__19900),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__19900){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__19900,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__19898_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__19898_SHARP_,self__.parent);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19899_SHARP_){
return cljs.core._conj((function (){var x__7238__auto__ = p1__19899_SHARP_;
return cljs.core._conj((function (){var x__7238__auto____$1 = self__.parent;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
})(),cljs.core.cst$sym$isa_QMARK_);
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__7238__auto__ = self__.parent;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$isa_QMARK_);
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$h,cljs.core.cst$sym$parent], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__19902){
return (new schema.core.Isa(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__19902),cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__19902),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19902,cljs.core.cst$kw$h,cljs.core.array_seq([cljs.core.cst$kw$parent], 0)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args19912 = [];
var len__7479__auto___19915 = arguments.length;
var i__7480__auto___19916 = (0);
while(true){
if((i__7480__auto___19916 < len__7479__auto___19915)){
args19912.push((arguments[i__7480__auto___19916]));

var G__19917 = (i__7480__auto___19916 + (1));
i__7480__auto___19916 = G__19917;
continue;
} else {
}
break;
}

var G__19914 = args19912.length;
switch (G__19914) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19912.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k19922,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__19924 = (((k19922 instanceof cljs.core.Keyword))?k19922.fqn:null);
switch (G__19924) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19922,else__7029__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.EnumSchema{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19921){
var self__ = this;
var G__19921__$1 = this;
return (new cljs.core.RecordIter((0),G__19921__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vs], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vs,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__19921){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__19925 = cljs.core.keyword_identical_QMARK_;
var expr__19926 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__19928 = cljs.core.cst$kw$vs;
var G__19929 = expr__19926;
return (pred__19925.cljs$core$IFn$_invoke$arity$2 ? pred__19925.cljs$core$IFn$_invoke$arity$2(G__19928,G__19929) : pred__19925.call(null,G__19928,G__19929));
})())){
return (new schema.core.EnumSchema(G__19921,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__19921),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__19921){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__19921,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__19919_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__19919_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19920_SHARP_){
var x__7238__auto__ = self__.vs;
return cljs.core._conj((function (){var x__7238__auto____$1 = p1__19920_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$enum,self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vs], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__19923){
return (new schema.core.EnumSchema(cljs.core.cst$kw$vs.cljs$core$IFn$_invoke$arity$1(G__19923),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19923,cljs.core.cst$kw$vs),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__7486__auto__ = [];
var len__7479__auto___19932 = arguments.length;
var i__7480__auto___19933 = (0);
while(true){
if((i__7480__auto___19933 < len__7479__auto___19932)){
args__7486__auto__.push((arguments[i__7480__auto___19933]));

var G__19934 = (i__7480__auto___19933 + (1));
i__7480__auto___19933 = G__19934;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq19931){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19931));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k19937,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__19939 = (((k19937 instanceof cljs.core.Keyword))?k19937.fqn:null);
switch (G__19939) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19937,else__7029__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.Predicate{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19936){
var self__ = this;
var G__19936__$1 = this;
return (new cljs.core.RecordIter((0),G__19936__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_QMARK_,cljs.core.cst$kw$pred_DASH_name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred_DASH_name,null,cljs.core.cst$kw$p_QMARK_,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__19936){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__19940 = cljs.core.keyword_identical_QMARK_;
var expr__19941 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__19943 = cljs.core.cst$kw$p_QMARK_;
var G__19944 = expr__19941;
return (pred__19940.cljs$core$IFn$_invoke$arity$2 ? pred__19940.cljs$core$IFn$_invoke$arity$2(G__19943,G__19944) : pred__19940.call(null,G__19943,G__19944));
})())){
return (new schema.core.Predicate(G__19936,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19945 = cljs.core.cst$kw$pred_DASH_name;
var G__19946 = expr__19941;
return (pred__19940.cljs$core$IFn$_invoke$arity$2 ? pred__19940.cljs$core$IFn$_invoke$arity$2(G__19945,G__19946) : pred__19940.call(null,G__19945,G__19946));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__19936,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__19936),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__19936){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__19936,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__19935_SHARP_){
var x__7238__auto__ = self__.pred_name;
return cljs.core._conj((function (){var x__7238__auto____$1 = p1__19935_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return cljs.core.cst$sym$Int;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return cljs.core.cst$sym$Keyword;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return cljs.core.cst$sym$Symbol;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return cljs.core.cst$sym$Str;
} else {
return cljs.core._conj((function (){var x__7238__auto__ = self__.pred_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$pred);

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p_QMARK_,cljs.core.cst$sym$pred_DASH_name], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__19938){
return (new schema.core.Predicate(cljs.core.cst$kw$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19938),cljs.core.cst$kw$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__19938),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19938,cljs.core.cst$kw$p_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$pred_DASH_name], 0)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args19948 = [];
var len__7479__auto___19951 = arguments.length;
var i__7480__auto___19952 = (0);
while(true){
if((i__7480__auto___19952 < len__7479__auto___19951)){
args19948.push((arguments[i__7480__auto___19952]));

var G__19953 = (i__7480__auto___19952 + (1));
i__7480__auto___19952 = G__19953;
continue;
} else {
}
break;
}

var G__19950 = args19948.length;
switch (G__19950) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19948.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;

schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return cljs.core.cst$kw$proto_DASH_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k19958,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__19960 = (((k19958 instanceof cljs.core.Keyword))?k19958.fqn:null);
switch (G__19960) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19958,else__7029__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.Protocol{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19957){
var self__ = this;
var G__19957__$1 = this;
return (new cljs.core.RecordIter((0),G__19957__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__19957){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__19961 = cljs.core.keyword_identical_QMARK_;
var expr__19962 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__19964 = cljs.core.cst$kw$p;
var G__19965 = expr__19962;
return (pred__19961.cljs$core$IFn$_invoke$arity$2 ? pred__19961.cljs$core$IFn$_invoke$arity$2(G__19964,G__19965) : pred__19961.call(null,G__19964,G__19965));
})())){
return (new schema.core.Protocol(G__19957,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__19957),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__19957){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__19957,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__19955_SHARP_){
return cljs.core.cst$kw$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,p1__19955_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19956_SHARP_){
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.protocol_name(this$__$1);
return cljs.core._conj((function (){var x__7238__auto____$1 = p1__19956_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
})(),cljs.core.cst$sym$satisfies_QMARK_);
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.protocol_name(this$__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$protocol);
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__19959){
return (new schema.core.Protocol(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(G__19959),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19959,cljs.core.cst$kw$p),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__18597__18598__auto__){
return cljs.core._conj((function (){var x__7238__auto__ = p1__18597__18598__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$string_QMARK_);
});})(this$__$1))
),schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__19967_SHARP_){
return cljs.core.re_find(this$__$1,p1__19967_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19968_SHARP_){
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.explain(this$__$1);
return cljs.core._conj((function (){var x__7238__auto____$1 = p1__19968_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
})(),cljs.core.cst$sym$re_DASH_find);
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core19971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core19971 = (function (meta19972){
this.meta19972 = meta19972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core19971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19973,meta19972__$1){
var self__ = this;
var _19973__$1 = this;
return (new schema.core.t_schema$core19971(meta19972__$1));
});

schema.core.t_schema$core19971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19973){
var self__ = this;
var _19973__$1 = this;
return self__.meta19972;
});

schema.core.t_schema$core19971.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core19971.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__19969_SHARP_){
return (p1__19969_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19970_SHARP_){
return cljs.core._conj(cljs.core._conj((function (){var x__7238__auto__ = p1__19970_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$js_SLASH_RegExp),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
));
});

schema.core.t_schema$core19971.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Regex;
});

schema.core.t_schema$core19971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta19972], null);
});

schema.core.t_schema$core19971.cljs$lang$type = true;

schema.core.t_schema$core19971.cljs$lang$ctorStr = "schema.core/t_schema$core19971";

schema.core.t_schema$core19971.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"schema.core/t_schema$core19971");
});

schema.core.__GT_t_schema$core19971 = (function schema$core$__GT_t_schema$core19971(meta19972){
return (new schema.core.t_schema$core19971(meta19972));
});

}

return (new schema.core.t_schema$core19971(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k19975,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__19977 = (((k19975 instanceof cljs.core.Keyword))?k19975.fqn:null);
switch (G__19977) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19975,else__7029__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.Maybe{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19974){
var self__ = this;
var G__19974__$1 = this;
return (new cljs.core.RecordIter((0),G__19974__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__19974){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__19978 = cljs.core.keyword_identical_QMARK_;
var expr__19979 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__19981 = cljs.core.cst$kw$schema;
var G__19982 = expr__19979;
return (pred__19978.cljs$core$IFn$_invoke$arity$2 ? pred__19978.cljs$core$IFn$_invoke$arity$2(G__19981,G__19982) : pred__19978.call(null,G__19981,G__19982));
})())){
return (new schema.core.Maybe(G__19974,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__19974),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__19974){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__19974,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.nil_QMARK_,cljs.core.cst$kw$schema,schema.core.eq(null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$maybe);
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__19976){
return (new schema.core.Maybe(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__19976),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19976,cljs.core.cst$kw$schema),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k19986,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__19988 = (((k19986 instanceof cljs.core.Keyword))?k19986.fqn:null);
switch (G__19988) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19986,else__7029__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.NamedSchema{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19985){
var self__ = this;
var G__19985__$1 = this;
return (new cljs.core.RecordIter((0),G__19985__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__19985){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__19989 = cljs.core.keyword_identical_QMARK_;
var expr__19990 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__19992 = cljs.core.cst$kw$schema;
var G__19993 = expr__19990;
return (pred__19989.cljs$core$IFn$_invoke$arity$2 ? pred__19989.cljs$core$IFn$_invoke$arity$2(G__19992,G__19993) : pred__19989.call(null,G__19992,G__19993));
})())){
return (new schema.core.NamedSchema(G__19985,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19994 = cljs.core.cst$kw$name;
var G__19995 = expr__19990;
return (pred__19989.cljs$core$IFn$_invoke$arity$2 ? pred__19989.cljs$core$IFn$_invoke$arity$2(G__19994,G__19995) : pred__19989.call(null,G__19994,G__19995));
})())){
return (new schema.core.NamedSchema(self__.schema,G__19985,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__19985),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__19985){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__19985,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,self__.schema,cljs.core.cst$kw$wrap_DASH_error,((function (this$__$1){
return (function (p1__19984_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__19984_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj((function (){var x__7238__auto____$1 = self__.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
})(),cljs.core.cst$sym$named);
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$name], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__19987){
return (new schema.core.NamedSchema(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__19987),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__19987),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19987,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$name], 0)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k19999,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20001 = (((k19999 instanceof cljs.core.Keyword))?k19999.fqn:null);
switch (G__20001) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19999,else__7029__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.Either{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19998){
var self__ = this;
var G__19998__$1 = this;
return (new cljs.core.RecordIter((0),G__19998__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__19998){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20002 = cljs.core.keyword_identical_QMARK_;
var expr__20003 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20005 = cljs.core.cst$kw$schemas;
var G__20006 = expr__20003;
return (pred__20002.cljs$core$IFn$_invoke$arity$2 ? pred__20002.cljs$core$IFn$_invoke$arity$2(G__20005,G__20006) : pred__20002.call(null,G__20005,G__20006));
})())){
return (new schema.core.Either(G__19998,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__19998),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__19998){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__19998,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__7184__auto__ = ((function (this$__$1){
return (function schema$core$iter__20007(s__20008){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20008__$1 = s__20008;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20008__$1);
if(temp__4657__auto__){
var s__20008__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20008__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20008__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20010 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20009 = (0);
while(true){
if((i__20009 < size__7183__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20009);
cljs.core.chunk_append(b__20010,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null));

var G__20014 = (i__20009 + (1));
i__20009 = G__20014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20010),schema$core$iter__20007(cljs.core.chunk_rest(s__20008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20010),null);
}
} else {
var s = cljs.core.first(s__20008__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__20007(cljs.core.rest(s__20008__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7184__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__19997_SHARP_){
return cljs.core._conj((function (){var x__7238__auto__ = p1__19997_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$some_DASH_matching_DASH_either_DASH_clause_QMARK_);
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$either,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__20000){
return (new schema.core.Either(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__20000),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20000,cljs.core.cst$kw$schemas),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20016 = arguments.length;
var i__7480__auto___20017 = (0);
while(true){
if((i__7480__auto___20017 < len__7479__auto___20016)){
args__7486__auto__.push((arguments[i__7480__auto___20017]));

var G__20018 = (i__7480__auto___20017 + (1));
i__7480__auto___20017 = G__20018;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq20015){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20015));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20021,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20023 = (((k20021 instanceof cljs.core.Keyword))?k20021.fqn:null);
switch (G__20023) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20021,else__7029__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20020){
var self__ = this;
var G__20020__$1 = this;
return (new cljs.core.RecordIter((0),G__20020__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.cst$kw$error_DASH_symbol], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,null,cljs.core.cst$kw$error_DASH_symbol,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20020){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20024 = cljs.core.keyword_identical_QMARK_;
var expr__20025 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20027 = cljs.core.cst$kw$preds_DASH_and_DASH_schemas;
var G__20028 = expr__20025;
return (pred__20024.cljs$core$IFn$_invoke$arity$2 ? pred__20024.cljs$core$IFn$_invoke$arity$2(G__20027,G__20028) : pred__20024.call(null,G__20027,G__20028));
})())){
return (new schema.core.ConditionalSchema(G__20020,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20029 = cljs.core.cst$kw$error_DASH_symbol;
var G__20030 = expr__20025;
return (pred__20024.cljs$core$IFn$_invoke$arity$2 ? pred__20024.cljs$core$IFn$_invoke$arity$2(G__20029,G__20030) : pred__20024.call(null,G__20029,G__20030));
})())){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__20020,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20020),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20020){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__20020,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__7184__auto__ = ((function (this$__$1){
return (function schema$core$iter__20031(s__20032){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20032__$1 = s__20032;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20032__$1);
if(temp__4657__auto__){
var s__20032__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20032__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20032__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20034 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20033 = (0);
while(true){
if((i__20033 < size__7183__auto__)){
var vec__20043 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20033);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20043,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20043,(1),null);
cljs.core.chunk_append(b__20034,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null));

var G__20054 = (i__20033 + (1));
i__20033 = G__20054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20034),schema$core$iter__20031(cljs.core.chunk_rest(s__20032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20034),null);
}
} else {
var vec__20046 = cljs.core.first(s__20032__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20046,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20046,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null),schema$core$iter__20031(cljs.core.rest(s__20032__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7184__auto__(self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__20019_SHARP_){
var x__7238__auto__ = (function (){var or__6404__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return cljs.core.cst$sym$some_DASH_matching_DASH_condition_QMARK_;
}
}
})();
return cljs.core._conj((function (){var x__7238__auto____$1 = p1__20019_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$conditional,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__20049){
var vec__20050 = p__20049;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20050,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20050,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preds_DASH_and_DASH_schemas,cljs.core.cst$sym$error_DASH_symbol], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__20022){
return (new schema.core.ConditionalSchema(cljs.core.cst$kw$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__20022),cljs.core.cst$kw$error_DASH_symbol.cljs$core$IFn$_invoke$arity$1(G__20022),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20022,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.array_seq([cljs.core.cst$kw$error_DASH_symbol], 0)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20074 = arguments.length;
var i__7480__auto___20075 = (0);
while(true){
if((i__7480__auto___20075 < len__7479__auto___20074)){
args__7486__auto__.push((arguments[i__7480__auto___20075]));

var G__20076 = (i__7480__auto___20075 + (1));
i__7480__auto___20075 = G__20076;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && ((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__7184__auto__ = (function schema$core$iter__20056(s__20057){
return (new cljs.core.LazySeq(null,(function (){
var s__20057__$1 = s__20057;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20057__$1);
if(temp__4657__auto__){
var s__20057__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20057__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20057__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20059 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20058 = (0);
while(true){
if((i__20058 < size__7183__auto__)){
var vec__20068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20058);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20068,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20068,(1),null);
cljs.core.chunk_append(b__20059,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null));

var G__20077 = (i__20058 + (1));
i__20058 = G__20077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20059),schema$core$iter__20056(cljs.core.chunk_rest(s__20057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20059),null);
}
} else {
var vec__20071 = cljs.core.first(s__20057__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20071,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20071,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null),schema$core$iter__20056(cljs.core.rest(s__20057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq20055){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20055));
});


/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (schema.core.precondition[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return (m__7068__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto__.call(null,this$));
} else {
var m__7068__auto____$1 = (schema.core.precondition["_"]);
if(!((m__7068__auto____$1 == null))){
return (m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7068__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7068__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__7184__auto__ = ((function (this$__$1){
return (function schema$core$iter__20078(s__20079){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20079__$1 = s__20079;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20079__$1);
if(temp__4657__auto__){
var s__20079__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20079__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20079__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20081 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20080 = (0);
while(true){
if((i__20080 < size__7183__auto__)){
var map__20088 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20080);
var map__20088__$1 = ((((!((map__20088 == null)))?((((map__20088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20088):map__20088);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20088__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20088__$1,cljs.core.cst$kw$schema);
cljs.core.chunk_append(b__20081,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__20092 = (i__20080 + (1));
i__20080 = G__20092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20081),schema$core$iter__20078(cljs.core.chunk_rest(s__20079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20081),null);
}
} else {
var map__20090 = cljs.core.first(s__20079__$2);
var map__20090__$1 = ((((!((map__20090 == null)))?((((map__20090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20090):map__20090);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20090__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20090__$1,cljs.core.cst$kw$schema);
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__20078(cljs.core.rest(s__20079__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7184__auto__(this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20095,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20097 = (((k20095 instanceof cljs.core.Keyword))?k20095.fqn:null);
switch (G__20097) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20095,else__7029__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.CondPre{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$ = true;

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20094){
var self__ = this;
var G__20094__$1 = this;
return (new cljs.core.RecordIter((0),G__20094__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20094){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20098 = cljs.core.keyword_identical_QMARK_;
var expr__20099 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20101 = cljs.core.cst$kw$schemas;
var G__20102 = expr__20099;
return (pred__20098.cljs$core$IFn$_invoke$arity$2 ? pred__20098.cljs$core$IFn$_invoke$arity$2(G__20101,G__20102) : pred__20098.call(null,G__20101,G__20102));
})())){
return (new schema.core.CondPre(G__20094,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20094),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20094){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__20094,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = true;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__7184__auto__ = ((function (this$__$1){
return (function schema$core$iter__20103(s__20104){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20104__$1 = s__20104;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20104__$1);
if(temp__4657__auto__){
var s__20104__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20104__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20104__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20106 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20105 = (0);
while(true){
if((i__20105 < size__7183__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20105);
cljs.core.chunk_append(b__20106,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null));

var G__20110 = (i__20105 + (1));
i__20105 = G__20110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20106),schema$core$iter__20103(cljs.core.chunk_rest(s__20104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20106),null);
}
} else {
var s = cljs.core.first(s__20104__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__20103(cljs.core.rest(s__20104__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7184__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__20093_SHARP_){
return cljs.core._conj((function (){var x__7238__auto__ = p1__20093_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$matches_DASH_some_DASH_precondition_QMARK_);
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cond_DASH_pre,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__20096){
return (new schema.core.CondPre(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__20096),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20096,cljs.core.cst$kw$schemas),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20112 = arguments.length;
var i__7480__auto___20113 = (0);
while(true){
if((i__7480__auto___20113 < len__7479__auto___20112)){
args__7486__auto__.push((arguments[i__7480__auto___20113]));

var G__20114 = (i__7480__auto___20113 + (1));
i__7480__auto___20113 = G__20114;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq20111){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20111));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20117,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20119 = (((k20117 instanceof cljs.core.Keyword))?k20117.fqn:null);
switch (G__20119) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20117,else__7029__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = true;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(cljs.core.truth_(schema.utils.error_QMARK_(tx))){
return tx;
} else {
var G__20120 = (function (){var or__6404__auto__ = tx;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20120) : f.call(null,G__20120));
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__20115_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,p1__20115_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse(self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.Both{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20116){
var self__ = this;
var G__20116__$1 = this;
return (new cljs.core.RecordIter((0),G__20116__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = true;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20116){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20121 = cljs.core.keyword_identical_QMARK_;
var expr__20122 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20124 = cljs.core.cst$kw$schemas;
var G__20125 = expr__20122;
return (pred__20121.cljs$core$IFn$_invoke$arity$2 ? pred__20121.cljs$core$IFn$_invoke$arity$2(G__20124,G__20125) : pred__20121.call(null,G__20124,G__20125));
})())){
return (new schema.core.Both(G__20116,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20116),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20116){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__20116,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$both,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__20118){
return (new schema.core.Both(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__20118),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20118,cljs.core.cst$kw$schemas),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__7486__auto__ = [];
var len__7479__auto___20128 = arguments.length;
var i__7480__auto___20129 = (0);
while(true){
if((i__7480__auto___20129 < len__7479__auto___20128)){
args__7486__auto__.push((arguments[i__7480__auto___20129]));

var G__20130 = (i__7480__auto___20129 + (1));
i__7480__auto___20129 = G__20130;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq20127){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20127));
});

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__20133 = cljs.core.meta(v);
var map__20133__$1 = ((((!((map__20133 == null)))?((((map__20133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20133):map__20133);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20133__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20133__$1,cljs.core.cst$kw$name);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20136,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20138 = (((k20136 instanceof cljs.core.Keyword))?k20136.fqn:null);
switch (G__20138) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20136,else__7029__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.Recursive{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$ = true;

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20135){
var self__ = this;
var G__20135__$1 = this;
return (new cljs.core.RecordIter((0),G__20135__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$derefable], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$derefable,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20135){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20139 = cljs.core.keyword_identical_QMARK_;
var expr__20140 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20142 = cljs.core.cst$kw$derefable;
var G__20143 = expr__20140;
return (pred__20139.cljs$core$IFn$_invoke$arity$2 ? pred__20139.cljs$core$IFn$_invoke$arity$2(G__20142,G__20143) : pred__20139.call(null,G__20142,G__20143));
})())){
return (new schema.core.Recursive(G__20135,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20135),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20135){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__20135,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.derefable) : cljs.core.deref.call(null,self__.derefable))], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__7238__auto__ = (((self__.derefable instanceof cljs.core.Var))?cljs.core._conj((function (){var x__7238__auto__ = schema.core.var_name(self__.derefable);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$var):cljs.core.cst$sym$$$$);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$recursive);
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$derefable], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__20137){
return (new schema.core.Recursive(cljs.core.cst$kw$derefable.cljs$core$IFn$_invoke$arity$1(G__20137),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20137,cljs.core.cst$kw$derefable),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || (schema__$1.cljs$core$IDeref$))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.array_seq([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20148,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20150 = (((k20148 instanceof cljs.core.Keyword))?k20148.fqn:null);
switch (G__20150) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20148,else__7029__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.RequiredKey{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20147){
var self__ = this;
var G__20147__$1 = this;
return (new cljs.core.RecordIter((0),G__20147__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20147){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20151 = cljs.core.keyword_identical_QMARK_;
var expr__20152 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20154 = cljs.core.cst$kw$k;
var G__20155 = expr__20152;
return (pred__20151.cljs$core$IFn$_invoke$arity$2 ? pred__20151.cljs$core$IFn$_invoke$arity$2(G__20154,G__20155) : pred__20151.call(null,G__20154,G__20155));
})())){
return (new schema.core.RequiredKey(G__20147,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20147),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20147){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__20147,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__20149){
return (new schema.core.RequiredKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__20149),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20149,cljs.core.cst$kw$k),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20158,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20160 = (((k20158 instanceof cljs.core.Keyword))?k20158.fqn:null);
switch (G__20160) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20158,else__7029__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.OptionalKey{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20157){
var self__ = this;
var G__20157__$1 = this;
return (new cljs.core.RecordIter((0),G__20157__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20157){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20161 = cljs.core.keyword_identical_QMARK_;
var expr__20162 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20164 = cljs.core.cst$kw$k;
var G__20165 = expr__20162;
return (pred__20161.cljs$core$IFn$_invoke$arity$2 ? pred__20161.cljs$core$IFn$_invoke$arity$2(G__20164,G__20165) : pred__20161.call(null,G__20164,G__20165));
})())){
return (new schema.core.OptionalKey(G__20157,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20157),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20157){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__20157,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__20159){
return (new schema.core.OptionalKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__20159),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20159,cljs.core.cst$kw$k),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__6404__auto__ = schema.core.required_key_QMARK_(ks);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return schema.core.optional_key_QMARK_(ks);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20168,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20170 = (((k20168 instanceof cljs.core.Keyword))?k20168.fqn:null);
switch (G__20170) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20168,else__7029__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.MapEntry{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20167){
var self__ = this;
var G__20167__$1 = this;
return (new cljs.core.RecordIter((0),G__20167__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_schema,cljs.core.cst$kw$val_DASH_schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key_DASH_schema,null,cljs.core.cst$kw$val_DASH_schema,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20167){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20171 = cljs.core.keyword_identical_QMARK_;
var expr__20172 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20174 = cljs.core.cst$kw$key_DASH_schema;
var G__20175 = expr__20172;
return (pred__20171.cljs$core$IFn$_invoke$arity$2 ? pred__20171.cljs$core$IFn$_invoke$arity$2(G__20174,G__20175) : pred__20171.call(null,G__20174,G__20175));
})())){
return (new schema.core.MapEntry(G__20167,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20176 = cljs.core.cst$kw$val_DASH_schema;
var G__20177 = expr__20172;
return (pred__20171.cljs$core$IFn$_invoke$arity$2 ? pred__20171.cljs$core$IFn$_invoke$arity$2(G__20176,G__20177) : pred__20171.call(null,G__20176,G__20177));
})())){
return (new schema.core.MapEntry(self__.key_schema,G__20167,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20167),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20167){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__20167,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,cljs.core.vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
var G__20178_20189 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__20178_20189) : item_fn.call(null,G__20178_20189));

return e;
});})(this$__$1))
),schema.spec.collection.one_element(true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
var G__20179_20190 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__20179_20190) : item_fn.call(null,G__20179_20190));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__20180,p__20181,_){
var vec__20182 = p__20180;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20182,(0),null);
var vec__20185 = p__20181;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20185,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20185,(1),null);
var temp__4655__auto__ = schema.utils.error_val(xk);
if(cljs.core.truth_(temp__4655__auto__)){
var k_err = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,cljs.core.cst$sym$invalid_DASH_key], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val(xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.explain(self__.key_schema);
return cljs.core._conj((function (){var x__7238__auto____$1 = schema.core.explain(self__.val_schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
})(),cljs.core.cst$sym$map_DASH_entry);
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key_DASH_schema,cljs.core.cst$sym$val_DASH_schema], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__20169){
return (new schema.core.MapEntry(cljs.core.cst$kw$key_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__20169),cljs.core.cst$kw$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__20169),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20169,cljs.core.cst$kw$key_DASH_schema,cljs.core.array_seq([cljs.core.cst$kw$val_DASH_schema], 0)),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
var x__7238__auto__ = (cljs.core.truth_(schema.core.required_key_QMARK_(kspec))?cljs.core.cst$sym$required_DASH_key:(cljs.core.truth_(schema.core.optional_key_QMARK_(kspec))?cljs.core.cst$sym$optional_DASH_key:null));
return cljs.core._conj((function (){var x__7238__auto____$1 = schema.core.explicit_schema_key(kspec);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_20236 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema){
return (function (p1__20191_SHARP_){
return (cljs.core.count(p1__20191_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_20236)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([duplicate_keys_20236], 0))));
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__7184__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__20214(s__20215){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__20215__$1 = s__20215;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20215__$1);
if(temp__4657__auto__){
var s__20215__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20215__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20215__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20217 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20216 = (0);
while(true){
if((i__20216 < size__7183__auto__)){
var vec__20228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20216);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20228,(1),null);
cljs.core.chunk_append(b__20217,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__20216,rk,required_QMARK_,vec__20228,k,v,c__7182__auto__,size__7183__auto__,b__20217,s__20215__$2,temp__4657__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__20231_20237 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__20231_20237) : item_fn.call(null,G__20231_20237));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__20216,rk,required_QMARK_,vec__20228,k,v,c__7182__auto__,size__7183__auto__,b__20217,s__20215__$2,temp__4657__auto__,extra_keys_schema))
);
})());

var G__20238 = (i__20216 + (1));
i__20216 = G__20238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20217),schema$core$map_elements_$_iter__20214(cljs.core.chunk_rest(s__20215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20217),null);
}
} else {
var vec__20232 = cljs.core.first(s__20215__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20232,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20232,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__20232,k,v,s__20215__$2,temp__4657__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__20235_20239 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__20235_20239) : item_fn.call(null,G__20235_20239));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__20232,k,v,s__20215__$2,temp__4657__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__20214(cljs.core.rest(s__20215__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__7184__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__7184__auto__ = (function schema$core$map_error_$_iter__20258(s__20259){
return (new cljs.core.LazySeq(null,(function (){
var s__20259__$1 = s__20259;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20259__$1);
if(temp__4657__auto__){
var s__20259__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20259__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20259__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20261 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20260 = (0);
while(true){
if((i__20260 < size__7183__auto__)){
var vec__20270 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20260);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(1),null);
cljs.core.chunk_append(b__20261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null));

var G__20276 = (i__20260 + (1));
i__20260 = G__20276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20261),schema$core$map_error_$_iter__20258(cljs.core.chunk_rest(s__20259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20261),null);
}
} else {
var vec__20273 = cljs.core.first(s__20259__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20273,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20273,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null),schema$core$map_error_$_iter__20258(cljs.core.rest(s__20259__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__18597__18598__auto__){
return cljs.core._conj((function (){var x__7238__auto__ = p1__18597__18598__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$map_QMARK_);
})),(function (p1__20277_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__20277_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function schema$core$map_explain_$_iter__20296(s__20297){
return (new cljs.core.LazySeq(null,(function (){
var s__20297__$1 = s__20297;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20297__$1);
if(temp__4657__auto__){
var s__20297__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20297__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20297__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20299 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20298 = (0);
while(true){
if((i__20298 < size__7183__auto__)){
var vec__20308 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20298);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20308,(1),null);
cljs.core.chunk_append(b__20299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__20314 = (i__20298 + (1));
i__20298 = G__20314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20299),schema$core$map_explain_$_iter__20296(cljs.core.chunk_rest(s__20297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20299),null);
}
} else {
var vec__20311 = cljs.core.first(s__20297__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20311,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20311,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__20296(cljs.core.rest(s__20297__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__18597__18598__auto__){
return cljs.core._conj((function (){var x__7238__auto__ = p1__18597__18598__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$set_QMARK_);
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.first(this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20316,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20318 = (((k20316 instanceof cljs.core.Keyword))?k20316.fqn:null);
switch (G__20318) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20316,else__7029__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.Queue{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$ = true;

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20315){
var self__ = this;
var G__20315__$1 = this;
return (new cljs.core.RecordIter((0),G__20315__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20315){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20319 = cljs.core.keyword_identical_QMARK_;
var expr__20320 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20322 = cljs.core.cst$kw$schema;
var G__20323 = expr__20320;
return (pred__20319.cljs$core$IFn$_invoke$arity$2 ? pred__20319.cljs$core$IFn$_invoke$arity$2(G__20322,G__20323) : pred__20319.call(null,G__20322,G__20323));
})())){
return (new schema.core.Queue(G__20315,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20315),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20315){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__20315,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = true;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__18597__18598__auto__){
return cljs.core._conj((function (){var x__7238__auto__ = p1__18597__18598__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$queue_QMARK_);
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$queue);
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__20317){
return (new schema.core.Queue(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__20317),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20317,cljs.core.cst$kw$schema),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20326,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20328 = (((k20326 instanceof cljs.core.Keyword))?k20326.fqn:null);
switch (G__20328) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20326,else__7029__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.One{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20325){
var self__ = this;
var G__20325__$1 = this;
return (new cljs.core.RecordIter((0),G__20325__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$optional_QMARK_,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20325){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20329 = cljs.core.keyword_identical_QMARK_;
var expr__20330 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20332 = cljs.core.cst$kw$schema;
var G__20333 = expr__20330;
return (pred__20329.cljs$core$IFn$_invoke$arity$2 ? pred__20329.cljs$core$IFn$_invoke$arity$2(G__20332,G__20333) : pred__20329.call(null,G__20332,G__20333));
})())){
return (new schema.core.One(G__20325,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20334 = cljs.core.cst$kw$optional_QMARK_;
var G__20335 = expr__20330;
return (pred__20329.cljs$core$IFn$_invoke$arity$2 ? pred__20329.cljs$core$IFn$_invoke$arity$2(G__20334,G__20335) : pred__20329.call(null,G__20334,G__20335));
})())){
return (new schema.core.One(self__.schema,G__20325,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20336 = cljs.core.cst$kw$name;
var G__20337 = expr__20330;
return (pred__20329.cljs$core$IFn$_invoke$arity$2 ? pred__20329.cljs$core$IFn$_invoke$arity$2(G__20336,G__20337) : pred__20329.call(null,G__20336,G__20337));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__20325,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20325),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20325){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__20325,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$optional_QMARK_,cljs.core.cst$sym$name], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__20327){
return (new schema.core.One(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__20327),cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__20327),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__20327),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20327,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], 0)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__20348 = cljs.core.split_with((function (p1__20339_SHARP_){
return ((p1__20339_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__20339_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20348,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20348,(1),null);
var vec__20351 = cljs.core.split_with(((function (vec__20348,required,more){
return (function (p1__20340_SHARP_){
var and__6392__auto__ = (p1__20340_SHARP_ instanceof schema.core.One);
if(and__6392__auto__){
return cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__20340_SHARP_);
} else {
return and__6392__auto__;
}
});})(vec__20348,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20351,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20351,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__20348,required,more,vec__20351,optional,more__$1){
return (function (p1__20341_SHARP_){
return !((p1__20341_SHARP_ instanceof schema.core.One));
});})(vec__20348,required,more,vec__20351,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_(x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__20354_SHARP_){
return cljs.core._conj((function (){var x__7238__auto__ = p1__20354_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$sequential_QMARK_);
});})(this$__$1))
),cljs.core.vec,(function (){var vec__20355 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20355,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20355,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__7184__auto__ = ((function (vec__20355,singles,multi,this$__$1){
return (function schema$core$iter__20358(s__20359){
return (new cljs.core.LazySeq(null,((function (vec__20355,singles,multi,this$__$1){
return (function (){
var s__20359__$1 = s__20359;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20359__$1);
if(temp__4657__auto__){
var s__20359__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20359__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20359__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20361 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20360 = (0);
while(true){
if((i__20360 < size__7183__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20360);
cljs.core.chunk_append(b__20361,(function (){var required_QMARK_ = cljs.core.not(s.optional_QMARK_);
return schema.spec.collection.one_element(required_QMARK_,schema.core.named(s.schema,s.name),((function (i__20360,required_QMARK_,s,c__7182__auto__,size__7183__auto__,b__20361,s__20359__$2,temp__4657__auto__,vec__20355,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4655__auto__ = cljs.core.seq(x);
if(temp__4655__auto__){
var x__$1 = temp__4655__auto__;
var G__20368_20381 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__20368_20381) : item_fn.call(null,G__20368_20381));

return cljs.core.rest(x__$1);
} else {
if(required_QMARK_){
var G__20369_20382 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (i__20360,temp__4655__auto__,required_QMARK_,s,c__7182__auto__,size__7183__auto__,b__20361,s__20359__$2,temp__4657__auto__,vec__20355,singles,multi,this$__$1){
return (function (){
return cljs.core._conj((function (){var x__7238__auto__ = s.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$present_QMARK_);
});})(i__20360,temp__4655__auto__,required_QMARK_,s,c__7182__auto__,size__7183__auto__,b__20361,s__20359__$2,temp__4657__auto__,vec__20355,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__20369_20382) : item_fn.call(null,G__20369_20382));
} else {
}

return null;
}
});})(i__20360,required_QMARK_,s,c__7182__auto__,size__7183__auto__,b__20361,s__20359__$2,temp__4657__auto__,vec__20355,singles,multi,this$__$1))
);
})());

var G__20383 = (i__20360 + (1));
i__20360 = G__20383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20361),schema$core$iter__20358(cljs.core.chunk_rest(s__20359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20361),null);
}
} else {
var s = cljs.core.first(s__20359__$2);
return cljs.core.cons((function (){var required_QMARK_ = cljs.core.not(s.optional_QMARK_);
return schema.spec.collection.one_element(required_QMARK_,schema.core.named(s.schema,s.name),((function (required_QMARK_,s,s__20359__$2,temp__4657__auto__,vec__20355,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4655__auto__ = cljs.core.seq(x);
if(temp__4655__auto__){
var x__$1 = temp__4655__auto__;
var G__20370_20384 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__20370_20384) : item_fn.call(null,G__20370_20384));

return cljs.core.rest(x__$1);
} else {
if(required_QMARK_){
var G__20371_20385 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (temp__4655__auto__,required_QMARK_,s,s__20359__$2,temp__4657__auto__,vec__20355,singles,multi,this$__$1){
return (function (){
return cljs.core._conj((function (){var x__7238__auto__ = s.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$present_QMARK_);
});})(temp__4655__auto__,required_QMARK_,s,s__20359__$2,temp__4657__auto__,vec__20355,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__20371_20385) : item_fn.call(null,G__20371_20385));
} else {
}

return null;
}
});})(required_QMARK_,s,s__20359__$2,temp__4657__auto__,vec__20355,singles,multi,this$__$1))
);
})(),schema$core$iter__20358(cljs.core.rest(s__20359__$2)));
}
} else {
return null;
}
break;
}
});})(vec__20355,singles,multi,this$__$1))
,null,null));
});})(vec__20355,singles,multi,this$__$1))
;
return iter__7184__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(head,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj((function (){var x__7238__auto__ = cljs.core.count(extra);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$has_DASH_extra_DASH_elts_QMARK_);
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__20372 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20372,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20372,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__7184__auto__ = ((function (vec__20372,singles,multi,this$__$1){
return (function schema$core$iter__20375(s__20376){
return (new cljs.core.LazySeq(null,((function (vec__20372,singles,multi,this$__$1){
return (function (){
var s__20376__$1 = s__20376;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20376__$1);
if(temp__4657__auto__){
var s__20376__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20376__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__20376__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__20378 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__20377 = (0);
while(true){
if((i__20377 < size__7183__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__20377);
cljs.core.chunk_append(b__20378,(function (){var x__7238__auto__ = (cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one);
return cljs.core._conj((function (){var x__7238__auto____$1 = schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj((function (){var x__7238__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$2);
})(),x__7238__auto____$1);
})(),x__7238__auto__);
})());

var G__20386 = (i__20377 + (1));
i__20377 = G__20386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20378),schema$core$iter__20375(cljs.core.chunk_rest(s__20376__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20378),null);
}
} else {
var s = cljs.core.first(s__20376__$2);
return cljs.core.cons((function (){var x__7238__auto__ = (cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one);
return cljs.core._conj((function (){var x__7238__auto____$1 = schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj((function (){var x__7238__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$2);
})(),x__7238__auto____$1);
})(),x__7238__auto__);
})(),schema$core$iter__20375(cljs.core.rest(s__20376__$2)));
}
} else {
return null;
}
break;
}
});})(vec__20372,singles,multi,this$__$1))
,null,null));
});})(vec__20372,singles,multi,this$__$1))
;
return iter__7184__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20391,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20393 = (((k20391 instanceof cljs.core.Keyword))?k20391.fqn:null);
switch (G__20393) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20391,else__7029__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.Record{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20390){
var self__ = this;
var G__20390__$1 = this;
return (new cljs.core.RecordIter((0),G__20390__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$klass,cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$klass,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20390){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20394 = cljs.core.keyword_identical_QMARK_;
var expr__20395 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20397 = cljs.core.cst$kw$klass;
var G__20398 = expr__20395;
return (pred__20394.cljs$core$IFn$_invoke$arity$2 ? pred__20394.cljs$core$IFn$_invoke$arity$2(G__20397,G__20398) : pred__20394.call(null,G__20397,G__20398));
})())){
return (new schema.core.Record(G__20390,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20399 = cljs.core.cst$kw$schema;
var G__20400 = expr__20395;
return (pred__20394.cljs$core$IFn$_invoke$arity$2 ? pred__20394.cljs$core$IFn$_invoke$arity$2(G__20399,G__20400) : pred__20394.call(null,G__20399,G__20400));
})())){
return (new schema.core.Record(self__.klass,G__20390,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20390),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20390){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__20390,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__20387_SHARP_){
return (p1__20387_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__20388_SHARP_){
return cljs.core._conj((function (){var x__7238__auto__ = self__.klass;
return cljs.core._conj((function (){var x__7238__auto____$1 = p1__20388_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
})(),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
);
var temp__4655__auto__ = cljs.core.cst$kw$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var evf = temp__4655__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,((function (evf,temp__4655__auto__,p,this$__$1){
return (function (p1__20389_SHARP_){
return cljs.core._conj((function (){var x__7238__auto__ = p1__20389_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$passes_DASH_extra_DASH_validation_QMARK_);
});})(evf,temp__4655__auto__,p,this$__$1))
));
} else {
return p;
}
})(),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),schema.core.map_elements(self__.schema),schema.core.map_error());
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__7238__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)));
return cljs.core._conj((function (){var x__7238__auto____$1 = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto____$1);
})(),x__7238__auto__);
})(),cljs.core.cst$sym$record);
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$klass,cljs.core.cst$sym$schema], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__20392){
return (new schema.core.Record(cljs.core.cst$kw$klass.cljs$core$IFn$_invoke$arity$1(G__20392),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__20392),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20392,cljs.core.cst$kw$klass,cljs.core.array_seq([cljs.core.cst$kw$schema], 0)),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constructor,map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__20407 = cljs.core.split_with((function (p1__20402_SHARP_){
return (p1__20402_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20407,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20407,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20407,required,more){
return (function (p1__20403_SHARP_){
return schema.core.explain(p1__20403_SHARP_.schema);
});})(vec__20407,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7026__auto____$1,k__7027__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k20411,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__20413 = (((k20411 instanceof cljs.core.Keyword))?k20411.fqn:null);
switch (G__20413) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20411,else__7029__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer(writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7041__auto__,pr_pair__7043__auto__,"#schema.core.FnSchema{",", ","}",opts__7042__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20410){
var self__ = this;
var G__20410__$1 = this;
return (new cljs.core.RecordIter((0),G__20410__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output_DASH_schema,cljs.core.cst$kw$input_DASH_schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap(this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map(this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$output_DASH_schema,null,cljs.core.cst$kw$input_DASH_schemas,null], null), null),k__7036__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7036__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__20410){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__20414 = cljs.core.keyword_identical_QMARK_;
var expr__20415 = k__7034__auto__;
if(cljs.core.truth_((function (){var G__20417 = cljs.core.cst$kw$output_DASH_schema;
var G__20418 = expr__20415;
return (pred__20414.cljs$core$IFn$_invoke$arity$2 ? pred__20414.cljs$core$IFn$_invoke$arity$2(G__20417,G__20418) : pred__20414.call(null,G__20417,G__20418));
})())){
return (new schema.core.FnSchema(G__20410,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20419 = cljs.core.cst$kw$input_DASH_schemas;
var G__20420 = expr__20415;
return (pred__20414.cljs$core$IFn$_invoke$arity$2 ? pred__20414.cljs$core$IFn$_invoke$arity$2(G__20419,G__20420) : pred__20414.call(null,G__20419,G__20420));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__20410,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7034__auto__,G__20410),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__20410){
var self__ = this;
var this__7025__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__20410,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7032__auto__)){
return cljs.core._assoc(this__7031__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__18597__18598__auto__){
return cljs.core._conj((function (){var x__7238__auto__ = p1__18597__18598__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$ifn_QMARK_);
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT__STAR_,schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT_,schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema,cljs.core.cst$sym$input_DASH_schemas], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write(writer__7061__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__20412){
return (new schema.core.FnSchema(cljs.core.cst$kw$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__20412),cljs.core.cst$kw$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__20412),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20412,cljs.core.cst$kw$output_DASH_schema,cljs.core.array_seq([cljs.core.cst$kw$input_DASH_schemas], 0)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.cst$kw$name,name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.cst$kw$schema,schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__6404__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var m__18282__auto__ = cljs.core.meta(f);
var k__18283__auto__ = cljs.core.cst$kw$schema;
var temp__4655__auto__ = cljs.core.find(m__18282__auto__,k__18283__auto__);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__18284__auto__ = temp__4655__auto__;
return cljs.core.val(pair__18284__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__18283__auto__,m__18282__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(schema.utils.max_value_length,max_length) : cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length));
});
