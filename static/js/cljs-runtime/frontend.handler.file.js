goog.provide('frontend.handler.file');
frontend.handler.file.load_file = (function frontend$handler$file$load_file(repo_url,path){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo_url),path),(function (content){
return promesa.protocols._promise(content);
}));
})),(function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Load file failed: ",path], 0));

return console.error(e);
}));
});
frontend.handler.file.load_multiple_files = (function frontend$handler$file$load_multiple_files(repo_url,paths){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47547_SHARP_){
return frontend.handler.file.load_file(repo_url,p1__47547_SHARP_);
}),paths));
});
frontend.handler.file.keep_formats = (function frontend$handler$file$keep_formats(files,formats){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
var format = logseq.graph_parser.util.get_format(file);
return cljs.core.contains_QMARK_(formats,format);
}),files);
});
frontend.handler.file.only_text_formats = (function frontend$handler$file$only_text_formats(files){
return frontend.handler.file.keep_formats(files,logseq.graph_parser.config.text_formats());
});
frontend.handler.file.only_image_formats = (function frontend$handler$file$only_image_formats(files){
return frontend.handler.file.keep_formats(files,logseq.graph_parser.config.img_formats());
});
frontend.handler.file.restore_config_BANG_ = (function frontend$handler$file$restore_config_BANG_(var_args){
var G__47561 = arguments.length;
switch (G__47561) {
case 2:
return frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,project_changed_check_QMARK_){
return frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,null,project_changed_check_QMARK_);
}));

(frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,config_content,_project_changed_check_QMARK_){
var config_content__$1 = (cljs.core.truth_(config_content)?config_content:frontend.handler.common.get_config(repo_url));
if(cljs.core.truth_(config_content__$1)){
return frontend.handler.common.reset_config_BANG_(repo_url,config_content__$1);
} else {
return null;
}
}));

(frontend.handler.file.restore_config_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.file.load_files_contents_BANG_ = (function frontend$handler$file$load_files_contents_BANG_(repo_url,files,ok_handler){
var images = frontend.handler.file.only_image_formats(files);
var files__$1 = frontend.handler.file.only_text_formats(files);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(frontend.handler.file.load_multiple_files(repo_url,files__$1)),(function (contents){
var file_contents = (function (){var G__47562 = cljs.core.zipmap(files__$1,contents);
if(cljs.core.seq(images)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47562,cljs.core.zipmap(images,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(images),""))], 0));
} else {
return G__47562;
}
})();
var file_contents__$1 = (function (){var iter__5520__auto__ = (function frontend$handler$file$load_files_contents_BANG__$_iter__47565(s__47566){
return (new cljs.core.LazySeq(null,(function (){
var s__47566__$1 = s__47566;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47566__$1);
if(temp__5720__auto__){
var s__47566__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47566__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47566__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47568 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47567 = (0);
while(true){
if((i__47567 < size__5519__auto__)){
var vec__47570 = cljs.core._nth(c__5518__auto__,i__47567);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47570,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47570,(1),null);
cljs.core.chunk_append(b__47568,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(file),new cljs.core.Keyword("file","content","file/content",12680964),content], null));

var G__47703 = (i__47567 + (1));
i__47567 = G__47703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47568),frontend$handler$file$load_files_contents_BANG__$_iter__47565(cljs.core.chunk_rest(s__47566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47568),null);
}
} else {
var vec__47576 = cljs.core.first(s__47566__$2);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47576,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47576,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(file),new cljs.core.Keyword("file","content","file/content",12680964),content], null),frontend$handler$file$load_files_contents_BANG__$_iter__47565(cljs.core.rest(s__47566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(file_contents);
})();
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(file_contents__$1) : ok_handler.call(null,file_contents__$1));
})),(function (error){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nfs","load-files-error","nfs/load-files-error",1672347248),repo_url,new cljs.core.Keyword(null,"line","line",212345235),80], null)),null);

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),81], null)),error);
}));
});
/**
 * Conflict of files towards same page
 */
