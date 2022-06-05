goog.provide('frontend.modules.outliner.datascript');
frontend.modules.outliner.datascript.new_outliner_txs_state = (function frontend$modules$outliner$datascript$new_outliner_txs_state(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
});
frontend.modules.outliner.datascript.outliner_txs_state_QMARK_ = (function frontend$modules$outliner$datascript$outliner_txs_state_QMARK_(state){
return (((state instanceof cljs.core.Atom)) && (cljs.core.coll_QMARK_(cljs.core.deref(state))));
});
frontend.modules.outliner.datascript.after_transact_pipelines = (function frontend$modules$outliner$datascript$after_transact_pipelines(repo,p__48591){
var map__48592 = p__48591;
var map__48592__$1 = cljs.core.__destructure_map(map__48592);
var tx_report = map__48592__$1;
var _db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48592__$1,new cljs.core.Keyword(null,"_db-before","_db-before",1857235147));
var _db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48592__$1,new cljs.core.Keyword(null,"_db-after","_db-after",-1808574796));
var _tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48592__$1,new cljs.core.Keyword(null,"_tx-data","_tx-data",-169400406));
var _tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48592__$1,new cljs.core.Keyword(null,"_tempids","_tempids",2126372359));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48592__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
if(frontend.config.test_QMARK_){
return null;
} else {
frontend.modules.outliner.pipeline.invoke_hooks(tx_report);

if(cljs.core.truth_(new cljs.core.Keyword("outliner","transact?","outliner/transact?",-1753370954).cljs$core$IFn$_invoke$arity$1(tx_meta))){
frontend.modules.editor.undo_redo.listen_outliner_operation(tx_report);
} else {
}

return frontend.search.sync_search_indice_BANG_(repo,tx_report);
}
});
frontend.modules.outliner.datascript.remove_nil_from_transaction = (function frontend$modules$outliner$datascript$remove_nil_from_transaction(txs){
var G__48595 = logseq.graph_parser.util.remove_nils(txs);
if((G__48595 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.update_vals(x,(function (v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,v);
} else {
return v;
}
}));
} else {
return x;
}
}),G__48595);
}
});
frontend.modules.outliner.datascript.transact_BANG_ = (function frontend$modules$outliner$datascript$transact_BANG_(txs,opts){
var txs__$1 = frontend.modules.outliner.datascript.remove_nil_from_transaction(txs);
var txs__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword("block","top?","block/top?",-1838733025),new cljs.core.Keyword("block","bottom?","block/bottom?",-1886197289),new cljs.core.Keyword("block","anchor","block/anchor",1325786860),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","body","block/body",2004112880),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","container","block/container",510671002),new cljs.core.Keyword("db","other-tx","db/other-tx",337296620)], 0));
} else {
return m;
}
}),txs__$1);
if(((cljs.core.seq(txs__$2)) && (cljs.core.not(new cljs.core.Keyword(null,"skip-transact?","skip-transact?",-1820887310).cljs$core$IFn$_invoke$arity$1(opts))))){
try{var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo());
var conn = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo,false);
var editor_cursor = frontend.state.get_current_edit_block_and_position();
var meta = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800),editor_cursor], null)], 0));
var rs = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,txs__$2,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword("outliner","transact?","outliner/transact?",-1753370954),true));
var eids_48621 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(rs)));
var left_AMPERSAND_parent_list_48622 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.next,cljs.core.vec((function (){var G__48614 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?l","?l",550795544,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Symbol(null,"?l","?l",550795544,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__48615 = cljs.core.deref(conn);
var G__48616 = eids_48621;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__48614,G__48615,G__48616) : datascript.core.q.call(null,G__48614,G__48615,G__48616));
})()));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(left_AMPERSAND_parent_list_48622),cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(left_AMPERSAND_parent_list_48622)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(eids_48621),"\n","(= (count left&parent-list) (count (distinct left&parent-list)))"].join('')));
}


return rs;
}catch (e48612){if((e48612 instanceof Error)){
var e = e48612;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.outliner.datascript",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),78], null)),e);

throw e;
} else {
throw e48612;

}
}} else {
return null;
}
});

//# sourceMappingURL=frontend.modules.outliner.datascript.js.map
