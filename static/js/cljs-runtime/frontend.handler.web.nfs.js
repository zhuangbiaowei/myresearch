goog.provide('frontend.handler.web.nfs');
goog.scope(function(){
  frontend.handler.web.nfs.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.web.nfs.remove_ignore_files = (function frontend$handler$web$nfs$remove_ignore_files(files,dir_name,nfs_QMARK_){
var files__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (f){
var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(f);
var or__5043__auto__ = clojure.string.starts_with_QMARK_(path,".git/");
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = clojure.string.includes_QMARK_(path,".git/");
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto__ = frontend.util.fs.ignored_path_QMARK_((cljs.core.truth_(nfs_QMARK_)?"":dir_name),path);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","name","file/name",1848919477).cljs$core$IFn$_invoke$arity$1(f),".gitignore");
} else {
return and__5041__auto__;
}
}
}
}),files);
var temp__5718__auto__ = cljs.core.some((function (p1__48304_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","name","file/name",1848919477).cljs$core$IFn$_invoke$arity$1(p1__48304_SHARP_),".gitignore")){
return p1__48304_SHARP_;
} else {
return null;
}
}),files__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var ignore_file = temp__5718__auto__;
var temp__5718__auto____$1 = new cljs.core.Keyword("file","file","file/file",-1241327538).cljs$core$IFn$_invoke$arity$1(ignore_file);
if(cljs.core.truth_(temp__5718__auto____$1)){
var file = temp__5718__auto____$1;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.text(),(function (content){
return promesa.protocols._promise((cljs.core.truth_(content)?(function (){var paths = cljs.core.set(frontend.handler.common.ignore_files(content,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),files__$1)));
if(cljs.core.seq(paths)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core.contains_QMARK_(paths,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(f));
}),files__$1);
} else {
return null;
}
})():null));
}));
}));
} else {
return promesa.core.resolved(files__$1);
}
} else {
return promesa.core.resolved(files__$1);
}
});
frontend.handler.web.nfs.__GT_db_files = (function frontend$handler$web$nfs$__GT_db_files(mobile_native_QMARK_,electron_QMARK_,dir_name,result){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),(cljs.core.truth_(mobile_native_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48306){
var map__48307 = p__48306;
var map__48307__$1 = cljs.core.__destructure_map(map__48307);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48307__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48307__$1,new cljs.core.Keyword(null,"content","content",15833224));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48307__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var mtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48307__$1,new cljs.core.Keyword(null,"mtime","mtime",963165087));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(uri),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),mtime,new cljs.core.Keyword("file","size","file/size",1053598731),size,new cljs.core.Keyword("file","content","file/content",12680964),content], null);
}),result):(cljs.core.truth_(electron_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48308){
var map__48309 = p__48308;
var map__48309__$1 = cljs.core.__destructure_map(map__48309);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48309__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48309__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48309__$1,new cljs.core.Keyword(null,"content","content",15833224));
var map__48310 = stat;
var map__48310__$1 = cljs.core.__destructure_map(map__48310);
var mtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"mtime","mtime",963165087));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(path),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),mtime,new cljs.core.Keyword("file","size","file/size",1053598731),size,new cljs.core.Keyword("file","content","file/content",12680964),content], null);
}),result):(function (){var result__$1 = cljs.core.flatten(cljs_bean.core.__GT_clj(result));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
var handle = frontend.handler.web.nfs.goog$module$goog$object.get(file,"handle");
var get_attr = (function (p1__48305_SHARP_){
return frontend.handler.web.nfs.goog$module$goog$object.get(file,p1__48305_SHARP_);
});
var path = clojure.string.replace_first(get_attr("webkitRelativePath"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name),"/"].join(''),"");
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("file","name","file/name",1848919477),get_attr("name"),new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(path),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),get_attr("lastModified"),new cljs.core.Keyword("file","size","file/size",1053598731),get_attr("size"),new cljs.core.Keyword("file","type","file/type",1177401880),get_attr("type"),new cljs.core.Keyword("file","file","file/file",-1241327538),file,new cljs.core.Keyword("file","handle","file/handle",1544192618),handle], null);
}),result__$1);
})()
)));
});
frontend.handler.web.nfs.filter_markup_and_built_in_files = (function frontend$handler$web$nfs$filter_markup_and_built_in_files(files){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
return cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(frontend.config.markup_formats,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null], null), null)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.get_file_ext(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file))));
}),files);
});
frontend.handler.web.nfs.set_batch_BANG_ = (function frontend$handler$web$nfs$set_batch_BANG_(handles){
var handles__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48316){
var vec__48317 = p__48316;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48317,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48317,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),path,new cljs.core.Keyword(null,"value","value",305978217),handle], null);
}),handles);
return frontend.idb.set_batch_BANG_(handles__$1);
});
frontend.handler.web.nfs.set_files_aux_BANG_ = (function frontend$handler$web$nfs$set_files_aux_BANG_(handles){
if(cljs.core.seq(handles)){
var vec__48320 = cljs.core.split_at((50),handles);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48320,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48320,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1((function (_){
return setTimeout((function (){
return promesa.core.resolved(null);
}),(10));
})),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.set_batch_BANG_(h),(function (___$1){
return promesa.protocols._promise(((cljs.core.seq(t))?(frontend.handler.web.nfs.set_files_aux_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.web.nfs.set_files_aux_BANG_.cljs$core$IFn$_invoke$arity$1(t) : frontend.handler.web.nfs.set_files_aux_BANG_.call(null,t)):null));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.web.nfs.set_files_BANG_ = (function frontend$handler$web$nfs$set_files_BANG_(handles){
var handles__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48328){
var vec__48329 = p__48328;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48329,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48329,(1),null);
var handle_path = [frontend.config.local_handle_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [handle_path,handle], null);
}),handles);
var seq__48332_48415 = cljs.core.seq(handles__$1);
var chunk__48333_48416 = null;
var count__48334_48417 = (0);
var i__48335_48418 = (0);
while(true){
if((i__48335_48418 < count__48334_48417)){
var vec__48343_48419 = chunk__48333_48416.cljs$core$IIndexed$_nth$arity$2(null,i__48335_48418);
var path_48420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343_48419,(0),null);
var handle_48421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343_48419,(1),null);
frontend.fs.nfs.add_nfs_file_handle_BANG_(path_48420,handle_48421);


var G__48422 = seq__48332_48415;
var G__48423 = chunk__48333_48416;
var G__48424 = count__48334_48417;
var G__48425 = (i__48335_48418 + (1));
seq__48332_48415 = G__48422;
chunk__48333_48416 = G__48423;
count__48334_48417 = G__48424;
i__48335_48418 = G__48425;
continue;
} else {
var temp__5720__auto___48426 = cljs.core.seq(seq__48332_48415);
if(temp__5720__auto___48426){
var seq__48332_48427__$1 = temp__5720__auto___48426;
if(cljs.core.chunked_seq_QMARK_(seq__48332_48427__$1)){
var c__5565__auto___48428 = cljs.core.chunk_first(seq__48332_48427__$1);
var G__48429 = cljs.core.chunk_rest(seq__48332_48427__$1);
var G__48430 = c__5565__auto___48428;
var G__48431 = cljs.core.count(c__5565__auto___48428);
var G__48432 = (0);
seq__48332_48415 = G__48429;
chunk__48333_48416 = G__48430;
count__48334_48417 = G__48431;
i__48335_48418 = G__48432;
continue;
} else {
var vec__48347_48433 = cljs.core.first(seq__48332_48427__$1);
var path_48434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48347_48433,(0),null);
var handle_48435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48347_48433,(1),null);
frontend.fs.nfs.add_nfs_file_handle_BANG_(path_48434,handle_48435);


var G__48436 = cljs.core.next(seq__48332_48427__$1);
var G__48437 = null;
var G__48438 = (0);
var G__48439 = (0);
seq__48332_48415 = G__48436;
chunk__48333_48416 = G__48437;
count__48334_48417 = G__48438;
i__48335_48418 = G__48439;
continue;
}
} else {
}
}
break;
}

