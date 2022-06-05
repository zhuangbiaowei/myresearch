goog.provide('frontend.components.content');
goog.scope(function(){
  frontend.components.content.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.content.set_format_js_loading_BANG_ = (function frontend$components$content$set_format_js_loading_BANG_(format,value){
if(cljs.core.truth_(format)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("format","loading","format/loading",-2001626722),format], null),value);
} else {
return null;
}
});
frontend.components.content.lazy_load = (function frontend$components$content$lazy_load(format){
var format__$1 = logseq.graph_parser.util.normalize_format(format);
var temp__5720__auto__ = frontend.format.get_format_record(format__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var record = temp__5720__auto__;
if(cljs.core.truth_(frontend.format.protocol.loaded_QMARK_(record))){
return null;
} else {
frontend.components.content.set_format_js_loading_BANG_(format__$1,true);

return frontend.format.protocol.lazyLoad(record,(function (_result){
return frontend.components.content.set_format_js_loading_BANG_(format__$1,false);
}));
}
} else {
return null;
}
});
frontend.components.content.lazy_load_js = (function frontend$components$content$lazy_load_js(state){
var temp__5720__auto__ = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(temp__5720__auto__)){
var format = temp__5720__auto__;
var loader_QMARK_ = cljs.core.contains_QMARK_(frontend.config.html_render_formats,format);
if(loader_QMARK_){
if(cljs.core.truth_(frontend.format.loaded_QMARK_(format))){
return null;
} else {
return frontend.components.content.lazy_load(format);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.components.content.custom_context_menu_content = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'id':"custom-context-menu"},[daiquiri.core.create_element("div",{'className':"py-1 rounded-md bg-base-3 shadow-xs"},[frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cut",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.cut_selection_blocks(true);
})], null),"Cut"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.copy_selection_blocks], null),"Copy"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy as",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var block_uuids = frontend.handler.editor.get_selected_toplevel_block_uuids();
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.export$.export_blocks(block_uuids);
}));
})], null),"Copy as"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy block refs",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.copy_block_refs], null),"Copy block refs"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy block embeds",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.copy_block_embeds], null),"Copy block embeds"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cycle todos",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.editor.cycle_todos_BANG_], null),"Cycle todos")])]);
}),null,"frontend.components.content/custom-context-menu-content");
frontend.components.content.block_background_colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#533e7d","#497d46","#787f97","#978626","#49767b","#264c9b","#793e3e"], null);
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.content !== 'undefined') && (typeof frontend.components.content._STAR_template_including_parent_QMARK_ !== 'undefined')){
} else {
frontend.components.content._STAR_template_including_parent_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.content.template_checkbox = rum.core.lazy_build(rum.core.build_defc,(function (template_including_parent_QMARK_){
return daiquiri.core.create_element("div",{'className':"flex flex-row"},[daiquiri.core.create_element("span",{'className':"text-medium mr-2"},["Including the parent block in the template?"]),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$2(template_including_parent_QMARK_,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.content._STAR_template_including_parent_QMARK_,cljs.core.not);
})))]);
}),null,"frontend.components.content/template-checkbox");
frontend.components.content.block_template = rum.core.lazy_build(rum.core.build_defcs,(function (state,block_id){
var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.content","edit?","frontend.components.content/edit?",117022613));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.content","input","frontend.components.content/input",-328843080));
var template_including_parent_QMARK_ = rum.core.react(frontend.components.content._STAR_template_including_parent_QMARK_);
var block_id__$1 = ((typeof block_id === 'string')?cljs.core.uuid(block_id):block_id);
var block = (function (){var G__57586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__57586) : frontend.db.entity.call(null,G__57586));
})();
var has_children_QMARK_ = cljs.core.seq(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block));
if((((template_including_parent_QMARK_ == null)) && (has_children_QMARK_))){
cljs.core.reset_BANG_(frontend.components.content._STAR_template_including_parent_QMARK_,true);
} else {
}

