goog.provide('frontend.handler.editor.keyboards');
frontend.handler.editor.keyboards.esc_save_BANG_ = (function frontend$handler$editor$keyboards$esc_save_BANG_(state){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(1));
return frontend.mixins.hide_when_esc_or_outside.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (_state,e,event){
var target = e.target;
if(dommy.core.has_class_QMARK_(target,"bottom-action")){
return e.preventDefault();
} else {
var map__55599 = frontend.handler.editor.get_state();
var map__55599__$1 = cljs.core.__destructure_map(map__55599);
var on_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55599__$1,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55599__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(on_hide)){
(on_hide.cljs$core$IFn$_invoke$arity$2 ? on_hide.cljs$core$IFn$_invoke$arity$2(value,event) : on_hide.call(null,value,event));
} else {
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visibilitychange","visibilitychange",-1648113311),null,new cljs.core.Keyword(null,"esc","esc",-1671924121),null,new cljs.core.Keyword(null,"click","click",1912301393),null], null), null),event)){
return frontend.state.clear_edit_BANG_();
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"node","node",581201198),goog.dom.getElement(id)], 0));
});

//# sourceMappingURL=frontend.handler.editor.keyboards.js.map
