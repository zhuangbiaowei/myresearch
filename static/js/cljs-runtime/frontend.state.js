goog.provide('frontend.state');
goog.scope(function(){
  frontend.state.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state.state !== 'undefined')){
} else {
frontend.state.state = (function (){var document_mode_QMARK_ = (function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
})();
var current_graph = (function (){var graph = frontend.storage.get(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
if(cljs.core.truth_(graph)){
electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setCurrentGraph",graph], 0));
} else {
}

return graph;
})();
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("file-sync","sync-manager","file-sync/sync-manager",49683808),new cljs.core.Keyword("mobile","toolbar-update-observer","mobile/toolbar-update-observer",-472907328),new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872),new cljs.core.Keyword("ui","fullscreen?","ui/fullscreen?",-1171714336),new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448),new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608),new cljs.core.Keyword("ui","root-component","ui/root-component",-1807033247),new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),new cljs.core.Keyword("reactive","query-dbs","reactive/query-dbs",1169865121),new cljs.core.Keyword("db","batch-txs","db/batch-txs",-1980845279),new cljs.core.Keyword("plugin","marketplace-stats","plugin/marketplace-stats",1801405730),new cljs.core.Keyword("mobile","show-tabbar?","mobile/show-tabbar?",925227298),new cljs.core.Keyword("graph","syncing?","graph/syncing?",-560055838),new cljs.core.Keyword("modal","subsets","modal/subsets",627467906),new cljs.core.Keyword("instrument","disabled?","instrument/disabled?",165654178),new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),new cljs.core.Keyword("editor","show-zotero","editor/show-zotero",-1834250749),new cljs.core.Keyword("search","mode","search/mode",1628111395),new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996),new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868),new cljs.core.Keyword("file-sync","sync-downloading-files","file-sync/sync-downloading-files",-961564347),new cljs.core.Keyword("ui","paths-scroll-positions","ui/paths-scroll-positions",1953998950),new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154),new cljs.core.Keyword("electron","auto-updater-downloaded","electron/auto-updater-downloaded",760067750),new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946),new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902),new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),new cljs.core.Keyword("file","writes","file/writes",-105376729),new cljs.core.Keyword("editor","document-mode?","editor/document-mode?",-2096420601),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("ui","command-palette-open?","ui/command-palette-open?",2033128967),new cljs.core.Keyword("selection","mode","selection/mode",-800590329),new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233),new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343),new cljs.core.Keyword("modal","id","modal/id",-1274892409),new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152),new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),new cljs.core.Keyword("document","mode?","document/mode?",-994203479),new cljs.core.Keyword("auth","access-token","auth/access-token",-657486615),new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943),new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),new cljs.core.Keyword("mobile","actioned-block","mobile/actioned-block",347869705),new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746),new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878),new cljs.core.Keyword("copy","blocks","copy/blocks",-611604822),new cljs.core.Keyword("file-sync","sync-uploading-files","file-sync/sync-uploading-files",-863119414),new cljs.core.Keyword("graph","parsing-state","graph/parsing-state",-1745487605),new cljs.core.Keyword("electron","updater","electron/updater",454456683),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword("search","result","search/result",443756363),new cljs.core.Keyword("plugin","active-readme","plugin/active-readme",-677043988),new cljs.core.Keyword("youtube","players","youtube/players",1844913740),new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220),new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267),new cljs.core.Keyword("view","components","view/components",-1071666675),new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),new cljs.core.Keyword("editor","args","editor/args",208005741),new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),new cljs.core.Keyword("encryption","graph-parsing?","encryption/graph-parsing?",1059330925),new cljs.core.Keyword("editor","block-dom-id","editor/block-dom-id",208740398),new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086),new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798),new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),new cljs.core.Keyword("file-sync","sync-state","file-sync/sync-state",-474069969),new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185),new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241),new cljs.core.Keyword("mobile","show-recording-bar?","mobile/show-recording-bar?",-758548785),new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529),new cljs.core.Keyword("file-sync","download-init-progress","file-sync/download-init-progress",-2078408753),new cljs.core.Keyword("plugin","indicator-text","plugin/indicator-text",-221282032),new cljs.core.Keyword("file-sync","sync-state-manager","file-sync/sync-state-manager",1938564368),new cljs.core.Keyword("editor","show-date-picker?","editor/show-date-picker?",216789264),new cljs.core.Keyword("plugin","navs-settings?","plugin/navs-settings?",-615901808),new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),new cljs.core.Keyword("srs","mode?","srs/mode?",-258295984),new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728),new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),new cljs.core.Keyword("selection","direction","selection/direction",1172907345),new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106),new cljs.core.Keyword(null,"draw?","draw?",1765298547),new cljs.core.Keyword("mobile","show-toolbar?","mobile/show-toolbar?",-1615839821),new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061),new cljs.core.Keyword("ui","custom-query-components","ui/custom-query-components",-2076809613),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581),new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869),new cljs.core.Keyword("editor","record-status","editor/record-status",-122164557),new cljs.core.Keyword("notification","content","notification/content",-436270189),new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180),new cljs.core.Keyword("nfs","refreshing?","nfs/refreshing?",-1285076588),new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),new cljs.core.Keyword("reactive","custom-queries","reactive/custom-queries",-213333931),new cljs.core.Keyword("editor","last-input-time","editor/last-input-time",-2008067915),new cljs.core.Keyword("electron","updater-pending?","electron/updater-pending?",-1675811595),new cljs.core.Keyword("editor","block","editor/block",1699377461),new cljs.core.Keyword("editor","draw-mode?","editor/draw-mode?",-1033068203),new cljs.core.Keyword("editor","content","editor/content",-756190443),new cljs.core.Keyword("network","online?","network/online?",1306822774),new cljs.core.Keyword("editor","show-page-search-hashtag?","editor/show-page-search-hashtag?",1934478614),new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178),new cljs.core.Keyword("notification","contents","notification/contents",-1760740618),new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151),new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111),new cljs.core.Keyword("modal","fullscreen?","modal/fullscreen?",-1344472297),new cljs.core.Keyword("block","component-editing-mode?","block/component-editing-mode?",-1744931560),new cljs.core.Keyword("search","q","search/q",-553992135),new cljs.core.Keyword("db","last-transact-time","db/last-transact-time",1752337529),new cljs.core.Keyword("ui","show-recent?","ui/show-recent?",927656089),new cljs.core.Keyword("indexeddb","support?","indexeddb/support?",114020185),new cljs.core.Keyword(null,"journals-length","journals-length",1463764186),new cljs.core.Keyword("db","persisted?","db/persisted?",-1110314694),new cljs.core.Keyword("modal","show?","modal/show?",1441869594),new cljs.core.Keyword("repo","loading-files?","repo/loading-files?",196666138),new cljs.core.Keyword("nfs","user-granted?","nfs/user-granted?",-1655101253),new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677),new cljs.core.Keyword("system","events","system/events",-1178951588),new cljs.core.Keyword("notification","show?","notification/show?",2024447580),new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492),new cljs.core.Keyword("ui","file-component","ui/file-component",-1447074212),new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236),new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235),new cljs.core.Keyword("modal","label","modal/label",-1776753955),new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197),new cljs.core.Keyword("format","loading","format/loading",-2001626722),new cljs.core.Keyword("editor","in-composition?","editor/in-composition?",-259037730),new cljs.core.Keyword("command-palette","commands","command-palette/commands",-168367617)],[null,(0),null,false,null,false,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100)),null,false,false,cljs.core.PersistentVector.EMPTY,frontend.storage.get("instrument-disabled"),null,cljs.core.PersistentVector.EMPTY,null,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"light"], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"dark"], null)], null);
}
})(),false,new cljs.core.Keyword(null,"global","global",93595047),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null,false,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var or__5043__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.util.win32_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return false;
}
}
})())(frontend.storage.get(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822))),null,false,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100)),document_mode_QMARK_,cljs.core.PersistentArrayMap.EMPTY,false,false,null,false,null,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,document_mode_QMARK_,null,false,false,cljs.core.PersistentArrayMap.EMPTY,null,null,current_graph,null,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.storage.get("developer-mode"),"true")) || (false)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("copy","content","copy/content",12765453),null,new cljs.core.Keyword("copy","block-ids","copy/block-ids",560775165),null,new cljs.core.Keyword("copy","graph","copy/graph",1554769580),null], null),null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,false,null,((frontend.storage.get(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086)) === false)?false:true),null,cljs.core.PersistentArrayMap.EMPTY,null,null,null,null,false,(function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,true)(frontend.storage.get(new cljs.core.Keyword(null,"lsp-core-enabled","lsp-core-enabled",-14878186)));
} else {
return and__5041__auto__;
}
})(),null,null,null,false,true,false,false,cljs.core.boolean$(frontend.storage.get("ls-left-sidebar-open?")),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"down","down",1565245570),false,false,false,frontend.storage.get(new cljs.core.Keyword("ui","wide-mode","ui/wide-mode",2105536944)),cljs.core.PersistentArrayMap.EMPTY,cljs.core.List.EMPTY,null,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),"NONE",null,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "dashes";
}
})(),null,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "light";
}
})(),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100)),null,false,null,false,cljs.core.PersistentArrayMap.EMPTY,true,false,null,cljs.core.PersistentArrayMap.EMPTY,null,frontend.storage.get(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)),null,cljs.core.PersistentHashSet.EMPTY,false,false,"",cljs.core.PersistentArrayMap.EMPTY,false,true,(3),cljs.core.PersistentArrayMap.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,false,null,null,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100)),false,null,null,null,cljs.core.PersistentArrayMap.EMPTY,"",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,false,cljs.core.PersistentVector.EMPTY]));
})();
}
frontend.state.blocks_ast_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.state.add_block_ast_cache_BANG_ = (function frontend$state$add_block_ast_cache_BANG_(block_uuid,content,ast){
if(cljs.core.truth_((function (){var and__5041__auto__ = block_uuid;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = content;
if(cljs.core.truth_(and__5041__auto____$1)){
return ast;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var new_value = cljs.core.assoc_in(cljs.core.deref(frontend.state.blocks_ast_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_uuid,content], null),ast);
var new_value__$1 = (((cljs.core.count(new_value) > (10000)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5000),new_value)):new_value);
return cljs.core.reset_BANG_(frontend.state.blocks_ast_cache,new_value__$1);
} else {
return null;
}
});
frontend.state.get_block_ast = (function frontend$state$get_block_ast(block_uuid,content){
if(cljs.core.truth_((function (){var and__5041__auto__ = block_uuid;
if(cljs.core.truth_(and__5041__auto__)){
return content;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.blocks_ast_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_uuid,content], null));
} else {
return null;
}
});
frontend.state.sub = (function frontend$state$sub(ks){
if(cljs.core.coll_QMARK_(ks)){
return frontend.util.react(rum.core.cursor_in(frontend.state.state,ks));
} else {
return frontend.util.react(rum.core.cursor(frontend.state.state,ks));
}
});
frontend.state.get_route_match = (function frontend$state$get_route_match(){
return new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_current_route = (function frontend$state$get_current_route(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
frontend.state.home_QMARK_ = (function frontend$state$home_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),frontend.state.get_current_route());
});
frontend.state.setups_picker_QMARK_ = (function frontend$state$setups_picker_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo-add","repo-add",458734484),frontend.state.get_current_route());
});
frontend.state.get_current_page = (function frontend$state$get_current_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),frontend.state.get_current_route())){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));
} else {
return null;
}
});
frontend.state.route_has_p_QMARK_ = (function frontend$state$route_has_p_QMARK_(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"p","p",151049309)], null));
});
frontend.state.set_state_BANG_ = (function frontend$state$set_state_BANG_(path,value){
if(cljs.core.vector_QMARK_(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,path,value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,path,value);
}
});
frontend.state.update_state_BANG_ = (function frontend$state$update_state_BANG_(path,f){
if(cljs.core.vector_QMARK_(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update_in,path,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update,path,f);
}
});
frontend.state.get_current_repo = (function frontend$state$get_current_repo(){
var or__5043__auto__ = new cljs.core.Keyword("git","current-repo","git/current-repo",107438825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return null;
} else {
return "local";
}
}
});
frontend.state.get_config = (function frontend$state$get_config(var_args){
var G__58742 = arguments.length;
switch (G__58742) {
case 0:
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo_url], null));
}));

