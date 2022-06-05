goog.provide('frontend.util.cursor');
goog.scope(function(){
  frontend.util.cursor.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.util.cursor.closer = (function frontend$util$cursor$closer(a,b,c){
var a_left = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var b_left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(b);
var c_left = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return Number.MAX_SAFE_INTEGER;
}
})();
if(((b_left - a_left) < (c_left - b_left))){
return a;
} else {
return c;
}
});
frontend.util.cursor.mock_char_pos = (function frontend$util$cursor$mock_char_pos(e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),e.offsetLeft,new cljs.core.Keyword(null,"top","top",-1856271961),e.offsetTop,new cljs.core.Keyword(null,"pos","pos",-864607220),(cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(e.id,"_")) | (0))], null);
});
/**
 * Get caret offset position as well as input element rect.
 * 
 *   This function is only used by autocomplete command or up/down command
 *   where offset position is needed.
 * 
 *   If you only need character position, use `pos` instead. Do NOT call this.
 */
frontend.util.cursor.get_caret_pos = (function frontend$util$cursor$get_caret_pos(var_args){
var G__57265 = arguments.length;
switch (G__57265) {
case 1:
return frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1 = (function (input){
return frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$2(input,frontend.util.get_selection_start(input));
}));

(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$2 = (function (input,pos){
if(cljs.core.truth_(input)){
var rect = cljs_bean.core.__GT_clj(input.getBoundingClientRect().toJSON());
try{var G__57271 = goog.dom.getElement("mock-text");
var G__57271__$1 = (((G__57271 == null))?null:goog.dom.getChildren(G__57271));
var G__57271__$2 = (((G__57271__$1 == null))?null:cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(G__57271__$1));
var G__57271__$3 = (((G__57271__$2 == null))?null:frontend.util.nth_safe(G__57271__$2,pos));
var G__57271__$4 = (((G__57271__$3 == null))?null:frontend.util.cursor.mock_char_pos(G__57271__$3));
if((G__57271__$4 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57271__$4,new cljs.core.Keyword(null,"rect","rect",-108902628),rect);
}
}catch (e57270){var _e = e57270;
console.log("index error",_e);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"rect","rect",-108902628),rect,new cljs.core.Keyword(null,"left","left",-399115937),Number.MAX_SAFE_INTEGER,new cljs.core.Keyword(null,"top","top",-1856271961),Number.MAX_SAFE_INTEGER], null);
}} else {
return null;
}
}));

(frontend.util.cursor.get_caret_pos.cljs$lang$maxFixedArity = 2);

frontend.util.cursor.pos = (function frontend$util$cursor$pos(input){
if(cljs.core.truth_(input)){
return frontend.util.get_selection_start(input);
} else {
return null;
}
});
frontend.util.cursor.start_QMARK_ = (function frontend$util$cursor$start_QMARK_(input){
var and__5041__auto__ = input;
if(cljs.core.truth_(and__5041__auto__)){
return (frontend.util.get_selection_start(input) === (0));
} else {
return and__5041__auto__;
}
});
frontend.util.cursor.end_QMARK_ = (function frontend$util$cursor$end_QMARK_(input){
var and__5041__auto__ = input;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input.value),frontend.util.get_selection_start(input));
} else {
return and__5041__auto__;
}
});
frontend.util.cursor.set_selection_to = (function frontend$util$cursor$set_selection_to(input,n,m){
return input.setSelectionRange(n,m);
});
frontend.util.cursor.move_cursor_to = (function frontend$util$cursor$move_cursor_to(input,n){
return input.setSelectionRange(n,n);
});
frontend.util.cursor.move_cursor_forward = (function frontend$util$cursor$move_cursor_forward(var_args){
var G__57279 = arguments.length;
switch (G__57279) {
case 1:
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$1 = (function (input){
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2(input,(1));
}));

(frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2 = (function (input,n){
if(cljs.core.truth_(input)){
var map__57281 = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var map__57281__$1 = cljs.core.__destructure_map(map__57281);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57281__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var pos__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))) && ((!((pos === (0)))))))?(function (){var or__5043__auto__ = frontend.util.safe_inc_current_pos_from_start(input.value,pos);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (pos + (1));
}
})():(pos + n));
return frontend.util.cursor.move_cursor_to(input,pos__$1);
} else {
return null;
}
}));

(frontend.util.cursor.move_cursor_forward.cljs$lang$maxFixedArity = 2);

