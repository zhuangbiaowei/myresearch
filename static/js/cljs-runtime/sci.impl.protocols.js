goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___64134 = arguments.length;
var i__5767__auto___64135 = (0);
while(true){
if((i__5767__auto___64135 < len__5766__auto___64134)){
args__5772__auto__.push((arguments[i__5767__auto___64135]));

var G__64136 = (i__5767__auto___64135 + (1));
i__5767__auto___64135 = G__64136;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__63698 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63698,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63698,(1),null);
var vec__63701 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63701,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63701,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63746){
var vec__63747 = p__63746;
var seq__63748 = cljs.core.seq(vec__63747);
var first__63749 = cljs.core.first(seq__63748);
var seq__63748__$1 = cljs.core.next(seq__63748);
var method_name = first__63749;
var ___$2 = seq__63748__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__63630__auto__","x__63630__auto__",-1365679221,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__63644__auto__","args__63644__auto__",606914478,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__63645__auto__","methods__63645__auto__",-1981814095,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__63630__auto__","x__63630__auto__",-1365679221,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__63645__auto__","methods__63645__auto__",-1981814095,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__63630__auto__","x__63630__auto__",-1365679221,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__63644__auto__","args__63644__auto__",606914478,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__63646__auto__","x__63646__auto__",-1858639333,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__63647__auto__","args__63647__auto__",1398452574,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__63648__auto__","meta__63648__auto__",-53131593,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__63646__auto__","x__63646__auto__",-1858639333,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__63650__auto__","method__63650__auto__",-178478342,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__63648__auto__","meta__63648__auto__",-53131593,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__63650__auto__","method__63650__auto__",-178478342,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__63650__auto__","method__63650__auto__",-178478342,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__63646__auto__","x__63646__auto__",-1858639333,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__63647__auto__","args__63647__auto__",1398452574,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__63646__auto__","x__63646__auto__",-1858639333,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq63653){
var G__63654 = cljs.core.first(seq63653);
var seq63653__$1 = cljs.core.next(seq63653);
var G__63655 = cljs.core.first(seq63653__$1);
var seq63653__$2 = cljs.core.next(seq63653__$1);
var G__63656 = cljs.core.first(seq63653__$2);
var seq63653__$3 = cljs.core.next(seq63653__$2);
var G__63657 = cljs.core.first(seq63653__$3);
var seq63653__$4 = cljs.core.next(seq63653__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63654,G__63655,G__63656,G__63657,seq63653__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5772__auto__ = [];
var len__5766__auto___64169 = arguments.length;
var i__5767__auto___64170 = (0);
while(true){
if((i__5767__auto___64170 < len__5766__auto___64169)){
args__5772__auto__.push((arguments[i__5767__auto___64170]));

var G__64171 = (i__5767__auto___64170 + (1));
i__5767__auto___64170 = G__64171;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__63759 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__63761 = null;
var count__63762 = (0);
var i__63763 = (0);
while(true){
if((i__63763 < count__63762)){
var vec__63865 = chunk__63761.cljs$core$IIndexed$_nth$arity$2(null,i__63763);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63865,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63865,(1),null);
var extend_via_metadata_64172 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_64173 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_64174 = sci.impl.vars.getName(proto_ns_64173);
var pns_str_64175 = (cljs.core.truth_(extend_via_metadata_64172)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_64174):null);
var seq__63869_64177 = cljs.core.seq(mmap);
var chunk__63870_64178 = null;
var count__63871_64179 = (0);
var i__63872_64180 = (0);
while(true){
if((i__63872_64180 < count__63871_64179)){
var vec__63892_64181 = chunk__63870_64178.cljs$core$IIndexed$_nth$arity$2(null,i__63872_64180);
var meth_name_64182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63892_64181,(0),null);
var f_64183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63892_64181,(1),null);
var meth_str_64185 = cljs.core.name(meth_name_64182);
var meth_sym_64186 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_64185);
var env_64187 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_64188 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_64187,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_64174,meth_sym_64186], null));
var multi_method_64189 = cljs.core.deref(multi_method_var_64188);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_64189,atype,(cljs.core.truth_(extend_via_metadata_64172)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_64175,meth_str_64185);
return ((function (seq__63869_64177,chunk__63870_64178,count__63871_64179,i__63872_64180,seq__63759,chunk__63761,count__63762,i__63763,fq,meth_str_64185,meth_sym_64186,env_64187,multi_method_var_64188,multi_method_64189,vec__63892_64181,meth_name_64182,f_64183,extend_via_metadata_64172,proto_ns_64173,pns_64174,pns_str_64175,vec__63865,proto,mmap){
return (function() { 
var G__64192__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_64183,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_64183,this$,args);
}
};
var G__64192 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__64193__i = 0, G__64193__a = new Array(arguments.length -  1);
while (G__64193__i < G__64193__a.length) {G__64193__a[G__64193__i] = arguments[G__64193__i + 1]; ++G__64193__i;}
  args = new cljs.core.IndexedSeq(G__64193__a,0,null);
} 
return G__64192__delegate.call(this,this$,args);};
G__64192.cljs$lang$maxFixedArity = 1;
G__64192.cljs$lang$applyTo = (function (arglist__64194){
var this$ = cljs.core.first(arglist__64194);
var args = cljs.core.rest(arglist__64194);
return G__64192__delegate(this$,args);
});
G__64192.cljs$core$IFn$_invoke$arity$variadic = G__64192__delegate;
return G__64192;
})()
;
;})(seq__63869_64177,chunk__63870_64178,count__63871_64179,i__63872_64180,seq__63759,chunk__63761,count__63762,i__63763,fq,meth_str_64185,meth_sym_64186,env_64187,multi_method_var_64188,multi_method_64189,vec__63892_64181,meth_name_64182,f_64183,extend_via_metadata_64172,proto_ns_64173,pns_64174,pns_str_64175,vec__63865,proto,mmap))
})():f_64183));