if(cljs.core.truth_(cljs.core.deref(edit_QMARK_))){
frontend.state.clear_edit_BANG_();

return daiquiri.core.create_element("div",{'onClick':(function (e){
return frontend.util.stop(e);
}),'className':"px-4 py-2"},[daiquiri.core.create_element("p",null,["What's the template's name?"]),daiquiri.core.create_element("input",{'id':"new-template",'autoFocus':true,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(input,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},[]),((has_children_QMARK_)?frontend.components.content.template_checkbox(template_including_parent_QMARK_):null),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Submit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var title = clojure.string.trim(cljs.core.deref(input));
if((!(clojure.string.blank_QMARK_(title)))){
if(cljs.core.truth_(frontend.handler.page.template_exists_QMARK_(title))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Template already exists!"], null),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
frontend.handler.editor.set_block_property_BANG_(block_id__$1,new cljs.core.Keyword(null,"template","template",-702405684),title);

if(template_including_parent_QMARK_ === false){
frontend.handler.editor.set_block_property_BANG_(block_id__$1,new cljs.core.Keyword(null,"template-including-parent","template-including-parent",1449989665),false);
} else {
}

return frontend.state.hide_custom_context_menu_BANG_();
}
} else {
return null;
}
})], 0)))]);
} else {
return frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Make template",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

return cljs.core.reset_BANG_(edit_QMARK_,true);
})], null),"Make template");
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.content","edit?","frontend.components.content/edit?",117022613)),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.content","input","frontend.components.content/input",-328843080)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.components.content._STAR_template_including_parent_QMARK_,null);

