goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__5043__auto__ = elem.textContent;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__51818 = arguments.length;
switch (G__51818) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5718__auto__ = elem.classList;
if(cljs.core.truth_(temp__5718__auto__)){
var class_list = temp__5718__auto__;
return class_list.contains(c__$1);
} else {
var temp__5720__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5720__auto__)){
var class_name = temp__5720__auto__;
var temp__5720__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5720__auto____$1)){
var i = temp__5720__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__51834 = arguments.length;
switch (G__51834) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__51842 = arguments.length;
switch (G__51842) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__51840_SHARP_){
return (!((p1__51840_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52702 = arguments.length;
var i__5767__auto___52703 = (0);
while(true){
if((i__5767__auto___52703 < len__5766__auto___52702)){
args__5772__auto__.push((arguments[i__5767__auto___52703]));

var G__52704 = (i__5767__auto___52703 + (1));
i__5767__auto___52703 = G__52704;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__51873_52705 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__51874_52707 = null;
var count__51875_52708 = (0);
var i__51876_52709 = (0);
while(true){
if((i__51876_52709 < count__51875_52708)){
var vec__51889_52712 = chunk__51874_52707.cljs$core$IIndexed$_nth$arity$2(null,i__51876_52709);
var k_52714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51889_52712,(0),null);
var v_52715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51889_52712,(1),null);
style.setProperty(dommy.utils.as_str(k_52714),v_52715);


var G__52716 = seq__51873_52705;
var G__52717 = chunk__51874_52707;
var G__52718 = count__51875_52708;
var G__52719 = (i__51876_52709 + (1));
seq__51873_52705 = G__52716;
chunk__51874_52707 = G__52717;
count__51875_52708 = G__52718;
i__51876_52709 = G__52719;
continue;
} else {
var temp__5720__auto___52720 = cljs.core.seq(seq__51873_52705);
if(temp__5720__auto___52720){
var seq__51873_52721__$1 = temp__5720__auto___52720;
if(cljs.core.chunked_seq_QMARK_(seq__51873_52721__$1)){
var c__5565__auto___52722 = cljs.core.chunk_first(seq__51873_52721__$1);
var G__52723 = cljs.core.chunk_rest(seq__51873_52721__$1);
var G__52724 = c__5565__auto___52722;
var G__52725 = cljs.core.count(c__5565__auto___52722);
var G__52726 = (0);
seq__51873_52705 = G__52723;
chunk__51874_52707 = G__52724;
count__51875_52708 = G__52725;
i__51876_52709 = G__52726;
continue;
} else {
var vec__51894_52727 = cljs.core.first(seq__51873_52721__$1);
var k_52728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51894_52727,(0),null);
var v_52729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51894_52727,(1),null);
style.setProperty(dommy.utils.as_str(k_52728),v_52729);


var G__52731 = cljs.core.next(seq__51873_52721__$1);
var G__52732 = null;
var G__52733 = (0);
var G__52734 = (0);
seq__51873_52705 = G__52731;
chunk__51874_52707 = G__52732;
count__51875_52708 = G__52733;
i__51876_52709 = G__52734;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq51867){
var G__51868 = cljs.core.first(seq51867);
var seq51867__$1 = cljs.core.next(seq51867);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51868,seq51867__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52738 = arguments.length;
var i__5767__auto___52739 = (0);
while(true){
if((i__5767__auto___52739 < len__5766__auto___52738)){
args__5772__auto__.push((arguments[i__5767__auto___52739]));

var G__52740 = (i__5767__auto___52739 + (1));
i__5767__auto___52739 = G__52740;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__51911_52744 = cljs.core.seq(keywords);
var chunk__51912_52745 = null;
var count__51913_52746 = (0);
var i__51914_52747 = (0);
while(true){
if((i__51914_52747 < count__51913_52746)){
var kw_52749 = chunk__51912_52745.cljs$core$IIndexed$_nth$arity$2(null,i__51914_52747);
style.removeProperty(dommy.utils.as_str(kw_52749));


var G__52750 = seq__51911_52744;
var G__52751 = chunk__51912_52745;
var G__52752 = count__51913_52746;
var G__52753 = (i__51914_52747 + (1));
seq__51911_52744 = G__52750;
chunk__51912_52745 = G__52751;
count__51913_52746 = G__52752;
i__51914_52747 = G__52753;
continue;
} else {
var temp__5720__auto___52754 = cljs.core.seq(seq__51911_52744);
if(temp__5720__auto___52754){
var seq__51911_52755__$1 = temp__5720__auto___52754;
if(cljs.core.chunked_seq_QMARK_(seq__51911_52755__$1)){
var c__5565__auto___52756 = cljs.core.chunk_first(seq__51911_52755__$1);
var G__52757 = cljs.core.chunk_rest(seq__51911_52755__$1);
var G__52758 = c__5565__auto___52756;
var G__52759 = cljs.core.count(c__5565__auto___52756);
var G__52760 = (0);
seq__51911_52744 = G__52757;
chunk__51912_52745 = G__52758;
count__51913_52746 = G__52759;
i__51914_52747 = G__52760;
continue;
} else {
var kw_52761 = cljs.core.first(seq__51911_52755__$1);
style.removeProperty(dommy.utils.as_str(kw_52761));


var G__52762 = cljs.core.next(seq__51911_52755__$1);
var G__52763 = null;
var G__52764 = (0);
var G__52765 = (0);
seq__51911_52744 = G__52762;
chunk__51912_52745 = G__52763;
count__51913_52746 = G__52764;
i__51914_52747 = G__52765;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq51902){
var G__51903 = cljs.core.first(seq51902);
var seq51902__$1 = cljs.core.next(seq51902);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51903,seq51902__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52766 = arguments.length;
var i__5767__auto___52767 = (0);
while(true){
if((i__5767__auto___52767 < len__5766__auto___52766)){
args__5772__auto__.push((arguments[i__5767__auto___52767]));

var G__52769 = (i__5767__auto___52767 + (1));
i__5767__auto___52767 = G__52769;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__51920_52772 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__51921_52773 = null;
var count__51922_52774 = (0);
var i__51923_52775 = (0);
while(true){
if((i__51923_52775 < count__51922_52774)){
var vec__51932_52778 = chunk__51921_52773.cljs$core$IIndexed$_nth$arity$2(null,i__51923_52775);
var k_52779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51932_52778,(0),null);
var v_52780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51932_52778,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_52779,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_52780),"px"].join('')], 0));


var G__52783 = seq__51920_52772;
var G__52784 = chunk__51921_52773;
var G__52785 = count__51922_52774;
var G__52786 = (i__51923_52775 + (1));
seq__51920_52772 = G__52783;
chunk__51921_52773 = G__52784;
count__51922_52774 = G__52785;
i__51923_52775 = G__52786;
continue;
} else {
var temp__5720__auto___52788 = cljs.core.seq(seq__51920_52772);
if(temp__5720__auto___52788){
var seq__51920_52789__$1 = temp__5720__auto___52788;
if(cljs.core.chunked_seq_QMARK_(seq__51920_52789__$1)){
var c__5565__auto___52790 = cljs.core.chunk_first(seq__51920_52789__$1);
var G__52792 = cljs.core.chunk_rest(seq__51920_52789__$1);
var G__52793 = c__5565__auto___52790;
var G__52794 = cljs.core.count(c__5565__auto___52790);
var G__52795 = (0);
seq__51920_52772 = G__52792;
chunk__51921_52773 = G__52793;
count__51922_52774 = G__52794;
i__51923_52775 = G__52795;
continue;
} else {
var vec__51936_52796 = cljs.core.first(seq__51920_52789__$1);
var k_52797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51936_52796,(0),null);
var v_52798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51936_52796,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_52797,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_52798),"px"].join('')], 0));


var G__52800 = cljs.core.next(seq__51920_52789__$1);
var G__52801 = null;
var G__52802 = (0);
var G__52803 = (0);
seq__51920_52772 = G__52800;
chunk__51921_52773 = G__52801;
count__51922_52774 = G__52802;
i__51923_52775 = G__52803;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq51917){
var G__51918 = cljs.core.first(seq51917);
var seq51917__$1 = cljs.core.next(seq51917);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51918,seq51917__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__51949 = arguments.length;
switch (G__51949) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52805 = arguments.length;
var i__5767__auto___52806 = (0);
while(true){
if((i__5767__auto___52806 < len__5766__auto___52805)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52806]));

var G__52807 = (i__5767__auto___52806 + (1));
i__5767__auto___52806 = G__52807;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__51951 = elem;
(G__51951[k__$1] = v);

return G__51951;
} else {
var G__51952 = elem;
G__51952.setAttribute(k__$1,v);

return G__51952;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__51956_52809 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__51957_52810 = null;
var count__51958_52811 = (0);
var i__51959_52812 = (0);
while(true){
if((i__51959_52812 < count__51958_52811)){
var vec__51966_52815 = chunk__51957_52810.cljs$core$IIndexed$_nth$arity$2(null,i__51959_52812);
var k_52816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51966_52815,(0),null);
var v_52817__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51966_52815,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_52816__$1,v_52817__$1);


var G__52822 = seq__51956_52809;
var G__52823 = chunk__51957_52810;
var G__52824 = count__51958_52811;
var G__52825 = (i__51959_52812 + (1));
seq__51956_52809 = G__52822;
chunk__51957_52810 = G__52823;
count__51958_52811 = G__52824;
i__51959_52812 = G__52825;
continue;
} else {
var temp__5720__auto___52826 = cljs.core.seq(seq__51956_52809);
if(temp__5720__auto___52826){
var seq__51956_52827__$1 = temp__5720__auto___52826;
if(cljs.core.chunked_seq_QMARK_(seq__51956_52827__$1)){
var c__5565__auto___52828 = cljs.core.chunk_first(seq__51956_52827__$1);
var G__52829 = cljs.core.chunk_rest(seq__51956_52827__$1);
var G__52830 = c__5565__auto___52828;
var G__52831 = cljs.core.count(c__5565__auto___52828);
var G__52832 = (0);
seq__51956_52809 = G__52829;
chunk__51957_52810 = G__52830;
count__51958_52811 = G__52831;
i__51959_52812 = G__52832;
continue;
} else {
var vec__51973_52833 = cljs.core.first(seq__51956_52827__$1);
var k_52834__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51973_52833,(0),null);
var v_52835__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51973_52833,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_52834__$1,v_52835__$1);


var G__52839 = cljs.core.next(seq__51956_52827__$1);
var G__52840 = null;
var G__52841 = (0);
var G__52842 = (0);
seq__51956_52809 = G__52839;
chunk__51957_52810 = G__52840;
count__51958_52811 = G__52841;
i__51959_52812 = G__52842;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq51945){
var G__51946 = cljs.core.first(seq51945);
var seq51945__$1 = cljs.core.next(seq51945);
var G__51947 = cljs.core.first(seq51945__$1);
var seq51945__$2 = cljs.core.next(seq51945__$1);
var G__51948 = cljs.core.first(seq51945__$2);
var seq51945__$3 = cljs.core.next(seq51945__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51946,G__51947,G__51948,seq51945__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__51981 = arguments.length;
switch (G__51981) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52844 = arguments.length;
var i__5767__auto___52845 = (0);
while(true){
if((i__5767__auto___52845 < len__5766__auto___52844)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52845]));

var G__52846 = (i__5767__auto___52845 + (1));
i__5767__auto___52845 = G__52846;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_52848__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__51987 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__51987.cljs$core$IFn$_invoke$arity$1 ? fexpr__51987.cljs$core$IFn$_invoke$arity$1(k_52848__$1) : fexpr__51987.call(null,k_52848__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_52848__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__52000_52849 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__52001_52850 = null;
var count__52002_52851 = (0);
var i__52003_52852 = (0);
while(true){
if((i__52003_52852 < count__52002_52851)){
var k_52853__$1 = chunk__52001_52850.cljs$core$IIndexed$_nth$arity$2(null,i__52003_52852);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_52853__$1);


var G__52854 = seq__52000_52849;
var G__52855 = chunk__52001_52850;
var G__52856 = count__52002_52851;
var G__52857 = (i__52003_52852 + (1));
seq__52000_52849 = G__52854;
chunk__52001_52850 = G__52855;
count__52002_52851 = G__52856;
i__52003_52852 = G__52857;
continue;
} else {
var temp__5720__auto___52860 = cljs.core.seq(seq__52000_52849);
if(temp__5720__auto___52860){
var seq__52000_52861__$1 = temp__5720__auto___52860;
if(cljs.core.chunked_seq_QMARK_(seq__52000_52861__$1)){
var c__5565__auto___52864 = cljs.core.chunk_first(seq__52000_52861__$1);
var G__52865 = cljs.core.chunk_rest(seq__52000_52861__$1);
var G__52866 = c__5565__auto___52864;
var G__52867 = cljs.core.count(c__5565__auto___52864);
var G__52868 = (0);
seq__52000_52849 = G__52865;
chunk__52001_52850 = G__52866;
count__52002_52851 = G__52867;
i__52003_52852 = G__52868;
continue;
} else {
var k_52870__$1 = cljs.core.first(seq__52000_52861__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_52870__$1);


var G__52871 = cljs.core.next(seq__52000_52861__$1);
var G__52872 = null;
var G__52873 = (0);
var G__52874 = (0);
seq__52000_52849 = G__52871;
chunk__52001_52850 = G__52872;
count__52002_52851 = G__52873;
i__52003_52852 = G__52874;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq51978){
var G__51979 = cljs.core.first(seq51978);
var seq51978__$1 = cljs.core.next(seq51978);
var G__51980 = cljs.core.first(seq51978__$1);
var seq51978__$2 = cljs.core.next(seq51978__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51979,G__51980,seq51978__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__52042 = arguments.length;
switch (G__52042) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__52058 = arguments.length;
switch (G__52058) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52882 = arguments.length;
var i__5767__auto___52883 = (0);
while(true){
if((i__5767__auto___52883 < len__5766__auto___52882)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52883]));

var G__52884 = (i__5767__auto___52883 + (1));
i__5767__auto___52883 = G__52884;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5718__auto___52886 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___52886)){
var class_list_52887 = temp__5718__auto___52886;
var seq__52060_52888 = cljs.core.seq(classes__$1);
var chunk__52061_52889 = null;
var count__52062_52890 = (0);
var i__52063_52891 = (0);
while(true){
if((i__52063_52891 < count__52062_52890)){
var c_52893 = chunk__52061_52889.cljs$core$IIndexed$_nth$arity$2(null,i__52063_52891);
class_list_52887.add(c_52893);


var G__52894 = seq__52060_52888;
var G__52895 = chunk__52061_52889;
var G__52896 = count__52062_52890;
var G__52897 = (i__52063_52891 + (1));
seq__52060_52888 = G__52894;
chunk__52061_52889 = G__52895;
count__52062_52890 = G__52896;
i__52063_52891 = G__52897;
continue;
} else {
var temp__5720__auto___52898 = cljs.core.seq(seq__52060_52888);
if(temp__5720__auto___52898){
var seq__52060_52899__$1 = temp__5720__auto___52898;
if(cljs.core.chunked_seq_QMARK_(seq__52060_52899__$1)){
var c__5565__auto___52900 = cljs.core.chunk_first(seq__52060_52899__$1);
var G__52901 = cljs.core.chunk_rest(seq__52060_52899__$1);
var G__52902 = c__5565__auto___52900;
var G__52903 = cljs.core.count(c__5565__auto___52900);
var G__52904 = (0);
seq__52060_52888 = G__52901;
chunk__52061_52889 = G__52902;
count__52062_52890 = G__52903;
i__52063_52891 = G__52904;
continue;
} else {
var c_52905 = cljs.core.first(seq__52060_52899__$1);
class_list_52887.add(c_52905);


var G__52907 = cljs.core.next(seq__52060_52899__$1);
var G__52908 = null;
var G__52909 = (0);
var G__52910 = (0);
seq__52060_52888 = G__52907;
chunk__52061_52889 = G__52908;
count__52062_52890 = G__52909;
i__52063_52891 = G__52910;
continue;
}
} else {
}
}
break;
}
} else {
var seq__52096_52911 = cljs.core.seq(classes__$1);
var chunk__52097_52912 = null;
var count__52098_52913 = (0);
var i__52099_52914 = (0);
while(true){
if((i__52099_52914 < count__52098_52913)){
var c_52915 = chunk__52097_52912.cljs$core$IIndexed$_nth$arity$2(null,i__52099_52914);
var class_name_52916 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_52916,c_52915))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_52916 === ""))?c_52915:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_52916)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_52915)].join('')));
}


