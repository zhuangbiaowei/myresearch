goog.provide('frontend.handler.recent');
frontend.handler.recent.add_page_to_recent_BANG_ = (function frontend$handler$recent$add_page_to_recent_BANG_(repo,page){
var pages = (function (){var or__5043__auto__ = (frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)) : frontend.db.get_key_value.call(null,repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})();
var new_pages = cljs.core.take.cljs$core$IFn$_invoke$arity$2((15),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(page,pages)));
return (frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842),new_pages) : frontend.db.set_key_value.call(null,repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842),new_pages));
});
frontend.handler.recent.update_or_add_renamed_page = (function frontend$handler$recent$update_or_add_renamed_page(repo,old_page_name,new_page_name){
var pages = (function (){var or__5043__auto__ = (frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)) : frontend.db.get_key_value.call(null,repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})();
var updated_pages = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([old_page_name,new_page_name]),pages);
var updated_pages_STAR_ = ((cljs.core.contains_QMARK_(cljs.core.set(updated_pages),new_page_name))?updated_pages:cljs.core.cons(new_page_name,updated_pages));
return (frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842),updated_pages_STAR_) : frontend.db.set_key_value.call(null,repo,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842),updated_pages_STAR_));
});

//# sourceMappingURL=frontend.handler.recent.js.map
