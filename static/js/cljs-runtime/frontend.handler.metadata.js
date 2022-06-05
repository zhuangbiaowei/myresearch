goog.provide('frontend.handler.metadata');
frontend.handler.metadata.default_metadata_str = "{}";
frontend.handler.metadata.set_metadata_BANG_ = (function frontend$handler$metadata$set_metadata_BANG_(k,v){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var encrypted_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("db","encrypted-secret","db/encrypted-secret",1946959297));
var path = frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$0();
var file_content = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file.call(null,path));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.create_metadata_file(repo,false),(function (_){
return promesa.protocols._promise((function (){var metadata_str = (function (){var or__5043__auto__ = file_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.metadata.default_metadata_str;
}
})();
var metadata = (function (){try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(metadata_str);
}catch (e48002){if((e48002 instanceof Error)){
var e = e48002;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Parsing metadata.edn failed: "], 0));

console.dir(e);

return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw e48002;

}
}})();
var new_metadata = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("block","properties","block/properties",708347145)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(metadata,new cljs.core.Keyword("block","properties","block/properties",708347145),v):(function (){var ks = ((cljs.core.vector_QMARK_(k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
return cljs.core.assoc_in(metadata,ks,v);
})()
);
var new_metadata__$1 = ((encrypted_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_metadata,new cljs.core.Keyword("db","encrypted?","db/encrypted?",491114125),true):new_metadata);
var new_content = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_metadata__$1], 0));
return frontend.handler.file.set_file_content_BANG_(repo,path,new_content);
})());
}));
}));
} else {
return null;
}
});
frontend.handler.metadata.set_pages_metadata_BANG_ = (function frontend$handler$metadata$set_pages_metadata_BANG_(repo){
var path = frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$1(repo);
var all_pages = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48008_SHARP_){
return cljs.core.select_keys(p1__48008_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null));
}),frontend.handler.common.fix_pages_timestamps((frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_pages.call(null,repo))))));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.create_pages_metadata_file(repo),(function (){
return null;
})),(function (_){
return promesa.protocols._promise((function (){var new_content = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48011_48021 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48012_48022 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48014_48023 = true;
var _STAR_print_fn_STAR__temp_val__48016_48024 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48014_48023);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48016_48024);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(all_pages);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48012_48022);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48011_48021);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return frontend.fs.write_file_BANG_(repo,frontend.config.get_repo_dir(repo),path,new_content,cljs.core.PersistentArrayMap.EMPTY);
})());
}));
}));
});
frontend.handler.metadata.set_db_encrypted_secret_BANG_ = (function frontend$handler$metadata$set_db_encrypted_secret_BANG_(encrypted_secret){
if(clojure.string.blank_QMARK_(encrypted_secret)){
return null;
} else {
return frontend.handler.metadata.set_metadata_BANG_(new cljs.core.Keyword("db","encrypted-secret","db/encrypted-secret",1946959297),encrypted_secret);
}
});
frontend.handler.metadata.handler_properties_BANG_ = (function frontend$handler$metadata$handler_properties_BANG_(all_properties,properties_tx){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,datom){
var v = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
var id = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"title","title",636505583));
}
})();
if(cljs.core.truth_(id)){
var added_QMARK_ = datascript.db.datom_added(datom);
var remove_all_properties_QMARK_ = ((cljs.core.not(added_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(v))));
if(remove_all_properties_QMARK_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,id);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,id,v);
}
} else {
return acc;
}
}),all_properties,properties_tx);
});
frontend.handler.metadata.update_properties_BANG_ = (function frontend$handler$metadata$update_properties_BANG_(properties_tx){
return frontend.handler.metadata.set_metadata_BANG_(new cljs.core.Keyword("block","properties","block/properties",708347145),(function (p1__48017_SHARP_){
return frontend.handler.metadata.handler_properties_BANG_(p1__48017_SHARP_,properties_tx);
}));
});

//# sourceMappingURL=frontend.handler.metadata.js.map
