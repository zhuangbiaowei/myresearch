goog.provide('frontend.extensions.calc');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
frontend.extensions.calc.parse = instaparse.core.parser("<start> = assignment | expr\r\nexpr = add-sub\r\n<add-sub> = pow-term | mul-div | add | sub |  variable\r\nadd = add-sub <'+'> mul-div\r\nsub = add-sub <'-'> mul-div\r\n<mul-div> = pow-term | mul | div\r\nmul = mul-div <'*'> pow-term\r\ndiv = mul-div <'/'> pow-term\r\n<pow-term> = pow | term\r\npow = pow-term <'^'> term\r\n<trig> = sin | cos | tan | acos | asin | atan\r\nlog = <#'\\s*'> <'log('> expr <')'> <#'\\s*'>\r\nln = <#'\\s*'> <'ln('> expr <')'> <#'\\s*'>\r\nsin = <#'\\s*'> <'sin('> expr <')'> <#'\\s*'>\r\ncos = <#'\\s*'> <'cos('> expr <')'> <#'\\s*'>\r\ntan = <#'\\s*'> <'tan('> expr <')'> <#'\\s*'>\r\natan = <#'\\s*'> <'atan('> expr <')'> <#'\\s*'>\r\nacos = <#'\\s*'> <'acos('> expr <')'> <#'\\s*'>\r\nasin = <#'\\s*'> <'asin('> expr <')'> <#'\\s*'>\r\n<posterm> = log | ln | trig | percent | scientific | number | variable | <#'\\s*'> <'('> expr <')'> <#'\\s*'>\r\nnegterm = <#'\\s*'> <'-'> posterm\r\n<term> = negterm | posterm\r\nscientific = #'\\s*[0-9]+\\.?[0-9]*(e|E)-?[0-9]+()\\s*'\r\nnumber = #'\\s*\\d+(,\\d+)*(\\.\\d*)?\\s*'\r\npercent = number <'%'> <#'\\s*'>\r\nvariable = #'\\s*[a-zA-Z]+(\\_+[a-zA-Z]+)*\\s*'\r\ntoassign = #'\\s*[a-zA-Z]+(\\_+[a-zA-Z]+)*\\s*'\r\nassignment = toassign <#'\\s*'> <'='> <#'\\s*'> expr");
frontend.extensions.calc.exception_QMARK_ = (function frontend$extensions$calc$exception_QMARK_(e){
return (e instanceof Error);
});
frontend.extensions.calc.failure_QMARK_ = (function frontend$extensions$calc$failure_QMARK_(v){
return ((instaparse.core.failure_QMARK_(v)) || (frontend.extensions.calc.exception_QMARK_(v)));
});
frontend.extensions.calc.new_env = (function frontend$extensions$calc$new_env(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
frontend.extensions.calc.eval_STAR_ = (function frontend$extensions$calc$eval_STAR_(env,ast){
var G__98374 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"ln","ln",1974894440),new cljs.core.Keyword(null,"pow","pow",-1444004567),new cljs.core.Keyword(null,"scientific","scientific",316285837),new cljs.core.Keyword(null,"asin","asin",1750305199),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"mul","mul",-354626062),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"percent","percent",2031453817),new cljs.core.Keyword(null,"toassign","toassign",508353274),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"negterm","negterm",46693211),new cljs.core.Keyword(null,"acos","acos",-1286789764),new cljs.core.Keyword(null,"log","log",-1595516004)],[(function frontend$extensions$calc$eval_STAR__$_atan(a){
return module$node_modules$bignumber_DOT_js$bignumber.BigNumber(Math.atan(a));
}),(function frontend$extensions$calc$eval_STAR__$_cos(a){
return module$node_modules$bignumber_DOT_js$bignumber.BigNumber(Math.cos(a));
}),(function frontend$extensions$calc$eval_STAR__$_resolve(var$){
var var$__$1 = clojure.string.trim(var$);
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env),var$__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Can't find variable %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),var$__$1], null));
}
}),(function frontend$extensions$calc$eval_STAR__$_tan(a){
return module$node_modules$bignumber_DOT_js$bignumber.BigNumber(Math.tan(a));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(module$node_modules$bignumber_DOT_js$bignumber.BigNumber,(function (p1__98373_SHARP_){
return clojure.string.replace(p1__98373_SHARP_,",","");
})),(function frontend$extensions$calc$eval_STAR__$_sub(a,b){
return a.minus(b);
}),(function frontend$extensions$calc$eval_STAR__$_ln(a){
return module$node_modules$bignumber_DOT_js$bignumber.BigNumber(Math.log(a));
}),(function frontend$extensions$calc$eval_STAR__$_pow(a,b){
return a.exponentiatedBy(b);
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(module$node_modules$bignumber_DOT_js$bignumber.BigNumber,clojure.edn.read_string),(function frontend$extensions$calc$eval_STAR__$_asin(a){
return module$node_modules$bignumber_DOT_js$bignumber.BigNumber(Math.asin(a));
}),(function frontend$extensions$calc$eval_STAR__$_div(a,b){
return a.dividedBy(b);
}),(function frontend$extensions$calc$eval_STAR__$_mul(a,b){
return a.multipliedBy(b);
}),cljs.core.identity,(function frontend$extensions$calc$eval_STAR__$_sin(a){
return module$node_modules$bignumber_DOT_js$bignumber.BigNumber(Math.sin(a));
}),(function frontend$extensions$calc$eval_STAR__$_assign_BANG_(var$,val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc,var$,val);

return val;
}),(function frontend$extensions$calc$eval_STAR__$_percent(a){
return a.dividedBy(100.0);
}),clojure.string.trim,(function frontend$extensions$calc$eval_STAR__$_add(a,b){
return a.plus(b);
}),(function frontend$extensions$calc$eval_STAR__$_neg(a){
return a.negated();
}),(function frontend$extensions$calc$eval_STAR__$_acos(a){
return module$node_modules$bignumber_DOT_js$bignumber.BigNumber(Math.acos(a));
}),(function frontend$extensions$calc$eval_STAR__$_log(a){
return module$node_modules$bignumber_DOT_js$bignumber.BigNumber(Math.log10(a));
})]);
var G__98375 = ast;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__98374,G__98375) : instaparse.core.transform.call(null,G__98374,G__98375));
});
frontend.extensions.calc.eval = (function frontend$extensions$calc$eval(var_args){
var G__98377 = arguments.length;
switch (G__98377) {
case 1:
return frontend.extensions.calc.eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.calc.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.calc.eval.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return frontend.extensions.calc.eval.cljs$core$IFn$_invoke$arity$2(frontend.extensions.calc.new_env(),ast);
}));

