goog.provide('frontend.mobile.mobile_bar');
frontend.mobile.mobile_bar.icons_keywords = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.Keyword(null,"parentheses","parentheses",17909609),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a-b","a-b",-1660985764),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"brand-youtube","brand-youtube",-14943036),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"rotate-clockwise","rotate-clockwise",-1414020258),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"italic","italic",32599196),new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804),new cljs.core.Keyword(null,"paint","paint",1531901299)], null);
frontend.mobile.mobile_bar.commands_stats = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),(0)], null)], null);
}),frontend.mobile.mobile_bar.icons_keywords)));
frontend.mobile.mobile_bar.set_command_stats = (function frontend$mobile$mobile_bar$set_command_stats(icon){
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(icon);
var counts = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.mobile.mobile_bar.commands_stats),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"counts","counts",234305892)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.mobile.mobile_bar.commands_stats,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"counts","counts",234305892)], null),(counts + (1)));

return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("mobile","toolbar-stats","mobile/toolbar-stats",1960694079),cljs.core.deref(frontend.mobile.mobile_bar.commands_stats));
});
frontend.mobile.mobile_bar.command = rum.core.lazy_build(rum.core.build_defc,(function() { 
var G__59141__delegate = function (command_handler,icon,p__59129){
var vec__59130 = p__59129;
var count_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59130,(0),null);
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59130,(1),null);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onMouseDown':(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(count_QMARK_)){
frontend.mobile.mobile_bar.set_command_stats(icon);
} else {
}

if(cljs.core.truth_(event_QMARK_)){
(command_handler.cljs$core$IFn$_invoke$arity$1 ? command_handler.cljs$core$IFn$_invoke$arity$1(e) : command_handler.call(null,e));
} else {
(command_handler.cljs$core$IFn$_invoke$arity$0 ? command_handler.cljs$core$IFn$_invoke$arity$0() : command_handler.call(null));
}

return frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","toolbar-update-observer","mobile/toolbar-update-observer",-472907328),cljs.core.rand_int((1000000)));
}),'className':"bottom-action"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null)))])]);
};
var G__59141 = function (command_handler,icon,var_args){
var p__59129 = null;
if (arguments.length > 2) {
var G__59142__i = 0, G__59142__a = new Array(arguments.length -  2);
while (G__59142__i < G__59142__a.length) {G__59142__a[G__59142__i] = arguments[G__59142__i + 2]; ++G__59142__i;}
  p__59129 = new cljs.core.IndexedSeq(G__59142__a,0,null);
} 
return G__59141__delegate.call(this,command_handler,icon,p__59129);};
G__59141.cljs$lang$maxFixedArity = 2;
G__59141.cljs$lang$applyTo = (function (arglist__59143){
var command_handler = cljs.core.first(arglist__59143);
arglist__59143 = cljs.core.next(arglist__59143);
var icon = cljs.core.first(arglist__59143);
var p__59129 = cljs.core.rest(arglist__59143);
return G__59141__delegate(command_handler,icon,p__59129);
});
G__59141.cljs$core$IFn$_invoke$arity$variadic = G__59141__delegate;
return G__59141;
})()
,null,"frontend.mobile.mobile-bar/command");
frontend.mobile.mobile_bar.indent_outdent = rum.core.lazy_build(rum.core.build_defc,(function (indent_QMARK_,icon){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onMouseDown':(function (e){
frontend.util.stop(e);

return frontend.handler.editor.indent_outdent(indent_QMARK_);
}),'className':"bottom-action"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2(icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null)))])]);
}),null,"frontend.mobile.mobile-bar/indent-outdent");
frontend.mobile.mobile_bar.timestamp_submenu = rum.core.lazy_build(rum.core.build_defc,(function (parent_id){
var callback = (function (event){
frontend.util.stop(event);

var target = event.target.parentNode;
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(target,"show-submenu");
});
var command_cp = (function (action,description){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
(action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));

return callback(e);
})], null),description], null);
});
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("button",{'onMouseDown':(function (event){
frontend.util.stop(event);

frontend.mobile.mobile_bar.set_command_stats(new cljs.core.Keyword(null,"calendar","calendar",62308146));

frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","toolbar-update-observer","mobile/toolbar-update-observer",-472907328),cljs.core.rand_int((1000000)));

var target = goog.dom.getNextElementSibling(event.target);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(target,"show-submenu");
}),'className':"bottom-action"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("calendar",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null))),daiquiri.core.create_element("div",{'style':{'bottom':cljs.core.deref(frontend.util.keyboard_height)},'className':"submenu fixed hidden flex flex-col w-full justify-evenly"},[daiquiri.interpreter.interpret(command_cp((function (){
var today = frontend.handler.page.get_page_ref_text(frontend.date.today());
return frontend.commands.simple_insert_BANG_(parent_id,today,cljs.core.PersistentArrayMap.EMPTY);
}),"Today")),daiquiri.interpreter.interpret(command_cp((function (){
var tomorrow = frontend.handler.page.get_page_ref_text(frontend.date.tomorrow());
return frontend.commands.simple_insert_BANG_(parent_id,tomorrow,cljs.core.PersistentArrayMap.EMPTY);
}),"Tomorrow")),daiquiri.interpreter.interpret(command_cp((function (){
var yesterday = frontend.handler.page.get_page_ref_text(frontend.date.yesterday());
return frontend.commands.simple_insert_BANG_(parent_id,yesterday,cljs.core.PersistentArrayMap.EMPTY);
}),"Yesterday")),daiquiri.interpreter.interpret(command_cp((function (){
var timestamp = frontend.date.get_current_time();
return frontend.commands.simple_insert_BANG_(parent_id,timestamp,cljs.core.PersistentArrayMap.EMPTY);
}),"Time"))])])]);
}),null,"frontend.mobile.mobile-bar/timestamp-submenu");
frontend.mobile.mobile_bar.commands = (function frontend$mobile$mobile_bar$commands(parent_id){
var viewport_fn = (function (){
var temp__5720__auto__ = goog.dom.getElement(parent_id);
if(cljs.core.truth_(temp__5720__auto__)){
var input = temp__5720__auto__;
frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$variadic(input,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"to-vw-one-quarter?","to-vw-one-quarter?",1745595255),true], 0));

return input.focus();
} else {
return null;
}
});
return cljs.core.zipmap(frontend.mobile.mobile_bar.icons_keywords,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.mobile.mobile_bar.command(frontend.handler.editor.cycle_todo_BANG_,"checkbox",true),frontend.mobile.mobile_bar.command((function (){
viewport_fn();

return frontend.handler.editor.toggle_page_reference_embed(parent_id);
}),"brackets",true),frontend.mobile.mobile_bar.command((function (){
viewport_fn();

return frontend.handler.editor.toggle_block_reference_embed(parent_id);
}),"parentheses",true),frontend.mobile.mobile_bar.command((function (){
viewport_fn();

return frontend.commands.simple_insert_BANG_(parent_id,"/",cljs.core.PersistentArrayMap.EMPTY);
}),"command",true),frontend.mobile.mobile_bar.command((function (){
viewport_fn();

return frontend.commands.simple_insert_BANG_(parent_id,"#",cljs.core.PersistentArrayMap.EMPTY);
}),"tag",true),frontend.mobile.mobile_bar.command(frontend.handler.editor.cycle_priority_BANG_,"a-b",true),frontend.mobile.mobile_bar.command(frontend.handler.editor.toggle_list_BANG_,"list",true),frontend.mobile.mobile_bar.command((function (){
return frontend.mobile.camera.embed_photo(parent_id);
}),"camera",true),frontend.mobile.mobile_bar.command(frontend.commands.insert_youtube_timestamp,"brand-youtube",true),frontend.mobile.mobile_bar.command(frontend.handler.editor.html_link_format_BANG_,"link",true),frontend.mobile.mobile_bar.command(frontend.handler.history.undo_BANG_,"rotate",true,true),frontend.mobile.mobile_bar.command(frontend.handler.history.redo_BANG_,"rotate-clockwise",true,true),frontend.mobile.mobile_bar.timestamp_submenu(parent_id),frontend.mobile.mobile_bar.command((function (){
return frontend.commands.simple_insert_BANG_(parent_id,"<",cljs.core.PersistentArrayMap.EMPTY);
}),"code",true),frontend.mobile.mobile_bar.command(frontend.handler.editor.bold_format_BANG_,"bold",true),frontend.mobile.mobile_bar.command(frontend.handler.editor.italics_format_BANG_,"italic",true),frontend.mobile.mobile_bar.command(frontend.handler.editor.strike_through_format_BANG_,"strikethrough",true),frontend.mobile.mobile_bar.command(frontend.handler.editor.highlight_format_BANG_,"paint",true)], null));
});
frontend.mobile.mobile_bar.mobile_bar = rum.core.lazy_build(rum.core.build_defc,(function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.sub(new cljs.core.Keyword("mobile","toolbar-update-observer","mobile/toolbar-update-observer",-472907328));
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.sub(new cljs.core.Keyword("mobile","show-toolbar?","mobile/show-toolbar?",-1615839821));
} else {
return and__5041__auto__;
}
})())){
daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = new cljs.core.Keyword("mobile","toolbar-stats","mobile/toolbar-stats",1960694079).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5720__auto__)){
var config_toolbar_stats = temp__5720__auto__;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"config-toolbar-stats","config-toolbar-stats",1289149387),config_toolbar_stats], 0));

