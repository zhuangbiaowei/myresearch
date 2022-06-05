goog.provide('frontend.format');
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc_record !== 'undefined')){
} else {
frontend.format.mldoc_record = frontend.format.mldoc.__GT_MldocMode();
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.adoc_record !== 'undefined')){
} else {
frontend.format.adoc_record = frontend.format.adoc.__GT_AdocMode();
}
frontend.format.get_format_record = (function frontend$format$get_format_record(format){
var G__81584 = logseq.graph_parser.util.normalize_format(format);
var G__81584__$1 = (((G__81584 instanceof cljs.core.Keyword))?G__81584.fqn:null);
switch (G__81584__$1) {
case "org":
return frontend.format.mldoc_record;

break;
case "markdown":
return frontend.format.mldoc_record;

break;
case "adoc":
return frontend.format.adoc_record;

break;
default:
return null;

}
});
frontend.format.get_default_config = (function frontend$format$get_default_config(var_args){
var G__81592 = arguments.length;
switch (G__81592) {
case 1:
return frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1 = (function (format){
return logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format);
}));

(frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$2 = (function (format,options){
return logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$2(format,options);
}));

(frontend.format.get_default_config.cljs$lang$maxFixedArity = 2);

frontend.format.to_html = (function frontend$format$to_html(var_args){
var G__81594 = arguments.length;
switch (G__81594) {
case 2:
return frontend.format.to_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.format.to_html.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.to_html.cljs$core$IFn$_invoke$arity$2 = (function (content,format){
return frontend.format.to_html.cljs$core$IFn$_invoke$arity$3(content,format,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(format));
}));

(frontend.format.to_html.cljs$core$IFn$_invoke$arity$3 = (function (content,format,config){
var config__$1 = (cljs.core.truth_(config)?config:frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(format));
if(clojure.string.blank_QMARK_(content)){
return "";
} else {
var temp__5718__auto__ = frontend.format.get_format_record(format);
if(cljs.core.truth_(temp__5718__auto__)){
var record = temp__5718__auto__;
return frontend.format.protocol.toHtml(record,content,config__$1,logseq.graph_parser.mldoc.default_references);
} else {
return content;
}
}
}));

(frontend.format.to_html.cljs$lang$maxFixedArity = 3);

frontend.format.to_edn = (function frontend$format$to_edn(var_args){
var G__81597 = arguments.length;
switch (G__81597) {
case 2:
return frontend.format.to_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.format.to_edn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.to_edn.cljs$core$IFn$_invoke$arity$2 = (function (content,format){
return frontend.format.to_edn.cljs$core$IFn$_invoke$arity$3(content,format,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(format));
}));

(frontend.format.to_edn.cljs$core$IFn$_invoke$arity$3 = (function (content,format,config){
var config__$1 = (function (){var or__5043__auto__ = config;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(format);
}
})();
var temp__5718__auto__ = frontend.format.get_format_record(format);
if(cljs.core.truth_(temp__5718__auto__)){
var record = temp__5718__auto__;
return frontend.format.protocol.toEdn(record,content,config__$1);
} else {
return null;
}
}));

(frontend.format.to_edn.cljs$lang$maxFixedArity = 3);

frontend.format.loaded_QMARK_ = (function frontend$format$loaded_QMARK_(format){
var temp__5720__auto__ = frontend.format.get_format_record(format);
if(cljs.core.truth_(temp__5720__auto__)){
var record = temp__5720__auto__;
return frontend.format.protocol.loaded_QMARK_(record);
} else {
return null;
}
});

//# sourceMappingURL=frontend.format.js.map
