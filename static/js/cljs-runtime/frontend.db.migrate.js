goog.provide('frontend.db.migrate');
frontend.db.migrate.get_collapsed_blocks = (function frontend$db$migrate$get_collapsed_blocks(db){
var G__73874 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)),new cljs.core.Symbol(null,"?collapsed","?collapsed",4745616,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,new cljs.core.Symbol(null,"?collapsed","?collapsed",4745616,null))], null)], null);
var G__73875 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__73874,G__73875) : datascript.core.q.call(null,G__73874,G__73875));
});
frontend.db.migrate.migrate = (function frontend$db$migrate$migrate(db){
if(cljs.core.truth_(db)){
var collapsed_blocks = frontend.db.migrate.get_collapsed_blocks(db);
if(cljs.core.seq(collapsed_blocks)){
var tx_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),true], null);
}),collapsed_blocks);
return datascript.core.db_with(db,tx_data);
} else {
return db;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.db.migrate.js.map