return cljs.core.reset_BANG_(frontend.mobile.mobile_bar.commands_stats,config_toolbar_stats);
} else {
return null;
}
})());

var parent_id = frontend.state.get_edit_input_id();
var commands = frontend.mobile.mobile_bar.commands(parent_id);
var sorted_commands = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counts","counts",234305892),cljs.core.second),cljs.core._GT_,cljs.core.deref(frontend.mobile.mobile_bar.commands_stats));
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.sub(new cljs.core.Keyword("mobile","show-toolbar?","mobile/show-toolbar?",-1615839821));
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.sub(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417));
} else {
return and__5041__auto__;
}
})())){
return daiquiri.core.create_element("div",{'id':"mobile-editor-toolbar",'className':"bg-base-2"},[daiquiri.core.create_element("div",{'className':"toolbar-commands"},[frontend.mobile.mobile_bar.indent_outdent(false,"indent-decrease"),frontend.mobile.mobile_bar.indent_outdent(true,"indent-increase"),frontend.mobile.mobile_bar.command(frontend.handler.editor.move_up_down(true),"arrow-bar-to-up"),frontend.mobile.mobile_bar.command(frontend.handler.editor.move_up_down(false),"arrow-bar-to-down"),frontend.mobile.mobile_bar.command((function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("document","mode?","document/mode?",-994203479)))){
return frontend.handler.editor.insert_new_block_BANG_.cljs$core$IFn$_invoke$arity$1(null);
} else {
return frontend.commands.simple_insert_BANG_(parent_id,"\n",cljs.core.PersistentArrayMap.EMPTY);
}
}),"arrow-back"),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$mobile$mobile_bar$iter__59133(s__59134){
return (new cljs.core.LazySeq(null,(function (){
var s__59134__$1 = s__59134;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__59134__$1);
if(temp__5720__auto__){
var s__59134__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59134__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59134__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59136 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59135 = (0);
while(true){
if((i__59135 < size__5519__auto__)){
var command = cljs.core._nth(c__5518__auto__,i__59135);
cljs.core.chunk_append(b__59136,daiquiri.interpreter.interpret((function (){var fexpr__59138 = cljs.core.first(command);
return (fexpr__59138.cljs$core$IFn$_invoke$arity$1 ? fexpr__59138.cljs$core$IFn$_invoke$arity$1(commands) : fexpr__59138.call(null,commands));
})()));

var G__59144 = (i__59135 + (1));
i__59135 = G__59144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59136),frontend$mobile$mobile_bar$iter__59133(cljs.core.chunk_rest(s__59134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59136),null);
}
} else {
var command = cljs.core.first(s__59134__$2);
return cljs.core.cons(daiquiri.interpreter.interpret((function (){var fexpr__59140 = cljs.core.first(command);
return (fexpr__59140.cljs$core$IFn$_invoke$arity$1 ? fexpr__59140.cljs$core$IFn$_invoke$arity$1(commands) : fexpr__59140.call(null,commands));
})()),frontend$mobile$mobile_bar$iter__59133(cljs.core.rest(s__59134__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(sorted_commands);
})())]),daiquiri.core.create_element("div",{'className':"toolbar-hide-keyboard"},[frontend.mobile.mobile_bar.command((function (){
return frontend.state.clear_edit_BANG_();
}),"keyboard-show")])]);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.mobile.mobile-bar/mobile-bar");

//# sourceMappingURL=frontend.mobile.mobile_bar.js.map
