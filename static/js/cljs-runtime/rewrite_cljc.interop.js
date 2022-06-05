goog.provide('rewrite_cljc.interop');
/**
 * Interop version of string format
 *   Note that there a big differences between Java's format and Google Closure's format - we don't address them.
 *   %d and %s are known to work in both.
 */
rewrite_cljc.interop.simple_format = (function rewrite_cljc$interop$simple_format(var_args){
var args__5772__auto__ = [];
var len__5766__auto___77087 = arguments.length;
var i__5767__auto___77088 = (0);
while(true){
if((i__5767__auto___77088 < len__5766__auto___77087)){
args__5772__auto__.push((arguments[i__5767__auto___77088]));

var G__77089 = (i__5767__auto___77088 + (1));
i__5767__auto___77088 = G__77089;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,template,args);
}));

(rewrite_cljc.interop.simple_format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.interop.simple_format.cljs$lang$applyTo = (function (seq77084){
var G__77085 = cljs.core.first(seq77084);
var seq77084__$1 = cljs.core.next(seq77084);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77085,seq77084__$1);
}));

rewrite_cljc.interop.str__GT_int = (function rewrite_cljc$interop$str__GT_int(s){
return parseInt(s);
});
rewrite_cljc.interop.int__GT_str = (function rewrite_cljc$interop$int__GT_str(n,base){
return n.toString(base);
});
rewrite_cljc.interop.min_int = (function rewrite_cljc$interop$min_int(){
return Number.MIN_SAFE_INTEGER;
});
rewrite_cljc.interop.max_int = (function rewrite_cljc$interop$max_int(){
return Number.MAX_SAFE_INTEGER;
});
rewrite_cljc.interop.clojure_whitespace_QMARK_ = (function rewrite_cljc$interop$clojure_whitespace_QMARK_(c){
var and__5041__auto__ = c;
if(cljs.core.truth_(and__5041__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__5041__auto__;
}
});
rewrite_cljc.interop.meta_available_QMARK_ = (function rewrite_cljc$interop$meta_available_QMARK_(data){
if((!((data == null)))){
if((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

//# sourceMappingURL=rewrite_cljc.interop.js.map
