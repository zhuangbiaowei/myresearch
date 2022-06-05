goog.provide('frontend.db_mixins');
frontend.db_mixins.query = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_query_component_STAR__orig_val__88017 = frontend.db.react._STAR_query_component_STAR_;
var _STAR_query_component_STAR__temp_val__88018 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
(frontend.db.react._STAR_query_component_STAR_ = _STAR_query_component_STAR__temp_val__88018);

try{return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
}finally {(frontend.db.react._STAR_query_component_STAR_ = _STAR_query_component_STAR__orig_val__88017);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.db.react.remove_query_component_BANG_(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));

return state;
})], null);

//# sourceMappingURL=frontend.db_mixins.js.map
