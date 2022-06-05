goog.provide('frontend.util.property');
frontend.util.property.built_in_extended_properties = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
frontend.util.property.register_built_in_properties = (function frontend$util$property$register_built_in_properties(props){
return cljs.core.reset_BANG_(frontend.util.property.built_in_extended_properties,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.util.property.built_in_extended_properties),props));
});
frontend.util.property.built_in_properties = (function frontend$util$property$built_in_properties(){
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),null,new cljs.core.Keyword(null,"last_modified_at","last_modified_at",-1069251263),null,new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033),null,new cljs.core.Keyword(null,"query-table","query-table",2095143554),null,new cljs.core.Keyword(null,"hl-type","hl-type",992471876),null,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null,new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),null,new cljs.core.Keyword(null,"custom-id","custom-id",-615733336),null,new cljs.core.Keyword(null,"hl-page","hl-page",949012424),null,new cljs.core.Keyword(null,"ls-type","ls-type",1383834313),null,new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),null,new cljs.core.Keyword(null,"background-color","background-color",570434026),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008),null,new cljs.core.Keyword(null,"query-properties","query-properties",-953532199),null,new cljs.core.Keyword(null,"created-at","created-at",-89248644),null,new cljs.core.Keyword(null,"created_at","created_at",1484050750),null,new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,frontend.config.markers)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.set(frontend.config.get_block_hidden_properties()),cljs.core.deref(frontend.util.property.built_in_extended_properties)], 0));
});
frontend.util.property.properties_built_in_QMARK_ = (function frontend$util$property$properties_built_in_QMARK_(properties){
var and__5041__auto__ = cljs.core.seq(properties);
if(and__5041__auto__){
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword,clojure.string.lower_case,cljs.core.name),cljs.core.keys(properties));
var built_in_properties_set = frontend.util.property.built_in_properties();
return cljs.core.every_QMARK_(built_in_properties_set,ks);
} else {
return and__5041__auto__;
}
});
frontend.util.property.remove_empty_properties = (function frontend$util$property$remove_empty_properties(content){
if(cljs.core.truth_(logseq.graph_parser.property.contains_properties_QMARK_(content))){
return clojure.string.replace(content,cljs.core.re_pattern(":PROPERTIES:\n+:END:\n*"),"");
} else {
return content;
}
});
frontend.util.property.simplified_property_QMARK_ = (function frontend$util$property$simplified_property_QMARK_(line){
return cljs.core.boolean$((function (){var and__5041__auto__ = typeof line === 'string';
if(and__5041__auto__){
return frontend.util.safe_re_find(/^\s?[^ ]+:: /,line);
} else {
return and__5041__auto__;
}
})());
});
frontend.util.property.front_matter_property_QMARK_ = (function frontend$util$property$front_matter_property_QMARK_(line){
return cljs.core.boolean$((function (){var and__5041__auto__ = typeof line === 'string';
if(and__5041__auto__){
return frontend.util.safe_re_find(/^\s*[^ ]+: /,line);
} else {
return and__5041__auto__;
}
})());
});
frontend.util.property.get_property_key = (function frontend$util$property$get_property_key(line,format){
var and__5041__auto__ = typeof line === 'string';
if(and__5041__auto__){
var temp__5720__auto__ = cljs.core.last(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985)))?frontend.util.safe_re_find(/^\s*:([^: ]+): /,line):frontend.util.safe_re_find(/^\s*([^ ]+):: /,line)));
if(cljs.core.truth_(temp__5720__auto__)){
var key = temp__5720__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key);
} else {
return null;
}
} else {
return and__5041__auto__;
}
});
frontend.util.property.org_property_QMARK_ = (function frontend$util$property$org_property_QMARK_(line){
return cljs.core.boolean$((function (){var and__5041__auto__ = typeof line === 'string';
if(and__5041__auto__){
var and__5041__auto____$1 = frontend.util.safe_re_find(/^\s*:[^: ]+: /,line);
if(cljs.core.truth_(and__5041__auto____$1)){
var temp__5720__auto__ = frontend.util.property.get_property_key(line,new cljs.core.Keyword(null,"org","org",1495985));
if(cljs.core.truth_(temp__5720__auto__)){
var key = temp__5720__auto__;
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"PROPERTIES","PROPERTIES",1607656426),null,new cljs.core.Keyword(null,"END","END",-1810083115),null], null), null),key)));
} else {
return null;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})());
});
frontend.util.property.get_org_property_keys = (function frontend$util$property$get_org_property_keys(content){
var content_lines = clojure.string.split_lines(content);
var vec__74329 = cljs.core.split_with((function (p1__74326_SHARP_){
return (!(clojure.string.starts_with_QMARK_(clojure.string.upper_case(clojure.string.triml(p1__74326_SHARP_)),logseq.graph_parser.property.properties_start)));
}),content_lines);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74329,(0),null);
var properties_AMPERSAND_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74329,(1),null);
var properties = cljs.core.rest(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__74327_SHARP_){
return (((!(clojure.string.starts_with_QMARK_(clojure.string.upper_case(clojure.string.trim(p1__74327_SHARP_)),logseq.graph_parser.property.properties_end)))) || (clojure.string.blank_QMARK_(p1__74327_SHARP_)));
}),properties_AMPERSAND_body));
if(cljs.core.seq(properties)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74328_SHARP_){
return clojure.string.upper_case(cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__74328_SHARP_,":"))));
}),properties);
} else {
return null;
}
});
frontend.util.property.get_markdown_property_keys = (function frontend$util$property$get_markdown_property_keys(content){
var content_lines = clojure.string.split_lines(content);
var properties = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74332_SHARP_){
return cljs.core.re_matches(/^.+::\s*.+/,p1__74332_SHARP_);
}),content_lines);
if(cljs.core.seq(properties)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74333_SHARP_){
return clojure.string.upper_case(cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__74333_SHARP_,"::"))));
}),properties);
} else {
return null;
}
});
frontend.util.property.get_property_keys = (function frontend$util$property$get_property_keys(format,content){
if(cljs.core.truth_(logseq.graph_parser.property.contains_properties_QMARK_(content))){
return frontend.util.property.get_org_property_keys(content);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),format)){
return frontend.util.property.get_markdown_property_keys(content);
} else {
return null;
}
}
});
frontend.util.property.property_key_exist_QMARK_ = (function frontend$util$property$property_key_exist_QMARK_(format,content,key){
var key__$1 = clojure.string.upper_case(key);
return cljs.core.contains_QMARK_(cljs.core.set(frontend.util.remove_first(cljs.core.PersistentHashSet.createAsIfByAssoc([key__$1]),frontend.util.property.get_property_keys(format,content))),key__$1);
});
frontend.util.property.goto_properties_end = (function frontend$util$property$goto_properties_end(_format,input){
frontend.util.cursor.move_cursor_to_thing.cljs$core$IFn$_invoke$arity$3(input,logseq.graph_parser.property.properties_start,(0));

var from = frontend.util.cursor.pos(input);
return frontend.util.cursor.move_cursor_to_thing.cljs$core$IFn$_invoke$arity$3(input,logseq.graph_parser.property.properties_end,from);
});
frontend.util.property.remove_properties = (function frontend$util$property$remove_properties(format,content){
if(cljs.core.truth_(logseq.graph_parser.property.contains_properties_QMARK_(content))){
var lines = clojure.string.split_lines(content);
var vec__74342 = cljs.core.split_with((function (p1__74340_SHARP_){
return (!(clojure.string.starts_with_QMARK_(clojure.string.upper_case(clojure.string.triml(p1__74340_SHARP_)),logseq.graph_parser.property.properties_start)));
}),lines);
var title_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74342,(0),null);
var properties_AMPERSAND_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74342,(1),null);
var body = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__74341_SHARP_){
return (((!(clojure.string.starts_with_QMARK_(clojure.string.upper_case(clojure.string.trim(p1__74341_SHARP_)),logseq.graph_parser.property.properties_end)))) || (clojure.string.blank_QMARK_(p1__74341_SHARP_)));
}),properties_AMPERSAND_body);
var body__$1 = ((((cljs.core.seq(body)) && (clojure.string.starts_with_QMARK_(clojure.string.upper_case(clojure.string.triml(cljs.core.first(body))),logseq.graph_parser.property.properties_end))))?(function (){var line = clojure.string.replace(cljs.core.first(body),/:END:\s?/i,"");
if(clojure.string.blank_QMARK_(line)){
return cljs.core.rest(body);
} else {
return cljs.core.cons(line,cljs.core.rest(body));
}
})():body);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title_lines,body__$1));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985))){
var lines = clojure.string.split_lines(content);
var lines__$1 = ((frontend.util.property.simplified_property_QMARK_(cljs.core.first(lines)))?cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(frontend.util.property.simplified_property_QMARK_,lines):cljs.core.cons(cljs.core.first(lines),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(frontend.util.property.simplified_property_QMARK_,cljs.core.rest(lines))));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
} else {
return content;

}
}
});
frontend.util.property.build_properties_str = (function frontend$util$property$build_properties_str(format,properties){
if(cljs.core.seq(properties)){
var org_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
var kv_format = ((org_QMARK_)?":%s: %s":"%s:: %s");
var full_format = ((org_QMARK_)?":PROPERTIES:\n%s\n:END:":"%s\n");
var properties_content = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74360){
var vec__74362 = p__74360;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74362,(1),null);
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(kv_format,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k),v], 0));
}),properties));
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(full_format,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties_content], 0));
} else {
return null;
}
});
frontend.util.property.with_built_in_properties = (function frontend$util$property$with_built_in_properties(properties,content,format){
var org_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
var properties__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__74367){
var vec__74368 = p__74367;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74368,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74368,(1),null);
var fexpr__74371 = frontend.util.property.built_in_properties();
return (fexpr__74371.cljs$core$IFn$_invoke$arity$1 ? fexpr__74371.cljs$core$IFn$_invoke$arity$1(k) : fexpr__74371.call(null,k));
}),properties);
if(cljs.core.seq(properties__$1)){
var lines = clojure.string.split_lines(content);
var ast = frontend.format.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var vec__74372 = ((frontend.format.mldoc.block_with_title_QMARK_(cljs.core.first(cljs.core.ffirst(ast))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(lines),cljs.core.rest(lines)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74372,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74372,(1),null);
var properties_in_content_QMARK_ = (function (){var and__5041__auto__ = title;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(title),logseq.graph_parser.property.properties_start);
} else {
return and__5041__auto__;
}
})();
var no_title_QMARK_ = (function (){var or__5043__auto__ = frontend.util.property.simplified_property_QMARK_(title);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return properties_in_content_QMARK_;
}
})();
var properties_AMPERSAND_body = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__5041__auto__ = no_title_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (!(org_QMARK_));
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null):null),(cljs.core.truth_((function (){var and__5041__auto__ = org_QMARK_;
if(and__5041__auto__){
return properties_in_content_QMARK_;
} else {
return and__5041__auto__;
}
})())?cljs.core.rest(body):body));
var map__74375 = cljs.core.group_by((function (s){
return ((frontend.util.property.simplified_property_QMARK_(s)) || (((org_QMARK_) && (frontend.util.property.org_property_QMARK_(s)))));
}),properties_AMPERSAND_body);
var map__74375__$1 = cljs.core.__destructure_map(map__74375);
var properties_lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74375__$1,true);
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74375__$1,false);
var body__$2 = ((org_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([logseq.graph_parser.property.properties_start,logseq.graph_parser.property.properties_end]),clojure.string.trim(s));
}),body__$1):body__$1);
var properties_in_content = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74365_SHARP_){
return frontend.util.property.get_property_key(p1__74365_SHARP_,format);
}),properties_lines)));
var properties__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(properties_in_content,cljs.core.first),properties__$1);
var built_in_properties_area = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74398){
var vec__74400 = p__74398;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74400,(1),null);
if(org_QMARK_){
return [":",cljs.core.name(k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
} else {
return [cljs.core.name(k),":: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}
}),properties__$2);
var body__$3 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(no_title_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null)),((org_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.property.properties_start], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([built_in_properties_area,properties_lines,((org_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.property.properties_end], null):null),body__$2], 0));
return clojure.string.triml(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",body__$3));
} else {
return content;
}
});
frontend.util.property.front_matter_QMARK_ = (function frontend$util$property$front_matter_QMARK_(s){
return clojure.string.starts_with_QMARK_(s,"---\n");
});
/**
 * Only accept nake content (without any indentation)
 */