frontend.handler.file.page_exists_in_another_file = (function frontend$handler$file$page_exists_in_another_file(repo_url,page,file){
var temp__5720__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5720__auto__)){
var page_name = temp__5720__auto__;
var current_file = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$2(repo_url,page_name) : frontend.db.get_page_file.call(null,repo_url,page_name)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file,current_file)){
return current_file;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.file.get_delete_blocks = (function frontend$handler$file$get_delete_blocks(repo_url,first_page,file){
var delete_blocks = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((frontend.db.delete_file_blocks_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.delete_file_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(repo_url,file) : frontend.db.delete_file_blocks_BANG_.call(null,repo_url,file)),(cljs.core.truth_(first_page)?(function (){var G__47579 = repo_url;
var G__47580 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(first_page);
return (frontend.db.delete_page_blocks.cljs$core$IFn$_invoke$arity$2 ? frontend.db.delete_page_blocks.cljs$core$IFn$_invoke$arity$2(G__47579,G__47580) : frontend.db.delete_page_blocks.call(null,G__47579,G__47580));
})():null)));
var temp__5720__auto___47704 = frontend.handler.file.page_exists_in_another_file(repo_url,first_page,file);
if(cljs.core.truth_(temp__5720__auto___47704)){
var current_file_47705 = temp__5720__auto___47704;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file,current_file_47705)){
var error_47706 = ["Page already exists with another file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_file_47705),", current file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),error_47706,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null)], null));
} else {
}
} else {
}

return delete_blocks;
});
frontend.handler.file.reset_file_BANG_ = (function frontend$handler$file$reset_file_BANG_(var_args){
var G__47582 = arguments.length;
switch (G__47582) {
case 3:
return frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,file,content){
return frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4(repo_url,file,content,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (repo_url,file,content,options){
var electron_local_repo_QMARK_ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__5041__auto__;
}
})();
var file__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = electron_local_repo_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.util.win32_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return module$frontend$utils.win32(file);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?file:(cljs.core.truth_((function (){var and__5041__auto__ = electron_local_repo_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = frontend.util.win32_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(file));
}
} else {
return and__5041__auto__;
}
})())?[frontend.config.get_repo_dir(repo_url),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(file));
} else {
return and__5041__auto__;
}
})())?file:(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_ios_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(file));
} else {
return and__5041__auto__;
}
})())?file:file
))));
var file__$2 = logseq.graph_parser.util.path_normalize(file__$1);
var new_QMARK_ = ((function (){var G__47583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),file__$2], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__47583) : frontend.db.entity.call(null,G__47583));
})() == null);
return logseq.graph_parser.parse_file((frontend.db.get_db.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$2(repo_url,false) : frontend.db.get_db.call(null,repo_url,false)),file__$2,content,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"new?","new?",777958557),new_QMARK_,new cljs.core.Keyword(null,"delete-blocks-fn","delete-blocks-fn",586451366),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.get_delete_blocks,repo_url),new cljs.core.Keyword(null,"extract-options","extract-options",-572164844),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"user-config","user-config",-1138679827),frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),frontend.state.get_date_formatter(),new cljs.core.Keyword(null,"page-name-order","page-name-order",-1625414065),frontend.state.page_name_order(),new cljs.core.Keyword(null,"block-pattern","block-pattern",297259959),frontend.config.get_block_pattern(logseq.graph_parser.util.get_format(file__$2)),new cljs.core.Keyword(null,"supported-formats","supported-formats",2085828616),logseq.graph_parser.config.supported_formats()], null)], null)], 0)));
}));

(frontend.handler.file.reset_file_BANG_.cljs$lang$maxFixedArity = 4);

