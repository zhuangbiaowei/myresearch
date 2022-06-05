goog.provide('rewrite_cljc.node.reader_macro');

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
rewrite_cljc.node.reader_macro.ReaderNode = (function (tag,prefix,suffix,sexpr_fn,sexpr_count,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.suffix = suffix;
this.sexpr_fn = sexpr_fn;
this.sexpr_count = sexpr_count;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.reader_macro.ReaderNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78289,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78295 = k78289;
var G__78295__$1 = (((G__78295 instanceof cljs.core.Keyword))?G__78295.fqn:null);
switch (G__78295__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "suffix":
return self__.suffix;

break;
case "sexpr-fn":
return self__.sexpr_fn;

break;
case "sexpr-count":
return self__.sexpr_count;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78289,else__5343__auto__);

}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78300){
var vec__78301 = p__78300;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78301,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78301,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.reader-macro.ReaderNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),self__.sexpr_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),self__.sexpr_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78288){
var self__ = this;
var G__78288__$1 = this;
return (new cljs.core.RecordIter((0),G__78288__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1059008633 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78290,other78291){
var self__ = this;
var this78290__$1 = this;
return (((!((other78291 == null)))) && ((((this78290__$1.constructor === other78291.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78290__$1.tag,other78291.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78290__$1.prefix,other78291.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78290__$1.suffix,other78291.suffix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78290__$1.sexpr_fn,other78291.sexpr_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78290__$1.sexpr_count,other78291.sexpr_count)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78290__$1.children,other78291.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78290__$1.__extmap,other78291.__extmap)))))))))))))))));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not(self__.sexpr_fn);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.sexpr_fn)){
var G__78310 = rewrite_cljc.node.protocols.sexprs(self__.children);
return (self__.sexpr_fn.cljs$core$IFn$_invoke$arity$1 ? self__.sexpr_fn.cljs$core$IFn$_invoke$arity$1(G__78310) : self__.sexpr_fn.call(null,G__78310));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((rewrite_cljc.node.protocols.sum_lengths(self__.children) + (1)) + cljs.core.count(self__.prefix)) + cljs.core.count(self__.suffix));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.suffix)].join('');
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.sexpr_count)){
rewrite_cljc.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,self__.sexpr_count);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.count(self__.prefix) + (1));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78289){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78316 = k78289;
var G__78316__$1 = (((G__78316 instanceof cljs.core.Keyword))?G__78316.fqn:null);
switch (G__78316__$1) {
case "tag":
case "prefix":
case "suffix":
case "sexpr-fn":
case "sexpr-count":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78289);

}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78288){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78318 = cljs.core.keyword_identical_QMARK_;
var expr__78319 = k__5349__auto__;
if(cljs.core.truth_((pred__78318.cljs$core$IFn$_invoke$arity$2 ? pred__78318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__78319) : pred__78318.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__78319)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(G__78288,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78318.cljs$core$IFn$_invoke$arity$2 ? pred__78318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__78319) : pred__78318.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__78319)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,G__78288,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78318.cljs$core$IFn$_invoke$arity$2 ? pred__78318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__78319) : pred__78318.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__78319)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,G__78288,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78318.cljs$core$IFn$_invoke$arity$2 ? pred__78318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),expr__78319) : pred__78318.call(null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),expr__78319)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,G__78288,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78318.cljs$core$IFn$_invoke$arity$2 ? pred__78318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),expr__78319) : pred__78318.call(null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),expr__78319)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,G__78288,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78318.cljs$core$IFn$_invoke$arity$2 ? pred__78318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__78319) : pred__78318.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__78319)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,G__78288,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78288),null));
}
}
}
}
}
}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),self__.sexpr_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),self__.sexpr_count,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78288){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,G__78288,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"sexpr-fn","sexpr-fn",425590113,null),new cljs.core.Symbol(null,"sexpr-count","sexpr-count",-1763900812,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.cljs$lang$type = true);

