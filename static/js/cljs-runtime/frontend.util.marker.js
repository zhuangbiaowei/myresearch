goog.provide('frontend.util.marker');
frontend.util.marker.marker_pattern = (function frontend$util$marker$marker_pattern(format){
return cljs.core.re_pattern(["^",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"(#+\\s+)?":"(\\*+\\s+)?"),"(NOW|LATER|TODO|DOING|DONE|WAITING|WAIT|CANCELED|CANCELLED|STARTED|IN-PROGRESS)?\\s?"].join(''));
});
frontend.util.marker.bare_marker_pattern = /(NOW|LATER|TODO|DOING|DONE|WAITING|WAIT|CANCELED|CANCELLED|STARTED|IN-PROGRESS){1}\s+/;
frontend.util.marker.add_or_update_marker = (function frontend$util$marker$add_or_update_marker(content,format,marker){
var vec__81678 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),format))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/\*+\s/,/\n\*+\s/], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/#+\s/,/\n#+\s/], null));
var re_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81678,(0),null);
var new_line_re_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81678,(1),null);
var pos = (function (){var temp__5718__auto__ = cljs.core.seq(frontend.util.re_pos(new_line_re_pattern,content));
if(temp__5718__auto__){
var matches = temp__5718__auto__;
var vec__81681 = cljs.core.last(matches);
var start_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81681,(0),null);
var content__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81681,(1),null);
return (start_pos + cljs.core.count(content__$1));
} else {
return cljs.core.count(frontend.util.safe_re_find(re_pattern,content));
}
})();
var new_content = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(0),pos),clojure.string.replace_first(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,pos),frontend.util.marker.marker_pattern(format),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker),((cljs.core.empty_QMARK_(marker))?"":" ")].join(''))].join('');
return new_content;
});
frontend.util.marker.cycle_marker_state = (function frontend$util$marker$cycle_marker_state(marker,preferred_workflow){
var G__81684 = marker;
switch (G__81684) {
case "TODO":
return "DOING";

break;
case "DOING":
return "DONE";

break;
case "LATER":
return "NOW";

break;
case "NOW":
return "DONE";

break;
case "DONE":
return null;

break;
default:
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"now","now",-1650525531),preferred_workflow)){
return "LATER";
} else {
return "TODO";
}

}
});
/**
 * The cycle-marker will cycle markers sequentially. You can find all its order in `cycle-marker-state`.
 * 
 *   It also accepts the specified `marker` and `new-marker`.
 *   If you don't specify it, it will automatically find it based on `content`.
 * 
 *   Returns [new-content new-marker].
 */
frontend.util.marker.cycle_marker = (function frontend$util$marker$cycle_marker(content,marker,new_marker,format,preferred_workflow){
var content__$1 = clojure.string.triml(content);
var new_marker__$1 = (function (){var or__5043__auto__ = new_marker;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.marker.cycle_marker_state((function (){var or__5043__auto____$1 = marker;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.last(frontend.util.safe_re_find(frontend.util.marker.marker_pattern(format),content__$1));
}
})(),preferred_workflow);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.marker.add_or_update_marker(content__$1,format,new_marker__$1),new_marker__$1], null);
});

//# sourceMappingURL=frontend.util.marker.js.map
