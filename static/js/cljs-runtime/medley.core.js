goog.provide('medley.core');
/**
 * Finds the first item in a collection that matches a predicate. Returns a
 *   transducer when no collection is provided.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var G__52108 = arguments.length;
switch (G__52108) {
case 1:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.find_first.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__52701 = null;
var G__52701__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__52701__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__52701__2 = (function (result,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x)));
} else {
return result;
}
});
G__52701 = function(result,x){
switch(arguments.length){
case 0:
return G__52701__0.call(this);
case 1:
return G__52701__1.call(this,result);
case 2:
return G__52701__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52701.cljs$core$IFn$_invoke$arity$0 = G__52701__0;
G__52701.cljs$core$IFn$_invoke$arity$1 = G__52701__1;
G__52701.cljs$core$IFn$_invoke$arity$2 = G__52701__2;
return G__52701;
})()
});
}));

(medley.core.find_first.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
} else {
return null;
}
}),null,coll);
}));

(medley.core.find_first.cljs$lang$maxFixedArity = 2);

/**
 * Dissociate a value in a nested associative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
medley.core.dissoc_in = (function medley$core$dissoc_in(var_args){
var G__52122 = arguments.length;
switch (G__52122) {
case 2:
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52710 = arguments.length;
var i__5767__auto___52711 = (0);
while(true){
if((i__5767__auto___52711 < len__5766__auto___52710)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52711]));

var G__52713 = (i__5767__auto___52711 + (1));
i__5767__auto___52711 = G__52713;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
var temp__5718__auto__ = cljs.core.seq(ks);
if(temp__5718__auto__){
var vec__52131 = temp__5718__auto__;
var seq__52132 = cljs.core.seq(vec__52131);
var first__52133 = cljs.core.first(seq__52132);
var seq__52132__$1 = cljs.core.next(seq__52132);
var k = first__52133;
var ks__$1 = seq__52132__$1;
if(cljs.core.seq(ks__$1)){
var v = medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
}));

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,kss){
while(true){
var temp__5718__auto__ = cljs.core.seq(kss);
if(temp__5718__auto__){
var vec__52137 = temp__5718__auto__;
var seq__52138 = cljs.core.seq(vec__52137);
var first__52139 = cljs.core.first(seq__52138);
var seq__52138__$1 = cljs.core.next(seq__52138);
var ks_SINGLEQUOTE_ = first__52139;
var kss__$1 = seq__52138__$1;
var G__52735 = medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
var G__52736 = ks_SINGLEQUOTE_;
var G__52737 = kss__$1;
m = G__52735;
ks = G__52736;
kss = G__52737;
continue;
} else {
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
}
break;
}
}));

/** @this {Function} */
(medley.core.dissoc_in.cljs$lang$applyTo = (function (seq52119){
var G__52120 = cljs.core.first(seq52119);
var seq52119__$1 = cljs.core.next(seq52119);
var G__52121 = cljs.core.first(seq52119__$1);
var seq52119__$2 = cljs.core.next(seq52119__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52120,G__52121,seq52119__$2);
}));

(medley.core.dissoc_in.cljs$lang$maxFixedArity = (2));

/**
 * Associates a key k, with a value v in a map m, if and only if v is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var G__52150 = arguments.length;
switch (G__52150) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52742 = arguments.length;
var i__5767__auto___52743 = (0);
while(true){
if((i__5767__auto___52743 < len__5766__auto___52742)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52743]));

var G__52748 = (i__5767__auto___52743 + (1));
i__5767__auto___52743 = G__52748;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5792__auto__);

}
});

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__52151){
var vec__52152 = p__52151;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52152,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52152,(1),null);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}),medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
}));

/** @this {Function} */
(medley.core.assoc_some.cljs$lang$applyTo = (function (seq52146){
var G__52147 = cljs.core.first(seq52146);
var seq52146__$1 = cljs.core.next(seq52146);
var G__52148 = cljs.core.first(seq52146__$1);
var seq52146__$2 = cljs.core.next(seq52146__$1);
var G__52149 = cljs.core.first(seq52146__$2);
var seq52146__$3 = cljs.core.next(seq52146__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52147,G__52148,G__52149,seq52146__$3);
}));

