goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__62623 = (fixed_arity | (0));
switch (G__62623) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__62624){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__62624);

while(true){
var ret__61584__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61584__auto__)){
continue;
} else {
return ret__61584__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__62624 = null;
if (arguments.length > 0) {
var G__63777__i = 0, G__63777__a = new Array(arguments.length -  0);
while (G__63777__i < G__63777__a.length) {G__63777__a[G__63777__i] = arguments[G__63777__i + 0]; ++G__63777__i;}
  G__62624 = new cljs.core.IndexedSeq(G__63777__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__62624);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__63778){
var G__62624 = cljs.core.seq(arglist__63778);
return sci$impl$fns$fun_$_arity_0__delegate(G__62624);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__62650 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__62648,G__62649){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62648);

(invoc_array[vararg_idx] = G__62649);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__62648,var_args){
var G__62649 = null;
if (arguments.length > 1) {
var G__63779__i = 0, G__63779__a = new Array(arguments.length -  1);
while (G__63779__i < G__63779__a.length) {G__63779__a[G__63779__i] = arguments[G__63779__i + 1]; ++G__63779__i;}
  G__62649 = new cljs.core.IndexedSeq(G__63779__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__62648,G__62649);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__63780){
var G__62648 = cljs.core.first(arglist__63780);
var G__62649 = cljs.core.rest(arglist__63780);
return sci$impl$fns$fun_$_arity_1__delegate(G__62648,G__62649);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__62657 = cljs.core._nth(params,(0));
var G__62658 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__62654,G__62655,G__62656){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62654);

(invoc_array[(1)] = G__62655);

(invoc_array[vararg_idx] = G__62656);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__62654,G__62655,var_args){
var G__62656 = null;
if (arguments.length > 2) {
var G__63781__i = 0, G__63781__a = new Array(arguments.length -  2);
while (G__63781__i < G__63781__a.length) {G__63781__a[G__63781__i] = arguments[G__63781__i + 2]; ++G__63781__i;}
  G__62656 = new cljs.core.IndexedSeq(G__63781__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__62654,G__62655,G__62656);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__63782){
var G__62654 = cljs.core.first(arglist__63782);
arglist__63782 = cljs.core.next(arglist__63782);
var G__62655 = cljs.core.first(arglist__63782);
var G__62656 = cljs.core.rest(arglist__63782);
return sci$impl$fns$fun_$_arity_2__delegate(G__62654,G__62655,G__62656);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__62677 = cljs.core._nth(params,(0));
var G__62678 = cljs.core._nth(params,(1));
var G__62679 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__62673,G__62674,G__62675,G__62676){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62673);

(invoc_array[(1)] = G__62674);

(invoc_array[(2)] = G__62675);

(invoc_array[vararg_idx] = G__62676);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__62673,G__62674,G__62675,var_args){
var G__62676 = null;
if (arguments.length > 3) {
var G__63786__i = 0, G__63786__a = new Array(arguments.length -  3);
while (G__63786__i < G__63786__a.length) {G__63786__a[G__63786__i] = arguments[G__63786__i + 3]; ++G__63786__i;}
  G__62676 = new cljs.core.IndexedSeq(G__63786__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__62673,G__62674,G__62675,G__62676);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__63787){
var G__62673 = cljs.core.first(arglist__63787);
arglist__63787 = cljs.core.next(arglist__63787);
var G__62674 = cljs.core.first(arglist__63787);
arglist__63787 = cljs.core.next(arglist__63787);
var G__62675 = cljs.core.first(arglist__63787);
var G__62676 = cljs.core.rest(arglist__63787);
return sci$impl$fns$fun_$_arity_3__delegate(G__62673,G__62674,G__62675,G__62676);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__62686 = cljs.core._nth(params,(0));
var G__62687 = cljs.core._nth(params,(1));
var G__62688 = cljs.core._nth(params,(2));
var G__62689 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__62681,G__62682,G__62683,G__62684,G__62685){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62681);

(invoc_array[(1)] = G__62682);

(invoc_array[(2)] = G__62683);

(invoc_array[(3)] = G__62684);

(invoc_array[vararg_idx] = G__62685);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__62681,G__62682,G__62683,G__62684,var_args){
var G__62685 = null;
if (arguments.length > 4) {
var G__63788__i = 0, G__63788__a = new Array(arguments.length -  4);
while (G__63788__i < G__63788__a.length) {G__63788__a[G__63788__i] = arguments[G__63788__i + 4]; ++G__63788__i;}
  G__62685 = new cljs.core.IndexedSeq(G__63788__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__62681,G__62682,G__62683,G__62684,G__62685);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__63789){
var G__62681 = cljs.core.first(arglist__63789);
arglist__63789 = cljs.core.next(arglist__63789);
var G__62682 = cljs.core.first(arglist__63789);
arglist__63789 = cljs.core.next(arglist__63789);
var G__62683 = cljs.core.first(arglist__63789);
arglist__63789 = cljs.core.next(arglist__63789);
var G__62684 = cljs.core.first(arglist__63789);
var G__62685 = cljs.core.rest(arglist__63789);
return sci$impl$fns$fun_$_arity_4__delegate(G__62681,G__62682,G__62683,G__62684,G__62685);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__62699 = cljs.core._nth(params,(0));
var G__62700 = cljs.core._nth(params,(1));
var G__62701 = cljs.core._nth(params,(2));
var G__62702 = cljs.core._nth(params,(3));
var G__62703 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__62693,G__62694,G__62695,G__62696,G__62697,G__62698){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62693);

(invoc_array[(1)] = G__62694);

(invoc_array[(2)] = G__62695);

(invoc_array[(3)] = G__62696);

(invoc_array[(4)] = G__62697);

(invoc_array[vararg_idx] = G__62698);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__62693,G__62694,G__62695,G__62696,G__62697,var_args){
var G__62698 = null;
if (arguments.length > 5) {
var G__63793__i = 0, G__63793__a = new Array(arguments.length -  5);
while (G__63793__i < G__63793__a.length) {G__63793__a[G__63793__i] = arguments[G__63793__i + 5]; ++G__63793__i;}
  G__62698 = new cljs.core.IndexedSeq(G__63793__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__62693,G__62694,G__62695,G__62696,G__62697,G__62698);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__63794){
var G__62693 = cljs.core.first(arglist__63794);
arglist__63794 = cljs.core.next(arglist__63794);
var G__62694 = cljs.core.first(arglist__63794);
arglist__63794 = cljs.core.next(arglist__63794);
var G__62695 = cljs.core.first(arglist__63794);
arglist__63794 = cljs.core.next(arglist__63794);
var G__62696 = cljs.core.first(arglist__63794);
arglist__63794 = cljs.core.next(arglist__63794);
var G__62697 = cljs.core.first(arglist__63794);
var G__62698 = cljs.core.rest(arglist__63794);
return sci$impl$fns$fun_$_arity_5__delegate(G__62693,G__62694,G__62695,G__62696,G__62697,G__62698);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__62725 = cljs.core._nth(params,(0));
var G__62726 = cljs.core._nth(params,(1));
var G__62727 = cljs.core._nth(params,(2));
var G__62728 = cljs.core._nth(params,(3));
var G__62729 = cljs.core._nth(params,(4));
var G__62730 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__62718,G__62719,G__62720,G__62721,G__62722,G__62723,G__62724){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62718);

(invoc_array[(1)] = G__62719);

(invoc_array[(2)] = G__62720);

(invoc_array[(3)] = G__62721);

(invoc_array[(4)] = G__62722);

(invoc_array[(5)] = G__62723);

(invoc_array[vararg_idx] = G__62724);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__62718,G__62719,G__62720,G__62721,G__62722,G__62723,var_args){
var G__62724 = null;
if (arguments.length > 6) {
var G__63795__i = 0, G__63795__a = new Array(arguments.length -  6);
while (G__63795__i < G__63795__a.length) {G__63795__a[G__63795__i] = arguments[G__63795__i + 6]; ++G__63795__i;}
  G__62724 = new cljs.core.IndexedSeq(G__63795__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__62718,G__62719,G__62720,G__62721,G__62722,G__62723,G__62724);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__63796){
var G__62718 = cljs.core.first(arglist__63796);
arglist__63796 = cljs.core.next(arglist__63796);
var G__62719 = cljs.core.first(arglist__63796);
arglist__63796 = cljs.core.next(arglist__63796);
var G__62720 = cljs.core.first(arglist__63796);
arglist__63796 = cljs.core.next(arglist__63796);
var G__62721 = cljs.core.first(arglist__63796);
arglist__63796 = cljs.core.next(arglist__63796);
var G__62722 = cljs.core.first(arglist__63796);
arglist__63796 = cljs.core.next(arglist__63796);
var G__62723 = cljs.core.first(arglist__63796);
var G__62724 = cljs.core.rest(arglist__63796);
return sci$impl$fns$fun_$_arity_6__delegate(G__62718,G__62719,G__62720,G__62721,G__62722,G__62723,G__62724);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__62739 = cljs.core._nth(params,(0));
var G__62740 = cljs.core._nth(params,(1));
var G__62741 = cljs.core._nth(params,(2));
var G__62742 = cljs.core._nth(params,(3));
var G__62743 = cljs.core._nth(params,(4));
var G__62744 = cljs.core._nth(params,(5));
var G__62745 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__62731,G__62732,G__62733,G__62734,G__62735,G__62736,G__62737,G__62738){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62731);

(invoc_array[(1)] = G__62732);

(invoc_array[(2)] = G__62733);

(invoc_array[(3)] = G__62734);

(invoc_array[(4)] = G__62735);

(invoc_array[(5)] = G__62736);

(invoc_array[(6)] = G__62737);

(invoc_array[vararg_idx] = G__62738);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__62731,G__62732,G__62733,G__62734,G__62735,G__62736,G__62737,var_args){
var G__62738 = null;
if (arguments.length > 7) {
var G__63797__i = 0, G__63797__a = new Array(arguments.length -  7);
while (G__63797__i < G__63797__a.length) {G__63797__a[G__63797__i] = arguments[G__63797__i + 7]; ++G__63797__i;}
  G__62738 = new cljs.core.IndexedSeq(G__63797__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__62731,G__62732,G__62733,G__62734,G__62735,G__62736,G__62737,G__62738);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__63798){
var G__62731 = cljs.core.first(arglist__63798);
arglist__63798 = cljs.core.next(arglist__63798);
var G__62732 = cljs.core.first(arglist__63798);
arglist__63798 = cljs.core.next(arglist__63798);
var G__62733 = cljs.core.first(arglist__63798);
arglist__63798 = cljs.core.next(arglist__63798);
var G__62734 = cljs.core.first(arglist__63798);
arglist__63798 = cljs.core.next(arglist__63798);
var G__62735 = cljs.core.first(arglist__63798);
arglist__63798 = cljs.core.next(arglist__63798);
var G__62736 = cljs.core.first(arglist__63798);
arglist__63798 = cljs.core.next(arglist__63798);
var G__62737 = cljs.core.first(arglist__63798);
var G__62738 = cljs.core.rest(arglist__63798);
return sci$impl$fns$fun_$_arity_7__delegate(G__62731,G__62732,G__62733,G__62734,G__62735,G__62736,G__62737,G__62738);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__62777 = cljs.core._nth(params,(0));
var G__62778 = cljs.core._nth(params,(1));
var G__62779 = cljs.core._nth(params,(2));
var G__62780 = cljs.core._nth(params,(3));
var G__62781 = cljs.core._nth(params,(4));
var G__62782 = cljs.core._nth(params,(5));
var G__62783 = cljs.core._nth(params,(6));
var G__62784 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__62768,G__62769,G__62770,G__62771,G__62772,G__62773,G__62774,G__62775,G__62776){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62768);

(invoc_array[(1)] = G__62769);

(invoc_array[(2)] = G__62770);

(invoc_array[(3)] = G__62771);

(invoc_array[(4)] = G__62772);

(invoc_array[(5)] = G__62773);

(invoc_array[(6)] = G__62774);

(invoc_array[(7)] = G__62775);

(invoc_array[vararg_idx] = G__62776);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__62768,G__62769,G__62770,G__62771,G__62772,G__62773,G__62774,G__62775,var_args){
var G__62776 = null;
if (arguments.length > 8) {
var G__63799__i = 0, G__63799__a = new Array(arguments.length -  8);
while (G__63799__i < G__63799__a.length) {G__63799__a[G__63799__i] = arguments[G__63799__i + 8]; ++G__63799__i;}
  G__62776 = new cljs.core.IndexedSeq(G__63799__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__62768,G__62769,G__62770,G__62771,G__62772,G__62773,G__62774,G__62775,G__62776);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__63803){
var G__62768 = cljs.core.first(arglist__63803);
arglist__63803 = cljs.core.next(arglist__63803);
var G__62769 = cljs.core.first(arglist__63803);
arglist__63803 = cljs.core.next(arglist__63803);
var G__62770 = cljs.core.first(arglist__63803);
arglist__63803 = cljs.core.next(arglist__63803);
var G__62771 = cljs.core.first(arglist__63803);
arglist__63803 = cljs.core.next(arglist__63803);
var G__62772 = cljs.core.first(arglist__63803);
arglist__63803 = cljs.core.next(arglist__63803);
var G__62773 = cljs.core.first(arglist__63803);
arglist__63803 = cljs.core.next(arglist__63803);
var G__62774 = cljs.core.first(arglist__63803);
arglist__63803 = cljs.core.next(arglist__63803);
var G__62775 = cljs.core.first(arglist__63803);
var G__62776 = cljs.core.rest(arglist__63803);
return sci$impl$fns$fun_$_arity_8__delegate(G__62768,G__62769,G__62770,G__62771,G__62772,G__62773,G__62774,G__62775,G__62776);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__62798 = cljs.core._nth(params,(0));
var G__62799 = cljs.core._nth(params,(1));
var G__62800 = cljs.core._nth(params,(2));
var G__62801 = cljs.core._nth(params,(3));
var G__62802 = cljs.core._nth(params,(4));
var G__62803 = cljs.core._nth(params,(5));
var G__62804 = cljs.core._nth(params,(6));
var G__62805 = cljs.core._nth(params,(7));
var G__62806 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__62788,G__62789,G__62790,G__62791,G__62792,G__62793,G__62794,G__62795,G__62796,G__62797){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62788);

(invoc_array[(1)] = G__62789);

(invoc_array[(2)] = G__62790);

(invoc_array[(3)] = G__62791);

(invoc_array[(4)] = G__62792);

(invoc_array[(5)] = G__62793);

(invoc_array[(6)] = G__62794);

(invoc_array[(7)] = G__62795);

(invoc_array[(8)] = G__62796);

(invoc_array[vararg_idx] = G__62797);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__62788,G__62789,G__62790,G__62791,G__62792,G__62793,G__62794,G__62795,G__62796,var_args){
var G__62797 = null;
if (arguments.length > 9) {
var G__63804__i = 0, G__63804__a = new Array(arguments.length -  9);
while (G__63804__i < G__63804__a.length) {G__63804__a[G__63804__i] = arguments[G__63804__i + 9]; ++G__63804__i;}
  G__62797 = new cljs.core.IndexedSeq(G__63804__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__62788,G__62789,G__62790,G__62791,G__62792,G__62793,G__62794,G__62795,G__62796,G__62797);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__63806){
var G__62788 = cljs.core.first(arglist__63806);
arglist__63806 = cljs.core.next(arglist__63806);
var G__62789 = cljs.core.first(arglist__63806);
arglist__63806 = cljs.core.next(arglist__63806);
var G__62790 = cljs.core.first(arglist__63806);
arglist__63806 = cljs.core.next(arglist__63806);
var G__62791 = cljs.core.first(arglist__63806);
arglist__63806 = cljs.core.next(arglist__63806);
var G__62792 = cljs.core.first(arglist__63806);
arglist__63806 = cljs.core.next(arglist__63806);
var G__62793 = cljs.core.first(arglist__63806);
arglist__63806 = cljs.core.next(arglist__63806);
var G__62794 = cljs.core.first(arglist__63806);
arglist__63806 = cljs.core.next(arglist__63806);
var G__62795 = cljs.core.first(arglist__63806);
arglist__63806 = cljs.core.next(arglist__63806);
var G__62796 = cljs.core.first(arglist__63806);
var G__62797 = cljs.core.rest(arglist__63806);
return sci$impl$fns$fun_$_arity_9__delegate(G__62788,G__62789,G__62790,G__62791,G__62792,G__62793,G__62794,G__62795,G__62796,G__62797);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__62833 = cljs.core._nth(params,(0));
var G__62834 = cljs.core._nth(params,(1));
var G__62835 = cljs.core._nth(params,(2));
var G__62836 = cljs.core._nth(params,(3));
var G__62837 = cljs.core._nth(params,(4));
var G__62838 = cljs.core._nth(params,(5));
var G__62839 = cljs.core._nth(params,(6));
var G__62840 = cljs.core._nth(params,(7));
var G__62841 = cljs.core._nth(params,(8));
var G__62842 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__62822,G__62823,G__62824,G__62825,G__62826,G__62827,G__62828,G__62829,G__62830,G__62831,G__62832){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62822);

(invoc_array[(1)] = G__62823);

(invoc_array[(2)] = G__62824);

(invoc_array[(3)] = G__62825);

(invoc_array[(4)] = G__62826);

(invoc_array[(5)] = G__62827);

(invoc_array[(6)] = G__62828);

(invoc_array[(7)] = G__62829);

(invoc_array[(8)] = G__62830);

(invoc_array[(9)] = G__62831);

(invoc_array[vararg_idx] = G__62832);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__62822,G__62823,G__62824,G__62825,G__62826,G__62827,G__62828,G__62829,G__62830,G__62831,var_args){
var G__62832 = null;
if (arguments.length > 10) {
var G__63808__i = 0, G__63808__a = new Array(arguments.length -  10);
while (G__63808__i < G__63808__a.length) {G__63808__a[G__63808__i] = arguments[G__63808__i + 10]; ++G__63808__i;}
  G__62832 = new cljs.core.IndexedSeq(G__63808__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__62822,G__62823,G__62824,G__62825,G__62826,G__62827,G__62828,G__62829,G__62830,G__62831,G__62832);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__63809){
var G__62822 = cljs.core.first(arglist__63809);
arglist__63809 = cljs.core.next(arglist__63809);
var G__62823 = cljs.core.first(arglist__63809);
arglist__63809 = cljs.core.next(arglist__63809);
var G__62824 = cljs.core.first(arglist__63809);
arglist__63809 = cljs.core.next(arglist__63809);
var G__62825 = cljs.core.first(arglist__63809);
arglist__63809 = cljs.core.next(arglist__63809);
var G__62826 = cljs.core.first(arglist__63809);
arglist__63809 = cljs.core.next(arglist__63809);
var G__62827 = cljs.core.first(arglist__63809);
arglist__63809 = cljs.core.next(arglist__63809);
var G__62828 = cljs.core.first(arglist__63809);
arglist__63809 = cljs.core.next(arglist__63809);
var G__62829 = cljs.core.first(arglist__63809);
arglist__63809 = cljs.core.next(arglist__63809);
var G__62830 = cljs.core.first(arglist__63809);
arglist__63809 = cljs.core.next(arglist__63809);
var G__62831 = cljs.core.first(arglist__63809);
var G__62832 = cljs.core.rest(arglist__63809);
return sci$impl$fns$fun_$_arity_10__delegate(G__62822,G__62823,G__62824,G__62825,G__62826,G__62827,G__62828,G__62829,G__62830,G__62831,G__62832);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__62859 = cljs.core._nth(params,(0));
var G__62860 = cljs.core._nth(params,(1));
var G__62861 = cljs.core._nth(params,(2));
var G__62862 = cljs.core._nth(params,(3));
var G__62863 = cljs.core._nth(params,(4));
var G__62864 = cljs.core._nth(params,(5));
var G__62865 = cljs.core._nth(params,(6));
var G__62866 = cljs.core._nth(params,(7));
var G__62867 = cljs.core._nth(params,(8));
var G__62868 = cljs.core._nth(params,(9));
var G__62869 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__62847,G__62848,G__62849,G__62850,G__62851,G__62852,G__62853,G__62854,G__62855,G__62856,G__62857,G__62858){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62847);

(invoc_array[(1)] = G__62848);

(invoc_array[(2)] = G__62849);

(invoc_array[(3)] = G__62850);

(invoc_array[(4)] = G__62851);

(invoc_array[(5)] = G__62852);

(invoc_array[(6)] = G__62853);

(invoc_array[(7)] = G__62854);

(invoc_array[(8)] = G__62855);

(invoc_array[(9)] = G__62856);

(invoc_array[(10)] = G__62857);

(invoc_array[vararg_idx] = G__62858);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__62847,G__62848,G__62849,G__62850,G__62851,G__62852,G__62853,G__62854,G__62855,G__62856,G__62857,var_args){
var G__62858 = null;
if (arguments.length > 11) {
var G__63813__i = 0, G__63813__a = new Array(arguments.length -  11);
while (G__63813__i < G__63813__a.length) {G__63813__a[G__63813__i] = arguments[G__63813__i + 11]; ++G__63813__i;}
  G__62858 = new cljs.core.IndexedSeq(G__63813__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__62847,G__62848,G__62849,G__62850,G__62851,G__62852,G__62853,G__62854,G__62855,G__62856,G__62857,G__62858);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__63814){
var G__62847 = cljs.core.first(arglist__63814);
arglist__63814 = cljs.core.next(arglist__63814);
var G__62848 = cljs.core.first(arglist__63814);
arglist__63814 = cljs.core.next(arglist__63814);
var G__62849 = cljs.core.first(arglist__63814);
arglist__63814 = cljs.core.next(arglist__63814);
var G__62850 = cljs.core.first(arglist__63814);
arglist__63814 = cljs.core.next(arglist__63814);
var G__62851 = cljs.core.first(arglist__63814);
arglist__63814 = cljs.core.next(arglist__63814);
var G__62852 = cljs.core.first(arglist__63814);
arglist__63814 = cljs.core.next(arglist__63814);
var G__62853 = cljs.core.first(arglist__63814);
arglist__63814 = cljs.core.next(arglist__63814);
var G__62854 = cljs.core.first(arglist__63814);
arglist__63814 = cljs.core.next(arglist__63814);
var G__62855 = cljs.core.first(arglist__63814);
arglist__63814 = cljs.core.next(arglist__63814);
var G__62856 = cljs.core.first(arglist__63814);
arglist__63814 = cljs.core.next(arglist__63814);
var G__62857 = cljs.core.first(arglist__63814);
var G__62858 = cljs.core.rest(arglist__63814);
return sci$impl$fns$fun_$_arity_11__delegate(G__62847,G__62848,G__62849,G__62850,G__62851,G__62852,G__62853,G__62854,G__62855,G__62856,G__62857,G__62858);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__62897 = cljs.core._nth(params,(0));
var G__62898 = cljs.core._nth(params,(1));
var G__62899 = cljs.core._nth(params,(2));
var G__62900 = cljs.core._nth(params,(3));
var G__62901 = cljs.core._nth(params,(4));
var G__62902 = cljs.core._nth(params,(5));
var G__62903 = cljs.core._nth(params,(6));
var G__62904 = cljs.core._nth(params,(7));
var G__62905 = cljs.core._nth(params,(8));
var G__62907 = cljs.core._nth(params,(9));
var G__62908 = cljs.core._nth(params,(10));
var G__62909 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__62884,G__62885,G__62886,G__62887,G__62888,G__62889,G__62890,G__62891,G__62892,G__62893,G__62894,G__62895,G__62896){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62884);

(invoc_array[(1)] = G__62885);

(invoc_array[(2)] = G__62886);

(invoc_array[(3)] = G__62887);

(invoc_array[(4)] = G__62888);

(invoc_array[(5)] = G__62889);

(invoc_array[(6)] = G__62890);

(invoc_array[(7)] = G__62891);

(invoc_array[(8)] = G__62892);

(invoc_array[(9)] = G__62893);

(invoc_array[(10)] = G__62894);

(invoc_array[(11)] = G__62895);

(invoc_array[vararg_idx] = G__62896);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__62884,G__62885,G__62886,G__62887,G__62888,G__62889,G__62890,G__62891,G__62892,G__62893,G__62894,G__62895,var_args){
var G__62896 = null;
if (arguments.length > 12) {
var G__63819__i = 0, G__63819__a = new Array(arguments.length -  12);
while (G__63819__i < G__63819__a.length) {G__63819__a[G__63819__i] = arguments[G__63819__i + 12]; ++G__63819__i;}
  G__62896 = new cljs.core.IndexedSeq(G__63819__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__62884,G__62885,G__62886,G__62887,G__62888,G__62889,G__62890,G__62891,G__62892,G__62893,G__62894,G__62895,G__62896);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__63824){
var G__62884 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62885 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62886 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62887 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62888 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62889 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62890 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62891 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62892 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62893 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62894 = cljs.core.first(arglist__63824);
arglist__63824 = cljs.core.next(arglist__63824);
var G__62895 = cljs.core.first(arglist__63824);
var G__62896 = cljs.core.rest(arglist__63824);
return sci$impl$fns$fun_$_arity_12__delegate(G__62884,G__62885,G__62886,G__62887,G__62888,G__62889,G__62890,G__62891,G__62892,G__62893,G__62894,G__62895,G__62896);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__62939 = cljs.core._nth(params,(0));
var G__62940 = cljs.core._nth(params,(1));
var G__62941 = cljs.core._nth(params,(2));
var G__62942 = cljs.core._nth(params,(3));
var G__62943 = cljs.core._nth(params,(4));
var G__62944 = cljs.core._nth(params,(5));
var G__62945 = cljs.core._nth(params,(6));
var G__62946 = cljs.core._nth(params,(7));
var G__62947 = cljs.core._nth(params,(8));
var G__62948 = cljs.core._nth(params,(9));
var G__62949 = cljs.core._nth(params,(10));
var G__62950 = cljs.core._nth(params,(11));
var G__62951 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__62925,G__62926,G__62927,G__62928,G__62929,G__62930,G__62931,G__62932,G__62933,G__62934,G__62935,G__62936,G__62937,G__62938){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62925);

(invoc_array[(1)] = G__62926);

(invoc_array[(2)] = G__62927);

(invoc_array[(3)] = G__62928);

(invoc_array[(4)] = G__62929);

(invoc_array[(5)] = G__62930);

(invoc_array[(6)] = G__62931);

(invoc_array[(7)] = G__62932);

(invoc_array[(8)] = G__62933);

(invoc_array[(9)] = G__62934);

(invoc_array[(10)] = G__62935);

(invoc_array[(11)] = G__62936);

(invoc_array[(12)] = G__62937);

(invoc_array[vararg_idx] = G__62938);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__62925,G__62926,G__62927,G__62928,G__62929,G__62930,G__62931,G__62932,G__62933,G__62934,G__62935,G__62936,G__62937,var_args){
var G__62938 = null;
if (arguments.length > 13) {
var G__63840__i = 0, G__63840__a = new Array(arguments.length -  13);
while (G__63840__i < G__63840__a.length) {G__63840__a[G__63840__i] = arguments[G__63840__i + 13]; ++G__63840__i;}
  G__62938 = new cljs.core.IndexedSeq(G__63840__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__62925,G__62926,G__62927,G__62928,G__62929,G__62930,G__62931,G__62932,G__62933,G__62934,G__62935,G__62936,G__62937,G__62938);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__63841){
var G__62925 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62926 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62927 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62928 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62929 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62930 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62931 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62932 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62933 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62934 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62935 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62936 = cljs.core.first(arglist__63841);
arglist__63841 = cljs.core.next(arglist__63841);
var G__62937 = cljs.core.first(arglist__63841);
var G__62938 = cljs.core.rest(arglist__63841);
return sci$impl$fns$fun_$_arity_13__delegate(G__62925,G__62926,G__62927,G__62928,G__62929,G__62930,G__62931,G__62932,G__62933,G__62934,G__62935,G__62936,G__62937,G__62938);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__62970 = cljs.core._nth(params,(0));
var G__62971 = cljs.core._nth(params,(1));
var G__62972 = cljs.core._nth(params,(2));
var G__62973 = cljs.core._nth(params,(3));
var G__62974 = cljs.core._nth(params,(4));
var G__62975 = cljs.core._nth(params,(5));
var G__62976 = cljs.core._nth(params,(6));
var G__62977 = cljs.core._nth(params,(7));
var G__62978 = cljs.core._nth(params,(8));
var G__62979 = cljs.core._nth(params,(9));
var G__62980 = cljs.core._nth(params,(10));
var G__62981 = cljs.core._nth(params,(11));
var G__62982 = cljs.core._nth(params,(12));
var G__62983 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__62955,G__62956,G__62957,G__62958,G__62959,G__62960,G__62961,G__62962,G__62963,G__62964,G__62965,G__62966,G__62967,G__62968,G__62969){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__62955);

(invoc_array[(1)] = G__62956);

(invoc_array[(2)] = G__62957);

(invoc_array[(3)] = G__62958);

(invoc_array[(4)] = G__62959);

(invoc_array[(5)] = G__62960);

(invoc_array[(6)] = G__62961);

(invoc_array[(7)] = G__62962);

(invoc_array[(8)] = G__62963);

(invoc_array[(9)] = G__62964);

(invoc_array[(10)] = G__62965);

(invoc_array[(11)] = G__62966);

(invoc_array[(12)] = G__62967);

(invoc_array[(13)] = G__62968);

(invoc_array[vararg_idx] = G__62969);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__62955,G__62956,G__62957,G__62958,G__62959,G__62960,G__62961,G__62962,G__62963,G__62964,G__62965,G__62966,G__62967,G__62968,var_args){
var G__62969 = null;
if (arguments.length > 14) {
var G__63852__i = 0, G__63852__a = new Array(arguments.length -  14);
while (G__63852__i < G__63852__a.length) {G__63852__a[G__63852__i] = arguments[G__63852__i + 14]; ++G__63852__i;}
  G__62969 = new cljs.core.IndexedSeq(G__63852__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__62955,G__62956,G__62957,G__62958,G__62959,G__62960,G__62961,G__62962,G__62963,G__62964,G__62965,G__62966,G__62967,G__62968,G__62969);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__63854){
var G__62955 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62956 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62957 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62958 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62959 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62960 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62961 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62962 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62963 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62964 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62965 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62966 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62967 = cljs.core.first(arglist__63854);
arglist__63854 = cljs.core.next(arglist__63854);
var G__62968 = cljs.core.first(arglist__63854);
var G__62969 = cljs.core.rest(arglist__63854);
return sci$impl$fns$fun_$_arity_14__delegate(G__62955,G__62956,G__62957,G__62958,G__62959,G__62960,G__62961,G__62962,G__62963,G__62964,G__62965,G__62966,G__62967,G__62968,G__62969);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__63019 = cljs.core._nth(params,(0));
var G__63020 = cljs.core._nth(params,(1));
var G__63021 = cljs.core._nth(params,(2));
var G__63022 = cljs.core._nth(params,(3));
var G__63023 = cljs.core._nth(params,(4));
var G__63024 = cljs.core._nth(params,(5));
var G__63025 = cljs.core._nth(params,(6));
var G__63026 = cljs.core._nth(params,(7));
var G__63027 = cljs.core._nth(params,(8));
var G__63028 = cljs.core._nth(params,(9));
var G__63029 = cljs.core._nth(params,(10));
var G__63030 = cljs.core._nth(params,(11));
var G__63031 = cljs.core._nth(params,(12));
var G__63032 = cljs.core._nth(params,(13));
var G__63033 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__63003,G__63004,G__63005,G__63006,G__63007,G__63008,G__63009,G__63010,G__63011,G__63012,G__63013,G__63014,G__63015,G__63016,G__63017,G__63018){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63003);

(invoc_array[(1)] = G__63004);

(invoc_array[(2)] = G__63005);

(invoc_array[(3)] = G__63006);

(invoc_array[(4)] = G__63007);

(invoc_array[(5)] = G__63008);

(invoc_array[(6)] = G__63009);

(invoc_array[(7)] = G__63010);

(invoc_array[(8)] = G__63011);

(invoc_array[(9)] = G__63012);

(invoc_array[(10)] = G__63013);

(invoc_array[(11)] = G__63014);

(invoc_array[(12)] = G__63015);

(invoc_array[(13)] = G__63016);

(invoc_array[(14)] = G__63017);

(invoc_array[vararg_idx] = G__63018);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__63003,G__63004,G__63005,G__63006,G__63007,G__63008,G__63009,G__63010,G__63011,G__63012,G__63013,G__63014,G__63015,G__63016,G__63017,var_args){
var G__63018 = null;
if (arguments.length > 15) {
var G__63862__i = 0, G__63862__a = new Array(arguments.length -  15);
while (G__63862__i < G__63862__a.length) {G__63862__a[G__63862__i] = arguments[G__63862__i + 15]; ++G__63862__i;}
  G__63018 = new cljs.core.IndexedSeq(G__63862__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__63003,G__63004,G__63005,G__63006,G__63007,G__63008,G__63009,G__63010,G__63011,G__63012,G__63013,G__63014,G__63015,G__63016,G__63017,G__63018);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__63864){
var G__63003 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63004 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63005 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63006 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63007 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63008 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63009 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63010 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63011 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63012 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63013 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63014 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63015 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63016 = cljs.core.first(arglist__63864);
arglist__63864 = cljs.core.next(arglist__63864);
var G__63017 = cljs.core.first(arglist__63864);
var G__63018 = cljs.core.rest(arglist__63864);
return sci$impl$fns$fun_$_arity_15__delegate(G__63003,G__63004,G__63005,G__63006,G__63007,G__63008,G__63009,G__63010,G__63011,G__63012,G__63013,G__63014,G__63015,G__63016,G__63017,G__63018);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__63051 = cljs.core._nth(params,(0));
var G__63052 = cljs.core._nth(params,(1));
var G__63053 = cljs.core._nth(params,(2));
var G__63054 = cljs.core._nth(params,(3));
var G__63055 = cljs.core._nth(params,(4));
var G__63056 = cljs.core._nth(params,(5));
var G__63057 = cljs.core._nth(params,(6));
var G__63058 = cljs.core._nth(params,(7));
var G__63059 = cljs.core._nth(params,(8));
var G__63060 = cljs.core._nth(params,(9));
var G__63061 = cljs.core._nth(params,(10));
var G__63062 = cljs.core._nth(params,(11));
var G__63063 = cljs.core._nth(params,(12));
var G__63064 = cljs.core._nth(params,(13));
var G__63065 = cljs.core._nth(params,(14));
var G__63066 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__63034,G__63035,G__63036,G__63037,G__63038,G__63039,G__63040,G__63041,G__63042,G__63043,G__63044,G__63045,G__63046,G__63047,G__63048,G__63049,G__63050){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63034);

(invoc_array[(1)] = G__63035);

(invoc_array[(2)] = G__63036);

(invoc_array[(3)] = G__63037);

(invoc_array[(4)] = G__63038);

(invoc_array[(5)] = G__63039);

(invoc_array[(6)] = G__63040);

(invoc_array[(7)] = G__63041);

(invoc_array[(8)] = G__63042);

(invoc_array[(9)] = G__63043);

(invoc_array[(10)] = G__63044);

(invoc_array[(11)] = G__63045);

(invoc_array[(12)] = G__63046);

(invoc_array[(13)] = G__63047);

(invoc_array[(14)] = G__63048);

(invoc_array[(15)] = G__63049);

(invoc_array[vararg_idx] = G__63050);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__63034,G__63035,G__63036,G__63037,G__63038,G__63039,G__63040,G__63041,G__63042,G__63043,G__63044,G__63045,G__63046,G__63047,G__63048,G__63049,var_args){
var G__63050 = null;
if (arguments.length > 16) {
var G__63881__i = 0, G__63881__a = new Array(arguments.length -  16);
while (G__63881__i < G__63881__a.length) {G__63881__a[G__63881__i] = arguments[G__63881__i + 16]; ++G__63881__i;}
  G__63050 = new cljs.core.IndexedSeq(G__63881__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__63034,G__63035,G__63036,G__63037,G__63038,G__63039,G__63040,G__63041,G__63042,G__63043,G__63044,G__63045,G__63046,G__63047,G__63048,G__63049,G__63050);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__63885){
var G__63034 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63035 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63036 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63037 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63038 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63039 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63040 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63041 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63042 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63043 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63044 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63045 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63046 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63047 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63048 = cljs.core.first(arglist__63885);
arglist__63885 = cljs.core.next(arglist__63885);
var G__63049 = cljs.core.first(arglist__63885);
var G__63050 = cljs.core.rest(arglist__63885);
return sci$impl$fns$fun_$_arity_16__delegate(G__63034,G__63035,G__63036,G__63037,G__63038,G__63039,G__63040,G__63041,G__63042,G__63043,G__63044,G__63045,G__63046,G__63047,G__63048,G__63049,G__63050);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__63088 = cljs.core._nth(params,(0));
var G__63089 = cljs.core._nth(params,(1));
var G__63090 = cljs.core._nth(params,(2));
var G__63091 = cljs.core._nth(params,(3));
var G__63092 = cljs.core._nth(params,(4));
var G__63093 = cljs.core._nth(params,(5));
var G__63094 = cljs.core._nth(params,(6));
var G__63095 = cljs.core._nth(params,(7));
var G__63096 = cljs.core._nth(params,(8));
var G__63097 = cljs.core._nth(params,(9));
var G__63098 = cljs.core._nth(params,(10));
var G__63099 = cljs.core._nth(params,(11));
var G__63100 = cljs.core._nth(params,(12));
var G__63101 = cljs.core._nth(params,(13));
var G__63102 = cljs.core._nth(params,(14));
var G__63103 = cljs.core._nth(params,(15));
var G__63104 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__63070,G__63071,G__63072,G__63073,G__63074,G__63075,G__63076,G__63077,G__63078,G__63079,G__63080,G__63081,G__63082,G__63083,G__63084,G__63085,G__63086,G__63087){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63070);

(invoc_array[(1)] = G__63071);

(invoc_array[(2)] = G__63072);

(invoc_array[(3)] = G__63073);

(invoc_array[(4)] = G__63074);

(invoc_array[(5)] = G__63075);

(invoc_array[(6)] = G__63076);

(invoc_array[(7)] = G__63077);

(invoc_array[(8)] = G__63078);

(invoc_array[(9)] = G__63079);

(invoc_array[(10)] = G__63080);

(invoc_array[(11)] = G__63081);

(invoc_array[(12)] = G__63082);

(invoc_array[(13)] = G__63083);

(invoc_array[(14)] = G__63084);

(invoc_array[(15)] = G__63085);

(invoc_array[(16)] = G__63086);

(invoc_array[vararg_idx] = G__63087);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__63070,G__63071,G__63072,G__63073,G__63074,G__63075,G__63076,G__63077,G__63078,G__63079,G__63080,G__63081,G__63082,G__63083,G__63084,G__63085,G__63086,var_args){
var G__63087 = null;
if (arguments.length > 17) {
var G__63895__i = 0, G__63895__a = new Array(arguments.length -  17);
while (G__63895__i < G__63895__a.length) {G__63895__a[G__63895__i] = arguments[G__63895__i + 17]; ++G__63895__i;}
  G__63087 = new cljs.core.IndexedSeq(G__63895__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__63070,G__63071,G__63072,G__63073,G__63074,G__63075,G__63076,G__63077,G__63078,G__63079,G__63080,G__63081,G__63082,G__63083,G__63084,G__63085,G__63086,G__63087);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__63896){
var G__63070 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63071 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63072 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63073 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63074 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63075 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63076 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63077 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63078 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63079 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63080 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63081 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63082 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63083 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63084 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63085 = cljs.core.first(arglist__63896);
arglist__63896 = cljs.core.next(arglist__63896);
var G__63086 = cljs.core.first(arglist__63896);
var G__63087 = cljs.core.rest(arglist__63896);
return sci$impl$fns$fun_$_arity_17__delegate(G__63070,G__63071,G__63072,G__63073,G__63074,G__63075,G__63076,G__63077,G__63078,G__63079,G__63080,G__63081,G__63082,G__63083,G__63084,G__63085,G__63086,G__63087);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__63127 = cljs.core._nth(params,(0));
var G__63128 = cljs.core._nth(params,(1));
var G__63129 = cljs.core._nth(params,(2));
var G__63130 = cljs.core._nth(params,(3));
var G__63131 = cljs.core._nth(params,(4));
var G__63132 = cljs.core._nth(params,(5));
var G__63133 = cljs.core._nth(params,(6));
var G__63134 = cljs.core._nth(params,(7));
var G__63135 = cljs.core._nth(params,(8));
var G__63136 = cljs.core._nth(params,(9));
var G__63137 = cljs.core._nth(params,(10));
var G__63138 = cljs.core._nth(params,(11));
var G__63139 = cljs.core._nth(params,(12));
var G__63140 = cljs.core._nth(params,(13));
var G__63141 = cljs.core._nth(params,(14));
var G__63142 = cljs.core._nth(params,(15));
var G__63143 = cljs.core._nth(params,(16));
var G__63144 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__63108,G__63109,G__63110,G__63111,G__63112,G__63113,G__63114,G__63115,G__63116,G__63117,G__63118,G__63119,G__63120,G__63121,G__63122,G__63123,G__63124,G__63125,G__63126){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63108);

(invoc_array[(1)] = G__63109);

(invoc_array[(2)] = G__63110);

(invoc_array[(3)] = G__63111);

(invoc_array[(4)] = G__63112);

(invoc_array[(5)] = G__63113);

(invoc_array[(6)] = G__63114);

(invoc_array[(7)] = G__63115);

(invoc_array[(8)] = G__63116);

(invoc_array[(9)] = G__63117);

(invoc_array[(10)] = G__63118);

(invoc_array[(11)] = G__63119);

(invoc_array[(12)] = G__63120);

(invoc_array[(13)] = G__63121);

(invoc_array[(14)] = G__63122);

(invoc_array[(15)] = G__63123);

(invoc_array[(16)] = G__63124);

(invoc_array[(17)] = G__63125);

(invoc_array[vararg_idx] = G__63126);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__63108,G__63109,G__63110,G__63111,G__63112,G__63113,G__63114,G__63115,G__63116,G__63117,G__63118,G__63119,G__63120,G__63121,G__63122,G__63123,G__63124,G__63125,var_args){
var G__63126 = null;
if (arguments.length > 18) {
var G__63905__i = 0, G__63905__a = new Array(arguments.length -  18);
while (G__63905__i < G__63905__a.length) {G__63905__a[G__63905__i] = arguments[G__63905__i + 18]; ++G__63905__i;}
  G__63126 = new cljs.core.IndexedSeq(G__63905__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__63108,G__63109,G__63110,G__63111,G__63112,G__63113,G__63114,G__63115,G__63116,G__63117,G__63118,G__63119,G__63120,G__63121,G__63122,G__63123,G__63124,G__63125,G__63126);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__63907){
var G__63108 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63109 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63110 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63111 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63112 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63113 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63114 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63115 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63116 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63117 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63118 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63119 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63120 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63121 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63122 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63123 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63124 = cljs.core.first(arglist__63907);
arglist__63907 = cljs.core.next(arglist__63907);
var G__63125 = cljs.core.first(arglist__63907);
var G__63126 = cljs.core.rest(arglist__63907);
return sci$impl$fns$fun_$_arity_18__delegate(G__63108,G__63109,G__63110,G__63111,G__63112,G__63113,G__63114,G__63115,G__63116,G__63117,G__63118,G__63119,G__63120,G__63121,G__63122,G__63123,G__63124,G__63125,G__63126);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__63178 = cljs.core._nth(params,(0));
var G__63179 = cljs.core._nth(params,(1));
var G__63180 = cljs.core._nth(params,(2));
var G__63181 = cljs.core._nth(params,(3));
var G__63182 = cljs.core._nth(params,(4));
var G__63183 = cljs.core._nth(params,(5));
var G__63184 = cljs.core._nth(params,(6));
var G__63185 = cljs.core._nth(params,(7));
var G__63186 = cljs.core._nth(params,(8));
var G__63187 = cljs.core._nth(params,(9));
var G__63188 = cljs.core._nth(params,(10));
var G__63189 = cljs.core._nth(params,(11));
var G__63190 = cljs.core._nth(params,(12));
var G__63191 = cljs.core._nth(params,(13));
var G__63192 = cljs.core._nth(params,(14));
var G__63193 = cljs.core._nth(params,(15));
var G__63194 = cljs.core._nth(params,(16));
var G__63195 = cljs.core._nth(params,(17));
var G__63196 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__63158,G__63159,G__63160,G__63161,G__63162,G__63163,G__63164,G__63165,G__63166,G__63167,G__63168,G__63169,G__63170,G__63171,G__63172,G__63173,G__63174,G__63175,G__63176,G__63177){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63158);

(invoc_array[(1)] = G__63159);

(invoc_array[(2)] = G__63160);

(invoc_array[(3)] = G__63161);

(invoc_array[(4)] = G__63162);

(invoc_array[(5)] = G__63163);

(invoc_array[(6)] = G__63164);

(invoc_array[(7)] = G__63165);

(invoc_array[(8)] = G__63166);

(invoc_array[(9)] = G__63167);

(invoc_array[(10)] = G__63168);

(invoc_array[(11)] = G__63169);

(invoc_array[(12)] = G__63170);

(invoc_array[(13)] = G__63171);

(invoc_array[(14)] = G__63172);

(invoc_array[(15)] = G__63173);

(invoc_array[(16)] = G__63174);

(invoc_array[(17)] = G__63175);

(invoc_array[(18)] = G__63176);

(invoc_array[vararg_idx] = G__63177);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__63158,G__63159,G__63160,G__63161,G__63162,G__63163,G__63164,G__63165,G__63166,G__63167,G__63168,G__63169,G__63170,G__63171,G__63172,G__63173,G__63174,G__63175,G__63176,var_args){
var G__63177 = null;
if (arguments.length > 19) {
var G__63918__i = 0, G__63918__a = new Array(arguments.length -  19);
while (G__63918__i < G__63918__a.length) {G__63918__a[G__63918__i] = arguments[G__63918__i + 19]; ++G__63918__i;}
  G__63177 = new cljs.core.IndexedSeq(G__63918__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__63158,G__63159,G__63160,G__63161,G__63162,G__63163,G__63164,G__63165,G__63166,G__63167,G__63168,G__63169,G__63170,G__63171,G__63172,G__63173,G__63174,G__63175,G__63176,G__63177);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__63919){
var G__63158 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63159 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63160 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63161 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63162 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63163 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63164 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63165 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63166 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63167 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63168 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63169 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63170 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63171 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63172 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63173 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63174 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63175 = cljs.core.first(arglist__63919);
arglist__63919 = cljs.core.next(arglist__63919);
var G__63176 = cljs.core.first(arglist__63919);
var G__63177 = cljs.core.rest(arglist__63919);
return sci$impl$fns$fun_$_arity_19__delegate(G__63158,G__63159,G__63160,G__63161,G__63162,G__63163,G__63164,G__63165,G__63166,G__63167,G__63168,G__63169,G__63170,G__63171,G__63172,G__63173,G__63174,G__63175,G__63176,G__63177);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__63228 = cljs.core._nth(params,(0));
var G__63229 = cljs.core._nth(params,(1));
var G__63230 = cljs.core._nth(params,(2));
var G__63231 = cljs.core._nth(params,(3));
var G__63232 = cljs.core._nth(params,(4));
var G__63233 = cljs.core._nth(params,(5));
var G__63234 = cljs.core._nth(params,(6));
var G__63235 = cljs.core._nth(params,(7));
var G__63236 = cljs.core._nth(params,(8));
var G__63237 = cljs.core._nth(params,(9));
var G__63238 = cljs.core._nth(params,(10));
var G__63239 = cljs.core._nth(params,(11));
var G__63240 = cljs.core._nth(params,(12));
var G__63241 = cljs.core._nth(params,(13));
var G__63242 = cljs.core._nth(params,(14));
var G__63243 = cljs.core._nth(params,(15));
var G__63244 = cljs.core._nth(params,(16));
var G__63245 = cljs.core._nth(params,(17));
var G__63246 = cljs.core._nth(params,(18));
var G__63247 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__63207,G__63208,G__63209,G__63210,G__63211,G__63212,G__63213,G__63214,G__63215,G__63216,G__63217,G__63218,G__63219,G__63220,G__63221,G__63222,G__63223,G__63224,G__63225,G__63226,G__63227){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63207);

(invoc_array[(1)] = G__63208);

(invoc_array[(2)] = G__63209);

(invoc_array[(3)] = G__63210);

(invoc_array[(4)] = G__63211);

(invoc_array[(5)] = G__63212);

(invoc_array[(6)] = G__63213);

(invoc_array[(7)] = G__63214);

(invoc_array[(8)] = G__63215);

(invoc_array[(9)] = G__63216);

(invoc_array[(10)] = G__63217);

(invoc_array[(11)] = G__63218);

(invoc_array[(12)] = G__63219);

(invoc_array[(13)] = G__63220);

(invoc_array[(14)] = G__63221);

(invoc_array[(15)] = G__63222);

(invoc_array[(16)] = G__63223);

(invoc_array[(17)] = G__63224);

(invoc_array[(18)] = G__63225);

(invoc_array[(19)] = G__63226);

(invoc_array[vararg_idx] = G__63227);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__63207,G__63208,G__63209,G__63210,G__63211,G__63212,G__63213,G__63214,G__63215,G__63216,G__63217,G__63218,G__63219,G__63220,G__63221,G__63222,G__63223,G__63224,G__63225,G__63226,var_args){
var G__63227 = null;
if (arguments.length > 20) {
var G__63935__i = 0, G__63935__a = new Array(arguments.length -  20);
while (G__63935__i < G__63935__a.length) {G__63935__a[G__63935__i] = arguments[G__63935__i + 20]; ++G__63935__i;}
  G__63227 = new cljs.core.IndexedSeq(G__63935__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__63207,G__63208,G__63209,G__63210,G__63211,G__63212,G__63213,G__63214,G__63215,G__63216,G__63217,G__63218,G__63219,G__63220,G__63221,G__63222,G__63223,G__63224,G__63225,G__63226,G__63227);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__63937){
var G__63207 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63208 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63209 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63210 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63211 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63212 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63213 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63214 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63215 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63216 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63217 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63218 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63219 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63220 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63221 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63222 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63223 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63224 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63225 = cljs.core.first(arglist__63937);
arglist__63937 = cljs.core.next(arglist__63937);
var G__63226 = cljs.core.first(arglist__63937);
var G__63227 = cljs.core.rest(arglist__63937);
return sci$impl$fns$fun_$_arity_20__delegate(G__63207,G__63208,G__63209,G__63210,G__63211,G__63212,G__63213,G__63214,G__63215,G__63216,G__63217,G__63218,G__63219,G__63220,G__63221,G__63222,G__63223,G__63224,G__63225,G__63226,G__63227);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62623)].join('')));

}
})():(function (){var G__63254 = (fixed_arity | (0));
switch (G__63254) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__61584__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61584__auto__)){
continue;
} else {
return ret__61584__auto__;
}
break;
}
});

