goog.provide('rewrite_cljc.zip.base');
/**
 * Create and return zipper from Clojure/ClojureScript/EDN `node` (likely parsed by [[rewrite-cljc.parse]]).
 * 
 * Set `:track-position?` in `options` to enable ones-based row/column tracking.
 * See [[rewrite-cljc.zip/position]].
 * 
 * NOTE: when position tracking is enabled, `clojure.zip` is not interchangeable with `rewrite-cljc.zip`, you must use `rewrite-cljc.zip`.
 */
rewrite_cljc.zip.base.edn_STAR_ = (function rewrite_cljc$zip$base$edn_STAR_(var_args){
var G__78695 = arguments.length;
switch (G__78695) {
case 1:
return rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,p__78698){
var map__78699 = p__78698;
var map__78699__$1 = cljs.core.__destructure_map(map__78699);
var track_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78699__$1,new cljs.core.Keyword(null,"track-position?","track-position?",1860535489));
if(cljs.core.truth_(track_position_QMARK_)){
return rewrite_cljc.custom_zipper.core.custom_zipper(node);
} else {
return rewrite_cljc.custom_zipper.core.zipper(node);
}
}));

(rewrite_cljc.zip.base.edn_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Create and return zipper from Clojure/ClojureScript/EDN `node` (likely parsed by [[rewrite-cljc.parse]])
 * and move to the first non-whitespace/non-comment child.
 * 
 * Set `:track-position?` in `options` to enable ones-based row/column tracking.
 * See [[rewrite-cljc.zip/position]].
 * 
 * NOTE: when position tracking is enabled, `clojure.zip` is not interchangeable with `rewrite-cljc.zip`, you must use `rewrite-cljc.zip`.
 */
rewrite_cljc.zip.base.edn = (function rewrite_cljc$zip$base$edn(var_args){
var G__78704 = arguments.length;
switch (G__78704) {
case 1:
return rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$2 = (function (node,options){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.tag(node),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2(node,options);
var or__5043__auto__ = rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.custom_zipper.core.down(top));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return top;
}
} else {
var G__78777 = rewrite_cljc.node.forms_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
var G__78778 = options;
node = G__78777;
options = G__78778;
continue;
}
break;
}
}));

(rewrite_cljc.zip.base.edn.cljs$lang$maxFixedArity = 2);

/**
 * Return tag of current node in `zloc`.
 */
