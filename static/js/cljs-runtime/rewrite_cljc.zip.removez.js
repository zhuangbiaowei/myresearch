goog.provide('rewrite_cljc.zip.removez');
/**
 * Remove all whitespace following a given node.
 */
rewrite_cljc.zip.removez.remove_trailing_while = (function rewrite_cljc$zip$removez$remove_trailing_while(zloc,p_QMARK_){
return rewrite_cljc.custom_zipper.utils.remove_right_while(zloc,p_QMARK_);
});
/**
 * Remove all whitespace preceding a given node.
 */
rewrite_cljc.zip.removez.remove_preceding_while = (function rewrite_cljc$zip$removez$remove_preceding_while(zloc,p_QMARK_){
return rewrite_cljc.custom_zipper.utils.remove_left_while(zloc,p_QMARK_);
});
rewrite_cljc.zip.removez.remove_p = (function rewrite_cljc$zip$removez$remove_p(zloc,p_QMARK_){
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.prev,rewrite_cljc.custom_zipper.core.remove(rewrite_cljc.zip.removez.remove_trailing_while(((((rewrite_cljc.zip.move.rightmost_QMARK_(zloc)) || (rewrite_cljc.zip.move.leftmost_QMARK_(zloc))))?rewrite_cljc.zip.removez.remove_preceding_while(zloc,p_QMARK_):zloc),p_QMARK_)));
});
/**
 * Return zipper with current node in `zloc` removed. Returned zipper location
 * is moved to the first non-whitespace node preceding removed node in a depth-first walk.
 * Removes whitespace appropriately.
 * 
 *   - `[1 |2  3]    => [|1 3]`
 *   - `[1 |2]       => [|1]`
 *   - `[|1 2]       => |[2]`
 *   - `[|1]         => |[]`
 *   - `[  |1  ]     => |[]`
 *   - `[1 [2 3] |4] => [1 [2 |3]]`
 *   - `[|1 [2 3] 4] => |[[2 3] 4]`
 * 
 * If the removed node is at the rightmost location, both preceding and trailing spaces are removed,
 * otherwise only trailing spaces are removed. This means that a following element
 * (no matter whether on the same line or not) will end up in the same position
 * (line/column) as the removed one, _unless_ a comment lies between the original
 * node and the neighbour.
 */
rewrite_cljc.zip.removez.remove = (function rewrite_cljc$zip$removez$remove(zloc){
if(cljs.core.truth_(zloc)){
} else {
throw (new Error("Assert failed: zloc"));
}

var _PERCENT_ = rewrite_cljc.zip.removez.remove_p(zloc,rewrite_cljc.zip.whitespace.whitespace_QMARK_);
if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});
/**
 * Same as [[remove]] but preserves newlines.
 */
rewrite_cljc.zip.removez.remove_preserve_newline = (function rewrite_cljc$zip$removez$remove_preserve_newline(zloc){
if(cljs.core.truth_(zloc)){
} else {
throw (new Error("Assert failed: zloc"));
}

var _PERCENT_ = rewrite_cljc.zip.removez.remove_p(zloc,(function (p1__78786_SHARP_){
var and__5041__auto__ = rewrite_cljc.zip.whitespace.whitespace_QMARK_(p1__78786_SHARP_);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(rewrite_cljc.zip.whitespace.linebreak_QMARK_(p1__78786_SHARP_));
} else {
return and__5041__auto__;
}
}));
if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});

//# sourceMappingURL=rewrite_cljc.zip.removez.js.map
