goog.provide('logseq.api');
logseq.api.normalize_keyword_for_json = (function logseq$api$normalize_keyword_for_json(input){
if(cljs.core.truth_(input)){
return clojure.walk.postwalk((function (a){
if((a instanceof cljs.core.Keyword)){
return camel_snake_kebab.core.__GT_camelCase(cljs.core.name(a));
} else {
if(cljs.core.uuid_QMARK_(a)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
} else {
return a;

}
}
}),input);
} else {
return null;
}
});
logseq.api.parse_hiccup_ui = (function logseq$api$parse_hiccup_ui(input){
if(typeof input === 'string'){
try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preset","preset",777387345),new cljs.core.Keyword(null,"termination-safe","termination-safe",-1845225130)], null));
}catch (e59397){if((e59397 instanceof Error)){
var e = e59397;
console.error("[parse hiccup error]",e);

return input;
} else {
throw e59397;

}
}} else {
return null;
}
});
logseq.api.install_plugin_hook = (function logseq$api$install_plugin_hook(pid,hook){
return frontend.state.install_plugin_hook(pid,hook);
});
goog.exportSymbol('logseq.api.install_plugin_hook', logseq.api.install_plugin_hook);
logseq.api.uninstall_plugin_hook = (function logseq$api$uninstall_plugin_hook(pid,hook_or_all){
return frontend.state.uninstall_plugin_hook(pid,hook_or_all);
});
goog.exportSymbol('logseq.api.uninstall_plugin_hook', logseq.api.uninstall_plugin_hook);
logseq.api.should_exec_plugin_hook = (function logseq$api$should_exec_plugin_hook(pid,hook){
var hooks = new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
return (((cljs.core.seq(hooks) == null)) || (cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(hooks,hook),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid))));
});
goog.exportSymbol('logseq.api.should_exec_plugin_hook', logseq.api.should_exec_plugin_hook);
logseq.api.get_state_from_store = (function logseq$api$get_state_from_store(path){
var temp__5720__auto__ = ((typeof path === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null):cljs_bean.core.__GT_clj(path));
if(cljs.core.truth_(temp__5720__auto__)){
var path__$1 = temp__5720__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59398_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__59398_SHARP_,"@")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__59398_SHARP_,(1));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__59398_SHARP_);
}
}),path__$1));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_state_from_store', logseq.api.get_state_from_store);
logseq.api.get_app_info = (function logseq$api$get_app_info(){
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),frontend.version.version], null)));
});
goog.exportSymbol('logseq.api.get_app_info', logseq.api.get_app_info);
logseq.api.get_user_configs = (function logseq$api$get_user_configs(){
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-graph","current-graph",1546435330),new cljs.core.Keyword(null,"preferred-start-of-week","preferred-start-of-week",-662727035),new cljs.core.Keyword(null,"preferred-theme-mode","preferred-theme-mode",959815621),new cljs.core.Keyword(null,"preferred-workflow","preferred-workflow",-1794663444),new cljs.core.Keyword(null,"preferred-todo","preferred-todo",595464434),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),new cljs.core.Keyword(null,"preferred-date-format","preferred-date-format",459860922),new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"show-brackets","show-brackets",-860247746),new cljs.core.Keyword(null,"preferred-format","preferred-format",-1784393121)],[frontend.state.get_current_repo(),frontend.state.get_start_of_week(),new cljs.core.Keyword("ui","theme","ui/theme",-1247877132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),frontend.state.get_preferred_workflow(),frontend.state.get_preferred_todo(),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),frontend.state.get_date_formatter(),frontend.state.get_me(),frontend.state.show_brackets_QMARK_(),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()])));
});
goog.exportSymbol('logseq.api.get_user_configs', logseq.api.get_user_configs);
logseq.api.get_current_graph = (function logseq$api$get_current_graph(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.config.local_repo,repo)){
return null;
} else {
return cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),repo,new cljs.core.Keyword(null,"name","name",1843675177),(frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(repo) : frontend.util.node_path.basename.call(null,repo)),new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_repo_dir(repo)], null));
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_current_graph', logseq.api.get_current_graph);
logseq.api.show_themes = (function logseq$api$show_themes(){
return frontend.components.plugins.open_select_theme_BANG_();
});
goog.exportSymbol('logseq.api.show_themes', logseq.api.show_themes);
logseq.api.set_theme_mode = (function logseq$api$set_theme_mode(mode){
return frontend.state.set_theme_mode_BANG_(mode);
});
goog.exportSymbol('logseq.api.set_theme_mode', logseq.api.set_theme_mode);
logseq.api.load_plugin_config = (function logseq$api$load_plugin_config(path){
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"package.json") : frontend.util.node_path.join.call(null,path,"package.json")));
});
goog.exportSymbol('logseq.api.load_plugin_config', logseq.api.load_plugin_config);
logseq.api.load_plugin_readme = (function logseq$api$load_plugin_readme(path){
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"readme.md") : frontend.util.node_path.join.call(null,path,"readme.md")));
});
goog.exportSymbol('logseq.api.load_plugin_readme', logseq.api.load_plugin_readme);
logseq.api.save_plugin_config = (function logseq$api$save_plugin_config(path,data){
var repo = "";
var path__$1 = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"package.json") : frontend.util.node_path.join.call(null,path,"package.json"));
return frontend.fs.write_file_BANG_(repo,"",path__$1,JSON.stringify(data,null,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
});
goog.exportSymbol('logseq.api.save_plugin_config', logseq.api.save_plugin_config);
logseq.api.write_dotdir_file = (function logseq$api$write_dotdir_file(file,content,sub_root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,sub_root) : frontend.util.node_path.join.call(null,path,sub_root)),(function (path__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_(path__$1,""),(function (exist_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(exist_QMARK_)?null:frontend.fs.mkdir_recur_BANG_(path__$1)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path__$1,file) : frontend.util.node_path.join.call(null,path__$1,file)),(function (user_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.starts_with_QMARK_(user_path,path__$1),(function (sub_dir_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(sub_dir_QMARK_)?null:(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),147], null)),null);

throw "write file denied";
})()
),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.dirname.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.dirname.cljs$core$IFn$_invoke$arity$1(user_path) : frontend.util.node_path.dirname.call(null,user_path)),(function (user_path_root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_(user_path_root,""),(function (exist_QMARK___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(exist_QMARK___$1)?null:frontend.fs.mkdir_recur_BANG_(user_path_root)),(function (___$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,"",user_path,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)),(function (___$3){
return promesa.protocols._promise(user_path);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.read_dotdir_file = (function logseq$api$read_dotdir_file(file,sub_root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,sub_root) : frontend.util.node_path.join.call(null,path,sub_root)),(function (path__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path__$1,file) : frontend.util.node_path.join.call(null,path__$1,file)),(function (user_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.starts_with_QMARK_(user_path,path__$1),(function (sub_dir_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(sub_dir_QMARK_)?null:(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),161], null)),null);

throw "read file denied";
})()
),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_("",user_path),(function (exist_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(exist_QMARK_)?null:(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),163], null)),null);

throw "file not existed";
})()
),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",user_path),(function (content){
return promesa.protocols._promise(content);
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.unlink_dotdir_file_BANG_ = (function logseq$api$unlink_dotdir_file_BANG_(file,sub_root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,sub_root) : frontend.util.node_path.join.call(null,path,sub_root)),(function (path__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path__$1,file) : frontend.util.node_path.join.call(null,path__$1,file)),(function (user_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.starts_with_QMARK_(user_path,path__$1),(function (sub_dir_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(sub_dir_QMARK_)?null:(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),174], null)),null);

throw "access file denied";
})()
),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_("",user_path),(function (exist_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(exist_QMARK_)?null:(function (){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),176], null)),null);

