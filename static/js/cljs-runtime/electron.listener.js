goog.provide('electron.listener');
electron.listener.persist_dbs_BANG_ = (function electron$listener$persist_dbs_BANG_(){
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.ui.loading(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","persist","graph/persist",846795802)], 0))),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["persistent-dbs-saved"], 0));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["persistent-dbs-error"], 0));
})], null));
});
electron.listener.listen_persistent_dbs_BANG_ = (function electron$listener$listen_persistent_dbs_BANG_(){
return window.apis.on("persistent-dbs",(function (_req){
return electron.listener.persist_dbs_BANG_();
}));
});
electron.listener.listen_to_electron_BANG_ = (function electron$listener$listen_to_electron_BANG_(){
window.apis.on("file-watcher",(function (data){
var map__54097 = cljs_bean.core.__GT_clj(data);
var map__54097__$1 = cljs.core.__destructure_map(map__54097);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54097__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54097__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
frontend.fs.watcher_handler.handle_changed_BANG_(type,payload);

return frontend.fs.sync.file_watch_handler(type,payload);
}));

window.apis.on("notification",(function (data){
var map__54098 = cljs_bean.core.__GT_clj(data);
var map__54098__$1 = cljs.core.__destructure_map(map__54098);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54098__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54098__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var comp = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(payload)], null);
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(comp,type__$1,false);
}));

window.apis.on("graphUnlinked",(function (data){
var repo = cljs_bean.core.__GT_clj(data);
return frontend.handler.repo.remove_repo_BANG_(repo);
}));

window.apis.on("setGitUsernameAndEmail",(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-git-username-and-email","modal/set-git-username-and-email",-1189789991)], null));
}));

window.apis.on("getCurrentGraph",(function (){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var graph = temp__5720__auto__;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setCurrentGraph",graph], 0));
} else {
return null;
}
}));

window.apis.on("redirect",(function (data){
var map__54101 = cljs_bean.core.__GT_clj(data);
var map__54101__$1 = cljs.core.__destructure_map(map__54101);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54101__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var payload__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(payload,new cljs.core.Keyword(null,"to","to",192099007),cljs.core.keyword);
return frontend.handler.route.redirect_BANG_(payload__$1);
}));

window.apis.on("redirectWhenExists",(function (data){
var map__54105 = cljs_bean.core.__GT_clj(data);
var map__54105__$1 = cljs.core.__destructure_map(map__54105);
var page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54105__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54105__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54105__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(page_name)){
var db_page_name = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page_name);
return frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$1(db_page_name);
} else {
if(cljs.core.truth_(block_id)){
if(cljs.core.truth_(frontend.db.model.get_block_by_uuid(block_id))){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(["Open link failed. Block-id `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id),"` doesn't exist in the graph."].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);
}
} else {
if(cljs.core.truth_(file)){
var temp__5718__auto__ = frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2(file,false);
if(cljs.core.truth_(temp__5718__auto__)){
var db_page_name = temp__5718__auto__;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(db_page_name);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(["Open link failed. File `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"` doesn't exist in the graph."].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);
}
} else {
return null;
}
}
}
}));

window.apis.on("dbsync",(function (data){
var map__54108 = cljs_bean.core.__GT_clj(data);
var map__54108__$1 = cljs.core.__destructure_map(map__54108);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tx_data__$1 = (function (){var G__54109 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(tx_data);
return (frontend.db.string__GT_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.string__GT_db.cljs$core$IFn$_invoke$arity$1(G__54109) : frontend.db.string__GT_db.call(null,G__54109));
})();
var temp__5720__auto___54121 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$2(graph,false) : frontend.db.get_db.call(null,graph,false));
if(cljs.core.truth_(temp__5720__auto___54121)){
var conn_54122 = temp__5720__auto___54121;
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn_54122,tx_data__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dbsync?","dbsync?",931937939),true], null));
} else {
}

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

window.apis.on("persistGraph",(function (data){
var repo = cljs_bean.core.__GT_clj(data);
var before_f = (function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.ui.loading(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","persist","graph/persist",846795802)], 0))),new cljs.core.Keyword(null,"warning","warning",-1685650671));
});
var after_f = (function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["broadcastPersistGraphDone"], 0));
});
var error_f = (function (){
after_f();

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","persist-error","graph/persist-error",341856949)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
});
var handlers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"before","before",-1633692388),before_f,new cljs.core.Keyword(null,"on-success","on-success",1786904109),after_f,new cljs.core.Keyword(null,"on-error","on-error",1728533530),error_f], null);
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(repo,handlers);
}));

window.apis.on("loginCallback",(function (code){
return frontend.handler.user.login_callback(code);
}));

return window.apis.on("openNewWindowOfGraph",(function (repo){
return frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$2(null,repo);
}));
});
electron.listener.listen_BANG_ = (function electron$listener$listen_BANG_(){
electron.listener.listen_to_electron_BANG_();

return electron.listener.listen_persistent_dbs_BANG_();
});

//# sourceMappingURL=electron.listener.js.map
