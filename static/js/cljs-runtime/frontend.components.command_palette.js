goog.provide('frontend.components.command_palette');
frontend.components.command_palette.translate = (function frontend$components$command_palette$translate(t,p__58341){
var map__58342 = p__58341;
var map__58342__$1 = cljs.core.__destructure_map(map__58342);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
if(cljs.core.truth_(id)){
var desc_i18n = (function (){var G__58343 = frontend.modules.shortcut.data_helper.decorate_namespace(id);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__58343) : t.call(null,G__58343));
})();
if(clojure.string.starts_with_QMARK_(desc_i18n,"{Missing key")){
return desc;
} else {
return desc_i18n;
}
} else {
return null;
}
});
frontend.components.command_palette.get_matched_commands = (function frontend$components$command_palette$get_matched_commands(commands,input,limit,t){
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(commands,input,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.components.command_palette.translate,t)], 0));
});
frontend.components.command_palette.render_command = rum.core.lazy_build(rum.core.build_defc,(function (p__58344,chosen_QMARK_){
var map__58345 = p__58344;
var map__58345__$1 = cljs.core.__destructure_map(map__58345);
var cmd = map__58345__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
var first_shortcut = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(shortcut,/ \| /));
var desc = frontend.components.command_palette.translate(frontend.context.i18n.t,cmd);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inline-grid","grid-cols-4","gap-x-4","w-full",(cljs.core.truth_(chosen_QMARK_)?"chosen":null)], null))},[(function (){var attrs58346 = desc;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58346))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-span-3"], null)], null),attrs58346], 0))):{'className':"col-span-3"}),((cljs.core.map_QMARK_(attrs58346))?null:[daiquiri.interpreter.interpret(attrs58346)]));
})(),(function (){var attrs58347 = (cljs.core.truth_((function (){var and__5041__auto__ = (id instanceof cljs.core.Keyword);
if(and__5041__auto__){
return cljs.core.namespace(id);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.opacity-20.bg-transparent","code.opacity-20.bg-transparent",-2039164517),cljs.core.namespace(id)], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58347))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-span-1","justify-end","tip","flex"], null)], null),attrs58347], 0))):{'className':"col-span-1 justify-end tip flex"}),((cljs.core.map_QMARK_(attrs58347))?[((clojure.string.blank_QMARK_(first_shortcut))?null:(function (){var attrs58348 = first_shortcut;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs58348))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs58348], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs58348))?null:[daiquiri.interpreter.interpret(attrs58348)]));
})())]:[daiquiri.interpreter.interpret(attrs58347),((clojure.string.blank_QMARK_(first_shortcut))?null:(function (){var attrs58349 = first_shortcut;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs58349))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1"], null)], null),attrs58349], 0))):{'className':"ml-1"}),((cljs.core.map_QMARK_(attrs58349))?null:[daiquiri.interpreter.interpret(attrs58349)]));
})())]));
})()]);
}),null,"frontend.components.command-palette/render-command");
frontend.components.command_palette.command_palette = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__58350){
var map__58351 = p__58350;
var map__58351__$1 = cljs.core.__destructure_map(map__58351);
var commands = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58351__$1,new cljs.core.Keyword(null,"commands","commands",161008658));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58351__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100));
var input = new cljs.core.Keyword("frontend.components.command-palette","input","frontend.components.command-palette/input",1220040504).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",{'className':"cp__palette cp__palette-main"},[daiquiri.core.create_element("div",{'className':"input-wrap"},[daiquiri.core.create_element("input",{'type':"text",'placeholder':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("command-palette","prompt","command-palette/prompt",478070476)], 0)),'autoFocus':true,'value':cljs.core.deref(input),'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(input,frontend.util.evalue(e));
})),'className':"cp__palette-input w-full"},[])]),daiquiri.core.create_element("div",{'className':"command-results-wrap"},[frontend.ui.auto_complete(((clojure.string.blank_QMARK_(cljs.core.deref(input)))?frontend.handler.command_palette.top_commands(limit):frontend.components.command_palette.get_matched_commands(commands,cljs.core.deref(input),limit,frontend.context.i18n.t)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item-render","item-render",253627868),frontend.components.command_palette.render_command,new cljs.core.Keyword(null,"class","class",-2030961996),"cp__palette-results",new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900),(function (cmd){
return frontend.handler.command_palette.invoke_command(cmd);
})], null))])]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.modules.shortcut.core.disable_all_shortcuts(),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.command-palette","input","frontend.components.command-palette/input",1220040504)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","command-palette-open?","ui/command-palette-open?",2033128967),false);

return state;
})], null)], null),"frontend.components.command-palette/command-palette");
frontend.components.command_palette.command_palette_modal = rum.core.lazy_build(rum.core.build_defc,(function (){
var open_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","command-palette-open?","ui/command-palette-open?",2033128967));
if(cljs.core.truth_(open_QMARK_)){
frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.components.command_palette.command_palette(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"commands","commands",161008658),frontend.handler.command_palette.get_commands()], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),false,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false], null));
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.command-palette/command-palette-modal");

//# sourceMappingURL=frontend.components.command_palette.js.map
