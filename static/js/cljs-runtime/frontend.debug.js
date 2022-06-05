goog.provide('frontend.debug');
frontend.debug.pprint = (function frontend$debug$pprint(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59502 = arguments.length;
var i__5767__auto___59503 = (0);
while(true){
if((i__5767__auto___59503 < len__5766__auto___59502)){
args__5772__auto__.push((arguments[i__5767__auto___59503]));

var G__59504 = (i__5767__auto___59503 + (1));
i__5767__auto___59503 = G__59504;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(cljs.core.truth_(frontend.state.developer_mode_QMARK_())){
var seq__59498 = cljs.core.seq(xs);
var chunk__59499 = null;
var count__59500 = (0);
var i__59501 = (0);
while(true){
if((i__59501 < count__59500)){
var x = chunk__59499.cljs$core$IIndexed$_nth$arity$2(null,i__59501);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__59505 = seq__59498;
var G__59506 = chunk__59499;
var G__59507 = count__59500;
var G__59508 = (i__59501 + (1));
seq__59498 = G__59505;
chunk__59499 = G__59506;
count__59500 = G__59507;
i__59501 = G__59508;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59498);
if(temp__5720__auto__){
var seq__59498__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59498__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__59498__$1);
var G__59509 = cljs.core.chunk_rest(seq__59498__$1);
var G__59510 = c__5565__auto__;
var G__59511 = cljs.core.count(c__5565__auto__);
var G__59512 = (0);
seq__59498 = G__59509;
chunk__59499 = G__59510;
count__59500 = G__59511;
i__59501 = G__59512;
continue;
} else {
var x = cljs.core.first(seq__59498__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__59513 = cljs.core.next(seq__59498__$1);
var G__59514 = null;
var G__59515 = (0);
var G__59516 = (0);
seq__59498 = G__59513;
chunk__59499 = G__59514;
count__59500 = G__59515;
i__59501 = G__59516;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(frontend.debug.pprint.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.debug.pprint.cljs$lang$applyTo = (function (seq59497){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59497));
}));


//# sourceMappingURL=frontend.debug.js.map