(frontend.state.get_config.cljs$lang$maxFixedArity = 1);

frontend.state.default_arweave_gateway = "https://arweave.net";
frontend.state.get_arweave_gateway = (function frontend$state$get_arweave_gateway(){
return new cljs.core.Keyword("arweave","gateway","arweave/gateway",-473231712).cljs$core$IFn$_invoke$arity$2(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),frontend.state.default_arweave_gateway);
});
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state.built_in_macros !== 'undefined')){
} else {
frontend.state.built_in_macros = new cljs.core.PersistentArrayMap(null, 1, ["img","[:img.$4 {:src \"$1\" :style {:width $2 :height $3}}]"], null);
}
frontend.state.get_macros = (function frontend$state$get_macros(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.built_in_macros,new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0())], 0));
});
frontend.state.sub_config = (function frontend$state$sub_config(){
return frontend.state.sub(new cljs.core.Keyword(null,"config","config",994861415));
});
frontend.state.get_custom_css_link = (function frontend$state$get_custom_css_link(){
return new cljs.core.Keyword(null,"custom-css-url","custom-css-url",442165452).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.get_custom_js_link = (function frontend$state$get_custom_js_link(){
return new cljs.core.Keyword(null,"custom-js-url","custom-js-url",1268122982).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.get_default_journal_template = (function frontend$state$get_default_journal_template(){
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-templates","default-templates",1374700421),new cljs.core.Keyword(null,"journals","journals",-1915761091)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var template = temp__5720__auto__;
if(clojure.string.blank_QMARK_(template)){
return null;
} else {
return clojure.string.trim(template);
}
} else {
return null;
}
});
frontend.state.all_pages_public_QMARK_ = (function frontend$state$all_pages_public_QMARK_(){
var value = new cljs.core.Keyword("publishing","all-pages-public?","publishing/all-pages-public?",-386830034).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var value__$1 = (((!((value == null))))?value:new cljs.core.Keyword(null,"all-pages-public?","all-pages-public?",-1773298253).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()));
return value__$1 === true;
});
frontend.state.enable_grammarly_QMARK_ = (function frontend$state$enable_grammarly_QMARK_(){
return new cljs.core.Keyword("feature","enable-grammarly?","feature/enable-grammarly?",816531392).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),frontend.state.get_current_repo())) === true;
});
frontend.state.scheduled_deadlines_disabled_QMARK_ = (function frontend$state$scheduled_deadlines_disabled_QMARK_(){
return new cljs.core.Keyword("feature","disable-scheduled-and-deadline-query?","feature/disable-scheduled-and-deadline-query?",-1605937327).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),frontend.state.get_current_repo())) === true;
});
frontend.state.enable_timetracking_QMARK_ = (function frontend$state$enable_timetracking_QMARK_(){
return (!(new cljs.core.Keyword("feature","enable-timetracking?","feature/enable-timetracking?",1612021873).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),frontend.state.get_current_repo())) === false));
});
frontend.state.enable_journals_QMARK_ = (function frontend$state$enable_journals_QMARK_(repo){
return (!(new cljs.core.Keyword("feature","enable-journals?","feature/enable-journals?",1609498182).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),repo)) === false));
});
frontend.state.export_heading_to_list_QMARK_ = (function frontend$state$export_heading_to_list_QMARK_(){
return (!(new cljs.core.Keyword("export","heading-to-list?","export/heading-to-list?",173780646).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),frontend.state.get_current_repo())) === false));
});
frontend.state.enable_git_auto_push_QMARK_ = (function frontend$state$enable_git_auto_push_QMARK_(repo){
return (!(new cljs.core.Keyword(null,"git-auto-push","git-auto-push",2144454612).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),repo)) === false));
});
frontend.state.enable_block_timestamps_QMARK_ = (function frontend$state$enable_block_timestamps_QMARK_(){
return new cljs.core.Keyword("feature","enable-block-timestamps?","feature/enable-block-timestamps?",155290768).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),frontend.state.get_current_repo())) === true;
});
frontend.state.sub_graph_config = (function frontend$state$sub_graph_config(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),frontend.state.get_current_repo());
});
frontend.state.sub_graph_config_settings = (function frontend$state$sub_graph_config_settings(){
return new cljs.core.Keyword("graph","settings","graph/settings",1067459097).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_graph_config());
});
frontend.state.show_brackets_QMARK_ = (function frontend$state$show_brackets_QMARK_(){
return (!(new cljs.core.Keyword("ui","show-brackets?","ui/show-brackets?",659790606).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),frontend.state.get_current_repo())) === false));
});
frontend.state.get_default_home = (function frontend$state$get_default_home(){
return new cljs.core.Keyword(null,"default-home","default-home",171104159).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.sub_default_home_page = (function frontend$state$sub_default_home_page(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.sub_config(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),new cljs.core.Keyword(null,"default-home","default-home",171104159),new cljs.core.Keyword(null,"page","page",849072397)], null),"");
});
frontend.state.custom_home_page_QMARK_ = (function frontend$state$custom_home_page_QMARK_(){
return (!((new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(frontend.state.get_default_home()) == null)));
});
frontend.state.get_preferred_format = (function frontend$state$get_preferred_format(var_args){
var G__58744 = arguments.length;
switch (G__58744) {
case 0:
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"preferred-format","preferred-format",-1784393121).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo_url));
if(cljs.core.truth_(temp__5720__auto__)){
var fmt = temp__5720__auto__;
return clojure.string.lower_case(cljs.core.name(fmt));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"preferred_format","preferred_format",-751060128)], null),"markdown");
}
})());
}));

(frontend.state.get_preferred_format.cljs$lang$maxFixedArity = 1);

frontend.state.get_editor_command_trigger = (function frontend$state$get_editor_command_trigger(var_args){
var G__58746 = arguments.length;
switch (G__58746) {
case 0:
return frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.state.get_editor_command_trigger.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
var or__5043__auto__ = new cljs.core.Keyword("editor","command-trigger","editor/command-trigger",1018337295).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo_url));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "/";
}
}));

(frontend.state.get_editor_command_trigger.cljs$lang$maxFixedArity = 1);