break;
case (1):
var G__63259 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__63258){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63258);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (2):
var G__63264 = cljs.core._nth(params,(0));
var G__63265 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__63262,G__63263){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63262);

(invoc_array[(1)] = G__63263);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (3):
var G__63274 = cljs.core._nth(params,(0));
var G__63275 = cljs.core._nth(params,(1));
var G__63276 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__63271,G__63272,G__63273){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63271);

(invoc_array[(1)] = G__63272);

(invoc_array[(2)] = G__63273);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (4):
var G__63282 = cljs.core._nth(params,(0));
var G__63283 = cljs.core._nth(params,(1));
var G__63284 = cljs.core._nth(params,(2));
var G__63285 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__63278,G__63279,G__63280,G__63281){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63278);

(invoc_array[(1)] = G__63279);

(invoc_array[(2)] = G__63280);

(invoc_array[(3)] = G__63281);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (5):
var G__63291 = cljs.core._nth(params,(0));
var G__63292 = cljs.core._nth(params,(1));
var G__63293 = cljs.core._nth(params,(2));
var G__63294 = cljs.core._nth(params,(3));
var G__63295 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__63286,G__63287,G__63288,G__63289,G__63290){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63286);

(invoc_array[(1)] = G__63287);

(invoc_array[(2)] = G__63288);

