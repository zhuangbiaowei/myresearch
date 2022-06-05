goog.provide('frontend.handler.journal');
frontend.handler.journal.redirect_to_journal_BANG_ = (function frontend$handler$journal$redirect_to_journal_BANG_(page){
if(cljs.core.truth_((function (){var and__5041__auto__ = page;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.enable_journals_QMARK_(frontend.state.get_current_repo());
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page], null)], null));
} else {
return null;
}
});
frontend.handler.journal.go_to_tomorrow_BANG_ = (function frontend$handler$journal$go_to_tomorrow_BANG_(){
return frontend.handler.journal.redirect_to_journal_BANG_(frontend.date.tomorrow());
});
frontend.handler.journal.get_current_journal = (function frontend$handler$journal$get_current_journal(){
var current_page = frontend.state.get_current_page();
var or__5043__auto__ = frontend.date.journal_title__GT_long(current_page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.time_ms();
}
});
frontend.handler.journal.go_to_prev_journal_BANG_ = (function frontend$handler$journal$go_to_prev_journal_BANG_(){
var current_journal = frontend.handler.journal.get_current_journal();
var day = cljs_time.coerce.from_long(current_journal);
var page = frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(day,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
return frontend.handler.journal.redirect_to_journal_BANG_(page);
});
frontend.handler.journal.go_to_next_journal_BANG_ = (function frontend$handler$journal$go_to_next_journal_BANG_(){
var current_journal = frontend.handler.journal.get_current_journal();
var day = cljs_time.coerce.from_long(current_journal);
var page = frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(day,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
return frontend.handler.journal.redirect_to_journal_BANG_(page);
});

//# sourceMappingURL=frontend.handler.journal.js.map
