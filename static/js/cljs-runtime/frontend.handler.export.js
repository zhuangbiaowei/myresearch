goog.provide('frontend.handler.export$');
frontend.handler.export$.get_page_content = (function frontend$handler$export$get_page_content(repo,page){
return frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2(repo,page) : frontend.db.get_page_blocks_no_cache.call(null,repo,page)),page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
});
frontend.handler.export$.get_file_content = (function frontend$handler$export$get_file_content(repo,file_path){
var temp__5718__auto__ = cljs.core.ffirst((function (){var G__48935 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?pn","?pn",704318294,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?pn","?pn",704318294,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null)], null);
var G__48936 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var G__48937 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__48935,G__48936,G__48937) : datascript.core.q.call(null,G__48935,G__48936,G__48937));
})());
if(cljs.core.truth_(temp__5718__auto__)){
var page_name = temp__5718__auto__;
return frontend.handler.export$.get_page_content(repo,page_name);
} else {
return cljs.core.ffirst((function (){var G__48942 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","content","file/content",12680964),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null)], null);
var G__48943 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var G__48944 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__48942,G__48943,G__48944) : datascript.core.q.call(null,G__48942,G__48943,G__48944));
})());
}
});
frontend.handler.export$.get_blocks_contents = (function frontend$handler$export$get_blocks_contents(repo,root_block_uuid){
return frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(repo,root_block_uuid) : frontend.db.get_block_and_children.call(null,repo,root_block_uuid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_block_uuid)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
});
frontend.handler.export$.get_block_content = (function frontend$handler$export$get_block_content(block){
return frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
});
frontend.handler.export$.download_file_BANG_ = (function frontend$handler$export$download_file_BANG_(file_path){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.handler.export$.get_file_content(repo,file_path);
if(cljs.core.truth_(temp__5720__auto____$1)){
var content = temp__5720__auto____$1;
var data = (new Blob(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\uFEFF",[content]], null),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/plain;charset=utf-8,"], null))));
var anchor = goog.dom.getElement("download");
var url = window.URL.createObjectURL(data);
anchor.setAttribute("href",url);

anchor.setAttribute("download",file_path);

return anchor.click();
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.export$.export_repo_as_html_BANG_ = (function frontend$handler$export$export_repo_as_html_BANG_(repo){
var temp__5720__auto__ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var vec__48949 = ((frontend.state.all_pages_public_QMARK_())?(frontend.db.clean_export_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.clean_export_BANG_.cljs$core$IFn$_invoke$arity$1(db) : frontend.db.clean_export_BANG_.call(null,db)):(frontend.db.filter_only_public_pages_and_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.filter_only_public_pages_and_blocks.cljs$core$IFn$_invoke$arity$1(db) : frontend.db.filter_only_public_pages_and_blocks.call(null,db)));
var db__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48949,(0),null);
var asset_filenames = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48949,(1),null);
var db_str = (frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1 ? frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1(db__$1) : frontend.db.db__GT_string.call(null,db__$1));
var state = cljs.core.select_keys(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),new cljs.core.Keyword("ui","show-recent?","ui/show-recent?",927656089),new cljs.core.Keyword(null,"config","config",994861415)], null));
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"config","config",994861415),(function (config){
return new cljs.core.PersistentArrayMap(null, 1, ["local",cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,repo)], null);
}));
var raw_html_str = frontend.publishing.html.publishing_html(db_str,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state__$1], 0)));
var html_str = ["data:text/html;charset=UTF-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(raw_html_str))].join('');
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return window.apis.exportPublishAssets(raw_html_str,frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0(),frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0(),frontend.config.get_repo_dir(repo),cljs.core.clj__GT_js(asset_filenames),frontend.util.mocked_open_dir_path());
} else {
var temp__5720__auto____$1 = goog.dom.getElement("download-as-html");
if(cljs.core.truth_(temp__5720__auto____$1)){
var anchor = temp__5720__auto____$1;
anchor.setAttribute("href",html_str);

anchor.setAttribute("download","index.html");

return anchor.click();
} else {
return null;
}
}
} else {
return null;
}
});
frontend.handler.export$.get_file_contents = (function frontend$handler$export$get_file_contents(var_args){
var G__48968 = arguments.length;
switch (G__48968) {
case 1:
return frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
}));

(frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$2 = (function (repo,file_opts){
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__48974){
var vec__48975 = p__48974;
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48975,(0),null);
var file_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48975,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_path,frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_blocks_no_cache.call(null,page_name)),page_name),file_opts)], null);
}),(function (){var G__48978 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Symbol(null,"?fp","?fp",-1936386163,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?fp","?fp",-1936386163,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)], null)], null);
var G__48979 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__48978,G__48979) : datascript.core.q.call(null,G__48978,G__48979));
})());
}));

(frontend.handler.export$.get_file_contents.cljs$lang$maxFixedArity = 2);

