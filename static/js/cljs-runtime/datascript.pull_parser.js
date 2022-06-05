goog.provide('datascript.pull_parser');

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
datascript.pull_parser.PullAttr = (function (as,default$,limit,name,pattern,recursion_limit,recursive_QMARK_,reverse_QMARK_,xform,multival_QMARK_,ref_QMARK_,component_QMARK_,__meta,__extmap,__hash){
this.as = as;
this.default$ = default$;
this.limit = limit;
this.name = name;
this.pattern = pattern;
this.recursion_limit = recursion_limit;
this.recursive_QMARK_ = recursive_QMARK_;
this.reverse_QMARK_ = reverse_QMARK_;
this.xform = xform;
this.multival_QMARK_ = multival_QMARK_;
this.ref_QMARK_ = ref_QMARK_;
this.component_QMARK_ = component_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_parser.PullAttr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k56961,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__56970 = k56961;
var G__56970__$1 = (((G__56970 instanceof cljs.core.Keyword))?G__56970.fqn:null);
switch (G__56970__$1) {
case "as":
return self__.as;

break;
case "default":
return self__.default$;

break;
case "limit":
return self__.limit;

break;
case "name":
return self__.name;

break;
case "pattern":
return self__.pattern;

break;
case "recursion-limit":
return self__.recursion_limit;

break;
case "recursive?":
return self__.recursive_QMARK_;

break;
case "reverse?":
return self__.reverse_QMARK_;

break;
case "xform":
return self__.xform;

break;
case "multival?":
return self__.multival_QMARK_;

break;
case "ref?":
return self__.ref_QMARK_;

break;
case "component?":
return self__.component_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56961,else__5343__auto__);

}
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__56980){
var vec__56981 = p__56980;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56981,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56981,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-parser.PullAttr{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"as","as",1148689641),self__.as],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),self__.recursion_limit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),self__.recursive_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),self__.reverse_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"xform","xform",-1725711008),self__.xform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"multival?","multival?",1072388383),self__.multival_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref?","ref?",1932693720),self__.ref_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component?","component?",407783990),self__.component_QMARK_],null))], null),self__.__extmap));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56960){
var self__ = this;
var G__56960__$1 = this;
return (new cljs.core.RecordIter((0),G__56960__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Keyword(null,"multival?","multival?",1072388383),new cljs.core.Keyword(null,"ref?","ref?",1932693720),new cljs.core.Keyword(null,"component?","component?",407783990)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1743810262 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56962,other56963){
var self__ = this;
var this56962__$1 = this;
return (((!((other56963 == null)))) && ((((this56962__$1.constructor === other56963.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.as,other56963.as)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.default,other56963.default)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.limit,other56963.limit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.name,other56963.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.pattern,other56963.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.recursion_limit,other56963.recursion_limit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.recursive_QMARK_,other56963.recursive_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.reverse_QMARK_,other56963.reverse_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.xform,other56963.xform)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.multival_QMARK_,other56963.multival_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.ref_QMARK_,other56963.ref_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.component_QMARK_,other56963.component_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56962__$1.__extmap,other56963.__extmap)))))))))))))))))))))))))))));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"xform","xform",-1725711008),null,new cljs.core.Keyword(null,"limit","limit",-1355822363),null,new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),null,new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),null,new cljs.core.Keyword(null,"component?","component?",407783990),null,new cljs.core.Keyword(null,"ref?","ref?",1932693720),null,new cljs.core.Keyword(null,"multival?","multival?",1072388383),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k56961){
var self__ = this;
var this__5347__auto____$1 = this;
var G__56999 = k56961;
var G__56999__$1 = (((G__56999 instanceof cljs.core.Keyword))?G__56999.fqn:null);
switch (G__56999__$1) {
case "as":
case "default":
case "limit":
case "name":
case "pattern":
case "recursion-limit":
case "recursive?":
case "reverse?":
case "xform":
case "multival?":
case "ref?":
case "component?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56961);

}
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__56960){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57004 = cljs.core.keyword_identical_QMARK_;
var expr__57005 = k__5349__auto__;
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"as","as",1148689641),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"as","as",1148689641),expr__57005)))){
return (new datascript.pull_parser.PullAttr(G__56960,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,G__56960,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"limit","limit",-1355822363),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"limit","limit",-1355822363),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,G__56960,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,G__56960,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,G__56960,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,G__56960,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,G__56960,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,G__56960,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xform","xform",-1725711008),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"xform","xform",-1725711008),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,G__56960,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multival?","multival?",1072388383),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"multival?","multival?",1072388383),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,G__56960,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref?","ref?",1932693720),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"ref?","ref?",1932693720),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,G__56960,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57004.cljs$core$IFn$_invoke$arity$2 ? pred__57004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component?","component?",407783990),expr__57005) : pred__57004.call(null,new cljs.core.Keyword(null,"component?","component?",407783990),expr__57005)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,G__56960,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__56960),null));
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
}
}
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"as","as",1148689641),self__.as,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),self__.recursion_limit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),self__.recursive_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),self__.reverse_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"xform","xform",-1725711008),self__.xform,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"multival?","multival?",1072388383),self__.multival_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ref?","ref?",1932693720),self__.ref_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"component?","component?",407783990),self__.component_QMARK_,null))], null),self__.__extmap));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__56960){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,G__56960,self__.__extmap,self__.__hash));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_parser.PullAttr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"as","as",-1505746128,null),new cljs.core.Symbol(null,"default","default",-347290801,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.Symbol(null,"recursion-limit","recursion-limit",1692877166,null),new cljs.core.Symbol(null,"recursive?","recursive?",-1314360525,null),new cljs.core.Symbol(null,"reverse?","reverse?",-32336947,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"multival?","multival?",-1582047386,null),new cljs.core.Symbol(null,"ref?","ref?",-721742049,null),new cljs.core.Symbol(null,"component?","component?",2048315517,null)], null);
}));

