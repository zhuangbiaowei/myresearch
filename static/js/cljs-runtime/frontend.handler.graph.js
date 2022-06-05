goog.provide('frontend.handler.graph');
frontend.handler.graph.build_links = (function frontend$handler$graph$build_links(links){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58739){
var vec__58740 = p__58739;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58740,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58740,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),from,new cljs.core.Keyword(null,"target","target",253001721),to], null);
}),links);
});
frontend.handler.graph.build_nodes = (function frontend$handler$graph$build_nodes(dark_QMARK_,current_page,page_links,tags,nodes,namespaces){
var parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,namespaces));
var current_page__$1 = (function (){var or__5043__auto__ = current_page;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var pages = cljs.core.set(cljs.core.flatten(nodes));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var p__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(p);
var current_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p__$1,current_page__$1);
var color = (function (){var G__58745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dark_QMARK_,current_page_QMARK_], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),G__58745)){
return "#999";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__58745)){
return "#045591";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__58745)){
return "#93a1a1";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__58745)){
return "#ffffff";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58745)].join('')));

}
}
}
}
})();
var color__$1 = ((cljs.core.contains_QMARK_(tags,p__$1))?(cljs.core.truth_(dark_QMARK_)?"orange":"green"):color);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(page_links,p__$1,(1));
var size = (((8) * (function (){var x__5128__auto__ = 1.0;
var y__5129__auto__ = Math.cbrt(n);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})()) | (0));
var G__58746 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),p__$1,new cljs.core.Keyword(null,"label","label",1718410804),p__$1,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null);
if(cljs.core.contains_QMARK_(parents,p__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58746,new cljs.core.Keyword(null,"parent","parent",-878878779),true);
} else {
return G__58746;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,pages));
});
frontend.handler.graph.uuid_or_asset_QMARK_ = (function frontend$handler$graph$uuid_or_asset_QMARK_(id){
var or__5043__auto__ = frontend.util.uuid_string_QMARK_(id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((clojure.string.starts_with_QMARK_(id,"../assets/")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,"..")) || (((clojure.string.starts_with_QMARK_(id,"assets/")) || (((clojure.string.ends_with_QMARK_(id,".gif")) || (((clojure.string.ends_with_QMARK_(id,".jpg")) || (clojure.string.ends_with_QMARK_(id,".png")))))))))));
}
});
frontend.handler.graph.remove_uuids_and_files_BANG_ = (function frontend$handler$graph$remove_uuids_and_files_BANG_(nodes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (node){
return frontend.handler.graph.uuid_or_asset_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
}),nodes);
});
frontend.handler.graph.normalize_page_name = (function frontend$handler$graph$normalize_page_name(p__58753){
var map__58754 = p__58753;
var map__58754__$1 = cljs.core.__destructure_map(map__58754);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var page_name__GT_original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword(null,"page-name->original-name","page-name->original-name",599049389));
var links__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58755){
var map__58756 = p__58755;
var map__58756__$1 = cljs.core.__destructure_map(map__58756);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword(null,"target","target",253001721));
var source__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_name__GT_original_name,source);
var target__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_name__GT_original_name,target);
if(cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return target__$1;
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),source__$1,new cljs.core.Keyword(null,"target","target",253001721),target__$1], null);
} else {
return null;
}
}),links));
var nodes__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_name__GT_original_name,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(temp__5718__auto__)){
var original_name = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"id","id",-1388402092),original_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804),original_name], 0));
} else {
return null;
}
}),frontend.util.distinct_by((function (node){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
}),frontend.handler.graph.remove_uuids_and_files_BANG_(nodes))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes__$1,new cljs.core.Keyword(null,"links","links",-654507394),links__$1], null);
});
frontend.handler.graph.build_global_graph = (function frontend$handler$graph$build_global_graph(theme,p__58758){
var map__58759 = p__58758;
var map__58759__$1 = cljs.core.__destructure_map(map__58759);
var journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58759__$1,new cljs.core.Keyword(null,"journal?","journal?",-897756522));
var orphan_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58759__$1,new cljs.core.Keyword(null,"orphan-pages?","orphan-pages?",-824819206));
var builtin_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58759__$1,new cljs.core.Keyword(null,"builtin-pages?","builtin-pages?",1299611390));
var dark_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dark",theme);
var current_page = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((frontend.db.get_current_page.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_current_page.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_current_page.call(null)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var relation = (frontend.db.get_pages_relation.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pages_relation.cljs$core$IFn$_invoke$arity$2(repo,journal_QMARK_) : frontend.db.get_pages_relation.call(null,repo,journal_QMARK_));
var tagged_pages = (frontend.db.get_all_tagged_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_tagged_pages.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_tagged_pages.call(null,repo));
var namespaces = (frontend.db.get_all_namespace_relation.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_namespace_relation.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_namespace_relation.call(null,repo));
var tags = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,tagged_pages));
var full_pages = (frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_pages.call(null,repo));
var get_original_name = (function (p){
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p);
}
});
var all_pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_original_name,full_pages);
var page_name__GT_original_name = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),full_pages),all_pages);
var pages_after_journal_filter = ((cljs.core.not(journal_QMARK_))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal?","block/journal?",-970683127),full_pages):full_pages);
var links = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(relation),cljs.core.seq(tagged_pages),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(namespaces)], 0));
var linked__$1 = cljs.core.set(cljs.core.flatten(links));
var build_in_pages = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,logseq.graph_parser.db.default$.built_in_pages_names));
var nodes = (function (){var G__58768 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),pages_after_journal_filter);
var G__58768__$1 = ((cljs.core.not(builtin_pages_QMARK_))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.contains_QMARK_(build_in_pages,clojure.string.lower_case(p));
}),G__58768):G__58768);
if(cljs.core.not(orphan_pages_QMARK_)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58757_SHARP_){
return cljs.core.contains_QMARK_(linked__$1,clojure.string.lower_case(p1__58757_SHARP_));
}),G__58768__$1);
} else {
return G__58768__$1;
}
})();
var page_links = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__58772){
var vec__58774 = p__58772;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58774,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.inc),v,cljs.core.inc);
}),cljs.core.PersistentArrayMap.EMPTY,links);
var links__$1 = frontend.handler.graph.build_links(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58777){
var vec__58778 = p__58777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58778,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58778,(1),null);
return (to == null);
}),links));
var nodes__$1 = frontend.handler.graph.build_nodes(dark_QMARK_,clojure.string.lower_case(current_page),page_links,tags,nodes,namespaces);
return frontend.handler.graph.normalize_page_name(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes__$1,new cljs.core.Keyword(null,"links","links",-654507394),links__$1,new cljs.core.Keyword(null,"page-name->original-name","page-name->original-name",599049389),page_name__GT_original_name], null));
} else {
return null;
}
});
frontend.handler.graph.build_page_graph = (function frontend$handler$graph$build_page_graph(page,theme){
var dark_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dark",theme);
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var page__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page));
var page_entity = (function (){var G__58792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__58792) : frontend.db.entity.call(null,G__58792));
})();
var tags = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page_entity));
var tags__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58785_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page__$1,p1__58785_SHARP_);
}),tags);
var ref_pages = (frontend.db.get_page_referenced_pages.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_referenced_pages.cljs$core$IFn$_invoke$arity$2(repo,page__$1) : frontend.db.get_page_referenced_pages.call(null,repo,page__$1));
var mentioned_pages = (frontend.db.get_pages_that_mentioned_page.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pages_that_mentioned_page.cljs$core$IFn$_invoke$arity$2(repo,page__$1) : frontend.db.get_pages_that_mentioned_page.call(null,repo,page__$1));
var namespaces = (frontend.db.get_all_namespace_relation.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_namespace_relation.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_namespace_relation.call(null,repo));
var links = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(namespaces,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58793){
var vec__58794 = p__58793;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58794,(0),null);
var _aliases = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58794,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,p], null);
}),ref_pages),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58797){
var vec__58798 = p__58797;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58798,(0),null);
var _aliases = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58798,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,page__$1], null);
}),mentioned_pages),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,tag], null);
}),tags__$1)], 0));
var other_pages = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ref_pages),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,mentioned_pages))));
var other_pages_links = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (page__$2){
var ref_pages__$1 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(frontend.db.get_page_referenced_pages.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_referenced_pages.cljs$core$IFn$_invoke$arity$2(repo,page__$2) : frontend.db.get_page_referenced_pages.call(null,repo,page__$2)))),other_pages);
var mentioned_pages__$1 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(frontend.db.get_pages_that_mentioned_page.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pages_that_mentioned_page.cljs$core$IFn$_invoke$arity$2(repo,page__$2) : frontend.db.get_pages_that_mentioned_page.call(null,repo,page__$2)))),other_pages);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$2,p], null);
}),ref_pages__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,page__$2], null);
}),mentioned_pages__$1));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([other_pages], 0));
var links__$1 = frontend.handler.graph.build_links(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(links,other_pages_links))));
var nodes = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ref_pages),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,mentioned_pages),tags__$1], 0))));
var nodes__$1 = frontend.handler.graph.build_nodes(dark_QMARK_,page__$1,links__$1,cljs.core.set(tags__$1),nodes,namespaces);
var full_pages = (frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_pages.call(null,repo));
var get_original_name = (function (p){
var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p);
}
});
var all_pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_original_name,full_pages);
var page_name__GT_original_name = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),full_pages),all_pages);
return frontend.handler.graph.normalize_page_name(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes__$1,new cljs.core.Keyword(null,"links","links",-654507394),links__$1,new cljs.core.Keyword(null,"page-name->original-name","page-name->original-name",599049389),page_name__GT_original_name], null));
} else {
return null;
}
});
/**
 * Builds a citation/reference graph for a given block uuid.
 */
