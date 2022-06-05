goog.provide('frontend.template');
frontend.template.variable_rules = (function frontend$template$variable_rules(){
return new cljs.core.PersistentArrayMap(null, 5, ["today",frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.date.today()], 0)),"yesterday",frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.date.yesterday()], 0)),"tomorrow",frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.date.tomorrow()], 0)),"time",frontend.date.get_current_time(),"current page",frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.date.today();
}
})()], 0))], null);
});
frontend.template.resolve_dynamic_template_BANG_ = (function frontend$template$resolve_dynamic_template_BANG_(content){
return clojure.string.replace(content,/<%([^%].*?)%>/,(function (p__72554){
var vec__72555 = p__72554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72555,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72555,(1),null);
var match__$1 = clojure.string.trim(match);
if(clojure.string.blank_QMARK_(match__$1)){
return "";
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.template.variable_rules(),clojure.string.lower_case(match__$1)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.template.variable_rules(),clojure.string.lower_case(match__$1));
} else {
var temp__5718__auto__ = frontend.date.nld_parse(match__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var nld = temp__5718__auto__;
var date = cljs_time.coerce.to_local_date_time(nld);
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(date)], 0));
} else {
return match__$1;
}

}
}
}));
});

//# sourceMappingURL=frontend.template.js.map
