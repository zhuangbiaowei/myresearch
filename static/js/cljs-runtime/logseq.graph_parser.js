goog.provide('logseq.graph_parser');
/**
 * Modified copy of frontend.db.model/db-set-file-content!
 */
logseq.graph_parser.db_set_file_content_BANG_ = (function logseq$graph_parser$db_set_file_content_BANG_(conn,path,content){
var tx_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),content], null);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-refresh?","skip-refresh?",878432095),true], null));
});
/**
 * Parse file and save parsed data to the given db. Main parse fn used by logseq app
 */
logseq.graph_parser.parse_file = (function logseq$graph_parser$parse_file(conn,file,content,p__47519){
var map__47520 = p__47519;
var map__47520__$1 = cljs.core.__destructure_map(map__47520);
var options = map__47520__$1;
var new_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47520__$1,new cljs.core.Keyword(null,"new?","new?",777958557),true);
var delete_blocks_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47520__$1,new cljs.core.Keyword(null,"delete-blocks-fn","delete-blocks-fn",586451366),cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
var extract_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47520__$1,new cljs.core.Keyword(null,"extract-options","extract-options",-572164844));
logseq.graph_parser.db_set_file_content_BANG_(conn,file,content);

var format = logseq.graph_parser.util.get_format(file);
var file_content = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),file], null)], null);
var tx = ((cljs.core.contains_QMARK_(logseq.graph_parser.config.mldoc_support_formats,format))?(function (){var extract_options_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block-pattern","block-pattern",297259959),logseq.graph_parser.config.get_block_pattern(format),new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),"MMM do, yyyy",new cljs.core.Keyword(null,"supported-formats","supported-formats",2085828616),logseq.graph_parser.config.supported_formats()], null),extract_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.deref(conn)], null)], 0));
var vec__47521 = logseq.graph_parser.extract.extract_blocks_pages(file,content,extract_options_SINGLEQUOTE_);
var pages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47521,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47521,(1),null);
var delete_blocks = (function (){var G__47524 = cljs.core.first(pages);
var G__47525 = file;
return (delete_blocks_fn.cljs$core$IFn$_invoke$arity$2 ? delete_blocks_fn.cljs$core$IFn$_invoke$arity$2(G__47524,G__47525) : delete_blocks_fn.call(null,G__47524,G__47525));
})();
var block_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
}),blocks);
var block_refs_ids = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.second(ref)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref){
return ((cljs.core.vector_QMARK_(ref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ref))));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0)))));
var block_ids__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(block_ids),cljs.core.set(block_refs_ids));
var pages__$1 = logseq.graph_parser.extract.with_ref_pages(pages,blocks);
var pages_index = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47518_SHARP_){
return cljs.core.select_keys(p1__47518_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316)], null));
}),pages__$1);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(file_content,pages_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delete_blocks,pages__$1,block_ids__$1,blocks], 0));
})():file_content);
var tx__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47526 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),file], null);
if(cljs.core.truth_(new_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47526,new cljs.core.Keyword("file","created-at","file/created-at",-92397056),logseq.graph_parser.date_time_util.time_ms());
} else {
return G__47526;
}
})()], null));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,logseq.graph_parser.util.remove_nils(tx__$1),cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161)], null)));
});
/**
 * Filters files in preparation for parsing. Only includes files that are
 *   supported by parser
 */
logseq.graph_parser.filter_files = (function logseq$graph_parser$filter_files(files){
var support_files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
var format = logseq.graph_parser.util.get_format(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file));
return cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null], null), null),logseq.graph_parser.config.mldoc_support_formats),format);
}),files);
var support_files__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),support_files);
var map__47527 = cljs.core.group_by((function (file){
return clojure.string.includes_QMARK_(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),"journals/");
}),support_files__$1);
var map__47527__$1 = cljs.core.__destructure_map(map__47527);
var journals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47527__$1,true);
var non_journals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47527__$1,false);
var map__47528 = cljs.core.group_by((function (file){
return ((clojure.string.includes_QMARK_(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),"contents.")) || (((clojure.string.includes_QMARK_(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),".edn")) || (clojure.string.includes_QMARK_(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),"custom.css")))));
}),non_journals);
var map__47528__$1 = cljs.core.__destructure_map(map__47528);
var built_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47528__$1,true);
var others = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47528__$1,false);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reverse(journals),built_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([others], 0));
});

//# sourceMappingURL=logseq.graph_parser.js.map
