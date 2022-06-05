goog.provide('rewrite_cljc.reader');
/**
 * Throw reader exception, including line line/column.
 */
rewrite_cljc.reader.throw_reader = (function rewrite_cljc$reader$throw_reader(var_args){
var args__5772__auto__ = [];
var len__5766__auto___77662 = arguments.length;
var i__5767__auto___77663 = (0);
while(true){
if((i__5767__auto___77663 < len__5766__auto___77662)){
args__5772__auto__.push((arguments[i__5767__auto___77663]));

var G__77664 = (i__5767__auto___77663 + (1));
i__5767__auto___77663 = G__77664;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return rewrite_cljc.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(rewrite_cljc.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic = (function (reader,fmt,data){
var c = cljs.tools.reader.reader_types.get_column_number(reader);
var l = cljs.tools.reader.reader_types.get_line_number(reader);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rewrite_cljc.interop.simple_format,fmt,data))," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"]"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.reader.throw_reader.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_cljc.reader.throw_reader.cljs$lang$applyTo = (function (seq77643){
var G__77645 = cljs.core.first(seq77643);
var seq77643__$1 = cljs.core.next(seq77643);
var G__77646 = cljs.core.first(seq77643__$1);
var seq77643__$2 = cljs.core.next(seq77643__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77645,G__77646,seq77643__$2);
}));

/**
 * Check whether a given char is a token boundary.
 */
rewrite_cljc.reader.boundary_QMARK_ = (function rewrite_cljc$reader$boundary_QMARK_(c){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [null,null,"@",null,"`",null,"\"",null,"'",null,"(",null,")",null,":",null,";",null,"[",null,"{",null,"\\",null,"]",null,"}",null,"^",null,"~",null], null), null),c);
});
rewrite_cljc.reader.comma_QMARK_ = (function rewrite_cljc$reader$comma_QMARK_(c){
return ("," === c);
});
/**
 * Checks whether a given character is whitespace
 */
rewrite_cljc.reader.whitespace_QMARK_ = (function rewrite_cljc$reader$whitespace_QMARK_(c){
return rewrite_cljc.interop.clojure_whitespace_QMARK_(c);
});
/**
 * Checks whether the character is a newline
 */
rewrite_cljc.reader.linebreak_QMARK_ = (function rewrite_cljc$reader$linebreak_QMARK_(c){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null),c);
});
/**
 * Checks whether the character is a space
 */
rewrite_cljc.reader.space_QMARK_ = (function rewrite_cljc$reader$space_QMARK_(c){
var and__5041__auto__ = c;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = rewrite_cljc.interop.clojure_whitespace_QMARK_(c);
if(cljs.core.truth_(and__5041__auto____$1)){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\n",null,",",null,"\r",null], null), null),c)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
rewrite_cljc.reader.whitespace_or_boundary_QMARK_ = (function rewrite_cljc$reader$whitespace_or_boundary_QMARK_(c){
var or__5043__auto__ = rewrite_cljc.reader.whitespace_QMARK_(c);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return rewrite_cljc.reader.boundary_QMARK_(c);
}
});
/**
 * Read while the chars fulfill the given condition. Ignores
 *  the unmatching char.
 */
rewrite_cljc.reader.read_while = (function rewrite_cljc$reader$read_while(var_args){
var G__77656 = arguments.length;
switch (G__77656) {
case 2:
return rewrite_cljc.reader.read_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.reader.read_while.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.reader.read_while.cljs$core$IFn$_invoke$arity$2 = (function (reader,p_QMARK_){
return rewrite_cljc.reader.read_while.cljs$core$IFn$_invoke$arity$3(reader,p_QMARK_,cljs.core.not((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(null) : p_QMARK_.call(null,null))));
}));

(rewrite_cljc.reader.read_while.cljs$core$IFn$_invoke$arity$3 = (function (reader,p_QMARK_,eof_QMARK_){
var buf = (new goog.string.StringBuffer());
while(true){
var temp__5718__auto__ = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(c) : p_QMARK_.call(null,c)))){
buf.append(c);

continue;
} else {
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,c);

return buf.toString();
}
} else {
if(cljs.core.truth_(eof_QMARK_)){
return buf.toString();
} else {
return rewrite_cljc.reader.throw_reader(reader,"unexpected EOF");
}
}
break;
}
}));

