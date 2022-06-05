goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48329){
var map__48330 = p__48329;
var map__48330__$1 = cljs.core.__destructure_map(map__48330);
var m = map__48330__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48330__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48330__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48331_48583 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48332_48584 = null;
var count__48333_48585 = (0);
var i__48334_48586 = (0);
while(true){
if((i__48334_48586 < count__48333_48585)){
var f_48587 = chunk__48332_48584.cljs$core$IIndexed$_nth$arity$2(null,i__48334_48586);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48587], 0));


var G__48588 = seq__48331_48583;
var G__48589 = chunk__48332_48584;
var G__48590 = count__48333_48585;
var G__48591 = (i__48334_48586 + (1));
seq__48331_48583 = G__48588;
chunk__48332_48584 = G__48589;
count__48333_48585 = G__48590;
i__48334_48586 = G__48591;
continue;
} else {
var temp__5720__auto___48592 = cljs.core.seq(seq__48331_48583);
if(temp__5720__auto___48592){
var seq__48331_48593__$1 = temp__5720__auto___48592;
if(cljs.core.chunked_seq_QMARK_(seq__48331_48593__$1)){
var c__5565__auto___48594 = cljs.core.chunk_first(seq__48331_48593__$1);
var G__48595 = cljs.core.chunk_rest(seq__48331_48593__$1);
var G__48596 = c__5565__auto___48594;
var G__48597 = cljs.core.count(c__5565__auto___48594);
var G__48598 = (0);
seq__48331_48583 = G__48595;
chunk__48332_48584 = G__48596;
count__48333_48585 = G__48597;
i__48334_48586 = G__48598;
continue;
} else {
var f_48599 = cljs.core.first(seq__48331_48593__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48599], 0));


var G__48600 = cljs.core.next(seq__48331_48593__$1);
var G__48601 = null;
var G__48602 = (0);
var G__48603 = (0);
seq__48331_48583 = G__48600;
chunk__48332_48584 = G__48601;
count__48333_48585 = G__48602;
i__48334_48586 = G__48603;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48604 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_48604], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_48604)))?cljs.core.second(arglists_48604):arglists_48604)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48340_48605 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48341_48606 = null;
var count__48342_48607 = (0);
var i__48343_48608 = (0);
while(true){
if((i__48343_48608 < count__48342_48607)){
var vec__48361_48609 = chunk__48341_48606.cljs$core$IIndexed$_nth$arity$2(null,i__48343_48608);
var name_48610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361_48609,(0),null);
var map__48364_48611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361_48609,(1),null);
var map__48364_48612__$1 = cljs.core.__destructure_map(map__48364_48611);
var doc_48613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48364_48612__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48364_48612__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48610], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48614], 0));

if(cljs.core.truth_(doc_48613)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48613], 0));
} else {
}


var G__48615 = seq__48340_48605;
var G__48616 = chunk__48341_48606;
var G__48617 = count__48342_48607;
var G__48618 = (i__48343_48608 + (1));
seq__48340_48605 = G__48615;
chunk__48341_48606 = G__48616;
count__48342_48607 = G__48617;
i__48343_48608 = G__48618;
continue;
} else {
var temp__5720__auto___48619 = cljs.core.seq(seq__48340_48605);
if(temp__5720__auto___48619){
var seq__48340_48620__$1 = temp__5720__auto___48619;
if(cljs.core.chunked_seq_QMARK_(seq__48340_48620__$1)){
var c__5565__auto___48621 = cljs.core.chunk_first(seq__48340_48620__$1);
var G__48623 = cljs.core.chunk_rest(seq__48340_48620__$1);
var G__48624 = c__5565__auto___48621;
var G__48625 = cljs.core.count(c__5565__auto___48621);
var G__48626 = (0);
seq__48340_48605 = G__48623;
chunk__48341_48606 = G__48624;
count__48342_48607 = G__48625;
i__48343_48608 = G__48626;
continue;
} else {
var vec__48367_48627 = cljs.core.first(seq__48340_48620__$1);
var name_48628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48367_48627,(0),null);
var map__48370_48629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48367_48627,(1),null);
var map__48370_48630__$1 = cljs.core.__destructure_map(map__48370_48629);
var doc_48631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48370_48630__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48370_48630__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48628], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48632], 0));

if(cljs.core.truth_(doc_48631)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48631], 0));
} else {
}


var G__48633 = cljs.core.next(seq__48340_48620__$1);
var G__48634 = null;
var G__48635 = (0);
var G__48636 = (0);
seq__48340_48605 = G__48633;
chunk__48341_48606 = G__48634;
count__48342_48607 = G__48635;
i__48343_48608 = G__48636;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__48371 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48372 = null;
var count__48373 = (0);
var i__48374 = (0);
while(true){
if((i__48374 < count__48373)){
var role = chunk__48372.cljs$core$IIndexed$_nth$arity$2(null,i__48374);
var temp__5720__auto___48637__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___48637__$1)){
var spec_48638 = temp__5720__auto___48637__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48638)], 0));
} else {
}


