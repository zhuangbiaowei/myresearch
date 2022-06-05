goog.provide('frontend.components.query_table');
frontend.components.query_table.sort_result_by = (function frontend$components$query_table$sort_result_by(by_item,desc_QMARK_,result){
var comp = (cljs.core.truth_(desc_QMARK_)?cljs.core._GT_:cljs.core._LT_);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(by_item,comp,result);
});
frontend.components.query_table.sortable_title = rum.core.lazy_build(rum.core.build_defc,(function (title,key,by_item,desc_QMARK_,block_id){
return daiquiri.core.create_element("th",{'className':"whitespace-nowrap"},[daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(by_item,key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(desc_QMARK_,cljs.core.not);

if(cljs.core.truth_(block_id)){
if(cljs.core.truth_(key)){
frontend.handler.editor.set_block_property_BANG_(block_id,new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033),cljs.core.name(key));
} else {
}

return frontend.handler.editor.set_block_property_BANG_(block_id,new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008),cljs.core.deref(desc_QMARK_));
} else {
return null;
}
})},[daiquiri.core.create_element("div",{'className':"flex items-center"},[(function (){var attrs54180 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs54180))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-1"], null)], null),attrs54180], 0))):{'className':"mr-1"}),((cljs.core.map_QMARK_(attrs54180))?null:[daiquiri.interpreter.interpret(attrs54180)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(by_item),key))?(function (){var attrs54181 = (cljs.core.truth_(cljs.core.deref(desc_QMARK_))?frontend.components.svg.caret_down():frontend.components.svg.caret_up());
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs54181))?daiquiri.interpreter.element_attributes(attrs54181):null),((cljs.core.map_QMARK_(attrs54181))?null:[daiquiri.interpreter.interpret(attrs54181)]));
})():null)])])]);
}),null,"frontend.components.query-table/sortable-title");
frontend.components.query_table.get_keys = (function frontend$components$query_table$get_keys(result,page_QMARK_){
var keys = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"template","template",-702405684),null], null), null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.util.property.built_in_properties(),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","properties","block/properties",708347145),result)], 0)))));
var keys__$1 = (cljs.core.truth_(page_QMARK_)?cljs.core.cons(new cljs.core.Keyword(null,"page","page",849072397),keys):cljs.core.cons(new cljs.core.Keyword(null,"block","block",664686210),keys));
var keys__$2 = (cljs.core.truth_(page_QMARK_)?cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keys__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336)], null))):keys__$1);
return keys__$2;
});
frontend.components.query_table.attach_clock_property = (function frontend$components$query_table$attach_clock_property(result){
var ks = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"clock-time","clock-time",1696313975)], null);
var result__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
var b__$1 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$1(b);
return cljs.core.assoc_in(b__$1,ks,(function (){var or__5043__auto__ = frontend.util.clock.clock_summary(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(b__$1),false);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})());
}),result);
if(cljs.core.every_QMARK_((function (p1__54182_SHARP_){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__54182_SHARP_,ks) === (0));
}),result__$1)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54183_SHARP_){
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(p1__54183_SHARP_,ks);
}),result__$1);
} else {
return result__$1;
}
});
frontend.components.query_table.sort_by_fn = (function frontend$components$query_table$sort_by_fn(sort_by_item,item){
var G__54184 = sort_by_item;
var G__54184__$1 = (((G__54184 instanceof cljs.core.Keyword))?G__54184.fqn:null);
switch (G__54184__$1) {
case "created-at":
return new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);

break;
case "updated-at":
return new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);

break;
case "block":
return new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);

break;
case "page":
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);

