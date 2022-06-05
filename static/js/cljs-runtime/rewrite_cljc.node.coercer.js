goog.provide('rewrite_cljc.node.coercer');
rewrite_cljc.node.coercer.node_with_meta = (function rewrite_cljc$node$coercer$node_with_meta(n,value){
if((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IWithMeta$))))?true:(((!value.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,value))){
var mta = cljs.core.meta(value);
if(cljs.core.empty_QMARK_(mta)){
return n;
} else {
return rewrite_cljc.node.meta.meta_node.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.coerce(mta),n);
}
} else {
return n;
}
});
var comma_78448 = rewrite_cljc.node.whitespace.whitespace_nodes(", ");
var space_78449 = rewrite_cljc.node.whitespace.whitespace_node(" ");
rewrite_cljc.node.coercer.map__GT_children = (function rewrite_cljc$node$coercer$map__GT_children(m){
return cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(comma_78448),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__78442){
var vec__78443 = p__78442;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78443,(1),null);
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(rewrite_cljc.node.protocols.coerce(k),space_78449,rewrite_cljc.node.protocols.coerce(v),comma_78448);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0))));
});
rewrite_cljc.node.coercer.record_node = (function rewrite_cljc$node$coercer$record_node(m){
return rewrite_cljc.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_cljc.node.token.token_node.cljs$core$IFn$_invoke$arity$1((function (){var s = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"{")));
})()),rewrite_cljc.node.seq.map_node(rewrite_cljc.node.coercer.map__GT_children(m))], null));
});
(rewrite_cljc.node.protocols.NodeCoerceable["_"] = true);

(rewrite_cljc.node.protocols.coerce["_"] = (function (v){
return rewrite_cljc.node.coercer.node_with_meta(((cljs.core.record_QMARK_(v))?rewrite_cljc.node.coercer.record_node(v):rewrite_cljc.node.token.token_node.cljs$core$IFn$_invoke$arity$1(v)),v);
}));
(rewrite_cljc.node.protocols.NodeCoerceable["null"] = true);

(rewrite_cljc.node.protocols.coerce["null"] = (function (v){
return rewrite_cljc.node.token.token_node.cljs$core$IFn$_invoke$arity$1(null);
}));
rewrite_cljc.node.coercer.seq_node = (function rewrite_cljc$node$coercer$seq_node(f,sq){
return rewrite_cljc.node.coercer.node_with_meta((function (){var G__78446 = cljs.core.vec(rewrite_cljc.node.whitespace.space_separated(cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.coerce,sq)));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__78446) : f.call(null,G__78446));
})(),sq);
});
(cljs.core.PersistentVector.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_cljc.node.coercer.seq_node(rewrite_cljc.node.seq.vector_node,sq__$1);
}));

(cljs.core.List.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_cljc.node.coercer.seq_node(rewrite_cljc.node.seq.list_node,sq__$1);
}));

(cljs.core.PersistentHashSet.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_cljc.node.coercer.seq_node(rewrite_cljc.node.seq.set_node,sq__$1);
}));
(cljs.core.EmptyList.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_cljc.node.coercer.seq_node(rewrite_cljc.node.seq.list_node,sq__$1);
}));
var create_map_node_78451 = (function (m){
return rewrite_cljc.node.coercer.node_with_meta(rewrite_cljc.node.seq.map_node(rewrite_cljc.node.coercer.map__GT_children(m)),m);
});
(cljs.core.PersistentHashMap.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (m){
var m__$1 = this;
return create_map_node_78451(m__$1);
}));

(cljs.core.PersistentArrayMap.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (m){
var m__$1 = this;
return create_map_node_78451(m__$1);
}));
(cljs.core.Var.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return rewrite_cljc.node.reader_macro.var_node((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[rewrite_cljc.node.token.token_node.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1),(2))))],null)));
}));
(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.whitespace.WhitespaceNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.token.TokenNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.token.TokenNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.meta.MetaNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.integer.IntNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.integer.IntNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.stringz.StringNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.stringz.StringNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.keyword.KeywordNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.keyword.KeywordNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.whitespace.NewlineNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.whitespace.NewlineNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.uneval.UnevalNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.uneval.UnevalNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.forms.FormsNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.forms.FormsNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.seq.SeqNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.quote.QuoteNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
}));

//# sourceMappingURL=rewrite_cljc.node.coercer.js.map
