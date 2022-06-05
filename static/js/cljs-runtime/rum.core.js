goog.provide('rum.core');
goog.scope(function(){
  rum.core.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return rum.core.goog$module$goog$object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__50841 = cljs.core.seq(props);
var chunk__50843 = null;
var count__50844 = (0);
var i__50845 = (0);
while(true){
if((i__50845 < count__50844)){
var vec__50859 = chunk__50843.cljs$core$IIndexed$_nth$arity$2(null,i__50845);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50859,(1),null);
if((!((v == null)))){
rum.core.goog$module$goog$object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__51140 = seq__50841;
var G__51141 = chunk__50843;
var G__51142 = count__50844;
var G__51143 = (i__50845 + (1));
seq__50841 = G__51140;
chunk__50843 = G__51141;
count__50844 = G__51142;
i__50845 = G__51143;
continue;
} else {
var G__51144 = seq__50841;
var G__51145 = chunk__50843;
var G__51146 = count__50844;
var G__51147 = (i__50845 + (1));
seq__50841 = G__51144;
chunk__50843 = G__51145;
count__50844 = G__51146;
i__50845 = G__51147;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50841);
if(temp__5720__auto__){
var seq__50841__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50841__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__50841__$1);
var G__51149 = cljs.core.chunk_rest(seq__50841__$1);
var G__51150 = c__5565__auto__;
var G__51151 = cljs.core.count(c__5565__auto__);
var G__51152 = (0);
seq__50841 = G__51149;
chunk__50843 = G__51150;
count__50844 = G__51151;
i__50845 = G__51152;
continue;
} else {
var vec__50865 = cljs.core.first(seq__50841__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50865,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50865,(1),null);
if((!((v == null)))){
rum.core.goog$module$goog$object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__51154 = cljs.core.next(seq__50841__$1);
var G__51155 = null;
var G__51156 = (0);
var G__51157 = (0);
seq__50841 = G__51154;
chunk__50843 = G__51155;
count__50844 = G__51156;
i__50845 = G__51157;
continue;
} else {
var G__51158 = cljs.core.next(seq__50841__$1);
var G__51159 = null;
var G__51160 = (0);
var G__51161 = (0);
seq__50841 = G__51158;
chunk__50843 = G__51159;
count__50844 = G__51160;
i__50845 = G__51161;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
if(goog.DEBUG){
var mixins_51162__$1 = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mixins], 0)));
if(clojure.set.subset_QMARK_(mixins_51162__$1,rum.specs.mixins)){
} else {
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)," declares invalid mixin keys ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(mixins_51162__$1,rum.specs.mixins)),", ","did you mean one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.specs.mixins)].join(''),"\n","(set/subset? mixins rum.specs/mixins)"].join('')));
}

cljs.core.run_BANG_((function (p1__50869_SHARP_){
return console.warn(p1__50869_SHARP_);
}),cljs.core.vals(cljs.core.select_keys(rum.specs.deprecated_mixins,mixins_51162__$1)));
} else {
}

var init = rum.util.collect(new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var before_render = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword("unsafe","will-mount","unsafe/will-mount",265089051),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__50872_SHARP_,p2__50871_SHARP_){
return (p2__50871_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__50871_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__50872_SHARP_) : p2__50871_SHARP_.call(null,p1__50872_SHARP_));
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_remount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),new cljs.core.Keyword(null,"will-remount","will-remount",-141604325)], null),mixins);
var should_update = rum.util.collect(new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var before_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword("unsafe","will-update","unsafe/will-update",1505013232),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect(new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect(new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect(new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = (function (props){
var this$ = this;
rum.core.goog$module$goog$object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rum.core.goog$module$goog$object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = rum.core.goog$module$goog$object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(before_render)){
} else {
rum.core.goog$module$goog$object.set(prototype,"UNSAFE_componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),before_render));
}));
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
}));
}

