goog.provide('frontend.components.datetime');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.datetime !== 'undefined') && (typeof frontend.components.datetime.default_timestamp_value !== 'undefined')){
} else {
frontend.components.datetime.default_timestamp_value = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),"",new cljs.core.Keyword(null,"repeater","repeater",-1071171146),cljs.core.PersistentArrayMap.EMPTY], null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.datetime !== 'undefined') && (typeof frontend.components.datetime._STAR_timestamp !== 'undefined')){
} else {
frontend.components.datetime._STAR_timestamp = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.components.datetime.default_timestamp_value);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.datetime !== 'undefined') && (typeof frontend.components.datetime._STAR_show_time_QMARK_ !== 'undefined')){
} else {
frontend.components.datetime._STAR_show_time_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.datetime.time_input = rum.core.lazy_build(rum.core.build_defc,(function (default_value){
var show_QMARK_ = rum.core.react(frontend.components.datetime._STAR_show_time_QMARK_);
if(cljs.core.truth_((function (){var or__5043__auto__ = show_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (!(clojure.string.blank_QMARK_(default_value)));
}
})())){
return daiquiri.core.create_element("div",{'style':{'height':(32)},'className':"flex flex-row"},[daiquiri.core.create_element("input",{'id':"time",'defaultValue':default_value,'onChange':rum.core.mark_sync_update((function (event){
frontend.util.stop(event);

var value = frontend.util.evalue(event);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),value);
})),'className':"form-input w-20 ms:w-60"},[]),daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_time_QMARK_,false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),null);
}),'className':"ml-2 self-center"},[daiquiri.interpreter.interpret(frontend.components.svg.close)])]);
} else {
return daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_time_QMARK_,true);

var map__54083 = frontend.date.get_local_date();
var map__54083__$1 = cljs.core.__destructure_map(map__54083);
var hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54083__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54083__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var result = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":",frontend.util.zero_pad(minute)].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),result);
}),'className':"text-sm"},["Add time"]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.datetime/time-input");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.datetime !== 'undefined') && (typeof frontend.components.datetime._STAR_show_repeater_QMARK_ !== 'undefined')){
} else {
frontend.components.datetime._STAR_show_repeater_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.datetime.repeater_cp = rum.core.lazy_build(rum.core.build_defc,(function (p__54086){
var map__54087 = p__54086;
var map__54087__$1 = cljs.core.__destructure_map(map__54087);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54087__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54087__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54087__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var show_QMARK_ = rum.core.react(frontend.components.datetime._STAR_show_repeater_QMARK_);
if(cljs.core.truth_((function (){var or__5043__auto__ = show_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = num;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = duration;
if(cljs.core.truth_(and__5041__auto____$1)){
return kind;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())){
return daiquiri.core.create_element("div",{'style':{'height':(32)},'className':"w full flex flex-row justify-left"},[daiquiri.core.create_element("input",{'id':"repeater-num",'defaultValue':num,'onChange':rum.core.mark_sync_update((function (event){
var value = frontend.util.evalue(event);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeater","repeater",-1071171146),new cljs.core.Keyword(null,"num","num",1985240673)], null),value);
})),'className':"form-input mt-1 w-8 px-1 sm:w-20 sm:px-2 text-center"},[]),frontend.ui.select(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item),duration)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"selected","selected",574897764),"selected");
} else {
return item;
}
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"h"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"d"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"w"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"m"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"y"], null)], null)),(function (value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeater","repeater",-1071171146),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),value);
}),null),daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_repeater_QMARK_,false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc,new cljs.core.Keyword(null,"repeater","repeater",-1071171146),cljs.core.PersistentArrayMap.EMPTY);
}),'className':"ml-1 self-center"},[daiquiri.interpreter.interpret(frontend.components.svg.close)])]);
} else {
return daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_repeater_QMARK_,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc,new cljs.core.Keyword(null,"repeater","repeater",-1071171146),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),".+",new cljs.core.Keyword(null,"num","num",1985240673),(1),new cljs.core.Keyword(null,"duration","duration",1444101068),"d"], null));
}),'className':"text-sm"},["Add repeater"]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.datetime/repeater-cp");
frontend.components.datetime.clear_timestamp_BANG_ = (function frontend$components$datetime$clear_timestamp_BANG_(){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_timestamp,frontend.components.datetime.default_timestamp_value);

cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_time_QMARK_,false);

cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_repeater_QMARK_,false);

