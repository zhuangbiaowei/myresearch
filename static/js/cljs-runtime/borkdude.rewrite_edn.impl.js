goog.provide('borkdude.rewrite_edn.impl');
borkdude.rewrite_edn.impl.maybe_right = (function borkdude$rewrite_edn$impl$maybe_right(zloc){
if(rewrite_cljc.zip.rightmost_QMARK_(zloc)){
return zloc;
} else {
return rewrite_cljc.zip.right(zloc);
}
});
borkdude.rewrite_edn.impl.skip_right = (function borkdude$rewrite_edn$impl$skip_right(zloc){
return rewrite_cljc.zip.skip(rewrite_cljc.zip.right,(function (zloc__$1){
return (((!(rewrite_cljc.zip.rightmost_QMARK_(zloc__$1)))) && (((rewrite_cljc.node.whitespace_or_comment_QMARK_(rewrite_cljc.zip.node(zloc__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uneval","uneval",1932037707),rewrite_cljc.zip.tag(zloc__$1))))));
}),zloc);
});
borkdude.rewrite_edn.impl.indent = (function borkdude$rewrite_edn$impl$indent(zloc,key_count,first_key_loc){
var current_loc = cljs.core.meta(rewrite_cljc.zip.node(zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),key_count)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(first_key_loc),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(current_loc))))){
var zloc__$1 = rewrite_cljc.zip.insert_newline_right.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.zip.insert_space_right.cljs$core$IFn$_invoke$arity$2(zloc,((new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(first_key_loc) - (1)) - (1))));
return zloc__$1;
} else {
return zloc;
}
});
borkdude.rewrite_edn.impl.assoc = (function borkdude$rewrite_edn$impl$assoc(forms,k,v){
var zloc = rewrite_cljc.zip.edn.cljs$core$IFn$_invoke$arity$1(forms);
var zloc__$1 = rewrite_cljc.zip.skip(rewrite_cljc.zip.right,(function (zloc__$1){
var t = rewrite_cljc.zip.tag(zloc__$1);
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),t)));
}),zloc);
var node = rewrite_cljc.zip.node(zloc__$1);
var nil_QMARK_ = (((new cljs.core.Keyword(null,"token","token",-1211463215) === rewrite_cljc.node.tag(node))) && ((rewrite_cljc.node.sexpr(node) == null)));
var zloc__$2 = ((nil_QMARK_)?rewrite_cljc.zip.replace(zloc__$1,rewrite_cljc.node.coerce(cljs.core.PersistentArrayMap.EMPTY)):zloc__$1);
var empty_QMARK_ = ((nil_QMARK_) || ((cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(rewrite_cljc.zip.node(zloc__$2))) === (0))));
if(empty_QMARK_){
return rewrite_cljc.zip.root(rewrite_cljc.zip.append_child(rewrite_cljc.zip.append_child(zloc__$2,rewrite_cljc.node.coerce(k)),rewrite_cljc.node.coerce(v)));
} else {
var zloc__$3 = rewrite_cljc.zip.down(zloc__$2);
var zloc__$4 = borkdude.rewrite_edn.impl.skip_right(zloc__$3);
var first_key_loc = (function (){var temp__5720__auto__ = rewrite_cljc.zip.node(zloc__$4);
if(cljs.core.truth_(temp__5720__auto__)){
var first_key = temp__5720__auto__;
return cljs.core.meta(first_key);
} else {
return null;
}
})();
var key_count = (0);
var zloc__$5 = zloc__$4;
while(true){
if(rewrite_cljc.zip.rightmost_QMARK_(zloc__$5)){
return rewrite_cljc.zip.root(rewrite_cljc.zip.insert_right(rewrite_cljc.zip.right(borkdude.rewrite_edn.impl.indent(rewrite_cljc.zip.insert_right(zloc__$5,rewrite_cljc.node.coerce(k)),key_count,first_key_loc)),rewrite_cljc.node.coerce(v)));
} else {
var current_k = rewrite_cljc.zip.sexpr(zloc__$5);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_k,k)){
var zloc__$6 = borkdude.rewrite_edn.impl.skip_right(rewrite_cljc.zip.right(zloc__$5));
var zloc__$7 = rewrite_cljc.zip.replace(zloc__$6,rewrite_cljc.node.coerce(v));
return rewrite_cljc.zip.root(zloc__$7);
} else {
var G__80977 = (key_count + (1));
var G__80978 = borkdude.rewrite_edn.impl.skip_right(rewrite_cljc.zip.right(borkdude.rewrite_edn.impl.skip_right(zloc__$5)));
key_count = G__80977;
zloc__$5 = G__80978;
continue;
}
}
break;
}
}
});
borkdude.rewrite_edn.impl.update = (function borkdude$rewrite_edn$impl$update(forms,k,f){
var zloc = rewrite_cljc.zip.edn.cljs$core$IFn$_invoke$arity$1(forms);
var zloc__$1 = rewrite_cljc.zip.skip(rewrite_cljc.zip.right,(function (zloc__$1){
var t = rewrite_cljc.zip.tag(zloc__$1);
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),t)));
}),zloc);
var node = rewrite_cljc.zip.node(zloc__$1);
var nil_QMARK_ = (((new cljs.core.Keyword(null,"token","token",-1211463215) === rewrite_cljc.node.tag(node))) && ((rewrite_cljc.node.sexpr(node) == null)));
var zloc__$2 = ((nil_QMARK_)?rewrite_cljc.zip.replace(zloc__$1,rewrite_cljc.node.coerce(cljs.core.PersistentArrayMap.EMPTY)):zloc__$1);
var empty_QMARK_ = ((nil_QMARK_) || ((cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(rewrite_cljc.zip.node(zloc__$2))) === (0))));
if(empty_QMARK_){
var G__80952 = rewrite_cljc.zip.root(rewrite_cljc.zip.append_child(rewrite_cljc.zip.append_child(zloc__$2,rewrite_cljc.node.coerce(k)),rewrite_cljc.node.coerce(null)));
var G__80953 = k;
var G__80954 = f;
return (borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$3 ? borkdude.rewrite_edn.impl.update.cljs$core$IFn$_invoke$arity$3(G__80952,G__80953,G__80954) : borkdude.rewrite_edn.impl.update.call(null,G__80952,G__80953,G__80954));
} else {
var zloc__$3 = rewrite_cljc.zip.down(zloc__$2);
var zloc__$4 = borkdude.rewrite_edn.impl.skip_right(zloc__$3);
var zloc__$5 = zloc__$4;
while(true){
if(rewrite_cljc.zip.rightmost_QMARK_(zloc__$5)){
return rewrite_cljc.zip.root(rewrite_cljc.zip.insert_right(rewrite_cljc.zip.right(rewrite_cljc.zip.insert_right(zloc__$5,rewrite_cljc.node.coerce(k))),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null))));
} else {
var current_k = rewrite_cljc.zip.sexpr(zloc__$5);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_k,k)){
var zloc__$6 = borkdude.rewrite_edn.impl.skip_right(rewrite_cljc.zip.right(zloc__$5));
var zloc__$7 = rewrite_cljc.zip.replace(zloc__$6,rewrite_cljc.node.coerce((function (){var G__80958 = rewrite_cljc.zip.node(zloc__$6);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80958) : f.call(null,G__80958));
})()));
return rewrite_cljc.zip.root(zloc__$7);
} else {
var G__80979 = borkdude.rewrite_edn.impl.skip_right(rewrite_cljc.zip.right(borkdude.rewrite_edn.impl.skip_right(zloc__$5)));
zloc__$5 = G__80979;
continue;
}
}
break;
}
}
});
borkdude.rewrite_edn.impl.update_in = (function borkdude$rewrite_edn$impl$update_in(forms,keys,f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(keys))){
return borkdude.rewrite_edn.impl.update(forms,cljs.core.first(keys),f);
} else {
return borkdude.rewrite_edn.impl.update(forms,cljs.core.first(keys),(function (p1__80959_SHARP_){
var G__80960 = p1__80959_SHARP_;
var G__80961 = cljs.core.rest(keys);
var G__80962 = f;
return (borkdude.rewrite_edn.impl.update_in.cljs$core$IFn$_invoke$arity$3 ? borkdude.rewrite_edn.impl.update_in.cljs$core$IFn$_invoke$arity$3(G__80960,G__80961,G__80962) : borkdude.rewrite_edn.impl.update_in.call(null,G__80960,G__80961,G__80962));
}));
}
});
borkdude.rewrite_edn.impl.assoc_in = (function borkdude$rewrite_edn$impl$assoc_in(forms,keys,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(keys))){
return borkdude.rewrite_edn.impl.assoc(forms,cljs.core.first(keys),v);
} else {
return borkdude.rewrite_edn.impl.update(forms,cljs.core.first(keys),(function (p1__80963_SHARP_){
var G__80967 = p1__80963_SHARP_;
var G__80968 = cljs.core.rest(keys);
var G__80969 = v;
return (borkdude.rewrite_edn.impl.assoc_in.cljs$core$IFn$_invoke$arity$3 ? borkdude.rewrite_edn.impl.assoc_in.cljs$core$IFn$_invoke$arity$3(G__80967,G__80968,G__80969) : borkdude.rewrite_edn.impl.assoc_in.call(null,G__80967,G__80968,G__80969));
}));
}
});
borkdude.rewrite_edn.impl.map_keys = (function borkdude$rewrite_edn$impl$map_keys(f,forms){
var zloc = rewrite_cljc.zip.edn.cljs$core$IFn$_invoke$arity$1(forms);
var zloc__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),rewrite_cljc.zip.tag(zloc)))?zloc:rewrite_cljc.zip.skip(rewrite_cljc.zip.right,(function (zloc__$1){
return ((cljs.core.not(rewrite_cljc.zip.rightmost(zloc__$1))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),rewrite_cljc.zip.tag(zloc__$1))));
}),zloc));
var zloc__$2 = rewrite_cljc.zip.down(zloc__$1);
var zloc__$3 = borkdude.rewrite_edn.impl.skip_right(zloc__$2);
var zloc__$4 = zloc__$3;
while(true){
if(rewrite_cljc.zip.rightmost_QMARK_(zloc__$4)){
return rewrite_cljc.zip.root(zloc__$4);
} else {
var zloc__$5 = (function (){var new_key = rewrite_cljc.node.coerce((function (){var G__80974 = rewrite_cljc.zip.sexpr(zloc__$4);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80974) : f.call(null,G__80974));
})());
return rewrite_cljc.zip.right(rewrite_cljc.zip.replace(zloc__$4,new_key));
})();
var G__80982 = borkdude.rewrite_edn.impl.skip_right(borkdude.rewrite_edn.impl.maybe_right(borkdude.rewrite_edn.impl.skip_right(zloc__$5)));
zloc__$4 = G__80982;
continue;
}
break;
}
});

//# sourceMappingURL=borkdude.rewrite_edn.impl.js.map
