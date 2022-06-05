goog.provide('datascript.pull_api');



datascript.pull_api.first_seq = (function datascript$pull_api$first_seq(xs){
if((xs == null)){
return null;
} else {
return cljs.core._first(xs);
}
});
datascript.pull_api.next_seq = (function datascript$pull_api$next_seq(xs){
if((xs == null)){
return null;
} else {
return cljs.core._next(xs);
}
});
datascript.pull_api.conj_seq = (function datascript$pull_api$conj_seq(xs,x){
if((xs == null)){
return (new cljs.core.List(null,x,null,(1),null));
} else {
return cljs.core._conj(xs,x);
}
});
datascript.pull_api.assoc_some_BANG_ = (function datascript$pull_api$assoc_some_BANG_(m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
datascript.pull_api.conj_some_BANG_ = (function datascript$pull_api$conj_some_BANG_(xs,v){
if((v == null)){
return xs;
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(xs,v);
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
datascript.pull_api.Context = (function (db,visitor,__meta,__extmap,__hash){
this.db = db;
this.visitor = visitor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57115,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57119 = k57115;
var G__57119__$1 = (((G__57119 instanceof cljs.core.Keyword))?G__57119.fqn:null);
switch (G__57119__$1) {
case "db":
return self__.db;

break;
case "visitor":
return self__.visitor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57115,else__5343__auto__);

}
}));

(datascript.pull_api.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57120){
var vec__57121 = p__57120;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57121,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57121,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.Context{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db","db",993250759),self__.db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"visitor","visitor",-1026865865),self__.visitor],null))], null),self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57114){
var self__ = this;
var G__57114__$1 = this;
return (new cljs.core.RecordIter((0),G__57114__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"visitor","visitor",-1026865865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1727735959 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57116,other57117){
var self__ = this;
var this57116__$1 = this;
return (((!((other57117 == null)))) && ((((this57116__$1.constructor === other57117.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57116__$1.db,other57117.db)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57116__$1.visitor,other57117.visitor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57116__$1.__extmap,other57117.__extmap)))))))));
}));

(datascript.pull_api.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),null,new cljs.core.Keyword(null,"visitor","visitor",-1026865865),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57115){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57130 = k57115;
var G__57130__$1 = (((G__57130 instanceof cljs.core.Keyword))?G__57130.fqn:null);
switch (G__57130__$1) {
case "db":
case "visitor":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57115);

}
}));

(datascript.pull_api.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57114){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57131 = cljs.core.keyword_identical_QMARK_;
var expr__57132 = k__5349__auto__;
if(cljs.core.truth_((pred__57131.cljs$core$IFn$_invoke$arity$2 ? pred__57131.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),expr__57132) : pred__57131.call(null,new cljs.core.Keyword(null,"db","db",993250759),expr__57132)))){
return (new datascript.pull_api.Context(G__57114,self__.visitor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57131.cljs$core$IFn$_invoke$arity$2 ? pred__57131.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visitor","visitor",-1026865865),expr__57132) : pred__57131.call(null,new cljs.core.Keyword(null,"visitor","visitor",-1026865865),expr__57132)))){
return (new datascript.pull_api.Context(self__.db,G__57114,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57114),null));
}
}
}));

(datascript.pull_api.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db","db",993250759),self__.db,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"visitor","visitor",-1026865865),self__.visitor,null))], null),self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57114){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.Context(self__.db,self__.visitor,G__57114,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_api.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"visitor","visitor",613665662,null)], null);
}));

(datascript.pull_api.Context.cljs$lang$type = true);

(datascript.pull_api.Context.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/Context",null,(1),null));
}));

(datascript.pull_api.Context.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/Context");
}));

/**
 * Positional factory function for datascript.pull-api/Context.
 */
datascript.pull_api.__GT_Context = (function datascript$pull_api$__GT_Context(db,visitor){
return (new datascript.pull_api.Context(db,visitor,null,null,null));
});

/**
 * Factory function for datascript.pull-api/Context, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_Context = (function datascript$pull_api$map__GT_Context(G__57118){
var extmap__5382__auto__ = (function (){var G__57142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57118,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visitor","visitor",-1026865865)], 0));
if(cljs.core.record_QMARK_(G__57118)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57142);
} else {
return G__57142;
}
})();
return (new datascript.pull_api.Context(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(G__57118),new cljs.core.Keyword(null,"visitor","visitor",-1026865865).cljs$core$IFn$_invoke$arity$1(G__57118),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

datascript.pull_api.visit = (function datascript$pull_api$visit(context,pattern,e,a,v){
var temp__5724__auto__ = context.visitor;
if((temp__5724__auto__ == null)){
return null;
} else {
var visitor = temp__5724__auto__;
return (visitor.cljs$core$IFn$_invoke$arity$4 ? visitor.cljs$core$IFn$_invoke$arity$4(pattern,e,a,v) : visitor.call(null,pattern,e,a,v));
}
});

/**
 * @interface
 */
datascript.pull_api.IFrame = function(){};