(datascript.pull_parser.PullAttr.cljs$lang$type = true);

(datascript.pull_parser.PullAttr.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-parser/PullAttr",null,(1),null));
}));

(datascript.pull_parser.PullAttr.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-parser/PullAttr");
}));

/**
 * Positional factory function for datascript.pull-parser/PullAttr.
 */
datascript.pull_parser.__GT_PullAttr = (function datascript$pull_parser$__GT_PullAttr(as,default$,limit,name,pattern,recursion_limit,recursive_QMARK_,reverse_QMARK_,xform,multival_QMARK_,ref_QMARK_,component_QMARK_){
return (new datascript.pull_parser.PullAttr(as,default$,limit,name,pattern,recursion_limit,recursive_QMARK_,reverse_QMARK_,xform,multival_QMARK_,ref_QMARK_,component_QMARK_,null,null,null));
});

/**
 * Factory function for datascript.pull-parser/PullAttr, taking a map of keywords to field values.
 */
datascript.pull_parser.map__GT_PullAttr = (function datascript$pull_parser$map__GT_PullAttr(G__56965){
var extmap__5382__auto__ = (function (){var G__57017 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56965,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Keyword(null,"multival?","multival?",1072388383),new cljs.core.Keyword(null,"ref?","ref?",1932693720),new cljs.core.Keyword(null,"component?","component?",407783990)], 0));
if(cljs.core.record_QMARK_(G__56965)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57017);
} else {
return G__57017;
}
})();
return (new datascript.pull_parser.PullAttr(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"recursive?","recursive?",1340075244).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"xform","xform",-1725711008).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"multival?","multival?",1072388383).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(G__56965),new cljs.core.Keyword(null,"component?","component?",407783990).cljs$core$IFn$_invoke$arity$1(G__56965),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
datascript.pull_parser.PullPattern = (function (attrs,first_attr,last_attr,reverse_attrs,wildcard_QMARK_,__meta,__extmap,__hash){
this.attrs = attrs;
this.first_attr = first_attr;
this.last_attr = last_attr;
this.reverse_attrs = reverse_attrs;
this.wildcard_QMARK_ = wildcard_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57020,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57027 = k57020;
var G__57027__$1 = (((G__57027 instanceof cljs.core.Keyword))?G__57027.fqn:null);
switch (G__57027__$1) {
case "attrs":
return self__.attrs;

break;
case "first-attr":
return self__.first_attr;

break;
case "last-attr":
return self__.last_attr;

break;
case "reverse-attrs":
return self__.reverse_attrs;

break;
case "wildcard?":
return self__.wildcard_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57020,else__5343__auto__);

}
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57028){
var vec__57029 = p__57028;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57029,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57029,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-parser.PullPattern{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),self__.first_attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),self__.last_attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),self__.reverse_attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),self__.wildcard_QMARK_],null))], null),self__.__extmap));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57019){
var self__ = this;
var G__57019__$1 = this;
return (new cljs.core.RecordIter((0),G__57019__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-795554044 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57021,other57022){
var self__ = this;
var this57021__$1 = this;
return (((!((other57022 == null)))) && ((((this57021__$1.constructor === other57022.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57021__$1.attrs,other57022.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57021__$1.first_attr,other57022.first_attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57021__$1.last_attr,other57022.last_attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57021__$1.reverse_attrs,other57022.reverse_attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57021__$1.wildcard_QMARK_,other57022.wildcard_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57021__$1.__extmap,other57022.__extmap)))))))))))))));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),null,new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),null,new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57020){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57035 = k57020;
var G__57035__$1 = (((G__57035 instanceof cljs.core.Keyword))?G__57035.fqn:null);
switch (G__57035__$1) {
case "attrs":
case "first-attr":
case "last-attr":
case "reverse-attrs":
case "wildcard?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57020);

}
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57019){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57036 = cljs.core.keyword_identical_QMARK_;
var expr__57037 = k__5349__auto__;
if(cljs.core.truth_((pred__57036.cljs$core$IFn$_invoke$arity$2 ? pred__57036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57037) : pred__57036.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57037)))){
return (new datascript.pull_parser.PullPattern(G__57019,self__.first_attr,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57036.cljs$core$IFn$_invoke$arity$2 ? pred__57036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),expr__57037) : pred__57036.call(null,new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),expr__57037)))){
return (new datascript.pull_parser.PullPattern(self__.attrs,G__57019,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57036.cljs$core$IFn$_invoke$arity$2 ? pred__57036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),expr__57037) : pred__57036.call(null,new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),expr__57037)))){
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,G__57019,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57036.cljs$core$IFn$_invoke$arity$2 ? pred__57036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),expr__57037) : pred__57036.call(null,new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),expr__57037)))){
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,G__57019,self__.wildcard_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57036.cljs$core$IFn$_invoke$arity$2 ? pred__57036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),expr__57037) : pred__57036.call(null,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),expr__57037)))){
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,self__.reverse_attrs,G__57019,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57019),null));
}
}
}
}
}
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),self__.first_attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),self__.last_attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),self__.reverse_attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),self__.wildcard_QMARK_,null))], null),self__.__extmap));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57019){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,G__57019,self__.__extmap,self__.__hash));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_parser.PullPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"first-attr","first-attr",-352508304,null),new cljs.core.Symbol(null,"last-attr","last-attr",1114530819,null),new cljs.core.Symbol(null,"reverse-attrs","reverse-attrs",-2024338067,null),new cljs.core.Symbol(null,"wildcard?","wildcard?",954487426,null)], null);
}));