frontend.handler.file.alter_file = (function frontend$handler$file$alter_file(repo,path,content,p__47584){
var map__47585 = p__47584;
var map__47585__$1 = cljs.core.__destructure_map(map__47585);
var reset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47585__$1,new cljs.core.Keyword(null,"reset?","reset?",-1051875415),true);
var re_render_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47585__$1,new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),false);
var from_disk_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47585__$1,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),false);
var skip_compare_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47585__$1,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),false);
var new_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47585__$1,new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695));
var original_content = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path));
var write_file_BANG_ = (cljs.core.truth_(from_disk_QMARK_)?(function (){
return promesa.core.resolved(null);
}):(function (){
return frontend.fs.write_file_BANG_(repo,frontend.config.get_repo_dir(repo),path,content,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(original_content)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),original_content], null):null),new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),skip_compare_QMARK_));
}));
if(cljs.core.truth_(reset_QMARK_)){
var temp__5720__auto___47708 = (frontend.db.get_file_page_id.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page_id.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file_page_id.call(null,path));
if(cljs.core.truth_(temp__5720__auto___47708)){
var page_id_47709 = temp__5720__auto___47708;
var G__47586_47710 = repo;
var G__47587_47711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),page_id_47709,new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),page_id_47709,new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__47586_47710,G__47587_47711) : frontend.db.transact_BANG_.call(null,G__47586_47710,G__47587_47711));
} else {
}

frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4(repo,path,content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new_graph_QMARK_,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),from_disk_QMARK_], null));
} else {
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path,content) : frontend.db.set_file_content_BANG_.call(null,repo,path,content));
}

return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(write_file_BANG_(),(function (_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$1(repo))){
frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$2(repo,true);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1(repo))){
frontend.handler.ui.add_style_if_exists_BANG_();
} else {
}

if(cljs.core.truth_(re_render_root_QMARK_)){
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
}),(function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Write file failed, path: ",path,", content: ",content], 0));

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("write","failed","write/failed",-1544073021),error,new cljs.core.Keyword(null,"line","line",212345235),177], null)),null);
}));
});
frontend.handler.file.set_file_content_BANG_ = (function frontend$handler$file$set_file_content_BANG_(repo,path,new_content){
return frontend.handler.file.alter_file(repo,path,new_content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset?","reset?",-1051875415),false,new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),false], null));
});
frontend.handler.file.alter_files = (function frontend$handler$file$alter_files(repo,files,p__47588){
var map__47589 = p__47588;
var map__47589__$1 = cljs.core.__destructure_map(map__47589);
var opts = map__47589__$1;
var reset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47589__$1,new cljs.core.Keyword(null,"reset?","reset?",-1051875415),false);
var update_db_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47589__$1,new cljs.core.Keyword(null,"update-db?","update-db?",-1641846808),true);
var file__GT_content = (function (){var paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,files);
return cljs.core.zipmap(paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path));
}),paths));
})();
if(cljs.core.truth_(update_db_QMARK_)){
var seq__47590_47712 = cljs.core.seq(files);
var chunk__47591_47713 = null;
var count__47592_47714 = (0);
var i__47593_47715 = (0);
while(true){
if((i__47593_47715 < count__47592_47714)){
var vec__47600_47716 = chunk__47591_47713.cljs$core$IIndexed$_nth$arity$2(null,i__47593_47715);
var path_47717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47600_47716,(0),null);
var content_47718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47600_47716,(1),null);
if(cljs.core.truth_(reset_QMARK_)){
frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_47717,content_47718);
} else {
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_47717,content_47718) : frontend.db.set_file_content_BANG_.call(null,repo,path_47717,content_47718));
}


