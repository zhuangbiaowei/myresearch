goog.provide('frontend.search.node');

/**
* @constructor
 * @implements {frontend.search.protocol.Engine}
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
frontend.search.node.Node = (function (repo,__meta,__extmap,__hash){
this.repo = repo;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.search.node.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.search.node.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k42709,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__42714 = k42709;
var G__42714__$1 = (((G__42714 instanceof cljs.core.Keyword))?G__42714.fqn:null);
switch (G__42714__$1) {
case "repo":
return self__.repo;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42709,else__5343__auto__);

}
}));

(frontend.search.node.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__42717){
var vec__42718 = p__42717;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42718,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42718,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.search.node.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.search.node.Node{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null))], null),self__.__extmap));
}));

(frontend.search.node.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42708){
var self__ = this;
var G__42708__$1 = this;
return (new cljs.core.RecordIter((0),G__42708__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.search.node.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.search.node.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.search.node.Node(self__.repo,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.search.node.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(frontend.search.node.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1167415074 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.search.node.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42710,other42711){
var self__ = this;
var this42710__$1 = this;
return (((!((other42711 == null)))) && ((((this42710__$1.constructor === other42711.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42710__$1.repo,other42711.repo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42710__$1.__extmap,other42711.__extmap)))))));
}));

(frontend.search.node.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.search.node.Node(self__.repo,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.search.node.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k42709){
var self__ = this;
var this__5347__auto____$1 = this;
var G__42723 = k42709;
var G__42723__$1 = (((G__42723 instanceof cljs.core.Keyword))?G__42723.fqn:null);
switch (G__42723__$1) {
case "repo":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42709);

}
}));

(frontend.search.node.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__42708){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__42724 = cljs.core.keyword_identical_QMARK_;
var expr__42725 = k__5349__auto__;
if(cljs.core.truth_((pred__42724.cljs$core$IFn$_invoke$arity$2 ? pred__42724.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__42725) : pred__42724.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__42725)))){
return (new frontend.search.node.Node(G__42708,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.search.node.Node(self__.repo,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__42708),null));
}
}));

(frontend.search.node.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null))], null),self__.__extmap));
}));

(frontend.search.node.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__42708){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.search.node.Node(self__.repo,G__42708,self__.__extmap,self__.__hash));
}));

(frontend.search.node.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$query$arity$3 = (function (_this,q,opts){
var self__ = this;
var _this__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["search-blocks",self__.repo,q,opts], 0)),(function (result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs_bean.core.__GT_clj(result),(function (result__$1){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42728){
var map__42729 = p__42728;
var map__42729__$1 = cljs.core.__destructure_map(map__42729);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42729__$1,new cljs.core.Keyword(null,"content","content",15833224));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42729__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42729__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","content","block/content",-161885195),content,new cljs.core.Keyword("block","page","block/page",822314108),page], null);
}),result__$1));
}));
}));
}));
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$cache_stale_QMARK_$arity$2 = (function (_this,repo__$1){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["searchVersionChanged?",repo__$1], 0));
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var indice = frontend.search.db.build_blocks_indice(self__.repo);
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rebuild-blocks-indice",self__.repo,indice], 0));
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 = (function (_this,data){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["transact-blocks",self__.repo,cljs_bean.core.__GT_js(data)], 0));
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["truncate-blocks",self__.repo], 0));
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$remove_db_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remove-db",self__.repo], 0));
}));

(frontend.search.node.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"repo","repo",-358529152,null)], null);
}));

(frontend.search.node.Node.cljs$lang$type = true);

(frontend.search.node.Node.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.search.node/Node",null,(1),null));
}));

(frontend.search.node.Node.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.search.node/Node");
}));

/**
 * Positional factory function for frontend.search.node/Node.
 */
frontend.search.node.__GT_Node = (function frontend$search$node$__GT_Node(repo){
return (new frontend.search.node.Node(repo,null,null,null));
});

/**
 * Factory function for frontend.search.node/Node, taking a map of keywords to field values.
 */
frontend.search.node.map__GT_Node = (function frontend$search$node$map__GT_Node(G__42712){
var extmap__5382__auto__ = (function (){var G__42743 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42712,new cljs.core.Keyword(null,"repo","repo",-1999060679));
if(cljs.core.record_QMARK_(G__42712)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42743);
} else {
return G__42743;
}
})();
return (new frontend.search.node.Node(new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__42712),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.search.node.js.map
