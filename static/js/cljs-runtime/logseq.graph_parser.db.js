goog.provide('logseq.graph_parser.db');
/**
 * Create datascript conn with schema and default data
 */
logseq.graph_parser.db.start_conn = (function logseq$graph_parser$db$start_conn(){
var db_conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.db.schema.schema);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db_conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("schema","version","schema/version",1396190655),logseq.graph_parser.db.schema.version], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","name","block/name",1619760316),"card",new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),"card",new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),datascript.core.squuid.cljs$core$IFn$_invoke$arity$0()], null)], null));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db_conn,logseq.graph_parser.db.default$.built_in_pages);

return db_conn;
});

//# sourceMappingURL=logseq.graph_parser.db.js.map
