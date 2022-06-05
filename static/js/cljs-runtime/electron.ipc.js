goog.provide('electron.ipc');
electron.ipc.ipc = (function electron$ipc$ipc(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53899 = arguments.length;
var i__5767__auto___53901 = (0);
while(true){
if((i__5767__auto___53901 < len__5766__auto___53899)){
args__5772__auto__.push((arguments[i__5767__auto___53901]));

var G__53903 = (i__5767__auto___53901 + (1));
i__5767__auto___53901 = G__53903;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___36093__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.apis.doAction(cljs_bean.core.__GT_js(args)),(function (result){
return promesa.protocols._promise(result);
}));
}));
} else {
return null;
}
}));

(electron.ipc.ipc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(electron.ipc.ipc.cljs$lang$applyTo = (function (seq53890){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53890));
}));

electron.ipc.invoke = (function electron$ipc$invoke(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53907 = arguments.length;
var i__5767__auto___53909 = (0);
while(true){
if((i__5767__auto___53909 < len__5766__auto___53907)){
args__5772__auto__.push((arguments[i__5767__auto___53909]));

var G__53910 = (i__5767__auto___53909 + (1));
i__5767__auto___53909 = G__53910;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (channel,args){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___36093__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.apis.invoke(channel,cljs_bean.core.__GT_js(args)),(function (result){
return promesa.protocols._promise(result);
}));
}));
} else {
return null;
}
}));

(electron.ipc.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(electron.ipc.invoke.cljs$lang$applyTo = (function (seq53894){
var G__53895 = cljs.core.first(seq53894);
var seq53894__$1 = cljs.core.next(seq53894);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53895,seq53894__$1);
}));


//# sourceMappingURL=electron.ipc.js.map
