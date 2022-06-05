goog.provide('frontend.components.page_menu');
frontend.components.page_menu.delete_page_BANG_ = (function frontend$components$page_menu$delete_page_BANG_(page_name){
frontend.handler.page.delete_BANG_(page_name,(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)," was deleted successfully!"].join(''),new cljs.core.Keyword(null,"success","success",1890645906));
}));

frontend.state.close_modal_BANG_();

return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
});
frontend.components.page_menu.delete_page_dialog = (function frontend$components$page_menu$delete_page_dialog(page_name){
return (function (close_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:flex.items-center","div.sm:flex.items-center",1228718030),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100.sm:mx-0.sm:h-10.sm:w-10","div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100.sm:mx-0.sm:h-10.sm:w-10",-669226852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-red-600.text-xl","span.text-red-600.text-xl",812982760),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("alert-triangle")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left","div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left",-1344715931),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#modal-headline.text-lg.leading-6.font-medium","h3#modal-headline.text-lg.leading-6.font-medium",365314317),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","delete-confirmation","page/delete-confirmation",-1967752819)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-5.sm:mt-4.sm:flex.sm:flex-row-reverse","div.mt-5.sm:mt-4.sm:flex.sm:flex-row-reverse",-1307936908),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.w-full.rounded-md.shadow-sm.sm:ml-3.sm:w-auto","span.flex.w-full.rounded-md.shadow-sm.sm:ml-3.sm:w-auto",-1268089695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-indigo-600.text-base.leading-6.font-medium.text-white.shadow-sm.hover:bg-indigo-500.focus:outline-none.focus:border-indigo-700.focus:shadow-outline-indigo.transition.ease-in-out.duration-150.sm:text-sm.sm:leading-5","button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-indigo-600.text-base.leading-6.font-medium.text-white.shadow-sm.hover:bg-indigo-500.focus:outline-none.focus:border-indigo-700.focus:shadow-outline-indigo.transition.ease-in-out.duration-150.sm:text-sm.sm:leading-5",-1650114762),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"ui__modal-enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.page_menu.delete_page_BANG_(page_name);
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mt-3.flex.w-full.rounded-md.shadow-sm.sm:mt-0.sm:w-auto","span.mt-3.flex.w-full.rounded-md.shadow-sm.sm:mt-0.sm:w-auto",287579251),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.inline-flex.justify-center.w-full.rounded-md.border.border-gray-300.px-4.py-2.bg-white.text-base.leading-6.font-medium.text-gray-700.shadow-sm.hover:text-gray-500.focus:outline-none.focus:border-blue-300.focus:shadow-outline-blue.transition.ease-in-out.duration-150.sm:text-sm.sm:leading-5","button.inline-flex.justify-center.w-full.rounded-md.border.border-gray-300.px-4.py-2.bg-white.text-base.leading-6.font-medium.text-gray-700.shadow-sm.hover:text-gray-500.focus:outline-none.focus:border-blue-300.focus:shadow-outline-blue.transition.ease-in-out.duration-150.sm:text-sm.sm:leading-5",1735989148),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], 0))], null)], null)], null)], null);
});
});
frontend.components.page_menu.page_menu = (function frontend$components$page_menu$page_menu(page_name){
var temp__5720__auto__ = (function (){var or__5043__auto__ = page_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_current_page();
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page_name__$1 = temp__5720__auto__;
var page_name__$2 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name__$1) : frontend.util.page_name_sanity_lc.call(null,page_name__$1));
var repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var page = (function (){var G__56640 = repo;
var G__56641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$2], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__56640,G__56641) : frontend.db.entity.call(null,G__56640,G__56641));
})();
var page_original_name = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var block_QMARK_ = (function (){var and__5041__auto__ = page;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.uuid_string_QMARK_(page_name__$2);
} else {
return and__5041__auto__;
}
})();
var contents_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name__$2,"contents");
var properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page);
var public_QMARK_ = new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(properties) === true;
var favorites = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_graph_config());
var favorited_QMARK_ = cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc,favorites)),page_name__$2);
var developer_mode_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null));
var file_path = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$0():null);
var _ = frontend.state.sub(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
if(cljs.core.truth_((function (){var and__5041__auto__ = page;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(block_QMARK_);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),((favorited_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","unfavorite","page/unfavorite",578994300)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","add-to-favorites","page/add-to-favorites",-641181093)], 0))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(favorited_QMARK_){
return frontend.handler.page.unfavorite_page_BANG_(page_original_name);
} else {
return frontend.handler.page.favorite_page_BANG_(page_original_name);
}
})], null)], null),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","presentation-mode","page/presentation-mode",-1412639182)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_add_block_BANG_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page-presentation","page-presentation",-990885298));
})], null)], null)),(cljs.core.truth_(file_path)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","open-in-finder","page/open-in-finder",-891703594)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.apis.showItemInFolder(file_path);
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","open-with-default-app","page/open-with-default-app",2097221682)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.apis.openPath(file_path);
})], null)], null)], null):null),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","copy-page-url","page/copy-page-url",-1474029803)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.util.url.get_logseq_graph_page_url.cljs$core$IFn$_invoke$arity$3(null,repo,page_original_name));
})], null)], null):null),((contents_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","delete","page/delete",-1774686917)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.page_menu.delete_page_dialog(page_name__$2));
})], null)], null)),(cljs.core.truth_(frontend.state.get_current_page())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"export-page","export-page",-2087621584)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.export$.export_blocks(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)], null));
}));
})], null)], null):null),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((public_QMARK_)?new cljs.core.Keyword("page","make-private","page/make-private",1298627280):new cljs.core.Keyword("page","make-public","page/make-public",1736118164))], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.handler.page.update_public_attribute_BANG_(page_name__$2,((public_QMARK_)?false:true));

