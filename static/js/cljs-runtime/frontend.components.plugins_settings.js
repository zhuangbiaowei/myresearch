goog.provide('frontend.components.plugins_settings');
frontend.components.plugins_settings.edit_settings_file = rum.core.lazy_build(rum.core.build_defc,(function (pid,p__54070){
var map__54071 = p__54070;
var map__54071__$1 = cljs.core.__destructure_map(map__54071);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54071__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.plugin.open_settings_file_in_default_app_BANG_(pid);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","hover:underline",class$], null))},["Edit settings.json"]);
}),null,"frontend.components.plugins-settings/edit-settings-file");
frontend.components.plugins_settings.render_item_input = rum.core.lazy_build(rum.core.build_defc,(function (val,p__54073,update_setting_BANG_){
var map__54075 = p__54073;
var map__54075__$1 = cljs.core.__destructure_map(map__54075);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54075__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54075__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54075__$1,new cljs.core.Keyword(null,"title","title",636505583));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54075__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54075__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var inputAs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54075__$1,new cljs.core.Keyword(null,"inputAs","inputAs",1243305598));
return daiquiri.core.create_element("div",{'className':"desc-item as-input"},[daiquiri.core.create_element("h2",null,[(function (){var attrs54078 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs54078))?daiquiri.interpreter.element_attributes(attrs54078):null),((cljs.core.map_QMARK_(attrs54078))?null:[daiquiri.interpreter.interpret(attrs54078)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs54079 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs54079))?daiquiri.interpreter.element_attributes(attrs54079):null),((cljs.core.map_QMARK_(attrs54079))?null:[daiquiri.interpreter.interpret(attrs54079)]));
})()]),daiquiri.core.create_element("label",{'className':"form-control"},[(function (){var attrs54080 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs54080))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs54080], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs54080))?null:[daiquiri.interpreter.interpret(attrs54080)]));
})(),(function (){var input_as = frontend.util.safe_lower_case((function (){var or__5043__auto__ = inputAs;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.name(type);
}
})());
var input_as__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_as,"string"))?new cljs.core.Keyword(null,"text","text",-1790561697):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(input_as));
return daiquiri.core.create_element("input",{'type':cljs.core.name(input_as__$1),'defaultValue':(function (){var or__5043__auto__ = val;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
})(),'onChange':rum.core.mark_sync_update(goog.functions.debounce((function (p1__54072_SHARP_){
var G__54081 = key;
var G__54082 = frontend.util.evalue(p1__54072_SHARP_);
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__54081,G__54082) : update_setting_BANG_.call(null,G__54081,G__54082));
}),(1000))),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-input","form-input",-226883230),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),input_as__$1)))], null)], null))], null))},[]);
})()])]);
}),null,"frontend.components.plugins-settings/render-item-input");
frontend.components.plugins_settings.render_item_toggle = rum.core.lazy_build(rum.core.build_defc,(function (val,p__54084,update_setting_BANG_){
var map__54085 = p__54084;
var map__54085__$1 = cljs.core.__destructure_map(map__54085);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var val__$1 = ((cljs.core.boolean_QMARK_(val))?val:cljs.core.boolean$(default$));
return daiquiri.core.create_element("div",{'className':"desc-item as-toggle"},[daiquiri.core.create_element("h2",null,[(function (){var attrs54095 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs54095))?daiquiri.interpreter.element_attributes(attrs54095):null),((cljs.core.map_QMARK_(attrs54095))?null:[daiquiri.interpreter.interpret(attrs54095)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs54096 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs54096))?daiquiri.interpreter.element_attributes(attrs54096):null),((cljs.core.map_QMARK_(attrs54096))?null:[daiquiri.interpreter.interpret(attrs54096)]));
})()]),(function (){var attrs54092 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),val__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__54099 = key;
var G__54100 = (!(val__$1));
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__54099,G__54100) : update_setting_BANG_.call(null,G__54099,G__54100));
})], null));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs54092))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control"], null)], null),attrs54092], 0))):{'className':"form-control"}),((cljs.core.map_QMARK_(attrs54092))?[(function (){var attrs54093 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs54093))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs54093], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs54093))?null:[daiquiri.interpreter.interpret(attrs54093)]));
})()]:[daiquiri.interpreter.interpret(attrs54092),(function (){var attrs54094 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs54094))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs54094], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs54094))?null:[daiquiri.interpreter.interpret(attrs54094)]));
})()]));
})()]);
}),null,"frontend.components.plugins-settings/render-item-toggle");
frontend.components.plugins_settings.render_item_enum = rum.core.lazy_build(rum.core.build_defc,(function (val,p__54106,update_setting_BANG_){
var map__54107 = p__54106;
var map__54107__$1 = cljs.core.__destructure_map(map__54107);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54107__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54107__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54107__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54107__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var enumChoices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54107__$1,new cljs.core.Keyword(null,"enumChoices","enumChoices",-177859500));
var enumPicker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54107__$1,new cljs.core.Keyword(null,"enumPicker","enumPicker",-719781503));
var val__$1 = (function (){var or__5043__auto__ = val;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
})();
var vals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,((cljs.core.sequential_QMARK_(val__$1))?val__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val__$1], null)));
var options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),v,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_(vals,v)], null);
}),enumChoices);
var picker = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(enumPicker);
return daiquiri.core.create_element("div",{'className':"desc-item as-enum"},[daiquiri.core.create_element("h2",null,[(function (){var attrs54115 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs54115))?daiquiri.interpreter.element_attributes(attrs54115):null),((cljs.core.map_QMARK_(attrs54115))?null:[daiquiri.interpreter.interpret(attrs54115)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs54116 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs54116))?daiquiri.interpreter.element_attributes(attrs54116):null),((cljs.core.map_QMARK_(attrs54116))?null:[daiquiri.interpreter.interpret(attrs54116)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radio","radio",1323726374),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null], null), null),picker))?new cljs.core.Keyword(null,"div.wrap","div.wrap",1832950772):new cljs.core.Keyword(null,"label.wrap","label.wrap",-1504723647)),(function (){var attrs54119 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs54119))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs54119], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs54119))?null:[daiquiri.interpreter.interpret(attrs54119)]));
})(),(function (){var G__54123 = picker;
var G__54123__$1 = (((G__54123 instanceof cljs.core.Keyword))?G__54123.fqn:null);
switch (G__54123__$1) {
case "radio":
return frontend.ui.radio_list(options,(function (p1__54102_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__54102_SHARP_) : update_setting_BANG_.call(null,key,p1__54102_SHARP_));
}),null);

break;
case "checkbox":
return frontend.ui.checkbox_list(options,(function (p1__54103_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__54103_SHARP_) : update_setting_BANG_.call(null,key,p1__54103_SHARP_));
}),null);

break;
default:
return frontend.ui.select(options,(function (p1__54104_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__54104_SHARP_) : update_setting_BANG_.call(null,key,p1__54104_SHARP_));
}),null);

}
})()], null))])]);
}),null,"frontend.components.plugins-settings/render-item-enum");
frontend.components.plugins_settings.render_item_object = rum.core.lazy_build(rum.core.build_defc,(function (_val,p__54124,pid){
var map__54125 = p__54124;
var map__54125__$1 = cljs.core.__destructure_map(map__54125);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54125__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54125__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54125__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var _default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54125__$1,new cljs.core.Keyword(null,"_default","_default",308892991));
return daiquiri.core.create_element("div",{'className':"desc-item as-object"},[daiquiri.core.create_element("h2",null,[(function (){var attrs54126 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs54126))?daiquiri.interpreter.element_attributes(attrs54126):null),((cljs.core.map_QMARK_(attrs54126))?null:[daiquiri.interpreter.interpret(attrs54126)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs54145 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs54145))?daiquiri.interpreter.element_attributes(attrs54145):null),((cljs.core.map_QMARK_(attrs54145))?null:[daiquiri.interpreter.interpret(attrs54145)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[(function (){var attrs54146 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs54146))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs54146], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs54146))?null:[daiquiri.interpreter.interpret(attrs54146)]));
})(),daiquiri.core.create_element("div",{'className':"pl-1"},[frontend.components.plugins_settings.edit_settings_file(pid,null)])])]);
}),null,"frontend.components.plugins-settings/render-item-object");
frontend.components.plugins_settings.settings_container = rum.core.lazy_build(rum.core.build_defc,(function (schema,pl){
var _settings = pl.settings;
var pid = pl.id;
var vec__54147 = rum.core.use_state(cljs_bean.core.__GT_clj(_settings.toJSON()));
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54147,(0),null);
var set_settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54147,(1),null);
var update_setting_BANG_ = (function (k,v){
return _settings.set(cljs.core.name(k),cljs_bean.core.__GT_js(v));
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var on_change = (function (s){
var temp__5720__auto__ = cljs_bean.core.__GT_clj(s);
if(cljs.core.truth_(temp__5720__auto__)){
var s__$1 = temp__5720__auto__;
return (set_settings.cljs$core$IFn$_invoke$arity$1 ? set_settings.cljs$core$IFn$_invoke$arity$1(s__$1) : set_settings.call(null,s__$1));
} else {
return null;
}
});
_settings.on("change",on_change);

return (function (){
return _settings.off("change",on_change);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid], null));

if(cljs.core.seq(schema)){
return daiquiri.core.create_element("div",{'className':"cp__plugins-settings-inner"},[daiquiri.core.create_element("span",{'className':"edit-file"},[frontend.components.plugins_settings.edit_settings_file(pid,null)]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins_settings$iter__54152(s__54153){
return (new cljs.core.LazySeq(null,(function (){
var s__54153__$1 = s__54153;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__54153__$1);
if(temp__5720__auto__){
var s__54153__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54153__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__54153__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__54155 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__54154 = (0);
while(true){
if((i__54154 < size__5519__auto__)){
var desc = cljs.core._nth(c__5518__auto__,i__54154);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
cljs.core.chunk_append(b__54155,(function (){var pred__54156 = cljs.core.contains_QMARK_;
var expr__54157 = type;
if(cljs.core.truth_((function (){var G__54159 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__54160 = expr__54157;
return (pred__54156.cljs$core$IFn$_invoke$arity$2 ? pred__54156.cljs$core$IFn$_invoke$arity$2(G__54159,G__54160) : pred__54156.call(null,G__54159,G__54160));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__54161 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__54162 = expr__54157;
return (pred__54156.cljs$core$IFn$_invoke$arity$2 ? pred__54156.cljs$core$IFn$_invoke$arity$2(G__54161,G__54162) : pred__54156.call(null,G__54161,G__54162));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__54163 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__54164 = expr__54157;
return (pred__54156.cljs$core$IFn$_invoke$arity$2 ? pred__54156.cljs$core$IFn$_invoke$arity$2(G__54163,G__54164) : pred__54156.call(null,G__54163,G__54164));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__54165 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__54166 = expr__54157;
return (pred__54156.cljs$core$IFn$_invoke$arity$2 ? pred__54156.cljs$core$IFn$_invoke$arity$2(G__54165,G__54166) : pred__54156.call(null,G__54165,G__54166));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})());

var G__54179 = (i__54154 + (1));
i__54154 = G__54179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54155),frontend$components$plugins_settings$iter__54152(cljs.core.chunk_rest(s__54153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54155),null);
}
} else {
var desc = cljs.core.first(s__54153__$2);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
return cljs.core.cons((function (){var pred__54167 = cljs.core.contains_QMARK_;
var expr__54168 = type;
if(cljs.core.truth_((function (){var G__54170 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__54171 = expr__54168;
return (pred__54167.cljs$core$IFn$_invoke$arity$2 ? pred__54167.cljs$core$IFn$_invoke$arity$2(G__54170,G__54171) : pred__54167.call(null,G__54170,G__54171));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__54172 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__54173 = expr__54168;
return (pred__54167.cljs$core$IFn$_invoke$arity$2 ? pred__54167.cljs$core$IFn$_invoke$arity$2(G__54172,G__54173) : pred__54167.call(null,G__54172,G__54173));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__54174 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__54175 = expr__54168;
return (pred__54167.cljs$core$IFn$_invoke$arity$2 ? pred__54167.cljs$core$IFn$_invoke$arity$2(G__54174,G__54175) : pred__54167.call(null,G__54174,G__54175));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__54176 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__54177 = expr__54168;
return (pred__54167.cljs$core$IFn$_invoke$arity$2 ? pred__54167.cljs$core$IFn$_invoke$arity$2(G__54176,G__54177) : pred__54167.call(null,G__54176,G__54177));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})(),frontend$components$plugins_settings$iter__54152(cljs.core.rest(s__54153__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(schema);
})())]);
} else {
return daiquiri.core.create_element("h2",{'className':"font-bold text-lg py-4 warning"},["No Settings Schema!"]);
}
}),null,"frontend.components.plugins-settings/settings-container");

//# sourceMappingURL=frontend.components.plugins_settings.js.map
