goog.provide('frontend.modules.shortcut.core');
frontend.modules.shortcut.core._STAR_installed = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.modules.shortcut.core._STAR_inited_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.modules.shortcut.core._STAR_pending = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
frontend.modules.shortcut.core.global_keys = [goog.events.KeyCodes.TAB,goog.events.KeyCodes.ENTER,goog.events.KeyCodes.BACKSPACE,goog.events.KeyCodes.DELETE,goog.events.KeyCodes.UP,goog.events.KeyCodes.LEFT,goog.events.KeyCodes.DOWN,goog.events.KeyCodes.RIGHT];
frontend.modules.shortcut.core.key_names = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.KeyNames);
frontend.modules.shortcut.core.consume_pending_shortcuts_BANG_ = (function frontend$modules$shortcut$core$consume_pending_shortcuts_BANG_(){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.deref(frontend.modules.shortcut.core._STAR_inited_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending));
} else {
return and__5041__auto__;
}
})())){
var seq__52754_52940 = cljs.core.seq(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending));
var chunk__52755_52941 = null;
var count__52756_52942 = (0);
var i__52757_52943 = (0);
while(true){
if((i__52757_52943 < count__52756_52942)){
var vec__52770_52944 = chunk__52755_52941.cljs$core$IIndexed$_nth$arity$2(null,i__52757_52943);
var handler_id_52945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52770_52944,(0),null);
var id_52946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52770_52944,(1),null);
var shortcut_52947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52770_52944,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_52945,id_52946,shortcut_52947) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_52945,id_52946,shortcut_52947));


var G__52948 = seq__52754_52940;
var G__52949 = chunk__52755_52941;
var G__52950 = count__52756_52942;
var G__52951 = (i__52757_52943 + (1));
seq__52754_52940 = G__52948;
chunk__52755_52941 = G__52949;
count__52756_52942 = G__52950;
i__52757_52943 = G__52951;
continue;
} else {
var temp__5720__auto___52952 = cljs.core.seq(seq__52754_52940);
if(temp__5720__auto___52952){
var seq__52754_52953__$1 = temp__5720__auto___52952;
if(cljs.core.chunked_seq_QMARK_(seq__52754_52953__$1)){
var c__5565__auto___52954 = cljs.core.chunk_first(seq__52754_52953__$1);
var G__52956 = cljs.core.chunk_rest(seq__52754_52953__$1);
var G__52957 = c__5565__auto___52954;
var G__52958 = cljs.core.count(c__5565__auto___52954);
var G__52959 = (0);
seq__52754_52940 = G__52956;
chunk__52755_52941 = G__52957;
count__52756_52942 = G__52958;
i__52757_52943 = G__52959;
continue;
} else {
var vec__52773_52961 = cljs.core.first(seq__52754_52953__$1);
var handler_id_52962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52773_52961,(0),null);
var id_52963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52773_52961,(1),null);
var shortcut_52964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52773_52961,(2),null);
(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id_52962,id_52963,shortcut_52964) : frontend.modules.shortcut.core.register_shortcut_BANG_.call(null,handler_id_52962,id_52963,shortcut_52964));


var G__52967 = cljs.core.next(seq__52754_52953__$1);
var G__52968 = null;
var G__52969 = (0);
var G__52970 = (0);
seq__52754_52940 = G__52967;
chunk__52755_52941 = G__52968;
count__52756_52942 = G__52969;
i__52757_52943 = G__52970;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(frontend.modules.shortcut.core._STAR_pending,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
frontend.modules.shortcut.core.get_handler_by_id = (function frontend$modules$shortcut$core$get_handler_by_id(handler_id){
return new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52776_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__52776_SHARP_),handler_id);
}),cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)))));
});
/**
 * Register a shortcut, notice the id need to be a namespaced keyword to avoid
 *   conflicts.
 *   Example:
 *   (register-shortcut! :shortcut.handler/misc :foo/bar {:binding "mod+shift+8"
 *   :fn (fn [_state _event]
 *   (js/alert "test shortcut"))})
 */