var G__52917 = seq__52096_52911;
var G__52918 = chunk__52097_52912;
var G__52919 = count__52098_52913;
var G__52920 = (i__52099_52914 + (1));
seq__52096_52911 = G__52917;
chunk__52097_52912 = G__52918;
count__52098_52913 = G__52919;
i__52099_52914 = G__52920;
continue;
} else {
var temp__5720__auto___52922 = cljs.core.seq(seq__52096_52911);
if(temp__5720__auto___52922){
var seq__52096_52923__$1 = temp__5720__auto___52922;
if(cljs.core.chunked_seq_QMARK_(seq__52096_52923__$1)){
var c__5565__auto___52924 = cljs.core.chunk_first(seq__52096_52923__$1);
var G__52925 = cljs.core.chunk_rest(seq__52096_52923__$1);
var G__52926 = c__5565__auto___52924;
var G__52927 = cljs.core.count(c__5565__auto___52924);
var G__52928 = (0);
seq__52096_52911 = G__52925;
chunk__52097_52912 = G__52926;
count__52098_52913 = G__52927;
i__52099_52914 = G__52928;
continue;
} else {
var c_52929 = cljs.core.first(seq__52096_52923__$1);
var class_name_52930 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_52930,c_52929))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_52930 === ""))?c_52929:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_52930)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_52929)].join('')));
}