var G__48639 = seq__48371;
var G__48640 = chunk__48372;
var G__48641 = count__48373;
var G__48642 = (i__48374 + (1));
seq__48371 = G__48639;
chunk__48372 = G__48640;
count__48373 = G__48641;
i__48374 = G__48642;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__48371);
if(temp__5720__auto____$1){
var seq__48371__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__48371__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__48371__$1);
var G__48648 = cljs.core.chunk_rest(seq__48371__$1);
var G__48649 = c__5565__auto__;
var G__48650 = cljs.core.count(c__5565__auto__);
var G__48651 = (0);
seq__48371 = G__48648;
chunk__48372 = G__48649;
count__48373 = G__48650;
i__48374 = G__48651;
continue;
} else {
var role = cljs.core.first(seq__48371__$1);
var temp__5720__auto___48652__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___48652__$2)){
var spec_48653 = temp__5720__auto___48652__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48653)], 0));
} else {
}


var G__48654 = cljs.core.next(seq__48371__$1);
var G__48655 = null;
var G__48656 = (0);
var G__48657 = (0);
seq__48371 = G__48654;
chunk__48372 = G__48655;
count__48373 = G__48656;
i__48374 = G__48657;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__48659 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__48660 = cljs.core.ex_cause(t);
via = G__48659;
t = G__48660;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__48404 = datafied_throwable;
var map__48404__$1 = cljs.core.__destructure_map(map__48404);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48404__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48404__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48404__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__48405 = cljs.core.last(via);
var map__48405__$1 = cljs.core.__destructure_map(map__48405);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48405__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48405__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48405__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__48406 = data;
var map__48406__$1 = cljs.core.__destructure_map(map__48406);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48406__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48406__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48406__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__48407 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__48407__$1 = cljs.core.__destructure_map(map__48407);
var top_data = map__48407__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__48419 = phase;
var G__48419__$1 = (((G__48419 instanceof cljs.core.Keyword))?G__48419.fqn:null);
switch (G__48419__$1) {
case "read-source":
var map__48430 = data;
var map__48430__$1 = cljs.core.__destructure_map(map__48430);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48430__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48430__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__48431 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__48431__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48431,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48431);
var G__48431__$2 = (cljs.core.truth_((function (){var fexpr__48448 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48448.cljs$core$IFn$_invoke$arity$1 ? fexpr__48448.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48448.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48431__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48431__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48431__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48431__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__48457 = top_data;
var G__48457__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48457,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48457);
var G__48457__$2 = (cljs.core.truth_((function (){var fexpr__48462 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48462.cljs$core$IFn$_invoke$arity$1 ? fexpr__48462.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48462.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48457__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48457__$1);
var G__48457__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48457__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48457__$2);
var G__48457__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48457__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48457__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48457__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48457__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__48472 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48472,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48472,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48472,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48472,(3),null);
var G__48483 = top_data;
var G__48483__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48483,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__48483);
var G__48483__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__48483__$1);
var G__48483__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48483__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__48483__$2);
var G__48483__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48483__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48483__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48483__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48483__$4;
}

break;
case "execution":
var vec__48498 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48498,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48390_SHARP_){
var or__5043__auto__ = (p1__48390_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__48502 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48502.cljs$core$IFn$_invoke$arity$1 ? fexpr__48502.cljs$core$IFn$_invoke$arity$1(p1__48390_SHARP_) : fexpr__48502.call(null,p1__48390_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__48505 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__48505__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48505,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__48505);
var G__48505__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48505__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48505__$1);
var G__48505__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48505__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__48505__$2);
var G__48505__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48505__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__48505__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48505__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48505__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48419__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__48515){
var map__48516 = p__48515;
var map__48516__$1 = cljs.core.__destructure_map(map__48516);
var triage_data = map__48516__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48516__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48516__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48516__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48516__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48516__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48516__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48516__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48516__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__48524 = phase;
var G__48524__$1 = (((G__48524 instanceof cljs.core.Keyword))?G__48524.fqn:null);
switch (G__48524__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__48526 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__48527 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48528 = loc;
var G__48529 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48536_48678 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48537_48679 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48538_48680 = true;
var _STAR_print_fn_STAR__temp_val__48539_48681 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48538_48680);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48539_48681);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48510_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48510_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48537_48679);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48536_48678);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48526,G__48527,G__48528,G__48529) : format.call(null,G__48526,G__48527,G__48528,G__48529));

break;
case "macroexpansion":
var G__48545 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__48546 = cause_type;
var G__48547 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48548 = loc;
var G__48549 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48545,G__48546,G__48547,G__48548,G__48549) : format.call(null,G__48545,G__48546,G__48547,G__48548,G__48549));

break;
case "compile-syntax-check":
var G__48555 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__48556 = cause_type;
var G__48557 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48558 = loc;
var G__48559 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48555,G__48556,G__48557,G__48558,G__48559) : format.call(null,G__48555,G__48556,G__48557,G__48558,G__48559));

break;
case "compilation":
var G__48560 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__48561 = cause_type;
var G__48562 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48563 = loc;
var G__48564 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48560,G__48561,G__48562,G__48563,G__48564) : format.call(null,G__48560,G__48561,G__48562,G__48563,G__48564));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__48565 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__48566 = symbol;
var G__48567 = loc;
var G__48568 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48573_48696 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48574_48697 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48575_48698 = true;
var _STAR_print_fn_STAR__temp_val__48576_48699 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48575_48698);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48576_48699);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48511_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48511_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48574_48697);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48573_48696);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48565,G__48566,G__48567,G__48568) : format.call(null,G__48565,G__48566,G__48567,G__48568));
} else {
var G__48577 = "Execution error%s at %s(%s).\n%s\n";
var G__48578 = cause_type;
var G__48579 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48580 = loc;
var G__48581 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48577,G__48578,G__48579,G__48580,G__48581) : format.call(null,G__48577,G__48578,G__48579,G__48580,G__48581));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48524__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
