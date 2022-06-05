goog.provide('rewrite_cljc.zip.insert');
rewrite_cljc.zip.insert.space = rewrite_cljc.node.spaces((1));
/**
 * Generic insertion helper. If the node reached by `move-fn`
 * is a whitespace, insert an additional space.
 */
rewrite_cljc.zip.insert.insert = (function rewrite_cljc$zip$insert$insert(move_fn,insert_fn,prefix,zloc,item){
var item_node = rewrite_cljc.node.coerce(item);
var next_node = (move_fn.cljs$core$IFn$_invoke$arity$1 ? move_fn.cljs$core$IFn$_invoke$arity$1(zloc) : move_fn.call(null,zloc));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(insert_fn,zloc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_((function (){var and__5041__auto__ = next_node;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(rewrite_cljc.zip.whitespace.whitespace_QMARK_(next_node));
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_cljc.zip.insert.space], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.not(rewrite_cljc.zip.whitespace.whitespace_QMARK_(zloc)))?prefix:null)], 0)));
});
/**
 * Return zipper with `item` inserted to the right of the current node in `zloc`.
 *   Will insert a space if necessary.
 */
rewrite_cljc.zip.insert.insert_right = (function rewrite_cljc$zip$insert$insert_right(zloc,item){
return rewrite_cljc.zip.insert.insert(rewrite_cljc.custom_zipper.core.right,rewrite_cljc.custom_zipper.core.insert_right,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_cljc.zip.insert.space], null),zloc,item);
});
/**
 * Return zipper with `item` inserted to the left of the current node in `zloc`.
 *   Will insert a space if necessary.
 */
rewrite_cljc.zip.insert.insert_left = (function rewrite_cljc$zip$insert$insert_left(zloc,item){
return rewrite_cljc.zip.insert.insert(rewrite_cljc.custom_zipper.core.left,rewrite_cljc.custom_zipper.core.insert_left,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_cljc.zip.insert.space], null),zloc,item);
});
/**
 * Return zipper with `item` inserted as the first child of the current node in `zloc`.
 */
rewrite_cljc.zip.insert.insert_child = (function rewrite_cljc$zip$insert$insert_child(zloc,item){
return rewrite_cljc.zip.insert.insert(rewrite_cljc.custom_zipper.core.down,rewrite_cljc.custom_zipper.core.insert_child,cljs.core.PersistentVector.EMPTY,zloc,item);
});
/**
 * Return zipper with `item` appended as last child of the current node in `zloc`.
 *   Will insert a space if necessary.
 */
rewrite_cljc.zip.insert.append_child = (function rewrite_cljc$zip$insert$append_child(zloc,item){
return rewrite_cljc.zip.insert.insert((function (p1__78834_SHARP_){
var G__78835 = p1__78834_SHARP_;
var G__78835__$1 = (((G__78835 == null))?null:rewrite_cljc.custom_zipper.core.down(G__78835));
if((G__78835__$1 == null)){
return null;
} else {
return rewrite_cljc.custom_zipper.core.rightmost(G__78835__$1);
}
}),rewrite_cljc.custom_zipper.core.append_child,cljs.core.PersistentVector.EMPTY,zloc,item);
});

//# sourceMappingURL=rewrite_cljc.zip.insert.js.map