frontend.util.property.insert_property = (function frontend$util$property$insert_property(var_args){
var G__74435 = arguments.length;
switch (G__74435) {
case 4:
return frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4 = (function (format,content,key,value){
return frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$5(format,content,key,value,false);
}));

(frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$5 = (function (format,content,key,value,front_matter_QMARK_){
if(typeof content === 'string'){
var ast = frontend.format.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var title_QMARK_ = frontend.format.mldoc.block_with_title_QMARK_(cljs.core.ffirst(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ast)));
var has_properties_QMARK_ = ((((title_QMARK_) && (((frontend.format.mldoc.properties_QMARK_(cljs.core.second(ast))) || (frontend.format.mldoc.properties_QMARK_(cljs.core.second(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__74439){
var vec__74440 = p__74439;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74440,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74440,(1),null);
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Raw_Html",null,"Hiccup",null], null), null),cljs.core.first(x));
}),ast)))))))) || (frontend.format.mldoc.properties_QMARK_(cljs.core.first(ast))));
var lines = clojure.string.split_lines(content);
var vec__74436 = ((title_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(lines),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.rest(lines))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines)], null));
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74436,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74436,(1),null);
var scheduled = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74428_SHARP_){
return clojure.string.starts_with_QMARK_(p1__74428_SHARP_,"SCHEDULED");
}),lines);
var deadline = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74429_SHARP_){
return clojure.string.starts_with_QMARK_(p1__74429_SHARP_,"DEADLINE");
}),lines);
var body_without_timestamps = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74430_SHARP_){
return (!(((clojure.string.starts_with_QMARK_(p1__74430_SHARP_,"SCHEDULED")) || (clojure.string.starts_with_QMARK_(p1__74430_SHARP_,"DEADLINE")))));
}),clojure.string.split_lines(body));
var org_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),format);
var key__$1 = clojure.string.lower_case(cljs.core.name(key));
var value__$1 = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
var start_idx = lines.indexOf(logseq.graph_parser.property.properties_start);
var end_idx = lines.indexOf(logseq.graph_parser.property.properties_end);
var result = ((((org_QMARK_) && ((!(has_properties_QMARK_)))))?(function (){var properties = frontend.util.property.build_properties_str(format,cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,value__$1]));
if(cljs.core.truth_(title)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null),scheduled,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deadline,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [properties], null),body_without_timestamps], 0)));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(properties),"\n",content].join('');
}
})():((((has_properties_QMARK_) && ((((start_idx >= (0))) && ((((end_idx > (0))) && ((end_idx > start_idx))))))))?(function (){var exists_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var before = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,(0),start_idx);
var middle = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (text){
var vec__74443 = logseq.graph_parser.util.split_first(":",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1)));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74443,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = k;
if(cljs.core.truth_(and__5041__auto__)){
return v;
} else {
return and__5041__auto__;
}
})())){
var key_exists_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,key__$1);
var _ = ((key_exists_QMARK_)?cljs.core.reset_BANG_(exists_QMARK_,true):null);
var v__$1 = ((key_exists_QMARK_)?value__$1:v);
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),": ",clojure.string.trim(v__$1)].join('');
} else {
return text;
}
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,(start_idx + (1)),end_idx)));
var middle__$1 = (cljs.core.truth_(cljs.core.deref(exists_QMARK_))?middle:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(middle,[":",key__$1,": ",value__$1].join('')));
var after = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(lines,(end_idx + (1)));
var lines__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.property.properties_start], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([middle__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.property.properties_end], null),after], 0));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
})():(((!(org_QMARK_)))?(function (){var exists_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var sym = (cljs.core.truth_(front_matter_QMARK_)?": ":":: ");
var new_property_s = [key__$1,sym,value__$1].join('');
var property_f = (cljs.core.truth_(front_matter_QMARK_)?frontend.util.property.front_matter_property_QMARK_:frontend.util.property.simplified_property_QMARK_);
var groups = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(property_f,lines);
var compose_lines = (function (){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (lines__$1){
if(cljs.core.truth_((function (){var G__74446 = cljs.core.first(lines__$1);
return (property_f.cljs$core$IFn$_invoke$arity$1 ? property_f.cljs$core$IFn$_invoke$arity$1(G__74446) : property_f.call(null,G__74446));
})())){
var lines__$2 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (text){
var vec__74447 = logseq.graph_parser.util.split_first(sym,text);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74447,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74447,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = k;
if(cljs.core.truth_(and__5041__auto__)){
return v;
} else {
return and__5041__auto__;
}
})())){
var key_exists_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,key__$1);
var _ = ((key_exists_QMARK_)?cljs.core.reset_BANG_(exists_QMARK_,true):null);
var v__$1 = ((key_exists_QMARK_)?value__$1:v);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),sym,clojure.string.trim(v__$1)].join('');
} else {
return text;
}
}),lines__$1));
var lines__$3 = (cljs.core.truth_(cljs.core.deref(exists_QMARK_))?lines__$2:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines__$2,new_property_s));
return lines__$3;
} else {
return lines__$1;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([groups], 0));
});
var lines__$1 = ((has_properties_QMARK_)?compose_lines():((title_QMARK_)?cljs.core.cons(cljs.core.first(lines),cljs.core.cons(new_property_s,cljs.core.rest(lines))):cljs.core.cons(new_property_s,lines)
));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
})():content
)));
return clojure.string.trimr(result);
} else {
return null;
}
}));