throw "file not existed";
})()
),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.unlink_BANG_(repo,user_path,cljs.core.PersistentArrayMap.EMPTY),(function (___$2){
return promesa.protocols._promise(null);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.write_user_tmp_file = (function logseq$api$write_user_tmp_file(file,content){
return logseq.api.write_dotdir_file(file,content,"tmp");
});
goog.exportSymbol('logseq.api.write_user_tmp_file', logseq.api.write_user_tmp_file);
logseq.api.write_plugin_storage_file = (function logseq$api$write_plugin_storage_file(plugin_id,file,content){
return logseq.api.write_dotdir_file(file,content,(function (){var plugin_id__$1 = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id));
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2("storages",plugin_id__$1) : frontend.util.node_path.join.call(null,"storages",plugin_id__$1));
})());
});
goog.exportSymbol('logseq.api.write_plugin_storage_file', logseq.api.write_plugin_storage_file);
logseq.api.read_plugin_storage_file = (function logseq$api$read_plugin_storage_file(plugin_id,file){
var plugin_id__$1 = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id));
return logseq.api.read_dotdir_file(file,(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2("storages",plugin_id__$1) : frontend.util.node_path.join.call(null,"storages",plugin_id__$1)));
});
goog.exportSymbol('logseq.api.read_plugin_storage_file', logseq.api.read_plugin_storage_file);
logseq.api.unlink_plugin_storage_file = (function logseq$api$unlink_plugin_storage_file(plugin_id,file){
var plugin_id__$1 = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id));
return logseq.api.unlink_dotdir_file_BANG_(file,(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2("storages",plugin_id__$1) : frontend.util.node_path.join.call(null,"storages",plugin_id__$1)));
});
goog.exportSymbol('logseq.api.unlink_plugin_storage_file', logseq.api.unlink_plugin_storage_file);
logseq.api.exist_plugin_storage_file = (function logseq$api$exist_plugin_storage_file(plugin_id,file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id)),(function (plugin_id__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(root,"storages",plugin_id__$1) : frontend.util.node_path.join.call(null,root,"storages",plugin_id__$1)),file),(function (exist_QMARK_){
return promesa.protocols._promise(exist_QMARK_);
}));
}));
}));
}));
});
goog.exportSymbol('logseq.api.exist_plugin_storage_file', logseq.api.exist_plugin_storage_file);
logseq.api.clear_plugin_storage_files = (function logseq$api$clear_plugin_storage_files(plugin_id){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id)),(function (plugin_id__$1){
return promesa.protocols._promise(frontend.fs.rmdir_BANG_((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$3(root,"storages",plugin_id__$1) : frontend.util.node_path.join.call(null,root,"storages",plugin_id__$1))));
}));
}));
}));
});
goog.exportSymbol('logseq.api.clear_plugin_storage_files', logseq.api.clear_plugin_storage_files);
logseq.api.load_user_preferences = (function logseq$api$load_user_preferences(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"preferences.json") : frontend.util.node_path.join.call(null,path,"preferences.json")),(function (path__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$3(repo,"",path__$1),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",path__$1),(function (json){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((clojure.string.blank_QMARK_(json))?"{}":json),(function (json__$1){
return promesa.protocols._promise(JSON.parse(json__$1));
}));
}));
}));
}));
}));
}));
}));
});
goog.exportSymbol('logseq.api.load_user_preferences', logseq.api.load_user_preferences);
logseq.api.save_user_preferences = (function logseq$api$save_user_preferences(data){
if(cljs.core.truth_(data)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2("",(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"preferences.json") : frontend.util.node_path.join.call(null,path,"preferences.json")),(function (path__$1){
return promesa.protocols._promise(frontend.fs.write_file_BANG_(repo,"",path__$1,JSON.stringify(data,null,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)));
}));
}));
}));
}));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.save_user_preferences', logseq.api.save_user_preferences);
logseq.api.load_plugin_user_settings = frontend.handler.plugin.make_fn_to_load_dotdir_json("settings","{}");
goog.exportSymbol('logseq.api.load_plugin_user_settings', logseq.api.load_plugin_user_settings);
logseq.api.save_plugin_user_settings = (function logseq$api$save_plugin_user_settings(key,data){
return frontend.handler.plugin.make_fn_to_save_dotdir_json("settings")(key,JSON.stringify(data,null,(2)));
});
goog.exportSymbol('logseq.api.save_plugin_user_settings', logseq.api.save_plugin_user_settings);
logseq.api.unlink_plugin_user_settings = frontend.handler.plugin.make_fn_to_unlink_dotdir_json("settings");
goog.exportSymbol('logseq.api.unlink_plugin_user_settings', logseq.api.unlink_plugin_user_settings);
logseq.api.register_plugin_slash_command = (function logseq$api$register_plugin_slash_command(pid,cmd_actions){
var temp__5720__auto__ = cljs_bean.core.__GT_clj(cmd_actions);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__59400 = temp__5720__auto__;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59400,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59400,(1),null);
return frontend.handler.plugin.register_plugin_slash_command(pid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59399_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__59399_SHARP_))], null),cljs.core.rest(p1__59399_SHARP_));
}),actions)], null));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.register_plugin_slash_command', logseq.api.register_plugin_slash_command);
logseq.api.register_plugin_simple_command = (function logseq$api$register_plugin_simple_command(pid,cmd_action,palette_QMARK_){
var temp__5720__auto__ = cljs_bean.core.__GT_clj(cmd_action);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__59403 = temp__5720__auto__;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59403,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59403,(1),null);
var action__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(action,(0),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(action)));
var cmd__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"key","key",-1516042587),clojure.string.replace(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cmd),":","-"));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cmd__$1);
var keybinding = new cljs.core.Keyword(null,"keybinding","keybinding",1090151579).cljs$core$IFn$_invoke$arity$1(cmd__$1);
var palette_cmd = (function (){var and__5041__auto__ = palette_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.plugin.simple_cmd__GT_palette_cmd(pid,cmd__$1,action__$1);
} else {
return and__5041__auto__;
}
})();
var action_SINGLEQUOTE_ = (function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exec-plugin-cmd","exec-plugin-cmd",1049730302),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cmd__$1,new cljs.core.Keyword(null,"action","action",-811238024),action__$1], null)], null));
});
frontend.handler.plugin.register_plugin_simple_command(pid,cmd__$1,action__$1);

if(cljs.core.truth_(palette_QMARK_)){
frontend.handler.command_palette.register(palette_cmd);
} else {
}

var temp__5720__auto____$1 = (function (){var and__5041__auto__ = keybinding;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.plugin.simple_cmd_keybinding__GT_shortcut_args(pid,key,keybinding);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var shortcut_args = temp__5720__auto____$1;
var dispatch_cmd = (function (_e){
if(cljs.core.truth_(palette_QMARK_)){
return frontend.handler.command_palette.invoke_command(palette_cmd);
} else {
return action_SINGLEQUOTE_();
}
});
var vec__59406 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(shortcut_args,(2),cljs.core.assoc,new cljs.core.Keyword(null,"fn","fn",-1175266204),dispatch_cmd);
var handler_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59406,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59406,(1),null);
var shortcut_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59406,(2),null);
console.debug(new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler_id,id,shortcut_map], null));

