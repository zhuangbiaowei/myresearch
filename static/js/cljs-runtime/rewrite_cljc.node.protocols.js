goog.provide('rewrite_cljc.node.protocols');

/**
 * Protocol for EDN/Clojure/ClojureScript nodes.
 * @interface
 */
rewrite_cljc.node.protocols.Node = function(){};

var rewrite_cljc$node$protocols$Node$tag$dyn_77477 = (function (node){
var x__5390__auto__ = (((node == null))?null:node);
var m__5391__auto__ = (rewrite_cljc.node.protocols.tag[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5391__auto__.call(null,node));
} else {
var m__5389__auto__ = (rewrite_cljc.node.protocols.tag["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5389__auto__.call(null,node));
} else {
throw cljs.core.missing_protocol("Node.tag",node);
}
}
});
/**
 * Returns keyword representing type of `node`.
 */
rewrite_cljc.node.protocols.tag = (function rewrite_cljc$node$protocols$tag(node){
if((((!((node == null)))) && ((!((node.rewrite_cljc$node$protocols$Node$tag$arity$1 == null)))))){
return node.rewrite_cljc$node$protocols$Node$tag$arity$1(node);
} else {
return rewrite_cljc$node$protocols$Node$tag$dyn_77477(node);
}
});

var rewrite_cljc$node$protocols$Node$printable_only_QMARK_$dyn_77478 = (function (node){
var x__5390__auto__ = (((node == null))?null:node);
var m__5391__auto__ = (rewrite_cljc.node.protocols.printable_only_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5391__auto__.call(null,node));
} else {
var m__5389__auto__ = (rewrite_cljc.node.protocols.printable_only_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5389__auto__.call(null,node));
} else {
throw cljs.core.missing_protocol("Node.printable-only?",node);
}
}
});
/**
 * Return true if `node` cannot be converted to an s-expression element.
 */
rewrite_cljc.node.protocols.printable_only_QMARK_ = (function rewrite_cljc$node$protocols$printable_only_QMARK_(node){
if((((!((node == null)))) && ((!((node.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 == null)))))){
return node.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1(node);
} else {
return rewrite_cljc$node$protocols$Node$printable_only_QMARK_$dyn_77478(node);
}
});

