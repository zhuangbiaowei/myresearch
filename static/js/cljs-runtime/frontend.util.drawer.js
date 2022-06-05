goog.provide('frontend.util.drawer');
frontend.util.drawer.drawer_start = (function frontend$util$drawer$drawer_start(typ){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(":%s:",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.upper_case(typ)], 0));
});
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.drawer !== 'undefined') && (typeof frontend.util.drawer.drawer_end !== 'undefined')){
} else {
frontend.util.drawer.drawer_end = ":END:";
}
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.drawer !== 'undefined') && (typeof frontend.util.drawer.logbook_start !== 'undefined')){
} else {
frontend.util.drawer.logbook_start = ":LOGBOOK:";
}
frontend.util.drawer.build_drawer_str = (function frontend$util$drawer$build_drawer_str(var_args){
var G__59439 = arguments.length;
switch (G__59439) {
case 1:
return frontend.util.drawer.build_drawer_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.util.drawer.build_drawer_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.util.drawer.build_drawer_str.cljs$core$IFn$_invoke$arity$1 = (function (typ){
return frontend.util.drawer.build_drawer_str.cljs$core$IFn$_invoke$arity$2(typ,null);
}));

(frontend.util.drawer.build_drawer_str.cljs$core$IFn$_invoke$arity$2 = (function (typ,value){
if(cljs.core.truth_(value)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.drawer.drawer_start(typ),value,frontend.util.drawer.drawer_end], null));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.drawer.drawer_start(typ),frontend.util.drawer.drawer_end], null));
}
}));

(frontend.util.drawer.build_drawer_str.cljs$lang$maxFixedArity = 2);

