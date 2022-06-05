goog.provide('frontend.page');
frontend.page.route_view = rum.core.lazy_build(rum.core.build_defc,(function (view,route_match){
return daiquiri.interpreter.interpret((view.cljs$core$IFn$_invoke$arity$1 ? view.cljs$core$IFn$_invoke$arity$1(route_match) : view.call(null,route_match)));
}),null,"frontend.page/route-view");
frontend.page.setup_fns_BANG_ = (function frontend$page$setup_fns_BANG_(){
try{return cljs.core.comp.cljs$core$IFn$_invoke$arity$1(frontend.ui.setup_active_keystroke_BANG_());
}catch (e59380){if((e59380 instanceof Error)){
var _e = e59380;
return null;
} else {
throw e59380;

}
}});
/**
 * This screen is displayed when the UI has crashed hard. It provides the user
 *   with basic troubleshooting steps to get them back to a working state. This
 *   component is purposefully stupid simple as it needs to render under any number
 *   of broken conditions
 */
frontend.page.helpful_default_error_screen = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'id':"main-container",'className':"cp__sidebar-main-layout flex-1 flex"},[daiquiri.core.create_element("div",{'id':"app-container"},[daiquiri.core.create_element("div",{'id':"left-container"},[daiquiri.core.create_element("div",{'id':"main-container",'className':"cp__sidebar-main-layout flex-1 flex"},[daiquiri.core.create_element("div",{'id':"main-content-container",'className':"scrollbar-spacing w-full flex justify-center"},[daiquiri.core.create_element("div",{'className':"cp__sidebar-main-content"},[daiquiri.core.create_element("div",{'className':"ls-center"},[(function (){var attrs59381 = frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("bug",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),frontend.ui.icon_size], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs59381))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-box","p-1","rounded","mb-3"], null)], null),attrs59381], 0))):{'className':"icon-box p-1 rounded mb-3"}),((cljs.core.map_QMARK_(attrs59381))?null:[daiquiri.interpreter.interpret(attrs59381)]));
})(),daiquiri.core.create_element("div",{'className':"text-xl font-bold"},["Sorry. Something went wrong!"]),daiquiri.core.create_element("div",{'className':"mt-2 mb-2"},["Logseq is having a problem. To try to get it back to a\n         working state, please try the following safe steps in order:"]),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"flex flex-row justify-between align-items mb-2 items-center py-4"},[daiquiri.core.create_element("div",{'className':"flex flex-col items-start"},[daiquiri.core.create_element("div",{'className':"text-2xs font-bold uppercase toned-down"},["STEP 1"]),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("span",{'className':"highlighted font-bold"},["Rebuild"]),daiquiri.core.create_element("span",{'className':"toned-down"},[" search index"])])]),(function (){var attrs59390 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Try",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$1(true);
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs59390))?daiquiri.interpreter.element_attributes(attrs59390):null),((cljs.core.map_QMARK_(attrs59390))?null:[daiquiri.interpreter.interpret(attrs59390)]));
})()]),daiquiri.core.create_element("div",{'className':"flex flex-row justify-between align-items mb-2 items-center separator-top py-4"},[daiquiri.core.create_element("div",{'className':"flex flex-col items-start"},[daiquiri.core.create_element("div",{'className':"text-2xs font-bold uppercase toned-down"},["STEP 2"]),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("span",{'className':"highlighted font-bold"},["Relaunch"]),daiquiri.core.create_element("span",{'className':"toned-down"},[" the app"])]),daiquiri.core.create_element("div",{'className':"text-xs toned-down"},["Quit the app and then reopen it."])]),(function (){var attrs59393 = frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("command",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-md p-1 mr-2 bg-quaternary"], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs59393))?daiquiri.interpreter.element_attributes(attrs59393):null),((cljs.core.map_QMARK_(attrs59393))?[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("letter-q",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-md p-1 bg-quaternary"], null)))]:[daiquiri.interpreter.interpret(attrs59393),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("letter-q",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-md p-1 bg-quaternary"], null)))]));
})()]),daiquiri.core.create_element("div",{'className':"flex flex-row justify-between align-items mb-4 items-center separator-top py-4"},[daiquiri.core.create_element("div",{'className':"flex flex-col items-start"},[daiquiri.core.create_element("div",{'className':"text-2xs font-bold uppercase toned-down"},["STEP 3"]),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("span",{'className':"highlighted font-bold"},["Clear"]),daiquiri.core.create_element("span",{'className':"toned-down"},[" local storage"])]),daiquiri.core.create_element("div",{'className':"text-xs toned-down"},["This does delete minor preferences like dark/light theme preference."])]),(function (){var attrs59396 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Try",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
localStorage.clear();

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Cleared!",new cljs.core.Keyword(null,"success","success",1890645906));
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs59396))?daiquiri.interpreter.element_attributes(attrs59396):null),((cljs.core.map_QMARK_(attrs59396))?null:[daiquiri.interpreter.interpret(attrs59396)]));
})()])]),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["If you think you have experienced data loss, check for backup files under\n          the folder logseq/bak/."]),daiquiri.core.create_element("p",null,["If these troubleshooting steps have not solved your problem, please ",daiquiri.core.create_element("a",{'href':"https://github.com/logseq/logseq/issues/new?labels=from:in-app&template=bug_report.yaml",'className':"underline"},["open an issue."])])])])])])])])]),frontend.ui.notification()]);
}),null,"frontend.page/helpful-default-error-screen");
frontend.page.current_page = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.state.sub(new cljs.core.Keyword(null,"route-match","route-match",-1450985937));
if(cljs.core.truth_(temp__5720__auto__)){
var route_match = temp__5720__auto__;
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var temp__5720__auto____$1 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_match));
if(cljs.core.truth_(temp__5720__auto____$1)){
var view = temp__5720__auto____$1;
return frontend.ui.catch_error_and_notify(frontend.page.helpful_default_error_screen(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),route_name))?(view.cljs$core$IFn$_invoke$arity$1 ? view.cljs$core$IFn$_invoke$arity$1(route_match) : view.call(null,route_match)):frontend.components.sidebar.sidebar(route_match,(view.cljs$core$IFn$_invoke$arity$1 ? view.cljs$core$IFn$_invoke$arity$1(route_match) : view.call(null,route_match)))));
} else {
return null;
}
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.state.set_root_component_BANG_(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));

frontend.state.setup_electron_updater_BANG_();

frontend.ui.inject_document_devices_envs_BANG_();

frontend.ui.inject_dynamic_style_node_BANG_();

frontend.components.onboarding.quick_tour.init();

frontend.handler.plugin.host_mounted_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.page","teardown","frontend.page/teardown",1151382542),frontend.page.setup_fns_BANG_());
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var temp__5720__auto__ = new cljs.core.Keyword("frontend.page","teardown","frontend.page/teardown",1151382542).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto__)){
var teardown = temp__5720__auto__;
return (teardown.cljs$core$IFn$_invoke$arity$0 ? teardown.cljs$core$IFn$_invoke$arity$0() : teardown.call(null));
} else {
return null;
}
})], null)], null),"frontend.page/current-page");

//# sourceMappingURL=frontend.page.js.map
