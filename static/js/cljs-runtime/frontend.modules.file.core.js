goog.provide('frontend.modules.file.core');
frontend.modules.file.core.indented_block_content = (function frontend$modules$file$core$indented_block_content(content,spaces_tabs){
var lines = clojure.string.split_lines(content);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces_tabs)].join(''),lines);
});
/**
 * Only accept nake content (without any indentation)
 */
frontend.modules.file.core.content_with_collapsed_state = (function frontend$modules$file$core$content_with_collapsed_state(format,content,collapsed_QMARK_,properties){
if(cljs.core.truth_(collapsed_QMARK_)){
return frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$4(format,content,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),true);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"collapsed","collapsed",-628494523).cljs$core$IFn$_invoke$arity$1(properties);
if(cljs.core.truth_(and__5041__auto__)){
return collapsed_QMARK_ === false;
} else {
return and__5041__auto__;
}
})())){
return frontend.util.property.remove_property.cljs$core$IFn$_invoke$arity$3(format,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),content);
} else {
return content;

}
}
});
frontend.modules.file.core.transform_content = (function frontend$modules$file$core$transform_content(p__48005,level,p__48006){
var map__48007 = p__48005;
var map__48007__$1 = cljs.core.__destructure_map(map__48007);
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48007__$1,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48007__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48007__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48007__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48007__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var unordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48007__$1,new cljs.core.Keyword("block","unordered","block/unordered",-772044101));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48007__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48007__$1,new cljs.core.Keyword("block","heading-level","block/heading-level",661361785));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48007__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48007__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var map__48008 = p__48006;
var map__48008__$1 = cljs.core.__destructure_map(map__48008);
var heading_to_list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48008__$1,new cljs.core.Keyword(null,"heading-to-list?","heading-to-list?",2108324466));
var content__$1 = (function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var pre_block_QMARK___$1 = (function (){var or__5043__auto__ = pre_block_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(page,parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([left], 0))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),format)) && (clojure.string.includes_QMARK_(cljs.core.first(clojure.string.split_lines(content__$1)),":: ")))));
}
})();
var markdown_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var content__$2 = (cljs.core.truth_(pre_block_QMARK___$1)?(function (){var content__$2 = clojure.string.trim(content__$1);
return [content__$2,"\n"].join('');
})():(function (){var markdown_top_heading_QMARK_ = (function (){var and__5041__auto__ = markdown_QMARK_;
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,page);
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core.not(unordered);
if(and__5041__auto____$2){
return heading_level;
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
var vec__48016 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"*")),""], null):(cljs.core.truth_(markdown_top_heading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null):(function (){var level__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = heading_to_list_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return heading_level;
} else {
return and__5041__auto__;
}
})())?(((heading_level > (1)))?(heading_level - (1)):heading_level):level);
var spaces_tabs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level__$1 - (1)),frontend.state.get_export_bullet_indentation()));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces_tabs),"-"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces_tabs),"  "].join('')], null);
})()
));
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48016,(0),null);
var spaces_tabs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48016,(1),null);
var content__$2 = (cljs.core.truth_(heading_to_list_QMARK_)?clojure.string.replace(clojure.string.replace(content__$1,/^\s?#+\s+/,""),/^\s?#+\s?$/,""):content__$1);
var content__$3 = frontend.modules.file.core.content_with_collapsed_state(format,content__$2,collapsed_QMARK_,properties);
var new_content = frontend.modules.file.core.indented_block_content(clojure.string.trim(content__$3),spaces_tabs);
var sep = (cljs.core.truth_((function (){var or__5043__auto__ = markdown_top_heading_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.blank_QMARK_(new_content);
}
})())?"":" ");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),sep,new_content].join('');
})()
);
return content__$2;
});
frontend.modules.file.core.tree__GT_file_content_aux = (function frontend$modules$file$core$tree__GT_file_content_aux(tree,p__48030){
var map__48031 = p__48030;
var map__48031__$1 = cljs.core.__destructure_map(map__48031);
var opts = map__48031__$1;
var init_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48031__$1,new cljs.core.Keyword(null,"init-level","init-level",-1605905283));
var block_contents = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__48038 = tree;
var vec__48039 = G__48038;
var seq__48040 = cljs.core.seq(vec__48039);
var first__48041 = cljs.core.first(seq__48040);
var seq__48040__$1 = cljs.core.next(seq__48040);
var f = first__48041;
var r = seq__48040__$1;
var level = init_level;
var G__48038__$1 = G__48038;
var level__$1 = level;
while(true){
var vec__48050 = G__48038__$1;
var seq__48051 = cljs.core.seq(vec__48050);
var first__48052 = cljs.core.first(seq__48051);
var seq__48051__$1 = cljs.core.next(seq__48051);
var f__$1 = first__48052;
var r__$1 = seq__48051__$1;
var level__$2 = level__$1;
if((f__$1 == null)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.persistent_BANG_(block_contents)));
} else {
var page_QMARK_ = (new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(f__$1) == null);
var content = ((page_QMARK_)?null:frontend.modules.file.core.transform_content(f__$1,level__$2,opts));
var new_content = (function (){var temp__5718__auto__ = cljs.core.seq(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(f__$1));
if(temp__5718__auto__){
var children = temp__5718__auto__;
return cljs.core.cons(content,(function (){var G__48056 = children;
var G__48057 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(level__$2 + (1))], null);
return (frontend.modules.file.core.tree__GT_file_content_aux.cljs$core$IFn$_invoke$arity$2 ? frontend.modules.file.core.tree__GT_file_content_aux.cljs$core$IFn$_invoke$arity$2(G__48056,G__48057) : frontend.modules.file.core.tree__GT_file_content_aux.call(null,G__48056,G__48057));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null);
}
})();
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(block_contents,new_content);

var G__48095 = r__$1;
var G__48096 = level__$2;
G__48038__$1 = G__48095;
level__$1 = G__48096;
continue;
}
break;
}
});
frontend.modules.file.core.tree__GT_file_content = (function frontend$modules$file$core$tree__GT_file_content(tree,opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",frontend.modules.file.core.tree__GT_file_content_aux(tree,opts));
});
frontend.modules.file.core.init_level = (1);
frontend.modules.file.core.push_to_write_chan = (function frontend$modules$file$core$push_to_write_chan(var_args){
var args__5772__auto__ = [];
var len__5766__auto___48097 = arguments.length;
var i__5767__auto___48098 = (0);
while(true){
if((i__5767__auto___48098 < len__5766__auto___48097)){
args__5772__auto__.push((arguments[i__5767__auto___48098]));

var G__48099 = (i__5767__auto___48098 + (1));
i__5767__auto___48098 = G__48099;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.modules.file.core.push_to_write_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.modules.file.core.push_to_write_chan.cljs$core$IFn$_invoke$arity$variadic = (function (files,opts){
var repo = frontend.state.get_current_repo();
var chan = frontend.state.get_file_write_chan();
if((!((chan == null)))){
} else {
throw (new Error(["Assert failed: ","File write chan shouldn't be nil","\n","(some? chan)"].join('')));
}

var chan_callback = new cljs.core.Keyword(null,"chan-callback","chan-callback",-1852200968).cljs$core$IFn$_invoke$arity$1(opts);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,files,opts], null));

if(cljs.core.truth_(chan_callback)){
return (chan_callback.cljs$core$IFn$_invoke$arity$0 ? chan_callback.cljs$core$IFn$_invoke$arity$0() : chan_callback.call(null));
} else {
return null;
}
}));

