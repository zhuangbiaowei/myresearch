goog.provide('rewrite_cljc.node.meta');

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
rewrite_cljc.node.meta.MetaNode = (function (tag,prefix,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.meta.MetaNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78283,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78293 = k78283;
var G__78293__$1 = (((G__78293 instanceof cljs.core.Keyword))?G__78293.fqn:null);
switch (G__78293__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78283,else__5343__auto__);

}
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78296){
var vec__78297 = p__78296;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78297,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78297,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.meta.MetaNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78282){
var self__ = this;
var G__78282__$1 = this;
return (new cljs.core.RecordIter((0),G__78282__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-99219331 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78284,other78285){
var self__ = this;
var this78284__$1 = this;
return (((!((other78285 == null)))) && ((((this78284__$1.constructor === other78285.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78284__$1.tag,other78285.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78284__$1.prefix,other78285.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78284__$1.children,other78285.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78284__$1.__extmap,other78285.__extmap)))))))))));
}));

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
}));

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var vec__78306 = rewrite_cljc.node.protocols.sexprs(self__.children);
var mta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78306,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78306,(1),null);
if(rewrite_cljc.interop.meta_available_QMARK_(data)){
} else {
throw (new Error(["Assert failed: ",["cannot attach metadata to: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join(''),"\n","(interop/meta-available? data)"].join('')));
}

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(data,cljs.core.merge,((cljs.core.map_QMARK_(mta))?mta:cljs.core.PersistentArrayMap.createAsIfByAssoc([mta,true])));
}));

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.count(self__.prefix) + rewrite_cljc.node.protocols.sum_lengths(self__.children));
}));

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_cljc.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(2));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count(self__.prefix);
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78283){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78312 = k78283;
var G__78312__$1 = (((G__78312 instanceof cljs.core.Keyword))?G__78312.fqn:null);
switch (G__78312__$1) {
case "tag":
case "prefix":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78283);

}
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78282){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78313 = cljs.core.keyword_identical_QMARK_;
var expr__78314 = k__5349__auto__;
if(cljs.core.truth_((pred__78313.cljs$core$IFn$_invoke$arity$2 ? pred__78313.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__78314) : pred__78313.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__78314)))){
return (new rewrite_cljc.node.meta.MetaNode(G__78282,self__.prefix,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78313.cljs$core$IFn$_invoke$arity$2 ? pred__78313.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__78314) : pred__78313.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__78314)))){
return (new rewrite_cljc.node.meta.MetaNode(self__.tag,G__78282,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78313.cljs$core$IFn$_invoke$arity$2 ? pred__78313.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__78314) : pred__78313.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__78314)))){
return (new rewrite_cljc.node.meta.MetaNode(self__.tag,self__.prefix,G__78282,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78282),null));
}
}
}
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78282){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.meta.MetaNode(self__.tag,self__.prefix,self__.children,G__78282,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.meta.MetaNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.meta.MetaNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.meta.MetaNode.cljs$lang$type = true);

(rewrite_cljc.node.meta.MetaNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.meta/MetaNode",null,(1),null));
}));

(rewrite_cljc.node.meta.MetaNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.meta/MetaNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.meta/MetaNode.
 */
rewrite_cljc.node.meta.__GT_MetaNode = (function rewrite_cljc$node$meta$__GT_MetaNode(tag,prefix,children){
return (new rewrite_cljc.node.meta.MetaNode(tag,prefix,children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.meta/MetaNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.meta.map__GT_MetaNode = (function rewrite_cljc$node$meta$map__GT_MetaNode(G__78287){
var extmap__5382__auto__ = (function (){var G__78324 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__78287,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__78287)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78324);
} else {
return G__78324;
}
})();
return (new rewrite_cljc.node.meta.MetaNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__78287),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__78287),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__78287),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.meta.MetaNode);
/**
 * Create node representing a form `data` and its `metadata`.
 */
rewrite_cljc.node.meta.meta_node = (function rewrite_cljc$node$meta$meta_node(var_args){
var G__78326 = arguments.length;
switch (G__78326) {
case 1:
return rewrite_cljc.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.node.meta.meta_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
rewrite_cljc.node.protocols.assert_sexpr_count(children,(2));

return rewrite_cljc.node.meta.__GT_MetaNode(new cljs.core.Keyword(null,"meta","meta",1499536964),"^",children);
}));

(rewrite_cljc.node.meta.meta_node.cljs$core$IFn$_invoke$arity$2 = (function (metadata,data){
return rewrite_cljc.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,rewrite_cljc.node.whitespace.spaces((1)),data], null));
}));

(rewrite_cljc.node.meta.meta_node.cljs$lang$maxFixedArity = 2);

/**
 * Create node representing a form `data` and its `metadata` using the
 * `#^` prefix.
 */
rewrite_cljc.node.meta.raw_meta_node = (function rewrite_cljc$node$meta$raw_meta_node(var_args){
var G__78352 = arguments.length;
switch (G__78352) {
case 1:
return rewrite_cljc.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
rewrite_cljc.node.protocols.assert_sexpr_count(children,(2));

return rewrite_cljc.node.meta.__GT_MetaNode(new cljs.core.Keyword(null,"meta*","meta*",-949431606),"#^",children);
}));

(rewrite_cljc.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$2 = (function (metadata,data){
return rewrite_cljc.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,rewrite_cljc.node.whitespace.spaces((1)),data], null));
}));

(rewrite_cljc.node.meta.raw_meta_node.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_cljc.node.meta.js.map
