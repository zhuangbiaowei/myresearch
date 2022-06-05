goog.provide('frontend.components.settings');
goog.scope(function(){
  frontend.components.settings.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.settings.toggle = (function frontend$components$settings$toggle(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59100 = arguments.length;
var i__5767__auto___59101 = (0);
while(true){
if((i__5767__auto___59101 < len__5766__auto___59100)){
args__5772__auto__.push((arguments[i__5767__auto___59101]));

var G__59102 = (i__5767__auto___59101 + (1));
i__5767__auto___59101 = G__59102;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (label_for,name,state,on_toggle,p__58838){
var vec__58840 = p__58838;
var detail_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58840,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start",685540712),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),label_for], null),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md.sm:max-w-tss.sm:col-span-2","div.rounded-md.sm:max-w-tss.sm:col-span-2",-1315636593),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md","div.rounded-md",-395116423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(state,on_toggle,true),detail_text], null)], null)], null);
}));

(frontend.components.settings.toggle.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(frontend.components.settings.toggle.cljs$lang$applyTo = (function (seq58833){
var G__58834 = cljs.core.first(seq58833);
var seq58833__$1 = cljs.core.next(seq58833);
var G__58835 = cljs.core.first(seq58833__$1);
var seq58833__$2 = cljs.core.next(seq58833__$1);
var G__58836 = cljs.core.first(seq58833__$2);
var seq58833__$3 = cljs.core.next(seq58833__$2);
var G__58837 = cljs.core.first(seq58833__$3);
var seq58833__$4 = cljs.core.next(seq58833__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58834,G__58835,G__58836,G__58837,seq58833__$4);
}));

frontend.components.settings.app_updater = rum.core.lazy_build(rum.core.build_defcs,(function (state,version){
var update_pending_QMARK_ = frontend.state.sub(new cljs.core.Keyword("electron","updater-pending?","electron/updater-pending?",-1675811595));
var map__58844 = frontend.state.sub(new cljs.core.Keyword("electron","updater","electron/updater",454456683));
var map__58844__$1 = cljs.core.__destructure_map(map__58844);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58844__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58844__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return daiquiri.core.create_element("span",{'className':"cp__settings-app-updater"},[daiquiri.core.create_element("div",{'className':"ctls flex items-center"},[daiquiri.core.create_element("div",{'style':{'display':"flex",'gap':"0.5rem",'alignItems':"center"},'className':"mt-1 sm:mt-0 sm:col-span-2"},[(function (){var attrs58867 = (cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Check for updates",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm p-1 mr-1",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/logseq/releases"], 0)):(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Check for updates",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm p-1 mr-1",new cljs.core.Keyword(null,"href","href",-793805698),"https://apps.apple.com/app/logseq/id1601013908"], 0)):(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(update_pending_QMARK_)?"Checking ...":"Check for updates"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm p-1 mr-1",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),update_pending_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.apis.checkForUpdates(false);
})], 0)):null
)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58867))?daiquiri.interpreter.element_attributes(attrs58867):null),((cljs.core.map_QMARK_(attrs58867))?null:[daiquiri.interpreter.interpret(attrs58867)]));
})(),daiquiri.core.create_element("div",{'className':"text-sm opacity-50"},[["Version ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join('')])])]),(cljs.core.truth_((function (){var or__5043__auto__ = update_pending_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.blank_QMARK_(type);
}
})())?null:(function (){var attrs58853 = (function (){var G__58868 = type;
switch (G__58868) {
case "update-not-available":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your app is up-to-date \uD83C\uDF89"], null);

break;
case "update-available":
var map__58869 = payload;
var map__58869__$1 = cljs.core.__destructure_map(map__58869);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58869__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58869__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Found new release ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link","a.link",-619461443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
window.apis.openExternal(url);

return frontend.util.stop(e);
})], null),frontend.components.svg.external_link,name," \uD83C\uDF89"], null)], null);

break;
case "error":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u26A0\uFE0F Oops, Something Went Wrong!",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)," Please check out the ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link","a.link",-619461443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
window.apis.openExternal("https://github.com/logseq/logseq/releases");

