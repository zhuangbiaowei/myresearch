goog.provide('instaparse.reduction');
instaparse.reduction.singleton_QMARK_ = (function instaparse$reduction$singleton_QMARK_(s){
return ((cljs.core.seq(s)) && (cljs.core.not(cljs.core.next(s))));
});
instaparse.reduction.red = (function instaparse$reduction$red(parser,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"red","red",-969428204),f);
});
instaparse.reduction.raw_non_terminal_reduction = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null);
instaparse.reduction.HiccupNonTerminalReduction = (function instaparse$reduction$HiccupNonTerminalReduction(key){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),key], null);
});
instaparse.reduction.EnliveNonTerminalReduction = (function instaparse$reduction$EnliveNonTerminalReduction(key){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"enlive","enlive",1679023921),new cljs.core.Keyword(null,"key","key",-1516042587),key], null);
});
instaparse.reduction.reduction_types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),instaparse.reduction.HiccupNonTerminalReduction,new cljs.core.Keyword(null,"enlive","enlive",1679023921),instaparse.reduction.EnliveNonTerminalReduction], null);
instaparse.reduction.node_builders = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enlive","enlive",1679023921),(function (tag,item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),(new cljs.core.List(null,item,null,(1),null))], null);
}),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (tag,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,item], null);
})], null);
instaparse.reduction.standard_non_terminal_reduction = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
instaparse.reduction.apply_reduction = (function instaparse$reduction$apply_reduction(f,result){
var G__96406 = new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450).cljs$core$IFn$_invoke$arity$1(f);
var G__96406__$1 = (((G__96406 instanceof cljs.core.Keyword))?G__96406.fqn:null);
switch (G__96406__$1) {
case "raw":
return instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,result);

break;
case "hiccup":
return instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(f)], null)).instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,result));

break;
case "enlive":
var content = instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,result);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"content","content",15833224),(((cljs.core.count(content) === (0)))?null:content)], null);

break;
default:
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(result) : f.call(null,result));

}
});
instaparse.reduction.apply_standard_reductions = (function instaparse$reduction$apply_standard_reductions(var_args){
var G__96408 = arguments.length;
switch (G__96408) {
case 1:
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1 = (function (grammar){
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(instaparse.reduction.standard_non_terminal_reduction,grammar);
}));

(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2 = (function (reduction_type,grammar){
var temp__5718__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__5718__auto__)){
var reduction = temp__5718__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function instaparse$reduction$iter__96409(s__96410){
return (new cljs.core.LazySeq(null,(function (){
var s__96410__$1 = s__96410;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__96410__$1);
if(temp__5720__auto__){
var s__96410__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__96410__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__96410__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__96412 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__96411 = (0);
while(true){
if((i__96411 < size__5519__auto__)){
var vec__96413 = cljs.core._nth(c__5518__auto__,i__96411);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96413,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96413,(1),null);
cljs.core.chunk_append(b__96412,(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null)));

var G__96421 = (i__96411 + (1));
i__96411 = G__96421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__96412),instaparse$reduction$iter__96409(cljs.core.chunk_rest(s__96410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__96412),null);
}
} else {
var vec__96416 = cljs.core.first(s__96410__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96416,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96416,(1),null);
return cljs.core.cons((cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null)),instaparse$reduction$iter__96409(cljs.core.rest(s__96410__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ",reduction_type,". Use :enlive or :hiccup."], 0));
}
}));

(instaparse.reduction.apply_standard_reductions.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=instaparse.reduction.js.map
