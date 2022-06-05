goog.provide('frontend.db.model');
frontend.db.model.initial_blocks_length = (100);
frontend.db.model.step_loading_blocks = (50);
frontend.db.model.block_attrs = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","_refs","block/_refs",830218531),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","marker","block/marker",1231576318),new cljs.core.Keyword("block","priority","block/priority",1491369544),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),new cljs.core.Keyword("block","scheduled","block/scheduled",584810412),new cljs.core.Keyword("block","deadline","block/deadline",660945231),new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Keyword("block","heading-level","block/heading-level",661361785),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_parent","block/_parent",-639389670),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
frontend.db.model.pull_block = (function frontend$db$model$pull_block(id){
var repo = frontend.state.get_current_repo();
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
return cljs.core.first(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","block","frontend.db.react/block",1552179739),id], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,frontend.db.model.block_attrs], 0))));
} else {
return null;
}
});
frontend.db.model.get_tag_pages = (function frontend$db$model$get_tag_pages(repo,tag_name){
if(cljs.core.truth_(tag_name)){
var G__59708 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?original-name","?original-name",-1097243956,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?tag","?tag",157764474,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?tag","?tag",157764474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?original-name","?original-name",-1097243956,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null)], null);
var G__59709 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__59710 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(tag_name) : frontend.util.page_name_sanity_lc.call(null,tag_name));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__59708,G__59709,G__59710) : datascript.core.q.call(null,G__59708,G__59709,G__59710));
} else {
return null;
}
});
frontend.db.model.get_all_tagged_pages = (function frontend$db$model$get_all_tagged_pages(repo){
var G__59711 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Symbol(null,"?tag","?tag",157764474,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?tag","?tag",157764474,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null)], null);
var G__59712 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__59711,G__59712) : datascript.core.q.call(null,G__59711,G__59712));
});
frontend.db.model.get_all_namespace_relation = (function frontend$db$model$get_all_namespace_relation(repo){
var G__59713 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null)], null);
var G__59714 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__59713,G__59714) : datascript.core.q.call(null,G__59713,G__59714));
});
frontend.db.model.get_pages = (function frontend$db$model$get_pages(repo){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__59715 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-original-name","?page-original-name",849062408,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)),new cljs.core.Symbol(null,"?page-original-name","?page-original-name",849062408,null)], null)], null);
var G__59716 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__59715,G__59716) : datascript.core.q.call(null,G__59715,G__59716));
})());
});
frontend.db.model.get_all_pages = (function frontend$db$model$get_all_pages(repo){
var G__59717 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null);
var G__59718 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__59717,G__59718) : datascript.core.q.call(null,G__59717,G__59718));
});
frontend.db.model.get_page_alias = (function frontend$db$model$get_page_alias(repo,page_name){
var temp__5720__auto__ = (function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var G__59719 = (function (){var G__59720 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null)], null)], null);
var G__59721 = db;
var G__59722 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__59720,G__59721,G__59722) : datascript.core.q.call(null,G__59720,G__59721,G__59722));
})();
var G__59719__$1 = (((G__59719 == null))?null:frontend.db.utils.seq_flatten(G__59719));
if((G__59719__$1 == null)){
return null;
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(G__59719__$1);
}
} else {
return null;
}
});
frontend.db.model.get_alias_source_page = (function frontend$db$model$get_alias_source_page(repo,alias){
var temp__5720__auto__ = (function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var alias__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(alias) : frontend.util.page_name_sanity_lc.call(null,alias));
var pages = frontend.db.utils.seq_flatten((function (){var G__59723 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?alias","?alias",-990590980,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?a","?a",1314302913,null)], null)], null);
var G__59724 = db;
var G__59725 = alias__$1;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__59723,G__59724,G__59725) : datascript.core.q.call(null,G__59723,G__59724,G__59725));
})());
if(cljs.core.seq(pages)){
return cljs.core.some((function (page){
var aliases = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"alias","alias",-2039751630)], null))));
if(cljs.core.contains_QMARK_(aliases,alias__$1)){
return page;
} else {
return null;
}
}),pages);
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_files = (function frontend$db$model$get_files(repo){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.reverse(cljs.core.seq((function (){var G__59726 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null)], null);
var G__59727 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__59726,G__59727) : datascript.core.q.call(null,G__59726,G__59727));
})()));
} else {
return null;
}
});
frontend.db.model.get_files_blocks = (function frontend$db$model$get_files_blocks(repo_url,paths){
var paths__$1 = cljs.core.set(paths);
var pred = (function (_db,e){
return cljs.core.contains_QMARK_(paths__$1,e);
});
return frontend.db.utils.seq_flatten((function (){var G__59728 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__59729 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
var G__59730 = pred;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__59728,G__59729,G__59730) : datascript.core.q.call(null,G__59728,G__59729,G__59730));
})());
});
frontend.db.model.get_file_blocks = (function frontend$db$model$get_file_blocks(repo_url,path){
return frontend.db.utils.seq_flatten((function (){var G__59733 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__59734 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
var G__59735 = path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__59733,G__59734,G__59735) : datascript.core.q.call(null,G__59733,G__59734,G__59735));
})());
});
frontend.db.model.set_file_last_modified_at_BANG_ = (function frontend$db$model$set_file_last_modified_at_BANG_(repo,path,last_modified_at){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = path;
if(cljs.core.truth_(and__5041__auto____$1)){
return last_modified_at;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo,false);
if(cljs.core.truth_(temp__5720__auto__)){
var conn = temp__5720__auto__;
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),last_modified_at], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-refresh?","skip-refresh?",878432095),true], null));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_file_last_modified_at = (function frontend$db$model$get_file_last_modified_at(repo,path){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return path;
} else {
return and__5041__auto__;
}
})())){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310).cljs$core$IFn$_invoke$arity$1((function (){var G__59736 = db;
var G__59737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59736,G__59737) : datascript.core.entity.call(null,G__59736,G__59737));
})());
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.file_exists_QMARK_ = (function frontend$db$model$file_exists_QMARK_(repo,path){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return path;
} else {
return and__5041__auto__;
}
})())){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var G__59739 = db;
var G__59740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59739,G__59740) : datascript.core.entity.call(null,G__59739,G__59740));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_files_full = (function frontend$db$model$get_files_full(repo){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.flatten((function (){var G__59741 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null);
var G__59742 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__59741,G__59742) : datascript.core.q.call(null,G__59741,G__59742));
})());
} else {
return null;
}
});
frontend.db.model.get_file = (function frontend$db$model$get_file(var_args){
var G__59744 = arguments.length;
switch (G__59744) {
case 1:
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$1 = (function (path){
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),path);
}));

(frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$2 = (function (repo,path){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return path;
} else {
return and__5041__auto__;
}
})())){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1((function (){var G__59745 = db;
var G__59746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59745,G__59746) : datascript.core.entity.call(null,G__59745,G__59746));
})());
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_file.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_custom_css = (function frontend$db$model$get_custom_css(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return frontend.db.model.get_file.cljs$core$IFn$_invoke$arity$1(frontend.config.get_file_path(repo,"logseq/custom.css"));
} else {
return null;
}
});
frontend.db.model.get_block_by_uuid = (function frontend$db$model$get_block_by_uuid(id){
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),((cljs.core.uuid_QMARK_(id))?id:cljs.core.uuid(id))], null));
});
frontend.db.model.query_block_by_uuid = (function frontend$db$model$query_block_by_uuid(id){
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),((cljs.core.uuid_QMARK_(id))?id:cljs.core.uuid(id))], null));
});
frontend.db.model.get_page_format = (function frontend$db$model$get_page_format(page_name){
var or__5043__auto__ = (function (){var page = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page_name)], null));
var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5720__auto__ = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5720__auto__)){
var file = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(file)));
if(cljs.core.truth_(temp__5720__auto____$1)){
var path = temp__5720__auto____$1;
return logseq.graph_parser.util.get_format(path);
} else {
return null;
}
} else {
return null;
}
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
}
});
frontend.db.model.page_alias_set = (function frontend$db$model$page_alias_set(repo_url,page){
var temp__5720__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null)));
if(cljs.core.truth_(temp__5720__auto__)){
var page_id = temp__5720__auto__;
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([page_id]),cljs.core.set(frontend.db.utils.seq_flatten((function (){var G__59753 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null))], null);
var G__59754 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
var G__59755 = frontend.util.safe_page_name_sanity_lc(page);
var G__59756 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null),new cljs.core.Symbol(null,"?e3","?e3",-717655771,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e3","?e3",-717655771,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?e3","?e3",-717655771,null),new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e1","?e1",-1642774952,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","alias","block/alias",-2112644699),new cljs.core.Symbol(null,"?e3","?e3",-717655771,null)], null)], null)], null);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__59753,G__59754,G__59755,G__59756) : datascript.core.q.call(null,G__59753,G__59754,G__59755,G__59756));
})())));
} else {
return null;
}
});
frontend.db.model.get_entities_by_ids = (function frontend$db$model$get_entities_by_ids(var_args){
var G__59758 = arguments.length;
switch (G__59758) {
case 1:
return frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$1 = (function (ids){
return frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),ids);
}));

(frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$2 = (function (repo,ids){
if(cljs.core.truth_(repo)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),ids);
} else {
return null;
}
}));

(frontend.db.model.get_entities_by_ids.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_names_by_ids = (function frontend$db$model$get_page_names_by_ids(var_args){
var G__59768 = arguments.length;
switch (G__59768) {
case 1:
return frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1 = (function (ids){
return frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),ids);
}));

(frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2 = (function (repo,ids){
if(cljs.core.truth_(repo)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316)], null),ids));
} else {
return null;
}
}));

(frontend.db.model.get_page_names_by_ids.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_alias_names = (function frontend$db$model$get_page_alias_names(repo,page_name){
var alias_ids = frontend.db.model.page_alias_set(repo,page_name);
if(cljs.core.seq(alias_ids)){
var names = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59771_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(p1__59771_SHARP_) : frontend.util.page_name_sanity_lc.call(null,p1__59771_SHARP_)),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name)));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$2(repo,alias_ids)));
var lookup_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(name) : frontend.util.page_name_sanity_lc.call(null,name))], null);
}),names);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m);
}
}),frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),lookup_refs));
} else {
return null;
}
});
frontend.db.model.with_pages = (function frontend$db$model$with_pages(blocks){
var pages_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","page","block/page",822314108)),blocks));
var pages = ((cljs.core.seq(pages_ids))?frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366)], null),pages_ids):null);
var pages_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p),p);
}),cljs.core.PersistentArrayMap.EMPTY,pages);
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","page","block/page",822314108),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pages_map,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))));
}),blocks);
return blocks__$1;
});
frontend.db.model.get_page_properties = (function frontend$db$model$get_page_properties(page){
var temp__5720__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var page__$1 = temp__5720__auto__;
return new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page__$1);
} else {
return null;
}
});
frontend.db.model.sort_by_left = (function frontend$db$model$sort_by_left(var_args){
var G__59779 = arguments.length;
switch (G__59779) {
case 2:
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2 = (function (blocks,parent){
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$3(blocks,parent,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"check?","check?",-1230991970),true], null));
}));

(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$3 = (function (blocks,parent,p__59781){
var map__59782 = p__59781;
var map__59782__$1 = cljs.core.__destructure_map(map__59782);
var check_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"check?","check?",-1230991970));
if(cljs.core.truth_(check_QMARK_)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566),blocks))))){
var duplicates_60300 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59786){
var vec__59787 = p__59786;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59787,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59787,(1),null);
var left = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(k);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"duplicates","duplicates",1265485699),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59776_SHARP_){
return cljs.core.select_keys(p1__59776_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","file","block/file",183171933)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block)));
}),blocks))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59791){
var vec__59792 = p__59791;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59792,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59792,(1),null);
return (v > (1));
}),cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","left","block/left",-443712566)),blocks))));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566),blocks))))){
} else {
throw (new Error(["Assert failed: ","Each block should have a different left node","\n","(= (count blocks) (count (set (map :block/left blocks))))"].join('')));
}
} else {
}

var left__GT_blocks = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(b)),b);
}),cljs.core.PersistentArrayMap.EMPTY,blocks);
var block = parent;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(left__GT_blocks,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5718__auto__)){
var next = temp__5718__auto__;
var G__60301 = next;
var G__60302 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,next);
block = G__60301;
result = G__60302;
continue;
} else {
return cljs.core.vec(result);
}
break;
}
}));

(frontend.db.model.sort_by_left.cljs$lang$maxFixedArity = 3);

frontend.db.model.sort_by_left_recursive = (function frontend$db$model$sort_by_left_recursive(form){
return clojure.walk.postwalk((function (f){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(f);
if(and__5041__auto__){
return new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(f);
} else {
return and__5041__auto__;
}
})())){
var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(f);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword("block","_parent","block/_parent",-639389670)),new cljs.core.Keyword("block","children","block/children",-1040716209),frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(children,f));
} else {
return f;
}
}),form);
});
frontend.db.model.get_sorted_page_block_ids = (function frontend$db$model$get_sorted_page_block_ids(page_id){
var root = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(page_id);
var result = cljs.core.PersistentVector.EMPTY;
var children = frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(root),root);
while(true){
if(cljs.core.seq(children)){
var child = cljs.core.first(children);
var G__60303 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child));
var G__60304 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(child),child),cljs.core.rest(children));
result = G__60303;
children = G__60304;
continue;
} else {
return result;
}
break;
}
});
/**
 * Blocks could be non consecutive.
 */
frontend.db.model.sort_page_random_blocks = (function frontend$db$model$sort_page_random_blocks(blocks){
if(cljs.core.every_QMARK_((function (p1__59797_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(p1__59797_SHARP_),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
}),blocks)){
} else {
throw (new Error(["Assert failed: ","Blocks must to be in a same page.","\n","(every? (fn* [p1__59797#] (= (:block/page p1__59797#) (:block/page (first blocks)))) blocks)"].join('')));
}

var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
var sorted_ids = frontend.db.model.get_sorted_page_block_ids(page_id);
var blocks_map = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks),blocks);
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(blocks_map,sorted_ids);
});
frontend.db.model.has_children_QMARK_ = (function frontend$db$model$has_children_QMARK_(var_args){
var G__59807 = arguments.length;
switch (G__59807) {
case 1:
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0(),block_id);
}));

(frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db,block_id){
return (!((new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1((function (){var G__59808 = db;
var G__59809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59808,G__59809) : datascript.core.entity.call(null,G__59808,G__59809));
})()) == null)));
}));

(frontend.db.model.has_children_QMARK_.cljs$lang$maxFixedArity = 2);

frontend.db.model.collapsed_and_has_children_QMARK_ = (function frontend$db$model$collapsed_and_has_children_QMARK_(db,block){
var and__5041__auto__ = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.has_children_QMARK_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5041__auto__;
}
});
frontend.db.model.get_by_parent__AMPERSAND__left = (function frontend$db$model$get_by_parent__AMPERSAND__left(db,parent_id,left_id){
if(cljs.core.truth_((function (){var and__5041__auto__ = parent_id;
if(cljs.core.truth_(and__5041__auto__)){
return left_id;
} else {
return and__5041__auto__;
}
})())){
var lefts = new cljs.core.Keyword("block","_left","block/_left",865231986).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,left_id) : datascript.core.entity.call(null,db,left_id)));
return cljs.core.some((function (node){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(node)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node))))){
return node;
} else {
return null;
}
}),lefts);
} else {
return null;
}
});
/**
 * Get the next outdented block of the block that has the `id`.
 *   e.g.
 *   - a
 *  - b
 *    - c
 *   - d
 * 
 *   The next outdented block of `c` is `d`.
 */
frontend.db.model.get_next_outdented_block = (function frontend$db$model$get_next_outdented_block(db,id){
var temp__5720__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
var temp__5718__auto__ = frontend.db.model.get_by_parent__AMPERSAND__left(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
if(cljs.core.truth_(temp__5718__auto__)){
var parent_sibling = temp__5718__auto__;
return parent_sibling;
} else {
var G__59822 = db;
var G__59823 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
return (frontend.db.model.get_next_outdented_block.cljs$core$IFn$_invoke$arity$2 ? frontend.db.model.get_next_outdented_block.cljs$core$IFn$_invoke$arity$2(G__59822,G__59823) : frontend.db.model.get_next_outdented_block.call(null,G__59822,G__59823));
}
} else {
return null;
}
});
frontend.db.model.get_block_parent = (function frontend$db$model$get_block_parent(var_args){
var G__59825 = arguments.length;
switch (G__59825) {
case 1:
return frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),block_id);
}));

(frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2 = (function (repo,block_id){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var temp__5720__auto____$1 = (function (){var G__59826 = db;
var G__59827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59826,G__59827) : datascript.core.entity.call(null,G__59826,G__59827));
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var block = temp__5720__auto____$1;
return new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_block_parent.cljs$lang$maxFixedArity = 2);

frontend.db.model.top_block_QMARK_ = (function frontend$db$model$top_block_QMARK_(block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
});
frontend.db.model.get_block_parents = (function frontend$db$model$get_block_parents(var_args){
var G__59829 = arguments.length;
switch (G__59829) {
case 2:
return frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2 = (function (repo,block_id){
return frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$3(repo,block_id,(100));
}));

(frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$3 = (function (repo,block_id,depth){
var block_id__$1 = block_id;
var parents = cljs.core.List.EMPTY;
var d = (1);
while(true){
if((d > depth)){
return parents;
} else {
var temp__5718__auto__ = frontend.db.model.get_block_parent.cljs$core$IFn$_invoke$arity$2(repo,block_id__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var parent = temp__5718__auto__;
var G__60309 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent);
var G__60310 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,parent);
var G__60311 = (d + (1));
block_id__$1 = G__60309;
parents = G__60310;
d = G__60311;
continue;
} else {
return parents;
}
}
break;
}
}));

(frontend.db.model.get_block_parents.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_block_parents_v2 = (function frontend$db$model$get_block_parents_v2(repo,block_id){
var G__59840 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__59841 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__59842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__59840,G__59841,G__59842) : datascript.core.pull.call(null,G__59840,G__59841,G__59842));
});
frontend.db.model.get_next_open_block = (function frontend$db$model$get_next_open_block(var_args){
var G__59844 = arguments.length;
switch (G__59844) {
case 2:
return frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$2 = (function (db,block){
return frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3(db,block,null);
}));

(frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3 = (function (db,block,scoped_block_id){
var block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var block_parent_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block));
var next_block = (function (){var or__5043__auto__ = (cljs.core.truth_((function (){var and__5041__auto__ = frontend.db.model.collapsed_and_has_children_QMARK_(db,block);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_id,scoped_block_id);
} else {
return and__5041__auto__;
}
})())?frontend.db.model.get_by_parent__AMPERSAND__left(db,block_parent_id,block_id):(function (){var or__5043__auto__ = frontend.db.model.get_by_parent__AMPERSAND__left(db,block_id,block_id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_by_parent__AMPERSAND__left(db,block_parent_id,block_id);
}
})());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_next_outdented_block(db,block_id);
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = scoped_block_id;
if(cljs.core.truth_(and__5041__auto__)){
return next_block;
} else {
return and__5041__auto__;
}
})())){
var parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(next_block))));
if(cljs.core.contains_QMARK_(parents,scoped_block_id)){
return next_block;
} else {
return null;
}
} else {
return next_block;
}
}));

(frontend.db.model.get_next_open_block.cljs$lang$maxFixedArity = 3);

/**
 * Result should be sorted.
 */
frontend.db.model.get_paginated_blocks_no_cache = (function frontend$db$model$get_paginated_blocks_no_cache(db,start_id,p__59868){
var map__59870 = p__59868;
var map__59870__$1 = cljs.core.__destructure_map(map__59870);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var include_start_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword(null,"include-start?","include-start?",1270472824));
var scoped_block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117));
var temp__5720__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,start_id) : datascript.core.entity.call(null,db,start_id));
if(cljs.core.truth_(temp__5720__auto__)){
var start = temp__5720__auto__;
var scoped_block_parents = (cljs.core.truth_(scoped_block_id)?(function (){var block = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,scoped_block_id) : datascript.core.entity.call(null,db,scoped_block_id));
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),frontend.db.model.get_block_parents.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))));
})():null);
var result = (function (){var block = start;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_((function (){var and__5041__auto__ = limit;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(result) >= limit);
} else {
return and__5041__auto__;
}
})())){
return result;
} else {
var next_block = frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3(db,block,scoped_block_id);
if(cljs.core.truth_(next_block)){
if(((cljs.core.seq(scoped_block_parents)) && (cljs.core.contains_QMARK_(scoped_block_parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(next_block)))))){
return result;
} else {
var G__60327 = next_block;
var G__60328 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,next_block);
block = G__60327;
result = G__60328;
continue;
}
} else {
return result;
}
}
break;
}
})();
if(cljs.core.truth_(include_start_QMARK_)){
return cljs.core.cons(start,result);
} else {
return result;
}
} else {
return null;
}
});
/**
 * Notice: if `not-collapsed?` is true, will skip searching for any collapsed block.
 */
frontend.db.model.get_block_last_direct_child = (function frontend$db$model$get_block_last_direct_child(var_args){
var G__59886 = arguments.length;
switch (G__59886) {
case 2:
return frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2 = (function (db,db_id){
return frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3(db,db_id,true);
}));

(frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3 = (function (db,db_id,not_collapsed_QMARK_){
var temp__5720__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,db_id) : datascript.core.entity.call(null,db,db_id));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
if((cljs.core.truth_(not_collapsed_QMARK_)?cljs.core.not(frontend.db.model.collapsed_and_has_children_QMARK_(db,block)):true)){
var children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block);
var all_left = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","left","block/left",-443712566)),children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_id], null)));
var all_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),children));
return cljs.core.first(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(all_ids,all_left));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_block_last_direct_child.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_block_last_child = (function frontend$db$model$get_block_last_child(db,db_id){
var last_child = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2(db,db_id);
var prev = last_child;
var last_child__$1 = last_child;
while(true){
if(cljs.core.truth_(last_child__$1)){
var G__60336 = last_child__$1;
var G__60337 = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$2(db,last_child__$1);
prev = G__60336;
last_child__$1 = G__60337;
continue;
} else {
return prev;
}
break;
}
});
frontend.db.model.get_prev_open_block = (function frontend$db$model$get_prev_open_block(db,id){
var block = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
var left = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block);
var left_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)))){
return left_id;
} else {
if(cljs.core.truth_(frontend.util.collapsed_QMARK_(left))){
return left_id;
} else {
var or__5043__auto__ = frontend.db.model.get_block_last_child(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return left_id;
}
}
}
});
frontend.db.model.recursive_child_QMARK_ = (function frontend$db$model$recursive_child_QMARK_(repo,child_id,parent_id){
var _STAR_last_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var node = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,child_id);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_last_node),node)){
return null;
} else {
cljs.core.reset_BANG_(_STAR_last_node,node);

if(cljs.core.truth_(node)){
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),parent_id)){
return true;
} else {
var G__60340 = parent;
node = G__60340;
continue;
}
} else {
return false;
}
}
break;
}
});
frontend.db.model.get_prev_sibling = (function frontend$db$model$get_prev_sibling(db,id){
var temp__5720__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
if(cljs.core.truth_(temp__5720__auto__)){
var e = temp__5720__auto__;
var left = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(e)))){
return left;
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_right_sibling = (function frontend$db$model$get_right_sibling(db,db_id){
var temp__5720__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,db_id) : datascript.core.entity.call(null,db,db_id));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return frontend.db.model.get_by_parent__AMPERSAND__left(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)),db_id);
} else {
return null;
}
});
/**
 * The child block could be collapsed.
 */
