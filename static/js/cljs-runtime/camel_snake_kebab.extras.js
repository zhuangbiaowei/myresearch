goog.provide('camel_snake_kebab.extras');
/**
 * Recursively transforms all map keys in coll with t.
 */
camel_snake_kebab.extras.transform_keys = (function camel_snake_kebab$extras$transform_keys(t,coll){
var transform = (function camel_snake_kebab$extras$transform_keys_$_transform(p__90780){
var vec__90781 = p__90780;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90781,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90781,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(k) : t.call(null,k)),v], null);
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform,x));
} else {
return x;
}
}),coll);
});

//# sourceMappingURL=camel_snake_kebab.extras.js.map
