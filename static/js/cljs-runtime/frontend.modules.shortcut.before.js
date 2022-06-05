goog.provide('frontend.modules.shortcut.before');
frontend.modules.shortcut.before.prevent_default_behavior = (function frontend$modules$shortcut$before$prevent_default_behavior(f){
return (function (e){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return false;
});
});
frontend.modules.shortcut.before.enable_when_not_editing_mode_BANG_ = (function frontend$modules$shortcut$before$enable_when_not_editing_mode_BANG_(f){
return (function (e){
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.state.editing_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.input_QMARK_(e.target);
}
})())){
return null;
} else {
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return false;
}
});
});
frontend.modules.shortcut.before.enable_when_editing_mode_BANG_ = (function frontend$modules$shortcut$before$enable_when_editing_mode_BANG_(f){
return (function (e){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
frontend.util.stop_propagation(e);
} else {
frontend.util.stop(e);
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
} else {
return null;
}
});
});
frontend.modules.shortcut.before.enable_when_not_component_editing_BANG_ = (function frontend$modules$shortcut$before$enable_when_not_component_editing_BANG_(f){
return (function (e){
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"srs","srs",1327991978),null], null), null),frontend.state.get_modal_id())) || (cljs.core.not(frontend.state.block_component_editing_QMARK_())))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
} else {
return null;
}
});
});

//# sourceMappingURL=frontend.modules.shortcut.before.js.map
