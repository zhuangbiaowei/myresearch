goog.provide('frontend.handler.common');
goog.scope(function(){
  frontend.handler.common.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$ignore$index=shadow.js.require("module$node_modules$ignore$index", {});
frontend.handler.common.copy_to_clipboard_without_id_property_BANG_ = (function frontend$handler$common$copy_to_clipboard_without_id_property_BANG_(format,raw_text,html){
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.util.property.remove_id_property(format,raw_text),html);
});
frontend.handler.common.config_with_document_mode = (function frontend$handler$common$config_with_document_mode(config){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("document","mode?","document/mode?",-994203479),frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","mode?","document/mode?",-994203479)], null)));
});
frontend.handler.common.ignore_files = (function frontend$handler$common$ignore_files(pattern,paths){
return cljs_bean.core.__GT_clj(module$node_modules$ignore$index().add(pattern).filter(cljs_bean.core.__GT_js(paths)));
});
frontend.handler.common.hidden_QMARK_ = (function frontend$handler$common$hidden_QMARK_(path,patterns){
var path__$1 = ((((typeof path === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(path)))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,(1)):path);
return cljs.core.some((function (pattern){
var pattern__$1 = ((((typeof pattern === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(pattern)))))?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)].join(''):pattern);
return clojure.string.starts_with_QMARK_(["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),pattern__$1);
}),patterns);
});
frontend.handler.common.remove_hidden_files = (function frontend$handler$common$remove_hidden_files(files,config,get_path_fn){
var temp__5718__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(config));
if(temp__5718__auto__){
var patterns = temp__5718__auto__;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (file){
var path = (get_path_fn.cljs$core$IFn$_invoke$arity$1 ? get_path_fn.cljs$core$IFn$_invoke$arity$1(file) : get_path_fn.call(null,file));
return frontend.handler.common.hidden_QMARK_(path,patterns);
}),files);
} else {
return files;
}
});
frontend.handler.common.get_config = (function frontend$handler$common$get_config(repo_url){
var G__48065 = repo_url;
var G__48066 = frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$0();
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(G__48065,G__48066) : frontend.db.get_file.call(null,G__48065,G__48066));
});
frontend.handler.common.safe_read_string = (function frontend$handler$common$safe_read_string(content,error_message_or_handler){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(content);
}catch (e48069){var e = e48069;
console.error(e);

if(cljs.core.fn_QMARK_(error_message_or_handler)){
(error_message_or_handler.cljs$core$IFn$_invoke$arity$1 ? error_message_or_handler.cljs$core$IFn$_invoke$arity$1(e) : error_message_or_handler.call(null,e));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_message_or_handler], 0));
}

return cljs.core.PersistentArrayMap.EMPTY;
}});
frontend.handler.common.read_config = (function frontend$handler$common$read_config(content){
return frontend.handler.common.safe_read_string(content,(function (_e){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backup","broken-config","backup/broken-config",1040905879),frontend.state.get_current_repo(),content], null));

return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(frontend.config.config_default_content);
}));
});
frontend.handler.common.reset_config_BANG_ = (function frontend$handler$common$reset_config_BANG_(repo_url,content){
var temp__5720__auto__ = (function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.common.get_config(repo_url);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var content__$1 = temp__5720__auto__;
var config = frontend.handler.common.read_config(content__$1);
frontend.state.set_config_BANG_(repo_url,config);

return config;
} else {
return null;
}
});
frontend.handler.common.read_metadata_BANG_ = (function frontend$handler$common$read_metadata_BANG_(content){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(content);
}catch (e48078){var e = e48078;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.common",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("parse","metadata-failed","parse/metadata-failed",-1292284003),e,new cljs.core.Keyword(null,"line","line",212345235),88], null)),null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
frontend.handler.common.get_page_default_properties = (function frontend$handler$common$get_page_default_properties(page_name){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),page_name], null);
});
frontend.handler.common.fix_pages_timestamps = (function frontend$handler$common$fix_pages_timestamps(pages){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48079){
var map__48080 = p__48079;
var map__48080__$1 = cljs.core.__destructure_map(map__48080);
var p = map__48080__$1;
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48080__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48080__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var journal_day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48080__$1,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366));
var G__48081 = p;
var G__48081__$1 = (((created_at == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48081,new cljs.core.Keyword("block","created-at","block/created-at",1440015),(cljs.core.truth_(journal_day)?frontend.date.journal_day__GT_ts(journal_day):frontend.util.time_ms())):G__48081);
if((updated_at == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48081__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),(cljs.core.truth_(journal_day)?frontend.date.journal_day__GT_ts(journal_day):frontend.util.time_ms()));
} else {
return G__48081__$1;
}
}),pages);
});
frontend.handler.common.show_custom_context_menu_BANG_ = (function frontend$handler$common$show_custom_context_menu_BANG_(e,context_menu_content){
frontend.util.stop(e);

var client_x = frontend.handler.common.goog$module$goog$object.get(e,"clientX");
var client_y = frontend.handler.common.goog$module$goog$object.get(e,"clientY");
var scroll_y = frontend.util.cur_doc_top();
frontend.state.show_custom_context_menu_BANG_(context_menu_content);

return setTimeout((function (){
var temp__5720__auto__ = document.getElementById("custom-context-menu");
if(cljs.core.truth_(temp__5720__auto__)){
var context_menu = temp__5720__auto__;
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(context_menu,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((scroll_y + client_y)),"px"].join('')], 0));
} else {
return null;
}
}),(10));
});
/**
 * Parse configuration from file `content` such as from config.edn.
 */
frontend.handler.common.parse_config = (function frontend$handler$common$parse_config(content){
try{return borkdude.rewrite_edn.parse_string(content);
}catch (e48083){var e = e48083;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.common",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("parse","config-failed","parse/config-failed",1038972807),e,new cljs.core.Keyword(null,"line","line",212345235),139], null)),null);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("backup","broken-config","backup/broken-config",1040905879),frontend.state.get_current_repo(),content], null));

return borkdude.rewrite_edn.parse_string(frontend.config.config_default_content);
}});
frontend.handler.common.listen_to_scroll_BANG_ = (function frontend$handler$common$listen_to_scroll_BANG_(element){
var _STAR_scroll_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return element.addEventListener("scroll",(function (){
if(cljs.core.truth_(cljs.core.deref(_STAR_scroll_timer))){
clearTimeout(cljs.core.deref(_STAR_scroll_timer));
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943),true);

frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.util.scroll_top.cljs$core$IFn$_invoke$arity$0());

return cljs.core.reset_BANG_(_STAR_scroll_timer,setTimeout((function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943),false);
}),(500)));
}),false);
});

//# sourceMappingURL=frontend.handler.common.js.map