frontend.state.markdown_QMARK_ = (function frontend$state$markdown_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
});
frontend.state.get_pages_directory = (function frontend$state$get_pages_directory(){
var or__5043__auto__ = (function (){var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return new cljs.core.Keyword(null,"pages-directory","pages-directory",-1705912407).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "pages";
}
});
frontend.state.get_journals_directory = (function frontend$state$get_journals_directory(){
var or__5043__auto__ = (function (){var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return new cljs.core.Keyword(null,"journals-directory","journals-directory",1373812460).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "journals";
}
});
frontend.state.org_mode_file_link_QMARK_ = (function frontend$state$org_mode_file_link_QMARK_(repo){
return new cljs.core.Keyword("org-mode","insert-file-link?","org-mode/insert-file-link?",-1472433842).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
});
frontend.state.get_journal_file_name_format = (function frontend$state$get_journal_file_name_format(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return new cljs.core.Keyword("journal","file-name-format","journal/file-name-format",-18110349).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
} else {
return null;
}
});
frontend.state.get_preferred_workflow = (function frontend$state$get_preferred_workflow(){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"preferred-workflow","preferred-workflow",-1794663444).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5720__auto__)){
var workflow = temp__5720__auto__;
var workflow__$1 = cljs.core.name(workflow);
if(cljs.core.truth_(frontend.util.safe_re_find(/now|NOW/,workflow__$1))){
return new cljs.core.Keyword(null,"now","now",-1650525531);
} else {
return new cljs.core.Keyword(null,"todo","todo",-1046442570);
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"preferred_workflow","preferred_workflow",145480799)], null),new cljs.core.Keyword(null,"now","now",-1650525531));
}
})());
});
frontend.state.get_preferred_todo = (function frontend$state$get_preferred_todo(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_preferred_workflow(),new cljs.core.Keyword(null,"now","now",-1650525531))){
return "LATER";
} else {
return "TODO";
}
});
/**
 * Decide whether to use file name or :title as page name. If it returns "file", use the file
 *   name unless it is missing.
 */
frontend.state.page_name_order = (function frontend$state$page_name_order(){
return new cljs.core.Keyword(null,"page-name-order","page-name-order",-1625414065).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.get_repos = (function frontend$state$get_repos(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
});
frontend.state.set_repos_BANG_ = (function frontend$state$set_repos_BANG_(repos){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null),repos);
});
frontend.state.add_repo_BANG_ = (function frontend$state$add_repo_BANG_(repo){
if((!(clojure.string.blank_QMARK_(repo)))){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null),(function (repos){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(repos,repo));
}));
} else {
return null;
}
});
frontend.state.set_current_repo_BANG_ = (function frontend$state$set_current_repo_BANG_(repo){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),repo);

if(cljs.core.truth_(repo)){
frontend.storage.set(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),repo);
} else {
frontend.storage.remove(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
}

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setCurrentGraph",repo], 0));
});
frontend.state.set_preferred_format_BANG_ = (function frontend$state$set_preferred_format_BANG_(format){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"preferred_format","preferred_format",-751060128)], null),cljs.core.name(format));
});
frontend.state.set_preferred_workflow_BANG_ = (function frontend$state$set_preferred_workflow_BANG_(workflow){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"preferred_workflow","preferred_workflow",145480799)], null),cljs.core.name(workflow));
});
frontend.state.set_preferred_language_BANG_ = (function frontend$state$set_preferred_language_BANG_(language){
frontend.state.set_state_BANG_(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),cljs.core.name(language));

return frontend.storage.set(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),cljs.core.name(language));
});
frontend.state.delete_repo_BANG_ = (function frontend$state$delete_repo_BANG_(repo){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null),(function (repos){
return frontend.util.distinct_by(new cljs.core.Keyword(null,"url","url",276297046),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58747_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__58747_SHARP_));
}),repos));
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo))){
return frontend.state.set_current_repo_BANG_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frontend.state.get_repos())));
} else {
return null;
}
});
frontend.state.set_timestamp_block_BANG_ = (function frontend$state$set_timestamp_block_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872),value);
});
frontend.state.get_timestamp_block = (function frontend$state$get_timestamp_block(){
return new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_edit_content_BANG_ = (function frontend$state$set_edit_content_BANG_(var_args){
var G__58749 = arguments.length;
switch (G__58749) {
case 2:
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (input_id,value){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3(input_id,value,true);
}));

(frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (input_id,value,set_input_value_QMARK_){
if(cljs.core.truth_(input_id)){
if(cljs.core.truth_(set_input_value_QMARK_)){
var temp__5720__auto___59000 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5720__auto___59000)){
var input_59001 = temp__5720__auto___59000;
frontend.util.set_change_value(input_59001,value);
} else {
}
} else {
}

return frontend.state.update_state_BANG_(new cljs.core.Keyword("editor","content","editor/content",-756190443),(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,input_id,value);
}));
} else {
return null;
}
}));

(frontend.state.set_edit_content_BANG_.cljs$lang$maxFixedArity = 3);

frontend.state.get_edit_input_id = (function frontend$state$get_edit_input_id(){
return cljs.core.ffirst(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
});
frontend.state.get_input = (function frontend$state$get_input(){
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
return goog.dom.getElement(id);
} else {
return null;
}
});
frontend.state.editing_QMARK_ = (function frontend$state$editing_QMARK_(){
var input = frontend.state.get_input();
var and__5041__auto__ = input;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,document.activeElement);
} else {
return and__5041__auto__;
}
});
frontend.state.get_edit_content = (function frontend$state$get_edit_content(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editor","content","editor/content",-756190443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),frontend.state.get_edit_input_id());
});
frontend.state.sub_edit_content = (function frontend$state$sub_edit_content(){
return frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),frontend.state.get_edit_input_id()], null));
});
frontend.state.get_cursor_range = (function frontend$state$get_cursor_range(){
return new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_cursor_range_BANG_ = (function frontend$state$set_cursor_range_BANG_(range){
return frontend.state.set_state_BANG_(new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154),range);
});
frontend.state.set_q_BANG_ = (function frontend$state$set_q_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","q","search/q",-553992135),value);
});
frontend.state.set_search_mode_BANG_ = (function frontend$state$set_search_mode_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","mode","search/mode",1628111395),value);
});
frontend.state.set_editor_show_page_search_BANG_ = (function frontend$state$set_editor_show_page_search_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106),value);
});
frontend.state.get_editor_show_page_search_QMARK_ = (function frontend$state$get_editor_show_page_search_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106));
});
frontend.state.set_editor_show_page_search_hashtag_BANG_ = (function frontend$state$set_editor_show_page_search_hashtag_BANG_(value){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106),value);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","show-page-search-hashtag?","editor/show-page-search-hashtag?",1934478614),value);
});
frontend.state.get_editor_show_page_search_hashtag_QMARK_ = (function frontend$state$get_editor_show_page_search_hashtag_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","show-page-search-hashtag?","editor/show-page-search-hashtag?",1934478614));
});
frontend.state.set_editor_show_block_search_BANG_ = (function frontend$state$set_editor_show_block_search_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","show-block-search?","editor/show-block-search?",706500659),value);
});
frontend.state.get_editor_show_block_search_QMARK_ = (function frontend$state$get_editor_show_block_search_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","show-block-search?","editor/show-block-search?",706500659));
});
frontend.state.set_editor_show_template_search_BANG_ = (function frontend$state$set_editor_show_template_search_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","show-template-search?","editor/show-template-search?",1482009583),value);
});
frontend.state.get_editor_show_template_search_QMARK_ = (function frontend$state$get_editor_show_template_search_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","show-template-search?","editor/show-template-search?",1482009583));
});
frontend.state.set_editor_show_date_picker_BANG_ = (function frontend$state$set_editor_show_date_picker_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","show-date-picker?","editor/show-date-picker?",216789264),value);
});
frontend.state.get_editor_show_date_picker_QMARK_ = (function frontend$state$get_editor_show_date_picker_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","show-date-picker?","editor/show-date-picker?",216789264));
});
frontend.state.set_editor_show_input_BANG_ = (function frontend$state$set_editor_show_input_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241),value);
});
frontend.state.get_editor_show_input = (function frontend$state$get_editor_show_input(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241));
});
frontend.state.set_editor_show_zotero_BANG_ = (function frontend$state$set_editor_show_zotero_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","show-zotero","editor/show-zotero",-1834250749),value);
});
frontend.state.clear_editor_show_state_BANG_ = (function frontend$state$clear_editor_show_state_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("editor","show-input","editor/show-input",-502568241),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","show-zotero","editor/show-zotero",-1834250749),false,new cljs.core.Keyword("editor","show-date-picker?","editor/show-date-picker?",216789264),false,new cljs.core.Keyword("editor","show-block-search?","editor/show-block-search?",706500659),false,new cljs.core.Keyword("editor","show-template-search?","editor/show-template-search?",1482009583),false,new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106),false,new cljs.core.Keyword("editor","show-page-search-hashtag?","editor/show-page-search-hashtag?",1934478614),false], 0));
}));
});
frontend.state.set_edit_input_id_BANG_ = (function frontend$state$set_edit_input_id_BANG_(input_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update,new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),(function (_m){
var and__5041__auto__ = input_id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([input_id,true]);
} else {
return and__5041__auto__;
}
}));
});
frontend.state.get_edit_pos = (function frontend$state$get_edit_pos(){
var temp__5720__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5720__auto__)){
var input = temp__5720__auto__;
return frontend.util.get_selection_start(input);
} else {
return null;
}
});
frontend.state.set_selection_start_block_BANG_ = (function frontend$state$set_selection_start_block_BANG_(start_block){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492),start_block);
});
frontend.state.get_selection_start_block = (function frontend$state$get_selection_start_block(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492));
});
frontend.state.set_selection_blocks_BANG_ = (function frontend$state$set_selection_blocks_BANG_(var_args){
var G__58763 = arguments.length;
switch (G__58763) {
case 1:
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks,new cljs.core.Keyword(null,"down","down",1565245570));
}));

(frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (blocks,direction){
if(cljs.core.seq(blocks)){
var blocks__$1 = frontend.util.sort_by_height(blocks);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),blocks__$1,new cljs.core.Keyword("selection","direction","selection/direction",1172907345),direction], 0));
} else {
return null;
}
}));