frontend.util.cursor.move_cursor_backward = (function frontend$util$cursor$move_cursor_backward(var_args){
var G__57288 = arguments.length;
switch (G__57288) {
case 1:
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$1 = (function (input){
return frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2(input,(1));
}));

(frontend.util.cursor.move_cursor_backward.cljs$core$IFn$_invoke$arity$2 = (function (input,n){
if(cljs.core.truth_(input)){
var map__57290 = frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input);
var map__57290__$1 = cljs.core.__destructure_map(map__57290);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var pos__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?frontend.util.safe_dec_current_pos_from_end(input.value,pos):(pos - n));
var pos__$2 = (function (){var x__5128__auto__ = (0);
var y__5129__auto__ = (function (){var or__5043__auto__ = pos__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (pos__$1 - (1));
}
})();
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
return frontend.util.cursor.move_cursor_to(input,pos__$2);
} else {
return null;
}
}));

(frontend.util.cursor.move_cursor_backward.cljs$lang$maxFixedArity = 2);

frontend.util.cursor.get_input_content_AMPERSAND_pos = (function frontend$util$cursor$get_input_content_AMPERSAND_pos(input){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.cursor.goog$module$goog$object.get(input,"value"),frontend.util.cursor.pos(input)], null);
});
frontend.util.cursor.line_beginning_pos = (function frontend$util$cursor$line_beginning_pos(input){
var vec__57291 = frontend.util.cursor.get_input_content_AMPERSAND_pos(input);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57291,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57291,(1),null);
if((pos === (0))){
return (0);
} else {
var last_newline_pos = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(content,"\n",(pos - (1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,last_newline_pos)){
return (0);
} else {
return (last_newline_pos + (1));
}
}
});
frontend.util.cursor.line_end_pos = (function frontend$util$cursor$line_end_pos(input){
var vec__57294 = frontend.util.cursor.get_input_content_AMPERSAND_pos(input);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57294,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57294,(1),null);
var or__5043__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,"\n",pos);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.count(content);
}
});
frontend.util.cursor.beginning_of_line_QMARK_ = (function frontend$util$cursor$beginning_of_line_QMARK_(input){
var vec__57297 = frontend.util.cursor.get_input_content_AMPERSAND_pos(input);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57297,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57297,(1),null);
var or__5043__auto__ = (pos === (0));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var temp__5720__auto__ = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(pos - (1)),pos);
if(cljs.core.truth_(temp__5720__auto__)){
var pre_char = temp__5720__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_char,"\n");
} else {
return null;
}
}
});
frontend.util.cursor.move_cursor_to_line_end = (function frontend$util$cursor$move_cursor_to_line_end(input){
return frontend.util.cursor.move_cursor_to(input,frontend.util.cursor.line_end_pos(input));
});
frontend.util.cursor.move_cursor_to_line_beginning = (function frontend$util$cursor$move_cursor_to_line_beginning(input){
return frontend.util.cursor.move_cursor_to(input,frontend.util.cursor.line_beginning_pos(input));
});
frontend.util.cursor.move_cursor_to_end = (function frontend$util$cursor$move_cursor_to_end(input){
var pos = cljs.core.count(frontend.util.cursor.goog$module$goog$object.get(input,"value"));
return frontend.util.cursor.move_cursor_to(input,pos);
});
frontend.util.cursor.move_cursor_to_thing = (function frontend$util$cursor$move_cursor_to_thing(var_args){
var G__57306 = arguments.length;
switch (G__57306) {
case 2:
return frontend.util.cursor.move_cursor_to_thing.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.util.cursor.move_cursor_to_thing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.cursor.move_cursor_to_thing.cljs$core$IFn$_invoke$arity$2 = (function (input,thing){
return frontend.util.cursor.move_cursor_to_thing.cljs$core$IFn$_invoke$arity$3(input,thing,frontend.util.cursor.pos(input));
}));

(frontend.util.cursor.move_cursor_to_thing.cljs$core$IFn$_invoke$arity$3 = (function (input,thing,from){
var vec__57311 = frontend.util.cursor.get_input_content_AMPERSAND_pos(input);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57311,(0),null);
var _pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57311,(1),null);
var pos = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,thing,from);
return frontend.util.cursor.move_cursor_to(input,pos);
}));

(frontend.util.cursor.move_cursor_to_thing.cljs$lang$maxFixedArity = 3);