var G__52931 = cljs.core.next(seq__52096_52923__$1);
var G__52932 = null;
var G__52933 = (0);
var G__52934 = (0);
seq__52096_52911 = G__52931;
chunk__52097_52912 = G__52932;
count__52098_52913 = G__52933;
i__52099_52914 = G__52934;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__52107_52935 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__52109_52936 = null;
var count__52110_52937 = (0);
var i__52111_52938 = (0);
while(true){
if((i__52111_52938 < count__52110_52937)){
var c_52939 = chunk__52109_52936.cljs$core$IIndexed$_nth$arity$2(null,i__52111_52938);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_52939);


var G__52940 = seq__52107_52935;
var G__52941 = chunk__52109_52936;
var G__52942 = count__52110_52937;
var G__52943 = (i__52111_52938 + (1));
seq__52107_52935 = G__52940;
chunk__52109_52936 = G__52941;
count__52110_52937 = G__52942;
i__52111_52938 = G__52943;
continue;
} else {
var temp__5720__auto___52945 = cljs.core.seq(seq__52107_52935);
if(temp__5720__auto___52945){
var seq__52107_52947__$1 = temp__5720__auto___52945;
if(cljs.core.chunked_seq_QMARK_(seq__52107_52947__$1)){
var c__5565__auto___52949 = cljs.core.chunk_first(seq__52107_52947__$1);
var G__52950 = cljs.core.chunk_rest(seq__52107_52947__$1);
var G__52951 = c__5565__auto___52949;
var G__52952 = cljs.core.count(c__5565__auto___52949);
var G__52953 = (0);
seq__52107_52935 = G__52950;
chunk__52109_52936 = G__52951;
count__52110_52937 = G__52952;
i__52111_52938 = G__52953;
continue;
} else {
var c_52954 = cljs.core.first(seq__52107_52947__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_52954);


var G__52955 = cljs.core.next(seq__52107_52947__$1);
var G__52956 = null;
var G__52957 = (0);
var G__52958 = (0);
seq__52107_52935 = G__52955;
chunk__52109_52936 = G__52956;
count__52110_52937 = G__52957;
i__52111_52938 = G__52958;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq52055){
var G__52056 = cljs.core.first(seq52055);
var seq52055__$1 = cljs.core.next(seq52055);
var G__52057 = cljs.core.first(seq52055__$1);
var seq52055__$2 = cljs.core.next(seq52055__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52056,G__52057,seq52055__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__52129 = arguments.length;
switch (G__52129) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52960 = arguments.length;
var i__5767__auto___52962 = (0);
while(true){
if((i__5767__auto___52962 < len__5766__auto___52960)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52962]));

var G__52963 = (i__5767__auto___52962 + (1));
i__5767__auto___52962 = G__52963;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5718__auto___52964 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___52964)){
var class_list_52965 = temp__5718__auto___52964;
class_list_52965.remove(c__$1);
} else {
var class_name_52966 = dommy.core.class$(elem);
var new_class_name_52967 = dommy.utils.remove_class_str(class_name_52966,c__$1);
if((class_name_52966 === new_class_name_52967)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_52967);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__52140 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__52141 = null;
var count__52142 = (0);
var i__52143 = (0);
while(true){
if((i__52143 < count__52142)){
var c = chunk__52141.cljs$core$IIndexed$_nth$arity$2(null,i__52143);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__52972 = seq__52140;
var G__52973 = chunk__52141;
var G__52974 = count__52142;
var G__52975 = (i__52143 + (1));
seq__52140 = G__52972;
chunk__52141 = G__52973;
count__52142 = G__52974;
i__52143 = G__52975;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52140);
if(temp__5720__auto__){
var seq__52140__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52140__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__52140__$1);
var G__52978 = cljs.core.chunk_rest(seq__52140__$1);
var G__52979 = c__5565__auto__;
var G__52980 = cljs.core.count(c__5565__auto__);
var G__52981 = (0);
seq__52140 = G__52978;
chunk__52141 = G__52979;
count__52142 = G__52980;
i__52143 = G__52981;
continue;
} else {
var c = cljs.core.first(seq__52140__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__52982 = cljs.core.next(seq__52140__$1);
var G__52983 = null;
var G__52984 = (0);
var G__52985 = (0);
seq__52140 = G__52982;
chunk__52141 = G__52983;
count__52142 = G__52984;
i__52143 = G__52985;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq52126){
var G__52127 = cljs.core.first(seq52126);
var seq52126__$1 = cljs.core.next(seq52126);
var G__52128 = cljs.core.first(seq52126__$1);
var seq52126__$2 = cljs.core.next(seq52126__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52127,G__52128,seq52126__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__52159 = arguments.length;
switch (G__52159) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5718__auto___52989 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___52989)){
var class_list_52993 = temp__5718__auto___52989;
class_list_52993.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__52191 = arguments.length;
switch (G__52191) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__52198 = arguments.length;
switch (G__52198) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__52208 = arguments.length;
switch (G__52208) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53007 = arguments.length;
var i__5767__auto___53008 = (0);
while(true){
if((i__5767__auto___53008 < len__5766__auto___53007)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53008]));

var G__53010 = (i__5767__auto___53008 + (1));
i__5767__auto___53008 = G__53010;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__52213 = parent;
G__52213.appendChild(child);

return G__52213;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__52214_53012 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__52215_53013 = null;
var count__52216_53014 = (0);
var i__52217_53015 = (0);
while(true){
if((i__52217_53015 < count__52216_53014)){
var c_53017 = chunk__52215_53013.cljs$core$IIndexed$_nth$arity$2(null,i__52217_53015);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_53017);


var G__53018 = seq__52214_53012;
var G__53019 = chunk__52215_53013;
var G__53020 = count__52216_53014;
var G__53021 = (i__52217_53015 + (1));
seq__52214_53012 = G__53018;
chunk__52215_53013 = G__53019;
count__52216_53014 = G__53020;
i__52217_53015 = G__53021;
continue;
} else {
var temp__5720__auto___53022 = cljs.core.seq(seq__52214_53012);
if(temp__5720__auto___53022){
var seq__52214_53023__$1 = temp__5720__auto___53022;
if(cljs.core.chunked_seq_QMARK_(seq__52214_53023__$1)){
var c__5565__auto___53024 = cljs.core.chunk_first(seq__52214_53023__$1);
var G__53025 = cljs.core.chunk_rest(seq__52214_53023__$1);
var G__53026 = c__5565__auto___53024;
var G__53027 = cljs.core.count(c__5565__auto___53024);
var G__53028 = (0);
seq__52214_53012 = G__53025;
chunk__52215_53013 = G__53026;
count__52216_53014 = G__53027;
i__52217_53015 = G__53028;
continue;
} else {
var c_53030 = cljs.core.first(seq__52214_53023__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_53030);


var G__53033 = cljs.core.next(seq__52214_53023__$1);
var G__53034 = null;
var G__53035 = (0);
var G__53036 = (0);
seq__52214_53012 = G__53033;
chunk__52215_53013 = G__53034;
count__52216_53014 = G__53035;
i__52217_53015 = G__53036;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq52205){
var G__52206 = cljs.core.first(seq52205);
var seq52205__$1 = cljs.core.next(seq52205);
var G__52207 = cljs.core.first(seq52205__$1);
var seq52205__$2 = cljs.core.next(seq52205__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52206,G__52207,seq52205__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__52222 = arguments.length;
switch (G__52222) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53045 = arguments.length;
var i__5767__auto___53046 = (0);
while(true){
if((i__5767__auto___53046 < len__5766__auto___53045)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53046]));

var G__53048 = (i__5767__auto___53046 + (1));
i__5767__auto___53046 = G__53048;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__52224 = parent;
G__52224.insertBefore(child,parent.firstChild);

return G__52224;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__52225_53049 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__52226_53050 = null;
var count__52227_53051 = (0);
var i__52228_53052 = (0);
while(true){
if((i__52228_53052 < count__52227_53051)){
var c_53053 = chunk__52226_53050.cljs$core$IIndexed$_nth$arity$2(null,i__52228_53052);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_53053);


var G__53056 = seq__52225_53049;
var G__53057 = chunk__52226_53050;
var G__53058 = count__52227_53051;
var G__53059 = (i__52228_53052 + (1));
seq__52225_53049 = G__53056;
chunk__52226_53050 = G__53057;
count__52227_53051 = G__53058;
i__52228_53052 = G__53059;
continue;
} else {
var temp__5720__auto___53060 = cljs.core.seq(seq__52225_53049);
if(temp__5720__auto___53060){
var seq__52225_53062__$1 = temp__5720__auto___53060;
if(cljs.core.chunked_seq_QMARK_(seq__52225_53062__$1)){
var c__5565__auto___53064 = cljs.core.chunk_first(seq__52225_53062__$1);
var G__53066 = cljs.core.chunk_rest(seq__52225_53062__$1);
var G__53067 = c__5565__auto___53064;
var G__53068 = cljs.core.count(c__5565__auto___53064);
var G__53069 = (0);
seq__52225_53049 = G__53066;
chunk__52226_53050 = G__53067;
count__52227_53051 = G__53068;
i__52228_53052 = G__53069;
continue;
} else {
var c_53070 = cljs.core.first(seq__52225_53062__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_53070);


var G__53071 = cljs.core.next(seq__52225_53062__$1);
var G__53072 = null;
var G__53073 = (0);
var G__53074 = (0);
seq__52225_53049 = G__53071;
chunk__52226_53050 = G__53072;
count__52227_53051 = G__53073;
i__52228_53052 = G__53074;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq52219){
var G__52220 = cljs.core.first(seq52219);
var seq52219__$1 = cljs.core.next(seq52219);
var G__52221 = cljs.core.first(seq52219__$1);
var seq52219__$2 = cljs.core.next(seq52219__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52220,G__52221,seq52219__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5718__auto___53076 = other.nextSibling;
if(cljs.core.truth_(temp__5718__auto___53076)){
var next_53077 = temp__5718__auto___53076;
dommy.core.insert_before_BANG_(elem,next_53077);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__52247 = arguments.length;
switch (G__52247) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__52261 = p;
G__52261.removeChild(elem);

return G__52261;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52270){
var vec__52271 = p__52270;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52271,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52271,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__5043__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = related_target;
if(cljs.core.truth_(and__5041__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__5041__auto__ = selected_target;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__5041__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__5043__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53089 = arguments.length;
var i__5767__auto___53091 = (0);
while(true){
if((i__5767__auto___53091 < len__5766__auto___53089)){
args__5772__auto__.push((arguments[i__5767__auto___53091]));

var G__53092 = (i__5767__auto___53091 + (1));
i__5767__auto___53091 = G__53092;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq52281){
var G__52282 = cljs.core.first(seq52281);
var seq52281__$1 = cljs.core.next(seq52281);
var G__52283 = cljs.core.first(seq52281__$1);
var seq52281__$2 = cljs.core.next(seq52281__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52282,G__52283,seq52281__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53096 = arguments.length;
var i__5767__auto___53097 = (0);
while(true){
if((i__5767__auto___53097 < len__5766__auto___53096)){
args__5772__auto__.push((arguments[i__5767__auto___53097]));

var G__53098 = (i__5767__auto___53097 + (1));
i__5767__auto___53097 = G__53098;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__52300_53100 = dommy.core.elem_and_selector(elem_sel);
var elem_53101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52300_53100,(0),null);
var selector_53102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52300_53100,(1),null);
var seq__52303_53104 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__52310_53105 = null;
var count__52311_53106 = (0);
var i__52312_53107 = (0);
while(true){
if((i__52312_53107 < count__52311_53106)){
var vec__52389_53108 = chunk__52310_53105.cljs$core$IIndexed$_nth$arity$2(null,i__52312_53107);
var orig_type_53109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389_53108,(0),null);
var f_53110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389_53108,(1),null);
var seq__52313_53111 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53109,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53109,cljs.core.identity])));
var chunk__52315_53112 = null;
var count__52316_53113 = (0);
var i__52317_53114 = (0);
while(true){
if((i__52317_53114 < count__52316_53113)){
var vec__52414_53117 = chunk__52315_53112.cljs$core$IIndexed$_nth$arity$2(null,i__52317_53114);
var actual_type_53118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52414_53117,(0),null);
var factory_53119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52414_53117,(1),null);
var canonical_f_53120 = (function (){var G__52418 = (factory_53119.cljs$core$IFn$_invoke$arity$1 ? factory_53119.cljs$core$IFn$_invoke$arity$1(f_53110) : factory_53119.call(null,f_53110));
var fexpr__52417 = (cljs.core.truth_(selector_53102)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53101,selector_53102):cljs.core.identity);
return (fexpr__52417.cljs$core$IFn$_invoke$arity$1 ? fexpr__52417.cljs$core$IFn$_invoke$arity$1(G__52418) : fexpr__52417.call(null,G__52418));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53101,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53102,actual_type_53118,f_53110], null),canonical_f_53120], 0));

if(cljs.core.truth_(elem_53101.addEventListener)){
elem_53101.addEventListener(cljs.core.name(actual_type_53118),canonical_f_53120);
} else {
elem_53101.attachEvent(cljs.core.name(actual_type_53118),canonical_f_53120);
}


var G__53125 = seq__52313_53111;
var G__53126 = chunk__52315_53112;
var G__53127 = count__52316_53113;
var G__53128 = (i__52317_53114 + (1));
seq__52313_53111 = G__53125;
chunk__52315_53112 = G__53126;
count__52316_53113 = G__53127;
i__52317_53114 = G__53128;
continue;
} else {
var temp__5720__auto___53129 = cljs.core.seq(seq__52313_53111);
if(temp__5720__auto___53129){
var seq__52313_53130__$1 = temp__5720__auto___53129;
if(cljs.core.chunked_seq_QMARK_(seq__52313_53130__$1)){
var c__5565__auto___53131 = cljs.core.chunk_first(seq__52313_53130__$1);
var G__53133 = cljs.core.chunk_rest(seq__52313_53130__$1);
var G__53134 = c__5565__auto___53131;
var G__53135 = cljs.core.count(c__5565__auto___53131);
var G__53136 = (0);
seq__52313_53111 = G__53133;
chunk__52315_53112 = G__53134;
count__52316_53113 = G__53135;
i__52317_53114 = G__53136;
continue;
} else {
var vec__52424_53137 = cljs.core.first(seq__52313_53130__$1);
var actual_type_53138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52424_53137,(0),null);
var factory_53139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52424_53137,(1),null);
var canonical_f_53140 = (function (){var G__52428 = (factory_53139.cljs$core$IFn$_invoke$arity$1 ? factory_53139.cljs$core$IFn$_invoke$arity$1(f_53110) : factory_53139.call(null,f_53110));
var fexpr__52427 = (cljs.core.truth_(selector_53102)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53101,selector_53102):cljs.core.identity);
return (fexpr__52427.cljs$core$IFn$_invoke$arity$1 ? fexpr__52427.cljs$core$IFn$_invoke$arity$1(G__52428) : fexpr__52427.call(null,G__52428));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53101,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53102,actual_type_53138,f_53110], null),canonical_f_53140], 0));

if(cljs.core.truth_(elem_53101.addEventListener)){
elem_53101.addEventListener(cljs.core.name(actual_type_53138),canonical_f_53140);
} else {
elem_53101.attachEvent(cljs.core.name(actual_type_53138),canonical_f_53140);
}


var G__53142 = cljs.core.next(seq__52313_53130__$1);
var G__53143 = null;
var G__53144 = (0);
var G__53145 = (0);
seq__52313_53111 = G__53142;
chunk__52315_53112 = G__53143;
count__52316_53113 = G__53144;
i__52317_53114 = G__53145;
continue;
}
} else {
}
}
break;
}

