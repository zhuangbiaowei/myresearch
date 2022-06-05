goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49626 = arguments.length;
var i__5767__auto___49627 = (0);
while(true){
if((i__5767__auto___49627 < len__5766__auto___49626)){
args__5772__auto__.push((arguments[i__5767__auto___49627]));

var G__49628 = (i__5767__auto___49627 + (1));
i__5767__auto___49627 = G__49628;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49069){
var G__49070 = cljs.core.first(seq49069);
var seq49069__$1 = cljs.core.next(seq49069);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49070,seq49069__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49073 = cljs.core.seq(sources);
var chunk__49074 = null;
var count__49075 = (0);
var i__49076 = (0);
while(true){
if((i__49076 < count__49075)){
var map__49084 = chunk__49074.cljs$core$IIndexed$_nth$arity$2(null,i__49076);
var map__49084__$1 = cljs.core.__destructure_map(map__49084);
var src = map__49084__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49084__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49084__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49084__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49084__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49086){var e_49634 = e49086;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49634);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49634.message)].join('')));
}

var G__49635 = seq__49073;
var G__49636 = chunk__49074;
var G__49637 = count__49075;
var G__49638 = (i__49076 + (1));
seq__49073 = G__49635;
chunk__49074 = G__49636;
count__49075 = G__49637;
i__49076 = G__49638;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49073);
if(temp__5720__auto__){
var seq__49073__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49073__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49073__$1);
var G__49639 = cljs.core.chunk_rest(seq__49073__$1);
var G__49640 = c__5565__auto__;
var G__49641 = cljs.core.count(c__5565__auto__);
var G__49642 = (0);
seq__49073 = G__49639;
chunk__49074 = G__49640;
count__49075 = G__49641;
i__49076 = G__49642;
continue;
} else {
var map__49091 = cljs.core.first(seq__49073__$1);
var map__49091__$1 = cljs.core.__destructure_map(map__49091);
var src = map__49091__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49091__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49091__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49091__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49091__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49092){var e_49644 = e49092;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49644);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49644.message)].join('')));
}

var G__49646 = cljs.core.next(seq__49073__$1);
var G__49647 = null;
var G__49648 = (0);
var G__49649 = (0);
seq__49073 = G__49646;
chunk__49074 = G__49647;
count__49075 = G__49648;
i__49076 = G__49649;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49097 = cljs.core.seq(js_requires);
var chunk__49098 = null;
var count__49099 = (0);
var i__49100 = (0);
while(true){
if((i__49100 < count__49099)){
var js_ns = chunk__49098.cljs$core$IIndexed$_nth$arity$2(null,i__49100);
var require_str_49653 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49653);


var G__49654 = seq__49097;
var G__49655 = chunk__49098;
var G__49656 = count__49099;
var G__49657 = (i__49100 + (1));
seq__49097 = G__49654;
chunk__49098 = G__49655;
count__49099 = G__49656;
i__49100 = G__49657;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49097);
if(temp__5720__auto__){
var seq__49097__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49097__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49097__$1);
var G__49658 = cljs.core.chunk_rest(seq__49097__$1);
var G__49659 = c__5565__auto__;
var G__49660 = cljs.core.count(c__5565__auto__);
var G__49661 = (0);
seq__49097 = G__49658;
chunk__49098 = G__49659;
count__49099 = G__49660;
i__49100 = G__49661;
continue;
} else {
var js_ns = cljs.core.first(seq__49097__$1);
var require_str_49662 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49662);


