goog.provide('logseq.graph_parser.property');
logseq.graph_parser.property.properties_ast_QMARK_ = (function logseq$graph_parser$property$properties_ast_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Property_Drawer",null,"Properties",null], null), null),cljs.core.first(block))));
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.property !== 'undefined') && (typeof logseq.graph_parser.property.properties_start !== 'undefined')){
} else {
logseq.graph_parser.property.properties_start = ":PROPERTIES:";
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.property !== 'undefined') && (typeof logseq.graph_parser.property.properties_end !== 'undefined')){
} else {
logseq.graph_parser.property.properties_end = ":END:";
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.property !== 'undefined') && (typeof logseq.graph_parser.property.properties_end_pattern !== 'undefined')){
} else {
logseq.graph_parser.property.properties_end_pattern = cljs.core.re_pattern(goog.string.format("%s[\t\r ]*\n|(%s\\s*$)",logseq.graph_parser.property.properties_end,logseq.graph_parser.property.properties_end));
}
logseq.graph_parser.property.contains_properties_QMARK_ = (function logseq$graph_parser$property$contains_properties_QMARK_(content){
if(cljs.core.truth_(content)){
var and__5041__auto__ = clojure.string.includes_QMARK_(content,logseq.graph_parser.property.properties_start);
if(and__5041__auto__){
return logseq.graph_parser.util.safe_re_find(logseq.graph_parser.property.properties_end_pattern,content);
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
/**
 * New syntax: key:: value
 */
logseq.graph_parser.property.__GT_new_properties = (function logseq$graph_parser$property$__GT_new_properties(content){
if(cljs.core.truth_(logseq.graph_parser.property.contains_properties_QMARK_(content))){
var lines = clojure.string.split_lines(content);
var start_idx = lines.indexOf(logseq.graph_parser.property.properties_start);
var end_idx = lines.indexOf(logseq.graph_parser.property.properties_end);
if((((start_idx >= (0))) && ((((end_idx > (0))) && ((end_idx > start_idx)))))){
var before = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,(0),start_idx);
var middle = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (text){
var vec__59246 = logseq.graph_parser.util.split_first(":",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1)));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59246,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59246,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = k;
if(cljs.core.truth_(and__5041__auto__)){
return v;
} else {
return and__5041__auto__;
}
})())){
var k__$1 = clojure.string.replace(k,"_","-");
var compare_k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k__$1));
var k__$2 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"custom-id","custom-id",-615733336),null,new cljs.core.Keyword(null,"custom_id","custom_id",834948303),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),compare_k))?"id":k__$1);
var k__$3 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),null], null), null),compare_k))?"updated-at":k__$2);
return [k__$3,":: ",clojure.string.trim(v)].join('');
} else {
return text;
}
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,(start_idx + (1)),end_idx));
var after = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(lines,(end_idx + (1)));
var lines__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,middle,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after], 0));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
} else {
return content;
}
} else {
return content;
}
});

//# sourceMappingURL=logseq.graph_parser.property.js.map
