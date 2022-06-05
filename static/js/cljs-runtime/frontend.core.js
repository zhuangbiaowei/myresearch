goog.provide('frontend.core');
frontend.core.set_router_BANG_ = (function frontend$core$set_router_BANG_(){
return reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(frontend.routes.routes,null),(function (route){
frontend.handler.route.set_route_match_BANG_(route);

return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.select_keys(route,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"parameters","parameters",-1229919748)], null)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});
frontend.core.display_welcome_message = (function frontend$core$display_welcome_message(){
return console.log("\n    Welcome to Logseq!\n    If you encounter any problem, feel free to file an issue on GitHub (https://github.com/logseq/logseq)\n    or join our Discord server (https://discord.gg/KpN4eHY).\n    .____\n    |    |    ____   ____  ______ ____  ______\n    |    |   /  _ \\ / ___\\/  ___// __ \\/ ____/\n    |    |__(  <_> ) /_/  >___ \\\\  ___< <_|  |\n    |_______ \\____/\\___  /____  >\\___  >__   |\n            \\/    /_____/     \\/     \\/   |__|\n     ");
});
frontend.core.start = (function frontend$core$start(){
var temp__5720__auto__ = document.getElementById("root");
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
frontend.core.set_router_BANG_();

rum.core.mount(frontend.page.current_page(),node);

frontend.core.display_welcome_message();

return frontend.util.persist_var.load_vars();
} else {
return null;
}
});
frontend.core.init = (function frontend$core$init(){
return frontend.handler.plugin.setup_BANG_((function (){
return frontend.handler.start_BANG_(frontend.core.start);
}));
});
goog.exportSymbol('frontend.core.init', frontend.core.init);
frontend.core.stop = (function frontend$core$stop(){
frontend.handler.stop_BANG_();

frontend.fs.sync.sync_stop();

return console.log("stop");
});

//# sourceMappingURL=frontend.core.js.map
