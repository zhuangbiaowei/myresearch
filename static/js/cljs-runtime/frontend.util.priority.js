goog.provide('frontend.util.priority');
frontend.util.priority.cycle_priority_state = (function frontend$util$priority$cycle_priority_state(content){
var priority_reg = /\[#([ABC]{1})\]\s{1}/;
var priority = cljs.core.last(frontend.util.safe_re_find(priority_reg,content));
var next_priority = (function (){var G__81704 = priority;
switch (G__81704) {
case "A":
return "B";

break;
case "B":
return "C";

break;
case "C":
return null;

break;
default:
return "A";

}
})();
var and__5041__auto__ = next_priority;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next_priority], 0));
} else {
return and__5041__auto__;
}
});
frontend.util.priority.add_or_update_priority = (function frontend$util$priority$add_or_update_priority(content,format,priority){
var priority_pattern = /(\[#[ABC]\])?\s?/;
var vec__81705 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),format))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/\*+\s/,/\n\*+\s/], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/#+\s/,/\n#+\s/], null));
var re_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81705,(0),null);
var new_line_re_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81705,(1),null);
var skip_hash_pos = (function (){var temp__5718__auto__ = cljs.core.seq(frontend.util.re_pos(new_line_re_pattern,content));
if(temp__5718__auto__){
var matches = temp__5718__auto__;
var vec__81708 = cljs.core.last(matches);
var start_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81708,(0),null);
var content__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81708,(1),null);
return (start_pos + cljs.core.count(content__$1));
} else {
return cljs.core.count(frontend.util.safe_re_find(re_pattern,content));
}
})();
var skip_marker_pos = (function (){var temp__5718__auto__ = cljs.core.seq(frontend.util.re_pos(frontend.util.marker.bare_marker_pattern,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,skip_hash_pos)));
if(temp__5718__auto__){
var matches = temp__5718__auto__;
var vec__81711 = cljs.core.last(matches);
var start_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81711,(0),null);
var content__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81711,(1),null);
return (start_pos + cljs.core.count(content__$1));
} else {
return (0);
}
})();
var pos = (skip_hash_pos + skip_marker_pos);
var new_content = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),pos),clojure.string.replace_first(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,pos),priority_pattern,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(priority)," "].join(''))].join('');
return new_content;
});

//# sourceMappingURL=frontend.util.priority.js.map