var rewrite_cljc$node$protocols$Node$sexpr$dyn_77479 = (function (node){
var x__5390__auto__ = (((node == null))?null:node);
var m__5391__auto__ = (rewrite_cljc.node.protocols.sexpr[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5391__auto__.call(null,node));
} else {
var m__5389__auto__ = (rewrite_cljc.node.protocols.sexpr["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5389__auto__.call(null,node));
} else {
throw cljs.core.missing_protocol("Node.sexpr",node);
}
}
});
/**
 * Return `node` converted to form.
 */
rewrite_cljc.node.protocols.sexpr = (function rewrite_cljc$node$protocols$sexpr(node){
if((((!((node == null)))) && ((!((node.rewrite_cljc$node$protocols$Node$sexpr$arity$1 == null)))))){
return node.rewrite_cljc$node$protocols$Node$sexpr$arity$1(node);
} else {
return rewrite_cljc$node$protocols$Node$sexpr$dyn_77479(node);
}
});

var rewrite_cljc$node$protocols$Node$length$dyn_77480 = (function (node){
var x__5390__auto__ = (((node == null))?null:node);
var m__5391__auto__ = (rewrite_cljc.node.protocols.length[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5391__auto__.call(null,node));
} else {
var m__5389__auto__ = (rewrite_cljc.node.protocols.length["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5389__auto__.call(null,node));
} else {
throw cljs.core.missing_protocol("Node.length",node);
}
}
});
/**
 * Return number of characters for the string version of `node`.
 */
rewrite_cljc.node.protocols.length = (function rewrite_cljc$node$protocols$length(node){
if((((!((node == null)))) && ((!((node.rewrite_cljc$node$protocols$Node$length$arity$1 == null)))))){
return node.rewrite_cljc$node$protocols$Node$length$arity$1(node);
} else {
return rewrite_cljc$node$protocols$Node$length$dyn_77480(node);
}
});

var rewrite_cljc$node$protocols$Node$string$dyn_77481 = (function (node){
var x__5390__auto__ = (((node == null))?null:node);
var m__5391__auto__ = (rewrite_cljc.node.protocols.string[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5391__auto__.call(null,node));
} else {
var m__5389__auto__ = (rewrite_cljc.node.protocols.string["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5389__auto__.call(null,node));
} else {
throw cljs.core.missing_protocol("Node.string",node);
}
}
});
/**
 * Return the string version of `node`.
 */
rewrite_cljc.node.protocols.string = (function rewrite_cljc$node$protocols$string(node){
if((((!((node == null)))) && ((!((node.rewrite_cljc$node$protocols$Node$string$arity$1 == null)))))){
return node.rewrite_cljc$node$protocols$Node$string$arity$1(node);
} else {
return rewrite_cljc$node$protocols$Node$string$dyn_77481(node);
}
});

(rewrite_cljc.node.protocols.Node["_"] = true);

(rewrite_cljc.node.protocols.tag["_"] = (function (_){
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}));

(rewrite_cljc.node.protocols.printable_only_QMARK_["_"] = (function (_){
return false;
}));

(rewrite_cljc.node.protocols.sexpr["_"] = (function (this$){
return this$;
}));

(rewrite_cljc.node.protocols.length["_"] = (function (this$){
return cljs.core.count(rewrite_cljc.node.protocols.string(this$));
}));

(rewrite_cljc.node.protocols.string["_"] = (function (this$){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));
/**
 * Return forms for `nodes`. Nodes that do not represent s-expression are skipped.
 */
rewrite_cljc.node.protocols.sexprs = (function rewrite_cljc$node$protocols$sexprs(nodes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.sexpr,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.printable_only_QMARK_,nodes));
});
/**
 * Return total string length for `nodes`.
 */
rewrite_cljc.node.protocols.sum_lengths = (function rewrite_cljc$node$protocols$sum_lengths(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.length,nodes));
});
/**
 * Return string version of `nodes`.
 */
rewrite_cljc.node.protocols.concat_strings = (function rewrite_cljc$node$protocols$concat_strings(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.string,nodes));
});

/**
 * Protocol for non-leaf EDN/Clojure/ClojureScript nodes.
 * @interface
 */
rewrite_cljc.node.protocols.InnerNode = function(){};

var rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$dyn_77483 = (function (node){
var x__5390__auto__ = (((node == null))?null:node);
var m__5391__auto__ = (rewrite_cljc.node.protocols.inner_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5391__auto__.call(null,node));
} else {
var m__5389__auto__ = (rewrite_cljc.node.protocols.inner_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5389__auto__.call(null,node));
} else {
throw cljs.core.missing_protocol("InnerNode.inner?",node);
}
}
});
/**
 * Returns true if `node` can have children.
 */
rewrite_cljc.node.protocols.inner_QMARK_ = (function rewrite_cljc$node$protocols$inner_QMARK_(node){
if((((!((node == null)))) && ((!((node.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 == null)))))){
return node.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1(node);
} else {
return rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$dyn_77483(node);
}
});