(datascript.pull_parser.PullPattern.cljs$lang$type = true);

(datascript.pull_parser.PullPattern.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-parser/PullPattern",null,(1),null));
}));

(datascript.pull_parser.PullPattern.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-parser/PullPattern");
}));

/**
 * Positional factory function for datascript.pull-parser/PullPattern.
 */
datascript.pull_parser.__GT_PullPattern = (function datascript$pull_parser$__GT_PullPattern(attrs,first_attr,last_attr,reverse_attrs,wildcard_QMARK_){
return (new datascript.pull_parser.PullPattern(attrs,first_attr,last_attr,reverse_attrs,wildcard_QMARK_,null,null,null));
});

/**
 * Factory function for datascript.pull-parser/PullPattern, taking a map of keywords to field values.
 */
datascript.pull_parser.map__GT_PullPattern = (function datascript$pull_parser$map__GT_PullPattern(G__57026){
var extmap__5382__auto__ = (function (){var G__57049 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57026,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101)], 0));
if(cljs.core.record_QMARK_(G__57026)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57049);
} else {
return G__57049;
}
})();
return (new datascript.pull_parser.PullPattern(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__57026),new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831).cljs$core$IFn$_invoke$arity$1(G__57026),new cljs.core.Keyword(null,"last-attr","last-attr",-526000708).cljs$core$IFn$_invoke$arity$1(G__57026),new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702).cljs$core$IFn$_invoke$arity$1(G__57026),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(G__57026),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

