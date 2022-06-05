goog.provide('frontend.external');
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam_record !== 'undefined')){
} else {
frontend.external.roam_record = frontend.external.roam.__GT_Roam();
}
frontend.external.get_record = (function frontend$external$get_record(type){
var G__95092 = type;
var G__95092__$1 = (((G__95092 instanceof cljs.core.Keyword))?G__95092.fqn:null);
switch (G__95092__$1) {
case "roam":
return frontend.external.roam_record;

break;
default:
return null;

}
});
frontend.external.to_markdown_files = (function frontend$external$to_markdown_files(type,content,config){
var temp__5720__auto__ = frontend.external.get_record(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
if(cljs.core.truth_(temp__5720__auto__)){
var record = temp__5720__auto__;
return frontend.external.protocol.toMarkdownFiles(record,content,config);
} else {
return null;
}
});

//# sourceMappingURL=frontend.external.js.map
