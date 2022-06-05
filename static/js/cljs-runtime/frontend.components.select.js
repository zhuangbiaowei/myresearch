goog.provide('frontend.components.select');
frontend.components.select.render_item = rum.core.lazy_build(rum.core.build_defc,(function (p__58663,chosen_QMARK_){
var map__58664 = p__58663;
var map__58664__$1 = cljs.core.__destructure_map(map__58664);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword(null,"value","value",305978217));
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inline-grid","grid-cols-4","gap-x-4","w-full",(cljs.core.truth_(chosen_QMARK_)?"chosen":null)], null))},[(function (){var attrs58667 = value;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58667))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-span-3"], null)], null),attrs58667], 0))):{'className':"col-span-3"}),((cljs.core.map_QMARK_(attrs58667))?null:[daiquiri.interpreter.interpret(attrs58667)]));
})(),(function (){var attrs58668 = (cljs.core.truth_(id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.opacity-20.bg-transparent","code.opacity-20.bg-transparent",-2039164517),id], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58668))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-span-1","justify-end","tip","flex"], null)], null),attrs58668], 0))):{'className':"col-span-1 justify-end tip flex"}),((cljs.core.map_QMARK_(attrs58668))?null:[daiquiri.interpreter.interpret(attrs58668)]));
})()]);
}),null,"frontend.components.select/render-item");
frontend.components.select.select = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__58671){
var map__58672 = p__58671;
var map__58672__$1 = cljs.core.__destructure_map(map__58672);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58672__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100));
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var empty_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58672__$1,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),(function (_t){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
var prompt_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58672__$1,new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683),new cljs.core.Keyword("select","default-prompt","select/default-prompt",-657561626));
var input = new cljs.core.Keyword("frontend.components.select","input","frontend.components.select/input",-1394442831).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",{'className':"cp__select cp__select-main"},[daiquiri.core.create_element("div",{'className':"input-wrap"},[daiquiri.core.create_element("input",{'type':"text",'placeholder':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prompt_key], 0)),'autoFocus':true,'value':cljs.core.deref(input),'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(input,frontend.util.evalue(e));
})),'className':"cp__select-input w-full"},[])]),daiquiri.core.create_element("div",{'className':"item-results-wrap"},[frontend.ui.auto_complete(frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(items,cljs.core.deref(input),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"value","value",305978217)], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item-render","item-render",253627868),frontend.components.select.render_item,new cljs.core.Keyword(null,"class","class",-2030961996),"cp__select-results",new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (x){
frontend.state.close_modal_BANG_();

return (on_chosen.cljs$core$IFn$_invoke$arity$1 ? on_chosen.cljs$core$IFn$_invoke$arity$1(x) : on_chosen.call(null,x));
}),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),(empty_placeholder.cljs$core$IFn$_invoke$arity$1 ? empty_placeholder.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t) : empty_placeholder.call(null,frontend.context.i18n.t))], null))])]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.modules.shortcut.core.disable_all_shortcuts(),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.select","input","frontend.components.select/input",-1394442831)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","open-select","ui/open-select",687174842)], null),null);

return state;
})], null)], null),"frontend.components.select/select");
/**
 * Config that supports multiple types (uses) of this component. To add a new
 *   type, add a key with the value being a map with the following keys:
 * 
 *   * :items-fn - fn that returns items with a :value key that are used for the
 *  fuzzy search and selection. Items can have an optional :id and are displayed
 *  lightly for a given item.
 *   * :on-chosen - fn that is given item when it is chosen.
 *   * :empty-placeholder (optional) - fn that returns hiccup html to render if no
 *  matched graphs found.
 *   * :prompt-key (optional) - dictionary keyword that prompts when components is
 *  first open. Defaults to :select/default-prompt.
 */
