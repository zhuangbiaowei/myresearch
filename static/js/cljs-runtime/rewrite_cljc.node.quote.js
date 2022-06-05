goog.provide('rewrite_cljc.node.quote');

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
rewrite_cljc.node.quote.QuoteNode = (function (tag,prefix,sym,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.sym = sym;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.quote.QuoteNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k77669,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__77673 = k77669;
var G__77673__$1 = (((G__77673 instanceof cljs.core.Keyword))?G__77673.fqn:null);
switch (G__77673__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "sym":
return self__.sym;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77669,else__5343__auto__);

}
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__77674){
var vec__77675 = p__77674;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77675,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77675,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.quote.QuoteNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77668){
var self__ = this;
var G__77668__$1 = this;
return (new cljs.core.RecordIter((0),G__77668__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (282518010 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77670,other77671){
var self__ = this;
var this77670__$1 = this;
return (((!((other77671 == null)))) && ((((this77670__$1.constructor === other77671.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77670__$1.tag,other77671.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77670__$1.prefix,other77671.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77670__$1.sym,other77671.sym)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77670__$1.children,other77671.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77670__$1.__extmap,other77671.__extmap)))))))))))));
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,self__.sym,(new cljs.core.List(null,cljs.core.first(rewrite_cljc.node.protocols.sexprs(self__.children)),null,(1),null)),(2),null));
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.count(self__.prefix) + rewrite_cljc.node.protocols.sum_lengths(self__.children));
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_cljc.node.protocols.assert_single_sexpr(children_SINGLEQUOTE_);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count(self__.prefix);
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k77669){
var self__ = this;
var this__5347__auto____$1 = this;
var G__77686 = k77669;
var G__77686__$1 = (((G__77686 instanceof cljs.core.Keyword))?G__77686.fqn:null);
switch (G__77686__$1) {
case "tag":
case "prefix":
case "sym":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77669);

}
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__77668){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__77687 = cljs.core.keyword_identical_QMARK_;
var expr__77688 = k__5349__auto__;
if(cljs.core.truth_((pred__77687.cljs$core$IFn$_invoke$arity$2 ? pred__77687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__77688) : pred__77687.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__77688)))){
return (new rewrite_cljc.node.quote.QuoteNode(G__77668,self__.prefix,self__.sym,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77687.cljs$core$IFn$_invoke$arity$2 ? pred__77687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__77688) : pred__77687.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__77688)))){
return (new rewrite_cljc.node.quote.QuoteNode(self__.tag,G__77668,self__.sym,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77687.cljs$core$IFn$_invoke$arity$2 ? pred__77687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__77688) : pred__77687.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__77688)))){
return (new rewrite_cljc.node.quote.QuoteNode(self__.tag,self__.prefix,G__77668,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77687.cljs$core$IFn$_invoke$arity$2 ? pred__77687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__77688) : pred__77687.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__77688)))){
return (new rewrite_cljc.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,G__77668,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__77668),null));
}
}
}
}
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__77668){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,G__77668,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.quote.QuoteNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"sym","sym",195671222,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.quote.QuoteNode.cljs$lang$type = true);

(rewrite_cljc.node.quote.QuoteNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.quote/QuoteNode",null,(1),null));
}));

(rewrite_cljc.node.quote.QuoteNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.quote/QuoteNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.quote/QuoteNode.
 */
rewrite_cljc.node.quote.__GT_QuoteNode = (function rewrite_cljc$node$quote$__GT_QuoteNode(tag,prefix,sym,children){
return (new rewrite_cljc.node.quote.QuoteNode(tag,prefix,sym,children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.quote/QuoteNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.quote.map__GT_QuoteNode = (function rewrite_cljc$node$quote$map__GT_QuoteNode(G__77672){
var extmap__5382__auto__ = (function (){var G__77698 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77672,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__77672)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77698);
} else {
return G__77698;
}
})();
return (new rewrite_cljc.node.quote.QuoteNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__77672),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__77672),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__77672),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__77672),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.quote.QuoteNode);
rewrite_cljc.node.quote.__GT_node = (function rewrite_cljc$node$quote$__GT_node(t,prefix,sym,children){
rewrite_cljc.node.protocols.assert_single_sexpr(children);

return rewrite_cljc.node.quote.__GT_QuoteNode(t,prefix,sym,children);
});
/**
 * Create node representing a quoted form where `children`
 * is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.quote.quote_node = (function rewrite_cljc$node$quote$quote_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_cljc.node.quote.__GT_node(new cljs.core.Keyword(null,"quote","quote",-262615245),"'",new cljs.core.Symbol(null,"quote","quote",1377916282,null),children);
} else {
var G__77709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__77709;
continue;
}
break;
}
});
/**
 * Create node representing a syntax-quoted form where `children`
 * is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.quote.syntax_quote_node = (function rewrite_cljc$node$quote$syntax_quote_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_cljc.node.quote.__GT_node(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),"`",new cljs.core.Symbol(null,"quote","quote",1377916282,null),children);
} else {
var G__77710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__77710;
continue;
}
break;
}
});
/**
 * Create node representing an unquoted form (i.e. `~...`) where `children`.
 * is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.quote.unquote_node = (function rewrite_cljc$node$quote$unquote_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_cljc.node.quote.__GT_node(new cljs.core.Keyword(null,"unquote","unquote",1649741032),"~",new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),children);
} else {
var G__77711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__77711;
continue;
}
break;
}
});
/**
 * Create node representing an unquote-spliced form (i.e. `~@...`) where `children`.
 * is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.quote.unquote_splicing_node = (function rewrite_cljc$node$quote$unquote_splicing_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_cljc.node.quote.__GT_node(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),"~@",new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),children);
} else {
var G__77712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__77712;
continue;
}
break;
}
});

//# sourceMappingURL=rewrite_cljc.node.quote.js.map