var G__53150 = seq__52303_53104;
var G__53151 = chunk__52310_53105;
var G__53152 = count__52311_53106;
var G__53153 = (i__52312_53107 + (1));
seq__52303_53104 = G__53150;
chunk__52310_53105 = G__53151;
count__52311_53106 = G__53152;
i__52312_53107 = G__53153;
continue;
} else {
var temp__5720__auto___53154 = cljs.core.seq(seq__52303_53104);
if(temp__5720__auto___53154){
var seq__52303_53155__$1 = temp__5720__auto___53154;
if(cljs.core.chunked_seq_QMARK_(seq__52303_53155__$1)){
var c__5565__auto___53156 = cljs.core.chunk_first(seq__52303_53155__$1);
var G__53158 = cljs.core.chunk_rest(seq__52303_53155__$1);
var G__53159 = c__5565__auto___53156;
var G__53160 = cljs.core.count(c__5565__auto___53156);
var G__53161 = (0);
seq__52303_53104 = G__53158;
chunk__52310_53105 = G__53159;
count__52311_53106 = G__53160;
i__52312_53107 = G__53161;
continue;
} else {
var vec__52430_53163 = cljs.core.first(seq__52303_53155__$1);
var orig_type_53164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52430_53163,(0),null);
var f_53165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52430_53163,(1),null);
var seq__52304_53167 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53164,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53164,cljs.core.identity])));
var chunk__52306_53168 = null;
var count__52307_53169 = (0);
var i__52308_53170 = (0);
while(true){
if((i__52308_53170 < count__52307_53169)){
var vec__52452_53173 = chunk__52306_53168.cljs$core$IIndexed$_nth$arity$2(null,i__52308_53170);
var actual_type_53174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52452_53173,(0),null);
var factory_53175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52452_53173,(1),null);
var canonical_f_53176 = (function (){var G__52457 = (factory_53175.cljs$core$IFn$_invoke$arity$1 ? factory_53175.cljs$core$IFn$_invoke$arity$1(f_53165) : factory_53175.call(null,f_53165));
var fexpr__52456 = (cljs.core.truth_(selector_53102)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53101,selector_53102):cljs.core.identity);
return (fexpr__52456.cljs$core$IFn$_invoke$arity$1 ? fexpr__52456.cljs$core$IFn$_invoke$arity$1(G__52457) : fexpr__52456.call(null,G__52457));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53101,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53102,actual_type_53174,f_53165], null),canonical_f_53176], 0));