(frontend.util.property.insert_property.cljs$lang$maxFixedArity = 5);

frontend.util.property.insert_properties = (function frontend$util$property$insert_properties(format,content,kvs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,p__74450){
var vec__74451 = p__74450;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74451,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74451,(1),null);
var k__$1 = ((typeof k === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(k)," ","-")):k);
var v__$1 = ((cljs.core.coll_QMARK_(v))?(function (){var G__74454 = cljs.core.seq(v);
var G__74454__$1 = (((G__74454 == null))?null:cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(G__74454));
var G__74454__$2 = (((G__74454__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.text.page_ref_un_brackets_BANG_(item)], 0));
}),G__74454__$1));
if((G__74454__$2 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",G__74454__$2);
}
})():v);
return frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format,content__$1,k__$1,v__$1);
}),content,kvs);
});
frontend.util.property.remove_property = (function frontend$util$property$remove_property(var_args){
var G__74456 = arguments.length;
switch (G__74456) {
case 3:
return frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3 = (function (format,key,content){
return frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$4(format,key,content,true);
}));

(frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$4 = (function (format,key,content,first_QMARK_){
if((!(clojure.string.blank_QMARK_(cljs.core.name(key))))){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})();
var key__$1 = clojure.string.lower_case(cljs.core.name(key));
var remove_f = (cljs.core.truth_(first_QMARK_)?frontend.util.remove_first:cljs.core.remove);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format__$1,new cljs.core.Keyword(null,"org","org",1495985))) && (cljs.core.not(logseq.graph_parser.property.contains_properties_QMARK_(content))))){
return content;
} else {
var lines = (function (){var G__74457 = (function (line){
var s = clojure.string.triml(clojure.string.lower_case(line));
return ((clojure.string.starts_with_QMARK_(s,[":",key__$1,":"].join(''))) || (clojure.string.starts_with_QMARK_(s,[key__$1,":: "].join(''))));
});
var G__74458 = clojure.string.split_lines(content);
return (remove_f.cljs$core$IFn$_invoke$arity$2 ? remove_f.cljs$core$IFn$_invoke$arity$2(G__74457,G__74458) : remove_f.call(null,G__74457,G__74458));
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines);
}
} else {
return null;
}
}));