var G__49663 = cljs.core.next(seq__49097__$1);
var G__49664 = null;
var G__49665 = (0);
var G__49666 = (0);
seq__49097 = G__49663;
chunk__49098 = G__49664;
count__49099 = G__49665;
i__49100 = G__49666;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__49102){
var map__49103 = p__49102;
var map__49103__$1 = cljs.core.__destructure_map(map__49103);
var msg = map__49103__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49103__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49103__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49104(s__49105){
return (new cljs.core.LazySeq(null,(function (){
var s__49105__$1 = s__49105;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__49105__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__49110 = cljs.core.first(xs__6277__auto__);
var map__49110__$1 = cljs.core.__destructure_map(map__49110);
var src = map__49110__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49110__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49110__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__49105__$1,map__49110,map__49110__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__49103,map__49103__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49104_$_iter__49106(s__49107){
return (new cljs.core.LazySeq(null,((function (s__49105__$1,map__49110,map__49110__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__49103,map__49103__$1,msg,info,reload_info){
return (function (){
var s__49107__$1 = s__49107;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__49107__$1);
if(temp__5720__auto____$1){
var s__49107__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49107__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49107__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49109 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49108 = (0);
while(true){
if((i__49108 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__49108);
cljs.core.chunk_append(b__49109,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49674 = (i__49108 + (1));
i__49108 = G__49674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49109),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49104_$_iter__49106(cljs.core.chunk_rest(s__49107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49109),null);
}
} else {
var warning = cljs.core.first(s__49107__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49104_$_iter__49106(cljs.core.rest(s__49107__$2)));
}
} else {
return null;
}
break;
}
});})(s__49105__$1,map__49110,map__49110__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__49103,map__49103__$1,msg,info,reload_info))
,null,null));
});})(s__49105__$1,map__49110,map__49110__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__49103,map__49103__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49104(cljs.core.rest(s__49105__$1)));
} else {
var G__49679 = cljs.core.rest(s__49105__$1);
s__49105__$1 = G__49679;
continue;
}
} else {
var G__49680 = cljs.core.rest(s__49105__$1);
s__49105__$1 = G__49680;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__49111_49681 = cljs.core.seq(warnings);
var chunk__49112_49682 = null;
var count__49113_49683 = (0);
var i__49114_49684 = (0);
while(true){
if((i__49114_49684 < count__49113_49683)){
var map__49117_49691 = chunk__49112_49682.cljs$core$IIndexed$_nth$arity$2(null,i__49114_49684);
var map__49117_49692__$1 = cljs.core.__destructure_map(map__49117_49691);
var w_49693 = map__49117_49692__$1;
var msg_49694__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49117_49692__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49117_49692__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49117_49692__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49117_49692__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49697)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49695),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49696),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49694__$1)].join(''));


var G__49698 = seq__49111_49681;
var G__49699 = chunk__49112_49682;
var G__49700 = count__49113_49683;
var G__49701 = (i__49114_49684 + (1));
seq__49111_49681 = G__49698;
chunk__49112_49682 = G__49699;
count__49113_49683 = G__49700;
i__49114_49684 = G__49701;
continue;
} else {
var temp__5720__auto___49702 = cljs.core.seq(seq__49111_49681);
if(temp__5720__auto___49702){
var seq__49111_49703__$1 = temp__5720__auto___49702;
if(cljs.core.chunked_seq_QMARK_(seq__49111_49703__$1)){
var c__5565__auto___49705 = cljs.core.chunk_first(seq__49111_49703__$1);
var G__49708 = cljs.core.chunk_rest(seq__49111_49703__$1);
var G__49709 = c__5565__auto___49705;
var G__49710 = cljs.core.count(c__5565__auto___49705);
var G__49711 = (0);
seq__49111_49681 = G__49708;
chunk__49112_49682 = G__49709;
count__49113_49683 = G__49710;
i__49114_49684 = G__49711;
continue;
} else {
var map__49118_49715 = cljs.core.first(seq__49111_49703__$1);
var map__49118_49716__$1 = cljs.core.__destructure_map(map__49118_49715);
var w_49717 = map__49118_49716__$1;
var msg_49718__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49118_49716__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49118_49716__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49118_49716__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49118_49716__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49721)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49719),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49720),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49718__$1)].join(''));


