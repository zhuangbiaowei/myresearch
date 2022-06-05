goog.provide('frontend.db.query_dsl');
frontend.db.query_dsl.__GT_journal_day_int = (function frontend$db$query_dsl$__GT_journal_day_int(input){
var input__$1 = clojure.string.lower_case(cljs.core.name(input));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("today",input__$1)){
return frontend.db.utils.date__GT_int(cljs_time.core.today());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("yesterday",input__$1)){
return frontend.db.utils.date__GT_int(cljs_time.core.yesterday());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tomorrow",input__$1)){
return frontend.db.utils.date__GT_int(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
} else {
if(logseq.graph_parser.text.page_ref_QMARK_(input__$1)){
var input__$2 = clojure.string.capitalize(clojure.string.replace(logseq.graph_parser.text.page_ref_un_brackets_BANG_(input__$1),":",""));
if(cljs.core.truth_(frontend.date.valid_journal_title_QMARK_(input__$2))){
return frontend.date.journal_title__GT_int(input__$2);
} else {
return null;
}
} else {
var duration = cljs.core.parse_long(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input__$1,(0),(((input__$1).length) - (1))));
var kind = cljs.core.last(input__$1);
var tf = (function (){var G__42389 = kind;
switch (G__42389) {
case "y":
return cljs_time.core.years;

break;
case "m":
return cljs_time.core.months;

break;
case "w":
return cljs_time.core.weeks;

break;
default:
return cljs_time.core.days;

}
})();
return frontend.db.utils.date__GT_int(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),(tf.cljs$core$IFn$_invoke$arity$1 ? tf.cljs$core$IFn$_invoke$arity$1(duration) : tf.call(null,duration))));

}
}
}
}
});
frontend.db.query_dsl.__GT_timestamp = (function frontend$db$query_dsl$__GT_timestamp(input){
var input__$1 = clojure.string.lower_case(cljs.core.name(input));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("now",input__$1)){
return frontend.util.time_ms();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("today",input__$1)){
return cljs_time.coerce.to_long(cljs_time.core.today());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("yesterday",input__$1)){
return cljs_time.coerce.to_long(cljs_time.core.yesterday());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tomorrow",input__$1)){
return cljs_time.coerce.to_long(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
} else {
if(logseq.graph_parser.text.page_ref_QMARK_(input__$1)){
var input__$2 = clojure.string.capitalize(clojure.string.replace(logseq.graph_parser.text.page_ref_un_brackets_BANG_(input__$1),":",""));
if(cljs.core.truth_(frontend.date.valid_journal_title_QMARK_(input__$2))){
return frontend.date.journal_title__GT_long(input__$2);
} else {
return null;
}
} else {
var duration = cljs.core.parse_long(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(input__$1,(0),(((input__$1).length) - (1))));
var kind = cljs.core.last(input__$1);
var tf = (function (){var G__42390 = kind;
switch (G__42390) {
case "y":
return cljs_time.core.years;

break;
case "m":
return cljs_time.core.months;

break;
case "w":
return cljs_time.core.weeks;

break;
case "h":
return cljs_time.core.hours;

break;
case "n":
return cljs_time.core.minutes;

break;
default:
return cljs_time.core.days;

}
})();
return cljs_time.coerce.to_long(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),(tf.cljs$core$IFn$_invoke$arity$1 ? tf.cljs$core$IFn$_invoke$arity$1(duration) : tf.call(null,duration))));

}
}
}
}
}
});
frontend.db.query_dsl.collect_vars = (function frontend$db$query_dsl$collect_vars(l){
var vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
clojure.walk.postwalk((function (f){
if((((f instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(f)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(vars,cljs.core.conj,f);
} else {
}

return f;
}),l);

return cljs.core.deref(vars);
});
frontend.db.query_dsl.build_and_or_not_result = (function frontend$db$query_dsl$build_and_or_not_result(fe,clauses,current_filter,nested_and_QMARK_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fe,new cljs.core.Symbol(null,"not","not",1044554643,null))){
if(cljs.core.every_QMARK_(cljs.core.list_QMARK_,clauses)){
return cljs.core.cons(fe,cljs.core.seq(clauses));
} else {
var clauses__$1 = ((cljs.core.coll_QMARK_(cljs.core.first(clauses)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clauses):clauses);
var clauses__$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(clauses__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.ffirst(clauses__$1)))))?cljs.core.rest(cljs.core.first(clauses__$1)):clauses__$1);
return cljs.core.cons(fe,cljs.core.seq(clauses__$2));
}
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(clauses))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_filter,new cljs.core.Symbol(null,"not","not",1044554643,null))){
return cljs.core.cons(new cljs.core.Symbol(null,"and","and",668631710,null),clauses);
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_filter,new cljs.core.Symbol(null,"or","or",1876275696,null));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return nested_and_QMARK_;
}
})())){
return cljs.core.cons(new cljs.core.Symbol(null,"and","and",668631710,null),clauses);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,fe,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (result){
if(cljs.core.list_QMARK_(result)){
return result;
} else {
var result__$1 = ((cljs.core.vector_QMARK_(cljs.core.ffirst(result)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,result):result);
return cljs.core.cons(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.seq(result__$1));
}
}),clauses));

}
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,fe,clauses);

}
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.query_dsl !== 'undefined') && (typeof frontend.db.query_dsl.remove_nil_QMARK_ !== 'undefined')){
} else {
frontend.db.query_dsl.remove_nil_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.nil_QMARK_);
}
frontend.db.query_dsl.build_and_or_not = (function frontend$db$query_dsl$build_and_or_not(e,p__42391,level,fe){
var map__42392 = p__42391;
var map__42392__$1 = cljs.core.__destructure_map(map__42392);
var env = map__42392__$1;
var current_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42392__$1,new cljs.core.Keyword(null,"current-filter","current-filter",1519815247));
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42392__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
var raw_clauses = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (form){
var G__42393 = form;
var G__42394 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"current-filter","current-filter",1519815247),fe);
var G__42395 = (level + (1));
return (frontend.db.query_dsl.build_query.cljs$core$IFn$_invoke$arity$3 ? frontend.db.query_dsl.build_query.cljs$core$IFn$_invoke$arity$3(G__42393,G__42394,G__42395) : frontend.db.query_dsl.build_query.call(null,G__42393,G__42394,G__42395));
}),cljs.core.rest(e));
var clauses = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(frontend.db.query_dsl.remove_nil_QMARK_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query","query",-1288509510),raw_clauses)));
var nested_and_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fe,new cljs.core.Symbol(null,"and","and",668631710,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_filter,new cljs.core.Symbol(null,"and","and",668631710,null))));
if(cljs.core.seq(clauses)){
var result = frontend.db.query_dsl.build_and_or_not_result(fe,clauses,current_filter,nested_and_QMARK_);
var vars_SINGLEQUOTE_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.deref(vars)),frontend.db.query_dsl.collect_vars(result));
var query = ((nested_and_QMARK_)?result:(((((level === (0))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null], null), null),fe))))?result:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"not","not",1044554643,null),fe)) && ((!((current_filter == null))))))?result:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null)
)));
cljs.core.reset_BANG_(vars,vars_SINGLEQUOTE_);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw_clauses], 0)))], null);
} else {
return null;
}
});
frontend.db.query_dsl.build_between_two_arg = (function frontend$db$query_dsl$build_between_two_arg(e){
var start = frontend.db.query_dsl.__GT_journal_day_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var end = frontend.db.query_dsl.__GT_journal_day_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(2)));
var vec__42396 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null));
var start__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42396,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42396,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"between","between",-1523336493,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),(new cljs.core.List(null,start__$1,(new cljs.core.List(null,end__$1,null,(1),null)),(2),null)),(3),null)),(4),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276)], null)], null);
});
frontend.db.query_dsl.build_between_three_arg = (function frontend$db$query_dsl$build_between_three_arg(e){
var k = clojure.string.replace(clojure.string.lower_case(cljs.core.name(cljs.core.second(e))),"-","_");
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["last_modified_at",null,"created_at",null], null), null),k)){
var start = frontend.db.query_dsl.__GT_timestamp(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(2)));
var end = frontend.db.query_dsl.__GT_timestamp(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(3)));
if(cljs.core.truth_((function (){var and__5041__auto__ = start;
if(cljs.core.truth_(and__5041__auto__)){
return end;
} else {
return and__5041__auto__;
}
})())){
var vec__42399 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null));
var start__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42399,(0),null);
var end__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42399,(1),null);
var sym = new cljs.core.Symbol(null,"?v","?v",-464183118,null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Symbol(null,"?prop","?prop",1880869414,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"get","get",-971253014,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?prop","?prop",1880869414,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null)),sym], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,">=",">=",1016916022,null),(new cljs.core.List(null,sym,(new cljs.core.List(null,start__$1,null,(1),null)),(2),null)),(3),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"<","<",993667236,null),(new cljs.core.List(null,sym,(new cljs.core.List(null,end__$1,null,(1),null)),(2),null)),(3),null))], null)], null)], null);
} else {
return null;
}
} else {
return null;
}
});
frontend.db.query_dsl.build_between = (function frontend$db$query_dsl$build_between(e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(e))){
return frontend.db.query_dsl.build_between_two_arg(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(e))){
return frontend.db.query_dsl.build_between_three_arg(e);
} else {
return null;
}
}
});
frontend.db.query_dsl.build_property_two_arg = (function frontend$db$query_dsl$build_property_two_arg(e){
var k = clojure.string.replace(cljs.core.name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(1))),"_","-");
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(2));
var v__$1 = (((!((v == null))))?logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$3(k,v,frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()):v);
var v__$2 = ((cljs.core.coll_QMARK_(v__$1))?cljs.core.first(v__$1):v__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"property","property",526253295,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(new cljs.core.List(null,v__$2,null,(1),null)),(2),null)),(3),null)),(4),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property","property",-1114278232)], null)], null);
});
frontend.db.query_dsl.build_property_one_arg = (function frontend$db$query_dsl$build_property_one_arg(e){
var k = clojure.string.replace(cljs.core.name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(1))),"_","-");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"has-property","has-property",-130314949,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-property","has-property",-1770846476)], null)], null);
});
frontend.db.query_dsl.build_property = (function frontend$db$query_dsl$build_property(e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(e))){
return frontend.db.query_dsl.build_property_two_arg(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(e))){
return frontend.db.query_dsl.build_property_one_arg(e);
} else {
return null;
}
}
});
frontend.db.query_dsl.build_task = (function frontend$db$query_dsl$build_task(e){
var markers = ((cljs.core.coll_QMARK_(cljs.core.first(cljs.core.rest(e))))?cljs.core.first(cljs.core.rest(e)):cljs.core.rest(e));
if(cljs.core.seq(markers)){
var markers__$1 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.name),markers));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"task","task",163923534,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),(new cljs.core.List(null,markers__$1,null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task","task",-1476607993)], null)], null);
} else {
return null;
}
});
frontend.db.query_dsl.build_priority = (function frontend$db$query_dsl$build_priority(e){
var priorities = ((cljs.core.coll_QMARK_(cljs.core.first(cljs.core.rest(e))))?cljs.core.first(cljs.core.rest(e)):cljs.core.rest(e));
if(cljs.core.seq(priorities)){
var priorities__$1 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.name),priorities));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"priority","priority",-1223342054,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),(new cljs.core.List(null,priorities__$1,null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"priority","priority",1431093715)], null)], null);
} else {
return null;
}
});
frontend.db.query_dsl.build_page_property = (function frontend$db$query_dsl$build_page_property(e){
var vec__42402 = cljs.core.rest(e);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42402,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42402,(1),null);
var k__$1 = clojure.string.replace(cljs.core.name(k),"_","-");
if((!((v == null)))){
var v_SINGLEQUOTE_ = logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$3(k__$1,v,frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var val = ((cljs.core.coll_QMARK_(v_SINGLEQUOTE_))?cljs.core.first(v_SINGLEQUOTE_):v_SINGLEQUOTE_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"page-property","page-property",1223486862,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?p","?p",-10896580,null),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k__$1),(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-property","page-property",-417044665)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"has-page-property","has-page-property",1696919326,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?p","?p",-10896580,null),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k__$1),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-page-property","has-page-property",56387799)], null)], null);
}
});
frontend.db.query_dsl.build_page_tags = (function frontend$db$query_dsl$build_page_tags(e){
var tags = ((cljs.core.coll_QMARK_(cljs.core.first(cljs.core.rest(e))))?cljs.core.first(cljs.core.rest(e)):cljs.core.rest(e));
var tags__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.name),tags);
if(cljs.core.seq(tags__$1)){
var tags__$2 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(logseq.graph_parser.text.page_ref_un_brackets_BANG_,clojure.string.lower_case,cljs.core.name),tags__$1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"page-tags","page-tags",631095502,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?p","?p",-10896580,null),(new cljs.core.List(null,tags__$2,null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-tags","page-tags",-1009436025)], null)], null);
} else {
return null;
}
});
frontend.db.query_dsl.build_all_page_tags = (function frontend$db$query_dsl$build_all_page_tags(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"all-page-tags","all-page-tags",-118720438,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?p","?p",-10896580,null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-page-tags","all-page-tags",-1759251965)], null)], null);
});
frontend.db.query_dsl.build_sample = (function frontend$db$query_dsl$build_sample(e,sample){
var temp__5720__auto__ = cljs.core.second(e);
if(cljs.core.truth_(temp__5720__auto__)){
var num = temp__5720__auto__;
if(cljs.core.integer_QMARK_(num)){
cljs.core.reset_BANG_(sample,num);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)], null)], null);
} else {
return null;
}
} else {
return null;
}
});
frontend.db.query_dsl.build_sort_by = (function frontend$db$query_dsl$build_sort_by(e,sort_by_){
var vec__42406 = cljs.core.rest(e);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42406,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42406,(1),null);
var order__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = order;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),null,new cljs.core.Keyword(null,"asc","asc",356854569),null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(order))));
} else {
return and__5041__auto__;
}
})())?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(order))):new cljs.core.Keyword(null,"desc","desc",2093485764));
var k__$1 = clojure.string.replace(clojure.string.lower_case(cljs.core.name(k)),"_","-");
var get_value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,"created-at"))?new cljs.core.Keyword("block","created-at","block/created-at",1440015):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,"updated-at"))?new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551):(function (p1__42405_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__42405_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),k__$1], null));
})
));
var comp = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order__$1,new cljs.core.Keyword(null,"desc","desc",2093485764)))?cljs.core._GT__EQ_:cljs.core._LT__EQ_);
cljs.core.reset_BANG_(sort_by_,(function (result){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(get_value,comp,cljs.core.flatten(result));
}));

