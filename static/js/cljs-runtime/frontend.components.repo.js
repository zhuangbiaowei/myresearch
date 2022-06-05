goog.provide('frontend.components.repo');
goog.scope(function(){
  frontend.components.repo.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.repo.add_repo = rum.core.lazy_build(rum.core.build_defc,(function (args){
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"graph-types","graph-types",-1372538535)], null));
if(cljs.core.truth_(temp__5718__auto__)){
var graph_types = temp__5718__auto__;
var graph_types_s = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(graph_types,/,/));
if(cljs.core.seq(graph_types_s)){
return frontend.components.widgets.add_graph(new cljs.core.Keyword(null,"graph-types","graph-types",-1372538535),graph_types_s);
} else {
return null;
}
} else {
return frontend.components.widgets.add_graph();
}
})());
}),null,"frontend.components.repo/add-repo");
frontend.components.repo.repos = rum.core.lazy_build(rum.core.build_defc,(function (){
var repos = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58633_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__58633_SHARP_),frontend.config.local_repo);
}),frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null)));
var repos__$1 = frontend.util.distinct_by(new cljs.core.Keyword(null,"url","url",276297046),repos);
if(cljs.core.seq(repos__$1)){
return daiquiri.core.create_element("div",{'id':"graphs"},[daiquiri.core.create_element("h1",{'className':"title"},["All Graphs"]),daiquiri.core.create_element("p",{'className':"ml-2 opacity-70"},["A \"graph\" in Logseq means a local directory."]),daiquiri.core.create_element("div",{'className':"pl-1 content mt-3"},[(function (){var attrs58642 = (cljs.core.truth_((function (){var or__5043__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-8","div.mr-8",674865009),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"open-a-directory","open-a-directory",981257354)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_(frontend.modules.shortcut.core.refresh_BANG_);
})], 0))], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58642))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","my-4"], null)], null),attrs58642], 0))):{'className':"flex flex-row my-4"}),((cljs.core.map_QMARK_(attrs58642))?null:[daiquiri.interpreter.interpret(attrs58642)]));
})(),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$repo$iter__58647(s__58648){
return (new cljs.core.LazySeq(null,(function (){
var s__58648__$1 = s__58648;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58648__$1);
if(temp__5720__auto__){
var s__58648__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58648__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58648__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58650 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58649 = (0);
while(true){
if((i__58649 < size__5519__auto__)){
var map__58651 = cljs.core._nth(c__5518__auto__,i__58649);
var map__58651__$1 = cljs.core.__destructure_map(map__58651);
var repo = map__58651__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append(b__58650,(function (){var local_QMARK_ = frontend.config.local_db_QMARK_(url);
return daiquiri.core.create_element("div",{'key':id,'className':"flex justify-between mb-4"},[((local_QMARK_)?(function (){var local_dir = frontend.config.get_local_dir(url);
var graph_name = frontend.util.text.get_graph_name_from_path(local_dir);
return daiquiri.core.create_element("a",{'title':local_dir,'onClick':((function (i__58649,local_dir,graph_name,local_QMARK_,map__58651,map__58651__$1,repo,id,url,c__5518__auto__,size__5519__auto__,b__58650,s__58648__$2,temp__5720__auto__,repos,repos__$1){
return (function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),url], null));
});})(i__58649,local_dir,graph_name,local_QMARK_,map__58651,map__58651__$1,repo,id,url,c__5518__auto__,size__5519__auto__,b__58650,s__58648__$2,temp__5720__auto__,repos,repos__$1))
},[graph_name]);
})():daiquiri.core.create_element("a",{'target':"_blank",'href':url},[daiquiri.interpreter.interpret((frontend.db.get_repo_path.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_repo_path.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.get_repo_path.call(null,url)))])),(function (){var attrs58656 = (cljs.core.truth_(frontend.encrypt.encrypted_db_QMARK_(url))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.control","a.control",1833131627),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Show encryption information about this graph",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58649,local_QMARK_,map__58651,map__58651__$1,repo,id,url,c__5518__auto__,size__5519__auto__,b__58650,s__58648__$2,temp__5720__auto__,repos,repos__$1){
return (function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.encryption.encryption_dialog(url));
});})(i__58649,local_QMARK_,map__58651,map__58651__$1,repo,id,url,c__5518__auto__,size__5519__auto__,b__58650,s__58648__$2,temp__5720__auto__,repos,repos__$1))
], null),"\uD83D\uDD10"], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58656))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["controls"], null)], null),attrs58656], 0))):{'className':"controls"}),((cljs.core.map_QMARK_(attrs58656))?[daiquiri.core.create_element("a",{'title':"No worries, unlink this graph will clear its cache only, it does not remove your files on the disk.",'onClick':((function (i__58649,attrs58656,local_QMARK_,map__58651,map__58651__$1,repo,id,url,c__5518__auto__,size__5519__auto__,b__58650,s__58648__$2,temp__5720__auto__,repos,repos__$1){
return (function (){
return frontend.handler.repo.remove_repo_BANG_(repo);
});})(i__58649,attrs58656,local_QMARK_,map__58651,map__58651__$1,repo,id,url,c__5518__auto__,size__5519__auto__,b__58650,s__58648__$2,temp__5720__auto__,repos,repos__$1))
,'className':"text-gray-400 ml-4 font-medium text-sm"},["Unlink"])]:[daiquiri.interpreter.interpret(attrs58656),daiquiri.core.create_element("a",{'title':"No worries, unlink this graph will clear its cache only, it does not remove your files on the disk.",'onClick':((function (i__58649,attrs58656,local_QMARK_,map__58651,map__58651__$1,repo,id,url,c__5518__auto__,size__5519__auto__,b__58650,s__58648__$2,temp__5720__auto__,repos,repos__$1){
return (function (){
return frontend.handler.repo.remove_repo_BANG_(repo);
});})(i__58649,attrs58656,local_QMARK_,map__58651,map__58651__$1,repo,id,url,c__5518__auto__,size__5519__auto__,b__58650,s__58648__$2,temp__5720__auto__,repos,repos__$1))
,'className':"text-gray-400 ml-4 font-medium text-sm"},["Unlink"])]));
})()]);
})());

