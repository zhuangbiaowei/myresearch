goog.provide('tongue.number');
/**
 * Helper to build number format functions
 * Accepts options map:
 * 
 *     { :decimal "."  ;; integer/fractional mark
 *       :group   "" } ;; thousands grouping mark
 * 
 * Returns function `(number => String)`
 */
tongue.number.formatter = (function tongue$number$formatter(opts){

var map__58184 = opts;
var map__58184__$1 = cljs.core.__destructure_map(map__58184);
var decimal = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58184__$1,new cljs.core.Keyword(null,"decimal","decimal",-170212044),".");
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58184__$1,new cljs.core.Keyword(null,"group","group",582596132),"");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",decimal)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",group)))){
return cljs.core.str;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",group)){
return (function (p1__58183_SHARP_){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58183_SHARP_),".",decimal);
});
} else {
return (function (x){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
var vec__58189 = cljs.core.re_matches(/(-?)(\d+)\.?(\d*)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58189,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58189,(1),null);
var integer_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58189,(2),null);
var fraction_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58189,(3),null);
var len = cljs.core.count(integer_part);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sign),(function (){var idx = cljs.core.rem(len,(3));
var res = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(integer_part,(0),cljs.core.rem(len,(3)));
while(true){
if((idx < len)){
var G__58200 = (idx + (3));
var G__58201 = [res,cljs.core.str.cljs$core$IFn$_invoke$arity$1((((idx > (0)))?group:null)),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(integer_part,idx,(idx + (3)))].join('');
idx = G__58200;
res = G__58201;
continue;
} else {
return res;
}
break;
}
})(),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",fraction_part))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(decimal),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fraction_part)].join(''):null)].join('');
});

}
}
});

//# sourceMappingURL=tongue.number.js.map