(medley.core.assoc_some.cljs$lang$maxFixedArity = (3));

/**
 * Updates a value in a map given a key and a function, if and only if the key
 *   exists in the map. See: `clojure.core/update`.
 */
medley.core.update_existing = (function medley$core$update_existing(var_args){
var G__52185 = arguments.length;
switch (G__52185) {
case 3:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52776 = arguments.length;
var i__5767__auto___52777 = (0);
while(true){
if((i__5767__auto___52777 < len__5766__auto___52776)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52777]));

var G__52781 = (i__5767__auto___52777 + (1));
i__5767__auto___52777 = G__52781;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((6)),(0),null));
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5792__auto__);

}
});

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
var temp__5718__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var kv = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__52195 = cljs.core.val(kv);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52195) : f.call(null,G__52195));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x){
var temp__5718__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var kv = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__52199 = cljs.core.val(kv);
var G__52200 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__52199,G__52200) : f.call(null,G__52199,G__52200));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x,y){
var temp__5718__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var kv = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__52201 = cljs.core.val(kv);
var G__52202 = x;
var G__52203 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__52201,G__52202,G__52203) : f.call(null,G__52201,G__52202,G__52203));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,x,y,z){
var temp__5718__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var kv = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__52209 = cljs.core.val(kv);
var G__52210 = x;
var G__52211 = y;
var G__52212 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__52209,G__52210,G__52211,G__52212) : f.call(null,G__52209,G__52210,G__52211,G__52212));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x,y,z,more){
var temp__5718__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var kv = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.val(kv),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
} else {
return m;
}
}));

/** @this {Function} */
(medley.core.update_existing.cljs$lang$applyTo = (function (seq52177){
var G__52178 = cljs.core.first(seq52177);
var seq52177__$1 = cljs.core.next(seq52177);
var G__52179 = cljs.core.first(seq52177__$1);
var seq52177__$2 = cljs.core.next(seq52177__$1);
var G__52180 = cljs.core.first(seq52177__$2);
var seq52177__$3 = cljs.core.next(seq52177__$2);
var G__52181 = cljs.core.first(seq52177__$3);
var seq52177__$4 = cljs.core.next(seq52177__$3);
var G__52182 = cljs.core.first(seq52177__$4);
var seq52177__$5 = cljs.core.next(seq52177__$4);
var G__52183 = cljs.core.first(seq52177__$5);
var seq52177__$6 = cljs.core.next(seq52177__$5);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,seq52177__$6);
}));

(medley.core.update_existing.cljs$lang$maxFixedArity = (6));

/**
 * Updates a value in a nested associative structure, if and only if the key
 *   path exists. See: `clojure.core/update-in`.
 */
medley.core.update_existing_in = (function medley$core$update_existing_in(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52818 = arguments.length;
var i__5767__auto___52819 = (0);
while(true){
if((i__5767__auto___52819 < len__5766__auto___52818)){
args__5772__auto__.push((arguments[i__5767__auto___52819]));

var G__52821 = (i__5767__auto___52819 + (1));
i__5767__auto___52819 = G__52821;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
var up = (function medley$core$up(m__$1,ks__$1,f__$1,args__$1){
var vec__52237 = ks__$1;
var seq__52238 = cljs.core.seq(vec__52237);
var first__52239 = cljs.core.first(seq__52238);
var seq__52238__$1 = cljs.core.next(seq__52238);
var k = first__52239;
var ks__$2 = seq__52238__$1;
var temp__5718__auto__ = cljs.core.find(m__$1,k);
if(cljs.core.truth_(temp__5718__auto__)){
var kv = temp__5718__auto__;
if(ks__$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,medley$core$up(cljs.core.val(kv),ks__$2,f__$1,args__$1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,cljs.core.val(kv),args__$1));
}
} else {
return m__$1;
}
});
return up(m,ks,f,args);
}));

