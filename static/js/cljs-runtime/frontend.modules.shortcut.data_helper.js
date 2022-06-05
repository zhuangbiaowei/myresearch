goog.provide('frontend.modules.shortcut.data_helper');
frontend.modules.shortcut.data_helper.get_bindings = (function frontend$modules$shortcut$data_helper$get_bindings(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52485){
var vec__52486 = p__52485;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52486,(0),null);
var map__52489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52486,(1),null);
var map__52489__$1 = cljs.core.__destructure_map(map__52489);
var binding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52489__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,binding]);
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.config.config)))));
});
frontend.modules.shortcut.data_helper.mod_key = (function frontend$modules$shortcut$data_helper$mod_key(shortcut){
return clojure.string.replace(shortcut,/mod/i,(cljs.core.truth_(frontend.util.mac_QMARK_)?"meta":"ctrl"));
});
frontend.modules.shortcut.data_helper.shortcut_binding = (function frontend$modules$shortcut$data_helper$shortcut_binding(id){
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.shortcuts(),id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.get_bindings(),id));
if((shortcut == null)){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.data-helper",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","binding-not-found","shortcut/binding-not-found",-1239068733),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"line","line",212345235),33], null)),null);
} else {
if(shortcut === false){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.modules.shortcut.data-helper",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shortcut","disabled","shortcut/disabled",-1351895776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"line","line",212345235),37], null)),null);

return false;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.mod_key,((typeof shortcut === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shortcut], null):shortcut));

}
}
});
frontend.modules.shortcut.data_helper.normalize_user_keyname = (function frontend$modules$shortcut$data_helper$normalize_user_keyname(k){
var G__52498 = k;
var G__52498__$1 = (((G__52498 == null))?null:frontend.util.safe_lower_case(G__52498));
var G__52498__$2 = (((G__52498__$1 == null))?null:clojure.string.replace(G__52498__$1,/;+/,"semicolon"));
var G__52498__$3 = (((G__52498__$2 == null))?null:clojure.string.replace(G__52498__$2,/=+/,"equals"));
var G__52498__$4 = (((G__52498__$3 == null))?null:clojure.string.replace(G__52498__$3,/~+/,"dash"));
var G__52498__$5 = (((G__52498__$4 == null))?null:clojure.string.replace(G__52498__$4,"[","open-square-bracket"));
var G__52498__$6 = (((G__52498__$5 == null))?null:clojure.string.replace(G__52498__$5,"]","close-square-bracket"));
if((G__52498__$6 == null)){
return null;
} else {
return clojure.string.replace(G__52498__$6,"'","single-quote");
}
});
frontend.modules.shortcut.data_helper.binding_by_category = (function frontend$modules$shortcut$data_helper$binding_by_category(name){
var dict = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52571){
var vec__52572 = p__52571;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52572,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52572,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),frontend.modules.shortcut.data_helper.shortcut_binding(k)], null)]);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.config.config)))));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(dict) : k.call(null,dict))], null);
}),(frontend.modules.shortcut.config.category.cljs$core$IFn$_invoke$arity$1 ? frontend.modules.shortcut.config.category.cljs$core$IFn$_invoke$arity$1(name) : frontend.modules.shortcut.config.category.call(null,name)));
});
frontend.modules.shortcut.data_helper.shortcut_map = (function frontend$modules$shortcut$data_helper$shortcut_map(var_args){
var G__52576 = arguments.length;
switch (G__52576) {
case 1:
return frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$1 = (function (handler_id){
return frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2(handler_id,null);
}));

(frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,state){
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.config.config),handler_id);
var handler_m = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52577){
var vec__52579 = p__52577;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52579,(0),null);
var map__52582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52579,(1),null);
var map__52582__$1 = cljs.core.__destructure_map(map__52582);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52582__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,fn]);
}),raw));
var before = new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(raw));
var G__52583 = handler_m;
var G__52583__$1 = (cljs.core.truth_(state)?cljs.core.reduce_kv((function (r,k,handle_fn){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handle_fn,state));
}),cljs.core.PersistentArrayMap.EMPTY,G__52583):G__52583);
if(cljs.core.truth_(before)){
return cljs.core.reduce_kv((function (r,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,(before.cljs$core$IFn$_invoke$arity$1 ? before.cljs$core$IFn$_invoke$arity$1(v) : before.call(null,v)));
}),cljs.core.PersistentArrayMap.EMPTY,G__52583__$1);
} else {
return G__52583__$1;
}
}));

(frontend.modules.shortcut.data_helper.shortcut_map.cljs$lang$maxFixedArity = 2);

