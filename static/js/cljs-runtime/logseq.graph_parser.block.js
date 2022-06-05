goog.provide('logseq.graph_parser.block');
logseq.graph_parser.block.heading_block_QMARK_ = (function logseq$graph_parser$block$heading_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Heading",cljs.core.first(block))));
});
logseq.graph_parser.block.get_tag = (function logseq$graph_parser$block$get_tag(block){
var temp__5720__auto__ = (function (){var and__5041__auto__ = cljs.core.vector_QMARK_(block);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tag",cljs.core.first(block));
if(and__5041__auto____$1){
return cljs.core.second(block);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var tag_value = temp__5720__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46657){
var vec__46662 = p__46657;
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46662,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46662,(1),null);
var G__46666 = elem;
switch (G__46666) {
case "Plain":
return value;

break;
case "Link":
return new cljs.core.Keyword(null,"full_text","full_text",1634289075).cljs$core$IFn$_invoke$arity$1(value);

break;
case "Nested_link":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(value);

break;
default:
return "";

}
}),tag_value));
} else {
return null;
}
});
logseq.graph_parser.block.get_page_reference = (function logseq$graph_parser$block$get_page_reference(block,supported_formats){
var page = ((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block)))))?(function (){var typ = cljs.core.first(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
var value = cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Page_ref");
if(and__5041__auto__){
var and__5041__auto____$1 = ((typeof value === 'string') && (cljs.core.not((function (){var or__5043__auto__ = logseq.graph_parser.config.local_asset_QMARK_(value);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return logseq.graph_parser.config.draw_QMARK_(value);
}
})())));
if(and__5041__auto____$1){
return value;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Search");
if(and__5041__auto__){
var and__5041__auto____$1 = logseq.graph_parser.text.page_ref_QMARK_(value);
if(and__5041__auto____$1){
return logseq.graph_parser.text.page_ref_un_brackets_BANG_(value);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Search");
if(and__5041__auto__){
var and__5041__auto____$1 = (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["#",null,"*",null,"/",null,"[",null], null), null),cljs.core.first(value))));
if(and__5041__auto____$1){
var ext = (function (){var G__46734 = logseq.graph_parser.util.get_file_ext(value);
if((G__46734 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__46734);
}
})();
if((((!(clojure.string.starts_with_QMARK_(value,"http:")))) && ((((!(clojure.string.starts_with_QMARK_(value,"https:")))) && ((((!(clojure.string.starts_with_QMARK_(value,"file:")))) && (((cljs.core.not(logseq.graph_parser.config.local_asset_QMARK_(value))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext,new cljs.core.Keyword(null,"excalidraw","excalidraw",-397772502))) || ((!(cljs.core.contains_QMARK_(supported_formats,ext)))))))))))))){
return value;
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Complex");
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(value),"file");
if(and__5041__auto____$1){
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"File");
if(and__5041__auto__){
return cljs.core.second(cljs.core.first(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))));
} else {
return and__5041__auto__;
}
}
}
}
}
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Nested_link",cljs.core.first(block)))))?(function (){var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.last(block));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(block)))))?(function (){var map__46760 = cljs.core.second(block);
var map__46760__$1 = cljs.core.__destructure_map(map__46760);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46760__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46760__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var argument = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")){
return logseq.graph_parser.text.page_ref_un_brackets_BANG_(argument);
} else {
return null;
}
})():((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tag",cljs.core.first(block)))))?(function (){var text = logseq.graph_parser.block.get_tag(block);
return logseq.graph_parser.text.page_ref_un_brackets_BANG_(text);
})():null
))));
return logseq.graph_parser.text.block_ref_un_brackets_BANG_(page);
});
logseq.graph_parser.block.get_block_reference = (function logseq$graph_parser$block$get_block_reference(block){
var temp__5720__auto__ = ((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_reference",cljs.core.first(block)))))?cljs.core.last(block):((((cljs.core.vector_QMARK_(block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block))) && (((cljs.core.map_QMARK_(cljs.core.second(block))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_ref",cljs.core.first(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)))))))))))?cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))):((((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(block)))))?(function (){var map__46795 = cljs.core.second(block);
var map__46795__$1 = cljs.core.__destructure_map(map__46795);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46795__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46795__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")) && (((typeof cljs.core.first(arguments$) === 'string') && (((clojure.string.starts_with_QMARK_(cljs.core.first(arguments$),"((")) && (clojure.string.ends_with_QMARK_(cljs.core.first(arguments$),"))")))))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.first(arguments$),(2),(cljs.core.count(cljs.core.first(arguments$)) - (2)));
} else {
return null;
}
})():((((cljs.core.vector_QMARK_(block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",cljs.core.first(block))) && (cljs.core.map_QMARK_(cljs.core.second(block)))))))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("id",new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block))))))?new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)))):(function (){var id = cljs.core.second(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.second(block)));
return logseq.graph_parser.text.block_ref_un_brackets_BANG_(id);
})()):null
))));
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
if(cljs.core.truth_((function (){var G__46804 = block_id;
if((G__46804 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__46804);
}
})())){
return block_id;
} else {
return null;
}
} else {
return null;
}
});
logseq.graph_parser.block.paragraph_block_QMARK_ = (function logseq$graph_parser$block$paragraph_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Paragraph",cljs.core.first(block))));
});
logseq.graph_parser.block.timestamp_block_QMARK_ = (function logseq$graph_parser$block$timestamp_block_QMARK_(block){
return ((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Timestamp",cljs.core.first(block))));
});
logseq.graph_parser.block.extract_properties = (function logseq$graph_parser$block$extract_properties(format,properties,user_config){
if(cljs.core.seq(properties)){
var properties__$1 = cljs.core.seq(properties);
var page_refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
if(((typeof v === 'string') && (cljs.core.not(logseq.graph_parser.mldoc.link_QMARK_(format,v))))){
var v__$1 = clojure.string.trim(v);
var result = logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$2(v__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"un-brackets?","un-brackets?",518613875),false], null));
if(cljs.core.coll_QMARK_(result)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.text.page_ref_un_brackets_BANG_,result);
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46869){
var vec__46870 = p__46869;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46870,(1),null);
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background_color","background_color",-1953390743),null,new cljs.core.Keyword(null,"background-color","background-color",570434026),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k));
}),properties__$1)))));
var properties__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46824_SHARP_){
return (cljs.core.second(p1__46824_SHARP_) == null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46878){
var vec__46880 = p__46878;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46880,(1),null);
var k__$1 = clojure.string.replace(clojure.string.replace(clojure.string.lower_case(cljs.core.name(k))," ","-"),"_","-");
var k__$2 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["custom-id",null,"custom_id",null], null), null),k__$1))?"id":k__$1);
var v__$1 = ((cljs.core.coll_QMARK_(v))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,v):((clojure.string.blank_QMARK_(v))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k__$2),new cljs.core.Keyword(null,"file-path","file-path",-2005501162))) && (clojure.string.starts_with_QMARK_(v,"file:"))))?v:logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$4(format,k__$2,v,user_config)
)));
var k__$3 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k__$2);
var v__$2 = ((((typeof v__$1 === 'string') && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,new cljs.core.Keyword(null,"aliases","aliases",1346874714),null], null), null),k__$3))))?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1], null)):v__$1);
var v__$3 = ((cljs.core.coll_QMARK_(v__$2))?cljs.core.set(v__$2):v__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$3,v__$3], null);
}),properties__$1));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,properties__$2),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,properties__$2),new cljs.core.Keyword(null,"page-refs","page-refs",1204379971),page_refs], null);
} else {
return null;
}
});
logseq.graph_parser.block.paragraph_timestamp_block_QMARK_ = (function logseq$graph_parser$block$paragraph_timestamp_block_QMARK_(block){
return ((logseq.graph_parser.block.paragraph_block_QMARK_(block)) && (((logseq.graph_parser.block.timestamp_block_QMARK_(cljs.core.first(cljs.core.second(block)))) || (logseq.graph_parser.block.timestamp_block_QMARK_(cljs.core.second(cljs.core.second(block)))))));
});
logseq.graph_parser.block.extract_timestamps = (function logseq$graph_parser$block$extract_timestamps(block){
var G__46900 = cljs.core.second(block);
var G__46900__$1 = (((G__46900 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.block.timestamp_block_QMARK_,G__46900));
var G__46900__$2 = (((G__46900__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,G__46900__$1));
if((G__46900__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46900__$2);
}
});
logseq.graph_parser.block.timestamps__GT_scheduled_and_deadline = (function logseq$graph_parser$block$timestamps__GT_scheduled_and_deadline(timestamps){
var timestamps__$1 = cljs.core.update_keys(timestamps,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.lower_case));
var m = (function (){var G__46902 = cljs.core.select_keys(timestamps__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"deadline","deadline",628964572)], null));
if((G__46902 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46903){
var vec__46904 = p__46903;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46904,(1),null);
var map__46907 = v;
var map__46907__$1 = cljs.core.__destructure_map(map__46907);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46907__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46907__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115));
var map__46908 = date;
var map__46908__$1 = cljs.core.__destructure_map(map__46908);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46908__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46908__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46908__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var day__$1 = parseInt([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),logseq.graph_parser.util.zero_pad(month),logseq.graph_parser.util.zero_pad(day)].join(''));
var G__46923 = (function (){var G__46924 = k;
var G__46924__$1 = (((G__46924 instanceof cljs.core.Keyword))?G__46924.fqn:null);
switch (G__46924__$1) {
case "scheduled":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),day__$1], null);