var datascript$pull_api$IFrame$_merge$dyn_57501 = (function (this$,result){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (datascript.pull_api._merge[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5391__auto__.call(null,this$,result));
} else {
var m__5389__auto__ = (datascript.pull_api._merge["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5389__auto__.call(null,this$,result));
} else {
throw cljs.core.missing_protocol("IFrame.-merge",this$);
}
}
});
datascript.pull_api._merge = (function datascript$pull_api$_merge(this$,result){
if((((!((this$ == null)))) && ((!((this$.datascript$pull_api$IFrame$_merge$arity$2 == null)))))){
return this$.datascript$pull_api$IFrame$_merge$arity$2(this$,result);
} else {
return datascript$pull_api$IFrame$_merge$dyn_57501(this$,result);
}
});

var datascript$pull_api$IFrame$_run$dyn_57502 = (function (this$,context){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (datascript.pull_api._run[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,context) : m__5391__auto__.call(null,this$,context));
} else {
var m__5389__auto__ = (datascript.pull_api._run["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,context) : m__5389__auto__.call(null,this$,context));
} else {
throw cljs.core.missing_protocol("IFrame.-run",this$);
}
}
});
datascript.pull_api._run = (function datascript$pull_api$_run(this$,context){
if((((!((this$ == null)))) && ((!((this$.datascript$pull_api$IFrame$_run$arity$2 == null)))))){
return this$.datascript$pull_api$IFrame$_run$arity$2(this$,context);
} else {
return datascript$pull_api$IFrame$_run$dyn_57502(this$,context);
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
datascript.pull_api.ResultFrame = (function (value,datoms,__meta,__extmap,__hash){
this.value = value;
this.datoms = datoms;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.ResultFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57158,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57162 = k57158;
var G__57162__$1 = (((G__57162 instanceof cljs.core.Keyword))?G__57162.fqn:null);
switch (G__57162__$1) {
case "value":
return self__.value;

break;
case "datoms":
return self__.datoms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57158,else__5343__auto__);

}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57163){
var vec__57164 = p__57163;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57164,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57164,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.ResultFrame{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57157){
var self__ = this;
var G__57157__$1 = this;
return (new cljs.core.RecordIter((0),G__57157__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (836381841 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57159,other57160){
var self__ = this;
var this57159__$1 = this;
return (((!((other57160 == null)))) && ((((this57159__$1.constructor === other57160.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57159__$1.value,other57160.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57159__$1.datoms,other57160.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57159__$1.__extmap,other57160.__extmap)))))))));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57158){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57177 = k57158;
var G__57177__$1 = (((G__57177 instanceof cljs.core.Keyword))?G__57177.fqn:null);
switch (G__57177__$1) {
case "value":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57158);

}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57157){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57185 = cljs.core.keyword_identical_QMARK_;
var expr__57186 = k__5349__auto__;
if(cljs.core.truth_((pred__57185.cljs$core$IFn$_invoke$arity$2 ? pred__57185.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__57186) : pred__57185.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__57186)))){
return (new datascript.pull_api.ResultFrame(G__57157,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57185.cljs$core$IFn$_invoke$arity$2 ? pred__57185.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57186) : pred__57185.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57186)))){
return (new datascript.pull_api.ResultFrame(self__.value,G__57157,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57157),null));
}
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57157){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,G__57157,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_api.ResultFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null);
}));

(datascript.pull_api.ResultFrame.cljs$lang$type = true);

(datascript.pull_api.ResultFrame.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/ResultFrame",null,(1),null));
}));

(datascript.pull_api.ResultFrame.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/ResultFrame");
}));

/**
 * Positional factory function for datascript.pull-api/ResultFrame.
 */
datascript.pull_api.__GT_ResultFrame = (function datascript$pull_api$__GT_ResultFrame(value,datoms){
return (new datascript.pull_api.ResultFrame(value,datoms,null,null,null));
});

/**
 * Factory function for datascript.pull-api/ResultFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_ResultFrame = (function datascript$pull_api$map__GT_ResultFrame(G__57161){
var extmap__5382__auto__ = (function (){var G__57194 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57161,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__57161)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57194);
} else {
return G__57194;
}
})();
return (new datascript.pull_api.ResultFrame(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__57161),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__57161),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.MultivalAttrFrame = (function (acc,attr,datoms,__meta,__extmap,__hash){
this.acc = acc;
this.attr = attr;
this.datoms = datoms;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57196,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57200 = k57196;
var G__57200__$1 = (((G__57200 instanceof cljs.core.Keyword))?G__57200.fqn:null);
switch (G__57200__$1) {
case "acc":
return self__.acc;

break;
case "attr":
return self__.attr;

break;
case "datoms":
return self__.datoms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57196,else__5343__auto__);

}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57201){
var vec__57202 = p__57201;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57202,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57202,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.MultivalAttrFrame{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57195){
var self__ = this;
var G__57195__$1 = this;
return (new cljs.core.RecordIter((0),G__57195__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1829867699 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57197,other57198){
var self__ = this;
var this57197__$1 = this;
return (((!((other57198 == null)))) && ((((this57197__$1.constructor === other57198.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57197__$1.acc,other57198.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57197__$1.attr,other57198.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57197__$1.datoms,other57198.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57197__$1.__extmap,other57198.__extmap)))))))))));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57196){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57210 = k57196;
var G__57210__$1 = (((G__57210 instanceof cljs.core.Keyword))?G__57210.fqn:null);
switch (G__57210__$1) {
case "acc":
case "attr":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57196);

}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57195){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57219 = cljs.core.keyword_identical_QMARK_;
var expr__57220 = k__5349__auto__;
if(cljs.core.truth_((pred__57219.cljs$core$IFn$_invoke$arity$2 ? pred__57219.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__57220) : pred__57219.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__57220)))){
return (new datascript.pull_api.MultivalAttrFrame(G__57195,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57219.cljs$core$IFn$_invoke$arity$2 ? pred__57219.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57220) : pred__57219.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57220)))){
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,G__57195,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57219.cljs$core$IFn$_invoke$arity$2 ? pred__57219.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57220) : pred__57219.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57220)))){
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,G__57195,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57195),null));
}
}
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57195){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,G__57195,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.MultivalAttrFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var acc__$1 = self__.acc;
var datoms__$1 = self__.datoms;
while(true){
var datom = datascript.pull_api.first_seq(datoms__$1);
if((((datom == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame((function (){var G__57228 = cljs.core.not_empty(cljs.core.persistent_BANG_(acc__$1));
var fexpr__57227 = self__.attr.xform;
return (fexpr__57227.cljs$core$IFn$_invoke$arity$1 ? fexpr__57227.cljs$core$IFn$_invoke$arity$1(G__57228) : fexpr__57227.call(null,G__57228));
})(),(function (){var or__5043__auto__ = datoms__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = self__.attr.limit;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(acc__$1) >= self__.attr.limit);
} else {
return and__5041__auto__;
}
})())){
var datoms__$2 = datoms__$1;
while(true){
var datom__$1 = datascript.pull_api.first_seq(datoms__$2);
if((((datom__$1 == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom__$1.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.persistent_BANG_(acc__$1),(function (){var or__5043__auto__ = datoms__$2;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
var G__57526 = datascript.pull_api.next_seq(datoms__$2);
datoms__$2 = G__57526;
continue;
}
break;
}
} else {
var G__57530 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datom.v);
var G__57531 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__57530;
datoms__$1 = G__57531;
continue;

}
}
break;
}
}));

(datascript.pull_api.MultivalAttrFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null);
}));

(datascript.pull_api.MultivalAttrFrame.cljs$lang$type = true);

(datascript.pull_api.MultivalAttrFrame.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/MultivalAttrFrame",null,(1),null));
}));

(datascript.pull_api.MultivalAttrFrame.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/MultivalAttrFrame");
}));

/**
 * Positional factory function for datascript.pull-api/MultivalAttrFrame.
 */
