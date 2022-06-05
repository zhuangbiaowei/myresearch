goog.provide('frontend.modules.instrumentation.sentry');
var module$node_modules$$sentry$react$dist$index=shadow.js.require("module$node_modules$$sentry$react$dist$index", {});
var module$node_modules$$sentry$tracing$dist$index=shadow.js.require("module$node_modules$$sentry$tracing$dist$index", {});
var module$node_modules$posthog_js$dist$module=shadow.js.require("module$node_modules$posthog_js$dist$module", {});
frontend.modules.instrumentation.sentry.config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"dsn","dsn",1561266567),"https://636e9174ffa148c98d2b9d3369661683@o416451.ingest.sentry.io/5311485",new cljs.core.Keyword(null,"release","release",-1534371381),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("logseq%s@%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?"-android":(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?"-ios":""
)),frontend.version.version], 0)),new cljs.core.Keyword(null,"environment","environment",-666037640),(cljs.core.truth_(frontend.config.dev_QMARK_)?"development":"production"),new cljs.core.Keyword(null,"initialScope","initialScope",-1985815457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"platform","platform",-1086422114),(cljs.core.truth_(frontend.util.electron_QMARK_())?"electron":(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?"mobile":"web"
)),new cljs.core.Keyword(null,"publishing","publishing",-244219384),frontend.config.publishing_QMARK_], null)], null),new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$posthog_js$dist$module.SentryIntegration(module$node_modules$posthog_js$dist$module,"logseq",(5311485))),(new module$node_modules$$sentry$tracing$dist$index.BrowserTracing())], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),frontend.config.dev_QMARK_,new cljs.core.Keyword(null,"tracesSampleRate","tracesSampleRate",446547798),1.0,new cljs.core.Keyword(null,"beforeSend","beforeSend",-1560616376),(function (event){
try{var temp__5720__auto___94921 = cljs.core.re_matches(/file:\/\/.*?\/(app\/electron|static\/index)\.html(.*)/,event.request.url);
if(cljs.core.truth_(temp__5720__auto___94921)){
var vec__94849_94922 = temp__5720__auto___94921;
var __94923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94849_94922,(0),null);
var __94924__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94849_94922,(1),null);
var query_and_fragment_94925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94849_94922,(2),null);
(event.request.url = ["http://localhost/electron.html",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_and_fragment_94925)].join(''));
} else {
}

var seq__94852_94926 = cljs.core.seq(event.exception.values);
var chunk__94853_94927 = null;
var count__94854_94928 = (0);
var i__94855_94929 = (0);
while(true){
if((i__94855_94929 < count__94854_94928)){
var value_94930 = chunk__94853_94927.cljs$core$IIndexed$_nth$arity$2(null,i__94855_94929);
var seq__94888_94931 = cljs.core.seq(value_94930.stacktrace.frames);
var chunk__94889_94932 = null;
var count__94890_94933 = (0);
var i__94891_94934 = (0);
while(true){
if((i__94891_94934 < count__94890_94933)){
var frame_94935 = chunk__94889_94932.cljs$core$IIndexed$_nth$arity$2(null,i__94891_94934);
if(cljs.core.truth_(cljs.core.not_empty(frame_94935.filename))){
var temp__5720__auto___94936 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_94935.filename);
if(cljs.core.truth_(temp__5720__auto___94936)){
var vec__94899_94937 = temp__5720__auto___94936;
var __94938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94899_94937,(0),null);
var filename_94939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94899_94937,(1),null);
(frame_94935.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_94939)].join(''));

(frame_94935.lineno = (frame_94935.lineno - (2)));
} else {
}
} else {
}


var G__94940 = seq__94888_94931;
var G__94941 = chunk__94889_94932;
var G__94942 = count__94890_94933;
var G__94943 = (i__94891_94934 + (1));
seq__94888_94931 = G__94940;
chunk__94889_94932 = G__94941;
count__94890_94933 = G__94942;
i__94891_94934 = G__94943;
continue;
} else {
var temp__5720__auto___94944 = cljs.core.seq(seq__94888_94931);
if(temp__5720__auto___94944){
var seq__94888_94945__$1 = temp__5720__auto___94944;
if(cljs.core.chunked_seq_QMARK_(seq__94888_94945__$1)){
var c__5565__auto___94946 = cljs.core.chunk_first(seq__94888_94945__$1);
var G__94947 = cljs.core.chunk_rest(seq__94888_94945__$1);
var G__94948 = c__5565__auto___94946;
var G__94949 = cljs.core.count(c__5565__auto___94946);
var G__94950 = (0);
seq__94888_94931 = G__94947;
chunk__94889_94932 = G__94948;
count__94890_94933 = G__94949;
i__94891_94934 = G__94950;
continue;
} else {
var frame_94951 = cljs.core.first(seq__94888_94945__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_94951.filename))){
var temp__5720__auto___94952__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_94951.filename);
if(cljs.core.truth_(temp__5720__auto___94952__$1)){
var vec__94902_94953 = temp__5720__auto___94952__$1;
var __94954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94902_94953,(0),null);
var filename_94955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94902_94953,(1),null);
(frame_94951.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_94955)].join(''));

(frame_94951.lineno = (frame_94951.lineno - (2)));
} else {
}
} else {
}