(invoc_array[(3)] = G__63289);

(invoc_array[(4)] = G__63290);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (6):
var G__63302 = cljs.core._nth(params,(0));
var G__63303 = cljs.core._nth(params,(1));
var G__63304 = cljs.core._nth(params,(2));
var G__63305 = cljs.core._nth(params,(3));
var G__63306 = cljs.core._nth(params,(4));
var G__63307 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__63296,G__63297,G__63298,G__63299,G__63300,G__63301){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63296);

(invoc_array[(1)] = G__63297);

(invoc_array[(2)] = G__63298);

(invoc_array[(3)] = G__63299);

(invoc_array[(4)] = G__63300);

(invoc_array[(5)] = G__63301);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (7):
var G__63315 = cljs.core._nth(params,(0));
var G__63316 = cljs.core._nth(params,(1));
var G__63317 = cljs.core._nth(params,(2));
var G__63318 = cljs.core._nth(params,(3));
var G__63319 = cljs.core._nth(params,(4));
var G__63320 = cljs.core._nth(params,(5));
var G__63321 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__63308,G__63309,G__63310,G__63311,G__63312,G__63313,G__63314){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63308);

(invoc_array[(1)] = G__63309);

(invoc_array[(2)] = G__63310);

(invoc_array[(3)] = G__63311);

