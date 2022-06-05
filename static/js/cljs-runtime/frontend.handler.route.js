goog.provide('frontend.handler.route');
/**
 * If `push` is truthy, previous page will be left in history.
 */
frontend.handler.route.redirect_BANG_ = (function frontend$handler$route$redirect_BANG_(p__45680){
var map__45681 = p__45680;
var map__45681__$1 = cljs.core.__destructure_map(map__45681);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45681__$1,new cljs.core.Keyword(null,"to","to",192099007));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45681__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45681__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var push = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45681__$1,new cljs.core.Keyword(null,"push","push",799791267),true);
var route_fn_45694 = (cljs.core.truth_(push)?reitit.frontend.easy.push_state:reitit.frontend.easy.replace_state);
(route_fn_45694.cljs$core$IFn$_invoke$arity$3 ? route_fn_45694.cljs$core$IFn$_invoke$arity$3(to,path_params,query_params) : route_fn_45694.call(null,to,path_params,query_params));

return null;
});
frontend.handler.route.redirect_to_home_BANG_ = (function frontend$handler$route$redirect_to_home_BANG_(var_args){
var G__45683 = arguments.length;
switch (G__45683) {
case 0:
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (pub_event_QMARK_){
if(cljs.core.truth_(pub_event_QMARK_)){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redirect-to-home","redirect-to-home",236144576)], null));
} else {
}

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"home","home",-74557309)], null));
}));

(frontend.handler.route.redirect_to_home_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.route.redirect_to_all_pages_BANG_ = (function frontend$handler$route$redirect_to_all_pages_BANG_(){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062)], null));
});
frontend.handler.route.redirect_to_graph_view_BANG_ = (function frontend$handler$route$redirect_to_graph_view_BANG_(){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"graph","graph",1558099509)], null));
});
/**
 * Must ensure `page-name` is dereferenced (not an alias), or it will create a wrong new page with that name (#3511).
 */
frontend.handler.route.redirect_to_page_BANG_ = (function frontend$handler$route$redirect_to_page_BANG_(var_args){
var G__45685 = arguments.length;
switch (G__45685) {
case 1:
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
frontend.handler.recent.add_page_to_recent_BANG_(frontend.state.get_current_repo(),page_name);

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)], null)], null));
}));

(frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (page_name,anchor){
frontend.handler.recent.add_page_to_recent_BANG_(frontend.state.get_current_repo(),page_name);

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)], null),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor], null)], null));
}));

(frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (page_name,anchor,push){
frontend.handler.recent.add_page_to_recent_BANG_(frontend.state.get_current_repo(),page_name);

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)], null),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor], null),new cljs.core.Keyword(null,"push","push",799791267),push], null));
}));

(frontend.handler.route.redirect_to_page_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.route.get_title = (function frontend$handler$route$get_title(name,path_params){
var G__45686 = name;
var G__45686__$1 = (((G__45686 instanceof cljs.core.Keyword))?G__45686.fqn:null);
switch (G__45686__$1) {
case "home":
return "Logseq";

break;
case "repos":
return "Repos";

break;
case "repo-add":
return "Add another repo";

break;
case "graph":
return "Graph";

break;
case "all-files":
return "All files";

break;
case "all-pages":
return "All pages";

break;
case "all-journals":
return "All journals";

break;
case "file":
return ["File ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(path_params))].join('');

break;
case "new-page":
return "Create a new page";

break;
case "page":
var name__$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(path_params);
var block_QMARK_ = frontend.util.uuid_string_QMARK_(name__$1);
if(cljs.core.truth_(block_QMARK_)){
var temp__5718__auto__ = (function (){var G__45687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(name__$1)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__45687) : frontend.db.entity.call(null,G__45687));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var block = temp__5718__auto__;
var content = logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),frontend.config.get_block_pattern(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block)));
if((cljs.core.count(content) > (48))){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),(48)),"..."].join('');
} else {
return content;
}
} else {
return "Page no longer exists!!";
}
} else {
var page = (function (){var G__45688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(name__$1) : frontend.util.page_name_sanity_lc.call(null,name__$1))], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__45688) : frontend.db.pull.call(null,G__45688));
})();
var or__5043__auto__ = frontend.util.get_page_original_name(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "Logseq";
}
}

break;
case "tag":
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(path_params))].join('');

break;
case "diff":
return "Git diff";

