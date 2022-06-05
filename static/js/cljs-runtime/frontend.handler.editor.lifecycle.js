goog.provide('frontend.handler.editor.lifecycle');
frontend.handler.editor.lifecycle.did_mount_BANG_ = (function frontend$handler$editor$lifecycle$did_mount_BANG_(state){
var vec__55626_55662 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var map__55629_55663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55626_55662,(0),null);
var map__55629_55664__$1 = cljs.core.__destructure_map(map__55629_55663);
var block_parent_id_55665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55629_55664__$1,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550));
var id_55666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55626_55662,(1),null);
var content_55667 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id_55666], null));
if(cljs.core.truth_(block_parent_id_55665)){
frontend.state.set_editing_block_dom_id_BANG_(block_parent_id_55665);
} else {
}

if(cljs.core.truth_(content_55667)){
frontend.handler.editor.restore_cursor_pos_BANG_(id_55666,content_55667);
} else {
}

setTimeout((function (){
return frontend.handler.editor.keyboards.esc_save_BANG_(state);
}),(100));

var temp__5720__auto___55669 = goog.dom.getElement(id_55666);
if(cljs.core.truth_(temp__5720__auto___55669)){
var element_55670 = temp__5720__auto___55669;
element_55670.focus();

setTimeout((function (){
return frontend.util.scroll_editor_cursor(element_55670);
}),(50));
} else {
}

return state;
});
frontend.handler.editor.lifecycle.did_remount_BANG_ = (function frontend$handler$editor$lifecycle$did_remount_BANG_(_old_state,state){
frontend.handler.editor.keyboards.esc_save_BANG_(state);

return state;
});
frontend.handler.editor.lifecycle.will_unmount = (function frontend$handler$editor$lifecycle$will_unmount(state){
var map__55658_55672 = frontend.handler.editor.get_state();
var map__55658_55673__$1 = cljs.core.__destructure_map(map__55658_55672);
var value_55674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55658_55673__$1,new cljs.core.Keyword(null,"value","value",305978217));
frontend.handler.editor.clear_when_saved_BANG_();

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"insert","insert",1286475395),null,new cljs.core.Keyword(null,"redo","redo",501190664),null,new cljs.core.Keyword(null,"auto-save","auto-save",1805740650),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"undo","undo",-1818036302),null,new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747),null], null), null),frontend.state.get_editor_op())){
} else {
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_state(),value_55674);
}

return state;
});
frontend.handler.editor.lifecycle.lifecycle = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),frontend.handler.editor.lifecycle.did_mount_BANG_,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),frontend.handler.editor.lifecycle.did_remount_BANG_,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),frontend.handler.editor.lifecycle.will_unmount], null);

//# sourceMappingURL=frontend.handler.editor.lifecycle.js.map
