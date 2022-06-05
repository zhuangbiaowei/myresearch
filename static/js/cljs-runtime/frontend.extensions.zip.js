goog.provide('frontend.extensions.zip');
var module$node_modules$jszip$lib$index=shadow.js.require("module$node_modules$jszip$lib$index", {});
frontend.extensions.zip.make_file = (function frontend$extensions$zip$make_file(content,file_name,args){
var blob_content = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
var last_modified = (function (){var or__5043__auto__ = (content["lastModified"]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new Date());
}
})();
var args__$1 = cljs.core.clj__GT_js(args);
(args__$1["lastModified"] = last_modified);

return (new File(blob_content,file_name,args__$1));
});
frontend.extensions.zip.make_zip = (function frontend$extensions$zip$make_zip(zip_filename,file_name__GT_content,repo){
var zip = (new module$node_modules$jszip$lib$index());
var zip_foldername = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(zip_filename,(clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(zip_filename,"/") + (1)));
var src_filepath = clojure.string.replace(repo,frontend.config.local_db_prefix,"");
var folder = zip.folder(zip_foldername);
var seq__82387_82404 = cljs.core.seq(file_name__GT_content);
var chunk__82388_82405 = null;
var count__82389_82406 = (0);
var i__82390_82407 = (0);
while(true){
if((i__82390_82407 < count__82389_82406)){
var vec__82398_82411 = chunk__82388_82405.cljs$core$IIndexed$_nth$arity$2(null,i__82390_82407);
var file_name_82412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82398_82411,(0),null);
var content_82413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82398_82411,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_82412,src_filepath,""),/^\/+/,""),content_82413);


var G__82415 = seq__82387_82404;
var G__82416 = chunk__82388_82405;
var G__82417 = count__82389_82406;
var G__82418 = (i__82390_82407 + (1));
seq__82387_82404 = G__82415;
chunk__82388_82405 = G__82416;
count__82389_82406 = G__82417;
i__82390_82407 = G__82418;
continue;
} else {
var temp__5720__auto___82419 = cljs.core.seq(seq__82387_82404);
if(temp__5720__auto___82419){
var seq__82387_82420__$1 = temp__5720__auto___82419;
if(cljs.core.chunked_seq_QMARK_(seq__82387_82420__$1)){
var c__5565__auto___82421 = cljs.core.chunk_first(seq__82387_82420__$1);
var G__82422 = cljs.core.chunk_rest(seq__82387_82420__$1);
var G__82423 = c__5565__auto___82421;
var G__82424 = cljs.core.count(c__5565__auto___82421);
var G__82425 = (0);
seq__82387_82404 = G__82422;
chunk__82388_82405 = G__82423;
count__82389_82406 = G__82424;
i__82390_82407 = G__82425;
continue;
} else {
var vec__82401_82426 = cljs.core.first(seq__82387_82420__$1);
var file_name_82427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82401_82426,(0),null);
var content_82428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82401_82426,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_82427,src_filepath,""),/^\/+/,""),content_82428);


var G__82429 = cljs.core.next(seq__82387_82420__$1);
var G__82430 = null;
var G__82431 = (0);
var G__82432 = (0);
seq__82387_82404 = G__82429;
chunk__82388_82405 = G__82430;
count__82389_82406 = G__82431;
i__82390_82407 = G__82432;
continue;
}
} else {
}
}
break;
}

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___36093__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(zip.generateAsync(({"type": "blob"})),(function (zip_blob){
return promesa.protocols._promise(frontend.extensions.zip.make_file(zip_blob,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(zip_filename),".zip"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"application/zip"], null)));
}));
}));
});

//# sourceMappingURL=frontend.extensions.zip.js.map