frontend.handler.export$.export_repo_as_zip_BANG_ = (function frontend$handler$export$export_repo_as_zip_BANG_(repo){
var files = frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$1(repo);
var vec__48980 = frontend.util.get_git_owner_and_repo(repo);
var owner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48980,(0),null);
var repo_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48980,(1),null);
var repo_name__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo_name)].join('');
if(cljs.core.seq(files)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zip.make_zip(repo_name__$1,files,repo),(function (zipfile){
return promesa.protocols._promise((function (){var temp__5720__auto__ = goog.dom.getElement("download");
if(cljs.core.truth_(temp__5720__auto__)){
var anchor = temp__5720__auto__;
anchor.setAttribute("href",window.URL.createObjectURL(zipfile));

anchor.setAttribute("download",zipfile.name);

return anchor.click();
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.export$.get_md_file_contents = (function frontend$handler$export$get_md_file_contents(repo){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48984){
var vec__48985 = p__48984;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48985,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48985,(1),null);
var path__$1 = clojure.string.lower_case(path);
return cljs.core.re_find(/\.(?:md|markdown)$/,path__$1);
}),frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1),new cljs.core.Keyword(null,"heading-to-list?","heading-to-list?",2108324466),true], null)));
});
frontend.handler.export$.get_embed_pages_from_ast = (function frontend$handler$export$get_embed_pages_from_ast(ast){
var result = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var seq__48989_49247 = cljs.core.seq(ast);
var chunk__48990_49248 = null;
var count__48991_49249 = (0);
var i__48992_49250 = (0);
while(true){
if((i__48992_49250 < count__48991_49249)){
var item_49252 = chunk__48990_49248.cljs$core$IIndexed$_nth$arity$2(null,i__48992_49250);
clojure.walk.prewalk(((function (seq__48989_49247,chunk__48990_49248,count__48991_49249,i__48992_49250,item_49252,result){
return (function (i){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.vector_QMARK_(i);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__49009 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__49009 == null)){
return null;
} else {
return clojure.string.lower_case(G__49009);
}
})());
if(and__5041__auto____$2){
var and__5041__auto____$3 = (function (){var G__49010 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__49010__$1 = (((G__49010 == null))?null:cljs.core.first(G__49010));
if((G__49010__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__49010__$1,"[[");
}
})();
if(cljs.core.truth_(and__5041__auto____$3)){
var G__49011 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__49011__$1 = (((G__49011 == null))?null:cljs.core.first(G__49011));
if((G__49011__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__49011__$1,"]]");
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var page_ref = cljs.core.first(arguments$);
var page_name = clojure.string.lower_case(((function (seq__48989_49247,chunk__48990_49248,count__48991_49249,i__48992_49250,arguments$,page_ref,item_49252,result){
return (function (p1__48988_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__48988_SHARP_,(0),(cljs.core.count(p1__48988_SHARP_) - (2)));
});})(seq__48989_49247,chunk__48990_49248,count__48991_49249,i__48992_49250,arguments$,page_ref,item_49252,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(page_ref,(2))));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,page_name);

return i;
} else {
return i;

}
});})(seq__48989_49247,chunk__48990_49248,count__48991_49249,i__48992_49250,item_49252,result))
,item_49252);


var G__49258 = seq__48989_49247;
var G__49259 = chunk__48990_49248;
var G__49260 = count__48991_49249;
var G__49261 = (i__48992_49250 + (1));
seq__48989_49247 = G__49258;
chunk__48990_49248 = G__49259;
count__48991_49249 = G__49260;
i__48992_49250 = G__49261;
continue;
} else {
var temp__5720__auto___49262 = cljs.core.seq(seq__48989_49247);
if(temp__5720__auto___49262){
var seq__48989_49263__$1 = temp__5720__auto___49262;
if(cljs.core.chunked_seq_QMARK_(seq__48989_49263__$1)){
var c__5565__auto___49264 = cljs.core.chunk_first(seq__48989_49263__$1);
var G__49265 = cljs.core.chunk_rest(seq__48989_49263__$1);
var G__49266 = c__5565__auto___49264;
var G__49267 = cljs.core.count(c__5565__auto___49264);
var G__49268 = (0);
seq__48989_49247 = G__49265;
chunk__48990_49248 = G__49266;
count__48991_49249 = G__49267;
i__48992_49250 = G__49268;
continue;
} else {
var item_49269 = cljs.core.first(seq__48989_49263__$1);
clojure.walk.prewalk(((function (seq__48989_49247,chunk__48990_49248,count__48991_49249,i__48992_49250,item_49269,seq__48989_49263__$1,temp__5720__auto___49262,result){
return (function (i){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.vector_QMARK_(i);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__49014 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__49014 == null)){
return null;
} else {
return clojure.string.lower_case(G__49014);
}
})());
if(and__5041__auto____$2){
var and__5041__auto____$3 = (function (){var G__49015 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__49015__$1 = (((G__49015 == null))?null:cljs.core.first(G__49015));
if((G__49015__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__49015__$1,"[[");
}
})();
if(cljs.core.truth_(and__5041__auto____$3)){
var G__49016 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__49016__$1 = (((G__49016 == null))?null:cljs.core.first(G__49016));
if((G__49016__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__49016__$1,"]]");
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var page_ref = cljs.core.first(arguments$);
var page_name = clojure.string.lower_case(((function (seq__48989_49247,chunk__48990_49248,count__48991_49249,i__48992_49250,arguments$,page_ref,item_49269,seq__48989_49263__$1,temp__5720__auto___49262,result){
return (function (p1__48988_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__48988_SHARP_,(0),(cljs.core.count(p1__48988_SHARP_) - (2)));
});})(seq__48989_49247,chunk__48990_49248,count__48991_49249,i__48992_49250,arguments$,page_ref,item_49269,seq__48989_49263__$1,temp__5720__auto___49262,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(page_ref,(2))));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,page_name);

return i;
} else {
return i;

}
});})(seq__48989_49247,chunk__48990_49248,count__48991_49249,i__48992_49250,item_49269,seq__48989_49263__$1,temp__5720__auto___49262,result))
,item_49269);