(frontend.state.set_selection_blocks_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.into_selection_mode_BANG_ = (function frontend$state$into_selection_mode_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),true);
});
frontend.state.clear_selection_BANG_ = (function frontend$state$clear_selection_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),null,new cljs.core.Keyword("selection","direction","selection/direction",1172907345),new cljs.core.Keyword(null,"down","down",1565245570)], 0));
});
frontend.state.get_selection_blocks = (function frontend$state$get_selection_blocks(){
return new cljs.core.Keyword("selection","blocks","selection/blocks",638970019).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_selection_block_ids = (function frontend$state$get_selection_block_ids(){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__58767_SHARP_){
var temp__5720__auto__ = dommy.core.attr(p1__58767_SHARP_,"blockid");
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
return cljs.core.uuid(id);
} else {
return null;
}
}),frontend.state.sub(new cljs.core.Keyword("selection","blocks","selection/blocks",638970019))));
});
frontend.state.in_selection_mode_QMARK_ = (function frontend$state$in_selection_mode_QMARK_(){
return new cljs.core.Keyword("selection","mode","selection/mode",-800590329).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
/**
 * True sense of selection mode with valid selected block
 */
frontend.state.selection_QMARK_ = (function frontend$state$selection_QMARK_(){
var and__5041__auto__ = frontend.state.in_selection_mode_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(frontend.state.get_selection_blocks());
} else {
return and__5041__auto__;
}
});
frontend.state.conj_selection_block_BANG_ = (function frontend$state$conj_selection_block_BANG_(block,direction){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(block,"selected noselect");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),frontend.util.sort_by_height(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword("selection","blocks","selection/blocks",638970019).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))),block)),new cljs.core.Keyword("selection","direction","selection/direction",1172907345),direction], 0));
});
frontend.state.drop_last_selection_block_BANG_ = (function frontend$state$drop_last_selection_block_BANG_(){
var last_block = cljs.core.peek(cljs.core.vec(new cljs.core.Keyword("selection","blocks","selection/blocks",638970019).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),cljs.core.pop(cljs.core.vec(new cljs.core.Keyword("selection","blocks","selection/blocks",638970019).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))))], 0));

return last_block;
});
frontend.state.get_selection_direction = (function frontend$state$get_selection_direction(){
return new cljs.core.Keyword("selection","direction","selection/direction",1172907345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.show_custom_context_menu_BANG_ = (function frontend$state$show_custom_context_menu_BANG_(links){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677),links], 0));
});
frontend.state.hide_custom_context_menu_BANG_ = (function frontend$state$hide_custom_context_menu_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677),null], 0));
});
frontend.state.toggle_sidebar_open_QMARK__BANG_ = (function frontend$state$toggle_sidebar_open_QMARK__BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update,new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),cljs.core.not);
});
frontend.state.open_right_sidebar_BANG_ = (function frontend$state$open_right_sidebar_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),true);
});
frontend.state.hide_right_sidebar_BANG_ = (function frontend$state$hide_right_sidebar_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),false);
});
frontend.state.sidebar_add_block_BANG_ = (function frontend$state$sidebar_add_block_BANG_(repo,db_id,block_type){
if((!(frontend.util.sm_breakpoint_QMARK_()))){
if(cljs.core.truth_(db_id)){
frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_id,block_type], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58768_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__58768_SHARP_),db_id);
}),blocks)));
}));

frontend.state.open_right_sidebar_BANG_();

var temp__5720__auto__ = goog.dom.getElementByClass("cp__right-sidebar-scrollable");
if(cljs.core.truth_(temp__5720__auto__)){
var elem = temp__5720__auto__;
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$2(elem,(0));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.state.sidebar_remove_block_BANG_ = (function frontend$state$sidebar_remove_block_BANG_(idx){
frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
if(typeof idx === 'string'){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58769_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__58769_SHARP_),idx);
}),blocks);
} else {
return frontend.util.drop_nth(idx,blocks);
}
}));

if(cljs.core.empty_QMARK_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return frontend.state.hide_right_sidebar_BANG_();
} else {
return null;
}
});
frontend.state.sidebar_replace_block_BANG_ = (function frontend$state$sidebar_replace_block_BANG_(old_sidebar_key,new_sidebar_key){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58770_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__58770_SHARP_,old_sidebar_key)){
return new_sidebar_key;
} else {
return p1__58770_SHARP_;
}
}),blocks);
}));
});
frontend.state.sidebar_block_exists_QMARK_ = (function frontend$state$sidebar_block_exists_QMARK_(idx){
return cljs.core.some((function (p1__58771_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__58771_SHARP_),idx);
}),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
});
frontend.state.clear_sidebar_blocks_BANG_ = (function frontend$state$clear_sidebar_blocks_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),cljs.core.List.EMPTY);
});
frontend.state.sidebar_block_toggle_collapse_BANG_ = (function frontend$state$sidebar_block_toggle_collapse_BANG_(db_id){
if(cljs.core.truth_(db_id)){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),db_id], null),cljs.core.not);
} else {
return null;
}
});
frontend.state.get_edit_block = (function frontend$state$get_edit_block(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","block","editor/block",1699377461));
});
frontend.state.get_current_edit_block_and_position = (function frontend$state$get_current_edit_block_and_position(){
var edit_input_id = frontend.state.get_edit_input_id();
var edit_block = frontend.state.get_edit_block();
var block_element = (cljs.core.truth_(edit_input_id)?goog.dom.getElement(clojure.string.replace(edit_input_id,"edit-block","ls-block")):null);
var container = (cljs.core.truth_(block_element)?frontend.util.get_block_container(block_element):null);
if(cljs.core.truth_(container)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316),edit_block,new cljs.core.Keyword(null,"container","container",-1736937707),frontend.state.goog$module$goog$object.get(container,"id"),new cljs.core.Keyword(null,"pos","pos",-864607220),frontend.util.cursor.pos(goog.dom.getElement(edit_input_id))], null);
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state.publishing_QMARK_ !== 'undefined')){
} else {
frontend.state.publishing_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.state.publishing_enable_editing_QMARK_ = (function frontend$state$publishing_enable_editing_QMARK_(){
var and__5041__auto__ = cljs.core.deref(frontend.state.publishing_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("publishing","enable-editing?","publishing/enable-editing?",-39045505).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
} else {
return and__5041__auto__;
}
});
frontend.state.enable_editing_QMARK_ = (function frontend$state$enable_editing_QMARK_(){
var or__5043__auto__ = cljs.core.not(cljs.core.deref(frontend.state.publishing_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("publishing","enable-editing?","publishing/enable-editing?",-39045505).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
}
});
frontend.state.set_editing_BANG_ = (function frontend$state$set_editing_BANG_(var_args){
var G__58773 = arguments.length;
switch (G__58773) {
case 4:
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (edit_input_id,content,block,cursor_range){
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5(edit_input_id,content,block,cursor_range,true);
}));

(frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (edit_input_id,content,block,cursor_range,move_cursor_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = edit_input_id;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = block;
if(cljs.core.truth_(and__5041__auto____$1)){
var or__5043__auto__ = frontend.state.publishing_enable_editing_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(cljs.core.deref(frontend.state.publishing_QMARK_));
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var block_element = goog.dom.getElement(clojure.string.replace(edit_input_id,"edit-block","ls-block"));
var container = frontend.util.get_block_container(block_element);
var block__$1 = (cljs.core.truth_(container)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","container","block/container",510671002),frontend.state.goog$module$goog$object.get(container,"id")):block);
var content__$1 = clojure.string.trim((function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),edit_input_id], null),content__$1),new cljs.core.Keyword("editor","block","editor/block",1699377461),block__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_input_id,true]),new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236),null,new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154),cursor_range], 0));
}));

var temp__5720__auto__ = goog.dom.getElement(edit_input_id);
if(cljs.core.truth_(temp__5720__auto__)){
var input = temp__5720__auto__;
var pos = cljs.core.count(cursor_range);
if(cljs.core.truth_(content__$1)){
frontend.util.set_change_value(input,content__$1);
} else {
}

if(cljs.core.truth_(move_cursor_QMARK_)){
frontend.util.cursor.move_cursor_to(input,pos);
} else {
}

if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),false);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.state.set_editing_BANG_.cljs$lang$maxFixedArity = 5);

frontend.state.clear_edit_BANG_ = (function frontend$state$clear_edit_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),null,new cljs.core.Keyword("editor","block","editor/block",1699377461),null,new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154),null,new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),null], null));
});
frontend.state.into_code_editor_mode_BANG_ = (function frontend$state$into_code_editor_mode_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),null,new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154),null,new cljs.core.Keyword("editor","code-mode?","editor/code-mode?",1404453234),true], null));
});
frontend.state.set_editor_last_pos_BANG_ = (function frontend$state$set_editor_last_pos_BANG_(new_pos){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())], null),new_pos);
});
frontend.state.clear_editor_last_pos_BANG_ = (function frontend$state$clear_editor_last_pos_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),null);
});
frontend.state.get_editor_last_pos = (function frontend$state$get_editor_last_pos(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())], null));
});
frontend.state.set_block_content_and_last_pos_BANG_ = (function frontend$state$set_block_content_and_last_pos_BANG_(edit_input_id,content,new_pos){
if(cljs.core.truth_(edit_input_id)){
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_input_id,content);

return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())], null),new_pos);
} else {
return null;
}
});
frontend.state.set_theme_mode_BANG_ = (function frontend$state$set_theme_mode_BANG_(mode){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"light")){
frontend.util.set_theme_light();
} else {
frontend.util.set_theme_dark();
}
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),mode);

return frontend.storage.set(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),mode);
});
frontend.state.sync_system_theme_BANG_ = (function frontend$state$sync_system_theme_BANG_(){
var system_dark_QMARK_ = window.matchMedia("(prefers-color-scheme: dark)").matches;
frontend.state.set_theme_mode_BANG_((cljs.core.truth_(system_dark_QMARK_)?"dark":"light"));

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),true);

