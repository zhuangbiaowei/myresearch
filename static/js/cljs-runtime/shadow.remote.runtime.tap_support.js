goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__48830,p__48831){
var map__48832 = p__48830;
var map__48832__$1 = cljs.core.__destructure_map(map__48832);
var svc = map__48832__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48832__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48832__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48832__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48833 = p__48831;
var map__48833__$1 = cljs.core.__destructure_map(map__48833);
var msg = map__48833__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48833__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48833__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48833__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48833__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__48844,p__48845){
var map__48847 = p__48844;
var map__48847__$1 = cljs.core.__destructure_map(map__48847);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48847__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__48848 = p__48845;
var map__48848__$1 = cljs.core.__destructure_map(map__48848);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48848__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__48853,p__48854){
var map__48855 = p__48853;
var map__48855__$1 = cljs.core.__destructure_map(map__48855);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48855__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48855__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48856 = p__48854;
var map__48856__$1 = cljs.core.__destructure_map(map__48856);
var msg = map__48856__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48856__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__48859,tid){
var map__48860 = p__48859;
var map__48860__$1 = cljs.core.__destructure_map(map__48860);
var svc = map__48860__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48860__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__48866 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__48867 = null;
var count__48868 = (0);
var i__48869 = (0);
while(true){
if((i__48869 < count__48868)){
var vec__48881 = chunk__48867.cljs$core$IIndexed$_nth$arity$2(null,i__48869);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48902 = seq__48866;
var G__48903 = chunk__48867;
var G__48904 = count__48868;
var G__48905 = (i__48869 + (1));
seq__48866 = G__48902;
chunk__48867 = G__48903;
count__48868 = G__48904;
i__48869 = G__48905;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48866);
if(temp__5720__auto__){
var seq__48866__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48866__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__48866__$1);
var G__48906 = cljs.core.chunk_rest(seq__48866__$1);
var G__48907 = c__5565__auto__;
var G__48908 = cljs.core.count(c__5565__auto__);
var G__48909 = (0);
seq__48866 = G__48906;
chunk__48867 = G__48907;
count__48868 = G__48908;
i__48869 = G__48909;
continue;
} else {
var vec__48886 = cljs.core.first(seq__48866__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48886,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48886,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48910 = cljs.core.next(seq__48866__$1);
var G__48911 = null;
var G__48912 = (0);
var G__48913 = (0);
seq__48866 = G__48910;
chunk__48867 = G__48911;
count__48868 = G__48912;
i__48869 = G__48913;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__48862_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__48862_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__48863_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__48863_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__48864_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__48864_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__48865_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__48865_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__48894){
var map__48895 = p__48894;
var map__48895__$1 = cljs.core.__destructure_map(map__48895);
var svc = map__48895__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48895__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48895__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