return frontend.handler.web.nfs.set_files_aux_BANG_(handles__$1);
});
frontend.handler.web.nfs.ls_dir_files_with_handler_BANG_ = (function frontend$handler$web$nfs$ls_dir_files_with_handler_BANG_(ok_handler){
var path_handles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var electron_QMARK_ = frontend.util.electron_QMARK_();
var mobile_native_QMARK_ = frontend.mobile.util.native_platform_QMARK_();
var nfs_QMARK_ = ((cljs.core.not(electron_QMARK_)) && (cljs.core.not(mobile_native_QMARK_)));
var _STAR_repo = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.open_dir((function (path,handle){
if(nfs_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(path_handles,cljs.core.assoc,path,handle);
} else {
return null;
}
})),(function (result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.first(result),(function (root_handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?frontend.handler.web.nfs.goog$module$goog$object.get(root_handle,"name"):root_handle),(function (dir_name){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([frontend.config.local_db_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name)].join(''),(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.set_loading_files_BANG_(repo,true),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((((frontend.state.home_QMARK_()) || (frontend.state.setups_picker_QMARK_())))?null:frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1(false)),(function (___$1){
return promesa.protocols._promise((function (){
cljs.core.reset_BANG_(_STAR_repo,repo);

if(clojure.string.blank_QMARK_(dir_name)){
return null;
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([frontend.config.local_handle_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name)].join(''),(function (root_handle_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?(function (){
frontend.idb.set_item_BANG_(root_handle_path,root_handle);

return frontend.fs.nfs.add_nfs_file_handle_BANG_(root_handle_path,root_handle);
})()
:null),(function (___$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(1)),(function (result__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.remove_ignore_files(frontend.handler.web.nfs.__GT_db_files(mobile_native_QMARK_,electron_QMARK_,dir_name,result__$1),dir_name,nfs_QMARK_),(function (files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?(function (){
var file_paths_48440 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),files));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(path_handles,(function (handles){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48356){
var vec__48357 = p__48356;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48357,(0),null);
var _handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48357,(1),null);
var or__5043__auto__ = cljs.core.contains_QMARK_(file_paths_48440,clojure.string.replace_first(path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name),"/"].join(''),""));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var last_part = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,"/"));
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([frontend.config.get_pages_directory(),logseq.graph_parser.config.default_draw_directory,frontend.config.app_name,frontend.config.get_journals_directory()]),last_part);
}
}),handles));
}));

return frontend.handler.web.nfs.set_files_BANG_(cljs.core.deref(path_handles));
})()
:null),(function (___$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.filter_markup_and_built_in_files(files),(function (markup_files){
return promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?new cljs.core.Keyword("file","file","file/file",-1241327538).cljs$core$IFn$_invoke$arity$1(file).text():new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file)),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(content),(function (content__$1){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword("file","content","file/content",12680964),content__$1));
}));
}));
}));
}),markup_files)),(function (result__$2){
var files__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48354_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48354_SHARP_,new cljs.core.Keyword("file","file","file/file",-1241327538));
}),result__$2);
frontend.handler.repo.start_repo_db_if_not_exists_BANG_(repo);

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48381){
var state_val_48382 = (state_48381[(1)]);
if((state_val_48382 === (1))){
var inst_48360 = [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639),new cljs.core.Keyword(null,"nfs-files","nfs-files",-360703182)];
var inst_48361 = cljs.core.seq(markup_files);
var inst_48362 = (inst_48361 == null);
var inst_48363 = [true,inst_48362,files__$1];
var inst_48364 = cljs.core.PersistentHashMap.fromArrays(inst_48360,inst_48363);
var inst_48365 = frontend.handler.repo.load_repo_to_db_BANG_(repo,inst_48364);
var state_48381__$1 = state_48381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48381__$1,(2),inst_48365);
} else {
if((state_val_48382 === (2))){
var inst_48367 = (state_48381[(2)]);
var inst_48368 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"nfs?","nfs?",-544337673)];
var inst_48369 = [repo,true];
var inst_48370 = cljs.core.PersistentHashMap.fromArrays(inst_48368,inst_48369);
var inst_48371 = frontend.state.add_repo_BANG_(inst_48370);
var inst_48372 = frontend.state.set_loading_files_BANG_(repo,false);
var state_48381__$1 = (function (){var statearr_48384 = state_48381;
(statearr_48384[(7)] = inst_48367);

(statearr_48384[(8)] = inst_48372);

(statearr_48384[(9)] = inst_48371);

return statearr_48384;
})();
if(cljs.core.truth_(ok_handler)){
var statearr_48385_48441 = state_48381__$1;
(statearr_48385_48441[(1)] = (3));

} else {
var statearr_48386_48442 = state_48381__$1;
(statearr_48386_48442[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48382 === (3))){
var inst_48374 = (ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null));
var state_48381__$1 = state_48381;
var statearr_48387_48443 = state_48381__$1;
(statearr_48387_48443[(2)] = inst_48374);

(statearr_48387_48443[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48382 === (4))){
var state_48381__$1 = state_48381;
var statearr_48388_48444 = state_48381__$1;
(statearr_48388_48444[(2)] = null);

(statearr_48388_48444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48382 === (5))){
var inst_48377 = (state_48381[(2)]);
var inst_48378 = frontend.fs.watch_dir_BANG_(dir_name);
var inst_48379 = frontend.db.persist_if_idle_BANG_(repo);
var state_48381__$1 = (function (){var statearr_48389 = state_48381;
(statearr_48389[(10)] = inst_48377);

(statearr_48389[(11)] = inst_48378);

return statearr_48389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48381__$1,inst_48379);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__ = null;
var frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____0 = (function (){
var statearr_48390 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48390[(0)] = frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__);

(statearr_48390[(1)] = (1));

return statearr_48390;
});
var frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____1 = (function (state_48381){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48381);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48391){var ex__27576__auto__ = e48391;
var statearr_48392_48447 = state_48381;
(statearr_48392_48447[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48381[(4)]))){
var statearr_48393_48448 = state_48381;
(statearr_48393_48448[(1)] = cljs.core.first((state_48381[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48449 = state_48381;
state_48381 = G__48449;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__ = function(state_48381){
switch(arguments.length){
case 0:
return frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____1.call(this,state_48381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____0;
frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____1;
return frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48394 = f__27596__auto__();
(statearr_48394[(6)] = c__27595__auto__);

return statearr_48394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})),(function (error){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.web.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nfs","load-files-error","nfs/load-files-error",1672347248),repo,new cljs.core.Keyword(null,"line","line",212345235),189], null)),null);

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.web.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),190], null)),error);
})));
}));
}));
}));
}));
}));
}));
}));
}
})()
);
}));
}));
}));
}));
}));
}));
})),(function (error){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.web.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),192], null)),error);

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Error",null,"AbortError",null], null), null),frontend.handler.web.nfs.goog$module$goog$object.get(error,"name"))){
if(cljs.core.truth_(cljs.core.deref(_STAR_repo))){
return frontend.state.set_loading_files_BANG_(cljs.core.deref(_STAR_repo),false);
} else {
return null;
}
} else {
return null;
}
}));
});
frontend.handler.web.nfs.compute_diffs = (function frontend$handler$web$nfs$compute_diffs(old_files,new_files){
var ks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),new cljs.core.Keyword("file","content","file/content",12680964)], null);
var __GT_set = (function (files,ks__$1){
if(cljs.core.seq(files)){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48395_SHARP_){
return cljs.core.select_keys(p1__48395_SHARP_,ks__$1);
}),files));
} else {
return null;
}
});
var old_files__$1 = __GT_set(old_files,ks);
var new_files__$1 = __GT_set(new_files,ks);
var file_path_set_f = (function (col){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),col));
});
var get_file_f = (function (files,path){
return cljs.core.some((function (p1__48396_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__48396_SHARP_),path)){
return p1__48396_SHARP_;
} else {
return null;
}
}),files);
});
var old_file_paths = file_path_set_f(old_files__$1);
var new_file_paths = file_path_set_f(new_files__$1);
var added = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_file_paths,old_file_paths);
var deleted = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old_file_paths,new_file_paths);
var modified = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (path){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(get_file_f(old_files__$1,path)),new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(get_file_f(new_files__$1,path)));
}),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new_file_paths,old_file_paths)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),added,new cljs.core.Keyword(null,"modified","modified",-2134587826),modified,new cljs.core.Keyword(null,"deleted","deleted",-510100639),deleted], null);
});
frontend.handler.web.nfs.handle_diffs_BANG_ = (function frontend$handler$web$nfs$handle_diffs_BANG_(repo,nfs_QMARK_,old_files,new_files,handle_path,path_handles,re_index_QMARK_){
var get_last_modified_at = (function (path){
return cljs.core.some((function (file){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file))){
return new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310).cljs$core$IFn$_invoke$arity$1(file);
} else {
return null;
}
}),new_files);
});
var get_file_f = (function (path,files){
return cljs.core.some((function (p1__48397_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__48397_SHARP_),path)){
return p1__48397_SHARP_;
} else {
return null;
}
}),files);
});
var map__48399 = frontend.handler.web.nfs.compute_diffs(old_files,new_files);
var map__48399__$1 = cljs.core.__destructure_map(map__48399);
var added = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"added","added",2057651688));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"modified","modified",-2134587826));
var deleted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
var rename_f = (function (typ,col){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (file){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),typ,new cljs.core.Keyword(null,"path","path",-188191168),file,new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),get_last_modified_at(file)], null);
}),col);
});
var _ = (cljs.core.truth_((function (){var and__5041__auto__ = nfs_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(deleted);
} else {
return and__5041__auto__;
}
})())?(function (){var deleted__$1 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(path))){
return path;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
}
}),deleted)));
return promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
var handle_path__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(handle_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
frontend.idb.remove_item_BANG_(handle_path__$1);

return frontend.fs.nfs.remove_nfs_file_handle_BANG_(handle_path__$1);
}),deleted__$1));
})():null);
var added_or_modified = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(added,modified));
var ___$1 = (cljs.core.truth_((function (){var and__5041__auto__ = nfs_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(added_or_modified);
} else {
return and__5041__auto__;
}
})())?promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(path_handles),path);
if(cljs.core.truth_(temp__5720__auto__)){
var handle = temp__5720__auto__;
return frontend.idb.set_item_BANG_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(handle_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),handle);
} else {
return null;
}
}),added_or_modified)):null);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
var temp__5720__auto__ = get_file_f(path,new_files);
if(cljs.core.truth_(temp__5720__auto__)){
var file = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(nfs_QMARK_)?new cljs.core.Keyword("file","file","file/file",-1241327538).cljs$core$IFn$_invoke$arity$1(file).text():new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file)),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(content),(function (content__$1){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword("file","content","file/content",12680964),content__$1));
}));
}));
}));
} else {
return null;
}
}),added_or_modified)),(function (result){
var files = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48398_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__48398_SHARP_,new cljs.core.Keyword("file","file","file/file",-1241327538),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","handle","file/handle",1544192618)], 0));
}),result);
var vec__48400 = (cljs.core.truth_(re_index_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [files,cljs.core.set(modified)], null):(function (){var modified_files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
return cljs.core.contains_QMARK_(added_or_modified,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file));
}),files);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modified_files,cljs.core.set(modified)], null);
})());
var modified_files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48400,(0),null);
var modified__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48400,(1),null);
var diffs = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(rename_f("remove",deleted),rename_f("add",added),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rename_f("modify",modified__$1)], 0));
if(((((cljs.core.seq(diffs)) && (cljs.core.seq(modified_files)))) || (cljs.core.seq(diffs)))){

frontend.handler.repo.load_repo_to_db_BANG_(repo,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"diffs","diffs",-1720136241),diffs,new cljs.core.Keyword(null,"nfs-files","nfs-files",-360703182),modified_files,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570),cljs.core.not(re_index_QMARK_)], null));
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(re_index_QMARK_);
} else {
return and__5041__auto__;
}
})())){
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(repo,new_files) : frontend.db.transact_BANG_.call(null,repo,new_files));
} else {
return null;
}
}));
});
frontend.handler.web.nfs.reload_dir_BANG_ = (function frontend$handler$web$nfs$reload_dir_BANG_(var_args){
var G__48404 = arguments.length;
switch (G__48404) {
case 1:
return frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$2(repo,false);
}));

(frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,re_index_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo);
} else {
return and__5041__auto__;
}
})())){
var old_files = (frontend.db.get_files_full.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files_full.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_files_full.call(null,repo));
var dir_name = frontend.config.get_local_dir(repo);
var handle_path = [frontend.config.local_handle_prefix,dir_name].join('');
var path_handles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var electron_QMARK_ = frontend.util.electron_QMARK_();
var mobile_native_QMARK_ = frontend.mobile.util.native_platform_QMARK_();
var nfs_QMARK_ = ((cljs.core.not(electron_QMARK_)) && (cljs.core.not(mobile_native_QMARK_)));
if(cljs.core.truth_(re_index_QMARK_)){
frontend.state.set_graph_syncing_QMARK_(true);
} else {
}

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(electron_QMARK_)?null:frontend.idb.get_item(handle_path)),(function (handle){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5043__auto__ = handle;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = electron_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return mobile_native_QMARK_;
}
}
})())?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(handle)?frontend.fs.nfs.verify_permission(repo,handle,true):null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.get_files(((nfs_QMARK_)?handle:frontend.config.get_local_dir(repo)),(function (path,handle__$1){
if(nfs_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(path_handles,cljs.core.assoc,path,handle__$1);
} else {
return null;
}
})),(function (files_result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.remove_ignore_files(frontend.handler.web.nfs.__GT_db_files(mobile_native_QMARK_,electron_QMARK_,dir_name,files_result),dir_name,nfs_QMARK_),(function (new_files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?(function (){
var file_paths_48456 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),new_files));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(path_handles,(function (handles){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48411){
var vec__48412 = p__48411;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48412,(0),null);
var _handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48412,(1),null);
return cljs.core.contains_QMARK_(file_paths_48456,clojure.string.replace_first(path,[dir_name,"/"].join(''),""));
}),handles));
}));

