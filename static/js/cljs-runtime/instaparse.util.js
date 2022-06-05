goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__5772__auto__ = [];
var len__5766__auto___96400 = arguments.length;
var i__5767__auto___96401 = (0);
while(true){
if((i__5767__auto___96401 < len__5766__auto___96400)){
args__5772__auto__.push((arguments[i__5767__auto___96401]));

var G__96402 = (i__5767__auto___96401 + (1));
i__5767__auto___96401 = G__96402;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq96395){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq96395));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__5772__auto__ = [];
var len__5766__auto___96403 = arguments.length;
var i__5767__auto___96404 = (0);
while(true){
if((i__5767__auto___96404 < len__5766__auto___96403)){
args__5772__auto__.push((arguments[i__5767__auto___96404]));

var G__96405 = (i__5767__auto___96404 + (1));
i__5767__auto___96404 = G__96405;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq96396){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq96396));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__96397 = "";
var G__96397__$1 = (cljs.core.truth_(re.ignoreCase)?[G__96397,"i"].join(''):G__96397);
var G__96397__$2 = (cljs.core.truth_(re.multiline)?[G__96397__$1,"m"].join(''):G__96397__$1);
if(cljs.core.truth_(re.unicode)){
return [G__96397__$2,"u"].join('');
} else {
return G__96397__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
