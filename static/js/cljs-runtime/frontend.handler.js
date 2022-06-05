goog.provide('frontend.handler');
goog.scope(function(){
  frontend.handler.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.set_global_error_notification_BANG_ = (function frontend$handler$set_global_error_notification_BANG_(){
return (window.onerror = (function (message,_source,_lineno,_colno,error){
if(frontend.error.ignored_QMARK_(message)){
return null;
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),43], null)),error);
}
}));
});
frontend.handler.watch_for_date_BANG_ = (function frontend$handler$watch_for_date_BANG_(){
var f = (function (){
var repo = frontend.state.get_current_repo();
if(cljs.core.truth_(frontend.state.nfs_refreshing_QMARK_())){
return null;
} else {
return frontend.handler.page.create_today_journal_BANG_();
}
});
f();

return setInterval(f,(5000));
});
frontend.handler.instrument_BANG_ = (function frontend$handler$instrument_BANG_(){
var total = frontend.extensions.srs.get_srs_cards_total();
frontend.state.set_state_BANG_(new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746),total);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("flashcards","count","flashcards/count",1183528136),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),(function (){var or__5043__auto__ = total;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})()], null)], null)], null));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("blocks","count","blocks/count",858510579),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),(frontend.db.blocks_count.cljs$core$IFn$_invoke$arity$0 ? frontend.db.blocks_count.cljs$core$IFn$_invoke$arity$0() : frontend.db.blocks_count.call(null))], null)], null)], null));
});
frontend.handler.store_schema_BANG_ = (function frontend$handler$store_schema_BANG_(){
return frontend.storage.set(new cljs.core.Keyword(null,"db-schema","db-schema",-346730440),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.graph_parser.db.schema.schema,new cljs.core.Keyword("db","version","db/version",425264924),logseq.graph_parser.db.schema.version));
});
frontend.handler.restore_and_setup_BANG_ = (function frontend$handler$restore_and_setup_BANG_(repos,old_db_schema){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.db.restore_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repos","repos",647483789),repos], null),old_db_schema,(function (repo){
return frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$2(repo,false);
})),(function (){
frontend.handler.ui.add_style_if_exists_BANG_();

frontend.modules.shortcut.core.unlisten_all();

frontend.modules.shortcut.core.refresh_BANG_();

if(((cljs.core.not(cljs.core.seq((frontend.db.get_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files.cljs$core$IFn$_invoke$arity$1(frontend.config.local_repo) : frontend.db.get_files.call(null,frontend.config.local_repo))))) && (((cljs.core.not(cljs.core.some(frontend.config.local_db_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),repos)))) && (cljs.core.not(frontend.mobile.util.native_platform_QMARK_())))))){
frontend.handler.repo.setup_local_repo_if_not_exists_BANG_();
} else {
frontend.state.set_db_restoring_BANG_(false);

}

frontend.handler.store_schema_BANG_();

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","nfs-ask-permission","modal/nfs-ask-permission",-1078859519)], null));

frontend.handler.page.init_commands_BANG_();

frontend.handler.watch_for_date_BANG_();

frontend.handler.file.watch_for_current_graph_dir_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ready","graph/ready",1121782733),frontend.state.get_current_repo()], null));
})),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),114], null)),error);
}));
});
frontend.handler.handle_connection_change = (function frontend$handler$handle_connection_change(e){
var online_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.goog$module$goog$object.get(e,"type"),"online");
return frontend.state.set_online_BANG_(online_QMARK_);
});
frontend.handler.set_network_watcher_BANG_ = (function frontend$handler$set_network_watcher_BANG_(){
window.addEventListener("online",frontend.handler.handle_connection_change);

return window.addEventListener("offline",frontend.handler.handle_connection_change);
});
/**
 * Enables datalog console in browser provided by https://github.com/homebaseio/datalog-console
 */
