goog.provide('frontend.fs');
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.nfs_record !== 'undefined')){
} else {
frontend.fs.nfs_record = frontend.fs.nfs.__GT_Nfs();
}
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.bfs_record !== 'undefined')){
} else {
frontend.fs.bfs_record = frontend.fs.bfs.__GT_Bfs();
}
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.node_record !== 'undefined')){
} else {
frontend.fs.node_record = frontend.fs.node.__GT_Node();
}
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.mobile_record !== 'undefined')){
} else {
frontend.fs.mobile_record = frontend.fs.capacitor_fs.__GT_Capacitorfs();
}
frontend.fs.local_db_QMARK_ = (function frontend$fs$local_db_QMARK_(dir){
return ((typeof dir === 'string') && (frontend.config.local_db_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(dir,(1)))));
});
frontend.fs.get_fs = (function frontend$fs$get_fs(dir){
var bfs_local_QMARK_ = ((clojure.string.starts_with_QMARK_(dir,"/local")) || (clojure.string.starts_with_QMARK_(dir,"local")));
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return (!(bfs_local_QMARK_));
} else {
return and__5041__auto__;
}
})())){
return frontend.fs.node_record;
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.fs.mobile_record;
} else {
if(frontend.fs.local_db_QMARK_(dir)){
return frontend.fs.nfs_record;
} else {
return frontend.fs.bfs_record;

}
}
}
});
frontend.fs.mkdir_BANG_ = (function frontend$fs$mkdir_BANG_(dir){
return frontend.fs.protocol.mkdir_BANG_(frontend.fs.get_fs(dir),dir);
});
frontend.fs.mkdir_recur_BANG_ = (function frontend$fs$mkdir_recur_BANG_(dir){
return frontend.fs.protocol.mkdir_recur_BANG_(frontend.fs.get_fs(dir),dir);
});
frontend.fs.readdir = (function frontend$fs$readdir(dir){
return frontend.fs.protocol.readdir(frontend.fs.get_fs(dir),dir);
});
/**
 * Should move the path to logseq/recycle instead of deleting it.
 */
frontend.fs.unlink_BANG_ = (function frontend$fs$unlink_BANG_(repo,path,opts){
return frontend.fs.protocol.unlink_BANG_(frontend.fs.get_fs(path),repo,path,opts);
});
/**
 * Remove the directory recursively.
 * Warning: only run it for browser cache.
 */
frontend.fs.rmdir_BANG_ = (function frontend$fs$rmdir_BANG_(dir){
var temp__5720__auto__ = frontend.fs.get_fs(dir);
if(cljs.core.truth_(temp__5720__auto__)){
var fs = temp__5720__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fs,frontend.fs.bfs_record)){
return frontend.fs.protocol.rmdir_BANG_(fs,dir);
} else {
return null;
}
} else {
return null;
}
});
frontend.fs.delete_file_BANG_ = (function frontend$fs$delete_file_BANG_(repo,dir,path,opts){
var fs_record = frontend.fs.get_fs(dir);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fs_record,frontend.fs.mobile_record)){
return frontend.fs.protocol.delete_file_BANG_(fs_record,repo,dir,path,opts);
} else {
return null;
}
});
frontend.fs.write_file_BANG_ = (function frontend$fs$write_file_BANG_(repo,dir,path,content,opts){
if(cljs.core.truth_(content)){
var fs_record = frontend.fs.get_fs(dir);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["org",null,"md",null,"markdown",null], null), null),frontend.util.get_file_ext(path)),(function (md_or_org_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(md_or_org_QMARK_))?content:frontend.encrypt.encrypt.cljs$core$IFn$_invoke$arity$1(content)),(function (content__$1){
return promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.protocol.write_file_BANG_(frontend.fs.get_fs(dir),repo,dir,path,content__$1,opts),(function (_){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.fs.bfs_record,fs_record))?(function (){var G__42588 = repo;
var G__42589 = frontend.config.get_file_path(repo,path);
var G__42590 = (new Date());
return (frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3(G__42588,G__42589,G__42590) : frontend.db.set_file_last_modified_at_BANG_.call(null,G__42588,G__42589,G__42590));
})():null));
}));
})),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","write-failed","file/write-failed",-229053199),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),86], null)),null);
})));
}));
}));
}));
} else {
return null;
}
});
frontend.fs.read_file = (function frontend$fs$read_file(var_args){
var G__42592 = arguments.length;
switch (G__42592) {
case 2:
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2 = (function (dir,path){
var fs = frontend.fs.get_fs(dir);
var options = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fs,frontend.fs.bfs_record))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf8"], null):cljs.core.PersistentArrayMap.EMPTY);
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3(dir,path,options);
}));