frontend.db.model.last_child_block_QMARK_ = (function frontend$db$model$last_child_block_QMARK_(db,parent_id,child_id){
var temp__5720__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,child_id) : datascript.core.entity.call(null,db,child_id));
if(cljs.core.truth_(temp__5720__auto__)){
var child = temp__5720__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,child_id)){
return true;
} else {
if(cljs.core.truth_(frontend.db.model.get_right_sibling(db,child_id))){
return false;
} else {
var G__59912 = db;
var G__59913 = parent_id;
var G__59914 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(child));
return (frontend.db.model.last_child_block_QMARK_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.model.last_child_block_QMARK_.cljs$core$IFn$_invoke$arity$3(G__59912,G__59913,G__59914) : frontend.db.model.last_child_block_QMARK_.call(null,G__59912,G__59913,G__59914));

}
}
} else {
return null;
}
});
frontend.db.model.consecutive_block_QMARK_ = (function frontend$db$model$consecutive_block_QMARK_(block_1,block_2){
var db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var aux_fn = (function (block_1__$1,block_2__$1){
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_1__$1),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_2__$1));
if(and__5041__auto__){
var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block_2__$1)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_1__$1));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var temp__5720__auto__ = frontend.db.model.get_prev_sibling(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_2__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var prev_sibling = temp__5720__auto__;
return frontend.db.model.last_child_block_QMARK_(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(prev_sibling),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_1__$1));
} else {
return null;
}
}
} else {
return and__5041__auto__;
}
});
var or__5043__auto__ = aux_fn(block_1,block_2);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return aux_fn(block_2,block_1);
}
});
frontend.db.model.get_non_consecutive_blocks = (function frontend$db$model$get_non_consecutive_blocks(blocks){
return cljs.core.vec(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_block){
if(((i + (1)) < cljs.core.count(blocks))){
if(cljs.core.truth_(frontend.db.model.consecutive_block_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,(i + (1)))))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,i);
}
} else {
return null;
}
}),blocks));
});
frontend.db.model.get_start_id_for_pagination_query = (function frontend$db$model$get_start_id_for_pagination_query(repo_url,current_db,p__59921,result,outliner_op,page_id,block_id,tx_block_ids){
var map__59922 = p__59921;
var map__59922__$1 = cljs.core.__destructure_map(map__59922);
var tx_report = map__59922__$1;
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59922__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59922__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var db_before__$1 = (function (){var or__5043__auto__ = db_before;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return current_db;
}
})();
var cached_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.deref(result));
var cached_ids_set = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cached_ids,page_id));
var first_changed_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"real-outliner-op","real-outliner-op",1979985933).cljs$core$IFn$_invoke$arity$1(tx_meta),new cljs.core.Keyword(null,"indent-outdent","indent-outdent",874329747)))?(cljs.core.truth_(frontend.state.logical_outdenting_QMARK_())?cljs.core.first(new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999).cljs$core$IFn$_invoke$arity$1(tx_meta)):cljs.core.last(new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999).cljs$core$IFn$_invoke$arity$1(tx_meta))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)))?(function (){var map__59925 = tx_meta;
var map__59925__$1 = cljs.core.__destructure_map(map__59925);
var move_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59925__$1,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59925__$1,new cljs.core.Keyword(null,"target","target",253001721));
var from_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59925__$1,new cljs.core.Keyword(null,"from-page","from-page",75165656));
var to_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59925__$1,new cljs.core.Keyword(null,"to-page","to-page",-1069954033));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,target)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = from_page;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = to_page;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_page,to_page);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,from_page)){
return cljs.core.first(move_blocks);
} else {
return target;
}
} else {
var match_ids = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(move_blocks,target));
var G__59933 = cached_ids;
var vec__59934 = G__59933;
var seq__59935 = cljs.core.seq(vec__59934);
var first__59936 = cljs.core.first(seq__59935);
var seq__59935__$1 = cljs.core.next(seq__59935);
var id = first__59936;
var others = seq__59935__$1;
var G__59933__$1 = G__59933;
while(true){
var vec__59940 = G__59933__$1;
var seq__59941 = cljs.core.seq(vec__59940);
var first__59942 = cljs.core.first(seq__59941);
var seq__59941__$1 = cljs.core.next(seq__59941);
var id__$1 = first__59942;
var others__$1 = seq__59941__$1;
if(cljs.core.truth_(id__$1)){
if(cljs.core.contains_QMARK_(match_ids,id__$1)){
return id__$1;
} else {
if(cljs.core.seq(others__$1)){
var G__60346 = others__$1;
G__59933__$1 = G__60346;
continue;
} else {
return null;
}
}
} else {
return null;
}
break;
}

}
}
})():(function (){var insert_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),outliner_op);
return cljs.core.some((function (p1__59920_SHARP_){
if(cljs.core.truth_((function (){var and__5041__auto__ = ((((insert_QMARK_) && ((!(cljs.core.contains_QMARK_(cached_ids_set,p1__59920_SHARP_)))))) || (true));
if(and__5041__auto__){
return frontend.db.model.recursive_child_QMARK_(repo_url,p1__59920_SHARP_,block_id);
} else {
return and__5041__auto__;
}
})())){
return p1__59920_SHARP_;
} else {
return null;
}
}),tx_block_ids);
})()
));
if(cljs.core.truth_(first_changed_id)){
var or__5043__auto__ = frontend.db.model.get_prev_open_block(db_before__$1,first_changed_id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_prev_open_block(current_db,first_changed_id);
}
} else {
return null;
}
});
/**
 * Notice: tx-report could be nil.
 */
frontend.db.model.build_paginated_blocks_from_cache = (function frontend$db$model$build_paginated_blocks_from_cache(repo_url,tx_report,result,outliner_op,page_id,block_id,tx_block_ids,scoped_block_id){
var map__59944 = tx_report;
var map__59944__$1 = cljs.core.__destructure_map(map__59944);
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59944__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var current_db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-block","save-block",591532560),null,new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),null], null), null),outliner_op)){
return cljs.core.deref(result);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),null,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null,new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367),null], null), null),outliner_op)){
var temp__5720__auto__ = frontend.db.model.get_start_id_for_pagination_query(repo_url,current_db,tx_report,result,outliner_op,page_id,block_id,tx_block_ids);
if(cljs.core.truth_(temp__5720__auto__)){
var start_id = temp__5720__auto__;
var start_page_QMARK_ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(start_id));
if(cljs.core.truth_(start_page_QMARK_)){
return null;
} else {
var previous_blocks = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b));
}),cljs.core.deref(result));
var limit = (25);
var more = frontend.db.model.get_paginated_blocks_no_cache(current_db,start_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"include-start?","include-start?",1270472824),true,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),scoped_block_id], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(previous_blocks,more);
}
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Get paginated blocks for a page or a specific block.
 * `scoped-block-id`: if specified, returns its children only.
 */
frontend.db.model.get_paginated_blocks = (function frontend$db$model$get_paginated_blocks(var_args){
var G__59967 = arguments.length;
switch (G__59967) {
case 2:
return frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,block_id){
return frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(repo_url,block_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.db.model.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,block_id,p__59972){
var map__59973 = p__59972;
var map__59973__$1 = cljs.core.__destructure_map(map__59973);
var pull_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59973__$1,new cljs.core.Keyword(null,"pull-keys","pull-keys",-768938808),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null));
var start_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59973__$1,new cljs.core.Keyword(null,"start-block","start-block",885980136));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59973__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),frontend.db.model.initial_blocks_length);
var use_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59973__$1,new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),true);
var scoped_block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59973__$1,new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),null);
if(cljs.core.truth_(block_id)){
if(cljs.core.integer_QMARK_(block_id)){
} else {
throw (new Error(["Assert failed: ",["wrong block-id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)].join(''),"\n","(integer? block-id)"].join('')));
}

var entity = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo_url,block_id);
var page_QMARK_ = (!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(entity) == null)));
var page_entity = ((page_QMARK_)?entity:new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(entity));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity);
var bare_page_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),page_id,new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page_entity)], null);
var query_key = ((page_QMARK_)?new cljs.core.Keyword("frontend.db.react","page-blocks","frontend.db.react/page-blocks",1515328263):new cljs.core.Keyword("frontend.db.react","block-and-children","frontend.db.react/block-and-children",-1481509175));
var G__59984 = frontend.db.react.q(repo_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_key,block_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),use_cache_QMARK_,new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),(function (db,tx_report,result){
var tx_data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
var refs = (function (){var G__59995 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59946_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__59946_SHARP_));
}),tx_data);
if((G__59995 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),G__59995);
}
})();
var tx_block_ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),tx_data),refs));
var vec__59991 = (cljs.core.truth_((function (){var and__5041__auto__ = tx_report;
if(cljs.core.truth_(and__5041__auto__)){
return result;
} else {
return and__5041__auto__;
}
})())?(function (){var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,tx_block_ids));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.zipmap(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks),blocks),cljs.core.zipmap(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.deref(result)),cljs.core.deref(result))], null);
})():null);
var tx_id__GT_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59991,(0),null);
var cached_id__GT_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59991,(1),null);
var limit__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = result;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref(result);
} else {
return and__5041__auto__;
}
})())?(function (){var x__5128__auto__ = (cljs.core.count(cljs.core.deref(result)) + (5));
var y__5129__auto__ = limit;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})():limit);
var outliner_op = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450)], null));
var blocks = frontend.db.model.build_paginated_blocks_from_cache(repo_url,tx_report,result,outliner_op,page_id,block_id,tx_block_ids,scoped_block_id);
var blocks__$1 = (function (){var or__5043__auto__ = blocks;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_paginated_blocks_no_cache(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url),block_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit__$1,new cljs.core.Keyword(null,"include-start?","include-start?",1270472824),(!(page_QMARK_)),new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),scoped_block_id], null));
}
})();
var block_eids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks__$1);
var blocks__$2 = ((((cljs.core.seq(tx_id__GT_block)) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null], null), null),outliner_op))))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx_id__GT_block,id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cached_id__GT_block,id);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,id);
}
}
}),block_eids):frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,block_eids));
var blocks__$3 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return (new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(b) == null);
}),blocks__$2);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","page","block/page",822314108),bare_page_map);
}),blocks__$3);
})], null),null);
if((G__59984 == null)){
return null;
} else {
return frontend.util.react(G__59984);
}
} else {
return null;
}
}));

