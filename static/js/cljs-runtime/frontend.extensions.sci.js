goog.provide('frontend.extensions.sci');
frontend.extensions.sci.sum = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core._PLUS_);
frontend.extensions.sci.average = (function frontend$extensions$sci$average(coll){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,coll) / cljs.core.count(coll));
});
frontend.extensions.sci.eval_string = (function frontend$extensions$sci$eval_string(s){
try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"sum","sum",1777518341,null),frontend.extensions.sci.sum,new cljs.core.Symbol(null,"average","average",1148175359,null),frontend.extensions.sci.average,new cljs.core.Symbol(null,"parseFloat","parseFloat",1048011182,null),parseFloat,new cljs.core.Symbol(null,"isNaN","isNaN",74904266,null),isNaN,new cljs.core.Symbol(null,"log","log",45015523,null),console.log,new cljs.core.Symbol(null,"pprint","pprint",-1434237374,null),frontend.util.pp_str], null)], null));
}catch (e42369){if((e42369 instanceof Error)){
var e = e42369;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Query: sci eval failed:"], 0));

return console.error(e);
} else {
throw e42369;

}
}});
frontend.extensions.sci.call_fn = (function frontend$extensions$sci$call_fn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___42372 = arguments.length;
var i__5767__auto___42373 = (0);
while(true){
if((i__5767__auto___42373 < len__5766__auto___42372)){
args__5772__auto__.push((arguments[i__5767__auto___42373]));

var G__42374 = (i__5767__auto___42373 + (1));
i__5767__auto___42373 = G__42374;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));

(frontend.extensions.sci.call_fn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.extensions.sci.call_fn.cljs$lang$applyTo = (function (seq42370){
var G__42371 = cljs.core.first(seq42370);
var seq42370__$1 = cljs.core.next(seq42370);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42371,seq42370__$1);
}));

frontend.extensions.sci.eval_result = (function frontend$extensions$sci$eval_result(code){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Results:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.results.mt-1","div.results.mt-1",-1175435307),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),(function (){var result = frontend.extensions.sci.eval_string(code);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
})()], null)], null)], null);
});

//# sourceMappingURL=frontend.extensions.sci.js.map
