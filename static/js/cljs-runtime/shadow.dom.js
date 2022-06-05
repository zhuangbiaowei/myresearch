goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47153 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47153(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47154 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47154(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46062 = coll;
var G__46063 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46062,G__46063) : shadow.dom.lazy_native_coll_seq.call(null,G__46062,G__46063));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46086 = arguments.length;
switch (G__46086) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46094 = arguments.length;
switch (G__46094) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46101 = arguments.length;
switch (G__46101) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46116 = arguments.length;
switch (G__46116) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46129 = arguments.length;
switch (G__46129) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46140 = arguments.length;
switch (G__46140) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46147){if((e46147 instanceof Object)){
var e = e46147;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46147;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46156 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46157 = null;
var count__46158 = (0);
var i__46159 = (0);
while(true){
if((i__46159 < count__46158)){
var el = chunk__46157.cljs$core$IIndexed$_nth$arity$2(null,i__46159);
var handler_47165__$1 = ((function (seq__46156,chunk__46157,count__46158,i__46159,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46156,chunk__46157,count__46158,i__46159,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47165__$1);


var G__47167 = seq__46156;
var G__47168 = chunk__46157;
var G__47169 = count__46158;
var G__47170 = (i__46159 + (1));
seq__46156 = G__47167;
chunk__46157 = G__47168;
count__46158 = G__47169;
i__46159 = G__47170;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46156);
if(temp__5720__auto__){
var seq__46156__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46156__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46156__$1);
var G__47171 = cljs.core.chunk_rest(seq__46156__$1);
var G__47172 = c__5565__auto__;
var G__47173 = cljs.core.count(c__5565__auto__);
var G__47174 = (0);
seq__46156 = G__47171;
chunk__46157 = G__47172;
count__46158 = G__47173;
i__46159 = G__47174;
continue;
} else {
var el = cljs.core.first(seq__46156__$1);
var handler_47176__$1 = ((function (seq__46156,chunk__46157,count__46158,i__46159,el,seq__46156__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46156,chunk__46157,count__46158,i__46159,el,seq__46156__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47176__$1);


var G__47177 = cljs.core.next(seq__46156__$1);
var G__47178 = null;
var G__47179 = (0);
var G__47180 = (0);
seq__46156 = G__47177;
chunk__46157 = G__47178;
count__46158 = G__47179;
i__46159 = G__47180;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__46176 = arguments.length;
switch (G__46176) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46182 = cljs.core.seq(events);
var chunk__46183 = null;
var count__46184 = (0);
var i__46185 = (0);
while(true){
if((i__46185 < count__46184)){
var vec__46195 = chunk__46183.cljs$core$IIndexed$_nth$arity$2(null,i__46185);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46195,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46195,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47182 = seq__46182;
var G__47183 = chunk__46183;
var G__47184 = count__46184;
var G__47185 = (i__46185 + (1));
seq__46182 = G__47182;
chunk__46183 = G__47183;
count__46184 = G__47184;
i__46185 = G__47185;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46182);
if(temp__5720__auto__){
var seq__46182__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46182__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46182__$1);
var G__47186 = cljs.core.chunk_rest(seq__46182__$1);
var G__47187 = c__5565__auto__;
var G__47188 = cljs.core.count(c__5565__auto__);
var G__47189 = (0);
seq__46182 = G__47186;
chunk__46183 = G__47187;
count__46184 = G__47188;
i__46185 = G__47189;
continue;
} else {
var vec__46203 = cljs.core.first(seq__46182__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46203,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47190 = cljs.core.next(seq__46182__$1);
var G__47191 = null;
var G__47192 = (0);
var G__47193 = (0);
seq__46182 = G__47190;
chunk__46183 = G__47191;
count__46184 = G__47192;
i__46185 = G__47193;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46209 = cljs.core.seq(styles);
var chunk__46210 = null;
var count__46211 = (0);
var i__46212 = (0);
while(true){
if((i__46212 < count__46211)){
var vec__46226 = chunk__46210.cljs$core$IIndexed$_nth$arity$2(null,i__46212);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46226,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46226,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47197 = seq__46209;
var G__47198 = chunk__46210;
var G__47199 = count__46211;
var G__47200 = (i__46212 + (1));
seq__46209 = G__47197;
chunk__46210 = G__47198;
count__46211 = G__47199;
i__46212 = G__47200;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46209);
if(temp__5720__auto__){
var seq__46209__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46209__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46209__$1);
var G__47201 = cljs.core.chunk_rest(seq__46209__$1);
var G__47202 = c__5565__auto__;
var G__47203 = cljs.core.count(c__5565__auto__);
var G__47204 = (0);
seq__46209 = G__47201;
chunk__46210 = G__47202;
count__46211 = G__47203;
i__46212 = G__47204;
continue;
} else {
var vec__46232 = cljs.core.first(seq__46209__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46232,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46232,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47205 = cljs.core.next(seq__46209__$1);
var G__47206 = null;
var G__47207 = (0);
var G__47208 = (0);
seq__46209 = G__47205;
chunk__46210 = G__47206;
count__46211 = G__47207;
i__46212 = G__47208;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46237_47209 = key;
var G__46237_47210__$1 = (((G__46237_47209 instanceof cljs.core.Keyword))?G__46237_47209.fqn:null);
switch (G__46237_47210__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47212 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_47212,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_47212,"aria-");
}
})())){
el.setAttribute(ks_47212,value);
} else {
(el[ks_47212] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46256){
var map__46257 = p__46256;
var map__46257__$1 = cljs.core.__destructure_map(map__46257);
var props = map__46257__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46257__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46259 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46259,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46259,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46259,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46265 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46265,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46265;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46271 = arguments.length;
switch (G__46271) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46280){
var vec__46283 = p__46280;
var seq__46284 = cljs.core.seq(vec__46283);
var first__46285 = cljs.core.first(seq__46284);
var seq__46284__$1 = cljs.core.next(seq__46284);
var nn = first__46285;
var first__46285__$1 = cljs.core.first(seq__46284__$1);
var seq__46284__$2 = cljs.core.next(seq__46284__$1);
var np = first__46285__$1;
var nc = seq__46284__$2;
var node = vec__46283;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46287 = nn;
var G__46288 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46287,G__46288) : create_fn.call(null,G__46287,G__46288));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46289 = nn;
var G__46290 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46289,G__46290) : create_fn.call(null,G__46289,G__46290));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46293 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46293,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46293,(1),null);
var seq__46296_47216 = cljs.core.seq(node_children);
var chunk__46297_47217 = null;
var count__46298_47218 = (0);
var i__46299_47219 = (0);
while(true){
if((i__46299_47219 < count__46298_47218)){
var child_struct_47220 = chunk__46297_47217.cljs$core$IIndexed$_nth$arity$2(null,i__46299_47219);
var children_47221 = shadow.dom.dom_node(child_struct_47220);
if(cljs.core.seq_QMARK_(children_47221)){
var seq__46335_47222 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47221));
var chunk__46337_47223 = null;
var count__46338_47224 = (0);
var i__46339_47225 = (0);
while(true){
if((i__46339_47225 < count__46338_47224)){
var child_47226 = chunk__46337_47223.cljs$core$IIndexed$_nth$arity$2(null,i__46339_47225);
if(cljs.core.truth_(child_47226)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47226);


var G__47227 = seq__46335_47222;
var G__47228 = chunk__46337_47223;
var G__47229 = count__46338_47224;
var G__47230 = (i__46339_47225 + (1));
seq__46335_47222 = G__47227;
chunk__46337_47223 = G__47228;
count__46338_47224 = G__47229;
i__46339_47225 = G__47230;
continue;
} else {
var G__47231 = seq__46335_47222;
var G__47232 = chunk__46337_47223;
var G__47233 = count__46338_47224;
var G__47234 = (i__46339_47225 + (1));
seq__46335_47222 = G__47231;
chunk__46337_47223 = G__47232;
count__46338_47224 = G__47233;
i__46339_47225 = G__47234;
continue;
}
} else {
var temp__5720__auto___47235 = cljs.core.seq(seq__46335_47222);
if(temp__5720__auto___47235){
var seq__46335_47236__$1 = temp__5720__auto___47235;
if(cljs.core.chunked_seq_QMARK_(seq__46335_47236__$1)){
var c__5565__auto___47237 = cljs.core.chunk_first(seq__46335_47236__$1);
var G__47238 = cljs.core.chunk_rest(seq__46335_47236__$1);
var G__47239 = c__5565__auto___47237;
var G__47240 = cljs.core.count(c__5565__auto___47237);
var G__47241 = (0);
seq__46335_47222 = G__47238;
chunk__46337_47223 = G__47239;
count__46338_47224 = G__47240;
i__46339_47225 = G__47241;
continue;
} else {
var child_47242 = cljs.core.first(seq__46335_47236__$1);
if(cljs.core.truth_(child_47242)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47242);


var G__47243 = cljs.core.next(seq__46335_47236__$1);
var G__47244 = null;
var G__47245 = (0);
var G__47246 = (0);
seq__46335_47222 = G__47243;
chunk__46337_47223 = G__47244;
count__46338_47224 = G__47245;
i__46339_47225 = G__47246;
continue;
} else {
var G__47247 = cljs.core.next(seq__46335_47236__$1);
var G__47248 = null;
var G__47249 = (0);
var G__47250 = (0);
seq__46335_47222 = G__47247;
chunk__46337_47223 = G__47248;
count__46338_47224 = G__47249;
i__46339_47225 = G__47250;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47221);
}


var G__47251 = seq__46296_47216;
var G__47252 = chunk__46297_47217;
var G__47253 = count__46298_47218;
var G__47254 = (i__46299_47219 + (1));
seq__46296_47216 = G__47251;
chunk__46297_47217 = G__47252;
count__46298_47218 = G__47253;
i__46299_47219 = G__47254;
continue;
} else {
var temp__5720__auto___47255 = cljs.core.seq(seq__46296_47216);
if(temp__5720__auto___47255){
var seq__46296_47256__$1 = temp__5720__auto___47255;
if(cljs.core.chunked_seq_QMARK_(seq__46296_47256__$1)){
var c__5565__auto___47257 = cljs.core.chunk_first(seq__46296_47256__$1);
var G__47258 = cljs.core.chunk_rest(seq__46296_47256__$1);
var G__47259 = c__5565__auto___47257;
var G__47260 = cljs.core.count(c__5565__auto___47257);
var G__47261 = (0);
seq__46296_47216 = G__47258;
chunk__46297_47217 = G__47259;
count__46298_47218 = G__47260;
i__46299_47219 = G__47261;
continue;
} else {
var child_struct_47262 = cljs.core.first(seq__46296_47256__$1);
var children_47263 = shadow.dom.dom_node(child_struct_47262);
if(cljs.core.seq_QMARK_(children_47263)){
var seq__46372_47264 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47263));
var chunk__46374_47265 = null;
var count__46375_47266 = (0);
var i__46376_47267 = (0);
while(true){
if((i__46376_47267 < count__46375_47266)){
var child_47268 = chunk__46374_47265.cljs$core$IIndexed$_nth$arity$2(null,i__46376_47267);
if(cljs.core.truth_(child_47268)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47268);


var G__47269 = seq__46372_47264;
var G__47270 = chunk__46374_47265;
var G__47271 = count__46375_47266;
var G__47272 = (i__46376_47267 + (1));
seq__46372_47264 = G__47269;
chunk__46374_47265 = G__47270;
count__46375_47266 = G__47271;
i__46376_47267 = G__47272;
continue;
} else {
var G__47274 = seq__46372_47264;
var G__47275 = chunk__46374_47265;
var G__47276 = count__46375_47266;
var G__47277 = (i__46376_47267 + (1));
seq__46372_47264 = G__47274;
chunk__46374_47265 = G__47275;
count__46375_47266 = G__47276;
i__46376_47267 = G__47277;
continue;
}
} else {
var temp__5720__auto___47278__$1 = cljs.core.seq(seq__46372_47264);
if(temp__5720__auto___47278__$1){
var seq__46372_47279__$1 = temp__5720__auto___47278__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46372_47279__$1)){
var c__5565__auto___47280 = cljs.core.chunk_first(seq__46372_47279__$1);
var G__47281 = cljs.core.chunk_rest(seq__46372_47279__$1);
var G__47282 = c__5565__auto___47280;
var G__47283 = cljs.core.count(c__5565__auto___47280);
var G__47284 = (0);
seq__46372_47264 = G__47281;
chunk__46374_47265 = G__47282;
count__46375_47266 = G__47283;
i__46376_47267 = G__47284;
continue;
} else {
var child_47285 = cljs.core.first(seq__46372_47279__$1);
if(cljs.core.truth_(child_47285)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47285);


var G__47286 = cljs.core.next(seq__46372_47279__$1);
var G__47287 = null;
var G__47288 = (0);
var G__47289 = (0);
seq__46372_47264 = G__47286;
chunk__46374_47265 = G__47287;
count__46375_47266 = G__47288;
i__46376_47267 = G__47289;
continue;
} else {
var G__47290 = cljs.core.next(seq__46372_47279__$1);
var G__47291 = null;
var G__47292 = (0);
var G__47293 = (0);
seq__46372_47264 = G__47290;
chunk__46374_47265 = G__47291;
count__46375_47266 = G__47292;
i__46376_47267 = G__47293;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47263);
}


var G__47294 = cljs.core.next(seq__46296_47256__$1);
var G__47295 = null;
var G__47296 = (0);
var G__47297 = (0);
seq__46296_47216 = G__47294;
chunk__46297_47217 = G__47295;
count__46298_47218 = G__47296;
i__46299_47219 = G__47297;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46455 = cljs.core.seq(node);
var chunk__46456 = null;
var count__46457 = (0);
var i__46458 = (0);
while(true){
if((i__46458 < count__46457)){
var n = chunk__46456.cljs$core$IIndexed$_nth$arity$2(null,i__46458);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47299 = seq__46455;
var G__47300 = chunk__46456;
var G__47301 = count__46457;
var G__47302 = (i__46458 + (1));
seq__46455 = G__47299;
chunk__46456 = G__47300;
count__46457 = G__47301;
i__46458 = G__47302;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46455);
if(temp__5720__auto__){
var seq__46455__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46455__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46455__$1);
var G__47303 = cljs.core.chunk_rest(seq__46455__$1);
var G__47304 = c__5565__auto__;
var G__47305 = cljs.core.count(c__5565__auto__);
var G__47306 = (0);
seq__46455 = G__47303;
chunk__46456 = G__47304;
count__46457 = G__47305;
i__46458 = G__47306;
continue;
} else {
var n = cljs.core.first(seq__46455__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47307 = cljs.core.next(seq__46455__$1);
var G__47308 = null;
var G__47309 = (0);
var G__47310 = (0);
seq__46455 = G__47307;
chunk__46456 = G__47308;
count__46457 = G__47309;
i__46458 = G__47310;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46495 = arguments.length;
switch (G__46495) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46508 = arguments.length;
switch (G__46508) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46534 = arguments.length;
switch (G__46534) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47315 = arguments.length;
var i__5767__auto___47316 = (0);
while(true){
if((i__5767__auto___47316 < len__5766__auto___47315)){
args__5772__auto__.push((arguments[i__5767__auto___47316]));

var G__47317 = (i__5767__auto___47316 + (1));
i__5767__auto___47316 = G__47317;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46593_47318 = cljs.core.seq(nodes);
var chunk__46594_47319 = null;
var count__46595_47320 = (0);
var i__46596_47321 = (0);
while(true){
if((i__46596_47321 < count__46595_47320)){
var node_47322 = chunk__46594_47319.cljs$core$IIndexed$_nth$arity$2(null,i__46596_47321);
fragment.appendChild(shadow.dom._to_dom(node_47322));


var G__47323 = seq__46593_47318;
var G__47324 = chunk__46594_47319;
var G__47325 = count__46595_47320;
var G__47326 = (i__46596_47321 + (1));
seq__46593_47318 = G__47323;
chunk__46594_47319 = G__47324;
count__46595_47320 = G__47325;
i__46596_47321 = G__47326;
continue;
} else {
var temp__5720__auto___47327 = cljs.core.seq(seq__46593_47318);
if(temp__5720__auto___47327){
var seq__46593_47328__$1 = temp__5720__auto___47327;
if(cljs.core.chunked_seq_QMARK_(seq__46593_47328__$1)){
var c__5565__auto___47329 = cljs.core.chunk_first(seq__46593_47328__$1);
var G__47330 = cljs.core.chunk_rest(seq__46593_47328__$1);
var G__47331 = c__5565__auto___47329;
var G__47332 = cljs.core.count(c__5565__auto___47329);
var G__47333 = (0);
seq__46593_47318 = G__47330;
chunk__46594_47319 = G__47331;
count__46595_47320 = G__47332;
i__46596_47321 = G__47333;
continue;
} else {
var node_47334 = cljs.core.first(seq__46593_47328__$1);
fragment.appendChild(shadow.dom._to_dom(node_47334));


var G__47336 = cljs.core.next(seq__46593_47328__$1);
var G__47337 = null;
var G__47338 = (0);
var G__47339 = (0);
seq__46593_47318 = G__47336;
chunk__46594_47319 = G__47337;
count__46595_47320 = G__47338;
i__46596_47321 = G__47339;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46579){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46579));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46624_47340 = cljs.core.seq(scripts);
var chunk__46626_47341 = null;
var count__46627_47342 = (0);
var i__46628_47343 = (0);
while(true){
if((i__46628_47343 < count__46627_47342)){
var vec__46646_47344 = chunk__46626_47341.cljs$core$IIndexed$_nth$arity$2(null,i__46628_47343);
var script_tag_47345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46646_47344,(0),null);
var script_body_47346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46646_47344,(1),null);
eval(script_body_47346);


var G__47347 = seq__46624_47340;
var G__47348 = chunk__46626_47341;
var G__47349 = count__46627_47342;
var G__47350 = (i__46628_47343 + (1));
seq__46624_47340 = G__47347;
chunk__46626_47341 = G__47348;
count__46627_47342 = G__47349;
i__46628_47343 = G__47350;
continue;
} else {
var temp__5720__auto___47351 = cljs.core.seq(seq__46624_47340);
if(temp__5720__auto___47351){
var seq__46624_47352__$1 = temp__5720__auto___47351;
if(cljs.core.chunked_seq_QMARK_(seq__46624_47352__$1)){
var c__5565__auto___47354 = cljs.core.chunk_first(seq__46624_47352__$1);
var G__47355 = cljs.core.chunk_rest(seq__46624_47352__$1);
var G__47356 = c__5565__auto___47354;
var G__47357 = cljs.core.count(c__5565__auto___47354);
var G__47358 = (0);
seq__46624_47340 = G__47355;
chunk__46626_47341 = G__47356;
count__46627_47342 = G__47357;
i__46628_47343 = G__47358;
continue;
} else {
var vec__46655_47359 = cljs.core.first(seq__46624_47352__$1);
var script_tag_47360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46655_47359,(0),null);
var script_body_47361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46655_47359,(1),null);
eval(script_body_47361);


var G__47363 = cljs.core.next(seq__46624_47352__$1);
var G__47364 = null;
var G__47365 = (0);
var G__47366 = (0);
seq__46624_47340 = G__47363;
chunk__46626_47341 = G__47364;
count__46627_47342 = G__47365;
i__46628_47343 = G__47366;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46658){
var vec__46659 = p__46658;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46659,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46659,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46679 = arguments.length;
switch (G__46679) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46710 = cljs.core.seq(style_keys);
var chunk__46711 = null;
var count__46712 = (0);
var i__46713 = (0);
while(true){
if((i__46713 < count__46712)){
var it = chunk__46711.cljs$core$IIndexed$_nth$arity$2(null,i__46713);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47370 = seq__46710;
var G__47371 = chunk__46711;
var G__47372 = count__46712;
var G__47373 = (i__46713 + (1));
seq__46710 = G__47370;
chunk__46711 = G__47371;
count__46712 = G__47372;
i__46713 = G__47373;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46710);
if(temp__5720__auto__){
var seq__46710__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46710__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46710__$1);
var G__47377 = cljs.core.chunk_rest(seq__46710__$1);
var G__47378 = c__5565__auto__;
var G__47379 = cljs.core.count(c__5565__auto__);
var G__47380 = (0);
seq__46710 = G__47377;
chunk__46711 = G__47378;
count__46712 = G__47379;
i__46713 = G__47380;
continue;
} else {
var it = cljs.core.first(seq__46710__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47381 = cljs.core.next(seq__46710__$1);
var G__47382 = null;
var G__47383 = (0);
var G__47384 = (0);
seq__46710 = G__47381;
chunk__46711 = G__47382;
count__46712 = G__47383;
i__46713 = G__47384;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k46740,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__46762 = k46740;
var G__46762__$1 = (((G__46762 instanceof cljs.core.Keyword))?G__46762.fqn:null);
switch (G__46762__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46740,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__46771){
var vec__46775 = p__46771;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46775,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46775,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46739){
var self__ = this;
var G__46739__$1 = this;
return (new cljs.core.RecordIter((0),G__46739__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46741,other46742){
var self__ = this;
var this46741__$1 = this;
return (((!((other46742 == null)))) && ((((this46741__$1.constructor === other46742.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46741__$1.x,other46742.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46741__$1.y,other46742.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46741__$1.__extmap,other46742.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k46740){
var self__ = this;
var this__5347__auto____$1 = this;
var G__46825 = k46740;
var G__46825__$1 = (((G__46825 instanceof cljs.core.Keyword))?G__46825.fqn:null);
switch (G__46825__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46740);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__46739){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__46830 = cljs.core.keyword_identical_QMARK_;
var expr__46831 = k__5349__auto__;
if(cljs.core.truth_((pred__46830.cljs$core$IFn$_invoke$arity$2 ? pred__46830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46831) : pred__46830.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46831)))){
return (new shadow.dom.Coordinate(G__46739,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46830.cljs$core$IFn$_invoke$arity$2 ? pred__46830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46831) : pred__46830.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46831)))){
return (new shadow.dom.Coordinate(self__.x,G__46739,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__46739),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__46739){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46739,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46750){
var extmap__5382__auto__ = (function (){var G__46842 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46750,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46750)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46842);
} else {
return G__46842;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46750),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46750),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k46859,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__46882 = k46859;
var G__46882__$1 = (((G__46882 instanceof cljs.core.Keyword))?G__46882.fqn:null);
switch (G__46882__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46859,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__46885){
var vec__46886 = p__46885;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46886,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46886,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46858){
var self__ = this;
var G__46858__$1 = this;
return (new cljs.core.RecordIter((0),G__46858__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46860,other46861){
var self__ = this;
var this46860__$1 = this;
return (((!((other46861 == null)))) && ((((this46860__$1.constructor === other46861.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46860__$1.w,other46861.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46860__$1.h,other46861.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46860__$1.__extmap,other46861.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k46859){
var self__ = this;
var this__5347__auto____$1 = this;
var G__46920 = k46859;
var G__46920__$1 = (((G__46920 instanceof cljs.core.Keyword))?G__46920.fqn:null);
switch (G__46920__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46859);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__46858){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__46925 = cljs.core.keyword_identical_QMARK_;
var expr__46926 = k__5349__auto__;
if(cljs.core.truth_((pred__46925.cljs$core$IFn$_invoke$arity$2 ? pred__46925.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46926) : pred__46925.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46926)))){
return (new shadow.dom.Size(G__46858,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46925.cljs$core$IFn$_invoke$arity$2 ? pred__46925.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46926) : pred__46925.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46926)))){
return (new shadow.dom.Size(self__.w,G__46858,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__46858),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__46858){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46858,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46871){
var extmap__5382__auto__ = (function (){var G__46941 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46871,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46871)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46941);
} else {
return G__46941;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46871),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46871),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__47443 = (i + (1));
var G__47444 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47443;
ret = G__47444;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46981){
var vec__46983 = p__46981;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46983,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46983,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46989 = arguments.length;
switch (G__46989) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__47457 = ps;
var G__47458 = (i + (1));
el__$1 = G__47457;
i = G__47458;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47011 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47011,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47011,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47011,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47017_47460 = cljs.core.seq(props);
var chunk__47018_47461 = null;
var count__47019_47462 = (0);
var i__47020_47463 = (0);
while(true){
if((i__47020_47463 < count__47019_47462)){
var vec__47030_47464 = chunk__47018_47461.cljs$core$IIndexed$_nth$arity$2(null,i__47020_47463);
var k_47465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47030_47464,(0),null);
var v_47466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47030_47464,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_47465);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47465),v_47466);


var G__47470 = seq__47017_47460;
var G__47471 = chunk__47018_47461;
var G__47472 = count__47019_47462;
var G__47473 = (i__47020_47463 + (1));
seq__47017_47460 = G__47470;
chunk__47018_47461 = G__47471;
count__47019_47462 = G__47472;
i__47020_47463 = G__47473;
continue;
} else {
var temp__5720__auto___47474 = cljs.core.seq(seq__47017_47460);
if(temp__5720__auto___47474){
var seq__47017_47475__$1 = temp__5720__auto___47474;
if(cljs.core.chunked_seq_QMARK_(seq__47017_47475__$1)){
var c__5565__auto___47476 = cljs.core.chunk_first(seq__47017_47475__$1);
var G__47477 = cljs.core.chunk_rest(seq__47017_47475__$1);
var G__47478 = c__5565__auto___47476;
var G__47479 = cljs.core.count(c__5565__auto___47476);
var G__47480 = (0);
seq__47017_47460 = G__47477;
chunk__47018_47461 = G__47478;
count__47019_47462 = G__47479;
i__47020_47463 = G__47480;
continue;
} else {
var vec__47040_47481 = cljs.core.first(seq__47017_47475__$1);
var k_47482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47040_47481,(0),null);
var v_47483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47040_47481,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_47482);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47482),v_47483);


var G__47487 = cljs.core.next(seq__47017_47475__$1);
var G__47488 = null;
var G__47489 = (0);
var G__47490 = (0);
seq__47017_47460 = G__47487;
chunk__47018_47461 = G__47488;
count__47019_47462 = G__47489;
i__47020_47463 = G__47490;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47066 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47066,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47066,(1),null);
var seq__47069_47491 = cljs.core.seq(node_children);
var chunk__47071_47492 = null;
var count__47072_47493 = (0);
var i__47073_47494 = (0);
while(true){
if((i__47073_47494 < count__47072_47493)){
var child_struct_47495 = chunk__47071_47492.cljs$core$IIndexed$_nth$arity$2(null,i__47073_47494);
if((!((child_struct_47495 == null)))){
if(typeof child_struct_47495 === 'string'){
var text_47496 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47496),child_struct_47495].join(''));
} else {
var children_47497 = shadow.dom.svg_node(child_struct_47495);
if(cljs.core.seq_QMARK_(children_47497)){
var seq__47102_47498 = cljs.core.seq(children_47497);
var chunk__47104_47499 = null;
var count__47105_47500 = (0);
var i__47106_47501 = (0);
while(true){
if((i__47106_47501 < count__47105_47500)){
var child_47502 = chunk__47104_47499.cljs$core$IIndexed$_nth$arity$2(null,i__47106_47501);
if(cljs.core.truth_(child_47502)){
node.appendChild(child_47502);


var G__47503 = seq__47102_47498;
var G__47504 = chunk__47104_47499;
var G__47505 = count__47105_47500;
var G__47506 = (i__47106_47501 + (1));
seq__47102_47498 = G__47503;
chunk__47104_47499 = G__47504;
count__47105_47500 = G__47505;
i__47106_47501 = G__47506;
continue;
} else {
var G__47507 = seq__47102_47498;
var G__47508 = chunk__47104_47499;
var G__47509 = count__47105_47500;
var G__47510 = (i__47106_47501 + (1));
seq__47102_47498 = G__47507;
chunk__47104_47499 = G__47508;
count__47105_47500 = G__47509;
i__47106_47501 = G__47510;
continue;
}
} else {
var temp__5720__auto___47511 = cljs.core.seq(seq__47102_47498);
if(temp__5720__auto___47511){
var seq__47102_47512__$1 = temp__5720__auto___47511;
if(cljs.core.chunked_seq_QMARK_(seq__47102_47512__$1)){
var c__5565__auto___47513 = cljs.core.chunk_first(seq__47102_47512__$1);
var G__47514 = cljs.core.chunk_rest(seq__47102_47512__$1);
var G__47515 = c__5565__auto___47513;
var G__47516 = cljs.core.count(c__5565__auto___47513);
var G__47517 = (0);
seq__47102_47498 = G__47514;
chunk__47104_47499 = G__47515;
count__47105_47500 = G__47516;
i__47106_47501 = G__47517;
continue;
} else {
var child_47518 = cljs.core.first(seq__47102_47512__$1);
if(cljs.core.truth_(child_47518)){
node.appendChild(child_47518);


var G__47519 = cljs.core.next(seq__47102_47512__$1);
var G__47520 = null;
var G__47521 = (0);
var G__47522 = (0);
seq__47102_47498 = G__47519;
chunk__47104_47499 = G__47520;
count__47105_47500 = G__47521;
i__47106_47501 = G__47522;
continue;
} else {
var G__47523 = cljs.core.next(seq__47102_47512__$1);
var G__47524 = null;
var G__47525 = (0);
var G__47526 = (0);
seq__47102_47498 = G__47523;
chunk__47104_47499 = G__47524;
count__47105_47500 = G__47525;
i__47106_47501 = G__47526;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47497);
}
}


var G__47529 = seq__47069_47491;
var G__47530 = chunk__47071_47492;
var G__47531 = count__47072_47493;
var G__47532 = (i__47073_47494 + (1));
seq__47069_47491 = G__47529;
chunk__47071_47492 = G__47530;
count__47072_47493 = G__47531;
i__47073_47494 = G__47532;
continue;
} else {
var G__47534 = seq__47069_47491;
var G__47535 = chunk__47071_47492;
var G__47536 = count__47072_47493;
var G__47537 = (i__47073_47494 + (1));
seq__47069_47491 = G__47534;
chunk__47071_47492 = G__47535;
count__47072_47493 = G__47536;
i__47073_47494 = G__47537;
continue;
}
} else {
var temp__5720__auto___47538 = cljs.core.seq(seq__47069_47491);
if(temp__5720__auto___47538){
var seq__47069_47539__$1 = temp__5720__auto___47538;
if(cljs.core.chunked_seq_QMARK_(seq__47069_47539__$1)){
var c__5565__auto___47540 = cljs.core.chunk_first(seq__47069_47539__$1);
var G__47541 = cljs.core.chunk_rest(seq__47069_47539__$1);
var G__47542 = c__5565__auto___47540;
var G__47543 = cljs.core.count(c__5565__auto___47540);
var G__47544 = (0);
seq__47069_47491 = G__47541;
chunk__47071_47492 = G__47542;
count__47072_47493 = G__47543;
i__47073_47494 = G__47544;
continue;
} else {
var child_struct_47545 = cljs.core.first(seq__47069_47539__$1);
if((!((child_struct_47545 == null)))){
if(typeof child_struct_47545 === 'string'){
var text_47546 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47546),child_struct_47545].join(''));
} else {
var children_47547 = shadow.dom.svg_node(child_struct_47545);
if(cljs.core.seq_QMARK_(children_47547)){
var seq__47110_47548 = cljs.core.seq(children_47547);
var chunk__47112_47549 = null;
var count__47113_47550 = (0);
var i__47114_47551 = (0);
while(true){
if((i__47114_47551 < count__47113_47550)){
var child_47552 = chunk__47112_47549.cljs$core$IIndexed$_nth$arity$2(null,i__47114_47551);
if(cljs.core.truth_(child_47552)){
node.appendChild(child_47552);


var G__47553 = seq__47110_47548;
var G__47554 = chunk__47112_47549;
var G__47555 = count__47113_47550;
var G__47556 = (i__47114_47551 + (1));
seq__47110_47548 = G__47553;
chunk__47112_47549 = G__47554;
count__47113_47550 = G__47555;
i__47114_47551 = G__47556;
continue;
} else {
var G__47557 = seq__47110_47548;
var G__47558 = chunk__47112_47549;
var G__47559 = count__47113_47550;
var G__47560 = (i__47114_47551 + (1));
seq__47110_47548 = G__47557;
chunk__47112_47549 = G__47558;
count__47113_47550 = G__47559;
i__47114_47551 = G__47560;
continue;
}
} else {
var temp__5720__auto___47561__$1 = cljs.core.seq(seq__47110_47548);
if(temp__5720__auto___47561__$1){
var seq__47110_47562__$1 = temp__5720__auto___47561__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47110_47562__$1)){
var c__5565__auto___47563 = cljs.core.chunk_first(seq__47110_47562__$1);
var G__47564 = cljs.core.chunk_rest(seq__47110_47562__$1);
var G__47565 = c__5565__auto___47563;
var G__47566 = cljs.core.count(c__5565__auto___47563);
var G__47567 = (0);
seq__47110_47548 = G__47564;
chunk__47112_47549 = G__47565;
count__47113_47550 = G__47566;
i__47114_47551 = G__47567;
continue;
} else {
var child_47568 = cljs.core.first(seq__47110_47562__$1);
if(cljs.core.truth_(child_47568)){
node.appendChild(child_47568);


var G__47569 = cljs.core.next(seq__47110_47562__$1);
var G__47570 = null;
var G__47571 = (0);
var G__47572 = (0);
seq__47110_47548 = G__47569;
chunk__47112_47549 = G__47570;
count__47113_47550 = G__47571;
i__47114_47551 = G__47572;
continue;
} else {
var G__47573 = cljs.core.next(seq__47110_47562__$1);
var G__47574 = null;
var G__47575 = (0);
var G__47576 = (0);
seq__47110_47548 = G__47573;
chunk__47112_47549 = G__47574;
count__47113_47550 = G__47575;
i__47114_47551 = G__47576;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47547);
}
}


var G__47577 = cljs.core.next(seq__47069_47539__$1);
var G__47578 = null;
var G__47579 = (0);
var G__47580 = (0);
seq__47069_47491 = G__47577;
chunk__47071_47492 = G__47578;
count__47072_47493 = G__47579;
i__47073_47494 = G__47580;
continue;
} else {
var G__47581 = cljs.core.next(seq__47069_47539__$1);
var G__47582 = null;
var G__47583 = (0);
var G__47584 = (0);
seq__47069_47491 = G__47581;
chunk__47071_47492 = G__47582;
count__47072_47493 = G__47583;
i__47073_47494 = G__47584;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47585 = arguments.length;
var i__5767__auto___47586 = (0);
while(true){
if((i__5767__auto___47586 < len__5766__auto___47585)){
args__5772__auto__.push((arguments[i__5767__auto___47586]));

var G__47587 = (i__5767__auto___47586 + (1));
i__5767__auto___47586 = G__47587;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47121){
var G__47122 = cljs.core.first(seq47121);
var seq47121__$1 = cljs.core.next(seq47121);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47122,seq47121__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47124 = arguments.length;
switch (G__47124) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__34378__auto___47589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_47136){
var state_val_47137 = (state_47136[(1)]);
if((state_val_47137 === (1))){
var state_47136__$1 = state_47136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47136__$1,(2),once_or_cleanup);
} else {
if((state_val_47137 === (2))){
var inst_47133 = (state_47136[(2)]);
var inst_47134 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47136__$1 = (function (){var statearr_47140 = state_47136;
(statearr_47140[(7)] = inst_47133);

return statearr_47140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47136__$1,inst_47134);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34225__auto__ = null;
var shadow$dom$state_machine__34225__auto____0 = (function (){
var statearr_47144 = [null,null,null,null,null,null,null,null];
(statearr_47144[(0)] = shadow$dom$state_machine__34225__auto__);

(statearr_47144[(1)] = (1));

return statearr_47144;
});
var shadow$dom$state_machine__34225__auto____1 = (function (state_47136){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_47136);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e47145){var ex__34228__auto__ = e47145;
var statearr_47146_47590 = state_47136;
(statearr_47146_47590[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_47136[(4)]))){
var statearr_47147_47591 = state_47136;
(statearr_47147_47591[(1)] = cljs.core.first((state_47136[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47592 = state_47136;
state_47136 = G__47592;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
shadow$dom$state_machine__34225__auto__ = function(state_47136){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34225__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34225__auto____1.call(this,state_47136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34225__auto____0;
shadow$dom$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34225__auto____1;
return shadow$dom$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_47148 = f__34379__auto__();
(statearr_47148[(6)] = c__34378__auto___47589);

return statearr_47148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
