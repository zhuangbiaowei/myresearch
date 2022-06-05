goog.provide('logseq.graph_parser.mldoc');
goog.scope(function(){
  logseq.graph_parser.mldoc.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$mldoc$index=shadow.js.require("module$node_modules$mldoc$index", {});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.mldoc !== 'undefined') && (typeof logseq.graph_parser.mldoc.parseJson !== 'undefined')){
} else {
logseq.graph_parser.mldoc.parseJson = logseq.graph_parser.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseJson");
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.mldoc !== 'undefined') && (typeof logseq.graph_parser.mldoc.parseInlineJson !== 'undefined')){
} else {
logseq.graph_parser.mldoc.parseInlineJson = logseq.graph_parser.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseInlineJson");
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.mldoc !== 'undefined') && (typeof logseq.graph_parser.mldoc.astExportMarkdown !== 'undefined')){
} else {
logseq.graph_parser.mldoc.astExportMarkdown = logseq.graph_parser.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"astExportMarkdown");
}
logseq.graph_parser.mldoc.default_references = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"embed_blocks","embed_blocks",785928846),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"embed_pages","embed_pages",94877387),cljs.core.PersistentVector.EMPTY], null)));
logseq.graph_parser.mldoc.convert_export_md_remove_options = (function logseq$graph_parser$mldoc$convert_export_md_remove_options(opts){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (opt){
var G__59121 = opt;
var G__59121__$1 = (((G__59121 instanceof cljs.core.Keyword))?G__59121.fqn:null);
switch (G__59121__$1) {
case "page-ref":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Page_ref"], null);

break;
case "emphasis":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Emphasis"], null);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}),opts));
});
logseq.graph_parser.mldoc.parse_json = (function logseq$graph_parser$mldoc$parse_json(content,config){
return (logseq.graph_parser.mldoc.parseJson.cljs$core$IFn$_invoke$arity$2 ? logseq.graph_parser.mldoc.parseJson.cljs$core$IFn$_invoke$arity$2(content,config) : logseq.graph_parser.mldoc.parseJson.call(null,content,config));
});
logseq.graph_parser.mldoc.inline_parse_json = (function logseq$graph_parser$mldoc$inline_parse_json(text,config){
return (logseq.graph_parser.mldoc.parseInlineJson.cljs$core$IFn$_invoke$arity$2 ? logseq.graph_parser.mldoc.parseInlineJson.cljs$core$IFn$_invoke$arity$2(text,config) : logseq.graph_parser.mldoc.parseInlineJson.call(null,text,config));
});
logseq.graph_parser.mldoc.ast_export_markdown = (function logseq$graph_parser$mldoc$ast_export_markdown(ast,config,references){
var G__59122 = ast;
var G__59123 = config;
var G__59124 = (function (){var or__5043__auto__ = references;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return logseq.graph_parser.mldoc.default_references;
}
})();
return (logseq.graph_parser.mldoc.astExportMarkdown.cljs$core$IFn$_invoke$arity$3 ? logseq.graph_parser.mldoc.astExportMarkdown.cljs$core$IFn$_invoke$arity$3(G__59122,G__59123,G__59124) : logseq.graph_parser.mldoc.astExportMarkdown.call(null,G__59122,G__59123,G__59124));
});
logseq.graph_parser.mldoc.default_config = (function logseq$graph_parser$mldoc$default_config(var_args){
var G__59127 = arguments.length;
switch (G__59127) {
case 1:
return logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1 = (function (format){
return logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-heading-to-list?","export-heading-to-list?",-596132321),false], null));
}));

(logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$2 = (function (format,p__59130){
var map__59131 = p__59130;
var map__59131__$1 = cljs.core.__destructure_map(map__59131);
var export_heading_to_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"export-heading-to-list?","export-heading-to-list?",-596132321));
var export_keep_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"export-keep-properties?","export-keep-properties?",1001383866));
var export_md_indent_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"export-md-indent-style","export-md-indent-style",481813710));
var export_md_remove_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"export-md-remove-options","export-md-remove-options",-1015252352));
var parse_outline_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59131__$1,new cljs.core.Keyword(null,"parse_outline_only?","parse_outline_only?",-731229637));
var format__$1 = clojure.string.capitalize(cljs.core.name((function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})()));
return JSON.stringify(cljs_bean.core.__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59125_SHARP_){
return (!((cljs.core.second(p1__59125_SHARP_) == null)));
}),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"export_md_indent_style","export_md_indent_style",-323704308),new cljs.core.Keyword(null,"exporting_keep_properties","exporting_keep_properties",-955323347),new cljs.core.Keyword(null,"parse_outline_only","parse_outline_only",-1224318063),new cljs.core.Keyword(null,"export_md_remove_options","export_md_remove_options",-1267687277),new cljs.core.Keyword(null,"heading_to_list","heading_to_list",-525406087),new cljs.core.Keyword(null,"heading_number","heading_number",1357313628),new cljs.core.Keyword(null,"keep_line_break","keep_line_break",-1954057059)],[format__$1,false,export_md_indent_style,export_keep_properties_QMARK_,(function (){var or__5043__auto__ = parse_outline_only_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
})(),logseq.graph_parser.mldoc.convert_export_md_remove_options(export_md_remove_options),(function (){var or__5043__auto__ = export_heading_to_list_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
})(),false,true])))));
}));