frontend.modules.shortcut.core.register_shortcut_BANG_ = (function frontend$modules$shortcut$core$register_shortcut_BANG_(var_args){
var G__52778 = arguments.length;
switch (G__52778) {
case 2:
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,id){
return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,id,null);
}));

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,id,shortcut_map){
if((((handler_id instanceof cljs.core.Keyword)) && (cljs.core.not(cljs.core.deref(frontend.modules.shortcut.core._STAR_inited_QMARK_))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_pending,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler_id,id,shortcut_map], null));
} else {
var temp__5720__auto__ = ((((typeof handler_id === 'string') || ((handler_id instanceof cljs.core.Keyword))))?(function (){var handler_id__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(handler_id);
return frontend.modules.shortcut.core.get_handler_by_id(handler_id__$1);
})():handler_id);
if(cljs.core.truth_(temp__5720__auto__)){
var handler = temp__5720__auto__;
if(cljs.core.truth_(shortcut_map)){
frontend.modules.shortcut.config.add_shortcut_BANG_(handler_id,id,shortcut_map);
} else {
}

if(frontend.modules.shortcut.data_helper.shortcut_binding(id) === false){
return null;
} else {
var seq__52792 = cljs.core.seq(frontend.modules.shortcut.data_helper.shortcut_binding(id));
var chunk__52793 = null;
var count__52794 = (0);
var i__52795 = (0);
while(true){
if((i__52795 < count__52794)){
var k = chunk__52793.cljs$core$IIndexed$_nth$arity$2(null,i__52795);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e52804){if((e52804 instanceof Object)){
var e_52972 = e52804;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_52972], null),new cljs.core.Keyword(null,"line","line",212345235),70], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_52972.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e52804;

}
}

var G__52974 = seq__52792;
var G__52975 = chunk__52793;
var G__52976 = count__52794;
var G__52977 = (i__52795 + (1));
seq__52792 = G__52974;
chunk__52793 = G__52975;
count__52794 = G__52976;
i__52795 = G__52977;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__52792);
if(temp__5720__auto____$1){
var seq__52792__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52792__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__52792__$1);
var G__52980 = cljs.core.chunk_rest(seq__52792__$1);
var G__52981 = c__5565__auto__;
var G__52982 = cljs.core.count(c__5565__auto__);
var G__52983 = (0);
seq__52792 = G__52980;
chunk__52793 = G__52981;
count__52794 = G__52982;
i__52795 = G__52983;
continue;
} else {
var k = cljs.core.first(seq__52792__$1);
try{lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k], null),new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);

handler.registerShortcut(frontend.util.keyname(id),frontend.modules.shortcut.data_helper.normalize_user_keyname(k));
}catch (e52812){if((e52812 instanceof Object)){
var e_52984 = e52812;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"binding","binding",539932593),k,new cljs.core.Keyword(null,"error","error",-978969032),e_52984], null),new cljs.core.Keyword(null,"line","line",212345235),70], null)),null);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,e_52984.message], null)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
throw e52812;

}
}

var G__52985 = cljs.core.next(seq__52792__$1);
var G__52986 = null;
var G__52987 = (0);
var G__52988 = (0);
seq__52792 = G__52985;
chunk__52793 = G__52986;
count__52794 = G__52987;
i__52795 = G__52988;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
}
}));

(frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Unregister a shortcut.
 *   Example:
 *   (unregister-shortcut! :shortcut.handler/misc :foo/bar)
 */
frontend.modules.shortcut.core.unregister_shortcut_BANG_ = (function frontend$modules$shortcut$core$unregister_shortcut_BANG_(handler_id,shortcut_id){
var temp__5720__auto__ = frontend.modules.shortcut.core.get_handler_by_id(handler_id);
if(cljs.core.truth_(temp__5720__auto__)){
var handler = temp__5720__auto__;
var temp__5720__auto___52991__$1 = frontend.modules.shortcut.data_helper.shortcut_binding(shortcut_id);
if(cljs.core.truth_(temp__5720__auto___52991__$1)){
var ks_52993 = temp__5720__auto___52991__$1;
var seq__52844_52994 = cljs.core.seq(ks_52993);
var chunk__52845_52995 = null;
var count__52846_52996 = (0);
var i__52847_52997 = (0);
while(true){
if((i__52847_52997 < count__52846_52996)){
var k_52998 = chunk__52845_52995.cljs$core$IIndexed$_nth$arity$2(null,i__52847_52997);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_52998));


var G__52999 = seq__52844_52994;
var G__53000 = chunk__52845_52995;
var G__53001 = count__52846_52996;
var G__53002 = (i__52847_52997 + (1));
seq__52844_52994 = G__52999;
chunk__52845_52995 = G__53000;
count__52846_52996 = G__53001;
i__52847_52997 = G__53002;
continue;
} else {
var temp__5720__auto___53003__$2 = cljs.core.seq(seq__52844_52994);
if(temp__5720__auto___53003__$2){
var seq__52844_53004__$1 = temp__5720__auto___53003__$2;
if(cljs.core.chunked_seq_QMARK_(seq__52844_53004__$1)){
var c__5565__auto___53005 = cljs.core.chunk_first(seq__52844_53004__$1);
var G__53007 = cljs.core.chunk_rest(seq__52844_53004__$1);
var G__53008 = c__5565__auto___53005;
var G__53009 = cljs.core.count(c__5565__auto___53005);
var G__53010 = (0);
seq__52844_52994 = G__53007;
chunk__52845_52995 = G__53008;
count__52846_52996 = G__53009;
i__52847_52997 = G__53010;
continue;
} else {
var k_53011 = cljs.core.first(seq__52844_53004__$1);
handler.unregisterShortcut(frontend.modules.shortcut.data_helper.normalize_user_keyname(k_53011));


var G__53012 = cljs.core.next(seq__52844_53004__$1);
var G__53013 = null;
var G__53014 = (0);
var G__53015 = (0);
seq__52844_52994 = G__53012;
chunk__52845_52995 = G__53013;
count__52846_52996 = G__53014;
i__52847_52997 = G__53015;
continue;
}
} else {
}
}
break;
}
} else {
}

return frontend.modules.shortcut.config.remove_shortcut_BANG_(handler_id,shortcut_id);
} else {
return null;
}
});
frontend.modules.shortcut.core.uninstall_shortcut_BANG_ = (function frontend$modules$shortcut$core$uninstall_shortcut_BANG_(install_id){
var temp__5720__auto__ = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed),install_id));
if(cljs.core.truth_(temp__5720__auto__)){
var handler = temp__5720__auto__;
handler.dispose();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_installed,cljs.core.dissoc,install_id);
} else {
return null;
}
});
frontend.modules.shortcut.core.install_shortcut_BANG_ = (function frontend$modules$shortcut$core$install_shortcut_BANG_(handler_id,p__52848){
var map__52849 = p__52848;
var map__52849__$1 = cljs.core.__destructure_map(map__52849);
var set_global_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52849__$1,new cljs.core.Keyword(null,"set-global-keys?","set-global-keys?",-497167260),true);
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52849__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),false);
var skip_installed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52849__$1,new cljs.core.Keyword(null,"skip-installed?","skip-installed?",2027430119),false);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52849__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var shortcut_map = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var handler = (new goog.ui.KeyboardShortcutHandler(window));
if(cljs.core.truth_(set_global_keys_QMARK_)){
handler.setGlobalKeys(frontend.modules.shortcut.core.global_keys);
} else {
}

handler.setAlwaysPreventDefault(prevent_default_QMARK_);

var seq__52850_53020 = cljs.core.seq(shortcut_map);
var chunk__52851_53021 = null;
var count__52852_53022 = (0);
var i__52853_53023 = (0);
while(true){
if((i__52853_53023 < count__52852_53022)){
var vec__52860_53025 = chunk__52851_53021.cljs$core$IIndexed$_nth$arity$2(null,i__52853_53023);
var id_53026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860_53025,(0),null);
var __53027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860_53025,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_53026);


