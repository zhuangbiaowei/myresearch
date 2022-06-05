goog.provide('frontend.fs.node');
goog.scope(function(){
  frontend.fs.node.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.fs.node.concat_path = (function frontend$fs$node$concat_path(dir,path){
if((path == null)){
return dir;
} else {
if(clojure.string.starts_with_QMARK_(path,dir)){
return path;
} else {
return [clojure.string.replace(dir,/\/$/,""),(cljs.core.truth_(path)?["/",clojure.string.replace(path,/^\//,"")].join(''):null)].join('');

}
}
});
frontend.fs.node.contents_matched_QMARK_ = (function frontend$fs$node$contents_matched_QMARK_(disk_content,db_content){
if(((typeof disk_content === 'string') && (typeof db_content === 'string'))){
if(cljs.core.truth_(frontend.encrypt.encrypted_db_QMARK_(frontend.state.get_current_repo()))){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(disk_content),(function (decrypted_content){
return promesa.protocols._promise(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(decrypted_content),clojure.string.trim(db_content)));
}));
}));
} else {
return promesa.core.resolved(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(disk_content),clojure.string.trim(db_content)));
}
} else {
return null;
}
});
frontend.fs.node.write_file_impl_BANG_ = (function frontend$fs$node$write_file_impl_BANG_(this$,repo,dir,path,content,p__42478,stat){
var map__42479 = p__42478;
var map__42479__$1 = cljs.core.__destructure_map(map__42479);
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42479__$1,new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42479__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var old_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42479__$1,new cljs.core.Keyword(null,"old-content","old-content",1851086779));
var skip_compare_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42479__$1,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960));
if(cljs.core.truth_(skip_compare_QMARK_)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["writeFile",repo,path,content], 0)),(function (result){
return promesa.protocols._promise((cljs.core.truth_(ok_handler)?(ok_handler.cljs$core$IFn$_invoke$arity$3 ? ok_handler.cljs$core$IFn$_invoke$arity$3(repo,path,result) : ok_handler.call(null,repo,path,result)):null));
}));
})),(function (error){
if(cljs.core.truth_(error_handler)){
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(error) : error_handler.call(null,error));
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.node",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-file-failed","write-file-failed",1274270449),error,new cljs.core.Keyword(null,"line","line",212345235),46], null)),null);
}
}));
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stat,new cljs.core.Keyword(null,"not-found","not-found",-629079980)))?promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.fs.protocol.read_file(this$,dir,path,null),(function (error){
console.error(error);

return null;
})):null),(function (disk_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = disk_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),(function (disk_content__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(frontend.util.get_file_ext(path)),(function (ext){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = old_content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "";
}
}
})(),(function (db_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.node.contents_matched_QMARK_(disk_content__$1,db_content),(function (contents_matched_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.get_write_chan_length(),(function (pending_writes){
return promesa.protocols._promise(((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stat,new cljs.core.Keyword(null,"not-found","not-found",-629079980))) && (((cljs.core.not(contents_matched_QMARK_)) && ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["excalidraw",null,"css",null,"edn",null], null), null),ext)))) && ((((!(clojure.string.includes_QMARK_(path,"/.recycle/")))) && ((pending_writes === (0)))))))))))?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(disk_content__$1),(function (disk_content__$2){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","not-matched-from-disk","file/not-matched-from-disk",1915939272),path,disk_content__$2,content], null)));
}));
})):promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["writeFile",repo,path,content], 0)),(function (result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.node.goog$module$goog$object.get(result,"mtime"),(function (mtime){
return promesa.protocols._promise((function (){
(frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path,mtime) : frontend.db.set_file_last_modified_at_BANG_.call(null,repo,path,mtime));

promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.encrypt.encrypted_db_QMARK_(frontend.state.get_current_repo()))?frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(content):content),(function (content__$1){
return promesa.protocols._promise((frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path,content__$1) : frontend.db.set_file_content_BANG_.call(null,repo,path,content__$1)));
}));
}));

if(cljs.core.truth_(ok_handler)){
(ok_handler.cljs$core$IFn$_invoke$arity$3 ? ok_handler.cljs$core$IFn$_invoke$arity$3(repo,path,result) : ok_handler.call(null,repo,path,result));
} else {
}