return null;
});
frontend.db.query_dsl.build_page = (function frontend$db$query_dsl$build_page(e){
var page_name = logseq.graph_parser.text.page_ref_un_brackets_BANG_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.rest(e))));
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"page","page",-1805363372,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),(new cljs.core.List(null,page_name__$1,null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null)], null);
});
frontend.db.query_dsl.build_namespace = (function frontend$db$query_dsl$build_namespace(e){
var page_name = logseq.graph_parser.text.page_ref_un_brackets_BANG_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.rest(e))));
var page = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
if(clojure.string.blank_QMARK_(page)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?p","?p",-10896580,null),(new cljs.core.List(null,page,null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null)], null);
}
});
frontend.db.query_dsl.build_page_ref = (function frontend$db$query_dsl$build_page_ref(e){
var page_name = (function (){var G__42409 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(e);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__42409) : frontend.util.page_name_sanity_lc.call(null,G__42409));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"page-ref","page-ref",593400376,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),(new cljs.core.List(null,page_name,null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)], null)], null);
});
frontend.db.query_dsl.build_block_content = (function frontend$db$query_dsl$build_block_content(e){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(new cljs.core.List(null,new cljs.core.Symbol(null,"block-content","block-content",2117451217,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),(new cljs.core.List(null,e,null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-content","block-content",476919690)], null)], null);
});
/**
 * This fn converts a form/list in a query e.g. `(operator arg1 arg2)` to its datalog
 *   equivalent. This fn is called recursively on sublists for boolean operators
 *   `and`, `or` and `not`. This fn should return a map with :query and :rules or nil.
 * 
 * Some bindings in this fn:
 * 
 * * e - the list being processed
 * * fe - the query operator e.g. `property`
 */
frontend.db.query_dsl.build_query = (function frontend$db$query_dsl$build_query(var_args){
var G__42411 = arguments.length;
switch (G__42411) {
case 2:
return frontend.db.query_dsl.build_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.query_dsl.build_query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.query_dsl.build_query.cljs$core$IFn$_invoke$arity$2 = (function (e,env){
return frontend.db.query_dsl.build_query.cljs$core$IFn$_invoke$arity$3(e,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)),(0));
}));

(frontend.db.query_dsl.build_query.cljs$core$IFn$_invoke$arity$3 = (function (e,p__42412,level){
var map__42413 = p__42412;
var map__42413__$1 = cljs.core.__destructure_map(map__42413);
var env = map__42413__$1;
var sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42413__$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var blocks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42413__$1,new cljs.core.Keyword(null,"blocks?","blocks?",58578620),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
var sample = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42413__$1,new cljs.core.Keyword(null,"sample","sample",79023601));
var fe = cljs.core.first(e);
var fe__$1 = (cljs.core.truth_(fe)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(fe))):null);
var page_ref_QMARK_ = logseq.graph_parser.text.page_ref_QMARK_(e);
if(((((page_ref_QMARK_) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"page-tags","page-tags",631095502,null),null,new cljs.core.Symbol(null,"page-property","page-property",1223486862,null),null], null), null),new cljs.core.Keyword(null,"current-filter","current-filter",1519815247).cljs$core$IFn$_invoke$arity$1(env))))))) || (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),null,new cljs.core.Symbol(null,"between","between",-1523336493,null),null,new cljs.core.Symbol(null,"todo","todo",594088957,null),null,new cljs.core.Symbol(null,"priority","priority",-1223342054,null),null,new cljs.core.Symbol(null,"task","task",163923534,null),null,new cljs.core.Symbol(null,"property","property",526253295,null),null,new cljs.core.Symbol(null,"page","page",-1805363372,null),null], null), null),fe__$1)) || ((((!(page_ref_QMARK_))) && (typeof e === 'string'))))))){
cljs.core.reset_BANG_(blocks_QMARK_,true);
} else {
}

