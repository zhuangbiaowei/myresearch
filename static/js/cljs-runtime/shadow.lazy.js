goog.provide('shadow.lazy');
goog.scope(function(){
  shadow.lazy.goog$module$goog$object = goog.module.get('goog.object');
  shadow.lazy.goog$module$shadow$loader = goog.module.get('shadow.loader');
});

/**
 * @interface
 */
shadow.lazy.ILoadable = function(){};

var shadow$lazy$ILoadable$ready_QMARK_$dyn_89340 = (function (x){
var x__5390__auto__ = (((x == null))?null:x);
var m__5391__auto__ = (shadow.lazy.ready_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5391__auto__.call(null,x));
} else {
var m__5389__auto__ = (shadow.lazy.ready_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5389__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("ILoadable.ready?",x);
}
}
});
shadow.lazy.ready_QMARK_ = (function shadow$lazy$ready_QMARK_(x){
if((((!((x == null)))) && ((!((x.shadow$lazy$ILoadable$ready_QMARK_$arity$1 == null)))))){
return x.shadow$lazy$ILoadable$ready_QMARK_$arity$1(x);
} else {
return shadow$lazy$ILoadable$ready_QMARK_$dyn_89340(x);
}
});


/**
* @constructor
 * @implements {shadow.lazy.ILoadable}
 * @implements {cljs.core.IDeref}
*/
shadow.lazy.Loadable = (function (modules,deref_fn){
this.modules = modules;
this.deref_fn = deref_fn;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.lazy.Loadable.prototype.shadow$lazy$ILoadable$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.lazy.Loadable.prototype.shadow$lazy$ILoadable$ready_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.every_QMARK_(shadow.lazy.goog$module$shadow$loader.loaded_QMARK_,self__.modules);
}));

(shadow.lazy.Loadable.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.shadow$lazy$ILoadable$ready_QMARK_$arity$1(null))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loadable not ready yet",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modules","modules",-248193976),self__.modules], null));
}

return (self__.deref_fn.cljs$core$IFn$_invoke$arity$0 ? self__.deref_fn.cljs$core$IFn$_invoke$arity$0() : self__.deref_fn.call(null));
}));

(shadow.lazy.Loadable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"modules","modules",1392337551,null),new cljs.core.Symbol(null,"deref-fn","deref-fn",-1070945319,null)], null);
}));

(shadow.lazy.Loadable.cljs$lang$type = true);

(shadow.lazy.Loadable.cljs$lang$ctorStr = "shadow.lazy/Loadable");

(shadow.lazy.Loadable.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.lazy/Loadable");
}));

/**
 * Positional factory function for shadow.lazy/Loadable.
 */
shadow.lazy.__GT_Loadable = (function shadow$lazy$__GT_Loadable(modules,deref_fn){
return (new shadow.lazy.Loadable(modules,deref_fn));
});

shadow.lazy.loadable = (function shadow$lazy$loadable(thing){
return null;
});
shadow.lazy.load = (function shadow$lazy$load(var_args){
var G__89307 = arguments.length;
switch (G__89307) {
case 1:
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.lazy.load.cljs$core$IFn$_invoke$arity$1 = (function (the_loadable){
if((the_loadable instanceof shadow.lazy.Loadable)){
} else {
throw (new Error("Assert failed: (instance? Loadable the-loadable)"));
}

var all_mods = the_loadable.modules;
var loading_map = shadow.lazy.goog$module$shadow$loader.load_multiple(cljs.core.into_array.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.name),all_mods));
var combined = (new goog.async.Deferred());
var callback_fn = the_loadable.deref_fn;
var err_fn = (function (err){
return combined.errback(err);
});
var success_fn = (function (){
if(cljs.core.truth_(the_loadable.shadow$lazy$ILoadable$ready_QMARK_$arity$1(null))){
return combined.callback((callback_fn.cljs$core$IFn$_invoke$arity$0 ? callback_fn.cljs$core$IFn$_invoke$arity$0() : callback_fn.call(null)));
} else {
return null;
}
});
var seq__89314_89348 = cljs.core.seq(all_mods);
var chunk__89316_89349 = null;
var count__89317_89350 = (0);
var i__89318_89351 = (0);
while(true){
if((i__89318_89351 < count__89317_89350)){
var mod_89352 = chunk__89316_89349.cljs$core$IIndexed$_nth$arity$2(null,i__89318_89351);
var mod_deferred_89353 = shadow.lazy.goog$module$goog$object.get(loading_map,cljs.core.name(mod_89352));
mod_deferred_89353.addCallbacks(success_fn,err_fn);


var G__89355 = seq__89314_89348;
var G__89356 = chunk__89316_89349;
var G__89357 = count__89317_89350;
var G__89358 = (i__89318_89351 + (1));
seq__89314_89348 = G__89355;
chunk__89316_89349 = G__89356;
count__89317_89350 = G__89357;
i__89318_89351 = G__89358;
continue;
} else {
var temp__5720__auto___89360 = cljs.core.seq(seq__89314_89348);
if(temp__5720__auto___89360){
var seq__89314_89361__$1 = temp__5720__auto___89360;
if(cljs.core.chunked_seq_QMARK_(seq__89314_89361__$1)){
var c__5565__auto___89362 = cljs.core.chunk_first(seq__89314_89361__$1);
var G__89363 = cljs.core.chunk_rest(seq__89314_89361__$1);
var G__89364 = c__5565__auto___89362;
var G__89365 = cljs.core.count(c__5565__auto___89362);
var G__89366 = (0);
seq__89314_89348 = G__89363;
chunk__89316_89349 = G__89364;
count__89317_89350 = G__89365;
i__89318_89351 = G__89366;
continue;
} else {
var mod_89367 = cljs.core.first(seq__89314_89361__$1);
var mod_deferred_89368 = shadow.lazy.goog$module$goog$object.get(loading_map,cljs.core.name(mod_89367));
mod_deferred_89368.addCallbacks(success_fn,err_fn);


var G__89369 = cljs.core.next(seq__89314_89361__$1);
var G__89370 = null;
var G__89371 = (0);
var G__89372 = (0);
seq__89314_89348 = G__89369;
chunk__89316_89349 = G__89370;
count__89317_89350 = G__89371;
i__89318_89351 = G__89372;
continue;
}
} else {
}
}
break;
}

return combined;
}));

(shadow.lazy.load.cljs$core$IFn$_invoke$arity$2 = (function (the_loadable,call_fn){
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$1(the_loadable).then(call_fn);
}));

(shadow.lazy.load.cljs$core$IFn$_invoke$arity$3 = (function (the_loadable,call_fn,err_fn){
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$1(the_loadable).then(call_fn,err_fn);
}));

(shadow.lazy.load.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=shadow.lazy.js.map