var G__49273 = cljs.core.next(seq__48989_49263__$1);
var G__49274 = null;
var G__49275 = (0);
var G__49276 = (0);
seq__48989_49247 = G__49273;
chunk__48990_49248 = G__49274;
count__48991_49249 = G__49275;
i__48992_49250 = G__49276;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_(result);
});
frontend.handler.export$.get_embed_blocks_from_ast = (function frontend$handler$export$get_embed_blocks_from_ast(ast){
var result = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var seq__49018_49277 = cljs.core.seq(ast);
var chunk__49019_49278 = null;
var count__49020_49279 = (0);
var i__49021_49280 = (0);
while(true){
if((i__49021_49280 < count__49020_49279)){
var item_49281 = chunk__49019_49278.cljs$core$IIndexed$_nth$arity$2(null,i__49021_49280);
clojure.walk.prewalk(((function (seq__49018_49277,chunk__49019_49278,count__49020_49279,i__49021_49280,item_49281,result){
return (function (i){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.vector_QMARK_(i);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__49048 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__49048 == null)){
return null;
} else {
return clojure.string.lower_case(G__49048);
}
})());
if(and__5041__auto____$2){
var and__5041__auto____$3 = (function (){var G__49049 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__49049__$1 = (((G__49049 == null))?null:cljs.core.first(G__49049));
if((G__49049__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__49049__$1,"((");
}
})();
if(cljs.core.truth_(and__5041__auto____$3)){
var G__49050 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__49050__$1 = (((G__49050 == null))?null:cljs.core.first(G__49050));
if((G__49050__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__49050__$1,"))");
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var block_ref = cljs.core.first(arguments$);
var block_uuid = ((function (seq__49018_49277,chunk__49019_49278,count__49020_49279,i__49021_49280,arguments$,block_ref,item_49281,result){
return (function (p1__49017_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__49017_SHARP_,(0),(cljs.core.count(p1__49017_SHARP_) - (2)));
});})(seq__49018_49277,chunk__49019_49278,count__49020_49279,i__49021_49280,arguments$,block_ref,item_49281,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(block_ref,(2)));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__49018_49277,chunk__49019_49278,count__49020_49279,i__49021_49280,item_49281,result))
,item_49281);


var G__49287 = seq__49018_49277;
var G__49288 = chunk__49019_49278;
var G__49289 = count__49020_49279;
var G__49290 = (i__49021_49280 + (1));
seq__49018_49277 = G__49287;
chunk__49019_49278 = G__49288;
count__49020_49279 = G__49289;
i__49021_49280 = G__49290;
continue;
} else {
var temp__5720__auto___49291 = cljs.core.seq(seq__49018_49277);
if(temp__5720__auto___49291){
var seq__49018_49292__$1 = temp__5720__auto___49291;
if(cljs.core.chunked_seq_QMARK_(seq__49018_49292__$1)){
var c__5565__auto___49293 = cljs.core.chunk_first(seq__49018_49292__$1);
var G__49294 = cljs.core.chunk_rest(seq__49018_49292__$1);
var G__49295 = c__5565__auto___49293;
var G__49296 = cljs.core.count(c__5565__auto___49293);
var G__49297 = (0);
seq__49018_49277 = G__49294;
chunk__49019_49278 = G__49295;
count__49020_49279 = G__49296;
i__49021_49280 = G__49297;
continue;
} else {
var item_49299 = cljs.core.first(seq__49018_49292__$1);
clojure.walk.prewalk(((function (seq__49018_49277,chunk__49019_49278,count__49020_49279,i__49021_49280,item_49299,seq__49018_49292__$1,temp__5720__auto___49291,result){
return (function (i){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.vector_QMARK_(i);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__49052 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__49052 == null)){
return null;
} else {
return clojure.string.lower_case(G__49052);
}
})());
if(and__5041__auto____$2){
var and__5041__auto____$3 = (function (){var G__49053 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__49053__$1 = (((G__49053 == null))?null:cljs.core.first(G__49053));
if((G__49053__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__49053__$1,"((");
}
})();
if(cljs.core.truth_(and__5041__auto____$3)){
var G__49054 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__49054__$1 = (((G__49054 == null))?null:cljs.core.first(G__49054));
if((G__49054__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__49054__$1,"))");
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var block_ref = cljs.core.first(arguments$);
var block_uuid = ((function (seq__49018_49277,chunk__49019_49278,count__49020_49279,i__49021_49280,arguments$,block_ref,item_49299,seq__49018_49292__$1,temp__5720__auto___49291,result){
return (function (p1__49017_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__49017_SHARP_,(0),(cljs.core.count(p1__49017_SHARP_) - (2)));
});})(seq__49018_49277,chunk__49019_49278,count__49020_49279,i__49021_49280,arguments$,block_ref,item_49299,seq__49018_49292__$1,temp__5720__auto___49291,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(block_ref,(2)));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__49018_49277,chunk__49019_49278,count__49020_49279,i__49021_49280,item_49299,seq__49018_49292__$1,temp__5720__auto___49291,result))
,item_49299);


var G__49301 = cljs.core.next(seq__49018_49292__$1);
var G__49302 = null;
var G__49303 = (0);
var G__49304 = (0);
seq__49018_49277 = G__49301;
chunk__49019_49278 = G__49302;
count__49020_49279 = G__49303;
i__49021_49280 = G__49304;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_(result);
});
frontend.handler.export$.get_block_refs_from_ast = (function frontend$handler$export$get_block_refs_from_ast(ast){
var result = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var seq__49075_49305 = cljs.core.seq(ast);
var chunk__49076_49306 = null;
var count__49077_49307 = (0);
var i__49078_49308 = (0);
while(true){
if((i__49078_49308 < count__49077_49307)){
var item_49309 = chunk__49076_49306.cljs$core$IIndexed$_nth$arity$2(null,i__49078_49308);
clojure.walk.prewalk(((function (seq__49075_49305,chunk__49076_49306,count__49077_49307,i__49078_49308,item_49309,result){
return (function (i){
if(((cljs.core.vector_QMARK_(i)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_ref",cljs.core.first(i))) && ((!((cljs.core.second(i) == null)))))))){
var block_uuid = cljs.core.second(i);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__49075_49305,chunk__49076_49306,count__49077_49307,i__49078_49308,item_49309,result))
,item_49309);


var G__49310 = seq__49075_49305;
var G__49311 = chunk__49076_49306;
var G__49312 = count__49077_49307;
var G__49313 = (i__49078_49308 + (1));
seq__49075_49305 = G__49310;
chunk__49076_49306 = G__49311;
count__49077_49307 = G__49312;
i__49078_49308 = G__49313;
continue;
} else {
var temp__5720__auto___49314 = cljs.core.seq(seq__49075_49305);
if(temp__5720__auto___49314){
var seq__49075_49315__$1 = temp__5720__auto___49314;
if(cljs.core.chunked_seq_QMARK_(seq__49075_49315__$1)){
var c__5565__auto___49316 = cljs.core.chunk_first(seq__49075_49315__$1);
var G__49317 = cljs.core.chunk_rest(seq__49075_49315__$1);
var G__49318 = c__5565__auto___49316;
var G__49319 = cljs.core.count(c__5565__auto___49316);
var G__49320 = (0);
seq__49075_49305 = G__49317;
chunk__49076_49306 = G__49318;
count__49077_49307 = G__49319;
i__49078_49308 = G__49320;
continue;
} else {
var item_49321 = cljs.core.first(seq__49075_49315__$1);
clojure.walk.prewalk(((function (seq__49075_49305,chunk__49076_49306,count__49077_49307,i__49078_49308,item_49321,seq__49075_49315__$1,temp__5720__auto___49314,result){
return (function (i){
if(((cljs.core.vector_QMARK_(i)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_ref",cljs.core.first(i))) && ((!((cljs.core.second(i) == null)))))))){
var block_uuid = cljs.core.second(i);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__49075_49305,chunk__49076_49306,count__49077_49307,i__49078_49308,item_49321,seq__49075_49315__$1,temp__5720__auto___49314,result))
,item_49321);


var G__49325 = cljs.core.next(seq__49075_49315__$1);
var G__49326 = null;
var G__49327 = (0);
var G__49328 = (0);
seq__49075_49305 = G__49325;
chunk__49076_49306 = G__49326;
count__49077_49307 = G__49327;
i__49078_49308 = G__49328;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_(result);
});
frontend.handler.export$.get_block_page_AMPERSAND_block_refs = (function frontend$handler$export$get_block_page_AMPERSAND_block_refs(repo,block_uuid,embed_pages,embed_blocks,block_refs){
var block = (function (){var G__49116 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(block_uuid)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49116) : frontend.db.entity.call(null,G__49116));
})();
var block_content = frontend.handler.export$.get_blocks_contents(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
var ast = frontend.format.mldoc.__GT_edn(block_content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var embed_pages_new = frontend.handler.export$.get_embed_pages_from_ast(ast);
var embed_blocks_new = frontend.handler.export$.get_embed_blocks_from_ast(ast);
var block_refs_new = frontend.handler.export$.get_block_refs_from_ast(ast);
var embed_pages_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(embed_pages_new,embed_pages);
var embed_blocks_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(embed_blocks_new,embed_blocks);
var block_refs_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(block_refs_new,block_refs);
var embed_pages_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_pages_new,embed_pages);
var embed_blocks_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks_new,embed_blocks);
var block_refs_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(block_refs_new,block_refs);
var vec__49110 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49107_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__49107_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page_name){
var map__49117 = (frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5 ? frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5(repo,page_name,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_) : frontend.handler.export$.get_page_page_AMPERSAND_block_refs.call(null,repo,page_name,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_));
var map__49117__$1 = cljs.core.__destructure_map(map__49117);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49117__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49117__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49117__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),embed_pages_diff)));
var embed_pages_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49110,(0),null);
var embed_blocks_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49110,(1),null);
var block_refs_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49110,(2),null);
var vec__49113 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49109_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__49109_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_uuid__$1){
var map__49122 = (frontend.handler.export$.get_block_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5 ? frontend.handler.export$.get_block_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5(repo,block_uuid__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_) : frontend.handler.export$.get_block_page_AMPERSAND_block_refs.call(null,repo,block_uuid__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_));
var map__49122__$1 = cljs.core.__destructure_map(map__49122);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49122__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49122__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49122__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks_diff,block_refs_diff))));
var embed_pages_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49113,(0),null);
var embed_blocks_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49113,(1),null);
var block_refs_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49113,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_pages_1,embed_pages_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_pages_STAR_], 0)),new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_blocks_1,embed_blocks_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_blocks_STAR_], 0)),new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(block_refs_1,block_refs_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_refs_STAR_], 0))], null);
});
frontend.handler.export$.get_blocks_page_AMPERSAND_block_refs = (function frontend$handler$export$get_blocks_page_AMPERSAND_block_refs(repo,block_uuids,embed_pages,embed_blocks,block_refs){
var vec__49123 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__49126,block_uuid){
var vec__49127 = p__49126;
var embed_pages__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49127,(0),null);
var embed_blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49127,(1),null);
var block_refs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49127,(2),null);
var result = frontend.handler.export$.get_block_page_AMPERSAND_block_refs(repo,block_uuid,embed_pages__$1,embed_blocks__$1,block_refs__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"block-refs","block-refs",1507119654).cljs$core$IFn$_invoke$arity$1(result)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages,embed_blocks,block_refs], null),block_uuids);
var embed_pages__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49123,(0),null);
var embed_blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49123,(1),null);
var block_refs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49123,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876),embed_pages__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334),embed_blocks__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),block_refs__$1], null);
});
frontend.handler.export$.get_page_page_AMPERSAND_block_refs = (function frontend$handler$export$get_page_page_AMPERSAND_block_refs(repo,page_name,embed_pages,embed_blocks,block_refs){
var page_name_STAR_ = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var page_content = frontend.handler.export$.get_page_content(repo,page_name_STAR_);
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1((function (){var G__49138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name_STAR_], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49138) : frontend.db.entity.call(null,G__49138));
})());
var ast = frontend.format.mldoc.__GT_edn(page_content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var embed_pages_new = frontend.handler.export$.get_embed_pages_from_ast(ast);
var embed_blocks_new = frontend.handler.export$.get_embed_blocks_from_ast(ast);
var block_refs_new = frontend.handler.export$.get_block_refs_from_ast(ast);
var embed_pages_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(embed_pages_new,embed_pages);
var embed_blocks_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(embed_blocks_new,embed_blocks);
var block_refs_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(block_refs_new,block_refs);
var embed_pages_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_pages_new,embed_pages);
var embed_blocks_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks_new,embed_blocks);
var block_refs_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(block_refs_new,block_refs);
var vec__49132 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49130_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__49130_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page_name__$1){
var map__49139 = (frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5 ? frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5(repo,page_name__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_) : frontend.handler.export$.get_page_page_AMPERSAND_block_refs.call(null,repo,page_name__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_));
var map__49139__$1 = cljs.core.__destructure_map(map__49139);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49139__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49139__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49139__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),embed_pages_diff)));
var embed_pages_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49132,(0),null);
var embed_blocks_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49132,(1),null);
var block_refs_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49132,(2),null);
var vec__49135 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49131_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__49131_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_uuid){
var map__49140 = frontend.handler.export$.get_block_page_AMPERSAND_block_refs(repo,block_uuid,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_);
var map__49140__$1 = cljs.core.__destructure_map(map__49140);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49140__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49140__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49140__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks_diff,block_refs_diff))));
var embed_pages_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49135,(0),null);
var embed_blocks_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49135,(1),null);
var block_refs_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49135,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_pages_1,embed_pages_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_pages_STAR_], 0)),new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_blocks_1,embed_blocks_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_blocks_STAR_], 0)),new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(block_refs_1,block_refs_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_refs_STAR_], 0))], null);
});
frontend.handler.export$.get_export_references = (function frontend$handler$export$get_export_references(repo,p__49141){
var map__49142 = p__49141;
var map__49142__$1 = cljs.core.__destructure_map(map__49142);
var embed_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49142__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49142__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49142__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
var embed_blocks_and_contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
var id_s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
var id__$1 = cljs.core.uuid(id_s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.get_blocks_contents(repo,id__$1),frontend.handler.export$.get_block_content((function (){var G__49143 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__49143) : frontend.db.pull.call(null,G__49143));
})())], null)], null);
}),clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks,block_refs));
var embed_pages_and_contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name,frontend.handler.export$.get_page_content(repo,page_name)], null);
}),embed_pages);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"embed_blocks","embed_blocks",785928846),embed_blocks_and_contents,new cljs.core.Keyword(null,"embed_pages","embed_pages",94877387),embed_pages_and_contents], null);
});
frontend.handler.export$.export_files_as_markdown = (function frontend$handler$export$export_files_as_markdown(repo,files,heading_to_list_QMARK_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__49144){
var map__49145 = p__49144;
var map__49145__$1 = cljs.core.__destructure_map(map__49145);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49145__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49145__$1,new cljs.core.Keyword(null,"content","content",15833224));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49145__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49145__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
if(cljs.core.truth_(cljs.core.first(names))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,frontend.format.mldoc_record.frontend$format$protocol$Format$exportMarkdown$arity$4(null,content,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-heading-to-list?","export-heading-to-list?",-596132321),heading_to_list_QMARK_], null)),JSON.stringify(cljs.core.clj__GT_js(frontend.handler.export$.get_export_references(repo,frontend.handler.export$.get_page_page_AMPERSAND_block_refs(repo,cljs.core.first(names),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY)))))], null);
} else {
return null;
}
}),files);
});
frontend.handler.export$.export_files_as_opml = (function frontend$handler$export$export_files_as_opml(repo,files){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__49146){
var map__49147 = p__49146;
var map__49147__$1 = cljs.core.__destructure_map(map__49147);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"content","content",15833224));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
if(cljs.core.truth_(cljs.core.first(names))){
var path__$1 = clojure.string.replace(clojure.string.lower_case(path),/(.+)\.(md|markdown|org)/,"$1.opml");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path__$1,frontend.format.mldoc_record.frontend$format$protocol$Format$exportOPML$arity$5(null,content,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(format),cljs.core.first(names),JSON.stringify(cljs.core.clj__GT_js(frontend.handler.export$.get_export_references(repo,frontend.handler.export$.get_page_page_AMPERSAND_block_refs(repo,cljs.core.first(names),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY)))))], null);
} else {
return null;
}
}),files);
});
frontend.handler.export$.export_blocks_as_aux = (function frontend$handler$export$export_blocks_as_aux(repo,root_block_uuids,auxf){
if((cljs.core.count(root_block_uuids) > (0))){
} else {
throw (new Error("Assert failed: (> (count root-block-uuids) 0)"));
}

var f = (function (p1__49148_SHARP_){
return frontend.handler.export$.get_export_references(repo,frontend.handler.export$.get_blocks_page_AMPERSAND_block_refs(repo,p1__49148_SHARP_,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY));
});
var root_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49149_SHARP_){
var G__49153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__49149_SHARP_], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49153) : frontend.db.entity.call(null,G__49153));
}),root_block_uuids);
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__49150_SHARP_){
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(repo,p1__49150_SHARP_) : frontend.db.get_block_and_children.call(null,repo,p1__49150_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root_block_uuids], 0));
var refs = f(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49151_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__49151_SHARP_));
}),blocks));
var contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49152_SHARP_){
return frontend.handler.export$.get_blocks_contents(repo,p1__49152_SHARP_);
}),root_block_uuids);
var content = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim_newline,contents));
var format = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(cljs.core.first(root_blocks));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
return (auxf.cljs$core$IFn$_invoke$arity$3 ? auxf.cljs$core$IFn$_invoke$arity$3(content,format,refs) : auxf.call(null,content,format,refs));
});
frontend.handler.export$.export_blocks_as_opml = (function frontend$handler$export$export_blocks_as_opml(repo,root_block_uuids){
return frontend.handler.export$.export_blocks_as_aux(repo,root_block_uuids,(function (p1__49154_SHARP_,p2__49155_SHARP_,p3__49156_SHARP_){
return frontend.format.mldoc_record.frontend$format$protocol$Format$exportOPML$arity$5(null,p1__49154_SHARP_,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(p2__49155_SHARP_),"untitled",JSON.stringify(cljs.core.clj__GT_js(p3__49156_SHARP_)));
}));
});
frontend.handler.export$.export_blocks_as_markdown = (function frontend$handler$export$export_blocks_as_markdown(repo,root_block_uuids,indent_style,remove_options){
return frontend.handler.export$.export_blocks_as_aux(repo,root_block_uuids,(function (p1__49157_SHARP_,p2__49158_SHARP_,p3__49159_SHARP_){
return frontend.format.mldoc_record.frontend$format$protocol$Format$exportMarkdown$arity$4(null,p1__49157_SHARP_,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$2(p2__49158_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"export-md-indent-style","export-md-indent-style",481813710),indent_style,new cljs.core.Keyword(null,"export-md-remove-options","export-md-remove-options",-1015252352),remove_options], null)),JSON.stringify(cljs.core.clj__GT_js(p3__49159_SHARP_)));
}));
});
frontend.handler.export$.export_blocks_as_html = (function frontend$handler$export$export_blocks_as_html(repo,root_block_uuids){
return frontend.handler.export$.export_blocks_as_aux(repo,root_block_uuids,(function (p1__49162_SHARP_,p2__49163_SHARP_,p3__49164_SHARP_){
return frontend.format.mldoc_record.frontend$format$protocol$Format$toHtml$arity$4(null,p1__49162_SHARP_,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(p2__49163_SHARP_),JSON.stringify(cljs.core.clj__GT_js(p3__49164_SHARP_)));
}));
});
frontend.handler.export$.get_file_contents_with_suffix = (function frontend$handler$export$get_file_contents_with_suffix(repo){
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var md_files = frontend.handler.export$.get_md_file_contents(repo);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49170){
var vec__49171 = p__49170;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49171,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49171,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"names","names",-1943074658),(function (){var G__49174 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Symbol(null,"?n2","?n2",1059960511,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?n2","?n2",1059960511,null)], null)], null);
var G__49175 = db;
var G__49176 = path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__49174,G__49175,G__49176) : datascript.core.q.call(null,G__49174,G__49175,G__49176));
})(),new cljs.core.Keyword(null,"format","format",-1306924766),logseq.graph_parser.util.get_format(path)], null);
}),md_files);
});
frontend.handler.export$.export_repo_as_markdown_BANG_ = (function frontend$handler$export$export_repo_as_markdown_BANG_(repo){
var temp__5720__auto__ = frontend.handler.export$.get_file_contents_with_suffix(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var files = temp__5720__auto__;
var heading_to_list_QMARK_ = frontend.state.export_heading_to_list_QMARK_();
var files__$1 = frontend.handler.export$.export_files_as_markdown(repo,files,heading_to_list_QMARK_);
var zip_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"_markdown_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot(frontend.util.time_ms(),(1000)))].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zip.make_zip(zip_file_name,files__$1,repo),(function (zipfile){
return promesa.protocols._promise((function (){var temp__5720__auto____$1 = goog.dom.getElement("export-as-markdown");
if(cljs.core.truth_(temp__5720__auto____$1)){
var anchor = temp__5720__auto____$1;
anchor.setAttribute("href",window.URL.createObjectURL(zipfile));

anchor.setAttribute("download",zipfile.name);

return anchor.click();
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.export$.export_repo_as_opml_BANG_ = (function frontend$handler$export$export_repo_as_opml_BANG_(repo){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo__$1 = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.handler.export$.get_file_contents_with_suffix(repo__$1);
if(cljs.core.truth_(temp__5720__auto____$1)){
var files = temp__5720__auto____$1;
var files__$1 = frontend.handler.export$.export_files_as_opml(repo__$1,files);
var zip_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo__$1),"_opml_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot(frontend.util.time_ms(),(1000)))].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zip.make_zip(zip_file_name,files__$1,repo__$1),(function (zipfile){
return promesa.protocols._promise((function (){var temp__5720__auto____$2 = goog.dom.getElement("export-as-opml");
if(cljs.core.truth_(temp__5720__auto____$2)){
var anchor = temp__5720__auto____$2;
anchor.setAttribute("href",window.URL.createObjectURL(zipfile));

anchor.setAttribute("download",zipfile.name);

return anchor.click();
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.export$.dissoc_properties = (function frontend$handler$export$dissoc_properties(m,ks){
if(cljs.core.truth_(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("block","properties","block/properties",708347145),(function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,v,ks);
}));
} else {
return m;
}
});
frontend.handler.export$.nested_select_keys = (function frontend$handler$export$nested_select_keys(keyseq,vec_tree){
return clojure.walk.postwalk((function (x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552))))){
return cljs.core.select_keys(frontend.handler.export$.dissoc_properties(clojure.set.rename_keys(x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","id","block/id",-1461684825),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","page-name","block/page-name",780489999)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)),keyseq);
} else {
return x;

}
}),vec_tree);
});
frontend.handler.export$.blocks = (function frontend$handler$export$blocks(db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(1),new cljs.core.Keyword(null,"blocks","blocks",-610462153),frontend.handler.export$.nested_select_keys(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","id","block/id",-1461684825),new cljs.core.Keyword("block","page-name","block/page-name",780489999),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","heading-level","block/heading-level",661361785),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","content","block/content",-161885195)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49179){
var vec__49180 = p__49179;
var map__49183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49180,(0),null);
var map__49183__$1 = cljs.core.__destructure_map(map__49183);
var page = map__49183__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49183__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var blocks = (function (){var G__49186 = frontend.state.get_current_repo();
var G__49187 = name;
var G__49188 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform?","transform?",-2042672609),false], null);
return (frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(G__49186,G__49187,G__49188) : frontend.db.get_page_blocks_no_cache.call(null,G__49186,G__49187,G__49188));
})();
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
if(cljs.core.seq(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","content","block/content",-161885195),(function (content){
return frontend.util.property.remove_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(b),content);
}));
} else {
return b;
}
}),blocks);
var children = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks_SINGLEQUOTE_,name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","children","block/children",-1040716209),children);
}),(function (){var G__49191 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","file","block/file",183171933)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null);
var G__49192 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__49191,G__49192) : datascript.core.q.call(null,G__49191,G__49192));
})()))], null);
});
frontend.handler.export$.file_name = (function frontend$handler$export$file_name(repo,extension){
return [[clojure.string.replace(clojure.string.replace(repo,frontend.config.local_db_prefix,""),/^\/+/,""),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot(frontend.util.time_ms(),(1000)))].join(''),".",clojure.string.lower_case(cljs.core.name(extension))].join('');
});
frontend.handler.export$.export_repo_as_edn_str = (function frontend$handler$export$export_repo_as_edn_str(repo){
var temp__5720__auto__ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var sb = (new goog.string.StringBuffer());
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.blocks(db),(new cljs.core.StringBufferWriter(sb)));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
});
frontend.handler.export$.export_repo_as_edn_v2_BANG_ = (function frontend$handler$export$export_repo_as_edn_v2_BANG_(repo){
var temp__5720__auto__ = (function (){var G__49198 = frontend.handler.export$.export_repo_as_edn_str(repo);
var G__49198__$1 = (((G__49198 == null))?null:encodeURIComponent(G__49198));
if((G__49198__$1 == null)){
return null;
} else {
return ["data:text/edn;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49198__$1)].join('');
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var data_str = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement("download-as-edn-v2");
if(cljs.core.truth_(temp__5720__auto____$1)){
var anchor = temp__5720__auto____$1;
anchor.setAttribute("href",data_str);

anchor.setAttribute("download",frontend.handler.export$.file_name(repo,new cljs.core.Keyword(null,"edn","edn",1317840885)));

return anchor.click();
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.export$.nested_update_id = (function frontend$handler$export$nested_update_id(vec_tree){
return clojure.walk.postwalk((function (x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword("block","id","block/id",-1461684825))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword("block","id","block/id",-1461684825),cljs.core.str);
} else {
return x;
}
}),vec_tree);
});
frontend.handler.export$.export_repo_as_json_v2_BANG_ = (function frontend$handler$export$export_repo_as_json_v2_BANG_(repo){
var temp__5720__auto__ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var json_str = JSON.stringify(cljs.core.clj__GT_js(frontend.handler.export$.nested_update_id(frontend.handler.export$.blocks(db))));
var data_str = ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(json_str))].join('');
var temp__5720__auto____$1 = goog.dom.getElement("download-as-json-v2");
if(cljs.core.truth_(temp__5720__auto____$1)){
var anchor = temp__5720__auto____$1;
anchor.setAttribute("href",data_str);

anchor.setAttribute("download",frontend.handler.export$.file_name(repo,new cljs.core.Keyword(null,"json","json",1279968570)));

return anchor.click();
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.export$.roam_json = (function frontend$handler$export$roam_json(db){
return frontend.external.roam_export.traverse(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","title","page/title",628894782),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","children","block/children",-1040716209)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49202){
var vec__49203 = p__49202;
var map__49206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49203,(0),null);
var map__49206__$1 = cljs.core.__destructure_map(map__49206);
var page = map__49206__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49206__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","children","block/children",-1040716209),frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((function (){var G__49207 = frontend.state.get_current_repo();
var G__49208 = name;
var G__49209 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform?","transform?",-2042672609),false], null);
return (frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(G__49207,G__49208,G__49209) : frontend.db.get_page_blocks_no_cache.call(null,G__49207,G__49208,G__49209));
})(),name));
}),(function (){var G__49210 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","file","block/file",183171933)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null);
var G__49211 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__49210,G__49211) : datascript.core.q.call(null,G__49210,G__49211));
})()));
});
frontend.handler.export$.export_repo_as_roam_json_BANG_ = (function frontend$handler$export$export_repo_as_roam_json_BANG_(repo){
var temp__5720__auto__ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var json_str = JSON.stringify(cljs.core.clj__GT_js(frontend.handler.export$.roam_json(db)));
var data_str = ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(json_str))].join('');
var temp__5720__auto____$1 = goog.dom.getElement("download-as-roam-json");
if(cljs.core.truth_(temp__5720__auto____$1)){
var anchor = temp__5720__auto____$1;
anchor.setAttribute("href",data_str);

anchor.setAttribute("download",frontend.handler.export$.file_name([cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"_roam"].join(''),new cljs.core.Keyword(null,"json","json",1279968570)));

return anchor.click();
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.export.js.map
