goog.provide('frontend.fs.capacitor_fs');
var module$node_modules$$capacitor$filesystem$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$filesystem$dist$plugin_cjs", {});
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
frontend.fs.capacitor_fs.iOS_ensure_documents_BANG_ = (function frontend$fs$capacitor_fs$iOS_ensure_documents_BANG_(){
return frontend.mobile.util.ios_file_container.ensureDocuments();
});
} else {
}
frontend.fs.capacitor_fs.check_permission_android = (function frontend$fs$capacitor_fs$check_permission_android(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.checkPermissions(),(function (permission){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"publicStorage","publicStorage",-1416960599).cljs$core$IFn$_invoke$arity$1(cljs_bean.core.__GT_clj(permission)),(function (permission__$1){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(permission__$1,"granted"))?null:promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.protocols._promise(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.requestPermissions());
}))));
}));
}));
}));
});
frontend.fs.capacitor_fs.clean_uri = (function frontend$fs$capacitor_fs$clean_uri(uri){
if(typeof uri === 'string'){
return frontend.util.url_decode(uri);
} else {
return null;
}
});
frontend.fs.capacitor_fs.read_file_utf8 = (function frontend$fs$capacitor_fs$read_file_utf8(path){
if(clojure.string.blank_QMARK_(path)){
return null;
} else {
return module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.readFile(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"encoding","encoding",1728578272),module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Encoding.UTF8], null)));
}
});
/**
 * readdir recursively
 */