return state;
})], null)], null),"frontend.components.content/block-template");
frontend.components.content.block_context_menu_content = rum.core.lazy_build(rum.core.build_defc,(function (_target,block_id){
var _STAR_el_ref = rum.core.use_ref(null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
setTimeout((function (){
var el = rum.core.deref(_STAR_el_ref);
var map__57597 = frontend.util.calc_delta_rect_offset(el,document.documentElement);
var map__57597__$1 = cljs.core.__destructure_map(map__57597);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57597__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57597__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (el.style.transform = ["translate3d(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((x < (0)))?x:(0))),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y < (0)))?(y - (10)):(0))),"px",",0)"].join(''));
}),(10));

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = (function (){var G__57632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__57632) : frontend.db.entity.call(null,G__57632));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block);
var heading_QMARK_ = new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(properties) === true;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#custom-context-menu","div#custom-context-menu",16263198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_ref], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-1.rounded-md.bg-base-3.shadow-xs","div.py-1.rounded-md.bg-base-3.shadow-xs",-1742962126),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row.flex.justify-between.py-4.pl-2","div.flex-row.flex.justify-between.py-4.pl-2",696313401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row.flex.justify-between","div.flex-row.flex.justify-between",-1427495066),(function (){var iter__5520__auto__ = (function frontend$components$content$iter__57633(s__57634){
return (new cljs.core.LazySeq(null,(function (){
var s__57634__$1 = s__57634;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__57634__$1);
if(temp__5720__auto____$1){
var s__57634__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57634__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__57634__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__57636 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__57635 = (0);
while(true){
if((i__57635 < size__5519__auto__)){
var color = cljs.core._nth(c__5518__auto__,i__57635);
cljs.core.chunk_append(b__57636,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.m-2.shadow-sm","a.m-2.shadow-sm",982721374),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57635,color,c__5518__auto__,size__5519__auto__,b__57636,s__57634__$2,temp__5720__auto____$1,properties,heading_QMARK_,block,temp__5720__auto__,_STAR_el_ref){
return (function (_e){
return frontend.handler.editor.set_block_property_BANG_(block_id,"background-color",color);
});})(i__57635,color,c__5518__auto__,size__5519__auto__,b__57636,s__57634__$2,temp__5720__auto____$1,properties,heading_QMARK_,block,temp__5720__auto__,_STAR_el_ref))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heading-bg","div.heading-bg",-1373479286),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null)], null)], null));

var G__57741 = (i__57635 + (1));
i__57635 = G__57741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57636),frontend$components$content$iter__57633(cljs.core.chunk_rest(s__57634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57636),null);
}
} else {
var color = cljs.core.first(s__57634__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.m-2.shadow-sm","a.m-2.shadow-sm",982721374),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (color,s__57634__$2,temp__5720__auto____$1,properties,heading_QMARK_,block,temp__5720__auto__,_STAR_el_ref){
return (function (_e){
return frontend.handler.editor.set_block_property_BANG_(block_id,"background-color",color);
});})(color,s__57634__$2,temp__5720__auto____$1,properties,heading_QMARK_,block,temp__5720__auto__,_STAR_el_ref))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heading-bg","div.heading-bg",-1373479286),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null)], null)], null),frontend$components$content$iter__57633(cljs.core.rest(s__57634__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.components.content.block_background_colors);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remove-background","remove-background",291795686)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(14),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(4)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.remove_block_property_BANG_(block_id,"background-color");
})], null),"Clear"], null)], null),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Convert heading",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
if(heading_QMARK_){
return frontend.handler.editor.remove_block_property_BANG_(block_id,new cljs.core.Keyword(null,"heading","heading",-1312171873));
} else {
return frontend.handler.editor.set_block_property_BANG_(block_id,new cljs.core.Keyword(null,"heading","heading",-1312171873),true);
}
})], null),((heading_QMARK_)?"Convert back to a block":"Convert to a heading")),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Open in sidebar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.open_block_in_sidebar_BANG_(block_id);
})], null),"Open in sidebar"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy block ref",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__57594_SHARP_){
return ["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57594_SHARP_),"))"].join('');
}));
})], null),"Copy block ref"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy block embed",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,(function (p1__57596_SHARP_){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{embed ((%s))}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__57596_SHARP_], 0));
}));
})], null),"Copy block embed"),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy block URL",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
var current_repo = frontend.state.get_current_repo();
var tap_f = (function (block_id__$1){
return frontend.util.url.get_logseq_graph_uuid_url.cljs$core$IFn$_invoke$arity$3(null,current_repo,block_id__$1);
});
return frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_id,tap_f);
})], null),"Copy block URL"):null),frontend.components.content.block_template(block_id),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Copy as",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.export$.export_blocks(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));
}));
})], null),"Copy as"),((frontend.extensions.srs.card_block_QMARK_(block))?frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Preview Card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.preview(block_id);
})], null),"Preview Card"):frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Make a Card",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.make_block_a_card_BANG_(block_id);
})], null),"Make a Card")),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Cut",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.cut_block_BANG_(block_id);
})], null),"Cut"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Expand all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.expand_all_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);
})], null),"Expand all"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Collapse all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return frontend.handler.editor.collapse_all_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);
})], null),"Collapse all"),(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996)], null)))?(function (){var temp__5720__auto____$1 = frontend.state.get_plugins_commands_with_type(new cljs.core.Keyword(null,"block-context-menu-item","block-context-menu-item",-1128965744));
if(cljs.core.truth_(temp__5720__auto____$1)){
var cmds = temp__5720__auto____$1;
var iter__5520__auto__ = (function frontend$components$content$iter__57645(s__57646){
return (new cljs.core.LazySeq(null,(function (){
var s__57646__$1 = s__57646;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__57646__$1);
if(temp__5720__auto____$2){
var s__57646__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57646__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__57646__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__57648 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__57647 = (0);
while(true){
if((i__57647 < size__5519__auto__)){
var vec__57653 = cljs.core._nth(c__5518__auto__,i__57647);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57653,(0),null);
var map__57656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57653,(1),null);
var map__57656__$1 = cljs.core.__destructure_map(map__57656);
var cmd = map__57656__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57656__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57656__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57653,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57653,(3),null);
cljs.core.chunk_append(b__57648,frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57647,vec__57653,_,map__57656,map__57656__$1,cmd,key,label,action,pid,c__5518__auto__,size__5519__auto__,b__57648,s__57646__$2,temp__5720__auto____$2,cmds,temp__5720__auto____$1,properties,heading_QMARK_,block,temp__5720__auto__,_STAR_el_ref){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),block_id),action);
});})(i__57647,vec__57653,_,map__57656,map__57656__$1,cmd,key,label,action,pid,c__5518__auto__,size__5519__auto__,b__57648,s__57646__$2,temp__5720__auto____$2,cmds,temp__5720__auto____$1,properties,heading_QMARK_,block,temp__5720__auto__,_STAR_el_ref))
], null),label));

