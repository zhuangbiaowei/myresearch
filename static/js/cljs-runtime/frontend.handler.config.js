goog.provide('frontend.handler.config');
frontend.handler.config.set_config_BANG_ = (function frontend$handler$config$set_config_BANG_(k,v){
var path = frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$0();
return frontend.handler.file.edn_file_set_key_value(path,k,v);
});
frontend.handler.config.toggle_ui_show_brackets_BANG_ = (function frontend$handler$config$toggle_ui_show_brackets_BANG_(){
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("ui","show-brackets?","ui/show-brackets?",659790606),(!(show_brackets_QMARK_)));
});
frontend.handler.config.toggle_logical_outdenting_BANG_ = (function frontend$handler$config$toggle_logical_outdenting_BANG_(){
var logical_outdenting_QMARK_ = frontend.state.logical_outdenting_QMARK_();
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("editor","logical-outdenting?","editor/logical-outdenting?",-234289706),cljs.core.not(logical_outdenting_QMARK_));
});
frontend.handler.config.toggle_ui_enable_tooltip_BANG_ = (function frontend$handler$config$toggle_ui_enable_tooltip_BANG_(){
var enable_tooltip_QMARK_ = frontend.state.enable_tooltip_QMARK_();
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("ui","enable-tooltip?","ui/enable-tooltip?",1082007831),cljs.core.not(enable_tooltip_QMARK_));
});

//# sourceMappingURL=frontend.handler.config.js.map
