goog.provide('datascript.query');
datascript.query._STAR_query_cache_STAR_ = datascript.lru.cache((100));



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
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57939,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57943 = k57939;
var G__57943__$1 = (((G__57943 instanceof cljs.core.Keyword))?G__57943.fqn:null);
switch (G__57943__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57939,else__5343__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57944){
var vec__57945 = p__57944;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57945,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57945,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.query.Context{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57938){
var self__ = this;
var G__57938__$1 = this;
return (new cljs.core.RecordIter((0),G__57938__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57940,other57941){
var self__ = this;
var this57940__$1 = this;
return (((!((other57941 == null)))) && ((((this57940__$1.constructor === other57941.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57940__$1.rels,other57941.rels)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57940__$1.sources,other57941.sources)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57940__$1.rules,other57941.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57940__$1.__extmap,other57941.__extmap)))))))))));
}));

(datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57939){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57948 = k57939;
var G__57948__$1 = (((G__57948 instanceof cljs.core.Keyword))?G__57948.fqn:null);
switch (G__57948__$1) {
case "rels":
case "sources":
case "rules":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57939);

}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57938){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57949 = cljs.core.keyword_identical_QMARK_;
var expr__57950 = k__5349__auto__;
if(cljs.core.truth_((pred__57949.cljs$core$IFn$_invoke$arity$2 ? pred__57949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rels","rels",1770187185),expr__57950) : pred__57949.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__57950)))){
return (new datascript.query.Context(G__57938,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57949.cljs$core$IFn$_invoke$arity$2 ? pred__57949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424),expr__57950) : pred__57949.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__57950)))){
return (new datascript.query.Context(self__.rels,G__57938,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57949.cljs$core$IFn$_invoke$arity$2 ? pred__57949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366),expr__57950) : pred__57949.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__57950)))){
return (new datascript.query.Context(self__.rels,self__.sources,G__57938,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57938),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57938){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__57938,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
}));

(datascript.query.Context.cljs$lang$type = true);

(datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
}));

(datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.query/Context");
}));

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__57942){
var extmap__5382__auto__ = (function (){var G__57955 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57942,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__57942)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57955);
} else {
return G__57955;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__57942),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__57942),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__57942),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57957,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57962 = k57957;
var G__57962__$1 = (((G__57962 instanceof cljs.core.Keyword))?G__57962.fqn:null);
switch (G__57962__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57957,else__5343__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57963){
var vec__57965 = p__57963;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57965,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57965,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.query.Relation{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57956){
var self__ = this;
var G__57956__$1 = this;
return (new cljs.core.RecordIter((0),G__57956__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57958,other57959){
var self__ = this;
var this57958__$1 = this;
return (((!((other57959 == null)))) && ((((this57958__$1.constructor === other57959.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57958__$1.attrs,other57959.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57958__$1.tuples,other57959.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57958__$1.__extmap,other57959.__extmap)))))))));
}));

(datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57957){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57969 = k57957;
var G__57969__$1 = (((G__57969 instanceof cljs.core.Keyword))?G__57969.fqn:null);
switch (G__57969__$1) {
case "attrs":
case "tuples":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57957);

}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57956){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57970 = cljs.core.keyword_identical_QMARK_;
var expr__57971 = k__5349__auto__;
if(cljs.core.truth_((pred__57970.cljs$core$IFn$_invoke$arity$2 ? pred__57970.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57971) : pred__57970.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57971)))){
return (new datascript.query.Relation(G__57956,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57970.cljs$core$IFn$_invoke$arity$2 ? pred__57970.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__57971) : pred__57970.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__57971)))){
return (new datascript.query.Relation(self__.attrs,G__57956,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57956),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57956){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__57956,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
}));

(datascript.query.Relation.cljs$lang$type = true);

(datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
}));

(datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.query/Relation");
}));

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__57961){
var extmap__5382__auto__ = (function (){var G__57975 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57961,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__57961)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57975);
} else {
return G__57975;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__57961),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__57961),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__5772__auto__ = [];
var len__5766__auto___58441 = arguments.length;
var i__5767__auto___58442 = (0);
while(true){
if((i__5767__auto___58442 < len__5766__auto___58441)){
args__5772__auto__.push((arguments[i__5767__auto___58442]));

var G__58443 = (i__5767__auto___58442 + (1));
i__5767__auto___58442 = G__58443;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
}));

(datascript.query.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.concatv.cljs$lang$applyTo = (function (seq57977){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57977));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__57982 = arguments.length;
switch (G__57982) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___58445 = arguments.length;
var i__5767__auto___58446 = (0);
while(true){
if((i__5767__auto___58446 < len__5766__auto___58445)){
args_arr__5791__auto__.push((arguments[i__5767__auto___58446]));

var G__58447 = (i__5767__auto___58446 + (1));
i__5767__auto___58446 = G__58447;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
}));

(datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
}));