return frontend.storage.set(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),true);
});
frontend.state.use_theme_mode_BANG_ = (function frontend$state$use_theme_mode_BANG_(theme_mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme_mode,"system")){
return frontend.state.sync_system_theme_BANG_();
} else {
frontend.state.set_theme_mode_BANG_(theme_mode);

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),false);

return frontend.storage.set(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),false);
}
});
frontend.state.toggle_theme = (function frontend$state$toggle_theme(theme){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"dark")){
return "light";
} else {
return "dark";
}
});
frontend.state.toggle_theme_BANG_ = (function frontend$state$toggle_theme_BANG_(){
return frontend.state.use_theme_mode_BANG_(frontend.state.toggle_theme(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
});
frontend.state.set_custom_theme_BANG_ = (function frontend$state$set_custom_theme_BANG_(var_args){
var G__58775 = arguments.length;
switch (G__58775) {
case 1:
return frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (custom_theme){
return frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2(null,custom_theme);
}));

(frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (mode,theme){
frontend.state.set_state_BANG_((cljs.core.truth_(mode)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(mode)], null):new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347)),theme);

return frontend.storage.set(new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
}));

(frontend.state.set_custom_theme_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.set_editing_block_dom_id_BANG_ = (function frontend$state$set_editing_block_dom_id_BANG_(block_dom_id){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","block-dom-id","editor/block-dom-id",208740398),block_dom_id);
});
frontend.state.get_editing_block_dom_id = (function frontend$state$get_editing_block_dom_id(){
return new cljs.core.Keyword("editor","block-dom-id","editor/block-dom-id",208740398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_root_component_BANG_ = (function frontend$state$set_root_component_BANG_(component){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","root-component","ui/root-component",-1807033247),component);
});
frontend.state.get_root_component = (function frontend$state$get_root_component(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("ui","root-component","ui/root-component",-1807033247));
});
frontend.state.load_app_user_cfgs = (function frontend$state$load_app_user_cfgs(var_args){
var G__58777 = arguments.length;
switch (G__58777) {
case 0:
return frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$1(false);
}));

(frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$1 = (function (refresh_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___36093__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var or__5043__auto__ = refresh_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)) == null);
}
})())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["userAppCfgs"], 0)):new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))),(function (cfgs){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core.object_QMARK_(cfgs))?cljs_bean.core.__GT_clj(cfgs):cfgs),(function (cfgs__$1){
return promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),cfgs__$1));
}));
}));
}));
}));

(frontend.state.load_app_user_cfgs.cljs$lang$maxFixedArity = 1);

frontend.state.setup_electron_updater_BANG_ = (function frontend$state$setup_electron_updater_BANG_(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return window.apis.setUpdatesCallback((function (_,args){
var data = cljs_bean.core.__GT_clj(args);
var pending_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),"completed");
frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","updater-pending?","electron/updater-pending?",-1675811595),pending_QMARK_);

if(pending_QMARK_){
frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","updater","electron/updater",454456683),data);
} else {
}

return null;
}));
} else {
return null;
}
});
frontend.state.set_file_component_BANG_ = (function frontend$state$set_file_component_BANG_(component){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","file-component","ui/file-component",-1447074212),component);
});
frontend.state.clear_file_component_BANG_ = (function frontend$state$clear_file_component_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","file-component","ui/file-component",-1447074212),null);
});
frontend.state.get_file_component = (function frontend$state$get_file_component(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("ui","file-component","ui/file-component",-1447074212));
});
frontend.state.set_journals_length_BANG_ = (function frontend$state$set_journals_length_BANG_(value){
if(cljs.core.truth_(value)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword(null,"journals-length","journals-length",1463764186),value);
} else {
return null;
}
});
frontend.state.add_custom_query_component_BANG_ = (function frontend$state$add_custom_query_component_BANG_(query_string,component){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("ui","custom-query-components","ui/custom-query-components",-2076809613),(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,query_string,component);
}));
});
frontend.state.remove_custom_query_component_BANG_ = (function frontend$state$remove_custom_query_component_BANG_(query_string){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("ui","custom-query-components","ui/custom-query-components",-2076809613),(function (m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,query_string);
}));
});
frontend.state.get_custom_query_components = (function frontend$state$get_custom_query_components(){
return cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("ui","custom-query-components","ui/custom-query-components",-2076809613)));
});
frontend.state.save_scroll_position_BANG_ = (function frontend$state$save_scroll_position_BANG_(var_args){
var G__58779 = arguments.length;
switch (G__58779) {
case 1:
return frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$2(value,window.location.hash);
}));

(frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,path){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","paths-scroll-positions","ui/paths-scroll-positions",1953998950),path], null),value);
}));

(frontend.state.save_scroll_position_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.get_saved_scroll_position = (function frontend$state$get_saved_scroll_position(var_args){
var G__58781 = arguments.length;
switch (G__58781) {
case 0:
return frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$1(window.location.hash);
}));

(frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$1 = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","paths-scroll-positions","ui/paths-scroll-positions",1953998950),path], null),(0));
}));

(frontend.state.get_saved_scroll_position.cljs$lang$maxFixedArity = 1);

frontend.state.set_today_BANG_ = (function frontend$state$set_today_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword(null,"today","today",945271563),value);
});
frontend.state.get_date_formatter = (function frontend$state$get_date_formatter(){
return logseq.graph_parser.config.get_date_formatter(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.shortcuts = (function frontend$state$shortcuts(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),frontend.state.get_current_repo(),new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810)], null));
});
frontend.state.get_me = (function frontend$state$get_me(){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
/**
 * Whether the user has logged in.
 */
frontend.state.deprecated_logged_QMARK_ = (function frontend$state$deprecated_logged_QMARK_(){
return false;
});
frontend.state.set_db_restoring_BANG_ = (function frontend$state$set_db_restoring_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233),value);
});
frontend.state.set_indexedb_support_BANG_ = (function frontend$state$set_indexedb_support_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("indexeddb","support?","indexeddb/support?",114020185),value);
});
frontend.state.modal_opened_QMARK_ = (function frontend$state$modal_opened_QMARK_(){
return new cljs.core.Keyword("modal","show?","modal/show?",1441869594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_sub_modals = (function frontend$state$get_sub_modals(){
return new cljs.core.Keyword("modal","subsets","modal/subsets",627467906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_sub_modal_BANG_ = (function frontend$state$set_sub_modal_BANG_(var_args){
var G__58788 = arguments.length;
switch (G__58788) {
case 1:
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (panel_content){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2(panel_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),true], null));
}));

(frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (panel_content,p__58791){
var map__58792 = p__58791;
var map__58792__$1 = cljs.core.__destructure_map(map__58792);
var opts = map__58792__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var close_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"center?","center?",-323116631));
if(cljs.core.not(frontend.state.modal_opened_QMARK_())){
return (frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(panel_content,opts) : frontend.state.set_modal_BANG_.call(null,panel_content,opts));
} else {
var modals = new cljs.core.Keyword("modal","subsets","modal/subsets",627467906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var idx = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__58785_SHARP_,p2__58784_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(p2__58784_SHARP_),id)){
return p1__58785_SHARP_;
} else {
return null;
}
}),modals));
} else {
return and__5041__auto__;
}
})();
var input = medley.core.filter_vals((function (p1__58786_SHARP_){
return (!((p1__58786_SHARP_ == null)));
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("modal","id","modal/id",-1274892409),id,new cljs.core.Keyword("modal","label","modal/label",-1776753955),(function (){var or__5043__auto__ = label;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.truth_(center_QMARK_)){
return "ls-modal-align-center";
} else {
return "";
}
}
})(),new cljs.core.Keyword("modal","show?","modal/show?",1441869594),((cljs.core.boolean_QMARK_(show_QMARK_))?show_QMARK_:true),new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448),panel_content,new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151),close_btn_QMARK_], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","subsets","modal/subsets",627467906),(function (){var or__5043__auto__ = idx;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.count(modals);
}
})()], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));

return new cljs.core.Keyword("modal","subsets","modal/subsets",627467906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
}
}));

(frontend.state.set_sub_modal_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.close_sub_modal_BANG_ = (function frontend$state$close_sub_modal_BANG_(var_args){
var G__58804 = arguments.length;
switch (G__58804) {
case 0:
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (all_QMARK__a_id){
if(all_QMARK__a_id === true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("modal","subsets","modal/subsets",627467906),cljs.core.PersistentVector.EMPTY);
} else {
var id_59047 = all_QMARK__a_id;
var mid_59048 = new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var modals_59049 = new cljs.core.Keyword("modal","subsets","modal/subsets",627467906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_((function (){var and__5041__auto__ = id_59047;
if(cljs.core.truth_(and__5041__auto__)){
return (((!(clojure.string.blank_QMARK_(mid_59048)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_59047,mid_59048)));
} else {
return and__5041__auto__;
}
})())){
(frontend.state.close_modal_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.state.close_modal_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.state.close_modal_BANG_.call(null));
} else {
var temp__5720__auto___59051 = (cljs.core.truth_(id_59047)?cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__58798_SHARP_,p2__58797_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(p2__58797_SHARP_),id_59047)){
return p1__58798_SHARP_;
} else {
return null;
}
}),modals_59049)):(cljs.core.count(modals_59049) - (1)));
if(cljs.core.truth_(temp__5720__auto___59051)){
var idx_59052 = temp__5720__auto___59051;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("modal","subsets","modal/subsets",627467906),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(idx_59052,modals_59049)));
} else {
}
}
}

return new cljs.core.Keyword("modal","subsets","modal/subsets",627467906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
}));

(frontend.state.close_sub_modal_BANG_.cljs$lang$maxFixedArity = 1);