(logseq.graph_parser.mldoc.default_config.cljs$lang$maxFixedArity = 2);

logseq.graph_parser.mldoc.remove_indentation_spaces = (function logseq$graph_parser$mldoc$remove_indentation_spaces(s,level,remove_first_line_QMARK_){
var lines = clojure.string.split_lines(s);
var vec__59136 = lines;
var seq__59137 = cljs.core.seq(vec__59136);
var first__59138 = cljs.core.first(seq__59137);
var seq__59137__$1 = cljs.core.next(seq__59137);
var f = first__59138;
var r = seq__59137__$1;
var body = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
if(clojure.string.blank_QMARK_(logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(line,(0),level))){
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$2(line,level);
} else {
return line;
}
}),(cljs.core.truth_(remove_first_line_QMARK_)?lines:r));
var content = (cljs.core.truth_(remove_first_line_QMARK_)?body:cljs.core.cons(f,body));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",content);
});
logseq.graph_parser.mldoc.update_src_full_content = (function logseq$graph_parser$mldoc$update_src_full_content(ast,content){
var content__$1 = logseq.graph_parser.utf8.encode(content);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59139){
var vec__59140 = p__59139;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59140,(0),null);
var pos_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59140,(1),null);
if(((cljs.core.vector_QMARK_(block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Src",cljs.core.first(block))))){
var map__59143 = pos_meta;
var map__59143__$1 = cljs.core.__destructure_map(map__59143);
var start_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword(null,"start_pos","start_pos",272375959));
var end_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword(null,"end_pos","end_pos",-1418940));
var content__$2 = logseq.graph_parser.utf8.substring.cljs$core$IFn$_invoke$arity$3(content__$1,start_pos,end_pos);
var spaces = cljs.core.re_find(/^[\t ]+/,cljs.core.first(clojure.string.split_lines(content__$2)));
var content__$3 = (cljs.core.truth_(spaces)?logseq.graph_parser.mldoc.remove_indentation_spaces(content__$2,cljs.core.count(spaces),true):content__$2);
var block__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Src",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.second(block),new cljs.core.Keyword(null,"full_content","full_content",-1214517830),content__$3)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1,pos_meta], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,pos_meta], null);
}
}),ast);
});
logseq.graph_parser.mldoc.__GT_vec = (function logseq$graph_parser$mldoc$__GT_vec(s){
if(typeof s === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return s;
}
});
logseq.graph_parser.mldoc.__GT_vec_concat = (function logseq$graph_parser$mldoc$__GT_vec_concat(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59178 = arguments.length;
var i__5767__auto___59179 = (0);
while(true){
if((i__5767__auto___59179 < len__5766__auto___59178)){
args__5772__auto__.push((arguments[i__5767__auto___59179]));

var G__59180 = (i__5767__auto___59179 + (1));
i__5767__auto___59179 = G__59180;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return logseq.graph_parser.mldoc.__GT_vec_concat.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(logseq.graph_parser.mldoc.__GT_vec_concat.cljs$core$IFn$_invoke$arity$variadic = (function (coll){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.mldoc.__GT_vec,coll))));
}));

(logseq.graph_parser.mldoc.__GT_vec_concat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.graph_parser.mldoc.__GT_vec_concat.cljs$lang$applyTo = (function (seq59144){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59144));
}));

