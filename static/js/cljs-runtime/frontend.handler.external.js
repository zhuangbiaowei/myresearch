goog.provide('frontend.handler.external');
frontend.handler.external.index_files_BANG_ = (function frontend$handler$external$index_files_BANG_(repo,files,finish_handler){
var titles = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583),files));
var files__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(file);
var journal_QMARK_ = frontend.date.valid_journal_title_QMARK_(title);
var temp__5720__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(temp__5720__auto__)){
var text = temp__5720__auto__;
var title__$1 = (function (){var or__5043__auto__ = (cljs.core.truth_(journal_QMARK_)?frontend.date.journal_title__GT_default(title):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.replace(title,"/","-");
}
})();
var title__$2 = clojure.string.replace(logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$1(title__$1),"\n"," ");
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(journal_QMARK_)?frontend.config.get_journals_directory():frontend.config.get_pages_directory())),"/",title__$2,".md"].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),text], null);
} else {
return null;
}
}),files);
var files__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,files__$1);
frontend.handler.repo.parse_files_and_load_to_db_BANG_(repo,files__$2,null);

var files_58365__$3 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58354){
var map__58355 = p__58354;
var map__58355__$1 = cljs.core.__destructure_map(map__58355);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword("file","path","file/path",-191335748));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword("file","content","file/content",12680964));
if(cljs.core.truth_(path)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,content], null);
} else {
return null;
}
}),files__$2));
frontend.handler.file.alter_files(repo,files_58365__$3,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"add-history?","add-history?",1354241628),false,new cljs.core.Keyword(null,"update-db?","update-db?",-1641846808),false,new cljs.core.Keyword(null,"update-status?","update-status?",-1878751221),false,new cljs.core.Keyword(null,"finish-handler","finish-handler",770511735),finish_handler], null));

var journal_pages_tx = (function (){var titles__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.date.valid_journal_title_QMARK_,titles);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (title){
var day = frontend.date.journal_title__GT_int(title);
var page_name = (function (){var G__58356 = logseq.graph_parser.date_time_util.int__GT_journal_title(day,frontend.state.get_date_formatter());
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__58356) : frontend.util.page_name_sanity_lc.call(null,G__58356));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name,new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),day], null);
}),titles__$1);
})();
if(cljs.core.seq(journal_pages_tx)){
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(repo,journal_pages_tx) : frontend.db.transact_BANG_.call(null,repo,journal_pages_tx));
} else {
return null;
}
});
frontend.handler.external.import_from_roam_json_BANG_ = (function frontend$handler$external$import_from_roam_json_BANG_(data,finished_ok_handler){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var files = frontend.external.to_markdown_files(new cljs.core.Keyword(null,"roam","roam",-1785859900),data,cljs.core.PersistentArrayMap.EMPTY);
return frontend.handler.external.index_files_BANG_(repo,files,(function (){
return (finished_ok_handler.cljs$core$IFn$_invoke$arity$0 ? finished_ok_handler.cljs$core$IFn$_invoke$arity$0() : finished_ok_handler.call(null));
}));
} else {
return null;
}
});
frontend.handler.external.import_from_opml_BANG_ = (function frontend$handler$external$import_from_opml_BANG_(data,finished_ok_handler){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var vec__58357 = frontend.format.mldoc.opml__GT_edn(data);
var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58357,(0),null);
var parsed_blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58357,(1),null);
var parsed_blocks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.wrap_parse_block,frontend.format.block.extract_blocks(parsed_blocks,"",true,new cljs.core.Keyword(null,"markdown","markdown",1227225089)));
var page_name = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(headers);
if(cljs.core.not((frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.page_exists_QMARK_.call(null,page_name)))){
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null));
} else {
}

var page_block = (function (){var G__58363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__58363) : frontend.db.entity.call(null,G__58363));
})();
var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(page_block);
var blocks = (frontend.db.sort_by_left.cljs$core$IFn$_invoke$arity$2 ? frontend.db.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,page_block) : frontend.db.sort_by_left.call(null,children,page_block));
var last_block = cljs.core.last(blocks);
var snd_last_block = cljs.core.last(cljs.core.butlast(blocks));
var vec__58360 = (cljs.core.truth_((function (){var and__5041__auto__ = last_block;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(last_block));
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_block,true], null):(cljs.core.truth_(snd_last_block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snd_last_block,true], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_block,false], null)));
var target_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58360,(0),null);
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58360,(1),null);
frontend.handler.editor.paste_blocks(parsed_blocks__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target-block","target-block",348392017),target_block,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null));

var G__58364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name], null);
return (finished_ok_handler.cljs$core$IFn$_invoke$arity$1 ? finished_ok_handler.cljs$core$IFn$_invoke$arity$1(G__58364) : finished_ok_handler.call(null,G__58364));
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.external.js.map
