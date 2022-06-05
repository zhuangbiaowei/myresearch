goog.provide('frontend.handler.query');
frontend.handler.query.normalize_query_function = (function frontend$handler$query$normalize_query_function(ast,result){
var ast__$1 = clojure.walk.prewalk((function (f){
if(((cljs.core.list_QMARK_(f)) && ((((cljs.core.second(f) instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"average","average",1148175359,null),null,new cljs.core.Symbol(null,"count","count",-514511684,null),null,new cljs.core.Symbol(null,"sum","sum",1777518341,null),null,new cljs.core.Symbol(null,"min","min",2085523049,null),null,new cljs.core.Symbol(null,"max","max",1701898075,null),null], null), null),cljs.core.first(f))))))){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"min","min",2085523049,null),null,new cljs.core.Symbol(null,"max","max",1701898075,null),null], null), null),cljs.core.first(f))){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"apply","apply",-1334050276,null),(new cljs.core.List(null,cljs.core.first(f),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"map","map",-1282745308,null),(new cljs.core.List(null,cljs.core.second(f),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null));
} else {
return (new cljs.core.List(null,cljs.core.first(f),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"map","map",-1282745308,null),(new cljs.core.List(null,cljs.core.second(f),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null));
}
} else {
return f;
}
}),ast);
return clojure.walk.postwalk((function (f){
if((f instanceof cljs.core.Keyword)){
var G__91802 = f;
var G__91802__$1 = (((G__91802 instanceof cljs.core.Keyword))?G__91802.fqn:null);
switch (G__91802__$1) {
case "block":
return new cljs.core.Keyword("block","content","block/content",-161885195);

break;
case "page":
return new cljs.core.Keyword("block","name","block/name",1619760316);

break;
case "created-at":
return new cljs.core.Keyword("block","created-at","block/created-at",1440015);

break;
case "updated-at":
return new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551);

break;
default:
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__91789_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__91789_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),f], null));
}),result);
var int_QMARK_ = cljs.core.some(cljs.core.integer_QMARK_,vals);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"b","b",-1172211299,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"result-str","result-str",977122937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b","b",-1172211299,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("block","properties","block/properties",708347145),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"result-num","result-num",1133657783,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"parseFloat","parseFloat",1048011182,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result-str","result-str",977122937,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"isNaN","isNaN",74904266,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result-num","result-num",1133657783,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"result-str","result-str",977122937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result-num","result-num",1133657783,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"or","or",1876275696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"when","when",1064114221,null),null,(1),null)),(new cljs.core.List(null,int_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));

}
} else {
return f;

}
}),ast__$1);
});

//# sourceMappingURL=frontend.handler.query.js.map