var G__94956 = cljs.core.next(seq__94888_94945__$1);
var G__94957 = null;
var G__94958 = (0);
var G__94959 = (0);
seq__94888_94931 = G__94956;
chunk__94889_94932 = G__94957;
count__94890_94933 = G__94958;
i__94891_94934 = G__94959;
continue;
}
} else {
}
}
break;
}


var G__94960 = seq__94852_94926;
var G__94961 = chunk__94853_94927;
var G__94962 = count__94854_94928;
var G__94963 = (i__94855_94929 + (1));
seq__94852_94926 = G__94960;
chunk__94853_94927 = G__94961;
count__94854_94928 = G__94962;
i__94855_94929 = G__94963;
continue;
} else {
var temp__5720__auto___94964 = cljs.core.seq(seq__94852_94926);
if(temp__5720__auto___94964){
var seq__94852_94965__$1 = temp__5720__auto___94964;
if(cljs.core.chunked_seq_QMARK_(seq__94852_94965__$1)){
var c__5565__auto___94966 = cljs.core.chunk_first(seq__94852_94965__$1);
var G__94967 = cljs.core.chunk_rest(seq__94852_94965__$1);
var G__94968 = c__5565__auto___94966;
var G__94969 = cljs.core.count(c__5565__auto___94966);
var G__94970 = (0);
seq__94852_94926 = G__94967;
chunk__94853_94927 = G__94968;
count__94854_94928 = G__94969;
i__94855_94929 = G__94970;
continue;
} else {
var value_94971 = cljs.core.first(seq__94852_94965__$1);
var seq__94905_94972 = cljs.core.seq(value_94971.stacktrace.frames);
var chunk__94906_94973 = null;
var count__94907_94974 = (0);
var i__94908_94975 = (0);
while(true){
if((i__94908_94975 < count__94907_94974)){
var frame_94976 = chunk__94906_94973.cljs$core$IIndexed$_nth$arity$2(null,i__94908_94975);
if(cljs.core.truth_(cljs.core.not_empty(frame_94976.filename))){
var temp__5720__auto___94977__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_94976.filename);
if(cljs.core.truth_(temp__5720__auto___94977__$1)){
var vec__94915_94978 = temp__5720__auto___94977__$1;
var __94979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94915_94978,(0),null);
var filename_94980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94915_94978,(1),null);
(frame_94976.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_94980)].join(''));

(frame_94976.lineno = (frame_94976.lineno - (2)));
} else {
}
} else {
}


var G__94981 = seq__94905_94972;
var G__94982 = chunk__94906_94973;
var G__94983 = count__94907_94974;
var G__94984 = (i__94908_94975 + (1));
seq__94905_94972 = G__94981;
chunk__94906_94973 = G__94982;
count__94907_94974 = G__94983;
i__94908_94975 = G__94984;
continue;
} else {
var temp__5720__auto___94985__$1 = cljs.core.seq(seq__94905_94972);
if(temp__5720__auto___94985__$1){
var seq__94905_94986__$1 = temp__5720__auto___94985__$1;
if(cljs.core.chunked_seq_QMARK_(seq__94905_94986__$1)){
var c__5565__auto___94987 = cljs.core.chunk_first(seq__94905_94986__$1);
var G__94988 = cljs.core.chunk_rest(seq__94905_94986__$1);
var G__94989 = c__5565__auto___94987;
var G__94990 = cljs.core.count(c__5565__auto___94987);
var G__94991 = (0);
seq__94905_94972 = G__94988;
chunk__94906_94973 = G__94989;
count__94907_94974 = G__94990;
i__94908_94975 = G__94991;
continue;
} else {
var frame_94992 = cljs.core.first(seq__94905_94986__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_94992.filename))){
var temp__5720__auto___94993__$2 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_94992.filename);
if(cljs.core.truth_(temp__5720__auto___94993__$2)){
var vec__94918_94994 = temp__5720__auto___94993__$2;
var __94995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94918_94994,(0),null);
var filename_94996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94918_94994,(1),null);
(frame_94992.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_94996)].join(''));

(frame_94992.lineno = (frame_94992.lineno - (2)));
} else {
}
} else {
}


var G__94997 = cljs.core.next(seq__94905_94986__$1);
var G__94998 = null;
var G__94999 = (0);
var G__95000 = (0);
seq__94905_94972 = G__94997;
chunk__94906_94973 = G__94998;
count__94907_94974 = G__94999;
i__94908_94975 = G__95000;
continue;
}
} else {
}
}
break;
}


var G__95001 = cljs.core.next(seq__94852_94965__$1);
var G__95002 = null;
var G__95003 = (0);
var G__95004 = (0);
seq__94852_94926 = G__95001;
chunk__94853_94927 = G__95002;
count__94854_94928 = G__95003;
i__94855_94929 = G__95004;
continue;
}
} else {
}
}
break;
}
}catch (e94848){var e_95005 = e94848;
console.error(e_95005);
}
return event;
})], null);
frontend.modules.instrumentation.sentry.init = (function frontend$modules$instrumentation$sentry$init(){
if(cljs.core.truth_(frontend.config.dev_QMARK_)){
return null;
} else {
var config = cljs.core.clj__GT_js(frontend.modules.instrumentation.sentry.config);
return module$node_modules$$sentry$react$dist$index.init(config);
}
});

//# sourceMappingURL=frontend.modules.instrumentation.sentry.js.map
