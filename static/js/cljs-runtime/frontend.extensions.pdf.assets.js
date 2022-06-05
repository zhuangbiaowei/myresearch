goog.provide('frontend.extensions.pdf.assets');
frontend.extensions.pdf.assets.hls_file_QMARK_ = (function frontend$extensions$pdf$assets$hls_file_QMARK_(filename){
var and__5041__auto__ = filename;
if(cljs.core.truth_(and__5041__auto__)){
return ((typeof filename === 'string') && (clojure.string.starts_with_QMARK_(filename,"hls__")));
} else {
return and__5041__auto__;
}
});
frontend.extensions.pdf.assets.inflate_asset = (function frontend$extensions$pdf$assets$inflate_asset(full_path){
var filename = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(full_path) : frontend.util.node_path.basename.call(null,full_path));
var web_link_QMARK_ = clojure.string.starts_with_QMARK_(full_path,"http");
var ext_name = frontend.util.get_file_ext(filename);
var url = ((web_link_QMARK_)?full_path:(cljs.core.truth_(frontend.util.absolute_path_QMARK_(full_path))?["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_path)].join(''):((clojure.string.starts_with_QMARK_(full_path,"file:/"))?full_path:(function (){var full_path__$1 = clojure.string.replace(full_path,/^[.\\/\\]+/,"");
var full_path__$2 = (((!(clojure.string.starts_with_QMARK_(full_path__$1,logseq.graph_parser.config.local_assets_dir))))?(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.config.local_assets_dir,full_path__$1) : frontend.util.node_path.join.call(null,logseq.graph_parser.config.local_assets_dir,full_path__$1)):full_path__$1);
return ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__54474 = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var G__54475 = full_path__$2;
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__54474,G__54475) : frontend.util.node_path.join.call(null,G__54474,G__54475));
})())].join('');
})()
)));
var temp__5720__auto__ = ((web_link_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(url)):(function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext_name,"pdf");
if(and__5041__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(filename,(0),(cljs.core.count(filename) - (4)));
} else {
return and__5041__auto__;
}
})());
if(cljs.core.truth_(temp__5720__auto__)){
var key = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"identity","identity",1647396035),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(key,(cljs.core.count(key) - (15))),new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"hls-file","hls-file",192681120),["assets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),".edn"].join('')], null);
} else {
return null;
}
});
frontend.extensions.pdf.assets.load_hls_data$ = (function frontend$extensions$pdf$assets$load_hls_data$(p__54476){
var map__54477 = p__54476;
var map__54477__$1 = cljs.core.__destructure_map(map__54477);
var hls_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54477__$1,new cljs.core.Keyword(null,"hls-file","hls-file",192681120));
if(cljs.core.truth_(hls_file)){
var repo_cur = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo_cur);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_cur,repo_dir,hls_file,"{:highlights []}"),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(repo_dir,hls_file),(function (res){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(res)?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(res):cljs.core.PersistentArrayMap.EMPTY),(function (data){
return promesa.protocols._promise(data);
}));
}));
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.assets.persist_hls_data$ = (function frontend$extensions$pdf$assets$persist_hls_data$(p__54479,highlights){
var map__54480 = p__54479;
var map__54480__$1 = cljs.core.__destructure_map(map__54480);
var hls_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54480__$1,new cljs.core.Keyword(null,"hls-file","hls-file",192681120));
if(cljs.core.truth_(hls_file)){
var repo_cur = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo_cur);
var data = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlights","highlights",945143465),highlights], null)], 0));
return frontend.fs.write_file_BANG_(repo_cur,repo_dir,hls_file,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
} else {
return null;
}
});
frontend.extensions.pdf.assets.resolve_hls_data_by_key$ = (function frontend$extensions$pdf$assets$resolve_hls_data_by_key$(target_key){
var temp__5720__auto__ = (function (){var and__5041__auto__ = target_key;
if(cljs.core.truth_(and__5041__auto__)){
return [logseq.graph_parser.config.local_assets_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_key),".edn"].join('');
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var hls_file = temp__5720__auto__;
return frontend.extensions.pdf.assets.load_hls_data$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hls-file","hls-file",192681120),hls_file], null));
} else {
return null;
}
});
frontend.extensions.pdf.assets.area_highlight_QMARK_ = (function frontend$extensions$pdf$assets$area_highlight_QMARK_(hl){
var and__5041__auto__ = hl;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)) == null)));
} else {
return and__5041__auto__;
}
});
frontend.extensions.pdf.assets.persist_hl_area_image$ = (function frontend$extensions$pdf$assets$persist_hl_area_image$(viewer,current,new_hl,old_hl,p__54486){
var map__54487 = p__54486;
var map__54487__$1 = cljs.core.__destructure_map(map__54487);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var temp__5720__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_(and__5041__auto__)){
return viewer.getPageView((new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(new_hl) - (1))).canvas;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var canvas = temp__5720__auto__;
var doc = canvas.ownerDocument;
var canvas_SINGLEQUOTE_ = doc.createElement("canvas");
var dpr = window.devicePixelRatio;
var repo_cur = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo_cur);
var dw = (dpr * width);
var dh = (dpr * height);
(canvas_SINGLEQUOTE_.width = dw);

(canvas_SINGLEQUOTE_.height = dh);

var temp__5720__auto____$1 = canvas_SINGLEQUOTE_.getContext("2d",({"alpha": false}));
if(cljs.core.truth_(temp__5720__auto____$1)){
var ctx = temp__5720__auto____$1;
(ctx.imageSmoothingEnabled = false);

ctx.drawImage(canvas,(left * dpr),(top * dpr),(width * dpr),(height * dpr),(0),(0),dw,dh);

var callback = (function (png){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(console.time(new cljs.core.Keyword(null,"write-area-image","write-area-image",-1753983626)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(png.arrayBuffer(),(function (png__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(current,(function (p__54488){
var map__54489 = p__54488;
var map__54489__$1 = cljs.core.__destructure_map(map__54489);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54489__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)),(function (fstamp){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = old_hl;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null));
} else {
return and__5041__auto__;
}
})(),(function (old_fstamp){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(new_hl)),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_hl))].join(''),(function (fname){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.config.local_assets_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),(function (fdir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fdir)].join('')),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fdir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fstamp),".png"].join(''),(function (new_fpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = old_fstamp;
if(cljs.core.truth_(and__5041__auto__)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fdir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_fstamp),".png"].join('');
} else {
return and__5041__auto__;
}
})(),(function (old_fpath){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = old_fpath;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.fs.rename_BANG_,repo_cur,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54485_SHARP_){
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(repo_dir,p1__54485_SHARP_) : frontend.util.node_path.join.call(null,repo_dir,p1__54485_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_fpath,new_fpath], null)));
} else {
return and__5041__auto__;
}
})(),(function (___$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo_cur,repo_dir,new_fpath,png__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)),(function (___$3){
return promesa.protocols._promise(console.timeEnd(new cljs.core.Keyword(null,"write-area-image","write-area-image",-1753983626)));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
})),(function (err){
return console.error("[write area image Error]",err);
}));
});
return canvas_SINGLEQUOTE_.toBlob(callback);
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.pdf.assets.update_hl_area_block_BANG_ = (function frontend$extensions$pdf$assets$update_hl_area_block_BANG_(highlight){
var temp__5720__auto__ = (function (){var and__5041__auto__ = frontend.extensions.pdf.assets.area_highlight_QMARK_(highlight);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.get_block_by_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return frontend.handler.editor.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(highlight,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)));
} else {
return null;
}
});
frontend.extensions.pdf.assets.unlink_hl_area_image$ = (function frontend$extensions$pdf$assets$unlink_hl_area_image$(_viewer,current,hl){
var temp__5720__auto__ = (function (){var and__5041__auto__ = frontend.extensions.pdf.assets.area_highlight_QMARK_(hl);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(current);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var fkey = temp__5720__auto__;
var repo_cur = frontend.state.get_current_repo();
var repo_dir = frontend.config.get_repo_dir(repo_cur);
var fstamp = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null));
var fname = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(hl)),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl))].join('');
var fdir = [logseq.graph_parser.config.local_assets_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fkey)].join('');
var fpath = (function (){var G__54491 = repo_dir;
var G__54492 = [fdir,"/",fname,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fstamp),".png"].join('');
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__54491,G__54492) : frontend.util.node_path.join.call(null,G__54491,G__54492));
})();
return frontend.fs.unlink_BANG_(repo_cur,fpath,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
frontend.extensions.pdf.assets.resolve_ref_page = (function frontend$extensions$pdf$assets$resolve_ref_page(pdf_current){
var page_name = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(pdf_current);
var page_name__$1 = ["hls__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name)].join('');
var page = frontend.db.model.get_page(page_name__$1);
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pdf_current);
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.not(page)){
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var asset_dir = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(repo_dir,logseq.graph_parser.config.local_assets_dir) : frontend.util.node_path.join.call(null,repo_dir,logseq.graph_parser.config.local_assets_dir));
var url__$1 = ((clojure.string.includes_QMARK_(url,asset_dir))?["..",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,repo_dir)))].join(''):url);
var label = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(pdf_current);
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),false,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),false,new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),(function (){var G__54493 = format;
var G__54493__$1 = (((G__54493 instanceof cljs.core.Keyword))?G__54493.fqn:null);
switch (G__54493__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,url__$1], 0));