frontend.handler.graph.build_block_graph = (function frontend$handler$graph$build_block_graph(block,theme){
var dark_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dark",theme);
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var ref_blocks = (frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1(block) : frontend.db.get_block_referenced_blocks.call(null,block));
var namespaces = (frontend.db.get_all_namespace_relation.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_namespace_relation.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_namespace_relation.call(null,repo));
var links = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58801){
var vec__58802 = p__58801;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58802,(0),null);
var _aliases = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58802,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,p], null);
}),ref_blocks),namespaces);
var other_blocks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ref_blocks))));
var other_blocks_links = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block__$1){
var ref_blocks__$1 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_referenced_blocks.cljs$core$IFn$_invoke$arity$1(block__$1) : frontend.db.get_block_referenced_blocks.call(null,block__$1)))),other_blocks);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$1,p], null);
}),ref_blocks__$1));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([other_blocks], 0));
var links__$1 = frontend.handler.graph.build_links(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(links,other_blocks_links))));
var nodes = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ref_blocks))));
var nodes__$1 = frontend.handler.graph.build_nodes(dark_QMARK_,block,links__$1,cljs.core.PersistentHashSet.EMPTY,nodes,namespaces);
return frontend.handler.graph.normalize_page_name(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes__$1,new cljs.core.Keyword(null,"links","links",-654507394),links__$1], null));
} else {
return null;
}
});
/**
 * Get all nodes that are n hops from nodes (a collection of node ids)
 */