rewrite_cljc.zip.base.tag = (function rewrite_cljc$zip$base$tag(zloc){
var G__78715 = zloc;
var G__78715__$1 = (((G__78715 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78715));
if((G__78715__$1 == null)){
return null;
} else {
return rewrite_cljc.node.tag(G__78715__$1);
}
});
/**
 * Return s-expression of current node in `zloc`.
 */
rewrite_cljc.zip.base.sexpr = (function rewrite_cljc$zip$base$sexpr(zloc){
var G__78720 = zloc;
var G__78720__$1 = (((G__78720 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78720));
if((G__78720__$1 == null)){
return null;
} else {
return rewrite_cljc.node.sexpr(G__78720__$1);
}
});
/**
 * Return s-expression of children of current node in `zloc`.
 */
rewrite_cljc.zip.base.child_sexprs = (function rewrite_cljc$zip$base$child_sexprs(zloc){
var G__78725 = zloc;
var G__78725__$1 = (((G__78725 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78725));
if((G__78725__$1 == null)){
return null;
} else {
return rewrite_cljc.node.child_sexprs(G__78725__$1);
}
});
/**
 * Return length of printable string of current node in `zloc`.
 */
rewrite_cljc.zip.base.length = (function rewrite_cljc$zip$base$length(zloc){
var or__5043__auto__ = (function (){var G__78726 = zloc;
var G__78726__$1 = (((G__78726 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78726));
if((G__78726__$1 == null)){
return null;
} else {
return rewrite_cljc.node.length(G__78726__$1);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
});
/**
 * DEPRECATED. Return a tag/s-expression pair for inner nodes, or
 * the s-expression itself for leaves.
 */
rewrite_cljc.zip.base.value = (function rewrite_cljc$zip$base$value(zloc){
var G__78732 = zloc;
var G__78732__$1 = (((G__78732 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78732));
if((G__78732__$1 == null)){
return null;
} else {
return rewrite_cljc.node.value(G__78732__$1);
}
});
/**
 * Create and return zipper from all forms in Clojure/ClojureScript/EDN string `s`.
 * 
 * Set `:track-position?` in `options` to enable ones-based row/column tracking.
 * See [[rewrite-cljc.zip/position]].
 * 
 * NOTE: when position tracking is enabled, `clojure.zip` is not interchangeable with `rewrite-cljc.zip`, you must use `rewrite-cljc.zip`.
 */
rewrite_cljc.zip.base.of_string = (function rewrite_cljc$zip$base$of_string(var_args){
var G__78740 = arguments.length;
switch (G__78740) {
case 1:
return rewrite_cljc.zip.base.of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.base.of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.base.of_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return rewrite_cljc.zip.base.of_string.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.zip.base.of_string.cljs$core$IFn$_invoke$arity$2 = (function (s,options){
var G__78747 = s;
var G__78747__$1 = (((G__78747 == null))?null:rewrite_cljc.parser.parse_string_all(G__78747));
if((G__78747__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$2(G__78747__$1,options);
}
}));

(rewrite_cljc.zip.base.of_string.cljs$lang$maxFixedArity = 2);

/**
 * Return string representing the current node in `zloc`.
 */
rewrite_cljc.zip.base.string = (function rewrite_cljc$zip$base$string(zloc){
var G__78750 = zloc;
var G__78750__$1 = (((G__78750 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78750));
if((G__78750__$1 == null)){
return null;
} else {
return rewrite_cljc.node.string(G__78750__$1);
}
});
/**
 * Return string representing the zipped-up `zloc` zipper.
 */
rewrite_cljc.zip.base.root_string = (function rewrite_cljc$zip$base$root_string(zloc){
var G__78755 = zloc;
var G__78755__$1 = (((G__78755 == null))?null:rewrite_cljc.custom_zipper.core.root(G__78755));
if((G__78755__$1 == null)){
return null;
} else {
return rewrite_cljc.node.string(G__78755__$1);
}
});
rewrite_cljc.zip.base.print_BANG_ = (function rewrite_cljc$zip$base$print_BANG_(s,_writer){
return cljs.core.string_print(s);
});
/**
 * Print current node in `zloc`.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_cljc.zip.base.print = (function rewrite_cljc$zip$base$print(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78780 = arguments.length;
var i__5767__auto___78781 = (0);
while(true){
if((i__5767__auto___78781 < len__5766__auto___78780)){
args__5772__auto__.push((arguments[i__5767__auto___78781]));

var G__78782 = (i__5767__auto___78781 + (1));
i__5767__auto___78781 = G__78782;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.base.print.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.base.print.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78760){
var vec__78761 = p__78760;
var writer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78761,(0),null);
var G__78764 = zloc;
var G__78764__$1 = (((G__78764 == null))?null:rewrite_cljc.zip.base.string(G__78764));
if((G__78764__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.base.print_BANG_(G__78764__$1,writer);
}
}));

(rewrite_cljc.zip.base.print.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.base.print.cljs$lang$applyTo = (function (seq78756){
var G__78757 = cljs.core.first(seq78756);
var seq78756__$1 = cljs.core.next(seq78756);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78757,seq78756__$1);
}));

/**
 * Zip up and print `zloc` from root node.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_cljc.zip.base.print_root = (function rewrite_cljc$zip$base$print_root(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78783 = arguments.length;
var i__5767__auto___78784 = (0);
while(true){
if((i__5767__auto___78784 < len__5766__auto___78783)){
args__5772__auto__.push((arguments[i__5767__auto___78784]));

var G__78785 = (i__5767__auto___78784 + (1));
i__5767__auto___78784 = G__78785;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.base.print_root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.base.print_root.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78770){
var vec__78771 = p__78770;
var writer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78771,(0),null);
var G__78774 = zloc;
var G__78774__$1 = (((G__78774 == null))?null:rewrite_cljc.zip.base.root_string(G__78774));
if((G__78774__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.base.print_BANG_(G__78774__$1,writer);
}
}));

(rewrite_cljc.zip.base.print_root.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.base.print_root.cljs$lang$applyTo = (function (seq78768){
var G__78769 = cljs.core.first(seq78768);
var seq78768__$1 = cljs.core.next(seq78768);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78769,seq78768__$1);
}));


//# sourceMappingURL=rewrite_cljc.zip.base.js.map