datascript.pull_api.__GT_MultivalAttrFrame = (function datascript$pull_api$__GT_MultivalAttrFrame(acc,attr,datoms){
return (new datascript.pull_api.MultivalAttrFrame(acc,attr,datoms,null,null,null));
});

/**
 * Factory function for datascript.pull-api/MultivalAttrFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_MultivalAttrFrame = (function datascript$pull_api$map__GT_MultivalAttrFrame(G__57199){
var extmap__5382__auto__ = (function (){var G__57229 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57199,new cljs.core.Keyword(null,"acc","acc",838566312),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__57199)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57229);
} else {
return G__57229;
}
})();
return (new datascript.pull_api.MultivalAttrFrame(new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__57199),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__57199),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__57199),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.MultivalRefAttrFrame = (function (seen,recursion_limits,acc,pattern,attr,datoms,__meta,__extmap,__hash){
this.seen = seen;
this.recursion_limits = recursion_limits;
this.acc = acc;
this.pattern = pattern;
this.attr = attr;
this.datoms = datoms;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57231,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57239 = k57231;
var G__57239__$1 = (((G__57239 instanceof cljs.core.Keyword))?G__57239.fqn:null);
switch (G__57239__$1) {
case "seen":
return self__.seen;

break;
case "recursion-limits":
return self__.recursion_limits;

break;
case "acc":
return self__.acc;

break;
case "pattern":
return self__.pattern;

break;
case "attr":
return self__.attr;

break;
case "datoms":
return self__.datoms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57231,else__5343__auto__);

}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57240){
var vec__57241 = p__57240;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57241,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57241,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.MultivalRefAttrFrame{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57230){
var self__ = this;
var G__57230__$1 = this;
return (new cljs.core.RecordIter((0),G__57230__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1769511936 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57232,other57233){
var self__ = this;
var this57232__$1 = this;
return (((!((other57233 == null)))) && ((((this57232__$1.constructor === other57233.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57232__$1.seen,other57233.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57232__$1.recursion_limits,other57233.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57232__$1.acc,other57233.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57232__$1.pattern,other57233.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57232__$1.attr,other57233.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57232__$1.datoms,other57233.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57232__$1.__extmap,other57233.__extmap)))))))))))))))));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57231){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57258 = k57231;
var G__57258__$1 = (((G__57258 instanceof cljs.core.Keyword))?G__57258.fqn:null);
switch (G__57258__$1) {
case "seen":
case "recursion-limits":
case "acc":
case "pattern":
case "attr":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57231);

}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57230){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57259 = cljs.core.keyword_identical_QMARK_;
var expr__57260 = k__5349__auto__;
if(cljs.core.truth_((pred__57259.cljs$core$IFn$_invoke$arity$2 ? pred__57259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57260) : pred__57259.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57260)))){
return (new datascript.pull_api.MultivalRefAttrFrame(G__57230,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57259.cljs$core$IFn$_invoke$arity$2 ? pred__57259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57260) : pred__57259.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57260)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,G__57230,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57259.cljs$core$IFn$_invoke$arity$2 ? pred__57259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__57260) : pred__57259.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__57260)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,G__57230,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57259.cljs$core$IFn$_invoke$arity$2 ? pred__57259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57260) : pred__57259.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57260)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,G__57230,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57259.cljs$core$IFn$_invoke$arity$2 ? pred__57259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57260) : pred__57259.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57260)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__57230,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57259.cljs$core$IFn$_invoke$arity$2 ? pred__57259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57260) : pred__57259.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57260)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__57230,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57230),null));
}
}
}
}
}
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57230){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,G__57230,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.MultivalRefAttrFrame.prototype.datascript$pull_api$IFrame$_merge$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,datascript.pull_api.conj_some_BANG_(self__.acc,result.value),self__.pattern,self__.attr,datascript.pull_api.next_seq(self__.datoms),null,null,null));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var datom = datascript.pull_api.first_seq(self__.datoms);
if((((datom == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame((function (){var G__57263 = cljs.core.not_empty(cljs.core.persistent_BANG_(self__.acc));
var fexpr__57262 = self__.attr.xform;
return (fexpr__57262.cljs$core$IFn$_invoke$arity$1 ? fexpr__57262.cljs$core$IFn$_invoke$arity$1(G__57263) : fexpr__57262.call(null,G__57263));
})(),(function (){var or__5043__auto__ = self__.datoms;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = self__.attr.limit;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(self__.acc) >= self__.attr.limit);
} else {
return and__5041__auto__;
}
})())){
var datoms__$1 = self__.datoms;
while(true){
var datom__$1 = datascript.pull_api.first_seq(datoms__$1);
if((((datom__$1 == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom__$1.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.persistent_BANG_(self__.acc),(function (){var or__5043__auto__ = datoms__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
var G__57538 = datascript.pull_api.next_seq(datoms__$1);
datoms__$1 = G__57538;
continue;
}
break;
}
} else {
var id = (cljs.core.truth_(self__.attr.reverse_QMARK_)?datom.e:datom.v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,(datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(context,self__.seen,self__.recursion_limits,self__.pattern,self__.attr,id) : datascript.pull_api.ref_frame.call(null,context,self__.seen,self__.recursion_limits,self__.pattern,self__.attr,id))], null);

}
}
}));

(datascript.pull_api.MultivalRefAttrFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seen","seen",1121531738,null),new cljs.core.Symbol(null,"recursion-limits","recursion-limits",-891577955,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null);
}));

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$type = true);

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/MultivalRefAttrFrame",null,(1),null));
}));

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/MultivalRefAttrFrame");
}));

/**
 * Positional factory function for datascript.pull-api/MultivalRefAttrFrame.
 */