break;
case "deadline":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deadline","deadline",628964572),day__$1], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46924__$1)].join('')));

}
})();
if(cljs.core.truth_(repetition)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46923,new cljs.core.Keyword(null,"repeated?","repeated?",-1169980868),true);
} else {
return G__46923;
}
}),G__46902);
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,m);
});
/**
 * Convert journal file name to user' custom date format
 */
logseq.graph_parser.block.convert_page_if_journal = (function logseq$graph_parser$block$convert_page_if_journal(original_page_name,date_formatter){
if(cljs.core.truth_(original_page_name)){
var page_name = logseq.graph_parser.util.page_name_sanity_lc(original_page_name);
var day = logseq.graph_parser.date_time_util.journal_title__GT_int(page_name,logseq.graph_parser.date_time_util.safe_journal_title_formatters(date_formatter));
if(cljs.core.truth_(day)){
var original_page_name__$1 = logseq.graph_parser.date_time_util.int__GT_journal_title(day,date_formatter);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_page_name__$1,logseq.graph_parser.util.page_name_sanity_lc(original_page_name__$1),day], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_page_name,page_name,day], null);
}
} else {
return null;
}
});
/**
 * Create a page's map structure given a original page name (string).
 * map as input is supported for legacy compatibility.
 * with-timestamp?: assign timestampes to the map structure.
 *  Useful when creating new pages from references or namespaces,
 *  as there's no chance to introduce timestamps via editing in page
 */