return frontend.util.stop(e);
})], null),frontend.components.svg.external_link," release channel"], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58868)].join('')));

}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58853))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-state","text-sm"], null)], null),attrs58853], 0))):{'className':"update-state text-sm"}),((cljs.core.map_QMARK_(attrs58853))?null:[daiquiri.interpreter.interpret(attrs58853)]));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/app-updater");
frontend.components.settings.outdenting_hint = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'style':{'boxShadow':"0 4px 20px 4px rgba(0, 20, 60, .1), 0 4px 80px -8px rgba(0, 20, 60, .2)"},'className':"ui__modal-panel"},[daiquiri.core.create_element("div",{'style':{'margin':"12px",'maxWidth':"500px"}},[daiquiri.core.create_element("p",{'className':"text-sm"},["The left side shows outdenting with the default setting, and the right shows outdenting with logical outdenting enabled. ",daiquiri.core.create_element("a",{'target':"_blank",'href':"https://discuss.logseq.com/t/whats-your-preferred-outdent-behavior-the-direct-one-or-the-logical-one/978",'className':"text-sm"},["\u2192 Learn more"])]),daiquiri.core.create_element("img",{'src':"https://discuss.logseq.com/uploads/default/original/1X/e8ea82f63a5e01f6d21b5da827927f538f3277b9.gif",'width':(500),'height':(500)},null)])]);
}),null,"frontend.components.settings/outdenting-hint");
frontend.components.settings.row_with_button_action = (function frontend$components$settings$row_with_button_action(p__58895){
var map__58896 = p__58895;
var map__58896__$1 = cljs.core.__destructure_map(map__58896);
var left_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"left-label","left-label",-1662718913));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var button_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"button-label","button-label",-1402542935));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var _for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"-for","-for",-490432963));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start",685540712),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),_for], null),left_label], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(action)?action:frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(button_label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm p-1",new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], 0)))], null),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),desc], null))], null)], null);
});
frontend.components.settings.edit_config_edn = (function frontend$components$settings$edit_config_edn(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","custom-configuration","settings-page/custom-configuration",1579321198)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","edit-config-edn","settings-page/edit-config-edn",-945931569)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$0()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return setTimeout((function (){
return frontend.handler.ui.toggle_settings_modal_BANG_();
}));
}),new cljs.core.Keyword(null,"-for","-for",-490432963),"config_edn"], null));
});
frontend.components.settings.edit_custom_css = (function frontend$components$settings$edit_custom_css(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","custom-theme","settings-page/custom-theme",-1859779920)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","edit-custom-css","settings-page/edit-custom-css",-612557961)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return setTimeout((function (){
return frontend.handler.ui.toggle_settings_modal_BANG_();
}));
}),new cljs.core.Keyword(null,"-for","-for",-490432963),"customize_css"], null));
});
frontend.components.settings.edit_export_css = (function frontend$components$settings$edit_export_css(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","export-theme","settings-page/export-theme",-522644991)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","edit-export-css","settings-page/edit-export-css",1335541441)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return setTimeout((function (){
return frontend.handler.ui.toggle_settings_modal_BANG_();
}));
}),new cljs.core.Keyword(null,"-for","-for",-490432963),"customize_css"], null));
});
frontend.components.settings.show_brackets_row = (function frontend$components$settings$show_brackets_row(t,show_brackets_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start",685540712),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"show_brackets"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","show-brackets","settings-page/show-brackets",369525621)) : t.call(null,new cljs.core.Keyword("settings-page","show-brackets","settings-page/show-brackets",369525621)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md.sm:max-w-xs","div.rounded-md.sm:max-w-xs",-1969074733),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(show_brackets_QMARK_,frontend.handler.config.toggle_ui_show_brackets_BANG_,true)], null)], null),((cljs.core.not((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),frontend.ui.render_keyboard_shortcut(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","toggle-brackets","ui/toggle-brackets",297620244)))], null):null)], null);
});
frontend.components.settings.switch_spell_check_row = rum.core.lazy_build(rum.core.build_defcs,(function (state,t){
var enabled_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968)], null));
return daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start"},[(function (){var attrs58900 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","spell-checker","settings-page/spell-checker",234247295)) : t.call(null,new cljs.core.Keyword("settings-page","spell-checker","settings-page/spell-checker",234247295)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs58900))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block","text-sm","font-medium","leading-5","opacity-70"], null)], null),attrs58900], 0))):{'className':"block text-sm font-medium leading-5 opacity-70"}),((cljs.core.map_QMARK_(attrs58900))?null:[daiquiri.interpreter.interpret(attrs58900)]));
})(),daiquiri.core.create_element("div",null,[(function (){var attrs58903 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled_QMARK_,(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968)], null),cljs.core.not(enabled_QMARK_));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["userAppCfgs",new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),cljs.core.not(enabled_QMARK_)], 0)),(function (){
if(cljs.core.truth_(confirm((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relaunch-confirm-to-work","relaunch-confirm-to-work",-672675357)) : t.call(null,new cljs.core.Keyword(null,"relaunch-confirm-to-work","relaunch-confirm-to-work",-672675357)))))){
return logseq.api.relaunch();
} else {
return null;
}
}));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58903))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs58903], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs58903))?null:[daiquiri.interpreter.interpret(attrs58903)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/switch-spell-check-row");
frontend.components.settings.switch_git_auto_commit_row = rum.core.lazy_build(rum.core.build_defcs,(function (state,t){
var enabled_QMARK_ = frontend.state.get_git_auto_commit_enabled_QMARK_();
return daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start"},[(function (){var attrs58904 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","git-switcher-label","settings-page/git-switcher-label",404759182)) : t.call(null,new cljs.core.Keyword("settings-page","git-switcher-label","settings-page/git-switcher-label",404759182)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs58904))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block","text-sm","font-medium","leading-5","opacity-70"], null)], null),attrs58904], 0))):{'className':"block text-sm font-medium leading-5 opacity-70"}),((cljs.core.map_QMARK_(attrs58904))?null:[daiquiri.interpreter.interpret(attrs58904)]));
})(),daiquiri.core.create_element("div",null,[(function (){var attrs58918 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled_QMARK_,(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("git","disable-auto-commit?","git/disable-auto-commit?",1374476539)], null),enabled_QMARK_);

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["userAppCfgs",new cljs.core.Keyword("git","disable-auto-commit?","git/disable-auto-commit?",1374476539),enabled_QMARK_], 0));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58918))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs58918], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs58918))?null:[daiquiri.interpreter.interpret(attrs58918)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/switch-git-auto-commit-row");
frontend.components.settings.git_auto_commit_seconds = rum.core.lazy_build(rum.core.build_defcs,(function (state,t){
var secs = (function (){var or__5043__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("git","auto-commit-seconds","git/auto-commit-seconds",1991447826)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (60);
}
})();
return daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start"},[(function (){var attrs58923 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","git-commit-delay","settings-page/git-commit-delay",-724346800)) : t.call(null,new cljs.core.Keyword("settings-page","git-commit-delay","settings-page/git-commit-delay",-724346800)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs58923))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block","text-sm","font-medium","leading-5","opacity-70"], null)], null),attrs58923], 0))):{'className':"block text-sm font-medium leading-5 opacity-70"}),((cljs.core.map_QMARK_(attrs58923))?null:[daiquiri.interpreter.interpret(attrs58923)]));
})(),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md sm:max-w-xs"},[daiquiri.core.create_element("input",{'id':"home-default-page",'defaultValue':secs,'onBlur':(function (event){
var value = frontend.util.safe_parse_int(frontend.util.evalue(event));
if(((typeof value === 'number') && (((((0) < value)) && ((value < ((600) + (1)))))))){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("git","auto-commit-seconds","git/auto-commit-seconds",1991447826)], null),value);

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["userAppCfgs",new cljs.core.Keyword("git","auto-commit-seconds","git/auto-commit-seconds",1991447826),value], 0));
} else {
var temp__5720__auto__ = frontend.components.settings.goog$module$goog$object.get(event,"target");
if(cljs.core.truth_(temp__5720__auto__)){
var elem = temp__5720__auto__;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Invalid value! Must be a number between 1 and 600."], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),true);

return frontend.components.settings.goog$module$goog$object.set(elem,"value",secs);
} else {
return null;
}
}
}),'className':"form-input is-small transition duration-150 ease-in-out"},[])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/git-auto-commit-seconds");
frontend.components.settings.app_auto_update_row = rum.core.lazy_build(rum.core.build_defc,(function (t){
var enabled_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"auto-update","auto-update",-1471446628)], null));
var enabled_QMARK___$1 = (((enabled_QMARK_ == null))?true:enabled_QMARK_);
return daiquiri.interpreter.interpret(frontend.components.settings.toggle("usage-diagnostics",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","auto-updater","settings-page/auto-updater",542727320)) : t.call(null,new cljs.core.Keyword("settings-page","auto-updater","settings-page/auto-updater",542727320))),enabled_QMARK___$1,(function (){
var G__58930 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["userAppCfgs",new cljs.core.Keyword(null,"auto-update","auto-update",-1471446628),cljs.core.not(enabled_QMARK___$1)], 0));
var fexpr__58929 = frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"auto-update","auto-update",-1471446628)], null),cljs.core.not(enabled_QMARK___$1));
return (fexpr__58929.cljs$core$IFn$_invoke$arity$1 ? fexpr__58929.cljs$core$IFn$_invoke$arity$1(G__58930) : fexpr__58929.call(null,G__58930));
})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/app-auto-update-row");
frontend.components.settings.language_row = (function frontend$components$settings$language_row(t,preferred_language){
var on_change = (function (e){
var lang_code = frontend.util.evalue(e);
frontend.state.set_preferred_language_BANG_(lang_code);

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
});
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.is-small","select.form-select.is-small",1007249743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),preferred_language,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),(function (){var iter__5520__auto__ = (function frontend$components$settings$language_row_$_iter__58939(s__58940){
return (new cljs.core.LazySeq(null,(function (){
var s__58940__$1 = s__58940;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58940__$1);
if(temp__5720__auto__){
var s__58940__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58940__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58940__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58942 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58941 = (0);
while(true){
if((i__58941 < size__5519__auto__)){
var language = cljs.core._nth(c__5518__auto__,i__58941);
cljs.core.chunk_append(b__58942,(function (){var lang_code = cljs.core.name(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(language));
var lang_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(language);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),lang_code,new cljs.core.Keyword(null,"value","value",305978217),lang_code], null),lang_label], null);
})());

var G__59104 = (i__58941 + (1));
i__58941 = G__59104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58942),frontend$components$settings$language_row_$_iter__58939(cljs.core.chunk_rest(s__58940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58942),null);
}
} else {
var language = cljs.core.first(s__58940__$2);
return cljs.core.cons((function (){var lang_code = cljs.core.name(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(language));
var lang_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(language);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),lang_code,new cljs.core.Keyword(null,"value","value",305978217),lang_code], null),lang_label], null);
})(),frontend$components$settings$language_row_$_iter__58939(cljs.core.rest(s__58940__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.dicts.languages);
})()], null);
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"language","language",-1591107564)) : t.call(null,new cljs.core.Keyword(null,"language","language",-1591107564))),new cljs.core.Keyword(null,"-for","-for",-490432963),"preferred_language",new cljs.core.Keyword(null,"action","action",-811238024),action], null));
});
frontend.components.settings.theme_modes_row = (function frontend$components$settings$theme_modes_row(t,switch_theme,system_theme_QMARK_,dark_QMARK_){
var pick_theme = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.theme-modes-options","ul.theme-modes-options",-873847962),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.state.use_theme_mode_BANG_,"light"),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(system_theme_QMARK_)) && (cljs.core.not(dark_QMARK_)))], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mode-light","i.mode-light",2081173027)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"light"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.state.use_theme_mode_BANG_,"dark"),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),(function (){var and__5041__auto__ = cljs.core.not(system_theme_QMARK_);
if(and__5041__auto__){
return dark_QMARK_;
} else {
return and__5041__auto__;
}
})()], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mode-dark","i.mode-dark",733780794)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"dark"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.state.use_theme_mode_BANG_,"system"),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),system_theme_QMARK_], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mode-system","i.mode-system",411983973)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"system"], null)], null)], null);
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(function (){var G__58949 = new cljs.core.Keyword("right-side-bar","switch-theme","right-side-bar/switch-theme",-247650664);
var G__58950 = clojure.string.capitalize(switch_theme);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__58949,G__58950) : t.call(null,G__58949,G__58950));
})(),new cljs.core.Keyword(null,"-for","-for",-490432963),"toggle_theme",new cljs.core.Keyword(null,"action","action",-811238024),pick_theme,new cljs.core.Keyword(null,"desc","desc",2093485764),frontend.ui.render_keyboard_shortcut(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","toggle-theme","ui/toggle-theme",-91905800)))], null));
});
frontend.components.settings.file_format_row = (function frontend$components$settings$file_format_row(t,preferred_format){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start",685540712),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"preferred_format"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","preferred-file-format","settings-page/preferred-file-format",-474760732)) : t.call(null,new cljs.core.Keyword("settings-page","preferred-file-format","settings-page/preferred-file-format",-474760732)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-lg.rounded-md","div.max-w-lg.rounded-md",-1164491035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.is-small","select.form-select.is-small",1007249743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(preferred_format),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var format = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(frontend.util.evalue(e)));
return frontend.handler.user.set_preferred_format_BANG_(format);
})], null),(function (){var iter__5520__auto__ = (function frontend$components$settings$file_format_row_$_iter__58953(s__58954){
return (new cljs.core.LazySeq(null,(function (){
var s__58954__$1 = s__58954;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58954__$1);
if(temp__5720__auto__){
var s__58954__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58954__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58954__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58956 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58955 = (0);
while(true){
if((i__58955 < size__5519__auto__)){
var format = cljs.core._nth(c__5518__auto__,i__58955);
cljs.core.chunk_append(b__58956,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),format,new cljs.core.Keyword(null,"value","value",305978217),format], null),clojure.string.capitalize(format)], null));

var G__59105 = (i__58955 + (1));
i__58955 = G__59105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58956),frontend$components$settings$file_format_row_$_iter__58953(cljs.core.chunk_rest(s__58954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58956),null);
}
} else {
var format = cljs.core.first(s__58954__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),format,new cljs.core.Keyword(null,"value","value",305978217),format], null),clojure.string.capitalize(format)], null),frontend$components$settings$file_format_row_$_iter__58953(cljs.core.rest(s__58954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null)));
})()], null)], null)], null)], null);
});
frontend.components.settings.date_format_row = (function frontend$components$settings$date_format_row(t,preferred_date_format){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-:div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-:div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start",-1162619013),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"custom_date_format"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","custom-date-format","settings-page/custom-date-format",1127600129)) : t.call(null,new cljs.core.Keyword("settings-page","custom-date-format","settings-page/custom-date-format",1127600129)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-lg.rounded-md","div.max-w-lg.rounded-md",-1164491035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.is-small","select.form-select.is-small",1007249743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),preferred_date_format,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var format = frontend.util.evalue(e);
if(clojure.string.blank_QMARK_(format)){
return null;
} else {
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("journal","page-title-format","journal/page-title-format",2033061997),format);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"You must re-index your graph for this change to take effect"], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

