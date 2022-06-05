goog.provide('linked.core');
linked.core.map = (function linked$core$map(var_args){
var G__59092 = arguments.length;
switch (G__59092) {
case 0:
return linked.core.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___59099 = arguments.length;
var i__5767__auto___59100 = (0);
while(true){
if((i__5767__auto___59100 < len__5766__auto___59099)){
args_arr__5791__auto__.push((arguments[i__5767__auto___59100]));

var G__59101 = (i__5767__auto___59100 + (1));
i__5767__auto___59100 = G__59101;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((0)),(0),null));
return linked.core.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5792__auto__);

}
});

(linked.core.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.map.empty_linked_map;
}));

(linked.core.map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,linked.map.empty_linked_map,keyvals);
}));

/** @this {Function} */
(linked.core.map.cljs$lang$applyTo = (function (seq59090){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59090));
}));

(linked.core.map.cljs$lang$maxFixedArity = (0));

linked.core.set = (function linked$core$set(var_args){
var G__59097 = arguments.length;
switch (G__59097) {
case 0:
return linked.core.set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___59103 = arguments.length;
var i__5767__auto___59104 = (0);
while(true){
if((i__5767__auto___59104 < len__5766__auto___59103)){
args_arr__5791__auto__.push((arguments[i__5767__auto___59104]));

var G__59105 = (i__5767__auto___59104 + (1));
i__5767__auto___59104 = G__59105;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((0)),(0),null));
return linked.core.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5792__auto__);

}
});

(linked.core.set.cljs$core$IFn$_invoke$arity$0 = (function (){
return linked.set.empty_linked_set;
}));

(linked.core.set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,linked.set.empty_linked_set,keys);
}));

/** @this {Function} */
(linked.core.set.cljs$lang$applyTo = (function (seq59096){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59096));
}));

(linked.core.set.cljs$lang$maxFixedArity = (0));


//# sourceMappingURL=linked.core.js.map