frontend.util.cursor.move_cursor_forward_by_word = (function frontend$util$cursor$move_cursor_forward_by_word(input){
var val = input.value;
var current = frontend.util.get_selection_start(input);
var current__$1 = (function (){var idx = current;
while(true){
if(cljs.core.truth_((function (){var G__57320 = frontend.util.nth_safe(val,idx);
var fexpr__57319 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\n",null], null), null);
return (fexpr__57319.cljs$core$IFn$_invoke$arity$1 ? fexpr__57319.cljs$core$IFn$_invoke$arity$1(G__57320) : fexpr__57319.call(null,G__57320));
})())){
var G__57388 = (idx + (1));
idx = G__57388;
continue;
} else {
return idx;
}
break;
}
})();
var idx = (function (){var or__5043__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(val," ",current__$1),clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",current__$1)], null)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.count(val);
}
})();
return frontend.util.cursor.move_cursor_to(input,idx);
});
frontend.util.cursor.move_cursor_backward_by_word = (function frontend$util$cursor$move_cursor_backward_by_word(input){
var val = input.value;
var current = frontend.util.get_selection_start(input);
var prev = (function (){var or__5043__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(val," ",(current - (1))),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(val,"\n",(current - (1)))], null)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var idx = (((prev === (0)))?(0):((function (){var idx = prev;
while(true){
if(cljs.core.truth_((function (){var G__57325 = frontend.util.nth_safe(val,idx);
var fexpr__57324 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\n",null], null), null);
return (fexpr__57324.cljs$core$IFn$_invoke$arity$1 ? fexpr__57324.cljs$core$IFn$_invoke$arity$1(G__57325) : fexpr__57324.call(null,G__57325));
})())){
var G__57393 = (idx - (1));
idx = G__57393;
continue;
} else {
return idx;
}
break;
}
})() + (1)));
return frontend.util.cursor.move_cursor_to(input,idx);
});
frontend.util.cursor.textarea_cursor_rect_first_row_QMARK_ = (function frontend$util$cursor$textarea_cursor_rect_first_row_QMARK_(cursor){
var elms = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getChildren(goog.dom.getElement("mock-text")));
var tops = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.cursor.mock_char_pos,elms)));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tops),new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cursor));
});
frontend.util.cursor.textarea_cursor_first_row_QMARK_ = (function frontend$util$cursor$textarea_cursor_first_row_QMARK_(input){
return frontend.util.cursor.textarea_cursor_rect_first_row_QMARK_(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input));
});
frontend.util.cursor.textarea_cursor_rect_last_row_QMARK_ = (function frontend$util$cursor$textarea_cursor_rect_last_row_QMARK_(cursor){
var elms = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getChildren(goog.dom.getElement("mock-text")));
var tops = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.cursor.mock_char_pos,elms)));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(tops),new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cursor));
});
frontend.util.cursor.textarea_cursor_last_row_QMARK_ = (function frontend$util$cursor$textarea_cursor_last_row_QMARK_(input){
return frontend.util.cursor.textarea_cursor_rect_last_row_QMARK_(frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input));
});
frontend.util.cursor.next_cursor_pos_up_down = (function frontend$util$cursor$next_cursor_pos_up_down(direction,cursor){
var elms = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getChildren(goog.dom.getElement("mock-text")));
var chars = cljs.core.group_by(new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.cursor.mock_char_pos,elms));
var tops = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(chars));
var tops_p = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__57338_SHARP_){
return (new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cursor) === p1__57338_SHARP_);
}),tops);
var line_next = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?cljs.core.last(cljs.core.first(tops_p)):cljs.core.first(cljs.core.last(tops_p)));
var lefts = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (char_pos){
return (new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(char_pos) <= new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cursor));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(chars,line_next));
var left_a = cljs.core.last(cljs.core.first(lefts));
var left_c = cljs.core.first(cljs.core.last(lefts));
var closer = ((((2) > cljs.core.count(lefts)))?left_a:frontend.util.cursor.closer(left_a,cursor,left_c));
return new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(closer);
});
frontend.util.cursor.move_cursor_up_down = (function frontend$util$cursor$move_cursor_up_down(input,direction){
return frontend.util.cursor.move_cursor_to(input,frontend.util.cursor.next_cursor_pos_up_down(direction,frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(input)));
});
frontend.util.cursor.move_cursor_up = (function frontend$util$cursor$move_cursor_up(input){
return frontend.util.cursor.move_cursor_up_down(input,new cljs.core.Keyword(null,"up","up",-269712113));
});
frontend.util.cursor.move_cursor_down = (function frontend$util$cursor$move_cursor_down(input){
return frontend.util.cursor.move_cursor_up_down(input,new cljs.core.Keyword(null,"down","down",1565245570));
});
frontend.util.cursor.select_up_down = (function frontend$util$cursor$select_up_down(input,direction,anchor,cursor_rect){
var next_cursor = frontend.util.cursor.next_cursor_pos_up_down(direction,cursor_rect);
if((anchor <= next_cursor)){
return input.setSelectionRange(anchor,next_cursor,"forward");
} else {
return input.setSelectionRange(next_cursor,anchor,"backward");
}
});

//# sourceMappingURL=frontend.util.cursor.js.map
