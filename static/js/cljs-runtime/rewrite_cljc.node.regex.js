goog.provide('rewrite_cljc.node.regex');

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
rewrite_cljc.node.regex.RegexNode = (function (pattern,__meta,__extmap,__hash){
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78329,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78343 = k78329;
var G__78343__$1 = (((G__78343 instanceof cljs.core.Keyword))?G__78343.fqn:null);
switch (G__78343__$1) {
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78329,else__5343__auto__);

}
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78346){
var vec__78347 = p__78346;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78347,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78347,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.regex.RegexNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78328){
var self__ = this;
var G__78328__$1 = this;
return (new cljs.core.RecordIter((0),G__78328__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.regex.RegexNode(self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1889556795 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78330,other78331){
var self__ = this;
var this78330__$1 = this;
return (((!((other78331 == null)))) && ((((this78330__$1.constructor === other78331.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78330__$1.pattern,other78331.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78330__$1.__extmap,other78331.__extmap)))))));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"regex","regex",939488856);
}));

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),(new cljs.core.List(null,self__.pattern,null,(1),null)),(2),null));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.pattern),"\""].join('');
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.regex.RegexNode(self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78329){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78373 = k78329;
var G__78373__$1 = (((G__78373 instanceof cljs.core.Keyword))?G__78373.fqn:null);
switch (G__78373__$1) {
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78329);

}
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78328){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78378 = cljs.core.keyword_identical_QMARK_;
var expr__78379 = k__5349__auto__;
if(cljs.core.truth_((pred__78378.cljs$core$IFn$_invoke$arity$2 ? pred__78378.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__78379) : pred__78378.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__78379)))){
return (new rewrite_cljc.node.regex.RegexNode(G__78328,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.regex.RegexNode(self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78328),null));
}
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78328){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.regex.RegexNode(self__.pattern,G__78328,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.regex.RegexNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(rewrite_cljc.node.regex.RegexNode.cljs$lang$type = true);

(rewrite_cljc.node.regex.RegexNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.regex/RegexNode",null,(1),null));
}));

(rewrite_cljc.node.regex.RegexNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.regex/RegexNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.regex/RegexNode.
 */
rewrite_cljc.node.regex.__GT_RegexNode = (function rewrite_cljc$node$regex$__GT_RegexNode(pattern){
return (new rewrite_cljc.node.regex.RegexNode(pattern,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.regex/RegexNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.regex.map__GT_RegexNode = (function rewrite_cljc$node$regex$map__GT_RegexNode(G__78336){
var extmap__5382__auto__ = (function (){var G__78394 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__78336,new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.record_QMARK_(G__78336)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78394);
} else {
return G__78394;
}
})();
return (new rewrite_cljc.node.regex.RegexNode(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__78336),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.regex.RegexNode);
/**
 * Create node representing a regex with `pattern-string`
 */
rewrite_cljc.node.regex.regex_node = (function rewrite_cljc$node$regex$regex_node(pattern_string){
return rewrite_cljc.node.regex.__GT_RegexNode(pattern_string);
});

//# sourceMappingURL=rewrite_cljc.node.regex.js.map
