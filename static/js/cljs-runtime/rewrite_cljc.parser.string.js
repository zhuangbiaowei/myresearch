goog.provide('rewrite_cljc.parser.string');
/**
 * Flush buffer and add string to the given vector.
 */
rewrite_cljc.parser.string.flush_into = (function rewrite_cljc$parser$string$flush_into(lines,buf){
var s = buf.toString();
buf.clear();

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,s);
});
rewrite_cljc.parser.string.read_string_data = (function rewrite_cljc$parser$string$read_string_data(reader){
rewrite_cljc.parser.utils.ignore(reader);

var buf = (new goog.string.StringBuffer());
var escape_QMARK_ = false;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if(((cljs.core.not(escape_QMARK_)) && ((c === "\"")))){
return rewrite_cljc.parser.string.flush_into(lines,buf);
} else {
if((c === "\n")){
var G__78610 = escape_QMARK_;
var G__78611 = rewrite_cljc.parser.string.flush_into(lines,buf);
escape_QMARK_ = G__78610;
lines = G__78611;
continue;
} else {
buf.append(c);

var G__78612 = ((cljs.core.not(escape_QMARK_)) && ((c === "\\")));
var G__78613 = lines;
escape_QMARK_ = G__78612;
lines = G__78613;
continue;

}
}
} else {
return rewrite_cljc.parser.utils.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading string."], 0));
}
break;
}
});
rewrite_cljc.parser.string.parse_string = (function rewrite_cljc$parser$string$parse_string(reader){
return rewrite_cljc.node.string_node(rewrite_cljc.parser.string.read_string_data(reader));
});
rewrite_cljc.parser.string.parse_regex = (function rewrite_cljc$parser$string$parse_regex(reader){
var h = rewrite_cljc.parser.string.read_string_data(reader);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",h);
});

//# sourceMappingURL=rewrite_cljc.parser.string.js.map
