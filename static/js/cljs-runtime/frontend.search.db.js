goog.provide('frontend.search.db');
var module$node_modules$fuse_DOT_js$dist$fuse_common=shadow.js.require("module$node_modules$fuse_DOT_js$dist$fuse_common", {});
if((typeof frontend !== 'undefined') && (typeof frontend.search !== 'undefined') && (typeof frontend.search.db !== 'undefined') && (typeof frontend.search.db.indices !== 'undefined')){
} else {
frontend.search.db.indices = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Convert a block to the index for searching
 */
frontend.search.db.block__GT_index = (function frontend$search$db$block__GT_index(p__42585){
var map__42586 = p__42585;
var map__42586__$1 = cljs.core.__destructure_map(map__42586);
var block = map__42586__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42586__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42586__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42586__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var temp__5720__auto__ = frontend.util.search_normalize(content);
if(cljs.core.truth_(temp__5720__auto__)){
var content__$1 = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"content","content",15833224),content__$1], null);
} else {
return null;
}
});
frontend.search.db.build_blocks_indice = (function frontend$search$db$build_blocks_indice(repo){
return cljs_bean.core.__GT_js(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.block__GT_index,(frontend.db.get_all_block_contents.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_all_block_contents.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_all_block_contents.call(null)))));
});
frontend.search.db.make_blocks_indice_BANG_ = (function frontend$search$db$make_blocks_indice_BANG_(repo){
var blocks = frontend.search.db.build_blocks_indice(repo);
var indice = (new module$node_modules$fuse_DOT_js$dist$fuse_common(blocks,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uuid","content","page"], null),new cljs.core.Keyword(null,"shouldSort","shouldSort",-1733947834),true,new cljs.core.Keyword(null,"tokenize","tokenize",1336117716),true,new cljs.core.Keyword(null,"minMatchCharLength","minMatchCharLength",-46930554),(1),new cljs.core.Keyword(null,"distance","distance",-1671893894),(1000),new cljs.core.Keyword(null,"threshold","threshold",204221583),0.35], null))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),indice);

return indice;
});
frontend.search.db.original_page_name__GT_index = (function frontend$search$db$original_page_name__GT_index(p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),frontend.util.search_normalize(p),new cljs.core.Keyword(null,"original-name","original-name",-1427702839),p], null);
});
/**
 * Build a page indice from scratch.
 * Incremental page indice is implemented in frontend.search.sync-search-indice!
 */
frontend.search.db.make_pages_indice_BANG_ = (function frontend$search$db$make_pages_indice_BANG_(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var pages = cljs_bean.core.__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.search.db.original_page_name__GT_index,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,(function (){var G__42587 = frontend.state.get_current_repo();
return (frontend.db.get_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_pages.cljs$core$IFn$_invoke$arity$1(G__42587) : frontend.db.get_pages.call(null,G__42587));
})())));
var indice = (new module$node_modules$fuse_DOT_js$dist$fuse_common(pages,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name"], null),new cljs.core.Keyword(null,"shouldSort","shouldSort",-1733947834),true,new cljs.core.Keyword(null,"tokenize","tokenize",1336117716),true,new cljs.core.Keyword(null,"minMatchCharLength","minMatchCharLength",-46930554),(1),new cljs.core.Keyword(null,"distance","distance",-1671893894),(1000),new cljs.core.Keyword(null,"threshold","threshold",204221583),0.35], null))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"pages","pages",-285406513)], null),indice);

return indice;
} else {
return null;
}
});

//# sourceMappingURL=frontend.search.db.js.map