(frontend.modules.file.core.push_to_write_chan.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.modules.file.core.push_to_write_chan.cljs$lang$applyTo = (function (seq48063){
var G__48064 = cljs.core.first(seq48063);
var seq48063__$1 = cljs.core.next(seq48063);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48064,seq48063__$1);
}));

frontend.modules.file.core.transact_file_tx_if_not_exists_BANG_ = (function frontend$modules$file$core$transact_file_tx_if_not_exists_BANG_(page,ok_handler){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page))){
var format = cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","format","block/format",-1212045901),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()));
var title = clojure.string.capitalize(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
var journal_page_QMARK_ = frontend.date.valid_journal_title_QMARK_(title);
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(journal_page_QMARK_)?frontend.config.get_journals_directory():frontend.config.get_pages_directory())),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(journal_page_QMARK_)?frontend.date.date__GT_file_name(journal_page_QMARK_):frontend.util.file_name_sanity((function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
})()))),".",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,"markdown"))?"md":format)].join('');
var file_path = frontend.config.get_file_path(repo,path);
var file = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),file_path], null);
var tx = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),file_path], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","file","block/file",183171933),file], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(tx) : frontend.db.transact_BANG_.call(null,tx));

if(cljs.core.truth_(ok_handler)){
return (ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null));
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
frontend.modules.file.core.save_tree_aux_BANG_ = (function frontend$modules$file$core$save_tree_aux_BANG_(page_block,tree){
var page_block__$1 = (function (){var G__48082 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__48082) : frontend.db.pull.call(null,G__48082));
})();
var new_content = frontend.modules.file.core.tree__GT_file_content(tree,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),frontend.modules.file.core.init_level], null));
var file_db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page_block__$1));
var file_path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(file_db_id));
var _ = ((typeof file_path === 'string')?null:(function(){throw (new Error(["Assert failed: ","File path should satisfy string?","\n","(string? file-path)"].join('')))})());
var files = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_path,new_content], null)], null);
return frontend.modules.file.core.push_to_write_chan(files);
});
frontend.modules.file.core.save_tree = (function frontend$modules$file$core$save_tree(page_block,tree){
if(cljs.core.map_QMARK_(page_block)){
} else {
throw (new Error("Assert failed: (map? page-block)"));
}

var ok_handler = (function (){
return frontend.modules.file.core.save_tree_aux_BANG_(page_block,tree);
});
var file = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page_block);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5720__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(page_block));
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
return new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1(page));
} else {
return null;
}
}
})();
if(cljs.core.truth_(file)){
return ok_handler();
} else {
return frontend.modules.file.core.transact_file_tx_if_not_exists_BANG_(page_block,ok_handler);
}
});

//# sourceMappingURL=frontend.modules.file.core.js.map
