goog.provide('rewrite_cljc.zip.subedit');
/**
 * Generate a seq representing a path to the current node
 * starting at the root. Each element represents one `z/down`
 * and the value of each element will be the number of `z/right`s
 * to run.
 */
rewrite_cljc.zip.subedit.path = (function rewrite_cljc$zip$subedit$path(zloc){
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,rewrite_cljc.custom_zipper.core.lefts),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.up,cljs.core.iterate(rewrite_cljc.custom_zipper.core.up,zloc))));
});
/**
 * Move one down and `n` steps to the right.
 */
rewrite_cljc.zip.subedit.move_step = (function rewrite_cljc$zip$subedit$move_step(loc,n){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(rewrite_cljc.custom_zipper.core.right,rewrite_cljc.custom_zipper.core.down(loc)),n);
});
/**
 * Move to the node represented by the given path.
 */
rewrite_cljc.zip.subedit.move_to = (function rewrite_cljc$zip$subedit$move_to(zloc,path){
var root = rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.custom_zipper.core.root(zloc));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_cljc.zip.subedit.move_step,root,path);
});
/**
 * Return zipper applying function `f` to `zloc`. The resulting
 * zipper will be located at the same path (i.e. the same number of
 * downwards and right movements from the root) incoming `zloc`.
 */
rewrite_cljc.zip.subedit.edit_node = (function rewrite_cljc$zip$subedit$edit_node(zloc,f){
var zloc_SINGLEQUOTE_ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(zloc) : f.call(null,zloc));
if((!((zloc_SINGLEQUOTE_ == null)))){
} else {
throw (new Error(["Assert failed: ","function applied in 'edit-node' returned nil.","\n","(not (nil? zloc'))"].join('')));
}

return rewrite_cljc.zip.subedit.move_to(zloc_SINGLEQUOTE_,rewrite_cljc.zip.subedit.path(zloc));
});
/**
 * Create and return a zipper whose root is the current node in `zloc`.
 */
rewrite_cljc.zip.subedit.subzip = (function rewrite_cljc$zip$subedit$subzip(zloc){
var zloc_SINGLEQUOTE_ = (function (){var G__80359 = zloc;
var G__80359__$1 = (((G__80359 == null))?null:rewrite_cljc.custom_zipper.core.node(G__80359));
if((G__80359__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__80359__$1);
}
})();
if(cljs.core.truth_(zloc_SINGLEQUOTE_)){
} else {
throw (new Error(["Assert failed: ","could not create subzipper.","\n","zloc'"].join('')));
}

return zloc_SINGLEQUOTE_;
});
/**
 * Return zipper replacing current node in `zloc` with result of `f` applied to said node as an isolated sub-tree.
 * The resulting zipper will be located on the root of the modified sub-tree.
 */
rewrite_cljc.zip.subedit.subedit_node = (function rewrite_cljc$zip$subedit$subedit_node(zloc,f){
var zloc_SINGLEQUOTE_ = (function (){var G__80363 = rewrite_cljc.zip.subedit.subzip(zloc);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80363) : f.call(null,G__80363));
})();
if((!((zloc_SINGLEQUOTE_ == null)))){
} else {
throw (new Error(["Assert failed: ","function applied in 'subedit-node' returned nil.","\n","(not (nil? zloc'))"].join('')));
}

return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.custom_zipper.core.root(zloc_SINGLEQUOTE_));
});

//# sourceMappingURL=rewrite_cljc.zip.subedit.js.map
