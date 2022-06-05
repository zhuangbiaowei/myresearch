goog.provide('frontend.components.file');
goog.scope(function(){
  frontend.components.file.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.file.get_path = (function frontend$components$file$get_path(state){
var route_match = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168)], null));
});
frontend.components.file.files = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"flex-1 overflow-hidden"},[(function (){var attrs59257 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-files","all-files",1120339891)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs59257))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs59257], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs59257))?null:[daiquiri.interpreter.interpret(attrs59257)]));
})(),daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
if(cljs.core.truth_(temp__5720__auto__)){
var current_repo = temp__5720__auto__;
var files = (frontend.db.get_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files.cljs$core$IFn$_invoke$arity$1(current_repo) : frontend.db.get_files.call(null,current_repo));
var mobile_QMARK_ = frontend.util.mobile_QMARK_();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-auto","table.table-auto",-490665373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","name","file/name",1848919477)], 0))], null),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310)], 0))], null)),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5520__auto__ = (function frontend$components$file$iter__59269(s__59270){
return (new cljs.core.LazySeq(null,(function (){
var s__59270__$1 = s__59270;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__59270__$1);
if(temp__5720__auto____$1){
var s__59270__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59270__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59270__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59272 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59271 = (0);
while(true){
if((i__59271 < size__5519__auto__)){
var vec__59273 = cljs.core._nth(c__5518__auto__,i__59271);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59273,(0),null);
var modified_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59273,(1),null);
cljs.core.chunk_append(b__59272,(function (){var file_id = file;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),file_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var href = ((logseq.graph_parser.config.draw_QMARK_(file))?reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"draw","draw",1358331674),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace(file,[logseq.graph_parser.config.default_draw_directory,"/"].join(''),"")], null)):reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),file_id], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),file], null);
})()], null),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),(((modified_at === (0)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","no-data","file/no-data",-1707813734)], 0)):frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1(cljs_time.core.to_default_time_zone(cljs_time.coerce.to_date_time(modified_at))))], null)], null)),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59271,file_id,vec__59273,file,modified_at,c__5518__auto__,size__5519__auto__,b__59272,s__59270__$2,temp__5720__auto____$1,files,mobile_QMARK_,current_repo,temp__5720__auto__){
return (function (_e){
return frontend.handler.export$.download_file_BANG_(file);
});})(i__59271,file_id,vec__59273,file,modified_at,c__5518__auto__,size__5519__auto__,b__59272,s__59270__$2,temp__5720__auto____$1,files,mobile_QMARK_,current_repo,temp__5720__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"download","download",-300081668)], 0))], null)], null)], null))], null);
})());

var G__59288 = (i__59271 + (1));
i__59271 = G__59288;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59272),frontend$components$file$iter__59269(cljs.core.chunk_rest(s__59270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59272),null);
}
} else {
var vec__59276 = cljs.core.first(s__59270__$2);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59276,(0),null);
var modified_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59276,(1),null);
return cljs.core.cons((function (){var file_id = file;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),file_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var href = ((logseq.graph_parser.config.draw_QMARK_(file))?reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"draw","draw",1358331674),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace(file,[logseq.graph_parser.config.default_draw_directory,"/"].join(''),"")], null)):reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),file_id], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),file], null);
})()], null),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500.text-sm","span.text-gray-500.text-sm",921719094),(((modified_at === (0)))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","no-data","file/no-data",-1707813734)], 0)):frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1(cljs_time.core.to_default_time_zone(cljs_time.coerce.to_date_time(modified_at))))], null)], null)),(cljs.core.truth_(mobile_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-sm","a.text-sm",-884048665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (file_id,vec__59276,file,modified_at,s__59270__$2,temp__5720__auto____$1,files,mobile_QMARK_,current_repo,temp__5720__auto__){
return (function (_e){
return frontend.handler.export$.download_file_BANG_(file);
});})(file_id,vec__59276,file,modified_at,s__59270__$2,temp__5720__auto____$1,files,mobile_QMARK_,current_repo,temp__5720__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"download","download",-300081668)], 0))], null)], null)], null))], null);
})(),frontend$components$file$iter__59269(cljs.core.rest(s__59270__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(files);
})()], null)], null);
} else {
return null;
}
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.file/files");
frontend.components.file.file = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var path = frontend.components.file.get_path(state);
var format = logseq.graph_parser.util.get_format(path);
var original_name = (frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file_page.call(null,path));
var random_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0());
return daiquiri.core.create_element("div",{'id':["file-edit-wrapper-",random_id].join(''),'key':path,'className':"file"},[daiquiri.core.create_element("h1",{'className':"title"},[daiquiri.core.create_element("bdi",null,[decodeURI(path)])]),(cljs.core.truth_(original_name)?daiquiri.core.create_element("div",{'className':"text-sm mb-4 ml-1"},["Page: ",daiquiri.core.create_element("a",{'style':{'borderRadius':(4)},'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),original_name], null)),'onClick':(function (e){
if(cljs.core.truth_(frontend.components.file.goog$module$goog$object.get(e,"shiftKey"))){
var temp__5720__auto___59289 = (function (){var G__59285 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(original_name) : frontend.util.page_name_sanity_lc.call(null,original_name))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__59285) : frontend.db.entity.call(null,G__59285));
})();
if(cljs.core.truth_(temp__5720__auto___59289)){
var page_59291 = temp__5720__auto___59289;
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_59291),new cljs.core.Keyword(null,"page","page",849072397));
} else {
}

return frontend.util.stop(e);
} else {
return null;
}
}),'className':"bg-base-2 p-1 ml-1"},[daiquiri.interpreter.interpret(original_name)])]):null),(cljs.core.truth_((function (){var and__5041__auto__ = original_name;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.starts_with_QMARK_(original_name,"logseq/")));
} else {
return and__5041__auto__;
}
})())?(function (){var attrs59279 = frontend.components.svg.warning.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs59279))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","ml-1","mb-4"], null)], null),attrs59279], 0))):{'className':"text-sm ml-1 mb-4"}),((cljs.core.map_QMARK_(attrs59279))?[daiquiri.core.create_element("span",{'className':"ml-1"},["Please don't remove the page's title property (you can still modify it)."])]:[daiquiri.interpreter.interpret(attrs59279),daiquiri.core.create_element("span",{'className':"ml-1"},["Please don't remove the page's title property (you can still modify it)."])]));
})():null),(cljs.core.truth_((function (){var and__5041__auto__ = format;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(logseq.graph_parser.config.img_formats(),format);
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("img",{'src':path},[]):(cljs.core.truth_((function (){var and__5041__auto__ = format;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(logseq.graph_parser.config.text_formats(),format);
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file.call(null,path));
if(cljs.core.truth_(temp__5720__auto__)){
var file_content = temp__5720__auto__;
var content = clojure.string.trim(file_content);
var mode = frontend.util.get_file_ext(path);
return frontend.components.lazy_editor.editor(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file?","file?",1755223728),true,new cljs.core.Keyword(null,"file-path","file-path",-2005501162),path], null),["file-edit-",random_id].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),mode], null),content,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
})()):(function (){var attrs59284 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","format-not-supported","file/format-not-supported",1268716007),cljs.core.name(format)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs59284))?daiquiri.interpreter.element_attributes(attrs59284):null),((cljs.core.map_QMARK_(attrs59284))?null:[daiquiri.interpreter.interpret(attrs59284)]));
})()
))]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.state.set_file_component_BANG_(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.clear_file_component_BANG_();

return state;
})], null)], null),"frontend.components.file/file");

//# sourceMappingURL=frontend.components.file.js.map
