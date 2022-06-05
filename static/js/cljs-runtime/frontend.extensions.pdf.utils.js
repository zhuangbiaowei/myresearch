goog.provide('frontend.extensions.pdf.utils');
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.utils !== 'undefined') && (typeof frontend.extensions.pdf.utils.MAX_SCALE !== 'undefined')){
} else {
frontend.extensions.pdf.utils.MAX_SCALE = 5.0;
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.utils !== 'undefined') && (typeof frontend.extensions.pdf.utils.MIN_SCALE !== 'undefined')){
} else {
frontend.extensions.pdf.utils.MIN_SCALE = 0.25;
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.utils !== 'undefined') && (typeof frontend.extensions.pdf.utils.DELTA_SCALE !== 'undefined')){
} else {
frontend.extensions.pdf.utils.DELTA_SCALE = 1.05;
}
frontend.extensions.pdf.utils.get_bounding_rect = (function frontend$extensions$pdf$utils$get_bounding_rect(rects){
return cljs_bean.core.__GT_clj(module$frontend$extensions$pdf$utils.getBoundingRect(cljs_bean.core.__GT_js(rects)));
});
frontend.extensions.pdf.utils.viewport_to_scaled = (function frontend$extensions$pdf$utils$viewport_to_scaled(bounding,viewport){
return cljs_bean.core.__GT_clj(module$frontend$extensions$pdf$utils.viewportToScaled(cljs_bean.core.__GT_js(bounding),viewport));
});
frontend.extensions.pdf.utils.scaled_to_viewport = (function frontend$extensions$pdf$utils$scaled_to_viewport(bounding,viewport){
return cljs_bean.core.__GT_clj(module$frontend$extensions$pdf$utils.scaledToViewport(cljs_bean.core.__GT_js(bounding),viewport));
});
frontend.extensions.pdf.utils.optimize_client_reacts = (function frontend$extensions$pdf$utils$optimize_client_reacts(rects){
if(cljs.core.seq(rects)){
return cljs_bean.core.__GT_clj(module$frontend$extensions$pdf$utils.optimizeClientRects(cljs_bean.core.__GT_js(rects)));
} else {
return null;
}
});
frontend.extensions.pdf.utils.vw_to_scaled_pos = (function frontend$extensions$pdf$utils$vw_to_scaled_pos(viewer,p__50126){
var map__50127 = p__50126;
var map__50127__$1 = cljs.core.__destructure_map(map__50127);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50127__$1,new cljs.core.Keyword(null,"page","page",849072397));
var bounding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50127__$1,new cljs.core.Keyword(null,"bounding","bounding",-2125178263));
var rects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50127__$1,new cljs.core.Keyword(null,"rects","rects",1714526167));
var temp__5720__auto__ = viewer.getPageView((page - (1))).viewport;
if(cljs.core.truth_(temp__5720__auto__)){
var viewport = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),frontend.extensions.pdf.utils.viewport_to_scaled(bounding,viewport),new cljs.core.Keyword(null,"rects","rects",1714526167),(function (){var iter__5520__auto__ = (function frontend$extensions$pdf$utils$vw_to_scaled_pos_$_iter__50131(s__50132){
return (new cljs.core.LazySeq(null,(function (){
var s__50132__$1 = s__50132;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__50132__$1);
if(temp__5720__auto____$1){
var s__50132__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50132__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__50132__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__50134 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__50133 = (0);
while(true){
if((i__50133 < size__5519__auto__)){
var rect = cljs.core._nth(c__5518__auto__,i__50133);
cljs.core.chunk_append(b__50134,frontend.extensions.pdf.utils.viewport_to_scaled(rect,viewport));

var G__50159 = (i__50133 + (1));
i__50133 = G__50159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50134),frontend$extensions$pdf$utils$vw_to_scaled_pos_$_iter__50131(cljs.core.chunk_rest(s__50132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50134),null);
}
} else {
var rect = cljs.core.first(s__50132__$2);
return cljs.core.cons(frontend.extensions.pdf.utils.viewport_to_scaled(rect,viewport),frontend$extensions$pdf$utils$vw_to_scaled_pos_$_iter__50131(cljs.core.rest(s__50132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rects);
})(),new cljs.core.Keyword(null,"page","page",849072397),page], null);
} else {
return null;
}
});
frontend.extensions.pdf.utils.scaled_to_vw_pos = (function frontend$extensions$pdf$utils$scaled_to_vw_pos(viewer,p__50135){
var map__50136 = p__50135;
var map__50136__$1 = cljs.core.__destructure_map(map__50136);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"page","page",849072397));
var bounding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"bounding","bounding",-2125178263));
var rects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"rects","rects",1714526167));
var temp__5720__auto__ = viewer.getPageView((page - (1))).viewport;
if(cljs.core.truth_(temp__5720__auto__)){
var viewport = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),frontend.extensions.pdf.utils.scaled_to_viewport(bounding,viewport),new cljs.core.Keyword(null,"rects","rects",1714526167),(function (){var iter__5520__auto__ = (function frontend$extensions$pdf$utils$scaled_to_vw_pos_$_iter__50137(s__50138){
return (new cljs.core.LazySeq(null,(function (){
var s__50138__$1 = s__50138;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__50138__$1);
if(temp__5720__auto____$1){
var s__50138__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50138__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__50138__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__50140 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__50139 = (0);
while(true){
if((i__50139 < size__5519__auto__)){
var rect = cljs.core._nth(c__5518__auto__,i__50139);
cljs.core.chunk_append(b__50140,frontend.extensions.pdf.utils.scaled_to_viewport(rect,viewport));

var G__50162 = (i__50139 + (1));
i__50139 = G__50162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50140),frontend$extensions$pdf$utils$scaled_to_vw_pos_$_iter__50137(cljs.core.chunk_rest(s__50138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50140),null);
}
} else {
var rect = cljs.core.first(s__50138__$2);
return cljs.core.cons(frontend.extensions.pdf.utils.scaled_to_viewport(rect,viewport),frontend$extensions$pdf$utils$scaled_to_vw_pos_$_iter__50137(cljs.core.rest(s__50138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rects);
})(),new cljs.core.Keyword(null,"page","page",849072397),page], null);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_page_bounding = (function frontend$extensions$pdf$utils$get_page_bounding(viewer,page_number){
var temp__5720__auto__ = (function (){var and__5041__auto__ = page_number;
if(cljs.core.truth_(and__5041__auto__)){
return viewer.getPageView((page_number - (1))).div;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return cljs_bean.core.__GT_clj(el.getBoundingClientRect().toJSON());
} else {
return null;
}
});
frontend.extensions.pdf.utils.resolve_hls_layer_BANG_ = (function frontend$extensions$pdf$utils$resolve_hls_layer_BANG_(viewer,page){
var temp__5720__auto__ = viewer.getPageView((page - (1))).textLayer;
if(cljs.core.truth_(temp__5720__auto__)){
var text_layer = temp__5720__auto__;
var cnt = text_layer.textLayerDiv;
var cls = "extensions__pdf-hls-layer";
var doc = document;
var layer = cnt.querySelector([".",cls].join(''));
if(cljs.core.not(layer)){
var layer__$1 = doc.createElement("div");
(layer__$1.className = cls);

cnt.appendChild(layer__$1);

return layer__$1;
} else {
return layer;
}
} else {
return null;
}
});
frontend.extensions.pdf.utils.scroll_to_highlight = (function frontend$extensions$pdf$utils$scroll_to_highlight(viewer,hl){
var temp__5720__auto__ = cljs_bean.core.__GT_js(hl);
if(cljs.core.truth_(temp__5720__auto__)){
var js_hl = temp__5720__auto__;
return module$frontend$extensions$pdf$utils.scrollToHighlight(viewer,js_hl);
} else {
return null;
}
});
frontend.extensions.pdf.utils.zoom_in_viewer = (function frontend$extensions$pdf$utils$zoom_in_viewer(viewer){
var cur_scale = viewer.currentScale;
if((cur_scale < frontend.extensions.pdf.utils.MAX_SCALE)){
var new_scale = (cur_scale * frontend.extensions.pdf.utils.DELTA_SCALE).toFixed((2));
var new_scale__$1 = (Math.ceil((new_scale * (10))) / (10));
var new_scale__$2 = (function (){var x__5131__auto__ = frontend.extensions.pdf.utils.MAX_SCALE;
var y__5132__auto__ = new_scale__$1;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
return (viewer.currentScale = new_scale__$2);
} else {
return null;
}
});
frontend.extensions.pdf.utils.zoom_out_viewer = (function frontend$extensions$pdf$utils$zoom_out_viewer(viewer){
var cur_scale = viewer.currentScale;
if((cur_scale > frontend.extensions.pdf.utils.MIN_SCALE)){
var new_scale = (cur_scale / frontend.extensions.pdf.utils.DELTA_SCALE).toFixed((2));
var new_scale__$1 = (Math.floor((new_scale * (10))) / (10));
var new_scale__$2 = (function (){var x__5128__auto__ = frontend.extensions.pdf.utils.MIN_SCALE;
var y__5129__auto__ = new_scale__$1;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
return (viewer.currentScale = new_scale__$2);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_meta_data$ = (function frontend$extensions$pdf$utils$get_meta_data$(viewer){
var temp__5720__auto__ = (function (){var and__5041__auto__ = viewer;
if(cljs.core.truth_(and__5041__auto__)){
return viewer.pdfDocument;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var doc = temp__5720__auto__;
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(doc.getMetadata(),(function (r){
console.debug("[metadata] ",r);

var temp__5720__auto____$1 = (function (){var and__5041__auto__ = r;
if(cljs.core.truth_(and__5041__auto__)){
return r.info;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var info = temp__5720__auto____$1;
var G__50144 = cljs_bean.core.__GT_clj(info);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__50144) : resolve.call(null,G__50144));
} else {
return null;
}
})),(function (e){
(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));

return console.error(e);
}));
}));
} else {
return null;
}
});
frontend.extensions.pdf.utils.clear_all_selection = (function frontend$extensions$pdf$utils$clear_all_selection(){
return window.getSelection().removeAllRanges();
});
frontend.extensions.pdf.utils.adjust_viewer_size_BANG_ = frontend.util.debounce.cljs$core$IFn$_invoke$arity$2((200),(function (viewer){
return (viewer.currentScaleValue = "auto");
}));
frontend.extensions.pdf.utils.fix_nested_js = (function frontend$extensions$pdf$utils$fix_nested_js(its){
if(cljs.core.sequential_QMARK_(its)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50145_SHARP_){
if(cljs.core.map_QMARK_(p1__50145_SHARP_)){
return p1__50145_SHARP_;
} else {
return cljs_bean.core.__GT_clj(p1__50145_SHARP_);
}
}),its);
} else {
return null;
}
});
frontend.extensions.pdf.utils.gen_uuid = (function frontend$extensions$pdf$utils$gen_uuid(){
return frontend.db.new_block_id();
});
frontend.extensions.pdf.utils.js_load$ = (function frontend$extensions$pdf$utils$js_load$(url){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve){
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2(url,resolve);
}));
});
frontend.extensions.pdf.utils.PDFJS_ROOT = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"file:"))?"./js":"./static/js");
frontend.extensions.pdf.utils.load_base_assets$ = (function frontend$extensions$pdf$utils$load_base_assets$(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.js_load$([frontend.extensions.pdf.utils.PDFJS_ROOT,"/pdfjs/pdf.js"].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.js_load$([frontend.extensions.pdf.utils.PDFJS_ROOT,"/pdfjs/pdf_viewer.js"].join('')),(function (___$1){
return promesa.protocols._promise(null);
}));
}));
}));
});
frontend.extensions.pdf.utils.get_page_from_el = (function frontend$extensions$pdf$utils$get_page_from_el(el){
var temp__5720__auto__ = (function (){var and__5041__auto__ = el;
if(cljs.core.truth_(and__5041__auto__)){
return el.closest(".page");
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page_el = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-number","page-number",556880104),page_el.dataset.pageNumber,new cljs.core.Keyword(null,"page-el","page-el",-124721580),page_el], null);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_page_from_range = (function frontend$extensions$pdf$utils$get_page_from_range(r){
var temp__5720__auto__ = (function (){var and__5041__auto__ = r;
if(cljs.core.truth_(and__5041__auto__)){
return r.startContainer.parentElement;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var parent_el = temp__5720__auto__;
return frontend.extensions.pdf.utils.get_page_from_el(parent_el);
} else {
return null;
}
});
frontend.extensions.pdf.utils.get_range_rects_LT__page_cnt = (function frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt(r,page_cnt){
var rge_rects = cljs_bean.core.__GT_clj(r.getClientRects());
var cnt_offset = page_cnt.getBoundingClientRect();
if(cljs.core.seq(rge_rects)){
var rects = (function (){var iter__5520__auto__ = (function frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt_$_iter__50151(s__50152){
return (new cljs.core.LazySeq(null,(function (){
var s__50152__$1 = s__50152;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__50152__$1);
if(temp__5720__auto__){
var s__50152__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50152__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__50152__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__50154 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__50153 = (0);
while(true){
if((i__50153 < size__5519__auto__)){
var rect = cljs.core._nth(c__5518__auto__,i__50153);
cljs.core.chunk_append(b__50154,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),((rect.top + page_cnt.scrollTop) - cnt_offset.top),new cljs.core.Keyword(null,"left","left",-399115937),((rect.left + page_cnt.scrollLeft) - cnt_offset.left),new cljs.core.Keyword(null,"width","width",-384071477),rect.width,new cljs.core.Keyword(null,"height","height",1025178622),rect.height], null));

var G__50163 = (i__50153 + (1));
i__50153 = G__50163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50154),frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt_$_iter__50151(cljs.core.chunk_rest(s__50152__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50154),null);
}
} else {
var rect = cljs.core.first(s__50152__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),((rect.top + page_cnt.scrollTop) - cnt_offset.top),new cljs.core.Keyword(null,"left","left",-399115937),((rect.left + page_cnt.scrollLeft) - cnt_offset.left),new cljs.core.Keyword(null,"width","width",-384071477),rect.width,new cljs.core.Keyword(null,"height","height",1025178622),rect.height], null),frontend$extensions$pdf$utils$get_range_rects_LT__page_cnt_$_iter__50151(cljs.core.rest(s__50152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rge_rects);
})();
return frontend.extensions.pdf.utils.optimize_client_reacts(rects);
} else {
return null;
}
});
frontend.extensions.pdf.utils.next_page = (function frontend$extensions$pdf$utils$next_page(){
try{return cljs.core.js_invoke(window.lsPdfViewer,"nextPage");
}catch (e50157){if((e50157 instanceof Error)){
var _e = e50157;
return null;
} else {
throw e50157;

}
}});
frontend.extensions.pdf.utils.prev_page = (function frontend$extensions$pdf$utils$prev_page(){
try{return cljs.core.js_invoke(window.lsPdfViewer,"previousPage");
}catch (e50158){if((e50158 instanceof Error)){
var _e = e50158;
return null;
} else {
throw e50158;

}
}});

//# sourceMappingURL=frontend.extensions.pdf.utils.js.map