(medley.core.update_existing_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(medley.core.update_existing_in.cljs$lang$applyTo = (function (seq52233){
var G__52234 = cljs.core.first(seq52233);
var seq52233__$1 = cljs.core.next(seq52233);
var G__52235 = cljs.core.first(seq52233__$1);
var seq52233__$2 = cljs.core.next(seq52233__$1);
var G__52236 = cljs.core.first(seq52233__$2);
var seq52233__$3 = cljs.core.next(seq52233__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52234,G__52235,G__52236,seq52233__$3);
}));

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
}
});
medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
var coll_SINGLEQUOTE_ = ((cljs.core.record_QMARK_(coll))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,coll):coll);
if(medley.core.editable_QMARK_(coll_SINGLEQUOTE_)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_BANG_) : f.call(null,cljs.core.assoc_BANG_)),cljs.core.transient$(cljs.core.empty(coll_SINGLEQUOTE_)),coll_SINGLEQUOTE_));
} else {
return cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc) : f.call(null,cljs.core.assoc)),cljs.core.empty(coll_SINGLEQUOTE_),coll_SINGLEQUOTE_);
}
});
/**
 * Create a map entry for a key and value pair.
 */
medley.core.map_entry = (function medley$core$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Maps a function over the key/value pairs of an associative collection. Expects
 *   a function that takes two arguments, the key and value, and returns the new
 *   key and value as a collection of two elements.
 */
medley.core.map_kv = (function medley$core$map_kv(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var vec__52243 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52243,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52243,(1),null);
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k__$1,v__$1) : xf.call(null,m,k__$1,v__$1));
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__52248 = m;
var G__52249 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
var G__52250 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__52248,G__52249,G__52250) : xf.call(null,G__52248,G__52249,G__52250));
});
}),coll);
});
/**
 * Maps a function over the values of one or more associative collections.
 *   The function should accept number-of-colls arguments. Any keys which are not
 *   shared among all collections are ignored.
 */
medley.core.map_vals = (function medley$core$map_vals(var_args){
var G__52257 = arguments.length;
switch (G__52257) {
case 2:
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52862 = arguments.length;
var i__5767__auto___52863 = (0);
while(true){
if((i__5767__auto___52863 < len__5766__auto___52862)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52863]));

var G__52869 = (i__5767__auto___52863 + (1));
i__5767__auto___52863 = G__52869;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__52262 = m;
var G__52263 = k;
var G__52264 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__52262,G__52263,G__52264) : xf.call(null,G__52262,G__52263,G__52264));
});
}),coll);
}));

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic = (function (f,c1,colls){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.every_QMARK_((function (p1__52251_SHARP_){
return cljs.core.contains_QMARK_(p1__52251_SHARP_,k);
}),colls)){
var G__52274 = m;
var G__52275 = k;
var G__52276 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52252_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__52252_SHARP_,k);
}),colls));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__52274,G__52275,G__52276) : xf.call(null,G__52274,G__52275,G__52276));
} else {
return m;
}
});
}),c1);
}));

/** @this {Function} */
(medley.core.map_vals.cljs$lang$applyTo = (function (seq52254){
var G__52255 = cljs.core.first(seq52254);
var seq52254__$1 = cljs.core.next(seq52254);
var G__52256 = cljs.core.first(seq52254__$1);
var seq52254__$2 = cljs.core.next(seq52254__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52255,G__52256,seq52254__$2);
}));

(medley.core.map_vals.cljs$lang$maxFixedArity = (2));

/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new key.
 */
medley.core.map_kv_keys = (function medley$core$map_kv_keys(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__52285 = m;
var G__52286 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
var G__52287 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__52285,G__52286,G__52287) : xf.call(null,G__52285,G__52286,G__52287));
});
}),coll);
});
/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new value.
 */
medley.core.map_kv_vals = (function medley$core$map_kv_vals(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__52289 = m;
var G__52290 = k;
var G__52291 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__52289,G__52290,G__52291) : xf.call(null,G__52289,G__52290,G__52291));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns true.
 */