if((e == null)){
return null;
} else {
if(page_ref_QMARK_){
return frontend.db.query_dsl.build_page_ref(e);
} else {
if(typeof e === 'string'){
return frontend.db.query_dsl.build_block_content(e);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null], null), null),fe__$1)){
return frontend.db.query_dsl.build_and_or_not(e,env,level,fe__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"between","between",-1523336493,null),fe__$1)){
return frontend.db.query_dsl.build_between(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"property","property",526253295,null),fe__$1)){
return frontend.db.query_dsl.build_property(e);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"todo","todo",594088957,null),fe__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"task","task",163923534,null),fe__$1)))){
return frontend.db.query_dsl.build_task(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"priority","priority",-1223342054,null),fe__$1)){
return frontend.db.query_dsl.build_priority(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),fe__$1)){
return frontend.db.query_dsl.build_sort_by(e,sort_by);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"page","page",-1805363372,null),fe__$1)){
return frontend.db.query_dsl.build_page(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),fe__$1)){
return frontend.db.query_dsl.build_namespace(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"page-property","page-property",1223486862,null),fe__$1)){
return frontend.db.query_dsl.build_page_property(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"page-tags","page-tags",631095502,null),fe__$1)){
return frontend.db.query_dsl.build_page_tags(e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"all-page-tags","all-page-tags",-118720438,null),fe__$1)){
return frontend.db.query_dsl.build_all_page_tags();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"sample","sample",1719555128,null),fe__$1)){
return frontend.db.query_dsl.build_sample(e,sample);
} else {
return null;

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
}));

