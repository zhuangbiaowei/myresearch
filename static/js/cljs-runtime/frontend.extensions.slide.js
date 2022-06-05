goog.provide('frontend.extensions.slide');
frontend.extensions.slide.loaded_QMARK_ = (function frontend$extensions$slide$loaded_QMARK_(){
return window.Reveal;
});
frontend.extensions.slide.with_properties = (function frontend$extensions$slide$with_properties(m,block){
var properties = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.seq(properties)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.update_keys(properties,(function (k){
return clojure.string.replace(["data-",cljs.core.name(k)].join(''),"data-data-","data-");
}))], 0));
} else {
return m;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.slide !== 'undefined') && (typeof frontend.extensions.slide._STAR_loading_QMARK_ !== 'undefined')){
} else {
frontend.extensions.slide._STAR_loading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.extensions.slide.render_BANG_ = (function frontend$extensions$slide$render_BANG_(){
var deck = (new window.Reveal(document.querySelector(".reveal"),cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"embedded","embedded",-115486248),true,new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"history","history",-247395220),false,new cljs.core.Keyword(null,"center","center",-748944368),true,new cljs.core.Keyword(null,"transition","transition",765692007),"slide"], null))));
return deck.initialize();
});
frontend.extensions.slide.block_container = rum.core.lazy_build(rum.core.build_defc,(function (config,block,level){
var deep_level_QMARK_ = (level >= (2));
var children = new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block);
var has_children_QMARK_ = cljs.core.seq(children);
var children__$1 = ((((has_children_QMARK_) && ((!(deep_level_QMARK_)))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
var G__58395 = config;
var G__58396 = block__$1;
var G__58397 = (level + (1));
return (frontend.extensions.slide.block_container.cljs$core$IFn$_invoke$arity$3 ? frontend.extensions.slide.block_container.cljs$core$IFn$_invoke$arity$3(G__58395,G__58396,G__58397) : frontend.extensions.slide.block_container.call(null,G__58395,G__58396,G__58397));
}),children):null);
var block_el = frontend.components.block.block_container(config,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","children","block/children",-1040716209)));
var dom_attrs = frontend.extensions.slide.with_properties(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["slide-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))].join('')], null),block);
if(has_children_QMARK_){
var attrs58398 = dom_attrs;
return daiquiri.core.create_element("section",((cljs.core.map_QMARK_(attrs58398))?daiquiri.interpreter.element_attributes(attrs58398):null),((cljs.core.map_QMARK_(attrs58398))?[(function (){var attrs58399 = block_el;
return daiquiri.core.create_element("section",((cljs.core.map_QMARK_(attrs58399))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["relative"], null)], null),attrs58399], 0))):{'className':"relative"}),((cljs.core.map_QMARK_(attrs58399))?[((deep_level_QMARK_)?daiquiri.core.create_element("span",{'className':"opacity-30 text-xl"},["Hidden children"]):null)]:[daiquiri.interpreter.interpret(attrs58399),((deep_level_QMARK_)?daiquiri.core.create_element("span",{'className':"opacity-30 text-xl"},["Hidden children"]):null)]));
})(),daiquiri.interpreter.interpret(children__$1)]:[daiquiri.interpreter.interpret(attrs58398),(function (){var attrs58404 = block_el;
return daiquiri.core.create_element("section",((cljs.core.map_QMARK_(attrs58404))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["relative"], null)], null),attrs58404], 0))):{'className':"relative"}),((cljs.core.map_QMARK_(attrs58404))?[((deep_level_QMARK_)?daiquiri.core.create_element("span",{'className':"opacity-30 text-xl"},["Hidden children"]):null)]:[daiquiri.interpreter.interpret(attrs58404),((deep_level_QMARK_)?daiquiri.core.create_element("span",{'className':"opacity-30 text-xl"},["Hidden children"]):null)]));
})(),daiquiri.interpreter.interpret(children__$1)]));
} else {
var attrs58409 = dom_attrs;
return daiquiri.core.create_element("section",((cljs.core.map_QMARK_(attrs58409))?daiquiri.interpreter.element_attributes(attrs58409):null),((cljs.core.map_QMARK_(attrs58409))?[daiquiri.interpreter.interpret(block_el)]:[daiquiri.interpreter.interpret(attrs58409),daiquiri.interpreter.interpret(block_el)]));
}
}),null,"frontend.extensions.slide/block-container");
frontend.extensions.slide.slide_content = (function frontend$extensions$slide$slide_content(loading_QMARK_,style,config,blocks){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm","p.text-sm",-1988028746),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70","span.opacity-70",1907592405),"Tip: press "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"f"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70","span.opacity-70",1907592405)," to go fullscreen"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reveal","div.reveal",-318716100),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-center","div.ls-center",501392471),frontend.ui.loading("")], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slides","div.slides",1806431712),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58410_SHARP_){
return frontend.extensions.slide.block_container(config,p1__58410_SHARP_,(1));
}),blocks)], null)], null)], null);
});
frontend.extensions.slide.slide = rum.core.lazy_build(rum.core.build_defc,(function (page_name){
var loading_QMARK_ = rum.core.react(frontend.extensions.slide._STAR_loading_QMARK_);
var page = (function (){var G__58411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__58411) : frontend.db.entity.call(null,G__58411));
})();
var journal_QMARK_ = new cljs.core.Keyword(null,"journal?","journal?",-897756522).cljs$core$IFn$_invoke$arity$1(page);
var repo = frontend.state.get_current_repo();
var blocks = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((function (){var G__58412 = repo;
var G__58413 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2(G__58412,G__58413) : frontend.db.get_paginated_blocks.call(null,G__58412,G__58413));
})(),page_name);
var blocks__$1 = (cljs.core.truth_(journal_QMARK_)?cljs.core.rest(blocks):blocks);
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"slide-reveal-js",new cljs.core.Keyword(null,"slide?","slide?",1648217264),true,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),true,new cljs.core.Keyword(null,"page-name","page-name",974981762),page_name], null);
return daiquiri.interpreter.interpret(frontend.extensions.slide.slide_content(loading_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),config,blocks__$1));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
if(cljs.core.truth_(frontend.extensions.slide.loaded_QMARK_())){
cljs.core.reset_BANG_(frontend.extensions.slide._STAR_loading_QMARK_,false);

frontend.extensions.slide.render_BANG_();
} else {
cljs.core.reset_BANG_(frontend.extensions.slide._STAR_loading_QMARK_,true);

frontend.loader.load.cljs$core$IFn$_invoke$arity$2(frontend.config.asset_uri("/static/js/reveal.min.js"),(function (){
cljs.core.reset_BANG_(frontend.extensions.slide._STAR_loading_QMARK_,false);

return frontend.extensions.slide.render_BANG_();
}));
}

return state;
})], null)], null),"frontend.extensions.slide/slide");

//# sourceMappingURL=frontend.extensions.slide.js.map