return result;
})()
);
}));
}));
})),(function (error){
if(cljs.core.truth_(error_handler)){
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(error) : error_handler.call(null,error));
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.node",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-file-failed","write-file-failed",1274270449),error,new cljs.core.Keyword(null,"line","line",212345235),83], null)),null);
}
}))
));
}));
}));
}));
}));
}));
}));
}));
}
});
frontend.fs.node.open_dir = (function frontend$fs$node$open_dir(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.mocked_open_dir_path(),(function (dir_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(dir_path)?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getFiles",dir_path], 0)):electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openDir",cljs.core.PersistentArrayMap.EMPTY], 0))),(function (result){
return promesa.protocols._promise(result);
}));
}));
}));
});

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
frontend.fs.node.Node = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.node.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.node.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k42481,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__42486 = k42481;
switch (G__42486) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42481,else__5343__auto__);

}
}));

(frontend.fs.node.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__42488){
var vec__42489 = p__42488;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42489,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42489,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.node.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.node.Node{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.node.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42480){
var self__ = this;
var G__42480__$1 = this;
return (new cljs.core.RecordIter((0),G__42480__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.node.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.node.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.node.Node(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.node.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.node.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1327458881 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.node.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42482,other42483){
var self__ = this;
var this42482__$1 = this;
return (((!((other42483 == null)))) && ((((this42482__$1.constructor === other42483.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42482__$1.__extmap,other42483.__extmap)))));
}));

(frontend.fs.node.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.node.Node(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.node.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k42481){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k42481);
}));

(frontend.fs.node.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__42480){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__42502 = cljs.core.keyword_identical_QMARK_;
var expr__42503 = k__5349__auto__;
return (new frontend.fs.node.Node(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__42480),null));
}));

(frontend.fs.node.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.node.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__42480){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.node.Node(G__42480,self__.__extmap,self__.__hash));
}));

(frontend.fs.node.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["mkdir",dir], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$unlink_BANG_$arity$4 = (function (_this,repo,path,_opts){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unlink",frontend.config.get_repo_dir(repo),path], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$get_files$arity$3 = (function (_this,path_or_handle,_ok_handler){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getFiles",path_or_handle], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$rename_BANG_$arity$4 = (function (_this,_repo,old_path,new_path){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rename",old_path,new_path], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$readdir$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["readdir",dir], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$stat$arity$3 = (function (_this,dir,path){
var self__ = this;
var _this__$1 = this;
var path__$1 = frontend.fs.node.concat_path(dir,path);
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stat",path__$1], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$watch_dir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["addDirWatcher",dir], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$rmdir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$write_file_BANG_$arity$6 = (function (this$,repo,dir,path,content,opts){
var self__ = this;
var this$__$1 = this;
var path__$1 = frontend.fs.node.concat_path(dir,path);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(this$__$1.frontend$fs$protocol$Fs$stat$arity$3(null,dir,path__$1),(function (_e){
return new cljs.core.Keyword(null,"not-found","not-found",-629079980);
})),(function (stat){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.first(frontend.util.get_dir_and_basename(path__$1)),(function (sub_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(this$__$1.frontend$fs$protocol$Fs$mkdir_recur_BANG_$arity$2(null,sub_dir),(function (_){
return promesa.protocols._promise(frontend.fs.node.write_file_impl_BANG_(this$__$1,repo,dir,path__$1,content,opts,stat));
}));
}));
}));
}));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$open_dir$arity$2 = (function (_this,_ok_handler){
var self__ = this;
var _this__$1 = this;
return frontend.fs.node.open_dir();
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$read_file$arity$4 = (function (_this,dir,path,_options){
var self__ = this;
var _this__$1 = this;
var path__$1 = frontend.fs.node.concat_path(dir,path);
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["readFile",path__$1], 0));
}));

(frontend.fs.node.Node.prototype.frontend$fs$protocol$Fs$mkdir_recur_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["mkdir-recur",dir], 0));
}));

(frontend.fs.node.Node.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.node.Node.cljs$lang$type = true);

(frontend.fs.node.Node.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.node/Node",null,(1),null));
}));

(frontend.fs.node.Node.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.node/Node");
}));

/**
 * Positional factory function for frontend.fs.node/Node.
 */
frontend.fs.node.__GT_Node = (function frontend$fs$node$__GT_Node(){
return (new frontend.fs.node.Node(null,null,null));
});

/**
 * Factory function for frontend.fs.node/Node, taking a map of keywords to field values.
 */
frontend.fs.node.map__GT_Node = (function frontend$fs$node$map__GT_Node(G__42484){
var extmap__5382__auto__ = (function (){var G__42514 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__42484);
if(cljs.core.record_QMARK_(G__42484)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42514);
} else {
return G__42514;
}
})();
return (new frontend.fs.node.Node(null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.fs.node.js.map