var G__47719 = seq__47590_47712;
var G__47720 = chunk__47591_47713;
var G__47721 = count__47592_47714;
var G__47722 = (i__47593_47715 + (1));
seq__47590_47712 = G__47719;
chunk__47591_47713 = G__47720;
count__47592_47714 = G__47721;
i__47593_47715 = G__47722;
continue;
} else {
var temp__5720__auto___47723 = cljs.core.seq(seq__47590_47712);
if(temp__5720__auto___47723){
var seq__47590_47724__$1 = temp__5720__auto___47723;
if(cljs.core.chunked_seq_QMARK_(seq__47590_47724__$1)){
var c__5565__auto___47725 = cljs.core.chunk_first(seq__47590_47724__$1);
var G__47726 = cljs.core.chunk_rest(seq__47590_47724__$1);
var G__47727 = c__5565__auto___47725;
var G__47728 = cljs.core.count(c__5565__auto___47725);
var G__47729 = (0);
seq__47590_47712 = G__47726;
chunk__47591_47713 = G__47727;
count__47592_47714 = G__47728;
i__47593_47715 = G__47729;
continue;
} else {
var vec__47603_47730 = cljs.core.first(seq__47590_47724__$1);
var path_47731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47603_47730,(0),null);
var content_47732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47603_47730,(1),null);
if(cljs.core.truth_(reset_QMARK_)){
frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_47731,content_47732);
} else {
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_47731,content_47732) : frontend.db.set_file_content_BANG_.call(null,repo,path_47731,content_47732));
}


var G__47733 = cljs.core.next(seq__47590_47724__$1);
var G__47734 = null;
var G__47735 = (0);
var G__47736 = (0);
seq__47590_47712 = G__47733;
chunk__47591_47713 = G__47734;
count__47592_47714 = G__47735;
i__47593_47715 = G__47736;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5720__auto__ = frontend.state.get_file_write_chan();
if(cljs.core.truth_(temp__5720__auto__)){
var chan = temp__5720__auto__;
var chan_callback = new cljs.core.Keyword(null,"chan-callback","chan-callback",-1852200968).cljs$core$IFn$_invoke$arity$1(opts);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,files,opts,file__GT_content], null));

