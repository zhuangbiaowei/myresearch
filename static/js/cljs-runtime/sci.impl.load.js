goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__60541){
var vec__60542 = p__60541;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60542,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = (k instanceof cljs.core.Symbol);
if(and__5041__auto__){
var and__5041__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__5041__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__60559){
var map__60560 = p__60559;
var map__60560__$1 = cljs.core.__destructure_map(map__60560);
var _parsed_libspec = map__60560__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60560__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60560__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60560__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60560__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60560__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60560__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5043__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5718__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__60566 = temp__5718__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60566,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5720__auto___60681 = (function (){var G__60569 = the_loaded_ns;
var G__60569__$1 = (((G__60569 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__60569));
var G__60569__$2 = (((G__60569__$1 == null))?null:cljs.core.meta(G__60569__$1));
if((G__60569__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__60569__$2);
}
})();
if(cljs.core.truth_(temp__5720__auto___60681)){
var on_loaded_60682 = temp__5720__auto___60681;
var G__60570_60683 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_60682.cljs$core$IFn$_invoke$arity$1 ? on_loaded_60682.cljs$core$IFn$_invoke$arity$1(G__60570_60683) : on_loaded_60682.call(null,G__60570_60683));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var temp__5718__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var as_alias = temp__5718__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__60574 = opts;
var map__60574__$1 = cljs.core.__destructure_map(map__60574);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60574__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60574__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__5043__auto__ = reload;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = reload_all;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5718__auto___60684__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5718__auto___60684__$1)){
var the_loaded_ns_60685 = temp__5718__auto___60684__$1;
var loading_60686 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5041__auto__ = loading_60686;
if(cljs.core.truth_(and__5041__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib)))) && (cljs.core.nat_int_QMARK_(loading_60686.indexOf(lib))));
} else {
return and__5041__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_60686,lib);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_60685,lib,opts));
}
} else {
var temp__5718__auto___60687__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5718__auto___60687__$2)){
var load_fn_60688 = temp__5718__auto___60687__$2;
var temp__5718__auto___60689__$3 = (function (){var G__60575 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5043__auto__ = reload;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_60688.cljs$core$IFn$_invoke$arity$1 ? load_fn_60688.cljs$core$IFn$_invoke$arity$1(G__60575) : load_fn_60688.call(null,G__60575));
})();
if(cljs.core.truth_(temp__5718__auto___60689__$3)){
var map__60576_60690 = temp__5718__auto___60689__$3;
var map__60576_60691__$1 = cljs.core.__destructure_map(map__60576_60690);
var file_60692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60576_60691__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_60693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60576_60691__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var ctx_60694__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file_60692]));

try{var fexpr__60579_60695 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__60579_60695.cljs$core$IFn$_invoke$arity$2 ? fexpr__60579_60695.cljs$core$IFn$_invoke$arity$2(ctx_60694__$1,source_60693) : fexpr__60579_60695.call(null,ctx_60694__$1,source_60693));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e60578){if((e60578 instanceof Error)){
var e_60697 = e60578;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_60697;
} else {
throw e60578;

}
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__5043__auto___60703 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5720__auto__)){
var the_loaded_ns = temp__5720__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5043__auto___60703)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib);

