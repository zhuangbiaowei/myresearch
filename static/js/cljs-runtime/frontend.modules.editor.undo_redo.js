goog.provide('frontend.modules.editor.undo_redo');
frontend.modules.editor.undo_redo.undo_redo_states = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.modules.editor.undo_redo.get_state = (function frontend$modules$editor$undo_redo$get_state(){
var repo = frontend.state.get_current_repo();
if(typeof repo === 'string'){
} else {
throw (new Error(["Assert failed: ","Repo should satisfy string?","\n","(string? repo)"].join('')));
}

var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.editor.undo_redo.undo_redo_states),repo);
if(cljs.core.truth_(temp__5718__auto__)){
var state = temp__5718__auto__;
return state;
} else {
var new_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.modules.editor.undo_redo.undo_redo_states,cljs.core.assoc,repo,new_state);

return new_state;
}
});
frontend.modules.editor.undo_redo.get_undo_stack = (function frontend$modules$editor$undo_redo$get_undo_stack(){
return new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892).cljs$core$IFn$_invoke$arity$1(frontend.modules.editor.undo_redo.get_state());
});
frontend.modules.editor.undo_redo.get_redo_stack = (function frontend$modules$editor$undo_redo$get_redo_stack(){
return new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191).cljs$core$IFn$_invoke$arity$1(frontend.modules.editor.undo_redo.get_state());
});
frontend.modules.editor.undo_redo.push_undo = (function frontend$modules$editor$undo_redo$push_undo(txs){
var undo_stack = frontend.modules.editor.undo_redo.get_undo_stack();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(undo_stack,cljs.core.conj,txs);
});
frontend.modules.editor.undo_redo.pop_undo = (function frontend$modules$editor$undo_redo$pop_undo(){
var undo_stack = frontend.modules.editor.undo_redo.get_undo_stack();
var temp__5720__auto__ = cljs.core.deref(undo_stack);
if(cljs.core.truth_(temp__5720__auto__)){
var stack = temp__5720__auto__;
if(cljs.core.seq(stack)){
var removed_e = cljs.core.peek(stack);
var popped_stack = cljs.core.pop(stack);
var prev_e = cljs.core.peek(popped_stack);
cljs.core.reset_BANG_(undo_stack,popped_stack);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [removed_e,prev_e], null);
} else {
return null;
}
} else {
return null;
}
});
frontend.modules.editor.undo_redo.push_redo = (function frontend$modules$editor$undo_redo$push_redo(txs){
var redo_stack = frontend.modules.editor.undo_redo.get_redo_stack();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(redo_stack,cljs.core.conj,txs);
});
frontend.modules.editor.undo_redo.pop_redo = (function frontend$modules$editor$undo_redo$pop_redo(){
var redo_stack = frontend.modules.editor.undo_redo.get_redo_stack();
var temp__5720__auto__ = cljs.core.peek(cljs.core.deref(redo_stack));
if(cljs.core.truth_(temp__5720__auto__)){
var removed_e = temp__5720__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(redo_stack,cljs.core.pop);

return removed_e;
} else {
return null;
}
});
frontend.modules.editor.undo_redo.reset_redo = (function frontend$modules$editor$undo_redo$reset_redo(){
var redo_stack = frontend.modules.editor.undo_redo.get_redo_stack();
return cljs.core.reset_BANG_(redo_stack,cljs.core.PersistentVector.EMPTY);
});
frontend.modules.editor.undo_redo.get_txs = (function frontend$modules$editor$undo_redo$get_txs(redo_QMARK_,txs){
var txs__$1 = (cljs.core.truth_(redo_QMARK_)?txs:cljs.core.reverse(txs));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__48570){
var vec__48571 = p__48570;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48571,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48571,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48571,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48571,(3),null);
var add_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48571,(4),null);
var op = (cljs.core.truth_((function (){var and__5041__auto__ = redo_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return add_QMARK_;
} else {
return and__5041__auto__;
}
})())?new cljs.core.Keyword("db","add","db/add",235286841):(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(redo_QMARK_);
if(and__5041__auto__){
return add_QMARK_;
} else {
return and__5041__auto__;
}
})())?new cljs.core.Keyword("db","retract","db/retract",-1549825231):(cljs.core.truth_((function (){var and__5041__auto__ = redo_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(add_QMARK_);
} else {
return and__5041__auto__;
}
})())?new cljs.core.Keyword("db","retract","db/retract",-1549825231):((((cljs.core.not(redo_QMARK_)) && (cljs.core.not(add_QMARK_))))?new cljs.core.Keyword("db","add","db/add",235286841):null))));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,id,attr,value,tx], null);
}),txs__$1);
});
frontend.modules.editor.undo_redo.transact_BANG_ = (function frontend$modules$editor$undo_redo$transact_BANG_(txs){
var conn = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(false);
var db_report = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,txs);
return frontend.modules.outliner.pipeline.invoke_hooks(db_report);
});
frontend.modules.editor.undo_redo.undo = (function frontend$modules$editor$undo_redo$undo(){
var vec__48574 = frontend.modules.editor.undo_redo.pop_undo();
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48574,(0),null);
var prev_e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48574,(1),null);
if(cljs.core.truth_(e)){
var map__48577 = e;
var map__48577__$1 = cljs.core.__destructure_map(map__48577);
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48577__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var new_txs = frontend.modules.editor.undo_redo.get_txs(false,txs);
var editor_cursor = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800),new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(prev_e,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800),new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null))))?new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800).cljs$core$IFn$_invoke$arity$1(prev_e):new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800).cljs$core$IFn$_invoke$arity$1(e));
frontend.modules.editor.undo_redo.push_redo(e);

frontend.modules.editor.undo_redo.transact_BANG_(new_txs);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(e,new cljs.core.Keyword(null,"txs-op","txs-op",2083668558),new_txs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800),editor_cursor], 0));
} else {
return null;
}
});
frontend.modules.editor.undo_redo.redo = (function frontend$modules$editor$undo_redo$redo(){
var temp__5720__auto__ = frontend.modules.editor.undo_redo.pop_redo();
if(cljs.core.truth_(temp__5720__auto__)){
var map__48578 = temp__5720__auto__;
var map__48578__$1 = cljs.core.__destructure_map(map__48578);
var e = map__48578__$1;
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48578__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var new_txs = frontend.modules.editor.undo_redo.get_txs(true,txs);
frontend.modules.editor.undo_redo.push_undo(e);

frontend.modules.editor.undo_redo.transact_BANG_(new_txs);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"txs-op","txs-op",2083668558),new_txs);
} else {
return null;
}
});
frontend.modules.editor.undo_redo.listen_outliner_operation = (function frontend$modules$editor$undo_redo$listen_outliner_operation(p__48579){
var map__48580 = p__48579;
var map__48580__$1 = cljs.core.__destructure_map(map__48580);
var tx_report = map__48580__$1;
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48580__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48580__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
if(cljs.core.empty_QMARK_(tx_data)){
return null;
} else {
frontend.modules.editor.undo_redo.reset_redo();

var updated_blocks = frontend.modules.datascript_report.core.get_blocks(tx_report);
var entity = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),updated_blocks,new cljs.core.Keyword(null,"txs","txs",2056038378),tx_data,new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800),new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800).cljs$core$IFn$_invoke$arity$1(tx_meta)], null);
return frontend.modules.editor.undo_redo.push_undo(entity);
}
});

//# sourceMappingURL=frontend.modules.editor.undo_redo.js.map