return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,id,shortcut_map);
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.register_plugin_simple_command', logseq.api.register_plugin_simple_command);
logseq.api.unregister_plugin_simple_command = (function logseq$api$unregister_plugin_simple_command(pid){
frontend.handler.plugin.unregister_plugin_simple_command(pid);

var palette_matched = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59409_SHARP_){
return clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__59409_SHARP_)),["plugin.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid)].join(''));
}),frontend.handler.command_palette.get_commands());
if(cljs.core.seq(palette_matched)){
var seq__59410 = cljs.core.seq(palette_matched);
var chunk__59411 = null;
var count__59412 = (0);
var i__59413 = (0);
while(true){
if((i__59413 < count__59412)){
var cmd = chunk__59411.cljs$core$IIndexed$_nth$arity$2(null,i__59413);
frontend.handler.command_palette.unregister(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cmd));

if(cljs.core.seq(new cljs.core.Keyword(null,"shortcut","shortcut",-431647697).cljs$core$IFn$_invoke$arity$1(cmd))){
console.debug(new cljs.core.Keyword("shortcut","unregister-shortcut","shortcut/unregister-shortcut",-1191227358),cmd);

frontend.modules.shortcut.core.unregister_shortcut_BANG_(new cljs.core.Keyword(null,"handler-id","handler-id",1160395333).cljs$core$IFn$_invoke$arity$1(cmd),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cmd));
} else {
}


var G__59448 = seq__59410;
var G__59449 = chunk__59411;
var G__59450 = count__59412;
var G__59451 = (i__59413 + (1));
seq__59410 = G__59448;
chunk__59411 = G__59449;
count__59412 = G__59450;
i__59413 = G__59451;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59410);
if(temp__5720__auto__){
var seq__59410__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59410__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__59410__$1);
var G__59452 = cljs.core.chunk_rest(seq__59410__$1);
var G__59453 = c__5565__auto__;
var G__59454 = cljs.core.count(c__5565__auto__);
var G__59455 = (0);
seq__59410 = G__59452;
chunk__59411 = G__59453;
count__59412 = G__59454;
i__59413 = G__59455;
continue;
} else {
var cmd = cljs.core.first(seq__59410__$1);
frontend.handler.command_palette.unregister(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cmd));

if(cljs.core.seq(new cljs.core.Keyword(null,"shortcut","shortcut",-431647697).cljs$core$IFn$_invoke$arity$1(cmd))){
console.debug(new cljs.core.Keyword("shortcut","unregister-shortcut","shortcut/unregister-shortcut",-1191227358),cmd);

frontend.modules.shortcut.core.unregister_shortcut_BANG_(new cljs.core.Keyword(null,"handler-id","handler-id",1160395333).cljs$core$IFn$_invoke$arity$1(cmd),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cmd));
} else {
}


var G__59456 = cljs.core.next(seq__59410__$1);
var G__59457 = null;
var G__59458 = (0);
var G__59459 = (0);
seq__59410 = G__59456;
chunk__59411 = G__59457;
count__59412 = G__59458;
i__59413 = G__59459;
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
goog.exportSymbol('logseq.api.unregister_plugin_simple_command', logseq.api.unregister_plugin_simple_command);
logseq.api.register_plugin_ui_item = (function logseq$api$register_plugin_ui_item(pid,type,opts){
var temp__5720__auto__ = cljs_bean.core.__GT_clj(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var opts__$1 = temp__5720__auto__;
return frontend.handler.plugin.register_plugin_ui_item(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"type","type",1174270348),type));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.register_plugin_ui_item', logseq.api.register_plugin_ui_item);
logseq.api.relaunch = (function logseq$api$relaunch(){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["relaunchApp"], 0));
});
goog.exportSymbol('logseq.api.relaunch', logseq.api.relaunch);
logseq.api.quit = (function logseq$api$quit(){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["quitApp"], 0));
});
goog.exportSymbol('logseq.api.quit', logseq.api.quit);
logseq.api.open_external_link = (function logseq$api$open_external_link(url){
if(cljs.core.truth_(cljs.core.re_find(/https?:\/\//,url))){
return apis.openExternal(url);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.open_external_link', logseq.api.open_external_link);
/**
 * @param {...*} var_args
 */
logseq.api.invoke_external_command = (function() { 
var logseq$api$invoke_external_command__delegate = function (type,args){
var temp__5720__auto__ = (function (){var and__5041__auto__ = clojure.string.starts_with_QMARK_(type,"logseq.");
if(and__5041__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(clojure.string.replace(type,/^logseq./,"")));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
var temp__5720__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.handler.command_palette.get_commands_unique(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"action","action",-811238024)], null));
if(cljs.core.truth_(temp__5720__auto____$1)){
var action = temp__5720__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(action,args);
} else {
return null;
}
} else {
return null;
}
};
var logseq$api$invoke_external_command = function (type,var_args){
var args = null;
if (arguments.length > 1) {
var G__59460__i = 0, G__59460__a = new Array(arguments.length -  1);
while (G__59460__i < G__59460__a.length) {G__59460__a[G__59460__i] = arguments[G__59460__i + 1]; ++G__59460__i;}
  args = new cljs.core.IndexedSeq(G__59460__a,0,null);
} 
return logseq$api$invoke_external_command__delegate.call(this,type,args);};
logseq$api$invoke_external_command.cljs$lang$maxFixedArity = 1;
logseq$api$invoke_external_command.cljs$lang$applyTo = (function (arglist__59461){
var type = cljs.core.first(arglist__59461);
var args = cljs.core.rest(arglist__59461);
return logseq$api$invoke_external_command__delegate(type,args);
});
logseq$api$invoke_external_command.cljs$core$IFn$_invoke$arity$variadic = logseq$api$invoke_external_command__delegate;
return logseq$api$invoke_external_command;
})()
;
goog.exportSymbol('logseq.api.invoke_external_command', logseq.api.invoke_external_command);
logseq.api.set_left_sidebar_visible = (function logseq$api$set_left_sidebar_visible(flag){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,"toggle")){
frontend.state.toggle_left_sidebar_BANG_();
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728),cljs.core.boolean$(flag));
}

return null;
});
goog.exportSymbol('logseq.api.set_left_sidebar_visible', logseq.api.set_left_sidebar_visible);
logseq.api.set_right_sidebar_visible = (function logseq$api$set_right_sidebar_visible(flag){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,"toggle")){
frontend.state.toggle_sidebar_open_QMARK__BANG_();
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),cljs.core.boolean$(flag));
}

