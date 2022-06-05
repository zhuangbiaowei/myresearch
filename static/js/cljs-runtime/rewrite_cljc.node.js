goog.provide('rewrite_cljc.node');
/**
 * Coerce `form` to node.
 */
rewrite_cljc.node.coerce = rewrite_cljc.node.protocols.coerce;

/**
 * Returns child nodes for `node`.
 */
rewrite_cljc.node.children = rewrite_cljc.node.protocols.children;

/**
 * Returns children for `node` converted to forms.
 */
rewrite_cljc.node.child_sexprs = rewrite_cljc.node.protocols.child_sexprs;

/**
 * Return string version of `nodes`.
 */
rewrite_cljc.node.concat_strings = rewrite_cljc.node.protocols.concat_strings;

/**
 * Returns true if `node` can have children.
 */
rewrite_cljc.node.inner_QMARK_ = rewrite_cljc.node.protocols.inner_QMARK_;

/**
 * Returns number of characters before children for `node`.
 */
rewrite_cljc.node.leader_length = rewrite_cljc.node.protocols.leader_length;

/**
 * Return number of characters for the string version of `node`.
 */
rewrite_cljc.node.length = rewrite_cljc.node.protocols.length;

/**
 * Returns true if `x` is a rewrite-cljc created node.
 */
rewrite_cljc.node.node_QMARK_ = rewrite_cljc.node.protocols.node_QMARK_;

/**
 * Return true if `node` cannot be converted to an s-expression element.
 */
rewrite_cljc.node.printable_only_QMARK_ = rewrite_cljc.node.protocols.printable_only_QMARK_;

/**
 * Returns `node` replacing current children with `children`.
 */
rewrite_cljc.node.replace_children = rewrite_cljc.node.protocols.replace_children;

/**
 * Return `node` converted to form.
 */
rewrite_cljc.node.sexpr = rewrite_cljc.node.protocols.sexpr;

/**
 * Return forms for `nodes`. Nodes that do not represent s-expression are skipped.
 */
rewrite_cljc.node.sexprs = rewrite_cljc.node.protocols.sexprs;

/**
 * Return the string version of `node`.
 */
rewrite_cljc.node.string = rewrite_cljc.node.protocols.string;

/**
 * Returns keyword representing type of `node`.
 */
rewrite_cljc.node.tag = rewrite_cljc.node.protocols.tag;

/**
 * Create node representing a comment with text `s`.
 */
rewrite_cljc.node.comment_node = rewrite_cljc.node.comment.comment_node;

/**
 * Returns true if `node` is a comment.
 */
rewrite_cljc.node.comment_QMARK_ = rewrite_cljc.node.comment.comment_QMARK_;

/**
 * Create node representing an anonymous function with `children`.
 */
rewrite_cljc.node.fn_node = rewrite_cljc.node.fn.fn_node;

/**
 * Create top-level node wrapping multiple `children`
 * (equivalent to an implicit `do` at the top-level).
 */
rewrite_cljc.node.forms_node = rewrite_cljc.node.forms.forms_node;

/**
 * Create node representing an integer `value` in `base`.
 * 
 *   `base` defaults to 10.
 */
rewrite_cljc.node.integer_node = rewrite_cljc.node.integer.integer_node;

/**
 * Create node representing a keyword `k`. If `namespaced?` is `true`
 * a keyword à la `::x` or `::ns/x` (i.e. namespaced/aliased/auto-resolved) is generated.
 */
rewrite_cljc.node.keyword_node = rewrite_cljc.node.keyword.keyword_node;

/**
 * Create node representing a form `data` and its `metadata`.
 */
rewrite_cljc.node.meta_node = rewrite_cljc.node.meta.meta_node;

/**
 * Create node representing a form `data` and its `metadata` using the
 * `#^` prefix.
 */
rewrite_cljc.node.raw_meta_node = rewrite_cljc.node.meta.raw_meta_node;

/**
 * Create a node representing a namespaced map. There are 3 types of namespaced maps:
 * 
 * 1. prefix namespaced map
 * The prefix is a keyword which specifies to a namespace.
 * Example: `#:my.name.space{:a 1}`
 * 
 * 2. auto-resolve alias namespaced map
 * The prefix is an auto-resolve keyword specifies a namespace alias.
 * Example: `#::ns-alias{:b 3}`
 * 
 * 3. auto-resolve namespaced map
 * The prefix is `::` which specifies the current namespace.
 * Example: `#::{:c 4}`
 * 
 *   First child is the prefix, followed by optional whitespace then map node.
 *   TODO: this still seems hacky to me.
 *   Prefix must be a token-node with a keyword value. Use (keyword ':') for auto-resolve.
 */
rewrite_cljc.node.namespaced_map_node = rewrite_cljc.node.namespaced_map.namespaced_map_node;

/**
 * Create node representing a regex with `pattern-string`
 */
rewrite_cljc.node.regex_node = rewrite_cljc.node.regex.regex_node;

/**
 * Create node representing the dereferencing of a form (i.e. `@...`)
 * where `children` is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.deref_node = rewrite_cljc.node.reader_macro.deref_node;

/**
 * Create node representing an inline evaluation (i.e. `#=...`)
 * where `children` is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.eval_node = rewrite_cljc.node.reader_macro.eval_node;

/**
 * Create node representing a reader macro (i.e. `#... ...`) with `children`. 
 */