frontend.fs.capacitor_fs.readdir = (function frontend$fs$capacitor_fs$readdir(path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.protocols._promise((function (){var internal_loop_fn_name28387 = (function frontend$fs$capacitor_fs$readdir_$_internal_loop_fn_name28387(result42509,dirs42510){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result42509,dirs42510], null)),(function (p__42530){
var vec__42531 = p__42530;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42531,(0),null);
var dirs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42531,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto____$1){
return promesa.protocols._promise(((cljs.core.empty_QMARK_(dirs))?result:promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.first(dirs),(function (d){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.readdir(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),d], null))),(function (files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(files),"files",cljs.core.PersistentVector.EMPTY),(function (files__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (file){
var or__5043__auto__ = clojure.string.starts_with_QMARK_(file,".");
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var and__5041__auto__ = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return ((clojure.string.includes_QMARK_(file,"#")) || (clojure.string.includes_QMARK_(file,"%")));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,"bak");
}
}
}),files__$1),(function (files__$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return [clojure.string.replace(d,/\/+$/,""),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?frontend.util.url_encode(file):file))].join('');
}),files__$2),(function (files__$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (file){
return promesa.core.chain.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.stat(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),file], null))),(function (p1__42505_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__42505_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
}),files__$3)),(function (files_with_stats){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uri","uri",-774711847),cljs.core.filterv((function (p__42534){
var map__42535 = p__42534;
var map__42535__$1 = cljs.core.__destructure_map(map__42535);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42535__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["directory",null,"NSFileTypeDirectory",null], null), null),type);
}),files_with_stats)),(function (files_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__42536){
var map__42537 = p__42536;
var map__42537__$1 = cljs.core.__destructure_map(map__42537);
var file_result = map__42537__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42537__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(frontend.fs.capacitor_fs.read_file_utf8(uri),(function (p1__42507_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__42507_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),(function (p1__42508_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file_result,new cljs.core.Keyword(null,"content","content",15833224),p1__42508_SHARP_);
})], 0));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42538){
var map__42539 = p__42538;
var map__42539__$1 = cljs.core.__destructure_map(map__42539);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42539__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.some((function (p1__42506_SHARP_){
return clojure.string.ends_with_QMARK_(uri,p1__42506_SHARP_);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [".md",".markdown",".org",".edn",".css"], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42540){
var map__42541 = p__42540;
var map__42541__$1 = cljs.core.__destructure_map(map__42541);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42541__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NSFileTypeRegular",null,"file",null], null), null),type);
}),files_with_stats)))),(function (files_result){
return promesa.protocols._promise(frontend$fs$capacitor_fs$readdir_$_internal_loop_fn_name28387(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,files_result),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(dirs),files_dir)));
}));
}));
}));
}));
}));
}));
}));
}));
}))));
}));
}));
});
return internal_loop_fn_name28387(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
})());
})),(function (result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),(function (result__$1){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (result__$2){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(result__$2,new cljs.core.Keyword(null,"uri","uri",-774711847),frontend.fs.capacitor_fs.clean_uri);
}),result__$1));
}));
}));
}));
});
frontend.fs.capacitor_fs.contents_matched_QMARK_ = (function frontend$fs$capacitor_fs$contents_matched_QMARK_(disk_content,db_content){
if(((typeof disk_content === 'string') && (typeof db_content === 'string'))){
if(cljs.core.truth_(frontend.encrypt.encrypted_db_QMARK_(frontend.state.get_current_repo()))){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(disk_content),(function (decrypted_content){
return promesa.protocols._promise(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(decrypted_content),clojure.string.trim(db_content)));
}));
}));
} else {
return promesa.core.resolved(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(disk_content),clojure.string.trim(db_content)));
}
} else {
return null;
}
});
frontend.fs.capacitor_fs.write_file_impl_BANG_ = (function frontend$fs$capacitor_fs$write_file_impl_BANG_(_this,repo,_dir,path,content,p__42544,stat){
var map__42545 = p__42544;
var map__42545__$1 = cljs.core.__destructure_map(map__42545);
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42545__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42545__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var old_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42545__$1,new cljs.core.Keyword(null,"old-content","old-content",1851086779));
var skip_compare_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42545__$1,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960));
if(cljs.core.truth_(skip_compare_QMARK_)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.writeFile(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"data","data",-232669377),content,new cljs.core.Keyword(null,"encoding","encoding",1728578272),module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Encoding.UTF8,new cljs.core.Keyword(null,"recursive","recursive",718885872),true], null))),(function (result){
return promesa.protocols._promise((cljs.core.truth_(ok_handler)?(ok_handler.cljs$core$IFn$_invoke$arity$3 ? ok_handler.cljs$core$IFn$_invoke$arity$3(repo,path,result) : ok_handler.call(null,repo,path,result)):null));
}));
})),(function (error){
if(cljs.core.truth_(error_handler)){
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(error) : error_handler.call(null,error));
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.capacitor-fs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-file-failed","write-file-failed",1274270449),error,new cljs.core.Keyword(null,"line","line",212345235),123], null)),null);
}
}));
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(frontend.fs.capacitor_fs.read_file_utf8(path),(function (p1__42543_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__42543_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0)),(function (error){
console.error(error);

return null;
})),(function (disk_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = disk_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),(function (disk_content__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(frontend.util.get_file_ext(path)),(function (ext){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = old_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var G__42546 = repo;
var G__42547 = decodeURI(path);
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(G__42546,G__42547) : frontend.db.get_file.call(null,G__42546,G__42547));
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "";
}
}
})(),(function (db_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.capacitor_fs.contents_matched_QMARK_(disk_content__$1,db_content),(function (contents_matched_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.get_write_chan_length(),(function (pending_writes){
return promesa.protocols._promise(((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stat,new cljs.core.Keyword(null,"not-found","not-found",-629079980))) && (((cljs.core.not(contents_matched_QMARK_)) && ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["excalidraw",null,"css",null,"edn",null], null), null),ext)))) && ((((!(clojure.string.includes_QMARK_(path,"/.recycle/")))) && ((pending_writes === (0)))))))))))?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(disk_content__$1),(function (disk_content__$2){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","not-matched-from-disk","file/not-matched-from-disk",1915939272),path,disk_content__$2,content], null)));
}));
})):promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.writeFile(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"data","data",-232669377),content,new cljs.core.Keyword(null,"encoding","encoding",1728578272),module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Encoding.UTF8,new cljs.core.Keyword(null,"recursive","recursive",718885872),true], null))),(function (result){
return promesa.protocols._promise((function (){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.encrypt.encrypted_db_QMARK_(frontend.state.get_current_repo()))?frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(content):content),(function (content__$1){
return promesa.protocols._promise((function (){var G__42548 = repo;
var G__42549 = decodeURI(path);
var G__42550 = content__$1;
return (frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(G__42548,G__42549,G__42550) : frontend.db.set_file_content_BANG_.call(null,G__42548,G__42549,G__42550));
})());
}));
}));

