goog.provide('rewrite_cljc.node.whitespace');
/**
 * This function is applied to every newline string.
 */
rewrite_cljc.node.whitespace._STAR_newline_fn_STAR_ = cljs.core.identity;
/**
 * This function is applied to every newline string and should produce
 * the eventual character count.
 */
rewrite_cljc.node.whitespace._STAR_count_fn_STAR_ = cljs.core.count;

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
rewrite_cljc.node.whitespace.WhitespaceNode = (function (whitespace,__meta,__extmap,__hash){
this.whitespace = whitespace;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78176,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78197 = k78176;
var G__78197__$1 = (((G__78197 instanceof cljs.core.Keyword))?G__78197.fqn:null);
switch (G__78197__$1) {
case "whitespace":
return self__.whitespace;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78176,else__5343__auto__);

}
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78206){
var vec__78207 = p__78206;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78207,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78207,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.whitespace.WhitespaceNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78175){
var self__ = this;
var G__78175__$1 = this;
return (new cljs.core.RecordIter((0),G__78175__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1426012189 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78177,other78178){
var self__ = this;
var this78177__$1 = this;
return (((!((other78178 == null)))) && ((((this78177__$1.constructor === other78178.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78177__$1.whitespace,other78178.whitespace)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78177__$1.__extmap,other78178.__extmap)))))));
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count(self__.whitespace);
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.whitespace;
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78176){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78224 = k78176;
var G__78224__$1 = (((G__78224 instanceof cljs.core.Keyword))?G__78224.fqn:null);
switch (G__78224__$1) {
case "whitespace":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78176);

}
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78175){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78229 = cljs.core.keyword_identical_QMARK_;
var expr__78230 = k__5349__auto__;
if(cljs.core.truth_((pred__78229.cljs$core$IFn$_invoke$arity$2 ? pred__78229.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),expr__78230) : pred__78229.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),expr__78230)))){
return (new rewrite_cljc.node.whitespace.WhitespaceNode(G__78175,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.whitespace.WhitespaceNode(self__.whitespace,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78175),null));
}
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),self__.whitespace,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78175){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.whitespace.WhitespaceNode(self__.whitespace,G__78175,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"whitespace","whitespace",300496044,null)], null);
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.cljs$lang$type = true);

(rewrite_cljc.node.whitespace.WhitespaceNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.whitespace/WhitespaceNode",null,(1),null));
}));

(rewrite_cljc.node.whitespace.WhitespaceNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.whitespace/WhitespaceNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.whitespace/WhitespaceNode.
 */
rewrite_cljc.node.whitespace.__GT_WhitespaceNode = (function rewrite_cljc$node$whitespace$__GT_WhitespaceNode(whitespace){
return (new rewrite_cljc.node.whitespace.WhitespaceNode(whitespace,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.whitespace/WhitespaceNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.whitespace.map__GT_WhitespaceNode = (function rewrite_cljc$node$whitespace$map__GT_WhitespaceNode(G__78183){
var extmap__5382__auto__ = (function (){var G__78239 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__78183,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
if(cljs.core.record_QMARK_(G__78183)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78239);
} else {
return G__78239;
}
})();
return (new rewrite_cljc.node.whitespace.WhitespaceNode(new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483).cljs$core$IFn$_invoke$arity$1(G__78183),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
 * @implements {rewrite_cljc.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_cljc.node.whitespace.CommaNode = (function (commas,__meta,__extmap,__hash){
this.commas = commas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.whitespace.CommaNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78242,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78251 = k78242;
var G__78251__$1 = (((G__78251 instanceof cljs.core.Keyword))?G__78251.fqn:null);
switch (G__78251__$1) {
case "commas":
return self__.commas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78242,else__5343__auto__);

}
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78254){
var vec__78255 = p__78254;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78255,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78255,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.whitespace.CommaNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commas","commas",1094507436),self__.commas],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78241){
var self__ = this;
var G__78241__$1 = this;
return (new cljs.core.RecordIter((0),G__78241__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commas","commas",1094507436)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.whitespace.CommaNode(self__.commas,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1782742165 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78243,other78244){
var self__ = this;
var this78243__$1 = this;
return (((!((other78244 == null)))) && ((((this78243__$1.constructor === other78244.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78243__$1.commas,other78244.commas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78243__$1.__extmap,other78244.__extmap)))))));
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.whitespace.CommaNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"comma","comma",1699024745);
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count(self__.commas);
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.commas;
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"commas","commas",1094507436),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.whitespace.CommaNode(self__.commas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78242){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78260 = k78242;
var G__78260__$1 = (((G__78260 instanceof cljs.core.Keyword))?G__78260.fqn:null);
switch (G__78260__$1) {
case "commas":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78242);

}
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78241){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78261 = cljs.core.keyword_identical_QMARK_;
var expr__78262 = k__5349__auto__;
if(cljs.core.truth_((pred__78261.cljs$core$IFn$_invoke$arity$2 ? pred__78261.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"commas","commas",1094507436),expr__78262) : pred__78261.call(null,new cljs.core.Keyword(null,"commas","commas",1094507436),expr__78262)))){
return (new rewrite_cljc.node.whitespace.CommaNode(G__78241,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.whitespace.CommaNode(self__.commas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78241),null));
}
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"commas","commas",1094507436),self__.commas,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78241){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.whitespace.CommaNode(self__.commas,G__78241,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.whitespace.CommaNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.whitespace.CommaNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"commas","commas",-1559928333,null)], null);
}));