(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3 = (function (dir,path,options){
return frontend.fs.protocol.read_file(frontend.fs.get_fs(dir),dir,path,options);
}));

(frontend.fs.read_file.cljs$lang$maxFixedArity = 3);

frontend.fs.rename_BANG_ = (function frontend$fs$rename_BANG_(repo,old_path,new_path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_path,new_path)){
return promesa.core.resolved(null);
} else {
var vec__42594 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42593_SHARP_){
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())){
return p1__42593_SHARP_;
} else {
return [frontend.config.get_repo_dir(repo),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42593_SHARP_)].join('');
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_path,new_path], null));
var old_path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42594,(0),null);
var new_path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42594,(1),null);
return frontend.fs.protocol.rename_BANG_(frontend.fs.get_fs(old_path__$1),repo,old_path__$1,new_path__$1);

}
});
frontend.fs.stat = (function frontend$fs$stat(dir,path){
return frontend.fs.protocol.stat(frontend.fs.get_fs(dir),dir,path);
});
frontend.fs.get_record = (function frontend$fs$get_record(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.fs.node_record;
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.fs.mobile_record;
} else {
return frontend.fs.nfs_record;

}
}
});
frontend.fs.open_dir = (function frontend$fs$open_dir(ok_handler){
var record = frontend.fs.get_record();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.protocol.open_dir(record,ok_handler),(function (result){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?(function (){var vec__42597 = cljs_bean.core.__GT_clj(result);
var seq__42598 = cljs.core.seq(vec__42597);
var first__42599 = cljs.core.first(seq__42598);
var seq__42598__$1 = cljs.core.next(seq__42598);
var dir = first__42599;
var paths = seq__42598__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(dir),paths], null);
})():result));
}));
}));
});
frontend.fs.get_files = (function frontend$fs$get_files(path_or_handle,ok_handler){
var record = frontend.fs.get_record();
var electron_QMARK_ = frontend.util.electron_QMARK_();
var mobile_QMARK_ = frontend.mobile.util.native_platform_QMARK_();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.protocol.get_files(record,path_or_handle,ok_handler),(function (result){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5043__auto__ = electron_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return mobile_QMARK_;
}
})())?(function (){var result__$1 = cljs_bean.core.__GT_clj(result);
if(cljs.core.truth_(electron_QMARK_)){
return cljs.core.rest(result__$1);
} else {
return result__$1;
}
})():result));
}));
}));
});
frontend.fs.watch_dir_BANG_ = (function frontend$fs$watch_dir_BANG_(dir){
return frontend.fs.protocol.watch_dir_BANG_(frontend.fs.get_record(),dir);
});
frontend.fs.mkdir_if_not_exists = (function frontend$fs$mkdir_if_not_exists(dir){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(dir)?frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.stat(dir,null),(function (_stat){
return null;
}),(function (_error){
return frontend.fs.mkdir_BANG_(dir);
})):null),(function (error){
return console.error(error);
}));
});
frontend.fs.create_if_not_exists = (function frontend$fs$create_if_not_exists(var_args){
var G__42601 = arguments.length;
switch (G__42601) {
case 3:
return frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$3 = (function (repo,dir,path){
return frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo,dir,path,"");
}));

(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4 = (function (repo,dir,path,initial_content){
var path__$1 = (cljs.core.truth_(frontend.util.absolute_path_QMARK_(path))?path:((frontend.util.starts_with_QMARK_(path,"/"))?path:["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.stat(dir,path__$1),(function (_stat){
return promesa.protocols._promise(true);
}));
})),(function (_error){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,dir,path__$1,initial_content,null),(function (_){
return promesa.protocols._promise(false);
}));
}));
}));
}));

(frontend.fs.create_if_not_exists.cljs$lang$maxFixedArity = 4);

frontend.fs.file_exists_QMARK_ = (function frontend$fs$file_exists_QMARK_(dir,path){
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.stat(dir,path),(function (_stat){
return true;
}),(function (_e){
return false;
}));
});

//# sourceMappingURL=frontend.fs.js.map