return frontend.state.close_modal_BANG_();
})], null)], null):null),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","version-history","page/version-history",-664927562)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.shell.get_file_latest_git_log(page,(100));
})], null)], null):null),((((frontend.handler.user.logged_in_QMARK_()) && ((!(frontend.handler.file_sync.hiding_login_AMPERSAND_file_sync)))))?(function (){var temp__5720__auto____$1 = frontend.handler.file_sync.get_current_graph_uuid();
if(cljs.core.truth_(temp__5720__auto____$1)){
var graph_uuid = temp__5720__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","file-sync-versions","page/file-sync-versions",-599756838)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.file_sync.list_file_versions(graph_uuid,page);
})], null)], null);
} else {
return null;
}
})():null),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return file_path;
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","open-backup-directory","page/open-backup-directory",-197993503)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openFileBackupDir",frontend.config.get_local_dir(repo),file_path], 0));
})], null)], null):null),(cljs.core.truth_(frontend.handler.plugin.lsp_enabled_QMARK_)?(function (){var iter__5520__auto__ = (function frontend$components$page_menu$page_menu_$_iter__56657(s__56658){
return (new cljs.core.LazySeq(null,(function (){
var s__56658__$1 = s__56658;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__56658__$1);
if(temp__5720__auto____$1){
var s__56658__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56658__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__56658__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__56660 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__56659 = (0);
while(true){
if((i__56659 < size__5519__auto__)){
var vec__56662 = cljs.core._nth(c__5518__auto__,i__56659);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56662,(0),null);
var map__56665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56662,(1),null);
var map__56665__$1 = cljs.core.__destructure_map(map__56665);
var cmd = map__56665__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56665__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56662,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56662,(3),null);
cljs.core.chunk_append(b__56660,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),label,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56659,vec__56662,___$1,map__56665,map__56665__$1,cmd,label,action,pid,c__5518__auto__,size__5519__auto__,b__56660,s__56658__$2,temp__5720__auto____$1,page_name__$2,repo,page,page_original_name,block_QMARK_,contents_QMARK_,properties,public_QMARK_,favorites,favorited_QMARK_,developer_mode_QMARK_,file_path,_,page_name__$1,temp__5720__auto__){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"page","page",849072397),page_name__$2),action);
});})(i__56659,vec__56662,___$1,map__56665,map__56665__$1,cmd,label,action,pid,c__5518__auto__,size__5519__auto__,b__56660,s__56658__$2,temp__5720__auto____$1,page_name__$2,repo,page,page_original_name,block_QMARK_,contents_QMARK_,properties,public_QMARK_,favorites,favorited_QMARK_,developer_mode_QMARK_,file_path,_,page_name__$1,temp__5720__auto__))
], null)], null));

var G__56679 = (i__56659 + (1));
i__56659 = G__56679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56660),frontend$components$page_menu$page_menu_$_iter__56657(cljs.core.chunk_rest(s__56658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56660),null);
}
} else {
var vec__56666 = cljs.core.first(s__56658__$2);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56666,(0),null);
var map__56669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56666,(1),null);
var map__56669__$1 = cljs.core.__destructure_map(map__56669);
var cmd = map__56669__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56669__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56666,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56666,(3),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),label,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__56666,___$1,map__56669,map__56669__$1,cmd,label,action,pid,s__56658__$2,temp__5720__auto____$1,page_name__$2,repo,page,page_original_name,block_QMARK_,contents_QMARK_,properties,public_QMARK_,favorites,favorited_QMARK_,developer_mode_QMARK_,file_path,_,page_name__$1,temp__5720__auto__){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"page","page",849072397),page_name__$2),action);
});})(vec__56666,___$1,map__56669,map__56669__$1,cmd,label,action,pid,s__56658__$2,temp__5720__auto____$1,page_name__$2,repo,page,page_original_name,block_QMARK_,contents_QMARK_,properties,public_QMARK_,favorites,favorited_QMARK_,developer_mode_QMARK_,file_path,_,page_name__$1,temp__5720__auto__))
], null)], null),frontend$components$page_menu$page_menu_$_iter__56657(cljs.core.rest(s__56658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.state.get_plugins_commands_with_type(new cljs.core.Keyword(null,"page-menu-item","page-menu-item",1913872913)));
})():null),(cljs.core.truth_(developer_mode_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"(Dev) Show page data",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var page_data = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56670_56680 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56671_56681 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56672_56682 = true;
var _STAR_print_fn_STAR__temp_val__56673_56683 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56672_56682);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56673_56683);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((function (){var G__56675 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__56675) : frontend.db.pull.call(null,G__56675));
})());
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56671_56681);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56670_56680);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_data], 0));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),page_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Copy to clipboard",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return navigator.clipboard.writeText(page_data);
})], 0))], null),new cljs.core.Keyword(null,"success","success",1890645906),false);
})], null)], null):null)], null)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.components.page_menu.js.map