(rewrite_cljc.node.whitespace.CommaNode.cljs$lang$type = true);

(rewrite_cljc.node.whitespace.CommaNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.whitespace/CommaNode",null,(1),null));
}));

(rewrite_cljc.node.whitespace.CommaNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.whitespace/CommaNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.whitespace/CommaNode.
 */
rewrite_cljc.node.whitespace.__GT_CommaNode = (function rewrite_cljc$node$whitespace$__GT_CommaNode(commas){
return (new rewrite_cljc.node.whitespace.CommaNode(commas,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.whitespace/CommaNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.whitespace.map__GT_CommaNode = (function rewrite_cljc$node$whitespace$map__GT_CommaNode(G__78246){
var extmap__5382__auto__ = (function (){var G__78264 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__78246,new cljs.core.Keyword(null,"commas","commas",1094507436));
if(cljs.core.record_QMARK_(G__78246)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78264);
} else {
return G__78264;
}
})();
return (new rewrite_cljc.node.whitespace.CommaNode(new cljs.core.Keyword(null,"commas","commas",1094507436).cljs$core$IFn$_invoke$arity$1(G__78246),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
 * @implements {rewrite_cljc.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_cljc.node.whitespace.NewlineNode = (function (newlines,__meta,__extmap,__hash){
this.newlines = newlines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.whitespace.NewlineNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78266,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78270 = k78266;
var G__78270__$1 = (((G__78270 instanceof cljs.core.Keyword))?G__78270.fqn:null);
switch (G__78270__$1) {
case "newlines":
return self__.newlines;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78266,else__5343__auto__);

}
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78271){
var vec__78272 = p__78271;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78272,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78272,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.whitespace.NewlineNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78265){
var self__ = this;
var G__78265__$1 = this;
return (new cljs.core.RecordIter((0),G__78265__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.whitespace.NewlineNode(self__.newlines,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-2045657593 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78267,other78268){
var self__ = this;
var this78267__$1 = this;
return (((!((other78268 == null)))) && ((((this78267__$1.constructor === other78268.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78267__$1.newlines,other78268.newlines)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78267__$1.__extmap,other78268.__extmap)))))));
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.whitespace.NewlineNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"newline","newline",1790071323);
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_cljc.node.whitespace._STAR_count_fn_STAR_.call(null,self__.newlines);
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_cljc.node.whitespace._STAR_newline_fn_STAR_.call(null,self__.newlines);
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"newlines","newlines",-1185451518),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78266){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78275 = k78266;
var G__78275__$1 = (((G__78275 instanceof cljs.core.Keyword))?G__78275.fqn:null);
switch (G__78275__$1) {
case "newlines":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78266);

}
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78265){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78276 = cljs.core.keyword_identical_QMARK_;
var expr__78277 = k__5349__auto__;
if(cljs.core.truth_((pred__78276.cljs$core$IFn$_invoke$arity$2 ? pred__78276.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"newlines","newlines",-1185451518),expr__78277) : pred__78276.call(null,new cljs.core.Keyword(null,"newlines","newlines",-1185451518),expr__78277)))){
return (new rewrite_cljc.node.whitespace.NewlineNode(G__78265,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.whitespace.NewlineNode(self__.newlines,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78265),null));
}
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"newlines","newlines",-1185451518),self__.newlines,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78265){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.whitespace.NewlineNode(self__.newlines,G__78265,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.whitespace.NewlineNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newlines","newlines",455080009,null)], null);
}));

(rewrite_cljc.node.whitespace.NewlineNode.cljs$lang$type = true);

(rewrite_cljc.node.whitespace.NewlineNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.whitespace/NewlineNode",null,(1),null));
}));