var G__57742 = (i__57647 + (1));
i__57647 = G__57742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57648),frontend$components$content$iter__57645(cljs.core.chunk_rest(s__57646__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57648),null);
}
} else {
var vec__57657 = cljs.core.first(s__57646__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57657,(0),null);
var map__57660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57657,(1),null);
var map__57660__$1 = cljs.core.__destructure_map(map__57660);
var cmd = map__57660__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57660__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57660__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57657,(2),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57657,(3),null);
return cljs.core.cons(frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57657,_,map__57660,map__57660__$1,cmd,key,label,action,pid,s__57646__$2,temp__5720__auto____$2,cmds,temp__5720__auto____$1,properties,heading_QMARK_,block,temp__5720__auto__,_STAR_el_ref){
return (function (){
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),block_id),action);
});})(vec__57657,_,map__57660,map__57660__$1,cmd,key,label,action,pid,s__57646__$2,temp__5720__auto____$2,cmds,temp__5720__auto____$1,properties,heading_QMARK_,block,temp__5720__auto__,_STAR_el_ref))
], null),label),frontend$components$content$iter__57645(cljs.core.rest(s__57646__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cmds);
} else {
return null;
}
})():null),(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null)))?frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"(Dev) Show block data",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var block_data = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57661_57743 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57662_57744 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57663_57745 = true;
var _STAR_print_fn_STAR__temp_val__57664_57746 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57663_57745);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57664_57746);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((function (){var G__57665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__57665) : frontend.db.pull.call(null,G__57665));
})());
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57662_57744);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57661_57743);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_data], 0));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),block_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Copy to clipboard",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return navigator.clipboard.writeText(block_data);
})], 0))], null),new cljs.core.Keyword(null,"success","success",1890645906),false);
})], null),"(Dev) Show block data"):null)], null)], null);
} else {
return null;
}
})());
}),null,"frontend.components.content/block-context-menu-content");
frontend.components.content.block_ref_custom_context_menu_content = rum.core.lazy_build(rum.core.build_defc,(function (block,block_ref_id){
if(cljs.core.truth_((function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
return block_ref_id;
} else {
return and__5041__auto__;
}
})())){
return daiquiri.core.create_element("div",{'id':"custom-context-menu"},[daiquiri.core.create_element("div",{'className':"py-1 rounded-md bg-base-3 shadow-xs"},[frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"open-in-sidebar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),block_ref_id,new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
})], null),"Open in sidebar"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"copy",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.copy_current_ref(block_ref_id);
})], null),"Copy this reference"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.delete_current_ref_BANG_(block,block_ref_id);
})], null),"Delete this reference"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"replace-with-text",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.replace_ref_with_text_BANG_(block,block_ref_id);
})], null),"Replace with text"),frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"replace-with-embed",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.editor.replace_ref_with_embed_BANG_(block,block_ref_id);
})], null),"Replace with embed")])]);
} else {
return null;
}
}),null,"frontend.components.content/block-ref-custom-context-menu-content");
frontend.components.content.page_title_custom_context_menu_content = rum.core.lazy_build(rum.core.build_defc,(function (page){
if(clojure.string.blank_QMARK_(page)){
return null;
} else {
var page_menu_options = frontend.components.page_menu.page_menu(page);
return daiquiri.core.create_element("div",{'id':"custom-context-menu"},[daiquiri.core.create_element("div",{'className':"py-1 rounded-md bg-base-3 shadow-xs"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$content$iter__57686(s__57687){
return (new cljs.core.LazySeq(null,(function (){
var s__57687__$1 = s__57687;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57687__$1);
if(temp__5720__auto__){
var s__57687__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57687__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__57687__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__57689 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__57688 = (0);
while(true){
if((i__57688 < size__5519__auto__)){
var map__57692 = cljs.core._nth(c__5518__auto__,i__57688);
var map__57692__$1 = cljs.core.__destructure_map(map__57692);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57692__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57692__$1,new cljs.core.Keyword(null,"options","options",99638489));
cljs.core.chunk_append(b__57689,frontend.ui.menu_link(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null),options], 0)),title));

var G__57747 = (i__57688 + (1));
i__57688 = G__57747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57689),frontend$components$content$iter__57686(cljs.core.chunk_rest(s__57687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57689),null);
}
} else {
var map__57695 = cljs.core.first(s__57687__$2);
var map__57695__$1 = cljs.core.__destructure_map(map__57695);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57695__$1,new cljs.core.Keyword(null,"title","title",636505583));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57695__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.cons(frontend.ui.menu_link(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null),options], 0)),title),frontend$components$content$iter__57686(cljs.core.rest(s__57687__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(page_menu_options);
})())])]);
}
}),null,"frontend.components.content/page-title-custom-context-menu-content");
frontend.components.content.hiccup_content = rum.core.lazy_build(rum.core.build_defc,(function (id,p__57701){
var map__57702 = p__57701;
var map__57702__$1 = cljs.core.__destructure_map(map__57702);
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57702__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
return daiquiri.core.create_element("div",{'id':id},[(cljs.core.truth_(hiccup)?daiquiri.interpreter.interpret(hiccup):daiquiri.core.create_element("div",{'className':"text-gray-500 cursor"},["Click to edit"]))]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
return frontend.mixins.listen(state,window,"contextmenu",(function (e){
var target = frontend.components.content.goog$module$goog$object.get(e,"target");
var block_id = dommy.core.attr(target,"blockid");
var map__57710 = frontend.state.sub(new cljs.core.Keyword("block-ref","context","block-ref/context",-2102048446));
var map__57710__$1 = cljs.core.__destructure_map(map__57710);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57710__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57710__$1,new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
var map__57711 = frontend.state.sub(new cljs.core.Keyword("page-title","context","page-title/context",1788836745));
var map__57711__$1 = cljs.core.__destructure_map(map__57711);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57711__$1,new cljs.core.Keyword(null,"page","page",849072397));
if(cljs.core.truth_(page)){
frontend.handler.common.show_custom_context_menu_BANG_(e,frontend.components.content.page_title_custom_context_menu_content(page));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("page-title","context","page-title/context",1788836745),null);
} else {
if(cljs.core.truth_(block_ref)){
frontend.handler.common.show_custom_context_menu_BANG_(e,frontend.components.content.block_ref_custom_context_menu_content(block,block_ref));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("block-ref","context","block-ref/context",-2102048446),null);
} else {
if(cljs.core.truth_(frontend.state.selection_QMARK_())){
return frontend.handler.common.show_custom_context_menu_BANG_(e,frontend.components.content.custom_context_menu_content());
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = block_id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.parse_uuid(block_id);
} else {
return and__5041__auto__;
}
})())){
var block__$1 = target.closest(".ls-block");
if(cljs.core.truth_(block__$1)){
frontend.util.select_highlight_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1], null));
} else {
}