(invoc_array[(4)] = G__63312);

(invoc_array[(5)] = G__63313);

(invoc_array[(6)] = G__63314);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (8):
var G__63332 = cljs.core._nth(params,(0));
var G__63333 = cljs.core._nth(params,(1));
var G__63334 = cljs.core._nth(params,(2));
var G__63335 = cljs.core._nth(params,(3));
var G__63336 = cljs.core._nth(params,(4));
var G__63337 = cljs.core._nth(params,(5));
var G__63338 = cljs.core._nth(params,(6));
var G__63339 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__63324,G__63325,G__63326,G__63327,G__63328,G__63329,G__63330,G__63331){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63324);

(invoc_array[(1)] = G__63325);

(invoc_array[(2)] = G__63326);

(invoc_array[(3)] = G__63327);

(invoc_array[(4)] = G__63328);

(invoc_array[(5)] = G__63329);

(invoc_array[(6)] = G__63330);

(invoc_array[(7)] = G__63331);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (9):
var G__63350 = cljs.core._nth(params,(0));
var G__63351 = cljs.core._nth(params,(1));
var G__63352 = cljs.core._nth(params,(2));
var G__63353 = cljs.core._nth(params,(3));
var G__63354 = cljs.core._nth(params,(4));
var G__63355 = cljs.core._nth(params,(5));
var G__63356 = cljs.core._nth(params,(6));
var G__63357 = cljs.core._nth(params,(7));
var G__63358 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__63341,G__63342,G__63343,G__63344,G__63345,G__63346,G__63347,G__63348,G__63349){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63341);