(rewrite_cljc.node.whitespace.NewlineNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.whitespace/NewlineNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.whitespace/NewlineNode.
 */
rewrite_cljc.node.whitespace.__GT_NewlineNode = (function rewrite_cljc$node$whitespace$__GT_NewlineNode(newlines){
return (new rewrite_cljc.node.whitespace.NewlineNode(newlines,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.whitespace/NewlineNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.whitespace.map__GT_NewlineNode = (function rewrite_cljc$node$whitespace$map__GT_NewlineNode(G__78269){
var extmap__5382__auto__ = (function (){var G__78279 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__78269,new cljs.core.Keyword(null,"newlines","newlines",-1185451518));
if(cljs.core.record_QMARK_(G__78269)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78279);
} else {
return G__78279;
}
})();
return (new rewrite_cljc.node.whitespace.NewlineNode(new cljs.core.Keyword(null,"newlines","newlines",-1185451518).cljs$core$IFn$_invoke$arity$1(G__78269),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.whitespace.WhitespaceNode);
rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.whitespace.CommaNode);
rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.whitespace.NewlineNode);
rewrite_cljc.node.whitespace.string_of_QMARK_ = (function rewrite_cljc$node$whitespace$string_of_QMARK_(s,pred){
var and__5041__auto__ = s;
if(cljs.core.truth_(and__5041__auto__)){
return ((typeof s === 'string') && ((((cljs.core.count(s) > (0))) && (cljs.core.every_QMARK_(pred,s)))));
} else {
return and__5041__auto__;
}
});
/**
 * Create whitespace node of string `s`, where `s` is one or more space characters.
 */
rewrite_cljc.node.whitespace.whitespace_node = (function rewrite_cljc$node$whitespace$whitespace_node(s){
if(cljs.core.truth_(rewrite_cljc.node.whitespace.string_of_QMARK_(s,rewrite_cljc.reader.space_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/space?)"));
}

return rewrite_cljc.node.whitespace.__GT_WhitespaceNode(s);
});
/**
 * Create comma node of string `s`, where `s` is one or more comma characters.
 */
rewrite_cljc.node.whitespace.comma_node = (function rewrite_cljc$node$whitespace$comma_node(s){
if(cljs.core.truth_(rewrite_cljc.node.whitespace.string_of_QMARK_(s,rewrite_cljc.reader.comma_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/comma?)"));
}

return rewrite_cljc.node.whitespace.__GT_CommaNode(s);
});
/**
 * Create newline node of string `s`, where `s` is one or more linebreak characters.
 */
rewrite_cljc.node.whitespace.newline_node = (function rewrite_cljc$node$whitespace$newline_node(s){
if(cljs.core.truth_(rewrite_cljc.node.whitespace.string_of_QMARK_(s,rewrite_cljc.reader.linebreak_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/linebreak?)"));
}

return rewrite_cljc.node.whitespace.__GT_NewlineNode(s);
});
rewrite_cljc.node.whitespace.classify_whitespace = (function rewrite_cljc$node$whitespace$classify_whitespace(c){
if(rewrite_cljc.reader.comma_QMARK_(c)){
return new cljs.core.Keyword(null,"comma","comma",1699024745);
} else {
if(rewrite_cljc.reader.linebreak_QMARK_(c)){
return new cljs.core.Keyword(null,"newline","newline",1790071323);
} else {
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);

}
}
});
/**
 * Convert string `s` of whitespace to whitespace/newline nodes.
 */
rewrite_cljc.node.whitespace.whitespace_nodes = (function rewrite_cljc$node$whitespace$whitespace_nodes(s){
if(cljs.core.truth_(rewrite_cljc.node.whitespace.string_of_QMARK_(s,rewrite_cljc.reader.whitespace_QMARK_))){
} else {
throw (new Error("Assert failed: (string-of? s r/whitespace?)"));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (char_seq){
var s__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,char_seq);
var G__78280 = rewrite_cljc.node.whitespace.classify_whitespace(cljs.core.first(char_seq));
var G__78280__$1 = (((G__78280 instanceof cljs.core.Keyword))?G__78280.fqn:null);
switch (G__78280__$1) {
case "comma":
return rewrite_cljc.node.whitespace.comma_node(s__$1);

break;
case "newline":
return rewrite_cljc.node.whitespace.newline_node(s__$1);

break;
default:
return rewrite_cljc.node.whitespace.whitespace_node(s__$1);

}
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.whitespace.classify_whitespace,s));
});
/**
 * Create node representing `n` spaces.
 */
rewrite_cljc.node.whitespace.spaces = (function rewrite_cljc$node$whitespace$spaces(n){
return rewrite_cljc.node.whitespace.whitespace_node(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," ")));
});
/**
 * Create node representing `n` newline characters.
 */
rewrite_cljc.node.whitespace.newlines = (function rewrite_cljc$node$whitespace$newlines(n){
return rewrite_cljc.node.whitespace.newline_node(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"\n")));
});
var comma_78321 = rewrite_cljc.node.whitespace.whitespace_nodes(", ");
/**
 * Interleave `nodes` with `", "` nodes.
 */
rewrite_cljc.node.whitespace.comma_separated = (function rewrite_cljc$node$whitespace$comma_separated(nodes){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(comma_78321),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__78281_SHARP_){
return cljs.core.cons(p1__78281_SHARP_,comma_78321);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0)));
});
var nl_78322 = rewrite_cljc.node.whitespace.newline_node("\n");
/**
 * Interleave `nodes` with newline nodes.
 */
