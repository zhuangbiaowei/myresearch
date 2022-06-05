goog.provide('frontend.format.mldoc');
goog.scope(function(){
  frontend.format.mldoc.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$mldoc$index=shadow.js.require("module$node_modules$mldoc$index", {});
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.anchorLink !== 'undefined')){
} else {
frontend.format.mldoc.anchorLink = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"anchorLink");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.parseOPML !== 'undefined')){
} else {
frontend.format.mldoc.parseOPML = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseOPML");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.parseAndExportMarkdown !== 'undefined')){
} else {
frontend.format.mldoc.parseAndExportMarkdown = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseAndExportMarkdown");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.parseAndExportOPML !== 'undefined')){
} else {
frontend.format.mldoc.parseAndExportOPML = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseAndExportOPML");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.export$ !== 'undefined')){
} else {
frontend.format.mldoc.export$ = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"export");
}
frontend.format.mldoc.parse_opml = (function frontend$format$mldoc$parse_opml(content){
return (frontend.format.mldoc.parseOPML.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.parseOPML.cljs$core$IFn$_invoke$arity$1(content) : frontend.format.mldoc.parseOPML.call(null,content));
});
frontend.format.mldoc.parse_export_markdown = (function frontend$format$mldoc$parse_export_markdown(content,config,references){
var G__59317 = content;
var G__59318 = config;
var G__59319 = (function (){var or__5043__auto__ = references;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return logseq.graph_parser.mldoc.default_references;
}
})();
return (frontend.format.mldoc.parseAndExportMarkdown.cljs$core$IFn$_invoke$arity$3 ? frontend.format.mldoc.parseAndExportMarkdown.cljs$core$IFn$_invoke$arity$3(G__59317,G__59318,G__59319) : frontend.format.mldoc.parseAndExportMarkdown.call(null,G__59317,G__59318,G__59319));
});
frontend.format.mldoc.parse_export_opml = (function frontend$format$mldoc$parse_export_opml(content,config,title,references){
var G__59345 = content;
var G__59346 = config;
var G__59347 = title;
var G__59348 = (function (){var or__5043__auto__ = references;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return logseq.graph_parser.mldoc.default_references;
}
})();
return (frontend.format.mldoc.parseAndExportOPML.cljs$core$IFn$_invoke$arity$4 ? frontend.format.mldoc.parseAndExportOPML.cljs$core$IFn$_invoke$arity$4(G__59345,G__59346,G__59347,G__59348) : frontend.format.mldoc.parseAndExportOPML.call(null,G__59345,G__59346,G__59347,G__59348));
});
frontend.format.mldoc.block_with_title_QMARK_ = (function frontend$format$mldoc$block_with_title_QMARK_(type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Raw_Html",null,"Hiccup",null,"Paragraph",null,"Heading",null], null), null),type);
});
frontend.format.mldoc.opml__GT_edn = (function frontend$format$mldoc$opml__GT_edn(content){
try{if(clojure.string.blank_QMARK_(content)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vec__59350 = logseq.graph_parser.util.json__GT_clj(frontend.format.mldoc.parse_opml(content));
var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59350,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59350,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers,logseq.graph_parser.mldoc.collect_page_properties(blocks,logseq.graph_parser.mldoc.parse_property,frontend.state.get_config.cljs$core$IFn$_invoke$arity$0())], null);
}
}catch (e59349){if((e59349 instanceof Error)){
var e = e59349;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.format.mldoc",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edn","convert-failed","edn/convert-failed",-1289012926),e,new cljs.core.Keyword(null,"line","line",212345235),50], null)),null);

return cljs.core.PersistentVector.EMPTY;
} else {
throw e59349;

}
}});
/**
 * Wrapper around gp-mldoc/->edn which provides config state
 */