datascript.pull_api.__GT_MultivalRefAttrFrame = (function datascript$pull_api$__GT_MultivalRefAttrFrame(seen,recursion_limits,acc,pattern,attr,datoms){
return (new datascript.pull_api.MultivalRefAttrFrame(seen,recursion_limits,acc,pattern,attr,datoms,null,null,null));
});

/**
 * Factory function for datascript.pull-api/MultivalRefAttrFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_MultivalRefAttrFrame = (function datascript$pull_api$map__GT_MultivalRefAttrFrame(G__57235){
var extmap__5382__auto__ = (function (){var G__57272 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57235,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__57235)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57272);
} else {
return G__57272;
}
})();
return (new datascript.pull_api.MultivalRefAttrFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__57235),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__57235),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__57235),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__57235),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__57235),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__57235),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.AttrsFrame = (function (seen,recursion_limits,acc,pattern,attr,attrs,datoms,id,__meta,__extmap,__hash){
this.seen = seen;
this.recursion_limits = recursion_limits;
this.acc = acc;
this.pattern = pattern;
this.attr = attr;
this.attrs = attrs;
this.datoms = datoms;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.AttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57274,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57282 = k57274;
var G__57282__$1 = (((G__57282 instanceof cljs.core.Keyword))?G__57282.fqn:null);
switch (G__57282__$1) {
case "seen":
return self__.seen;

break;
case "recursion-limits":
return self__.recursion_limits;

break;
case "acc":
return self__.acc;

break;
case "pattern":
return self__.pattern;

break;
case "attr":
return self__.attr;

break;
case "attrs":
return self__.attrs;

break;
case "datoms":
return self__.datoms;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57274,else__5343__auto__);

}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57283){
var vec__57284 = p__57283;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57284,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57284,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.AttrsFrame{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57273){
var self__ = this;
var G__57273__$1 = this;
return (new cljs.core.RecordIter((0),G__57273__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1127179791 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57275,other57276){
var self__ = this;
var this57275__$1 = this;
return (((!((other57276 == null)))) && ((((this57275__$1.constructor === other57276.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57275__$1.seen,other57276.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57275__$1.recursion_limits,other57276.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57275__$1.acc,other57276.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57275__$1.pattern,other57276.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57275__$1.attr,other57276.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57275__$1.attrs,other57276.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57275__$1.datoms,other57276.datoms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57275__$1.id,other57276.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57275__$1.__extmap,other57276.__extmap)))))))))))))))))))));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57274){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57309 = k57274;
var G__57309__$1 = (((G__57309 instanceof cljs.core.Keyword))?G__57309.fqn:null);
switch (G__57309__$1) {
case "seen":
case "recursion-limits":
case "acc":
case "pattern":
case "attr":
case "attrs":
case "datoms":
case "id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57274);

}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57273){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57314 = cljs.core.keyword_identical_QMARK_;
var expr__57315 = k__5349__auto__;
if(cljs.core.truth_((pred__57314.cljs$core$IFn$_invoke$arity$2 ? pred__57314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57315) : pred__57314.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57315)))){
return (new datascript.pull_api.AttrsFrame(G__57273,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57314.cljs$core$IFn$_invoke$arity$2 ? pred__57314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57315) : pred__57314.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57315)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,G__57273,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57314.cljs$core$IFn$_invoke$arity$2 ? pred__57314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__57315) : pred__57314.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__57315)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,G__57273,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57314.cljs$core$IFn$_invoke$arity$2 ? pred__57314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57315) : pred__57314.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57315)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,G__57273,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57314.cljs$core$IFn$_invoke$arity$2 ? pred__57314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57315) : pred__57314.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57315)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__57273,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57314.cljs$core$IFn$_invoke$arity$2 ? pred__57314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57315) : pred__57314.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57315)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__57273,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57314.cljs$core$IFn$_invoke$arity$2 ? pred__57314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57315) : pred__57314.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57315)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,G__57273,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57314.cljs$core$IFn$_invoke$arity$2 ? pred__57314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__57315) : pred__57314.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__57315)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,G__57273,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57273),null));
}
}
}
}
}
}
}
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null))], null),self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57273){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,G__57273,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$_merge$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,datascript.pull_api.assoc_some_BANG_(self__.acc,self__.attr.as,result.value),self__.pattern,datascript.pull_api.first_seq(self__.attrs),datascript.pull_api.next_seq(self__.attrs),cljs.core.not_empty((function (){var or__5043__auto__ = result.datoms;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return datascript.pull_api.next_seq(self__.datoms);
}
})()),self__.id,null,null,null));
}));

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var acc__$1 = self__.acc;
var attr__$1 = self__.attr;
var attrs__$1 = self__.attrs;
var datoms__$1 = self__.datoms;
while(true){
if((((datoms__$1 == null)) && ((attr__$1 == null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57352 = self__.seen;
var G__57353 = self__.recursion_limits;
var G__57354 = acc__$1;
var G__57355 = self__.pattern;
var G__57356 = datascript.pull_api.first_seq(self__.pattern.reverse_attrs);
var G__57357 = datascript.pull_api.next_seq(self__.pattern.reverse_attrs);
var G__57358 = self__.id;
return (datascript.pull_api.__GT_ReverseAttrsFrame.cljs$core$IFn$_invoke$arity$7 ? datascript.pull_api.__GT_ReverseAttrsFrame.cljs$core$IFn$_invoke$arity$7(G__57352,G__57353,G__57354,G__57355,G__57356,G__57357,G__57358) : datascript.pull_api.__GT_ReverseAttrsFrame.call(null,G__57352,G__57353,G__57354,G__57355,G__57356,G__57357,G__57358));
})()], null);
} else {
if((((!((attr__$1 == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr__$1.name)))){
var G__57549 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,(function (){var fexpr__57359 = attr__$1.xform;
return (fexpr__57359.cljs$core$IFn$_invoke$arity$1 ? fexpr__57359.cljs$core$IFn$_invoke$arity$1(self__.id) : fexpr__57359.call(null,self__.id));
})());
var G__57550 = datascript.pull_api.first_seq(attrs__$1);
var G__57551 = datascript.pull_api.next_seq(attrs__$1);
var G__57552 = datoms__$1;
acc__$1 = G__57549;
attr__$1 = G__57550;
attrs__$1 = G__57551;
datoms__$1 = G__57552;
continue;
} else {
var datom = datascript.pull_api.first_seq(datoms__$1);
var cmp = (cljs.core.truth_((function (){var and__5041__auto__ = datom;
if(cljs.core.truth_(and__5041__auto__)){
return attr__$1;
} else {
return and__5041__auto__;
}
})())?cljs.core.compare(attr__$1.name,datom.a):null);
var attr_ahead_QMARK_ = (function (){var or__5043__auto__ = (attr__$1 == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = cmp;
if(cljs.core.truth_(and__5041__auto__)){
return (cmp > (0));
} else {
return and__5041__auto__;
}
}
})();
var datom_ahead_QMARK_ = (function (){var or__5043__auto__ = (datom == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = cmp;
if(cljs.core.truth_(and__5041__auto__)){
return (cmp < (0));
} else {
return and__5041__auto__;
}
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = self__.pattern.wildcard_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (!((datom == null)));
if(and__5041__auto____$1){
return attr_ahead_QMARK_;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var datom_attr = datascript.lru._get(datascript.db.unfiltered_db(context.db).pull_attrs,datom.a,((function (acc__$1,attr__$1,attrs__$1,datoms__$1,datom,cmp,attr_ahead_QMARK_,datom_ahead_QMARK_,this$__$1){
return (function (){
return datascript.pull_parser.parse_attr_name(context.db,datom.a);
});})(acc__$1,attr__$1,attrs__$1,datoms__$1,datom,cmp,attr_ahead_QMARK_,datom_ahead_QMARK_,this$__$1))
);
var G__57554 = acc__$1;
var G__57555 = datom_attr;
var G__57556 = (cljs.core.truth_(attr__$1)?datascript.pull_api.conj_seq(attrs__$1,attr__$1):null);
var G__57557 = datoms__$1;
acc__$1 = G__57554;
attr__$1 = G__57555;
attrs__$1 = G__57556;
datoms__$1 = G__57557;
continue;
} else {
if(cljs.core.truth_(attr_ahead_QMARK_)){
var G__57558 = acc__$1;
var G__57559 = attr__$1;
var G__57560 = attrs__$1;
var G__57561 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__57558;
attr__$1 = G__57559;
attrs__$1 = G__57560;
datoms__$1 = G__57561;
continue;
} else {
datascript.pull_api.visit(context,new cljs.core.Keyword("db.pull","attr","db.pull/attr",-533298746),self__.id,attr__$1.name,null);

if(cljs.core.truth_((function (){var and__5041__auto__ = datom_ahead_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (attr__$1 == null);
} else {
return and__5041__auto__;
}
})())){
var G__57562 = acc__$1;
var G__57563 = datascript.pull_api.first_seq(attrs__$1);
var G__57564 = datascript.pull_api.next_seq(attrs__$1);
var G__57565 = datoms__$1;
acc__$1 = G__57562;
attr__$1 = G__57563;
attrs__$1 = G__57564;
datoms__$1 = G__57565;
continue;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = datom_ahead_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (!((new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1) == null)));
} else {
return and__5041__auto__;
}
})())){
var G__57567 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1));
var G__57568 = datascript.pull_api.first_seq(attrs__$1);
var G__57569 = datascript.pull_api.next_seq(attrs__$1);
var G__57570 = datoms__$1;
acc__$1 = G__57567;
attr__$1 = G__57568;
attrs__$1 = G__57569;
datoms__$1 = G__57570;
continue;
} else {
if(cljs.core.truth_(datom_ahead_QMARK_)){
var temp__5722__auto__ = (function (){var fexpr__57364 = attr__$1.xform;
return (fexpr__57364.cljs$core$IFn$_invoke$arity$1 ? fexpr__57364.cljs$core$IFn$_invoke$arity$1(null) : fexpr__57364.call(null,null));
})();
if((temp__5722__auto__ == null)){
var G__57571 = acc__$1;
var G__57572 = datascript.pull_api.first_seq(attrs__$1);
var G__57573 = datascript.pull_api.next_seq(attrs__$1);
var G__57574 = datoms__$1;
acc__$1 = G__57571;
attr__$1 = G__57572;
attrs__$1 = G__57573;
datoms__$1 = G__57574;
continue;
} else {
var value = temp__5722__auto__;
var G__57575 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,value);
var G__57576 = datascript.pull_api.first_seq(attrs__$1);
var G__57577 = datascript.pull_api.next_seq(attrs__$1);
var G__57578 = datoms__$1;
acc__$1 = G__57575;
attr__$1 = G__57576;
attrs__$1 = G__57577;
datoms__$1 = G__57578;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = attr__$1.multival_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return attr__$1.ref_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),self__.pattern,attr__$1,datoms__$1,null,null,null))], null);
} else {
if(cljs.core.truth_(attr__$1.multival_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalAttrFrame(cljs.core.transient$(cljs.core.PersistentVector.EMPTY),attr__$1,datoms__$1,null,null,null))], null);
} else {
if(cljs.core.truth_(attr__$1.ref_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(function (){var G__57376 = context;
var G__57377 = self__.seen;
var G__57378 = self__.recursion_limits;
var G__57379 = self__.pattern;
var G__57380 = attr__$1;
var G__57381 = datom.v;
return (datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(G__57376,G__57377,G__57378,G__57379,G__57380,G__57381) : datascript.pull_api.ref_frame.call(null,G__57376,G__57377,G__57378,G__57379,G__57380,G__57381));
})()], null);
} else {
var G__57579 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,(function (){var G__57384 = datom.v;
var fexpr__57383 = attr__$1.xform;
return (fexpr__57383.cljs$core$IFn$_invoke$arity$1 ? fexpr__57383.cljs$core$IFn$_invoke$arity$1(G__57384) : fexpr__57383.call(null,G__57384));
})());
var G__57580 = datascript.pull_api.first_seq(attrs__$1);
var G__57581 = datascript.pull_api.next_seq(attrs__$1);
var G__57582 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__57579;
attr__$1 = G__57580;
attrs__$1 = G__57581;
datoms__$1 = G__57582;
continue;

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

(datascript.pull_api.AttrsFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seen","seen",1121531738,null),new cljs.core.Symbol(null,"recursion-limits","recursion-limits",-891577955,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullPattern","PullPattern",1378528189,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
}));

(datascript.pull_api.AttrsFrame.cljs$lang$type = true);

(datascript.pull_api.AttrsFrame.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/AttrsFrame",null,(1),null));
}));

(datascript.pull_api.AttrsFrame.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/AttrsFrame");
}));

/**
 * Positional factory function for datascript.pull-api/AttrsFrame.
 */