medley.core.filter_keys = (function medley$core$filter_keys(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns true.
 */
medley.core.filter_vals = (function medley$core$filter_vals(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns false.
 */
medley.core.remove_kv = (function medley$core$remove_kv(pred,coll){
return medley.core.filter_kv(cljs.core.complement(pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys(cljs.core.complement(pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals(cljs.core.complement(pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var G__52299 = arguments.length;
switch (G__52299) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(medley.core.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(medley.core.queue.cljs$lang$maxFixedArity = 1);

/**
 * Returns true if x implements clojure.lang.PersistentQueue.
 */
medley.core.queue_QMARK_ = (function medley$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns true if x is a boolean.
 */
medley.core.boolean_QMARK_ = (function medley$core$boolean_QMARK_(x){
return ((x === true) || (x === false));
});
/**
 * Return the least argument (as defined by the compare function) in O(n) time.
 */
medley.core.least = (function medley$core$least(var_args){
var G__52332 = arguments.length;
switch (G__52332) {
case 0:
return medley.core.least.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.least.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52970 = arguments.length;
var i__5767__auto___52971 = (0);
while(true){
if((i__5767__auto___52971 < len__5766__auto___52970)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52971]));

var G__52976 = (i__5767__auto___52971 + (1));
i__5767__auto___52971 = G__52976;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare(a,b) < (0))){
return a;
} else {
return b;
}
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.least,medley.core.least.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(medley.core.least.cljs$lang$applyTo = (function (seq52329){
var G__52330 = cljs.core.first(seq52329);
var seq52329__$1 = cljs.core.next(seq52329);
var G__52331 = cljs.core.first(seq52329__$1);
var seq52329__$2 = cljs.core.next(seq52329__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52330,G__52331,seq52329__$2);
}));

(medley.core.least.cljs$lang$maxFixedArity = (2));

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__52348 = arguments.length;
switch (G__52348) {
case 0:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___52991 = arguments.length;
var i__5767__auto___52992 = (0);
while(true){
if((i__5767__auto___52992 < len__5766__auto___52991)){
args_arr__5791__auto__.push((arguments[i__5767__auto___52992]));

var G__52994 = (i__5767__auto___52992 + (1));
i__5767__auto___52992 = G__52994;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare(a,b) > (0))){
return a;
} else {
return b;
}
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.greatest,medley.core.greatest.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(medley.core.greatest.cljs$lang$applyTo = (function (seq52343){
var G__52344 = cljs.core.first(seq52343);
var seq52343__$1 = cljs.core.next(seq52343);
var G__52345 = cljs.core.first(seq52343__$1);
var seq52343__$2 = cljs.core.next(seq52343__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52344,G__52345,seq52343__$2);
}));

(medley.core.greatest.cljs$lang$maxFixedArity = (2));

/**
 * Lazily concatenates a collection of collections into a flat sequence.
 */
medley.core.join = (function medley$core$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5720__auto__ = cljs.core.seq(colls);
if(temp__5720__auto__){
var s = temp__5720__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__52359 = cljs.core.rest(s);
return (medley.core.join.cljs$core$IFn$_invoke$arity$1 ? medley.core.join.cljs$core$IFn$_invoke$arity$1(G__52359) : medley.core.join.call(null,G__52359));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Recursively merges maps together. If all the maps supplied have nested maps
 *   under the same keys, these nested maps are merged. Otherwise the value is
 *   overwritten, as in `clojure.core/merge`.
 */
medley.core.deep_merge = (function medley$core$deep_merge(var_args){
var G__52370 = arguments.length;
switch (G__52370) {
case 0:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53000 = arguments.length;
var i__5767__auto___53001 = (0);
while(true){
if((i__5767__auto___53001 < len__5766__auto___53000)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53001]));

var G__53002 = (i__5767__auto___53001 + (1));
i__5767__auto___53001 = G__53002;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_((function (){var or__5043__auto__ = a;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return b;
}
})())){
var merge_entry = (function medley$core$merge_entry(m,e){
var k = cljs.core.key(e);
var v_SINGLEQUOTE_ = cljs.core.val(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(((cljs.core.map_QMARK_(v)) && (cljs.core.map_QMARK_(v_SINGLEQUOTE_)))){
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2(v,v_SINGLEQUOTE_);
} else {
return v_SINGLEQUOTE_;
}
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v_SINGLEQUOTE_);
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__5043__auto__ = a;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(b));
} else {
return null;
}
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.deep_merge,(function (){var or__5043__auto__ = a;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cons(b,more));
}));

/** @this {Function} */
(medley.core.deep_merge.cljs$lang$applyTo = (function (seq52367){
var G__52368 = cljs.core.first(seq52367);
var seq52367__$1 = cljs.core.next(seq52367);
var G__52369 = cljs.core.first(seq52367__$1);
var seq52367__$2 = cljs.core.next(seq52367__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52368,G__52369,seq52367__$2);
}));

(medley.core.deep_merge.cljs$lang$maxFixedArity = (2));

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__52404 = arguments.length;
switch (G__52404) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53038 = arguments.length;
var i__5767__auto___53039 = (0);
while(true){
if((i__5767__auto___53039 < len__5766__auto___53038)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53039]));

var G__53040 = (i__5767__auto___53039 + (1));
i__5767__auto___53039 = G__53040;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
}));

(medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,a,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
}));

/** @this {Function} */
(medley.core.mapply.cljs$lang$applyTo = (function (seq52401){
var G__52402 = cljs.core.first(seq52401);
var seq52401__$1 = cljs.core.next(seq52401);
var G__52403 = cljs.core.first(seq52401__$1);
var seq52401__$2 = cljs.core.next(seq52401__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52402,G__52403,seq52401__$2);
}));

(medley.core.mapply.cljs$lang$maxFixedArity = (2));

/**
 * Returns a map of the elements of coll keyed by the result of f on each
 *   element. The value at each key will be the last element in coll associated
 *   with that key. This function is similar to `clojure.core/group-by`, except
 *   that elements with the same key are overwritten, rather than added to a
 *   vector of values.
 */
medley.core.index_by = (function medley$core$index_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__52410_SHARP_,p2__52412_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__52410_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__52412_SHARP_) : f.call(null,p2__52412_SHARP_)),p2__52412_SHARP_);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__52423 = arguments.length;
switch (G__52423) {
case 0:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53061 = arguments.length;
var i__5767__auto___53063 = (0);
while(true){
if((i__5767__auto___53063 < len__5766__auto___53061)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53063]));

var G__53065 = (i__5767__auto___53063 + (1));
i__5767__auto___53063 = G__53065;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return ((s1) || (s2));
}
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
if(cljs.core.seq(ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(medley.core.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
}));

/** @this {Function} */
(medley.core.interleave_all.cljs$lang$applyTo = (function (seq52420){
var G__52421 = cljs.core.first(seq52420);
var seq52420__$1 = cljs.core.next(seq52420);
var G__52422 = cljs.core.first(seq52420__$1);
var seq52420__$2 = cljs.core.next(seq52420__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52421,G__52422,seq52420__$2);
}));

(medley.core.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f. Returns a transducer
 *   when no collection is provided.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__52451 = arguments.length;
switch (G__52451) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__53082 = null;
var G__53082__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__53082__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__53082__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__53082 = function(result,x){
switch(arguments.length){
case 0:
return G__53082__0.call(this);
case 1:
return G__53082__1.call(this,result);
case 2:
return G__53082__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53082.cljs$core$IFn$_invoke$arity$0 = G__53082__0;
G__53082.cljs$core$IFn$_invoke$arity$1 = G__53082__1;
G__53082.cljs$core$IFn$_invoke$arity$2 = G__53082__2;
return G__53082;
})()
});
}));

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__52462,seen__$1){
while(true){
var vec__52463 = p__52462;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52463,(0),null);
var xs__$1 = vec__52463;
var temp__5720__auto__ = cljs.core.seq(xs__$1);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__53084 = cljs.core.rest(s);
var G__53085 = seen__$1;
p__52462 = G__53084;
seen__$1 = G__53085;
continue;
} else {
return cljs.core.cons(x,medley$core$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
}));

(medley.core.distinct_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f. Returns a
 *   transducer when no collection is provided.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var G__52474 = arguments.length;
switch (G__52474) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_(new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return (function() {
var G__53093 = null;
var G__53093__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__53093__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__53093__2 = (function (result,x){
var prior = cljs.core.deref(pv);
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
cljs.core.vreset_BANG_(pv,fx);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,fx)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__53093 = function(result,x){
switch(arguments.length){
case 0:
return G__53093__0.call(this);
case 1:
return G__53093__1.call(this,result);
case 2:
return G__53093__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53093.cljs$core$IFn$_invoke$arity$0 = G__53093__0;
G__53093.cljs$core$IFn$_invoke$arity$1 = G__53093__1;
G__53093.cljs$core$IFn$_invoke$arity$2 = G__53093__2;
return G__53093;
})()
});
}));

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(medley.core.dedupe_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true. Returns a transducer
 *   when no collection is provided.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var G__52520 = arguments.length;
switch (G__52520) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__53103 = null;
var G__53103__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__53103__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__53103__2 = (function (result,x){
var result__$1 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__53103 = function(result,x){
switch(arguments.length){
case 0:
return G__53103__0.call(this);
case 1:
return G__53103__1.call(this,result);
case 2:
return G__53103__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53103.cljs$core$IFn$_invoke$arity$0 = G__53103__0;
G__53103.cljs$core$IFn$_invoke$arity$1 = G__53103__1;
G__53103.cljs$core$IFn$_invoke$arity$2 = G__53103__2;
return G__53103;
})()
});
}));

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5720__auto__ = cljs.core.seq(coll);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var x = cljs.core.first(s);
return cljs.core.cons(x,(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))?null:medley.core.take_upto.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s))));
} else {
return null;
}
}),null,null));
}));

