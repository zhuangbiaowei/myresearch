goog.provide('frontend.format.adoc');
frontend.format.adoc.loaded_QMARK_ = (function frontend$format$adoc$loaded_QMARK_(){
return window.Asciidoctor;
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
 * @implements {frontend.format.protocol.Format}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.format.adoc.AdocMode = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.format.adoc.AdocMode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k81319,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__81325 = k81319;
switch (G__81325) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k81319,else__5343__auto__);

}
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__81326){
var vec__81327 = p__81326;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81327,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81327,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.format.adoc.AdocMode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__81318){
var self__ = this;
var G__81318__$1 = this;
return (new cljs.core.RecordIter((0),G__81318__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.format.adoc.AdocMode(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1258796506 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this81320,other81321){
var self__ = this;
var this81320__$1 = this;
return (((!((other81321 == null)))) && ((((this81320__$1.constructor === other81321.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81320__$1.__extmap,other81321.__extmap)))));
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$toEdn$arity$3 = (function (_this,_content,_config){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$toHtml$arity$4 = (function (_this,content,_config,_references){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(frontend.format.adoc.loaded_QMARK_())){
var config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"showTitle","showTitle",-420376594),false,new cljs.core.Keyword(null,"hardbreaks","hardbreaks",1615031829),true,new cljs.core.Keyword(null,"icons","icons",-297140977),"font"], null)], null);
return window.Asciidoctor().convert(content,cljs.core.clj__GT_js(config));
} else {
return null;
}
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$loaded_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return (!((frontend.format.adoc.loaded_QMARK_() == null)));
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$lazyLoad$arity$2 = (function (_this,ok_handler){
var self__ = this;
var _this__$1 = this;
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2("https://cdnjs.cloudflare.com/ajax/libs/asciidoctor.js/1.5.9/asciidoctor.min.js",ok_handler);
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$exportMarkdown$arity$4 = (function (_this,_content,_config,_references){
var self__ = this;
var _this__$1 = this;
throw "not support";
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$exportOPML$arity$5 = (function (_this,_content,_config,_title,_references){
var self__ = this;
var _this__$1 = this;
throw "not support";
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.format.adoc.AdocMode(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k81319){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k81319);
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__81318){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__81352 = cljs.core.keyword_identical_QMARK_;
var expr__81353 = k__5349__auto__;
return (new frontend.format.adoc.AdocMode(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__81318),null));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__81318){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.format.adoc.AdocMode(G__81318,self__.__extmap,self__.__hash));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.format.adoc.AdocMode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.format.adoc.AdocMode.cljs$lang$type = true);

(frontend.format.adoc.AdocMode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.format.adoc/AdocMode",null,(1),null));
}));

(frontend.format.adoc.AdocMode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.format.adoc/AdocMode");
}));

/**
 * Positional factory function for frontend.format.adoc/AdocMode.
 */
frontend.format.adoc.__GT_AdocMode = (function frontend$format$adoc$__GT_AdocMode(){
return (new frontend.format.adoc.AdocMode(null,null,null));
});

/**
 * Factory function for frontend.format.adoc/AdocMode, taking a map of keywords to field values.
 */
frontend.format.adoc.map__GT_AdocMode = (function frontend$format$adoc$map__GT_AdocMode(G__81322){
var extmap__5382__auto__ = (function (){var G__81365 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__81322);
if(cljs.core.record_QMARK_(G__81322)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__81365);
} else {
return G__81365;
}
})();
return (new frontend.format.adoc.AdocMode(null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.format.adoc.js.map