frontend.components.select.select_config = (function frontend$components$select$select_config(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-open","graph-open",-328022081),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items-fn","items-fn",1580041737),(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58678){
var map__58679 = p__58678;
var map__58679__$1 = cljs.core.__destructure_map(map__58679);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58679__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),frontend.util.text.get_graph_name_from_path(((frontend.config.local_db_QMARK_(url))?frontend.config.get_local_dir(url):(frontend.db.get_repo_path.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_repo_path.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.get_repo_path.call(null,url)))),new cljs.core.Keyword(null,"id","id",-1388402092),frontend.config.get_repo_dir(url),new cljs.core.Keyword(null,"graph","graph",1558099509),url], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58683){
var map__58684 = p__58683;
var map__58684__$1 = cljs.core.__destructure_map(map__58684);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword(null,"url","url",276297046));
return ((frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(url)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,frontend.state.get_current_repo())));
}),frontend.state.get_repos()));
}),new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683),new cljs.core.Keyword("select.graph","prompt","select.graph/prompt",640552877),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (p1__58676_SHARP_){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(p1__58676_SHARP_)], null));
}),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),(function (t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-2","div.px-4.py-2",441645500),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2","div.mb-2",-710047800),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("select.graph","empty-placeholder-description","select.graph/empty-placeholder-description",-1915654845)) : t.call(null,new cljs.core.Keyword("select.graph","empty-placeholder-description","select.graph/empty-placeholder-description",-1915654845)))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("select.graph","add-graph","select.graph/add-graph",-167280293)) : t.call(null,new cljs.core.Keyword("select.graph","add-graph","select.graph/add-graph",-167280293))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repo-add","repo-add",458734484)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.close_modal_BANG_], 0))], null);
})], null),new cljs.core.Keyword(null,"graph-remove","graph-remove",-143683669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items-fn","items-fn",1580041737),(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58687){
var map__58688 = p__58687;
var map__58688__$1 = cljs.core.__destructure_map(map__58688);
var original_graph = map__58688__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),frontend.util.text.get_graph_name_from_path(((frontend.config.local_db_QMARK_(url))?frontend.config.get_local_dir(url):(frontend.db.get_repo_path.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_repo_path.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.get_repo_path.call(null,url)))),new cljs.core.Keyword(null,"id","id",-1388402092),frontend.config.get_repo_dir(url),new cljs.core.Keyword(null,"graph","graph",1558099509),url,new cljs.core.Keyword(null,"original-graph","original-graph",1959751157),original_graph], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58689){
var map__58690 = p__58689;
var map__58690__$1 = cljs.core.__destructure_map(map__58690);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58690__$1,new cljs.core.Keyword(null,"url","url",276297046));
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(url);
}),frontend.state.get_repos()));
}),new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (p1__58677_SHARP_){
return frontend.handler.repo.remove_repo_BANG_(new cljs.core.Keyword(null,"original-graph","original-graph",1959751157).cljs$core$IFn$_invoke$arity$1(p1__58677_SHARP_));
})], null)], null);
});
frontend.components.select.select_modal = rum.core.lazy_build(rum.core.build_defc,(function (){
var temp__5720__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","open-select","ui/open-select",687174842)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var select_type = temp__5720__auto__;
var select_type_config_58697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.components.select.select_config(),select_type);
frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.components.select.select(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(select_type_config_58697,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085),new cljs.core.Keyword(null,"prompt-key","prompt-key",1549371683)], null)),new cljs.core.Keyword(null,"items","items",1031954938),(function (){var fexpr__58694 = new cljs.core.Keyword(null,"items-fn","items-fn",1580041737).cljs$core$IFn$_invoke$arity$1(select_type_config_58697);
return (fexpr__58694.cljs$core$IFn$_invoke$arity$0 ? fexpr__58694.cljs$core$IFn$_invoke$arity$0() : fexpr__58694.call(null));
})()));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),false,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false], null));

return null;
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.select/select-modal");

//# sourceMappingURL=frontend.components.select.js.map