var G__53029 = seq__52850_53020;
var G__53030 = chunk__52851_53021;
var G__53031 = count__52852_53022;
var G__53032 = (i__52853_53023 + (1));
seq__52850_53020 = G__53029;
chunk__52851_53021 = G__53030;
count__52852_53022 = G__53031;
i__52853_53023 = G__53032;
continue;
} else {
var temp__5720__auto___53033 = cljs.core.seq(seq__52850_53020);
if(temp__5720__auto___53033){
var seq__52850_53034__$1 = temp__5720__auto___53033;
if(cljs.core.chunked_seq_QMARK_(seq__52850_53034__$1)){
var c__5565__auto___53035 = cljs.core.chunk_first(seq__52850_53034__$1);
var G__53036 = cljs.core.chunk_rest(seq__52850_53034__$1);
var G__53037 = c__5565__auto___53035;
var G__53038 = cljs.core.count(c__5565__auto___53035);
var G__53039 = (0);
seq__52850_53020 = G__53036;
chunk__52851_53021 = G__53037;
count__52852_53022 = G__53038;
i__52853_53023 = G__53039;
continue;
} else {
var vec__52863_53040 = cljs.core.first(seq__52850_53034__$1);
var id_53041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52863_53040,(0),null);
var __53042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52863_53040,(1),null);
frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$2(handler,id_53041);


var G__53043 = cljs.core.next(seq__52850_53034__$1);
var G__53044 = null;
var G__53045 = (0);
var G__53046 = (0);
seq__52850_53020 = G__53043;
chunk__52851_53021 = G__53044;
count__52852_53022 = G__53045;
i__52853_53023 = G__53046;
continue;
}
} else {
}
}
break;
}

var f = (function (e){
var shortcut_map__$1 = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,state);
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shortcut_map__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.identifier));
if(cljs.core.truth_(dispatch_fn)){
return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(e) : dispatch_fn.call(null,e));
} else {
return null;
}
});
var install_id = cljs.core.random_uuid();
var data = cljs.core.PersistentArrayMap.createAsIfByAssoc([install_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),handler_id,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614),f,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null)]);
handler.listen(goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,f);

if(cljs.core.truth_(skip_installed_QMARK_)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.modules.shortcut.core._STAR_installed,cljs.core.merge,data);
}

return install_id;
});
frontend.modules.shortcut.core.install_shortcuts_BANG_ = (function frontend$modules$shortcut$core$install_shortcuts_BANG_(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52866_SHARP_){
return frontend.modules.shortcut.core.install_shortcut_BANG_(p1__52866_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741),new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985),new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682)], null)));
});
frontend.modules.shortcut.core.mixin = (function frontend$modules$shortcut$core$mixin(handler_id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var install_id = frontend.modules.shortcut.core.install_shortcut_BANG_(handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293),install_id);
}),new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),(function (old_state,new_state){
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(old_state));

var temp__5720__auto__ = frontend.modules.shortcut.core.install_shortcut_BANG_(handler_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new_state], null));
if(cljs.core.truth_(temp__5720__auto__)){
var install_id = temp__5720__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293),install_id);
} else {
return null;
}
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var temp__5720__auto___53050 = new cljs.core.Keyword("frontend.modules.shortcut.core","install-id","frontend.modules.shortcut.core/install-id",-1116337293).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___53050)){
var install_id_53051 = temp__5720__auto___53050;
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(install_id_53051);
} else {
}

