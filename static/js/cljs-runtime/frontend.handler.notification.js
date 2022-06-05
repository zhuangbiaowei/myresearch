goog.provide('frontend.handler.notification');
frontend.handler.notification.clear_BANG_ = (function frontend$handler$notification$clear_BANG_(uid){
var contents = frontend.state.get_notification_contents();
return frontend.state.set_state_BANG_(new cljs.core.Keyword("notification","contents","notification/contents",-1760740618),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(contents,uid));
});
frontend.handler.notification.show_BANG_ = (function frontend$handler$notification$show_BANG_(var_args){
var G__73930 = arguments.length;
switch (G__73930) {
case 2:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,status){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5(content,status,true,null,(1500));
}));

(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,status,clear_QMARK_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5(content,status,clear_QMARK_,null,(1500));
}));

(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (content,status,clear_QMARK_,uid){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5(content,status,clear_QMARK_,uid,(1500));
}));

(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (content,status,clear_QMARK_,uid,timeout){
var contents = frontend.state.get_notification_contents();
var uid__$1 = (function (){var or__5043__auto__ = uid;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.unique_id());
}
})();
frontend.state.set_state_BANG_(new cljs.core.Keyword("notification","contents","notification/contents",-1760740618),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(contents,uid__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"status","status",-1997798413),status], null)));

if(cljs.core.truth_((function (){var and__5041__auto__ = clear_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return and__5041__auto__;
}
})())){
setTimeout((function (){
return frontend.handler.notification.clear_BANG_(uid__$1);
}),(function (){var or__5043__auto__ = timeout;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1500);
}
})());
} else {
}

return uid__$1;
}));

(frontend.handler.notification.show_BANG_.cljs$lang$maxFixedArity = 5);


//# sourceMappingURL=frontend.handler.notification.js.map