frontend.state.close_modal_BANG_();

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
}
})], null),(function (){var iter__5520__auto__ = (function frontend$components$settings$date_format_row_$_iter__58966(s__58967){
return (new cljs.core.LazySeq(null,(function (){
var s__58967__$1 = s__58967;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58967__$1);
if(temp__5720__auto__){
var s__58967__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58967__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58967__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58969 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58968 = (0);
while(true){
if((i__58968 < size__5519__auto__)){
var format = cljs.core._nth(c__5518__auto__,i__58968);
cljs.core.chunk_append(b__58969,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),format], null),format], null));

var G__59106 = (i__58968 + (1));
i__58968 = G__59106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58969),frontend$components$settings$date_format_row_$_iter__58966(cljs.core.chunk_rest(s__58967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58969),null);
}
} else {
var format = cljs.core.first(s__58967__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),format], null),format], null),frontend$components$settings$date_format_row_$_iter__58966(cljs.core.rest(s__58967__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(frontend.date.journal_title_formatters()));
})()], null)], null)], null)], null);
});
frontend.components.settings.workflow_row = (function frontend$components$settings$workflow_row(t,preferred_workflow){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start",685540712),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"preferred_workflow"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","preferred-workflow","settings-page/preferred-workflow",-899500557)) : t.call(null,new cljs.core.Keyword("settings-page","preferred-workflow","settings-page/preferred-workflow",-899500557)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-lg.rounded-md","div.max-w-lg.rounded-md",-1164491035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.is-small","select.form-select.is-small",1007249743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(preferred_workflow),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return frontend.handler.user.set_preferred_workflow_BANG_((function (p1__58970_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__58970_SHARP_,new cljs.core.Keyword(null,"now","now",-1650525531))){
return new cljs.core.Keyword(null,"now","now",-1650525531);
} else {
return new cljs.core.Keyword(null,"todo","todo",-1046442570);
}
})(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(frontend.util.evalue(e)))));
})], null),(function (){var iter__5520__auto__ = (function frontend$components$settings$workflow_row_$_iter__58971(s__58972){
return (new cljs.core.LazySeq(null,(function (){
var s__58972__$1 = s__58972;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58972__$1);
if(temp__5720__auto__){
var s__58972__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58972__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58972__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58974 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58973 = (0);
while(true){
if((i__58973 < size__5519__auto__)){
var workflow = cljs.core._nth(c__5518__auto__,i__58973);
cljs.core.chunk_append(b__58974,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(workflow),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(workflow)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(workflow,new cljs.core.Keyword(null,"now","now",-1650525531)))?"NOW/LATER":"TODO/DOING")], null));

var G__59107 = (i__58973 + (1));
i__58973 = G__59107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58974),frontend$components$settings$workflow_row_$_iter__58971(cljs.core.chunk_rest(s__58972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58974),null);
}
} else {
var workflow = cljs.core.first(s__58972__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(workflow),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(workflow)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(workflow,new cljs.core.Keyword(null,"now","now",-1650525531)))?"NOW/LATER":"TODO/DOING")], null),frontend$components$settings$workflow_row_$_iter__58971(cljs.core.rest(s__58972__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now","now",-1650525531),new cljs.core.Keyword(null,"todo","todo",-1046442570)], null));
})()], null)], null)], null)], null);
});
frontend.components.settings.outdenting_row = (function frontend$components$settings$outdenting_row(t,logical_outdenting_QMARK_){
return frontend.components.settings.toggle("preferred_outdenting",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","preferred-outdenting","settings-page/preferred-outdenting",-641736419)) : t.call(null,new cljs.core.Keyword("settings-page","preferred-outdenting","settings-page/preferred-outdenting",-641736419))),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),frontend.components.settings.outdenting_hint(),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover ml-2",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null),frontend.components.svg.info())], null),logical_outdenting_QMARK_,frontend.handler.config.toggle_logical_outdenting_BANG_);
});
frontend.components.settings.tooltip_row = (function frontend$components$settings$tooltip_row(t,enable_tooltip_QMARK_){
return frontend.components.settings.toggle("enable_tooltip",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","enable-tooltip","settings-page/enable-tooltip",1761325062)) : t.call(null,new cljs.core.Keyword("settings-page","enable-tooltip","settings-page/enable-tooltip",1761325062))),enable_tooltip_QMARK_,(function (){
return frontend.handler.config.toggle_ui_enable_tooltip_BANG_();
}));
});
frontend.components.settings.shortcut_tooltip_row = (function frontend$components$settings$shortcut_tooltip_row(t,enable_shortcut_tooltip_QMARK_){
return frontend.components.settings.toggle("enable_tooltip",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","enable-shortcut-tooltip","settings-page/enable-shortcut-tooltip",1996032597)) : t.call(null,new cljs.core.Keyword("settings-page","enable-shortcut-tooltip","settings-page/enable-shortcut-tooltip",1996032597))),enable_shortcut_tooltip_QMARK_,(function (){
return frontend.state.toggle_shortcut_tooltip_BANG_();
}));
});
frontend.components.settings.timetracking_row = (function frontend$components$settings$timetracking_row(t,enable_timetracking_QMARK_){
return frontend.components.settings.toggle("enable_timetracking",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","enable-timetracking","settings-page/enable-timetracking",-953831670)) : t.call(null,new cljs.core.Keyword("settings-page","enable-timetracking","settings-page/enable-timetracking",-953831670))),enable_timetracking_QMARK_,(function (){
var value = cljs.core.not(enable_timetracking_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("feature","enable-timetracking?","feature/enable-timetracking?",1612021873),value);
}));
});
frontend.components.settings.update_home_page = (function frontend$components$settings$update_home_page(event){
var value = frontend.util.evalue(event);
if(clojure.string.blank_QMARK_(value)){
var home = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.PersistentArrayMap.EMPTY);
var new_home = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(home,new cljs.core.Keyword(null,"page","page",849072397));
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"default-home","default-home",171104159),new_home);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Home default page updated successfully!",new cljs.core.Keyword(null,"success","success",1890645906));
} else {
if(cljs.core.truth_((frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : frontend.db.page_exists_QMARK_.call(null,value)))){
var home = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.PersistentArrayMap.EMPTY);
var new_home = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(home,new cljs.core.Keyword(null,"page","page",849072397),value);
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"default-home","default-home",171104159),new_home);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Home default page updated successfully!",new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["The page \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\" doesn't exist yet. Please create that page first, and then try again."].join(''),new cljs.core.Keyword(null,"warning","warning",-1685650671));

}
}
});
frontend.components.settings.journal_row = (function frontend$components$settings$journal_row(t,enable_journals_QMARK_){
return frontend.components.settings.toggle("enable_journals",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","enable-journals","settings-page/enable-journals",-1792981415)) : t.call(null,new cljs.core.Keyword("settings-page","enable-journals","settings-page/enable-journals",-1792981415))),enable_journals_QMARK_,(function (){
var value = cljs.core.not(enable_journals_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("feature","enable-journals?","feature/enable-journals?",1609498182),value);
}));
});
frontend.components.settings.enable_all_pages_public_row = (function frontend$components$settings$enable_all_pages_public_row(t,enable_all_pages_public_QMARK_){
return frontend.components.settings.toggle("all pages public",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","enable-all-pages-public","settings-page/enable-all-pages-public",-1352366581)) : t.call(null,new cljs.core.Keyword("settings-page","enable-all-pages-public","settings-page/enable-all-pages-public",-1352366581))),enable_all_pages_public_QMARK_,(function (){
var value = cljs.core.not(enable_all_pages_public_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("publishing","all-pages-public?","publishing/all-pages-public?",-386830034),value);
}));
});
frontend.components.settings.encryption_row = (function frontend$components$settings$encryption_row(t,enable_encryption_QMARK_){
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("enable_encryption",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","enable-encryption","settings-page/enable-encryption",1515649084)) : t.call(null,new cljs.core.Keyword("settings-page","enable-encryption","settings-page/enable-encryption",1515649084))),enable_encryption_QMARK_,(function (){
var value = cljs.core.not(enable_encryption_QMARK_);
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("feature","enable-encryption?","feature/enable-encryption?",-684347027),value);

if(value){
frontend.state.close_modal_BANG_();

return setTimeout((function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ask-for-re-index","graph/ask-for-re-index",2038098533),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false)], null));
}),(100));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.opacity-50","p.text-sm.opacity-50",1636977583),"\u26A0\uFE0F This feature is experimental! ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"You can use "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/kanru/logseq-encrypt-ui",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"logseq-encrypt-ui"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," to decrypt your graph."], null)], null)], 0));
});
frontend.components.settings.keyboard_shortcuts_row = rum.core.lazy_build(rum.core.build_defc,(function (t){
return daiquiri.interpreter.interpret(frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","customize-shortcuts","settings-page/customize-shortcuts",712859500)) : t.call(null,new cljs.core.Keyword("settings-page","customize-shortcuts","settings-page/customize-shortcuts",712859500))),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","shortcut-settings","settings-page/shortcut-settings",-1071747535)) : t.call(null,new cljs.core.Keyword("settings-page","shortcut-settings","settings-page/shortcut-settings",-1071747535))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__59001 = frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"shortcut-setting","shortcut-setting",1676654267)], null));
var fexpr__59000 = frontend.state.close_settings_BANG_();
return (fexpr__59000.cljs$core$IFn$_invoke$arity$1 ? fexpr__59000.cljs$core$IFn$_invoke$arity$1(G__59001) : fexpr__59000.call(null,G__59001));
}),new cljs.core.Keyword(null,"-for","-for",-490432963),"customize_shortcuts"], null)));
}),null,"frontend.components.settings/keyboard-shortcuts-row");
frontend.components.settings.zotero_settings_row = (function frontend$components$settings$zotero_settings_row(_t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-start",685540712),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"zotero_settings"], null),"Zotero settings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Zotero settings",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm p-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_settings_BANG_();

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"zotero-setting","zotero-setting",-1619504499)], null));
})], 0))], null)], null)], null);
});
frontend.components.settings.auto_push_row = (function frontend$components$settings$auto_push_row(_t,current_repo,enable_git_auto_push_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = current_repo;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.starts_with_QMARK_(current_repo,"https://");
} else {
return and__5041__auto__;
}
})())){
return frontend.components.settings.toggle("enable_git_auto_push","Enable Git auto push",enable_git_auto_push_QMARK_,(function (){
var value = cljs.core.not(enable_git_auto_push_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"git-auto-push","git-auto-push",2144454612),value);
}));
} else {
return null;
}
});
frontend.components.settings.usage_diagnostics_row = (function frontend$components$settings$usage_diagnostics_row(t,instrument_disabled_QMARK_){
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("usage-diagnostics",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","disable-sentry","settings-page/disable-sentry",-1347031056)) : t.call(null,new cljs.core.Keyword("settings-page","disable-sentry","settings-page/disable-sentry",-1347031056))),cljs.core.not(instrument_disabled_QMARK_),(function (){
return frontend.modules.instrumentation.core.disable_instrument(cljs.core.not(instrument_disabled_QMARK_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.opacity-50","span.text-sm.opacity-50",1991571125),"Logseq will never collect your local graph database or sell your data."], null)], 0));
});
frontend.components.settings.clear_cache_row = (function frontend$components$settings$clear_cache_row(t){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","clear-cache","settings-page/clear-cache",-1602321055)) : t.call(null,new cljs.core.Keyword("settings-page","clear-cache","settings-page/clear-cache",-1602321055))),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","clear","settings-page/clear",-685296810)) : t.call(null,new cljs.core.Keyword("settings-page","clear","settings-page/clear",-685296810))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.clear_cache_BANG_,new cljs.core.Keyword(null,"-for","-for",-490432963),"clear_cache"], null));
});
frontend.components.settings.version_row = (function frontend$components$settings$version_row(t,version){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","current-version","settings-page/current-version",724725196)) : t.call(null,new cljs.core.Keyword("settings-page","current-version","settings-page/current-version",724725196))),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.app_updater(version),new cljs.core.Keyword(null,"-for","-for",-490432963),"current-version"], null));
});
frontend.components.settings.developer_mode_row = (function frontend$components$settings$developer_mode_row(t,developer_mode_QMARK_){
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("developer_mode",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","developer-mode","settings-page/developer-mode",1909434761)) : t.call(null,new cljs.core.Keyword("settings-page","developer-mode","settings-page/developer-mode",1909434761))),developer_mode_QMARK_,(function (){
var mode = cljs.core.not(developer_mode_QMARK_);
return frontend.state.set_developer_mode_BANG_(mode);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-50","div.text-sm.opacity-50",829333122),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","developer-mode-desc","settings-page/developer-mode-desc",1029179391)) : t.call(null,new cljs.core.Keyword("settings-page","developer-mode-desc","settings-page/developer-mode-desc",1029179391)))], null)], 0));
});
frontend.components.settings.plugin_enabled_switcher = rum.core.lazy_build(rum.core.build_defc,(function (t){
var value = frontend.state.lsp_enabled_QMARK__or_theme();
var vec__59027 = rum.core.use_state(value);
var on_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59027,(0),null);
var set_on_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59027,(1),null);
var on_toggle = (function (){
var v = cljs.core.not(on_QMARK_);
(set_on_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_on_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : set_on_QMARK_.call(null,v));

return frontend.storage.set(new cljs.core.Keyword(null,"lsp-core-enabled","lsp-core-enabled",-14878186),v);
});
var attrs59026 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(on_QMARK_,on_toggle,true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs59026))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs59026], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs59026))?[((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(value),on_QMARK_))?daiquiri.core.create_element("div",{'className':"relative opacity-70"},[daiquiri.core.create_element("span",{'style':{'top':(-18),'left':(10)},'className':"absolute whitespace-nowrap"},[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071)) : t.call(null,new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.api.relaunch();
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0)))])]):null)]:[daiquiri.interpreter.interpret(attrs59026),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(value),on_QMARK_))?daiquiri.core.create_element("div",{'className':"relative opacity-70"},[daiquiri.core.create_element("span",{'style':{'top':(-18),'left':(10)},'className':"absolute whitespace-nowrap"},[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071)) : t.call(null,new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.api.relaunch();
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0)))])]):null)]));
}),null,"frontend.components.settings/plugin-enabled-switcher");
frontend.components.settings.user_proxy_settings = rum.core.lazy_build(rum.core.build_defc,(function (p__59034){
var map__59035 = p__59034;
var map__59035__$1 = cljs.core.__destructure_map(map__59035);
var agent_opts = map__59035__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59035__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59035__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59035__$1,new cljs.core.Keyword(null,"port","port",1534937262));
return daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var temp__5720__auto__ = (function (){var and__5041__auto__ = protocol;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = host;
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = port;
if(cljs.core.truth_(and__5041__auto____$2)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var e = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.pr-1","strong.pr-1",-56471720),e], null);
} else {
return null;
}
})(),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("edit")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (_){
return frontend.components.plugins.user_proxy_settings_panel(agent_opts);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"https-proxy-panel","https-proxy-panel",-1589308406),new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
})], 0)));
}),null,"frontend.components.settings/user-proxy-settings");
frontend.components.settings.plugin_system_switcher_row = (function frontend$components$settings$plugin_system_switcher_row(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","plugin-system","settings-page/plugin-system",-1976608350)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.plugin_enabled_switcher(frontend.context.i18n.t)], null));
});
frontend.components.settings.https_user_agent_row = (function frontend$components$settings$https_user_agent_row(agent_opts){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","network-proxy","settings-page/network-proxy",-895413144)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.user_proxy_settings(agent_opts)], null));
});
frontend.components.settings.settings_general = rum.core.lazy_build(rum.core.build_defcs,(function (_state,current_repo){
var preferred_language = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
var theme = frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
var dark_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dark",theme);
var system_theme_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822));
var switch_theme = ((dark_QMARK_)?"light":"dark");
var attrs59065 = frontend.components.settings.version_row(frontend.context.i18n.t,frontend.version.version);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs59065))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-wrap","is-general"], null)], null),attrs59065], 0))):{'className':"panel-wrap is-general"}),((cljs.core.map_QMARK_(attrs59065))?[daiquiri.interpreter.interpret(frontend.components.settings.language_row(frontend.context.i18n.t,preferred_language)),daiquiri.interpreter.interpret(frontend.components.settings.theme_modes_row(frontend.context.i18n.t,switch_theme,system_theme_QMARK_,dark_QMARK_)),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_config_edn()):null),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_custom_css()):null),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_export_css()):null),frontend.components.settings.keyboard_shortcuts_row(frontend.context.i18n.t)]:[daiquiri.interpreter.interpret(attrs59065),daiquiri.interpreter.interpret(frontend.components.settings.language_row(frontend.context.i18n.t,preferred_language)),daiquiri.interpreter.interpret(frontend.components.settings.theme_modes_row(frontend.context.i18n.t,switch_theme,system_theme_QMARK_,dark_QMARK_)),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_config_edn()):null),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_custom_css()):null),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_export_css()):null),frontend.components.settings.keyboard_shortcuts_row(frontend.context.i18n.t)]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/settings-general");
frontend.components.settings.settings_editor = rum.core.lazy_build(rum.core.build_defcs,(function (_state,current_repo){
var preferred_format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var preferred_date_format = frontend.state.get_date_formatter();
var preferred_workflow = frontend.state.get_preferred_workflow();
var enable_timetracking_QMARK_ = frontend.state.enable_timetracking_QMARK_();
var enable_journals_QMARK_ = frontend.state.enable_journals_QMARK_(current_repo);
var enable_encryption_QMARK_ = frontend.state.enable_encryption_QMARK_(current_repo);
var enable_all_pages_public_QMARK_ = frontend.state.all_pages_public_QMARK_();
var logical_outdenting_QMARK_ = frontend.state.logical_outdenting_QMARK_();
var enable_tooltip_QMARK_ = frontend.state.enable_tooltip_QMARK_();
var enable_shortcut_tooltip_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086));
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
var enable_git_auto_push_QMARK_ = frontend.state.enable_git_auto_push_QMARK_(current_repo);
var attrs59068 = frontend.components.settings.file_format_row(frontend.context.i18n.t,preferred_format);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs59068))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-wrap","is-editor"], null)], null),attrs59068], 0))):{'className':"panel-wrap is-editor"}),((cljs.core.map_QMARK_(attrs59068))?[daiquiri.interpreter.interpret(frontend.components.settings.date_format_row(frontend.context.i18n.t,preferred_date_format)),daiquiri.interpreter.interpret(frontend.components.settings.workflow_row(frontend.context.i18n.t,preferred_workflow)),daiquiri.interpreter.interpret(frontend.components.settings.show_brackets_row(frontend.context.i18n.t,show_brackets_QMARK_)),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.switch_spell_check_row(frontend.context.i18n.t):null),daiquiri.interpreter.interpret(frontend.components.settings.outdenting_row(frontend.context.i18n.t,logical_outdenting_QMARK_)),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:daiquiri.interpreter.interpret(frontend.components.settings.shortcut_tooltip_row(frontend.context.i18n.t,enable_shortcut_tooltip_QMARK_))),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:daiquiri.interpreter.interpret(frontend.components.settings.tooltip_row(frontend.context.i18n.t,enable_tooltip_QMARK_))),daiquiri.interpreter.interpret(frontend.components.settings.timetracking_row(frontend.context.i18n.t,enable_timetracking_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.journal_row(frontend.context.i18n.t,enable_journals_QMARK_)),(((!(enable_journals_QMARK_)))?daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start"},[daiquiri.core.create_element("label",{'className':"block text-sm font-medium leading-5 opacity-70",'htmlFor':"default page"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","home-default-page","settings-page/home-default-page",-2049462828)], 0)))]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md sm:max-w-xs"},[daiquiri.core.create_element("input",{'id':"home-default-page",'defaultValue':frontend.state.sub_default_home_page(),'onBlur':frontend.components.settings.update_home_page,'onKeyPress':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return frontend.components.settings.update_home_page(e);
} else {
return null;
}
}),'className':"form-input is-small transition duration-150 ease-in-out"},[])])])]):null),daiquiri.interpreter.interpret(frontend.components.settings.encryption_row(frontend.context.i18n.t,enable_encryption_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.enable_all_pages_public_row(frontend.context.i18n.t,enable_all_pages_public_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.zotero_settings_row(frontend.context.i18n.t)),daiquiri.interpreter.interpret(frontend.components.settings.auto_push_row(frontend.context.i18n.t,current_repo,enable_git_auto_push_QMARK_))]:[daiquiri.interpreter.interpret(attrs59068),daiquiri.interpreter.interpret(frontend.components.settings.date_format_row(frontend.context.i18n.t,preferred_date_format)),daiquiri.interpreter.interpret(frontend.components.settings.workflow_row(frontend.context.i18n.t,preferred_workflow)),daiquiri.interpreter.interpret(frontend.components.settings.show_brackets_row(frontend.context.i18n.t,show_brackets_QMARK_)),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.switch_spell_check_row(frontend.context.i18n.t):null),daiquiri.interpreter.interpret(frontend.components.settings.outdenting_row(frontend.context.i18n.t,logical_outdenting_QMARK_)),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:daiquiri.interpreter.interpret(frontend.components.settings.shortcut_tooltip_row(frontend.context.i18n.t,enable_shortcut_tooltip_QMARK_))),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:daiquiri.interpreter.interpret(frontend.components.settings.tooltip_row(frontend.context.i18n.t,enable_tooltip_QMARK_))),daiquiri.interpreter.interpret(frontend.components.settings.timetracking_row(frontend.context.i18n.t,enable_timetracking_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.journal_row(frontend.context.i18n.t,enable_journals_QMARK_)),(((!(enable_journals_QMARK_)))?daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start"},[daiquiri.core.create_element("label",{'className':"block text-sm font-medium leading-5 opacity-70",'htmlFor':"default page"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","home-default-page","settings-page/home-default-page",-2049462828)], 0)))]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md sm:max-w-xs"},[daiquiri.core.create_element("input",{'id':"home-default-page",'defaultValue':frontend.state.sub_default_home_page(),'onBlur':frontend.components.settings.update_home_page,'onKeyPress':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return frontend.components.settings.update_home_page(e);
} else {
return null;
}
}),'className':"form-input is-small transition duration-150 ease-in-out"},[])])])]):null),daiquiri.interpreter.interpret(frontend.components.settings.encryption_row(frontend.context.i18n.t,enable_encryption_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.enable_all_pages_public_row(frontend.context.i18n.t,enable_all_pages_public_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.zotero_settings_row(frontend.context.i18n.t)),daiquiri.interpreter.interpret(frontend.components.settings.auto_push_row(frontend.context.i18n.t,current_repo,enable_git_auto_push_QMARK_))]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/settings-editor");
frontend.components.settings.settings_git = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"panel-wrap"},[daiquiri.core.create_element("div",{'className':"text-sm my-4"},[daiquiri.core.create_element("span",{'className':"text-sm opacity-50 my-4"},["You can view a page's edit history by clicking the three vertical dots ","in the top-right corner and selecting \"Check page's history\". ","Logseq uses "]),daiquiri.core.create_element("a",{'href':"https://git-scm.com/",'target':"_blank"},["Git"]),daiquiri.core.create_element("span",{'className':"text-sm opacity-50 my-4"},[" for version control."])]),daiquiri.core.create_element("br",null,null),frontend.components.settings.switch_git_auto_commit_row(frontend.context.i18n.t),frontend.components.settings.git_auto_commit_seconds(frontend.context.i18n.t),daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","git-confirm","settings-page/git-confirm",589992454)], 0))], null)))]);
}),null,"frontend.components.settings/settings-git");
frontend.components.settings.settings_advanced = rum.core.lazy_build(rum.core.build_defcs,(function (_state){
var instrument_disabled_QMARK_ = frontend.state.sub(new cljs.core.Keyword("instrument","disabled?","instrument/disabled?",165654178));
var developer_mode_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null));
var https_agent_opts = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
var attrs59077 = (cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.electron_QMARK_();
} else {
return and__5041__auto__;
}
})())?frontend.components.settings.app_auto_update_row(frontend.context.i18n.t):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs59077))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-wrap","is-advanced"], null)], null),attrs59077], 0))):{'className':"panel-wrap is-advanced"}),((cljs.core.map_QMARK_(attrs59077))?[daiquiri.interpreter.interpret(frontend.components.settings.usage_diagnostics_row(frontend.context.i18n.t,instrument_disabled_QMARK_)),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:daiquiri.interpreter.interpret(frontend.components.settings.developer_mode_row(frontend.context.i18n.t,developer_mode_QMARK_))),(cljs.core.truth_(frontend.util.electron_QMARK_())?daiquiri.interpreter.interpret(frontend.components.settings.plugin_system_switcher_row()):null),(cljs.core.truth_(frontend.util.electron_QMARK_())?daiquiri.interpreter.interpret(frontend.components.settings.https_user_agent_row(https_agent_opts)):null),daiquiri.interpreter.interpret(frontend.components.settings.clear_cache_row(frontend.context.i18n.t)),daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Clearing the cache will discard open graphs. You will lose unsaved changes."], null)))]:[daiquiri.interpreter.interpret(attrs59077),daiquiri.interpreter.interpret(frontend.components.settings.usage_diagnostics_row(frontend.context.i18n.t,instrument_disabled_QMARK_)),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:daiquiri.interpreter.interpret(frontend.components.settings.developer_mode_row(frontend.context.i18n.t,developer_mode_QMARK_))),(cljs.core.truth_(frontend.util.electron_QMARK_())?daiquiri.interpreter.interpret(frontend.components.settings.plugin_system_switcher_row()):null),(cljs.core.truth_(frontend.util.electron_QMARK_())?daiquiri.interpreter.interpret(frontend.components.settings.https_user_agent_row(https_agent_opts)):null),daiquiri.interpreter.interpret(frontend.components.settings.clear_cache_row(frontend.context.i18n.t)),daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Clearing the cache will discard open graphs. You will lose unsaved changes."], null)))]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/settings-advanced");
frontend.components.settings.settings = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var _installed_plugins = frontend.state.sub(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034));
var plugins_of_settings = (function (){var and__5041__auto__ = frontend.handler.plugin.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(frontend.handler.plugin.get_enabled_plugins_if_setting_schema());
} else {
return and__5041__auto__;
}
})();
var _STAR_active = new cljs.core.Keyword("frontend.components.settings","active","frontend.components.settings/active",-1461390411).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",{'id':"settings",'className':"cp__settings-main"},[daiquiri.core.create_element("header",null,[(function (){var attrs59081 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings","settings",1556144875)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs59081))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs59081], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs59081))?null:[daiquiri.interpreter.interpret(attrs59081)]));
})()]),daiquiri.core.create_element("div",{'className':"cp__settings-inner md:flex"},[daiquiri.core.create_element("aside",{'style':{'minWidth':"10rem"},'className':"md:w-64"},[daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$settings$iter__59086(s__59087){
return (new cljs.core.LazySeq(null,(function (){
var s__59087__$1 = s__59087;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__59087__$1);
if(temp__5720__auto__){
var s__59087__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59087__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59087__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59089 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59088 = (0);
while(true){
if((i__59088 < size__5519__auto__)){
var vec__59090 = cljs.core._nth(c__5518__auto__,i__59088);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59090,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59090,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59090,(2),null);
cljs.core.chunk_append(b__59089,(cljs.core.truth_(label)?daiquiri.core.create_element("li",{'key':text,'onClick':((function (i__59088,vec__59090,label,text,icon,c__5518__auto__,size__5519__auto__,b__59089,s__59087__$2,temp__5720__auto__,current_repo,_installed_plugins,plugins_of_settings,_STAR_active){
return (function (){
return cljs.core.reset_BANG_(_STAR_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,cljs.core.first(cljs.core.deref(_STAR_active))], null));
});})(i__59088,vec__59090,label,text,icon,c__5518__auto__,size__5519__auto__,b__59089,s__59087__$2,temp__5720__auto__,current_repo,_installed_plugins,plugins_of_settings,_STAR_active))
,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,cljs.core.first(cljs.core.deref(_STAR_active)))], null)], null))], null))},[(function (){var attrs59093 = icon;
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs59093))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs59093], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs59093))?[(function (){var attrs59094 = text;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs59094))?daiquiri.interpreter.element_attributes(attrs59094):null),((cljs.core.map_QMARK_(attrs59094))?null:[daiquiri.interpreter.interpret(attrs59094)]));
})()]:[daiquiri.interpreter.interpret(attrs59093),(function (){var attrs59095 = text;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs59095))?daiquiri.interpreter.element_attributes(attrs59095):null),((cljs.core.map_QMARK_(attrs59095))?null:[daiquiri.interpreter.interpret(attrs59095)]));
})()]));
})()]):null));