break;
default:
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),sort_by_item], null));

}
});
frontend.components.query_table.desc_QMARK_ = (function frontend$components$query_table$desc_QMARK_(_STAR_desc_QMARK_,p_desc_QMARK_){
if((!((cljs.core.deref(_STAR_desc_QMARK_) == null)))){
return cljs.core.deref(_STAR_desc_QMARK_);
} else {
if((!((p_desc_QMARK_ == null)))){
return p_desc_QMARK_;
} else {
return true;

}
}
});
frontend.components.query_table.result_table = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,current_block,result,p__54186,map_inline,page_cp,__GT_elem,inline_text){
var map__54187 = p__54186;
var map__54187__$1 = cljs.core.__destructure_map(map__54187);
var page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54187__$1,new cljs.core.Keyword(null,"page?","page?",644039860));
if(cljs.core.truth_(current_block)){
var p_sort_by = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-sort-by","query-sort-by",488160033)], null)));
var p_desc_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-sort-desc","query-sort-desc",123730008)], null));
var select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.query-table","select?","frontend.components.query-table/select?",257289424));
var _STAR_sort_by_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.query-table","sort-by-item","frontend.components.query-table/sort-by-item",1756589087));
var _STAR_desc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.query-table","desc?","frontend.components.query-table/desc?",-2115901141));
var sort_by_item = (function (){var or__5043__auto__ = cljs.core.deref(_STAR_sort_by_item);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var G__54188 = p_sort_by;
if((G__54188 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__54188);
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336);
}
}
})();
var result__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"template","template",-702405684)], null)) == null)));
}),result);
var result__$2 = (cljs.core.truth_(page_QMARK_)?result__$1:frontend.components.query_table.attach_clock_property(result__$1));
var clock_time_total = (cljs.core.truth_(page_QMARK_)?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54185_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(p1__54185_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"clock-time","clock-time",1696313975)], null),(0));
}),result__$2)));
var query_properties = (function (){var G__54189 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null),"");
if((G__54189 == null)){
return null;
} else {
return frontend.handler.common.safe_read_string(G__54189,"Parsing query properties failed");
}
})();
var keys = ((cljs.core.seq(query_properties))?query_properties:frontend.components.query_table.get_keys(result__$2,page_QMARK_));
var included_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),null,new cljs.core.Keyword(null,"created-at","created-at",-89248644),null], null), null);
var keys__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.some(included_keys,keys))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(included_keys,keys),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(included_keys,keys),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([included_keys], 0)):keys));
var desc_QMARK_ = frontend.components.query_table.desc_QMARK_(_STAR_desc_QMARK_,p_desc_QMARK_);
var result__$3 = frontend.components.query_table.sort_result_by((function (item){
return frontend.components.query_table.sort_by_fn(sort_by_item,item);
}),desc_QMARK_,result__$2);
return daiquiri.core.create_element("div",{'onMouseDown':(function (e){
return e.stopPropagation();
}),'style':{'width':"100%"},'className':"overflow-x-auto"},[daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__54190(s__54191){
return (new cljs.core.LazySeq(null,(function (){
var s__54191__$1 = s__54191;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__54191__$1);
if(temp__5720__auto__){
var s__54191__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54191__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__54191__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__54193 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__54192 = (0);
while(true){
if((i__54192 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__54192);
cljs.core.chunk_append(b__54193,(function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})());

var G__54297 = (i__54192 + (1));
i__54192 = G__54297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54193),frontend$components$query_table$iter__54190(cljs.core.chunk_rest(s__54191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54193),null);
}
} else {
var key = cljs.core.first(s__54191__$2);
return cljs.core.cons((function (){var key_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"clock-time","clock-time",1696313975))) && (cljs.core.integer_QMARK_(clock_time_total))))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("clock-time(total: %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes(clock_time_total)], 0)):cljs.core.name(key));
return frontend.components.query_table.sortable_title(key_name,key,_STAR_sort_by_item,_STAR_desc_QMARK_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block));
})(),frontend$components$query_table$iter__54190(cljs.core.rest(s__54191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(keys__$1);
})())])]),daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$query_table$iter__54194(s__54195){
return (new cljs.core.LazySeq(null,(function (){
var s__54195__$1 = s__54195;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__54195__$1);
if(temp__5720__auto__){
var s__54195__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54195__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__54195__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__54197 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__54196 = (0);
while(true){
if((i__54196 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__54196);
cljs.core.chunk_append(b__54197,(function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__54196,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function frontend$components$query_table$iter__54194_$_iter__54202(s__54203){
return (new cljs.core.LazySeq(null,((function (i__54196,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
var s__54203__$1 = s__54203;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__54203__$1);
if(temp__5720__auto____$1){
var s__54203__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54203__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__54203__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__54205 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__54204 = (0);
while(true){
if((i__54204 < size__5519__auto____$1)){
var key = cljs.core._nth(c__5518__auto____$1,i__54204);
cljs.core.chunk_append(b__54205,(function (){var value = (function (){var G__54206 = key;
var G__54206__$1 = (((G__54206 instanceof cljs.core.Keyword))?G__54206.fqn:null);
switch (G__54206__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__54208 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__54208__$1 = cljs.core.__destructure_map(map__54208);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54208__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__54209 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__54210 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__54209,G__54210) : __GT_elem.call(null,G__54209,G__54210));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),content], null);
}

break;
case "created-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var created_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(created_at);
} else {
return null;
}
})()], null);

break;
case "updated-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var updated_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(updated_at);
} else {
return null;
}
})()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),key], null))], null);

}
})();
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__54204,i__54196,value,key,c__5518__auto____$1,size__5519__auto____$1,b__54205,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__54204,i__54196,value,key,c__5518__auto____$1,size__5519__auto____$1,b__54205,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'onMouseMove':((function (i__54204,i__54196,value,key,c__5518__auto____$1,size__5519__auto____$1,b__54205,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__54204,i__54196,value,key,c__5518__auto____$1,size__5519__auto____$1,b__54205,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'onMouseUp':((function (i__54204,i__54196,value,key,c__5518__auto____$1,size__5519__auto____$1,b__54205,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__54204,i__54196,value,key,c__5518__auto____$1,size__5519__auto____$1,b__54205,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__54204,i__54196,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__54205,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function frontend$components$query_table$iter__54194_$_iter__54202_$_iter__54211(s__54212){
return (new cljs.core.LazySeq(null,((function (i__54204,i__54196,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__54205,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
var s__54212__$1 = s__54212;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__54212__$1);
if(temp__5720__auto____$2){
var s__54212__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__54212__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__54212__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__54214 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__54213 = (0);
while(true){
if((i__54213 < size__5519__auto____$2)){
var item__$1 = cljs.core._nth(c__5518__auto____$2,i__54213);
cljs.core.chunk_append(b__54214,(function (){var G__54215 = cljs.core.PersistentArrayMap.EMPTY;
var G__54216 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54215,G__54216) : page_cp.call(null,G__54215,G__54216));
})());

var G__54304 = (i__54213 + (1));
i__54213 = G__54304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54214),frontend$components$query_table$iter__54194_$_iter__54202_$_iter__54211(cljs.core.chunk_rest(s__54212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54214),null);
}
} else {
var item__$1 = cljs.core.first(s__54212__$2);
return cljs.core.cons((function (){var G__54217 = cljs.core.PersistentArrayMap.EMPTY;
var G__54218 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54217,G__54218) : page_cp.call(null,G__54217,G__54218));
})(),frontend$components$query_table$iter__54194_$_iter__54202_$_iter__54211(cljs.core.rest(s__54212__$2)));
}
} else {
return null;
}
break;
}
});})(i__54204,i__54196,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__54205,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,null,null));
});})(i__54204,i__54196,value__$1,value,key,c__5518__auto____$1,size__5519__auto____$1,b__54205,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__54222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__54222) : frontend.db.entity.call(null,G__54222));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__54223 = cljs.core.PersistentArrayMap.EMPTY;
var G__54224 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54223,G__54224) : page_cp.call(null,G__54223,G__54224));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__54305 = (i__54204 + (1));
i__54204 = G__54305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54205),frontend$components$query_table$iter__54194_$_iter__54202(cljs.core.chunk_rest(s__54203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54205),null);
}
} else {
var key = cljs.core.first(s__54203__$2);
return cljs.core.cons((function (){var value = (function (){var G__54225 = key;
var G__54225__$1 = (((G__54225 instanceof cljs.core.Keyword))?G__54225.fqn:null);
switch (G__54225__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__54226 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__54226__$1 = cljs.core.__destructure_map(map__54226);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54226__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__54227 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__54228 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__54227,G__54228) : __GT_elem.call(null,G__54227,G__54228));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),content], null);
}

break;
case "created-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var created_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(created_at);
} else {
return null;
}
})()], null);

