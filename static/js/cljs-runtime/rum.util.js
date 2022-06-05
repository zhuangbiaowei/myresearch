goog.provide('rum.util');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
})),mixins);
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
})),mixins);
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49322 = arguments.length;
var i__5767__auto___49323 = (0);
while(true){
if((i__5767__auto___49323 < len__5766__auto___49322)){
args__5772__auto__.push((arguments[i__5767__auto___49323]));

var G__49324 = (i__5767__auto___49323 + (1));
i__5767__auto___49323 = G__49324;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
}));

(rum.util.call_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.util.call_all.cljs$lang$applyTo = (function (seq49311){
var G__49312 = cljs.core.first(seq49311);
var seq49311__$1 = cljs.core.next(seq49311);
var G__49313 = cljs.core.first(seq49311__$1);
var seq49311__$2 = cljs.core.next(seq49311__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49312,G__49313,seq49311__$2);
}));


//# sourceMappingURL=rum.util.js.map
