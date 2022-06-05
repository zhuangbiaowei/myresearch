goog.provide('frontend.db.conn');
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.conn !== 'undefined') && (typeof frontend.db.conn.conns !== 'undefined')){
} else {
frontend.db.conn.conns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.db.conn.get_repo_path = (function frontend$db$conn$get_repo_path(url){
if(frontend.util.starts_with_QMARK_(url,"http")){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.take_last((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\//)));
} else {
return url;
}
});
frontend.db.conn.get_repo_name = (function frontend$db$conn$get_repo_name(repo){
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.util.text.get_graph_name_from_path(repo);
} else {
if(frontend.config.local_db_QMARK_(repo)){
return frontend.config.get_local_dir(repo);
} else {
return frontend.db.conn.get_repo_path(repo);

}
}
});
/**
 * repo-path: output of `get-repo-name`
 */
frontend.db.conn.get_short_repo_name = (function frontend$db$conn$get_short_repo_name(repo_path){
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())){
return logseq.graph_parser.text.get_file_basename(repo_path);
} else {
return repo_path;
}
});
frontend.db.conn.datascript_db = (function frontend$db$conn$datascript_db(repo){
if(cljs.core.truth_(repo)){
var path = frontend.db.conn.get_repo_path(repo);
return [(cljs.core.truth_(frontend.util.electron_QMARK_())?"":frontend.config.idb_db_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
} else {
return null;
}
});
frontend.db.conn.get_db = (function frontend$db$conn$get_db(var_args){
var G__59205 = arguments.length;
switch (G__59205) {
case 0:
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),true);
}));

(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1 = (function (repo_or_deref_QMARK_){
if(cljs.core.boolean_QMARK_(repo_or_deref_QMARK_)){
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),repo_or_deref_QMARK_);
} else {
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo_or_deref_QMARK_,true);
}
}));

(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2 = (function (repo,deref_QMARK_){
var repo__$1 = (cljs.core.truth_(repo)?repo:frontend.state.get_current_repo());
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.db.conn.conns),frontend.db.conn.datascript_db(repo__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var conn = temp__5720__auto__;
if(cljs.core.truth_(deref_QMARK_)){
return cljs.core.deref(conn);
} else {
return conn;
}
} else {
return null;
}
}));

(frontend.db.conn.get_db.cljs$lang$maxFixedArity = 2);

frontend.db.conn.reset_conn_BANG_ = (function frontend$db$conn$reset_conn_BANG_(conn,db){
return cljs.core.reset_BANG_(conn,db);
});
frontend.db.conn.remove_conn_BANG_ = (function frontend$db$conn$remove_conn_BANG_(repo){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.db.conn.conns,cljs.core.dissoc,frontend.db.conn.datascript_db(repo));
});
frontend.db.conn.start_BANG_ = (function frontend$db$conn$start_BANG_(var_args){
var G__59209 = arguments.length;
switch (G__59209) {
case 1:
return frontend.db.conn.start_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.conn.start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.conn.start_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.db.conn.start_BANG_.cljs$core$IFn$_invoke$arity$2(repo,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.db.conn.start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,p__59210){
var map__59211 = p__59210;
var map__59211__$1 = cljs.core.__destructure_map(map__59211);
var listen_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59211__$1,new cljs.core.Keyword(null,"listen-handler","listen-handler",-1690024921));
var db_name = frontend.db.conn.datascript_db(repo);
var db_conn = logseq.graph_parser.db.start_conn();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.conn.conns,cljs.core.assoc,db_name,db_conn);

if(cljs.core.truth_(listen_handler)){
return (listen_handler.cljs$core$IFn$_invoke$arity$1 ? listen_handler.cljs$core$IFn$_invoke$arity$1(repo) : listen_handler.call(null,repo));
} else {
return null;
}
}));

(frontend.db.conn.start_BANG_.cljs$lang$maxFixedArity = 2);

frontend.db.conn.destroy_all_BANG_ = (function frontend$db$conn$destroy_all_BANG_(){
return cljs.core.reset_BANG_(frontend.db.conn.conns,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=frontend.db.conn.js.map
