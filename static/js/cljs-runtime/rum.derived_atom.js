goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__49369 = arguments.length;
switch (G__49369) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__49372 = opts;
var map__49372__$1 = cljs.core.__destructure_map(map__49372);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49372__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49372__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__49373 = cljs.core.count(refs);
switch (G__49373) {
case (1):
var vec__49375 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49375,(0),null);
return (function (){
var G__49378 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49378) : f.call(null,G__49378));
});

break;
case (2):
var vec__49379 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49379,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49379,(1),null);
return (function (){
var G__49382 = cljs.core.deref(a);
var G__49383 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__49382,G__49383) : f.call(null,G__49382,G__49383));
});

break;
case (3):
var vec__49384 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49384,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49384,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49384,(2),null);
return (function (){
var G__49387 = cljs.core.deref(a);
var G__49388 = cljs.core.deref(b);
var G__49389 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__49387,G__49388,G__49389) : f.call(null,G__49387,G__49388,G__49389));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__49390 = ref;
cljs.core.reset_BANG_(G__49390,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__49390;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__49392_49438 = cljs.core.seq(refs);
var chunk__49393_49439 = null;
var count__49394_49440 = (0);
var i__49395_49441 = (0);
while(true){
if((i__49395_49441 < count__49394_49440)){
var ref_49442__$1 = chunk__49393_49439.cljs$core$IIndexed$_nth$arity$2(null,i__49395_49441);
cljs.core.add_watch(ref_49442__$1,key,watch);


var G__49443 = seq__49392_49438;
var G__49444 = chunk__49393_49439;
var G__49445 = count__49394_49440;
var G__49446 = (i__49395_49441 + (1));
seq__49392_49438 = G__49443;
chunk__49393_49439 = G__49444;
count__49394_49440 = G__49445;
i__49395_49441 = G__49446;
continue;
} else {
var temp__5720__auto___49448 = cljs.core.seq(seq__49392_49438);
if(temp__5720__auto___49448){
var seq__49392_49450__$1 = temp__5720__auto___49448;
if(cljs.core.chunked_seq_QMARK_(seq__49392_49450__$1)){
var c__5565__auto___49451 = cljs.core.chunk_first(seq__49392_49450__$1);
var G__49452 = cljs.core.chunk_rest(seq__49392_49450__$1);
var G__49453 = c__5565__auto___49451;
var G__49454 = cljs.core.count(c__5565__auto___49451);
var G__49455 = (0);
seq__49392_49438 = G__49452;
chunk__49393_49439 = G__49453;
count__49394_49440 = G__49454;
i__49395_49441 = G__49455;
continue;
} else {
var ref_49456__$1 = cljs.core.first(seq__49392_49450__$1);
cljs.core.add_watch(ref_49456__$1,key,watch);


var G__49457 = cljs.core.next(seq__49392_49450__$1);
var G__49458 = null;
var G__49459 = (0);
var G__49460 = (0);
seq__49392_49438 = G__49457;
chunk__49393_49439 = G__49458;
count__49394_49440 = G__49459;
i__49395_49441 = G__49460;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
