goog.provide('frontend.components.onboarding.quick_tour');
frontend.components.onboarding.quick_tour.js_load$ = (function frontend$components$onboarding$quick_tour$js_load$(url){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve){
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2(url,resolve);
}));
});
frontend.components.onboarding.quick_tour.JS_ROOT = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"file:"))?"./js":"./static/js");
frontend.components.onboarding.quick_tour.load_base_assets$ = (function frontend$components$onboarding$quick_tour$load_base_assets$(){
return frontend.components.onboarding.quick_tour.js_load$([frontend.components.onboarding.quick_tour.JS_ROOT,"/shepherd.min.js"].join(''));
});
frontend.components.onboarding.quick_tour.make_skip_fns = (function frontend$components$onboarding$quick_tour$make_skip_fns(jsTour){
var el = document.createElement("button");
el.classList.add("cp__onboarding-skip-quick-tour");

(el.innerHTML = hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ti.ti-player-skip-forward","i.ti.ti-player-skip-forward",77204923)], null),"Skip Quick Tour"], null)));

el.addEventListener("click",(function (){
return jsTour.cancel();
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return document.body.appendChild(el);
}),(function (){
return document.body.removeChild(el);
})], null);
});
frontend.components.onboarding.quick_tour.wait_target = (function frontend$components$onboarding$quick_tour$wait_target(fn_or_selector,time){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((typeof fn_or_selector === 'string')?(function (){
return document.querySelector(dommy.core.selector(fn_or_selector));
}):fn_or_selector),(function (action){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1(time),(function (___$1){
return promesa.protocols._promise(null);
}));
}));
}));
}));
});
frontend.components.onboarding.quick_tour.inject_steps_indicator = (function frontend$components$onboarding$quick_tour$inject_steps_indicator(current,total){
return hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.steps","div.steps",-1177755215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),["STEP ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5520__auto__ = (function frontend$components$onboarding$quick_tour$inject_steps_indicator_$_iter__59162(s__59163){
return (new cljs.core.LazySeq(null,(function (){
var s__59163__$1 = s__59163;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__59163__$1);
if(temp__5720__auto__){
var s__59163__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59163__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59163__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59165 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59164 = (0);
while(true){
if((i__59164 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__59164);
cljs.core.chunk_append(b__59165,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(i + (1))))?"active":null)], null),i], null));

var G__59182 = (i__59164 + (1));
i__59164 = G__59182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59165),frontend$components$onboarding$quick_tour$inject_steps_indicator_$_iter__59162(cljs.core.chunk_rest(s__59163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59165),null);
}
} else {
var i = cljs.core.first(s__59163__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(i + (1))))?"active":null)], null),i], null),frontend$components$onboarding$quick_tour$inject_steps_indicator_$_iter__59162(cljs.core.rest(s__59163__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(total));
})()], null)], null));
});
frontend.components.onboarding.quick_tour.create_steps_BANG_ = (function frontend$components$onboarding$quick_tour$create_steps_BANG_(jsTour){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav-help",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\u2753 Help"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can always click here for help and other information about Logseq."], null)], null)),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".cp__sidebar-help-btn",new cljs.core.Keyword(null,"on","on",173873944),"top"], null),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887)))){
return frontend.components.onboarding.quick_tour.wait_target(frontend.state.hide_right_sidebar_BANG_,(700));
} else {
return promesa.core.resolved(true);
}
}),new cljs.core.Keyword(null,"canClickTarget","canClickTarget",-330036997),true,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Next",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.next], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav-journal-page",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\uD83D\uDCC6 Daily Journal Page"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"This is today\u2019s daily journal page. Here yo can dump your thoughts, learnings and ideas. Don\u2019t worry about organizing. Just write and"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"[[link]]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"your thoughts."], null)], null)], null)),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".page.is-journals .page-title",new cljs.core.Keyword(null,"on","on",173873944),"top-end"], null),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_lower_case(frontend.state.get_current_page()),frontend.util.safe_lower_case(frontend.date.today()))))){
return frontend.components.onboarding.quick_tour.wait_target((function (){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.date.today());

return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0();
}),(200));
} else {
return promesa.core.resolved(true);
}
}),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Back",new cljs.core.Keyword(null,"classes","classes",2037804510),"back",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.back], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Next",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.next], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(63)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav-left-sidebar",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\uD83D\uDC40 Left Sidebar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Open the left sidebar to explore important menu items in Logseq."], null)], null)], null)),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),"#left-menu",new cljs.core.Keyword(null,"on","on",173873944),"top"], null),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
return promesa.core.resolved(true);
}),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Back",new cljs.core.Keyword(null,"classes","classes",2037804510),"back",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.back], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Next",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.next], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav-favorites",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\u2B50\uFE0F Favorites"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Pin your favorite pages via the `... `menu on any page."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We\u2019ve also added some template pages here to help you get started. You can remove these once you start writing your own notes."], null)], null)),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
if(cljs.core.not(frontend.state.sub(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728)))){
return frontend.components.onboarding.quick_tour.wait_target(frontend.state.toggle_left_sidebar_BANG_,(500));
} else {
return promesa.core.resolved(true);
}
}),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".nav-content-item.favorites",new cljs.core.Keyword(null,"on","on",173873944),"right"], null),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Back",new cljs.core.Keyword(null,"classes","classes",2037804510),"back",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.back], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Finish",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.complete], null)], null)], null)], null);
});
frontend.components.onboarding.quick_tour.start = (function frontend$components$onboarding$quick_tour$start(){
var jsTour = (new Shepherd.Tour(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"useModalOverlay","useModalOverlay",-1323895540),true,new cljs.core.Keyword(null,"defaultStepOptions","defaultStepOptions",-1042424443),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),"cp__onboarding-quick-tour",new cljs.core.Keyword(null,"scrollTo","scrollTo",-658970728),false], null)], null))));
var steps = frontend.components.onboarding.quick_tour.create_steps_BANG_(jsTour);
var steps__$1 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__59168_SHARP_,p2__59167_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__59167_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p2__59167_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.onboarding.quick_tour.inject_steps_indicator((p1__59168_SHARP_ + (1)),cljs.core.count(steps)))].join(''));
}),steps);
var vec__59169 = frontend.components.onboarding.quick_tour.make_skip_fns(jsTour);
var show_skip_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59169,(0),null);
var hide_skip_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59169,(1),null);
var G__59172_59185 = jsTour;
G__59172_59185.on("show",show_skip_BANG_);

