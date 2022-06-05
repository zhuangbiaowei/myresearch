goog.provide('logseq.graph_parser.config');
/**
 * Copy of frontend.config/app-name. Too small to couple to main app
 */
logseq.graph_parser.config.app_name = "logseq";
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.config !== 'undefined') && (typeof logseq.graph_parser.config.local_assets_dir !== 'undefined')){
} else {
logseq.graph_parser.config.local_assets_dir = "assets";
}
logseq.graph_parser.config.local_asset_QMARK_ = (function logseq$graph_parser$config$local_asset_QMARK_(s){
return logseq.graph_parser.util.safe_re_find(cljs.core.re_pattern(["^[./]*",logseq.graph_parser.config.local_assets_dir].join('')),s);
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.config !== 'undefined') && (typeof logseq.graph_parser.config.default_draw_directory !== 'undefined')){
} else {
logseq.graph_parser.config.default_draw_directory = "draws";
}
logseq.graph_parser.config.draw_QMARK_ = (function logseq$graph_parser$config$draw_QMARK_(path){
return clojure.string.starts_with_QMARK_(path,logseq.graph_parser.config.default_draw_directory);
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.config !== 'undefined') && (typeof logseq.graph_parser.config.mldoc_support_formats !== 'undefined')){
} else {
logseq.graph_parser.config.mldoc_support_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null);
}
logseq.graph_parser.config.mldoc_support_QMARK_ = (function logseq$graph_parser$config$mldoc_support_QMARK_(format){
return cljs.core.contains_QMARK_(logseq.graph_parser.config.mldoc_support_formats,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format));
});
logseq.graph_parser.config.text_formats = (function logseq$graph_parser$config$text_formats(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 24, [new cljs.core.Keyword(null,"dat","dat",683898592),null,new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"txt","txt",626843688),null,new cljs.core.Keyword(null,"yml","yml",1135976041),null,new cljs.core.Keyword(null,"erl","erl",-1257006295),null,new cljs.core.Keyword(null,"excalidraw","excalidraw",-397772502),null,new cljs.core.Keyword(null,"css","css",1135045163),null,new cljs.core.Keyword(null,"asciidoc","asciidoc",1736965296),null,new cljs.core.Keyword(null,"ts","ts",1617209904),null,new cljs.core.Keyword(null,"rb","rb",1673817808),null,new cljs.core.Keyword(null,"ml","ml",1909675057),null,new cljs.core.Keyword(null,"java","java",1958249105),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"ex","ex",-1413771341),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"php","php",-97199496),null,new cljs.core.Keyword(null,"rst","rst",-824162183),null,new cljs.core.Keyword(null,"json","json",1279968570),null,new cljs.core.Keyword(null,"clj","clj",-660495428),null,new cljs.core.Keyword(null,"adoc","adoc",-1288345346),null,new cljs.core.Keyword(null,"html","html",-998796897),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null);
});
logseq.graph_parser.config.img_formats = (function logseq$graph_parser$config$img_formats(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"bmp","bmp",1866754050),null,new cljs.core.Keyword(null,"png","png",551930691),null,new cljs.core.Keyword(null,"gif","gif",1261828260),null,new cljs.core.Keyword(null,"webp","webp",1501869900),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"jpeg","jpeg",-646816934),null,new cljs.core.Keyword(null,"ico","ico",1994407291),null,new cljs.core.Keyword(null,"jpg","jpg",-1835942949),null], null), null);
});
logseq.graph_parser.config.supported_formats = (function logseq$graph_parser$config$supported_formats(){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.config.text_formats(),logseq.graph_parser.config.img_formats());
});
logseq.graph_parser.config.get_date_formatter = (function logseq$graph_parser$config$get_date_formatter(config){
var or__5043__auto__ = new cljs.core.Keyword("journal","page-title-format","journal/page-title-format",2033061997).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "MMM do, yyyy";
}
}
});
logseq.graph_parser.config.get_block_pattern = (function logseq$graph_parser$config$get_block_pattern(format){
var format_SINGLEQUOTE_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__57363 = format_SINGLEQUOTE_;
var G__57363__$1 = (((G__57363 instanceof cljs.core.Keyword))?G__57363.fqn:null);
switch (G__57363__$1) {
case "org":
return "*";

break;
default:
return "-";

}
});

//# sourceMappingURL=logseq.graph_parser.config.js.map