/** @this {Function} */
(datascript.query.zip.cljs$lang$applyTo = (function (seq57979){
var G__57980 = cljs.core.first(seq57979);
var seq57979__$1 = cljs.core.next(seq57979);
var G__57981 = cljs.core.first(seq57979__$1);
var seq57979__$2 = cljs.core.next(seq57979__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57980,G__57981,seq57979__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (((cljs.core.every_QMARK_((function (p1__57984_SHARP_){
return cljs.core.contains_QMARK_(b,p1__57984_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__57985_SHARP_){
return cljs.core.contains_QMARK_(b,p1__57985_SHARP_);
}),cljs.core.keys(a))))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__57986){
var vec__57987 = p__57986;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57987,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57987,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__57991){
var vec__57992 = p__57991;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57992,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57992,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__5633__auto___58449 = l1;
var i_58450 = (0);
while(true){
if((i_58450 < n__5633__auto___58449)){
(res[i_58450] = (t1[(idxs1[i_58450])]));

var G__58452 = (i_58450 + (1));
i_58450 = G__58452;
continue;
} else {
}
break;
}

var n__5633__auto___58453 = l2;
var i_58454 = (0);
while(true){
if((i_58454 < n__5633__auto___58453)){
(res[(l1 + i_58454)] = (t2[(idxs2[i_58454])]));

var G__58455 = (i_58454 + (1));
i_58454 = G__58455;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__57996 = a;
var map__57996__$1 = cljs.core.__destructure_map(map__57996);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57996__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__57997 = b;
var map__57997__$1 = cljs.core.__destructure_map(map__57997);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57997__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__5520__auto__ = (function datascript$query$sum_rel_$_iter__57998(s__57999){
return (new cljs.core.LazySeq(null,(function (){
var s__57999__$1 = s__57999;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57999__$1);
if(temp__5720__auto__){
var s__57999__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57999__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__57999__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58001 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58000 = (0);
while(true){
if((i__58000 < size__5519__auto__)){
var vec__58002 = cljs.core._nth(c__5518__auto__,i__58000);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58002,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58002,(1),null);
cljs.core.chunk_append(b__58001,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__58456 = (i__58000 + (1));
i__58000 = G__58456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58001),datascript$query$sum_rel_$_iter__57998(cljs.core.chunk_rest(s__57999__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58001),null);
}
} else {
var vec__58006 = cljs.core.first(s__57999__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58006,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58006,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__57998(cljs.core.rest(s__57999__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__58009_58457 = cljs.core.seq(idxb__GT_idxa);
var chunk__58010_58458 = null;
var count__58011_58459 = (0);
var i__58012_58460 = (0);
while(true){
if((i__58012_58460 < count__58011_58459)){
var vec__58019_58461 = chunk__58010_58458.cljs$core$IIndexed$_nth$arity$2(null,i__58012_58460);
var idx_b_58462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58019_58461,(0),null);
var idx_a_58463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58019_58461,(1),null);
(tuple_SINGLEQUOTE_[idx_a_58463] = (tuple_b[idx_b_58462]));


var G__58464 = seq__58009_58457;
var G__58465 = chunk__58010_58458;
var G__58466 = count__58011_58459;
var G__58467 = (i__58012_58460 + (1));
seq__58009_58457 = G__58464;
chunk__58010_58458 = G__58465;
count__58011_58459 = G__58466;
i__58012_58460 = G__58467;
continue;
} else {
var temp__5720__auto___58468 = cljs.core.seq(seq__58009_58457);
if(temp__5720__auto___58468){
var seq__58009_58469__$1 = temp__5720__auto___58468;
if(cljs.core.chunked_seq_QMARK_(seq__58009_58469__$1)){
var c__5565__auto___58470 = cljs.core.chunk_first(seq__58009_58469__$1);
var G__58471 = cljs.core.chunk_rest(seq__58009_58469__$1);
var G__58472 = c__5565__auto___58470;
var G__58473 = cljs.core.count(c__5565__auto___58470);
var G__58474 = (0);
seq__58009_58457 = G__58471;
chunk__58010_58458 = G__58472;
count__58011_58459 = G__58473;
i__58012_58460 = G__58474;
continue;
} else {
var vec__58023_58475 = cljs.core.first(seq__58009_58469__$1);
var idx_b_58476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58023_58475,(0),null);
var idx_a_58477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58023_58475,(1),null);
(tuple_SINGLEQUOTE_[idx_a_58477] = (tuple_b[idx_b_58476]));


var G__58478 = cljs.core.next(seq__58009_58469__$1);
var G__58479 = null;
var G__58480 = (0);
var G__58481 = (0);
seq__58009_58457 = G__58478;
chunk__58010_58458 = G__58479;
count__58011_58459 = G__58480;
i__58012_58460 = G__58481;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
}),cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap(cljs.core.keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a,attrs_b], 0))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__58026 = (function (){var G__58028 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__58029 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__58028,G__58029) : datascript.query.sum_rel.call(null,G__58028,G__58029));
})();
var G__58027 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__58026,G__58027) : datascript.query.sum_rel.call(null,G__58026,G__58027));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__58032 = arguments.length;
switch (G__58032) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
}));

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
}),acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
}));

(datascript.query.prod_rel.cljs$lang$maxFixedArity = 2);

datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
datascript.parser.parse_rules(rules__$1);

return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

var datascript$query$IBinding$in__GT_rel$dyn_58484 = (function (binding,value){
var x__5390__auto__ = (((binding == null))?null:binding);
var m__5391__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__5391__auto__.call(null,binding,value));
} else {
var m__5389__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__5389__auto__.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
});
datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
return datascript$query$IBinding$in__GT_rel$dyn_58484(binding,value);
}
});

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
}));

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
}));

(datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58034_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__58034_SHARP_);
}),coll));

}
}
}));

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(binding__$1.bindings))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not enough elements in a collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to bind tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__58035_SHARP_,p2__58036_SHARP_){
return datascript.query.in__GT_rel(p1__58035_SHARP_,p2__58036_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__58041){
var vec__58043 = p__58041;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58043,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58043,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
var cb = cljs.core.count(bindings);
var cv = cljs.core.count(values);
if((cb < cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Extra inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58049_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__58049_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
if((cb > cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Too few inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58050_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__58050_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));

}
}
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
} else {
return (function (tuple){
return (tuple[idx]);
});
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map((function (p1__58053_SHARP_){
return (p1__58053_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__58053_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__58053_SHARP_.call(null,tuple));
})));
});
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5722__auto__ = cljs.core.first(tuples__$1);
if((temp__5722__auto__ == null)){
return cljs.core.persistent_BANG_(hash_table);
} else {
var tuple = temp__5722__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__58486 = cljs.core.next(tuples__$1);
var G__58487 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__58486;
hash_table = G__58487;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58057_SHARP_){
return datascript.query.getter_fn(attrs1,p1__58057_SHARP_);
}),common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58058_SHARP_){
return datascript.query.getter_fn(attrs2,p1__58058_SHARP_);
}),common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5722__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5722__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
}),acc,tuples1__$1);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__58063 = a;
var map__58063__$1 = cljs.core.__destructure_map(map__58063);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58063__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__58064 = b;
var map__58064__$1 = cljs.core.__destructure_map(map__58064);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58064__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58064__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys(attrs_a,attrs_b);
var getters_b = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58060_SHARP_){
return datascript.query.getter_fn(attrs_b,p1__58060_SHARP_);
}),attrs);
var key_fn_b = datascript.query.tuple_key_fn(getters_b);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var getters_a = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58061_SHARP_){
return datascript.query.getter_fn(attrs_a,p1__58061_SHARP_);
}),attrs);
var key_fn_a = datascript.query.tuple_key_fn(getters_a);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv((function (p1__58062_SHARP_){
return ((function (){var G__58066 = (key_fn_a.cljs$core$IFn$_invoke$arity$1 ? key_fn_a.cljs$core$IFn$_invoke$arity$1(p1__58062_SHARP_) : key_fn_a.call(null,p1__58062_SHARP_));
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__58066) : hash.call(null,G__58066));
})() == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58067_SHARP_){
if((p1__58067_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__58067_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58069){
var vec__58070 = p__58069;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58070,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58070,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__5041__auto__ = tuple__$1;
if(cljs.core.truth_(and__5041__auto__)){
return pattern__$1;
} else {
return and__5041__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))){
var G__58491 = cljs.core.next(tuple__$1);
var G__58492 = cljs.core.next(pattern__$1);
tuple__$1 = G__58491;
pattern__$1 = G__58492;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58074_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__58074_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58075){
var vec__58076 = p__58075;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58076,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58076,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5722__auto__ = cljs.core.first(rels__$1);
if((temp__5722__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5722__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__58493 = cljs.core.next(rels__$1);
var G__58494 = datascript.query.hash_join(rel,new_rel__$1);
var G__58495 = acc;
rels__$1 = G__58493;
new_rel__$1 = G__58494;
acc = G__58495;
continue;
} else {
var G__58497 = cljs.core.next(rels__$1);
var G__58498 = new_rel__$1;
var G__58499 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__58497;
new_rel__$1 = G__58498;
acc = G__58499;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__58083_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__58083_SHARP_),sym)){
return p1__58083_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5724__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5724__auto__ == null)){
return null;
} else {
var rel = temp__5724__auto__;
var temp__5724__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5724__auto____$1 == null)){
return null;
} else {
var tuple = temp__5724__auto____$1;
return (tuple[(function (){var fexpr__58084 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__58084.cljs$core$IFn$_invoke$arity$1 ? fexpr__58084.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__58084.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__58086_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__58086_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58087_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__58087_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__58088_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__58088_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__5633__auto___58501 = len;
var i_58502 = (0);
while(true){
if((i_58502 < n__5633__auto___58501)){
var arg_58503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_58502);
if((arg_58503 instanceof cljs.core.Symbol)){
var temp__5722__auto___58504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_58503);
if((temp__5722__auto___58504 == null)){
(tuples_args[i_58502] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_58503));
} else {
var source_58505 = temp__5722__auto___58504;
(static_args[i_58502] = source_58505);
}
} else {
(static_args[i_58502] = arg_58503);
}

var G__58506 = (i_58502 + (1));
i_58502 = G__58506;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__5633__auto___58507 = len;
var i_58508 = (0);
while(true){
if((i_58508 < n__5633__auto___58507)){
var temp__5724__auto___58509 = (tuples_args[i_58508]);
if((temp__5724__auto___58509 == null)){
} else {
var tuple_idx_58510 = temp__5724__auto___58509;
var v_58511 = (tuple[tuple_idx_58510]);
(args__$1[i_58508] = v_58511);
}

var G__58512 = (i_58508 + (1));
i_58508 = G__58512;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__5633__auto___58513 = len;
var i_58514 = (0);
while(true){
if((i_58514 < n__5633__auto___58513)){
var temp__5724__auto___58515 = (tuples_args[i_58514]);
if((temp__5724__auto___58515 == null)){
} else {
var tuple_idx_58516 = temp__5724__auto___58515;
var v_58517 = (tuple[tuple_idx_58516]);
(static_args[i_58514] = v_58517);
}

var G__58518 = (i_58514 + (1));
i_58514 = G__58518;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__58093 = clause;
var vec__58096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58093,(0),null);
var seq__58097 = cljs.core.seq(vec__58096);
var first__58098 = cljs.core.first(seq__58097);
var seq__58097__$1 = cljs.core.next(seq__58097);
var f = first__58098;
var args = seq__58097__$1;
var pred = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.query_fns,f);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown predicate '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__58099 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58099,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58099,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__58091_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__58091_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__58103 = clause;
var vec__58106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58103,(0),null);
var seq__58107 = cljs.core.seq(vec__58106);
var first__58108 = cljs.core.first(seq__58107);
var seq__58107__$1 = cljs.core.next(seq__58107);
var f = first__58108;
var args = seq__58107__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58103,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.query_fns,f);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown function '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__58109 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58109,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58109,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__5520__auto__ = (function datascript$query$bind_by_fn_$_iter__58112(s__58113){
return (new cljs.core.LazySeq(null,(function (){
var s__58113__$1 = s__58113;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58113__$1);
if(temp__5720__auto__){
var s__58113__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58113__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58113__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58115 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58114 = (0);
while(true){
if((i__58114 < size__5519__auto__)){
var tuple = cljs.core._nth(c__5518__auto__,i__58114);
var val = tuple_fn(tuple);
if((!((val == null)))){
cljs.core.chunk_append(b__58115,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__58521 = (i__58114 + (1));
i__58114 = G__58521;
continue;
} else {
var G__58522 = (i__58114 + (1));
i__58114 = G__58522;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58115),datascript$query$bind_by_fn_$_iter__58112(cljs.core.chunk_rest(s__58113__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58115),null);
}
} else {
var tuple = cljs.core.first(s__58113__$2);
var val = tuple_fn(tuple);
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__58112(cljs.core.rest(s__58113__$2)));
} else {
var G__58528 = cljs.core.rest(s__58113__$2);
s__58113__$1 = G__58528;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
if((!(cljs.core.sequential_QMARK_(clause)))){
return false;
} else {
var head = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause));
if((!((head instanceof cljs.core.Symbol)))){
return false;
} else {
if(datascript.query.free_var_QMARK_(head)){
return false;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null], null), null),head)){
return false;
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),head)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause], null));
} else {
return true;

}
}
}
}
}
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__58119 = clause;
var seq__58120 = cljs.core.seq(vec__58119);
var first__58121 = cljs.core.first(seq__58120);
var seq__58120__$1 = cljs.core.next(seq__58120);
var rule = first__58121;
var call_args = seq__58120__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__5520__auto__ = (function datascript$query$expand_rule_$_iter__58122(s__58123){
return (new cljs.core.LazySeq(null,(function (){
var s__58123__$1 = s__58123;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58123__$1);
if(temp__5720__auto__){
var s__58123__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58123__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58123__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58125 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58124 = (0);
while(true){
if((i__58124 < size__5519__auto__)){
var branch = cljs.core._nth(c__5518__auto__,i__58124);
var vec__58126 = branch;
var seq__58127 = cljs.core.seq(vec__58126);
var first__58128 = cljs.core.first(seq__58127);
var seq__58127__$1 = cljs.core.next(seq__58127);
var vec__58129 = first__58128;
var seq__58130 = cljs.core.seq(vec__58129);
var first__58131 = cljs.core.first(seq__58130);
var seq__58130__$1 = cljs.core.next(seq__58130);
var _ = first__58131;
var rule_args = seq__58130__$1;
var clauses = seq__58127__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__58125,clojure.walk.postwalk(((function (i__58124,vec__58126,seq__58127,first__58128,seq__58127__$1,vec__58129,seq__58130,first__58131,seq__58130__$1,_,rule_args,clauses,replacements,branch,c__5518__auto__,size__5519__auto__,b__58125,s__58123__$2,temp__5720__auto__,vec__58119,seq__58120,first__58121,seq__58120__$1,rule,call_args,seqid,branches){
return (function (p1__58117_SHARP_){
if(datascript.query.free_var_QMARK_(p1__58117_SHARP_)){
var x__54146__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__58117_SHARP_) : replacements.call(null,p1__58117_SHARP_));
if((x__54146__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__58117_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__54146__auto__;
}
} else {
return p1__58117_SHARP_;
}
});})(i__58124,vec__58126,seq__58127,first__58128,seq__58127__$1,vec__58129,seq__58130,first__58131,seq__58130__$1,_,rule_args,clauses,replacements,branch,c__5518__auto__,size__5519__auto__,b__58125,s__58123__$2,temp__5720__auto__,vec__58119,seq__58120,first__58121,seq__58120__$1,rule,call_args,seqid,branches))
,clauses));

var G__58536 = (i__58124 + (1));
i__58124 = G__58536;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58125),datascript$query$expand_rule_$_iter__58122(cljs.core.chunk_rest(s__58123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58125),null);
}
} else {
var branch = cljs.core.first(s__58123__$2);
var vec__58133 = branch;
var seq__58134 = cljs.core.seq(vec__58133);
var first__58135 = cljs.core.first(seq__58134);
var seq__58134__$1 = cljs.core.next(seq__58134);
var vec__58136 = first__58135;
var seq__58137 = cljs.core.seq(vec__58136);
var first__58138 = cljs.core.first(seq__58137);
var seq__58137__$1 = cljs.core.next(seq__58137);
var _ = first__58138;
var rule_args = seq__58137__$1;
var clauses = seq__58134__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__58133,seq__58134,first__58135,seq__58134__$1,vec__58136,seq__58137,first__58138,seq__58137__$1,_,rule_args,clauses,replacements,branch,s__58123__$2,temp__5720__auto__,vec__58119,seq__58120,first__58121,seq__58120__$1,rule,call_args,seqid,branches){
return (function (p1__58117_SHARP_){
if(datascript.query.free_var_QMARK_(p1__58117_SHARP_)){
var x__54146__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__58117_SHARP_) : replacements.call(null,p1__58117_SHARP_));
if((x__54146__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__58117_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__54146__auto__;
}
} else {
return p1__58117_SHARP_;
}
});})(vec__58133,seq__58134,first__58135,seq__58134__$1,vec__58136,seq__58137,first__58138,seq__58137__$1,_,rule_args,clauses,replacements,branch,s__58123__$2,temp__5720__auto__,vec__58119,seq__58120,first__58121,seq__58120__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__58122(cljs.core.rest(s__58123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58140){
var vec__58141 = p__58140;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58141,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58141,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__58145 = rule_clause;
var seq__58146 = cljs.core.seq(vec__58145);
var first__58147 = cljs.core.first(seq__58146);
var seq__58146__$1 = cljs.core.next(seq__58146);
var rule = first__58147;
var call_args = seq__58146__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__5520__auto__ = (function datascript$query$rule_gen_guards_$_iter__58148(s__58149){
return (new cljs.core.LazySeq(null,(function (){
var s__58149__$1 = s__58149;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58149__$1);
if(temp__5720__auto__){
var s__58149__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58149__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58149__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58151 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58150 = (0);
while(true){
if((i__58150 < size__5519__auto__)){
var prev_args = cljs.core._nth(c__5518__auto__,i__58150);
var vec__58152 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58152,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58152,(1),null);
cljs.core.chunk_append(b__58151,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__58544 = (i__58150 + (1));
i__58150 = G__58544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58151),datascript$query$rule_gen_guards_$_iter__58148(cljs.core.chunk_rest(s__58149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58151),null);
}
} else {
var prev_args = cljs.core.first(s__58149__$2);
var vec__58156 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58156,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58156,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__58148(cljs.core.rest(s__58149__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (p1__58159_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__58159_SHARP_) : pred.call(null,p1__58159_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__58159_SHARP_);
} else {
}

return p1__58159_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__58160){
var vec__58161 = p__58160;
var vec__58164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58161,(0),null);
var seq__58165 = cljs.core.seq(vec__58164);
var first__58166 = cljs.core.first(seq__58165);
var seq__58165__$1 = cljs.core.next(seq__58165);
var _ = first__58166;
var vars = seq__58165__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});
var empty_rels_QMARK_ = (function (context__$1){
return cljs.core.some((function (p1__58167_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__58167_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5722__auto__ = cljs.core.first(stack);
if((temp__5722__auto__ == null)){
return rel;
} else {
var frame = temp__5722__auto__;
var vec__58193 = cljs.core.split_with(((function (stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__58168_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__58168_SHARP_)));
});})(stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193,(0),null);
var vec__58196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58193,(1),null);
var seq__58197 = cljs.core.seq(vec__58196);
var first__58198 = cljs.core.first(seq__58197);
var seq__58197__$1 = cljs.core.next(seq__58197);
var rule_clause = first__58198;
var next_clauses = seq__58197__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__58547 = cljs.core.next(stack);
var G__58548 = datascript.query.sum_rel(rel,new_rel);
stack = G__58547;
rel = G__58548;
continue;
} else {
var vec__58202 = rule_clause;
var seq__58203 = cljs.core.seq(vec__58202);
var first__58204 = cljs.core.first(seq__58203);
var seq__58203__$1 = cljs.core.next(seq__58203);
var rule = first__58204;
var call_args = seq__58203__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__58205 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58205,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58205,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__58202,seq__58203,first__58204,seq__58203__$1,rule,call_args,guards,vec__58205,active_gs,pending_gs,vec__58193,clauses,vec__58196,seq__58197,first__58198,seq__58197__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__58169_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__58169_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__58202,seq__58203,first__58204,seq__58203__$1,rule,call_args,guards,vec__58205,active_gs,pending_gs,vec__58193,clauses,vec__58196,seq__58197,first__58198,seq__58197__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__58557 = cljs.core.next(stack);
var G__58558 = rel;
stack = G__58557;
rel = G__58558;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__58559 = cljs.core.next(stack);
var G__58560 = rel;
stack = G__58559;
rel = G__58560;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__58561 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5520__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__58202,seq__58203,first__58204,seq__58203__$1,rule,call_args,guards,vec__58205,active_gs,pending_gs,vec__58193,clauses,vec__58196,seq__58197,first__58198,seq__58197__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__58209(s__58210){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__58202,seq__58203,first__58204,seq__58203__$1,rule,call_args,guards,vec__58205,active_gs,pending_gs,vec__58193,clauses,vec__58196,seq__58197,first__58198,seq__58197__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__58210__$1 = s__58210;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58210__$1);
if(temp__5720__auto__){
var s__58210__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58210__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58210__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58212 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58211 = (0);
while(true){
if((i__58211 < size__5519__auto__)){
var branch = cljs.core._nth(c__5518__auto__,i__58211);
cljs.core.chunk_append(b__58212,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__58570 = (i__58211 + (1));
i__58211 = G__58570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58212),datascript$query$solve_rule_$_iter__58209(cljs.core.chunk_rest(s__58210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58212),null);
}
} else {
var branch = cljs.core.first(s__58210__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__58209(cljs.core.rest(s__58210__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__58202,seq__58203,first__58204,seq__58203__$1,rule,call_args,guards,vec__58205,active_gs,pending_gs,vec__58193,clauses,vec__58196,seq__58197,first__58198,seq__58197__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__58202,seq__58203,first__58204,seq__58203__$1,rule,call_args,guards,vec__58205,active_gs,pending_gs,vec__58193,clauses,vec__58196,seq__58197,first__58198,seq__58197__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__5520__auto__(branches);
})(),cljs.core.next(stack));
var G__58562 = rel;
stack = G__58561;
rel = G__58562;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__58215 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5043__auto__ = datascript.query.lookup_ref_QMARK_(e);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return datascript.query.attr_QMARK_(e);
}
})())?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__5041__auto__ = v;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = datascript.query.attr_QMARK_(a);
if(and__5041__auto____$1){
var and__5041__auto____$2 = datascript.db.ref_QMARK_(source,a);
if(and__5041__auto____$2){
var or__5043__auto__ = datascript.query.lookup_ref_QMARK_(v);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return datascript.query.attr_QMARK_(v);
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__58220 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58220,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58220,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58220,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58220,(3),null);
var G__58223 = cljs.core.PersistentHashSet.EMPTY;
var G__58223__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58223,e):G__58223);
var G__58223__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58223__$1,tx):G__58223__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58223__$2,v);
} else {
return G__58223__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5724__auto__ = cljs.core.not_empty(cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5724__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5724__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__58225_SHARP_){
return datascript.query.limit_rel(p1__58225_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.bound_vars = (function datascript$query$bound_vars(context){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58228_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__58228_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
});
datascript.query.check_bound = (function datascript$query$check_bound(bound,vars,form){
if(clojure.set.subset_QMARK_(vars,bound)){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query.check_free_same = (function datascript$query$check_free_same(bound,branches,form){
var free = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58231_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(datascript.query.collect_vars(p1__58231_SHARP_),bound);
}),branches);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,free))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([free], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),free], null));
}
});
datascript.query.check_free_subset = (function datascript$query$check_free_subset(bound,vars,branches){
var free = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(bound,vars));
var seq__58233 = cljs.core.seq(branches);
var chunk__58234 = null;
var count__58235 = (0);
var i__58236 = (0);
while(true){
if((i__58236 < count__58235)){
var branch = chunk__58234.cljs$core$IIndexed$_nth$arity$2(null,i__58236);
var temp__5724__auto___58576 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5724__auto___58576 == null)){
} else {
var missing_58577 = temp__5724__auto___58576;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_58577], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_58577], null));
}