return null;
});
goog.exportSymbol('logseq.api.set_right_sidebar_visible', logseq.api.set_right_sidebar_visible);
logseq.api.push_state = (function logseq$api$push_state(k,params,query){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),cljs_bean.core.__GT_clj(params),cljs_bean.core.__GT_clj(query));
});
goog.exportSymbol('logseq.api.push_state', logseq.api.push_state);
logseq.api.replace_state = (function logseq$api$replace_state(k,params,query){
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),cljs_bean.core.__GT_clj(params),cljs_bean.core.__GT_clj(query));
});
goog.exportSymbol('logseq.api.replace_state', logseq.api.replace_state);
logseq.api.check_editing = (function logseq$api$check_editing(){
if(cljs.core.truth_(frontend.state.get_edit_input_id())){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()));
} else {
return false;
}
});
goog.exportSymbol('logseq.api.check_editing', logseq.api.check_editing);
logseq.api.exit_editing_mode = (function logseq$api$exit_editing_mode(select_QMARK_){
frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1(select_QMARK_);

return null;
});
goog.exportSymbol('logseq.api.exit_editing_mode', logseq.api.exit_editing_mode);
logseq.api.insert_at_editing_cursor = (function logseq$api$insert_at_editing_cursor(content){
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
frontend.commands.simple_insert_BANG_(input_id,content,cljs.core.PersistentArrayMap.EMPTY);

return goog.dom.getElement(input_id).focus();
} else {
return null;
}
});
goog.exportSymbol('logseq.api.insert_at_editing_cursor', logseq.api.insert_at_editing_cursor);
logseq.api.restore_editing_cursor = (function logseq$api$restore_editing_cursor(){
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
return goog.dom.getElement(input_id).focus();
} else {
return null;
}
});
goog.exportSymbol('logseq.api.restore_editing_cursor', logseq.api.restore_editing_cursor);
logseq.api.get_editing_cursor_position = (function logseq$api$get_editing_cursor_position(){
var temp__5720__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5720__auto__)){
var input_id = temp__5720__auto__;
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(goog.dom.getElement(input_id))));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_editing_cursor_position', logseq.api.get_editing_cursor_position);
logseq.api.get_editing_block_content = (function logseq$api$get_editing_block_content(){
return frontend.state.get_edit_content();
});
goog.exportSymbol('logseq.api.get_editing_block_content', logseq.api.get_editing_block_content);
logseq.api.get_selected_blocks = (function logseq$api$get_selected_blocks(){
var temp__5720__auto__ = (function (){var and__5041__auto__ = frontend.state.in_selection_mode_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(frontend.state.get_selection_blocks());
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var blocks = temp__5720__auto__;
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (el){
var G__59414 = el.getAttribute("blockid");
if((G__59414 == null)){
return null;
} else {
return frontend.db.model.query_block_by_uuid(G__59414);
}
}),blocks);
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(blocks__$1));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_selected_blocks', logseq.api.get_selected_blocks);
logseq.api.get_current_page = (function logseq$api$get_current_page(){
var temp__5720__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.db.model.get_page(page);
if(cljs.core.truth_(temp__5720__auto____$1)){
var page__$1 = temp__5720__auto____$1;
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_current_page', logseq.api.get_current_page);
logseq.api.get_page = (function logseq$api$get_page(id_or_page_name){
var temp__5720__auto__ = ((typeof id_or_page_name === 'number')?frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(id_or_page_name):((typeof id_or_page_name === 'string')?frontend.db.model.get_page(id_or_page_name):null));
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
if(cljs.core.contains_QMARK_(page,new cljs.core.Keyword("block","left","block/left",-443712566))){
return null;
} else {
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page))));
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_page', logseq.api.get_page);
logseq.api.get_all_pages = (function logseq$api$get_all_pages(repo){
var pages = frontend.handler.page.get_all_pages(repo);
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(pages));
});
goog.exportSymbol('logseq.api.get_all_pages', logseq.api.get_all_pages);
logseq.api.create_page = (function logseq$api$create_page(name,properties,opts){
var G__59415 = (function (){var temp__5718__auto__ = frontend.db.model.get_page(name);
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
return page;
} else {
var properties__$1 = cljs_bean.core.__GT_clj(properties);
var map__59416 = cljs_bean.core.__GT_clj(opts);
var map__59416__$1 = cljs.core.__destructure_map(map__59416);
var redirect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"redirect","redirect",-1975673286));
var createFirstBlock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"createFirstBlock","createFirstBlock",-362653431));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var journal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"journal","journal",1585898830));
var name__$1 = frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),((cljs.core.boolean_QMARK_(redirect))?redirect:true),new cljs.core.Keyword(null,"journal?","journal?",-897756522),journal,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),((cljs.core.boolean_QMARK_(createFirstBlock))?createFirstBlock:true),new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"properties","properties",685819552),properties__$1], null));
return frontend.db.model.get_page(name__$1);
}
})();
var G__59415__$1 = (((G__59415 == null))?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__59415));
var G__59415__$2 = (((G__59415__$1 == null))?null:frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(G__59415__$1));
var G__59415__$3 = (((G__59415__$2 == null))?null:logseq.api.normalize_keyword_for_json(G__59415__$2));
if((G__59415__$3 == null)){
return null;
} else {
return cljs_bean.core.__GT_js(G__59415__$3);
}
});
goog.exportSymbol('logseq.api.create_page', logseq.api.create_page);
logseq.api.delete_page = (function logseq$api$delete_page(name){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (ok){
return frontend.handler.page.delete_BANG_(name,ok);
}));
});
goog.exportSymbol('logseq.api.delete_page', logseq.api.delete_page);
logseq.api.rename_page = frontend.handler.page.rename_BANG_;
goog.exportSymbol('logseq.api.rename_page', logseq.api.rename_page);
logseq.api.open_in_right_sidebar = (function logseq$api$open_in_right_sidebar(block_uuid){
return frontend.handler.editor.open_block_in_sidebar_BANG_(cljs.core.uuid(block_uuid));
});
goog.exportSymbol('logseq.api.open_in_right_sidebar', logseq.api.open_in_right_sidebar);
logseq.api.edit_block = (function logseq$api$edit_block(block_uuid,opts){
var temp__5720__auto__ = (function (){var and__5041__auto__ = block_uuid;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.uuid(block_uuid);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block_uuid__$1 = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.db.model.query_block_by_uuid(block_uuid__$1);
if(cljs.core.truth_(temp__5720__auto____$1)){
var block = temp__5720__auto____$1;
var map__59417 = cljs_bean.core.__GT_clj(opts);
var map__59417__$1 = cljs.core.__destructure_map(map__59417);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59417__$1,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"max","max",61366548));
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block,pos,block_uuid__$1);
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.edit_block', logseq.api.edit_block);
logseq.api.insert_block = (function logseq$api$insert_block(block_uuid_or_page_name,content,opts){
var map__59418 = cljs_bean.core.__GT_clj(opts);
var map__59418__$1 = cljs.core.__destructure_map(map__59418);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59418__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var sibling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59418__$1,new cljs.core.Keyword(null,"sibling","sibling",-1183865000));
var isPageBlock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59418__$1,new cljs.core.Keyword(null,"isPageBlock","isPageBlock",1969744282));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59418__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var page_name = (function (){var and__5041__auto__ = isPageBlock;
if(cljs.core.truth_(and__5041__auto__)){
return block_uuid_or_page_name;
} else {
return and__5041__auto__;
}
})();
var block_uuid = (cljs.core.truth_(isPageBlock)?null:cljs.core.uuid(block_uuid_or_page_name));
var block_uuid_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(sibling);
if(and__5041__auto__){
var and__5041__auto____$1 = before;
if(cljs.core.truth_(and__5041__auto____$1)){
return block_uuid;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?(function (){var block = (function (){var G__59422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__59422) : frontend.db.entity.call(null,G__59422));
})();
var first_child = frontend.db.model.get_by_parent__AMPERSAND__left((frontend.db.get_db.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_db.call(null)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(first_child)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_child);
} else {
return block_uuid;
}
})():block_uuid);
var insert_at_first_child_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_uuid_SINGLEQUOTE_,block_uuid);
var vec__59419 = ((insert_at_first_child_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sibling,before], null));
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59419,(0),null);
var before_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59419,(1),null);
var before_QMARK___$1 = (cljs.core.truth_((function (){var and__5041__auto__ = sibling_QMARK_ === false;
if(and__5041__auto__){
var and__5041__auto____$1 = before_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return (!(insert_at_first_child_QMARK_));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?false:before_QMARK_);
var new_block = frontend.handler.editor.api_insert_new_block_BANG_(content,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_uuid_SINGLEQUOTE_,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"before?","before?",765621039),before_QMARK___$1,new cljs.core.Keyword(null,"page","page",849072397),page_name,new cljs.core.Keyword(null,"properties","properties",685819552),properties], null));
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(new_block));
});
goog.exportSymbol('logseq.api.insert_block', logseq.api.insert_block);
logseq.api.insert_batch_block = (function logseq$api$insert_batch_block(block_uuid,batch_blocks,opts){
var temp__5720__auto__ = frontend.db.model.query_block_by_uuid(block_uuid);
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var temp__5720__auto____$1 = cljs_bean.core.__GT_clj(batch_blocks);
if(cljs.core.truth_(temp__5720__auto____$1)){
var bb = temp__5720__auto____$1;
var bb__$1 = (((!(cljs.core.vector_QMARK_(bb))))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[bb],null)):bb);
var map__59423 = cljs_bean.core.__GT_clj(opts);
var map__59423__$1 = cljs.core.__destructure_map(map__59423);
var sibling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59423__$1,new cljs.core.Keyword(null,"sibling","sibling",-1183865000));
var _ = frontend.handler.editor.insert_block_tree_after_target(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),sibling,bb__$1,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block));
return null;
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.insert_batch_block', logseq.api.insert_batch_block);
logseq.api.remove_block = (function logseq$api$remove_block(block_uuid,_opts){
var includeChildren = true;
var repo = frontend.state.get_current_repo();
frontend.handler.editor.delete_block_aux_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(block_uuid),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null),includeChildren);