return null;
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60706 = arguments.length;
var i__5767__auto___60707 = (0);
while(true){
if((i__5767__auto___60707 < len__5766__auto___60706)){
args__5772__auto__.push((arguments[i__5767__auto___60707]));

var G__60708 = (i__5767__auto___60707 + (1));
i__5767__auto___60707 = G__60708;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5041__auto__ = prefix;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5041__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq60582){
var G__60583 = cljs.core.first(seq60582);
var seq60582__$1 = cljs.core.next(seq60582);
var G__60584 = cljs.core.first(seq60582__$1);
var seq60582__$2 = cljs.core.next(seq60582__$1);
var G__60585 = cljs.core.first(seq60582__$2);
var seq60582__$3 = cljs.core.next(seq60582__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60583,G__60584,G__60585,seq60582__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_60715 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_60716 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_60715,flags));
if(unsupported_60716){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_60716)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__60606 = cljs.core.seq(args_STAR___$1);
var chunk__60607 = null;
var count__60608 = (0);
var i__60609 = (0);
while(true){
if((i__60609 < count__60608)){
var arg = chunk__60607.cljs$core$IIndexed$_nth$arity$2(null,i__60609);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__60624_60717 = arg;
var seq__60625_60718 = cljs.core.seq(vec__60624_60717);
var first__60626_60719 = cljs.core.first(seq__60625_60718);
var seq__60625_60720__$1 = cljs.core.next(seq__60625_60718);
var prefix_60721 = first__60626_60719;
var args_STAR__60722__$2 = seq__60625_60720__$1;
if((prefix_60721 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__60627_60723 = cljs.core.seq(args_STAR__60722__$2);
var chunk__60628_60724 = null;
var count__60629_60725 = (0);
var i__60630_60726 = (0);
while(true){
if((i__60630_60726 < count__60629_60725)){
var arg_60727__$1 = chunk__60628_60724.cljs$core$IIndexed$_nth$arity$2(null,i__60630_60726);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_60721,sci.impl.load.prependss(arg_60727__$1,opts));


var G__60728 = seq__60627_60723;
var G__60729 = chunk__60628_60724;
var G__60730 = count__60629_60725;
var G__60731 = (i__60630_60726 + (1));
seq__60627_60723 = G__60728;
chunk__60628_60724 = G__60729;
count__60629_60725 = G__60730;
i__60630_60726 = G__60731;
continue;
} else {
var temp__5720__auto___60732 = cljs.core.seq(seq__60627_60723);
if(temp__5720__auto___60732){
var seq__60627_60733__$1 = temp__5720__auto___60732;
if(cljs.core.chunked_seq_QMARK_(seq__60627_60733__$1)){
var c__5565__auto___60737 = cljs.core.chunk_first(seq__60627_60733__$1);
var G__60738 = cljs.core.chunk_rest(seq__60627_60733__$1);
var G__60739 = c__5565__auto___60737;
var G__60740 = cljs.core.count(c__5565__auto___60737);
var G__60741 = (0);
seq__60627_60723 = G__60738;
chunk__60628_60724 = G__60739;
count__60629_60725 = G__60740;
i__60630_60726 = G__60741;
continue;
} else {
var arg_60742__$1 = cljs.core.first(seq__60627_60733__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_60721,sci.impl.load.prependss(arg_60742__$1,opts));


var G__60743 = cljs.core.next(seq__60627_60733__$1);
var G__60744 = null;
var G__60745 = (0);
var G__60746 = (0);
seq__60627_60723 = G__60743;
chunk__60628_60724 = G__60744;
count__60629_60725 = G__60745;
i__60630_60726 = G__60746;
continue;
}
} else {
}
}
break;
}
}


var G__60747 = seq__60606;
var G__60748 = chunk__60607;
var G__60749 = count__60608;
var G__60750 = (i__60609 + (1));
seq__60606 = G__60747;
chunk__60607 = G__60748;
count__60608 = G__60749;
i__60609 = G__60750;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60606);
if(temp__5720__auto__){
var seq__60606__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60606__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__60606__$1);
var G__60752 = cljs.core.chunk_rest(seq__60606__$1);
var G__60753 = c__5565__auto__;
var G__60754 = cljs.core.count(c__5565__auto__);
var G__60755 = (0);
seq__60606 = G__60752;
chunk__60607 = G__60753;
count__60608 = G__60754;
i__60609 = G__60755;
continue;
} else {
var arg = cljs.core.first(seq__60606__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__60632_60759 = arg;
var seq__60633_60760 = cljs.core.seq(vec__60632_60759);
var first__60634_60761 = cljs.core.first(seq__60633_60760);
var seq__60633_60762__$1 = cljs.core.next(seq__60633_60760);
var prefix_60763 = first__60634_60761;
var args_STAR__60764__$2 = seq__60633_60762__$1;
if((prefix_60763 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__60635_60766 = cljs.core.seq(args_STAR__60764__$2);
var chunk__60636_60767 = null;
var count__60637_60768 = (0);
var i__60638_60769 = (0);
while(true){
if((i__60638_60769 < count__60637_60768)){
var arg_60770__$1 = chunk__60636_60767.cljs$core$IIndexed$_nth$arity$2(null,i__60638_60769);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_60763,sci.impl.load.prependss(arg_60770__$1,opts));


var G__60771 = seq__60635_60766;
var G__60772 = chunk__60636_60767;
var G__60773 = count__60637_60768;
var G__60774 = (i__60638_60769 + (1));
seq__60635_60766 = G__60771;
chunk__60636_60767 = G__60772;
count__60637_60768 = G__60773;
i__60638_60769 = G__60774;
continue;
} else {
var temp__5720__auto___60777__$1 = cljs.core.seq(seq__60635_60766);
if(temp__5720__auto___60777__$1){
var seq__60635_60778__$1 = temp__5720__auto___60777__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60635_60778__$1)){
var c__5565__auto___60779 = cljs.core.chunk_first(seq__60635_60778__$1);
var G__60780 = cljs.core.chunk_rest(seq__60635_60778__$1);
var G__60781 = c__5565__auto___60779;
var G__60782 = cljs.core.count(c__5565__auto___60779);
var G__60783 = (0);
seq__60635_60766 = G__60780;
chunk__60636_60767 = G__60781;
count__60637_60768 = G__60782;
i__60638_60769 = G__60783;
continue;
} else {
var arg_60784__$1 = cljs.core.first(seq__60635_60778__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_60763,sci.impl.load.prependss(arg_60784__$1,opts));


var G__60785 = cljs.core.next(seq__60635_60778__$1);
var G__60786 = null;
var G__60787 = (0);
var G__60788 = (0);
seq__60635_60766 = G__60785;
chunk__60636_60767 = G__60786;
count__60637_60768 = G__60787;
i__60638_60769 = G__60788;
continue;
}
} else {
}
}
break;
}
}


var G__60789 = cljs.core.next(seq__60606__$1);
var G__60790 = null;
var G__60791 = (0);
var G__60792 = (0);
seq__60606 = G__60789;
chunk__60607 = G__60790;
count__60608 = G__60791;
i__60609 = G__60792;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60793 = arguments.length;
var i__5767__auto___60794 = (0);
while(true){
if((i__5767__auto___60794 < len__5766__auto___60793)){
args__5772__auto__.push((arguments[i__5767__auto___60794]));

var G__60797 = (i__5767__auto___60794 + (1));
i__5767__auto___60794 = G__60797;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq60641){
var G__60642 = cljs.core.first(seq60641);
var seq60641__$1 = cljs.core.next(seq60641);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60642,seq60641__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60800 = arguments.length;
var i__5767__auto___60801 = (0);
while(true){
if((i__5767__auto___60801 < len__5766__auto___60800)){
args__5772__auto__.push((arguments[i__5767__auto___60801]));

var G__60802 = (i__5767__auto___60801 + (1));
i__5767__auto___60801 = G__60802;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq60643){
var G__60644 = cljs.core.first(seq60643);
var seq60643__$1 = cljs.core.next(seq60643);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60644,seq60643__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__60646 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60646,(1),null);
var G__60649_60804 = k;
var G__60649_60805__$1 = (((G__60649_60804 instanceof cljs.core.Keyword))?G__60649_60804.fqn:null);
switch (G__60649_60805__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__60649_60804,G__60649_60805__$1,vec__60646,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__60649_60804,G__60649_60805__$1,vec__60646,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__60649_60804,G__60649_60805__$1,vec__60646,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__60649_60804,G__60649_60805__$1,vec__60646,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__60649_60804,G__60649_60805__$1,vec__60646,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__60649_60804,G__60649_60805__$1,vec__60646,k,v,ns_sym){
return (function (acc,p__60650){
var vec__60651 = p__60650;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60651,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60651,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__60649_60804,G__60649_60805__$1,vec__60646,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__60649_60804,G__60649_60805__$1,vec__60646,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60649_60805__$1)].join('')));

}

var G__60813 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__60813;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5041__auto__ = to_do;
if(cljs.core.truth_(and__5041__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5041__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5043__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60821 = arguments.length;
var i__5767__auto___60823 = (0);
while(true){
if((i__5767__auto___60823 < len__5766__auto___60821)){
args__5772__auto__.push((arguments[i__5767__auto___60823]));

var G__60824 = (i__5767__auto___60823 + (1));
i__5767__auto___60823 = G__60824;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq60661){
var G__60662 = cljs.core.first(seq60661);
var seq60661__$1 = cljs.core.next(seq60661);
var G__60663 = cljs.core.first(seq60661__$1);
var seq60661__$2 = cljs.core.next(seq60661__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60662,G__60663,seq60661__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