rum.core.goog$module$goog$object.set(prototype,"UNSAFE_componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,rum.core.goog$module$goog$object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__50876_SHARP_,p2__50875_SHARP_){
return (p2__50875_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__50875_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__50876_SHARP_) : p2__50875_SHARP_.call(null,old_state,p1__50876_SHARP_));
}),state,will_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(rum.core.goog$module$goog$object.get(next_state,":rum/state"));
var or__5043__auto__ = cljs.core.some((function (p1__50877_SHARP_){
return (p1__50877_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__50877_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__50877_SHARP_.call(null,old_state,new_state));
}),should_update);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_(before_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"UNSAFE_componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = rum.core.goog$module$goog$object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),before_update));
}));
}

rum.core.goog$module$goog$object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__50904 = (function (){var G__50907 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__50907) : wrapped_render.call(null,G__50907));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50904,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50904,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_(did_update)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
rum.core.goog$module$goog$object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),rum.core.goog$module$goog$object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
}));
}

rum.core.goog$module$goog$object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return rum.core.goog$module$goog$object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_(child_context)){
} else {
rum.core.goog$module$goog$object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__50878_SHARP_){
return (p1__50878_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50878_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__50878_SHARP_.call(null,state));
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_(prototype,class_props);

rum.core.goog$module$goog$object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.set_meta_BANG_ = (function rum$core$set_meta_BANG_(c){
var f = (function (){
var ctr = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
return ctr.apply(ctr,arguments);
});
var x50908_51254 = f;
(x50908_51254.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x50908_51254.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.meta((c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null)));
}));


return f;
});
/**
 * Wraps component construction in a way so that Google Closure Compiler
 * can properly recognize and elide unused components. The extra `set-meta`
 * fn is needed so that the compiler can properly detect that all functions
 * are side effect free.
 */