(invoc_array[(1)] = G__63342);

(invoc_array[(2)] = G__63343);

(invoc_array[(3)] = G__63344);

(invoc_array[(4)] = G__63345);

(invoc_array[(5)] = G__63346);

(invoc_array[(6)] = G__63347);

(invoc_array[(7)] = G__63348);

(invoc_array[(8)] = G__63349);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (10):
var G__63373 = cljs.core._nth(params,(0));
var G__63374 = cljs.core._nth(params,(1));
var G__63375 = cljs.core._nth(params,(2));
var G__63376 = cljs.core._nth(params,(3));
var G__63377 = cljs.core._nth(params,(4));
var G__63378 = cljs.core._nth(params,(5));
var G__63379 = cljs.core._nth(params,(6));
var G__63380 = cljs.core._nth(params,(7));
var G__63381 = cljs.core._nth(params,(8));
var G__63382 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__63363,G__63364,G__63365,G__63366,G__63367,G__63368,G__63369,G__63370,G__63371,G__63372){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63363);

(invoc_array[(1)] = G__63364);

(invoc_array[(2)] = G__63365);

(invoc_array[(3)] = G__63366);

(invoc_array[(4)] = G__63367);

(invoc_array[(5)] = G__63368);

(invoc_array[(6)] = G__63369);