return state;
})], null);
});
frontend.modules.shortcut.core.unlisten_all = (function frontend$modules$shortcut$core$unlisten_all(){
var seq__52867 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__52869 = null;
var count__52870 = (0);
var i__52871 = (0);
while(true){
if((i__52871 < count__52870)){
var map__52875 = chunk__52869.cljs$core$IIndexed$_nth$arity$2(null,i__52871);
var map__52875__$1 = cljs.core.__destructure_map(map__52875);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52875__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52875__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__53053 = seq__52867;
var G__53054 = chunk__52869;
var G__53055 = count__52870;
var G__53056 = (i__52871 + (1));
seq__52867 = G__53053;
chunk__52869 = G__53054;
count__52870 = G__53055;
i__52871 = G__53056;
continue;
} else {
var G__53057 = seq__52867;
var G__53058 = chunk__52869;
var G__53059 = count__52870;
var G__53060 = (i__52871 + (1));
seq__52867 = G__53057;
chunk__52869 = G__53058;
count__52870 = G__53059;
i__52871 = G__53060;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52867);
if(temp__5720__auto__){
var seq__52867__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52867__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__52867__$1);
var G__53064 = cljs.core.chunk_rest(seq__52867__$1);
var G__53065 = c__5565__auto__;
var G__53066 = cljs.core.count(c__5565__auto__);
var G__53067 = (0);
seq__52867 = G__53064;
chunk__52869 = G__53065;
count__52870 = G__53066;
i__52871 = G__53067;
continue;
} else {
var map__52876 = cljs.core.first(seq__52867__$1);
var map__52876__$1 = cljs.core.__destructure_map(map__52876);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
handler.removeAllListeners();


var G__53068 = cljs.core.next(seq__52867__$1);
var G__53069 = null;
var G__53070 = (0);
var G__53071 = (0);
seq__52867 = G__53068;
chunk__52869 = G__53069;
count__52870 = G__53070;
i__52871 = G__53071;
continue;
} else {
var G__53072 = cljs.core.next(seq__52867__$1);
var G__53073 = null;
var G__53074 = (0);
var G__53075 = (0);
seq__52867 = G__53072;
chunk__52869 = G__53073;
count__52870 = G__53074;
i__52871 = G__53075;
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
frontend.modules.shortcut.core.listen_all = (function frontend$modules$shortcut$core$listen_all(){
var seq__52877 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__52879 = null;
var count__52880 = (0);
var i__52881 = (0);
while(true){
if((i__52881 < count__52880)){
var map__52885 = chunk__52879.cljs$core$IIndexed$_nth$arity$2(null,i__52881);
var map__52885__$1 = cljs.core.__destructure_map(map__52885);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52885__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52885__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52885__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__53079 = seq__52877;
var G__53080 = chunk__52879;
var G__53081 = count__52880;
var G__53082 = (i__52881 + (1));
seq__52877 = G__53079;
chunk__52879 = G__53080;
count__52880 = G__53081;
i__52881 = G__53082;
continue;
} else {
var G__53084 = seq__52877;
var G__53085 = chunk__52879;
var G__53086 = count__52880;
var G__53087 = (i__52881 + (1));
seq__52877 = G__53084;
chunk__52879 = G__53085;
count__52880 = G__53086;
i__52881 = G__53087;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52877);
if(temp__5720__auto__){
var seq__52877__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52877__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__52877__$1);
var G__53088 = cljs.core.chunk_rest(seq__52877__$1);
var G__53089 = c__5565__auto__;
var G__53090 = cljs.core.count(c__5565__auto__);
var G__53091 = (0);
seq__52877 = G__53088;
chunk__52879 = G__53089;
count__52880 = G__53090;
i__52881 = G__53091;
continue;
} else {
var map__52889 = cljs.core.first(seq__52877__$1);
var map__52889__$1 = cljs.core.__destructure_map(map__52889);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52889__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52889__$1,new cljs.core.Keyword(null,"group","group",582596132));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52889__$1,new cljs.core.Keyword(null,"dispatch-fn","dispatch-fn",1253347614));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword("shortcut.handler","misc","shortcut.handler/misc",525554741))){
goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,dispatch_fn);


var G__53094 = cljs.core.next(seq__52877__$1);
var G__53095 = null;
var G__53096 = (0);
var G__53097 = (0);
seq__52877 = G__53094;
chunk__52879 = G__53095;
count__52880 = G__53096;
i__52881 = G__53097;
continue;
} else {
var G__53098 = cljs.core.next(seq__52877__$1);
var G__53099 = null;
var G__53100 = (0);
var G__53101 = (0);
seq__52877 = G__53098;
chunk__52879 = G__53099;
count__52880 = G__53100;
i__52881 = G__53101;
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
frontend.modules.shortcut.core.disable_all_shortcuts = (function frontend$modules$shortcut$core$disable_all_shortcuts(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.modules.shortcut.core.unlisten_all();

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.modules.shortcut.core.listen_all();

return state;
})], null);
});
/**
 * Always use this function to refresh shortcuts
 */
