goog.provide('frontend.external.roam');
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.all_refed_uids !== 'undefined')){
} else {
frontend.external.roam.all_refed_uids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.uid__GT_uuid !== 'undefined')){
} else {
frontend.external.roam.uid__GT_uuid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.external.roam.reset_state_BANG_ = (function frontend$external$roam$reset_state_BANG_(){
cljs.core.reset_BANG_(frontend.external.roam.all_refed_uids,cljs.core.PersistentHashSet.EMPTY);

return cljs.core.reset_BANG_(frontend.external.roam.uid__GT_uuid,cljs.core.PersistentArrayMap.EMPTY);
});
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.uid_pattern !== 'undefined')){
} else {
frontend.external.roam.uid_pattern = /\(\(([a-zA-Z0-9_\\-]{6,24})\)\)/;
}
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.macro_pattern !== 'undefined')){
} else {
frontend.external.roam.macro_pattern = /\{\{([^{}]+)\}\}/;
}
frontend.external.roam.uid_transform = (function frontend$external$roam$uid_transform(text){
return clojure.string.replace(text,frontend.external.roam.uid_pattern,(function (p__95037){
var vec__95038 = p__95037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95038,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95038,(1),null);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.external.roam.uid__GT_uuid),uid,uid);
return ["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"))"].join('');
}));
});
frontend.external.roam.macro_transform = (function frontend$external$roam$macro_transform(text){
return clojure.string.replace(text,frontend.external.roam.macro_pattern,(function (p__95041){
var vec__95042 = p__95041;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95042,(0),null);
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95042,(1),null);
var vec__95045 = logseq.graph_parser.util.split_first(":",text__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95045,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95045,(1),null);
if(cljs.core.truth_(name)){
var name__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(name);
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{%s %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name__$1,arg], 0));
} else {
return original;
}
}));
});
frontend.external.roam.fenced_code_transform = (function frontend$external$roam$fenced_code_transform(text){
return clojure.string.replace(text,/```/,"\n```");
});
frontend.external.roam.load_all_refed_uids_BANG_ = (function frontend$external$roam$load_all_refed_uids_BANG_(data){
var full_text = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
clojure.walk.postwalk((function (f){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(f);
if(and__5041__auto__){
return new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(f);
} else {
return and__5041__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(full_text,(function (v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(f))].join('');
}));
} else {
}

return f;
}),data);

var uids = cljs.core.set(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.re_seq(frontend.external.roam.uid_pattern,cljs.core.deref(full_text)))));
cljs.core.reset_BANG_(frontend.external.roam.all_refed_uids,uids);

var seq__95048 = cljs.core.seq(uids);
var chunk__95049 = null;
var count__95050 = (0);
var i__95051 = (0);
while(true){
if((i__95051 < count__95050)){
var uid = chunk__95049.cljs$core$IIndexed$_nth$arity$2(null,i__95051);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.external.roam.uid__GT_uuid,cljs.core.assoc,uid,cljs.core.random_uuid());


var G__95080 = seq__95048;
var G__95081 = chunk__95049;
var G__95082 = count__95050;
var G__95083 = (i__95051 + (1));
seq__95048 = G__95080;
chunk__95049 = G__95081;
count__95050 = G__95082;
i__95051 = G__95083;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__95048);
if(temp__5720__auto__){
var seq__95048__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__95048__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__95048__$1);
var G__95084 = cljs.core.chunk_rest(seq__95048__$1);
var G__95085 = c__5565__auto__;
var G__95086 = cljs.core.count(c__5565__auto__);
var G__95087 = (0);
seq__95048 = G__95084;
chunk__95049 = G__95085;
count__95050 = G__95086;
i__95051 = G__95087;
continue;
} else {
var uid = cljs.core.first(seq__95048__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.external.roam.uid__GT_uuid,cljs.core.assoc,uid,cljs.core.random_uuid());


var G__95088 = cljs.core.next(seq__95048__$1);
var G__95089 = null;
var G__95090 = (0);
var G__95091 = (0);
seq__95048 = G__95088;
chunk__95049 = G__95089;
count__95050 = G__95090;
i__95051 = G__95091;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.external.roam.transform = (function frontend$external$roam$transform(text){
return frontend.external.roam.fenced_code_transform(frontend.external.roam.macro_transform(frontend.external.roam.uid_transform(clojure.string.replace(clojure.string.replace(text,"{{[[TODO]]}}","TODO"),"{{[[DONE]]}}","DONE"))));
});
frontend.external.roam.child__GT_text = (function frontend$external$roam$child__GT_text(p__95052,level){
var map__95053 = p__95052;
var map__95053__$1 = cljs.core.__destructure_map(map__95053);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95053__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95053__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.external.roam.uid__GT_uuid),uid);
if(cljs.core.truth_(and__5041__auto__)){
return uid;
} else {
return and__5041__auto__;
}
})())){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.external.roam.uid__GT_uuid,cljs.core.assoc,uid,cljs.core.random_uuid());
}

