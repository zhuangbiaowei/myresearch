goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__62609 = arguments.length;
switch (G__62609) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__62616 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62617 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62617);

try{var G__62618 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__62618);

return G__62618;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62616);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__62620 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62621 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62621);

try{var G__62622 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__62622);

return G__62622;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62620);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__62625 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62626 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62626);

try{var G__62627 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__62627);

return G__62627;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62625);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__62628 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62629 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62629);

try{var G__62631 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__62631);

return G__62631;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62628);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__62646 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__62647 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62647);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62646);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63146 = arguments.length;
var i__5767__auto___63147 = (0);
while(true){
if((i__5767__auto___63147 < len__5766__auto___63146)){
args__5772__auto__.push((arguments[i__5767__auto___63147]));

var G__63148 = (i__5767__auto___63147 + (1));
i__5767__auto___63147 = G__63148;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__62659 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__62660 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62661 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62662 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62663 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62664 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62665 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__62666 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__62667 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62668 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62669 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62670 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62671 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62672 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62666);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62667);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62668);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62669);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62670);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62671);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62672);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62665);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62664);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62663);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62662);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62661);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62660);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62659);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq62651){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62651));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__62691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__62692 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62692);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62691);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63154 = arguments.length;
var i__5767__auto___63155 = (0);
while(true){
if((i__5767__auto___63155 < len__5766__auto___63154)){
args__5772__auto__.push((arguments[i__5767__auto___63155]));

var G__63156 = (i__5767__auto___63155 + (1));
i__5767__auto___63155 = G__63156;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62706 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62707 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62708 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62709 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62710 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62711 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__62712 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62713 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62714 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62715 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62716 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62717 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62712);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62713);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62714);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62715);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62716);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62717);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62711);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62710);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62709);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62708);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62707);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62706);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq62704){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62704));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63197 = arguments.length;
var i__5767__auto___63198 = (0);
while(true){
if((i__5767__auto___63198 < len__5766__auto___63197)){
args__5772__auto__.push((arguments[i__5767__auto___63198]));

var G__63199 = (i__5767__auto___63198 + (1));
i__5767__auto___63198 = G__63199;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__62754 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__62755 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62756 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62757 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62758 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62759 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62760 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__62761 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__62762 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62763 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62764 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62765 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62766 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62767 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62761);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62762);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62763);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62764);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62765);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62766);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62767);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62760);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62759);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62758);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62757);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62756);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62755);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62754);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq62746){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62746));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63204 = arguments.length;
var i__5767__auto___63205 = (0);
while(true){
if((i__5767__auto___63205 < len__5766__auto___63204)){
args__5772__auto__.push((arguments[i__5767__auto___63205]));

var G__63206 = (i__5767__auto___63205 + (1));
i__5767__auto___63205 = G__63206;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62807 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62808 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62809 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62810 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62811 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62812 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__62813 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62814 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62815 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62816 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62817 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62818 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62813);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62814);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62815);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62816);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62817);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62818);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62812);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62811);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62810);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62809);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62808);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62807);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq62787){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62787));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63248 = arguments.length;
var i__5767__auto___63249 = (0);
while(true){
if((i__5767__auto___63249 < len__5766__auto___63248)){
args__5772__auto__.push((arguments[i__5767__auto___63249]));

var G__63250 = (i__5767__auto___63249 + (1));
i__5767__auto___63249 = G__63250;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__62870 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__62871 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62872 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62873 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62874 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62875 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__62876 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__62877 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62878 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__62879 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62880 = null;
var _STAR_print_newline_STAR__temp_val__62881 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62876);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62877);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62878);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62879);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62880);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62881);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62875);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62874);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62873);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62872);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62871);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62870);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq62846){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62846));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63251 = arguments.length;
var i__5767__auto___63252 = (0);
while(true){
if((i__5767__auto___63252 < len__5766__auto___63251)){
args__5772__auto__.push((arguments[i__5767__auto___63252]));

var G__63253 = (i__5767__auto___63252 + (1));
i__5767__auto___63252 = G__63253;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62910 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62911 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62912 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62913 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62914 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62915 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__62916 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62917 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62918 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62919 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62920 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62921 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62916);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62917);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62918);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62919);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62920);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62921);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62915);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62914);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62913);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62912);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62911);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62910);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq62906){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62906));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63255 = arguments.length;
var i__5767__auto___63256 = (0);
while(true){
if((i__5767__auto___63256 < len__5766__auto___63255)){
args__5772__auto__.push((arguments[i__5767__auto___63256]));

var G__63257 = (i__5767__auto___63256 + (1));
i__5767__auto___63256 = G__63257;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__62984 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__62985 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62986 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62987 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62988 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62989 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62990 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__62991 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__62992 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62993 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62994 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62995 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62996 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62997 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62991);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62992);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62993);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62994);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62995);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62996);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62997);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62990);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62989);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62988);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62987);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62986);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62985);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62984);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq62953){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62953));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63261 = arguments.length;
var i__5767__auto___63266 = (0);
while(true){
if((i__5767__auto___63266 < len__5766__auto___63261)){
args__5772__auto__.push((arguments[i__5767__auto___63266]));

var G__63267 = (i__5767__auto___63266 + (1));
i__5767__auto___63266 = G__63267;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__62998__auto__","s__62998__auto__",1534028931,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__62999__auto__","x__62999__auto__",-1552409736,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__62998__auto__","s__62998__auto__",1534028931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__62999__auto__","x__62999__auto__",-1552409736,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__62998__auto__","s__62998__auto__",1534028931,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq63000){
var G__63001 = cljs.core.first(seq63000);
var seq63000__$1 = cljs.core.next(seq63000);
var G__63002 = cljs.core.first(seq63000__$1);
var seq63000__$2 = cljs.core.next(seq63000__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63001,G__63002,seq63000__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