(invoc_array[(7)] = G__63370);

(invoc_array[(8)] = G__63371);

(invoc_array[(9)] = G__63372);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (11):
var G__63395 = cljs.core._nth(params,(0));
var G__63396 = cljs.core._nth(params,(1));
var G__63397 = cljs.core._nth(params,(2));
var G__63398 = cljs.core._nth(params,(3));
var G__63399 = cljs.core._nth(params,(4));
var G__63400 = cljs.core._nth(params,(5));
var G__63401 = cljs.core._nth(params,(6));
var G__63402 = cljs.core._nth(params,(7));
var G__63403 = cljs.core._nth(params,(8));
var G__63404 = cljs.core._nth(params,(9));
var G__63405 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__63384,G__63385,G__63386,G__63387,G__63388,G__63389,G__63390,G__63391,G__63392,G__63393,G__63394){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63384);

(invoc_array[(1)] = G__63385);

(invoc_array[(2)] = G__63386);

(invoc_array[(3)] = G__63387);

(invoc_array[(4)] = G__63388);

(invoc_array[(5)] = G__63389);

(invoc_array[(6)] = G__63390);

(invoc_array[(7)] = G__63391);

(invoc_array[(8)] = G__63392);

(invoc_array[(9)] = G__63393);

(invoc_array[(10)] = G__63394);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (12):
var G__63422 = cljs.core._nth(params,(0));
var G__63423 = cljs.core._nth(params,(1));
var G__63424 = cljs.core._nth(params,(2));
var G__63425 = cljs.core._nth(params,(3));
var G__63426 = cljs.core._nth(params,(4));
var G__63427 = cljs.core._nth(params,(5));
var G__63428 = cljs.core._nth(params,(6));
var G__63429 = cljs.core._nth(params,(7));
var G__63430 = cljs.core._nth(params,(8));
var G__63431 = cljs.core._nth(params,(9));
var G__63432 = cljs.core._nth(params,(10));
var G__63433 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__63410,G__63411,G__63412,G__63413,G__63414,G__63415,G__63416,G__63417,G__63418,G__63419,G__63420,G__63421){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63410);

