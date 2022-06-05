goog.provide('rewrite_cljc.node.integer');

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
rewrite_cljc.node.integer.IntNode = (function (value,base,__meta,__extmap,__hash){
this.value = value;
this.base = base;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.integer.IntNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k77554,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__77558 = k77554;
var G__77558__$1 = (((G__77558 instanceof cljs.core.Keyword))?G__77558.fqn:null);
switch (G__77558__$1) {
case "value":
return self__.value;

break;
case "base":
return self__.base;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77554,else__5343__auto__);

}
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__77560){
var vec__77562 = p__77560;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77562,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77562,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.integer.IntNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base","base",185279322),self__.base],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77553){
var self__ = this;
var G__77553__$1 = this;
return (new cljs.core.RecordIter((0),G__77553__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"base","base",185279322)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.integer.IntNode(self__.value,self__.base,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1748087794 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77555,other77556){
var self__ = this;
var this77555__$1 = this;
return (((!((other77556 == null)))) && ((((this77555__$1.constructor === other77556.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77555__$1.value,other77556.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77555__$1.base,other77556.base)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77555__$1.__extmap,other77556.__extmap)))))))));
}));

(rewrite_cljc.node.integer.IntNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.integer.IntNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_cljc.node.integer.IntNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.integer.IntNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(rewrite_cljc.node.integer.IntNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(this$__$1.rewrite_cljc$node$protocols$Node$string$arity$1(null));
}));

(rewrite_cljc.node.integer.IntNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var sign = (((self__.value < (0)))?"-":null);
var abs_value = (function (){var G__77572 = self__.value;
if((self__.value < (0))){
return (- G__77572);
} else {
return G__77572;
}
})();
var s = rewrite_cljc.interop.int__GT_str(abs_value,self__.base);
var prefix = (function (){var G__77573 = cljs.core.long$(self__.base);
switch (G__77573) {
case (8):
return "0";

break;
case (10):
return "";

break;
case (16):
return "0x";

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.base),"r"].join('');

}
})();
return [sign,cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"base","base",185279322),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.integer.IntNode(self__.value,self__.base,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k77554){
var self__ = this;
var this__5347__auto____$1 = this;
var G__77575 = k77554;
var G__77575__$1 = (((G__77575 instanceof cljs.core.Keyword))?G__77575.fqn:null);
switch (G__77575__$1) {
case "value":
case "base":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77554);

}
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__77553){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__77577 = cljs.core.keyword_identical_QMARK_;
var expr__77578 = k__5349__auto__;
if(cljs.core.truth_((pred__77577.cljs$core$IFn$_invoke$arity$2 ? pred__77577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__77578) : pred__77577.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__77578)))){
return (new rewrite_cljc.node.integer.IntNode(G__77553,self__.base,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77577.cljs$core$IFn$_invoke$arity$2 ? pred__77577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base","base",185279322),expr__77578) : pred__77577.call(null,new cljs.core.Keyword(null,"base","base",185279322),expr__77578)))){
return (new rewrite_cljc.node.integer.IntNode(self__.value,G__77553,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.integer.IntNode(self__.value,self__.base,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__77553),null));
}
}
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base","base",185279322),self__.base,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__77553){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.integer.IntNode(self__.value,self__.base,G__77553,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.integer.IntNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.integer.IntNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"base","base",1825810849,null)], null);
}));

(rewrite_cljc.node.integer.IntNode.cljs$lang$type = true);

(rewrite_cljc.node.integer.IntNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.integer/IntNode",null,(1),null));
}));

(rewrite_cljc.node.integer.IntNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.integer/IntNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.integer/IntNode.
 */
rewrite_cljc.node.integer.__GT_IntNode = (function rewrite_cljc$node$integer$__GT_IntNode(value,base){
return (new rewrite_cljc.node.integer.IntNode(value,base,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.integer/IntNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.integer.map__GT_IntNode = (function rewrite_cljc$node$integer$map__GT_IntNode(G__77557){
var extmap__5382__auto__ = (function (){var G__77580 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77557,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base","base",185279322)], 0));
if(cljs.core.record_QMARK_(G__77557)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77580);
} else {
return G__77580;
}
})();
return (new rewrite_cljc.node.integer.IntNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__77557),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(G__77557),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.integer.IntNode);
/**
 * Create node representing an integer `value` in `base`.
 * 
 *   `base` defaults to 10.
 */
rewrite_cljc.node.integer.integer_node = (function rewrite_cljc$node$integer$integer_node(var_args){
var G__77585 = arguments.length;
switch (G__77585) {
case 1:
return rewrite_cljc.node.integer.integer_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.node.integer.integer_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return rewrite_cljc.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2(value,(10));
}));

(rewrite_cljc.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2 = (function (value,base){
if(cljs.core.integer_QMARK_(value)){
} else {
throw (new Error("Assert failed: (integer? value)"));
}

if(cljs.core.integer_QMARK_(base)){
} else {
throw (new Error("Assert failed: (integer? base)"));
}

if(((((1) < base)) && ((base < (37))))){
} else {
throw (new Error("Assert failed: (< 1 base 37)"));
}

return rewrite_cljc.node.integer.__GT_IntNode(value,base);
}));

(rewrite_cljc.node.integer.integer_node.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_cljc.node.integer.js.map