break;
case "updated-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var updated_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(updated_at);
} else {
return null;
}
})()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),key], null))], null);

}
})();
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__54196,value,key,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__54196,value,key,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'onMouseMove':((function (i__54196,value,key,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__54196,value,key,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'onMouseUp':((function (i__54196,value,key,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__54196,value,key,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__54196,value__$1,value,key,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function frontend$components$query_table$iter__54194_$_iter__54202_$_iter__54229(s__54230){
return (new cljs.core.LazySeq(null,((function (i__54196,value__$1,value,key,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
var s__54230__$1 = s__54230;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__54230__$1);
if(temp__5720__auto____$2){
var s__54230__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__54230__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__54230__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__54232 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__54231 = (0);
while(true){
if((i__54231 < size__5519__auto____$1)){
var item__$1 = cljs.core._nth(c__5518__auto____$1,i__54231);
cljs.core.chunk_append(b__54232,(function (){var G__54235 = cljs.core.PersistentArrayMap.EMPTY;
var G__54236 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54235,G__54236) : page_cp.call(null,G__54235,G__54236));
})());

var G__54312 = (i__54231 + (1));
i__54231 = G__54312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54232),frontend$components$query_table$iter__54194_$_iter__54202_$_iter__54229(cljs.core.chunk_rest(s__54230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54232),null);
}
} else {
var item__$1 = cljs.core.first(s__54230__$2);
return cljs.core.cons((function (){var G__54237 = cljs.core.PersistentArrayMap.EMPTY;
var G__54238 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54237,G__54238) : page_cp.call(null,G__54237,G__54238));
})(),frontend$components$query_table$iter__54194_$_iter__54202_$_iter__54229(cljs.core.rest(s__54230__$2)));
}
} else {
return null;
}
break;
}
});})(i__54196,value__$1,value,key,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,null,null));
});})(i__54196,value__$1,value,key,s__54203__$2,temp__5720__auto____$1,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__54245 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__54245) : frontend.db.entity.call(null,G__54245));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__54246 = cljs.core.PersistentArrayMap.EMPTY;
var G__54247 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54246,G__54247) : page_cp.call(null,G__54246,G__54247));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__54194_$_iter__54202(cljs.core.rest(s__54203__$2)));
}
} else {
return null;
}
break;
}
});})(i__54196,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,null,null));
});})(i__54196,format,item,c__5518__auto__,size__5519__auto__,b__54197,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
;
return iter__5520__auto__(keys__$1);
})())]);
})());

