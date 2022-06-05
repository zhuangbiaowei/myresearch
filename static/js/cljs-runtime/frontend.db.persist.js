goog.provide('frontend.db.persist');
frontend.db.persist.get_all_graphs = (function frontend$db$persist$get_all_graphs(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___36093__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getGraphs"], 0)),(function (result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(result),(function (result__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(result__$1))?result__$1:frontend.idb.get_nfs_dbs()),(function (result__$2){
return promesa.protocols._promise(result__$2);
}));
}));
}));
}));
} else {
return frontend.idb.get_nfs_dbs();
}
});
frontend.db.persist.get_serialized_graph = (function frontend$db$persist$get_serialized_graph(graph_name){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___36093__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getSerializedGraph",graph_name], 0)),(function (result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(result)?result:(function (){var graph_name__$1 = [frontend.config.idb_db_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_name)].join('');
return frontend.idb.get_item(graph_name__$1);
})()),(function (result__$1){
return promesa.protocols._promise(result__$1);
}));
}));
}));
} else {
return frontend.idb.get_item(graph_name);
}
});
frontend.db.persist.save_graph_BANG_ = (function frontend$db$persist$save_graph_BANG_(key,value){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["saveGraph",key,value], 0));

return frontend.idb.remove_item_BANG_(key);
} else {
return frontend.idb.set_batch_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null)], null));
}
});
frontend.db.persist.delete_graph_BANG_ = (function frontend$db$persist$delete_graph_BANG_(graph){
var key = frontend.db.conn.datascript_db(graph);
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["deleteGraph",key], 0));

return frontend.idb.remove_item_BANG_(key);
} else {
return frontend.idb.remove_item_BANG_(key);
}
});

//# sourceMappingURL=frontend.db.persist.js.map
