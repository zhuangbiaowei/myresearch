goog.provide('rewrite_cljc.parser.namespaced_map');
rewrite_cljc.parser.namespaced_map.specifies_aliased_QMARK_ = (function rewrite_cljc$parser$namespaced_map$specifies_aliased_QMARK_(reader){
var G__78546 = rewrite_cljc.reader.peek(reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__78546)){
return rewrite_cljc.parser.utils.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF."], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__78546)){
rewrite_cljc.reader.ignore(reader);

return true;
} else {
return false;

}
}
});
rewrite_cljc.parser.namespaced_map.includes_keyword_QMARK_ = (function rewrite_cljc$parser$namespaced_map$includes_keyword_QMARK_(reader){
var c = rewrite_cljc.reader.peek(reader);
return ((cljs.core.not(rewrite_cljc.reader.whitespace_QMARK_(c))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",c)))));
});
rewrite_cljc.parser.namespaced_map.parse_keyword = (function rewrite_cljc$parser$namespaced_map$parse_keyword(reader,read_next,aliased_QMARK_){
var k = (read_next.cljs$core$IFn$_invoke$arity$1 ? read_next.cljs$core$IFn$_invoke$arity$1(reader) : read_next.call(null,reader));
if((k == null)){
return rewrite_cljc.parser.utils.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF."], 0));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),rewrite_cljc.node.tag(k))){
if(cljs.core.truth_(aliased_QMARK_)){
return rewrite_cljc.parser.utils.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":namespaced-map expected namespace alias or map"], 0));
} else {
return rewrite_cljc.parser.utils.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":namespaced-map expected namespace prefix"], 0));
}
} else {
return rewrite_cljc.node.token_node.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([(cljs.core.truth_(aliased_QMARK_)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.string(k))].join('')));

}
}
});
rewrite_cljc.parser.namespaced_map.parse_upto_printable = (function rewrite_cljc$parser$namespaced_map$parse_upto_printable(reader,read_next){
var vs = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.seq(vs)) && (cljs.core.not(rewrite_cljc.node.printable_only_QMARK_(cljs.core.last(vs)))))){
return vs;
} else {
var temp__5718__auto__ = (read_next.cljs$core$IFn$_invoke$arity$1 ? read_next.cljs$core$IFn$_invoke$arity$1(reader) : read_next.call(null,reader));
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var G__78566 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vs,v);
vs = G__78566;
continue;
} else {
return null;
}
}
break;
}
});
rewrite_cljc.parser.namespaced_map.parse_for_map = (function rewrite_cljc$parser$namespaced_map$parse_for_map(reader,read_next){
var m = rewrite_cljc.parser.namespaced_map.parse_upto_printable(reader,read_next);
if((m == null)){
return rewrite_cljc.parser.utils.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF."], 0));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),rewrite_cljc.node.tag(cljs.core.last(m)))){
return rewrite_cljc.parser.utils.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":namespaced-map expects a map"], 0));
} else {
return m;

}
}
});
rewrite_cljc.parser.namespaced_map.parse_namespaced_map = (function rewrite_cljc$parser$namespaced_map$parse_namespaced_map(reader,read_next){
rewrite_cljc.reader.ignore(reader);

var aliased_QMARK_ = rewrite_cljc.parser.namespaced_map.specifies_aliased_QMARK_(reader);
if(rewrite_cljc.parser.namespaced_map.includes_keyword_QMARK_(reader)){
return rewrite_cljc.node.namespaced_map_node(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_cljc.parser.namespaced_map.parse_keyword(reader,read_next,aliased_QMARK_)], null),rewrite_cljc.parser.namespaced_map.parse_for_map(reader,read_next)));
} else {
if(aliased_QMARK_){
return rewrite_cljc.node.namespaced_map_node(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_cljc.node.token_node.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(":"))], null),rewrite_cljc.parser.namespaced_map.parse_for_map(reader,read_next)));
} else {
return rewrite_cljc.parser.utils.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":namespaced-map expected namespace prefix"], 0));
}
}
});

//# sourceMappingURL=rewrite_cljc.parser.namespaced_map.js.map