frontend.state.set_modal_BANG_ = (function frontend$state$set_modal_BANG_(var_args){
var G__58811 = arguments.length;
switch (G__58811) {
case 1:
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (modal_panel_content){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(modal_panel_content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),false,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),true], null));
}));

(frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (modal_panel_content,p__58814){
var map__58815 = p__58814;
var map__58815__$1 = cljs.core.__destructure_map(map__58815);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58815__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58815__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var fullscreen_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58815__$1,new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820));
var close_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58815__$1,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58815__$1,new cljs.core.Keyword(null,"center?","center?",-323116631));
if(cljs.core.seq(frontend.state.get_sub_modals())){
frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(true);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("modal","id","modal/id",-1274892409),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("modal","label","modal/label",-1776753955),(function (){var or__5043__auto__ = label;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.truth_(center_QMARK_)){
return "ls-modal-align-center";
} else {
return "";
}
}
})(),new cljs.core.Keyword("modal","show?","modal/show?",1441869594),cljs.core.boolean$(modal_panel_content),new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448),modal_panel_content,new cljs.core.Keyword("modal","fullscreen?","modal/fullscreen?",-1344472297),fullscreen_QMARK_,new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151),close_btn_QMARK_], 0));
}));

(frontend.state.set_modal_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.close_modal_BANG_ = (function frontend$state$close_modal_BANG_(){
if(cljs.core.seq(frontend.state.get_sub_modals())){
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("modal","id","modal/id",-1274892409),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("modal","label","modal/label",-1776753955),"",new cljs.core.Keyword("modal","show?","modal/show?",1441869594),false,new cljs.core.Keyword("modal","fullscreen?","modal/fullscreen?",-1344472297),false,new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448),null,new cljs.core.Keyword("ui","open-select","ui/open-select",687174842),null], 0));
}
});
frontend.state.get_db_batch_txs_chan = (function frontend$state$get_db_batch_txs_chan(){
return new cljs.core.Keyword("db","batch-txs","db/batch-txs",-1980845279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_file_write_chan = (function frontend$state$get_file_write_chan(){
return new cljs.core.Keyword("file","writes","file/writes",-105376729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_reactive_custom_queries_chan = (function frontend$state$get_reactive_custom_queries_chan(){
return new cljs.core.Keyword("reactive","custom-queries","reactive/custom-queries",-213333931).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_write_chan_length = (function frontend$state$get_write_chan_length(){
var c = frontend.state.get_file_write_chan();
return cljs.core.count(frontend.state.goog$module$goog$object.get(c,"buf"));
});
frontend.state.get_left_sidebar_open_QMARK_ = (function frontend$state$get_left_sidebar_open_QMARK_(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728)], null));
});
frontend.state.set_left_sidebar_open_BANG_ = (function frontend$state$set_left_sidebar_open_BANG_(value){
frontend.storage.set("ls-left-sidebar-open?",cljs.core.boolean$(value));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728),value);
});
frontend.state.toggle_left_sidebar_BANG_ = (function frontend$state$toggle_left_sidebar_BANG_(){
return frontend.state.set_left_sidebar_open_BANG_(cljs.core.not(frontend.state.get_left_sidebar_open_QMARK_()));
});
frontend.state.set_developer_mode_BANG_ = (function frontend$state$set_developer_mode_BANG_(value){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878),value);

return frontend.storage.set("developer-mode",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
frontend.state.developer_mode_QMARK_ = (function frontend$state$developer_mode_QMARK_(){
return new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_notification_contents = (function frontend$state$get_notification_contents(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("notification","contents","notification/contents",-1760740618));
});
frontend.state.document_mode_QMARK_ = (function frontend$state$document_mode_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
});
frontend.state.doc_mode_enter_for_new_line_QMARK_ = (function frontend$state$doc_mode_enter_for_new_line_QMARK_(){
var and__5041__auto__ = frontend.state.document_mode_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(new cljs.core.Keyword("shortcut","doc-mode-enter-for-new-block?","shortcut/doc-mode-enter-for-new-block?",936132327).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_graph_config()));
} else {
return and__5041__auto__;
}
});
frontend.state.toggle_document_mode_BANG_ = (function frontend$state$toggle_document_mode_BANG_(){
var mode = frontend.state.document_mode_QMARK_();
frontend.state.set_state_BANG_(new cljs.core.Keyword("document","mode?","document/mode?",-994203479),cljs.core.not(mode));

return frontend.storage.set(new cljs.core.Keyword("document","mode?","document/mode?",-994203479),cljs.core.not(mode));
});
frontend.state.shortcut_tooltip_enabled_QMARK_ = (function frontend$state$shortcut_tooltip_enabled_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086));
});
frontend.state.toggle_shortcut_tooltip_BANG_ = (function frontend$state$toggle_shortcut_tooltip_BANG_(){
var mode = frontend.state.shortcut_tooltip_enabled_QMARK_();
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086),cljs.core.not(mode));

return frontend.storage.set(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086),cljs.core.not(mode));
});
frontend.state.mobile_QMARK_ = (function frontend$state$mobile_QMARK_(){
var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
});
frontend.state.enable_tooltip_QMARK_ = (function frontend$state$enable_tooltip_QMARK_(){
if(cljs.core.truth_(frontend.state.mobile_QMARK_())){
return false;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),frontend.state.get_current_repo()),new cljs.core.Keyword("ui","enable-tooltip?","ui/enable-tooltip?",1082007831),true);
}
});
frontend.state.show_command_doc_QMARK_ = (function frontend$state$show_command_doc_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),frontend.state.get_current_repo()),new cljs.core.Keyword("ui","show-command-doc?","ui/show-command-doc?",-23052835),true);
});
frontend.state.set_config_BANG_ = (function frontend$state$set_config_BANG_(repo_url,value){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo_url], null),value);
});
frontend.state.get_wide_mode_QMARK_ = (function frontend$state$get_wide_mode_QMARK_(){
return new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.toggle_wide_mode_BANG_ = (function frontend$state$toggle_wide_mode_BANG_(){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061),cljs.core.not);
});
frontend.state.set_online_BANG_ = (function frontend$state$set_online_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("network","online?","network/online?",1306822774),value);
});
frontend.state.get_commands = (function frontend$state$get_commands(){
return new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.get_plugins_commands = (function frontend$state$get_plugins_commands(){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.flatten(cljs.core.vals(new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))))], 0));
});
frontend.state.get_plugins_commands_with_type = (function frontend$state$get_plugins_commands_with_type(type){
return cljs.core.filterv((function (p1__58868_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__58868_SHARP_)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))));
});
frontend.state.get_plugins_ui_items_with_type = (function frontend$state$get_plugins_ui_items_with_type(type){
return cljs.core.filterv((function (p1__58871_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__58871_SHARP_)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))));
});
frontend.state.get_plugin_resources_with_type = (function frontend$state$get_plugin_resources_with_type(pid,type){
var temp__5720__auto__ = (function (){var and__5041__auto__ = type;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var pid__$1 = temp__5720__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),pid__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)], null));
} else {
return null;
}
});
frontend.state.get_plugin_resource = (function frontend$state$get_plugin_resource(pid,type,key){
var temp__5720__auto__ = frontend.state.get_plugin_resources_with_type(pid,type);
if(cljs.core.truth_(temp__5720__auto__)){
var resources = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(resources,key);
} else {
return null;
}
});
frontend.state.upt_plugin_resource = (function frontend$state$upt_plugin_resource(pid,type,key,attr,val){
var temp__5720__auto__ = frontend.state.get_plugin_resource(pid,type,key);
if(cljs.core.truth_(temp__5720__auto__)){
var resource = temp__5720__auto__;
var resource__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resource,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr),val);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),key], null),resource__$1);

return resource__$1;
} else {
return null;
}
});
frontend.state.install_plugin_hook = (function frontend$state$install_plugin_hook(pid,hook){
var temp__5720__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5720__auto__)){
var pid__$1 = temp__5720__auto__;
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.PersistentHashSet.EMPTY)(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook], null))),pid__$1));

return true;
} else {
return null;
}
});
frontend.state.uninstall_plugin_hook = (function frontend$state$uninstall_plugin_hook(pid,hook_or_all){
var temp__5720__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5720__auto__)){
var pid__$1 = temp__5720__auto__;
if((hook_or_all == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update,new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),(function (p1__58872_SHARP_){
return cljs.core.update_vals(p1__58872_SHARP_,(function (ids){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ids,pid__$1);
}));
}));
} else {
var temp__5720__auto___59068__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook_or_all], null));
if(cljs.core.truth_(temp__5720__auto___59068__$1)){
var coll_59069 = temp__5720__auto___59068__$1;
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook_or_all], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(coll_59069,pid__$1));
} else {
}
}

