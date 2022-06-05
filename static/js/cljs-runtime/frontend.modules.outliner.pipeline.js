goog.provide('frontend.modules.outliner.pipeline');
frontend.modules.outliner.pipeline.updated_page_hook = (function frontend$modules$outliner$pipeline$updated_page_hook(_tx_report,page){
return frontend.modules.outliner.file.sync_to_file(page);
});
frontend.modules.outliner.pipeline.invoke_hooks = (function frontend$modules$outliner$pipeline$invoke_hooks(tx_report){
var map__48543 = frontend.modules.datascript_report.core.get_blocks_and_pages(tx_report);
var map__48543__$1 = cljs.core.__destructure_map(map__48543);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48543__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48543__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)))){
} else {
var seq__48544_48548 = cljs.core.seq(cljs.core.seq(pages));
var chunk__48545_48549 = null;
var count__48546_48550 = (0);
var i__48547_48551 = (0);
while(true){
if((i__48547_48551 < count__48546_48550)){
var p_48552 = chunk__48545_48549.cljs$core$IIndexed$_nth$arity$2(null,i__48547_48551);
frontend.modules.outliner.pipeline.updated_page_hook(tx_report,p_48552);


var G__48553 = seq__48544_48548;
var G__48554 = chunk__48545_48549;
var G__48555 = count__48546_48550;
var G__48556 = (i__48547_48551 + (1));
seq__48544_48548 = G__48553;
chunk__48545_48549 = G__48554;
count__48546_48550 = G__48555;
i__48547_48551 = G__48556;
continue;
} else {
var temp__5720__auto___48557 = cljs.core.seq(seq__48544_48548);
if(temp__5720__auto___48557){
var seq__48544_48558__$1 = temp__5720__auto___48557;
if(cljs.core.chunked_seq_QMARK_(seq__48544_48558__$1)){
var c__5565__auto___48559 = cljs.core.chunk_first(seq__48544_48558__$1);
var G__48560 = cljs.core.chunk_rest(seq__48544_48558__$1);
var G__48561 = c__5565__auto___48559;
var G__48562 = cljs.core.count(c__5565__auto___48559);
var G__48563 = (0);
seq__48544_48548 = G__48560;
chunk__48545_48549 = G__48561;
count__48546_48550 = G__48562;
i__48547_48551 = G__48563;
continue;
} else {
var p_48564 = cljs.core.first(seq__48544_48558__$1);
frontend.modules.outliner.pipeline.updated_page_hook(tx_report,p_48564);


var G__48565 = cljs.core.next(seq__48544_48558__$1);
var G__48566 = null;
var G__48567 = (0);
var G__48568 = (0);
seq__48544_48548 = G__48565;
chunk__48545_48549 = G__48566;
count__48546_48550 = G__48567;
i__48547_48551 = G__48568;
continue;
}
} else {
}
}
break;
}
}

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(blocks);
} else {
return and__5041__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","hook-db-tx","plugin/hook-db-tx",1065547419),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)], null)], null));
} else {
return null;
}
});

//# sourceMappingURL=frontend.modules.outliner.pipeline.js.map