var G__58578 = seq__58233;
var G__58579 = chunk__58234;
var G__58580 = count__58235;
var G__58581 = (i__58236 + (1));
seq__58233 = G__58578;
chunk__58234 = G__58579;
count__58235 = G__58580;
i__58236 = G__58581;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58233);
if(temp__5720__auto__){
var seq__58233__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58233__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__58233__$1);
var G__58582 = cljs.core.chunk_rest(seq__58233__$1);
var G__58583 = c__5565__auto__;
var G__58584 = cljs.core.count(c__5565__auto__);
var G__58585 = (0);
seq__58233 = G__58582;
chunk__58234 = G__58583;
count__58235 = G__58584;
i__58236 = G__58585;
continue;
} else {
var branch = cljs.core.first(seq__58233__$1);
var temp__5724__auto___58586 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5724__auto___58586 == null)){
} else {
var missing_58591 = temp__5724__auto___58586;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_58591], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_58591], null));
}


var G__58595 = cljs.core.next(seq__58233__$1);
var G__58596 = null;
var G__58597 = (0);
var G__58598 = (0);
seq__58233 = G__58595;
chunk__58234 = G__58596;
count__58235 = G__58597;
i__58236 = G__58598;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__58244 = arguments.length;
switch (G__58244) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
}));

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__58245 = datascript.query.looks_like_QMARK_;
var expr__58246 = clause;
if(cljs.core.truth_((function (){var G__58249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__58250 = expr__58246;
return (pred__58245.cljs$core$IFn$_invoke$arity$2 ? pred__58245.cljs$core$IFn$_invoke$arity$2(G__58249,G__58250) : pred__58245.call(null,G__58249,G__58250));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__58255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__58256 = expr__58246;
return (pred__58245.cljs$core$IFn$_invoke$arity$2 ? pred__58245.cljs$core$IFn$_invoke$arity$2(G__58255,G__58256) : pred__58245.call(null,G__58255,G__58256));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__58257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58258 = expr__58246;
return (pred__58245.cljs$core$IFn$_invoke$arity$2 ? pred__58245.cljs$core$IFn$_invoke$arity$2(G__58257,G__58258) : pred__58245.call(null,G__58257,G__58258));
})())){
var vec__58259 = clause;
var seq__58260 = cljs.core.seq(vec__58259);
var first__58261 = cljs.core.first(seq__58260);
var seq__58260__$1 = cljs.core.next(seq__58260);
var source_sym = first__58261;
var rest = seq__58260__$1;
var _STAR_implicit_source_STAR__orig_val__58266 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__58267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__58267);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__58266);
}} else {
if(cljs.core.truth_((function (){var G__58268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58269 = expr__58246;
return (pred__58245.cljs$core$IFn$_invoke$arity$2 ? pred__58245.cljs$core$IFn$_invoke$arity$2(G__58268,G__58269) : pred__58245.call(null,G__58268,G__58269));
})())){
var vec__58270 = clause;
var seq__58271 = cljs.core.seq(vec__58270);
var first__58272 = cljs.core.first(seq__58271);
var seq__58271__$1 = cljs.core.next(seq__58271);
var _ = first__58272;
var branches = seq__58271__$1;
var ___$1 = datascript.query.check_free_same(datascript.query.bound_vars(context),branches,clause);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__58270,seq__58271,first__58272,seq__58271__$1,_,branches,___$1,pred__58245,expr__58246){
return (function (p1__58238_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__58238_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__58238_SHARP_));
});})(context,clause,orig_clause,vec__58270,seq__58271,first__58272,seq__58271__$1,_,branches,___$1,pred__58245,expr__58246))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__58270,seq__58271,first__58272,seq__58271__$1,_,branches,___$1,contexts,pred__58245,expr__58246){
return (function (p1__58239_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__58239_SHARP_));
});})(context,clause,orig_clause,vec__58270,seq__58271,first__58272,seq__58271__$1,_,branches,___$1,contexts,pred__58245,expr__58246))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__58274 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58275 = expr__58246;
return (pred__58245.cljs$core$IFn$_invoke$arity$2 ? pred__58245.cljs$core$IFn$_invoke$arity$2(G__58274,G__58275) : pred__58245.call(null,G__58274,G__58275));
})())){
var vec__58276 = clause;
var seq__58277 = cljs.core.seq(vec__58276);
var first__58278 = cljs.core.first(seq__58277);
var seq__58277__$1 = cljs.core.next(seq__58277);
var _ = first__58278;
var first__58278__$1 = cljs.core.first(seq__58277__$1);
var seq__58277__$2 = cljs.core.next(seq__58277__$1);
var vec__58279 = first__58278__$1;
var seq__58280 = cljs.core.seq(vec__58279);
var first__58281 = cljs.core.first(seq__58280);
var seq__58280__$1 = cljs.core.next(seq__58280);
var req_vars = first__58281;
var vars = seq__58280__$1;
var branches = seq__58277__$2;
var bound = datascript.query.bound_vars(context);
datascript.query.check_bound(bound,req_vars,orig_clause);

datascript.query.check_free_subset(bound,vars,branches);

var G__58611 = context;
var G__58612 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__58613 = clause;
context = G__58611;
clause = G__58612;
orig_clause = G__58613;
continue;
} else {
if(cljs.core.truth_((function (){var G__58283 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58284 = expr__58246;
return (pred__58245.cljs$core$IFn$_invoke$arity$2 ? pred__58245.cljs$core$IFn$_invoke$arity$2(G__58283,G__58284) : pred__58245.call(null,G__58283,G__58284));
})())){
var vec__58285 = clause;
var seq__58286 = cljs.core.seq(vec__58285);
var first__58287 = cljs.core.first(seq__58286);
var seq__58286__$1 = cljs.core.next(seq__58286);
var _ = first__58287;
var first__58287__$1 = cljs.core.first(seq__58286__$1);
var seq__58286__$2 = cljs.core.next(seq__58286__$1);
var vars = first__58287__$1;
var branches = seq__58286__$2;
var vars__$1 = cljs.core.set(vars);
var ___$1 = datascript.query.check_free_subset(datascript.query.bound_vars(context),vars__$1,branches);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__58285,seq__58286,first__58287,seq__58286__$1,_,first__58287__$1,seq__58286__$2,vars,branches,vars__$1,___$1,join_context,pred__58245,expr__58246){
return (function (p1__58240_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__58240_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__58240_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__58285,seq__58286,first__58287,seq__58286__$1,_,first__58287__$1,seq__58286__$2,vars,branches,vars__$1,___$1,join_context,pred__58245,expr__58246))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__58285,seq__58286,first__58287,seq__58286__$1,_,first__58287__$1,seq__58286__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__58245,expr__58246){
return (function (p1__58242_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__58242_SHARP_));
});})(context,clause,orig_clause,vec__58285,seq__58286,first__58287,seq__58286__$1,_,first__58287__$1,seq__58286__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__58245,expr__58246))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__58288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58289 = expr__58246;
return (pred__58245.cljs$core$IFn$_invoke$arity$2 ? pred__58245.cljs$core$IFn$_invoke$arity$2(G__58288,G__58289) : pred__58245.call(null,G__58288,G__58289));
})())){
var vec__58290 = clause;
var seq__58291 = cljs.core.seq(vec__58290);
var first__58292 = cljs.core.first(seq__58291);
var seq__58291__$1 = cljs.core.next(seq__58291);
var _ = first__58292;
var clauses = seq__58291__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__58293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58294 = expr__58246;
return (pred__58245.cljs$core$IFn$_invoke$arity$2 ? pred__58245.cljs$core$IFn$_invoke$arity$2(G__58293,G__58294) : pred__58245.call(null,G__58293,G__58294));
})())){
var vec__58298 = clause;
var seq__58299 = cljs.core.seq(vec__58298);
var first__58300 = cljs.core.first(seq__58299);
var seq__58299__$1 = cljs.core.next(seq__58299);
var _ = first__58300;
var clauses = seq__58299__$1;
var bound = datascript.query.bound_vars(context);
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__58306 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58307 = expr__58246;
return (pred__58245.cljs$core$IFn$_invoke$arity$2 ? pred__58245.cljs$core$IFn$_invoke$arity$2(G__58306,G__58307) : pred__58245.call(null,G__58306,G__58307));
})())){
var vec__58308 = clause;
var seq__58309 = cljs.core.seq(vec__58308);
var first__58310 = cljs.core.first(seq__58309);
var seq__58309__$1 = cljs.core.next(seq__58309);
var _ = first__58310;
var first__58310__$1 = cljs.core.first(seq__58309__$1);
var seq__58309__$2 = cljs.core.next(seq__58309__$1);
var vars = first__58310__$1;
var clauses = seq__58309__$2;
var bound = datascript.query.bound_vars(context);
var ___$1 = datascript.query.check_bound(bound,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__58311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58312 = expr__58246;
return (pred__58245.cljs$core$IFn$_invoke$arity$2 ? pred__58245.cljs$core$IFn$_invoke$arity$2(G__58311,G__58312) : pred__58245.call(null,G__58311,G__58312));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__58313 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__58314 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__58314);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__58313);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__58246)].join('')));
}
}
}
}
}
}
}
}
}
}
break;
}
}));

(datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3);

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_(context,clause)){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
var _STAR_implicit_source_STAR__orig_val__58317 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__58318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__58318);

try{var G__58320 = context;
var G__58321 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__58320,G__58321) : datascript.query.resolve_clause.call(null,G__58320,G__58321));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__58317);
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__58323 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__58324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__58324);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__58323);
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__58328 = arguments.length;
switch (G__58328) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
}));

(datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var rel = cljs.core.first(rels);
if((rel == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))){
return cljs.core.PersistentVector.EMPTY;
} else {
var keep_attrs = cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__58623 = acc;
var G__58624 = cljs.core.next(rels);
var G__58625 = symbols;
acc = G__58623;
rels = G__58624;
symbols = G__58625;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel){
return (function (p1__58326_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__58326_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel))
,symbols));
var len = cljs.core.count(symbols);
var G__58626 = (function (){var iter__5520__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel){
return (function datascript$query$iter__58330(s__58331){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel){
return (function (){
var s__58331__$1 = s__58331;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58331__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var t1 = cljs.core.first(xs__6277__auto__);
var iterys__5516__auto__ = ((function (s__58331__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel){
return (function datascript$query$iter__58330_$_iter__58332(s__58333){
return (new cljs.core.LazySeq(null,((function (s__58331__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel){
return (function (){
var s__58333__$1 = s__58333;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__58333__$1);
if(temp__5720__auto____$1){
var s__58333__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58333__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58333__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58335 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58334 = (0);
while(true){
if((i__58334 < size__5519__auto__)){
var t2 = cljs.core._nth(c__5518__auto__,i__58334);
cljs.core.chunk_append(b__58335,(function (){var res = cljs.core.aclone(t1);
var n__5633__auto___58629 = len;
var i_58630 = (0);
while(true){
if((i_58630 < n__5633__auto___58629)){
var temp__5724__auto___58631 = (copy_map[i_58630]);
if((temp__5724__auto___58631 == null)){
} else {
var idx_58632 = temp__5724__auto___58631;
(res[i_58630] = (t2[idx_58632]));
}

var G__58633 = (i_58630 + (1));
i_58630 = G__58633;
continue;
} else {
}
break;
}

return res;
})());

var G__58634 = (i__58334 + (1));
i__58334 = G__58634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58335),datascript$query$iter__58330_$_iter__58332(cljs.core.chunk_rest(s__58333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58335),null);
}
} else {
var t2 = cljs.core.first(s__58333__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__5633__auto___58635 = len;
var i_58636 = (0);
while(true){
if((i_58636 < n__5633__auto___58635)){
var temp__5724__auto___58637 = (copy_map[i_58636]);
if((temp__5724__auto___58637 == null)){
} else {
var idx_58638 = temp__5724__auto___58637;
(res[i_58636] = (t2[idx_58638]));
}

var G__58639 = (i_58636 + (1));
i_58636 = G__58639;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__58330_$_iter__58332(cljs.core.rest(s__58333__$2)));
}
} else {
return null;
}
break;
}
});})(s__58331__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel))
,null,null));
});})(s__58331__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,datascript$query$iter__58330(cljs.core.rest(s__58331__$1)));
} else {
var G__58641 = cljs.core.rest(s__58331__$1);
s__58331__$1 = G__58641;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel))
;
return iter__5520__auto__(acc);
})();
var G__58627 = cljs.core.next(rels);
var G__58628 = symbols;
acc = G__58626;
rels = G__58627;
symbols = G__58628;
continue;

}
}
}
break;
}
}));