(frontend.db.model.get_paginated_blocks.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_page_blocks_no_cache = (function frontend$db$model$get_page_blocks_no_cache(var_args){
var G__60045 = arguments.length;
switch (G__60045) {
case 1:
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 = (function (page){
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),page,null);
}));

(frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,page){
return frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(repo_url,page,null);
}));

(frontend.db.model.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,page,p__60064){
var map__60065 = p__60064;
var map__60065__$1 = cljs.core.__destructure_map(map__60065);
var pull_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60065__$1,new cljs.core.Keyword(null,"pull-keys","pull-keys",-768938808),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
if(cljs.core.truth_(page)){
var page__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page__$1], null)));
var db = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
if(cljs.core.truth_(page_id)){
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id);
var block_eids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms);
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_url,pull_keys,block_eids);
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_page_blocks_no_cache.cljs$lang$maxFixedArity = 3);

frontend.db.model.get_page_blocks_count = (function frontend$db$model$get_page_blocks_count(repo,page_id){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.count(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id));
} else {
return null;
}
});
/**
 * Whether a page exists.
 */
frontend.db.model.page_exists_QMARK_ = (function frontend$db$model$page_exists_QMARK_(page_name){
if(cljs.core.truth_(page_name)){
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
} else {
return null;
}
});
/**
 * Whether a page is empty. Does it has a non-page block?
 *   `page-id` could be either a string or a db/id.
 */
frontend.db.model.page_empty_QMARK_ = (function frontend$db$model$page_empty_QMARK_(repo,page_id){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var page_id__$1 = ((typeof page_id === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page_id)], null):page_id);
var page = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,page_id__$1) : datascript.core.entity.call(null,db,page_id__$1));
return (new cljs.core.Keyword("block","_left","block/_left",865231986).cljs$core$IFn$_invoke$arity$1(page) == null);
} else {
return null;
}
});
frontend.db.model.page_empty_or_dummy_QMARK_ = (function frontend$db$model$page_empty_or_dummy_QMARK_(repo,page_id){
var or__5043__auto__ = frontend.db.model.page_empty_QMARK_(repo,page_id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),page_id);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(datoms),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)))))));
} else {
return null;
}
}
});
frontend.db.model.parents_collapsed_QMARK_ = (function frontend$db$model$parents_collapsed_QMARK_(repo,block_id){
var temp__5720__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(frontend.db.model.get_block_parents_v2(repo,block_id));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return cljs.core.some(frontend.util.collapsed_QMARK_,cljs.core.tree_seq(cljs.core.map_QMARK_,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x)], null);
}),block));
} else {
return null;
}
});
frontend.db.model.block_collapsed_QMARK_ = (function frontend$db$model$block_collapsed_QMARK_(var_args){
var G__60079 = arguments.length;
switch (G__60079) {
case 1:
return frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (block_id){
return frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),block_id);
}));

(frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (repo,block_id){
var temp__5720__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return frontend.util.collapsed_QMARK_(block);
} else {
return null;
}
}));

(frontend.db.model.block_collapsed_QMARK_.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_block_page = (function frontend$db$model$get_block_page(repo,block_id){
var temp__5720__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null));
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
} else {
return null;
}
});
frontend.db.model.get_pages_by_name_partition = (function frontend$db$model$get_pages_by_name_partition(repo,partition){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
if(clojure.string.blank_QMARK_(partition)){
return null;
} else {
var partition__$1 = (function (){var G__60085 = clojure.string.trim(partition);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__60085) : frontend.util.page_name_sanity_lc.call(null,G__60085));
})();
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (datom){
var page = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
return clojure.string.includes_QMARK_(page,partition__$1);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword("block","name","block/name",1619760316))));
if(cljs.core.seq(ids)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),ids);
} else {
return null;
}
}
} else {
return null;
}
});
frontend.db.model.get_block_children_ids = (function frontend$db$model$get_block_children_ids(repo,block_uuid){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__60087 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?c","?c",870679775,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
var G__60088 = db;
var G__60089 = eid;
var G__60090 = frontend.db.rules.rules;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__60087,G__60088,G__60089,G__60090) : datascript.core.q.call(null,G__60087,G__60088,G__60089,G__60090));
})());
} else {
return null;
}
});
/**
 * Doesn't include nested children.
 */
frontend.db.model.get_block_immediate_children = (function frontend$db$model$get_block_immediate_children(repo,block_uuid){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2((function (){var G__60093 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?parent-id","?parent-id",-276669426,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?parent-id","?parent-id",-276669426,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null)], null);
var G__60094 = db;
var G__60095 = block_uuid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60093,G__60094,G__60095) : datascript.core.q.call(null,G__60093,G__60094,G__60095));
})(),frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)));
} else {
return null;
}
});
/**
 * Doesn't include nested children.
 */
frontend.db.model.sub_block_direct_children = (function frontend$db$model$sub_block_direct_children(repo,block_uuid){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","block-direct-children","frontend.db.react/block-direct-children",94659787),block_uuid], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?parent-id","?parent-id",-276669426,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?parent-id","?parent-id",-276669426,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_uuid], 0))),frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)));
} else {
return null;
}
});
/**
 * Including nested children.
 */
frontend.db.model.get_block_children = (function frontend$db$model$get_block_children(repo,block_uuid){
var ids = frontend.db.model.get_block_children_ids(repo,block_uuid);
var ids__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),ids);
if(cljs.core.seq(ids__$1)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),ids__$1);
} else {
return null;
}
});
frontend.db.model.flatten_tree = (function frontend$db$model$flatten_tree(blocks_tree){
var temp__5718__auto__ = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(blocks_tree);
if(cljs.core.truth_(temp__5718__auto__)){
var children = temp__5718__auto__;
return cljs.core.cons(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(blocks_tree,new cljs.core.Keyword("block","_parent","block/_parent",-639389670)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.db.model.flatten_tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks_tree], null);
}
});
frontend.db.model.get_block_and_children = (function frontend$db$model$get_block_and_children(repo,block_uuid){
var G__60101 = (function (){var G__60102 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
var G__60103 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__60104 = block_uuid;
var G__60105 = frontend.db.model.block_attrs;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__60102,G__60103,G__60104,G__60105) : datascript.core.q.call(null,G__60102,G__60103,G__60104,G__60105));
})();
var G__60101__$1 = (((G__60101 == null))?null:cljs.core.first(G__60101));
if((G__60101__$1 == null)){
return null;
} else {
return frontend.db.model.flatten_tree(G__60101__$1);
}
});
frontend.db.model.get_file_page = (function frontend$db$model$get_file_page(var_args){
var G__60110 = arguments.length;
switch (G__60110) {
case 1:
return frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$1 = (function (file_path){
return frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2(file_path,true);
}));

(frontend.db.model.get_file_page.cljs$core$IFn$_invoke$arity$2 = (function (file_path,original_name_QMARK_){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto____$1)){
var db = temp__5720__auto____$1;
var G__60117 = (function (){var G__60118 = (cljs.core.truth_(original_name_QMARK_)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null)], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null)], null));
var G__60119 = db;
var G__60120 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60118,G__60119,G__60120) : datascript.core.q.call(null,G__60118,G__60119,G__60120));
})();
var G__60117__$1 = (((G__60117 == null))?null:frontend.db.utils.seq_flatten(G__60117));
if((G__60117__$1 == null)){
return null;
} else {
return cljs.core.first(G__60117__$1);
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_file_page.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_file = (function frontend$db$model$get_page_file(var_args){
var G__60123 = arguments.length;
switch (G__60123) {
case 1:
return frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
return frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),page_name);
}));

(frontend.db.model.get_page_file.cljs$core$IFn$_invoke$arity$2 = (function (repo,page_name){
var G__60128 = (function (){var or__5043__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),page_name], null));
}
})();
if((G__60128 == null)){
return null;
} else {
return new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(G__60128);
}
}));

(frontend.db.model.get_page_file.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_block_file_path = (function frontend$db$model$get_block_file_path(block){
var temp__5720__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5720__auto__)){
var page_id = temp__5720__auto__;
return new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(page_id)));
} else {
return null;
}
});
frontend.db.model.get_file_page_id = (function frontend$db$model$get_file_page_id(file_path){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto____$1)){
var db = temp__5720__auto____$1;
var G__60130 = (function (){var G__60131 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?file","?file",-1121006094,null)], null)], null);
var G__60132 = db;
var G__60133 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60131,G__60132,G__60133) : datascript.core.q.call(null,G__60131,G__60132,G__60133));
})();
var G__60130__$1 = (((G__60130 == null))?null:frontend.db.utils.seq_flatten(G__60130));
if((G__60130__$1 == null)){
return null;
} else {
return cljs.core.first(G__60130__$1);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_page = (function frontend$db$model$get_page(page_name){
var temp__5718__auto__ = cljs.core.parse_uuid(page_name);
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null));
} else {
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
}
});
/**
 * Given any readable page-name, return the exact page-name in db. If page
 * doesn't exists yet, will return the passed `page-name`. Accepts both
 * sanitized or unsanitized names.
 * alias?: if true, alias is allowed to be returned; otherwise, it would be deref.
 */