frontend.handler.graph.n_hops = (function frontend$handler$graph$n_hops(p__58813,nodes,level){
var map__58814 = p__58813;
var map__58814__$1 = cljs.core.__destructure_map(map__58814);
var graph = map__58814__$1;
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var search_nodes = (function (forward_QMARK_){
var links__$1 = cljs.core.group_by((cljs.core.truth_(forward_QMARK_)?new cljs.core.Keyword(null,"source","source",-433931539):new cljs.core.Keyword(null,"target","target",253001721)),links);
var nodes__$1 = nodes;
var level__$1 = level;
while(true){
if((level__$1 === (0))){
return nodes__$1;
} else {
var G__58839 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,nodes__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes__$1,level__$1,links__$1,map__58814,map__58814__$1,graph,links){
return (function (id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(forward_QMARK_)?new cljs.core.Keyword(null,"target","target",253001721):new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(links__$1,id));
});})(nodes__$1,level__$1,links__$1,map__58814,map__58814__$1,graph,links))
,nodes__$1)));
var G__58840 = (level__$1 - (1));
nodes__$1 = G__58839;
level__$1 = G__58840;
continue;
}
break;
}
});
var nodes__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(search_nodes(true),search_nodes(false));
var nodes__$2 = cljs.core.set(nodes__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(graph,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(function (full_nodes){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.contains_QMARK_(nodes__$2,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
}),full_nodes);
}));
});

//# sourceMappingURL=frontend.handler.graph.js.map
