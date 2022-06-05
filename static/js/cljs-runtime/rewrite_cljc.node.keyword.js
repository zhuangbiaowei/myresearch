goog.provide('rewrite_cljc.node.keyword');

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
 * @implements {rewrite_cljc.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_cljc.node.keyword.KeywordNode = (function (k,namespaced_QMARK_,__meta,__extmap,__hash){
this.k = k;
this.namespaced_QMARK_ = namespaced_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.keyword.KeywordNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k77614,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__77619 = k77614;
var G__77619__$1 = (((G__77619 instanceof cljs.core.Keyword))?G__77619.fqn:null);
switch (G__77619__$1) {
case "k":
return self__.k;

break;
case "namespaced?":
return self__.namespaced_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77614,else__5343__auto__);

}
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__77622){
var vec__77623 = p__77622;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77623,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77623,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.keyword.KeywordNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),self__.namespaced_QMARK_],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77613){
var self__ = this;
var G__77613__$1 = this;
return (new cljs.core.RecordIter((0),G__77613__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1383464019 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77615,other77616){
var self__ = this;
var this77615__$1 = this;
return (((!((other77616 == null)))) && ((((this77615__$1.constructor === other77616.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77615__$1.k,other77616.k)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77615__$1.namespaced_QMARK_,other77616.namespaced_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77615__$1.__extmap,other77616.__extmap)))))))));
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.keyword.KeywordNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__5041__auto__ = self__.namespaced_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.namespace(self__.k));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.ns_name(cljs.core._STAR_ns_STAR_)),cljs.core.name(self__.k));
} else {
return self__.k;
}
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c = (((cljs.core.name(self__.k)).length) + (1));
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return (c + (1));
} else {
var temp__5718__auto__ = cljs.core.namespace(self__.k);
if(cljs.core.truth_(temp__5718__auto__)){
var nspace = temp__5718__auto__;
return (((1) + c) + ((nspace).length));
} else {
return c;
}
}
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [(cljs.core.truth_(self__.namespaced_QMARK_)?":":null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.k], 0))].join('');
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k77614){
var self__ = this;
var this__5347__auto____$1 = this;
var G__77634 = k77614;
var G__77634__$1 = (((G__77634 instanceof cljs.core.Keyword))?G__77634.fqn:null);
switch (G__77634__$1) {
case "k":
case "namespaced?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77614);

}
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__77613){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__77636 = cljs.core.keyword_identical_QMARK_;
var expr__77637 = k__5349__auto__;
if(cljs.core.truth_((pred__77636.cljs$core$IFn$_invoke$arity$2 ? pred__77636.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__77637) : pred__77636.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__77637)))){
return (new rewrite_cljc.node.keyword.KeywordNode(G__77613,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77636.cljs$core$IFn$_invoke$arity$2 ? pred__77636.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),expr__77637) : pred__77636.call(null,new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),expr__77637)))){
return (new rewrite_cljc.node.keyword.KeywordNode(self__.k,G__77613,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__77613),null));
}
}
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),self__.namespaced_QMARK_,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__77613){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,G__77613,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.keyword.KeywordNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"namespaced?","namespaced?",763218650,null)], null);
}));

(rewrite_cljc.node.keyword.KeywordNode.cljs$lang$type = true);

(rewrite_cljc.node.keyword.KeywordNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.keyword/KeywordNode",null,(1),null));
}));

(rewrite_cljc.node.keyword.KeywordNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.keyword/KeywordNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.keyword/KeywordNode.
 */
rewrite_cljc.node.keyword.__GT_KeywordNode = (function rewrite_cljc$node$keyword$__GT_KeywordNode(k,namespaced_QMARK_){
return (new rewrite_cljc.node.keyword.KeywordNode(k,namespaced_QMARK_,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.keyword/KeywordNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.keyword.map__GT_KeywordNode = (function rewrite_cljc$node$keyword$map__GT_KeywordNode(G__77618){
var extmap__5382__auto__ = (function (){var G__77642 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77618,new cljs.core.Keyword(null,"k","k",-2146297393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877)], 0));
if(cljs.core.record_QMARK_(G__77618)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77642);
} else {
return G__77642;
}
})();
return (new rewrite_cljc.node.keyword.KeywordNode(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__77618),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877).cljs$core$IFn$_invoke$arity$1(G__77618),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.keyword.KeywordNode);
/**
 * Create node representing a keyword `k`. If `namespaced?` is `true`
 * a keyword à la `::x` or `::ns/x` (i.e. namespaced/aliased/auto-resolved) is generated.
 */
rewrite_cljc.node.keyword.keyword_node = (function rewrite_cljc$node$keyword$keyword_node(var_args){
var args__5772__auto__ = [];
var len__5766__auto___77658 = arguments.length;
var i__5767__auto___77659 = (0);
while(true){
if((i__5767__auto___77659 < len__5766__auto___77658)){
args__5772__auto__.push((arguments[i__5767__auto___77659]));

var G__77660 = (i__5767__auto___77659 + (1));
i__5767__auto___77659 = G__77660;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__77650){
var vec__77651 = p__77650;
var namespaced_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77651,(0),null);
if((k instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? k)"));
}

return rewrite_cljc.node.keyword.__GT_KeywordNode(k,namespaced_QMARK_);
}));

(rewrite_cljc.node.keyword.keyword_node.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.node.keyword.keyword_node.cljs$lang$applyTo = (function (seq77647){
var G__77648 = cljs.core.first(seq77647);
var seq77647__$1 = cljs.core.next(seq77647);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77648,seq77647__$1);
}));


//# sourceMappingURL=rewrite_cljc.node.keyword.js.map