if(cljs.core.truth_(elem_53101.addEventListener)){
elem_53101.addEventListener(cljs.core.name(actual_type_53174),canonical_f_53176);
} else {
elem_53101.attachEvent(cljs.core.name(actual_type_53174),canonical_f_53176);
}


var G__53179 = seq__52304_53167;
var G__53180 = chunk__52306_53168;
var G__53181 = count__52307_53169;
var G__53182 = (i__52308_53170 + (1));
seq__52304_53167 = G__53179;
chunk__52306_53168 = G__53180;
count__52307_53169 = G__53181;
i__52308_53170 = G__53182;
continue;
} else {
var temp__5720__auto___53183__$1 = cljs.core.seq(seq__52304_53167);
if(temp__5720__auto___53183__$1){
var seq__52304_53184__$1 = temp__5720__auto___53183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52304_53184__$1)){
var c__5565__auto___53185 = cljs.core.chunk_first(seq__52304_53184__$1);
var G__53186 = cljs.core.chunk_rest(seq__52304_53184__$1);
var G__53187 = c__5565__auto___53185;
var G__53188 = cljs.core.count(c__5565__auto___53185);
var G__53189 = (0);
seq__52304_53167 = G__53186;
chunk__52306_53168 = G__53187;
count__52307_53169 = G__53188;
i__52308_53170 = G__53189;
continue;
} else {
var vec__52459_53190 = cljs.core.first(seq__52304_53184__$1);
var actual_type_53191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52459_53190,(0),null);
var factory_53192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52459_53190,(1),null);
var canonical_f_53193 = (function (){var G__52467 = (factory_53192.cljs$core$IFn$_invoke$arity$1 ? factory_53192.cljs$core$IFn$_invoke$arity$1(f_53165) : factory_53192.call(null,f_53165));
var fexpr__52466 = (cljs.core.truth_(selector_53102)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_53101,selector_53102):cljs.core.identity);
return (fexpr__52466.cljs$core$IFn$_invoke$arity$1 ? fexpr__52466.cljs$core$IFn$_invoke$arity$1(G__52467) : fexpr__52466.call(null,G__52467));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53101,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53102,actual_type_53191,f_53165], null),canonical_f_53193], 0));