(rewrite_cljc.node.reader_macro.ReaderNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.reader-macro/ReaderNode",null,(1),null));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.reader-macro/ReaderNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.reader-macro/ReaderNode.
 */
rewrite_cljc.node.reader_macro.__GT_ReaderNode = (function rewrite_cljc$node$reader_macro$__GT_ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children){
return (new rewrite_cljc.node.reader_macro.ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.reader-macro/ReaderNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.reader_macro.map__GT_ReaderNode = (function rewrite_cljc$node$reader_macro$map__GT_ReaderNode(G__78292){
var extmap__5382__auto__ = (function (){var G__78327 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__78292,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__78292)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78327);
} else {
return G__78327;
}
})();
return (new rewrite_cljc.node.reader_macro.ReaderNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__78292),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__78292),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__78292),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414).cljs$core$IFn$_invoke$arity$1(G__78292),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957).cljs$core$IFn$_invoke$arity$1(G__78292),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__78292),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


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
rewrite_cljc.node.reader_macro.ReaderMacroNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78333,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78345 = k78333;
var G__78345__$1 = (((G__78345 instanceof cljs.core.Keyword))?G__78345.fqn:null);
switch (G__78345__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78333,else__5343__auto__);

}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78351){
var vec__78353 = p__78351;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78353,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78353,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.reader-macro.ReaderMacroNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78332){
var self__ = this;
var G__78332__$1 = this;
return (new cljs.core.RecordIter((0),G__78332__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1341303833 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78334,other78335){
var self__ = this;
var this78334__$1 = this;
return (((!((other78335 == null)))) && ((((this78334__$1.constructor === other78335.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78334__$1.children,other78335.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78334__$1.__extmap,other78335.__extmap)))))));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),(new cljs.core.List(null,this$__$1.rewrite_cljc$node$protocols$Node$string$arity$1(null),null,(1),null)),(2),null));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (rewrite_cljc.node.protocols.sum_lengths(self__.children) + (1));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_cljc.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(2));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78333){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78399 = k78333;
var G__78399__$1 = (((G__78399 instanceof cljs.core.Keyword))?G__78399.fqn:null);
switch (G__78399__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78333);

}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78332){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78405 = cljs.core.keyword_identical_QMARK_;
var expr__78406 = k__5349__auto__;
if(cljs.core.truth_((pred__78405.cljs$core$IFn$_invoke$arity$2 ? pred__78405.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__78406) : pred__78405.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__78406)))){
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(G__78332,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78332),null));
}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78332){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(self__.children,G__78332,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.cljs$lang$type = true);

(rewrite_cljc.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.reader-macro/ReaderMacroNode",null,(1),null));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.reader-macro/ReaderMacroNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.reader-macro/ReaderMacroNode.
 */
rewrite_cljc.node.reader_macro.__GT_ReaderMacroNode = (function rewrite_cljc$node$reader_macro$__GT_ReaderMacroNode(children){
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.reader-macro/ReaderMacroNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.reader_macro.map__GT_ReaderMacroNode = (function rewrite_cljc$node$reader_macro$map__GT_ReaderMacroNode(G__78337){
var extmap__5382__auto__ = (function (){var G__78413 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__78337,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__78337)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78413);
} else {
return G__78413;
}
})();
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__78337),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


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
rewrite_cljc.node.reader_macro.DerefNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.reader_macro.DerefNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78415,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78420 = k78415;
var G__78420__$1 = (((G__78420 instanceof cljs.core.Keyword))?G__78420.fqn:null);
switch (G__78420__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78415,else__5343__auto__);

}
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78424){
var vec__78425 = p__78424;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78425,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78425,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.reader-macro.DerefNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78414){
var self__ = this;
var G__78414__$1 = this;
return (new cljs.core.RecordIter((0),G__78414__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.DerefNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1221493761 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78416,other78417){
var self__ = this;
var this78416__$1 = this;
return (((!((other78417 == null)))) && ((((this78416__$1.constructor === other78417.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78416__$1.children,other78417.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78416__$1.__extmap,other78417.__extmap)))))));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"deref","deref",-145586795);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"deref","deref",1494944732,null),rewrite_cljc.node.protocols.sexprs(self__.children));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (rewrite_cljc.node.protocols.sum_lengths(self__.children) + (1));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_cljc.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(1));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78415){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78431 = k78415;
var G__78431__$1 = (((G__78431 instanceof cljs.core.Keyword))?G__78431.fqn:null);
switch (G__78431__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78415);

}
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78414){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78432 = cljs.core.keyword_identical_QMARK_;
var expr__78433 = k__5349__auto__;
if(cljs.core.truth_((pred__78432.cljs$core$IFn$_invoke$arity$2 ? pred__78432.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__78433) : pred__78432.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__78433)))){
return (new rewrite_cljc.node.reader_macro.DerefNode(G__78414,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78414),null));
}
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78414){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.DerefNode(self__.children,G__78414,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.reader_macro.DerefNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.reader_macro.DerefNode.cljs$lang$type = true);

(rewrite_cljc.node.reader_macro.DerefNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.reader-macro/DerefNode",null,(1),null));
}));

