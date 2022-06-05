goog.provide('rewrite_cljc.node.seq');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_cljc.node.protocols.InnerNode}
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
rewrite_cljc.node.seq.SeqNode = (function (tag,format_string,wrap_length,seq_fn,children,__meta,__extmap,__hash){
this.tag = tag;
this.format_string = format_string;
this.wrap_length = wrap_length;
this.seq_fn = seq_fn;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.seq.SeqNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78165,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78186 = k78165;
var G__78186__$1 = (((G__78186 instanceof cljs.core.Keyword))?G__78186.fqn:null);
switch (G__78186__$1) {
case "tag":
return self__.tag;

break;
case "format-string":
return self__.format_string;

break;
case "wrap-length":
return self__.wrap_length;

break;
case "seq-fn":
return self__.seq_fn;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78165,else__5343__auto__);

}
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78189){
var vec__78194 = p__78189;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78194,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78194,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.seq.SeqNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format-string","format-string",832187437),self__.format_string],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),self__.wrap_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),self__.seq_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78164){
var self__ = this;
var G__78164__$1 = this;
return (new cljs.core.RecordIter((0),G__78164__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"format-string","format-string",832187437),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (859231799 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78166,other78167){
var self__ = this;
var this78166__$1 = this;
return (((!((other78167 == null)))) && ((((this78166__$1.constructor === other78167.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78166__$1.tag,other78167.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78166__$1.format_string,other78167.format_string)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78166__$1.wrap_length,other78167.wrap_length)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78166__$1.seq_fn,other78167.seq_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78166__$1.children,other78167.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78166__$1.__extmap,other78167.__extmap)))))))))))))));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.tag;
}));

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__78211 = rewrite_cljc.node.protocols.sexprs(self__.children);
return (self__.seq_fn.cljs$core$IFn$_invoke$arity$1 ? self__.seq_fn.cljs$core$IFn$_invoke$arity$1(G__78211) : self__.seq_fn.call(null,G__78211));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.wrap_length + rewrite_cljc.node.protocols.sum_lengths(self__.children));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return rewrite_cljc.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic(self__.format_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewrite_cljc.node.protocols.concat_strings(self__.children)], 0));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"format-string","format-string",832187437),null,new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),null,new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.wrap_length - (1));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78165){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78223 = k78165;
var G__78223__$1 = (((G__78223 instanceof cljs.core.Keyword))?G__78223.fqn:null);
switch (G__78223__$1) {
case "tag":
case "format-string":
case "wrap-length":
case "seq-fn":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78165);

}
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78164){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78226 = cljs.core.keyword_identical_QMARK_;
var expr__78227 = k__5349__auto__;
if(cljs.core.truth_((pred__78226.cljs$core$IFn$_invoke$arity$2 ? pred__78226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__78227) : pred__78226.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__78227)))){
return (new rewrite_cljc.node.seq.SeqNode(G__78164,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78226.cljs$core$IFn$_invoke$arity$2 ? pred__78226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"format-string","format-string",832187437),expr__78227) : pred__78226.call(null,new cljs.core.Keyword(null,"format-string","format-string",832187437),expr__78227)))){
return (new rewrite_cljc.node.seq.SeqNode(self__.tag,G__78164,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78226.cljs$core$IFn$_invoke$arity$2 ? pred__78226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),expr__78227) : pred__78226.call(null,new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),expr__78227)))){
return (new rewrite_cljc.node.seq.SeqNode(self__.tag,self__.format_string,G__78164,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78226.cljs$core$IFn$_invoke$arity$2 ? pred__78226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),expr__78227) : pred__78226.call(null,new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),expr__78227)))){
return (new rewrite_cljc.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,G__78164,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78226.cljs$core$IFn$_invoke$arity$2 ? pred__78226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__78227) : pred__78226.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__78227)))){
return (new rewrite_cljc.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,G__78164,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78164),null));
}
}
}
}
}
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"format-string","format-string",832187437),self__.format_string,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),self__.wrap_length,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),self__.seq_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78164){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,G__78164,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.seq.SeqNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.seq.SeqNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"format-string","format-string",-1822248332,null),new cljs.core.Symbol(null,"wrap-length","wrap-length",1372423008,null),new cljs.core.Symbol(null,"seq-fn","seq-fn",649518296,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.seq.SeqNode.cljs$lang$type = true);

(rewrite_cljc.node.seq.SeqNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.seq/SeqNode",null,(1),null));
}));

(rewrite_cljc.node.seq.SeqNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.seq/SeqNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.seq/SeqNode.
 */
rewrite_cljc.node.seq.__GT_SeqNode = (function rewrite_cljc$node$seq$__GT_SeqNode(tag,format_string,wrap_length,seq_fn,children){
return (new rewrite_cljc.node.seq.SeqNode(tag,format_string,wrap_length,seq_fn,children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.seq/SeqNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.seq.map__GT_SeqNode = (function rewrite_cljc$node$seq$map__GT_SeqNode(G__78173){
var extmap__5382__auto__ = (function (){var G__78240 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__78173,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"format-string","format-string",832187437),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__78173)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78240);
} else {
return G__78240;
}
})();
return (new rewrite_cljc.node.seq.SeqNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__78173),new cljs.core.Keyword(null,"format-string","format-string",832187437).cljs$core$IFn$_invoke$arity$1(G__78173),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519).cljs$core$IFn$_invoke$arity$1(G__78173),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231).cljs$core$IFn$_invoke$arity$1(G__78173),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__78173),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.seq.SeqNode);
/**
 * Create a node representing a list with `children`.
 */
rewrite_cljc.node.seq.list_node = (function rewrite_cljc$node$seq$list_node(children){
return rewrite_cljc.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"list","list",765357683),"(%s)",(2),(function (p1__78245_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,p1__78245_SHARP_);
}),children);
});
/**
 * Create a node representing a vector with `children`.
 */
rewrite_cljc.node.seq.vector_node = (function rewrite_cljc$node$seq$vector_node(children){
return rewrite_cljc.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"vector","vector",1902966158),"[%s]",(2),cljs.core.vec,children);
});
/**
 * Create a node representing a set with `children`.
 */
rewrite_cljc.node.seq.set_node = (function rewrite_cljc$node$seq$set_node(children){
return rewrite_cljc.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"set","set",304602554),"#{%s}",(3),cljs.core.set,children);
});
/**
 * Create a node representing an map with `children`.
 */
rewrite_cljc.node.seq.map_node = (function rewrite_cljc$node$seq$map_node(children){
return rewrite_cljc.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"map","map",1371690461),"{%s}",(2),(function (p1__78250_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,p1__78250_SHARP_);
}),children);
});

//# sourceMappingURL=rewrite_cljc.node.seq.js.map
