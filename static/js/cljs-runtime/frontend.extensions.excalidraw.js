goog.provide('frontend.extensions.excalidraw');
goog.scope(function(){
  frontend.extensions.excalidraw.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$excalidraw$excalidraw$dist$excalidraw_production_min=shadow.js.require("module$node_modules$$excalidraw$excalidraw$dist$excalidraw_production_min", {});
frontend.extensions.excalidraw.excalidraw = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.extensions.excalidraw.goog$module$goog$object.get(module$node_modules$$excalidraw$excalidraw$dist$excalidraw_production_min,"default"));
frontend.extensions.excalidraw.serialize_as_json = frontend.extensions.excalidraw.goog$module$goog$object.get(module$node_modules$$excalidraw$excalidraw$dist$excalidraw_production_min,"serializeAsJSON");
frontend.extensions.excalidraw.from_json = (function frontend$extensions$excalidraw$from_json(text){
if(clojure.string.blank_QMARK_(text)){
return null;
} else {
try{return JSON.parse(text);
}catch (e60440){if((e60440 instanceof Error)){
var e = e60440;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["from json error:"], 0));

console.dir(e);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.util.format("Could not load this invalid excalidraw file"),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
throw e60440;

}
}}
});
frontend.extensions.excalidraw.update_draw_content_width = (function frontend$extensions$excalidraw$update_draw_content_width(state){
var temp__5720__auto__ = rum.core.dom_node(state);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
var el_60452__$1 = el.querySelector(".draw-wrap");
while(true){
if((((el_60452__$1 == null)) || ((((void 0 === el_60452__$1)) || ((void 0 === el_60452__$1.classList)))))){
} else {
if(cljs.core.truth_(el_60452__$1.classList.contains("block-content"))){
var width_60454 = el_60452__$1.clientWidth;
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.extensions.excalidraw","draw-width","frontend.extensions.excalidraw/draw-width",-681100043).cljs$core$IFn$_invoke$arity$1(state),width_60454);
} else {
var G__60455 = el_60452__$1.parentNode;
el_60452__$1 = G__60455;
continue;

}
}
break;
}

return state;
} else {
return null;
}
});
frontend.extensions.excalidraw.draw_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,data,option){
var _STAR_draw_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.extensions.excalidraw","draw-width","frontend.extensions.excalidraw/draw-width",-681100043));
var _STAR_zen_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.extensions.excalidraw","zen-mode?","frontend.extensions.excalidraw/zen-mode?",1559773511));
var _STAR_view_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.extensions.excalidraw","view-mode?","frontend.extensions.excalidraw/view-mode?",525380621));
var _STAR_grid_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.extensions.excalidraw","grid-mode?","frontend.extensions.excalidraw/grid-mode?",-1189627787));
var wide_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061));
var _STAR_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.extensions.excalidraw","elements","frontend.extensions.excalidraw/elements",1745667967));
var map__60441 = option;
var map__60441__$1 = cljs.core.__destructure_map(map__60441);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60441__$1,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638));
if(cljs.core.truth_(data)){
return daiquiri.core.create_element("div",{'onMouseDown':(function (e){
return frontend.util.stop(e);
}),'className':"overflow-hidden"},[daiquiri.core.create_element("div",{'style':{'fontSize':(10)},'className':"my-1"},[daiquiri.core.create_element("a",{'onClick':frontend.handler.ui.toggle_wide_mode_BANG_,'className':"mr-2"},[daiquiri.interpreter.interpret(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Wide Mode (%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(wide_mode_QMARK_)?"ON":"OFF")], 0)))]),daiquiri.core.create_element("a",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_zen_mode_QMARK_,cljs.core.not);
}),'className':"mr-2"},[daiquiri.interpreter.interpret(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Zen Mode (%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.deref(_STAR_zen_mode_QMARK_))?"ON":"OFF")], 0)))]),daiquiri.core.create_element("a",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_view_mode_QMARK_,cljs.core.not);
}),'className':"mr-2"},[daiquiri.interpreter.interpret(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("View Mode (%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.deref(_STAR_view_mode_QMARK_))?"ON":"OFF")], 0)))]),daiquiri.core.create_element("a",{'onClick':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_grid_mode_QMARK_,cljs.core.not);
}),'className':"mr-2"},[daiquiri.interpreter.interpret(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Grid Mode (%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.deref(_STAR_view_mode_QMARK_))?"ON":"OFF")], 0)))]),daiquiri.core.create_element("a",{'onClick':(function (){
var temp__5720__auto__ = (function (){var G__60442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__60442) : frontend.db.pull.call(null,G__60442));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"max","max",61366548),block_uuid);
} else {
return null;
}
}),'className':"mr-2"},["Edit Block"])]),daiquiri.core.create_element("div",{'onMouseDown':(function (e){
frontend.util.stop(e);

return frontend.state.set_block_component_editing_mode_BANG_(true);
}),'onBlur':(function (){
return frontend.state.set_block_component_editing_mode_BANG_(false);
}),'style':{'width':cljs.core.deref(_STAR_draw_width),'height':(cljs.core.truth_(wide_mode_QMARK_)?(650):(500))},'className':"draw-wrap"},[daiquiri.interpreter.interpret((function (){var G__60444 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (elements,app_state){
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("down",frontend.extensions.excalidraw.goog$module$goog$object.get(app_state,"cursorButton"));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.extensions.excalidraw.goog$module$goog$object.get(app_state,"draggingElement");
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = frontend.extensions.excalidraw.goog$module$goog$object.get(app_state,"editingElement");
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = frontend.extensions.excalidraw.goog$module$goog$object.get(app_state,"editingGroupId");
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
return frontend.extensions.excalidraw.goog$module$goog$object.get(app_state,"editingLinearElement");
}
}
}
}
})())){
return null;
} else {
var elements__GT_clj = cljs_bean.core.__GT_clj(elements);
if(((cljs.core.seq(elements__GT_clj)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(elements__GT_clj,cljs.core.deref(_STAR_elements))))){
cljs.core.reset_BANG_(_STAR_elements,elements__GT_clj);

return frontend.handler.draw.save_excalidraw_BANG_(file,(frontend.extensions.excalidraw.serialize_as_json.cljs$core$IFn$_invoke$arity$2 ? frontend.extensions.excalidraw.serialize_as_json.cljs$core$IFn$_invoke$arity$2(elements,app_state) : frontend.extensions.excalidraw.serialize_as_json.call(null,elements,app_state)));
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"zen-mode-enabled","zen-mode-enabled",-955634269),cljs.core.deref(_STAR_zen_mode_QMARK_),new cljs.core.Keyword(null,"view-mode-enabled","view-mode-enabled",-588220561),cljs.core.deref(_STAR_view_mode_QMARK_),new cljs.core.Keyword(null,"grid-mode-enabled","grid-mode-enabled",584978327),cljs.core.deref(_STAR_grid_mode_QMARK_),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),data], null)], 0));
return (frontend.extensions.excalidraw.excalidraw.cljs$core$IFn$_invoke$arity$1 ? frontend.extensions.excalidraw.excalidraw.cljs$core$IFn$_invoke$arity$1(G__60444) : frontend.extensions.excalidraw.excalidraw.call(null,G__60444));
})())])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2((800),new cljs.core.Keyword("frontend.extensions.excalidraw","draw-width","frontend.extensions.excalidraw/draw-width",-681100043)),rum.core.local.cljs$core$IFn$_invoke$arity$2(true,new cljs.core.Keyword("frontend.extensions.excalidraw","zen-mode?","frontend.extensions.excalidraw/zen-mode?",1559773511)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.extensions.excalidraw","view-mode?","frontend.extensions.excalidraw/view-mode?",525380621)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.extensions.excalidraw","grid-mode?","frontend.extensions.excalidraw/grid-mode?",-1189627787)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.extensions.excalidraw","elements","frontend.extensions.excalidraw/elements",1745667967)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),frontend.extensions.excalidraw.update_draw_content_width,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),frontend.extensions.excalidraw.update_draw_content_width], null)], null),"frontend.extensions.excalidraw/draw-inner");
frontend.extensions.excalidraw.draw_container = rum.core.lazy_build(rum.core.build_defcs,(function (state,option){
var _STAR_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.extensions.excalidraw","data","frontend.extensions.excalidraw/data",-1371036113));
var _STAR_loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.extensions.excalidraw","loading?","frontend.extensions.excalidraw/loading?",-1335058663));
var loading_QMARK_ = rum.core.react(_STAR_loading_QMARK_);
var data = rum.core.react(_STAR_data);
var db_restoring_QMARK_ = frontend.state.sub(new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(option))){
if(cljs.core.truth_(db_restoring_QMARK_)){
var attrs60445 = frontend.ui.loading("Loading");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs60445))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ls-center"], null)], null),attrs60445], 0))):{'className':"ls-center"}),((cljs.core.map_QMARK_(attrs60445))?null:[daiquiri.interpreter.interpret(attrs60445)]));
} else {
if(loading_QMARK_ === false){
return frontend.extensions.excalidraw.draw_inner(data,option);
} else {
return null;

}
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var vec__60446 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60446,(0),null);
var file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(option);
var _STAR_data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_loading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(cljs.core.truth_(file)){
frontend.handler.draw.load_excalidraw_file(file,(function (data){
var data__$1 = frontend.extensions.excalidraw.from_json(data);
cljs.core.reset_BANG_(_STAR_data,data__$1);

return cljs.core.reset_BANG_(_STAR_loading_QMARK_,false);
}));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("frontend.extensions.excalidraw","data","frontend.extensions.excalidraw/data",-1371036113),_STAR_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.extensions.excalidraw","loading?","frontend.extensions.excalidraw/loading?",-1335058663),_STAR_loading_QMARK_], 0));
})], null)], null),"frontend.extensions.excalidraw/draw-container");
frontend.extensions.excalidraw.draw = rum.core.lazy_build(rum.core.build_defc,(function (option){
var repo = frontend.state.get_current_repo();
var granted_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nfs","user-granted?","nfs/user-granted?",-1655101253),repo], null));
if(((frontend.config.local_db_QMARK_(repo)) && (((cljs.core.not(granted_QMARK_)) && (((cljs.core.not(frontend.util.electron_QMARK_())) && (cljs.core.not(frontend.mobile.util.native_platform_QMARK_())))))))){
return null;
} else {
return frontend.extensions.excalidraw.draw_container(option);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.excalidraw/draw");

//# sourceMappingURL=frontend.extensions.excalidraw.js.map
