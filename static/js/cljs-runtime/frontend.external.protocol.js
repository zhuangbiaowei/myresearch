goog.provide('frontend.external.protocol');

/**
 * @interface
 */
frontend.external.protocol.External = function(){};

var frontend$external$protocol$External$toMarkdownFiles$dyn_95036 = (function (this$,content,config){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.external.protocol.toMarkdownFiles[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,content,config) : m__5391__auto__.call(null,this$,content,config));
} else {
var m__5389__auto__ = (frontend.external.protocol.toMarkdownFiles["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,content,config) : m__5389__auto__.call(null,this$,content,config));
} else {
throw cljs.core.missing_protocol("External.toMarkdownFiles",this$);
}
}
});
/**
 * Should return a map of markdown's file name to contents.
 */
frontend.external.protocol.toMarkdownFiles = (function frontend$external$protocol$toMarkdownFiles(this$,content,config){
if((((!((this$ == null)))) && ((!((this$.frontend$external$protocol$External$toMarkdownFiles$arity$3 == null)))))){
return this$.frontend$external$protocol$External$toMarkdownFiles$arity$3(this$,content,config);
} else {
return frontend$external$protocol$External$toMarkdownFiles$dyn_95036(this$,content,config);
}
});


//# sourceMappingURL=frontend.external.protocol.js.map
