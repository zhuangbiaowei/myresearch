goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81721 = arguments.length;
var i__5767__auto___81722 = (0);
while(true){
if((i__5767__auto___81722 < len__5766__auto___81721)){
args__5772__auto__.push((arguments[i__5767__auto___81722]));

var G__81723 = (i__5767__auto___81722 + (1));
i__5767__auto___81722 = G__81723;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq81587){
var G__81588 = cljs.core.first(seq81587);
var seq81587__$1 = cljs.core.next(seq81587);
var G__81589 = cljs.core.first(seq81587__$1);
var seq81587__$2 = cljs.core.next(seq81587__$1);
var G__81590 = cljs.core.first(seq81587__$2);
var seq81587__$3 = cljs.core.next(seq81587__$2);
var G__81591 = cljs.core.first(seq81587__$3);
var seq81587__$4 = cljs.core.next(seq81587__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81588,G__81589,G__81590,G__81591,seq81587__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81724 = arguments.length;
var i__5767__auto___81725 = (0);
while(true){
if((i__5767__auto___81725 < len__5766__auto___81724)){
args__5772__auto__.push((arguments[i__5767__auto___81725]));

var G__81726 = (i__5767__auto___81725 + (1));
i__5767__auto___81725 = G__81726;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__81545__auto__,rest__81546__auto__){
var convert_case__81547__auto__ = (function (p1__81544__81548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__81544__81548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81545__auto__,convert_case__81547__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq81600){
var G__81601 = cljs.core.first(seq81600);
var seq81600__$1 = cljs.core.next(seq81600);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81601,seq81600__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81727 = arguments.length;
var i__5767__auto___81728 = (0);
while(true){
if((i__5767__auto___81728 < len__5766__auto___81727)){
args__5772__auto__.push((arguments[i__5767__auto___81728]));

var G__81729 = (i__5767__auto___81728 + (1));
i__5767__auto___81728 = G__81729;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq81608){
var G__81609 = cljs.core.first(seq81608);
var seq81608__$1 = cljs.core.next(seq81608);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81609,seq81608__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81733 = arguments.length;
var i__5767__auto___81734 = (0);
while(true){
if((i__5767__auto___81734 < len__5766__auto___81733)){
args__5772__auto__.push((arguments[i__5767__auto___81734]));

var G__81735 = (i__5767__auto___81734 + (1));
i__5767__auto___81734 = G__81735;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq81619){
var G__81621 = cljs.core.first(seq81619);
var seq81619__$1 = cljs.core.next(seq81619);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81621,seq81619__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81736 = arguments.length;
var i__5767__auto___81737 = (0);
while(true){
if((i__5767__auto___81737 < len__5766__auto___81736)){
args__5772__auto__.push((arguments[i__5767__auto___81737]));

var G__81738 = (i__5767__auto___81737 + (1));
i__5767__auto___81737 = G__81738;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq81636){
var G__81637 = cljs.core.first(seq81636);
var seq81636__$1 = cljs.core.next(seq81636);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81637,seq81636__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81739 = arguments.length;
var i__5767__auto___81740 = (0);
while(true){
if((i__5767__auto___81740 < len__5766__auto___81739)){
args__5772__auto__.push((arguments[i__5767__auto___81740]));

var G__81741 = (i__5767__auto___81740 + (1));
i__5767__auto___81740 = G__81741;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__81545__auto__,rest__81546__auto__){
var convert_case__81547__auto__ = (function (p1__81544__81548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__81544__81548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81545__auto__,convert_case__81547__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq81639){
var G__81640 = cljs.core.first(seq81639);
var seq81639__$1 = cljs.core.next(seq81639);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81640,seq81639__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81742 = arguments.length;
var i__5767__auto___81743 = (0);
while(true){
if((i__5767__auto___81743 < len__5766__auto___81742)){
args__5772__auto__.push((arguments[i__5767__auto___81743]));

var G__81744 = (i__5767__auto___81743 + (1));
i__5767__auto___81743 = G__81744;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq81643){
var G__81644 = cljs.core.first(seq81643);
var seq81643__$1 = cljs.core.next(seq81643);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81644,seq81643__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81745 = arguments.length;
var i__5767__auto___81746 = (0);
while(true){
if((i__5767__auto___81746 < len__5766__auto___81745)){
args__5772__auto__.push((arguments[i__5767__auto___81746]));

var G__81747 = (i__5767__auto___81746 + (1));
i__5767__auto___81746 = G__81747;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq81647){
var G__81648 = cljs.core.first(seq81647);
var seq81647__$1 = cljs.core.next(seq81647);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81648,seq81647__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81748 = arguments.length;
var i__5767__auto___81749 = (0);
while(true){
if((i__5767__auto___81749 < len__5766__auto___81748)){
args__5772__auto__.push((arguments[i__5767__auto___81749]));

var G__81750 = (i__5767__auto___81749 + (1));
i__5767__auto___81749 = G__81750;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq81649){
var G__81650 = cljs.core.first(seq81649);
var seq81649__$1 = cljs.core.next(seq81649);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81650,seq81649__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81751 = arguments.length;
var i__5767__auto___81752 = (0);
while(true){
if((i__5767__auto___81752 < len__5766__auto___81751)){
args__5772__auto__.push((arguments[i__5767__auto___81752]));

var G__81753 = (i__5767__auto___81752 + (1));
i__5767__auto___81752 = G__81753;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__81545__auto__,rest__81546__auto__){
var convert_case__81547__auto__ = (function (p1__81544__81548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__81544__81548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81545__auto__,convert_case__81547__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq81652){
var G__81653 = cljs.core.first(seq81652);
var seq81652__$1 = cljs.core.next(seq81652);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81653,seq81652__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81754 = arguments.length;
var i__5767__auto___81755 = (0);
while(true){
if((i__5767__auto___81755 < len__5766__auto___81754)){
args__5772__auto__.push((arguments[i__5767__auto___81755]));

var G__81756 = (i__5767__auto___81755 + (1));
i__5767__auto___81755 = G__81756;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq81664){
var G__81665 = cljs.core.first(seq81664);
var seq81664__$1 = cljs.core.next(seq81664);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81665,seq81664__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81757 = arguments.length;
var i__5767__auto___81758 = (0);
while(true){
if((i__5767__auto___81758 < len__5766__auto___81757)){
args__5772__auto__.push((arguments[i__5767__auto___81758]));

var G__81759 = (i__5767__auto___81758 + (1));
i__5767__auto___81758 = G__81759;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq81666){
var G__81667 = cljs.core.first(seq81666);
var seq81666__$1 = cljs.core.next(seq81666);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81667,seq81666__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81760 = arguments.length;
var i__5767__auto___81761 = (0);
while(true){
if((i__5767__auto___81761 < len__5766__auto___81760)){
args__5772__auto__.push((arguments[i__5767__auto___81761]));

var G__81762 = (i__5767__auto___81761 + (1));
i__5767__auto___81761 = G__81762;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq81668){
var G__81669 = cljs.core.first(seq81668);
var seq81668__$1 = cljs.core.next(seq81668);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81669,seq81668__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81763 = arguments.length;
var i__5767__auto___81764 = (0);
while(true){
if((i__5767__auto___81764 < len__5766__auto___81763)){
args__5772__auto__.push((arguments[i__5767__auto___81764]));

var G__81765 = (i__5767__auto___81764 + (1));
i__5767__auto___81764 = G__81765;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__81545__auto__,rest__81546__auto__){
var convert_case__81547__auto__ = (function (p1__81544__81548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__81544__81548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81545__auto__,convert_case__81547__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq81670){
var G__81671 = cljs.core.first(seq81670);
var seq81670__$1 = cljs.core.next(seq81670);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81671,seq81670__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81766 = arguments.length;
var i__5767__auto___81767 = (0);
while(true){
if((i__5767__auto___81767 < len__5766__auto___81766)){
args__5772__auto__.push((arguments[i__5767__auto___81767]));

var G__81768 = (i__5767__auto___81767 + (1));
i__5767__auto___81767 = G__81768;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq81672){
var G__81673 = cljs.core.first(seq81672);
var seq81672__$1 = cljs.core.next(seq81672);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81673,seq81672__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81769 = arguments.length;
var i__5767__auto___81770 = (0);
while(true){
if((i__5767__auto___81770 < len__5766__auto___81769)){
args__5772__auto__.push((arguments[i__5767__auto___81770]));

var G__81771 = (i__5767__auto___81770 + (1));
i__5767__auto___81770 = G__81771;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq81674){
var G__81675 = cljs.core.first(seq81674);
var seq81674__$1 = cljs.core.next(seq81674);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81675,seq81674__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81772 = arguments.length;
var i__5767__auto___81773 = (0);
while(true){
if((i__5767__auto___81773 < len__5766__auto___81772)){
args__5772__auto__.push((arguments[i__5767__auto___81773]));

var G__81774 = (i__5767__auto___81773 + (1));
i__5767__auto___81773 = G__81774;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq81676){
var G__81677 = cljs.core.first(seq81676);
var seq81676__$1 = cljs.core.next(seq81676);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81677,seq81676__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81775 = arguments.length;
var i__5767__auto___81776 = (0);
while(true){
if((i__5767__auto___81776 < len__5766__auto___81775)){
args__5772__auto__.push((arguments[i__5767__auto___81776]));

var G__81777 = (i__5767__auto___81776 + (1));
i__5767__auto___81776 = G__81777;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__81545__auto__,rest__81546__auto__){
var convert_case__81547__auto__ = (function (p1__81544__81548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__81544__81548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81545__auto__,convert_case__81547__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq81685){
var G__81686 = cljs.core.first(seq81685);
var seq81685__$1 = cljs.core.next(seq81685);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81686,seq81685__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81778 = arguments.length;
var i__5767__auto___81779 = (0);
while(true){
if((i__5767__auto___81779 < len__5766__auto___81778)){
args__5772__auto__.push((arguments[i__5767__auto___81779]));

var G__81780 = (i__5767__auto___81779 + (1));
i__5767__auto___81779 = G__81780;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq81688){
var G__81689 = cljs.core.first(seq81688);
var seq81688__$1 = cljs.core.next(seq81688);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81689,seq81688__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81782 = arguments.length;
var i__5767__auto___81786 = (0);
while(true){
if((i__5767__auto___81786 < len__5766__auto___81782)){
args__5772__auto__.push((arguments[i__5767__auto___81786]));

var G__81787 = (i__5767__auto___81786 + (1));
i__5767__auto___81786 = G__81787;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq81690){
var G__81691 = cljs.core.first(seq81690);
var seq81690__$1 = cljs.core.next(seq81690);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81691,seq81690__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81792 = arguments.length;
var i__5767__auto___81793 = (0);
while(true){
if((i__5767__auto___81793 < len__5766__auto___81792)){
args__5772__auto__.push((arguments[i__5767__auto___81793]));

var G__81794 = (i__5767__auto___81793 + (1));
i__5767__auto___81793 = G__81794;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq81692){
var G__81693 = cljs.core.first(seq81692);
var seq81692__$1 = cljs.core.next(seq81692);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81693,seq81692__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81795 = arguments.length;
var i__5767__auto___81796 = (0);
while(true){
if((i__5767__auto___81796 < len__5766__auto___81795)){
args__5772__auto__.push((arguments[i__5767__auto___81796]));

var G__81797 = (i__5767__auto___81796 + (1));
i__5767__auto___81796 = G__81797;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__81545__auto__,rest__81546__auto__){
var convert_case__81547__auto__ = (function (p1__81544__81548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__81544__81548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81545__auto__,convert_case__81547__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq81694){
var G__81695 = cljs.core.first(seq81694);
var seq81694__$1 = cljs.core.next(seq81694);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81695,seq81694__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81798 = arguments.length;
var i__5767__auto___81799 = (0);
while(true){
if((i__5767__auto___81799 < len__5766__auto___81798)){
args__5772__auto__.push((arguments[i__5767__auto___81799]));

var G__81802 = (i__5767__auto___81799 + (1));
i__5767__auto___81799 = G__81802;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq81696){
var G__81697 = cljs.core.first(seq81696);
var seq81696__$1 = cljs.core.next(seq81696);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81697,seq81696__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81804 = arguments.length;
var i__5767__auto___81805 = (0);
while(true){
if((i__5767__auto___81805 < len__5766__auto___81804)){
args__5772__auto__.push((arguments[i__5767__auto___81805]));

var G__81806 = (i__5767__auto___81805 + (1));
i__5767__auto___81805 = G__81806;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq81698){
var G__81699 = cljs.core.first(seq81698);
var seq81698__$1 = cljs.core.next(seq81698);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81699,seq81698__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81810 = arguments.length;
var i__5767__auto___81811 = (0);
while(true){
if((i__5767__auto___81811 < len__5766__auto___81810)){
args__5772__auto__.push((arguments[i__5767__auto___81811]));

var G__81812 = (i__5767__auto___81811 + (1));
i__5767__auto___81811 = G__81812;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq81700){
var G__81701 = cljs.core.first(seq81700);
var seq81700__$1 = cljs.core.next(seq81700);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81701,seq81700__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81819 = arguments.length;
var i__5767__auto___81821 = (0);
while(true){
if((i__5767__auto___81821 < len__5766__auto___81819)){
args__5772__auto__.push((arguments[i__5767__auto___81821]));

var G__81822 = (i__5767__auto___81821 + (1));
i__5767__auto___81821 = G__81822;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__81545__auto__,rest__81546__auto__){
var convert_case__81547__auto__ = (function (p1__81544__81548__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__81544__81548__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81546__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__81545__auto__,convert_case__81547__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq81702){
var G__81703 = cljs.core.first(seq81702);
var seq81702__$1 = cljs.core.next(seq81702);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81703,seq81702__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81829 = arguments.length;
var i__5767__auto___81830 = (0);
while(true){
if((i__5767__auto___81830 < len__5766__auto___81829)){
args__5772__auto__.push((arguments[i__5767__auto___81830]));

var G__81832 = (i__5767__auto___81830 + (1));
i__5767__auto___81830 = G__81832;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq81715){
var G__81716 = cljs.core.first(seq81715);
var seq81715__$1 = cljs.core.next(seq81715);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81716,seq81715__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81845 = arguments.length;
var i__5767__auto___81846 = (0);
while(true){
if((i__5767__auto___81846 < len__5766__auto___81845)){
args__5772__auto__.push((arguments[i__5767__auto___81846]));

var G__81847 = (i__5767__auto___81846 + (1));
i__5767__auto___81846 = G__81847;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq81717){
var G__81718 = cljs.core.first(seq81717);
var seq81717__$1 = cljs.core.next(seq81717);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81718,seq81717__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81848 = arguments.length;
var i__5767__auto___81849 = (0);
while(true){
if((i__5767__auto___81849 < len__5766__auto___81848)){
args__5772__auto__.push((arguments[i__5767__auto___81849]));

var G__81851 = (i__5767__auto___81849 + (1));
i__5767__auto___81849 = G__81851;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__81551__auto__,rest__81552__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__81551__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__81552__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq81719){
var G__81720 = cljs.core.first(seq81719);
var seq81719__$1 = cljs.core.next(seq81719);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81720,seq81719__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