var G__64195 = seq__63869_64177;
var G__64196 = chunk__63870_64178;
var G__64197 = count__63871_64179;
var G__64198 = (i__63872_64180 + (1));
seq__63869_64177 = G__64195;
chunk__63870_64178 = G__64196;
count__63871_64179 = G__64197;
i__63872_64180 = G__64198;
continue;
} else {
var temp__5720__auto___64199 = cljs.core.seq(seq__63869_64177);
if(temp__5720__auto___64199){
var seq__63869_64200__$1 = temp__5720__auto___64199;
if(cljs.core.chunked_seq_QMARK_(seq__63869_64200__$1)){
var c__5565__auto___64201 = cljs.core.chunk_first(seq__63869_64200__$1);
var G__64202 = cljs.core.chunk_rest(seq__63869_64200__$1);
var G__64203 = c__5565__auto___64201;
var G__64204 = cljs.core.count(c__5565__auto___64201);
var G__64205 = (0);
seq__63869_64177 = G__64202;
chunk__63870_64178 = G__64203;
count__63871_64179 = G__64204;
i__63872_64180 = G__64205;
continue;
} else {
var vec__63902_64206 = cljs.core.first(seq__63869_64200__$1);
var meth_name_64207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63902_64206,(0),null);
var f_64208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63902_64206,(1),null);
var meth_str_64210 = cljs.core.name(meth_name_64207);
var meth_sym_64211 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_64210);
var env_64212 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_64213 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_64212,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_64174,meth_sym_64211], null));
var multi_method_64214 = cljs.core.deref(multi_method_var_64213);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_64214,atype,(cljs.core.truth_(extend_via_metadata_64172)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_64175,meth_str_64210);
return ((function (seq__63869_64177,chunk__63870_64178,count__63871_64179,i__63872_64180,seq__63759,chunk__63761,count__63762,i__63763,fq,meth_str_64210,meth_sym_64211,env_64212,multi_method_var_64213,multi_method_64214,vec__63902_64206,meth_name_64207,f_64208,seq__63869_64200__$1,temp__5720__auto___64199,extend_via_metadata_64172,proto_ns_64173,pns_64174,pns_str_64175,vec__63865,proto,mmap){
return (function() { 
var G__64216__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_64208,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_64208,this$,args);
}
};
var G__64216 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__64219__i = 0, G__64219__a = new Array(arguments.length -  1);
while (G__64219__i < G__64219__a.length) {G__64219__a[G__64219__i] = arguments[G__64219__i + 1]; ++G__64219__i;}
  args = new cljs.core.IndexedSeq(G__64219__a,0,null);
} 
return G__64216__delegate.call(this,this$,args);};
G__64216.cljs$lang$maxFixedArity = 1;
G__64216.cljs$lang$applyTo = (function (arglist__64220){
var this$ = cljs.core.first(arglist__64220);
var args = cljs.core.rest(arglist__64220);
return G__64216__delegate(this$,args);
});
G__64216.cljs$core$IFn$_invoke$arity$variadic = G__64216__delegate;
return G__64216;
})()
;
;})(seq__63869_64177,chunk__63870_64178,count__63871_64179,i__63872_64180,seq__63759,chunk__63761,count__63762,i__63763,fq,meth_str_64210,meth_sym_64211,env_64212,multi_method_var_64213,multi_method_64214,vec__63902_64206,meth_name_64207,f_64208,seq__63869_64200__$1,temp__5720__auto___64199,extend_via_metadata_64172,proto_ns_64173,pns_64174,pns_str_64175,vec__63865,proto,mmap))
})():f_64208));


