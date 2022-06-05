goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__96316 = (line + (1));
var G__96317 = (1);
var G__96318 = (counter + (1));
line = G__96316;
col = G__96317;
counter = G__96318;
continue;
} else {
var G__96319 = line;
var G__96320 = (col + (1));
var G__96321 = (counter + (1));
line = G__96319;
col = G__96320;
counter = G__96321;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__96340 = cljs.core.next(chars);
var G__96341 = (n__$1 - (1));
chars = G__96340;
n__$1 = G__96341;
continue;
} else {
var G__96342 = cljs.core.next(chars);
var G__96343 = n__$1;
chars = G__96342;
n__$1 = G__96343;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__96304){
var map__96305 = p__96304;
var map__96305__$1 = cljs.core.__destructure_map(map__96305);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96305__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96305__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96305__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96305__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__96306_96344 = cljs.core.seq(full_reasons);
var chunk__96307_96345 = null;
var count__96308_96346 = (0);
var i__96309_96347 = (0);
while(true){
if((i__96309_96347 < count__96308_96346)){
var r_96348 = chunk__96307_96345.cljs$core$IIndexed$_nth$arity$2(null,i__96309_96347);
instaparse.failure.print_reason(r_96348);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__96349 = seq__96306_96344;
var G__96350 = chunk__96307_96345;
var G__96351 = count__96308_96346;
var G__96352 = (i__96309_96347 + (1));
seq__96306_96344 = G__96349;
chunk__96307_96345 = G__96350;
count__96308_96346 = G__96351;
i__96309_96347 = G__96352;
continue;
} else {
var temp__5720__auto___96353 = cljs.core.seq(seq__96306_96344);
if(temp__5720__auto___96353){
var seq__96306_96354__$1 = temp__5720__auto___96353;
if(cljs.core.chunked_seq_QMARK_(seq__96306_96354__$1)){
var c__5565__auto___96355 = cljs.core.chunk_first(seq__96306_96354__$1);
var G__96356 = cljs.core.chunk_rest(seq__96306_96354__$1);
var G__96357 = c__5565__auto___96355;
var G__96358 = cljs.core.count(c__5565__auto___96355);
var G__96359 = (0);
seq__96306_96344 = G__96356;
chunk__96307_96345 = G__96357;
count__96308_96346 = G__96358;
i__96309_96347 = G__96359;
continue;
} else {
var r_96360 = cljs.core.first(seq__96306_96354__$1);
instaparse.failure.print_reason(r_96360);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__96361 = cljs.core.next(seq__96306_96354__$1);
var G__96362 = null;
var G__96363 = (0);
var G__96364 = (0);
seq__96306_96344 = G__96361;
chunk__96307_96345 = G__96362;
count__96308_96346 = G__96363;
i__96309_96347 = G__96364;
continue;
}
} else {
}
}
break;
}

var seq__96312 = cljs.core.seq(partial_reasons);
var chunk__96313 = null;
var count__96314 = (0);
var i__96315 = (0);
while(true){
if((i__96315 < count__96314)){
var r = chunk__96313.cljs$core$IIndexed$_nth$arity$2(null,i__96315);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__96365 = seq__96312;
var G__96366 = chunk__96313;
var G__96367 = count__96314;
var G__96368 = (i__96315 + (1));
seq__96312 = G__96365;
chunk__96313 = G__96366;
count__96314 = G__96367;
i__96315 = G__96368;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__96312);
if(temp__5720__auto__){
var seq__96312__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__96312__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__96312__$1);
var G__96369 = cljs.core.chunk_rest(seq__96312__$1);
var G__96370 = c__5565__auto__;
var G__96371 = cljs.core.count(c__5565__auto__);
var G__96372 = (0);
seq__96312 = G__96369;
chunk__96313 = G__96370;
count__96314 = G__96371;
i__96315 = G__96372;
continue;
} else {
var r = cljs.core.first(seq__96312__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__96373 = cljs.core.next(seq__96312__$1);
var G__96374 = null;
var G__96375 = (0);
var G__96376 = (0);
seq__96312 = G__96373;
chunk__96313 = G__96374;
count__96314 = G__96375;
i__96315 = G__96376;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
