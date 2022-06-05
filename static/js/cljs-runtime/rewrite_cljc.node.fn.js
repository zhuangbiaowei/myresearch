goog.provide('rewrite_cljc.node.fn');
/**
 * Construct function form.
 */
rewrite_cljc.node.fn.construct_fn = (function rewrite_cljc$node$fn$construct_fn(syms,vararg,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(syms,(cljs.core.truth_(vararg)?(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),(new cljs.core.List(null,vararg,null,(1),null)),(2),null)):null))),(new cljs.core.List(null,body,null,(1),null)),(2),null)),(3),null));
});
/**
 * Get index based on the substring following the parameter's `%`.
 * Zero means vararg.
 */
rewrite_cljc.node.fn.sym_index = (function rewrite_cljc$node$fn$sym_index(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"&")){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"")){
return (1);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,n))){
return rewrite_cljc.interop.str__GT_int(n);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("arg literal must be %, %& or %integer.",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * If symbol starting with `%`, convert to respective gensym.
 */
rewrite_cljc.node.fn.symbol__GT_gensym = (function rewrite_cljc$node$fn$symbol__GT_gensym(sym_seq,vararg_QMARK_,max_n,sym){
if((sym instanceof cljs.core.Symbol)){
var nm = cljs.core.name(sym);
if(clojure.string.starts_with_QMARK_(nm,"%")){
var i = rewrite_cljc.node.fn.sym_index(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,(1)));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))) && (cljs.core.not(cljs.core.deref(vararg_QMARK_))))){
cljs.core.reset_BANG_(vararg_QMARK_,true);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(max_n,cljs.core.max,i);

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sym_seq,i);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Walk the form and create an expand function form.
 */
rewrite_cljc.node.fn.fn_walk = (function rewrite_cljc$node$fn$fn_walk(form){
var syms = (function (){var iter__5520__auto__ = (function rewrite_cljc$node$fn$fn_walk_$_iter__78339(s__78340){
return (new cljs.core.LazySeq(null,(function (){
var s__78340__$1 = s__78340;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__78340__$1);
if(temp__5720__auto__){
var s__78340__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78340__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__78340__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__78342 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__78341 = (0);
while(true){
if((i__78341 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__78341);
var base = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(base));
cljs.core.chunk_append(b__78342,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([s,"#"].join('')));

var G__78421 = (i__78341 + (1));
i__78341 = G__78421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78342),rewrite_cljc$node$fn$fn_walk_$_iter__78339(cljs.core.chunk_rest(s__78340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78342),null);
}
} else {
var i = cljs.core.first(s__78340__$2);
var base = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(base));
return cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([s,"#"].join('')),rewrite_cljc$node$fn$fn_walk_$_iter__78339(cljs.core.rest(s__78340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$0());
})();
var vararg_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var max_n = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var body = clojure.walk.prewalk((function (p1__78338_SHARP_){
var or__5043__auto__ = rewrite_cljc.node.fn.symbol__GT_gensym(syms,vararg_QMARK_,max_n,p1__78338_SHARP_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return p1__78338_SHARP_;
}
}),form);
return rewrite_cljc.node.fn.construct_fn(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(max_n),cljs.core.rest(syms)),(cljs.core.truth_(cljs.core.deref(vararg_QMARK_))?cljs.core.first(syms):null),body);
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
rewrite_cljc.node.fn.FnNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.fn.FnNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78364,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78372 = k78364;
var G__78372__$1 = (((G__78372 instanceof cljs.core.Keyword))?G__78372.fqn:null);
switch (G__78372__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78364,else__5343__auto__);

}
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78374){
var vec__78375 = p__78374;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78375,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78375,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.fn.FnNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78363){
var self__ = this;
var G__78363__$1 = this;
return (new cljs.core.RecordIter((0),G__78363__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.fn.FnNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1601396895 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78365,other78366){
var self__ = this;
var this78365__$1 = this;
return (((!((other78366 == null)))) && ((((this78365__$1.constructor === other78366.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78365__$1.children,other78366.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78365__$1.__extmap,other78366.__extmap)))))));
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_cljc.node.fn.fn_walk(rewrite_cljc.node.protocols.sexprs(self__.children));
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((3) + rewrite_cljc.node.protocols.sum_lengths(self__.children));
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children)),")"].join('');
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.fn.FnNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78364){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78400 = k78364;
var G__78400__$1 = (((G__78400 instanceof cljs.core.Keyword))?G__78400.fqn:null);
switch (G__78400__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78364);

}
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78363){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78402 = cljs.core.keyword_identical_QMARK_;
var expr__78403 = k__5349__auto__;
if(cljs.core.truth_((pred__78402.cljs$core$IFn$_invoke$arity$2 ? pred__78402.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__78403) : pred__78402.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__78403)))){
return (new rewrite_cljc.node.fn.FnNode(G__78363,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.fn.FnNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78363),null));
}
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78363){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.fn.FnNode(self__.children,G__78363,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.fn.FnNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.fn.FnNode.cljs$lang$type = true);

(rewrite_cljc.node.fn.FnNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.fn/FnNode",null,(1),null));
}));

(rewrite_cljc.node.fn.FnNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.fn/FnNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.fn/FnNode.
 */
rewrite_cljc.node.fn.__GT_FnNode = (function rewrite_cljc$node$fn$__GT_FnNode(children){
return (new rewrite_cljc.node.fn.FnNode(children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.fn/FnNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.fn.map__GT_FnNode = (function rewrite_cljc$node$fn$map__GT_FnNode(G__78371){
var extmap__5382__auto__ = (function (){var G__78412 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__78371,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__78371)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78412);
} else {
return G__78412;
}
})();
return (new rewrite_cljc.node.fn.FnNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__78371),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.fn.FnNode);
/**
 * Create node representing an anonymous function with `children`.
 */
rewrite_cljc.node.fn.fn_node = (function rewrite_cljc$node$fn$fn_node(children){
return rewrite_cljc.node.fn.__GT_FnNode(children);
});

//# sourceMappingURL=rewrite_cljc.node.fn.js.map