logseq.graph_parser.block.page_name__GT_map = (function logseq$graph_parser$block$page_name__GT_map(original_page_name,with_id_QMARK_,db,with_timestamp_QMARK_,date_formatter){
if(cljs.core.truth_((function (){var and__5041__auto__ = original_page_name;
if(cljs.core.truth_(and__5041__auto__)){
return typeof original_page_name === 'string';
} else {
return and__5041__auto__;
}
})())){
var original_page_name__$1 = logseq.graph_parser.util.remove_boundary_slashes(original_page_name);
var vec__46945 = logseq.graph_parser.block.convert_page_if_journal(original_page_name__$1,date_formatter);
var original_page_name__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46945,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46945,(1),null);
var journal_day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46945,(2),null);
var namespace_QMARK_ = (((!(cljs.core.boolean$(logseq.graph_parser.text.get_nested_page_name(original_page_name__$2))))) && (logseq.graph_parser.text.namespace_page_QMARK_(original_page_name__$2)));
var page_entity = (function (){var G__46953 = db;
if((G__46953 == null)){
return null;
} else {
var G__46955 = G__46953;
var G__46956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__46955,G__46956) : datascript.core.entity.call(null,G__46955,G__46956));
}
})();
var original_page_name__$3 = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_entity);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return original_page_name__$2;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),original_page_name__$3], null),(cljs.core.truth_(with_id_QMARK_)?(cljs.core.truth_(page_entity)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),datascript.core.squuid.cljs$core$IFn$_invoke$arity$0()], null)):null),((namespace_QMARK_)?(function (){var namespace = cljs.core.first(logseq.graph_parser.util.split_last("/",original_page_name__$3));
if(clojure.string.blank_QMARK_(namespace)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.graph_parser.util.page_name_sanity_lc(namespace)], null)], null);
}
})():null),(cljs.core.truth_((function (){var and__5041__auto__ = with_timestamp_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(page_entity);
} else {
return and__5041__auto__;
}
})())?(function (){var current_ms = logseq.graph_parser.date_time_util.time_ms();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),current_ms,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),current_ms], null);
})():null),(cljs.core.truth_(journal_day)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),journal_day], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","journal?","block/journal?",-970683127),false], null))], 0));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(original_page_name);
if(and__5041__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(original_page_name);
} else {
return and__5041__auto__;
}
})())){
return original_page_name;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(original_page_name);
if(and__5041__auto__){
return with_id_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original_page_name,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),datascript.core.squuid.cljs$core$IFn$_invoke$arity$0());
} else {
return null;

}
}
}
});
logseq.graph_parser.block.with_page_refs = (function logseq$graph_parser$block$with_page_refs(p__46974,with_id_QMARK_,supported_formats,db,date_formatter){
var map__46976 = p__46974;
var map__46976__$1 = cljs.core.__destructure_map(map__46976);
var block = map__46976__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var refs__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(tags,refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker,priority], null)], 0))));
var refs__$2 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(refs__$1);
clojure.walk.prewalk((function (form){
if(((cljs.core.vector_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),"Custom")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),"query")))))){
return null;
} else {
var temp__5720__auto___47469 = logseq.graph_parser.block.get_page_reference(form,supported_formats);
if(cljs.core.truth_(temp__5720__auto___47469)){
var page_47470 = temp__5720__auto___47469;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(refs__$2,cljs.core.conj,page_47470);
} else {
}

var temp__5720__auto___47471 = logseq.graph_parser.block.get_tag(form);
if(cljs.core.truth_(temp__5720__auto___47471)){
var tag_47472 = temp__5720__auto___47471;
var tag_47473__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(tag_47472);
if(cljs.core.truth_(logseq.graph_parser.util.tag_valid_QMARK_(tag_47473__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(refs__$2,cljs.core.conj,tag_47473__$1);
} else {
}
} else {
}

return form;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title,body));

var refs__$3 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.deref(refs__$2));
var children_pages = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p){
var p__$1 = ((cljs.core.map_QMARK_(p))?new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(p):p);
if(typeof p__$1 === 'string'){
var p__$2 = (function (){var or__5043__auto__ = logseq.graph_parser.text.get_nested_page_name(p__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return p__$1;
}
})();
if(logseq.graph_parser.text.namespace_page_QMARK_(p__$2)){
return logseq.graph_parser.util.split_namespace_pages(p__$2);
} else {
return null;
}
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([refs__$3], 0))));
var refs__$4 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(refs__$3,children_pages)));
var refs__$5 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
return logseq.graph_parser.block.page_name__GT_map(ref,with_id_QMARK_,db,true,date_formatter);
}),refs__$4);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"refs","refs",-1560051448),refs__$5);
});
logseq.graph_parser.block.with_block_refs = (function logseq$graph_parser$block$with_block_refs(p__46999){
var map__47001 = p__46999;
var map__47001__$1 = cljs.core.__destructure_map(map__47001);
var block = map__47001__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47001__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47001__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ref_blocks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.walk.postwalk((function (form){
var temp__5720__auto___47477 = logseq.graph_parser.block.get_block_reference(form);
if(cljs.core.truth_(temp__5720__auto___47477)){
var block_47478__$1 = temp__5720__auto___47477;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ref_blocks,cljs.core.conj,block_47478__$1);
} else {
}

return form;
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title,body));

var ref_blocks__$1 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block__$1){
var temp__5720__auto__ = cljs.core.parse_uuid(block__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
} else {
return null;
}
}),cljs.core.deref(ref_blocks));
var refs = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(block),ref_blocks__$1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"refs","refs",-1560051448),refs);
});
logseq.graph_parser.block.block_keywordize = (function logseq$graph_parser$block$block_keywordize(block){
return cljs.core.update_keys(block,(function (k){
if(cljs.core.truth_(cljs.core.namespace(k))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("block",k);
}
}));
});
logseq.graph_parser.block.sanity_blocks_data = (function logseq$graph_parser$block$sanity_blocks_data(blocks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
if(cljs.core.map_QMARK_(block)){
return logseq.graph_parser.block.block_keywordize(logseq.graph_parser.util.remove_nils(block));
} else {
return block;
}
}),blocks);
});
logseq.graph_parser.block.with_path_refs = (function logseq$graph_parser$block$with_path_refs(blocks){
var blocks__$1 = blocks;
var acc = cljs.core.PersistentVector.EMPTY;
var parents = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(blocks__$1)){
return acc;
} else {
var block = cljs.core.first(blocks__$1);
var cur_level = new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block);
var level_diff = (cur_level - cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.last(parents),new cljs.core.Keyword("block","level","block/level",1182509971),(0)));
var vec__47069 = (((level_diff === (0)))?(function (){var path_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parents)], 0));
var parents__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(parents)),block);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_refs,parents__$1], null);
})():(((level_diff > (0)))?(function (){var path_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_refs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,block)], null);
})():(((level_diff < (0)))?(function (){var parents__$1 = cljs.core.vec(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,acc,parents,block,cur_level,level_diff){
return (function (p){
return (new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(p) < cur_level);
});})(blocks__$1,acc,parents,block,cur_level,level_diff))
,parents));
var path_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents__$1], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_refs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents__$1,block)], null);
})():null)));
var path_refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47069,(0),null);
var parents__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47069,(1),null);
var path_ref_pages = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,acc,parents,block,cur_level,level_diff,vec__47069,path_refs,parents__$1){
return (function (ref){
if(typeof ref === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.graph_parser.util.page_name_sanity_lc(ref)], null);
} else {
return ref;
}
});})(blocks__$1,acc,parents,block,cur_level,level_diff,vec__47069,path_refs,parents__$1))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,acc,parents,block,cur_level,level_diff,vec__47069,path_refs,parents__$1){
return (function (ref){
if(cljs.core.map_QMARK_(ref)){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref);
} else {
return ref;

}
});})(blocks__$1,acc,parents,block,cur_level,level_diff,vec__47069,path_refs,parents__$1))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),path_refs)))))));
var G__47480 = cljs.core.rest(blocks__$1);
var G__47481 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),path_ref_pages));
var G__47482 = parents__$1;
blocks__$1 = G__47480;
acc = G__47481;
parents = G__47482;
continue;
}
break;
}
});
logseq.graph_parser.block.block_tags__GT_pages = (function logseq$graph_parser$block$block_tags__GT_pages(p__47092){
var map__47093 = p__47092;
var map__47093__$1 = cljs.core.__destructure_map(map__47093);
var block = map__47093__$1;
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47093__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
if(cljs.core.seq(tags)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
var tag__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(tag);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.graph_parser.util.page_name_sanity_lc(tag__$1)], null);
}),tags));
} else {
return block;
}
});
logseq.graph_parser.block.get_block_content = (function logseq$graph_parser$block$get_block_content(utf8_content,block,format,meta,block_pattern){
var content = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"end_pos","end_pos",-1418940).cljs$core$IFn$_invoke$arity$1(meta);
if(cljs.core.truth_(temp__5718__auto__)){
var end_pos = temp__5718__auto__;
return logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(utf8_content,new cljs.core.Keyword(null,"start_pos","start_pos",272375959).cljs$core$IFn$_invoke$arity$1(meta),end_pos);
} else {
return logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$2(utf8_content,new cljs.core.Keyword(null,"start_pos","start_pos",272375959).cljs$core$IFn$_invoke$arity$1(meta));
}
})();
var content__$1 = (cljs.core.truth_(content)?(function (){var content__$1 = logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3(content,format,block_pattern);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"pre-block?","pre-block?",-1762448460).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"org","org",1495985));
}
})())){
return content__$1;
} else {
return logseq.graph_parser.mldoc.remove_indentation_spaces(content__$1,(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block) + (1)),false);
}
})():null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985))){
return content__$1;
} else {
return logseq.graph_parser.property.__GT_new_properties(content__$1);
}
});
logseq.graph_parser.block.get_custom_id_or_new_id = (function logseq$graph_parser$block$get_custom_id_or_new_id(properties){
var or__5043__auto__ = (function (){var temp__5720__auto__ = (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"custom-id","custom-id",-615733336)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"custom_id","custom_id",834948303)], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var custom_id = temp__5720__auto__;
var temp__5720__auto____$1 = (function (){var and__5041__auto__ = typeof custom_id === 'string';
if(and__5041__auto__){
return clojure.string.trim(custom_id);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var custom_id__$1 = temp__5720__auto____$1;
var G__47118 = custom_id__$1;
if((G__47118 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__47118);
}
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();
}
});
logseq.graph_parser.block.get_page_refs_from_properties = (function logseq$graph_parser$block$get_page_refs_from_properties(properties,db,date_formatter){
var page_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (v){
if(cljs.core.coll_QMARK_(v)){
return v;
} else {
if(logseq.graph_parser.text.page_ref_QMARK_(v)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.text.page_ref_un_brackets_BANG_(v)], null);
} else {
return null;

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(properties)], 0));
var page_refs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,page_refs);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return logseq.graph_parser.block.page_name__GT_map(page,true,db,true,date_formatter);
}),page_refs__$1);
});
logseq.graph_parser.block.with_page_block_refs = (function logseq$graph_parser$block$with_page_block_refs(block,with_id_QMARK_,supported_formats,db,date_formatter){
var G__47135 = block;
var G__47135__$1 = (((G__47135 == null))?null:logseq.graph_parser.block.with_page_refs(G__47135,with_id_QMARK_,supported_formats,db,date_formatter));
var G__47135__$2 = (((G__47135__$1 == null))?null:logseq.graph_parser.block.with_block_refs(G__47135__$1));
var G__47135__$3 = (((G__47135__$2 == null))?null:logseq.graph_parser.block.block_tags__GT_pages(G__47135__$2));
if((G__47135__$3 == null)){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47135__$3,new cljs.core.Keyword(null,"refs","refs",-1560051448),(function (col){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,col);
}));
}
});
logseq.graph_parser.block.with_pre_block_if_exists = (function logseq$graph_parser$block$with_pre_block_if_exists(blocks,body,pre_block_properties,encoded_content,p__47146){
var map__47147 = p__47146;
var map__47147__$1 = cljs.core.__destructure_map(map__47147);
var supported_formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47147__$1,new cljs.core.Keyword(null,"supported-formats","supported-formats",2085828616));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47147__$1,new cljs.core.Keyword(null,"db","db",993250759));
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47147__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var first_block = cljs.core.first(blocks);
var first_block_start_pos = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(first_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword(null,"start_pos","start_pos",272375959)], null));
var blocks__$1 = (((((first_block_start_pos > (0))) || (cljs.core.empty_QMARK_(blocks))))?cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var content = logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(encoded_content,(0),first_block_start_pos);
var map__47154 = pre_block_properties;
var map__47154__$1 = cljs.core.__destructure_map(map__47154);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47154__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var properties_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47154__$1,new cljs.core.Keyword(null,"properties-order","properties-order",-768725444));
var id = logseq.graph_parser.block.get_custom_id_or_new_id(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),properties], null));
var property_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),logseq.graph_parser.block.get_page_refs_from_properties(properties,db,date_formatter));
var block = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"unordered","unordered",-731655096),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"refs","refs",-1560051448),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"pre-block?","pre-block?",-1762448460),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444)],[properties,true,content,property_refs,(1),true,id,body,properties_order]);
var block__$1 = logseq.graph_parser.block.with_page_block_refs(block,false,supported_formats,db,date_formatter);
return logseq.graph_parser.block.block_keywordize(block__$1);
})(),cljs.core.select_keys(first_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","page","block/page",822314108)], null))], 0)),blocks):blocks);
return logseq.graph_parser.block.with_path_refs(blocks__$1);
});
logseq.graph_parser.block.construct_block = (function logseq$graph_parser$block$construct_block(block,properties,timestamps,body,encoded_content,format,pos_meta,with_id_QMARK_,p__47175){
var map__47176 = p__47175;
var map__47176__$1 = cljs.core.__destructure_map(map__47176);
var block_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47176__$1,new cljs.core.Keyword(null,"block-pattern","block-pattern",297259959));
var supported_formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47176__$1,new cljs.core.Keyword(null,"supported-formats","supported-formats",2085828616));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47176__$1,new cljs.core.Keyword(null,"db","db",993250759));
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47176__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var id = logseq.graph_parser.block.get_custom_id_or_new_id(properties);
var ref_pages_in_properties = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.Keyword(null,"page-refs","page-refs",1204379971).cljs$core$IFn$_invoke$arity$1(properties));
var block__$1 = cljs.core.second(block);
var unordered_QMARK_ = new cljs.core.Keyword(null,"unordered","unordered",-731655096).cljs$core$IFn$_invoke$arity$1(block__$1);
var markdown_heading_QMARK_ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),format);
} else {
return and__5041__auto__;
}
})();
var block__$2 = (cljs.core.truth_(markdown_heading_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"level","level",1290497552),(cljs.core.truth_(unordered_QMARK_)?new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(block__$1):(1)),new cljs.core.Keyword(null,"heading-level","heading-level",563433452),(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (6);
}
})()], 0)):block__$1);
var block__$3 = (function (){var G__47188 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"refs","refs",-1560051448),ref_pages_in_properties,new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"meta","meta",1499536964),pos_meta], 0));
var G__47188__$1 = ((cljs.core.seq(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47188,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties)):G__47188);
if(cljs.core.seq(new cljs.core.Keyword(null,"properties-order","properties-order",-768725444).cljs$core$IFn$_invoke$arity$1(properties))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47188__$1,new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444).cljs$core$IFn$_invoke$arity$1(properties));
} else {
return G__47188__$1;
}
})();
var block__$4 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)], null)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$3,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true),new cljs.core.Keyword(null,"properties","properties",685819552),(function (m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523));
})),new cljs.core.Keyword(null,"properties-order","properties-order",-768725444),(function (keys){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null], null), null),keys));
})):block__$3);
var block__$5 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$4,new cljs.core.Keyword(null,"content","content",15833224),logseq.graph_parser.block.get_block_content(encoded_content,block__$4,format,pos_meta,block_pattern));
var block__$6 = ((cljs.core.seq(timestamps))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$5,logseq.graph_parser.block.timestamps__GT_scheduled_and_deadline(timestamps)], 0)):block__$5);
var block__$7 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$6,new cljs.core.Keyword(null,"body","body",-2049205669),body);
var block__$8 = logseq.graph_parser.block.with_page_block_refs(block__$7,with_id_QMARK_,supported_formats,db,date_formatter);
var map__47181 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(properties);
var map__47181__$1 = cljs.core.__destructure_map(map__47181);
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47181__$1,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336));
var block__$9 = (function (){var G__47205 = block__$8;
var G__47205__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = created_at;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.integer_QMARK_(created_at);
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47205,new cljs.core.Keyword("block","created-at","block/created-at",1440015),created_at):G__47205);
if(cljs.core.truth_((function (){var and__5041__auto__ = updated_at;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.integer_QMARK_(updated_at);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47205__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),updated_at);
} else {
return G__47205__$1;
}
})();
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$9,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], 0));
});
/**
 * Extract headings from mldoc ast.
 *   Args:
 *  `blocks`: mldoc ast.
 *  `content`: markdown or org-mode text.
 *  `with-id?`: If `with-id?` equals to true, all the referenced pages will have new db ids.
 *  `format`: content's format, it could be either :markdown or :org-mode.
 *  `options`: Options supported are :user-config, :block-pattern :supported-formats,
 *   :date-formatter and :db
 */