var G__49722 = cljs.core.next(seq__49111_49703__$1);
var G__49723 = null;
var G__49724 = (0);
var G__49725 = (0);
seq__49111_49681 = G__49722;
chunk__49112_49682 = G__49723;
count__49113_49683 = G__49724;
i__49114_49684 = G__49725;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__49101_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49101_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__49120){
var map__49121 = p__49120;
var map__49121__$1 = cljs.core.__destructure_map(map__49121);
var msg = map__49121__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49121__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49121__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__49122 = cljs.core.seq(updates);
var chunk__49124 = null;
var count__49125 = (0);
var i__49126 = (0);
while(true){
if((i__49126 < count__49125)){
var path = chunk__49124.cljs$core$IIndexed$_nth$arity$2(null,i__49126);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49328_49739 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49332_49740 = null;
var count__49333_49741 = (0);
var i__49334_49742 = (0);
while(true){
if((i__49334_49742 < count__49333_49741)){
var node_49743 = chunk__49332_49740.cljs$core$IIndexed$_nth$arity$2(null,i__49334_49742);
if(cljs.core.not(node_49743.shadow$old)){
var path_match_49745 = shadow.cljs.devtools.client.browser.match_paths(node_49743.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49745)){
var new_link_49749 = (function (){var G__49360 = node_49743.cloneNode(true);
G__49360.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49745),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49360;
})();
(node_49743.shadow$old = true);

(new_link_49749.onload = ((function (seq__49328_49739,chunk__49332_49740,count__49333_49741,i__49334_49742,seq__49122,chunk__49124,count__49125,i__49126,new_link_49749,path_match_49745,node_49743,path,map__49121,map__49121__$1,msg,updates,reload_info){
return (function (e){
var seq__49361_49756 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49363_49757 = null;
var count__49364_49758 = (0);
var i__49365_49759 = (0);
while(true){
if((i__49365_49759 < count__49364_49758)){
var map__49371_49762 = chunk__49363_49757.cljs$core$IIndexed$_nth$arity$2(null,i__49365_49759);
var map__49371_49763__$1 = cljs.core.__destructure_map(map__49371_49762);
var task_49764 = map__49371_49763__$1;
var fn_str_49765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49371_49763__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49371_49763__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49768 = goog.getObjectByName(fn_str_49765,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49766)].join(''));

(fn_obj_49768.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49768.cljs$core$IFn$_invoke$arity$2(path,new_link_49749) : fn_obj_49768.call(null,path,new_link_49749));


var G__49769 = seq__49361_49756;
var G__49770 = chunk__49363_49757;
var G__49771 = count__49364_49758;
var G__49772 = (i__49365_49759 + (1));
seq__49361_49756 = G__49769;
chunk__49363_49757 = G__49770;
count__49364_49758 = G__49771;
i__49365_49759 = G__49772;
continue;
} else {
var temp__5720__auto___49773 = cljs.core.seq(seq__49361_49756);
if(temp__5720__auto___49773){
var seq__49361_49774__$1 = temp__5720__auto___49773;
if(cljs.core.chunked_seq_QMARK_(seq__49361_49774__$1)){
var c__5565__auto___49775 = cljs.core.chunk_first(seq__49361_49774__$1);
var G__49776 = cljs.core.chunk_rest(seq__49361_49774__$1);
var G__49777 = c__5565__auto___49775;
var G__49778 = cljs.core.count(c__5565__auto___49775);
var G__49779 = (0);
seq__49361_49756 = G__49776;
chunk__49363_49757 = G__49777;
count__49364_49758 = G__49778;
i__49365_49759 = G__49779;
continue;
} else {
var map__49374_49780 = cljs.core.first(seq__49361_49774__$1);
var map__49374_49781__$1 = cljs.core.__destructure_map(map__49374_49780);
var task_49782 = map__49374_49781__$1;
var fn_str_49783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49374_49781__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49374_49781__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49785 = goog.getObjectByName(fn_str_49783,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49784)].join(''));

(fn_obj_49785.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49785.cljs$core$IFn$_invoke$arity$2(path,new_link_49749) : fn_obj_49785.call(null,path,new_link_49749));


var G__49786 = cljs.core.next(seq__49361_49774__$1);
var G__49787 = null;
var G__49788 = (0);
var G__49789 = (0);
seq__49361_49756 = G__49786;
chunk__49363_49757 = G__49787;
count__49364_49758 = G__49788;
i__49365_49759 = G__49789;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49743);
});})(seq__49328_49739,chunk__49332_49740,count__49333_49741,i__49334_49742,seq__49122,chunk__49124,count__49125,i__49126,new_link_49749,path_match_49745,node_49743,path,map__49121,map__49121__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49745], 0));

goog.dom.insertSiblingAfter(new_link_49749,node_49743);


var G__49790 = seq__49328_49739;
var G__49791 = chunk__49332_49740;
var G__49792 = count__49333_49741;
var G__49793 = (i__49334_49742 + (1));
seq__49328_49739 = G__49790;
chunk__49332_49740 = G__49791;
count__49333_49741 = G__49792;
i__49334_49742 = G__49793;
continue;
} else {
var G__49794 = seq__49328_49739;
var G__49795 = chunk__49332_49740;
var G__49796 = count__49333_49741;
var G__49797 = (i__49334_49742 + (1));
seq__49328_49739 = G__49794;
chunk__49332_49740 = G__49795;
count__49333_49741 = G__49796;
i__49334_49742 = G__49797;
continue;
}
} else {
var G__49798 = seq__49328_49739;
var G__49799 = chunk__49332_49740;
var G__49800 = count__49333_49741;
var G__49801 = (i__49334_49742 + (1));
seq__49328_49739 = G__49798;
chunk__49332_49740 = G__49799;
count__49333_49741 = G__49800;
i__49334_49742 = G__49801;
continue;
}
} else {
var temp__5720__auto___49802 = cljs.core.seq(seq__49328_49739);
if(temp__5720__auto___49802){
var seq__49328_49803__$1 = temp__5720__auto___49802;
if(cljs.core.chunked_seq_QMARK_(seq__49328_49803__$1)){
var c__5565__auto___49804 = cljs.core.chunk_first(seq__49328_49803__$1);
var G__49805 = cljs.core.chunk_rest(seq__49328_49803__$1);
var G__49806 = c__5565__auto___49804;
var G__49807 = cljs.core.count(c__5565__auto___49804);
var G__49808 = (0);
seq__49328_49739 = G__49805;
chunk__49332_49740 = G__49806;
count__49333_49741 = G__49807;
i__49334_49742 = G__49808;
continue;
} else {
var node_49809 = cljs.core.first(seq__49328_49803__$1);
if(cljs.core.not(node_49809.shadow$old)){
var path_match_49812 = shadow.cljs.devtools.client.browser.match_paths(node_49809.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49812)){
var new_link_49813 = (function (){var G__49391 = node_49809.cloneNode(true);
G__49391.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49812),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49391;
})();
(node_49809.shadow$old = true);

(new_link_49813.onload = ((function (seq__49328_49739,chunk__49332_49740,count__49333_49741,i__49334_49742,seq__49122,chunk__49124,count__49125,i__49126,new_link_49813,path_match_49812,node_49809,seq__49328_49803__$1,temp__5720__auto___49802,path,map__49121,map__49121__$1,msg,updates,reload_info){
return (function (e){
var seq__49396_49815 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49398_49816 = null;
var count__49399_49817 = (0);
var i__49400_49818 = (0);
while(true){
if((i__49400_49818 < count__49399_49817)){
var map__49404_49819 = chunk__49398_49816.cljs$core$IIndexed$_nth$arity$2(null,i__49400_49818);
var map__49404_49820__$1 = cljs.core.__destructure_map(map__49404_49819);
var task_49821 = map__49404_49820__$1;
var fn_str_49822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49404_49820__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49404_49820__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49824 = goog.getObjectByName(fn_str_49822,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49823)].join(''));

(fn_obj_49824.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49824.cljs$core$IFn$_invoke$arity$2(path,new_link_49813) : fn_obj_49824.call(null,path,new_link_49813));


var G__49825 = seq__49396_49815;
var G__49826 = chunk__49398_49816;
var G__49827 = count__49399_49817;
var G__49828 = (i__49400_49818 + (1));
seq__49396_49815 = G__49825;
chunk__49398_49816 = G__49826;
count__49399_49817 = G__49827;
i__49400_49818 = G__49828;
continue;
} else {
var temp__5720__auto___49829__$1 = cljs.core.seq(seq__49396_49815);
if(temp__5720__auto___49829__$1){
var seq__49396_49830__$1 = temp__5720__auto___49829__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49396_49830__$1)){
var c__5565__auto___49831 = cljs.core.chunk_first(seq__49396_49830__$1);
var G__49832 = cljs.core.chunk_rest(seq__49396_49830__$1);
var G__49833 = c__5565__auto___49831;
var G__49834 = cljs.core.count(c__5565__auto___49831);
var G__49835 = (0);
seq__49396_49815 = G__49832;
chunk__49398_49816 = G__49833;
count__49399_49817 = G__49834;
i__49400_49818 = G__49835;
continue;
} else {
var map__49405_49836 = cljs.core.first(seq__49396_49830__$1);
var map__49405_49837__$1 = cljs.core.__destructure_map(map__49405_49836);
var task_49838 = map__49405_49837__$1;
var fn_str_49839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49405_49837__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49405_49837__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49841 = goog.getObjectByName(fn_str_49839,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49840)].join(''));

(fn_obj_49841.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49841.cljs$core$IFn$_invoke$arity$2(path,new_link_49813) : fn_obj_49841.call(null,path,new_link_49813));


var G__49842 = cljs.core.next(seq__49396_49830__$1);
var G__49843 = null;
var G__49844 = (0);
var G__49845 = (0);
seq__49396_49815 = G__49842;
chunk__49398_49816 = G__49843;
count__49399_49817 = G__49844;
i__49400_49818 = G__49845;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49809);
});})(seq__49328_49739,chunk__49332_49740,count__49333_49741,i__49334_49742,seq__49122,chunk__49124,count__49125,i__49126,new_link_49813,path_match_49812,node_49809,seq__49328_49803__$1,temp__5720__auto___49802,path,map__49121,map__49121__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49812], 0));

goog.dom.insertSiblingAfter(new_link_49813,node_49809);


var G__49847 = cljs.core.next(seq__49328_49803__$1);
var G__49848 = null;
var G__49849 = (0);
var G__49850 = (0);
seq__49328_49739 = G__49847;
chunk__49332_49740 = G__49848;
count__49333_49741 = G__49849;
i__49334_49742 = G__49850;
continue;
} else {
var G__49851 = cljs.core.next(seq__49328_49803__$1);
var G__49852 = null;
var G__49853 = (0);
var G__49854 = (0);
seq__49328_49739 = G__49851;
chunk__49332_49740 = G__49852;
count__49333_49741 = G__49853;
i__49334_49742 = G__49854;
continue;
}
} else {
var G__49855 = cljs.core.next(seq__49328_49803__$1);
var G__49856 = null;
var G__49857 = (0);
var G__49858 = (0);
seq__49328_49739 = G__49855;
chunk__49332_49740 = G__49856;
count__49333_49741 = G__49857;
i__49334_49742 = G__49858;
continue;
}
}
} else {
}
}
break;
}


