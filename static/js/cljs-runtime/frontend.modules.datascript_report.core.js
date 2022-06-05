goog.provide('frontend.modules.datascript_report.core');
frontend.modules.datascript_report.core.keys_of_deleted_entity = (1);
frontend.modules.datascript_report.core.safe_pull = (function frontend$modules$datascript_report$core$safe_pull(db,selector,eid){
try{return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(db,selector,eid) : datascript.core.pull.call(null,db,selector,eid));
}catch (e81950){if((e81950 instanceof Error)){
var e = e81950;
console.error(e);

return null;
} else {
throw e81950;

}
}});
frontend.modules.datascript_report.core.get_entity_from_db_after_or_before = (function frontend$modules$datascript_report$core$get_entity_from_db_after_or_before(db_before,db_after,db_id){
var r = frontend.modules.datascript_report.core.safe_pull(db_after,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),db_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.modules.datascript_report.core.keys_of_deleted_entity,cljs.core.count(r))){
return frontend.modules.datascript_report.core.safe_pull(db_before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),db_id);
} else {
return r;
}
});
frontend.modules.datascript_report.core.get_blocks_and_pages = (function frontend$modules$datascript_report$core$get_blocks_and_pages(p__81952){
var map__81953 = p__81952;
var map__81953__$1 = cljs.core.__destructure_map(map__81953);
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81953__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81953__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81953__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81953__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var updated_db_ids = cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tx_data));
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
var block_entity = frontend.modules.datascript_report.core.get_entity_from_db_after_or_before(db_before,db_after,x);
var page_entity = (function (){var temp__5720__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_entity));
if(cljs.core.truth_(temp__5720__auto__)){
var page_id = temp__5720__auto__;
return frontend.modules.datascript_report.core.get_entity_from_db_after_or_before(db_before,db_after,page_id);
} else {
return null;
}
})();
var G__81957 = acc;
var G__81957__$1 = (((!((block_entity == null))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__81957,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.conj,block_entity):G__81957);
if((!((page_entity == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__81957__$1,new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.conj,page_entity);
} else {
return G__81957__$1;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.PersistentHashSet.EMPTY], null),updated_db_ids);
var tx_meta_pages = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81951_SHARP_){
return frontend.modules.datascript_report.core.get_entity_from_db_after_or_before(db_before,db_after,p1__81951_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from-page","from-page",75165656).cljs$core$IFn$_invoke$arity$1(tx_meta),new cljs.core.Keyword(null,"target-page","target-page",-920102649).cljs$core$IFn$_invoke$arity$1(tx_meta)], null))));
if(cljs.core.seq(tx_meta_pages)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"pages","pages",-285406513),clojure.set.union,tx_meta_pages);
} else {
return result;
}
});
frontend.modules.datascript_report.core.get_blocks = (function frontend$modules$datascript_report$core$get_blocks(p__81958){
var map__81959 = p__81958;
var map__81959__$1 = cljs.core.__destructure_map(map__81959);
var _tx_report = map__81959__$1;
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81959__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81959__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81959__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var updated_db_ids = cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tx_data));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
var block_entity = frontend.modules.datascript_report.core.get_entity_from_db_after_or_before(db_before,db_after,x);
var G__81963 = acc;
if((!((block_entity == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__81963,block_entity);
} else {
return G__81963;
}
}),cljs.core.PersistentVector.EMPTY,updated_db_ids);
});

//# sourceMappingURL=frontend.modules.datascript_report.core.js.map
