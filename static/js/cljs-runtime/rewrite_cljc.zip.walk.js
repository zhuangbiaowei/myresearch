goog.provide('rewrite_cljc.zip.walk');
rewrite_cljc.zip.walk.prewalk_subtree = (function rewrite_cljc$zip$walk$prewalk_subtree(p_QMARK_,f,zloc){
var loc = zloc;
while(true){
if(cljs.core.truth_(rewrite_cljc.zip.move.end_QMARK_(loc))){
return loc;
} else {
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(loc) : p_QMARK_.call(null,loc)))){
var temp__5718__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc));
if(cljs.core.truth_(temp__5718__auto__)){
var n = temp__5718__auto__;
var G__80376 = rewrite_cljc.zip.move.next(n);
loc = G__80376;
continue;
} else {
var G__80377 = rewrite_cljc.zip.move.next(loc);
loc = G__80377;
continue;
}
} else {
var G__80378 = rewrite_cljc.zip.move.next(loc);
loc = G__80378;
continue;
}
}
break;
}
});
/**
 * Return zipper modified by an isolated depth-first pre-order traversal.
 * Traversal starts at the current node in `zloc` and continues to the end of the isolated sub-tree.
 * Function `f` is called on the zipper locations satisfying predicate `p?`, or all locations when `p?` is absent,
 * and must return a valid zipper - modified or not.
 * 
 * Note that by default a newly created zipper automatically navigates to the first non-whitespace
 * node. If you want to be sure to walk all forms in a zipper, you'll want to navigate one up prior to your walk:
 * 
 * ```Clojure
 * (-> (zip/of-string "my clojure forms")
 *     zip/up
 *     (zip/prewalk ...))
 * ```
 * 
 * WARNING: when function `f` changes the location in the zipper, normal traversal will be affected.
 */
rewrite_cljc.zip.walk.prewalk = (function rewrite_cljc$zip$walk$prewalk(var_args){
var G__80372 = arguments.length;
switch (G__80372) {
case 2:
return rewrite_cljc.zip.walk.prewalk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.walk.prewalk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.walk.prewalk.cljs$core$IFn$_invoke$arity$2 = (function (zloc,f){
return rewrite_cljc.zip.walk.prewalk.cljs$core$IFn$_invoke$arity$3(zloc,cljs.core.constantly(true),f);
}));

(rewrite_cljc.zip.walk.prewalk.cljs$core$IFn$_invoke$arity$3 = (function (zloc,p_QMARK_,f){
return rewrite_cljc.zip.subedit.subedit_node(zloc,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rewrite_cljc.zip.walk.prewalk_subtree,p_QMARK_,f));
}));

(rewrite_cljc.zip.walk.prewalk.cljs$lang$maxFixedArity = 3);

rewrite_cljc.zip.walk.postwalk_subtree = (function rewrite_cljc$zip$walk$postwalk_subtree(p_QMARK_,f,loc){
var nloc = rewrite_cljc.zip.move.next(loc);
var loc_SINGLEQUOTE_ = (cljs.core.truth_(rewrite_cljc.zip.move.end_QMARK_(nloc))?loc:rewrite_cljc.zip.move.prev((rewrite_cljc.zip.walk.postwalk_subtree.cljs$core$IFn$_invoke$arity$3 ? rewrite_cljc.zip.walk.postwalk_subtree.cljs$core$IFn$_invoke$arity$3(p_QMARK_,f,nloc) : rewrite_cljc.zip.walk.postwalk_subtree.call(null,p_QMARK_,f,nloc))));
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(loc_SINGLEQUOTE_) : p_QMARK_.call(null,loc_SINGLEQUOTE_)))){
var or__5043__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc_SINGLEQUOTE_) : f.call(null,loc_SINGLEQUOTE_));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return loc_SINGLEQUOTE_;
}
} else {
return loc_SINGLEQUOTE_;
}
});
/**
 * Return zipper modified by an isolated depth-first post-order traversal.
 * Traversal starts at the current node in `zloc` and continues to the end of the isolated sub-tree.
 * Function `f` is called on the zipper locations satisfying predicate `p?`, or all locations when `p?` is absent,
 * and must return a valid zipper - modified or not.
 * 
 * Note that by default a newly created zipper automatically navigates to the first non-whitespace
 * node. If you want to be sure to walk all forms in a zipper, you'll want to navigate one up prior to your walk:
 * 
 * ```Clojure
 * (-> (zip/of-string "my clojure forms")
 *     zip/up
 *     (zip/postwalk ...))
 * ```
 * 
 * WARNING: when function `f` changes the location in the zipper, normal traversal will be affected.
 */
rewrite_cljc.zip.walk.postwalk = (function rewrite_cljc$zip$walk$postwalk(var_args){
var G__80375 = arguments.length;
switch (G__80375) {
case 2:
return rewrite_cljc.zip.walk.postwalk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.walk.postwalk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.walk.postwalk.cljs$core$IFn$_invoke$arity$2 = (function (zloc,f){
return rewrite_cljc.zip.walk.postwalk.cljs$core$IFn$_invoke$arity$3(zloc,cljs.core.constantly(true),f);
}));

(rewrite_cljc.zip.walk.postwalk.cljs$core$IFn$_invoke$arity$3 = (function (zloc,p_QMARK_,f){
return rewrite_cljc.zip.subedit.subedit_node(zloc,(function (p1__80373_SHARP_){
return rewrite_cljc.zip.walk.postwalk_subtree(p_QMARK_,f,p1__80373_SHARP_);
}));
}));

(rewrite_cljc.zip.walk.postwalk.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=rewrite_cljc.zip.walk.js.map
