goog.provide('frontend.util.list');
frontend.util.list.get_prev_item = (function frontend$util$list$get_prev_item(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83386 = arguments.length;
var i__5767__auto___83387 = (0);
while(true){
if((i__5767__auto___83387 < len__5766__auto___83386)){
args__5772__auto__.push((arguments[i__5767__auto___83387]));

var G__83388 = (i__5767__auto___83387 + (1));
i__5767__auto___83387 = G__83388;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__83309){
var vec__83310 = p__83309;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83310,(0),null);
if(frontend.util.cursor.textarea_cursor_first_row_QMARK_(input)){
return null;
} else {
var temp__5718__auto___83389 = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5718__auto___83389)){
var item_83390 = temp__5718__auto___83389;
var map__83313_83391 = item_83390;
var map__83313_83392__$1 = cljs.core.__destructure_map(map__83313_83391);
var bullet_83393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83313_83392__$1,new cljs.core.Keyword(null,"bullet","bullet",726988937));
var ordered_83394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83313_83392__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
if(cljs.core.truth_((function (){var and__5041__auto__ = ordered_83394;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bullet_83393,"1");
} else {
return and__5041__auto__;
}
})())){
} else {
frontend.util.cursor.move_cursor_up(input);
}
} else {
frontend.util.cursor.move_cursor_up(input);
}

return frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
}));

(frontend.util.list.get_prev_item.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.list.get_prev_item.cljs$lang$applyTo = (function (seq83305){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83305));
}));

frontend.util.list.get_next_item = (function frontend$util$list$get_next_item(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83395 = arguments.length;
var i__5767__auto___83396 = (0);
while(true){
if((i__5767__auto___83396 < len__5766__auto___83395)){
args__5772__auto__.push((arguments[i__5767__auto___83396]));

var G__83397 = (i__5767__auto___83396 + (1));
i__5767__auto___83396 = G__83397;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__83321){
var vec__83322 = p__83321;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83322,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var map__83328 = item;
var map__83328__$1 = cljs.core.__destructure_map(map__83328);
var _bullet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83328__$1,new cljs.core.Keyword(null,"_bullet","_bullet",-1077971906));
var _ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83328__$1,new cljs.core.Keyword(null,"_ordered","_ordered",-802303492));
if(frontend.util.cursor.textarea_cursor_last_row_QMARK_(input)){
return null;
} else {
frontend.util.cursor.move_cursor_down(input);

return frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
} else {
return null;
}
}));

(frontend.util.list.get_next_item.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.list.get_next_item.cljs$lang$applyTo = (function (seq83317){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83317));
}));

frontend.util.list.list_beginning_pos = (function frontend$util$list$list_beginning_pos(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83398 = arguments.length;
var i__5767__auto___83399 = (0);
while(true){
if((i__5767__auto___83399 < len__5766__auto___83398)){
args__5772__auto__.push((arguments[i__5767__auto___83399]));

var G__83400 = (i__5767__auto___83399 + (1));
i__5767__auto___83399 = G__83400;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.list_beginning_pos.cljs$core$IFn$_invoke$arity$variadic = (function (p__83337){
var vec__83340 = p__83337;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83340,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var current_pos = frontend.util.cursor.pos(input);
var item_start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(item);
var beginning_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(item_start);
while(true){
if(cljs.core.truth_((function (){var temp__5720__auto____$1 = frontend.util.list.get_prev_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto____$1)){
var prev_item = temp__5720__auto____$1;
return cljs.core.reset_BANG_(beginning_pos,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(prev_item));
} else {
return null;
}
})())){
continue;
} else {
}
break;
}

frontend.util.cursor.move_cursor_to(input,current_pos);

return cljs.core.deref(beginning_pos);
} else {
return null;
}
}));

(frontend.util.list.list_beginning_pos.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.list.list_beginning_pos.cljs$lang$applyTo = (function (seq83332){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83332));
}));

