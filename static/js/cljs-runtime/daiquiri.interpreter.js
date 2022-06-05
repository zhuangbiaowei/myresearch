goog.provide('daiquiri.interpreter');
goog.scope(function(){
  daiquiri.interpreter.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.component_attributes = (function daiquiri$interpreter$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__49204_49280 = cljs.core.seq(x);
var chunk__49205_49281 = null;
var count__49206_49282 = (0);
var i__49207_49283 = (0);
while(true){
if((i__49207_49283 < count__49206_49282)){
var vec__49232_49286 = chunk__49205_49281.cljs$core$IIndexed$_nth$arity$2(null,i__49207_49283);
var k_49287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49232_49286,(0),null);
var v_49288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49232_49286,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_49287),v_49288);


var G__49289 = seq__49204_49280;
var G__49290 = chunk__49205_49281;
var G__49291 = count__49206_49282;
var G__49292 = (i__49207_49283 + (1));
seq__49204_49280 = G__49289;
chunk__49205_49281 = G__49290;
count__49206_49282 = G__49291;
i__49207_49283 = G__49292;
continue;
} else {
var temp__5720__auto___49293 = cljs.core.seq(seq__49204_49280);
if(temp__5720__auto___49293){
var seq__49204_49294__$1 = temp__5720__auto___49293;
if(cljs.core.chunked_seq_QMARK_(seq__49204_49294__$1)){
var c__5565__auto___49295 = cljs.core.chunk_first(seq__49204_49294__$1);
var G__49296 = cljs.core.chunk_rest(seq__49204_49294__$1);
var G__49297 = c__5565__auto___49295;
var G__49298 = cljs.core.count(c__5565__auto___49295);
var G__49299 = (0);
seq__49204_49280 = G__49296;
chunk__49205_49281 = G__49297;
count__49206_49282 = G__49298;
i__49207_49283 = G__49299;
continue;
} else {
var vec__49235_49300 = cljs.core.first(seq__49204_49294__$1);
var k_49301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49235_49300,(0),null);
var v_49302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49235_49300,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_49301),v_49302);


var G__49306 = cljs.core.next(seq__49204_49294__$1);
var G__49307 = null;
var G__49308 = (0);
var G__49309 = (0);
seq__49204_49280 = G__49306;
chunk__49205_49281 = G__49307;
count__49206_49282 = G__49308;
i__49207_49283 = G__49309;
continue;
}
} else {
}
}
break;
}

return m;
});
daiquiri.interpreter.element_attributes = (function daiquiri$interpreter$element_attributes(attrs){
var temp__5720__auto__ = cljs.core.clj__GT_js(daiquiri.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5720__auto__)){
var js_attrs = temp__5720__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(js_attrs.onChange)){
(js_attrs.onChange = rum.core.mark_sync_update(js_attrs.onChange));
} else {
}

if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
ret.push((daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1 ? daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : daiquiri.interpreter.interpret.call(null,x__$1)));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__49248 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49248,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49248,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49248,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__49253){
var vec__49254 = p__49253;
var seq__49255 = cljs.core.seq(vec__49254);
var first__49256 = cljs.core.first(seq__49255);
var seq__49255__$1 = cljs.core.next(seq__49255);
var _ = first__49256;
var first__49256__$1 = cljs.core.first(seq__49255__$1);
var seq__49255__$2 = cljs.core.next(seq__49255__$1);
var attrs = first__49256__$1;
var children = seq__49255__$2;
var vec__49257 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49257,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49257,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__49262){
var vec__49263 = p__49262;
var seq__49264 = cljs.core.seq(vec__49263);
var first__49265 = cljs.core.first(seq__49264);
var seq__49264__$1 = cljs.core.next(seq__49264);
var _ = first__49265;
var first__49265__$1 = cljs.core.first(seq__49264__$1);
var seq__49264__$2 = cljs.core.next(seq__49264__$1);
var component = first__49265__$1;
var first__49265__$2 = cljs.core.first(seq__49264__$2);
var seq__49264__$3 = cljs.core.next(seq__49264__$2);
var attrs = first__49265__$2;
var children = seq__49264__$3;
var vec__49266 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49266,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49266,(1),null);
return daiquiri.interpreter.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(x)){
return daiquiri.interpreter.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return daiquiri.interpreter.element(x);
} else {
return daiquiri.interpreter.interpret_seq(x);

}
}
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return daiquiri.interpreter.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return daiquiri.interpreter.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=daiquiri.interpreter.js.map