(frontend.db.query_dsl.build_query.cljs$lang$maxFixedArity = 3);

frontend.db.query_dsl.pre_transform = (function frontend$db$query_dsl$pre_transform(s){
var G__42415 = s;
var G__42415__$1 = (((G__42415 == null))?null:clojure.string.replace(G__42415,logseq.graph_parser.text.page_ref_re,"\"[[$1]]\""));
if((G__42415__$1 == null)){
return null;
} else {
return clojure.string.replace(G__42415__$1,frontend.util.text.between_re,(function (p__42416){
var vec__42417 = p__42416;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42417,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42417,(1),null);
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("(between %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x__$1){
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["-",null,"+",null], null), null),cljs.core.first(x__$1));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = frontend.util.safe_re_find(/\d/,cljs.core.first(x__$1));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.some((function (p1__42414_SHARP_){
return clojure.string.ends_with_QMARK_(x__$1,p1__42414_SHARP_);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","m","d","h","min"], null));
} else {
return and__5041__auto__;
}
}
})())){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(x__$1));
} else {
return x__$1;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(x,/ /))))], 0));
}));
}
});
frontend.db.query_dsl.add_bindings_BANG_ = (function frontend$db$query_dsl$add_bindings_BANG_(form,q){
var forms = cljs.core.set(cljs.core.flatten(q));
var syms = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Symbol(null,"not","not",1044554643,null)], null);
var vec__42420 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(syms),forms),syms);
var b_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42420,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42420,(1),null);
var not_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42420,(2),null);
var or_QMARK_ = cljs.core.contains_QMARK_(cljs.core.set(cljs.core.flatten(form)),new cljs.core.Symbol(null,"or","or",1876275696,null));
if(cljs.core.truth_(not_QMARK_)){
if(cljs.core.truth_((function (){var and__5041__auto__ = b_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return p_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null),q);
} else {
if(cljs.core.truth_(b_QMARK_)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)], null),q);
} else {
if(cljs.core.truth_(p_QMARK_)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null),q);
} else {
return q;

}
}
}
} else {
if(or_QMARK_){
if(cljs.core.truth_(cljs.core.some(cljs.core.string_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.text.page_ref_QMARK_,cljs.core.flatten(form))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q], null));
} else {
return q;

}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = b_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return p_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null)], null),q);
} else {
return q;

}
}
}
});
frontend.db.query_dsl.parse = (function frontend$db$query_dsl$parse(s){
if(((typeof s === 'string') && ((!(clojure.string.blank_QMARK_(s)))))){
var s__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(s)))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))], 0)):s);
var form = (function (){var G__42424 = s__$1;
var G__42424__$1 = (((G__42424 == null))?null:frontend.db.query_dsl.pre_transform(G__42424));
if((G__42424__$1 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__42424__$1);
}
})();
var sort_by = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var blocks_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sample = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var map__42423 = (cljs.core.truth_(form)?frontend.db.query_dsl.build_query.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),sort_by,new cljs.core.Keyword(null,"blocks?","blocks?",58578620),blocks_QMARK_,new cljs.core.Keyword(null,"sample","sample",79023601),sample], null)):null);
var map__42423__$1 = cljs.core.__destructure_map(map__42423);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42423__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42423__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var result_SINGLEQUOTE_ = ((cljs.core.seq(result))?(function (){var key = ((cljs.core.coll_QMARK_(cljs.core.first(result)))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(result)):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(result)));
return frontend.db.query_dsl.add_bindings_BANG_(form,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"and","and",-971899817)))?cljs.core.rest(result):result));
})():null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),result_SINGLEQUOTE_,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.db.rules.query_dsl_rules,rules),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),cljs.core.deref(sort_by),new cljs.core.Keyword(null,"blocks?","blocks?",58578620),cljs.core.boolean$(cljs.core.deref(blocks_QMARK_)),new cljs.core.Keyword(null,"sample","sample",79023601),sample], null);
} else {
return null;
}
});
frontend.db.query_dsl.query_wrapper = (function frontend$db$query_dsl$query_wrapper(where,blocks_QMARK_){
var q = (cljs.core.truth_(blocks_QMARK_)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"find","find",496279456),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"pull","pull",779986722,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"?b","?b",1575118075,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,frontend.db.model.block_attrs,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"in","in",-1531184865),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"$","$",-1580747756,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"where","where",-2044795965),null,(1),null))], 0))))):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"where","where",-2044795965)], null));
var result = ((cljs.core.coll_QMARK_(cljs.core.first(where)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,q,where):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(q,where));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Datascript query: ",result], 0));

return result;
});
/**
 * Runs a dsl query with query as a string. Primary use is from '{{query }}'
 */