var children_text = (function (){var G__95054 = children;
var G__95055 = (level + (1));
return (frontend.external.roam.children__GT_text.cljs$core$IFn$_invoke$arity$2 ? frontend.external.roam.children__GT_text.cljs$core$IFn$_invoke$arity$2(G__95054,G__95055) : frontend.external.roam.children__GT_text.call(null,G__95054,G__95055));
})();
var level_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"\t"))),(((level === (0)))?"-":" -")].join('');
var properties = ((cljs.core.contains_QMARK_(cljs.core.deref(frontend.external.roam.all_refed_uids),uid))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("id:: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.external.roam.uid__GT_uuid),uid))], 0))),"\n"].join(''):null);
if(cljs.core.truth_(string)){
return [level_pattern," ",clojure.string.triml(string),"\n",properties,cljs.core.str.cljs$core$IFn$_invoke$arity$1(children_text)].join('');
} else {
return children_text;
}
});
frontend.external.roam.children__GT_text = (function frontend$external$roam$children__GT_text(children,level){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95056_SHARP_){
return frontend.external.roam.child__GT_text(p1__95056_SHARP_,level);
}),children)));
});
frontend.external.roam.json__GT_edn = (function frontend$external$roam$json__GT_edn(raw_string){
return cljs_bean.core.__GT_clj(JSON.parse(raw_string));
});
frontend.external.roam.__GT_file = (function frontend$external$roam$__GT_file(page_data){
var map__95057 = page_data;
var map__95057__$1 = cljs.core.__destructure_map(map__95057);
var create_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95057__$1,new cljs.core.Keyword(null,"create-time","create-time",875410581));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95057__$1,new cljs.core.Keyword(null,"title","title",636505583));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var edit_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95057__$1,new cljs.core.Keyword(null,"edit-time","edit-time",-1528280702));
var initial_level = (1);
var text = ((cljs.core.seq(children))?(function (){var temp__5720__auto__ = frontend.external.roam.children__GT_text(children,(initial_level - (1)));
if(cljs.core.truth_(temp__5720__auto__)){
var text = temp__5720__auto__;
var journal_QMARK_ = frontend.date.valid_journal_title_QMARK_(title);
var front_matter = (cljs.core.truth_(journal_QMARK_)?"":frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("---\ntitle: %s\n---\n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title], 0)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(front_matter),frontend.external.roam.transform(text)].join('');
} else {
return null;
}
})():null);
if(cljs.core.truth_((function (){var and__5041__auto__ = (!(clojure.string.blank_QMARK_(title)));
if(and__5041__auto__){
return text;
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"created-at","created-at",-89248644),create_time,new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),edit_time,new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
} else {
return null;
}
});
frontend.external.roam.__GT_files = (function frontend$external$roam$__GT_files(edn_data){
frontend.external.roam.load_all_refed_uids_BANG_(edn_data);

var files = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.external.roam.__GT_file,edn_data);
var files__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__95058_SHARP_){
return (new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__95058_SHARP_) == null);
}),files);
var files__$2 = cljs.core.group_by((function (f){
return clojure.string.lower_case(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(f));
}),files__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__95059){
var vec__95060 = p__95059;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95060,(0),null);
var vec__95063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95060,(1),null);
var seq__95064 = cljs.core.seq(vec__95063);
var first__95065 = cljs.core.first(seq__95064);
var seq__95064__$1 = cljs.core.next(seq__95064);
var fst = first__95065;
var others = seq__95064__$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fst,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.cons(fst,others)))));
}),files__$2);
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
 * @implements {frontend.external.protocol.External}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.external.roam.Roam = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.external.roam.Roam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.external.roam.Roam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k95067,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__95071 = k95067;
switch (G__95071) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k95067,else__5343__auto__);

}
}));

(frontend.external.roam.Roam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__95072){
var vec__95073 = p__95072;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95073,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95073,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.external.roam.Roam.prototype.frontend$external$protocol$External$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.external.roam.Roam.prototype.frontend$external$protocol$External$toMarkdownFiles$arity$3 = (function (_this,content,_config){
var self__ = this;
var _this__$1 = this;
return frontend.external.roam.__GT_files(frontend.external.roam.json__GT_edn(content));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.external.roam.Roam{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__95066){
var self__ = this;
var G__95066__$1 = this;
return (new cljs.core.RecordIter((0),G__95066__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.external.roam.Roam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.external.roam.Roam(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.external.roam.Roam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1836119154 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.external.roam.Roam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this95068,other95069){
var self__ = this;
var this95068__$1 = this;
return (((!((other95069 == null)))) && ((((this95068__$1.constructor === other95069.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this95068__$1.__extmap,other95069.__extmap)))));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.external.roam.Roam(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.external.roam.Roam.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k95067){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k95067);
}));

(frontend.external.roam.Roam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__95066){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__95076 = cljs.core.keyword_identical_QMARK_;
var expr__95077 = k__5349__auto__;
return (new frontend.external.roam.Roam(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__95066),null));
}));

(frontend.external.roam.Roam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__95066){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.external.roam.Roam(G__95066,self__.__extmap,self__.__hash));
}));

(frontend.external.roam.Roam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.external.roam.Roam.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.external.roam.Roam.cljs$lang$type = true);

(frontend.external.roam.Roam.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.external.roam/Roam",null,(1),null));
}));

(frontend.external.roam.Roam.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.external.roam/Roam");
}));

/**
 * Positional factory function for frontend.external.roam/Roam.
 */
frontend.external.roam.__GT_Roam = (function frontend$external$roam$__GT_Roam(){
return (new frontend.external.roam.Roam(null,null,null));
});

/**
 * Factory function for frontend.external.roam/Roam, taking a map of keywords to field values.
 */
frontend.external.roam.map__GT_Roam = (function frontend$external$roam$map__GT_Roam(G__95070){
var extmap__5382__auto__ = (function (){var G__95079 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__95070);
if(cljs.core.record_QMARK_(G__95070)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__95079);
} else {
return G__95079;
}
})();
return (new frontend.external.roam.Roam(null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.external.roam.js.map