var G__54313 = (i__54196 + (1));
i__54196 = G__54313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54197),frontend$components$query_table$iter__54194(cljs.core.chunk_rest(s__54195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54197),null);
}
} else {
var item = cljs.core.first(s__54195__$2);
return cljs.core.cons((function (){var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item);
return daiquiri.core.create_element("tr",{'className':"cursor"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function frontend$components$query_table$iter__54194_$_iter__54248(s__54249){
return (new cljs.core.LazySeq(null,(function (){
var s__54249__$1 = s__54249;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__54249__$1);
if(temp__5720__auto____$1){
var s__54249__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54249__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__54249__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__54251 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__54250 = (0);
while(true){
if((i__54250 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__54250);
cljs.core.chunk_append(b__54251,(function (){var value = (function (){var G__54252 = key;
var G__54252__$1 = (((G__54252 instanceof cljs.core.Keyword))?G__54252.fqn:null);
switch (G__54252__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__54254 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__54254__$1 = cljs.core.__destructure_map(map__54254);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54254__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__54255 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__54256 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__54255,G__54256) : __GT_elem.call(null,G__54255,G__54256));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),content], null);
}

break;
case "created-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var created_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(created_at);
} else {
return null;
}
})()], null);

break;
case "updated-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var updated_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(updated_at);
} else {
return null;
}
})()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),key], null))], null);

}
})();
return daiquiri.core.create_element("td",{'onMouseDown':((function (i__54250,value,key,c__5518__auto__,size__5519__auto__,b__54251,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(i__54250,value,key,c__5518__auto__,size__5519__auto__,b__54251,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'onMouseMove':((function (i__54250,value,key,c__5518__auto__,size__5519__auto__,b__54251,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(i__54250,value,key,c__5518__auto__,size__5519__auto__,b__54251,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'onMouseUp':((function (i__54250,value,key,c__5518__auto__,size__5519__auto__,b__54251,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(i__54250,value,key,c__5518__auto__,size__5519__auto__,b__54251,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (i__54250,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__54251,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function frontend$components$query_table$iter__54194_$_iter__54248_$_iter__54257(s__54258){
return (new cljs.core.LazySeq(null,((function (i__54250,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__54251,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
var s__54258__$1 = s__54258;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__54258__$1);
if(temp__5720__auto____$2){
var s__54258__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__54258__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__54258__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__54260 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__54259 = (0);
while(true){
if((i__54259 < size__5519__auto____$1)){
var item__$1 = cljs.core._nth(c__5518__auto____$1,i__54259);
cljs.core.chunk_append(b__54260,(function (){var G__54261 = cljs.core.PersistentArrayMap.EMPTY;
var G__54262 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54261,G__54262) : page_cp.call(null,G__54261,G__54262));
})());

var G__54315 = (i__54259 + (1));
i__54259 = G__54315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54260),frontend$components$query_table$iter__54194_$_iter__54248_$_iter__54257(cljs.core.chunk_rest(s__54258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54260),null);
}
} else {
var item__$1 = cljs.core.first(s__54258__$2);
return cljs.core.cons((function (){var G__54263 = cljs.core.PersistentArrayMap.EMPTY;
var G__54264 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54263,G__54264) : page_cp.call(null,G__54263,G__54264));
})(),frontend$components$query_table$iter__54194_$_iter__54248_$_iter__54257(cljs.core.rest(s__54258__$2)));
}
} else {
return null;
}
break;
}
});})(i__54250,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__54251,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,null,null));
});})(i__54250,value__$1,value,key,c__5518__auto__,size__5519__auto__,b__54251,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__54268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__54268) : frontend.db.entity.call(null,G__54268));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__54272 = cljs.core.PersistentArrayMap.EMPTY;
var G__54273 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54272,G__54273) : page_cp.call(null,G__54272,G__54273));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})());

