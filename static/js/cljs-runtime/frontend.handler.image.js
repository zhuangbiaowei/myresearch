goog.provide('frontend.handler.image');
goog.scope(function(){
  frontend.handler.image.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.image.render_local_images_BANG_ = (function frontend$handler$image$render_local_images_BANG_(){
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_ios_QMARK_();
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(frontend.state.get_current_repo());
} else {
return and__5041__auto__;
}
})())){
return null;
} else {
try{var images = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByTagName("img"));
var get_src = (function (image){
return image.getAttribute("src");
});
var local_images = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (image){
var src = get_src(image);
var and__5041__auto__ = src;
if(cljs.core.truth_(and__5041__auto__)){
return (!(((frontend.util.starts_with_QMARK_(src,"http://")) || (((frontend.util.starts_with_QMARK_(src,"https://")) || (((frontend.util.starts_with_QMARK_(src,"blob:")) || (frontend.util.starts_with_QMARK_(src,"data:")))))))));
} else {
return and__5041__auto__;
}
}),images);
var seq__48938 = cljs.core.seq(local_images);
var chunk__48939 = null;
var count__48940 = (0);
var i__48941 = (0);
while(true){
if((i__48941 < count__48940)){
var img = chunk__48939.cljs$core$IIndexed$_nth$arity$2(null,i__48941);
frontend.handler.image.goog$module$goog$object.set(img,"onerror",((function (seq__48938,chunk__48939,count__48940,i__48941,img,images,get_src,local_images){
return (function (){
return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","none");
});})(seq__48938,chunk__48939,count__48940,i__48941,img,images,get_src,local_images))
);

var path_48953 = get_src(img);
var path_48954__$1 = clojure.string.replace_first(path_48953,"file:","");
var path_48955__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path_48954__$1),"."))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path_48954__$1,(1)):path_48954__$1);
frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3(frontend.config.get_repo_dir(frontend.state.get_current_repo()),path_48955__$2,cljs.core.PersistentArrayMap.EMPTY),((function (seq__48938,chunk__48939,count__48940,i__48941,path_48953,path_48954__$1,path_48955__$2,img,images,get_src,local_images){
return (function (blob){
var blob__$1 = (new Blob([blob],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"image"], null))));
var img_url = frontend.image.create_object_url(blob__$1);
frontend.handler.image.goog$module$goog$object.set(img,"src",img_url);

return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","initial");
});})(seq__48938,chunk__48939,count__48940,i__48941,path_48953,path_48954__$1,path_48955__$2,img,images,get_src,local_images))
,((function (seq__48938,chunk__48939,count__48940,i__48941,path_48953,path_48954__$1,path_48955__$2,img,images,get_src,local_images){
return (function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Can't read local image file: "], 0));

return console.dir(error);
});})(seq__48938,chunk__48939,count__48940,i__48941,path_48953,path_48954__$1,path_48955__$2,img,images,get_src,local_images))
);


var G__48956 = seq__48938;
var G__48957 = chunk__48939;
var G__48958 = count__48940;
var G__48959 = (i__48941 + (1));
seq__48938 = G__48956;
chunk__48939 = G__48957;
count__48940 = G__48958;
i__48941 = G__48959;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48938);
if(temp__5720__auto__){
var seq__48938__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48938__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__48938__$1);
var G__48960 = cljs.core.chunk_rest(seq__48938__$1);
var G__48961 = c__5565__auto__;
var G__48962 = cljs.core.count(c__5565__auto__);
var G__48963 = (0);
seq__48938 = G__48960;
chunk__48939 = G__48961;
count__48940 = G__48962;
i__48941 = G__48963;
continue;
} else {
var img = cljs.core.first(seq__48938__$1);
frontend.handler.image.goog$module$goog$object.set(img,"onerror",((function (seq__48938,chunk__48939,count__48940,i__48941,img,seq__48938__$1,temp__5720__auto__,images,get_src,local_images){
return (function (){
return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","none");
});})(seq__48938,chunk__48939,count__48940,i__48941,img,seq__48938__$1,temp__5720__auto__,images,get_src,local_images))
);

var path_48965 = get_src(img);
var path_48966__$1 = clojure.string.replace_first(path_48965,"file:","");
var path_48967__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path_48966__$1),"."))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path_48966__$1,(1)):path_48966__$1);
frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3(frontend.config.get_repo_dir(frontend.state.get_current_repo()),path_48967__$2,cljs.core.PersistentArrayMap.EMPTY),((function (seq__48938,chunk__48939,count__48940,i__48941,path_48965,path_48966__$1,path_48967__$2,img,seq__48938__$1,temp__5720__auto__,images,get_src,local_images){
return (function (blob){
var blob__$1 = (new Blob([blob],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"image"], null))));
var img_url = frontend.image.create_object_url(blob__$1);
frontend.handler.image.goog$module$goog$object.set(img,"src",img_url);

return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","initial");
});})(seq__48938,chunk__48939,count__48940,i__48941,path_48965,path_48966__$1,path_48967__$2,img,seq__48938__$1,temp__5720__auto__,images,get_src,local_images))
,((function (seq__48938,chunk__48939,count__48940,i__48941,path_48965,path_48966__$1,path_48967__$2,img,seq__48938__$1,temp__5720__auto__,images,get_src,local_images){
return (function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Can't read local image file: "], 0));

return console.dir(error);
});})(seq__48938,chunk__48939,count__48940,i__48941,path_48965,path_48966__$1,path_48967__$2,img,seq__48938__$1,temp__5720__auto__,images,get_src,local_images))
);