return frontend.handler.common.show_custom_context_menu_BANG_(e,frontend.components.content.block_context_menu_content(target,cljs.core.uuid(block_id)));
} else {
return null;

}
}
}
}
}));
}))], null),"frontend.components.content/hiccup-content");
frontend.components.content.non_hiccup_content = rum.core.lazy_build(rum.core.build_defc,(function (id,content,on_click,on_hide,config,format){
var edit_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),id], null));
var loading = frontend.state.sub(new cljs.core.Keyword("format","loading","format/loading",-2001626722));
if(cljs.core.truth_(edit_QMARK_)){
return frontend.components.editor.box(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),on_hide,new cljs.core.Keyword(null,"format","format",-1306924766),format], null),id,config);
} else {
var format__$1 = logseq.graph_parser.util.normalize_format(format);
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(loading,format__$1);
var markup_QMARK_ = cljs.core.contains_QMARK_(frontend.config.html_render_formats,format__$1);
var on_click__$1 = (function (e){
if(frontend.util.link_QMARK_(frontend.components.content.goog$module$goog$object.get(e,"target"))){
return null;
} else {
frontend.util.stop(e);

frontend.handler.editor.reset_cursor_range_BANG_(goog.dom.getElement(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));

frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(id,content);

frontend.state.set_edit_input_id_BANG_(id);

if(cljs.core.truth_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(e) : on_click.call(null,e));
} else {
return null;
}
}
});
if(cljs.core.truth_((function (){var and__5041__auto__ = markup_QMARK_;
if(and__5041__auto__){
return loading_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return daiquiri.core.create_element("div",null,["loading ..."]);
} else {
return daiquiri.core.create_element("pre",{'id':id,'onClick':on_click__$1,'className':"cursor content pre-white-space"},[((clojure.string.blank_QMARK_(content))?daiquiri.core.create_element("div",{'className':"text-gray-500 cursor"},["Click to edit"]):daiquiri.interpreter.interpret(content))]);

}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.content/non-hiccup-content");
frontend.components.content.set_draw_iframe_style_BANG_ = (function frontend$components$content$set_draw_iframe_style_BANG_(){
var width = frontend.components.content.goog$module$goog$object.get(window,"innerWidth");
if((width >= (1024))){
var draws = dommy.utils.__GT_Array(document.getElementsByClassName("draw-iframe"));
var width__$1 = (width - (200));
var seq__57722 = cljs.core.seq(draws);
var chunk__57723 = null;
var count__57724 = (0);
var i__57725 = (0);
while(true){
if((i__57725 < count__57724)){
var draw = chunk__57723.cljs$core$IIndexed$_nth$arity$2(null,i__57725);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width__$1),"px"].join('')], 0));

var height_57748 = (function (){var x__5128__auto__ = (700);
var y__5129__auto__ = (width__$1 / (2));
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_57748),"px"].join('')], 0));

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- ((width__$1 - (570)) / (2)))),"px"].join('')], 0));