datascript.pull_api.__GT_AttrsFrame = (function datascript$pull_api$__GT_AttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,datoms,id){
return (new datascript.pull_api.AttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,datoms,id,null,null,null));
});

/**
 * Factory function for datascript.pull-api/AttrsFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_AttrsFrame = (function datascript$pull_api$map__GT_AttrsFrame(G__57277){
var extmap__5382__auto__ = (function (){var G__57387 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57277,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
if(cljs.core.record_QMARK_(G__57277)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57387);
} else {
return G__57387;
}
})();
return (new datascript.pull_api.AttrsFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__57277),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__57277),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__57277),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__57277),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__57277),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__57277),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__57277),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__57277),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.ReverseAttrsFrame = (function (seen,recursion_limits,acc,pattern,attr,attrs,id,__meta,__extmap,__hash){
this.seen = seen;
this.recursion_limits = recursion_limits;
this.acc = acc;
this.pattern = pattern;
this.attr = attr;
this.attrs = attrs;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57395,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57399 = k57395;
var G__57399__$1 = (((G__57399 instanceof cljs.core.Keyword))?G__57399.fqn:null);
switch (G__57399__$1) {
case "seen":
return self__.seen;

break;
case "recursion-limits":
return self__.recursion_limits;

break;
case "acc":
return self__.acc;

break;
case "pattern":
return self__.pattern;

break;
case "attr":
return self__.attr;

break;
case "attrs":
return self__.attrs;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57395,else__5343__auto__);

}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57400){
var vec__57401 = p__57400;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57401,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57401,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.ReverseAttrsFrame{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57394){
var self__ = this;
var G__57394__$1 = this;
return (new cljs.core.RecordIter((0),G__57394__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (470210558 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57396,other57397){
var self__ = this;
var this57396__$1 = this;
return (((!((other57397 == null)))) && ((((this57396__$1.constructor === other57397.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57396__$1.seen,other57397.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57396__$1.recursion_limits,other57397.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57396__$1.acc,other57397.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57396__$1.pattern,other57397.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57396__$1.attr,other57397.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57396__$1.attrs,other57397.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57396__$1.id,other57397.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57396__$1.__extmap,other57397.__extmap)))))))))))))))))));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57395){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57412 = k57395;
var G__57412__$1 = (((G__57412 instanceof cljs.core.Keyword))?G__57412.fqn:null);
switch (G__57412__$1) {
case "seen":
case "recursion-limits":
case "acc":
case "pattern":
case "attr":
case "attrs":
case "id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57395);

}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57394){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57413 = cljs.core.keyword_identical_QMARK_;
var expr__57414 = k__5349__auto__;
if(cljs.core.truth_((pred__57413.cljs$core$IFn$_invoke$arity$2 ? pred__57413.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57414) : pred__57413.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57414)))){
return (new datascript.pull_api.ReverseAttrsFrame(G__57394,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57413.cljs$core$IFn$_invoke$arity$2 ? pred__57413.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57414) : pred__57413.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57414)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,G__57394,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57413.cljs$core$IFn$_invoke$arity$2 ? pred__57413.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__57414) : pred__57413.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__57414)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,G__57394,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57413.cljs$core$IFn$_invoke$arity$2 ? pred__57413.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57414) : pred__57413.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57414)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,G__57394,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57413.cljs$core$IFn$_invoke$arity$2 ? pred__57413.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57414) : pred__57413.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57414)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__57394,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57413.cljs$core$IFn$_invoke$arity$2 ? pred__57413.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57414) : pred__57413.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57414)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__57394,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57413.cljs$core$IFn$_invoke$arity$2 ? pred__57413.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__57414) : pred__57413.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__57414)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,G__57394,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57394),null));
}
}
}
}
}
}
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null))], null),self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57394){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,G__57394,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.ReverseAttrsFrame.prototype.datascript$pull_api$IFrame$_merge$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,datascript.pull_api.assoc_some_BANG_(self__.acc,self__.attr.as,result.value),self__.pattern,datascript.pull_api.first_seq(self__.attrs),datascript.pull_api.next_seq(self__.attrs),self__.id,null,null,null));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var acc__$1 = self__.acc;
var attr__$1 = self__.attr;
var attrs__$1 = self__.attrs;
while(true){
if((attr__$1 == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.not_empty(cljs.core.persistent_BANG_(acc__$1)),null,null,null,null))], null);
} else {
var name = attr__$1.name;
var db = context.db;
var datoms = (((db instanceof datascript.db.DB))?me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db.avet,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),name,self__.id,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),name,self__.id,(2147483647))):datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,name,self__.id], null)));
datascript.pull_api.visit(context,new cljs.core.Keyword("db.pull","reverse","db.pull/reverse",1999788297),null,name,self__.id);

if(((cljs.core.empty_QMARK_(datoms)) && ((!((new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1) == null)))))){
var G__57598 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1));
var G__57599 = datascript.pull_api.first_seq(attrs__$1);
var G__57600 = datascript.pull_api.next_seq(attrs__$1);
acc__$1 = G__57598;
attr__$1 = G__57599;
attrs__$1 = G__57600;
continue;
} else {
if(cljs.core.empty_QMARK_(datoms)){
var G__57601 = acc__$1;
var G__57602 = datascript.pull_api.first_seq(attrs__$1);
var G__57603 = datascript.pull_api.next_seq(attrs__$1);
acc__$1 = G__57601;
attr__$1 = G__57602;
attrs__$1 = G__57603;
continue;
} else {
if(cljs.core.truth_(attr__$1.component_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,self__.id,null,null,null)),(function (){var G__57436 = context;
var G__57437 = self__.seen;
var G__57438 = self__.recursion_limits;
var G__57439 = self__.pattern;
var G__57440 = attr__$1;
var G__57441 = datascript.pull_api.first_seq(datoms).e;
return (datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(G__57436,G__57437,G__57438,G__57439,G__57440,G__57441) : datascript.pull_api.ref_frame.call(null,G__57436,G__57437,G__57438,G__57439,G__57440,G__57441));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),self__.pattern,attr__$1,datoms,null,null,null))], null);

}
}
}
}
break;
}
}));

(datascript.pull_api.ReverseAttrsFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seen","seen",1121531738,null),new cljs.core.Symbol(null,"recursion-limits","recursion-limits",-891577955,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
}));

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$type = true);

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/ReverseAttrsFrame",null,(1),null));
}));

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/ReverseAttrsFrame");
}));

/**
 * Positional factory function for datascript.pull-api/ReverseAttrsFrame.
 */
