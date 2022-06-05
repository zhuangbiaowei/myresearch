goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61240 = cljs.core.get_global_hierarchy;
return (fexpr__61240.cljs$core$IFn$_invoke$arity$0 ? fexpr__61240.cljs$core$IFn$_invoke$arity$0() : fexpr__61240.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__61241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__61241.cljs$core$IFn$_invoke$arity$1 ? fexpr__61241.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__61241.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61255 = cljs.core.get_global_hierarchy;
return (fexpr__61255.cljs$core$IFn$_invoke$arity$0 ? fexpr__61255.cljs$core$IFn$_invoke$arity$0() : fexpr__61255.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61260 = cljs.core.get_global_hierarchy;
return (fexpr__61260.cljs$core$IFn$_invoke$arity$0 ? fexpr__61260.cljs$core$IFn$_invoke$arity$0() : fexpr__61260.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__61319 = null;
var G__61319__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__61264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__61264.cljs$core$IFn$_invoke$arity$2 ? fexpr__61264.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__61264.call(null,ref,f));
});
var G__61319__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__61279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__61279.cljs$core$IFn$_invoke$arity$3 ? fexpr__61279.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__61279.call(null,ref,f,a1));
});
var G__61319__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__61280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__61280.cljs$core$IFn$_invoke$arity$4 ? fexpr__61280.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__61280.call(null,ref,f,a1,a2));
});
var G__61319__5 = (function() { 
var G__61320__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__61320 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__61321__i = 0, G__61321__a = new Array(arguments.length -  4);
while (G__61321__i < G__61321__a.length) {G__61321__a[G__61321__i] = arguments[G__61321__i + 4]; ++G__61321__i;}
  args = new cljs.core.IndexedSeq(G__61321__a,0,null);
} 
return G__61320__delegate.call(this,ref,f,a1,a2,args);};
G__61320.cljs$lang$maxFixedArity = 4;
G__61320.cljs$lang$applyTo = (function (arglist__61322){
var ref = cljs.core.first(arglist__61322);
arglist__61322 = cljs.core.next(arglist__61322);
var f = cljs.core.first(arglist__61322);
arglist__61322 = cljs.core.next(arglist__61322);
var a1 = cljs.core.first(arglist__61322);
arglist__61322 = cljs.core.next(arglist__61322);
var a2 = cljs.core.first(arglist__61322);
var args = cljs.core.rest(arglist__61322);
return G__61320__delegate(ref,f,a1,a2,args);
});
G__61320.cljs$core$IFn$_invoke$arity$variadic = G__61320__delegate;
return G__61320;
})()
;
G__61319 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__61319__2.call(this,ref,f);
case 3:
return G__61319__3.call(this,ref,f,a1);
case 4:
return G__61319__4.call(this,ref,f,a1,a2);
default:
var G__61323 = null;
if (arguments.length > 4) {
var G__61324__i = 0, G__61324__a = new Array(arguments.length -  4);
while (G__61324__i < G__61324__a.length) {G__61324__a[G__61324__i] = arguments[G__61324__i + 4]; ++G__61324__i;}
G__61323 = new cljs.core.IndexedSeq(G__61324__a,0,null);
}
return G__61319__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__61323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61319.cljs$lang$maxFixedArity = 4;
G__61319.cljs$lang$applyTo = G__61319__5.cljs$lang$applyTo;
G__61319.cljs$core$IFn$_invoke$arity$2 = G__61319__2;
G__61319.cljs$core$IFn$_invoke$arity$3 = G__61319__3;
G__61319.cljs$core$IFn$_invoke$arity$4 = G__61319__4;
G__61319.cljs$core$IFn$_invoke$arity$variadic = G__61319__5.cljs$core$IFn$_invoke$arity$variadic;
return G__61319;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__61289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__61289.cljs$core$IFn$_invoke$arity$2 ? fexpr__61289.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__61289.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__61325__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__61325 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__61326__i = 0, G__61326__a = new Array(arguments.length -  2);
while (G__61326__i < G__61326__a.length) {G__61326__a[G__61326__i] = arguments[G__61326__i + 2]; ++G__61326__i;}
  args = new cljs.core.IndexedSeq(G__61326__a,0,null);
} 
return G__61325__delegate.call(this,ref,f,args);};
G__61325.cljs$lang$maxFixedArity = 2;
G__61325.cljs$lang$applyTo = (function (arglist__61327){
var ref = cljs.core.first(arglist__61327);
arglist__61327 = cljs.core.next(arglist__61327);
var f = cljs.core.first(arglist__61327);
var args = cljs.core.rest(arglist__61327);
return G__61325__delegate(ref,f,args);
});
G__61325.cljs$core$IFn$_invoke$arity$variadic = G__61325__delegate;
return G__61325;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61328 = arguments.length;
var i__5767__auto___61329 = (0);
while(true){
if((i__5767__auto___61329 < len__5766__auto___61328)){
args__5772__auto__.push((arguments[i__5767__auto___61329]));

var G__61330 = (i__5767__auto___61329 + (1));
i__5767__auto___61329 = G__61330;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq61294){
var G__61295 = cljs.core.first(seq61294);
var seq61294__$1 = cljs.core.next(seq61294);
var G__61296 = cljs.core.first(seq61294__$1);
var seq61294__$2 = cljs.core.next(seq61294__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61295,G__61296,seq61294__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