var G__57749 = seq__57722;
var G__57750 = chunk__57723;
var G__57751 = count__57724;
var G__57752 = (i__57725 + (1));
seq__57722 = G__57749;
chunk__57723 = G__57750;
count__57724 = G__57751;
i__57725 = G__57752;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__57722);
if(temp__5720__auto__){
var seq__57722__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57722__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__57722__$1);
var G__57753 = cljs.core.chunk_rest(seq__57722__$1);
var G__57754 = c__5565__auto__;
var G__57755 = cljs.core.count(c__5565__auto__);
var G__57756 = (0);
seq__57722 = G__57753;
chunk__57723 = G__57754;
count__57724 = G__57755;
i__57725 = G__57756;
continue;
} else {
var draw = cljs.core.first(seq__57722__$1);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width__$1),"px"].join('')], 0));

var height_57757 = (function (){var x__5128__auto__ = (700);
var y__5129__auto__ = (width__$1 / (2));
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height_57757),"px"].join('')], 0));

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(draw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- ((width__$1 - (570)) / (2)))),"px"].join('')], 0));


var G__57758 = cljs.core.next(seq__57722__$1);
var G__57759 = null;
var G__57760 = (0);
var G__57761 = (0);
seq__57722 = G__57758;
chunk__57723 = G__57759;
count__57724 = G__57760;
i__57725 = G__57761;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
frontend.components.content.content = rum.core.lazy_build(rum.core.build_defcs,(function (state,id,p__57733){
var map__57734 = p__57733;
var map__57734__$1 = cljs.core.__destructure_map(map__57734);
var option = map__57734__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57734__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57734__$1,new cljs.core.Keyword(null,"config","config",994861415));
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57734__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57734__$1,new cljs.core.Keyword(null,"content","content",15833224));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57734__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57734__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
if(cljs.core.truth_(hiccup)){
return daiquiri.core.create_element("div",null,[frontend.components.content.hiccup_content(id,option)]);
} else {
var format__$1 = logseq.graph_parser.util.normalize_format(format);
return frontend.components.content.non_hiccup_content(id,content,on_click,on_hide,config,format__$1);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
frontend.components.content.lazy_load_js(state);

return state;
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.components.content.set_draw_iframe_style_BANG_();

frontend.handler.image.render_local_images_BANG_();

return state;
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
frontend.components.content.set_draw_iframe_style_BANG_();

frontend.components.content.lazy_load_js(state);

frontend.handler.image.render_local_images_BANG_();

return state;
})], null)], null),"frontend.components.content/content");

//# sourceMappingURL=frontend.components.content.js.map