rum.core.lazy_build = (function rum$core$lazy_build(ctor,render,mixins,display_name){
var bf = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$3 ? ctor.cljs$core$IFn$_invoke$arity$3(render,mixins,display_name) : ctor.call(null,render,mixins,display_name));
});
var c = goog.functions.cacheReturnValue(bf);
return rum.core.set_meta_BANG_(c);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__51260__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__51260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51261__i = 0, G__51261__a = new Array(arguments.length -  0);
while (G__51261__i < G__51261__a.length) {G__51261__a[G__51261__i] = arguments[G__51261__i + 0]; ++G__51261__i;}
  args = new cljs.core.IndexedSeq(G__51261__a,0,null);
} 
return G__51260__delegate.call(this,args);};
G__51260.cljs$lang$maxFixedArity = 0;
G__51260.cljs$lang$applyTo = (function (arglist__51262){
var args = cljs.core.seq(arglist__51262);
return G__51260__delegate(args);
});
G__51260.cljs$core$IFn$_invoke$arity$variadic = G__51260__delegate;
return G__51260;
})()
:(function() { 
var G__51263__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__51263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51264__i = 0, G__51264__a = new Array(arguments.length -  0);
while (G__51264__i < G__51264__a.length) {G__51264__a[G__51264__i] = arguments[G__51264__i + 0]; ++G__51264__i;}
  args = new cljs.core.IndexedSeq(G__51264__a,0,null);
} 
return G__51263__delegate.call(this,args);};
G__51263.cljs$lang$maxFixedArity = 0;
G__51263.cljs$lang$applyTo = (function (arglist__51265){
var args = cljs.core.seq(arglist__51265);
return G__51263__delegate(args);
});
G__51263.cljs$core$IFn$_invoke$arity$variadic = G__51263__delegate;
return G__51263;
})()
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.memo_compare_props = (function rum$core$memo_compare_props(prev_props,next_props){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((prev_props[":rum/args"]),(next_props[":rum/args"]));
});
rum.core.react_memo = (function rum$core$react_memo(f){
var temp__5722__auto__ = React.memo;
if((temp__5722__auto__ == null)){
return f;
} else {
var memo = temp__5722__auto__;
return (memo.cljs$core$IFn$_invoke$arity$2 ? memo.cljs$core$IFn$_invoke$arity$2(f,rum.core.memo_compare_props) : memo.call(null,f,rum.core.memo_compare_props));
}
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mixins,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null))){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var memo_class = rum.core.react_memo(class$);
var ctor = (function() { 
var G__51271__delegate = function (args){
return React.createElement(memo_class,({":rum/args": args}));
};
var G__51271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51272__i = 0, G__51272__a = new Array(arguments.length -  0);
while (G__51272__i < G__51272__a.length) {G__51272__a[G__51272__i] = arguments[G__51272__i + 0]; ++G__51272__i;}
  args = new cljs.core.IndexedSeq(G__51272__a,0,null);
} 
return G__51271__delegate.call(this,args);};
G__51271.cljs$lang$maxFixedArity = 0;
G__51271.cljs$lang$applyTo = (function (arglist__51273){
var args = cljs.core.seq(arglist__51273);
return G__51271__delegate(args);
});
G__51271.cljs$core$IFn$_invoke$arity$variadic = G__51271__delegate;
return G__51271;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),memo_class], null));
} else {
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__51274__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__51274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51275__i = 0, G__51275__a = new Array(arguments.length -  0);
while (G__51275__i < G__51275__a.length) {G__51275__a[G__51275__i] = arguments[G__51275__i + 0]; ++G__51275__i;}
  args = new cljs.core.IndexedSeq(G__51275__a,0,null);
} 
return G__51274__delegate.call(this,args);};
G__51274.cljs$lang$maxFixedArity = 0;
G__51274.cljs$lang$applyTo = (function (arglist__51276){
var args = cljs.core.seq(arglist__51276);
return G__51274__delegate(args);
});
G__51274.cljs$core$IFn$_invoke$arity$variadic = G__51274__delegate;
return G__51274;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);

}
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__5043__auto__ = (function (){var and__5041__auto__ = (typeof window !== 'undefined');
if(and__5041__auto__){
var or__5043__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (function (p1__50934_SHARP_){
return setTimeout(p1__50934_SHARP_,(16));
});
}
})();
rum.core.batch = (function (){var or__5043__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_one = (function rum$core$render_one(comp){
if((((!((comp == null)))) && (cljs.core.not(rum.core.goog$module$goog$object.get(comp,":rum/unmounted?"))))){
return comp.forceUpdate();
} else {
return null;
}
});
rum.core.render_all = (function rum$core$render_all(queue){
return cljs.core.run_BANG_(rum.core.render_one,queue);
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
rum.core.sync_update_QMARK_ = cljs.core.volatile_BANG_(false);
/**
 * Schedules react component to be rendered on next animation frame,
 *   unless the requested update happens to be in a sync-update phase.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.truth_(cljs.core.deref(rum.core.sync_update_QMARK_))){
return rum.core.render_one(component);
} else {
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return rum.core.render_queue.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rum.core.render_queue.cljs$core$IDeref$_deref$arity$1(null),component));
}
});
rum.core.mark_sync_update = (function rum$core$mark_sync_update(f){
if(cljs.core.fn_QMARK_(f)){
return (function rum$core$mark_sync_update_$_wrapped_handler(e){
var _ = cljs.core.vreset_BANG_(rum.core.sync_update_QMARK_,true);
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
var ___$1 = cljs.core.vreset_BANG_(rum.core.sync_update_QMARK_,false);
return ret;
});
} else {
return f;
}
});
goog.exportSymbol('rum.core.mark_sync_update', rum.core.mark_sync_update);
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
rum.core.create_context = (function rum$core$create_context(default_value){
return React.createContext(default_value);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Usage of this function is discouraged. Use :ref callback instead.
 *   Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * DEPRECATED: Use :ref (fn [dom-or-nil]) callback instead. See rum issue #124
 *   Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 * 
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 * 
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 * 
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__50980 = arguments.length;
switch (G__50980) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,(function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return rum.core.request_render(component);
} else {
return null;
}
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
}));

(rum.core.local.cljs$lang$maxFixedArity = 2);

/**
 * Mixin. Works in conjunction with [[react]].
 * 
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid());
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__50982 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__50983 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__50983);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__50984 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50984,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50984,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__50987_51309 = cljs.core.seq(old_reactions);
var chunk__50988_51310 = null;
var count__50989_51311 = (0);
var i__50990_51312 = (0);
while(true){
if((i__50990_51312 < count__50989_51311)){
var ref_51313 = chunk__50988_51310.cljs$core$IIndexed$_nth$arity$2(null,i__50990_51312);
if(cljs.core.contains_QMARK_(new_reactions,ref_51313)){
} else {
cljs.core.remove_watch(ref_51313,key);
}


var G__51314 = seq__50987_51309;
var G__51315 = chunk__50988_51310;
var G__51316 = count__50989_51311;
var G__51317 = (i__50990_51312 + (1));
seq__50987_51309 = G__51314;
chunk__50988_51310 = G__51315;
count__50989_51311 = G__51316;
i__50990_51312 = G__51317;
continue;
} else {
var temp__5720__auto___51318 = cljs.core.seq(seq__50987_51309);
if(temp__5720__auto___51318){
var seq__50987_51319__$1 = temp__5720__auto___51318;
if(cljs.core.chunked_seq_QMARK_(seq__50987_51319__$1)){
var c__5565__auto___51320 = cljs.core.chunk_first(seq__50987_51319__$1);
var G__51321 = cljs.core.chunk_rest(seq__50987_51319__$1);
var G__51322 = c__5565__auto___51320;
var G__51323 = cljs.core.count(c__5565__auto___51320);
var G__51324 = (0);
seq__50987_51309 = G__51321;
chunk__50988_51310 = G__51322;
count__50989_51311 = G__51323;
i__50990_51312 = G__51324;
continue;
} else {
var ref_51325 = cljs.core.first(seq__50987_51319__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_51325)){
} else {
cljs.core.remove_watch(ref_51325,key);
}


var G__51326 = cljs.core.next(seq__50987_51319__$1);
var G__51327 = null;
var G__51328 = (0);
var G__51329 = (0);
seq__50987_51309 = G__51326;
chunk__50988_51310 = G__51327;
count__50989_51311 = G__51328;
i__50990_51312 = G__51329;
continue;
}
} else {
}
}
break;
}

var seq__50991_51330 = cljs.core.seq(new_reactions);
var chunk__50992_51331 = null;
var count__50993_51332 = (0);
var i__50994_51333 = (0);
while(true){
if((i__50994_51333 < count__50993_51332)){
var ref_51334 = chunk__50992_51331.cljs$core$IIndexed$_nth$arity$2(null,i__50994_51333);
if(cljs.core.contains_QMARK_(old_reactions,ref_51334)){
} else {
cljs.core.add_watch(ref_51334,key,((function (seq__50991_51330,chunk__50992_51331,count__50993_51332,i__50994_51333,ref_51334,comp,old_reactions,vec__50984,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__50982,_STAR_reactions_STAR__temp_val__50983){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return rum.core.request_render(comp);
} else {
return null;
}
});})(seq__50991_51330,chunk__50992_51331,count__50993_51332,i__50994_51333,ref_51334,comp,old_reactions,vec__50984,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__50982,_STAR_reactions_STAR__temp_val__50983))
);
}


var G__51335 = seq__50991_51330;
var G__51336 = chunk__50992_51331;
var G__51337 = count__50993_51332;
var G__51338 = (i__50994_51333 + (1));
seq__50991_51330 = G__51335;
chunk__50992_51331 = G__51336;
count__50993_51332 = G__51337;
i__50994_51333 = G__51338;
continue;
} else {
var temp__5720__auto___51339 = cljs.core.seq(seq__50991_51330);
if(temp__5720__auto___51339){
var seq__50991_51340__$1 = temp__5720__auto___51339;
if(cljs.core.chunked_seq_QMARK_(seq__50991_51340__$1)){
var c__5565__auto___51342 = cljs.core.chunk_first(seq__50991_51340__$1);
var G__51343 = cljs.core.chunk_rest(seq__50991_51340__$1);
var G__51344 = c__5565__auto___51342;
var G__51345 = cljs.core.count(c__5565__auto___51342);
var G__51346 = (0);
seq__50991_51330 = G__51343;
chunk__50992_51331 = G__51344;
count__50993_51332 = G__51345;
i__50994_51333 = G__51346;
continue;
} else {
var ref_51347 = cljs.core.first(seq__50991_51340__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_51347)){
} else {
cljs.core.add_watch(ref_51347,key,((function (seq__50991_51330,chunk__50992_51331,count__50993_51332,i__50994_51333,ref_51347,seq__50991_51340__$1,temp__5720__auto___51339,comp,old_reactions,vec__50984,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__50982,_STAR_reactions_STAR__temp_val__50983){
return (function (_,___$1,p,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p,n)){
return rum.core.request_render(comp);
} else {
return null;
}
});})(seq__50991_51330,chunk__50992_51331,count__50993_51332,i__50994_51333,ref_51347,seq__50991_51340__$1,temp__5720__auto___51339,comp,old_reactions,vec__50984,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__50982,_STAR_reactions_STAR__temp_val__50983))
);
}


var G__51349 = cljs.core.next(seq__50991_51340__$1);
var G__51350 = null;
var G__51351 = (0);
var G__51352 = (0);
seq__50991_51330 = G__51349;
chunk__50992_51331 = G__51350;
count__50993_51332 = G__51351;
i__50994_51333 = G__51352;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__50982);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_51353 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__50998_51354 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__50999_51355 = null;
var count__51000_51356 = (0);
var i__51001_51357 = (0);
while(true){
if((i__51001_51357 < count__51000_51356)){
var ref_51358 = chunk__50999_51355.cljs$core$IIndexed$_nth$arity$2(null,i__51001_51357);
cljs.core.remove_watch(ref_51358,key_51353);


var G__51359 = seq__50998_51354;
var G__51360 = chunk__50999_51355;
var G__51361 = count__51000_51356;
var G__51362 = (i__51001_51357 + (1));
seq__50998_51354 = G__51359;
chunk__50999_51355 = G__51360;
count__51000_51356 = G__51361;
i__51001_51357 = G__51362;
continue;
} else {
var temp__5720__auto___51363 = cljs.core.seq(seq__50998_51354);
if(temp__5720__auto___51363){
var seq__50998_51365__$1 = temp__5720__auto___51363;
if(cljs.core.chunked_seq_QMARK_(seq__50998_51365__$1)){
var c__5565__auto___51366 = cljs.core.chunk_first(seq__50998_51365__$1);
var G__51367 = cljs.core.chunk_rest(seq__50998_51365__$1);
var G__51368 = c__5565__auto___51366;
var G__51369 = cljs.core.count(c__5565__auto___51366);
var G__51370 = (0);
seq__50998_51354 = G__51367;
chunk__50999_51355 = G__51368;
count__51000_51356 = G__51369;
i__51001_51357 = G__51370;
continue;
} else {
var ref_51372 = cljs.core.first(seq__50998_51365__$1);
cljs.core.remove_watch(ref_51372,key_51353);


var G__51376 = cljs.core.next(seq__50998_51365__$1);
var G__51377 = null;
var G__51378 = (0);
var G__51379 = (0);
seq__50998_51354 = G__51376;
chunk__50999_51355 = G__51377;
count__51000_51356 = G__51378;
i__51001_51357 = G__51379;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142)], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 * 
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 * 
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 * 
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 * 
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 * 
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 * 
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 * 
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 * 
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__5772__auto__ = [];
var len__5766__auto___51384 = arguments.length;
var i__5767__auto___51385 = (0);
while(true){
if((i__5767__auto___51385 < len__5766__auto___51384)){
args__5772__auto__.push((arguments[i__5767__auto___51385]));

var G__51386 = (i__5767__auto___51385 + (1));
i__5767__auto___51385 = G__51386;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__51021){
var map__51022 = p__51021;
var map__51022__$1 = cljs.core.__destructure_map(map__51022);
var options = map__51022__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq51018){
var G__51019 = cljs.core.first(seq51018);
var seq51018__$1 = cljs.core.next(seq51018);
var G__51020 = cljs.core.first(seq51018__$1);
var seq51018__$2 = cljs.core.next(seq51018__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51019,G__51020,seq51018__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___51391 = arguments.length;
var i__5767__auto___51392 = (0);
while(true){
if((i__5767__auto___51392 < len__5766__auto___51391)){
args__5772__auto__.push((arguments[i__5767__auto___51392]));

var G__51393 = (i__5767__auto___51392 + (1));
i__5767__auto___51392 = G__51393;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq51036){
var G__51037 = cljs.core.first(seq51036);
var seq51036__$1 = cljs.core.next(seq51036);
var G__51038 = cljs.core.first(seq51036__$1);
var seq51036__$2 = cljs.core.next(seq51036__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51037,G__51038,seq51036__$2);
}));

/**
 * Takes initial value or value returning fn and returns a tuple of [value set-value!],
 *   where `value` is current state value and `set-value!` is a function that schedules re-render.
 * 
 *   (let [[value set-state!] (rum/use-state 0)]
 *  [:button {:on-click #(set-state! (inc value))}
 *    value])
 */
rum.core.use_state = (function rum$core$use_state(value_or_fn){
return React.useState(value_or_fn);
});
/**
 * Takes reducing function and initial state value.
 *   Returns a tuple of [value dispatch!], where `value` is current state value and `dispatch` is a function that schedules re-render.
 * 
 *   (defmulti value-reducer (fn [value event] event))
 * 
 *   (defmethod value-reducer :inc [value _]
 *  (inc value))
 * 
 *   (let [[value dispatch!] (rum/use-reducer value-reducer 0)]
 *  [:button {:on-click #(dispatch! :inc)}
 *    value])
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usereducer
 */
rum.core.use_reducer = (function rum$core$use_reducer(reducer_fn,initial_value){
return React.useReducer((function (p1__51053_SHARP_,p2__51054_SHARP_){
return (reducer_fn.cljs$core$IFn$_invoke$arity$2 ? reducer_fn.cljs$core$IFn$_invoke$arity$2(p1__51053_SHARP_,p2__51054_SHARP_) : reducer_fn.call(null,p1__51053_SHARP_,p2__51054_SHARP_));
}),initial_value,cljs.core.identity);
});
/**
 * Takes setup-fn that executes either on the first render or after every update.
 *   The function may return cleanup-fn to cleanup the effect, either before unmount or before every next update.
 *   Calling behavior is controlled by deps argument.
 * 
 *   (rum/use-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_effect_BANG_ = (function rum$core$use_effect_BANG_(var_args){
var G__51056 = arguments.length;
switch (G__51056) {
case 1:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useEffect((function (){
var or__5043__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return undefined;
}
}));
}));

(rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useEffect((function (){
var or__5043__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_effect_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * (rum/use-layout-effect!
 *  (fn []
 *    (.addEventListener js/window "load" handler)
 *    #(.removeEventListener js/window "load" handler))
 *  []) ;; empty deps collection instructs React to run setup-fn only once on initial render
 *      ;; and cleanup-fn only once before unmounting
 * 
 *   Read more at https://reactjs.org/docs/hooks-effect.html
 */
rum.core.use_layout_effect_BANG_ = (function rum$core$use_layout_effect_BANG_(var_args){
var G__51070 = arguments.length;
switch (G__51070) {
case 1:
return rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return React.useLayoutEffect((function (){
var or__5043__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return undefined;
}
}));
}));

(rum.core.use_layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return React.useLayoutEffect((function (){
var or__5043__auto__ = (setup_fn.cljs$core$IFn$_invoke$arity$0 ? setup_fn.cljs$core$IFn$_invoke$arity$0() : setup_fn.call(null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return undefined;
}
}),((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_layout_effect_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Takes callback function and returns memoized variant, memoization is done based on provided deps collection.
 * 
 *   (rum/defc button < rum/static
 *  [{:keys [on-click]} text]
 *  [:button {:on-click on-click}
 *    text])
 * 
 *   (rum/defc app [v]
 *  (let [on-click (rum/use-callback #(do-stuff v) [v])]
 *    ;; because on-click callback is memoized here based on v argument
 *    ;; the callback won't be re-created on every render, unless v changes
 *    ;; which means that underlying `button` component won't re-render wastefully
 *    [button {:on-click on-click}
 *      "press me"]))
 * 
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usecallback
 */
rum.core.use_callback = (function rum$core$use_callback(var_args){
var G__51111 = arguments.length;
switch (G__51111) {
case 1:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return React.useCallback(callback);
}));

(rum.core.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (callback,deps){
return React.useCallback(callback,((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_callback.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function, memoizes it based on provided deps collection and executes immediately returning a result.
 *   Read more at https://reactjs.org/docs/hooks-reference.html#usememo
 */
rum.core.use_memo = (function rum$core$use_memo(var_args){
var G__51118 = arguments.length;
switch (G__51118) {
case 1:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return React.useMemo(f);
}));

(rum.core.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return React.useMemo(f,((cljs.core.array_QMARK_(deps))?deps:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(deps)));
}));

(rum.core.use_memo.cljs$lang$maxFixedArity = 2);

/**
 * Takes a value and puts it into a mutable container which is persisted for the full lifetime of the component.
 *   https://reactjs.org/docs/hooks-reference.html#useref
 */
rum.core.use_ref = (function rum$core$use_ref(initial_value){
return React.useRef(initial_value);
});
rum.core.create_ref = (function rum$core$create_ref(){
return React.createRef();
});
/**
 * Takes a ref returned from use-ref and returns its current value.
 */
rum.core.deref = (function rum$core$deref(ref){
return ref.current;
});
rum.core.set_ref_BANG_ = (function rum$core$set_ref_BANG_(ref,value){
return (ref.current = value);
});
/**
 * Main server-side rendering method. Given component, returns HTML string with static markup of that component.
 *   Serve that string to the browser and [[hydrate]] same Rum component over it. React will be able to reuse already existing DOM and will initialize much faster.
 *   No opts are supported at the moment.
 */
rum.core.render_html = (function rum$core$render_html(var_args){
var G__51126 = arguments.length;
switch (G__51126) {
case 1:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.render_html.cljs$core$IFn$_invoke$arity$1 = (function (element){
return rum.core.render_html.cljs$core$IFn$_invoke$arity$2(element,null);
}));

(rum.core.render_html.cljs$core$IFn$_invoke$arity$2 = (function (element,opts){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToString(element);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToString(element);
}
}));

(rum.core.render_html.cljs$lang$maxFixedArity = 2);

/**
 * Same as [[render-html]] but returned string has nothing React-specific.
 *   This allows Rum to be used as traditional server-side templating engine.
 */
rum.core.render_static_markup = (function rum$core$render_static_markup(src){
if((!((cljs.core._STAR_target_STAR_ === "nodejs")))){
return ReactDOMServer.renderToStaticMarkup(src);
} else {
var react_dom_server = require("react-dom/server");
return react_dom_server.renderToStaticMarkup(src);
}
});
rum.core.adapt_class_helper = (function rum$core$adapt_class_helper(type,attrs,children){
var args = [type,attrs].concat(children);
return React.createElement.apply(React,args);
});

//# sourceMappingURL=rum.core.js.map