frontend.modules.shortcut.core.refresh_BANG_ = (function frontend$modules$shortcut$core$refresh_BANG_(){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.core",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","refresh","shortcut/refresh",-1755508577),cljs.core.deref(frontend.modules.shortcut.core._STAR_installed),new cljs.core.Keyword(null,"line","line",212345235),181], null)),null);

var seq__52900_53103 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__52901_53104 = null;
var count__52902_53105 = (0);
var i__52903_53106 = (0);
while(true){
if((i__52903_53106 < count__52902_53105)){
var id_53107 = chunk__52901_53104.cljs$core$IIndexed$_nth$arity$2(null,i__52903_53106);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_53107);


var G__53108 = seq__52900_53103;
var G__53109 = chunk__52901_53104;
var G__53110 = count__52902_53105;
var G__53111 = (i__52903_53106 + (1));
seq__52900_53103 = G__53108;
chunk__52901_53104 = G__53109;
count__52902_53105 = G__53110;
i__52903_53106 = G__53111;
continue;
} else {
var temp__5720__auto___53112 = cljs.core.seq(seq__52900_53103);
if(temp__5720__auto___53112){
var seq__52900_53113__$1 = temp__5720__auto___53112;
if(cljs.core.chunked_seq_QMARK_(seq__52900_53113__$1)){
var c__5565__auto___53117 = cljs.core.chunk_first(seq__52900_53113__$1);
var G__53118 = cljs.core.chunk_rest(seq__52900_53113__$1);
var G__53119 = c__5565__auto___53117;
var G__53120 = cljs.core.count(c__5565__auto___53117);
var G__53121 = (0);
seq__52900_53103 = G__53118;
chunk__52901_53104 = G__53119;
count__52902_53105 = G__53120;
i__52903_53106 = G__53121;
continue;
} else {
var id_53122 = cljs.core.first(seq__52900_53113__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_53122);


var G__53124 = cljs.core.next(seq__52900_53113__$1);
var G__53125 = null;
var G__53126 = (0);
var G__53127 = (0);
seq__52900_53103 = G__53124;
chunk__52901_53104 = G__53125;
count__52902_53105 = G__53126;
i__52903_53106 = G__53127;
continue;
}
} else {
}
}
break;
}