return true;
} else {
return null;
}
});
frontend.state.get_scheduled_future_days = (function frontend$state$get_scheduled_future_days(){
var days = new cljs.core.Keyword("scheduled","future-days","scheduled/future-days",-104348029).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var or__5043__auto__ = ((cljs.core.int_QMARK_(days))?days:null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
});
frontend.state.set_graph_syncing_QMARK_ = (function frontend$state$set_graph_syncing_QMARK_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","syncing?","graph/syncing?",-560055838),value);
});
frontend.state.set_editor_in_composition_BANG_ = (function frontend$state$set_editor_in_composition_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","in-composition?","editor/in-composition?",-259037730),value);
});
frontend.state.editor_in_composition_QMARK_ = (function frontend$state$editor_in_composition_QMARK_(){
return new cljs.core.Keyword("editor","in-composition?","editor/in-composition?",-259037730).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_loading_files_BANG_ = (function frontend$state$set_loading_files_BANG_(repo,value){
if(cljs.core.truth_(repo)){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repo","loading-files?","repo/loading-files?",196666138),repo], null),value);
} else {
return null;
}
});
frontend.state.loading_files_QMARK_ = (function frontend$state$loading_files_QMARK_(repo){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repo","loading-files?","repo/loading-files?",196666138),repo], null));
});
frontend.state.set_editor_last_input_time_BANG_ = (function frontend$state$set_editor_last_input_time_BANG_(repo,time){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-input-time","editor/last-input-time",-2008067915),repo], null),time);
});
frontend.state.set_last_transact_time_BANG_ = (function frontend$state$set_last_transact_time_BANG_(repo,time){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","last-transact-time","db/last-transact-time",1752337529),repo], null),time);

return frontend.state.set_editor_last_input_time_BANG_(repo,time);
});
frontend.state.set_db_persisted_BANG_ = (function frontend$state$set_db_persisted_BANG_(repo,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","persisted?","db/persisted?",-1110314694),repo], null),value);
});
frontend.state.db_idle_QMARK_ = (function frontend$state$db_idle_QMARK_(repo){
if(cljs.core.truth_(repo)){
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","last-transact-time","db/last-transact-time",1752337529),repo], null));
if(cljs.core.truth_(temp__5720__auto__)){
var last_time = temp__5720__auto__;
var now = frontend.util.time_ms();
return ((now - last_time) >= (3000));
} else {
return null;
}
} else {
return null;
}
});
frontend.state.input_idle_QMARK_ = (function frontend$state$input_idle_QMARK_(repo){
if(cljs.core.truth_(repo)){
var or__5043__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-input-time","editor/last-input-time",-2008067915),repo], null));
if(cljs.core.truth_(temp__5720__auto__)){
var last_time = temp__5720__auto__;
var now = frontend.util.time_ms();
return ((now - last_time) >= (500));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(frontend.state.get_edit_input_id());
}
} else {
return null;
}
});
frontend.state.set_nfs_refreshing_BANG_ = (function frontend$state$set_nfs_refreshing_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("nfs","refreshing?","nfs/refreshing?",-1285076588),value);
});
frontend.state.nfs_refreshing_QMARK_ = (function frontend$state$nfs_refreshing_QMARK_(){
return new cljs.core.Keyword("nfs","refreshing?","nfs/refreshing?",-1285076588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_search_result_BANG_ = (function frontend$state$set_search_result_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","result","search/result",443756363),value);
});
frontend.state.clear_search_result_BANG_ = (function frontend$state$clear_search_result_BANG_(){
return frontend.state.set_search_result_BANG_(null);
});
frontend.state.add_graph_search_filter_BANG_ = (function frontend$state$add_graph_search_filter_BANG_(q){
if(clojure.string.blank_QMARK_(q)){
return null;
} else {
return frontend.state.update_state_BANG_(new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152),(function (value){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(value,q)));
}));
}
});
frontend.state.remove_search_filter_BANG_ = (function frontend$state$remove_search_filter_BANG_(q){
if(clojure.string.blank_QMARK_(q)){
return null;
} else {
return frontend.state.update_state_BANG_(new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152),(function (value){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([q]),value);
}));
}
});
frontend.state.clear_search_filters_BANG_ = (function frontend$state$clear_search_filters_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152),cljs.core.PersistentVector.EMPTY);
});
frontend.state.get_search_mode = (function frontend$state$get_search_mode(){
return new cljs.core.Keyword("search","mode","search/mode",1628111395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.toggle_BANG_ = (function frontend$state$toggle_BANG_(path){
return frontend.state.update_state_BANG_(path,cljs.core.not);
});
frontend.state.toggle_settings_BANG_ = (function frontend$state$toggle_settings_BANG_(){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343));
});
frontend.state.settings_open_QMARK_ = (function frontend$state$settings_open_QMARK_(){
return new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.close_settings_BANG_ = (function frontend$state$close_settings_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343),false);
});
frontend.state.open_settings_BANG_ = (function frontend$state$open_settings_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343),true);
});
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state.editor_op !== 'undefined')){
} else {
frontend.state.editor_op = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.state.set_editor_op_BANG_ = (function frontend$state$set_editor_op_BANG_(value){
return cljs.core.reset_BANG_(frontend.state.editor_op,value);
});
frontend.state.get_editor_op = (function frontend$state$get_editor_op(){
return cljs.core.deref(frontend.state.editor_op);
});
frontend.state.get_start_of_week = (function frontend$state$get_start_of_week(){
var or__5043__auto__ = (function (){var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824)], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824)], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return (6);
}
}
});
frontend.state.get_ref_open_blocks_level = (function frontend$state$get_ref_open_blocks_level(){
var or__5043__auto__ = (function (){var temp__5720__auto__ = new cljs.core.Keyword("ref","default-open-blocks-level","ref/default-open-blocks-level",-51352945).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5720__auto__)){
var value = temp__5720__auto__;
if(cljs.core.integer_QMARK_(value)){
return value;
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (2);
}
});
frontend.state.get_linked_references_collapsed_threshold = (function frontend$state$get_linked_references_collapsed_threshold(){
var or__5043__auto__ = (function (){var temp__5720__auto__ = new cljs.core.Keyword("ref","linked-references-collapsed-threshold","ref/linked-references-collapsed-threshold",-693553743).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5720__auto__)){
var value = temp__5720__auto__;
if(cljs.core.integer_QMARK_(value)){
return value;
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (100);
}
});
frontend.state.get_events_chan = (function frontend$state$get_events_chan(){
return new cljs.core.Keyword("system","events","system/events",-1178951588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.pub_event_BANG_ = (function frontend$state$pub_event_BANG_(payload){
var chan = frontend.state.get_events_chan();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,payload);
});
frontend.state.get_copied_blocks = (function frontend$state$get_copied_blocks(){
return new cljs.core.Keyword("copy","blocks","copy/blocks",-611604822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_copied_blocks = (function frontend$state$set_copied_blocks(content,ids){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("copy","blocks","copy/blocks",-611604822),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("copy","graph","copy/graph",1554769580),frontend.state.get_current_repo(),new cljs.core.Keyword("copy","content","copy/content",12765453),content,new cljs.core.Keyword("copy","block-ids","copy/block-ids",560775165),ids,new cljs.core.Keyword("copy","full-blocks","copy/full-blocks",-1316121892),null], null));
});
frontend.state.set_copied_full_blocks = (function frontend$state$set_copied_full_blocks(content,blocks){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("copy","blocks","copy/blocks",-611604822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("copy","graph","copy/graph",1554769580),frontend.state.get_current_repo(),new cljs.core.Keyword("copy","content","copy/content",12765453),content,new cljs.core.Keyword("copy","full-blocks","copy/full-blocks",-1316121892),blocks], null));
});
frontend.state.set_copied_full_blocks_BANG_ = (function frontend$state$set_copied_full_blocks_BANG_(blocks){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("copy","blocks","copy/blocks",-611604822),new cljs.core.Keyword("copy","full-blocks","copy/full-blocks",-1316121892)], null),blocks);
});
frontend.state.get_export_block_text_indent_style = (function frontend$state$get_export_block_text_indent_style(){
return new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_export_block_text_indent_style_BANG_ = (function frontend$state$set_export_block_text_indent_style_BANG_(v){
frontend.state.set_state_BANG_(new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180),v);

return frontend.storage.set(new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180),v);
});
frontend.state.get_export_block_text_remove_options = (function frontend$state$get_export_block_text_remove_options(){
return new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.update_export_block_text_remove_options_BANG_ = (function frontend$state$update_export_block_text_remove_options_BANG_(e,k){
var f = (cljs.core.truth_(frontend.util.echecked_QMARK_(e))?cljs.core.conj:cljs.core.disj);
frontend.state.update_state_BANG_(new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869),(function (p1__58903_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__58903_SHARP_,k) : f.call(null,p1__58903_SHARP_,k));
}));

return frontend.storage.set(new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869),frontend.state.get_export_block_text_remove_options());
});
frontend.state.set_editor_args_BANG_ = (function frontend$state$set_editor_args_BANG_(args){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","args","editor/args",208005741),args);
});
frontend.state.block_component_editing_QMARK_ = (function frontend$state$block_component_editing_QMARK_(){
return new cljs.core.Keyword("block","component-editing-mode?","block/component-editing-mode?",-1744931560).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_block_component_editing_mode_BANG_ = (function frontend$state$set_block_component_editing_mode_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("block","component-editing-mode?","block/component-editing-mode?",-1744931560),value);
});
frontend.state.logical_outdenting_QMARK_ = (function frontend$state$logical_outdenting_QMARK_(){
return new cljs.core.Keyword("editor","logical-outdenting?","editor/logical-outdenting?",-234289706).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),frontend.state.get_current_repo()));
});
frontend.state.get_editor_args = (function frontend$state$get_editor_args(){
return new cljs.core.Keyword("editor","args","editor/args",208005741).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_export_bullet_indentation = (function frontend$state$get_export_bullet_indentation(){
var G__58911 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("export","bullet-indentation","export/bullet-indentation",-647274253),new cljs.core.Keyword(null,"tab","tab",-559583621));
var G__58911__$1 = (((G__58911 instanceof cljs.core.Keyword))?G__58911.fqn:null);
switch (G__58911__$1) {
case "eight-spaces":
return "        ";

break;
case "four-spaces":
return "    ";

break;
case "two-spaces":
return "  ";

break;
case "tab":
return "\t";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58911__$1)].join('')));

}
});
frontend.state.set_page_blocks_cp_BANG_ = (function frontend$state$set_page_blocks_cp_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),new cljs.core.Keyword(null,"page-blocks","page-blocks",1869088690)], null),value);
});
frontend.state.get_page_blocks_cp = (function frontend$state$get_page_blocks_cp(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),new cljs.core.Keyword(null,"page-blocks","page-blocks",1869088690)], null));
});
frontend.state.set_component_BANG_ = (function frontend$state$set_component_BANG_(k,value){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),k], null),value);
});
frontend.state.get_component = (function frontend$state$get_component(k){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),k], null));
});
frontend.state.exit_editing_and_set_selected_blocks_BANG_ = (function frontend$state$exit_editing_and_set_selected_blocks_BANG_(var_args){
var G__58915 = arguments.length;
switch (G__58915) {
case 1:
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks,new cljs.core.Keyword(null,"down","down",1565245570));
}));