if(cljs.core.truth_(ok_handler)){
(ok_handler.cljs$core$IFn$_invoke$arity$3 ? ok_handler.cljs$core$IFn$_invoke$arity$3(repo,path,result) : ok_handler.call(null,repo,path,result));
} else {
}

return result;
})()
);
}));
})),(function (error){
if(cljs.core.truth_(error_handler)){
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(error) : error_handler.call(null,error));
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.capacitor-fs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-file-failed","write-file-failed",1274270449),error,new cljs.core.Keyword(null,"line","line",212345235),162], null)),null);
}
}))
));
}));
}));
}));
}));
}));
}));
}));
}
});
frontend.fs.capacitor_fs.get_file_path = (function frontend$fs$capacitor_fs$get_file_path(dir,path){
var vec__42552 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42551_SHARP_){
var G__42555 = p1__42551_SHARP_;
if((G__42555 == null)){
return null;
} else {
return decodeURI(G__42555);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,path], null));
var dir__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42552,(0),null);
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42552,(1),null);
var dir__$2 = clojure.string.replace(dir__$1,/\/+$/,"");
var path__$2 = (function (){var G__42556 = path__$1;
if((G__42556 == null)){
return null;
} else {
return clojure.string.replace(G__42556,/^\/+/,"");
}
})();
var path__$3 = (((path__$2 == null))?dir__$2:((clojure.string.starts_with_QMARK_(path__$2,dir__$2))?path__$2:[dir__$2,"/",path__$2].join('')
));
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return encodeURI(decodeURI(path__$3));
} else {
return path__$3;
}
});
/**
 * Check whether `path' is logseq's container `localDocumentsPath' on iOS
 */
frontend.fs.capacitor_fs.local_container_path_QMARK_ = (function frontend$fs$capacitor_fs$local_container_path_QMARK_(path,localDocumentsPath){
return clojure.string.includes_QMARK_(path,localDocumentsPath);
});
/**
 * Check whether `path' is logseq's iCloud container path on iOS
 */
frontend.fs.capacitor_fs.iCloud_container_path_QMARK_ = (function frontend$fs$capacitor_fs$iCloud_container_path_QMARK_(path){
return clojure.string.includes_QMARK_(path,"iCloud~com~logseq~logseq");
});
frontend.fs.capacitor_fs.instruction = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"instruction"},[daiquiri.core.create_element("h1",{'className':"title"},["Please choose a valid directory!"]),daiquiri.core.create_element("p",{'className':"leading-6"},["Logseq app can only save or access your graphs stored in a specific directory with a ",daiquiri.core.create_element("strong",null,["Logseq icon"])," inside, located either in \"iCloud Drive\", \"On My iPhone\" or \"On My iPad\"."]),daiquiri.core.create_element("p",{'className':"leading-6"},["Please watch the following short instruction video. ",daiquiri.core.create_element("small",{'className':"text-gray-500"},["(may take few seconds to load...)"])]),daiquiri.core.create_element("iframe",{'src':"https://www.loom.com/embed/dae612ae5fd94e508bd0acdf02efb888",'frameBorder':"0",'position':"relative",'allowFullScreen':"allowfullscreen",'webkitAllowFullScreen':"webkitallowfullscreen",'height':"100%"},null)]);
}),null,"frontend.fs.capacitor-fs/instruction");

