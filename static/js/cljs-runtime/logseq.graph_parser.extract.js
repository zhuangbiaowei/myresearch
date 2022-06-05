goog.provide('logseq.graph_parser.extract');
logseq.graph_parser.extract.get_page_name = (function logseq$graph_parser$extract$get_page_name(file,ast,page_name_order){
var ast__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ast);
if(clojure.string.includes_QMARK_(file,"pages/contents.")){
return "Contents";
} else {
var first_block = cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.block.heading_block_QMARK_,ast__$1)));
var property_name = ((((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Property_Drawer",null,"Properties",null], null), null),cljs.core.ffirst(ast__$1))) && ((!(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.first(ast__$1)))))))))?new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.first(ast__$1))):null);
var first_block_name = (function (){var title = cljs.core.last(cljs.core.first(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(first_block)));
var and__5041__auto__ = first_block;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = typeof title === 'string';
if(and__5041__auto____$1){
return title;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
var file_name = (function (){var temp__5720__auto__ = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,/\//));
if(cljs.core.truth_(temp__5720__auto__)){
var file_name = temp__5720__auto__;
var result = cljs.core.first(logseq.graph_parser.util.split_last(".",file_name));
if(logseq.graph_parser.config.mldoc_support_QMARK_(clojure.string.lower_case(logseq.graph_parser.util.get_file_ext(file)))){
return decodeURIComponent(clojure.string.replace(result,".","/"));
} else {
return result;
}
} else {
return null;
}
})();
var or__5043__auto__ = property_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name_order,"heading")){
var or__5043__auto____$1 = first_block_name;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return file_name;
}
} else {
var or__5043__auto____$1 = file_name;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return first_block_name;
}
}
}
}
});
logseq.graph_parser.extract.build_page_entity = (function logseq$graph_parser$extract$build_page_entity(properties,file,page_name,page,ref_tags,p__47475){
var map__47476 = p__47475;
var map__47476__$1 = cljs.core.__destructure_map(map__47476);
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47476__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47476__$1,new cljs.core.Keyword(null,"db","db",993250759));
var alias = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(properties);
var alias__$1 = ((typeof alias === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias], null):alias);
var aliases = (function (){var and__5041__auto__ = alias__$1;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47474_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name,logseq.graph_parser.util.page_name_sanity_lc(p1__47474_SHARP_))) || (clojure.string.blank_QMARK_(p1__47474_SHARP_)));
}),alias__$1));
} else {
return and__5041__auto__;
}
})();
var aliases__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (alias__$2){
var page_name__$1 = logseq.graph_parser.util.page_name_sanity_lc(alias__$2);
var aliases__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([alias__$2]),aliases),page));
var aliases__$2 = ((cljs.core.seq(aliases__$1))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (alias__$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.graph_parser.util.page_name_sanity_lc(alias__$3)], null);
}),aliases__$1):null);
if(cljs.core.seq(aliases__$2)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1,new cljs.core.Keyword("block","alias","block/alias",-2112644699),aliases__$2], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
}
}),aliases));
var G__47479 = logseq.graph_parser.util.remove_nils(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.graph_parser.block.page_name__GT_map(page,false,db,true,date_formatter),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(file)], null)));
var G__47479__$1 = ((cljs.core.seq(properties))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47479,new cljs.core.Keyword("block","properties","block/properties",708347145),properties):G__47479);
var G__47479__$2 = ((cljs.core.seq(aliases__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47479__$1,new cljs.core.Keyword("block","alias","block/alias",-2112644699),aliases__$1):G__47479__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(properties))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47479__$2,new cljs.core.Keyword("block","tags","block/tags",1814948340),(function (){var tags = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(properties);
var tags__$1 = ((typeof tags === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tags], null):tags);
var tags__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,tags__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ref_tags,clojure.set.union,cljs.core.set(tags__$2));

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.graph_parser.util.page_name_sanity_lc(tag),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),tag], null);
}),tags__$2);
})());
} else {
return G__47479__$2;
}
});
logseq.graph_parser.extract.extract_pages_and_blocks = (function logseq$graph_parser$extract$extract_pages_and_blocks(format,ast,properties,file,content,p__47483){
var map__47484 = p__47483;
var map__47484__$1 = cljs.core.__destructure_map(map__47484);
var options = map__47484__$1;
var date_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47484__$1,new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709));
var page_name_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47484__$1,new cljs.core.Keyword(null,"page-name-order","page-name-order",-1625414065));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47484__$1,new cljs.core.Keyword(null,"db","db",993250759));
try{var page = logseq.graph_parser.extract.get_page_name(file,ast,page_name_order);
var vec__47486 = logseq.graph_parser.block.convert_page_if_journal(page,date_formatter);
var _original_page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47486,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47486,(1),null);
var _journal_day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47486,(2),null);
var blocks = logseq.graph_parser.block.with_parent_and_left(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null),logseq.graph_parser.block.extract_blocks(ast,content,false,format,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"page-name-order","page-name-order",-1625414065))));
var ref_pages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var ref_tags = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var block_ref_pages = cljs.core.seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block));
var page_lookup_ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
var block_path_ref_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.cons(page_lookup_ref,cljs.core.seq(new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1(block))));
if(block_ref_pages){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ref_pages,clojure.set.union,cljs.core.set(block_ref_pages));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword(null,"ref-pages","ref-pages",3688243)),new cljs.core.Keyword("block","format","block/format",-1212045901),format,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),block_ref_pages,new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),block_path_ref_pages], 0));
}),blocks);
var page_entity = logseq.graph_parser.extract.build_page_entity(properties,file,page_name,page,ref_tags,options);
var namespace_pages = (function (){var page__$1 = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_entity);
if(logseq.graph_parser.text.namespace_page_QMARK_(page__$1)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page__$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.graph_parser.block.page_name__GT_map(page__$2,true,db,true,date_formatter),new cljs.core.Keyword("block","format","block/format",-1212045901),format);
}),logseq.graph_parser.util.split_namespace_pages(page__$1));
} else {
return null;
}
})();
var pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_entity], null),cljs.core.deref(ref_pages),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page__$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),page__$1,new cljs.core.Keyword("block","name","block/name",1619760316),logseq.graph_parser.util.page_name_sanity_lc(page__$1)], null);
}),cljs.core.deref(ref_tags)),namespace_pages], 0))));
var pages__$1 = logseq.graph_parser.util.distinct_by(new cljs.core.Keyword("block","name","block/name",1619760316),pages);
var pages__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,pages__$1);
var pages__$3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),datascript.core.squuid.cljs$core$IFn$_invoke$arity$0());
}),pages__$2);
var blocks__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b,new cljs.core.Keyword("block","title","block/title",710445684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","body","block/body",2004112880),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword("block","anchor","block/anchor",1325786860)], 0));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages__$3,blocks__$2], null);
}catch (e47485){var e = e47485;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.graph-parser.extract",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),139], null)),e);
}});
logseq.graph_parser.extract.extract_blocks_pages = (function logseq$graph_parser$extract$extract_blocks_pages(file,content,p__47489){
var map__47490 = p__47489;
var map__47490__$1 = cljs.core.__destructure_map(map__47490);
var options = map__47490__$1;
var user_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47490__$1,new cljs.core.Keyword(null,"user-config","user-config",-1138679827));
var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47490__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
if(clojure.string.blank_QMARK_(content)){
return cljs.core.PersistentVector.EMPTY;
} else {
var format = logseq.graph_parser.util.get_format(file);
var _ = (cljs.core.truth_(verbose)?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Parsing start: ",file], 0)):null);
var ast = logseq.graph_parser.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format),user_config);
if(cljs.core.truth_(verbose)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Parsing finished: ",file], 0));
} else {
}

var first_block = cljs.core.ffirst(ast);
var properties = (function (){var properties = (function (){var and__5041__auto__ = logseq.graph_parser.property.properties_ast_QMARK_(first_block);
if(and__5041__auto__){
return clojure.walk.keywordize_keys(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47491){
var vec__47492 = p__47491;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47492,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47492,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((((typeof y === 'string') && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"file-path","file-path",-2005501162))) && (clojure.string.starts_with_QMARK_(y,"file:"))))))))?logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$4(format,x,y,user_config):y)], null);
}),cljs.core.last(first_block))));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = properties;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(properties);
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(properties))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"filters","filters",974726919),(function (v){
return clojure.string.replace((function (){var or__5043__auto__ = v;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),"\\","");
}));
} else {
return properties;
}
} else {
return null;
}
})();
return logseq.graph_parser.extract.extract_pages_and_blocks(format,ast,properties,file,content,options);
}
});
logseq.graph_parser.extract.with_block_uuid = (function logseq$graph_parser$extract$with_block_uuid(pages){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))){
return page;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),datascript.core.squuid.cljs$core$IFn$_invoke$arity$0());
}
}),logseq.graph_parser.util.distinct_by(new cljs.core.Keyword("block","name","block/name",1619760316),pages));
});
logseq.graph_parser.extract.with_ref_pages = (function logseq$graph_parser$extract$with_ref_pages(pages,blocks){
var ref_pages = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0)));
return logseq.graph_parser.extract.with_block_uuid(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.merge),cljs.core.vals(cljs.core.group_by(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pages,ref_pages)))));
});
(logseq.graph_parser.mldoc.parse_property = logseq.graph_parser.text.parse_property);

//# sourceMappingURL=logseq.graph_parser.extract.js.map