return null;
});
goog.exportSymbol('logseq.api.remove_block', logseq.api.remove_block);
logseq.api.update_block = (function logseq$api$update_block(block_uuid,content,_opts){
var repo = frontend.state.get_current_repo();
var edit_input = frontend.state.get_edit_input_id();
var editing_QMARK_ = (function (){var and__5041__auto__ = edit_input;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(edit_input,block_uuid);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(editing_QMARK_)){
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_input,content);
} else {
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(repo,cljs.core.uuid(block_uuid),content);
}

return null;
});
goog.exportSymbol('logseq.api.update_block', logseq.api.update_block);
logseq.api.move_block = (function logseq$api$move_block(src_block_uuid,target_block_uuid,opts){
var map__59424 = cljs_bean.core.__GT_clj(opts);
var map__59424__$1 = cljs.core.__destructure_map(map__59424);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59424__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var move_to = ((cljs.core.boolean$(before))?new cljs.core.Keyword(null,"top","top",-1856271961):((cljs.core.boolean$(children))?new cljs.core.Keyword(null,"nested","nested",18943849):null
));
var src_block = frontend.db.model.query_block_by_uuid(cljs.core.uuid(src_block_uuid));
var target_block = frontend.db.model.query_block_by_uuid(cljs.core.uuid(target_block_uuid));
frontend.handler.dnd.move_blocks(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_block], null),target_block,move_to);