(frontend.extensions.calc.eval.cljs$core$IFn$_invoke$arity$2 = (function (env,ast){
try{if(frontend.extensions.calc.failure_QMARK_(ast)){
return ast;
} else {
return cljs.core.first(frontend.extensions.calc.eval_STAR_(env,ast));
}
}catch (e98378){if((e98378 instanceof Error)){
var e = e98378;
return e;
} else {
throw e98378;

}
}}));

(frontend.extensions.calc.eval.cljs$lang$maxFixedArity = 2);

frontend.extensions.calc.eval_lines = (function frontend$extensions$calc$eval_lines(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var env = frontend.extensions.calc.new_env();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
if(clojure.string.blank_QMARK_(line)){
return null;
} else {
return frontend.extensions.calc.eval.cljs$core$IFn$_invoke$arity$2(env,(frontend.extensions.calc.parse.cljs$core$IFn$_invoke$arity$1 ? frontend.extensions.calc.parse.cljs$core$IFn$_invoke$arity$1(line) : frontend.extensions.calc.parse.call(null,line)));
}
}),clojure.string.split_lines(s));
});
frontend.extensions.calc.results = rum.core.lazy_build(rum.core.build_defc,(function (calc_atom){
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = rum.core.react(calc_atom);
if(cljs.core.truth_(temp__5720__auto__)){
var output_lines = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__code-calc.pr-2","div.extensions__code-calc.pr-2",680901470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return e.stopPropagation();
})], null),(function (){var iter__5520__auto__ = (function frontend$extensions$calc$iter__98389(s__98390){
return (new cljs.core.LazySeq(null,(function (){
var s__98390__$1 = s__98390;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__98390__$1);
if(temp__5720__auto____$1){
var s__98390__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__98390__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__98390__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__98392 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__98391 = (0);
while(true){
if((i__98391 < size__5519__auto__)){
var vec__98393 = cljs.core._nth(c__5518__auto__,i__98391);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98393,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98393,(1),null);
cljs.core.chunk_append(b__98392,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__code-calc-output-line.CodeMirror-line","div.extensions__code-calc-output-line.CodeMirror-line",-293396137),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(((line == null))?"":((frontend.extensions.calc.failure_QMARK_(line))?"?":cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)
))], null)], null));

var G__98400 = (i__98391 + (1));
i__98391 = G__98400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__98392),frontend$extensions$calc$iter__98389(cljs.core.chunk_rest(s__98390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__98392),null);
}
} else {
var vec__98396 = cljs.core.first(s__98390__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98396,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98396,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__code-calc-output-line.CodeMirror-line","div.extensions__code-calc-output-line.CodeMirror-line",-293396137),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(((line == null))?"":((frontend.extensions.calc.failure_QMARK_(line))?"?":cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)
))], null)], null),frontend$extensions$calc$iter__98389(cljs.core.rest(s__98390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,output_lines));
})()], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.calc/results");

//# sourceMappingURL=frontend.extensions.calc.js.map
