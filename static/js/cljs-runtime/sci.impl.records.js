goog.provide('sci.impl.records');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.records !== 'undefined') && (typeof sci.impl.records.to_string !== 'undefined')){
} else {
sci.impl.records.to_string = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__60540 = cljs.core.get_global_hierarchy;
return (fexpr__60540.cljs$core$IFn$_invoke$arity$0 ? fexpr__60540.cljs$core$IFn$_invoke$arity$0() : fexpr__60540.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.records","to-string"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
sci.impl.records.to_string.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$){
var t = sci.impl.types.type_impl(this$);
return [cljs.core.namespace(t),".",cljs.core.name(t),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(this$).toString((16)))].join('');
}));
sci.impl.records.clojure_str = (function sci$impl$records$clojure_str(v){
var t = sci.impl.types.type_impl(v);
return ["#",cljs.core.namespace(t),".",cljs.core.name(t),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,v))].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
sci.impl.records.SciRecord = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.records.SciRecord.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return sci.impl.records.to_string.cljs$core$IFn$_invoke$arity$1(this$);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k60552,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__60561 = k60552;
switch (G__60561) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60552,else__5343__auto__);

}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__60562){
var vec__60563 = p__60562;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60563,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60563,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#sci.impl.records.SciRecord{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60551){
var self__ = this;
var G__60551__$1 = this;
return (new cljs.core.RecordIter((0),G__60551__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new sci.impl.records.SciRecord(self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1162423961 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60553,other60554){
var self__ = this;
var this60553__$1 = this;
return (((!((other60554 == null)))) && ((((this60553__$1.constructor === other60554.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60553__$1.__extmap,other60554.__extmap)))));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new sci.impl.records.SciRecord(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k60552){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k60552);
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__60551){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__60571 = cljs.core.keyword_identical_QMARK_;
var expr__60572 = k__5349__auto__;
return (new sci.impl.records.SciRecord(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__60551),null));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__60551){
var self__ = this;
var this__5339__auto____$1 = this;
return (new sci.impl.records.SciRecord(G__60551,self__.__extmap,self__.__hash));
}));

(sci.impl.records.SciRecord.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(sci.impl.records.SciRecord.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(sci.impl.records.SciRecord.cljs$lang$type = true);

(sci.impl.records.SciRecord.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"sci.impl.records/SciRecord",null,(1),null));
}));

(sci.impl.records.SciRecord.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"sci.impl.records/SciRecord");
}));

/**
 * Positional factory function for sci.impl.records/SciRecord.
 */
sci.impl.records.__GT_SciRecord = (function sci$impl$records$__GT_SciRecord(){
return (new sci.impl.records.SciRecord(null,null,null));
});

/**
 * Factory function for sci.impl.records/SciRecord, taking a map of keywords to field values.
 */
sci.impl.records.map__GT_SciRecord = (function sci$impl$records$map__GT_SciRecord(G__60558){
var extmap__5382__auto__ = (function (){var G__60577 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__60558);
if(cljs.core.record_QMARK_(G__60558)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60577);
} else {
return G__60577;
}
})();
return (new sci.impl.records.SciRecord(null,cljs.core.not_empty(extmap__5382__auto__),null));
});

(sci.impl.records.SciRecord.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.records.SciRecord.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (new_obj,writer,_){
var new_obj__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.records.clojure_str(new_obj__$1)], 0));
}));
sci.impl.records.__GT_record_impl = (function sci$impl$records$__GT_record_impl(m){
return sci.impl.records.map__GT_SciRecord(m);
});
sci.impl.records.defrecord = (function sci$impl$records$defrecord(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60654 = arguments.length;
var i__5767__auto___60655 = (0);
while(true){
if((i__5767__auto___60655 < len__5766__auto___60654)){
args__5772__auto__.push((arguments[i__5767__auto___60655]));

var G__60656 = (i__5767__auto___60655 + (1));
i__5767__auto___60655 = G__60656;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((5) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((5)),(0),null)):null);
return sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5773__auto__);
});