/**
* @constructor
 * @implements {frontend.fs.protocol.Fs}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.fs.capacitor_fs.Capacitorfs = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k42564,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__42568 = k42564;
switch (G__42568) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42564,else__5343__auto__);

}
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__42569){
var vec__42570 = p__42569;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42570,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42570,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.capacitor-fs.Capacitorfs{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42563){
var self__ = this;
var G__42563__$1 = this;
return (new cljs.core.RecordIter((0),G__42563__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.capacitor_fs.Capacitorfs(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-70169615 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42565,other42566){
var self__ = this;
var this42565__$1 = this;
return (((!((other42566 == null)))) && ((((this42565__$1.constructor === other42566.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42565__$1.__extmap,other42566.__extmap)))));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.capacitor_fs.Capacitorfs(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k42564){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k42564);
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__42563){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__42573 = cljs.core.keyword_identical_QMARK_;
var expr__42574 = k__5349__auto__;
return (new frontend.fs.capacitor_fs.Capacitorfs(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__42563),null));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__42563){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.capacitor_fs.Capacitorfs(G__42563,self__.__extmap,self__.__hash));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.mkdir(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),dir], null))),(function (result){
return promesa.protocols._promise((function (){
console.log(result);

return result;
})()
);
}));
}));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$unlink_BANG_$arity$4 = (function (_this,_repo,_path,_opts){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$get_files$arity$3 = (function (_this,path_or_handle,_ok_handler){
var self__ = this;
var _this__$1 = this;
return frontend.fs.capacitor_fs.readdir(path_or_handle);
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$rename_BANG_$arity$4 = (function (_this,_repo,old_path,new_path){
var self__ = this;
var _this__$1 = this;
var vec__42576 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42561_SHARP_){
return frontend.fs.capacitor_fs.get_file_path("",p1__42561_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_path,new_path], null));
var old_path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42576,(0),null);
var new_path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42576,(1),null);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.rename(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),old_path__$1,new cljs.core.Keyword(null,"to","to",192099007),new_path__$1], null))),(function (_){
return promesa.protocols._promise(null);
}));
})),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.capacitor-fs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rename-file-failed","rename-file-failed",705067468),error,new cljs.core.Keyword(null,"line","line",212345235),270], null)),null);
}));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$readdir$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return frontend.fs.capacitor_fs.readdir(dir);
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$stat$arity$3 = (function (_this,dir,path){
var self__ = this;
var _this__$1 = this;
var path__$1 = frontend.fs.capacitor_fs.get_file_path(dir,path);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.stat(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null))),(function (result){
return promesa.protocols._promise(result);
}));
}));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$watch_dir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.fs_watcher.unwatch(),(function (___28349__auto__){
return promesa.protocols._promise(frontend.mobile.util.fs_watcher.watch(({"path": dir})));
}));
}));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$rmdir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$write_file_BANG_$arity$6 = (function (this$,repo,dir,path,content,opts){
var self__ = this;
var this$__$1 = this;
var path__$1 = frontend.fs.capacitor_fs.get_file_path(dir,path);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.stat(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null))),(function (_e){
return new cljs.core.Keyword(null,"not-found","not-found",-629079980);
})),(function (stat){
return promesa.protocols._promise(frontend.fs.capacitor_fs.write_file_impl_BANG_(this$__$1,repo,dir,path__$1,content,opts,stat));
}));
}));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$open_dir$arity$2 = (function (_this,_ok_handler){
var self__ = this;
var _this__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.platform(),"android"))?frontend.fs.capacitor_fs.check_permission_android():null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.folder_picker.pickFolder(),(function (p1__42562_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__42562_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
})),(function (p__42579){
var map__42580 = p__42579;
var map__42580__$1 = cljs.core.__destructure_map(map__42580);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42580__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var localDocumentsPath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42580__$1,new cljs.core.Keyword(null,"localDocumentsPath","localDocumentsPath",1185925114));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?(((!(((frontend.fs.capacitor_fs.local_container_path_QMARK_(path,localDocumentsPath)) || (frontend.fs.capacitor_fs.iCloud_container_path_QMARK_(path))))))?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-instruction","modal/show-instruction",-270524467)], null)):((frontend.fs.capacitor_fs.iCloud_container_path_QMARK_(path))?frontend.mobile.util.sync_icloud_repo(path):null
)):null),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.capacitor_fs.readdir(path),(function (files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(files,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),(function (files__$1){
return promesa.protocols._promise(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null),files__$1)));
}));
}));
}));
}));
}));
}));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$read_file$arity$4 = (function (_this,dir,path,_options){
var self__ = this;
var _this__$1 = this;
var path__$1 = frontend.fs.capacitor_fs.get_file_path(dir,path);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.capacitor_fs.read_file_utf8(path__$1),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))),(function (content__$1){
return promesa.protocols._promise(content__$1);
}));
}));
})),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.capacitor-fs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-file-failed","read-file-failed",1054578592),error,new cljs.core.Keyword(null,"line","line",212345235),243], null)),null);
}));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$delete_file_BANG_$arity$5 = (function (_this,repo,dir,path,p__42581){
var self__ = this;
var map__42582 = p__42581;
var map__42582__$1 = cljs.core.__destructure_map(map__42582);
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42582__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42582__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var _this__$1 = this;
var path__$1 = frontend.fs.capacitor_fs.get_file_path(dir,path);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.deleteFile(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null))),(function (result){
return promesa.protocols._promise((cljs.core.truth_(ok_handler)?(ok_handler.cljs$core$IFn$_invoke$arity$3 ? ok_handler.cljs$core$IFn$_invoke$arity$3(repo,path__$1,result) : ok_handler.call(null,repo,path__$1,result)):null));
}));
})),(function (error){
if(cljs.core.truth_(error_handler)){
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(error) : error_handler.call(null,error));
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.capacitor-fs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete-file-failed","delete-file-failed",2078141156),error,new cljs.core.Keyword(null,"line","line",212345235),255], null)),null);
}
}));
}));

(frontend.fs.capacitor_fs.Capacitorfs.prototype.frontend$fs$protocol$Fs$mkdir_recur_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.mkdir(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),dir,new cljs.core.Keyword(null,"recursive","recursive",718885872),true], null))),(function (result){
return promesa.protocols._promise((function (){
console.log(result);

return result;
})()
);
}));
}));
}));

(frontend.fs.capacitor_fs.Capacitorfs.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.capacitor_fs.Capacitorfs.cljs$lang$type = true);

(frontend.fs.capacitor_fs.Capacitorfs.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.capacitor-fs/Capacitorfs",null,(1),null));
}));

(frontend.fs.capacitor_fs.Capacitorfs.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.capacitor-fs/Capacitorfs");
}));

/**
 * Positional factory function for frontend.fs.capacitor-fs/Capacitorfs.
 */
frontend.fs.capacitor_fs.__GT_Capacitorfs = (function frontend$fs$capacitor_fs$__GT_Capacitorfs(){
return (new frontend.fs.capacitor_fs.Capacitorfs(null,null,null));
});

/**
 * Factory function for frontend.fs.capacitor-fs/Capacitorfs, taking a map of keywords to field values.
 */
frontend.fs.capacitor_fs.map__GT_Capacitorfs = (function frontend$fs$capacitor_fs$map__GT_Capacitorfs(G__42567){
var extmap__5382__auto__ = (function (){var G__42583 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__42567);
if(cljs.core.record_QMARK_(G__42567)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42583);
} else {
return G__42583;
}
})();
return (new frontend.fs.capacitor_fs.Capacitorfs(null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.fs.capacitor_fs.js.map