frontend.util.list.list_end_pos = (function frontend$util$list$list_end_pos(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83401 = arguments.length;
var i__5767__auto___83402 = (0);
while(true){
if((i__5767__auto___83402 < len__5766__auto___83401)){
args__5772__auto__.push((arguments[i__5767__auto___83402]));

var G__83403 = (i__5767__auto___83402 + (1));
i__5767__auto___83402 = G__83403;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.list.list_end_pos.cljs$core$IFn$_invoke$arity$variadic = (function (p__83352){
var vec__83353 = p__83352;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83353,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var item = temp__5720__auto__;
var current_pos = frontend.util.cursor.pos(input);
var item_end = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(item);
var end_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(item_end);
while(true){
if(cljs.core.truth_((function (){var temp__5720__auto____$1 = frontend.util.list.get_next_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto____$1)){
var next_item = temp__5720__auto____$1;
return cljs.core.reset_BANG_(end_pos,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(next_item));
} else {
return null;
}
})())){
continue;
} else {
}
break;
}

frontend.util.cursor.move_cursor_to(input,current_pos);

return cljs.core.deref(end_pos);
} else {
return null;
}
}));

(frontend.util.list.list_end_pos.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.list.list_end_pos.cljs$lang$applyTo = (function (seq83348){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83348));
}));

frontend.util.list.newline_QMARK_ = (function frontend$util$list$newline_QMARK_(line){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line,"\n")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line,"\r\n")));
});
frontend.util.list.re_order_items = (function frontend$util$list$re_order_items(lines,start_idx){
var lines__$1 = lines;
var idx = start_idx;
var result = cljs.core.PersistentVector.EMPTY;
var double_newlines_QMARK_ = false;
while(true){
var vec__83377 = lines__$1;
var seq__83378 = cljs.core.seq(vec__83377);
var first__83379 = cljs.core.first(seq__83378);
var seq__83378__$1 = cljs.core.next(seq__83378);
var line = first__83379;
var others = seq__83378__$1;
if(cljs.core.empty_QMARK_(lines__$1)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines__$1,idx,result,double_newlines_QMARK_,vec__83377,seq__83378,first__83379,seq__83378__$1,line,others){
return (function (line__$1){
if(frontend.util.list.newline_QMARK_(line__$1)){
return "";
} else {
return line__$1;
}
});})(lines__$1,idx,result,double_newlines_QMARK_,vec__83377,seq__83378,first__83379,seq__83378__$1,line,others))
,result));
} else {
var vec__83380 = cljs.core.re_find(/^(\d+){1}\./,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83380,(0),null);
var num_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83380,(1),null);
var num = (cljs.core.truth_(num_str)?cljs.core.parse_long(num_str):null);
var double_newlines_QMARK__SINGLEQUOTE_ = ((double_newlines_QMARK_) || (((frontend.util.list.newline_QMARK_(line)) && (((cljs.core.seq(others)) && (frontend.util.list.newline_QMARK_(cljs.core.first(others))))))));
var vec__83383 = (cljs.core.truth_((function (){var and__5041__auto__ = (!(double_newlines_QMARK__SINGLEQUOTE_));
if(and__5041__auto__){
return num;
} else {
return and__5041__auto__;
}
})())?(function (){var idx_SINGLEQUOTE_ = (idx + (1));
var line_SINGLEQUOTE_ = clojure.string.replace_first(line,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),"."].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_SINGLEQUOTE_),"."].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line_SINGLEQUOTE_)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,line)], null));
var idx_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83383,(0),null);
var result_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83383,(1),null);
var G__83404 = others;
var G__83405 = idx_SINGLEQUOTE_;
var G__83406 = result_SINGLEQUOTE_;
var G__83407 = double_newlines_QMARK__SINGLEQUOTE_;
lines__$1 = G__83404;
idx = G__83405;
result = G__83406;
double_newlines_QMARK_ = G__83407;
continue;
}
break;
}
});

//# sourceMappingURL=frontend.util.list.js.map