(sci.impl.records.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,ctx,record_name,fields,raw_protocol_impls){
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),cljs.core.rest(form));
} else {
var factory_fn_str = ["->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name)].join('');
var factory_fn_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(factory_fn_str);
var map_factory_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["map",factory_fn_str].join(''));
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var rec_type = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(record_name));
var protocol_impls = sci.impl.utils.split_when(cljs.core.symbol_QMARK_,raw_protocol_impls);
var field_set = cljs.core.set(fields);
var protocol_impls__$1 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__60594,expr){
var vec__60595 = p__60594;
var seq__60596 = cljs.core.seq(vec__60595);
var first__60597 = cljs.core.first(seq__60596);
var seq__60596__$1 = cljs.core.next(seq__60596);
var protocol_name = first__60597;
var impls = seq__60596__$1;
var impls__$1 = cljs.core.group_by(cljs.core.first,impls);
var protocol = (function (){var G__60599 = ctx;
var G__60600 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__60601 = protocol_name;
var fexpr__60598 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__60598.cljs$core$IFn$_invoke$arity$3 ? fexpr__60598.cljs$core$IFn$_invoke$arity$3(G__60599,G__60600,G__60601) : fexpr__60598.call(null,G__60599,G__60600,G__60601));
})();
var protocol__$1 = (function (){var or__5043__auto__ = protocol;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),protocol_name)){
return new cljs.core.Keyword("sci.impl.records","object","sci.impl.records/object",-590699738);
} else {
return null;
}
}
})();
var ___$1 = (cljs.core.truth_(protocol__$1)?null:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Protocol not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name)].join(''),expr));
var protocol__$2 = ((sci.impl.vars.var_QMARK_(protocol__$1))?cljs.core.deref(protocol__$1):protocol__$1);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol__$2);
var pns = (cljs.core.truth_(protocol_ns)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.records","object","sci.impl.records/object",-590699738),protocol__$2))?"sci.impl.records":null));
var fq_meth_name = (function (p1__60580_SHARP_){
if(cljs.core.simple_symbol_QMARK_(p1__60580_SHARP_)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60580_SHARP_));
} else {
return p1__60580_SHARP_;
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60602){
var vec__60603 = p__60602;
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60603,(0),null);
var bodies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60603,(1),null);
var bodies__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (impl){
var args = cljs.core.first(impl);
var body = cljs.core.rest(impl);
var destr = sci.impl.utils.maybe_destructured(args,body);
var args__$1 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(destr);
var orig_this_sym = cljs.core.first(args__$1);
var rest_args = cljs.core.rest(args__$1);
var shadows_this_QMARK_ = cljs.core.some((function (p1__60581_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_this_sym,p1__60581_SHARP_);
}),rest_args);
var this_sym = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("this_"):orig_this_sym);
var args__$2 = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.vec(cljs.core.cons(this_sym,rest_args)):args__$1);
var bindings = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (field){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field),(new cljs.core.List(null,this_sym,null,(1),null)),(2),null))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,field_set,args__$2)], 0));
var bindings__$1 = (cljs.core.truth_(shadows_this_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_this_sym,this_sym], null)):bindings);
var bindings__$2 = cljs.core.vec(bindings__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,args__$2,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings__$2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}),bodies__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(method_name),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null)),bodies__$2], 0))));
}),impls__$1);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([protocol_impls,raw_protocol_impls], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,map_factory_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"m__60586__auto__","m__60586__auto__",-1007959638,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vary-meta","cljs.core/vary-meta",-938366546,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->record-impl","cljs.core/->record-impl",1673017880,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__60586__auto__","m__60586__auto__",-1007959638,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__60587__auto__","args__60587__auto__",2089960501,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vary-meta","cljs.core/vary-meta",-938366546,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->record-impl","cljs.core/->record-impl",1673017880,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__60587__auto__","args__60587__auto__",2089960501,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,record_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,rec_type,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.record","map-constructor","sci.impl.record/map-constructor",1072184780),null,(1),null)),(new cljs.core.List(null,map_factory_sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209),null,(1),null)),(new cljs.core.List(null,factory_fn_sym,null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),protocol_impls__$1], 0))));
}
}));

(sci.impl.records.defrecord.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(sci.impl.records.defrecord.cljs$lang$applyTo = (function (seq60588){
var G__60589 = cljs.core.first(seq60588);
var seq60588__$1 = cljs.core.next(seq60588);
var G__60590 = cljs.core.first(seq60588__$1);
var seq60588__$2 = cljs.core.next(seq60588__$1);
var G__60591 = cljs.core.first(seq60588__$2);
var seq60588__$3 = cljs.core.next(seq60588__$2);
var G__60592 = cljs.core.first(seq60588__$3);
var seq60588__$4 = cljs.core.next(seq60588__$3);
var G__60593 = cljs.core.first(seq60588__$4);
var seq60588__$5 = cljs.core.next(seq60588__$4);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60589,G__60590,G__60591,G__60592,G__60593,seq60588__$5);
}));

sci.impl.records.sci_record_QMARK_ = (function sci$impl$records$sci_record_QMARK_(x){
var or__5043__auto__ = ((cljs.core.map_QMARK_(x))?(function (){var G__60631 = x;
var G__60631__$1 = (((G__60631 == null))?null:cljs.core.meta(G__60631));
if((G__60631__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__60631__$1);
}
})():null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.record_QMARK_(x);
}
});
/**
 * A record class is represented by a symbol with metadata (currently). This is only an implementation detail.
 * A protocol is represented by a map with :ns, :methods and optionally :class. This is also an implementation detail.
 */
sci.impl.records.resolve_record_or_protocol_class = (function sci$impl$records$resolve_record_or_protocol_class(var_args){
var G__60640 = arguments.length;
switch (G__60640) {
case 2:
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
var sym_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(sym_str,".");
var class_name = (cljs.core.truth_(last_dot)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_str,(last_dot + (1)),((sym_str).length)):sym_str);
var namespace = (cljs.core.truth_(last_dot)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sym_str,(0),last_dot)):sci.impl.vars.current_ns_name());
return sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,namespace,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name));
}));

(sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3 = (function (ctx,package$,class$){
var namespace = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),"_","-"));
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespace,class$], null));
if(cljs.core.truth_(temp__5720__auto__)){
var sci_var = temp__5720__auto__;
if(sci.impl.vars.var_QMARK_(sci_var)){
return cljs.core.deref(sci_var);
} else {
return sci_var;
}
} else {
return null;
}
}));

(sci.impl.records.resolve_record_or_protocol_class.cljs$lang$maxFixedArity = 3);

sci.impl.records.resolve_record_class = (function sci$impl$records$resolve_record_class(ctx,class_sym){
var temp__5720__auto__ = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2(ctx,class_sym);
if(cljs.core.truth_(temp__5720__auto__)){
var x = temp__5720__auto__;
if((x instanceof cljs.core.Symbol)){
return x;
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=sci.impl.records.js.map