frontend.modules.shortcut.core.install_shortcuts_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shortcut-handler-refreshed","shortcut-handler-refreshed",1293579011)], null));
});
frontend.modules.shortcut.core.name_with_meta = (function frontend$modules$shortcut$core$name_with_meta(e){
var ctrl = e.ctrlKey;
var alt = e.altKey;
var meta = e.metaKey;
var shift = e.shiftKey;
var keyname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__52911 = keyname;
var G__52911__$1 = (cljs.core.truth_(ctrl)?["ctrl+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52911)].join(''):G__52911);
var G__52911__$2 = (cljs.core.truth_(alt)?["alt+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52911__$1)].join(''):G__52911__$1);
var G__52911__$3 = (cljs.core.truth_(meta)?["meta+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52911__$2)].join(''):G__52911__$2);
if(cljs.core.truth_(shift)){
return ["shift+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52911__$3)].join('');
} else {
return G__52911__$3;
}
});
frontend.modules.shortcut.core.keyname = (function frontend$modules$shortcut$core$keyname(e){
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.key_names,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.keyCode));
var G__52914 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__52914)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ctrl",G__52914)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("shift",G__52914)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("alt",G__52914)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("esc",G__52914)){
return null;
} else {
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.modules.shortcut.core.name_with_meta(e))].join('');

}
}
}
}
}
});
frontend.modules.shortcut.core.record_BANG_ = (function frontend$modules$shortcut$core$record_BANG_(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var handler = (new goog.events.KeyHandler(document));
var keystroke = new cljs.core.Keyword("rum","local","rum/local",-1497916586).cljs$core$IFn$_invoke$arity$1(state);
var seq__52921_53130 = cljs.core.seq(cljs.core.keys(cljs.core.deref(frontend.modules.shortcut.core._STAR_installed)));
var chunk__52922_53131 = null;
var count__52923_53132 = (0);
var i__52924_53133 = (0);
while(true){
if((i__52924_53133 < count__52923_53132)){
var id_53134 = chunk__52922_53131.cljs$core$IIndexed$_nth$arity$2(null,i__52924_53133);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_53134);


var G__53136 = seq__52921_53130;
var G__53137 = chunk__52922_53131;
var G__53138 = count__52923_53132;
var G__53139 = (i__52924_53133 + (1));
seq__52921_53130 = G__53136;
chunk__52922_53131 = G__53137;
count__52923_53132 = G__53138;
i__52924_53133 = G__53139;
continue;
} else {
var temp__5720__auto___53140 = cljs.core.seq(seq__52921_53130);
if(temp__5720__auto___53140){
var seq__52921_53141__$1 = temp__5720__auto___53140;
if(cljs.core.chunked_seq_QMARK_(seq__52921_53141__$1)){
var c__5565__auto___53142 = cljs.core.chunk_first(seq__52921_53141__$1);
var G__53143 = cljs.core.chunk_rest(seq__52921_53141__$1);
var G__53144 = c__5565__auto___53142;
var G__53145 = cljs.core.count(c__5565__auto___53142);
var G__53146 = (0);
seq__52921_53130 = G__53143;
chunk__52922_53131 = G__53144;
count__52923_53132 = G__53145;
i__52924_53133 = G__53146;
continue;
} else {
var id_53147 = cljs.core.first(seq__52921_53141__$1);
frontend.modules.shortcut.core.uninstall_shortcut_BANG_(id_53147);


var G__53148 = cljs.core.next(seq__52921_53141__$1);
var G__53149 = null;
var G__53150 = (0);
var G__53151 = (0);
seq__52921_53130 = G__53148;
chunk__52922_53131 = G__53149;
count__52923_53132 = G__53150;
i__52924_53133 = G__53151;
continue;
}
} else {
}
}
break;
}

goog.events.listen(handler,"key",(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keystroke,(function (p1__52919_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52919_SHARP_),frontend.modules.shortcut.core.keyname(e)].join('');
}));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698),handler);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (p__52932){
var map__52933 = p__52932;
var map__52933__$1 = cljs.core.__destructure_map(map__52933);
var state = map__52933__$1;
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword("rum","args","rum/args",1315791754));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
var k_53152 = cljs.core.first(args);
var keystroke_53153 = clojure.string.trim(cljs.core.deref(local));
if(cljs.core.empty_QMARK_(keystroke_53153)){
} else {
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentArrayMap.createAsIfByAssoc([k_53152,keystroke_53153])], 0)));
}

var temp__5720__auto___53208 = new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___53208)){
var handler_53209 = temp__5720__auto___53208;
handler_53209.dispose();
} else {
}

setTimeout((function (){
return frontend.modules.shortcut.core.refresh_BANG_();
}),(500));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.modules.shortcut.core","key-record-handler","frontend.modules.shortcut.core/key-record-handler",-401352698));
})], null);
});

//# sourceMappingURL=frontend.modules.shortcut.core.js.map
