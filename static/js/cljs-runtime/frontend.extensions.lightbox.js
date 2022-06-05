goog.provide('frontend.extensions.lightbox');
frontend.extensions.lightbox.js_load$ = (function frontend$extensions$lightbox$js_load$(url){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve){
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2(url,resolve);
}));
});
frontend.extensions.lightbox.JS_ROOT = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"file:"))?"./js":"./static/js");
frontend.extensions.lightbox.load_base_assets$ = (function frontend$extensions$lightbox$load_base_assets$(){
return frontend.extensions.lightbox.js_load$([frontend.extensions.lightbox.JS_ROOT,"/photoswipe.js"].join(''));
});
frontend.extensions.lightbox.preview_images_BANG_ = (function frontend$extensions$lightbox$preview_images_BANG_(images){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___36093__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.lightbox.load_base_assets$(),(function (_){
return promesa.protocols._promise((function (){var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),images,new cljs.core.Keyword(null,"pswpModule","pswpModule",1055928079),window.photoswipe.default,new cljs.core.Keyword(null,"showHideAnimationType","showHideAnimationType",-1813136721),"fade"], null);
var ___$1 = console.log(cljs_bean.core.__GT_js(options));
var lightbox = (new window.photoswipe.PhotoSwipeLightbox(cljs_bean.core.__GT_js(options)));
var G__90762 = lightbox;
G__90762.init();

G__90762.loadAndOpen((0));

return G__90762;
})());
}));
}));
});

//# sourceMappingURL=frontend.extensions.lightbox.js.map