var rewrite_cljc$node$protocols$InnerNode$children$dyn_77486 = (function (node){
var x__5390__auto__ = (((node == null))?null:node);
var m__5391__auto__ = (rewrite_cljc.node.protocols.children[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5391__auto__.call(null,node));
} else {
var m__5389__auto__ = (rewrite_cljc.node.protocols.children["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5389__auto__.call(null,node));
} else {
throw cljs.core.missing_protocol("InnerNode.children",node);
}
}
});
/**
 * Returns child nodes for `node`.
 */
rewrite_cljc.node.protocols.children = (function rewrite_cljc$node$protocols$children(node){
if((((!((node == null)))) && ((!((node.rewrite_cljc$node$protocols$InnerNode$children$arity$1 == null)))))){
return node.rewrite_cljc$node$protocols$InnerNode$children$arity$1(node);
} else {
return rewrite_cljc$node$protocols$InnerNode$children$dyn_77486(node);
}
});

var rewrite_cljc$node$protocols$InnerNode$replace_children$dyn_77495 = (function (node,children){
var x__5390__auto__ = (((node == null))?null:node);
var m__5391__auto__ = (rewrite_cljc.node.protocols.replace_children[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(node,children) : m__5391__auto__.call(null,node,children));
} else {
var m__5389__auto__ = (rewrite_cljc.node.protocols.replace_children["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(node,children) : m__5389__auto__.call(null,node,children));
} else {
throw cljs.core.missing_protocol("InnerNode.replace-children",node);
}
}
});
/**
 * Returns `node` replacing current children with `children`.
 */
rewrite_cljc.node.protocols.replace_children = (function rewrite_cljc$node$protocols$replace_children(node,children){
if((((!((node == null)))) && ((!((node.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 == null)))))){
return node.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2(node,children);
} else {
return rewrite_cljc$node$protocols$InnerNode$replace_children$dyn_77495(node,children);
}
});

var rewrite_cljc$node$protocols$InnerNode$leader_length$dyn_77497 = (function (node){
var x__5390__auto__ = (((node == null))?null:node);
var m__5391__auto__ = (rewrite_cljc.node.protocols.leader_length[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5391__auto__.call(null,node));
} else {
var m__5389__auto__ = (rewrite_cljc.node.protocols.leader_length["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__5389__auto__.call(null,node));
} else {
throw cljs.core.missing_protocol("InnerNode.leader-length",node);
}
}
});
/**
 * Returns number of characters before children for `node`.
 */
rewrite_cljc.node.protocols.leader_length = (function rewrite_cljc$node$protocols$leader_length(node){
if((((!((node == null)))) && ((!((node.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 == null)))))){
return node.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1(node);
} else {
return rewrite_cljc$node$protocols$InnerNode$leader_length$dyn_77497(node);
}
});

(rewrite_cljc.node.protocols.InnerNode["_"] = true);

(rewrite_cljc.node.protocols.inner_QMARK_["_"] = (function (_){
return false;
}));

(rewrite_cljc.node.protocols.children["_"] = (function (_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.node.protocols.replace_children["_"] = (function (_,___$1){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.node.protocols.leader_length["_"] = (function (_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));
/**
 * Returns children for `node` converted to forms.
 */
rewrite_cljc.node.protocols.child_sexprs = (function rewrite_cljc$node$protocols$child_sexprs(node){
if(cljs.core.truth_(rewrite_cljc.node.protocols.inner_QMARK_(node))){
return rewrite_cljc.node.protocols.sexprs(rewrite_cljc.node.protocols.children(node));
} else {
return null;
}
});
/**
 * Returns true if `x` is a rewrite-cljc created node.
 */
rewrite_cljc.node.protocols.node_QMARK_ = (function rewrite_cljc$node$protocols$node_QMARK_(x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unknown","unknown",-935977881),rewrite_cljc.node.protocols.tag(x));
});

/**
 * Protocol for values that can be coerced to nodes.
 * @interface
 */
rewrite_cljc.node.protocols.NodeCoerceable = function(){};

var rewrite_cljc$node$protocols$NodeCoerceable$coerce$dyn_77501 = (function (form){
var x__5390__auto__ = (((form == null))?null:form);
var m__5391__auto__ = (rewrite_cljc.node.protocols.coerce[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(form) : m__5391__auto__.call(null,form));
} else {
var m__5389__auto__ = (rewrite_cljc.node.protocols.coerce["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(form) : m__5389__auto__.call(null,form));
} else {
throw cljs.core.missing_protocol("NodeCoerceable.coerce",form);
}
}
});
/**
 * Coerce `form` to node.
 */
rewrite_cljc.node.protocols.coerce = (function rewrite_cljc$node$protocols$coerce(form){
if((((!((form == null)))) && ((!((form.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1 == null)))))){
return form.rewrite_cljc$node$protocols$NodeCoerceable$coerce$arity$1(form);
} else {
return rewrite_cljc$node$protocols$NodeCoerceable$coerce$dyn_77501(form);
}
});

rewrite_cljc.node.protocols.node__GT_string = (function rewrite_cljc$node$protocols$node__GT_string(node){
var n = cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(rewrite_cljc.node.protocols.printable_only_QMARK_(node))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewrite_cljc.node.protocols.string(node)], 0)):rewrite_cljc.node.protocols.string(node)));
var n_SINGLEQUOTE_ = (cljs.core.truth_(cljs.core.re_find(/\n/,n))?rewrite_cljc.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic("\n  %s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.replace(n,/\r?\n/,"\n  ")], 0)):[" ",n].join(''));
return rewrite_cljc.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic("<%s:%s>",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(rewrite_cljc.node.protocols.tag(node)),n_SINGLEQUOTE_], 0));
});
rewrite_cljc.node.protocols.make_printable_cljs_BANG_ = (function rewrite_cljc$node$protocols$make_printable_cljs_BANG_(obj){
(obj.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

return (obj.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_opts){
var o__$1 = this;
return cljs.core._write(writer,rewrite_cljc.node.protocols.node__GT_string(o__$1));
}));
});
rewrite_cljc.node.protocols.make_printable_BANG_ = (function rewrite_cljc$node$protocols$make_printable_BANG_(obj){
return rewrite_cljc.node.protocols.make_printable_cljs_BANG_(obj);
});
rewrite_cljc.node.protocols.without_whitespace = (function rewrite_cljc$node$protocols$without_whitespace(nodes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.printable_only_QMARK_,nodes);
});
rewrite_cljc.node.protocols.assert_sexpr_count = (function rewrite_cljc$node$protocols$assert_sexpr_count(nodes,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rewrite_cljc.node.protocols.without_whitespace(nodes)),c)){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic("can only contain %d non-whitespace form%s.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(1)))?"":"s")], 0))),"\n","(= (count (without-whitespace nodes)) c)"].join('')));
}
});
rewrite_cljc.node.protocols.assert_single_sexpr = (function rewrite_cljc$node$protocols$assert_single_sexpr(nodes){
return rewrite_cljc.node.protocols.assert_sexpr_count(nodes,(1));
});
/**
 * A node's extent is how far it moves the "cursor".
 *   Rows are simple - if we have x newlines in the string representation, we
 *   will always move the "cursor" x rows.
 *   Columns are strange.  If we have *any* newlines at all in the textual
 *   representation of a node, following nodes' column positions are not
 *   affected by our startting column position at all.  So the second number
 *   in the pair we return is interpreted as a relative column adjustment
 *   when the first number in the pair (rows) is zero, and as an absolute
 *   column position when rows is non-zero.
 */