rewrite_cljc.node.reader_macro_node = rewrite_cljc.node.reader_macro.reader_macro_node;

/**
 * Create node representing a var
 * where `children` is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.var_node = rewrite_cljc.node.reader_macro.var_node;

/**
 * Create a node representing a list with `children`.
 */
rewrite_cljc.node.list_node = rewrite_cljc.node.seq.list_node;

/**
 * Create a node representing an map with `children`.
 */
rewrite_cljc.node.map_node = rewrite_cljc.node.seq.map_node;

/**
 * Create a node representing a set with `children`.
 */
rewrite_cljc.node.set_node = rewrite_cljc.node.seq.set_node;

/**
 * Create a node representing a vector with `children`.
 */
rewrite_cljc.node.vector_node = rewrite_cljc.node.seq.vector_node;

/**
 * Create node representing a string value where `lines`
 * can be a sequence of strings or a single string.
 */
rewrite_cljc.node.string_node = rewrite_cljc.node.stringz.string_node;

/**
 * Create node representing a quoted form where `children`
 * is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.quote_node = rewrite_cljc.node.quote.quote_node;

/**
 * Create node representing a syntax-quoted form where `children`
 * is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.syntax_quote_node = rewrite_cljc.node.quote.syntax_quote_node;

/**
 * Create node representing an unquoted form (i.e. `~...`) where `children`.
 * is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.unquote_node = rewrite_cljc.node.quote.unquote_node;

/**
 * Create node representing an unquote-spliced form (i.e. `~@...`) where `children`.
 * is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.unquote_splicing_node = rewrite_cljc.node.quote.unquote_splicing_node;

/**
 * Create node for an unspecified token of `value`.
 */
rewrite_cljc.node.token_node = rewrite_cljc.node.token.token_node;

/**
 * Create node representing an uneval `#_` form with `children`.
 */
rewrite_cljc.node.uneval_node = rewrite_cljc.node.uneval.uneval_node;

/**
 * Interleave `nodes` with `", "` nodes.
 */
rewrite_cljc.node.comma_separated = rewrite_cljc.node.whitespace.comma_separated;

/**
 * Interleave `nodes` with newline nodes.
 */
rewrite_cljc.node.line_separated = rewrite_cljc.node.whitespace.line_separated;

/**
 * Returns true if `node` represents one or more linebreaks.
 */
rewrite_cljc.node.linebreak_QMARK_ = rewrite_cljc.node.whitespace.linebreak_QMARK_;

/**
 * Create node representing `n` newline characters.
 */
rewrite_cljc.node.newlines = rewrite_cljc.node.whitespace.newlines;

/**
 * Create newline node of string `s`, where `s` is one or more linebreak characters.
 */
rewrite_cljc.node.newline_node = rewrite_cljc.node.whitespace.newline_node;

/**
 * Create node representing `n` spaces.
 */
rewrite_cljc.node.spaces = rewrite_cljc.node.whitespace.spaces;

/**
 * Create whitespace node of string `s`, where `s` is one or more space characters.
 */
rewrite_cljc.node.whitespace_node = rewrite_cljc.node.whitespace.whitespace_node;

/**
 * Returns true if `node` represents Clojure whitespace.
 */
rewrite_cljc.node.whitespace_QMARK_ = rewrite_cljc.node.whitespace.whitespace_QMARK_;

/**
 * Create comma node of string `s`, where `s` is one or more comma characters.
 */
rewrite_cljc.node.comma_node = rewrite_cljc.node.whitespace.comma_node;

/**
 * Returns true if `node` represents one or more commas.
 */
rewrite_cljc.node.comma_QMARK_ = rewrite_cljc.node.whitespace.comma_QMARK_;

/**
 * Convert string `s` of whitespace to whitespace/newline nodes.
 */
rewrite_cljc.node.whitespace_nodes = rewrite_cljc.node.whitespace.whitespace_nodes;

/**
 * Return true when `node` represents whitespace or comment.
 */
rewrite_cljc.node.whitespace_or_comment_QMARK_ = (function rewrite_cljc$node$whitespace_or_comment_QMARK_(node){
return ((rewrite_cljc.node.whitespace.whitespace_QMARK_(node)) || (rewrite_cljc.node.comment.comment_QMARK_(node)));
});
/**
 * DEPRECATED: Get first child as a pair of tag/sexpr (if inner node),
 * or just the node's own sexpr. (use explicit analysis of `children`
 * `child-sexprs` instead) 
 */
rewrite_cljc.node.value = (function rewrite_cljc$node$value(node){
if(cljs.core.truth_(rewrite_cljc.node.protocols.inner_QMARK_(node))){
var G__78460 = rewrite_cljc.node.protocols.children(node);
var G__78460__$1 = (((G__78460 == null))?null:cljs.core.first(G__78460));
if((G__78460__$1 == null)){
return null;
} else {
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.tag,rewrite_cljc.node.protocols.sexpr)(G__78460__$1);
}
} else {
return rewrite_cljc.node.protocols.sexpr(node);
}
});

//# sourceMappingURL=rewrite_cljc.node.js.map