return frontend.handler.web.nfs.set_files_BANG_(cljs.core.deref(path_handles));
})()
:null),(function (___$1){
return promesa.protocols._promise(frontend.handler.web.nfs.handle_diffs_BANG_(repo,nfs_QMARK_,old_files,new_files,handle_path,path_handles,re_index_QMARK_));
}));
}));
}));
}));
})):null));
}));
})),(function (error){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.web.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nfs","load-files-error","nfs/load-files-error",1672347248),repo,new cljs.core.Keyword(null,"line","line",212345235),312], null)),null);

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.web.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),313], null)),error);
})),(function (_){
return frontend.state.set_graph_syncing_QMARK_(false);
}));
} else {
return null;
}
}));

(frontend.handler.web.nfs.reload_dir_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.web.nfs.rebuild_index_BANG_ = (function frontend$handler$web$nfs$rebuild_index_BANG_(repo,ok_handler){
if(cljs.core.truth_(repo)){
frontend.state.set_nfs_refreshing_BANG_(true);

frontend.search.reset_indice_BANG_(repo);

(frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.remove_conn_BANG_.call(null,repo));

(frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.db.clear_query_state_BANG_.call(null));

frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$1(repo);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$2(repo,true),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null)),(function (___$1){
return promesa.protocols._promise(frontend.state.set_nfs_refreshing_BANG_(false));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.web.nfs.refresh_BANG_ = (function frontend$handler$web$nfs$refresh_BANG_(repo,ok_handler){
if(cljs.core.truth_(repo)){
frontend.state.set_nfs_refreshing_BANG_(true);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$1(repo),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null)),(function (___$1){
return promesa.protocols._promise(frontend.state.set_nfs_refreshing_BANG_(false));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.web.nfs.supported_QMARK_ = (function frontend$handler$web$nfs$supported_QMARK_(){
var or__5043__auto__ = module$frontend$utils.nfsSupported();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.electron_QMARK_();
}
});

//# sourceMappingURL=frontend.handler.web.nfs.js.map
