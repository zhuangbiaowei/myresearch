goog.provide('frontend.handler.ui');
goog.scope(function(){
  frontend.handler.ui.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.ui.get_css_var_value = (function frontend$handler$ui$get_css_var_value(var_name){
return getComputedStyle(document.documentElement).getPropertyValue(var_name);
});
frontend.handler.ui.get_right_sidebar_width = (function frontend$handler$ui$get_right_sidebar_width(){
var or__5043__auto__ = document.getElementById("right-sidebar").style.width;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.ui.get_css_var_value("--right-sidebar-width");
}
});
frontend.handler.ui.persist_right_sidebar_width_BANG_ = (function frontend$handler$ui$persist_right_sidebar_width_BANG_(){
return frontend.storage.set("ls-right-sidebar-width",frontend.handler.ui.get_right_sidebar_width());
});
frontend.handler.ui.restore_right_sidebar_width_BANG_ = (function frontend$handler$ui$restore_right_sidebar_width_BANG_(){
var temp__5720__auto__ = frontend.storage.get("ls-right-sidebar-width");
if(cljs.core.truth_(temp__5720__auto__)){
var width = temp__5720__auto__;
return document.getElementById("right-sidebar").style.setProperty("width",width);
} else {
return null;
}
});
frontend.handler.ui.close_left_sidebar_BANG_ = (function frontend$handler$ui$close_left_sidebar_BANG_(){
var temp__5720__auto__ = goog.dom.getElement("close-left-bar");
if(cljs.core.truth_(temp__5720__auto__)){
var elem = temp__5720__auto__;
return elem.click();
} else {
return null;
}
});
frontend.handler.ui.toggle_right_sidebar_BANG_ = (function frontend$handler$ui$toggle_right_sidebar_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
} else {
frontend.handler.ui.restore_right_sidebar_width_BANG_();
}

return frontend.state.toggle_sidebar_open_QMARK__BANG_();
});
frontend.handler.ui.persist_right_sidebar_state_BANG_ = (function frontend$handler$ui$persist_right_sidebar_state_BANG_(){
var sidebar_open_QMARK_ = new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var data = (cljs.core.truth_(sidebar_open_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),new cljs.core.Keyword(null,"open?","open?",1238443125),true], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
return frontend.storage.set("ls-right-sidebar-state",data);
});
frontend.handler.ui.restore_right_sidebar_state_BANG_ = (function frontend$handler$ui$restore_right_sidebar_state_BANG_(){
var temp__5720__auto__ = frontend.storage.get("ls-right-sidebar-state");
if(cljs.core.truth_(temp__5720__auto__)){
var data_SINGLEQUOTE_ = temp__5720__auto__;
var map__42678 = data_SINGLEQUOTE_;
var map__42678__$1 = cljs.core.__destructure_map(map__42678);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42678__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var collapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42678__$1,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42678__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(open_QMARK_)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),open_QMARK_);

frontend.state.set_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),blocks);

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),collapsed);

