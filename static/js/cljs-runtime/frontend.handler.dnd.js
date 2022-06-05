goog.provide('frontend.handler.dnd');
frontend.handler.dnd.move_blocks = (function frontend$handler$dnd$move_blocks(event,blocks,target_block,move_to){
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55165_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__55165_SHARP_,new cljs.core.Keyword("block","level","block/level",1182509971),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","children","block/children",-1040716209)], 0));
}),blocks);
var first_block = cljs.core.first(blocks_SINGLEQUOTE_);
var top_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"top","top",-1856271961));
var nested_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"nested","nested",18943849));
var alt_key_QMARK_ = (function (){var and__5041__auto__ = event;
if(cljs.core.truth_(and__5041__auto__)){
return event.altKey;
} else {
return and__5041__auto__;
}
})();
var current_format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(first_block);
var target_format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(target_block);
if(cljs.core.truth_((function (){var and__5041__auto__ = alt_key_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks),(1));
} else {
return and__5041__auto__;
}
})())){
frontend.handler.editor.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_block),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_block)));

return frontend.handler.editor.api_insert_new_block_BANG_(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("((%s))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(first_block))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),(!(nested_QMARK_)),new cljs.core.Keyword(null,"before?","before?",765621039),top_QMARK_], null));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = current_format;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = target_format;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_format,target_format);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Those two pages have different formats."], null),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"clear?","clear?",1363344639),true], null)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(blocks,target_block))){
var target_node = frontend.modules.outliner.core.block(target_block);
var transact_data__47668__auto__ = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__47669__auto__ = (cljs.core.truth_(transact_data__47668__auto__)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)], null));
if(cljs.core.truth_(transact_data__47668__auto__)){
frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

if(top_QMARK_){
var first_child_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.tree._get_parent_id(target_node),frontend.modules.outliner.tree._get_left_id(target_node));
if(first_child_QMARK_){
var parent = frontend.modules.outliner.tree._get_parent(target_node);
return frontend.modules.outliner.core.move_blocks_BANG_(blocks,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(parent),false);
} else {
var before_node = frontend.modules.outliner.tree._get_left(target_node);
return frontend.modules.outliner.core.move_blocks_BANG_(blocks,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(before_node),true);
}
} else {
return frontend.modules.outliner.core.move_blocks_BANG_(blocks,target_block,(!(nested_QMARK_)));
}
} else {
var _STAR_transaction_data_STAR__orig_val__55172 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__55173 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__55173);

try{frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();

if(top_QMARK_){
var first_child_QMARK__55181 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.tree._get_parent_id(target_node),frontend.modules.outliner.tree._get_left_id(target_node));
if(first_child_QMARK__55181){
var parent_55182 = frontend.modules.outliner.tree._get_parent(target_node);
frontend.modules.outliner.core.move_blocks_BANG_(blocks,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(parent_55182),false);
} else {
var before_node_55183 = frontend.modules.outliner.tree._get_left(target_node);
frontend.modules.outliner.core.move_blocks_BANG_(blocks,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(before_node_55183),true);
}
} else {
frontend.modules.outliner.core.move_blocks_BANG_(blocks,target_block,(!(nested_QMARK_)));
}

var r__47670__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__47671__auto__ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__47670__auto__], 0));
var tx_meta__47672__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__47670__auto__));
var all_tx__47673__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__47671__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__47669__auto__));
var opts_SHARP___47674__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__47669__auto__,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__47672__auto__], 0));
if(cljs.core.seq(all_tx__47673__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__47669__auto__))){
return null;
} else {
var result__47675__auto__ = frontend.modules.outliner.datascript.transact_BANG_(all_tx__47673__auto__,opts_SHARP___47674__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__47673__auto__,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__47672__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__47675__auto__], null);
}
} else {
return null;
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__55172);
}}
} else {
return null;

}
}
}
});

//# sourceMappingURL=frontend.handler.dnd.js.map