datascript.pull_parser.default_db_id_attr = datascript.pull_parser.map__GT_PullAttr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"xform","xform",-1725711008),cljs.core.identity], null));
datascript.pull_parser.default_pattern_ref = datascript.pull_parser.map__GT_PullPattern(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(new cljs.core.List(null,datascript.pull_parser.default_db_id_attr,null,(1),null))], null));
datascript.pull_parser.default_pattern_component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_parser.default_pattern_ref,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),true);

datascript.pull_parser.check = (function datascript$pull_parser$check(cond,expected,fragment){
if(cljs.core.truth_(cond)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fragment], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),fragment], null));
}
});
datascript.pull_parser.parse_attr_name = (function datascript$pull_parser$parse_attr_name(db,attr_spec){
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_(attr_spec);
var name = ((reverse_QMARK_)?datascript.db.reverse_ref(attr_spec):attr_spec);
var ref_QMARK_ = datascript.db.ref_QMARK_(db,name);
var component_QMARK_ = datascript.db.component_QMARK_(db,name);
var multival_QMARK_ = datascript.db.multival_QMARK_(db,name);
return datascript.pull_parser.map__GT_PullAttr(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"component?","component?",407783990),new cljs.core.Keyword(null,"ref?","ref?",1932693720),new cljs.core.Keyword(null,"multival?","multival?",1072388383),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[cljs.core.identity,((multival_QMARK_)?(1000):null),((reverse_QMARK_)?(function (){
datascript.pull_parser.check(ref_QMARK_,"reverse attribute having :db.type/ref",attr_spec);

return true;
})()
:null),name,attr_spec,((component_QMARK_)?true:null),((ref_QMARK_)?true:null),((multival_QMARK_)?true:null),(((!(ref_QMARK_)))?null:((reverse_QMARK_)?datascript.pull_parser.default_pattern_ref:((component_QMARK_)?datascript.pull_parser.default_pattern_component:datascript.pull_parser.default_pattern_ref
)))]));
});
datascript.pull_parser.check_limit = (function datascript$pull_parser$check_limit(db,pull_attr,limit){
datascript.pull_parser.check(((((typeof limit === 'number') && ((limit > (0))))) || ((limit == null))),"(positive-number | nil)",limit);

return datascript.pull_parser.check(datascript.db.multival_QMARK_(db,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pull_attr)),"limit attribute having :db.cardinality/many",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pull_attr));
});
datascript.pull_parser.resolve_xform = (function datascript$pull_parser$resolve_xform(sym_or_fn){
var or__5043__auto__ = ((cljs.core.fn_QMARK_(sym_or_fn))?sym_or_fn:null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.query_fns,sym_or_fn);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't resolve symbol ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym_or_fn], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),sym_or_fn], null));
}
}
});
datascript.pull_parser.parse_attr_expr = (function datascript$pull_parser$parse_attr_expr(db,attr_spec){
var temp__5724__auto__ = (function (){var G__57058 = db;
var G__57059 = cljs.core.first(attr_spec);
return (datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2 ? datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2(G__57058,G__57059) : datascript.pull_parser.parse_attr_spec.call(null,G__57058,G__57059));
})();
if((temp__5724__auto__ == null)){
return null;
} else {
var pull_attr = temp__5724__auto__;
datascript.pull_parser.check(cljs.core.even_QMARK_(cljs.core.count(cljs.core.next(attr_spec))),"even number of opts",attr_spec);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pull_attr__$1,p__57060){
var vec__57061 = p__57060;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57061,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57061,(1),null);
var G__57064 = key;
var G__57064__$1 = (((G__57064 instanceof cljs.core.Keyword))?G__57064.fqn:null);
switch (G__57064__$1) {
case "as":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr__$1,new cljs.core.Keyword(null,"as","as",1148689641),value);

break;
case "limit":
datascript.pull_parser.check_limit(db,pull_attr__$1,value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),value);

break;
case "default":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr__$1,new cljs.core.Keyword(null,"default","default",-1987822328),value);

