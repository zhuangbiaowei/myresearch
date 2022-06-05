goog.provide('rewrite_cljc.zip.whitespace');
/**
 * Returns true when the current the node in `zloc` is a Clojure whitespace (which includes the comma).
 */
rewrite_cljc.zip.whitespace.whitespace_QMARK_ = (function rewrite_cljc$zip$whitespace$whitespace_QMARK_(zloc){
var G__78634 = zloc;
var G__78634__$1 = (((G__78634 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78634));
if((G__78634__$1 == null)){
return null;
} else {
return rewrite_cljc.node.whitespace_QMARK_(G__78634__$1);
}
});
/**
 * Returns true when the current node in `zloc` is a linebreak.
 */
rewrite_cljc.zip.whitespace.linebreak_QMARK_ = (function rewrite_cljc$zip$whitespace$linebreak_QMARK_(zloc){
var G__78637 = zloc;
var G__78637__$1 = (((G__78637 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78637));
if((G__78637__$1 == null)){
return null;
} else {
return rewrite_cljc.node.linebreak_QMARK_(G__78637__$1);
}
});
/**
 * Returns true when the current node in `zloc` is a comment.
 */
rewrite_cljc.zip.whitespace.comment_QMARK_ = (function rewrite_cljc$zip$whitespace$comment_QMARK_(zloc){
var G__78642 = zloc;
var G__78642__$1 = (((G__78642 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78642));
if((G__78642__$1 == null)){
return null;
} else {
return rewrite_cljc.node.comment_QMARK_(G__78642__$1);
}
});
/**
 * Returns true when current node in `zloc` is a whitespace but not a linebreak.
 */
rewrite_cljc.zip.whitespace.whitespace_not_linebreak_QMARK_ = (function rewrite_cljc$zip$whitespace$whitespace_not_linebreak_QMARK_(zloc){
var and__5041__auto__ = rewrite_cljc.zip.whitespace.whitespace_QMARK_(zloc);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(rewrite_cljc.zip.whitespace.linebreak_QMARK_(zloc));
} else {
return and__5041__auto__;
}
});
/**
 * Returns true when current node in `zloc` is whitespace or a comment.
 */
rewrite_cljc.zip.whitespace.whitespace_or_comment_QMARK_ = (function rewrite_cljc$zip$whitespace$whitespace_or_comment_QMARK_(zloc){
var G__78647 = zloc;
var G__78647__$1 = (((G__78647 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78647));
if((G__78647__$1 == null)){
return null;
} else {
return rewrite_cljc.node.whitespace_or_comment_QMARK_(G__78647__$1);
}
});
/**
 * Return zipper with location moved to first location not satisfying predicate `p?` starting from the node in
 * `zloc` and traversing by function `f`.
 */
rewrite_cljc.zip.whitespace.skip = (function rewrite_cljc$zip$whitespace$skip(f,p_QMARK_,zloc){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_cljc.custom_zipper.core.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(f,zloc)))));
});
/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc`
 * and traversing by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.whitespace.skip_whitespace = (function rewrite_cljc$zip$whitespace$skip_whitespace(var_args){
var G__78649 = arguments.length;
switch (G__78649) {
case 1:
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.right,zloc);
}));

(rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return rewrite_cljc.zip.whitespace.skip(f,rewrite_cljc.zip.whitespace.whitespace_or_comment_QMARK_,zloc);
}));

(rewrite_cljc.zip.whitespace.skip_whitespace.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc` traversing left.
 */
rewrite_cljc.zip.whitespace.skip_whitespace_left = (function rewrite_cljc$zip$whitespace$skip_whitespace_left(zloc){
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.left,zloc);
});
/**
 * Return zipper with `n` space whitespace node inserted to the left of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.whitespace.insert_space_left = (function rewrite_cljc$zip$whitespace$insert_space_left(var_args){
var G__78651 = arguments.length;
switch (G__78651) {
case 1:
return rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((n > (0))){
return rewrite_cljc.custom_zipper.core.insert_left(zloc,rewrite_cljc.node.spaces(n));
} else {
return zloc;
}
}));

(rewrite_cljc.zip.whitespace.insert_space_left.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` space whitespace node inserted to the right of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.whitespace.insert_space_right = (function rewrite_cljc$zip$whitespace$insert_space_right(var_args){
var G__78654 = arguments.length;
switch (G__78654) {
case 1:
return rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((n > (0))){
return rewrite_cljc.custom_zipper.core.insert_right(zloc,rewrite_cljc.node.spaces(n));
} else {
return zloc;
}
}));

(rewrite_cljc.zip.whitespace.insert_space_right.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` newlines node inserted to the left of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.whitespace.insert_newline_left = (function rewrite_cljc$zip$whitespace$insert_newline_left(var_args){
var G__78657 = arguments.length;
switch (G__78657) {
case 1:
return rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_cljc.custom_zipper.core.insert_left(zloc,rewrite_cljc.node.newlines(n));
}));

(rewrite_cljc.zip.whitespace.insert_newline_left.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` newlines node inserted to the right of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.whitespace.insert_newline_right = (function rewrite_cljc$zip$whitespace$insert_newline_right(var_args){
var G__78659 = arguments.length;
switch (G__78659) {
case 1:
return rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_cljc.custom_zipper.core.insert_right(zloc,rewrite_cljc.node.newlines(n));
}));

(rewrite_cljc.zip.whitespace.insert_newline_right.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-space-left]].
 */
