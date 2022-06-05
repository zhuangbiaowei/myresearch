goog.provide('frontend.mobile.util');
var module$node_modules$$capacitor$core$dist$index_cjs=shadow.js.require("module$node_modules$$capacitor$core$dist$index_cjs", {});
var module$node_modules$$capacitor$splash_screen$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$splash_screen$dist$plugin_cjs", {});
frontend.mobile.util.platform = (function frontend$mobile$util$platform(){
return module$node_modules$$capacitor$core$dist$index_cjs.Capacitor.getPlatform();
});
frontend.mobile.util.native_platform_QMARK_ = (function frontend$mobile$util$native_platform_QMARK_(){
return module$node_modules$$capacitor$core$dist$index_cjs.Capacitor.isNativePlatform();
});
frontend.mobile.util.native_ios_QMARK_ = (function frontend$mobile$util$native_ios_QMARK_(){
var and__5041__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.platform(),"ios");
} else {
return and__5041__auto__;
}
});
frontend.mobile.util.native_android_QMARK_ = (function frontend$mobile$util$native_android_QMARK_(){
var and__5041__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.platform(),"android");
} else {
return and__5041__auto__;
}
});
frontend.mobile.util.convert_file_src = (function frontend$mobile$util$convert_file_src(path_str){
return module$node_modules$$capacitor$core$dist$index_cjs.Capacitor.convertFileSrc(path_str);
});
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.folder_picker !== 'undefined')){
} else {
frontend.mobile.util.folder_picker = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("FolderPicker");
}
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.download_icloud_files !== 'undefined')){
} else {
frontend.mobile.util.download_icloud_files = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("DownloadiCloudFiles");
}

if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.ios_utils !== 'undefined')){
} else {
frontend.mobile.util.ios_utils = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("Utils");
}

if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.ios_file_container !== 'undefined')){
} else {
frontend.mobile.util.ios_file_container = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("FileContainer");
}

if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.file_sync !== 'undefined')){
} else {
frontend.mobile.util.file_sync = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("FileSync");
}
} else {
}
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
if((typeof frontend !== 'undefined') && (typeof frontend.mobile !== 'undefined') && (typeof frontend.mobile.util !== 'undefined') && (typeof frontend.mobile.util.fs_watcher !== 'undefined')){
} else {
frontend.mobile.util.fs_watcher = module$node_modules$$capacitor$core$dist$index_cjs.registerPlugin("FsWatcher");
}
} else {
}
frontend.mobile.util.sync_icloud_repo = (function frontend$mobile$util$sync_icloud_repo(repo_dir){
var repo_name = decodeURI(clojure.string.trim(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(repo_dir,"Documents/"))));
return frontend.mobile.util.download_icloud_files.syncGraph(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph","graph",1558099509),repo_name], null)));
});
frontend.mobile.util.hide_splash = (function frontend$mobile$util$hide_splash(){
return module$node_modules$$capacitor$splash_screen$dist$plugin_cjs.SplashScreen.hide();
});
frontend.mobile.util.get_idevice_model = (function frontend$mobile$util$get_idevice_model(){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
var width = screen.width;
var height = screen.height;
var landscape_QMARK_ = (width > height);
var vec__51823 = ((landscape_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51823,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51823,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width__$1,height__$1], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(476),(847)], null),G__51826)){
return "iPhone7Plus";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(390),(844)], null),G__51826)){
return "iPhone12";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(834),(1112)], null),G__51826)){
return "iPadAir10.5";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(414),(736)], null),G__51826)){
return "iPhone8Plus";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(414),(896)], null),G__51826)){
return "iPhone11";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1024),(1366)], null),G__51826)){
return "iPadPro12.9";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(834),(1194)], null),G__51826)){
return "iPadPro11";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(820),(1180)], null),G__51826)){
return "iPad10.9";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(375),(812)], null),G__51826)){
return "iPhoneX";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(744),(1133)], null),G__51826)){
return "iPadmini8.3";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(428),(926)], null),G__51826)){
return "iPhone13ProMax";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(375),(667)], null),G__51826)){
return "iPhone8";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(810),(1080)], null),G__51826)){
return "iPad10.2";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(320),(568)], null),G__51826)){
return "iPhoneSE4";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(768),(1024)], null),G__51826)){
return "iPad9.7";
} else {
return "Not a known Apple device!";

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})(),landscape_QMARK_], null);
} else {
return null;
}
});
frontend.mobile.util.native_iphone_without_notch_QMARK_ = (function frontend$mobile$util$native_iphone_without_notch_QMARK_(){
var temp__5720__auto__ = frontend.mobile.util.get_idevice_model();
if(cljs.core.truth_(temp__5720__auto__)){
var model = temp__5720__auto__;
return clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPhone8");
} else {
return null;
}
});
frontend.mobile.util.native_iphone_QMARK_ = (function frontend$mobile$util$native_iphone_QMARK_(){
var temp__5720__auto__ = frontend.mobile.util.get_idevice_model();
if(cljs.core.truth_(temp__5720__auto__)){
var model = temp__5720__auto__;
return ((clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPhone")) && ((!(clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPhone8")))));
} else {
return null;
}
});
frontend.mobile.util.native_ipad_QMARK_ = (function frontend$mobile$util$native_ipad_QMARK_(){
var temp__5720__auto__ = frontend.mobile.util.get_idevice_model();
if(cljs.core.truth_(temp__5720__auto__)){
var model = temp__5720__auto__;
return clojure.string.starts_with_QMARK_(cljs.core.first(model),"iPad");
} else {
return null;
}
});
/**
 * Detect whether iOS device is in Zoom Display
 */
frontend.mobile.util.check_ios_zoomed_display = (function frontend$mobile$util$check_ios_zoomed_display(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___36093__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.ios_utils.isZoomed(),(function (p1__51831_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__51831_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
})),(function (is_zoomed_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"isZoomed","isZoomed",789822872).cljs$core$IFn$_invoke$arity$1(is_zoomed_QMARK_))?(function (){var cl = document.documentElement.classList;
return cl.add("is-zoomed-native-ios");
})():null));
}));
}));
});

//# sourceMappingURL=frontend.mobile.util.js.map
