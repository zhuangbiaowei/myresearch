goog.provide('frontend.modules.outliner.utils');
frontend.modules.outliner.utils.block_id_QMARK_ = (function frontend$modules$outliner$utils$block_id_QMARK_(id){
return ((typeof id === 'number') || (((typeof id === 'string') || (cljs.core.uuid_QMARK_(id)))));
});
frontend.modules.outliner.utils.check_block_id = (function frontend$modules$outliner$utils$check_block_id(id){
if(frontend.modules.outliner.utils.block_id_QMARK_(id)){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("The id should match block-id?: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0))], 0))),"\n","(block-id? id)"].join('')));
}
});
frontend.modules.outliner.utils.__GT_block_id = (function frontend$modules$outliner$utils$__GT_block_id(id){
if(frontend.modules.outliner.utils.block_id_QMARK_(id)){
return id;
} else {
if(((cljs.core.vector_QMARK_(id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(id),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552))))){
return cljs.core.second(id);
} else {
if(((cljs.core.vector_QMARK_(id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(id),new cljs.core.Keyword("block","name","block/name",1619760316))))){
var conn = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.db.outliner.get_by_id(conn,id));
} else {
if(((datascript.impl.entity.entity_QMARK_(id)) || (cljs.core.map_QMARK_(id)))){
var conn = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.db.outliner.get_by_id(conn,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(id)));
} else {
return null;

}
}
}
}
});
/**
 * 
 *   string? or number?  -> [:block/uuid x]
 *   [:block/uuid x] -> [:block/uuid x]
 *   {:db/id x} -> {:db/id x}
 *   :else -> nil
 *   
 */
frontend.modules.outliner.utils.__GT_block_lookup_ref = (function frontend$modules$outliner$utils$__GT_block_lookup_ref(id){
if(((cljs.core.vector_QMARK_(id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(id),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552))))){
return id;
} else {
if(frontend.modules.outliner.utils.block_id_QMARK_(id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
} else {
if(((datascript.impl.entity.entity_QMARK_(id)) || (cljs.core.map_QMARK_(id)))){
return id;
} else {
return null;

}
}
}
});

//# sourceMappingURL=frontend.modules.outliner.utils.js.map