if(cljs.core.truth_(elem_53101.addEventListener)){
elem_53101.addEventListener(cljs.core.name(actual_type_53191),canonical_f_53193);
} else {
elem_53101.attachEvent(cljs.core.name(actual_type_53191),canonical_f_53193);
}


var G__53196 = cljs.core.next(seq__52304_53184__$1);
var G__53197 = null;
var G__53198 = (0);
var G__53199 = (0);
seq__52304_53167 = G__53196;
chunk__52306_53168 = G__53197;
count__52307_53169 = G__53198;
i__52308_53170 = G__53199;
continue;
}
} else {
}
}
break;
}

var G__53200 = cljs.core.next(seq__52303_53155__$1);
var G__53201 = null;
var G__53202 = (0);
var G__53203 = (0);
seq__52303_53104 = G__53200;
chunk__52310_53105 = G__53201;
count__52311_53106 = G__53202;
i__52312_53107 = G__53203;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq52296){
var G__52297 = cljs.core.first(seq52296);
var seq52296__$1 = cljs.core.next(seq52296);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52297,seq52296__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53207 = arguments.length;
var i__5767__auto___53209 = (0);
while(true){
if((i__5767__auto___53209 < len__5766__auto___53207)){
args__5772__auto__.push((arguments[i__5767__auto___53209]));

var G__53210 = (i__5767__auto___53209 + (1));
i__5767__auto___53209 = G__53210;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__52483_53213 = dommy.core.elem_and_selector(elem_sel);
var elem_53214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52483_53213,(0),null);
var selector_53215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52483_53213,(1),null);
var seq__52486_53216 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__52493_53218 = null;
var count__52494_53219 = (0);
var i__52495_53220 = (0);
while(true){
if((i__52495_53220 < count__52494_53219)){
var vec__52549_53221 = chunk__52493_53218.cljs$core$IIndexed$_nth$arity$2(null,i__52495_53220);
var orig_type_53222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52549_53221,(0),null);
var f_53223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52549_53221,(1),null);
var seq__52496_53224 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53222,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53222,cljs.core.identity])));
var chunk__52498_53225 = null;
var count__52499_53226 = (0);
var i__52500_53227 = (0);
while(true){
if((i__52500_53227 < count__52499_53226)){
var vec__52578_53229 = chunk__52498_53225.cljs$core$IIndexed$_nth$arity$2(null,i__52500_53227);
var actual_type_53230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52578_53229,(0),null);
var __53232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52578_53229,(1),null);
var keys_53234 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53215,actual_type_53230,f_53223], null);
var canonical_f_53235 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53214),keys_53234);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53214,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53234], 0));