break;
case "xform":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr__$1,new cljs.core.Keyword(null,"xform","xform",-1725711008),datascript.pull_parser.resolve_xform(value));

break;
default:
return datascript.pull_parser.check(false,"one of :as, :limit, :default, :xform",attr_spec);

}
}),pull_attr,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.next(attr_spec)));
}
});
datascript.pull_parser.parse_legacy_limit_expr = (function datascript$pull_parser$parse_legacy_limit_expr(db,attr_spec){
var expected = "['limit attr-name (positive-number | nil)]";
if(cljs.core.truth_((function (){var G__57067 = cljs.core.first(attr_spec);
var fexpr__57066 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"limit","limit",284709164,null),null,"limit",null], null), null);
return (fexpr__57066.cljs$core$IFn$_invoke$arity$1 ? fexpr__57066.cljs$core$IFn$_invoke$arity$1(G__57067) : fexpr__57066.call(null,G__57067));
})())){
datascript.pull_parser.check(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(attr_spec),(3)),expected,attr_spec);

var vec__57075 = attr_spec;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57075,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57075,(1),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57075,(2),null);
var pull_attr = (datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2 ? datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2(db,attr) : datascript.pull_parser.parse_attr_spec.call(null,db,attr));
datascript.pull_parser.check_limit(db,pull_attr,limit);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr,new cljs.core.Keyword(null,"limit","limit",-1355822363),limit);
} else {
return null;
}
});
datascript.pull_parser.parse_legacy_default_expr = (function datascript$pull_parser$parse_legacy_default_expr(db,attr_spec){
var expected = "['default attr-name any-value]";
if(cljs.core.truth_((function (){var G__57080 = cljs.core.first(attr_spec);
var fexpr__57079 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"default","default",-347290801,null),null,"default",null], null), null);
return (fexpr__57079.cljs$core$IFn$_invoke$arity$1 ? fexpr__57079.cljs$core$IFn$_invoke$arity$1(G__57080) : fexpr__57079.call(null,G__57080));
})())){
datascript.pull_parser.check(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(attr_spec),(3)),expected,attr_spec);