(frontend.util.property.remove_property.cljs$lang$maxFixedArity = 4);

frontend.util.property.remove_id_property = (function frontend$util$property$remove_id_property(format,content){
return frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$4(format,"id",content,false);
});
frontend.util.property.remove_built_in_properties = (function frontend$util$property$remove_built_in_properties(format,content){
var built_in_properties_STAR_ = frontend.util.property.built_in_properties();
var content__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,key){
return frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,key,content__$1);
}),content,built_in_properties_STAR_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985))){
return clojure.string.replace_first(content__$1,cljs.core.re_pattern(":PROPERTIES:\n:END:\n*"),"");
} else {
return content__$1;
}
});
frontend.util.property.add_page_properties = (function frontend$util$property$add_page_properties(page_format,properties_content,properties){
var properties__$1 = cljs.core.update_keys(properties,cljs.core.name);
var lines = clojure.string.split_lines(properties_content);
var front_matter_format_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null], null), null),page_format);
var lines__$1 = ((front_matter_format_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"---",null], null), null),clojure.string.trim(line));
}),lines):lines);
var property_keys = cljs.core.keys(properties__$1);
var prefix_f = (function (){var G__74460 = page_format;
var G__74460__$1 = (((G__74460 instanceof cljs.core.Keyword))?G__74460.fqn:null);
switch (G__74460__$1) {
case "org":
return (function (k){
return ["#+",clojure.string.upper_case(k),": "].join('');
});

break;
case "markdown":
return (function (k){
return [clojure.string.lower_case(k),": "].join('');
});

break;
default:
return cljs.core.identity;

}
})();
var exists_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var lines__$2 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (line){
var result = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74459_SHARP_){
var and__5041__auto__ = p1__74459_SHARP_;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.starts_with_QMARK_(line,(prefix_f.cljs$core$IFn$_invoke$arity$1 ? prefix_f.cljs$core$IFn$_invoke$arity$1(p1__74459_SHARP_) : prefix_f.call(null,p1__74459_SHARP_)));
} else {
return and__5041__auto__;
}
}),property_keys);
if(cljs.core.seq(result)){
var k = cljs.core.first(result);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(exists_QMARK_,cljs.core.conj,k);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((prefix_f.cljs$core$IFn$_invoke$arity$1 ? prefix_f.cljs$core$IFn$_invoke$arity$1(k) : prefix_f.call(null,k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties__$1,k))].join('');
} else {
return line;
}
}),lines__$1));
var lines__$3 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lines__$2,(function (){var not_exists = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__74462){
var vec__74463 = p__74462;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74463,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74463,(1),null);
return cljs.core.contains_QMARK_(cljs.core.deref(exists_QMARK_),k);
}),properties__$1);
if(cljs.core.seq(not_exists)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__74467){
var vec__74468 = p__74467;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74468,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((prefix_f.cljs$core$IFn$_invoke$arity$1 ? prefix_f.cljs$core$IFn$_invoke$arity$1(k) : prefix_f.call(null,k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),not_exists);
} else {
return null;
}
})());
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(frontend.config.properties_wrapper_pattern(page_format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$3)], 0));
});

//# sourceMappingURL=frontend.util.property.js.map