var G__59108 = (i__59088 + (1));
i__59088 = G__59108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59089),frontend$components$settings$iter__59086(cljs.core.chunk_rest(s__59087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59089),null);
}
} else {
var vec__59096 = cljs.core.first(s__59087__$2);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59096,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59096,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59096,(2),null);
return cljs.core.cons((cljs.core.truth_(label)?daiquiri.core.create_element("li",{'key':text,'onClick':((function (vec__59096,label,text,icon,s__59087__$2,temp__5720__auto__,current_repo,_installed_plugins,plugins_of_settings,_STAR_active){
return (function (){
return cljs.core.reset_BANG_(_STAR_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,cljs.core.first(cljs.core.deref(_STAR_active))], null));
});})(vec__59096,label,text,icon,s__59087__$2,temp__5720__auto__,current_repo,_installed_plugins,plugins_of_settings,_STAR_active))
,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,cljs.core.first(cljs.core.deref(_STAR_active)))], null)], null))], null))},[(function (){var attrs59093 = icon;
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs59093))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs59093], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs59093))?[(function (){var attrs59094 = text;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs59094))?daiquiri.interpreter.element_attributes(attrs59094):null),((cljs.core.map_QMARK_(attrs59094))?null:[daiquiri.interpreter.interpret(attrs59094)]));
})()]:[daiquiri.interpreter.interpret(attrs59093),(function (){var attrs59095 = text;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs59095))?daiquiri.interpreter.element_attributes(attrs59095):null),((cljs.core.map_QMARK_(attrs59095))?null:[daiquiri.interpreter.interpret(attrs59095)]));
})()]));
})()]):null),frontend$components$settings$iter__59086(cljs.core.rest(s__59087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general","general",380803686),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-general","settings-page/tab-general",1840304513)], 0)),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("adjustments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-editor","settings-page/tab-editor",-1772715324)], 0)),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("writing",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null))], null),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"git","git",-163493751),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-version-control","settings-page/tab-version-control",-65211424)], 0)),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("history",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null))], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advanced","advanced",-451287892),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-advanced","settings-page/tab-advanced",-1070820797)], 0)),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("bulb",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null))], null),(cljs.core.truth_(plugins_of_settings)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugins-setting","plugins-setting",-1797317643),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings-of-plugins","settings-of-plugins",-1896805353)], 0)),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("puzzle")], null):null)], null));
})())])]),(function (){var attrs59085 = (function (){var G__59099 = cljs.core.first(cljs.core.deref(_STAR_active));
var G__59099__$1 = (((G__59099 instanceof cljs.core.Keyword))?G__59099.fqn:null);
switch (G__59099__$1) {
case "plugins-setting":
var label = cljs.core.second(cljs.core.deref(_STAR_active));
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(plugins_of_settings))], null));

cljs.core.reset_BANG_(_STAR_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,label], null));

return null;

break;
case "general":
return frontend.components.settings.settings_general(current_repo);

break;
case "editor":
return frontend.components.settings.settings_editor(current_repo);

break;
case "git":
return frontend.components.settings.settings_git();

break;
case "advanced":
return frontend.components.settings.settings_advanced();

break;
default:
return null;

}
})();
return daiquiri.core.create_element("article",((cljs.core.map_QMARK_(attrs59085))?daiquiri.interpreter.element_attributes(attrs59085):null),((cljs.core.map_QMARK_(attrs59085))?null:[daiquiri.interpreter.interpret(attrs59085)]));
})()])]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"general","general",380803686)], null),new cljs.core.Keyword("frontend.components.settings","active","frontend.components.settings/active",-1461390411)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.close_settings_BANG_();

return state;
})], null),rum.core.reactive], null),"frontend.components.settings/settings");

//# sourceMappingURL=frontend.components.settings.js.map