frontend.db.query_dsl.query = (function frontend$db$query_dsl$query(repo,query_string){
if(((typeof query_string === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("\"\"",query_string)))){
var query_string_SINGLEQUOTE_ = frontend.template.resolve_dynamic_template_BANG_(query_string);
var map__42425 = frontend.db.query_dsl.parse(query_string_SINGLEQUOTE_);
var map__42425__$1 = cljs.core.__destructure_map(map__42425);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42425__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42425__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42425__$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var blocks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42425__$1,new cljs.core.Keyword(null,"blocks?","blocks?",58578620));
var sample = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42425__$1,new cljs.core.Keyword(null,"sample","sample",79023601));
var temp__5720__auto__ = (function (){var G__42426 = query;
if((G__42426 == null)){
return null;
} else {
return frontend.db.query_dsl.query_wrapper(G__42426,blocks_QMARK_);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var query_SINGLEQUOTE_ = temp__5720__auto__;
var sort_by__$1 = (function (){var or__5043__auto__ = sort_by;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.identity;
}
})();
var random_samples = (cljs.core.truth_(cljs.core.deref(sample))?(function (col){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sample),cljs.core.shuffle(col));
}):cljs.core.identity);
var transform_fn = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sort_by__$1,random_samples);
return frontend.db.query_react.react_query(repo,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),query_SINGLEQUOTE_,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),query_string,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),transform_fn], null));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Runs a dsl query with query as a seq. Primary use is from advanced query
 */
frontend.db.query_dsl.custom_query = (function frontend$db$query_dsl$custom_query(repo,query_m,query_opts){
if(cljs.core.seq(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_m))){
var query_string = frontend.template.resolve_dynamic_template_BANG_(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_m)], 0)));
var map__42427 = frontend.db.query_dsl.parse(query_string);
var map__42427__$1 = cljs.core.__destructure_map(map__42427);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42427__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42427__$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var blocks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42427__$1,new cljs.core.Keyword(null,"blocks?","blocks?",58578620));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42427__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var temp__5720__auto__ = (function (){var G__42428 = query;
if((G__42428 == null)){
return null;
} else {
return frontend.db.query_dsl.query_wrapper(G__42428,blocks_QMARK_);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var query_SINGLEQUOTE_ = temp__5720__auto__;
return frontend.db.query_react.react_query(repo,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_m,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query_SINGLEQUOTE_,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_opts,(cljs.core.truth_(sort_by)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),sort_by], null):null)], 0)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.db.query_dsl.js.map