var G__49859 = seq__49122;
var G__49860 = chunk__49124;
var G__49861 = count__49125;
var G__49862 = (i__49126 + (1));
seq__49122 = G__49859;
chunk__49124 = G__49860;
count__49125 = G__49861;
i__49126 = G__49862;
continue;
} else {
var G__49863 = seq__49122;
var G__49864 = chunk__49124;
var G__49865 = count__49125;
var G__49866 = (i__49126 + (1));
seq__49122 = G__49863;
chunk__49124 = G__49864;
count__49125 = G__49865;
i__49126 = G__49866;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49122);
if(temp__5720__auto__){
var seq__49122__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49122__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49122__$1);
var G__49867 = cljs.core.chunk_rest(seq__49122__$1);
var G__49868 = c__5565__auto__;
var G__49869 = cljs.core.count(c__5565__auto__);
var G__49870 = (0);
seq__49122 = G__49867;
chunk__49124 = G__49868;
count__49125 = G__49869;
i__49126 = G__49870;
continue;
} else {
var path = cljs.core.first(seq__49122__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49408_49872 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49412_49873 = null;
var count__49413_49874 = (0);
var i__49414_49875 = (0);
while(true){
if((i__49414_49875 < count__49413_49874)){
var node_49876 = chunk__49412_49873.cljs$core$IIndexed$_nth$arity$2(null,i__49414_49875);
if(cljs.core.not(node_49876.shadow$old)){
var path_match_49877 = shadow.cljs.devtools.client.browser.match_paths(node_49876.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49877)){
var new_link_49878 = (function (){var G__49461 = node_49876.cloneNode(true);
G__49461.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49877),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49461;
})();
(node_49876.shadow$old = true);

(new_link_49878.onload = ((function (seq__49408_49872,chunk__49412_49873,count__49413_49874,i__49414_49875,seq__49122,chunk__49124,count__49125,i__49126,new_link_49878,path_match_49877,node_49876,path,seq__49122__$1,temp__5720__auto__,map__49121,map__49121__$1,msg,updates,reload_info){
return (function (e){
var seq__49462_49880 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49464_49881 = null;
var count__49465_49882 = (0);
var i__49466_49883 = (0);
while(true){
if((i__49466_49883 < count__49465_49882)){
var map__49472_49886 = chunk__49464_49881.cljs$core$IIndexed$_nth$arity$2(null,i__49466_49883);
var map__49472_49887__$1 = cljs.core.__destructure_map(map__49472_49886);
var task_49888 = map__49472_49887__$1;
var fn_str_49889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49472_49887__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49472_49887__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49891 = goog.getObjectByName(fn_str_49889,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49890)].join(''));

(fn_obj_49891.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49891.cljs$core$IFn$_invoke$arity$2(path,new_link_49878) : fn_obj_49891.call(null,path,new_link_49878));


var G__49892 = seq__49462_49880;
var G__49893 = chunk__49464_49881;
var G__49894 = count__49465_49882;
var G__49895 = (i__49466_49883 + (1));
seq__49462_49880 = G__49892;
chunk__49464_49881 = G__49893;
count__49465_49882 = G__49894;
i__49466_49883 = G__49895;
continue;
} else {
var temp__5720__auto___49898__$1 = cljs.core.seq(seq__49462_49880);
if(temp__5720__auto___49898__$1){
var seq__49462_49899__$1 = temp__5720__auto___49898__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49462_49899__$1)){
var c__5565__auto___49900 = cljs.core.chunk_first(seq__49462_49899__$1);
var G__49902 = cljs.core.chunk_rest(seq__49462_49899__$1);
var G__49903 = c__5565__auto___49900;
var G__49904 = cljs.core.count(c__5565__auto___49900);
var G__49905 = (0);
seq__49462_49880 = G__49902;
chunk__49464_49881 = G__49903;
count__49465_49882 = G__49904;
i__49466_49883 = G__49905;
continue;
} else {
var map__49473_49907 = cljs.core.first(seq__49462_49899__$1);
var map__49473_49908__$1 = cljs.core.__destructure_map(map__49473_49907);
var task_49909 = map__49473_49908__$1;
var fn_str_49910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49473_49908__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49473_49908__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49912 = goog.getObjectByName(fn_str_49910,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49911)].join(''));

(fn_obj_49912.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49912.cljs$core$IFn$_invoke$arity$2(path,new_link_49878) : fn_obj_49912.call(null,path,new_link_49878));


var G__49913 = cljs.core.next(seq__49462_49899__$1);
var G__49914 = null;
var G__49915 = (0);
var G__49916 = (0);
seq__49462_49880 = G__49913;
chunk__49464_49881 = G__49914;
count__49465_49882 = G__49915;
i__49466_49883 = G__49916;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49876);
});})(seq__49408_49872,chunk__49412_49873,count__49413_49874,i__49414_49875,seq__49122,chunk__49124,count__49125,i__49126,new_link_49878,path_match_49877,node_49876,path,seq__49122__$1,temp__5720__auto__,map__49121,map__49121__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49877], 0));

goog.dom.insertSiblingAfter(new_link_49878,node_49876);


var G__49918 = seq__49408_49872;
var G__49919 = chunk__49412_49873;
var G__49920 = count__49413_49874;
var G__49921 = (i__49414_49875 + (1));
seq__49408_49872 = G__49918;
chunk__49412_49873 = G__49919;
count__49413_49874 = G__49920;
i__49414_49875 = G__49921;
continue;
} else {
var G__49922 = seq__49408_49872;
var G__49923 = chunk__49412_49873;
var G__49924 = count__49413_49874;
var G__49925 = (i__49414_49875 + (1));
seq__49408_49872 = G__49922;
chunk__49412_49873 = G__49923;
count__49413_49874 = G__49924;
i__49414_49875 = G__49925;
continue;
}
} else {
var G__49926 = seq__49408_49872;
var G__49927 = chunk__49412_49873;
var G__49928 = count__49413_49874;
var G__49929 = (i__49414_49875 + (1));
seq__49408_49872 = G__49926;
chunk__49412_49873 = G__49927;
count__49413_49874 = G__49928;
i__49414_49875 = G__49929;
continue;
}
} else {
var temp__5720__auto___49930__$1 = cljs.core.seq(seq__49408_49872);
if(temp__5720__auto___49930__$1){
var seq__49408_49931__$1 = temp__5720__auto___49930__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49408_49931__$1)){
var c__5565__auto___49932 = cljs.core.chunk_first(seq__49408_49931__$1);
var G__49933 = cljs.core.chunk_rest(seq__49408_49931__$1);
var G__49934 = c__5565__auto___49932;
var G__49935 = cljs.core.count(c__5565__auto___49932);
var G__49936 = (0);
seq__49408_49872 = G__49933;
chunk__49412_49873 = G__49934;
count__49413_49874 = G__49935;
i__49414_49875 = G__49936;
continue;
} else {
var node_49938 = cljs.core.first(seq__49408_49931__$1);
if(cljs.core.not(node_49938.shadow$old)){
var path_match_49939 = shadow.cljs.devtools.client.browser.match_paths(node_49938.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49939)){
var new_link_49940 = (function (){var G__49476 = node_49938.cloneNode(true);
G__49476.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49939),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49476;
})();
(node_49938.shadow$old = true);

(new_link_49940.onload = ((function (seq__49408_49872,chunk__49412_49873,count__49413_49874,i__49414_49875,seq__49122,chunk__49124,count__49125,i__49126,new_link_49940,path_match_49939,node_49938,seq__49408_49931__$1,temp__5720__auto___49930__$1,path,seq__49122__$1,temp__5720__auto__,map__49121,map__49121__$1,msg,updates,reload_info){
return (function (e){
var seq__49479_49941 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49481_49942 = null;
var count__49482_49943 = (0);
var i__49483_49944 = (0);
while(true){
if((i__49483_49944 < count__49482_49943)){
var map__49493_49945 = chunk__49481_49942.cljs$core$IIndexed$_nth$arity$2(null,i__49483_49944);
var map__49493_49946__$1 = cljs.core.__destructure_map(map__49493_49945);
var task_49947 = map__49493_49946__$1;
var fn_str_49948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49493_49946__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49493_49946__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49950 = goog.getObjectByName(fn_str_49948,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49949)].join(''));

(fn_obj_49950.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49950.cljs$core$IFn$_invoke$arity$2(path,new_link_49940) : fn_obj_49950.call(null,path,new_link_49940));


var G__49951 = seq__49479_49941;
var G__49952 = chunk__49481_49942;
var G__49953 = count__49482_49943;
var G__49954 = (i__49483_49944 + (1));
seq__49479_49941 = G__49951;
chunk__49481_49942 = G__49952;
count__49482_49943 = G__49953;
i__49483_49944 = G__49954;
continue;
} else {
var temp__5720__auto___49955__$2 = cljs.core.seq(seq__49479_49941);
if(temp__5720__auto___49955__$2){
var seq__49479_49956__$1 = temp__5720__auto___49955__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49479_49956__$1)){
var c__5565__auto___49957 = cljs.core.chunk_first(seq__49479_49956__$1);
var G__49958 = cljs.core.chunk_rest(seq__49479_49956__$1);
var G__49959 = c__5565__auto___49957;
var G__49960 = cljs.core.count(c__5565__auto___49957);
var G__49961 = (0);
seq__49479_49941 = G__49958;
chunk__49481_49942 = G__49959;
count__49482_49943 = G__49960;
i__49483_49944 = G__49961;
continue;
} else {
var map__49494_49962 = cljs.core.first(seq__49479_49956__$1);
var map__49494_49963__$1 = cljs.core.__destructure_map(map__49494_49962);
var task_49964 = map__49494_49963__$1;
var fn_str_49965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49494_49963__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49494_49963__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49967 = goog.getObjectByName(fn_str_49965,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49966)].join(''));

(fn_obj_49967.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49967.cljs$core$IFn$_invoke$arity$2(path,new_link_49940) : fn_obj_49967.call(null,path,new_link_49940));


var G__49968 = cljs.core.next(seq__49479_49956__$1);
var G__49969 = null;
var G__49970 = (0);
var G__49971 = (0);
seq__49479_49941 = G__49968;
chunk__49481_49942 = G__49969;
count__49482_49943 = G__49970;
i__49483_49944 = G__49971;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49938);
});})(seq__49408_49872,chunk__49412_49873,count__49413_49874,i__49414_49875,seq__49122,chunk__49124,count__49125,i__49126,new_link_49940,path_match_49939,node_49938,seq__49408_49931__$1,temp__5720__auto___49930__$1,path,seq__49122__$1,temp__5720__auto__,map__49121,map__49121__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49939], 0));