datascript.pull_api.__GT_ReverseAttrsFrame = (function datascript$pull_api$__GT_ReverseAttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,id){
return (new datascript.pull_api.ReverseAttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,id,null,null,null));
});

/**
 * Factory function for datascript.pull-api/ReverseAttrsFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_ReverseAttrsFrame = (function datascript$pull_api$map__GT_ReverseAttrsFrame(G__57398){
var extmap__5382__auto__ = (function (){var G__57442 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57398,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
if(cljs.core.record_QMARK_(G__57398)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57442);
} else {
return G__57442;
}
})();
return (new datascript.pull_api.ReverseAttrsFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__57398),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__57398),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__57398),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__57398),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__57398),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__57398),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__57398),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

datascript.pull_api.ref_frame = (function datascript$pull_api$ref_frame(context,seen,recursion_limits,pattern,attr,id){
if(((cljs.core.not(attr.recursive_QMARK_)) && (cljs.core.not(attr.component_QMARK_)))){
var G__57443 = context;
var G__57444 = seen;
var G__57445 = recursion_limits;
var G__57446 = attr.pattern;
var G__57447 = id;
return (datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5 ? datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5(G__57443,G__57444,G__57445,G__57446,G__57447) : datascript.pull_api.attrs_frame.call(null,G__57443,G__57444,G__57445,G__57446,G__57447));
} else {
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(id) : seen.call(null,id)))){
return (new datascript.pull_api.ResultFrame(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),id], null),null,null,null,null));
} else {
var lim = (recursion_limits.cljs$core$IFn$_invoke$arity$1 ? recursion_limits.cljs$core$IFn$_invoke$arity$1(attr) : recursion_limits.call(null,attr));
if(cljs.core.truth_((function (){var and__5041__auto__ = lim;
if(cljs.core.truth_(and__5041__auto__)){
return (lim <= (0));
} else {
return and__5041__auto__;
}
})())){
return (new datascript.pull_api.ResultFrame(null,null,null,null,null));
} else {
var seen_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,id);
var recursion_limits_SINGLEQUOTE_ = (cljs.core.truth_(lim)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(recursion_limits,attr,cljs.core.dec):(cljs.core.truth_(attr.recursion_limit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(recursion_limits,attr,(attr.recursion_limit - (1))):recursion_limits
));
var G__57448 = context;
var G__57449 = seen_SINGLEQUOTE_;
var G__57450 = recursion_limits_SINGLEQUOTE_;
var G__57451 = (cljs.core.truth_(attr.recursive_QMARK_)?pattern:attr.pattern);
var G__57452 = id;
return (datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5 ? datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5(G__57448,G__57449,G__57450,G__57451,G__57452) : datascript.pull_api.attrs_frame.call(null,G__57448,G__57449,G__57450,G__57451,G__57452));

}
}
}
});
datascript.pull_api.attrs_frame = (function datascript$pull_api$attrs_frame(context,seen,recursion_limits,pattern,id){
var db = context.db;
var datoms = (cljs.core.truth_((function (){var and__5041__auto__ = pattern.wildcard_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (db instanceof datascript.db.DB);
} else {
return and__5041__auto__;
}
})())?me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db.eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,null,null,(2147483647))):(cljs.core.truth_(pattern.wildcard_QMARK_)?datascript.db._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)):(((pattern.first_attr == null))?null:(function (){var from = pattern.first_attr.name;
var to = pattern.last_attr.name;
if((db instanceof datascript.db.DB)){
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db.eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,from,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,to,null,(2147483647)));
} else {
return datascript.db._seek_datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));

}
})())));
if(cljs.core.truth_(pattern.wildcard_QMARK_)){
datascript.pull_api.visit(context,new cljs.core.Keyword("db.pull","wildcard","db.pull/wildcard",116316031),id,null,null);
} else {
}

return (new datascript.pull_api.AttrsFrame(seen,recursion_limits,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),pattern,datascript.pull_api.first_seq(pattern.attrs),datascript.pull_api.next_seq(pattern.attrs),datoms,id,null,null,null));
});
datascript.pull_api.pull_impl = (function datascript$pull_api$pull_impl(parsed_opts,id){
var map__57457 = parsed_opts;
var map__57457__$1 = cljs.core.__destructure_map(map__57457);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57457__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57457__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var temp__5724__auto__ = datascript.db.entid(context.db,id);
if((temp__5724__auto__ == null)){
return null;
} else {
var eid = temp__5724__auto__;
var stack = (new cljs.core.List(null,datascript.pull_api.attrs_frame(context,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,pattern,eid),null,(1),null));
while(true){
var last = datascript.pull_api.first_seq(stack);
var stack_SINGLEQUOTE_ = datascript.pull_api.next_seq(stack);
if((!((last instanceof datascript.pull_api.ResultFrame)))){
var G__57610 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.conj_seq,stack_SINGLEQUOTE_,datascript.pull_api._run(last,context));
stack = G__57610;
continue;
} else {
if((stack_SINGLEQUOTE_ == null)){
return last.value;
} else {
var penultimate = datascript.pull_api.first_seq(stack_SINGLEQUOTE_);
var stack_SINGLEQUOTE__SINGLEQUOTE_ = datascript.pull_api.next_seq(stack_SINGLEQUOTE_);
var G__57611 = datascript.pull_api.conj_seq(stack_SINGLEQUOTE__SINGLEQUOTE_,datascript.pull_api._merge(penultimate,last));
stack = G__57611;
continue;

}
}
break;
}
}
});
datascript.pull_api.parse_opts = (function datascript$pull_api$parse_opts(var_args){
var G__57469 = arguments.length;
switch (G__57469) {
case 2:
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2 = (function (db,pattern){
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3(db,pattern,null);
}));

(datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3 = (function (db,pattern,p__57474){
var map__57475 = p__57474;
var map__57475__$1 = cljs.core.__destructure_map(map__57475);
var visitor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57475__$1,new cljs.core.Keyword(null,"visitor","visitor",-1026865865));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),datascript.lru._get(datascript.db.unfiltered_db(db).pull_patterns,pattern,(function (){
return datascript.pull_parser.parse_pattern(db,pattern);
})),new cljs.core.Keyword(null,"context","context",-830191113),(new datascript.pull_api.Context(db,visitor,null,null,null))], null);
}));

(datascript.pull_api.parse_opts.cljs$lang$maxFixedArity = 3);

/**
 * Supported opts:
 * 
 * :visitor a fn of 4 arguments, will be called for every entity/attribute pull touches
 * 
 * (:db.pull/attr     e   a   nil) - when pulling a normal attribute, no matter if it has value or not
 * (:db.pull/wildcard e   nil nil) - when pulling every attribute on an entity
 * (:db.pull/reverse  nil a   v  ) - when pulling reverse attribute
 */
datascript.pull_api.pull = (function datascript$pull_api$pull(var_args){
var G__57477 = arguments.length;
switch (G__57477) {
case 3:
return datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$3 = (function (db,pattern,id){
return datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$4(db,pattern,id,cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$4 = (function (db,pattern,id,opts){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var parsed_opts = datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3(db,pattern,opts);
return datascript.pull_api.pull_impl(parsed_opts,id);
}));

(datascript.pull_api.pull.cljs$lang$maxFixedArity = 4);

datascript.pull_api.pull_many = (function datascript$pull_api$pull_many(var_args){
var G__57481 = arguments.length;
switch (G__57481) {
case 3:
return datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$3 = (function (db,pattern,ids){
return datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$4(db,pattern,ids,cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$4 = (function (db,pattern,ids,opts){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var parsed_opts = datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3(db,pattern,opts);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__57478_SHARP_){
return datascript.pull_api.pull_impl(parsed_opts,p1__57478_SHARP_);
}),ids);
}));

(datascript.pull_api.pull_many.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=datascript.pull_api.js.map