return null;
});
goog.exportSymbol('logseq.api.move_block', logseq.api.move_block);
logseq.api.get_block = (function logseq$api$get_block(id_or_uuid,opts){
var temp__5720__auto__ = ((typeof id_or_uuid === 'number')?frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(id_or_uuid):((typeof id_or_uuid === 'string')?frontend.db.model.query_block_by_uuid(id_or_uuid):null));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
if(cljs.core.contains_QMARK_(block,new cljs.core.Keyword("block","name","block/name",1619760316))){
return null;
} else {
var temp__5720__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto____$1)){
var uuid = temp__5720__auto____$1;
var map__59426 = cljs_bean.core.__GT_clj(opts);
var map__59426__$1 = cljs.core.__destructure_map(map__59426);
var includeChildren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59426__$1,new cljs.core.Keyword(null,"includeChildren","includeChildren",-941062106));
var repo = frontend.state.get_current_repo();
var block__$1 = (cljs.core.truth_(includeChildren)?cljs.core.first(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(frontend.db.model.get_block_and_children(repo,uuid),uuid)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59425_SHARP_){
return (new cljs.core.List(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(new cljs.core.List(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__59425_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)),null,(1),null)),(2),null));
}),(frontend.db.get_block_immediate_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_immediate_children.cljs$core$IFn$_invoke$arity$2(repo,uuid) : frontend.db.get_block_immediate_children.call(null,repo,uuid)))));
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(block__$1));
} else {
return null;
}
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_block', logseq.api.get_block);
logseq.api.get_current_block = (function logseq$api$get_current_block(opts){
var block = frontend.state.get_edit_block();
var block__$1 = (function (){var or__5043__auto__ = block;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__59427 = cljs.core.first(frontend.state.get_selection_blocks());
var G__59427__$1 = (((G__59427 == null))?null:G__59427.getAttribute("blockid"));
if((G__59427__$1 == null)){
return null;
} else {
return frontend.db.model.get_block_by_uuid(G__59427__$1);
}
}
})();
return logseq.api.get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1),opts);
});
goog.exportSymbol('logseq.api.get_current_block', logseq.api.get_current_block);
logseq.api.get_previous_sibling_block = (function logseq$api$get_previous_sibling_block(block_uuid){
var temp__5720__auto__ = frontend.db.model.query_block_by_uuid(block_uuid);
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var map__59428 = block;
var map__59428__$1 = cljs.core.__destructure_map(map__59428);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59428__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59428__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
var block__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,left))?null:frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left)));
var and__5041__auto__ = block__$1;
if(cljs.core.truth_(and__5041__auto__)){
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(block__$1));
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_previous_sibling_block', logseq.api.get_previous_sibling_block);
logseq.api.get_next_sibling_block = (function logseq$api$get_next_sibling_block(block_uuid){
var temp__5720__auto__ = frontend.db.model.query_block_by_uuid(block_uuid);
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.modules.outliner.core.get_right_siblings(frontend.modules.outliner.core.__GT_Block(block));
if(cljs.core.truth_(temp__5720__auto____$1)){
var right_siblings = temp__5720__auto____$1;
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(right_siblings))));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_next_sibling_block', logseq.api.get_next_sibling_block);
logseq.api.set_block_collapsed = (function logseq$api$set_block_collapsed(block_uuid,opts){
var temp__5720__auto__ = frontend.db.model.get_block_by_uuid(block_uuid);
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var opts__$1 = cljs_bean.core.__GT_clj(opts);
var opts__$2 = ((((typeof opts__$1 === 'string') || (cljs.core.boolean_QMARK_(opts__$1))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flag","flag",1088647881),opts__$1], null):opts__$1);
var map__59429 = opts__$2;
var map__59429__$1 = cljs.core.__destructure_map(map__59429);
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59429__$1,new cljs.core.Keyword(null,"flag","flag",1088647881));
var block_uuid__$1 = cljs.core.uuid(block_uuid);
var flag__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("toggle",flag))?cljs.core.not(frontend.util.collapsed_QMARK_(block)):cljs.core.boolean$(flag));
if(flag__$1){
frontend.handler.editor.collapse_block_BANG_(block_uuid__$1);
} else {
frontend.handler.editor.expand_block_BANG_(block_uuid__$1);
}

return null;
} else {
return null;
}
});
goog.exportSymbol('logseq.api.set_block_collapsed', logseq.api.set_block_collapsed);
logseq.api.upsert_block_property = (function logseq$api$upsert_block_property(block_uuid,key,value){
return frontend.handler.editor.set_block_property_BANG_(cljs.core.uuid(block_uuid),key,value);
});
goog.exportSymbol('logseq.api.upsert_block_property', logseq.api.upsert_block_property);
logseq.api.remove_block_property = (function logseq$api$remove_block_property(block_uuid,key){
return frontend.handler.editor.remove_block_property_BANG_(cljs.core.uuid(block_uuid),key);
});
goog.exportSymbol('logseq.api.remove_block_property', logseq.api.remove_block_property);
logseq.api.get_block_property = (function logseq$api$get_block_property(block_uuid,key){
var temp__5720__auto__ = frontend.db.model.query_block_by_uuid(block_uuid);
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_block_property', logseq.api.get_block_property);
logseq.api.get_block_properties = (function logseq$api$get_block_properties(block_uuid){
var temp__5720__auto__ = frontend.db.model.query_block_by_uuid(block_uuid);
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block)));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_block_properties', logseq.api.get_block_properties);
logseq.api.get_current_page_blocks_tree = (function logseq$api$get_current_page_blocks_tree(){
var temp__5720__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
var blocks = frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page);
var blocks__$1 = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks,page);
var blocks__$2 = logseq.api.normalize_keyword_for_json(blocks__$1);
return cljs_bean.core.__GT_js(blocks__$2);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_current_page_blocks_tree', logseq.api.get_current_page_blocks_tree);
logseq.api.get_page_blocks_tree = (function logseq$api$get_page_blocks_tree(page_name){
var temp__5720__auto__ = frontend.db.model.get_page(page_name);
if(cljs.core.truth_(temp__5720__auto__)){
var _ = temp__5720__auto__;
var blocks = frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page_name);
var blocks__$1 = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks,page_name);
var blocks__$2 = logseq.api.normalize_keyword_for_json(blocks__$1);
return cljs_bean.core.__GT_js(blocks__$2);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_page_blocks_tree', logseq.api.get_page_blocks_tree);
logseq.api.get_page_linked_references = (function logseq$api$get_page_linked_references(page_name_or_uuid){
var temp__5720__auto__ = (function (){var and__5041__auto__ = page_name_or_uuid;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.get_page(page_name_or_uuid);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
var page_name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
var ref_blocks = (cljs.core.truth_(page_name)?frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1(page_name):frontend.db.model.get_block_referenced_blocks(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)));
var ref_blocks__$1 = (function (){var and__5041__auto__ = cljs.core.seq(ref_blocks);
if(and__5041__auto__){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,ref_blocks);
} else {
return and__5041__auto__;
}
})();
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(ref_blocks__$1));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_page_linked_references', logseq.api.get_page_linked_references);
logseq.api.get_pages_from_namespace = (function logseq$api$get_pages_from_namespace(ns){
var temp__5720__auto__ = (function (){var and__5041__auto__ = ns;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.get_current_repo();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.db.model.get_namespace_pages(repo,ns);
if(cljs.core.truth_(temp__5720__auto____$1)){
var pages = temp__5720__auto____$1;
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(pages));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_pages_from_namespace', logseq.api.get_pages_from_namespace);
logseq.api.get_pages_tree_from_namespace = (function logseq$api$get_pages_tree_from_namespace(ns){
var temp__5720__auto__ = (function (){var and__5041__auto__ = ns;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.get_current_repo();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.db.model.get_namespace_hierarchy(repo,ns);
if(cljs.core.truth_(temp__5720__auto____$1)){
var pages = temp__5720__auto____$1;
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(pages));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.get_pages_tree_from_namespace', logseq.api.get_pages_tree_from_namespace);
logseq.api.first_child_of_block = (function logseq$api$first_child_of_block(block){
var temp__5720__auto__ = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto__)){
var children = temp__5720__auto__;
return cljs.core.first(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,block));
} else {
return null;
}
});
logseq.api.second_child_of_block = (function logseq$api$second_child_of_block(block){
var temp__5720__auto__ = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto__)){
var children = temp__5720__auto__;
return cljs.core.second(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,block));
} else {
return null;
}
});
logseq.api.last_child_of_block = (function logseq$api$last_child_of_block(block){
var temp__5720__auto__ = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto__)){
var children = temp__5720__auto__;
return cljs.core.last(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,block));
} else {
return null;
}
});
logseq.api.prepend_block_in_page = (function logseq$api$prepend_block_in_page(uuid_or_page_name,content,opts){
var page_QMARK_ = cljs.core.not(frontend.util.uuid_string_QMARK_(uuid_or_page_name));
var page_not_exist_QMARK_ = ((page_QMARK_) && ((frontend.db.model.get_page(uuid_or_page_name) == null)));
var _ = (function (){var and__5041__auto__ = page_not_exist_QMARK_;
if(and__5041__auto__){
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(uuid_or_page_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),true,new cljs.core.Keyword(null,"format","format",-1306924766),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()], null));
} else {
return and__5041__auto__;
}
})();
var temp__5720__auto__ = frontend.db.model.get_page(uuid_or_page_name);
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var block_SINGLEQUOTE_ = ((page_QMARK_)?logseq.api.second_child_of_block(block):logseq.api.first_child_of_block(block));
var sibling_QMARK_ = ((page_QMARK_) && ((!((block_SINGLEQUOTE_ == null)))));
var opts__$1 = cljs_bean.core.__GT_clj(opts);
var opts__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"isPageBlock","isPageBlock",1969744282),((page_QMARK_) && ((!(sibling_QMARK_)))),new cljs.core.Keyword(null,"sibling","sibling",-1183865000),sibling_QMARK_,new cljs.core.Keyword(null,"before","before",-1633692388),sibling_QMARK_], null)], 0));
var src = ((sibling_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_)):uuid_or_page_name);
return logseq.api.insert_block(src,content,cljs_bean.core.__GT_js(opts__$2));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.prepend_block_in_page', logseq.api.prepend_block_in_page);
logseq.api.append_block_in_page = (function logseq$api$append_block_in_page(uuid_or_page_name,content,opts){
var page_QMARK_ = cljs.core.not(frontend.util.uuid_string_QMARK_(uuid_or_page_name));
var page_not_exist_QMARK_ = ((page_QMARK_) && ((frontend.db.model.get_page(uuid_or_page_name) == null)));
var _ = (function (){var and__5041__auto__ = page_not_exist_QMARK_;
if(and__5041__auto__){
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(uuid_or_page_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),true,new cljs.core.Keyword(null,"format","format",-1306924766),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()], null));
} else {
return and__5041__auto__;
}
})();
var temp__5720__auto__ = frontend.db.model.get_page(uuid_or_page_name);
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var block_SINGLEQUOTE_ = logseq.api.last_child_of_block(block);
var sibling_QMARK_ = (!((block_SINGLEQUOTE_ == null)));
var opts__$1 = cljs_bean.core.__GT_clj(opts);
var opts__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"isPageBlock","isPageBlock",1969744282),((page_QMARK_) && ((!(sibling_QMARK_)))),new cljs.core.Keyword(null,"sibling","sibling",-1183865000),sibling_QMARK_], null),((sibling_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),false], null):null)], 0));
var src = ((sibling_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_)):uuid_or_page_name);
return logseq.api.insert_block(src,content,cljs_bean.core.__GT_js(opts__$2));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.append_block_in_page', logseq.api.append_block_in_page);
logseq.api.__install_plugin = (function logseq$api$__install_plugin(manifest){
var temp__5720__auto__ = cljs_bean.core.__GT_clj(manifest);
if(cljs.core.truth_(temp__5720__auto__)){
var map__59430 = temp__5720__auto__;
var map__59430__$1 = cljs.core.__destructure_map(map__59430);
var mft = map__59430__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.not((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return id;
} else {
return and__5041__auto__;
}
})())){
throw (new Error("[required] :repo :id"));
} else {
return frontend.handler.plugin.install_marketplace_plugin(mft);
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.__install_plugin', logseq.api.__install_plugin);
logseq.api.q = (function logseq$api$q(query_string){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.db.query_dsl.query(repo,query_string);
if(cljs.core.truth_(temp__5720__auto____$1)){
var result = temp__5720__auto____$1;
return cljs_bean.core.__GT_js(logseq.api.normalize_keyword_for_json(cljs.core.flatten(cljs.core.deref(result))));
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.q', logseq.api.q);
logseq.api.datascript_query = (function logseq$api$datascript_query(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59476 = arguments.length;
var i__5767__auto___59478 = (0);
while(true){
if((i__5767__auto___59478 < len__5766__auto___59476)){
args__5772__auto__.push((arguments[i__5767__auto___59478]));

var G__59479 = (i__5767__auto___59478 + (1));
i__5767__auto___59478 = G__59479;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return logseq.api.datascript_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});
goog.exportSymbol('logseq.api.datascript_query', logseq.api.datascript_query);

(logseq.api.datascript_query.cljs$core$IFn$_invoke$arity$variadic = (function (query,inputs){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5720__auto____$1)){
var db = temp__5720__auto____$1;
var query__$1 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(query);
var resolved_inputs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frontend.db.query_react.resolve_input,cljs.reader.read_string),inputs);
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query__$1,db,resolved_inputs);
return cljs.core.clj__GT_js(result);
} else {
return null;
}
} else {
return null;
}
}));

