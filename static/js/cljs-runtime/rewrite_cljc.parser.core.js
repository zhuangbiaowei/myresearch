goog.provide('rewrite_cljc.parser.core');
rewrite_cljc.parser.core._STAR_delimiter_STAR_ = null;
rewrite_cljc.parser.core.dispatch = (function rewrite_cljc$parser$core$dispatch(c){
if((c == null)){
return new cljs.core.Keyword(null,"eof","eof",-489063237);
} else {
if(cljs.core.truth_(rewrite_cljc.reader.whitespace_QMARK_(c))){
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,rewrite_cljc.parser.core._STAR_delimiter_STAR_)){
return new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashMap.fromArrays(["@","`","\"","#","'","(",")",":",";","[","{","]","}","^","~"],[new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"sharp","sharp",-83698408),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"unquote","unquote",1649741032)]),c,new cljs.core.Keyword(null,"token","token",-1211463215));

}
}
}
});
if((typeof rewrite_cljc !== 'undefined') && (typeof rewrite_cljc.parser !== 'undefined') && (typeof rewrite_cljc.parser.core !== 'undefined') && (typeof rewrite_cljc.parser.core.parse_next_STAR_ !== 'undefined')){
} else {
rewrite_cljc.parser.core.parse_next_STAR_ = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__78632 = cljs.core.get_global_hierarchy;
return (fexpr__78632.cljs$core$IFn$_invoke$arity$0 ? fexpr__78632.cljs$core$IFn$_invoke$arity$0() : fexpr__78632.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("rewrite-cljc.parser.core","parse-next*"),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Var(function(){return rewrite_cljc.parser.core.dispatch;},new cljs.core.Symbol("rewrite-cljc.parser.core","dispatch","rewrite-cljc.parser.core/dispatch",-773101603,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"rewrite-cljc.parser.core","rewrite-cljc.parser.core",-76586591,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),"rewrite_cljc/parser/core.cljc",16,1,17,17,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null)], null)),null,(cljs.core.truth_(rewrite_cljc.parser.core.dispatch)?rewrite_cljc.parser.core.dispatch.cljs$lang$test:null)])),rewrite_cljc.reader.peek),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
rewrite_cljc.parser.core.parse_next = (function rewrite_cljc$parser$core$parse_next(reader){
return rewrite_cljc.reader.read_with_meta(reader,rewrite_cljc.parser.core.parse_next_STAR_);
});
rewrite_cljc.parser.core.parse_delim = (function rewrite_cljc$parser$core$parse_delim(reader,delimiter){
rewrite_cljc.reader.ignore(reader);

return rewrite_cljc.reader.read_repeatedly(reader,(function (p1__78633_SHARP_){
var _STAR_delimiter_STAR__orig_val__78635 = rewrite_cljc.parser.core._STAR_delimiter_STAR_;
var _STAR_delimiter_STAR__temp_val__78636 = delimiter;
(rewrite_cljc.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__temp_val__78636);

try{return rewrite_cljc.parser.core.parse_next(p1__78633_SHARP_);
}finally {(rewrite_cljc.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__orig_val__78635);
}}));
});
rewrite_cljc.parser.core.parse_printables = (function rewrite_cljc$parser$core$parse_printables(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78672 = arguments.length;
var i__5767__auto___78673 = (0);
while(true){
if((i__5767__auto___78673 < len__5766__auto___78672)){
args__5772__auto__.push((arguments[i__5767__auto___78673]));

var G__78674 = (i__5767__auto___78673 + (1));
i__5767__auto___78673 = G__78674;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return rewrite_cljc.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(rewrite_cljc.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic = (function (reader,node_tag,n,p__78643){
var vec__78644 = p__78643;
var ignore_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78644,(0),null);
if(cljs.core.truth_(ignore_QMARK_)){
rewrite_cljc.reader.ignore(reader);
} else {
}

return rewrite_cljc.reader.read_n(reader,node_tag,rewrite_cljc.parser.core.parse_next,cljs.core.complement(rewrite_cljc.node.printable_only_QMARK_),n);
}));

(rewrite_cljc.parser.core.parse_printables.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_cljc.parser.core.parse_printables.cljs$lang$applyTo = (function (seq78638){
var G__78639 = cljs.core.first(seq78638);
var seq78638__$1 = cljs.core.next(seq78638);
var G__78640 = cljs.core.first(seq78638__$1);
var seq78638__$2 = cljs.core.next(seq78638__$1);
var G__78641 = cljs.core.first(seq78638__$2);
var seq78638__$3 = cljs.core.next(seq78638__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78639,G__78640,G__78641,seq78638__$3);
}));

rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"token","token",-1211463215),(function (reader){
return rewrite_cljc.parser.token.parse_token(reader);
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),(function (reader){
return rewrite_cljc.reader.ignore(reader);
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unmatched","unmatched",1628955483),(function (reader){
return rewrite_cljc.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,"Unmatched delimiter: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewrite_cljc.reader.peek(reader)], 0));
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"eof","eof",-489063237),(function (reader){
if(cljs.core.truth_(rewrite_cljc.parser.core._STAR_delimiter_STAR_)){
return rewrite_cljc.reader.throw_reader(reader,"Unexpected EOF.");
} else {
return null;
}
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(function (reader){
return rewrite_cljc.parser.whitespace.parse_whitespace(reader);
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"comment","comment",532206069),(function (reader){
rewrite_cljc.reader.ignore(reader);

return rewrite_cljc.node.comment_node(rewrite_cljc.reader.read_include_linebreak(reader));
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (reader){
return rewrite_cljc.parser.keyword.parse_keyword(reader);
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (reader){
return rewrite_cljc.parser.string.parse_string(reader);
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (reader){
rewrite_cljc.reader.ignore(reader);

return rewrite_cljc.node.meta_node.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"meta","meta",1499536964),(2)));
}));
rewrite_cljc.parser.core.read_symbolic_value = (function rewrite_cljc$parser$core$read_symbolic_value(reader){
rewrite_cljc.reader.unread(reader,"#");

return rewrite_cljc.parser.token.parse_token(reader);
});
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sharp","sharp",-83698408),(function (reader){
rewrite_cljc.reader.ignore(reader);

var G__78652 = rewrite_cljc.reader.peek(reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__78652)){
return rewrite_cljc.reader.throw_reader(reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__78652)){
return rewrite_cljc.node.regex_node(rewrite_cljc.parser.string.parse_regex(reader));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__78652)){
return rewrite_cljc.parser.core.read_symbolic_value(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__78652)){
return rewrite_cljc.node.var_node(rewrite_cljc.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"var","var",-769682797),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__78652)){
return rewrite_cljc.node.fn_node(rewrite_cljc.parser.core.parse_delim(reader,")"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__78652)){
return rewrite_cljc.parser.namespaced_map.parse_namespaced_map(reader,rewrite_cljc.parser.core.parse_next);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__78652)){
return rewrite_cljc.node.set_node(rewrite_cljc.parser.core.parse_delim(reader,"}"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__78652)){
return rewrite_cljc.node.eval_node(rewrite_cljc.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"eval","eval",-1103567905),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__78652)){
return rewrite_cljc.node.raw_meta_node.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"meta","meta",1499536964),(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__78652)){
rewrite_cljc.reader.next(reader);

return rewrite_cljc.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1((function (){var read1 = (function (){
return rewrite_cljc.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),(1));
});
return cljs.core.cons((function (){var G__78655 = rewrite_cljc.reader.peek(reader);
switch (G__78655) {
case "(":
return rewrite_cljc.node.token_node.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("?"));

break;
case "@":
rewrite_cljc.reader.next(reader);

return rewrite_cljc.node.token_node.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("?@"));

break;
default:
rewrite_cljc.reader.unread(reader,"?");

return cljs.core.first(read1());

}
})(),read1());
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__78652)){
return rewrite_cljc.node.uneval_node(rewrite_cljc.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"uneval","uneval",1932037707),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
} else {
return rewrite_cljc.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),(2)));

}
}
}
}
}
}
}
}
}
}
}
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deref","deref",-145586795),(function (reader){
return rewrite_cljc.node.deref_node(rewrite_cljc.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"deref","deref",-145586795),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (reader){
return rewrite_cljc.node.quote_node(rewrite_cljc.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"quote","quote",-262615245),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),(function (reader){
return rewrite_cljc.node.syntax_quote_node(rewrite_cljc.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(function (reader){
rewrite_cljc.reader.ignore(reader);

var c = rewrite_cljc.reader.peek(reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"@")){
return rewrite_cljc.node.unquote_splicing_node(rewrite_cljc.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
} else {
return rewrite_cljc.node.unquote_node(rewrite_cljc.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1)));
}
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (reader){
return rewrite_cljc.node.list_node(rewrite_cljc.parser.core.parse_delim(reader,")"));
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (reader){
return rewrite_cljc.node.vector_node(rewrite_cljc.parser.core.parse_delim(reader,"]"));
}));
rewrite_cljc.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (reader){
return rewrite_cljc.node.map_node(rewrite_cljc.parser.core.parse_delim(reader,"}"));
}));

//# sourceMappingURL=rewrite_cljc.parser.core.js.map
