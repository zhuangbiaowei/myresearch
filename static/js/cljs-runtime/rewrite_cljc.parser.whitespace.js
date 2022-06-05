goog.provide('rewrite_cljc.parser.whitespace');
/**
 * Parse as much whitespace as possible. The created node can either contain
 * only linebreaks or only space/tabs.
 */
rewrite_cljc.parser.whitespace.parse_whitespace = (function rewrite_cljc$parser$whitespace$parse_whitespace(reader){
var c = rewrite_cljc.reader.peek(reader);
if(rewrite_cljc.reader.linebreak_QMARK_(c)){
return rewrite_cljc.node.newline_node(rewrite_cljc.reader.read_while.cljs$core$IFn$_invoke$arity$2(reader,rewrite_cljc.reader.linebreak_QMARK_));
} else {
if(rewrite_cljc.reader.comma_QMARK_(c)){
return rewrite_cljc.node.comma_node(rewrite_cljc.reader.read_while.cljs$core$IFn$_invoke$arity$2(reader,rewrite_cljc.reader.comma_QMARK_));
} else {
return rewrite_cljc.node.whitespace_node(rewrite_cljc.reader.read_while.cljs$core$IFn$_invoke$arity$2(reader,rewrite_cljc.reader.space_QMARK_));

}
}
});

//# sourceMappingURL=rewrite_cljc.parser.whitespace.js.map
