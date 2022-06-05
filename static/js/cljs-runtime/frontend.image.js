goog.provide('frontend.image');
goog.scope(function(){
  frontend.image.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.image.reverse_QMARK_ = (function frontend$image$reverse_QMARK_(exif_orientation){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(7),null,(6),null,(5),null,(8),null], null), null),exif_orientation);
});
frontend.image.re_scale = (function frontend$image$re_scale(exif_orientation,width,height,max_width,max_height){
var vec__82783 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82783,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82783,(1),null);
var ratio = (width__$1 / height__$1);
var to_width = (((width__$1 > max_width))?max_width:width__$1);
var to_height = (((height__$1 > max_height))?max_height:height__$1);
var new_ratio = (to_width / to_height);
var vec__82786 = (((new_ratio > ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ratio * to_height),to_height], null):(((new_ratio < ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,(to_width / ratio)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null)
));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82786,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82786,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w | (0)),(h | (0))], null);
});
/**
 * Given image and exif orientation, ensure the photo is displayed
 *   rightside up
 */
frontend.image.fix_orientation = (function frontend$image$fix_orientation(img,exif_orientation,cb,max_width,max_height){
var off_canvas = document.createElement("canvas");
var ctx = off_canvas.getContext("2d");
var width = frontend.image.goog$module$goog$object.get(img,"width");
var height = frontend.image.goog$module$goog$object.get(img,"height");
var vec__82795 = frontend.image.re_scale(exif_orientation,width,height,max_width,max_height);
var to_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82795,(0),null);
var to_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82795,(1),null);
frontend.image.goog$module$goog$object.set(ctx,"imageSmoothingEnabled",false);

(off_canvas.width = to_width);

(off_canvas.height = to_height);

var vec__82800_82896 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_height,to_width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null));
var width_82897__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82800_82896,(0),null);
var height_82898__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82800_82896,(1),null);
var G__82803_82901 = exif_orientation;
switch (G__82803_82901) {
case (2):
ctx.transform((-1),(0),(0),(1),width_82897__$1,(0));

break;
case (3):
ctx.transform((-1),(0),(0),(-1),width_82897__$1,height_82898__$1);

break;
case (4):
ctx.transform((1),(0),(0),(-1),(0),height_82898__$1);

break;
case (5):
ctx.transform((0),(1),(1),(0),(0),(0));

break;
case (6):
ctx.transform((0),(1),(-1),(0),height_82898__$1,(0));

break;
case (7):
ctx.transform((0),(-1),(-1),(0),height_82898__$1,width_82897__$1);

break;
case (8):
ctx.transform((0),(-1),(1),(0),(0),width_82897__$1);

break;
default:
ctx.transform((1),(0),(0),(1),(0),(0));

}

ctx.drawImage(img,(0),(0),width_82897__$1,height_82898__$1);

return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(off_canvas) : cb.call(null,off_canvas));
});
frontend.image.get_orientation = (function frontend$image$get_orientation(img,cb,max_width,max_height){
return module$frontend$exif.getEXIFOrientation(img,(function (orientation){
return frontend.image.fix_orientation(img,orientation,cb,max_width,max_height);
}));
});
frontend.image.create_object_url = (function frontend$image$create_object_url(file){
return (function (){var or__5043__auto__ = window.URL;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return window.webkitURL;
}
})().createObjectURL(file);
});
frontend.image.upload = (function frontend$image$upload(var_args){
var args__5772__auto__ = [];
var len__5766__auto___82904 = arguments.length;
var i__5767__auto___82905 = (0);
while(true){
if((i__5767__auto___82905 < len__5766__auto___82904)){
args__5772__auto__.push((arguments[i__5767__auto___82905]));

var G__82906 = (i__5767__auto___82905 + (1));
i__5767__auto___82905 = G__82906;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic = (function (files,file_handler,p__82832){
var map__82833 = p__82832;
var map__82833__$1 = cljs.core.__destructure_map(map__82833);
var files_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82833__$1,new cljs.core.Keyword(null,"files-limit","files-limit",-171817242),(1));
var seq__82834 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(files_limit,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(files)));
var chunk__82836 = null;
var count__82837 = (0);
var i__82838 = (0);
while(true){
if((i__82838 < count__82837)){
var file = chunk__82836.cljs$core$IIndexed$_nth$arity$2(null,i__82838);
var file_type_82909 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_82910 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_82911 = [ymd_82910,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_82909.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_82911,file_type_82909) : file_handler.call(null,file,file_name_82911,file_type_82909));
} else {
}


var G__82912 = seq__82834;
var G__82913 = chunk__82836;
var G__82914 = count__82837;
var G__82915 = (i__82838 + (1));
seq__82834 = G__82912;
chunk__82836 = G__82913;
count__82837 = G__82914;
i__82838 = G__82915;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__82834);
if(temp__5720__auto__){
var seq__82834__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__82834__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__82834__$1);
var G__82919 = cljs.core.chunk_rest(seq__82834__$1);
var G__82920 = c__5565__auto__;
var G__82921 = cljs.core.count(c__5565__auto__);
var G__82922 = (0);
seq__82834 = G__82919;
chunk__82836 = G__82920;
count__82837 = G__82921;
i__82838 = G__82922;
continue;
} else {
var file = cljs.core.first(seq__82834__$1);
var file_type_82923 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_82924 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_82925 = [ymd_82924,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_82923.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_82925,file_type_82923) : file_handler.call(null,file,file_name_82925,file_type_82923));
} else {
}


var G__82927 = cljs.core.next(seq__82834__$1);
var G__82928 = null;
var G__82929 = (0);
var G__82930 = (0);
seq__82834 = G__82927;
chunk__82836 = G__82928;
count__82837 = G__82929;
i__82838 = G__82930;
continue;
}
} else {
return null;
}
}
break;
}
}));

(frontend.image.upload.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.image.upload.cljs$lang$applyTo = (function (seq82821){
var G__82822 = cljs.core.first(seq82821);
var seq82821__$1 = cljs.core.next(seq82821);
var G__82823 = cljs.core.first(seq82821__$1);
var seq82821__$2 = cljs.core.next(seq82821__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82822,G__82823,seq82821__$2);
}));


//# sourceMappingURL=frontend.image.js.map