var G__54316 = (i__54250 + (1));
i__54250 = G__54316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54251),frontend$components$query_table$iter__54194_$_iter__54248(cljs.core.chunk_rest(s__54249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54251),null);
}
} else {
var key = cljs.core.first(s__54249__$2);
return cljs.core.cons((function (){var value = (function (){var G__54274 = key;
var G__54274__$1 = (((G__54274 instanceof cljs.core.Keyword))?G__54274.fqn:null);
switch (G__54274__$1) {
case "page":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(item);
}
})()], null);

break;
case "block":
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(item);
var map__54275 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(item),content);
var map__54275__$1 = cljs.core.__destructure_map(map__54275);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54275__$1,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.seq(title)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),(function (){var G__54276 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__54277 = (map_inline.cljs$core$IFn$_invoke$arity$2 ? map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : map_inline.call(null,config,title));
return (__GT_elem.cljs$core$IFn$_invoke$arity$2 ? __GT_elem.cljs$core$IFn$_invoke$arity$2(G__54276,G__54277) : __GT_elem.call(null,G__54276,G__54277));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),content], null);
}

break;
case "created-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var created_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(created_at);
} else {
return null;
}
})()], null);

break;
case "updated-at":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),(function (){var temp__5720__auto____$2 = new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto____$2)){
var updated_at = temp__5720__auto____$2;
return frontend.date.int__GT_local_time_2(updated_at);
} else {
return null;
}
})()], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),key], null))], null);

}
})();
return daiquiri.core.create_element("td",{'onMouseDown':((function (value,key,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,false);
});})(value,key,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'onMouseMove':((function (value,key,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
return cljs.core.reset_BANG_(select_QMARK_,true);
});})(value,key,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'onMouseUp':((function (value,key,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(select_QMARK_))){
return null;
} else {
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
}
});})(value,key,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
,'className':"whitespace-nowrap"},[(cljs.core.truth_(value)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.first(value)))?daiquiri.interpreter.interpret(cljs.core.second(value)):(function (){var value__$1 = cljs.core.second(value);
if(cljs.core.coll_QMARK_(value__$1)){
var vals = (function (){var iter__5520__auto__ = ((function (value__$1,value,key,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_){
return (function frontend$components$query_table$iter__54194_$_iter__54248_$_iter__54278(s__54279){
return (new cljs.core.LazySeq(null,(function (){
var s__54279__$1 = s__54279;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__54279__$1);
if(temp__5720__auto____$2){
var s__54279__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__54279__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__54279__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__54281 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__54280 = (0);
while(true){
if((i__54280 < size__5519__auto__)){
var item__$1 = cljs.core._nth(c__5518__auto__,i__54280);
cljs.core.chunk_append(b__54281,(function (){var G__54282 = cljs.core.PersistentArrayMap.EMPTY;
var G__54283 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54282,G__54283) : page_cp.call(null,G__54282,G__54283));
})());

var G__54320 = (i__54280 + (1));
i__54280 = G__54320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54281),frontend$components$query_table$iter__54194_$_iter__54248_$_iter__54278(cljs.core.chunk_rest(s__54279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54281),null);
}
} else {
var item__$1 = cljs.core.first(s__54279__$2);
return cljs.core.cons((function (){var G__54284 = cljs.core.PersistentArrayMap.EMPTY;
var G__54285 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null);
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54284,G__54285) : page_cp.call(null,G__54284,G__54285));
})(),frontend$components$query_table$iter__54194_$_iter__54248_$_iter__54278(cljs.core.rest(s__54279__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(value__$1,value,key,s__54249__$2,temp__5720__auto____$1,format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
;
return iter__5520__auto__(value__$1);
})();
return daiquiri.interpreter.interpret(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals));
} else {
if((!(typeof value__$1 === 'string'))){
return daiquiri.interpreter.interpret(value__$1);
} else {
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (function (){var G__54292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(value__$1) : frontend.util.page_name_sanity_lc.call(null,value__$1))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__54292) : frontend.db.entity.call(null,G__54292));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var page = temp__5718__auto__;
var G__54293 = cljs.core.PersistentArrayMap.EMPTY;
var G__54294 = page;
return (page_cp.cljs$core$IFn$_invoke$arity$2 ? page_cp.cljs$core$IFn$_invoke$arity$2(G__54293,G__54294) : page_cp.call(null,G__54293,G__54294));
} else {
return (inline_text.cljs$core$IFn$_invoke$arity$2 ? inline_text.cljs$core$IFn$_invoke$arity$2(format,value__$1) : inline_text.call(null,format,value__$1));
}
})());
}
}
})()):null)]);
})(),frontend$components$query_table$iter__54194_$_iter__54248(cljs.core.rest(s__54249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(format,item,s__54195__$2,temp__5720__auto__,p_sort_by,p_desc_QMARK_,select_QMARK_,_STAR_sort_by_item,_STAR_desc_QMARK_,sort_by_item,result__$1,result__$2,clock_time_total,query_properties,keys,included_keys,keys__$1,desc_QMARK_,result__$3,map__54187,map__54187__$1,page_QMARK_))
;
return iter__5520__auto__(keys__$1);
})())]);
})(),frontend$components$query_table$iter__54194(cljs.core.rest(s__54195__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(result__$3);
})())])])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query-table","sort-by-item","frontend.components.query-table/sort-by-item",1756589087)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.query-table","desc?","frontend.components.query-table/desc?",-2115901141)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.query-table","select?","frontend.components.query-table/select?",257289424))], null),"frontend.components.query-table/result-table");

//# sourceMappingURL=frontend.components.query_table.js.map
