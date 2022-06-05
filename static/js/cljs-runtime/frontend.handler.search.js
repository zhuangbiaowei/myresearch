goog.provide('frontend.handler.search');
frontend.handler.search.add_search_to_recent_BANG_ = (function frontend$handler$search$add_search_to_recent_BANG_(repo,q){
if(clojure.string.blank_QMARK_(q)){
return null;
} else {
var items = (function (){var or__5043__auto__ = (frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("recent","search","recent/search",360685449)) : frontend.db.get_key_value.call(null,repo,new cljs.core.Keyword("recent","search","recent/search",360685449)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})();
var new_items = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(q,items)));
return (frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword("recent","search","recent/search",360685449),new_items) : frontend.db.set_key_value.call(null,repo,new cljs.core.Keyword("recent","search","recent/search",360685449),new_items));
}
});
/**
 * Convert a block to the display contents for searching
 */
frontend.handler.search.sanity_search_content = (function frontend$handler$search$sanity_search_content(format,content){
return frontend.util.property.remove_built_in_properties(format,frontend.util.drawer.remove_logbook(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3(content,format,frontend.config.get_block_pattern(format))));
});
frontend.handler.search.search = (function frontend$handler$search$search(var_args){
var G__43666 = arguments.length;
switch (G__43666) {
case 2:
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.search.search.cljs$core$IFn$_invoke$arity$2 = (function (repo,q){
return frontend.handler.search.search.cljs$core$IFn$_invoke$arity$3(repo,q,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(20)], null));
}));

(frontend.handler.search.search.cljs$core$IFn$_invoke$arity$3 = (function (repo,q,p__43667){
var map__43668 = p__43667;
var map__43668__$1 = cljs.core.__destructure_map(map__43668);
var opts = map__43668__$1;
var page_db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43668__$1,new cljs.core.Keyword(null,"page-db-id","page-db-id",-761574235),null);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43668__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var more_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43668__$1,new cljs.core.Keyword(null,"more?","more?",519437444));
if(clojure.string.blank_QMARK_(q)){
return null;
} else {
var page_db_id__$1 = ((typeof page_db_id === 'string')?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__43669 = repo;
var G__43670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_db_id) : frontend.util.page_name_sanity_lc.call(null,page_db_id))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__43669,G__43670) : frontend.db.entity.call(null,G__43669,G__43670));
})()):page_db_id);
var opts__$1 = (cljs.core.truth_(page_db_id__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_db_id__$1)):opts);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.block_search(repo,q,opts__$1),(function (blocks){
return promesa.protocols._promise((function (){var result = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks,new cljs.core.Keyword(null,"has-more?","has-more?",-1528440566),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.count(blocks))], null),(cljs.core.truth_(page_db_id__$1)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages","pages",-285406513),frontend.search.page_search.cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"files","files",-472457450),frontend.search.file_search.cljs$core$IFn$_invoke$arity$1(q)], null))], 0));
var search_key = (cljs.core.truth_(more_QMARK_)?new cljs.core.Keyword("search","more-result","search/more-result",1439170242):new cljs.core.Keyword("search","result","search/result",443756363));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,search_key,result);
})());
}));
}));
}
}));

(frontend.handler.search.search.cljs$lang$maxFixedArity = 3);

frontend.handler.search.clear_search_BANG_ = (function frontend$handler$search$clear_search_BANG_(var_args){
var G__43672 = arguments.length;
switch (G__43672) {
case 0:
return frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (clear_search_mode_QMARK_){
var m_43691 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("search","result","search/result",443756363),null,new cljs.core.Keyword("search","q","search/q",-553992135),""], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.state,cljs.core.merge,m_43691);

if(cljs.core.truth_((function (){var and__5041__auto__ = clear_search_mode_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_search_mode(),new cljs.core.Keyword(null,"graph","graph",1558099509));
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_search_mode_BANG_(new cljs.core.Keyword(null,"global","global",93595047));
} else {
return null;
}
}));

(frontend.handler.search.clear_search_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.search.rebuild_indices_BANG_ = (function frontend$handler$search$rebuild_indices_BANG_(var_args){
var G__43674 = arguments.length;
switch (G__43674) {
case 0:
return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1(false);
}));

(frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (notice_QMARK_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Starting to rebuild search indices!"], 0));

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0(),(function (_){
return promesa.protocols._promise((cljs.core.truth_(notice_QMARK_)?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Search indices rebuilt successfully!",new cljs.core.Keyword(null,"success","success",1890645906)):null));
}));
}));
}));

(frontend.handler.search.rebuild_indices_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.search.rebuild_indices_when_stale_BANG_ = (function frontend$handler$search$rebuild_indices_when_stale_BANG_(var_args){
var G__43678 = arguments.length;
switch (G__43678) {
case 0:
return frontend.handler.search.rebuild_indices_when_stale_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.search.rebuild_indices_when_stale_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.search.rebuild_indices_when_stale_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.search.rebuild_indices_when_stale_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.handler.search.rebuild_indices_when_stale_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.cache_stale_QMARK_(repo),(function (cache_stale_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(cache_stale_QMARK_)?(function (){
console.log("cache stale: ",repo);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1(repo),(function (_){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Stale search cache detected. Search indices rebuilt successfully!",new cljs.core.Keyword(null,"success","success",1890645906)));
}));
}));
})()
:null));
}));
}));
}));

(frontend.handler.search.rebuild_indices_when_stale_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=frontend.handler.search.js.map