return frontend.handler.ui.restore_right_sidebar_width_BANG_();
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.ui.toggle_contents_BANG_ = (function frontend$handler$ui$toggle_contents_BANG_(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var current_repo = temp__5720__auto__;
var id = "contents";
if(cljs.core.truth_(frontend.state.sidebar_block_exists_QMARK_(id))){
return frontend.state.sidebar_remove_block_BANG_(id);
} else {
return frontend.state.sidebar_add_block_BANG_(current_repo,id,new cljs.core.Keyword(null,"contents","contents",-1567174023));
}
} else {
return null;
}
});
frontend.handler.ui.toggle_help_BANG_ = (function frontend$handler$ui$toggle_help_BANG_(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var current_repo = temp__5720__auto__;
var id = "help";
if(cljs.core.truth_(frontend.state.sidebar_block_exists_QMARK_(id))){
return frontend.state.sidebar_remove_block_BANG_(id);
} else {
return frontend.state.sidebar_add_block_BANG_(current_repo,id,new cljs.core.Keyword(null,"help","help",-439233446));
}
} else {
return null;
}
});
frontend.handler.ui.toggle_settings_modal_BANG_ = (function frontend$handler$ui$toggle_settings_modal_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("srs","mode?","srs/mode?",-258295984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return null;
} else {
return frontend.state.toggle_settings_BANG_();
}
});
frontend.handler.ui.re_render_root_BANG_ = (function frontend$handler$ui$re_render_root_BANG_(var_args){
var G__42680 = arguments.length;
switch (G__42680) {
case 0:
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__42681){
var map__42682 = p__42681;
var map__42682__$1 = cljs.core.__destructure_map(map__42682);
var clear_all_query_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42682__$1,new cljs.core.Keyword(null,"clear-all-query-state?","clear-all-query-state?",-289780993),false);
var temp__5720__auto__ = frontend.state.get_root_component();
if(cljs.core.truth_(temp__5720__auto__)){
var component = temp__5720__auto__;
if(cljs.core.truth_(clear_all_query_state_QMARK_)){
(frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.db.clear_query_state_BANG_.call(null));
} else {
(frontend.db.clear_query_state_without_refs_and_embeds_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.db.clear_query_state_without_refs_and_embeds_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.db.clear_query_state_without_refs_and_embeds_BANG_.call(null));
}

rum.core.request_render(component);

var seq__42683 = cljs.core.seq(frontend.state.get_custom_query_components());
var chunk__42684 = null;
var count__42685 = (0);
var i__42686 = (0);
while(true){
if((i__42686 < count__42685)){
var component__$1 = chunk__42684.cljs$core$IIndexed$_nth$arity$2(null,i__42686);
rum.core.request_render(component__$1);


var G__42730 = seq__42683;
var G__42731 = chunk__42684;
var G__42732 = count__42685;
var G__42733 = (i__42686 + (1));
seq__42683 = G__42730;
chunk__42684 = G__42731;
count__42685 = G__42732;
i__42686 = G__42733;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__42683);
if(temp__5720__auto____$1){
var seq__42683__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42683__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42683__$1);
var G__42734 = cljs.core.chunk_rest(seq__42683__$1);
var G__42735 = c__5565__auto__;
var G__42736 = cljs.core.count(c__5565__auto__);
var G__42737 = (0);
seq__42683 = G__42734;
chunk__42684 = G__42735;
count__42685 = G__42736;
i__42686 = G__42737;
continue;
} else {
var component__$1 = cljs.core.first(seq__42683__$1);
rum.core.request_render(component__$1);


var G__42738 = cljs.core.next(seq__42683__$1);
var G__42739 = null;
var G__42740 = (0);
var G__42741 = (0);
seq__42683 = G__42738;
chunk__42684 = G__42739;
count__42685 = G__42740;
i__42686 = G__42741;
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

(frontend.handler.ui.re_render_root_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.ui.re_render_file_BANG_ = (function frontend$handler$ui$re_render_file_BANG_(){
var temp__5720__auto__ = frontend.state.get_file_component();
if(cljs.core.truth_(temp__5720__auto__)){
var component = temp__5720__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),frontend.state.get_current_route())){
return rum.core.request_render(component);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.ui.highlight_element_BANG_ = (function frontend$handler$ui$highlight_element_BANG_(fragment){
var id = (function (){var and__5041__auto__ = (cljs.core.count(fragment) > (36));
if(and__5041__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fragment,(cljs.core.count(fragment) - (36)));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.uuid_string_QMARK_(id);
} else {
return and__5041__auto__;
}
})())){
var elements = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName(id));
if(cljs.core.truth_(cljs.core.first(elements))){
frontend.util.scroll_to_element(frontend.handler.ui.goog$module$goog$object.get(cljs.core.first(elements),"id"));
} else {
}

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(elements);
} else {
var temp__5720__auto__ = goog.dom.getElement(fragment);
if(cljs.core.truth_(temp__5720__auto__)){
var element = temp__5720__auto__;
frontend.util.scroll_to_element(fragment);

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(element,"block-highlight");

return setTimeout((function (){
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(element,"block-highlight");
}),(4000));
} else {
return null;
}
}
});
frontend.handler.ui.add_style_if_exists_BANG_ = (function frontend$handler$ui$add_style_if_exists_BANG_(){
var temp__5720__auto__ = (function (){var or__5043__auto__ = frontend.state.get_custom_css_link();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_custom_css();
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var style = temp__5720__auto__;
return frontend.util.add_style_BANG_(style);
} else {
return null;
}
});
frontend.handler.ui._STAR_js_execed = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
frontend.handler.ui.exec_js_if_exists__AMPERSAND__allowed_BANG_ = (function frontend$handler$ui$exec_js_if_exists__AMPERSAND__allowed_BANG_(t){
var temp__5720__auto__ = (function (){var or__5043__auto__ = frontend.state.get_custom_js_link();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0();
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var href = temp__5720__auto__;
var k = ["ls-js-allowed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(href)].join('');
var execed = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_js_execed,cljs.core.conj,href);
});
var execed_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(frontend.handler.ui._STAR_js_execed),href);
var ask_allow = (function (){
var r = confirm((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","custom-js-alert","plugin/custom-js-alert",-1359208866)) : t.call(null,new cljs.core.Keyword("plugin","custom-js-alert","plugin/custom-js-alert",-1359208866))));
if(cljs.core.truth_(r)){
frontend.storage.set(k,Date.now());
} else {
frontend.storage.set(k,false);
}

return r;
});
var allowed_BANG_ = frontend.storage.get(k);
var should_ask_QMARK_ = (((allowed_BANG_ == null)) || (((Date.now() - allowed_BANG_) > (604800000))));
if((((!(execed_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,allowed_BANG_)))){
if(clojure.string.starts_with_QMARK_(href,"http")){
if(cljs.core.truth_((function (){var or__5043__auto__ = (!(should_ask_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return ask_allow();
}
})())){
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2(href,(function (){
console.log("[custom js]",href);

return execed();
}));
} else {
return null;
}
} else {
return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?"":frontend.config.get_repo_dir(frontend.state.get_current_repo())),href),(function (p1__42687_SHARP_){
var temp__5720__auto____$1 = (function (){var and__5041__auto__ = p1__42687_SHARP_;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.trim(p1__42687_SHARP_);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var scripts = temp__5720__auto____$1;
if(clojure.string.blank_QMARK_(scripts)){
return null;
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = (!(should_ask_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return ask_allow();
}
})())){
try{eval(scripts);

return execed();
}catch (e42688){if((e42688 instanceof Error)){
var e = e42688;
return console.error("[custom js]",e);
} else {
throw e42688;

}
}} else {
return null;
}
}
} else {
return null;
}
}));
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.ui.toggle_wide_mode_BANG_ = (function frontend$handler$ui$toggle_wide_mode_BANG_(){
frontend.storage.set(new cljs.core.Keyword("ui","wide-mode","ui/wide-mode",2105536944),cljs.core.not(frontend.state.get_wide_mode_QMARK_()));

return frontend.state.toggle_wide_mode_BANG_();
});
frontend.handler.ui.auto_complete_prev = (function frontend$handler$ui$auto_complete_prev(state,e){
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
var matched = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
frontend.util.stop(e);

if((cljs.core.deref(current_idx) >= (1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_idx,cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_idx),(0))){
cljs.core.reset_BANG_(current_idx,(cljs.core.count(matched) - (1)));
} else {

}
}

var temp__5720__auto__ = goog.dom.getElement(["ac-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_idx))].join(''));
if(cljs.core.truth_(temp__5720__auto__)){
var element = temp__5720__auto__;
var modal = frontend.handler.ui.goog$module$goog$object.get(goog.dom.getElement("ui__ac"),"parentElement");
var height = (function (){var or__5043__auto__ = frontend.handler.ui.goog$module$goog$object.get(modal,"offsetHeight");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (300);
}
})();
var scroll_top = (frontend.handler.ui.goog$module$goog$object.get(element,"offsetTop") - (height / (2)));
return (modal.scrollTop = scroll_top);
} else {
return null;
}
});
frontend.handler.ui.auto_complete_next = (function frontend$handler$ui$auto_complete_next(state,e){
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
var matched = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
frontend.util.stop(e);

var total_42742 = cljs.core.count(matched);
if((cljs.core.deref(current_idx) >= (total_42742 - (1)))){
cljs.core.reset_BANG_(current_idx,(0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_idx,cljs.core.inc);
}

var temp__5720__auto__ = goog.dom.getElement(["ac-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_idx))].join(''));
if(cljs.core.truth_(temp__5720__auto__)){
var element = temp__5720__auto__;
var modal = frontend.handler.ui.goog$module$goog$object.get(goog.dom.getElement("ui__ac"),"parentElement");
var height = (function (){var or__5043__auto__ = frontend.handler.ui.goog$module$goog$object.get(modal,"offsetHeight");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (300);
}
})();
var scroll_top = (frontend.handler.ui.goog$module$goog$object.get(element,"offsetTop") - (height / (2)));
return (modal.scrollTop = scroll_top);
} else {
return null;
}
});
frontend.handler.ui.auto_complete_complete = (function frontend$handler$ui$auto_complete_complete(state,e){
var vec__42689 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42689,(0),null);
var map__42692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42689,(1),null);
var map__42692__$1 = cljs.core.__destructure_map(map__42692);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42692__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42692__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
frontend.util.stop(e);

if(((cljs.core.seq(matched)) && ((cljs.core.count(matched) > cljs.core.deref(current_idx))))){
var G__42693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matched,cljs.core.deref(current_idx));
var G__42694 = false;
return (on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(G__42693,G__42694) : on_chosen.call(null,G__42693,G__42694));
} else {
var and__5041__auto__ = on_enter;
if(cljs.core.truth_(and__5041__auto__)){
return (on_enter.cljs$core$IFn$_invoke$arity$1 ? on_enter.cljs$core$IFn$_invoke$arity$1(state) : on_enter.call(null,state));
} else {
return and__5041__auto__;
}
}
});
frontend.handler.ui.auto_complete_shift_complete = (function frontend$handler$ui$auto_complete_shift_complete(state,e){
var vec__42695 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42695,(0),null);
var map__42698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42695,(1),null);
var map__42698__$1 = cljs.core.__destructure_map(map__42698);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42698__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_shift_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42698__$1,new cljs.core.Keyword(null,"on-shift-chosen","on-shift-chosen",-310778328));
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42698__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
frontend.util.stop(e);

if(((cljs.core.seq(matched)) && ((cljs.core.count(matched) > cljs.core.deref(current_idx))))){
var G__42700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matched,cljs.core.deref(current_idx));
var G__42701 = false;
var fexpr__42699 = (function (){var or__5043__auto__ = on_shift_chosen;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return on_chosen;
}
})();
return (fexpr__42699.cljs$core$IFn$_invoke$arity$2 ? fexpr__42699.cljs$core$IFn$_invoke$arity$2(G__42700,G__42701) : fexpr__42699.call(null,G__42700,G__42701));
} else {
var and__5041__auto__ = on_enter;
if(cljs.core.truth_(and__5041__auto__)){
return (on_enter.cljs$core$IFn$_invoke$arity$1 ? on_enter.cljs$core$IFn$_invoke$arity$1(state) : on_enter.call(null,state));
} else {
return and__5041__auto__;
}
}
});
frontend.handler.ui.auto_complete_open_link = (function frontend$handler$ui$auto_complete_open_link(state,e){
var vec__42702 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42702,(0),null);
var map__42705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42702,(1),null);
var map__42705__$1 = cljs.core.__destructure_map(map__42705);
var on_chosen_open_link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42705__$1,new cljs.core.Keyword(null,"on-chosen-open-link","on-chosen-open-link",1593951460));
if(cljs.core.truth_((function (){var and__5041__auto__ = on_chosen_open_link;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.state.editing_QMARK_());
} else {
return and__5041__auto__;
}
})())){
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
frontend.util.stop(e);

if(((cljs.core.seq(matched)) && ((cljs.core.count(matched) > cljs.core.deref(current_idx))))){
var G__42706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matched,cljs.core.deref(current_idx));
var G__42707 = false;
return (on_chosen_open_link.cljs$core$IFn$_invoke$arity$2 ? on_chosen_open_link.cljs$core$IFn$_invoke$arity$2(G__42706,G__42707) : on_chosen_open_link.call(null,G__42706,G__42707));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.ui._STAR_internal_model = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581));
frontend.handler.ui.non_edit_input_QMARK_ = (function frontend$handler$ui$non_edit_input_QMARK_(){
var temp__5720__auto__ = document.activeElement;
if(cljs.core.truth_(temp__5720__auto__)){
var elem = temp__5720__auto__;
var and__5041__auto__ = frontend.util.input_QMARK_(elem);
if(cljs.core.truth_(and__5041__auto__)){
var temp__5720__auto____$1 = frontend.handler.ui.goog$module$goog$object.get(elem,"id");
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return (!(clojure.string.starts_with_QMARK_(id,"edit-block-")));
} else {
return null;
}
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
frontend.handler.ui.input_or_select_QMARK_ = (function frontend$handler$ui$input_or_select_QMARK_(){
var temp__5720__auto__ = document.activeElement;
if(cljs.core.truth_(temp__5720__auto__)){
var elem = temp__5720__auto__;
var or__5043__auto__ = frontend.handler.ui.non_edit_input_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.select_QMARK_(elem);
}
} else {
return null;
}
});
frontend.handler.ui.inc_date = (function frontend$handler$ui$inc_date(date,n){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(n));
});
frontend.handler.ui.inc_week = (function frontend$handler$ui$inc_week(date,n){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(n));
});
frontend.handler.ui.shortcut_complete = (function frontend$handler$ui$shortcut_complete(state,e){
var map__42713 = cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var map__42713__$1 = cljs.core.__destructure_map(map__42713);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42713__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var deadline_or_schedule_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42713__$1,new cljs.core.Keyword(null,"deadline-or-schedule?","deadline-or-schedule?",1308283544));
if(cljs.core.truth_((function (){var and__5041__auto__ = on_change;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.handler.ui.input_or_select_QMARK_());
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(deadline_or_schedule_QMARK_)){
return null;
} else {
var G__42715 = e;
var G__42716 = cljs.core.deref(frontend.handler.ui._STAR_internal_model);
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(G__42715,G__42716) : on_change.call(null,G__42715,G__42716));
}
} else {
return null;
}
});
frontend.handler.ui.shortcut_prev_day = (function frontend$handler$ui$shortcut_prev_day(_state,e){
if(cljs.core.truth_(frontend.handler.ui.input_or_select_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_internal_model,frontend.handler.ui.inc_date,(-1));
}
});
frontend.handler.ui.shortcut_next_day = (function frontend$handler$ui$shortcut_next_day(_state,e){
if(cljs.core.truth_(frontend.handler.ui.input_or_select_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_internal_model,frontend.handler.ui.inc_date,(1));
}
});
frontend.handler.ui.shortcut_prev_week = (function frontend$handler$ui$shortcut_prev_week(_state,e){
if(cljs.core.truth_(frontend.handler.ui.input_or_select_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_internal_model,frontend.handler.ui.inc_week,(-1));
}
});
frontend.handler.ui.shortcut_next_week = (function frontend$handler$ui$shortcut_next_week(_state,e){
if(cljs.core.truth_(frontend.handler.ui.input_or_select_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_internal_model,frontend.handler.ui.inc_week,(1));
}
});
frontend.handler.ui.toggle_cards_BANG_ = (function frontend$handler$ui$toggle_cards_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("modal","show?","modal/show?",1441869594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return frontend.state.close_modal_BANG_();
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906)], null));
}
});
/**
 * Open a new Electron window.
 * No db cache persisting ensured. Should be handled by the caller.
 */
frontend.handler.ui.open_new_window_BANG_ = (function frontend$handler$ui$open_new_window_BANG_(var_args){
var G__42722 = arguments.length;
switch (G__42722) {
case 1:
return frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_e){
return frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$2(_e,null);
}));

(frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_e,repo){
if(typeof repo === 'string'){
frontend.storage.set(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),repo);
} else {
}

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openNewWindow"], 0));
}));

(frontend.handler.ui.open_new_window_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=frontend.handler.ui.js.map