frontend.db.model.get_redirect_page_name = (function frontend$db$model$get_redirect_page_name(var_args){
var G__60135 = arguments.length;
switch (G__60135) {
case 1:
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2(page_name,false);
}));

(frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2 = (function (page_name,alias_QMARK_){
if(cljs.core.truth_(page_name)){
var page_name_SINGLEQUOTE_ = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var page_entity = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name_SINGLEQUOTE_], null));
if(cljs.core.truth_(alias_QMARK_)){
return page_name_SINGLEQUOTE_;
} else {
if((page_entity == null)){
return page_name;
} else {
if(cljs.core.truth_(frontend.db.model.page_empty_or_dummy_QMARK_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity)))){
var source_page = frontend.db.model.get_alias_source_page(frontend.state.get_current_repo(),page_name_SINGLEQUOTE_);
var or__5043__auto__ = (cljs.core.truth_(source_page)?new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(source_page):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name_SINGLEQUOTE_;
}
} else {
return page_name_SINGLEQUOTE_;

}
}
}
} else {
return null;
}
}));

(frontend.db.model.get_redirect_page_name.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_original_name = (function frontend$db$model$get_page_original_name(page_name){
if(typeof page_name === 'string'){
var page = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name))], null));
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
} else {
return null;
}
});
frontend.db.model.get_journals_length = (function frontend$db$model$get_journals_length(){
var today = frontend.db.utils.date__GT_int((new Date()));
var G__60168 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null))], null)], null);
var G__60169 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
var G__60170 = today;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60168,G__60169,G__60170) : datascript.core.q.call(null,G__60168,G__60169,G__60170));
});
frontend.db.model.get_latest_journals = (function frontend$db$model$get_latest_journals(var_args){
var G__60174 = arguments.length;
switch (G__60174) {
case 1:
return frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$1 = (function (n){
return frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),n);
}));

(frontend.db.model.get_latest_journals.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,n){
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url))){
var date = (new Date());
var _ = date.setDate((date.getDate() - (n - (1))));
var today = frontend.db.utils.date__GT_int((new Date()));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","journals","frontend.db.react/journals",-1864001064)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?journal-day","?journal-day",2147417007,null),new cljs.core.Symbol(null,"?today","?today",-1774948230,null))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([today], 0))))));
} else {
return null;
}
}));

(frontend.db.model.get_latest_journals.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_page_referenced_pages = (function frontend$db$model$get_page_referenced_pages(repo,page){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var page_name = frontend.util.safe_page_name_sanity_lc(page);
var pages = frontend.db.model.page_alias_set(repo,page);
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null)));
var ref_pages = (function (){var G__60178 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"untuple","untuple",-606149900,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null)], null)], null);
var G__60179 = db;
var G__60180 = pages;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60178,G__60179,G__60180) : datascript.core.q.call(null,G__60178,G__60179,G__60180));
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,frontend.db.model.get_page_alias(repo,page__$1)], null);
}),ref_pages);
} else {
return null;
}
});
frontend.db.model.get_page_linked_refs_refed_pages = (function frontend$db$model$get_page_linked_refs_refed_pages(repo,page){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var G__60185 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?other-p","?other-p",-1891084128,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?other-p","?other-p",-1891084128,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?other-p","?other-p",-1891084128,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null)], null);
var G__60186 = db;
var G__60187 = frontend.db.rules.rules;
var G__60188 = frontend.util.safe_page_name_sanity_lc(page);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__60185,G__60186,G__60187,G__60188) : datascript.core.q.call(null,G__60185,G__60186,G__60187,G__60188));
})());
} else {
return null;
}
});
frontend.db.model.get_pages_relation = (function frontend$db$model$get_pages_relation(repo,with_journal_QMARK_){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var q = (cljs.core.truth_(with_journal_QMARK_)?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null)], null)], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","journal?","block/journal?",-970683127),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?ref-page-name","?ref-page-name",-1764656281,null)], null)], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60191){
var vec__60192 = p__60191;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60192,(0),null);
var ref_page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60192,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,ref_page_name], null);
}),(datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(q,db) : datascript.core.q.call(null,q,db)));
} else {
return null;
}
});
frontend.db.model.get_pages_that_mentioned_page = (function frontend$db$model$get_pages_that_mentioned_page(repo,page){
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null)));
var pages = frontend.db.model.page_alias_set(repo,page);
var mentioned_pages = frontend.db.utils.seq_flatten(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","page<-pages","frontend.db.react/page<-pages",-577219055),page_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?mentioned-page-name","?mentioned-page-name",-1771964146,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Symbol(null,"?page-name","?page-name",-1643414076,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"?pages","?pages",1767840716,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?mentioned-page","?mentioned-page",116609701,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?mentioned-page","?mentioned-page",116609701,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?mentioned-page-name","?mentioned-page-name",-1771964146,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages,page], 0))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,frontend.db.model.get_page_alias(repo,page__$1)], null);
}),mentioned_pages);
} else {
return null;
}
});
frontend.db.model.get_page_referenced_blocks_no_cache = (function frontend$db$model$get_page_referenced_blocks_no_cache(page_id){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return cljs.core.flatten((function (){var G__60197 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page-id","?page-id",-247711165,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?page-id","?page-id",-247711165,null)], null)], null);
var G__60198 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__60199 = page_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60197,G__60198,G__60199) : datascript.core.q.call(null,G__60197,G__60198,G__60199));
})());
} else {
return null;
}
});
frontend.db.model.get_page_referenced_blocks = (function frontend$db$model$get_page_referenced_blocks(var_args){
var G__60206 = arguments.length;
switch (G__60206) {
case 1:
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$1 = (function (page){
return frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),page);
}));

(frontend.db.model.get_page_referenced_blocks.cljs$core$IFn$_invoke$arity$2 = (function (repo,page){
if(cljs.core.truth_(repo)){
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.safe_page_name_sanity_lc(page)], null)));
var pages = frontend.db.model.page_alias_set(repo,page);
var aliases = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pages,cljs.core.PersistentHashSet.createAsIfByAssoc([page_id]));
var query_result = frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","page<-blocks-or-block<-blocks","frontend.db.react/page<-blocks-or-block<-blocks",-1997031897),page_id], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages,cljs.core.butlast(frontend.db.model.block_attrs)], 0));
var result = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60209){
var vec__60211 = p__60209;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60211,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60211,(1),null);
var k__$1 = ((cljs.core.contains_QMARK_(aliases,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(k)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(k,new cljs.core.Keyword("block","alias?","block/alias?",-551896044),true):k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,blocks], null);
}),frontend.db.utils.group_by_page(frontend.db.model.sort_by_left_recursive(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
}),frontend.util.react(query_result)))));
return result;
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_page_referenced_blocks.cljs$lang$maxFixedArity = 2);

/**
 * Faster and can be used for pagination later.
 */
frontend.db.model.get_page_referenced_blocks_ids = (function frontend$db$model$get_page_referenced_blocks_ids(var_args){
var G__60216 = arguments.length;
switch (G__60216) {
case 1:
return frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$1 = (function (page){
return frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),page);
}));

(frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$2 = (function (repo,page){
if(cljs.core.truth_(repo)){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var pages = frontend.db.model.page_alias_set(repo,page);
var G__60217 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?ref-page","?ref-page",-893277661,null)], null)], null);
var G__60218 = db;
var G__60219 = pages;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60217,G__60218,G__60219) : datascript.core.q.call(null,G__60217,G__60218,G__60219));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.db.model.get_page_referenced_blocks_ids.cljs$lang$maxFixedArity = 2);

frontend.db.model.get_date_scheduled_or_deadlines = (function frontend$db$model$get_date_scheduled_or_deadlines(journal_title){
var temp__5720__auto__ = frontend.date.journal_title__GT_int(journal_title);
if(cljs.core.truth_(temp__5720__auto__)){
var date = temp__5720__auto__;
var future_days = frontend.state.get_scheduled_future_days();
var temp__5720__auto____$1 = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto____$1)){
var repo = temp__5720__auto____$1;
return frontend.db.utils.group_by_page(frontend.db.model.sort_by_left_recursive(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom","custom",340151948),new cljs.core.Keyword(null,"scheduled-deadline","scheduled-deadline",915680828),journal_title], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?day","?day",686036275,null),new cljs.core.Symbol(null,"?future","?future",1027205190,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","scheduled","block/scheduled",584810412),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","deadline","block/deadline",660945231),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","repeated?","block/repeated?",-1344319799),false),new cljs.core.Symbol(null,"?repeated","?repeated",449465208,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","marker","block/marker",1231576318),"NIL"),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null),"DONE")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null),"CANCELED")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?marker","?marker",1230004157,null),"CANCELLED")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?future","?future",1027205190,null))], null),cljs.core.list(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?repeated","?repeated",449465208,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?day","?day",686036275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"?repeated","?repeated",449465208,null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Symbol(null,"?day","?day",686036275,null))], null))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([date,(date + future_days),frontend.db.model.block_attrs], 0)))));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.pattern = (function frontend$db$model$pattern(name){
return cljs.core.re_pattern(["(?i)(^|[^\\[#0-9a-zA-Z]|((^|[^\\[])\\[))",frontend.util.regex_escape(name),"($|[^0-9a-zA-Z])"].join(''));
});
frontend.db.model.get_page_unlinked_references = (function frontend$db$model$get_page_unlinked_references(page){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var page__$1 = frontend.util.safe_page_name_sanity_lc(page);
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page__$1], null)));
var alias_names = frontend.db.model.get_page_alias_names(repo,page__$1);
var patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.db.model.pattern,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(alias_names,page__$1));
var filter_fn = (function (datom){
return cljs.core.some((function (p){
return cljs.core.re_find(p,frontend.util.drawer.remove_logbook(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)));
}),patterns);
});
return frontend.db.utils.group_by_page(frontend.db.model.sort_by_left_recursive(frontend.util.react(frontend.db.react.q(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","page-unlinked-refs","frontend.db.react/page-unlinked-refs",2088680220),page_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-fn","query-fn",-646736760),(function (db,_tx_report,_result){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword("block","content","block/content",-161885195))));
var result = (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(db,frontend.db.model.block_attrs,ids) : datascript.core.pull_many.call(null,db,frontend.db.model.block_attrs,ids));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
}),result);
})], null),null))));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_block_referenced_blocks = (function frontend$db$model$get_block_referenced_blocks(block_uuid){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
if(cljs.core.truth_(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo))){
var block = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null));
return frontend.db.utils.group_by_page(frontend.db.model.sort_by_left_recursive(frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","page<-blocks-or-block<-blocks","frontend.db.react/page<-blocks-or-block<-blocks",-1997031897),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?ref-block","?ref-block",1202355574,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block-uuid","?block-uuid",1931397442,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?block-uuid","?block-uuid",1931397442,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-block","?ref-block",1202355574,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?block","?block",1541466123,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_uuid,frontend.db.model.block_attrs], 0)))));
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.get_block_referenced_blocks_ids = (function frontend$db$model$get_block_referenced_blocks_ids(block_uuid){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var block = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null));
return frontend.util.react(frontend.db.react.q.cljs$core$IFn$_invoke$arity$variadic(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.db.react","block<-block-ids","frontend.db.react/block<-block-ids",562274831),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ref-block","?ref-block",1202355574,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?block-uuid","?block-uuid",1931397442,null),new cljs.core.Symbol(null,"?block-attrs","?block-attrs",1362551561,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Symbol(null,"?block-uuid","?block-uuid",1931397442,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-block","?ref-block",1202355574,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?block","?block",1541466123,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_uuid,frontend.db.model.block_attrs], 0)));
} else {
return null;
}
});
frontend.db.model.get_referenced_blocks_ids = (function frontend$db$model$get_referenced_blocks_ids(page_name_or_block_uuid){
var temp__5718__auto__ = cljs.core.parse_uuid(cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name_or_block_uuid));
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return frontend.db.model.get_block_referenced_blocks_ids(id);
} else {
return frontend.db.model.get_page_referenced_blocks_ids.cljs$core$IFn$_invoke$arity$1(page_name_or_block_uuid);
}
});
/**
 * sanitized page-name only
 */
frontend.db.model.journal_page_QMARK_ = (function frontend$db$model$journal_page_QMARK_(page_name){
return new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null)));
});
frontend.db.model.get_public_pages = (function frontend$db$model$get_public_pages(db){
return frontend.db.utils.seq_flatten((function (){var G__60231 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"public","public",1566243851)),new cljs.core.Symbol(null,"?pub","?pub",-221826138,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,new cljs.core.Symbol(null,"?pub","?pub",-221826138,null))], null)], null);
var G__60232 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__60231,G__60232) : datascript.core.q.call(null,G__60231,G__60232));
})());
});
frontend.db.model.get_public_false_pages = (function frontend$db$model$get_public_false_pages(db){
return frontend.db.utils.seq_flatten((function (){var G__60233 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"public","public",1566243851)),new cljs.core.Symbol(null,"?pub","?pub",-221826138,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,new cljs.core.Symbol(null,"?pub","?pub",-221826138,null))], null)], null);
var G__60234 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__60233,G__60234) : datascript.core.q.call(null,G__60233,G__60234));
})());
});
frontend.db.model.get_public_false_block_ids = (function frontend$db$model$get_public_false_block_ids(db){
return frontend.db.utils.seq_flatten((function (){var G__60235 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?properties","?properties",582639966,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?properties","?properties",582639966,null),new cljs.core.Keyword(null,"public","public",1566243851)),new cljs.core.Symbol(null,"?pub","?pub",-221826138,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,new cljs.core.Symbol(null,"?pub","?pub",-221826138,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null);
var G__60236 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__60235,G__60236) : datascript.core.q.call(null,G__60235,G__60236));
})());
});
frontend.db.model.get_all_templates = (function frontend$db$model$get_all_templates(){
var pred = (function (_db,properties){
return (!((new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(properties) == null)));
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60239){
var vec__60240 = p__60239;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60240,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60240,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"template","template",-702405684)),e], null);
}),(function (){var G__60243 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?pred","?pred",-310747899,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null))], null)], null);
var G__60244 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var G__60245 = pred;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60243,G__60244,G__60245) : datascript.core.q.call(null,G__60243,G__60244,G__60245));
})()));
});
frontend.db.model.get_template_by_name = (function frontend$db$model$get_template_by_name(name){
if(typeof name === 'string'){
return cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var G__60247 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"template","template",-702405684)),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null))], null)], null);
var G__60248 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
var G__60249 = name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60247,G__60248,G__60249) : datascript.core.q.call(null,G__60247,G__60248,G__60249));
})()));
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.model !== 'undefined') && (typeof frontend.db.model.blocks_count_cache !== 'undefined')){
} else {
frontend.db.model.blocks_count_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.db.model.blocks_count = (function frontend$db$model$blocks_count(var_args){
var G__60251 = arguments.length;
switch (G__60251) {
case 0:
return frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.db.model.blocks_count.cljs$core$IFn$_invoke$arity$1 = (function (cache_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = cache_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref(frontend.db.model.blocks_count_cache);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.deref(frontend.db.model.blocks_count_cache);
} else {
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var n = cljs.core.count(datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)));
cljs.core.reset_BANG_(frontend.db.model.blocks_count_cache,n);

return n;
} else {
return null;
}
}
}));

(frontend.db.model.blocks_count.cljs$lang$maxFixedArity = 1);