(medley.core.take_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll starting *after* the first item
 *   for which `(pred item)` returns true. Returns a transducer when no collection
 *   is provided.
 */
medley.core.drop_upto = (function medley$core$drop_upto(var_args){
var G__52541 = arguments.length;
switch (G__52541) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_(true);
return (function() {
var G__53132 = null;
var G__53132__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__53132__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__53132__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref(dv))){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
cljs.core.vreset_BANG_(dv,false);
} else {
}

return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__53132 = function(result,x){
switch(arguments.length){
case 0:
return G__53132__0.call(this);
case 1:
return G__53132__1.call(this,result);
case 2:
return G__53132__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53132.cljs$core$IFn$_invoke$arity$0 = G__53132__0;
G__53132.cljs$core$IFn$_invoke$arity$1 = G__53132__1;
G__53132.cljs$core$IFn$_invoke$arity$2 = G__53132__2;
return G__53132;
})()
});
}));

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll));
}));

(medley.core.drop_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero. Returns a transducer
 *   when no collection is provided.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var G__52559 = arguments.length;
switch (G__52559) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_((-1));
return (function() {
var G__53157 = null;
var G__53157__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__53157__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__53157__2 = (function (result,x){
var G__52573 = result;
var G__52574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(i.cljs$core$IDeref$_deref$arity$1(null) + (1))),x], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__52573,G__52574) : rf.call(null,G__52573,G__52574));
});
G__53157 = function(result,x){
switch(arguments.length){
case 0:
return G__53157__0.call(this);
case 1:
return G__53157__1.call(this,result);
case 2:
return G__53157__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53157.cljs$core$IFn$_invoke$arity$0 = G__53157__0;
G__53157.cljs$core$IFn$_invoke$arity$1 = G__53157__1;
G__53157.cljs$core$IFn$_invoke$arity$2 = G__53157__2;
return G__53157;
})()
});
}));