(logseq.api.datascript_query.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.api.datascript_query.cljs$lang$applyTo = (function (seq59431){
var G__59432 = cljs.core.first(seq59431);
var seq59431__$1 = cljs.core.next(seq59431);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59432,seq59431__$1);
}));

logseq.api.custom_query = frontend.db.custom_query;
goog.exportSymbol('logseq.api.custom_query', logseq.api.custom_query);
logseq.api.download_graph_db = (function logseq$api$download_graph_db(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5720__auto____$1)){
var db = temp__5720__auto____$1;
var db_str = (cljs.core.truth_(db)?(frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1 ? frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1(db) : frontend.db.db__GT_string.call(null,db)):"");
var data_str = ["data:text/edn;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(db_str))].join('');
var temp__5720__auto____$2 = goog.dom.getElement("download");
if(cljs.core.truth_(temp__5720__auto____$2)){
var anchor = temp__5720__auto____$2;
anchor.setAttribute("href",data_str);

anchor.setAttribute("download",[clojure.string.replace(repo,"/"," "),".transit"].join(''));

return anchor.click();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.download_graph_db', logseq.api.download_graph_db);
logseq.api.download_graph_pages = (function logseq$api$download_graph_pages(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return frontend.handler.export$.export_repo_as_zip_BANG_(repo);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.download_graph_pages', logseq.api.download_graph_pages);
logseq.api.exec_git_command = (function logseq$api$exec_git_command(args){
var temp__5720__auto__ = (function (){var and__5041__auto__ = args;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(cljs_bean.core.__GT_clj(args));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var args__$1 = temp__5720__auto__;
return frontend.handler.shell.run_git_command_BANG_(args__$1);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.exec_git_command', logseq.api.exec_git_command);
logseq.api.git_exec_command = (function logseq$api$git_exec_command(args){
var temp__5720__auto__ = (function (){var and__5041__auto__ = args;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(cljs_bean.core.__GT_clj(args));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var args__$1 = temp__5720__auto__;
return frontend.handler.shell.run_git_command2_BANG_(args__$1);
} else {
return null;
}
});
goog.exportSymbol('logseq.api.git_exec_command', logseq.api.git_exec_command);
logseq.api.git_load_ignore_file = (function logseq$api$git_load_ignore_file(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(".gitignore",(function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo),(function (dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$3(repo,dir,file),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(dir,file),(function (content){
return promesa.protocols._promise(content);
}));
}));
}));
}));
}));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.git_load_ignore_file', logseq.api.git_load_ignore_file);
logseq.api.git_save_ignore_file = (function logseq$api$git_save_ignore_file(content){
var temp__5720__auto__ = (function (){var and__5041__auto__ = typeof content === 'string';
if(and__5041__auto__){
return frontend.state.get_current_repo();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(".gitignore",(function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo),(function (dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,dir,file,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)),(function (_){
return promesa.protocols._promise(null);
}));
}));
}));
}));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.git_save_ignore_file', logseq.api.git_save_ignore_file);
logseq.api.show_msg = (function logseq$api$show_msg(var_args){
var G__59434 = arguments.length;
switch (G__59434) {
case 1:
return logseq.api.show_msg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.api.show_msg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.api.show_msg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('logseq.api.show_msg', logseq.api.show_msg);

(logseq.api.show_msg.cljs$core$IFn$_invoke$arity$1 = (function (content){
return logseq.api.show_msg.cljs$core$IFn$_invoke$arity$3(content,new cljs.core.Keyword(null,"success","success",1890645906),null);
}));

(logseq.api.show_msg.cljs$core$IFn$_invoke$arity$2 = (function (content,status){
return logseq.api.show_msg.cljs$core$IFn$_invoke$arity$3(content,status,null);
}));

(logseq.api.show_msg.cljs$core$IFn$_invoke$arity$3 = (function (content,status,opts){
var map__59435 = cljs_bean.core.__GT_clj(opts);
var map__59435__$1 = cljs.core.__destructure_map(map__59435);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59435__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59435__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var hiccup_QMARK_ = ((typeof content === 'string') && (clojure.string.starts_with_QMARK_(clojure.string.triml(content),"[:")));
var content__$1 = ((hiccup_QMARK_)?logseq.api.parse_hiccup_ui(content):content);
var uid = ((typeof key === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key):null);
var clear_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(timeout,(0));
var key_SINGLEQUOTE_ = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5(content__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(status),clear_QMARK_,uid,timeout);
return cljs.core.name(key_SINGLEQUOTE_);
}));

(logseq.api.show_msg.cljs$lang$maxFixedArity = 3);

logseq.api.ui_show_msg = (function logseq$api$ui_show_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59541 = arguments.length;
var i__5767__auto___59542 = (0);
while(true){
if((i__5767__auto___59542 < len__5766__auto___59541)){
args__5772__auto__.push((arguments[i__5767__auto___59542]));

var G__59544 = (i__5767__auto___59542 + (1));
i__5767__auto___59542 = G__59544;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return logseq.api.ui_show_msg.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});
goog.exportSymbol('logseq.api.ui_show_msg', logseq.api.ui_show_msg);

(logseq.api.ui_show_msg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(logseq.api.show_msg,args);
}));

(logseq.api.ui_show_msg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.api.ui_show_msg.cljs$lang$applyTo = (function (seq59436){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59436));
}));

logseq.api.ui_close_msg = (function logseq$api$ui_close_msg(key){
if(typeof key === 'string'){
frontend.handler.notification.clear_BANG_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));

return null;
} else {
return null;
}
});
goog.exportSymbol('logseq.api.ui_close_msg', logseq.api.ui_close_msg);
logseq.api.assets_list_files_of_current_graph = (function logseq$api$assets_list_files_of_current_graph(exts){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"getAssetsFiles","getAssetsFiles",87392727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exts","exts",-946342126),exts], null)], 0)),(function (files){
return promesa.protocols._promise(cljs_bean.core.__GT_js(files));
}));
}));
});
goog.exportSymbol('logseq.api.assets_list_files_of_current_graph', logseq.api.assets_list_files_of_current_graph);
logseq.api.exper_load_scripts = (function logseq$api$exper_load_scripts(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59547 = arguments.length;
var i__5767__auto___59548 = (0);
while(true){
if((i__5767__auto___59548 < len__5766__auto___59547)){
args__5772__auto__.push((arguments[i__5767__auto___59548]));

var G__59550 = (i__5767__auto___59548 + (1));
i__5767__auto___59548 = G__59550;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return logseq.api.exper_load_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});
goog.exportSymbol('logseq.api.exper_load_scripts', logseq.api.exper_load_scripts);

(logseq.api.exper_load_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (pid,scripts){
var temp__5720__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5720__auto__)){
var _pl = temp__5720__auto__;
var seq__59440 = cljs.core.seq(scripts);
var chunk__59442 = null;
var count__59443 = (0);
var i__59444 = (0);
while(true){
if((i__59444 < count__59443)){
var s = chunk__59442.cljs$core$IIndexed$_nth$arity$2(null,i__59444);
var upt_status_59553 = ((function (seq__59440,chunk__59442,count__59443,i__59444,s,_pl,temp__5720__auto__){
return (function (p1__59437_SHARP_){
return frontend.state.upt_plugin_resource(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),s,new cljs.core.Keyword(null,"status","status",-1997798413),p1__59437_SHARP_);
});})(seq__59440,chunk__59442,count__59443,i__59444,s,_pl,temp__5720__auto__))
;
var init_QMARK__59554 = frontend.handler.plugin.register_plugin_resources(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"src","src",-1651076051),s], null));
if(cljs.core.truth_(init_QMARK__59554)){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){
upt_status_59553(new cljs.core.Keyword(null,"pending","pending",-220036727));

return frontend.loader.load.cljs$core$IFn$_invoke$arity$3(s,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),cljs.core.name(pid)], null)], null));
})()
,((function (seq__59440,chunk__59442,count__59443,i__59444,upt_status_59553,init_QMARK__59554,s,_pl,temp__5720__auto__){
return (function (){
return upt_status_59553(new cljs.core.Keyword(null,"done","done",-889844188));
});})(seq__59440,chunk__59442,count__59443,i__59444,upt_status_59553,init_QMARK__59554,s,_pl,temp__5720__auto__))
),((function (seq__59440,chunk__59442,count__59443,i__59444,upt_status_59553,init_QMARK__59554,s,_pl,temp__5720__auto__){
return (function (){
return upt_status_59553(new cljs.core.Keyword(null,"error","error",-978969032));
});})(seq__59440,chunk__59442,count__59443,i__59444,upt_status_59553,init_QMARK__59554,s,_pl,temp__5720__auto__))
);
} else {
}


