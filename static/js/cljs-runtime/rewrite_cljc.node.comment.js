goog.provide('rewrite_cljc.node.comment');

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
rewrite_cljc.node.comment.CommentNode = (function (s,__meta,__extmap,__hash){
this.s = s;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.comment.CommentNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k77488,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__77500 = k77488;
var G__77500__$1 = (((G__77500 instanceof cljs.core.Keyword))?G__77500.fqn:null);
switch (G__77500__$1) {
case "s":
return self__.s;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77488,else__5343__auto__);

}
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__77506){
var vec__77508 = p__77506;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77508,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77508,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.comment.CommentNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77487){
var self__ = this;
var G__77487__$1 = this;
return (new cljs.core.RecordIter((0),G__77487__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.comment.CommentNode(self__.s,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (902440411 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77489,other77490){
var self__ = this;
var this77489__$1 = this;
return (((!((other77490 == null)))) && ((((this77489__$1.constructor === other77490.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77489__$1.s,other77490.s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77489__$1.__extmap,other77490.__extmap)))))));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"comment","comment",532206069);
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((1) + cljs.core.count(self__.s));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [";",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.s)].join('');
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k77488){
var self__ = this;
var this__5347__auto____$1 = this;
var G__77517 = k77488;
var G__77517__$1 = (((G__77517 instanceof cljs.core.Keyword))?G__77517.fqn:null);
switch (G__77517__$1) {
case "s":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77488);

}
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__77487){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__77518 = cljs.core.keyword_identical_QMARK_;
var expr__77519 = k__5349__auto__;
if(cljs.core.truth_((pred__77518.cljs$core$IFn$_invoke$arity$2 ? pred__77518.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),expr__77519) : pred__77518.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__77519)))){
return (new rewrite_cljc.node.comment.CommentNode(G__77487,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__77487),null));
}
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__77487){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.comment.CommentNode(self__.s,G__77487,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.comment.CommentNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
}));

(rewrite_cljc.node.comment.CommentNode.cljs$lang$type = true);

(rewrite_cljc.node.comment.CommentNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.comment/CommentNode",null,(1),null));
}));

(rewrite_cljc.node.comment.CommentNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.comment/CommentNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.comment/CommentNode.
 */
rewrite_cljc.node.comment.__GT_CommentNode = (function rewrite_cljc$node$comment$__GT_CommentNode(s){
return (new rewrite_cljc.node.comment.CommentNode(s,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.comment/CommentNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.comment.map__GT_CommentNode = (function rewrite_cljc$node$comment$map__GT_CommentNode(G__77496){
var extmap__5382__auto__ = (function (){var G__77526 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__77496,new cljs.core.Keyword(null,"s","s",1705939918));
if(cljs.core.record_QMARK_(G__77496)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77526);
} else {
return G__77526;
}
})();
return (new rewrite_cljc.node.comment.CommentNode(new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__77496),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.comment.CommentNode);
/**
 * Create node representing a comment with text `s`.
 */
rewrite_cljc.node.comment.comment_node = (function rewrite_cljc$node$comment$comment_node(s){
if(cljs.core.truth_(cljs.core.re_matches(/[^\r\n]*[\r\n]?/,s))){
} else {
throw (new Error("Assert failed: (re-matches #\"[^\\r\\n]*[\\r\\n]?\" s)"));
}

return rewrite_cljc.node.comment.__GT_CommentNode(s);
});
/**
 * Returns true if `node` is a comment.
 */
rewrite_cljc.node.comment.comment_QMARK_ = (function rewrite_cljc$node$comment$comment_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.tag(node),new cljs.core.Keyword(null,"comment","comment",532206069));
});

//# sourceMappingURL=rewrite_cljc.node.comment.js.map