(rewrite_cljc.node.reader_macro.DerefNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.reader-macro/DerefNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.reader-macro/DerefNode.
 */
rewrite_cljc.node.reader_macro.__GT_DerefNode = (function rewrite_cljc$node$reader_macro$__GT_DerefNode(children){
return (new rewrite_cljc.node.reader_macro.DerefNode(children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.reader-macro/DerefNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.reader_macro.map__GT_DerefNode = (function rewrite_cljc$node$reader_macro$map__GT_DerefNode(G__78418){
var extmap__5382__auto__ = (function (){var G__78435 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__78418,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__78418)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78435);
} else {
return G__78435;
}
})();
return (new rewrite_cljc.node.reader_macro.DerefNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__78418),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.reader_macro.ReaderNode);
rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.reader_macro.ReaderMacroNode);
rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.reader_macro.DerefNode);
rewrite_cljc.node.reader_macro.__GT_node = (function rewrite_cljc$node$reader_macro$__GT_node(tag,prefix,suffix,sexpr_fn,sexpr_count,children){
if(cljs.core.truth_(sexpr_count)){
rewrite_cljc.node.protocols.assert_sexpr_count(children,sexpr_count);
} else {
}

return rewrite_cljc.node.reader_macro.__GT_ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children);
});
/**
 * Create node representing a var
 * where `children` is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.reader_macro.var_node = (function rewrite_cljc$node$reader_macro$var_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_cljc.node.reader_macro.__GT_node(new cljs.core.Keyword(null,"var","var",-769682797),"'","",((function (children){
return (function (p1__78436_SHARP_){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),p1__78436_SHARP_);
});})(children))
,(1),children);
} else {
var G__78455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__78455;
continue;
}
break;
}
});
/**
 * Create node representing an inline evaluation (i.e. `#=...`)
 * where `children` is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.reader_macro.eval_node = (function rewrite_cljc$node$reader_macro$eval_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_cljc.node.reader_macro.__GT_node(new cljs.core.Keyword(null,"eval","eval",-1103567905),"=","",((function (children){
return (function (p1__78437_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"eval","eval",536963622,null),(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),p1__78437_SHARP_),null,(1),null)),(2),null));
});})(children))
,(1),children);
} else {
var G__78456 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__78456;
continue;
}
break;
}
});
/**
 * Create node representing a reader macro (i.e. `#... ...`) with `children`. 
 */
rewrite_cljc.node.reader_macro.reader_macro_node = (function rewrite_cljc$node$reader_macro$reader_macro_node(var_args){
var G__78439 = arguments.length;
switch (G__78439) {
case 1:
return rewrite_cljc.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
return rewrite_cljc.node.reader_macro.__GT_ReaderMacroNode(children);
}));

(rewrite_cljc.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$2 = (function (macro_node,form_node){
return rewrite_cljc.node.reader_macro.__GT_ReaderMacroNode(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [macro_node,rewrite_cljc.node.whitespace.spaces((1)),form_node], null));
}));

(rewrite_cljc.node.reader_macro.reader_macro_node.cljs$lang$maxFixedArity = 2);

/**
 * Create node representing the dereferencing of a form (i.e. `@...`)
 * where `children` is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.reader_macro.deref_node = (function rewrite_cljc$node$reader_macro$deref_node(children){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_cljc.node.reader_macro.__GT_DerefNode(children);
} else {
return rewrite_cljc.node.reader_macro.__GT_DerefNode(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null));
}
});

//# sourceMappingURL=rewrite_cljc.node.reader_macro.js.map