if(cljs.core.truth_(chan_callback)){
return (chan_callback.cljs$core$IFn$_invoke$arity$0 ? chan_callback.cljs$core$IFn$_invoke$arity$0() : chan_callback.call(null));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.file.alter_files_handler_BANG_ = (function frontend$handler$file$alter_files_handler_BANG_(repo,files,p__47606,file__GT_content){
var map__47607 = p__47606;
var map__47607__$1 = cljs.core.__destructure_map(map__47607);
var finish_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47607__$1,new cljs.core.Keyword(null,"finish-handler","finish-handler",770511735));
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47607__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var write_file_f = (function (p__47608){
var vec__47609 = p__47608;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47609,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47609,(1),null);
if(cljs.core.truth_(path)){
var original_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file__GT_content,path);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.fs.nfs.check_directory_permission_BANG_(repo);
}
})(),(function (_){
return promesa.protocols._promise(frontend.fs.write_file_BANG_(repo,frontend.config.get_repo_dir(repo),path,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),original_content], null)));
}));
})),(function (error){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["Failed to save the file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),". Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null)], null));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("write-file","failed","write-file/failed",325307384),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content-length","content-length",441319507),cljs.core.count(content),new cljs.core.Keyword(null,"error-str","error-str",-1967189260),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null)], null));

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("write-file","failed","write-file/failed",325307384),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),227], null)),null);
}));
} else {
return null;
}
});
var finish_handler__$1 = (function (){
if(cljs.core.truth_(finish_handler)){
(finish_handler.cljs$core$IFn$_invoke$arity$0 ? finish_handler.cljs$core$IFn$_invoke$arity$0() : finish_handler.call(null));
} else {
}

return frontend.handler.ui.re_render_file_BANG_();
});
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(write_file_f,files)),(function (){
finish_handler__$1();

if(cljs.core.truth_(chan)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,true);
} else {
return null;
}
})),(function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Alter files failed:"], 0));

console.error(error);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,false);
}));
});
frontend.handler.file.run_writes_chan_BANG_ = (function frontend$handler$file$run_writes_chan_BANG_(){
var chan = frontend.state.get_file_write_chan();
var c__27595__auto___47737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_47650){
var state_val_47651 = (state_47650[(1)]);
if((state_val_47651 === (7))){
var inst_47615 = (state_47650[(2)]);
var inst_47616 = [new cljs.core.Keyword("file","write-failed","file/write-failed",-229053199),new cljs.core.Keyword(null,"line","line",212345235)];
var inst_47617 = [inst_47615,253];
var inst_47618 = cljs.core.PersistentHashMap.fromArrays(inst_47616,inst_47617);
var inst_47619 = cljs.core.identity(inst_47618);
var inst_47620 = lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),inst_47619,null);
var state_47650__$1 = state_47650;
var statearr_47652_47738 = state_47650__$1;
(statearr_47652_47738[(2)] = inst_47620);

(statearr_47652_47738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (1))){
var state_47650__$1 = state_47650;
var statearr_47653_47739 = state_47650__$1;
(statearr_47653_47739[(2)] = null);

(statearr_47653_47739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (4))){
var inst_47614 = (state_47650[(2)]);
var state_47650__$1 = (function (){var statearr_47654 = state_47650;
(statearr_47654[(7)] = inst_47614);

return statearr_47654;
})();
var statearr_47655_47740 = state_47650__$1;
(statearr_47655_47740[(2)] = null);

(statearr_47655_47740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (15))){
var inst_47642 = (state_47650[(2)]);
var _ = (function (){var statearr_47663 = state_47650;
(statearr_47663[(4)] = cljs.core.rest((state_47650[(4)])));

return statearr_47663;
})();
var state_47650__$1 = state_47650;
var statearr_47667_47741 = state_47650__$1;
(statearr_47667_47741[(2)] = inst_47642);

(statearr_47667_47741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (13))){
var inst_47629 = (state_47650[(8)]);
var inst_47639 = (function(){throw inst_47629})();
var state_47650__$1 = state_47650;
var statearr_47676_47742 = state_47650__$1;
(statearr_47676_47742[(2)] = inst_47639);

(statearr_47676_47742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (6))){
var inst_47645 = (state_47650[(2)]);
var state_47650__$1 = (function (){var statearr_47678 = state_47650;
(statearr_47678[(9)] = inst_47645);

return statearr_47678;
})();
var statearr_47679_47743 = state_47650__$1;
(statearr_47679_47743[(2)] = null);

(statearr_47679_47743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (3))){
var inst_47648 = (state_47650[(2)]);
var state_47650__$1 = state_47650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47650__$1,inst_47648);
} else {
if((state_val_47651 === (12))){
var inst_47637 = (state_47650[(2)]);
var state_47650__$1 = state_47650;
if(cljs.core.truth_(inst_47637)){
var statearr_47684_47744 = state_47650__$1;
(statearr_47684_47744[(1)] = (13));

} else {
var statearr_47685_47745 = state_47650__$1;
(statearr_47685_47745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (2))){
var state_47650__$1 = state_47650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47650__$1,(4),chan);
} else {
if((state_val_47651 === (11))){
var inst_47630 = (state_47650[(10)]);
var state_47650__$1 = state_47650;
var statearr_47686_47746 = state_47650__$1;
(statearr_47686_47746[(2)] = inst_47630);

(statearr_47686_47746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (9))){
var inst_47629 = (state_47650[(8)]);
var inst_47630 = (state_47650[(10)]);
var inst_47629__$1 = (state_47650[(2)]);
var inst_47630__$1 = (inst_47629__$1 instanceof cljs.core.ExceptionInfo);
var state_47650__$1 = (function (){var statearr_47687 = state_47650;
(statearr_47687[(8)] = inst_47629__$1);

(statearr_47687[(10)] = inst_47630__$1);

return statearr_47687;
})();
if(cljs.core.truth_(inst_47630__$1)){
var statearr_47688_47747 = state_47650__$1;
(statearr_47688_47747[(1)] = (10));

} else {
var statearr_47689_47748 = state_47650__$1;
(statearr_47689_47748[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (5))){
var inst_47614 = (state_47650[(7)]);
var _ = (function (){var statearr_47690 = state_47650;
(statearr_47690[(4)] = cljs.core.cons((8),(state_47650[(4)])));

return statearr_47690;
})();
var inst_47626 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.alter_files_handler_BANG_,inst_47614);
var inst_47627 = cljs.core.async.interop.p__GT_c(inst_47626);
var state_47650__$1 = state_47650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47650__$1,(9),inst_47627);
} else {
if((state_val_47651 === (14))){
var inst_47629 = (state_47650[(8)]);
var state_47650__$1 = state_47650;
var statearr_47692_47749 = state_47650__$1;
(statearr_47692_47749[(2)] = inst_47629);

(statearr_47692_47749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (10))){
var inst_47629 = (state_47650[(8)]);
var inst_47632 = cljs.core.ex_data(inst_47629);
var inst_47633 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_47632);
var inst_47634 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47633,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_47650__$1 = state_47650;
var statearr_47693_47750 = state_47650__$1;
(statearr_47693_47750[(2)] = inst_47634);

(statearr_47693_47750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47651 === (8))){
var _ = (function (){var statearr_47694 = state_47650;
(statearr_47694[(4)] = cljs.core.rest((state_47650[(4)])));

return statearr_47694;
})();
var state_47650__$1 = state_47650;
var ex47691 = (state_47650__$1[(2)]);
var statearr_47695_47751 = state_47650__$1;
(statearr_47695_47751[(5)] = ex47691);


if((ex47691 instanceof Error)){
var statearr_47696_47752 = state_47650__$1;
(statearr_47696_47752[(1)] = (7));

(statearr_47696_47752[(5)] = null);

} else {
throw ex47691;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__ = null;
var frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____0 = (function (){
var statearr_47697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47697[(0)] = frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__);

(statearr_47697[(1)] = (1));

return statearr_47697;
});
var frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____1 = (function (state_47650){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_47650);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e47698){var ex__27576__auto__ = e47698;
var statearr_47699_47753 = state_47650;
(statearr_47699_47753[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_47650[(4)]))){
var statearr_47700_47754 = state_47650;
(statearr_47700_47754[(1)] = cljs.core.first((state_47650[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47755 = state_47650;
state_47650 = G__47755;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__ = function(state_47650){
switch(arguments.length){
case 0:
return frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____1.call(this,state_47650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____0;
frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____1;
return frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_47701 = f__27596__auto__();
(statearr_47701[(6)] = c__27595__auto___47737);

return statearr_47701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return chan;
});
frontend.handler.file.watch_for_current_graph_dir_BANG_ = (function frontend$handler$file$watch_for_current_graph_dir_BANG_(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5720__auto____$1)){
var dir = temp__5720__auto____$1;
return frontend.fs.watch_dir_BANG_(dir);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.file.create_metadata_file = (function frontend$handler$file$create_metadata_file(repo_url,encrypted_QMARK_){
var repo_dir = frontend.config.get_repo_dir(repo_url);
var path = [frontend.config.app_name,"/",frontend.config.metadata_file].join('');
var file_path = ["/",path].join('');
var default_content = (cljs.core.truth_(encrypted_QMARK_)?"{:db/encrypted? true}":"{}");
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",frontend.config.app_name].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_path,default_content),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,default_content)));
}));
}));
}));
});
frontend.handler.file.create_pages_metadata_file = (function frontend$handler$file$create_pages_metadata_file(repo_url){
var repo_dir = frontend.config.get_repo_dir(repo_url);
var path = [frontend.config.app_name,"/",frontend.config.pages_metadata_file].join('');
var file_path = ["/",path].join('');
var default_content = "{}";
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",frontend.config.app_name].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_path,default_content),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,default_content)));
}));
}));
}));
});
frontend.handler.file.edn_file_set_key_value = (function frontend$handler$file$edn_file_set_key_value(path,k,v){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file.call(null,path));
if(cljs.core.truth_(temp__5720__auto____$1)){
var content = temp__5720__auto____$1;
frontend.handler.common.read_config(content);

var result = frontend.handler.common.parse_config(content);
var ks = ((cljs.core.vector_QMARK_(k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var new_result = borkdude.rewrite_edn.assoc_in(result,ks,v);
var new_content = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_result);
return frontend.handler.file.set_file_content_BANG_(repo,path,new_content);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.file.js.map
