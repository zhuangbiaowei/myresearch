goog.provide('frontend.handler.mobile.swipe');
frontend.handler.mobile.swipe.setup_listeners_BANG_ = (function frontend$handler$mobile$swipe$setup_listeners_BANG_(){
var container = document;
return container.addEventListener("swiped",(function (e){
var detail = (function (){var G__95856 = e.detail;
if((G__95856 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__95856);
}
})();
var width = window.innerWidth;
var height = window.innerHeight;
var xstart = new cljs.core.Keyword(null,"xStart","xStart",-245795236).cljs$core$IFn$_invoke$arity$1(detail);
var ystart = new cljs.core.Keyword(null,"yStart","yStart",440532913).cljs$core$IFn$_invoke$arity$1(detail);
var G__95857 = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(detail);
switch (G__95857) {
case "left":
if((((xstart > (width / 1.2))) && ((!(frontend.util.sm_breakpoint_QMARK_()))))){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887)))){
return null;
} else {
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),true);
}
} else {
if(((frontend.util.sm_breakpoint_QMARK_())?(xstart < (width / 1.25)):(xstart < (width / (2))))){
if(cljs.core.truth_(frontend.state.get_left_sidebar_open_QMARK_())){
return frontend.state.set_left_sidebar_open_BANG_(false);
} else {
return null;
}
} else {
return null;

}
}

break;
case "right":
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return (ystart <= (height / (2)));
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(frontend.state.get_left_sidebar_open_QMARK_())){
return null;
} else {
if(frontend.util.sm_breakpoint_QMARK_()){
frontend.state.clear_edit_BANG_();
} else {
}

return frontend.state.set_left_sidebar_open_BANG_(true);
}
} else {
if((xstart > (width / (2)))){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887)))){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),false);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_ios_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return (new cljs.core.Keyword(null,"xStart","xStart",-245795236).cljs$core$IFn$_invoke$arity$1(detail) <= (20));
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(frontend.state.get_left_sidebar_open_QMARK_())){
return null;
} else {
if(cljs.core.truth_(frontend.mobile.util.native_iphone_QMARK_())){
frontend.state.clear_edit_BANG_();
} else {
}

return frontend.state.set_left_sidebar_open_BANG_(true);
}
} else {
return null;

}
}
}

break;
default:
return null;

}
}));
});

//# sourceMappingURL=frontend.handler.mobile.swipe.js.map
