goog.provide('frontend.util.fs');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
/**
 * Ignore path for ls-dir-files-with-handler! and reload-dir!
 */
frontend.util.fs.ignored_path_QMARK_ = (function frontend$util$fs$ignored_path_QMARK_(dir,path){
if(typeof path === 'string'){
var or__5043__auto__ = cljs.core.some((function (p1__83948_SHARP_){
return clojure.string.starts_with_QMARK_(path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__83948_SHARP_)].join(''));
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",".recycle","assets","node_modules","logseq/bak","version-files"], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.some((function (p1__83949_SHARP_){
return clojure.string.includes_QMARK_(path,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__83949_SHARP_),"/"].join(''));
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",".recycle","assets","node_modules","logseq/bak","version-files"], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = cljs.core.some((function (p1__83950_SHARP_){
return clojure.string.ends_with_QMARK_(path,p1__83950_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".DS_Store","logseq/graphs-txid.edn","logseq/broken-config.edn"], null));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = (function (){var relpath = module$node_modules$path$path.relative(dir,path);
var or__5043__auto____$3 = cljs.core.re_find(/\/\.[^.]+/,relpath);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
return cljs.core.re_find(/^\.[^.]+/,relpath);
}
})();
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var path__$1 = clojure.string.lower_case(path);
return (((!(clojure.string.blank_QMARK_(module$node_modules$path$path.extname(path__$1))))) && (cljs.core.not(cljs.core.some((function (p1__83951_SHARP_){
return clojure.string.ends_with_QMARK_(path__$1,p1__83951_SHARP_);
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [".md",".markdown",".org",".js",".edn",".css"], null)))));
}
}
}
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.util.fs.js.map
