goog.provide('frontend.components.right_sidebar');
goog.scope(function(){
  frontend.components.right_sidebar.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.right_sidebar.toggle = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
return null;
} else {
return frontend.ui.with_shortcut(new cljs.core.Keyword("ui","toggle-right-sidebar","ui/toggle-right-sidebar",-1502060890),"left",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.fade-link.toggle-right-sidebar","a.button.fade-link.toggle-right-sidebar",-1956871000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_right_sidebar_BANG_], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("layout-sidebar-right",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"20px"], null)], null))], null));
}
}),null,"frontend.components.right-sidebar/toggle");
frontend.components.right_sidebar.block_cp = rum.core.lazy_build(rum.core.build_defc,(function (repo,idx,block){
var id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return frontend.components.page.page(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)], null),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true,new cljs.core.Keyword("sidebar","idx","sidebar/idx",-1047236867),idx,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.right-sidebar/block-cp");
frontend.components.right_sidebar.page_cp = rum.core.lazy_build(rum.core.build_defc,(function (repo,page_name){
return frontend.components.page.page(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page_name], null)], null),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.right-sidebar/page-cp");
frontend.components.right_sidebar.contents = rum.core.lazy_build(rum.core.build_defc,(function (){
var attrs58416 = (function (){var temp__5720__auto__ = (function (){var G__58417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),"contents"], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__58417) : frontend.db.entity.call(null,G__58417));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var contents = temp__5720__auto__;
return frontend.components.page.contents_page(contents);
} else {
return null;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58416))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["contents","flex-col","flex","ml-3"], null)], null),attrs58416], 0))):{'className':"contents flex-col flex ml-3"}),((cljs.core.map_QMARK_(attrs58416))?null:[daiquiri.interpreter.interpret(attrs58416)]));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.right-sidebar/contents");
frontend.components.right_sidebar.block_with_breadcrumb = (function frontend$components$right_sidebar$block_with_breadcrumb(repo,block,idx,sidebar_key,ref_QMARK_){
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(ref_QMARK_)?"ml-8":"ml-1")], null),frontend.components.block.breadcrumb(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"block-parent",new cljs.core.Keyword(null,"block?","block?",1102479923),true,new cljs.core.Keyword(null,"sidebar-key","sidebar-key",2034878565),sidebar_key], null),repo,block_id,cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-2","div.ml-2",1561421207),frontend.components.right_sidebar.block_cp(repo,idx,block)], null)], null);
});
frontend.components.right_sidebar.build_sidebar_item = (function frontend$components$right_sidebar$build_sidebar_item(repo,idx,db_id,block_type){
var G__58418 = block_type;
var G__58418__$1 = (((G__58418 instanceof cljs.core.Keyword))?G__58418.fqn:null);
switch (G__58418__$1) {
case "contents":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","contents","right-side-bar/contents",-293331541)], 0)),frontend.components.right_sidebar.contents()], null);

break;
case "help":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","help","right-side-bar/help",432037932)], 0)),frontend.components.onboarding.help()], null);

break;
case "page-graph":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","page-graph","right-side-bar/page-graph",1357852608)], 0))),frontend.components.page.page_graph()], null);

break;
case "block-ref":
var lookup = ((cljs.core.integer_QMARK_(db_id))?db_id:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),db_id], null));
var temp__5720__auto__ = (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(repo,lookup) : frontend.db.entity.call(null,repo,lookup));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("right-side-bar","block-ref","right-side-bar/block-ref",-642763962)], 0)),frontend.components.right_sidebar.block_with_breadcrumb(repo,block,idx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_id,block_type], null),true)], null);
} else {
return null;
}

break;
case "block":
var lookup = ((cljs.core.integer_QMARK_(db_id))?db_id:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),db_id], null));
var temp__5720__auto__ = (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(repo,lookup) : frontend.db.entity.call(null,repo,lookup));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return frontend.components.right_sidebar.block_with_breadcrumb(repo,block,idx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_id,block_type], null),false);
} else {
return null;
}

break;
case "page":
var temp__5720__auto__ = ((cljs.core.integer_QMARK_(db_id))?new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(db_id) : frontend.db.entity.call(null,db_id))):db_id);
if(cljs.core.truth_(temp__5720__auto__)){
var page_name = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.page-title","a.page-title",-1585051360),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page_name], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(frontend.components.right_sidebar.goog$module$goog$object.get(e,"shiftKey"))){
return e.preventDefault();
} else {
return null;
}
})], null),frontend.db.model.get_page_original_name(page_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-2","div.ml-2",1561421207),frontend.components.right_sidebar.page_cp(repo,page_name)], null)], null);
} else {
return null;
}

