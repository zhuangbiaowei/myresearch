goog.provide('frontend.security');
frontend.security.javascript_link_QMARK_ = (function frontend$security$javascript_link_QMARK_(f){
var and__5041__auto__ = cljs.core.vector_QMARK_(f);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.first(f));
if(and__5041__auto____$1){
var and__5041__auto____$2 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(cljs.core.second(f));
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(cljs.core.second(f));
if(cljs.core.truth_(and__5041__auto____$3)){
return frontend.util.safe_re_find(/javascript/i,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(cljs.core.second(f)));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
frontend.security.remove_javascript_links_in_href = (function frontend$security$remove_javascript_links_in_href(hiccup){
return clojure.walk.postwalk((function (f){
if(cljs.core.truth_(frontend.security.javascript_link_QMARK_(f))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(f,(1),cljs.core.dissoc,new cljs.core.Keyword(null,"href","href",-793805698));
} else {
return f;
}
}),hiccup);
});

//# sourceMappingURL=frontend.security.js.map