(rewrite_cljc.reader.read_while.cljs$lang$maxFixedArity = 3);

/**
 * Read until a char fulfills the given condition. Ignores the
 * matching char.
 */
rewrite_cljc.reader.read_until = (function rewrite_cljc$reader$read_until(reader,p_QMARK_){
return rewrite_cljc.reader.read_while.cljs$core$IFn$_invoke$arity$3(reader,cljs.core.complement(p_QMARK_),(p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(null) : p_QMARK_.call(null,null)));
});
/**
 * Read until linebreak and include it.
 */
rewrite_cljc.reader.read_include_linebreak = (function rewrite_cljc$reader$read_include_linebreak(reader){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.reader.read_until(reader,(function (p1__77661_SHARP_){
return (((p1__77661_SHARP_ == null)) || (rewrite_cljc.reader.linebreak_QMARK_(p1__77661_SHARP_)));
}))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null))].join('');
});
/**
 * Convert string to EDN value.
 */
rewrite_cljc.reader.string__GT_edn = (function rewrite_cljc$reader$string__GT_edn(s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(s);
});
/**
 * Ignore the next character.
 */
rewrite_cljc.reader.ignore = (function rewrite_cljc$reader$ignore(reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return null;
});
/**
 * Read next char.
 */
rewrite_cljc.reader.next = (function rewrite_cljc$reader$next(reader){
return reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
});
/**
 * Unreads a char. Puts the char back on the reader.
 */
rewrite_cljc.reader.unread = (function rewrite_cljc$reader$unread(reader,ch){
return reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);
});
/**
 * Peek next char.
 */
rewrite_cljc.reader.peek = (function rewrite_cljc$reader$peek(reader){
return reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
});
/**
 * Create map of `row-k` and `col-k` representing the current reader position.
 */
rewrite_cljc.reader.position = (function rewrite_cljc$reader$position(reader,row_k,col_k){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([row_k,reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),col_k,reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null)]);
});
/**
 * Use the given function to read value, then attach row/col metadata.
 */
rewrite_cljc.reader.read_with_meta = (function rewrite_cljc$reader$read_with_meta(reader,read_fn){
var start_position = rewrite_cljc.reader.position(reader,new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084));
var temp__5720__auto__ = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
if(cljs.core.truth_(temp__5720__auto__)){
var entry = temp__5720__auto__;
return cljs.core.with_meta(entry,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start_position,rewrite_cljc.reader.position(reader,new cljs.core.Keyword(null,"end-row","end-row",-545103581),new cljs.core.Keyword(null,"end-col","end-col",-724155879))], 0)));
} else {
return null;
}
});
/**
 * Call the given function on the given reader until it returns
 * a non-truthy value.
 */
rewrite_cljc.reader.read_repeatedly = (function rewrite_cljc$reader$read_repeatedly(reader,read_fn){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
}))));
});
/**
 * Call the given function on the given reader until `n` values matching `p?` have been
 * collected.
 */
rewrite_cljc.reader.read_n = (function rewrite_cljc$reader$read_n(reader,node_tag,read_fn,p_QMARK_,n){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var c = (0);
var vs = cljs.core.PersistentVector.EMPTY;
while(true){
if((c < n)){
var temp__5718__auto__ = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var G__77666 = (cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : p_QMARK_.call(null,v)))?(c + (1)):c);
var G__77667 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vs,v);
c = G__77666;
vs = G__77667;
continue;
} else {
return rewrite_cljc.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,"%s node expects %d value%s.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_tag,n,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?"":"s")], 0));
}
} else {
return vs;
}
break;
}
});
/**
 * Create reader for strings.
 */
rewrite_cljc.reader.string_reader = (function rewrite_cljc$reader$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
});

//# sourceMappingURL=rewrite_cljc.reader.js.map