var G__48970 = cljs.core.next(seq__48938__$1);
var G__48971 = null;
var G__48972 = (0);
var G__48973 = (0);
seq__48938 = G__48970;
chunk__48939 = G__48971;
count__48940 = G__48972;
i__48941 = G__48973;
continue;
}
} else {
return null;
}
}
break;
}
}catch (e48934){if((e48934 instanceof Error)){
var _e = e48934;
return null;
} else {
throw e48934;

}
}}
});
frontend.handler.image.request_presigned_url = (function frontend$handler$image$request_presigned_url(file,filename,mime_type,uploading_QMARK_,url_handler,on_processing){
if((frontend.handler.image.goog$module$goog$object.get(file,"size") > (((12) * (1024)) * (1024)))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sorry, we don't support any file that's larger than 12MB."], null),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
cljs.core.reset_BANG_(uploading_QMARK_,true);

return frontend.util.post([frontend.config.api,"presigned_url"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),mime_type], null),(function (p__48945){
var map__48946 = p__48945;
var map__48946__$1 = cljs.core.__destructure_map(map__48946);
var resp = map__48946__$1;
var presigned_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48946__$1,new cljs.core.Keyword(null,"presigned-url","presigned-url",90607137));
var s3_object_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48946__$1,new cljs.core.Keyword(null,"s3-object-key","s3-object-key",-2006382897));
if(cljs.core.truth_(presigned_url)){
return frontend.util.upload(presigned_url,file,(function (_result){
return frontend.util.post([frontend.config.api,"signed_url"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s3-object-key","s3-object-key",-2006382897),s3_object_key], null),(function (p__48947){
var map__48948 = p__48947;
var map__48948__$1 = cljs.core.__destructure_map(map__48948);
var signed_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48948__$1,new cljs.core.Keyword(null,"signed-url","signed-url",1201672543));
cljs.core.reset_BANG_(uploading_QMARK_,false);

if(cljs.core.truth_(signed_url)){
return (url_handler.cljs$core$IFn$_invoke$arity$1 ? url_handler.cljs$core$IFn$_invoke$arity$1(signed_url) : url_handler.call(null,signed_url));
} else {
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Something error, can't get a valid signed url."], 0));
}
}),(function (_error){
cljs.core.reset_BANG_(uploading_QMARK_,false);

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Something error, can't get a valid signed url."], 0));
}));
}),(function (error){
cljs.core.reset_BANG_(uploading_QMARK_,false);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["upload failed."], 0));

return console.dir(error);
}),(function (e){
return (on_processing.cljs$core$IFn$_invoke$arity$1 ? on_processing.cljs$core$IFn$_invoke$arity$1(e) : on_processing.call(null,e));
}));
} else {
cljs.core.reset_BANG_(uploading_QMARK_,false);

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["failed to get any presigned url, resp: ",resp], 0));
}
}),(function (_error){
return cljs.core.reset_BANG_(uploading_QMARK_,false);
}));

}
});

//# sourceMappingURL=frontend.handler.image.js.map