(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (blocks,direction){
frontend.state.clear_edit_BANG_();

return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks,direction);
}));

(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.remove_watch_state = (function frontend$state$remove_watch_state(key){
return cljs.core.remove_watch(frontend.state.state,key);
});
frontend.state.get_git_auto_commit_enabled_QMARK_ = (function frontend$state$get_git_auto_commit_enabled_QMARK_(){
return frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("git","disable-auto-commit?","git/disable-auto-commit?",1374476539)], null)) === false;
});
frontend.state.set_last_key_code_BANG_ = (function frontend$state$set_last_key_code_BANG_(key_code){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236),key_code);
});
frontend.state.get_last_key_code = (function frontend$state$get_last_key_code(){
return new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_plugin_by_id = (function frontend$state$get_plugin_by_id(id){
var temp__5720__auto__ = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var id__$1 = temp__5720__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),id__$1], null));
} else {
return null;
}
});
frontend.state.get_enabled_QMARK__installed_plugins = (function frontend$state$get_enabled_QMARK__installed_plugins(var_args){
var G__58920 = arguments.length;
switch (G__58920) {
case 1:
return frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$1 = (function (theme_QMARK_){
return frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$3(theme_QMARK_,true,false);
}));

(frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$3 = (function (theme_QMARK_,enabled_QMARK_,include_unpacked_QMARK_){
return cljs.core.filterv((function (p1__58918_SHARP_){
var and__5041__auto__ = (cljs.core.truth_(include_unpacked_QMARK_)?true:new cljs.core.Keyword(null,"iir","iir",-231680811).cljs$core$IFn$_invoke$arity$1(p1__58918_SHARP_));
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (((!(cljs.core.boolean_QMARK_(enabled_QMARK_))))?true:cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.not(enabled_QMARK_),cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58918_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)))));
if(and__5041__auto____$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(theme_QMARK_),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__58918_SHARP_));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),cljs.core.vals(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
}));

(frontend.state.get_enabled_QMARK__installed_plugins.cljs$lang$maxFixedArity = 3);

frontend.state.lsp_enabled_QMARK__or_theme = (function frontend$state$lsp_enabled_QMARK__or_theme(){
return new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.lsp_enabled_QMARK_ = frontend.state.lsp_enabled_QMARK__or_theme();
frontend.state.consume_updates_coming_plugin = (function frontend$state$consume_updates_coming_plugin(payload,updated_QMARK_){
var temp__5720__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload));
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
var pending_QMARK_ = cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update,new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

if(cljs.core.truth_(updated_QMARK_)){
var temp__5718__auto___59087 = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(temp__5718__auto___59087)){
var error_59088 = temp__5718__auto___59087;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-code","error-code",180497232),error_59088], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update,new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update,new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,payload], 0));
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","consume-updates","plugin/consume-updates",-331798674),id,pending_QMARK_,updated_QMARK_], null));
} else {
return null;
}
});
frontend.state.coming_update_new_version_QMARK_ = (function frontend$state$coming_update_new_version_QMARK_(pkg){
var and__5041__auto__ = pkg;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(pkg);
} else {
return and__5041__auto__;
}
});
frontend.state.plugin_update_available_QMARK_ = (function frontend$state$plugin_update_available_QMARK_(id){
var temp__5720__auto__ = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var pkg = temp__5720__auto__;
return frontend.state.coming_update_new_version_QMARK_(pkg);
} else {
return null;
}
});
frontend.state.all_available_coming_updates = (function frontend$state$all_available_coming_updates(){
var temp__5720__auto__ = cljs.core.vals(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
if(cljs.core.truth_(temp__5720__auto__)){
var updates = temp__5720__auto__;
return cljs.core.filterv((function (p1__58946_SHARP_){
return frontend.state.coming_update_new_version_QMARK_(p1__58946_SHARP_);
}),updates);
} else {
return null;
}
});
frontend.state.get_next_selected_coming_update = (function frontend$state$get_next_selected_coming_update(){
var temp__5720__auto__ = frontend.state.all_available_coming_updates();
if(cljs.core.truth_(temp__5720__auto__)){
var updates = temp__5720__auto__;
var unchecked = new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58948_SHARP_){
return (((!(((cljs.core.seq(unchecked)) && (cljs.core.contains_QMARK_(unchecked,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58948_SHARP_))))))) && (cljs.core.not(new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(p1__58948_SHARP_))));
}),updates));
} else {
return null;
}
});
frontend.state.set_unchecked_update = (function frontend$state$set_unchecked_update(id,unchecked_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update,new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111),(cljs.core.truth_(unchecked_QMARK_)?cljs.core.conj:cljs.core.disj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
});
frontend.state.reset_unchecked_update = (function frontend$state$reset_unchecked_update(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111),cljs.core.PersistentHashSet.EMPTY);
});
frontend.state.reset_all_updates_state = (function frontend$state$reset_all_updates_state(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608),false], 0));
});
frontend.state.sub_right_sidebar_blocks = (function frontend$state$sub_right_sidebar_blocks(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var current_repo = temp__5720__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58949_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__58949_SHARP_),current_repo);
}),frontend.state.sub(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475)));
} else {
return null;
}
});
frontend.state.toggle_collapsed_block_BANG_ = (function frontend$state$toggle_collapsed_block_BANG_(block_id){
var current_repo = frontend.state.get_current_repo();
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),current_repo,block_id], null),cljs.core.not);
});
frontend.state.set_collapsed_block_BANG_ = (function frontend$state$set_collapsed_block_BANG_(block_id,value){
var current_repo = frontend.state.get_current_repo();
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),current_repo,block_id], null),value);
});
frontend.state.sub_collapsed = (function frontend$state$sub_collapsed(block_id){
return frontend.state.sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),frontend.state.get_current_repo(),block_id], null));
});
frontend.state.get_modal_id = (function frontend$state$get_modal_id(){
return new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.edit_in_query_component = (function frontend$state$edit_in_query_component(){
var and__5041__auto__ = frontend.state.editing_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(cljs.core.last(frontend.state.get_editor_args()));
} else {
return and__5041__auto__;
}
});
frontend.state.set_auth_id_token = (function frontend$state$set_auth_id_token(id_token){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946),id_token);
});
frontend.state.set_auth_refresh_token = (function frontend$state$set_auth_refresh_token(refresh_token){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760),refresh_token);
});
frontend.state.set_auth_access_token = (function frontend$state$set_auth_access_token(access_token){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","access-token","auth/access-token",-657486615),access_token);
});
frontend.state.get_auth_id_token = (function frontend$state$get_auth_id_token(){
return new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_auth_refresh_token = (function frontend$state$get_auth_refresh_token(){
return new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_file_sync_manager = (function frontend$state$set_file_sync_manager(v){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("file-sync","sync-manager","file-sync/sync-manager",49683808),v);
});
frontend.state.set_file_sync_state = (function frontend$state$set_file_sync_state(v){
if(cljs.core.truth_(v)){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),v);
} else {
}
} else {
}
} else {
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("file-sync","sync-state","file-sync/sync-state",-474069969),v);
});
frontend.state.get_file_sync_manager = (function frontend$state$get_file_sync_manager(){
return new cljs.core.Keyword("file-sync","sync-manager","file-sync/sync-manager",49683808).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_file_sync_state = (function frontend$state$get_file_sync_state(){
return new cljs.core.Keyword("file-sync","sync-state","file-sync/sync-state",-474069969).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.reset_file_sync_download_init_state_BANG_ = (function frontend$state$reset_file_sync_download_init_state_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","download-init-progress","file-sync/download-init-progress",-2078408753),frontend.state.get_current_repo()], null),cljs.core.PersistentArrayMap.EMPTY);
});
frontend.state.set_file_sync_download_init_state_BANG_ = (function frontend$state$set_file_sync_download_init_state_BANG_(m){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","download-init-progress","file-sync/download-init-progress",-2078408753),frontend.state.get_current_repo()], null),((cljs.core.fn_QMARK_(m))?m:(function (old_value){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_value,m], 0));
})));
});
frontend.state.get_file_sync_download_init_state = (function frontend$state$get_file_sync_download_init_state(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","download-init-progress","file-sync/download-init-progress",-2078408753),frontend.state.get_current_repo()], null));
});
frontend.state.reset_parsing_state_BANG_ = (function frontend$state$reset_parsing_state_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","parsing-state","graph/parsing-state",-1745487605),frontend.state.get_current_repo()], null),cljs.core.PersistentArrayMap.EMPTY);
});
frontend.state.set_parsing_state_BANG_ = (function frontend$state$set_parsing_state_BANG_(m){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","parsing-state","graph/parsing-state",-1745487605),frontend.state.get_current_repo()], null),((cljs.core.fn_QMARK_(m))?m:(function (old_value){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_value,m], 0));
})));
});
frontend.state.enable_encryption_QMARK_ = (function frontend$state$enable_encryption_QMARK_(repo){
return new cljs.core.Keyword("feature","enable-encryption?","feature/enable-encryption?",-684347027).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub_config(),repo));
});

//# sourceMappingURL=frontend.state.js.map