frontend.util.drawer.get_drawer_ast = (function frontend$util$drawer$get_drawer_ast(format,content,typ){
var ast = frontend.format.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var typ_drawer = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return frontend.format.mldoc.typ_drawer_QMARK_(x,typ);
}),ast));
return typ_drawer;
});
frontend.util.drawer.insert_drawer = (function frontend$util$drawer$insert_drawer(format,content,typ,value){
if(typeof content === 'string'){
try{var ast = frontend.format.mldoc.__GT_edn(content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var has_properties_QMARK_ = cljs.core.some((function (x){
return frontend.format.mldoc.properties_QMARK_(x);
}),ast);
var has_typ_drawer_QMARK_ = cljs.core.some((function (x){
return frontend.format.mldoc.typ_drawer_QMARK_(x,typ);
}),ast);
var lines = clojure.string.split_lines(content);
var title = cljs.core.first(lines);
var body = cljs.core.rest(lines);
var scheduled = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59440_SHARP_){
return clojure.string.starts_with_QMARK_(p1__59440_SHARP_,"SCHEDULED");
}),lines);
var deadline = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59441_SHARP_){
return clojure.string.starts_with_QMARK_(p1__59441_SHARP_,"DEADLINE");
}),lines);
var body_without_timestamps = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59442_SHARP_){
return (!(((clojure.string.starts_with_QMARK_(p1__59442_SHARP_,"SCHEDULED")) || (clojure.string.starts_with_QMARK_(p1__59442_SHARP_,"DEADLINE")))));
}),body));
var start_idx = body_without_timestamps.indexOf(frontend.util.drawer.drawer_start(typ));
var end_idx = (function (){var vec__59455 = cljs.core.split_at(start_idx,body_without_timestamps);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59455,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59455,(1),null);
return (cljs.core.count(before) + after.indexOf(frontend.util.drawer.drawer_end));
})();
var result = ((cljs.core.not(has_typ_drawer_QMARK_))?(function (){var drawer = frontend.util.drawer.build_drawer_str.cljs$core$IFn$_invoke$arity$2(typ,value);
if(cljs.core.truth_(has_properties_QMARK_)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),format)){
var prop_start_idx = body_without_timestamps.indexOf(logseq.graph_parser.property.properties_start);
var prop_end_idx = body_without_timestamps.indexOf(logseq.graph_parser.property.properties_end);
var properties = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(body_without_timestamps,prop_start_idx,(prop_end_idx + (1)));
var after = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(body_without_timestamps,(prop_end_idx + (1)));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null),scheduled,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deadline,properties,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawer], null),after], 0)));
} else {
var properties_count = cljs.core.count(cljs.core.second(cljs.core.first(cljs.core.second(ast))));
var properties = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(body_without_timestamps,(0),properties_count);
var after = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(body_without_timestamps,properties_count);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null),scheduled,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deadline,properties,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawer], null),after], 0)));

}
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null),scheduled,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deadline,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawer], null),body_without_timestamps], 0)));
}
})():(cljs.core.truth_((function (){var and__5041__auto__ = has_typ_drawer_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (((start_idx >= (0))) && ((((end_idx > (0))) && ((end_idx > start_idx)))));
} else {
return and__5041__auto__;
}
})())?(function (){var before = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(body_without_timestamps,(0),start_idx);
var middle = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(body_without_timestamps,(start_idx + (1)),end_idx),value);
var after = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(body_without_timestamps,(end_idx + (1)));
var lines__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null),scheduled,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deadline,before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.drawer.drawer_start(typ)], null),middle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.drawer.drawer_end], null),after], 0));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1);
})():content
));
return clojure.string.trimr(result);
}catch (e59449){if((e59449 instanceof Error)){
var e = e59449;
console.error(e);

return content;
} else {
throw e59449;

}
}} else {
return null;
}
});
frontend.util.drawer.contains_logbook_QMARK_ = (function frontend$util$drawer$contains_logbook_QMARK_(content){
var and__5041__auto__ = frontend.util.safe_re_find(cljs.core.re_pattern(["(?i)",frontend.util.drawer.logbook_start].join('')),content);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.safe_re_find(cljs.core.re_pattern(["(?i)",frontend.util.drawer.drawer_end].join('')),content);
} else {
return and__5041__auto__;
}
});
frontend.util.drawer.remove_logbook = (function frontend$util$drawer$remove_logbook(content){
if(cljs.core.truth_(content)){
if(cljs.core.truth_(frontend.util.drawer.contains_logbook_QMARK_(content))){
var lines = clojure.string.split_lines(content);
var vec__59473 = cljs.core.split_with((function (l){
return (!(clojure.string.starts_with_QMARK_(clojure.string.upper_case(clojure.string.triml(l)),":LOGBOOK:")));
}),lines);
var title_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59473,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59473,(1),null);
var body__$1 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (l){
var l_SINGLEQUOTE_ = clojure.string.lower_case(clojure.string.trim(l));
return (((!(clojure.string.starts_with_QMARK_(l_SINGLEQUOTE_,":end:")))) || (clojure.string.blank_QMARK_(l)));
}),body);
var body__$2 = ((((cljs.core.seq(body__$1)) && (clojure.string.starts_with_QMARK_(clojure.string.lower_case(clojure.string.triml(cljs.core.first(body__$1))),":end:"))))?(function (){var line = clojure.string.replace(cljs.core.first(body__$1),/:end:\s?/i,"");
if(clojure.string.blank_QMARK_(line)){
return cljs.core.rest(body__$1);
} else {
return cljs.core.cons(line,cljs.core.rest(body__$1));
}
})():body__$1);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(title_lines,body__$2));
} else {
return content;
}
} else {
return null;
}
});
frontend.util.drawer.get_logbook = (function frontend$util$drawer$get_logbook(body){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (v){
return ((cljs.core.vector_QMARK_(v)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(v),"Drawer")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(v),"logbook")))));
}),body));
});
frontend.util.drawer.with_logbook = (function frontend$util$drawer$with_logbook(block,content){
var new_clocks = cljs.core.last(frontend.util.drawer.get_drawer_ast(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),content,"logbook"));
var logbook = frontend.util.drawer.get_logbook(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(logbook)){
var content__$1 = frontend.util.drawer.remove_logbook(content);
var clocks = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_clocks,(cljs.core.truth_(new_clocks)?null:cljs.core.last(logbook))));
var clocks__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clocks)));
if(cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))){
return frontend.util.drawer.insert_drawer(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),content__$1,"LOGBOOK",clocks__$1);
} else {
return content__$1;
}
} else {
return content;
}
});

//# sourceMappingURL=frontend.util.drawer.js.map