(medley.core.indexed.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
}));

(medley.core.indexed.cljs$lang$maxFixedArity = 1);

/**
 * Returns a lazy sequence of the items in coll, with a new item inserted at
 *   the supplied index, followed by all subsequent items of the collection. Runs
 *   in O(n) time. Returns a transducer when no collection is provided.
 */
medley.core.insert_nth = (function medley$core$insert_nth(var_args){
var G__52592 = arguments.length;
switch (G__52592) {
case 2:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__53178 = null;
var G__53178__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__53178__1 = (function (result){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(idx),(1))){
var G__52596 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__52596) : rf.call(null,G__52596));
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
}
});
var G__53178__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
var G__52601 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
var G__52602 = x;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__52601,G__52602) : rf.call(null,G__52601,G__52602));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__53178 = function(result,x){
switch(arguments.length){
case 0:
return G__53178__0.call(this);
case 1:
return G__53178__1.call(this,result);
case 2:
return G__53178__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53178.cljs$core$IFn$_invoke$arity$0 = G__53178__0;
G__53178.cljs$core$IFn$_invoke$arity$1 = G__53178__1;
G__53178.cljs$core$IFn$_invoke$arity$2 = G__53178__2;
return G__53178;
})()
});
}));

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons(item,coll);
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3((index - (1)),item,cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.insert_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazy sequence of the items in coll, except for the item at the
 *   supplied index. Runs in O(n) time. Returns a transducer when no collection is
 *   provided.
 */
medley.core.remove_nth = (function medley$core$remove_nth(var_args){
var G__52612 = arguments.length;
switch (G__52612) {
case 1:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1 = (function (index){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__53205 = null;
var G__53205__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__53205__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__53205__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__53205 = function(result,x){
switch(arguments.length){
case 0:
return G__53205__0.call(this);
case 1:
return G__53205__1.call(this,result);
case 2:
return G__53205__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53205.cljs$core$IFn$_invoke$arity$0 = G__53205__0;
G__53205.cljs$core$IFn$_invoke$arity$1 = G__53205__1;
G__53205.cljs$core$IFn$_invoke$arity$2 = G__53205__2;
return G__53205;
})()
});
}));

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.rest(coll);
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2((index - (1)),cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.remove_nth.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll, with a new item replacing the
 *   item at the supplied index. Runs in O(n) time. Returns a transducer when no
 *   collection is provided.
 */
medley.core.replace_nth = (function medley$core$replace_nth(var_args){
var G__52621 = arguments.length;
switch (G__52621) {
case 2:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__53233 = null;
var G__53233__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__53233__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__53233__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__53233 = function(result,x){
switch(arguments.length){
case 0:
return G__53233__0.call(this);
case 1:
return G__53233__1.call(this,result);
case 2:
return G__53233__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53233.cljs$core$IFn$_invoke$arity$0 = G__53233__0;
G__53233.cljs$core$IFn$_invoke$arity$1 = G__53233__1;
G__53233.cljs$core$IFn$_invoke$arity$2 = G__53233__2;
return G__53233;
})()
});
}));

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons(item,cljs.core.rest(coll));
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3((index - (1)),item,cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.replace_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns the absolute value of a number.
 */
medley.core.abs = (function medley$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Atomically swaps the value of the atom to be `(apply f x args)`, where x is
 *   the current value of the atom, then returns the original value of the atom.
 *   This function therefore acts like an atomic `deref` then `swap!`.
 */
medley.core.deref_swap_BANG_ = (function medley$core$deref_swap_BANG_(var_args){
var G__52645 = arguments.length;
switch (G__52645) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53256 = arguments.length;
var i__5767__auto___53261 = (0);
while(true){
if((i__5767__auto___53261 < len__5766__auto___53256)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53261]));

var G__53262 = (i__5767__auto___53261 + (1));
i__5767__auto___53261 = G__53262;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref(atom);
cljs.core.reset_BANG_(atom,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value)));

return value;
}));

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,(function (p1__52640_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__52640_SHARP_,args);
}));
}));

/** @this {Function} */
(medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq52642){
var G__52643 = cljs.core.first(seq52642);
var seq52642__$1 = cljs.core.next(seq52642);
var G__52644 = cljs.core.first(seq52642__$1);
var seq52642__$2 = cljs.core.next(seq52642__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52643,G__52644,seq52642__$2);
}));

(medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.constantly(newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message(ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-cause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause(ex);
});
/**
 * Returns true if the value is a UUID.
 */
medley.core.uuid_QMARK_ = (function medley$core$uuid_QMARK_(x){
return (x instanceof cljs.core.UUID);
});
/**
 * Returns a UUID generated from the supplied string. Same as `cljs.core/uuid`
 *   in ClojureScript, while in Clojure it returns a `java.util.UUID` object.
 */
medley.core.uuid = (function medley$core$uuid(s){
return cljs.core.uuid(s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid();
});
/**
 * Returns true if the value is a regular expression.
 */
medley.core.regexp_QMARK_ = (function medley$core$regexp_QMARK_(x){
return (x instanceof RegExp);
});

//# sourceMappingURL=medley.core.js.map