if(cljs.core.truth_(elem_53214.removeEventListener)){
elem_53214.removeEventListener(cljs.core.name(actual_type_53230),canonical_f_53235);
} else {
elem_53214.detachEvent(cljs.core.name(actual_type_53230),canonical_f_53235);
}


var G__53236 = seq__52496_53224;
var G__53237 = chunk__52498_53225;
var G__53238 = count__52499_53226;
var G__53239 = (i__52500_53227 + (1));
seq__52496_53224 = G__53236;
chunk__52498_53225 = G__53237;
count__52499_53226 = G__53238;
i__52500_53227 = G__53239;
continue;
} else {
var temp__5720__auto___53240 = cljs.core.seq(seq__52496_53224);
if(temp__5720__auto___53240){
var seq__52496_53241__$1 = temp__5720__auto___53240;
if(cljs.core.chunked_seq_QMARK_(seq__52496_53241__$1)){
var c__5565__auto___53242 = cljs.core.chunk_first(seq__52496_53241__$1);
var G__53243 = cljs.core.chunk_rest(seq__52496_53241__$1);
var G__53244 = c__5565__auto___53242;
var G__53245 = cljs.core.count(c__5565__auto___53242);
var G__53246 = (0);
seq__52496_53224 = G__53243;
chunk__52498_53225 = G__53244;
count__52499_53226 = G__53245;
i__52500_53227 = G__53246;
continue;
} else {
var vec__52587_53247 = cljs.core.first(seq__52496_53241__$1);
var actual_type_53248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52587_53247,(0),null);
var __53249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52587_53247,(1),null);
var keys_53251 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53215,actual_type_53248,f_53223], null);
var canonical_f_53252 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53214),keys_53251);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53214,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53251], 0));

if(cljs.core.truth_(elem_53214.removeEventListener)){
elem_53214.removeEventListener(cljs.core.name(actual_type_53248),canonical_f_53252);
} else {
elem_53214.detachEvent(cljs.core.name(actual_type_53248),canonical_f_53252);
}


var G__53257 = cljs.core.next(seq__52496_53241__$1);
var G__53258 = null;
var G__53259 = (0);
var G__53260 = (0);
seq__52496_53224 = G__53257;
chunk__52498_53225 = G__53258;
count__52499_53226 = G__53259;
i__52500_53227 = G__53260;
continue;
}
} else {
}
}
break;
}

var G__53263 = seq__52486_53216;
var G__53264 = chunk__52493_53218;
var G__53265 = count__52494_53219;
var G__53266 = (i__52495_53220 + (1));
seq__52486_53216 = G__53263;
chunk__52493_53218 = G__53264;
count__52494_53219 = G__53265;
i__52495_53220 = G__53266;
continue;
} else {
var temp__5720__auto___53267 = cljs.core.seq(seq__52486_53216);
if(temp__5720__auto___53267){
var seq__52486_53268__$1 = temp__5720__auto___53267;
if(cljs.core.chunked_seq_QMARK_(seq__52486_53268__$1)){
var c__5565__auto___53269 = cljs.core.chunk_first(seq__52486_53268__$1);
var G__53270 = cljs.core.chunk_rest(seq__52486_53268__$1);
var G__53271 = c__5565__auto___53269;
var G__53272 = cljs.core.count(c__5565__auto___53269);
var G__53273 = (0);
seq__52486_53216 = G__53270;
chunk__52493_53218 = G__53271;
count__52494_53219 = G__53272;
i__52495_53220 = G__53273;
continue;
} else {
var vec__52593_53274 = cljs.core.first(seq__52486_53268__$1);
var orig_type_53275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52593_53274,(0),null);
var f_53276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52593_53274,(1),null);
var seq__52487_53277 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_53275,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_53275,cljs.core.identity])));
var chunk__52489_53278 = null;
var count__52490_53279 = (0);
var i__52491_53280 = (0);
while(true){
if((i__52491_53280 < count__52490_53279)){
var vec__52609_53282 = chunk__52489_53278.cljs$core$IIndexed$_nth$arity$2(null,i__52491_53280);
var actual_type_53283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52609_53282,(0),null);
var __53284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52609_53282,(1),null);
var keys_53285 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53215,actual_type_53283,f_53276], null);
var canonical_f_53286 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53214),keys_53285);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53214,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53285], 0));

if(cljs.core.truth_(elem_53214.removeEventListener)){
elem_53214.removeEventListener(cljs.core.name(actual_type_53283),canonical_f_53286);
} else {
elem_53214.detachEvent(cljs.core.name(actual_type_53283),canonical_f_53286);
}