frontend.modules.shortcut.data_helper.decorate_namespace = (function frontend$modules$shortcut$data_helper$decorate_namespace(k){
var n = cljs.core.name(k);
var ns = cljs.core.namespace(k);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(["command.",ns].join(''),n);
});
frontend.modules.shortcut.data_helper.decorate_binding = (function frontend$modules$shortcut$data_helper$decorate_binding(binding){
return clojure.string.lower_case(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(((typeof binding === 'string')?binding:clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",binding)),"mod",(cljs.core.truth_(frontend.util.mac_QMARK_)?"cmd":"ctrl")),"alt",(cljs.core.truth_(frontend.util.mac_QMARK_)?"opt":"alt")),"shift+/","?"),"left","\u2190"),"right","\u2192"),"open-square-bracket","["),"close-square-bracket","]"));
});
frontend.modules.shortcut.data_helper.gen_shortcut_seq = (function frontend$modules$shortcut$data_helper$gen_shortcut_seq(id){
var bindings = frontend.modules.shortcut.data_helper.shortcut_binding(id);
if(bindings === false){
return cljs.core.PersistentVector.EMPTY;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(bindings),/ |\+/);
}
});
frontend.modules.shortcut.data_helper.binding_for_display = (function frontend$modules$shortcut$data_helper$binding_for_display(k,binding){
var tmp = ((binding === false)?(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","kill-line-after","editor/kill-line-after",-1948172258));
} else {
return and__5041__auto__;
}
})())?"system default: ctrl+k":(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","beginning-of-block","editor/beginning-of-block",-1731001628));
} else {
return and__5041__auto__;
}
})())?"system default: ctrl+a":(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","end-of-block","editor/end-of-block",87939440));
} else {
return and__5041__auto__;
}
})())?"system default: ctrl+e":(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("editor","backward-kill-word","editor/backward-kill-word",2024635319));
} else {
return and__5041__auto__;
}
})())?"system default: opt+delete":"disabled"
)))):((typeof binding === 'string')?frontend.modules.shortcut.data_helper.decorate_binding(binding):clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.decorate_binding,binding))
));
return clojure.string.replace(tmp,"meta","cmd");
});
frontend.modules.shortcut.data_helper.binding_for_storage = (function frontend$modules$shortcut$data_helper$binding_for_storage(binding){
return clojure.string.replace(binding,"cmd","meta");
});
frontend.modules.shortcut.data_helper.remove_shortcut = (function frontend$modules$shortcut$data_helper$remove_shortcut(k){
var repo = frontend.state.get_current_repo();
var path = frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$0();
var temp__5720__auto__ = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file.call(null,path));
if(cljs.core.truth_(temp__5720__auto__)){
var content = temp__5720__auto__;
var result = frontend.handler.common.parse_config(content);
var new_result = borkdude.rewrite_edn.update(result,new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),(function (p1__52600_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(borkdude.rewrite_edn.sexpr(p1__52600_SHARP_),k);
}));
var new_content = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_result);
frontend.handler.common.reset_config_BANG_(repo,new_content);

return frontend.handler.file.set_file_content_BANG_(repo,path,new_content);
} else {
return null;
}
});
/**
 * Given shortcut key, return handler group
 *   eg: :editor/new-line -> :shortcut.handler/block-editing-only
 */
frontend.modules.shortcut.data_helper.get_group = (function frontend$modules$shortcut$data_helper$get_group(k){
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__52606){
var vec__52607 = p__52606;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52607,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52607,(1),null);
return cljs.core.contains_QMARK_(v,k);
}),cljs.core.deref(frontend.modules.shortcut.config.config))));
});
frontend.modules.shortcut.data_helper.potential_conflict_QMARK_ = (function frontend$modules$shortcut$data_helper$potential_conflict_QMARK_(k){
if(cljs.core.not(frontend.modules.shortcut.data_helper.shortcut_binding(k))){
return false;
} else {
var handler_id = frontend.modules.shortcut.data_helper.get_group(k);
var shortcut_m = frontend.modules.shortcut.data_helper.shortcut_map.cljs$core$IFn$_invoke$arity$1(handler_id);
var parse_shortcut = (function (p1__52610_SHARP_){
try{return goog.ui.KeyboardShortcutHandler.parseStringShortcut(p1__52610_SHARP_);
}catch (e52611){if((e52611 instanceof Error)){
var e = e52611;
return console.error("[shortcut/parse-error]",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52610_SHARP_)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join(''));
} else {
throw e52611;

}
}});
var bindings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_shortcut,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.mod_key,frontend.modules.shortcut.data_helper.shortcut_binding(k))));
var rest_bindings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_shortcut,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.mod_key,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.data_helper.shortcut_binding,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,shortcut_m))))], 0)))));
return (!((cljs.core.some((function (b){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([b]),rest_bindings);
}),bindings) == null)));
}
});
frontend.modules.shortcut.data_helper.shortcut_data_by_id = (function frontend$modules$shortcut$data_helper$shortcut_data_by_id(id){
var binding = frontend.modules.shortcut.data_helper.shortcut_binding(id);
var data = (function (){var G__52612 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.config.config)));
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__52612) : id.call(null,G__52612));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"binding","binding",539932593),frontend.modules.shortcut.data_helper.binding_for_display(id,binding));
});
frontend.modules.shortcut.data_helper.shortcuts__GT_commands = (function frontend$modules$shortcut$data_helper$shortcuts__GT_commands(handler_id){
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.config.config),handler_id);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52613){
var vec__52614 = p__52613;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52614,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52614,(1),null);
return clojure.set.rename_keys(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.shortcut.data_helper.shortcut_data_by_id(id),new cljs.core.Keyword(null,"id","id",-1388402092),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),handler_id], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"action","action",-811238024)], null));
}),m);
});

//# sourceMappingURL=frontend.modules.shortcut.data_helper.js.map
