goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5772__auto__ = [];
var len__5766__auto___81235 = arguments.length;
var i__5767__auto___81236 = (0);
while(true){
if((i__5767__auto___81236 < len__5766__auto___81235)){
args__5772__auto__.push((arguments[i__5767__auto___81236]));

var G__81237 = (i__5767__auto___81236 + (1));
i__5767__auto___81236 = G__81237;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__81209){
var map__81222 = p__81209;
var map__81222__$1 = cljs.core.__destructure_map(map__81222);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81222__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5718__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5718__auto__){
var vec__81225 = temp__5718__auto__;
var seq__81226 = cljs.core.seq(vec__81225);
var first__81227 = cljs.core.first(seq__81226);
var seq__81226__$1 = cljs.core.next(seq__81226);
var first = first__81227;
var rest = seq__81226__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq81169){
var G__81170 = cljs.core.first(seq81169);
var seq81169__$1 = cljs.core.next(seq81169);
var G__81171 = cljs.core.first(seq81169__$1);
var seq81169__$2 = cljs.core.next(seq81169__$1);
var G__81172 = cljs.core.first(seq81169__$2);
var seq81169__$3 = cljs.core.next(seq81169__$2);
var G__81173 = cljs.core.first(seq81169__$3);
var seq81169__$4 = cljs.core.next(seq81169__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81170,G__81171,G__81172,G__81173,seq81169__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5043__auto__ = (function (){var G__81232 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__81232) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__81232));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