frontend.format.mldoc.__GT_edn = (function frontend$format$mldoc$__GT_edn(content,config){
return logseq.graph_parser.mldoc.__GT_edn(content,config,frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
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
frontend.format.mldoc.MldocMode = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.format.mldoc.MldocMode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k59367,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__59373 = k59367;
switch (G__59373) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59367,else__5343__auto__);

}
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__59374){
var vec__59375 = p__59374;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59375,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59375,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.format.mldoc.MldocMode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59366){
var self__ = this;
var G__59366__$1 = this;
return (new cljs.core.RecordIter((0),G__59366__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.format.mldoc.MldocMode(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1887694766 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59368,other59369){
var self__ = this;
var this59368__$1 = this;
return (((!((other59369 == null)))) && ((((this59368__$1.constructor === other59369.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59368__$1.__extmap,other59369.__extmap)))));
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$toEdn$arity$3 = (function (_this,content,config){
var self__ = this;
var _this__$1 = this;
return frontend.format.mldoc.__GT_edn(content,config);
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$toHtml$arity$4 = (function (_this,content,config,references){
var self__ = this;
var _this__$1 = this;
return (frontend.format.mldoc.export$.cljs$core$IFn$_invoke$arity$4 ? frontend.format.mldoc.export$.cljs$core$IFn$_invoke$arity$4("html",content,config,references) : frontend.format.mldoc.export$.call(null,"html",content,config,references));
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$loaded_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return true;
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$lazyLoad$arity$2 = (function (_this,_ok_handler){
var self__ = this;
var _this__$1 = this;
return true;
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$exportMarkdown$arity$4 = (function (_this,content,config,references){
var self__ = this;
var _this__$1 = this;
return frontend.format.mldoc.parse_export_markdown(content,config,references);
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$exportOPML$arity$5 = (function (_this,content,config,title,references){
var self__ = this;
var _this__$1 = this;
return frontend.format.mldoc.parse_export_opml(content,config,title,references);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.format.mldoc.MldocMode(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k59367){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k59367);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__59366){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__59402 = cljs.core.keyword_identical_QMARK_;
var expr__59403 = k__5349__auto__;
return (new frontend.format.mldoc.MldocMode(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__59366),null));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__59366){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.format.mldoc.MldocMode(G__59366,self__.__extmap,self__.__hash));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.format.mldoc.MldocMode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.format.mldoc.MldocMode.cljs$lang$type = true);

(frontend.format.mldoc.MldocMode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.format.mldoc/MldocMode",null,(1),null));
}));

(frontend.format.mldoc.MldocMode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.format.mldoc/MldocMode");
}));

/**
 * Positional factory function for frontend.format.mldoc/MldocMode.
 */
frontend.format.mldoc.__GT_MldocMode = (function frontend$format$mldoc$__GT_MldocMode(){
return (new frontend.format.mldoc.MldocMode(null,null,null));
});

/**
 * Factory function for frontend.format.mldoc/MldocMode, taking a map of keywords to field values.
 */
frontend.format.mldoc.map__GT_MldocMode = (function frontend$format$mldoc$map__GT_MldocMode(G__59372){
var extmap__5382__auto__ = (function (){var G__59405 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__59372);
if(cljs.core.record_QMARK_(G__59372)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59405);
} else {
return G__59405;
}
})();
return (new frontend.format.mldoc.MldocMode(null,cljs.core.not_empty(extmap__5382__auto__),null));
});

frontend.format.mldoc.plain__GT_text = (function frontend$format$mldoc$plain__GT_text(plains){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,plains));
});
frontend.format.mldoc.properties_QMARK_ = (function frontend$format$mldoc$properties_QMARK_(ast){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Property_Drawer",null,"Properties",null], null), null),cljs.core.ffirst(ast));
});
frontend.format.mldoc.typ_drawer_QMARK_ = (function frontend$format$mldoc$typ_drawer_QMARK_(ast,typ){
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Drawer",null], null), null),cljs.core.ffirst(ast))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,cljs.core.second(cljs.core.first(ast)))));
});

//# sourceMappingURL=frontend.format.mldoc.js.map