frontend.state.set_timestamp_block_BANG_(null);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581),null);
});
frontend.components.datetime.on_submit = (function frontend$components$datetime$on_submit(e){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

var map__54110_54127 = cljs.core.deref(frontend.components.datetime._STAR_timestamp);
var map__54110_54128__$1 = cljs.core.__destructure_map(map__54110_54127);
var timestamp_54129 = map__54110_54128__$1;
var repeater_54130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54110_54128__$1,new cljs.core.Keyword(null,"repeater","repeater",-1071171146));
var date_54131 = new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var timestamp_54132__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(timestamp_54129,new cljs.core.Keyword(null,"date","date",-1463434462),(function (){var or__5043__auto__ = date_54131;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs_time.core.today();
}
})());
var kind_54133 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("w",new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(repeater_54130)))?"++":".+");
var timestamp_54134__$2 = cljs.core.assoc_in(timestamp_54132__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeater","repeater",-1071171146),new cljs.core.Keyword(null,"kind","kind",-717265803)], null),kind_54133);
var text_54135 = frontend.handler.repeated.timestamp_map__GT_text(timestamp_54134__$2);
var block_data_54136 = frontend.state.get_timestamp_block();
var map__54111_54137 = block_data_54136;
var map__54111_54138__$1 = cljs.core.__destructure_map(map__54111_54137);
var block_54139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54111_54138__$1,new cljs.core.Keyword(null,"block","block",664686210));
var typ_54140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54111_54138__$1,new cljs.core.Keyword(null,"typ","typ",-1304536900));
var show_QMARK__54141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54111_54138__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var block_id_54142 = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_54139);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
}
})();
var typ_54143__$1 = (function (){var or__5043__auto__ = cljs.core.deref(frontend.commands._STAR_current_command);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return typ_54140;
}
})();
frontend.handler.editor.set_block_timestamp_BANG_(block_id_54142,typ_54143__$1,text_54135);

if(cljs.core.truth_(show_QMARK__54141)){
cljs.core.reset_BANG_(show_QMARK__54141,false);
} else {
}

frontend.components.datetime.clear_timestamp_BANG_();

frontend.state.set_editor_show_date_picker_BANG_(false);

return frontend.commands.restore_state(false);
});
frontend.components.datetime.time_repeater = rum.core.lazy_build(rum.core.build_defc,(function (){
var map__54112 = rum.core.react(frontend.components.datetime._STAR_timestamp);
var map__54112__$1 = cljs.core.__destructure_map(map__54112);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54112__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var repeater = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54112__$1,new cljs.core.Keyword(null,"repeater","repeater",-1071171146));
return daiquiri.core.create_element("div",{'id':"time-repeater",'className':"py-1 px-4"},[daiquiri.core.create_element("p",{'className':"text-sm opacity-50 font-medium mt-4"},["Time:"]),frontend.components.datetime.time_input(time),daiquiri.core.create_element("p",{'className':"text-sm opacity-50 font-medium mt-4"},["Repeater:"]),frontend.components.datetime.repeater_cp(repeater),(function (){var attrs54120 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Submit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.components.datetime.on_submit], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs54120))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-4"], null)], null),attrs54120], 0))):{'className':"mt-4"}),((cljs.core.map_QMARK_(attrs54120))?null:[daiquiri.interpreter.interpret(attrs54120)]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
var temp__5720__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5720__auto__)){
var input = temp__5720__auto__;
return setTimeout((function (){
return frontend.mixins.on_enter.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),input,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),frontend.components.datetime.on_submit], 0));
}),(100));
} else {
return null;
}
}))], null),"frontend.components.datetime/time-repeater");
frontend.components.datetime.date_picker = rum.core.lazy_build(rum.core.build_defc,(function (id,format,_ts){
var current_command = cljs.core.deref(frontend.commands._STAR_current_command);
var deadline_or_schedule_QMARK_ = (function (){var and__5041__auto__ = current_command;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["deadline",null,"scheduled",null], null), null),clojure.string.lower_case(current_command));
} else {
return and__5041__auto__;
}
})();
var date = frontend.state.sub(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581));
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-date-picker?","editor/show-date-picker?",216789264)))){
return daiquiri.core.create_element("div",{'id':"date-time-picker",'onClick':(function (e){
return frontend.util.stop(e);
}),'onMouseDown':(function (e){
return e.stopPropagation();
}),'className':"flex flex-row"},[daiquiri.interpreter.interpret(frontend.ui.datepicker(date,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deadline-or-schedule?","deadline-or-schedule?",1308283544),deadline_or_schedule_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e,date__$1){
frontend.util.stop(e);

var date__$2 = cljs_time.core.to_default_time_zone(date__$1);
var journal = frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(date__$2);
if(cljs.core.truth_(deadline_or_schedule_QMARK_)){
return null;
} else {
frontend.handler.editor.insert_command_BANG_(id,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([journal], 0)),format,null);

frontend.state.set_editor_show_date_picker_BANG_(false);

return cljs.core.reset_BANG_(frontend.commands._STAR_current_command,null);
}
})], null))),(cljs.core.truth_(deadline_or_schedule_QMARK_)?frontend.components.datetime.time_repeater():null)]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var ts_54144 = cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(ts_54144)){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_timestamp,ts_54144);
} else {
cljs.core.reset_BANG_(frontend.components.datetime._STAR_timestamp,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),"",new cljs.core.Keyword(null,"repeater","repeater",-1071171146),cljs.core.PersistentArrayMap.EMPTY], null));
}

if(cljs.core.truth_(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581),cljs_time.core.today());
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.components.datetime.clear_timestamp_BANG_();

return state;
})], null)], null),"frontend.components.datetime/date-picker");

//# sourceMappingURL=frontend.components.datetime.js.map