rewrite_cljc.node.whitespace.line_separated = (function rewrite_cljc$node$whitespace$line_separated(nodes){
return cljs.core.butlast(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nodes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(nl_78322)));
});
var space_78323 = rewrite_cljc.node.whitespace.whitespace_node(" ");
/**
 * Interleave `nodes` with `" "` nodes.
 */
rewrite_cljc.node.whitespace.space_separated = (function rewrite_cljc$node$whitespace$space_separated(nodes){
return cljs.core.butlast(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nodes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(space_78323)));
});
/**
 * Returns true if `node` represents Clojure whitespace.
 */
rewrite_cljc.node.whitespace.whitespace_QMARK_ = (function rewrite_cljc$node$whitespace$whitespace_QMARK_(node){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"comma","comma",1699024745),null,new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null),rewrite_cljc.node.protocols.tag(node));
});
/**
 * Returns true if `node` represents one or more linebreaks.
 */
rewrite_cljc.node.whitespace.linebreak_QMARK_ = (function rewrite_cljc$node$whitespace$linebreak_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.tag(node),new cljs.core.Keyword(null,"newline","newline",1790071323));
});
/**
 * Returns true if `node` represents one or more commas.
 */
rewrite_cljc.node.whitespace.comma_QMARK_ = (function rewrite_cljc$node$whitespace$comma_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.tag(node),new cljs.core.Keyword(null,"comma","comma",1699024745));
});

//# sourceMappingURL=rewrite_cljc.node.whitespace.js.map