break;
case "draw":
return "Draw";

break;
case "settings":
return "Settings";

break;
case "import":
return "Import data into Logseq";

break;
default:
return "Logseq";

}
});
frontend.handler.route.update_page_title_BANG_ = (function frontend$handler$route$update_page_title_BANG_(route){
var map__45689 = route;
var map__45689__$1 = cljs.core.__destructure_map(map__45689);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45689__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45689__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var title = frontend.handler.route.get_title(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data),path_params);
return frontend.util.set_title_BANG_(title);
});
frontend.handler.route.update_page_label_BANG_ = (function frontend$handler$route$update_page_label_BANG_(route){
var map__45690 = route;
var map__45690__$1 = cljs.core.__destructure_map(map__45690);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45690__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5720__auto__)){
var data_name = temp__5720__auto__;
return (document.body.dataset.page = cljs.core.name(data_name));
} else {
return null;
}
});
frontend.handler.route.jump_to_anchor_BANG_ = (function frontend$handler$route$jump_to_anchor_BANG_(anchor_text){
if(cljs.core.truth_(anchor_text)){
return setTimeout((function (){
return frontend.handler.ui.highlight_element_BANG_(anchor_text);
}),(200));
} else {
return null;
}
});
frontend.handler.route.set_route_match_BANG_ = (function frontend$handler$route$set_route_match_BANG_(route){
var route__$1 = route;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),route__$1);

frontend.handler.route.update_page_title_BANG_(route__$1);

frontend.handler.route.update_page_label_BANG_(route__$1);

var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null));
if(cljs.core.truth_(temp__5718__auto__)){
var anchor = temp__5718__auto__;
return frontend.handler.route.jump_to_anchor_BANG_(anchor);
} else {
return setTimeout((function (){
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$3(frontend.util.app_scroll_container_node(),frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$0(),false);
}),(100));
}
});
frontend.handler.route.go_to_search_BANG_ = (function frontend$handler$route$go_to_search_BANG_(search_mode){
frontend.handler.search.clear_search_BANG_.cljs$core$IFn$_invoke$arity$1(false);

if(cljs.core.truth_(search_mode)){
frontend.state.set_search_mode_BANG_(search_mode);
} else {
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","search","go/search",1564957958)], null));
});
frontend.handler.route.go_to_journals_BANG_ = (function frontend$handler$route$go_to_journals_BANG_(){
frontend.state.set_journals_length_BANG_((3));

var route_45698 = ((frontend.state.custom_home_page_QMARK_())?new cljs.core.Keyword(null,"all-journals","all-journals",-347015095):new cljs.core.Keyword(null,"home","home",-74557309));
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),route_45698], null));

return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0();
});
frontend.handler.route.redirect_to_file_BANG_ = (function frontend$handler$route$redirect_to_file_BANG_(page){
var temp__5720__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((function (){var G__45691 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__45692 = clojure.string.lower_case(page);
return (frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1(G__45692) : frontend.db.get_page_file.call(null,G__45692));
})());
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__45691) : frontend.db.entity.call(null,G__45691));
})());
if(cljs.core.truth_(temp__5720__auto__)){
var path = temp__5720__auto__;
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null));
} else {
return null;
}
});
frontend.handler.route.toggle_between_page_and_file_BANG_ = (function frontend$handler$route$toggle_between_page_and_file_BANG_(_e){
var current_route = frontend.state.get_current_route();
var G__45693 = current_route;
var G__45693__$1 = (((G__45693 instanceof cljs.core.Keyword))?G__45693.fqn:null);
switch (G__45693__$1) {
case "home":
return frontend.handler.route.redirect_to_file_BANG_(frontend.date.today());

break;
case "all-journals":
return frontend.handler.route.redirect_to_file_BANG_(frontend.date.today());

break;
case "page":
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var page_name = temp__5720__auto__;
return frontend.handler.route.redirect_to_file_BANG_(page_name);
} else {
return null;
}

break;
case "file":
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var path = temp__5720__auto__;
var temp__5720__auto____$1 = (frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file_page.call(null,path));
if(cljs.core.truth_(temp__5720__auto____$1)){
var page = temp__5720__auto____$1;
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page);
} else {
return null;
}
} else {
return null;
}

break;
default:
return null;

}
});

//# sourceMappingURL=frontend.handler.route.js.map