goog.dom.insertSiblingAfter(new_link_49940,node_49938);


var G__49972 = cljs.core.next(seq__49408_49931__$1);
var G__49973 = null;
var G__49974 = (0);
var G__49975 = (0);
seq__49408_49872 = G__49972;
chunk__49412_49873 = G__49973;
count__49413_49874 = G__49974;
i__49414_49875 = G__49975;
continue;
} else {
var G__49976 = cljs.core.next(seq__49408_49931__$1);
var G__49977 = null;
var G__49978 = (0);
var G__49979 = (0);
seq__49408_49872 = G__49976;
chunk__49412_49873 = G__49977;
count__49413_49874 = G__49978;
i__49414_49875 = G__49979;
continue;
}
} else {
var G__49980 = cljs.core.next(seq__49408_49931__$1);
var G__49981 = null;
var G__49982 = (0);
var G__49983 = (0);
seq__49408_49872 = G__49980;
chunk__49412_49873 = G__49981;
count__49413_49874 = G__49982;
i__49414_49875 = G__49983;
continue;
}
}
} else {
}
}
break;
}


var G__49984 = cljs.core.next(seq__49122__$1);
var G__49985 = null;
var G__49986 = (0);
var G__49987 = (0);
seq__49122 = G__49984;
chunk__49124 = G__49985;
count__49125 = G__49986;
i__49126 = G__49987;
continue;
} else {
var G__49989 = cljs.core.next(seq__49122__$1);
var G__49990 = null;
var G__49991 = (0);
var G__49992 = (0);
seq__49122 = G__49989;
chunk__49124 = G__49990;
count__49125 = G__49991;
i__49126 = G__49992;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__49495){
var map__49496 = p__49495;
var map__49496__$1 = cljs.core.__destructure_map(map__49496);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49496__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__49537){
var map__49538 = p__49537;
var map__49538__$1 = cljs.core.__destructure_map(map__49538);
var _ = map__49538__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__49541,done,error){
var map__49542 = p__49541;
var map__49542__$1 = cljs.core.__destructure_map(map__49542);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49542__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__49543,done,error){
var map__49544 = p__49543;
var map__49544__$1 = cljs.core.__destructure_map(map__49544);
var msg = map__49544__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49544__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49544__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49544__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49545){
var map__49546 = p__49545;
var map__49546__$1 = cljs.core.__destructure_map(map__49546);
var src = map__49546__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49546__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__49547 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__49547) : done.call(null,G__49547));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__49549){
var map__49550 = p__49549;
var map__49550__$1 = cljs.core.__destructure_map(map__49550);
var msg__$1 = map__49550__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49550__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e49551){var ex = e49551;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__49555){
var map__49556 = p__49555;
var map__49556__$1 = cljs.core.__destructure_map(map__49556);
var env = map__49556__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49556__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__49590){
var map__49593 = p__49590;
var map__49593__$1 = cljs.core.__destructure_map(map__49593);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49593__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49593__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__49604){
var map__49606 = p__49604;
var map__49606__$1 = cljs.core.__destructure_map(map__49606);
var svc = map__49606__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49606__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