break;
case "page-presentation":
var page_name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(db_id) : frontend.db.entity.call(null,db_id)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page_name], null))], null),frontend.db.model.get_page_original_name(page_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-2.slide.mt-2","div.ml-2.slide.mt-2",-576848084),frontend.extensions.slide.slide(page_name)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null);

}
});
frontend.components.right_sidebar.close = (function frontend$components$right_sidebar$close(var_args){
var G__58420 = arguments.length;
switch (G__58420) {
case 1:
return frontend.components.right_sidebar.close.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.right_sidebar.close.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.right_sidebar.close.cljs$core$IFn$_invoke$arity$1 = (function (on_close){
return frontend.components.right_sidebar.close.cljs$core$IFn$_invoke$arity$2(null,on_close);
}));

(frontend.components.right_sidebar.close.cljs$core$IFn$_invoke$arity$2 = (function (class$,on_close){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.close.opacity-50.hover:opacity-100.flex.items-center","a.close.opacity-50.hover:opacity-100.flex.items-center",-2112059636),(function (){var G__58421 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(-4)], null)], null);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58421,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
} else {
return G__58421;
}
})(),frontend.components.svg.close], null);
}));

(frontend.components.right_sidebar.close.cljs$lang$maxFixedArity = 2);

frontend.components.right_sidebar.sidebar_item = rum.core.lazy_build(rum.core.build_defc,(function (repo,idx,db_id,block_type){
var item = frontend.components.right_sidebar.build_sidebar_item(repo,idx,db_id,block_type);
if(cljs.core.truth_(item)){
var collapse_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),db_id], null));
var attrs58428 = (function (){var vec__58429 = item;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58429,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58429,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-between","div.flex.flex-row.justify-between",-1195331864),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.justify-center","div.flex.flex-row.justify-center",1403144069),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-50.hover:opacity-100.flex.items-center.pr-1","a.opacity-50.hover:opacity-100.flex.items-center.pr-1",-1997411781),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_block_toggle_collapse_BANG_(db_id);
})], null),frontend.ui.rotating_arrow(collapse_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-1.font-medium","div.ml-1.font-medium",-1866183074),title], null)], null),frontend.components.right_sidebar.close.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.state.sidebar_remove_block_BANG_(idx);
}))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(collapse_QMARK_)?"hidden":"initial")], null),component], null)], null);
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58428))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sidebar-item","content","color-level","px-4","shadow-lg"], null)], null),attrs58428], 0))):{'className':"sidebar-item content color-level px-4 shadow-lg"}),((cljs.core.map_QMARK_(attrs58428))?null:[daiquiri.interpreter.interpret(attrs58428)]));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.right-sidebar/sidebar-item");
frontend.components.right_sidebar.get_page = (function frontend$components$right_sidebar$get_page(match){
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var page = (function (){var G__58432 = route_name;
var G__58432__$1 = (((G__58432 instanceof cljs.core.Keyword))?G__58432.fqn:null);
switch (G__58432__$1) {
case "page":
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));

break;
case "file":
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null));

break;
default:
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();

}
})();
if(cljs.core.truth_(page)){
return clojure.string.lower_case(page);
} else {
return null;
}
});
frontend.components.right_sidebar.get_current_page = (function frontend$components$right_sidebar$get_current_page(){
var match = new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
return frontend.components.right_sidebar.get_page(match);
});
frontend.components.right_sidebar.sidebar_resizer = rum.core.lazy_build(rum.core.build_defc,(function (){
var el_ref = rum.core.use_ref(null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto___58485 = (function (){var and__5041__auto__ = cljs.core.fn_QMARK_(window.interact);
if(and__5041__auto__){
return rum.core.deref(el_ref);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto___58485)){
var el_58486 = temp__5720__auto___58485;
interact(el_58486).draggable(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
var width = document.documentElement.clientWidth;
var offset = e.rect.left;
var right_el_ratio = ((1) - (offset / width).toFixed((6)));
var right_el_ratio__$1 = (((right_el_ratio < 0.2))?0.2:(((right_el_ratio > 0.7))?0.7:right_el_ratio
));
var right_el = document.getElementById("right-sidebar");
if(cljs.core.truth_(right_el)){
var width__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((right_el_ratio__$1 * (100))),"%"].join('');
right_el.style.setProperty("width",width__$1);

return frontend.handler.ui.persist_right_sidebar_width_BANG_();
} else {
return null;
}
})], null)], null))).styleCursor(false).on("dragstart",(function (){
return document.documentElement.classList.add("is-resizing-buf");
})).on("dragend",(function (){
return document.documentElement.classList.remove("is-resizing-buf");
}));
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("span",{'ref':el_ref,'className':"resizer"},[]);
}),null,"frontend.components.right-sidebar/sidebar-resizer");
frontend.components.right_sidebar.sidebar_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,repo,t,blocks){
var _STAR_anim_finished_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.right-sidebar","anim-finished?","frontend.components.right-sidebar/anim-finished?",-1735910019));
return daiquiri.core.create_element("div",{'id':"right-sidebar-container",'className':"cp__right-sidebar-inner flex flex-col h-full"},[frontend.components.right_sidebar.sidebar_resizer(),daiquiri.core.create_element("div",{'className':"cp__right-sidebar-scrollable"},[daiquiri.core.create_element("div",{'className':"cp__right-sidebar-topbar flex flex-row justify-between items-center pl-4 pr-2 h-12"},[daiquiri.core.create_element("div",{'key':"right-sidebar-settings",'className':"cp__right-sidebar-settings hide-scrollbar"},[daiquiri.core.create_element("div",{'className':"ml-4 text-sm"},[daiquiri.core.create_element("a",{'onClick':(function (_e){
return frontend.state.sidebar_add_block_BANG_(repo,"contents",new cljs.core.Keyword(null,"contents","contents",-1567174023));
}),'className':"cp__right-sidebar-settings-btn"},[daiquiri.interpreter.interpret((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("right-side-bar","contents","right-side-bar/contents",-293331541)) : t.call(null,new cljs.core.Keyword("right-side-bar","contents","right-side-bar/contents",-293331541))))])]),daiquiri.core.create_element("div",{'className':"ml-4 text-sm"},[daiquiri.core.create_element("a",{'onClick':(function (){
var temp__5720__auto__ = frontend.components.right_sidebar.get_current_page();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
return frontend.state.sidebar_add_block_BANG_(repo,page,new cljs.core.Keyword(null,"page-graph","page-graph",1691909522));
} else {
return null;
}
}),'className':"cp__right-sidebar-settings-btn"},[daiquiri.interpreter.interpret((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("right-side-bar","page","right-side-bar/page",1722703195)) : t.call(null,new cljs.core.Keyword("right-side-bar","page","right-side-bar/page",1722703195))))])]),daiquiri.core.create_element("div",{'className':"ml-4 text-sm"},[daiquiri.core.create_element("a",{'onClick':(function (_e){
return frontend.state.sidebar_add_block_BANG_(repo,"help",new cljs.core.Keyword(null,"help","help",-439233446));
}),'className':"cp__right-sidebar-settings-btn"},[daiquiri.interpreter.interpret((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("right-side-bar","help","right-side-bar/help",432037932)) : t.call(null,new cljs.core.Keyword("right-side-bar","help","right-side-bar/help",432037932))))])])]),daiquiri.core.create_element("div",{'style':{'zIndex':(999),'marginRight':(2)},'className':"flex align-items"},[frontend.components.right_sidebar.toggle()])]),(function (){var attrs58465 = (cljs.core.truth_(cljs.core.deref(_STAR_anim_finished_QMARK_))?(function (){var iter__5520__auto__ = (function frontend$components$right_sidebar$iter__58466(s__58467){
return (new cljs.core.LazySeq(null,(function (){
var s__58467__$1 = s__58467;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58467__$1);
if(temp__5720__auto__){
var s__58467__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58467__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58467__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58469 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58468 = (0);
while(true){
if((i__58468 < size__5519__auto__)){
var vec__58470 = cljs.core._nth(c__5518__auto__,i__58468);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(0),null);
var vec__58473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(1),null);
var repo__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58473,(0),null);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58473,(1),null);
var block_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58473,(2),null);
cljs.core.chunk_append(b__58469,rum.core.with_key(frontend.components.right_sidebar.sidebar_item(repo__$1,idx,db_id,block_type),["sidebar-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')));

var G__58487 = (i__58468 + (1));
i__58468 = G__58487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58469),frontend$components$right_sidebar$iter__58466(cljs.core.chunk_rest(s__58467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58469),null);
}
} else {
var vec__58476 = cljs.core.first(s__58467__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58476,(0),null);
var vec__58479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58476,(1),null);
var repo__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(0),null);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(1),null);
var block_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(2),null);
return cljs.core.cons(rum.core.with_key(frontend.components.right_sidebar.sidebar_item(repo__$1,idx,db_id,block_type),["sidebar-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')),frontend$components$right_sidebar$iter__58466(cljs.core.rest(s__58467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(blocks));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.opacity-50","span.font-medium.opacity-50",768466648),"Loading ..."], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58465))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sidebar-item-list","flex-1","scrollbar-spacing"], null)], null),attrs58465], 0))):{'className':"sidebar-item-list flex-1 scrollbar-spacing"}),((cljs.core.map_QMARK_(attrs58465))?null:[daiquiri.interpreter.interpret(attrs58465)]));
})()])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.right-sidebar","anim-finished?","frontend.components.right-sidebar/anim-finished?",-1735910019)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
setTimeout((function (){
return cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.right-sidebar","anim-finished?","frontend.components.right-sidebar/anim-finished?",-1735910019)),true);
}),(300));

return state;
})], null)], null),"frontend.components.right-sidebar/sidebar-inner");
frontend.components.right_sidebar.sidebar = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var blocks = frontend.state.sub_right_sidebar_blocks();
var blocks__$1 = ((cljs.core.empty_QMARK_(blocks))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),"contents",new cljs.core.Keyword(null,"contents","contents",-1567174023),null], null)], null):blocks);
var sidebar_open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887));
var repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
return daiquiri.core.create_element("div",{'id':"right-sidebar",'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__right-sidebar","h-screen",(cljs.core.truth_(sidebar_open_QMARK_)?"open":"closed")], null))},[(cljs.core.truth_(sidebar_open_QMARK_)?frontend.components.right_sidebar.sidebar_inner(repo,frontend.context.i18n.t,blocks__$1):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.right-sidebar/sidebar");

//# sourceMappingURL=frontend.components.right_sidebar.js.map
