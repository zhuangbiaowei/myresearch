goog.provide('frontend.fs.bfs');

/**
* @constructor
 * @implements {frontend.fs.protocol.Fs}
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
frontend.fs.bfs.Bfs = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.bfs.Bfs.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k74102,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__74106 = k74102;
switch (G__74106) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74102,else__5343__auto__);

}
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__74110){
var vec__74111 = p__74110;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74111,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74111,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.bfs.Bfs{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74101){
var self__ = this;
var G__74101__$1 = this;
return (new cljs.core.RecordIter((0),G__74101__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.bfs.Bfs(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1484378302 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74103,other74104){
var self__ = this;
var this74103__$1 = this;
return (((!((other74104 == null)))) && ((((this74103__$1.constructor === other74104.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74103__$1.__extmap,other74104.__extmap)))));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.bfs.Bfs(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k74102){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k74102);
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__74101){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__74117 = cljs.core.keyword_identical_QMARK_;
var expr__74118 = k__5349__auto__;
return (new frontend.fs.bfs.Bfs(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__74101),null));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__74101){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.bfs.Bfs(G__74101,self__.__extmap,self__.__hash));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_((function (){var and__5041__auto__ = window.pfs;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.util.electron_QMARK_());
} else {
return and__5041__auto__;
}
})())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(window.pfs.mkdir(dir),(function (error){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mkdir error: ",error], 0));
}));
} else {
return null;
}
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$unlink_BANG_$arity$4 = (function (_this,_repo,path,opts){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(window.pfs)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___36093__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.pfs.stat(path),(function (stat){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stat.type,"file"))?window.pfs.unlink(path,opts):promesa.core.rejected("Unlinking a directory is not allowed")));
}));
}));
} else {
return null;
}
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$get_files$arity$3 = (function (_this,_path_or_handle,_ok_handler){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$rename_BANG_$arity$4 = (function (_this,_repo,old_path,new_path){
var self__ = this;
var _this__$1 = this;
return window.pfs.rename(old_path,new_path);
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$readdir$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(window.pfs)){
return window.pfs.readdir(dir);
} else {
return null;
}
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$stat$arity$3 = (function (_this,dir,path){
var self__ = this;
var _this__$1 = this;
return window.pfs.stat([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$watch_dir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$rmdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return window.workerThread.rimraf(dir);
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$write_file_BANG_$arity$6 = (function (_this,_repo,dir,path,content,_opts){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return null;
} else {
return window.pfs.writeFile([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),content);
}
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$open_dir$arity$2 = (function (_this,_ok_handler){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$read_file$arity$4 = (function (_this,dir,path,options){
var self__ = this;
var _this__$1 = this;
return window.pfs.readFile([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),cljs.core.clj__GT_js(options));
}));

(frontend.fs.bfs.Bfs.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.bfs.Bfs.cljs$lang$type = true);

(frontend.fs.bfs.Bfs.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.bfs/Bfs",null,(1),null));
}));

(frontend.fs.bfs.Bfs.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.bfs/Bfs");
}));

/**
 * Positional factory function for frontend.fs.bfs/Bfs.
 */
frontend.fs.bfs.__GT_Bfs = (function frontend$fs$bfs$__GT_Bfs(){
return (new frontend.fs.bfs.Bfs(null,null,null));
});

/**
 * Factory function for frontend.fs.bfs/Bfs, taking a map of keywords to field values.
 */
frontend.fs.bfs.map__GT_Bfs = (function frontend$fs$bfs$map__GT_Bfs(G__74105){
var extmap__5382__auto__ = (function (){var G__74122 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__74105);
if(cljs.core.record_QMARK_(G__74105)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74122);
} else {
return G__74122;
}
})();
return (new frontend.fs.bfs.Bfs(null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.fs.bfs.js.map