logseq.graph_parser.mldoc.collect_page_properties = (function logseq$graph_parser$mldoc$collect_page_properties(ast,parse_property,config_state){
if(cljs.core.seq(ast)){
var original_ast = ast;
var ast__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ast);
var directive_QMARK_ = (function (p__59148){
var vec__59149 = p__59148;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59149,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59149,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("directive",clojure.string.lower_case(cljs.core.first(item)));
});
var grouped_ast = cljs.core.group_by(directive_QMARK_,original_ast);
var directive_ast = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(directive_QMARK_,original_ast);
var vec__59145 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Property_Drawer",cljs.core.ffirst(ast__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(cljs.core.first(ast__$1)),cljs.core.rest(original_ast)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,directive_ast)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_ast,false)], null));
var properties_ast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59145,(0),null);
var other_ast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59145,(1),null);
var properties = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59152){
var vec__59153 = p__59152;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59153,(1),null);
var k__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k));
var v__$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"filters","filters",974726919),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"macro","macro",-867863404),null], null), null),k__$1))?v:(parse_property.cljs$core$IFn$_invoke$arity$3 ? parse_property.cljs$core$IFn$_invoke$arity$3(k__$1,v,config_state) : parse_property.call(null,k__$1,v,config_state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,v__$1], null);
}),properties_ast);
var properties__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(linked.core.map.cljs$core$IFn$_invoke$arity$0(),properties);
var macro_properties = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),cljs.core.first(x));
}),properties__$1);
var macros = ((cljs.core.seq(macro_properties))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59156){
var vec__59157 = p__59156;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59157,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59157,(1),null);
var vec__59160 = logseq.graph_parser.util.split_first(" ",v);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59160,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59160,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null));
}),macro_properties)):cljs.core.PersistentArrayMap.EMPTY);
var properties__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(linked.core.map.cljs$core$IFn$_invoke$arity$0(),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),cljs.core.first(x));
}),properties__$1));
var properties__$3 = (function (){var G__59163 = properties__$2;
if(cljs.core.seq(macros)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59163,new cljs.core.Keyword(null,"macros","macros",811339431),macros);
} else {
return G__59163;
}
})();
var alias = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(properties__$3);
var alias__$1 = (cljs.core.truth_(alias)?((cljs.core.coll_QMARK_(alias))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,alias):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias], null)):null);
var filetags = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"filetags","filetags",-1157605850).cljs$core$IFn$_invoke$arity$1(properties__$3);
if(cljs.core.truth_(temp__5720__auto__)){
var org_file_tags = temp__5720__auto__;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(org_file_tags,":"));
} else {
return null;
}
})();
var tags = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(properties__$3);
var tags__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,logseq.graph_parser.mldoc.__GT_vec_concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tags,filetags], 0)));
var properties__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(properties__$3,new cljs.core.Keyword(null,"tags","tags",1771418977),tags__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__$1], 0));
var properties__$5 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(properties__$4,new cljs.core.Keyword(null,"filetags","filetags",-1157605850),cljs.core.constantly(filetags));
var properties__$6 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(linked.core.map.cljs$core$IFn$_invoke$arity$0(),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59164){
var vec__59165 = p__59164;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59165,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59165,(1),null);
return (((v == null)) || (((cljs.core.coll_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))));
}),properties__$5));
if(cljs.core.seq(properties__$6)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Properties",properties__$6], null),null], null),other_ast);
} else {
return original_ast;
}
} else {
return ast;
}
});
logseq.graph_parser.mldoc.parse_property = null;
logseq.graph_parser.mldoc.__GT_edn = (function logseq$graph_parser$mldoc$__GT_edn(content,config,config_state){
if(typeof content === 'string'){
try{if(clojure.string.blank_QMARK_(content)){
return cljs.core.PersistentVector.EMPTY;
} else {
return logseq.graph_parser.mldoc.collect_page_properties(logseq.graph_parser.mldoc.update_src_full_content(logseq.graph_parser.util.json__GT_clj(logseq.graph_parser.mldoc.parse_json(content,config)),content),logseq.graph_parser.mldoc.parse_property,config_state);
}
}catch (e59168){var e = e59168;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.graph-parser.mldoc",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unexpected-error","unexpected-error",1973845951),e,new cljs.core.Keyword(null,"line","line",212345235),184], null)),null);

return cljs.core.PersistentVector.EMPTY;
}} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.graph-parser.mldoc",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edn","wrong-content-type","edn/wrong-content-type",-1345928079),content,new cljs.core.Keyword(null,"line","line",212345235),186], null)),null);
}
});
logseq.graph_parser.mldoc.inline__GT_edn = (function logseq$graph_parser$mldoc$inline__GT_edn(text,config){
try{if(clojure.string.blank_QMARK_(text)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return logseq.graph_parser.util.json__GT_clj(logseq.graph_parser.mldoc.inline_parse_json(text,config));
}
}catch (e59169){var _e = e59169;
return cljs.core.PersistentVector.EMPTY;
}});
logseq.graph_parser.mldoc.link_QMARK_ = (function logseq$graph_parser$mldoc$link_QMARK_(format,link){
if(typeof link === 'string'){
var vec__59170 = cljs.core.first(logseq.graph_parser.mldoc.inline__GT_edn(link,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59170,(0),null);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59170,(1),null);
var vec__59173 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(link__$1);
var ref_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59173,(0),null);
var ref_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59173,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Link",type)) && ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Page_ref",null,"Block_ref",null], null), null),ref_type)))) || (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Page_ref",null], null), null),ref_type)) && (((logseq.graph_parser.config.draw_QMARK_(ref_value)) || (cljs.core.boolean$(logseq.graph_parser.config.local_asset_QMARK_(ref_value))))))))));
} else {
return null;
}
});

//# sourceMappingURL=logseq.graph_parser.mldoc.js.map