frontend.handler.enable_datalog_console = (function frontend$handler$enable_datalog_console(){
document.documentElement.setAttribute("__datalog-console-remote-installed__",true);

return window.addEventListener("message",(function (event){
var db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var temp__5720__auto__ = frontend.handler.goog$module$goog$object.getValueByKeys(event,"data",":datalog-console.client/devtool-message");
if(cljs.core.truth_(temp__5720__auto__)){
var devtool_message = temp__5720__auto__;
var msg_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(devtool_message));
var G__58352 = msg_type;
var G__58352__$1 = (((G__58352 instanceof cljs.core.Keyword))?G__58352.fqn:null);
switch (G__58352__$1) {
case "datalog-console.client/request-whole-database-as-string":
return window.postMessage(({":datalog-console.remote/remote-message": cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0))}),"*");

break;
default:
return null;

}
} else {
return null;
}
}));
});
frontend.handler.get_repos = (function frontend$handler$get_repos(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.persist.get_all_graphs(),(function (nfs_dbs){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),db,new cljs.core.Keyword(null,"nfs?","nfs?",-544337673),true], null);
}),nfs_dbs),(function (nfs_dbs__$1){
return promesa.protocols._promise(((cljs.core.seq(nfs_dbs__$1))?nfs_dbs__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),frontend.config.local_repo,new cljs.core.Keyword(null,"example?","example?",-1695437732),true], null)], null)
));
}));
}));
}));
});
frontend.handler.clear_cache_BANG_ = (function frontend$handler$clear_cache_BANG_(){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Clearing...",new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clearCache"], 0)):null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.clear_local_storage_and_idb_BANG_(),(function (___$1){
return promesa.protocols._promise(setTimeout((function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reloadWindowPage","reloadWindowPage",-363535123)], 0));
} else {
return window.location.reload();
}
}),(2000)));
}));
}));
}));
});
frontend.handler.register_components_fns_BANG_ = (function frontend$handler$register_components_fns_BANG_(){
frontend.state.set_page_blocks_cp_BANG_(frontend.components.page.page_blocks_cp);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","linked-references","block/linked-references",-2022711478),frontend.components.reference.block_linked_references);

return frontend.handler.command_palette.register_global_shortcut_commands();
});
cljs.core.reset_BANG_(frontend.db._STAR_db_listener,frontend.modules.outliner.datascript.after_transact_pipelines);
frontend.handler.start_BANG_ = (function frontend$handler$start_BANG_(render){
frontend.handler.set_global_error_notification_BANG_();

var db_schema = frontend.storage.get(new cljs.core.Keyword(null,"db-schema","db-schema",-346730440));
frontend.handler.register_components_fns_BANG_();

frontend.state.set_db_restoring_BANG_(true);

(render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));

frontend.context.i18n.start();

frontend.modules.instrumentation.core.init();

frontend.handler.set_network_watcher_BANG_();

frontend.mobile.core.init_BANG_();

frontend.util.indexeddb_check_QMARK_((function (_error){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Sorry, it seems that your browser doesn't support IndexedDB, we recommend to use latest Chrome(Chromium) or Firefox(Non-private mode).",new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_indexedb_support_BANG_(false);
}));

frontend.db.react.run_custom_queries_when_idle_BANG_();

frontend.handler.events.run_BANG_();

promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.get_repos(),(function (repos){
return promesa.protocols._promise((function (){
frontend.state.set_repos_BANG_(repos);

frontend.handler.restore_and_setup_BANG_(repos,db_schema);

if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.protocols._promise(frontend.mobile.util.hide_splash());
}));
} else {
return null;
}
})()
);
}));
}));

frontend.db.run_batch_txs_BANG_();

frontend.handler.file.run_writes_chan_BANG_();

if(cljs.core.truth_(frontend.config.dev_QMARK_)){
frontend.handler.enable_datalog_console();
} else {
}

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
electron.listener.listen_BANG_();
} else {
}

frontend.util.persist_var.load_vars();

frontend.handler.user.refresh_tokens_loop();

return setTimeout(frontend.handler.instrument_BANG_,((60) * (1000)));
});
frontend.handler.stop_BANG_ = (function frontend$handler$stop_BANG_(){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop!"], 0));
});
frontend.handler.quit_and_install_new_version_BANG_ = (function frontend$handler$quit_and_install_new_version_BANG_(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.listener.persist_dbs_BANG_(),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic("set-quit-dirty-state",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),(function (___$1){
return promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"quitAndInstall","quitAndInstall",-856751624)], 0)));
}));
}));
}));
});

//# sourceMappingURL=frontend.handler.js.map