var G__58706 = (i__58649 + (1));
i__58649 = G__58706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58650),frontend$components$repo$iter__58647(cljs.core.chunk_rest(s__58648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58650),null);
}
} else {
var map__58660 = cljs.core.first(s__58648__$2);
var map__58660__$1 = cljs.core.__destructure_map(map__58660);
var repo = map__58660__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons((function (){var local_QMARK_ = frontend.config.local_db_QMARK_(url);
return daiquiri.core.create_element("div",{'key':id,'className':"flex justify-between mb-4"},[((local_QMARK_)?(function (){var local_dir = frontend.config.get_local_dir(url);
var graph_name = frontend.util.text.get_graph_name_from_path(local_dir);
return daiquiri.core.create_element("a",{'title':local_dir,'onClick':((function (local_dir,graph_name,local_QMARK_,map__58660,map__58660__$1,repo,id,url,s__58648__$2,temp__5720__auto__,repos,repos__$1){
return (function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),url], null));
});})(local_dir,graph_name,local_QMARK_,map__58660,map__58660__$1,repo,id,url,s__58648__$2,temp__5720__auto__,repos,repos__$1))
},[graph_name]);
})():daiquiri.core.create_element("a",{'target':"_blank",'href':url},[daiquiri.interpreter.interpret((frontend.db.get_repo_path.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_repo_path.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.get_repo_path.call(null,url)))])),(function (){var attrs58656 = (cljs.core.truth_(frontend.encrypt.encrypted_db_QMARK_(url))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.control","a.control",1833131627),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Show encryption information about this graph",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (local_QMARK_,map__58660,map__58660__$1,repo,id,url,s__58648__$2,temp__5720__auto__,repos,repos__$1){
return (function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.encryption.encryption_dialog(url));
});})(local_QMARK_,map__58660,map__58660__$1,repo,id,url,s__58648__$2,temp__5720__auto__,repos,repos__$1))
], null),"\uD83D\uDD10"], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58656))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["controls"], null)], null),attrs58656], 0))):{'className':"controls"}),((cljs.core.map_QMARK_(attrs58656))?[daiquiri.core.create_element("a",{'title':"No worries, unlink this graph will clear its cache only, it does not remove your files on the disk.",'onClick':((function (attrs58656,local_QMARK_,map__58660,map__58660__$1,repo,id,url,s__58648__$2,temp__5720__auto__,repos,repos__$1){
return (function (){
return frontend.handler.repo.remove_repo_BANG_(repo);
});})(attrs58656,local_QMARK_,map__58660,map__58660__$1,repo,id,url,s__58648__$2,temp__5720__auto__,repos,repos__$1))
,'className':"text-gray-400 ml-4 font-medium text-sm"},["Unlink"])]:[daiquiri.interpreter.interpret(attrs58656),daiquiri.core.create_element("a",{'title':"No worries, unlink this graph will clear its cache only, it does not remove your files on the disk.",'onClick':((function (attrs58656,local_QMARK_,map__58660,map__58660__$1,repo,id,url,s__58648__$2,temp__5720__auto__,repos,repos__$1){
return (function (){
return frontend.handler.repo.remove_repo_BANG_(repo);
});})(attrs58656,local_QMARK_,map__58660,map__58660__$1,repo,id,url,s__58648__$2,temp__5720__auto__,repos,repos__$1))
,'className':"text-gray-400 ml-4 font-medium text-sm"},["Unlink"])]));
})()]);
})(),frontend$components$repo$iter__58647(cljs.core.rest(s__58648__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(repos__$1);
})())])]);
} else {
return frontend.components.widgets.add_graph();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.repo/repos");
frontend.components.repo.refresh_cb = (function frontend$components$repo$refresh_cb(){
frontend.handler.page.create_today_journal_BANG_();

return frontend.modules.shortcut.core.refresh_BANG_();
});
frontend.components.repo.check_multiple_windows_QMARK_ = (function frontend$components$repo$check_multiple_windows_QMARK_(state){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["graphHasMultipleWindows",frontend.state.get_current_repo()], 0)),(function (multiple_windows_QMARK_){
return promesa.protocols._promise(cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.repo","electron-multiple-windows?","frontend.components.repo/electron-multiple-windows?",-1493955536).cljs$core$IFn$_invoke$arity$1(state),multiple_windows_QMARK_));
}));
}));
} else {
return null;
}
});
frontend.components.repo.repos_dropdown_links = (function frontend$components$repo$repos_dropdown_links(repos,current_repo,_STAR_multiple_windows_QMARK_){
var switch_repos = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (repo){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo));
}),repos);
var repo_links = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__58673){
var map__58674 = p__58673;
var map__58674__$1 = cljs.core.__destructure_map(map__58674);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword(null,"url","url",276297046));
var repo_path = (frontend.db.get_repo_name.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_repo_name.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.get_repo_name.call(null,url));
var short_repo_name = frontend.util.text.get_graph_name_from_path(repo_path);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),short_repo_name,new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248),repo_path,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(frontend.components.repo.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),url], null));
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),url], null));
}
})], null)], null);
}),switch_repos);
var refresh_link = (function (){var nfs_repo_QMARK_ = frontend.config.local_db_QMARK_(current_repo);
if(cljs.core.truth_((function (){var and__5041__auto__ = nfs_repo_QMARK_;
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,frontend.config.local_repo);
if(and__5041__auto____$1){
var or__5043__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sync-from-local-files","sync-from-local-files",1514882504)], 0)),new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sync-from-local-files-detail","sync-from-local-files-detail",-231071564)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show","modal/show",-748944018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(700)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sync-from-local-changes-detected","sync-from-local-changes-detected",-1820421680)], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),"on",new cljs.core.Keyword(null,"large?","large?",1460879088),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_modal_BANG_();

return frontend.handler.web.nfs.refresh_BANG_(frontend.state.get_current_repo(),frontend.components.repo.refresh_cb);
})], 0))], null)], null));
})], null)], null);
} else {
return null;
}
})();
var reindex_link = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-index","re-index",-1408098109)], 0)),new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-index-detail","re-index-detail",555553184)], 0)),new cljs.core.Keyword(null,"options","options",99638489),(function (){var G__58675 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ask-for-re-index","graph/ask-for-re-index",2038098533),_STAR_multiple_windows_QMARK_], null));
})], null);
return G__58675;
})()], null);
var new_window_link = (cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"open-new-window","open-new-window",-483331731)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),null], null));
})], null)], null):null);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(repo_links,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(repo_links))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-graph","new-graph",1985980678)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_(frontend.modules.shortcut.core.refresh_BANG_);
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-graphs","all-graphs",-291694455)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repos","repos",647483789))], null)], null),refresh_link,reindex_link,new_window_link], null)));
});
frontend.components.repo.repos_dropdown = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var multiple_windows_QMARK_ = new cljs.core.Keyword("frontend.components.repo","electron-multiple-windows?","frontend.components.repo/electron-multiple-windows?",-1493955536).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
if(cljs.core.truth_(temp__5720__auto__)){
var current_repo = temp__5720__auto__;
var repos = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
var repos__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.config.local_repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r));
}),repos);
var links = frontend.components.repo.repos_dropdown_links(repos__$1,current_repo,multiple_windows_QMARK_);
var render_content = (function (p__58701){
var map__58702 = p__58701;
var map__58702__$1 = cljs.core.__destructure_map(map__58702);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
var repo_path = (frontend.db.get_repo_name.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_repo_name.cljs$core$IFn$_invoke$arity$1(current_repo) : frontend.db.get_repo_name.call(null,current_repo));
var short_repo_name = (frontend.db.get_short_repo_name.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_short_repo_name.cljs$core$IFn$_invoke$arity$1(repo_path) : frontend.db.get_short_repo_name.call(null,repo_path));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item.group.flex.items-center.px-1.py-2.text-sm.font-medium.rounded-md","a.item.group.flex.items-center.px-1.py-2.text-sm.font-medium.rounded-md",1426154081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.components.repo.check_multiple_windows_QMARK_(state);

return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
}),new cljs.core.Keyword(null,"title","title",636505583),repo_path], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("database mr-2",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null),new cljs.core.Keyword(null,"id","id",-1388402092),"database-icon"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graphs","div.graphs",2051391861),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#repo-switch.block.pr-2.whitespace-nowrap","span#repo-switch.block.pr-2.whitespace-nowrap",886377000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#repo-name.font-medium","span#repo-name.font-medium",-1930713868),short_repo_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown-caret.ml-2","span.dropdown-caret.ml-2",724124714),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top-color","border-top-color",-804629899),"#6b7280"], null)], null)], null)], null)], null)], null);
});
var links_header = (function (){var G__58703 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-class","modal-class",226435127),frontend.util.hiccup__GT_class("origin-top-right.absolute.left-0.mt-2.rounded-md.shadow-lg")], null);
if((cljs.core.count(repos__$1) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58703,new cljs.core.Keyword(null,"links-header","links-header",-1729119536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.text-sm.opacity-60.px-4.pt-2","div.font-medium.text-sm.opacity-60.px-4.pt-2",917690640),"Switch to:"], null));
} else {
return G__58703;
}
})();
if(cljs.core.seq(repos__$1)){
return frontend.ui.dropdown_with_links(render_content,links,links_header);
} else {
return null;
}
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.repo","electron-multiple-windows?","frontend.components.repo/electron-multiple-windows?",-1493955536))], null),"frontend.components.repo/repos-dropdown");

//# sourceMappingURL=frontend.components.repo.js.map