rewrite_cljc.node.protocols.extent = (function rewrite_cljc$node$protocols$extent(node){
var map__77459 = cljs.core.meta(node);
var map__77459__$1 = cljs.core.__destructure_map(map__77459);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77459__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77459__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var next_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77459__$1,new cljs.core.Keyword(null,"next-row","next-row",-408963777));
var next_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77459__$1,new cljs.core.Keyword(null,"next-col","next-col",601697889));
if(cljs.core.truth_((function (){var and__5041__auto__ = row;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = col;
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = next_row;
if(cljs.core.truth_(and__5041__auto____$2)){
return next_col;
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(next_row - row),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(row,next_row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row], 0)))?(next_col - col):next_col)], null);
} else {
var s = rewrite_cljc.node.protocols.string(node);
var rows = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"\n"),s));
var cols = (((rows === (0)))?cljs.core.count(s):(cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,"\n")),cljs.core.reverse(s))) + (1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null);
}
});
rewrite_cljc.node.protocols._PLUS_extent = (function rewrite_cljc$node$protocols$_PLUS_extent(p__77465,p__77466){
var vec__77467 = p__77465;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77467,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77467,(1),null);
var vec__77470 = p__77466;
var row_extent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77470,(0),null);
var col_extent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77470,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + row_extent),(function (){var G__77473 = col_extent;
if((row_extent === (0))){
return (G__77473 + col);
} else {
return G__77473;
}
})()], null);
});

//# sourceMappingURL=rewrite_cljc.node.protocols.js.map
