goog.provide('logseq.graph_parser.date_time_util');
/**
 * Copy of util/time-ms. Too basic to couple this to main app
 */
logseq.graph_parser.date_time_util.time_ms = (function logseq$graph_parser$date_time_util$time_ms(){
return cljs_time.coerce.to_long(cljs_time.core.now());
});
logseq.graph_parser.date_time_util.safe_journal_title_formatters = (function logseq$graph_parser$date_time_util$safe_journal_title_formatters(date_formatter){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_formatter,"MMM do, yyyy","yyyy-MM-dd","yyyy_MM_dd"], null)));
});
logseq.graph_parser.date_time_util.journal_title__GT_ = (function logseq$graph_parser$date_time_util$journal_title__GT_(journal_title,then_fn,formatters){
if(clojure.string.blank_QMARK_(journal_title)){
return null;
} else {
var temp__5720__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (formatter){
try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(formatter),logseq.graph_parser.util.capitalize_all(journal_title));
}catch (e58782){var _e = e58782;
return null;
}}),formatters)));
if(cljs.core.truth_(temp__5720__auto__)){
var time = temp__5720__auto__;
return (then_fn.cljs$core$IFn$_invoke$arity$1 ? then_fn.cljs$core$IFn$_invoke$arity$1(time) : then_fn.call(null,time));
} else {
return null;
}
}
});
logseq.graph_parser.date_time_util.journal_title__GT_int = (function logseq$graph_parser$date_time_util$journal_title__GT_int(journal_title,formatters){
if(cljs.core.truth_(journal_title)){
var journal_title__$1 = logseq.graph_parser.util.capitalize_all(journal_title);
return logseq.graph_parser.date_time_util.journal_title__GT_(journal_title__$1,(function (p1__58783_SHARP_){
return cljs.core.parse_long(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),p1__58783_SHARP_));
}),formatters);
} else {
return null;
}
});
logseq.graph_parser.date_time_util.format = (function logseq$graph_parser$date_time_util$format(date,date_formatter){
if(cljs.core.truth_(date_formatter)){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(date_formatter),date);
} else {
return null;
}
});
logseq.graph_parser.date_time_util.int__GT_journal_title = (function logseq$graph_parser$date_time_util$int__GT_journal_title(day,date_formatter){
if(cljs.core.truth_(day)){
return logseq.graph_parser.date_time_util.format(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)),date_formatter);
} else {
return null;
}
});

//# sourceMappingURL=logseq.graph_parser.date_time_util.js.map