var G__64221 = cljs.core.next(seq__63869_64200__$1);
var G__64222 = null;
var G__64223 = (0);
var G__64224 = (0);
seq__63869_64177 = G__64221;
chunk__63870_64178 = G__64222;
count__63871_64179 = G__64223;
i__63872_64180 = G__64224;
continue;
}
} else {
}
}
break;
}


var G__64225 = seq__63759;
var G__64226 = chunk__63761;
var G__64227 = count__63762;
var G__64228 = (i__63763 + (1));
seq__63759 = G__64225;
chunk__63761 = G__64226;
count__63762 = G__64227;
i__63763 = G__64228;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63759);
if(temp__5720__auto__){
var seq__63759__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63759__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__63759__$1);
var G__64229 = cljs.core.chunk_rest(seq__63759__$1);
var G__64230 = c__5565__auto__;
var G__64231 = cljs.core.count(c__5565__auto__);
var G__64232 = (0);
seq__63759 = G__64229;
chunk__63761 = G__64230;
count__63762 = G__64231;
i__63763 = G__64232;
continue;
} else {
var vec__63921 = cljs.core.first(seq__63759__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63921,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63921,(1),null);
var extend_via_metadata_64233 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_64234 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_64235 = sci.impl.vars.getName(proto_ns_64234);
var pns_str_64236 = (cljs.core.truth_(extend_via_metadata_64233)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_64235):null);
var seq__63925_64237 = cljs.core.seq(mmap);
var chunk__63926_64238 = null;
var count__63927_64239 = (0);
var i__63928_64240 = (0);
while(true){
if((i__63928_64240 < count__63927_64239)){
var vec__63965_64241 = chunk__63926_64238.cljs$core$IIndexed$_nth$arity$2(null,i__63928_64240);
var meth_name_64242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63965_64241,(0),null);
var f_64243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63965_64241,(1),null);
var meth_str_64244 = cljs.core.name(meth_name_64242);
var meth_sym_64245 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_64244);
var env_64246 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_64247 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_64246,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_64235,meth_sym_64245], null));
var multi_method_64248 = cljs.core.deref(multi_method_var_64247);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_64248,atype,(cljs.core.truth_(extend_via_metadata_64233)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_64236,meth_str_64244);
return ((function (seq__63925_64237,chunk__63926_64238,count__63927_64239,i__63928_64240,seq__63759,chunk__63761,count__63762,i__63763,fq,meth_str_64244,meth_sym_64245,env_64246,multi_method_var_64247,multi_method_64248,vec__63965_64241,meth_name_64242,f_64243,extend_via_metadata_64233,proto_ns_64234,pns_64235,pns_str_64236,vec__63921,proto,mmap,seq__63759__$1,temp__5720__auto__){
return (function() { 
var G__64249__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_64243,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_64243,this$,args);
}
};
var G__64249 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__64250__i = 0, G__64250__a = new Array(arguments.length -  1);
while (G__64250__i < G__64250__a.length) {G__64250__a[G__64250__i] = arguments[G__64250__i + 1]; ++G__64250__i;}
  args = new cljs.core.IndexedSeq(G__64250__a,0,null);
} 
return G__64249__delegate.call(this,this$,args);};
G__64249.cljs$lang$maxFixedArity = 1;
G__64249.cljs$lang$applyTo = (function (arglist__64251){
var this$ = cljs.core.first(arglist__64251);
var args = cljs.core.rest(arglist__64251);
return G__64249__delegate(this$,args);
});
G__64249.cljs$core$IFn$_invoke$arity$variadic = G__64249__delegate;
return G__64249;
})()
;
;})(seq__63925_64237,chunk__63926_64238,count__63927_64239,i__63928_64240,seq__63759,chunk__63761,count__63762,i__63763,fq,meth_str_64244,meth_sym_64245,env_64246,multi_method_var_64247,multi_method_64248,vec__63965_64241,meth_name_64242,f_64243,extend_via_metadata_64233,proto_ns_64234,pns_64235,pns_str_64236,vec__63921,proto,mmap,seq__63759__$1,temp__5720__auto__))
})():f_64243));