var G__53287 = seq__52487_53277;
var G__53288 = chunk__52489_53278;
var G__53289 = count__52490_53279;
var G__53290 = (i__52491_53280 + (1));
seq__52487_53277 = G__53287;
chunk__52489_53278 = G__53288;
count__52490_53279 = G__53289;
i__52491_53280 = G__53290;
continue;
} else {
var temp__5720__auto___53291__$1 = cljs.core.seq(seq__52487_53277);
if(temp__5720__auto___53291__$1){
var seq__52487_53292__$1 = temp__5720__auto___53291__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52487_53292__$1)){
var c__5565__auto___53293 = cljs.core.chunk_first(seq__52487_53292__$1);
var G__53294 = cljs.core.chunk_rest(seq__52487_53292__$1);
var G__53295 = c__5565__auto___53293;
var G__53296 = cljs.core.count(c__5565__auto___53293);
var G__53297 = (0);
seq__52487_53277 = G__53294;
chunk__52489_53278 = G__53295;
count__52490_53279 = G__53296;
i__52491_53280 = G__53297;
continue;
} else {
var vec__52614_53298 = cljs.core.first(seq__52487_53292__$1);
var actual_type_53299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52614_53298,(0),null);
var __53300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52614_53298,(1),null);
var keys_53303 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53215,actual_type_53299,f_53276], null);
var canonical_f_53304 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_53214),keys_53303);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_53214,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_53303], 0));

if(cljs.core.truth_(elem_53214.removeEventListener)){
elem_53214.removeEventListener(cljs.core.name(actual_type_53299),canonical_f_53304);
} else {
elem_53214.detachEvent(cljs.core.name(actual_type_53299),canonical_f_53304);
}


var G__53306 = cljs.core.next(seq__52487_53292__$1);
var G__53307 = null;
var G__53308 = (0);
var G__53309 = (0);
seq__52487_53277 = G__53306;
chunk__52489_53278 = G__53307;
count__52490_53279 = G__53308;
i__52491_53280 = G__53309;
continue;
}
} else {
}
}
break;
}

var G__53310 = cljs.core.next(seq__52486_53268__$1);
var G__53311 = null;
var G__53312 = (0);
var G__53313 = (0);
seq__52486_53216 = G__53310;
chunk__52493_53218 = G__53311;
count__52494_53219 = G__53312;
i__52495_53220 = G__53313;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq52477){
var G__52478 = cljs.core.first(seq52477);
var seq52477__$1 = cljs.core.next(seq52477);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52478,seq52477__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53315 = arguments.length;
var i__5767__auto___53316 = (0);
while(true){
if((i__5767__auto___53316 < len__5766__auto___53315)){
args__5772__auto__.push((arguments[i__5767__auto___53316]));

var G__53317 = (i__5767__auto___53316 + (1));
i__5767__auto___53316 = G__53317;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__52624_53320 = dommy.core.elem_and_selector(elem_sel);
var elem_53321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52624_53320,(0),null);
var selector_53322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52624_53320,(1),null);
var seq__52627_53323 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__52628_53324 = null;
var count__52629_53325 = (0);
var i__52630_53326 = (0);
while(true){
if((i__52630_53326 < count__52629_53325)){
var vec__52637_53328 = chunk__52628_53324.cljs$core$IIndexed$_nth$arity$2(null,i__52630_53326);
var type_53329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52637_53328,(0),null);
var f_53330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52637_53328,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53329,((function (seq__52627_53323,chunk__52628_53324,count__52629_53325,i__52630_53326,vec__52637_53328,type_53329,f_53330,vec__52624_53320,elem_53321,selector_53322){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53329,dommy$core$this_fn], 0));

return (f_53330.cljs$core$IFn$_invoke$arity$1 ? f_53330.cljs$core$IFn$_invoke$arity$1(e) : f_53330.call(null,e));
});})(seq__52627_53323,chunk__52628_53324,count__52629_53325,i__52630_53326,vec__52637_53328,type_53329,f_53330,vec__52624_53320,elem_53321,selector_53322))
], 0));


var G__53334 = seq__52627_53323;
var G__53335 = chunk__52628_53324;
var G__53336 = count__52629_53325;
var G__53337 = (i__52630_53326 + (1));
seq__52627_53323 = G__53334;
chunk__52628_53324 = G__53335;
count__52629_53325 = G__53336;
i__52630_53326 = G__53337;
continue;
} else {
var temp__5720__auto___53338 = cljs.core.seq(seq__52627_53323);
if(temp__5720__auto___53338){
var seq__52627_53339__$1 = temp__5720__auto___53338;
if(cljs.core.chunked_seq_QMARK_(seq__52627_53339__$1)){
var c__5565__auto___53340 = cljs.core.chunk_first(seq__52627_53339__$1);
var G__53341 = cljs.core.chunk_rest(seq__52627_53339__$1);
var G__53342 = c__5565__auto___53340;
var G__53343 = cljs.core.count(c__5565__auto___53340);
var G__53344 = (0);
seq__52627_53323 = G__53341;
chunk__52628_53324 = G__53342;
count__52629_53325 = G__53343;
i__52630_53326 = G__53344;
continue;
} else {
var vec__52646_53345 = cljs.core.first(seq__52627_53339__$1);
var type_53346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52646_53345,(0),null);
var f_53347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52646_53345,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53346,((function (seq__52627_53323,chunk__52628_53324,count__52629_53325,i__52630_53326,vec__52646_53345,type_53346,f_53347,seq__52627_53339__$1,temp__5720__auto___53338,vec__52624_53320,elem_53321,selector_53322){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_53346,dommy$core$this_fn], 0));

return (f_53347.cljs$core$IFn$_invoke$arity$1 ? f_53347.cljs$core$IFn$_invoke$arity$1(e) : f_53347.call(null,e));
});})(seq__52627_53323,chunk__52628_53324,count__52629_53325,i__52630_53326,vec__52646_53345,type_53346,f_53347,seq__52627_53339__$1,temp__5720__auto___53338,vec__52624_53320,elem_53321,selector_53322))
], 0));


var G__53351 = cljs.core.next(seq__52627_53339__$1);
var G__53352 = null;
var G__53353 = (0);
var G__53354 = (0);
seq__52627_53323 = G__53351;
chunk__52628_53324 = G__53352;
count__52629_53325 = G__53353;
i__52630_53326 = G__53354;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq52618){
var G__52619 = cljs.core.first(seq52618);
var seq52618__$1 = cljs.core.next(seq52618);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52619,seq52618__$1);
}));


//# sourceMappingURL=dommy.core.js.map