rewrite_cljc.zip.whitespace.prepend_space = (function rewrite_cljc$zip$whitespace$prepend_space(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78694 = arguments.length;
var i__5767__auto___78696 = (0);
while(true){
if((i__5767__auto___78696 < len__5766__auto___78694)){
args__5772__auto__.push((arguments[i__5767__auto___78696]));

var G__78697 = (i__5767__auto___78696 + (1));
i__5767__auto___78696 = G__78697;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78662){
var vec__78663 = p__78662;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78663,(0),null);
return rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5043__auto__ = n;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.prepend_space.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.prepend_space.cljs$lang$applyTo = (function (seq78660){
var G__78661 = cljs.core.first(seq78660);
var seq78660__$1 = cljs.core.next(seq78660);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78661,seq78660__$1);
}));

/**
 * DEPRECATED: renamed to [[insert-space-right]].
 */
rewrite_cljc.zip.whitespace.append_space = (function rewrite_cljc$zip$whitespace$append_space(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78700 = arguments.length;
var i__5767__auto___78701 = (0);
while(true){
if((i__5767__auto___78701 < len__5766__auto___78700)){
args__5772__auto__.push((arguments[i__5767__auto___78701]));

var G__78702 = (i__5767__auto___78701 + (1));
i__5767__auto___78701 = G__78702;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78668){
var vec__78669 = p__78668;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78669,(0),null);
return rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5043__auto__ = n;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.append_space.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.append_space.cljs$lang$applyTo = (function (seq78666){
var G__78667 = cljs.core.first(seq78666);
var seq78666__$1 = cljs.core.next(seq78666);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78667,seq78666__$1);
}));

/**
 * DEPRECATED: renamed to [[insert-newline-left]].
 */
rewrite_cljc.zip.whitespace.prepend_newline = (function rewrite_cljc$zip$whitespace$prepend_newline(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78705 = arguments.length;
var i__5767__auto___78706 = (0);
while(true){
if((i__5767__auto___78706 < len__5766__auto___78705)){
args__5772__auto__.push((arguments[i__5767__auto___78706]));

var G__78707 = (i__5767__auto___78706 + (1));
i__5767__auto___78706 = G__78707;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78678){
var vec__78679 = p__78678;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78679,(0),null);
return rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5043__auto__ = n;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.prepend_newline.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.prepend_newline.cljs$lang$applyTo = (function (seq78675){
var G__78676 = cljs.core.first(seq78675);
var seq78675__$1 = cljs.core.next(seq78675);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78676,seq78675__$1);
}));

/**
 * DEPRECATED: renamed to [[insert-newline-right]].
 */
rewrite_cljc.zip.whitespace.append_newline = (function rewrite_cljc$zip$whitespace$append_newline(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78708 = arguments.length;
var i__5767__auto___78709 = (0);
while(true){
if((i__5767__auto___78709 < len__5766__auto___78708)){
args__5772__auto__.push((arguments[i__5767__auto___78709]));

var G__78710 = (i__5767__auto___78709 + (1));
i__5767__auto___78709 = G__78710;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78684){
var vec__78685 = p__78684;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78685,(0),null);
return rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5043__auto__ = n;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.append_newline.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.append_newline.cljs$lang$applyTo = (function (seq78682){
var G__78683 = cljs.core.first(seq78682);
var seq78682__$1 = cljs.core.next(seq78682);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78683,seq78682__$1);
}));


//# sourceMappingURL=rewrite_cljc.zip.whitespace.js.map