var G__64252 = seq__63925_64237;
var G__64253 = chunk__63926_64238;
var G__64254 = count__63927_64239;
var G__64255 = (i__63928_64240 + (1));
seq__63925_64237 = G__64252;
chunk__63926_64238 = G__64253;
count__63927_64239 = G__64254;
i__63928_64240 = G__64255;
continue;
} else {
var temp__5720__auto___64256__$1 = cljs.core.seq(seq__63925_64237);
if(temp__5720__auto___64256__$1){
var seq__63925_64257__$1 = temp__5720__auto___64256__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63925_64257__$1)){
var c__5565__auto___64260 = cljs.core.chunk_first(seq__63925_64257__$1);
var G__64261 = cljs.core.chunk_rest(seq__63925_64257__$1);
var G__64262 = c__5565__auto___64260;
var G__64263 = cljs.core.count(c__5565__auto___64260);
var G__64264 = (0);
seq__63925_64237 = G__64261;
chunk__63926_64238 = G__64262;
count__63927_64239 = G__64263;
i__63928_64240 = G__64264;
continue;
} else {
var vec__63975_64265 = cljs.core.first(seq__63925_64257__$1);
var meth_name_64266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63975_64265,(0),null);
var f_64267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63975_64265,(1),null);
var meth_str_64268 = cljs.core.name(meth_name_64266);
var meth_sym_64269 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_64268);
var env_64270 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_64271 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_64270,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_64235,meth_sym_64269], null));
var multi_method_64272 = cljs.core.deref(multi_method_var_64271);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_64272,atype,(cljs.core.truth_(extend_via_metadata_64233)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_64236,meth_str_64268);
return ((function (seq__63925_64237,chunk__63926_64238,count__63927_64239,i__63928_64240,seq__63759,chunk__63761,count__63762,i__63763,fq,meth_str_64268,meth_sym_64269,env_64270,multi_method_var_64271,multi_method_64272,vec__63975_64265,meth_name_64266,f_64267,seq__63925_64257__$1,temp__5720__auto___64256__$1,extend_via_metadata_64233,proto_ns_64234,pns_64235,pns_str_64236,vec__63921,proto,mmap,seq__63759__$1,temp__5720__auto__){
return (function() { 
var G__64273__delegate = function (this$,args){
var temp__5718__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var meth = temp__5718__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_64267,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_64267,this$,args);
}
};
var G__64273 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__64276__i = 0, G__64276__a = new Array(arguments.length -  1);
while (G__64276__i < G__64276__a.length) {G__64276__a[G__64276__i] = arguments[G__64276__i + 1]; ++G__64276__i;}
  args = new cljs.core.IndexedSeq(G__64276__a,0,null);
} 
return G__64273__delegate.call(this,this$,args);};
G__64273.cljs$lang$maxFixedArity = 1;
G__64273.cljs$lang$applyTo = (function (arglist__64277){
var this$ = cljs.core.first(arglist__64277);
var args = cljs.core.rest(arglist__64277);
return G__64273__delegate(this$,args);
});
G__64273.cljs$core$IFn$_invoke$arity$variadic = G__64273__delegate;
return G__64273;
})()
;
;})(seq__63925_64237,chunk__63926_64238,count__63927_64239,i__63928_64240,seq__63759,chunk__63761,count__63762,i__63763,fq,meth_str_64268,meth_sym_64269,env_64270,multi_method_var_64271,multi_method_64272,vec__63975_64265,meth_name_64266,f_64267,seq__63925_64257__$1,temp__5720__auto___64256__$1,extend_via_metadata_64233,proto_ns_64234,pns_64235,pns_str_64236,vec__63921,proto,mmap,seq__63759__$1,temp__5720__auto__))
})():f_64267));