G__59172_59185.on("hide",hide_skip_BANG_);

G__59172_59185.on("complete",hide_skip_BANG_);

G__59172_59185.on("cancel",hide_skip_BANG_);


var seq__59173_59186 = cljs.core.seq(steps__$1);
var chunk__59174_59187 = null;
var count__59175_59188 = (0);
var i__59176_59189 = (0);
while(true){
if((i__59176_59189 < count__59175_59188)){
var step_59190 = chunk__59174_59187.cljs$core$IIndexed$_nth$arity$2(null,i__59176_59189);
jsTour.addStep(cljs_bean.core.__GT_js(step_59190));


var G__59191 = seq__59173_59186;
var G__59192 = chunk__59174_59187;
var G__59193 = count__59175_59188;
var G__59194 = (i__59176_59189 + (1));
seq__59173_59186 = G__59191;
chunk__59174_59187 = G__59192;
count__59175_59188 = G__59193;
i__59176_59189 = G__59194;
continue;
} else {
var temp__5720__auto___59195 = cljs.core.seq(seq__59173_59186);
if(temp__5720__auto___59195){
var seq__59173_59196__$1 = temp__5720__auto___59195;
if(cljs.core.chunked_seq_QMARK_(seq__59173_59196__$1)){
var c__5565__auto___59197 = cljs.core.chunk_first(seq__59173_59196__$1);
var G__59198 = cljs.core.chunk_rest(seq__59173_59196__$1);
var G__59199 = c__5565__auto___59197;
var G__59200 = cljs.core.count(c__5565__auto___59197);
var G__59201 = (0);
seq__59173_59186 = G__59198;
chunk__59174_59187 = G__59199;
count__59175_59188 = G__59200;
i__59176_59189 = G__59201;
continue;
} else {
var step_59202 = cljs.core.first(seq__59173_59196__$1);
jsTour.addStep(cljs_bean.core.__GT_js(step_59202));


var G__59203 = cljs.core.next(seq__59173_59196__$1);
var G__59204 = null;
var G__59205 = (0);
var G__59206 = (0);
seq__59173_59186 = G__59203;
chunk__59174_59187 = G__59204;
count__59175_59188 = G__59205;
i__59176_59189 = G__59206;
continue;
}
} else {
}
}
break;
}

return jsTour.start();
});
frontend.components.onboarding.quick_tour.ready = (function frontend$components$onboarding$quick_tour$ready(callback){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((((window.Shepherd == null))?frontend.components.onboarding.quick_tour.load_base_assets$():promesa.core.resolved(true)),callback);
});
frontend.components.onboarding.quick_tour.should_guide_QMARK_ = false;
frontend.components.onboarding.quick_tour.init = (function frontend$components$onboarding$quick_tour$init(){
frontend.handler.command_palette.register(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("document","quick-tour","document/quick-tour",-2012804753),new cljs.core.Keyword(null,"desc","desc",2093485764),"Quick tour for onboarding",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return frontend.components.onboarding.quick_tour.ready(frontend.components.onboarding.quick_tour.start);
})], null));

if(frontend.components.onboarding.quick_tour.should_guide_QMARK_){
return frontend.components.onboarding.quick_tour.ready(frontend.components.onboarding.quick_tour.start);
} else {
return null;
}
});

//# sourceMappingURL=frontend.components.onboarding.quick_tour.js.map
