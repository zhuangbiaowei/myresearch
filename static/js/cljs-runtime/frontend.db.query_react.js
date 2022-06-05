goog.provide('frontend.db.query_react');
frontend.db.query_react.resolve_input = (function frontend$db$query_react$resolve_input(input){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right-now-ms","right-now-ms",870086395),input)){
return frontend.util.time_ms();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-of-today-ms","start-of-today-ms",-794505898),input)){
return frontend.util.today_at_local_ms((0),(0),(0),(0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-of-today-ms","end-of-today-ms",-45150561),input)){
return frontend.util.today_at_local_ms((24),(0),(0),(0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"today","today",945271563),input)){
return frontend.db.utils.date__GT_int(cljs_time.core.today());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"yesterday","yesterday",288588595),input)){
return frontend.db.utils.date__GT_int(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tomorrow","tomorrow",-1509090259),input)){
return frontend.db.utils.date__GT_int(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-page","current-page",-101294180),input)){
var G__42375 = (function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(frontend.state.get_default_home());
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.date.today();
}
}
})();
if((G__42375 == null)){
return null;
} else {
return clojure.string.lower_case(G__42375);
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = (input instanceof cljs.core.Keyword);
if(and__5041__auto__){
return frontend.util.safe_re_find(/^\d+d(-before)?$/,cljs.core.name(input));
} else {
return and__5041__auto__;
}
})())){
var input__$1 = cljs.core.name(input);
var days = cljs.core.parse_long(cljs.core.re_find(/^\d+/,input__$1));
return frontend.db.utils.date__GT_int(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(days)));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = (input instanceof cljs.core.Keyword);
if(and__5041__auto__){
return frontend.util.safe_re_find(/^\d+d(-after)?$/,cljs.core.name(input));
} else {
return and__5041__auto__;
}
})())){
var input__$1 = cljs.core.name(input);
var days = cljs.core.parse_long(cljs.core.re_find(/^\d+/,input__$1));
return frontend.db.utils.date__GT_int(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(days)));
} else {
if(((typeof input === 'string') && (logseq.graph_parser.text.page_ref_QMARK_(input)))){
return clojure.string.lower_case(logseq.graph_parser.text.page_ref_un_brackets_BANG_(input));
} else {
return input;

}
}
}
}
}
}
}
}
}
}
});
frontend.db.query_react.remove_nested_children_blocks = (function frontend$db$query_react$remove_nested_children_blocks(blocks){
var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block));
return cljs.core.contains_QMARK_(ids,id);
}),blocks);
});
frontend.db.query_react.custom_query_result_transform = (function frontend$db$query_react$custom_query_result_transform(query_result,remove_blocks,q){
try{var result = frontend.db.utils.seq_flatten(query_result);
var block_QMARK_ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(result));
var result__$1 = (cljs.core.truth_(block_QMARK_)?(function (){var result__$1 = ((cljs.core.seq(remove_blocks))?(function (){var remove_blocks__$1 = cljs.core.set(remove_blocks);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (h){
return cljs.core.contains_QMARK_(remove_blocks__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(h));
}),result);
})():result);
var G__42377 = result__$1;
var G__42377__$1 = (((G__42377 == null))?null:frontend.db.query_react.remove_nested_children_blocks(G__42377));
var G__42377__$2 = (((G__42377__$1 == null))?null:frontend.db.model.sort_by_left_recursive(G__42377__$1));
if((G__42377__$2 == null)){
return null;
} else {
return frontend.db.model.with_pages(G__42377__$2);
}
})():result);
var result_transform_fn = new cljs.core.Keyword(null,"result-transform","result-transform",1904908186).cljs$core$IFn$_invoke$arity$1(q);
var repo = frontend.state.get_current_repo();
var temp__5718__auto__ = (((result_transform_fn instanceof cljs.core.Keyword))?frontend.state.sub(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo,new cljs.core.Keyword("query","result-transforms","query/result-transforms",2023939479),result_transform_fn], null)):result_transform_fn);
if(cljs.core.truth_(temp__5718__auto__)){
var result_transform = temp__5718__auto__;
var temp__5718__auto____$1 = frontend.extensions.sci.eval_string(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result_transform], 0)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var f = temp__5718__auto____$1;
try{return frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result__$1], 0));
}catch (e42378){if((e42378 instanceof Error)){
var e = e42378;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.db.query-react",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci","call-error","sci/call-error",-306866581),e,new cljs.core.Keyword(null,"line","line",212345235),87], null)),null);