(datascript.query._collect.cljs$lang$maxFixedArity = 3);

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

var datascript$query$IContextResolve$_context_resolve$dyn_58643 = (function (var$,context){
var x__5390__auto__ = (((var$ == null))?null:var$);
var m__5391__auto__ = (datascript.query._context_resolve[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__5391__auto__.call(null,var$,context));
} else {
var m__5389__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__5389__auto__.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
});
datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
return datascript$query$IContextResolve$_context_resolve$dyn_58643(var$,context);
}
});

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
}));

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
}));

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
}));

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
}));
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_(element)){
var f = datascript.query._context_resolve(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58343_SHARP_){
return datascript.query._context_resolve(p1__58343_SHARP_,context);
}),cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58344_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__58344_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__58349_SHARP_,p2__58350_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__58349_SHARP_) : pred.call(null,p1__58349_SHARP_)))){
return p2__58350_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58351_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__58351_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__5520__auto__ = (function datascript$query$aggregate_$_iter__58353(s__58354){
return (new cljs.core.LazySeq(null,(function (){
var s__58354__$1 = s__58354;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58354__$1);
if(temp__5720__auto__){
var s__58354__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58354__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58354__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58356 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58355 = (0);
while(true){
if((i__58355 < size__5519__auto__)){
var vec__58358 = cljs.core._nth(c__5518__auto__,i__58355);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58358,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58358,(1),null);
cljs.core.chunk_append(b__58356,datascript.query._aggregate(find_elements,context,tuples));

var G__58644 = (i__58355 + (1));
i__58355 = G__58644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58356),datascript$query$aggregate_$_iter__58353(cljs.core.chunk_rest(s__58354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58356),null);
}
} else {
var vec__58361 = cljs.core.first(s__58354__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58361,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58361,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__58353(cljs.core.rest(s__58354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(grouped);
});
datascript.query.map_STAR_ = (function datascript$query$map_STAR_(f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__58364_SHARP_,p2__58365_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__58364_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__58365_SHARP_) : f.call(null,p2__58365_SHARP_)));
}),cljs.core.empty(xs),xs);
});
datascript.query.tuples__GT_return_map = (function datascript$query$tuples__GT_return_map(return_map,tuples){
var symbols = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(return_map);
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(symbols));
return datascript.query.map_STAR_((function (tuple){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(symbols,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,i));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
}),tuples);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

var datascript$query$IPostProcess$_post_process$dyn_58645 = (function (find,return_map,tuples){
var x__5390__auto__ = (((find == null))?null:find);
var m__5391__auto__ = (datascript.query._post_process[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__5391__auto__.call(null,find,return_map,tuples));
} else {
var m__5389__auto__ = (datascript.query._post_process["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__5389__auto__.call(null,find,return_map,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
});
datascript.query._post_process = (function datascript$query$_post_process(find,return_map,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$3 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$3(find,return_map,tuples);
} else {
return datascript$query$IPostProcess$_post_process$dyn_58645(find,return_map,tuples);
}
});

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((return_map == null)){
return tuples;
} else {
return datascript.query.tuples__GT_return_map(return_map,tuples);
}
}));

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
}));

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
}));

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((!((return_map == null)))){
return cljs.core.first(datascript.query.tuples__GT_return_map(return_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(tuples)], null)));
} else {
return cljs.core.first(tuples);
}
}));
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__5520__auto__ = (function datascript$query$pull_$_iter__58377(s__58378){
return (new cljs.core.LazySeq(null,(function (){
var s__58378__$1 = s__58378;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58378__$1);
if(temp__5720__auto__){
var s__58378__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58378__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58378__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58380 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58379 = (0);
while(true){
if((i__58379 < size__5519__auto__)){
var find = cljs.core._nth(c__5518__auto__,i__58379);
cljs.core.chunk_append(b__58380,((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null));

var G__58648 = (i__58379 + (1));
i__58379 = G__58648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58380),datascript$query$pull_$_iter__58377(cljs.core.chunk_rest(s__58378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58380),null);
}
} else {
var find = cljs.core.first(s__58378__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null),datascript$query$pull_$_iter__58377(cljs.core.rest(s__58378__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(find_elements);
})();
var iter__5520__auto__ = (function datascript$query$pull_$_iter__58381(s__58382){
return (new cljs.core.LazySeq(null,(function (){
var s__58382__$1 = s__58382;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58382__$1);
if(temp__5720__auto__){
var s__58382__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58382__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58382__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58384 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58383 = (0);
while(true){
if((i__58383 < size__5519__auto__)){
var tuple = cljs.core._nth(c__5518__auto__,i__58383);
cljs.core.chunk_append(b__58384,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__58383,tuple,c__5518__auto__,size__5519__auto__,b__58384,s__58382__$2,temp__5720__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(i__58383,tuple,c__5518__auto__,size__5519__auto__,b__58384,s__58382__$2,temp__5720__auto__,resolved))
,resolved,tuple));

var G__58649 = (i__58383 + (1));
i__58383 = G__58649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58384),datascript$query$pull_$_iter__58381(cljs.core.chunk_rest(s__58382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58384),null);
}
} else {
var tuple = cljs.core.first(s__58382__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__58382__$2,temp__5720__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(tuple,s__58382__$2,temp__5720__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__58381(cljs.core.rest(s__58382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(resultset);
});
datascript.query.q = (function datascript$query$q(var_args){
var args__5772__auto__ = [];
var len__5766__auto___58650 = arguments.length;
var i__5767__auto___58651 = (0);
while(true){
if((i__5767__auto___58651 < len__5766__auto___58650)){
args__5772__auto__.push((arguments[i__5767__auto___58651]));

var G__58652 = (i__5767__auto___58651 + (1));
i__5767__auto___58651 = G__58652;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.lru._get(datascript.query._STAR_query_cache_STAR_,q,(function (){
return datascript.parser.parse_query(q);
}));
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__58404 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__58404);
} else {
return G__58404;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__58405 = resultset;
var G__58405__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58400_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__58400_SHARP_,(0),result_arity));
}),G__58405):G__58405);
var G__58405__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__58405__$1):G__58405__$1);
var G__58405__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__58405__$2):G__58405__$2);
return datascript.query._post_process(find,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(parsed_q),G__58405__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq58401){
var G__58402 = cljs.core.first(seq58401);
var seq58401__$1 = cljs.core.next(seq58401);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58402,seq58401__$1);
}));


//# sourceMappingURL=datascript.query.js.map