var G__64280 = cljs.core.next(seq__63925_64257__$1);
var G__64281 = null;
var G__64282 = (0);
var G__64283 = (0);
seq__63925_64237 = G__64280;
chunk__63926_64238 = G__64281;
count__63927_64239 = G__64282;
i__63928_64240 = G__64283;
continue;
}
} else {
}
}
break;
}


var G__64284 = cljs.core.next(seq__63759__$1);
var G__64285 = null;
var G__64286 = (0);
var G__64287 = (0);
seq__63759 = G__64284;
chunk__63761 = G__64285;
count__63762 = G__64286;
i__63763 = G__64287;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq63756){
var G__63757 = cljs.core.first(seq63756);
var seq63756__$1 = cljs.core.next(seq63756);
var G__63758 = cljs.core.first(seq63756__$1);
var seq63756__$2 = cljs.core.next(seq63756__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63757,G__63758,seq63756__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__63985){
var vec__63986 = p__63985;
var seq__63987 = cljs.core.seq(vec__63986);
var first__63988 = cljs.core.first(seq__63987);
var seq__63987__$1 = cljs.core.next(seq__63987);
var args = first__63988;
var body = seq__63987__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__63982__auto__","farg__63982__auto__",1521027330,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__63983__auto__","m__63983__auto__",1994081567,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__63982__auto__","farg__63982__auto__",1521027330,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__63984__auto__","meth__63984__auto__",-1788039614,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__63983__auto__","m__63983__auto__",1994081567,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__63984__auto__","meth__63984__auto__",-1788039614,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64002){
var vec__64003 = p__64002;
var seq__64004 = cljs.core.seq(vec__64003);
var first__64005 = cljs.core.first(seq__64004);
var seq__64004__$1 = cljs.core.next(seq__64004);
var meth_name = first__64005;
var fn_body = seq__64004__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__63999_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__63999_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___64289 = arguments.length;
var i__5767__auto___64290 = (0);
while(true){
if((i__5767__auto___64290 < len__5766__auto___64289)){
args__5772__auto__.push((arguments[i__5767__auto___64290]));

var G__64291 = (i__5767__auto___64290 + (1));
i__5767__auto___64290 = G__64291;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__64015_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__64015_SHARP_)));
}),impls);
var protocol_var = (function (){var G__64029 = ctx;
var G__64030 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__64031 = protocol_name;
var fexpr__64028 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__64028.cljs$core$IFn$_invoke$arity$3 ? fexpr__64028.cljs$core$IFn$_invoke$arity$3(G__64029,G__64030,G__64031) : fexpr__64028.call(null,G__64029,G__64030,G__64031));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64038){
var vec__64039 = p__64038;
var seq__64040 = cljs.core.seq(vec__64039);
var first__64041 = cljs.core.first(seq__64040);
var seq__64040__$1 = cljs.core.next(seq__64040);
var type = first__64041;
var meths = seq__64040__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq64017){
var G__64018 = cljs.core.first(seq64017);
var seq64017__$1 = cljs.core.next(seq64017);
var G__64019 = cljs.core.first(seq64017__$1);
var seq64017__$2 = cljs.core.next(seq64017__$1);
var G__64020 = cljs.core.first(seq64017__$2);
var seq64017__$3 = cljs.core.next(seq64017__$2);
var G__64021 = cljs.core.first(seq64017__$3);
var seq64017__$4 = cljs.core.next(seq64017__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64018,G__64019,G__64020,G__64021,seq64017__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5772__auto__ = [];
var len__5766__auto___64293 = arguments.length;
var i__5767__auto___64294 = (0);
while(true){
if((i__5767__auto___64294 < len__5766__auto___64293)){
args__5772__auto__.push((arguments[i__5767__auto___64294]));

var G__64295 = (i__5767__auto___64294 + (1));
i__5767__auto___64294 = G__64295;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__64051_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__64051_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64062){
var vec__64065 = p__64062;
var seq__64066 = cljs.core.seq(vec__64065);
var first__64067 = cljs.core.first(seq__64066);
var seq__64066__$1 = cljs.core.next(seq__64066);
var proto = first__64067;
var meths = seq__64066__$1;
var protocol_var = (function (){var G__64069 = ctx;
var G__64070 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__64071 = proto;
var fexpr__64068 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__64068.cljs$core$IFn$_invoke$arity$3 ? fexpr__64068.cljs$core$IFn$_invoke$arity$3(G__64069,G__64070,G__64071) : fexpr__64068.call(null,G__64069,G__64070,G__64071));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq64052){
var G__64053 = cljs.core.first(seq64052);
var seq64052__$1 = cljs.core.next(seq64052);
var G__64054 = cljs.core.first(seq64052__$1);
var seq64052__$2 = cljs.core.next(seq64052__$1);
var G__64055 = cljs.core.first(seq64052__$2);
var seq64052__$3 = cljs.core.next(seq64052__$2);
var G__64056 = cljs.core.first(seq64052__$3);
var seq64052__$4 = cljs.core.next(seq64052__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64053,G__64054,G__64055,G__64056,seq64052__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__64079_SHARP_){
var temp__5720__auto__ = cljs.core.get_method(p1__64079_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
var ms = cljs.core.methods$(p1__64079_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5043__auto__ = (function (){var and__5041__auto__ = p;
if(cljs.core.truth_(and__5041__auto__)){
var pred__64095 = cljs.core._EQ_;
var expr__64096 = p;
if(cljs.core.truth_((pred__64095.cljs$core$IFn$_invoke$arity$2 ? pred__64095.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__64096) : pred__64095.call(null,cljs.core.IDeref,expr__64096)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__64095.cljs$core$IFn$_invoke$arity$2 ? pred__64095.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__64096) : pred__64095.call(null,cljs.core.ISwap,expr__64096)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__64095.cljs$core$IFn$_invoke$arity$2 ? pred__64095.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__64096) : pred__64095.call(null,cljs.core.IReset,expr__64096)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__64096)].join('')));
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
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5041__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5041__auto__){
var G__64114 = clazz;
var G__64114__$1 = (((G__64114 == null))?null:cljs.core.meta(G__64114));
if((G__64114__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__64114__$1);
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__64119_SHARP_){
return cljs.core.get_method(p1__64119_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