(invoc_array[(1)] = G__63411);

(invoc_array[(2)] = G__63412);

(invoc_array[(3)] = G__63413);

(invoc_array[(4)] = G__63414);

(invoc_array[(5)] = G__63415);

(invoc_array[(6)] = G__63416);

(invoc_array[(7)] = G__63417);

(invoc_array[(8)] = G__63418);

(invoc_array[(9)] = G__63419);

(invoc_array[(10)] = G__63420);

(invoc_array[(11)] = G__63421);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (13):
var G__63447 = cljs.core._nth(params,(0));
var G__63448 = cljs.core._nth(params,(1));
var G__63449 = cljs.core._nth(params,(2));
var G__63450 = cljs.core._nth(params,(3));
var G__63451 = cljs.core._nth(params,(4));
var G__63452 = cljs.core._nth(params,(5));
var G__63453 = cljs.core._nth(params,(6));
var G__63454 = cljs.core._nth(params,(7));
var G__63455 = cljs.core._nth(params,(8));
var G__63456 = cljs.core._nth(params,(9));
var G__63457 = cljs.core._nth(params,(10));
var G__63458 = cljs.core._nth(params,(11));
var G__63459 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__63434,G__63435,G__63436,G__63437,G__63438,G__63439,G__63440,G__63441,G__63442,G__63443,G__63444,G__63445,G__63446){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63434);

(invoc_array[(1)] = G__63435);

(invoc_array[(2)] = G__63436);

(invoc_array[(3)] = G__63437);

(invoc_array[(4)] = G__63438);

(invoc_array[(5)] = G__63439);

(invoc_array[(6)] = G__63440);

(invoc_array[(7)] = G__63441);

(invoc_array[(8)] = G__63442);

(invoc_array[(9)] = G__63443);

(invoc_array[(10)] = G__63444);

(invoc_array[(11)] = G__63445);

(invoc_array[(12)] = G__63446);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (14):
var G__63478 = cljs.core._nth(params,(0));
var G__63479 = cljs.core._nth(params,(1));
var G__63480 = cljs.core._nth(params,(2));
var G__63481 = cljs.core._nth(params,(3));
var G__63482 = cljs.core._nth(params,(4));
var G__63483 = cljs.core._nth(params,(5));
var G__63484 = cljs.core._nth(params,(6));
var G__63485 = cljs.core._nth(params,(7));
var G__63486 = cljs.core._nth(params,(8));
var G__63487 = cljs.core._nth(params,(9));
var G__63488 = cljs.core._nth(params,(10));
var G__63489 = cljs.core._nth(params,(11));
var G__63490 = cljs.core._nth(params,(12));
var G__63491 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__63464,G__63465,G__63466,G__63467,G__63468,G__63469,G__63470,G__63471,G__63472,G__63473,G__63474,G__63475,G__63476,G__63477){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63464);

(invoc_array[(1)] = G__63465);

(invoc_array[(2)] = G__63466);

(invoc_array[(3)] = G__63467);

(invoc_array[(4)] = G__63468);

(invoc_array[(5)] = G__63469);

(invoc_array[(6)] = G__63470);

(invoc_array[(7)] = G__63471);

(invoc_array[(8)] = G__63472);

(invoc_array[(9)] = G__63473);

(invoc_array[(10)] = G__63474);

(invoc_array[(11)] = G__63475);

(invoc_array[(12)] = G__63476);

(invoc_array[(13)] = G__63477);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (15):
var G__63517 = cljs.core._nth(params,(0));
var G__63518 = cljs.core._nth(params,(1));
var G__63519 = cljs.core._nth(params,(2));
var G__63520 = cljs.core._nth(params,(3));
var G__63521 = cljs.core._nth(params,(4));
var G__63522 = cljs.core._nth(params,(5));
var G__63523 = cljs.core._nth(params,(6));
var G__63524 = cljs.core._nth(params,(7));
var G__63525 = cljs.core._nth(params,(8));
var G__63526 = cljs.core._nth(params,(9));
var G__63527 = cljs.core._nth(params,(10));
var G__63528 = cljs.core._nth(params,(11));
var G__63529 = cljs.core._nth(params,(12));
var G__63530 = cljs.core._nth(params,(13));
var G__63531 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__63502,G__63503,G__63504,G__63505,G__63506,G__63507,G__63508,G__63509,G__63510,G__63511,G__63512,G__63513,G__63514,G__63515,G__63516){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63502);

(invoc_array[(1)] = G__63503);

(invoc_array[(2)] = G__63504);

(invoc_array[(3)] = G__63505);

(invoc_array[(4)] = G__63506);

(invoc_array[(5)] = G__63507);

(invoc_array[(6)] = G__63508);

(invoc_array[(7)] = G__63509);

(invoc_array[(8)] = G__63510);

(invoc_array[(9)] = G__63511);

(invoc_array[(10)] = G__63512);

(invoc_array[(11)] = G__63513);

(invoc_array[(12)] = G__63514);

(invoc_array[(13)] = G__63515);

(invoc_array[(14)] = G__63516);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (16):
var G__63554 = cljs.core._nth(params,(0));
var G__63555 = cljs.core._nth(params,(1));
var G__63556 = cljs.core._nth(params,(2));
var G__63557 = cljs.core._nth(params,(3));
var G__63558 = cljs.core._nth(params,(4));
var G__63559 = cljs.core._nth(params,(5));
var G__63560 = cljs.core._nth(params,(6));
var G__63561 = cljs.core._nth(params,(7));
var G__63562 = cljs.core._nth(params,(8));
var G__63563 = cljs.core._nth(params,(9));
var G__63564 = cljs.core._nth(params,(10));
var G__63565 = cljs.core._nth(params,(11));
var G__63566 = cljs.core._nth(params,(12));
var G__63567 = cljs.core._nth(params,(13));
var G__63568 = cljs.core._nth(params,(14));
var G__63569 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__63538,G__63539,G__63540,G__63541,G__63542,G__63543,G__63544,G__63545,G__63546,G__63547,G__63548,G__63549,G__63550,G__63551,G__63552,G__63553){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63538);

(invoc_array[(1)] = G__63539);

(invoc_array[(2)] = G__63540);

(invoc_array[(3)] = G__63541);

