goog.provide('frontend.mobile.intent');
var module$node_modules$$capacitor$filesystem$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$filesystem$dist$plugin_cjs", {});
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
var module$node_modules$send_intent$dist$esm$index=shadow.js.require("module$node_modules$send_intent$dist$esm$index", {});
frontend.mobile.intent.handle_received_text = (function frontend$mobile$intent$handle_received_text(result){
var map__57972 = result;
var map__57972__$1 = cljs.core.__destructure_map(map__57972);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57972__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57972__$1,new cljs.core.Keyword(null,"url","url",276297046));
var page = (function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.lower_case(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0());
}
})();
var format = (frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page_format.call(null,page));
var time = frontend.date.get_current_time();
var url__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = logseq.graph_parser.mldoc.link_QMARK_(format,title);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(url);
} else {
return and__5041__auto__;
}
})())?title:url);
var text = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url__$1,title))?null:title);
var vec__57973 = (((function (){var or__5043__auto__ = logseq.graph_parser.mldoc.link_QMARK_(format,url__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(url__$1);
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,url__$1], null):clojure.string.split.cljs$core$IFn$_invoke$arity$2(url__$1,"\"\n"));
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57973,(0),null);
var url__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57973,(1),null);
var text__$2 = (function (){var G__57984 = text__$1;
if((G__57984 == null)){
return null;
} else {
return clojure.string.replace(G__57984,/^\"/,"");
}
})();
var url__$3 = (function (){var and__5041__auto__ = url__$2;
if(cljs.core.truth_(and__5041__auto__)){
if(cljs.core.boolean$(frontend.util.text.get_matched_video(url__$2))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{video %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url__$2], 0));
} else {
if(((clojure.string.includes_QMARK_(url__$2,"twitter.com")) && (clojure.string.includes_QMARK_(url__$2,"status")))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{twitter %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url__$2], 0));
} else {
if(cljs.core.truth_(text__$2)){
return frontend.config.link_format(format,text__$2,url__$2);
} else {
return url__$2;
}

}
}
} else {
return and__5041__auto__;
}
})();
var template = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quick-capture-templates","quick-capture-templates",-1488741596),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"**{time}** [[quick capture]]: {text} {url}");
var values = clojure.string.replace(clojure.string.replace(clojure.string.replace(template,"{time}",time),"{text}",(function (){var or__5043__auto__ = text__$2;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})()),"{url}",(function (){var or__5043__auto__ = url__$3;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
if(cljs.core.truth_(frontend.state.get_edit_block())){
return frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(values);
} else {
return frontend.handler.editor.api_insert_new_block_BANG_(values,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null));
}
});
frontend.mobile.intent.embed_asset_file = (function frontend$mobile$intent$embed_asset_file(url,format){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$path$path.basename(url),(function (basename){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.util.node_path.name.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.name.cljs$core$IFn$_invoke$arity$1(basename) : frontend.util.node_path.name.call(null,basename)),(function (label){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.date.get_current_time(),(function (time){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_asset_path(basename),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.copy(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),url,new cljs.core.Keyword(null,"to","to",192099007),path], null))),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.intent",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"copy-file-error","copy-file-error",-264206453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),68], null)),null);
})),(function (_file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("../assets/%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([basename], 0)),(function (url__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_asset_file_link(format,url__$1,label,true),(function (url__$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quick-capture-templates","quick-capture-templates",-1488741596),new cljs.core.Keyword(null,"media","media",-1066138403)], null),"**{time}** [[quick capture]]: {url}"),(function (template){
return promesa.protocols._promise(clojure.string.replace(clojure.string.replace(template,"{time}",time),"{url}",(function (){var or__5043__auto__ = url__$2;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})()));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});
frontend.mobile.intent.embed_text_file = (function frontend$mobile$intent$embed_text_file(url,title){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.date.get_current_time(),(function (time){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var G__57997 = (function (){var or__5043__auto__ = title;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return module$node_modules$path$path.basename(url);
}
})();
var G__57997__$1 = (((G__57997 == null))?null:decodeURIComponent(G__57997));
var G__57997__$2 = (((G__57997__$1 == null))?null:(frontend.util.node_path.name.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.name.cljs$core$IFn$_invoke$arity$1(G__57997__$1) : frontend.util.node_path.name.call(null,G__57997__$1)));
var G__57997__$3 = (((G__57997__$2 == null))?null:frontend.util.file_name_sanity(G__57997__$2));
var G__57997__$4 = (((G__57997__$3 == null))?null:decodeURIComponent(G__57997__$3));
if((G__57997__$4 == null)){
return null;
} else {
return clojure.string.replace(G__57997__$4,".","");
}
})(),(function (title__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$path$path.join(frontend.config.get_repo_dir(frontend.state.get_current_repo()),frontend.config.get_pages_directory(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURI(title__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$node_modules$path$path.extname(url))].join('')),(function (path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.copy(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),url,new cljs.core.Keyword(null,"to","to",192099007),path], null))),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.intent",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"copy-file-error","copy-file-error",-264206453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),91], null)),null);
})),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title__$1], 0)),(function (url__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quick-capture-templates","quick-capture-templates",-1488741596),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"**{time}** [[quick capture]]: {url}"),(function (template){
return promesa.protocols._promise(clojure.string.replace(clojure.string.replace(template,"{time}",time),"{url}",(function (){var or__5043__auto__ = url__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})()));
}));
}));
}));
}));
}));
}));
}));
});
frontend.mobile.intent.handle_received_media = (function frontend$mobile$intent$handle_received_media(result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(result,(function (p__58004){
var map__58005 = p__58004;
var map__58005__$1 = cljs.core.__destructure_map(map__58005);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58005__$1,new cljs.core.Keyword(null,"url","url",276297046));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.lower_case(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0());
}
})(),(function (page){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page_format.call(null,page)),(function (format){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.mobile.intent.embed_asset_file(url,format),(function (content){
return promesa.protocols._promise((cljs.core.truth_(frontend.state.get_edit_block())?frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(content):frontend.handler.editor.api_insert_new_block_BANG_(content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null))));
}));
}));
}));
}));
}));
});
frontend.mobile.intent.handle_received_application = (function frontend$mobile$intent$handle_received_application(result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(result,(function (p__58014){
var map__58016 = p__58014;
var map__58016__$1 = cljs.core.__destructure_map(map__58016);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58016__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58016__$1,new cljs.core.Keyword(null,"url","url",276297046));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58016__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.lower_case(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0());
}
})(),(function (page){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_format.cljs$core$IFn$_invoke$arity$1(page) : frontend.db.get_page_format.call(null,page)),(function (format){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(type,"/")),(function (application_type){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((logseq.graph_parser.config.mldoc_support_QMARK_(application_type))?frontend.mobile.intent.embed_text_file(url,title):((cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(frontend.config.doc_formats(),frontend.config.media_formats),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(application_type)))?frontend.mobile.intent.embed_asset_file(url,format):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(application_type)," file has not been supported. You can report it on "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/logseq/issues",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Github"], null),". We will look into it soon."], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false)
)),(function (content){
return promesa.protocols._promise((cljs.core.truth_(frontend.state.get_edit_block())?frontend.handler.editor.insert.cljs$core$IFn$_invoke$arity$1(content):frontend.handler.editor.api_insert_new_block_BANG_(content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),true], null))));
}));
}));
}));
}));
}));
}));
});
frontend.mobile.intent.decode_received_result = (function frontend$mobile$intent$decode_received_result(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function frontend$mobile$intent$decode_received_result_$_iter__58026(s__58027){
return (new cljs.core.LazySeq(null,(function (){
var s__58027__$1 = s__58027;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58027__$1);
if(temp__5720__auto__){
var s__58027__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58027__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58027__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58029 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58028 = (0);
while(true){
if((i__58028 < size__5519__auto__)){
var vec__58031 = cljs.core._nth(c__5518__auto__,i__58028);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58031,(1),null);
cljs.core.chunk_append(b__58029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.vector_QMARK_(v))?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.mobile.intent.decode_received_result,v)):((clojure.string.blank_QMARK_(v))?null:(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?decodeURIComponent(v):v)
))], null));

var G__58077 = (i__58028 + (1));
i__58028 = G__58077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58029),frontend$mobile$intent$decode_received_result_$_iter__58026(cljs.core.chunk_rest(s__58027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58029),null);
}
} else {
var vec__58036 = cljs.core.first(s__58027__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58036,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.vector_QMARK_(v))?cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.mobile.intent.decode_received_result,v)):((clojure.string.blank_QMARK_(v))?null:(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?decodeURIComponent(v):v)
))], null),frontend$mobile$intent$decode_received_result_$_iter__58026(cljs.core.rest(s__58027__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(m);
})());
});
frontend.mobile.intent.handle_result = (function frontend$mobile$intent$handle_result(result){
var result__$1 = frontend.mobile.intent.decode_received_result(result);
var temp__5720__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(result__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var type = temp__5720__auto__;
if(clojure.string.starts_with_QMARK_(type,"text/")){
return frontend.mobile.intent.handle_received_text(result__$1);
} else {
if(((clojure.string.starts_with_QMARK_(type,"image/")) || (((clojure.string.starts_with_QMARK_(type,"video/")) || (clojure.string.starts_with_QMARK_(type,"audio/")))))){
return frontend.mobile.intent.handle_received_media(result__$1);
} else {
if(clojure.string.starts_with_QMARK_(type,"application/")){
return frontend.mobile.intent.handle_received_application(result__$1);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Parsing current shared content are not supported. Please report the following codes on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/logseq/issues/new?labels=from:in-app&template=bug_report.yaml",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Github"], null),". We will look into it soon.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58045_58082 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58046_58083 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58047_58084 = true;
var _STAR_print_fn_STAR__temp_val__58048_58085 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58047_58084);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58048_58085);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(result__$1);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58046_58083);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58045_58082);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})()], null)], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

}
}
}
} else {
return null;
}
});
frontend.mobile.intent.handle_received = (function frontend$mobile$intent$handle_received(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(module$node_modules$send_intent$dist$esm$index.SendIntent.checkSendIntentReceived(),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.mobile.intent",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intent-received-error","intent-received-error",2097503730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),178], null)),null);
})),(function (received){
return promesa.protocols._promise((cljs.core.truth_(received)?(function (){var result = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(received,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return frontend.mobile.intent.handle_result(result);
})():null));
}));
}));
});

//# sourceMappingURL=frontend.mobile.intent.js.map