var vec__57082 = attr_spec;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57082,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57082,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57082,(2),null);
var pull_attr = (datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2 ? datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2(db,attr) : datascript.pull_parser.parse_attr_spec.call(null,db,attr));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr,new cljs.core.Keyword(null,"default","default",-1987822328),default$);
} else {
return null;
}
});
datascript.pull_parser.parse_attr_spec = (function datascript$pull_parser$parse_attr_spec(db,attr_spec){
if((((attr_spec instanceof cljs.core.Keyword)) || (((typeof attr_spec === 'string') && (cljs.core.not((function (){var fexpr__57089 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["limit",null,"default",null], null), null);
return (fexpr__57089.cljs$core$IFn$_invoke$arity$1 ? fexpr__57089.cljs$core$IFn$_invoke$arity$1(attr_spec) : fexpr__57089.call(null,attr_spec));
})())))))){
return datascript.pull_parser.parse_attr_name(db,attr_spec);
} else {
if(cljs.core.sequential_QMARK_(attr_spec)){
var or__5043__auto__ = datascript.pull_parser.parse_attr_expr(db,attr_spec);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.pull_parser.parse_legacy_limit_expr(db,attr_spec);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = datascript.pull_parser.parse_legacy_default_expr(db,attr_spec);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return datascript.pull_parser.check(false,"[attr-name attr-option+] | ['limit attr-name (positive-num | nil)] | ['default attr-name any-val]",attr_spec);
}
}
}
} else {
return null;

}
}
});
datascript.pull_parser.parse_map_spec = (function datascript$pull_parser$parse_map_spec(db,attr_spec,pattern){
var pull_attr = datascript.pull_parser.parse_attr_spec(db,attr_spec);
datascript.pull_parser.check((!((pull_attr == null))),"attr-name | attr-expr",attr_spec);

datascript.pull_parser.check(datascript.db.ref_QMARK_(db,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pull_attr)),"attribute having :db.type/ref",attr_spec);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),pattern)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("...",pattern)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pull_attr,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),true,new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),null], 0));
} else {
if(typeof pattern === 'number'){
datascript.pull_parser.check((pattern > (0)),"(positive-num | ...)",cljs.core.PersistentArrayMap.createAsIfByAssoc([attr_spec,pattern]));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pull_attr,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),true,new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),pattern], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr,new cljs.core.Keyword(null,"pattern","pattern",242135423),(datascript.pull_parser.parse_pattern.cljs$core$IFn$_invoke$arity$2 ? datascript.pull_parser.parse_pattern.cljs$core$IFn$_invoke$arity$2(db,pattern) : datascript.pull_parser.parse_pattern.call(null,db,pattern)));

}
}
});
datascript.pull_parser.parse_pattern = (function datascript$pull_parser$parse_pattern(db,pattern){
datascript.pull_parser.check(cljs.core.sequential_QMARK_(pattern),"pattern to be sequential?",pattern);

var pattern__$1 = pattern;
var result = datascript.pull_parser.map__GT_PullPattern(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),null], null));
while(true){
if(cljs.core.empty_QMARK_(pattern__$1)){
var attrs = result.attrs;
var db_id_QMARK_ = ((function (pattern__$1,result,attrs){
return (function (attr){
var G__57097 = attr.name;
var fexpr__57096 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),null,":db/id",null], null), null);
return (fexpr__57096.cljs$core$IFn$_invoke$arity$1 ? fexpr__57096.cljs$core$IFn$_invoke$arity$1(G__57097) : fexpr__57096.call(null,G__57097));
});})(pattern__$1,result,attrs))
;
var key_fn = ((function (pattern__$1,result,attrs,db_id_QMARK_){
return (function (attr){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(attr);
if((name instanceof cljs.core.Keyword)){
return name;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(name,(0),(1)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);

}
}
});})(pattern__$1,result,attrs,db_id_QMARK_))
;
var attrs__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = result.wildcard_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(db_id_QMARK_,result.attrs));
} else {
return and__5041__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,datascript.pull_parser.default_db_id_attr):attrs);
var attrs__$2 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(key_fn,attrs__$1));
var datom_attrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(db_id_QMARK_,attrs__$2);
var first_attr = cljs.core.first(datom_attrs);
var last_attr = cljs.core.last(datom_attrs);
return datascript.pull_parser.map__GT_PullPattern(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$2,new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),first_attr,new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),last_attr,new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(key_fn,result.reverse_attrs)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),result.wildcard_QMARK_], null));
} else {
var attr_spec = cljs.core.first(pattern__$1);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*","*",345799209,null),attr_spec)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",attr_spec)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*","*",-1294732318),attr_spec)))))){
var G__57167 = cljs.core.next(pattern__$1);
var G__57168 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),true);
pattern__$1 = G__57167;
result = G__57168;
continue;
} else {
var conj_attr = ((function (pattern__$1,result,attr_spec){
return (function (result__$1,pull_attr){
if(cljs.core.truth_(new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474).cljs$core$IFn$_invoke$arity$1(pull_attr))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result__$1,new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),cljs.core.conj,pull_attr);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.conj,pull_attr);

}
});})(pattern__$1,result,attr_spec))
;
if(cljs.core.map_QMARK_(attr_spec)){
var result_SINGLEQUOTE_ = cljs.core.reduce_kv(((function (pattern__$1,result,conj_attr,attr_spec){
return (function (result__$1,attr_spec__$1,pattern__$2){
return conj_attr(result__$1,datascript.pull_parser.parse_map_spec(db,attr_spec__$1,pattern__$2));
});})(pattern__$1,result,conj_attr,attr_spec))
,result,attr_spec);
var G__57169 = cljs.core.next(pattern__$1);
var G__57170 = result_SINGLEQUOTE_;
pattern__$1 = G__57169;
result = G__57170;
continue;
} else {
var pull_attr = datascript.pull_parser.parse_attr_spec(db,attr_spec);
if((pull_attr == null)){
return datascript.pull_parser.check(false,"attr-name | attr-expr | map-spec | *",attr_spec);
} else {
var G__57171 = cljs.core.next(pattern__$1);
var G__57172 = conj_attr(result,pull_attr);
pattern__$1 = G__57171;
result = G__57172;
continue;

}
}
}
}
break;
}
});

//# sourceMappingURL=datascript.pull_parser.js.map