(invoc_array[(4)] = G__63542);

(invoc_array[(5)] = G__63543);

(invoc_array[(6)] = G__63544);

(invoc_array[(7)] = G__63545);

(invoc_array[(8)] = G__63546);

(invoc_array[(9)] = G__63547);

(invoc_array[(10)] = G__63548);

(invoc_array[(11)] = G__63549);

(invoc_array[(12)] = G__63550);

(invoc_array[(13)] = G__63551);

(invoc_array[(14)] = G__63552);

(invoc_array[(15)] = G__63553);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (17):
var G__63587 = cljs.core._nth(params,(0));
var G__63588 = cljs.core._nth(params,(1));
var G__63589 = cljs.core._nth(params,(2));
var G__63590 = cljs.core._nth(params,(3));
var G__63591 = cljs.core._nth(params,(4));
var G__63592 = cljs.core._nth(params,(5));
var G__63593 = cljs.core._nth(params,(6));
var G__63594 = cljs.core._nth(params,(7));
var G__63595 = cljs.core._nth(params,(8));
var G__63596 = cljs.core._nth(params,(9));
var G__63597 = cljs.core._nth(params,(10));
var G__63598 = cljs.core._nth(params,(11));
var G__63599 = cljs.core._nth(params,(12));
var G__63600 = cljs.core._nth(params,(13));
var G__63601 = cljs.core._nth(params,(14));
var G__63602 = cljs.core._nth(params,(15));
var G__63603 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__63570,G__63571,G__63572,G__63573,G__63574,G__63575,G__63576,G__63577,G__63578,G__63579,G__63580,G__63581,G__63582,G__63583,G__63584,G__63585,G__63586){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63570);

(invoc_array[(1)] = G__63571);

(invoc_array[(2)] = G__63572);

(invoc_array[(3)] = G__63573);

(invoc_array[(4)] = G__63574);

(invoc_array[(5)] = G__63575);

(invoc_array[(6)] = G__63576);

(invoc_array[(7)] = G__63577);

(invoc_array[(8)] = G__63578);

(invoc_array[(9)] = G__63579);

(invoc_array[(10)] = G__63580);

(invoc_array[(11)] = G__63581);

(invoc_array[(12)] = G__63582);

(invoc_array[(13)] = G__63583);

(invoc_array[(14)] = G__63584);

(invoc_array[(15)] = G__63585);

(invoc_array[(16)] = G__63586);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (18):
var G__63625 = cljs.core._nth(params,(0));
var G__63626 = cljs.core._nth(params,(1));
var G__63627 = cljs.core._nth(params,(2));
var G__63628 = cljs.core._nth(params,(3));
var G__63629 = cljs.core._nth(params,(4));
var G__63631 = cljs.core._nth(params,(5));
var G__63632 = cljs.core._nth(params,(6));
var G__63633 = cljs.core._nth(params,(7));
var G__63634 = cljs.core._nth(params,(8));
var G__63635 = cljs.core._nth(params,(9));
var G__63636 = cljs.core._nth(params,(10));
var G__63637 = cljs.core._nth(params,(11));
var G__63638 = cljs.core._nth(params,(12));
var G__63639 = cljs.core._nth(params,(13));
var G__63640 = cljs.core._nth(params,(14));
var G__63641 = cljs.core._nth(params,(15));
var G__63642 = cljs.core._nth(params,(16));
var G__63643 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__63607,G__63608,G__63609,G__63610,G__63611,G__63612,G__63613,G__63614,G__63615,G__63616,G__63617,G__63618,G__63619,G__63620,G__63621,G__63622,G__63623,G__63624){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63607);

(invoc_array[(1)] = G__63608);

(invoc_array[(2)] = G__63609);

(invoc_array[(3)] = G__63610);

(invoc_array[(4)] = G__63611);

(invoc_array[(5)] = G__63612);

(invoc_array[(6)] = G__63613);

(invoc_array[(7)] = G__63614);

(invoc_array[(8)] = G__63615);

(invoc_array[(9)] = G__63616);

(invoc_array[(10)] = G__63617);

(invoc_array[(11)] = G__63618);

(invoc_array[(12)] = G__63619);

(invoc_array[(13)] = G__63620);

(invoc_array[(14)] = G__63621);

(invoc_array[(15)] = G__63622);

(invoc_array[(16)] = G__63623);

(invoc_array[(17)] = G__63624);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (19):
var G__63678 = cljs.core._nth(params,(0));
var G__63679 = cljs.core._nth(params,(1));
var G__63680 = cljs.core._nth(params,(2));
var G__63681 = cljs.core._nth(params,(3));
var G__63682 = cljs.core._nth(params,(4));
var G__63683 = cljs.core._nth(params,(5));
var G__63684 = cljs.core._nth(params,(6));
var G__63685 = cljs.core._nth(params,(7));
var G__63686 = cljs.core._nth(params,(8));
var G__63687 = cljs.core._nth(params,(9));
var G__63688 = cljs.core._nth(params,(10));
var G__63689 = cljs.core._nth(params,(11));
var G__63690 = cljs.core._nth(params,(12));
var G__63691 = cljs.core._nth(params,(13));
var G__63692 = cljs.core._nth(params,(14));
var G__63693 = cljs.core._nth(params,(15));
var G__63694 = cljs.core._nth(params,(16));
var G__63695 = cljs.core._nth(params,(17));
var G__63696 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__63659,G__63660,G__63661,G__63662,G__63663,G__63664,G__63665,G__63666,G__63667,G__63668,G__63669,G__63670,G__63671,G__63672,G__63673,G__63674,G__63675,G__63676,G__63677){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63659);

(invoc_array[(1)] = G__63660);

(invoc_array[(2)] = G__63661);

(invoc_array[(3)] = G__63662);

(invoc_array[(4)] = G__63663);

(invoc_array[(5)] = G__63664);

(invoc_array[(6)] = G__63665);

(invoc_array[(7)] = G__63666);

(invoc_array[(8)] = G__63667);

(invoc_array[(9)] = G__63668);

(invoc_array[(10)] = G__63669);

(invoc_array[(11)] = G__63670);

(invoc_array[(12)] = G__63671);

(invoc_array[(13)] = G__63672);

(invoc_array[(14)] = G__63673);

(invoc_array[(15)] = G__63674);

(invoc_array[(16)] = G__63675);

(invoc_array[(17)] = G__63676);

(invoc_array[(18)] = G__63677);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
case (20):
var G__63726 = cljs.core._nth(params,(0));
var G__63727 = cljs.core._nth(params,(1));
var G__63728 = cljs.core._nth(params,(2));
var G__63729 = cljs.core._nth(params,(3));
var G__63730 = cljs.core._nth(params,(4));
var G__63731 = cljs.core._nth(params,(5));
var G__63732 = cljs.core._nth(params,(6));
var G__63733 = cljs.core._nth(params,(7));
var G__63734 = cljs.core._nth(params,(8));
var G__63735 = cljs.core._nth(params,(9));
var G__63736 = cljs.core._nth(params,(10));
var G__63737 = cljs.core._nth(params,(11));
var G__63738 = cljs.core._nth(params,(12));
var G__63739 = cljs.core._nth(params,(13));
var G__63740 = cljs.core._nth(params,(14));
var G__63741 = cljs.core._nth(params,(15));
var G__63742 = cljs.core._nth(params,(16));
var G__63743 = cljs.core._nth(params,(17));
var G__63744 = cljs.core._nth(params,(18));
var G__63745 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__63706,G__63707,G__63708,G__63709,G__63710,G__63711,G__63712,G__63713,G__63714,G__63715,G__63716,G__63717,G__63718,G__63719,G__63720,G__63721,G__63722,G__63723,G__63724,G__63725){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__63706);

(invoc_array[(1)] = G__63707);

(invoc_array[(2)] = G__63708);

(invoc_array[(3)] = G__63709);

(invoc_array[(4)] = G__63710);

(invoc_array[(5)] = G__63711);

(invoc_array[(6)] = G__63712);

(invoc_array[(7)] = G__63713);

(invoc_array[(8)] = G__63714);

(invoc_array[(9)] = G__63715);

(invoc_array[(10)] = G__63716);

(invoc_array[(11)] = G__63717);

(invoc_array[(12)] = G__63718);

(invoc_array[(13)] = G__63719);

(invoc_array[(14)] = G__63720);

(invoc_array[(15)] = G__63721);

(invoc_array[(16)] = G__63722);

(invoc_array[(17)] = G__63723);

(invoc_array[(18)] = G__63724);

(invoc_array[(19)] = G__63725);

while(true){
var ret__61585__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__61585__auto__)){
continue;
} else {
return ret__61585__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63254)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__64060__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5718__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__64060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64063__i = 0, G__64063__a = new Array(arguments.length -  0);
while (G__64063__i < G__64063__a.length) {G__64063__a[G__64063__i] = arguments[G__64063__i + 0]; ++G__64063__i;}
  args = new cljs.core.IndexedSeq(G__64063__a,0,null);
} 
return G__64060__delegate.call(this,args);};
G__64060.cljs$lang$maxFixedArity = 0;
G__64060.cljs$lang$applyTo = (function (arglist__64064){
var args = cljs.core.seq(arglist__64064);
return G__64060__delegate(args);
});
G__64060.cljs$core$IFn$_invoke$arity$variadic = G__64060__delegate;
return G__64060;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__63754_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__63754_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
