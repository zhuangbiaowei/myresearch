goog.provide('rewrite_cljc.zip.editz');
/**
 * Return zipper with the current node in `zloc` replaced with `value`
 * which will be coerced to a node if possible.
 */
rewrite_cljc.zip.editz.replace = (function rewrite_cljc$zip$editz$replace(zloc,value){
return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.node.coerce(value));
});
/**
 * Create s-expression from node, apply the function and create
 * node from the result.
 */
rewrite_cljc.zip.editz.edit_node = (function rewrite_cljc$zip$editz$edit_node(node,f){
return rewrite_cljc.node.coerce((function (){var G__78787 = rewrite_cljc.node.sexpr(node);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__78787) : f.call(null,G__78787));
})());
});
/**
 * Return zipper with the current node in `zloc` replaced with the result of:
 * 
 * (`f` (s-expression node) `args`)
 * 
 * The result of `f` will be coerced to a node if possible.
 */
rewrite_cljc.zip.editz.edit = (function rewrite_cljc$zip$editz$edit(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78802 = arguments.length;
var i__5767__auto___78803 = (0);
while(true){
if((i__5767__auto___78803 < len__5766__auto___78802)){
args__5772__auto__.push((arguments[i__5767__auto___78803]));

var G__78804 = (i__5767__auto___78803 + (1));
i__5767__auto___78803 = G__78804;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return rewrite_cljc.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
return rewrite_cljc.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic(zloc,rewrite_cljc.zip.editz.edit_node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__78788_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__78788_SHARP_,args);
})], 0));
}));

(rewrite_cljc.zip.editz.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_cljc.zip.editz.edit.cljs$lang$applyTo = (function (seq78789){
var G__78790 = cljs.core.first(seq78789);
var seq78789__$1 = cljs.core.next(seq78789);
var G__78791 = cljs.core.first(seq78789__$1);
var seq78789__$2 = cljs.core.next(seq78789__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78790,G__78791,seq78789__$2);
}));

/**
 * Return zipper with the children of the current node in `zloc` merged into itself.
 * (akin to Clojure's `unquote-splicing` macro: `~@...`).
 * - if the node is not one that can have children, no modification will
 *   be performed.
 * - if the node has no or only whitespace children, it will be removed.
 * - otherwise, splicing will be performed, moving the zipper to the first
 *   non-whitespace child afterwards.
 */
rewrite_cljc.zip.editz.splice = (function rewrite_cljc$zip$editz$splice(zloc){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc))){
var temp__5718__auto__ = cljs.core.seq(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.whitespace_QMARK_,cljs.core.reverse(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.whitespace_QMARK_,rewrite_cljc.custom_zipper.core.children(zloc)))));
if(temp__5718__auto__){
var children = temp__5718__auto__;
var loc = rewrite_cljc.custom_zipper.utils.remove_and_move_right(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_cljc.custom_zipper.core.insert_right,zloc,children));
var or__5043__auto__ = rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(loc);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return loc;
}
} else {
return rewrite_cljc.zip.removez.remove(zloc);
}
} else {
return zloc;
}
});
rewrite_cljc.zip.editz.edit_token = (function rewrite_cljc$zip$editz$edit_token(zloc,str_fn){
var e = rewrite_cljc.zip.base.sexpr(zloc);
var e_SINGLEQUOTE_ = ((typeof e === 'string')?(str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(e) : str_fn.call(null,e)):(((e instanceof cljs.core.Keyword))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(e),(function (){var G__78792 = cljs.core.name(e);
return (str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(G__78792) : str_fn.call(null,G__78792));
})()):(((e instanceof cljs.core.Symbol))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(e),(function (){var G__78793 = cljs.core.name(e);
return (str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(G__78793) : str_fn.call(null,G__78793));
})()):null)));
return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.node.token_node.cljs$core$IFn$_invoke$arity$1(e_SINGLEQUOTE_));
});
rewrite_cljc.zip.editz.edit_multi_line = (function rewrite_cljc$zip$editz$edit_multi_line(zloc,line_fn){
var n = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(rewrite_cljc.custom_zipper.core.node(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(line_fn,cljs.core.vec));
return rewrite_cljc.custom_zipper.core.replace(zloc,n);
});
/**
 * Return zipper with the current node in `zloc` prefixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, first line is prefixed.
 */
rewrite_cljc.zip.editz.prefix = (function rewrite_cljc$zip$editz$prefix(zloc,s){
var G__78796 = rewrite_cljc.zip.base.tag(zloc);
var G__78796__$1 = (((G__78796 instanceof cljs.core.Keyword))?G__78796.fqn:null);
switch (G__78796__$1) {
case "token":
return rewrite_cljc.zip.editz.edit_token(zloc,(function (p1__78794_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__78794_SHARP_)].join('');
}));

break;
case "multi-line":
return rewrite_cljc.zip.editz.edit_multi_line(zloc,(function (lines){
if(cljs.core.empty_QMARK_(lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),(function (p1__78795_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__78795_SHARP_)].join('');
}));
}
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78796__$1)].join('')));

}
});
/**
 * Return zipper with the current node in `zloc` suffixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, last line is suffixed.
 */
rewrite_cljc.zip.editz.suffix = (function rewrite_cljc$zip$editz$suffix(zloc,s){
var G__78798 = rewrite_cljc.zip.base.tag(zloc);
var G__78798__$1 = (((G__78798 instanceof cljs.core.Keyword))?G__78798.fqn:null);
switch (G__78798__$1) {
case "token":
return rewrite_cljc.zip.editz.edit_token(zloc,(function (p1__78797_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__78797_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}));

break;
case "multi-line":
return rewrite_cljc.zip.editz.edit_multi_line(zloc,(function (lines){
if(cljs.core.empty_QMARK_(lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(lines),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null));
}
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78798__$1)].join('')));

}
});

//# sourceMappingURL=rewrite_cljc.zip.editz.js.map