var G__59556 = seq__59440;
var G__59557 = chunk__59442;
var G__59558 = count__59443;
var G__59559 = (i__59444 + (1));
seq__59440 = G__59556;
chunk__59442 = G__59557;
count__59443 = G__59558;
i__59444 = G__59559;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__59440);
if(temp__5720__auto____$1){
var seq__59440__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59440__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__59440__$1);
var G__59560 = cljs.core.chunk_rest(seq__59440__$1);
var G__59561 = c__5565__auto__;
var G__59562 = cljs.core.count(c__5565__auto__);
var G__59563 = (0);
seq__59440 = G__59560;
chunk__59442 = G__59561;
count__59443 = G__59562;
i__59444 = G__59563;
continue;
} else {
var s = cljs.core.first(seq__59440__$1);
var upt_status_59564 = ((function (seq__59440,chunk__59442,count__59443,i__59444,s,seq__59440__$1,temp__5720__auto____$1,_pl,temp__5720__auto__){
return (function (p1__59437_SHARP_){
return frontend.state.upt_plugin_resource(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),s,new cljs.core.Keyword(null,"status","status",-1997798413),p1__59437_SHARP_);
});})(seq__59440,chunk__59442,count__59443,i__59444,s,seq__59440__$1,temp__5720__auto____$1,_pl,temp__5720__auto__))
;
var init_QMARK__59565 = frontend.handler.plugin.register_plugin_resources(pid,new cljs.core.Keyword(null,"scripts","scripts",626373193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"src","src",-1651076051),s], null));
if(cljs.core.truth_(init_QMARK__59565)){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){
upt_status_59564(new cljs.core.Keyword(null,"pending","pending",-220036727));

return frontend.loader.load.cljs$core$IFn$_invoke$arity$3(s,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),cljs.core.name(pid)], null)], null));
})()
,((function (seq__59440,chunk__59442,count__59443,i__59444,upt_status_59564,init_QMARK__59565,s,seq__59440__$1,temp__5720__auto____$1,_pl,temp__5720__auto__){
return (function (){
return upt_status_59564(new cljs.core.Keyword(null,"done","done",-889844188));
});})(seq__59440,chunk__59442,count__59443,i__59444,upt_status_59564,init_QMARK__59565,s,seq__59440__$1,temp__5720__auto____$1,_pl,temp__5720__auto__))
),((function (seq__59440,chunk__59442,count__59443,i__59444,upt_status_59564,init_QMARK__59565,s,seq__59440__$1,temp__5720__auto____$1,_pl,temp__5720__auto__){
return (function (){
return upt_status_59564(new cljs.core.Keyword(null,"error","error",-978969032));
});})(seq__59440,chunk__59442,count__59443,i__59444,upt_status_59564,init_QMARK__59565,s,seq__59440__$1,temp__5720__auto____$1,_pl,temp__5720__auto__))
);
} else {
}


var G__59589 = cljs.core.next(seq__59440__$1);
var G__59590 = null;
var G__59591 = (0);
var G__59592 = (0);
seq__59440 = G__59589;
chunk__59442 = G__59590;
count__59443 = G__59591;
i__59444 = G__59592;
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
}));

(logseq.api.exper_load_scripts.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.api.exper_load_scripts.cljs$lang$applyTo = (function (seq59438){
var G__59439 = cljs.core.first(seq59438);
var seq59438__$1 = cljs.core.next(seq59438);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59439,seq59438__$1);
}));

logseq.api.exper_register_fenced_code_renderer = (function logseq$api$exper_register_fenced_code_renderer(pid,type,opts){
var temp__5720__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5720__auto__)){
var _pl = temp__5720__auto__;
return frontend.handler.plugin.register_fenced_code_renderer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),type,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__59446_SHARP_,p2__59447_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59446_SHARP_,p2__59447_SHARP_,(opts[cljs.core.name(p2__59447_SHARP_)]));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"render","render",-1408033454)], null)));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.exper_register_fenced_code_renderer', logseq.api.exper_register_fenced_code_renderer);
logseq.api.exper_register_extensions_enhancer = (function logseq$api$exper_register_extensions_enhancer(pid,type,enhancer){
var temp__5720__auto__ = (function (){var and__5041__auto__ = cljs.core.fn_QMARK_(enhancer);
if(and__5041__auto__){
return frontend.handler.plugin.get_plugin_inst(pid);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var _pl = temp__5720__auto__;
return frontend.handler.plugin.register_extensions_enhancer(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enhancer","enhancer",-929020171),enhancer], null));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.exper_register_extensions_enhancer', logseq.api.exper_register_extensions_enhancer);
logseq.api.query_element_by_id = (function logseq$api$query_element_by_id(id){
var temp__5720__auto__ = goog.dom.getElement(id);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
if(cljs.core.truth_(el)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(el.tagName),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
} else {
return false;
}
} else {
return null;
}
});
goog.exportSymbol('logseq.api.query_element_by_id', logseq.api.query_element_by_id);
logseq.api.query_element_rect = (function logseq$api$query_element_rect(selector){
var temp__5720__auto__ = document.querySelector(selector);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return cljs_bean.core.__GT_js(el.getBoundingClientRect().toJSON());
} else {
return null;
}
});
goog.exportSymbol('logseq.api.query_element_rect', logseq.api.query_element_rect);
logseq.api.set_focused_settings = (function logseq$api$set_focused_settings(pid){
var temp__5720__auto__ = frontend.state.get_plugin_by_id(pid);
if(cljs.core.truth_(temp__5720__auto__)){
var plugin = temp__5720__auto__;
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),pid);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),pid,false,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plugin);
}
})()], null));
} else {
return null;
}
});
goog.exportSymbol('logseq.api.set_focused_settings', logseq.api.set_focused_settings);
logseq.api.force_save_graph = (function logseq$api$force_save_graph(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.listener.persist_dbs_BANG_(),(function (_){
return promesa.protocols._promise(true);
}));
}));
});
goog.exportSymbol('logseq.api.force_save_graph', logseq.api.force_save_graph);
logseq.api.__debug_state = (function logseq$api$__debug_state(path){
return cljs_bean.core.__GT_js(((typeof path === 'string')?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path)):cljs.core.deref(frontend.state.state)));
});
goog.exportSymbol('logseq.api.__debug_state', logseq.api.__debug_state);

//# sourceMappingURL=logseq.api.js.map