return result__$1;
} else {
throw e42378;

}
}} else {
return result__$1;
}
} else {
return result__$1;
}
}catch (e42376){if((e42376 instanceof Error)){
var e = e42376;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.db.query-react",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("query","failed","query/failed",-1572631082),e,new cljs.core.Keyword(null,"line","line",212345235),92], null)),null);
} else {
throw e42376;

}
}});
frontend.db.query_react.resolve_query = (function frontend$db$query_react$resolve_query(query){
var page_ref_QMARK_ = (function (p1__42379_SHARP_){
return ((typeof p1__42379_SHARP_ === 'string') && (logseq.graph_parser.text.page_ref_QMARK_(p1__42379_SHARP_)));
});
return clojure.walk.postwalk((function (f){
if((((f instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("page",cljs.core.namespace(f))))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("block",cljs.core.name(f));
} else {
if((((f instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","ref-blocks","block/ref-blocks",-375256927),null,new cljs.core.Keyword("block","ref-pages","block/ref-pages",379552702),null], null), null),f)))){
return new cljs.core.Keyword("block","refs","block/refs",-1214495349);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.list_QMARK_(f);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f),new cljs.core.Symbol(null,"=","=",-1501502141,null));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(f));
if(and__5041__auto____$2){
return cljs.core.some(page_ref_QMARK_,cljs.core.rest(f));
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var vec__42380 = cljs.core.rest(f);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42380,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42380,(1),null);
var vec__42383 = ((page_ref_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
var page_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42383,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42383,(1),null);
var page_ref__$1 = clojure.string.lower_case(page_ref);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),(new cljs.core.List(null,sym,(new cljs.core.List(null,logseq.graph_parser.text.page_ref_un_brackets_BANG_(page_ref__$1),null,(1),null)),(2),null)),(3),null));
} else {
return f;

}
}
}
}),query);
});
frontend.db.query_react.react_query = (function frontend$db$query_react$react_query(repo,p__42386,query_opts){
var map__42387 = p__42386;
var map__42387__$1 = cljs.core.__destructure_map(map__42387);
var query_SINGLEQUOTE_ = map__42387__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var pprint = (cljs.core.truth_(frontend.config.dev_QMARK_)?(function (_){
return null;
}):frontend.debug.pprint);
(pprint.cljs$core$IFn$_invoke$arity$1 ? pprint.cljs$core$IFn$_invoke$arity$1("================") : pprint.call(null,"================"));

(pprint.cljs$core$IFn$_invoke$arity$1 ? pprint.cljs$core$IFn$_invoke$arity$1("Use the following to debug your datalog queries:") : pprint.call(null,"Use the following to debug your datalog queries:"));

(pprint.cljs$core$IFn$_invoke$arity$1 ? pprint.cljs$core$IFn$_invoke$arity$1(query_SINGLEQUOTE_) : pprint.call(null,query_SINGLEQUOTE_));

var query__$1 = frontend.db.query_react.resolve_query(query);
var resolved_inputs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.db.query_react.resolve_input,inputs);
var inputs__$1 = (function (){var G__42388 = resolved_inputs;
if(cljs.core.truth_(rules)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__42388,rules);
} else {
return G__42388;
}
})();
var repo__$1 = (function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom","custom",340151948),query_SINGLEQUOTE_], null);
(pprint.cljs$core$IFn$_invoke$arity$2 ? pprint.cljs$core$IFn$_invoke$arity$2("inputs (post-resolution):",resolved_inputs) : pprint.call(null,"inputs (post-resolution):",resolved_inputs));

(pprint.cljs$core$IFn$_invoke$arity$2 ? pprint.cljs$core$IFn$_invoke$arity$2("query-opts:",query_opts) : pprint.call(null,"query-opts:",query_opts));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(frontend.db.react.q,repo__$1,k,query_opts,query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs__$1], 0));
});

//# sourceMappingURL=frontend.db.query_react.js.map