break;
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url__$1,label], 0));

break;
default:
return url__$1;

}
})(),new cljs.core.Keyword(null,"file-path","file-path",-2005501162),url__$1], null)], null));

return frontend.db.model.get_page(page_name__$1);
} else {
return page;
}
});
frontend.extensions.pdf.assets.create_ref_block_BANG_ = (function frontend$extensions$pdf$assets$create_ref_block_BANG_(p__54495){
var map__54496 = p__54495;
var map__54496__$1 = cljs.core.__destructure_map(map__54496);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54496__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54496__$1,new cljs.core.Keyword(null,"content","content",15833224));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54496__$1,new cljs.core.Keyword(null,"page","page",849072397));
var temp__5720__auto__ = new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(temp__5720__auto__)){
var pdf_current = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.extensions.pdf.assets.resolve_ref_page(pdf_current);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ref_page = temp__5720__auto____$1;
var temp__5718__auto__ = frontend.db.model.get_block_by_uuid(id);
if(cljs.core.truth_(temp__5718__auto__)){
var ref_block = temp__5718__auto__;
console.debug("[existed ref block]",ref_block);

return ref_block;
} else {
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(content);
var wrap_props = (function (p1__54494_SHARP_){
var temp__5718__auto____$1 = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(temp__5718__auto____$1)){
var stamp = temp__5718__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__54494_SHARP_,new cljs.core.Keyword(null,"hl-type","hl-type",992471876),"area",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513),stamp], 0));
} else {
return p1__54494_SHARP_;
}
});
return frontend.handler.editor.api_insert_new_block_BANG_(text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref_page),new cljs.core.Keyword(null,"custom-uuid","custom-uuid",-1095135430),id,new cljs.core.Keyword(null,"properties","properties",685819552),wrap_props(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ls-type","ls-type",1383834313),"annotation",new cljs.core.Keyword(null,"hl-page","hl-page",949012424),page,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null))], null));
}
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.pdf.assets.del_ref_block_BANG_ = (function frontend$extensions$pdf$assets$del_ref_block_BANG_(p__54497){
var map__54498 = p__54497;
var map__54498__$1 = cljs.core.__destructure_map(map__54498);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54498__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.db.model.get_block_by_uuid(id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var block = temp__5720__auto____$1;
return frontend.handler.editor.delete_block_aux_BANG_(block,true);
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.pdf.assets.copy_hl_ref_BANG_ = (function frontend$extensions$pdf$assets$copy_hl_ref_BANG_(highlight){
var temp__5720__auto__ = frontend.extensions.pdf.assets.create_ref_block_BANG_(highlight);
if(cljs.core.truth_(temp__5720__auto__)){
var ref_block = temp__5720__auto__;
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1(["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref_block)),"))"].join(''));
} else {
return null;
}
});
frontend.extensions.pdf.assets.open_block_ref_BANG_ = (function frontend$extensions$pdf$assets$open_block_ref_BANG_(block){
var id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var page = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
var page_name = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var file_path = new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(page));
var temp__5720__auto__ = (function (){var and__5041__auto__ = page_name;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(page_name,(5));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var target_key = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.assets.resolve_hls_data_by_key$(target_key),(function (hls){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = hls;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"highlights","highlights",945143465).cljs$core$IFn$_invoke$arity$1(hls);
} else {
return and__5041__auto__;
}
})(),(function (hls__$1){
return promesa.protocols._promise((function (){var file_path__$1 = (cljs.core.truth_(file_path)?file_path:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_key),".pdf"].join(''));
var temp__5718__auto__ = (function (){var and__5041__auto__ = hls__$1;
if(cljs.core.truth_(and__5041__auto__)){
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__54499_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54499_SHARP_));
}),hls__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var matched = temp__5718__auto__;
frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267),matched);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),frontend.extensions.pdf.assets.inflate_asset(file_path__$1));
} else {
return console.debug("[Unmatched highlight ref]",block);
}
})());
}));
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.assets.goto_block_ref_BANG_ = (function frontend$extensions$pdf$assets$goto_block_ref_BANG_(p__54500){
var map__54501 = p__54500;
var map__54501__$1 = cljs.core.__destructure_map(map__54501);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54501__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null));
} else {
return null;
}
});
frontend.extensions.pdf.assets.goto_annotations_page_BANG_ = (function frontend$extensions$pdf$assets$goto_annotations_page_BANG_(var_args){
var G__54503 = arguments.length;
switch (G__54503) {
case 1:
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (current){
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$2(current,null);
}));

(frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (current,id){
var temp__5720__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_(temp__5720__auto__)){
var name = temp__5720__auto__;
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),["hls__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),(cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),["block-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._PLUS_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null):null));
} else {
return null;
}
}));

(frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$lang$maxFixedArity = 2);

frontend.extensions.pdf.assets.area_display = rum.core.lazy_build(rum.core.build_defc,(function (block,stamp){
var id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var props = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block);
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block)));
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
var temp__5720__auto____$1 = clojure.string.replace_first(new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page),/^hls__/,"");
if(cljs.core.truth_(temp__5720__auto____$1)){
var group_key = temp__5720__auto____$1;
var temp__5720__auto____$2 = new cljs.core.Keyword(null,"hl-page","hl-page",949012424).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5720__auto____$2)){
var hl_page = temp__5720__auto____$2;
var asset_path = frontend.handler.editor.make_asset_url(["/",logseq.graph_parser.config.local_assets_dir,"/",group_key,"/",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hl_page),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stamp),".png"].join('')].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hl-area","span.hl-area",-760805068),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),asset_path], null)], null)], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})());
}),null,"frontend.extensions.pdf.assets/area-display");
frontend.extensions.pdf.assets.fix_local_asset_filename = (function frontend$extensions$pdf$assets$fix_local_asset_filename(filename){
if(clojure.string.blank_QMARK_(filename)){
return null;
} else {
var local_asset_QMARK_ = cljs.core.re_find(/[0-9]{13}_\d$/,filename);
return clojure.string.replace(clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(filename,(0),(cljs.core.count(filename) - (cljs.core.truth_(local_asset_QMARK_)?(15):(0)))),/^hls__/,""),"_"," ");
}
});
frontend.extensions.pdf.assets.human_hls_filename_display = rum.core.lazy_build(rum.core.build_defc,(function (title){
if(clojure.string.starts_with_QMARK_(title,"hls__")){
return daiquiri.core.create_element("a",{'className':"asset-ref"},[frontend.extensions.pdf.assets.fix_local_asset_filename(title)]);
} else {
return null;
}
}),null,"frontend.extensions.pdf.assets/human-hls-filename-display");

//# sourceMappingURL=frontend.extensions.pdf.assets.js.map