frontend.db.model.get_all_block_contents = (function frontend$db$model$get_all_block_contents(){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var e = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null));
if(((cljs.core.not(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(e))) && ((!(clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(e))))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id,new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(e)),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(e)], null);
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)))));
} else {
return null;
}
});
frontend.db.model.get_assets = (function frontend$db$model$get_assets(datoms){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (datom){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))){
var matched = cljs.core.re_seq(/\([.\/]*\/assets\/([^)]+)\)/,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom));
var matched__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,matched),(0));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(matched__$1,(1));
if(((typeof path === 'string') && ((!(clojure.string.ends_with_QMARK_(path,".js")))))){
return path;
} else {
return null;
}
} else {
return null;
}
}),datoms);
});
frontend.db.model.clean_export_BANG_ = (function frontend$db$model$clean_export_BANG_(db){
var remove_QMARK_ = (function (p1__60260_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["file",null,"recent",null,"me",null], null), null),p1__60260_SHARP_);
});
var non_public_pages = frontend.db.model.get_public_false_pages(db);
var non_public_datoms = frontend.db.model.get_public_false_block_ids(db);
var non_public_datom_ids = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(non_public_pages,non_public_datoms));
var filtered_db = datascript.core.filter(db,(function (_db,datom){
var ns = cljs.core.namespace(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom));
return (((!(remove_QMARK_(ns)))) && ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))))) && ((!(cljs.core.contains_QMARK_(non_public_datom_ids,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom))))))));
}));
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(filtered_db,new cljs.core.Keyword(null,"eavt","eavt",-666437073));
var assets = frontend.db.model.get_assets(datoms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2(datoms,logseq.graph_parser.db.schema.schema)),assets], null);
});
frontend.db.model.filter_only_public_pages_and_blocks = (function frontend$db$model$filter_only_public_pages_and_blocks(db){
var public_pages = frontend.db.model.get_public_pages(db);
if(cljs.core.seq(public_pages)){
var public_pages__$1 = cljs.core.set(public_pages);
var exported_namespace_QMARK_ = (function (p1__60263_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["block",null,"recent",null,"me",null], null), null),p1__60263_SHARP_);
});
var filtered_db = datascript.core.filter(db,(function (db__$1,datom){
var ns = cljs.core.namespace(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom));
return (((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ns,"file")) && ((((!(exported_namespace_QMARK_(ns)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,"block")) && (((cljs.core.contains_QMARK_(public_pages__$1,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom))) || (cljs.core.contains_QMARK_(public_pages__$1,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__60268 = db__$1;
var G__60269 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60268,G__60269) : datascript.core.entity.call(null,G__60268,G__60269));
})())))))))))))));
}));
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(filtered_db,new cljs.core.Keyword(null,"eavt","eavt",-666437073));
var assets = frontend.db.model.get_assets(datoms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2(datoms,logseq.graph_parser.db.schema.schema)),assets], null);
} else {
return null;
}
});
frontend.db.model.delete_blocks = (function frontend$db$model$delete_blocks(repo_url,files,_delete_page_QMARK_){
if(cljs.core.seq(files)){
var blocks = frontend.db.model.get_files_blocks(repo_url,files);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),eid], null);
}),blocks);
} else {
return null;
}
});
frontend.db.model.delete_files = (function frontend$db$model$delete_files(files){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),path], null)], null);
}),files);
});
frontend.db.model.delete_file_blocks_BANG_ = (function frontend$db$model$delete_file_blocks_BANG_(repo_url,path){
var blocks = frontend.db.model.get_file_blocks(repo_url,path);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),eid], null);
}),blocks);
});
frontend.db.model.delete_page_blocks = (function frontend$db$model$delete_page_blocks(repo_url,page){
if(cljs.core.truth_(page)){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var page__$1 = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null));
if(cljs.core.truth_(page__$1)){
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
var block_eids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),eid], null);
}),block_eids);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.db.model.delete_pages_by_files = (function frontend$db$model$delete_pages_by_files(files){
var pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.db.model.get_file_page,files));
if(cljs.core.seq(pages)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page], null)], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity_lc,pages));
} else {
return null;
}
});
frontend.db.model.set_file_content_BANG_ = (function frontend$db$model$set_file_content_BANG_(repo,path,content){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return path;
} else {
return and__5041__auto__;
}
})())){
var tx_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),content], null);
return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-refresh?","skip-refresh?",878432095),true], null));
} else {
return null;
}
});
frontend.db.model.get_pre_block = (function frontend$db$model$get_pre_block(repo,page_id){
return cljs.core.ffirst((function (){var G__60278 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?page","?page",-1343187612,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?page","?page",-1343187612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),true], null)], null);
var G__60279 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__60280 = page_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60278,G__60279,G__60280) : datascript.core.q.call(null,G__60278,G__60279,G__60280));
})());
});
/**
 * Accepts both sanitized and unsanitized namespaces
 */
frontend.db.model.get_namespace_pages = (function frontend$db$model$get_namespace_pages(repo,namespace){
if(typeof namespace === 'string'){
} else {
throw (new Error("Assert failed: (string? namespace)"));
}

var namespace__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(namespace) : frontend.util.page_name_sanity_lc.call(null,namespace));
var G__60281 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","namespace","block/namespace",-282500695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?namespace","?namespace",567450183,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?namespace","?namespace",567450183,null)], null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"?c","?c",870679775,null))], null);
var G__60282 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
var G__60283 = frontend.db.rules.rules;
var G__60284 = namespace__$1;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__60281,G__60282,G__60283,G__60284) : datascript.core.q.call(null,G__60281,G__60282,G__60283,G__60284));
});
frontend.db.model.tree = (function frontend$db$model$tree(flat_col,root){
var sort_fn = (function (p1__60285_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),p1__60285_SHARP_);
});
var children = cljs.core.group_by(new cljs.core.Keyword("block","namespace","block/namespace",-282500695),flat_col);
var namespace_children = (function frontend$db$model$tree_$_namespace_children(parent_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("namespace","children","namespace/children",-2095628387),sort_fn(frontend$db$model$tree_$_namespace_children(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(m)], null))));
}),sort_fn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(children,parent_id)));
});
return namespace_children(root);
});
/**
 * Unsanitized namespaces
 */
frontend.db.model.get_namespace_hierarchy = (function frontend$db$model$get_namespace_hierarchy(repo,namespace){
var children = frontend.db.model.get_namespace_pages(repo,namespace);
var namespace_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(namespace) : frontend.util.page_name_sanity_lc.call(null,namespace))], null)));
var root = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),namespace_id], null);
var col = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,root);
return frontend.db.model.tree(col,root);
});
frontend.db.model.get_page_namespace = (function frontend$db$model$get_page_namespace(repo,page){
return new cljs.core.Keyword("block","namespace","block/namespace",-282500695).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null)));
});
frontend.db.model.get_page_namespace_routes = (function frontend$db$model$get_page_namespace_routes(repo,page){
if(typeof page === 'string'){
} else {
throw (new Error("Assert failed: (string? page)"));
}

var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
if(clojure.string.blank_QMARK_(page)){
return null;
} else {
var page__$1 = (function (){var G__60286 = clojure.string.trim(page);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__60286) : frontend.util.page_name_sanity_lc.call(null,G__60286));
})();
var page_exist_QMARK_ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page__$1], null));
var ids = (cljs.core.truth_(page_exist_QMARK_)?cljs.core.List.EMPTY:cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (datom){
return clojure.string.ends_with_QMARK_(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom),["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page__$1)].join(''));
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword("block","name","block/name",1619760316)))));
if(cljs.core.seq(ids)){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null)], null),ids);
} else {
return null;
}
}
} else {
return null;
}
});
frontend.db.model.get_orphaned_pages = (function frontend$db$model$get_orphaned_pages(p__60287){
var map__60288 = p__60287;
var map__60288__$1 = cljs.core.__destructure_map(map__60288);
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60288__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo());
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60288__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var empty_ref_f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60288__$1,new cljs.core.Keyword(null,"empty-ref-f","empty-ref-f",666507359),(function (page){
return (cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(page)) === (0));
}));
var pages__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var or__5043__auto__ = pages;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.db.model.get_pages(repo);
}
})());
var built_in_pages = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,logseq.graph_parser.db.default$.built_in_pages_names));
var orphaned_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page));
var temp__5720__auto__ = frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),name], null));
if(cljs.core.truth_(temp__5720__auto__)){
var page__$1 = temp__5720__auto__;
var and__5041__auto__ = (empty_ref_f.cljs$core$IFn$_invoke$arity$1 ? empty_ref_f.cljs$core$IFn$_invoke$arity$1(page__$1) : empty_ref_f.call(null,page__$1));
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (function (){var or__5043__auto__ = frontend.db.model.page_empty_QMARK_(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var first_child = cljs.core.first(new cljs.core.Keyword("block","_left","block/_left",865231986).cljs$core$IFn$_invoke$arity$1(page__$1));
var children = new cljs.core.Keyword("block","_page","block/_page",1150043350).cljs$core$IFn$_invoke$arity$1(page__$1);
var and__5041__auto____$1 = first_child;
if(cljs.core.truth_(and__5041__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(children))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["",null,"*",null,"-",null], null), null),clojure.string.trim(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(first_child)))));
} else {
return and__5041__auto____$1;
}
}
})();
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = (!(cljs.core.contains_QMARK_(built_in_pages,name)));
if(and__5041__auto____$2){
var and__5041__auto____$3 = cljs.core.not(new cljs.core.Keyword("block","_namespace","block/_namespace",1151541806).cljs$core$IFn$_invoke$arity$1(page__$1));
if(and__5041__auto____$3){
var and__5041__auto____$4 = (!(((clojure.string.includes_QMARK_(name,"/")) && (cljs.core.not(new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(page__$1))))));
if(and__5041__auto____$4){
return page__$1;
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
} else {
return null;
}
}),pages__$1)));
return orphaned_pages;
});

//# sourceMappingURL=frontend.db.model.js.map
