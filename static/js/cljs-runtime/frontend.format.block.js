goog.provide('frontend.format.block');
/**
 * Wrapper around logseq.graph-parser.block/extract-blocks that adds in system state
 */
frontend.format.block.extract_blocks = (function frontend$format$block$extract_blocks(blocks,content,with_id_QMARK_,format){
return logseq.graph_parser.block.extract_blocks(blocks,content,with_id_QMARK_,format,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"user-config","user-config",-1138679827),frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"block-pattern","block-pattern",297259959),frontend.config.get_block_pattern(format),new cljs.core.Keyword(null,"supported-formats","supported-formats",2085828616),logseq.graph_parser.config.supported_formats(),new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__47529 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__47529) : frontend.db.get_db.call(null,G__47529));
})(),new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),frontend.state.get_date_formatter()], null));
});
/**
 * Wrapper around logseq.graph-parser.block/page-name->map that adds in db
 */
frontend.format.block.page_name__GT_map = (function frontend$format$block$page_name__GT_map(var_args){
var G__47531 = arguments.length;
switch (G__47531) {
case 2:
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2 = (function (original_page_name,with_id_QMARK_){
return frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$3(original_page_name,with_id_QMARK_,true);
}));

(frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$3 = (function (original_page_name,with_id_QMARK_,with_timestamp_QMARK_){
return logseq.graph_parser.block.page_name__GT_map(original_page_name,with_id_QMARK_,(function (){var G__47532 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__47532) : frontend.db.get_db.call(null,G__47532));
})(),with_timestamp_QMARK_,frontend.state.get_date_formatter());
}));

(frontend.format.block.page_name__GT_map.cljs$lang$maxFixedArity = 3);

frontend.format.block.parse_block = (function frontend$format$block$parse_block(var_args){
var G__47534 = arguments.length;
switch (G__47534) {
case 1:
return frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$1 = (function (block){
return frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$2(block,null);
}));

(frontend.format.block.parse_block.cljs$core$IFn$_invoke$arity$2 = (function (p__47535,p__47536){
var map__47537 = p__47535;
var map__47537__$1 = cljs.core.__destructure_map(map__47537);
var block = map__47537__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47537__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47537__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47537__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47537__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var map__47538 = p__47536;
var map__47538__$1 = cljs.core.__destructure_map(map__47538);
var with_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47538__$1,new cljs.core.Keyword(null,"with-id?","with-id?",1405069912),true);
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var block__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var ast = frontend.format.to_edn.cljs$core$IFn$_invoke$arity$3(content,format,null);
var blocks = frontend.format.block.extract_blocks(ast,content,with_id_QMARK_,format);
var new_block = cljs.core.first(blocks);
var parent_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1((function (){var G__47540 = frontend.state.get_current_repo();
var G__47541 = uuid;
return (frontend.db.get_block_parent.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_parent.cljs$core$IFn$_invoke$arity$2(G__47540,G__47541) : frontend.db.get_block_parent.call(null,G__47540,G__47541));
})()));
var map__47539 = new_block;
var map__47539__$1 = cljs.core.__destructure_map(map__47539);
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47539__$1,new cljs.core.Keyword("block","refs","block/refs",-1214495349));
var ref_pages = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),refs);
var path_ref_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ref_pages,parent_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], null)], 0)));
var block__$2 = (function (){var G__47542 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1,new_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),path_ref_pages], null)], 0));
if((cljs.core.count(blocks) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47542,new cljs.core.Keyword("block","warning","block/warning",2131709542),new cljs.core.Keyword(null,"multiple-blocks","multiple-blocks",1235340805));
} else {
return G__47542;
}
})();
var block__$3 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block__$2,new cljs.core.Keyword("block","title","block/title",710445684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","body","block/body",2004112880),new cljs.core.Keyword("block","level","block/level",1182509971)], 0));
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block__$3,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid);
} else {
return block__$3;
}
}
}));

(frontend.format.block.parse_block.cljs$lang$maxFixedArity = 2);

frontend.format.block.parse_title_and_body = (function frontend$format$block$parse_title_and_body(var_args){
var G__47544 = arguments.length;
switch (G__47544) {
case 1:
return frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1 = (function (block){
if(cljs.core.map_QMARK_(block)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block))], 0));
} else {
return null;
}
}));

(frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4 = (function (block_uuid,format,pre_block_QMARK_,content){
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var content__$1 = (cljs.core.truth_(pre_block_QMARK_)?content:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_block_pattern(format))," ",clojure.string.triml(content)].join(''));
var temp__5718__auto__ = frontend.state.get_block_ast(block_uuid,content__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var result = temp__5718__auto__;
return result;
} else {
var ast = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,frontend.format.to_edn.cljs$core$IFn$_invoke$arity$3(content__$1,format,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)));
var title = ((logseq.graph_parser.block.heading_block_QMARK_(cljs.core.first(ast)))?new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(ast))):null);
var body = cljs.core.vec((cljs.core.truth_(title)?cljs.core.rest(ast):ast));
var body__$1 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.property.properties_ast_QMARK_,body);
var result = (function (){var G__47545 = ((cljs.core.seq(body__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","body","block/body",2004112880),body__$1], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47545,new cljs.core.Keyword("block","title","block/title",710445684),title);
} else {
return G__47545;
}
})();
frontend.state.add_block_ast_cache_BANG_(block_uuid,content__$1,result);

return result;
}
}
}));

(frontend.format.block.parse_title_and_body.cljs$lang$maxFixedArity = 4);

frontend.format.block.macro_subs = (function frontend$format$block$macro_subs(macro_content,arguments$){
var s = macro_content;
var args = arguments$;
var n = (1);
while(true){
if(cljs.core.seq(args)){
var G__47573 = clojure.string.replace(s,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),cljs.core.first(args));
var G__47574 = cljs.core.rest(args);
var G__47575 = (n + (1));
s = G__47573;
args = G__47574;
n = G__47575;
continue;
} else {
return s;
}
break;
}
});
frontend.format.block.break_line_paragraph_QMARK_ = (function frontend$format$block$break_line_paragraph_QMARK_(p__47548){
var vec__47549 = p__47548;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47549,(0),null);
var break_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47549,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Paragraph")) && (cljs.core.every_QMARK_((function (p1__47546_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__47546_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Break_Line"], null));
}),break_lines)));
});
frontend.format.block.trim_paragraph_special_break_lines = (function frontend$format$block$trim_paragraph_special_break_lines(ast){
var vec__47554 = ast;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47554,(0),null);
var paras = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47554,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,"Paragraph")){
var indexed_paras = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,paras);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [typ,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47553_SHARP_){
return cljs.core.last(p1__47553_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47552_SHARP_){
var vec__47558 = p1__47552_SHARP_;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47558,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47558,(1),null);
return (!((((index > (0))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Break_Line"], null))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Timestamp",null,"Macro",null], null), null),cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(paras,(index - (1)))))))))));
}),indexed_paras))], null);
} else {
return ast;
}
});
frontend.format.block.trim_break_lines_BANG_ = (function frontend$format$block$trim_break_lines_BANG_(ast){
return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(frontend.format.block.break_line_paragraph_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.format.block.trim_paragraph_special_break_lines,ast));
});

//# sourceMappingURL=frontend.format.block.js.map