logseq.graph_parser.block.extract_blocks = (function logseq$graph_parser$block$extract_blocks(blocks,content,with_id_QMARK_,format,p__47221){
var map__47222 = p__47221;
var map__47222__$1 = cljs.core.__destructure_map(map__47222);
var options = map__47222__$1;
var user_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47222__$1,new cljs.core.Keyword(null,"user-config","user-config",-1138679827));
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(typeof content === 'string'){
} else {
throw (new Error("Assert failed: (string? content)"));
}

if(cljs.core.boolean_QMARK_(with_id_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? with-id?)"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"org","org",1495985),null], null), null),format)){
} else {
throw (new Error("Assert failed: (contains? #{:markdown :org} format)"));
}

try{var encoded_content = logseq.graph_parser.utf8.encode(content);
var vec__47244 = (function (){var headings = cljs.core.PersistentVector.EMPTY;
var blocks__$1 = cljs.core.reverse(blocks);
var timestamps = cljs.core.PersistentArrayMap.EMPTY;
var properties = cljs.core.PersistentArrayMap.EMPTY;
var body = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(blocks__$1)){
var vec__47250 = cljs.core.first(blocks__$1);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47250,(0),null);
var pos_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47250,(1),null);
var pos_meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pos_meta,new cljs.core.Keyword(null,"end_pos","end_pos",-1418940),((cljs.core.seq(headings))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.last(headings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"start_pos","start_pos",272375959)], null)):null));
if(logseq.graph_parser.block.paragraph_timestamp_block_QMARK_(block)){
var timestamps__$1 = logseq.graph_parser.block.extract_timestamps(block);
var timestamps_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timestamps__$1,timestamps__$1], 0));
var G__47495 = headings;
var G__47496 = cljs.core.rest(blocks__$1);
var G__47497 = timestamps_SINGLEQUOTE_;
var G__47498 = properties;
var G__47499 = body;
headings = G__47495;
blocks__$1 = G__47496;
timestamps = G__47497;
properties = G__47498;
body = G__47499;
continue;
} else {
if(logseq.graph_parser.property.properties_ast_QMARK_(block)){
var properties__$1 = logseq.graph_parser.block.extract_properties(format,cljs.core.second(block),user_config);
var G__47500 = headings;
var G__47501 = cljs.core.rest(blocks__$1);
var G__47502 = timestamps;
var G__47503 = properties__$1;
var G__47504 = body;
headings = G__47500;
blocks__$1 = G__47501;
timestamps = G__47502;
properties = G__47503;
body = G__47504;
continue;
} else {
if(logseq.graph_parser.block.heading_block_QMARK_(block)){
var block__$1 = logseq.graph_parser.block.construct_block(block,properties,timestamps,body,encoded_content,format,pos_meta__$1,with_id_QMARK_,options);
var G__47505 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(headings,block__$1);
var G__47506 = cljs.core.rest(blocks__$1);
var G__47507 = cljs.core.PersistentArrayMap.EMPTY;
var G__47508 = cljs.core.PersistentArrayMap.EMPTY;
var G__47509 = cljs.core.PersistentVector.EMPTY;
headings = G__47505;
blocks__$1 = G__47506;
timestamps = G__47507;
properties = G__47508;
body = G__47509;
continue;
} else {
var G__47510 = headings;
var G__47511 = cljs.core.rest(blocks__$1);
var G__47512 = timestamps;
var G__47513 = properties;
var G__47514 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,block);
headings = G__47510;
blocks__$1 = G__47511;
timestamps = G__47512;
properties = G__47513;
body = G__47514;
continue;

}
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.block.sanity_blocks_data(cljs.core.reverse(headings)),body,properties], null);
}
break;
}
})();
var blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47244,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47244,(1),null);
var pre_block_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47244,(2),null);
var result = logseq.graph_parser.block.with_pre_block_if_exists(blocks__$1,body,pre_block_properties,encoded_content,options);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47218_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47218_SHARP_,new cljs.core.Keyword("block","meta","block/meta",1064819153));
}),result);
}catch (e47243){var e = e47243;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.graph-parser.block",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extract-blocks-failure","extract-blocks-failure",1291342332),e,new cljs.core.Keyword(null,"line","line",212345235),587], null)),null);
}});
logseq.graph_parser.block.with_parent_and_left = (function logseq$graph_parser$block$with_parent_and_left(page_id,blocks){
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block));
}),blocks);
var parents = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("page","id","page/id",-1375529051),page_id,new cljs.core.Keyword("block","level","block/level",1182509971),(0),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765),(0)], null)], null);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(blocks__$1)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,parents,result){
return (function (p1__47253_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47253_SHARP_,new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765));
});})(blocks__$1,parents,result))
,result);
} else {
var vec__47267 = blocks__$1;
var seq__47268 = cljs.core.seq(vec__47267);
var first__47269 = cljs.core.first(seq__47268);
var seq__47268__$1 = cljs.core.next(seq__47268);
var block = first__47269;
var others = seq__47268__$1;
var level_spaces = new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(block);
var map__47270 = cljs.core.last(parents);
var map__47270__$1 = cljs.core.__destructure_map(map__47270);
var last_parent = map__47270__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47270__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47270__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47270__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var parent_spaces = new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(last_parent);
var vec__47271 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_spaces,parent_spaces))?(function (){var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null),new cljs.core.Keyword("block","level","block/level",1182509971),level], 0));
var parents_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(parents)),block__$1);
var result_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [others,parents_SINGLEQUOTE_,result_SINGLEQUOTE_], null);
})():(((level_spaces > parent_spaces))?(function (){var parent__$1 = (cljs.core.truth_(uuid)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null):new cljs.core.Keyword("page","id","page/id",-1375529051).cljs$core$IFn$_invoke$arity$1(last_parent));
var block__$1 = (function (){var G__47274 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),parent__$1], 0));
if(((level_spaces - parent_spaces) >= (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47274,new cljs.core.Keyword("block","level","block/level",1182509971),(level + (1)));
} else {
return G__47274;
}
})();
var parents_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,block__$1);
var result_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [others,parents_SINGLEQUOTE_,result_SINGLEQUOTE_], null);
})():(((level_spaces < parent_spaces))?(cljs.core.truth_(cljs.core.some(((function (blocks__$1,parents,result,vec__47267,seq__47268,first__47269,seq__47268__$1,block,others,level_spaces,map__47270,map__47270__$1,last_parent,uuid,level,parent,parent_spaces){
return (function (p1__47254_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(p1__47254_SHARP_),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(block));
});})(blocks__$1,parents,result,vec__47267,seq__47268,first__47269,seq__47268__$1,block,others,level_spaces,map__47270,map__47270__$1,last_parent,uuid,level,parent,parent_spaces))
,parents))?(function (){var parents_SINGLEQUOTE_ = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (blocks__$1,parents,result,vec__47267,seq__47268,first__47269,seq__47268__$1,block,others,level_spaces,map__47270,map__47270__$1,last_parent,uuid,level,parent,parent_spaces){
return (function (p){
return (new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(p) <= level_spaces);
});})(blocks__$1,parents,result,vec__47267,seq__47268,first__47269,seq__47268__$1,block,others,level_spaces,map__47270,map__47270__$1,last_parent,uuid,level,parent,parent_spaces))
,parents));
var left = cljs.core.last(parents_SINGLEQUOTE_);
var blocks__$2 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(blocks__$1),new cljs.core.Keyword("block","level","block/level",1182509971),(level - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(left)], null)], 0)),cljs.core.rest(blocks__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks__$2,parents_SINGLEQUOTE_,result], null);
})():(function (){var vec__47283 = cljs.core.split_with(((function (blocks__$1,parents,result,vec__47267,seq__47268,first__47269,seq__47268__$1,block,others,level_spaces,map__47270,map__47270__$1,last_parent,uuid,level,parent,parent_spaces){
return (function (p){
return (new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(p) <= level_spaces);
});})(blocks__$1,parents,result,vec__47267,seq__47268,first__47269,seq__47268__$1,block,others,level_spaces,map__47270,map__47270__$1,last_parent,uuid,level,parent,parent_spaces))
,parents);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47283,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47283,(1),null);
var left = cljs.core.first(r);
var parent_id = (function (){var temp__5718__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.last(f));
if(cljs.core.truth_(temp__5718__auto__)){
var block_id = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
} else {
return page_id;
}
})();
var block__$1 = (function (){var G__47286 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(left)], null),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765),new cljs.core.Keyword("block","level-spaces","block/level-spaces",-683391765).cljs$core$IFn$_invoke$arity$1(left)], 0));
return G__47286;
})();
var parents_SINGLEQUOTE_ = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1], null)));
var result_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [others,parents_SINGLEQUOTE_,result_SINGLEQUOTE_], null);
})()
):null)));
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47271,(0),null);
var parents__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47271,(1),null);
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47271,(2),null);
var G__47515 = blocks__$2;
var G__47516 = parents__$1;
var G__47517 = result__$1;
blocks__$1 = G__47515;
parents = G__47516;
result = G__47517;
continue;
}
break;
}
});

//# sourceMappingURL=logseq.graph_parser.block.js.map
