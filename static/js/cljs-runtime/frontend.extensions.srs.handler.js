goog.provide('frontend.extensions.srs.handler');
frontend.extensions.srs.handler.click = (function frontend$extensions$srs$handler$click(id){
var temp__5720__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return node.click();
} else {
return null;
}
});
frontend.extensions.srs.handler.toggle_answers = (function frontend$extensions$srs$handler$toggle_answers(){
return frontend.extensions.srs.handler.click("card-answers");
});
frontend.extensions.srs.handler.next_card = (function frontend$extensions$srs$handler$next_card(){
return frontend.extensions.srs.handler.click("card-next");
});
frontend.extensions.srs.handler.forgotten = (function frontend$extensions$srs$handler$forgotten(){
return frontend.extensions.srs.handler.click("card-forgotten");
});
frontend.extensions.srs.handler.remembered = (function frontend$extensions$srs$handler$remembered(){
return frontend.extensions.srs.handler.click("card-remembered");
});
frontend.extensions.srs.handler.recall = (function frontend$extensions$srs$handler$recall(){
return frontend.extensions.srs.handler.click("card-recall");
});

//# sourceMappingURL=frontend.extensions.srs.handler.js.map
