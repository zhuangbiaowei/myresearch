goog.provide('frontend.extensions.zotero');
frontend.extensions.zotero.term_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
frontend.extensions.zotero.debounce_chan_mult = cljs.core.async.mult(frontend.extensions.zotero.api.debounce(frontend.extensions.zotero.term_chan,(500)));
frontend.extensions.zotero.zotero_search_item = rum.core.lazy_build(rum.core.build_defc,(function (p__55377,id){
var map__55378 = p__55377;
var map__55378__$1 = cljs.core.__destructure_map(map__55378);
var item = map__55378__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55378__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vec__55379 = rum.core.use_state(false);
var is_creating_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55379,(0),null);
var set_is_creating_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55379,(1),null);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
var type = new cljs.core.Keyword(null,"item-type","item-type",-73995695).cljs$core$IFn$_invoke$arity$1(data);
var abstract$ = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968).cljs$core$IFn$_invoke$arity$1(data),(0),(200)),"..."].join('');
return daiquiri.core.create_element("div",{'onClick':(function (){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55391){
var state_val_55392 = (state_55391[(1)]);
if((state_val_55392 === (1))){
var inst_55382 = (set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_is_creating_page_BANG_.call(null,true));
var inst_55383 = [new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027)];
var inst_55384 = [id];
var inst_55385 = cljs.core.PersistentHashMap.fromArrays(inst_55383,inst_55384);
var inst_55386 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(item,inst_55385);
var state_55391__$1 = (function (){var statearr_55393 = state_55391;
(statearr_55393[(7)] = inst_55382);

return statearr_55393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55391__$1,(2),inst_55386);
} else {
if((state_val_55392 === (2))){
var inst_55388 = (state_55391[(2)]);
var inst_55389 = (set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_is_creating_page_BANG_.call(null,false));
var state_55391__$1 = (function (){var statearr_55394 = state_55391;
(statearr_55394[(8)] = inst_55388);

return statearr_55394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55391__$1,inst_55389);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_55395 = [null,null,null,null,null,null,null,null,null];
(statearr_55395[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_55395[(1)] = (1));

return statearr_55395;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_55391){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55391);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55396){var ex__27576__auto__ = e55396;
var statearr_55397_55777 = state_55391;
(statearr_55397_55777[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55391[(4)]))){
var statearr_55398_55778 = state_55391;
(statearr_55398_55778[(1)] = cljs.core.first((state_55391[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55779 = state_55391;
state_55391 = G__55779;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_55391){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_55391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55399 = f__27596__auto__();
(statearr_55399[(6)] = c__27595__auto__);

return statearr_55399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}),'className':"zotero-search-item px-2 py-4 border-b cursor-pointer border-solid last:border-none relative"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold.mb-1.mr-1","span.font-bold.mb-1.mr-1",469152989),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zotero-search-item-type.text-xs.p-1.rounded","span.zotero-search-item-type.text-xs.p-1.rounded",1831300718),type], null)], null)], null),(function (){var attrs55400 = abstract$;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs55400))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs55400], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs55400))?null:[attrs55400]));
})()], null)),(cljs.core.truth_(is_creating_page)?daiquiri.core.create_element("div",{'className':"zotero-search-item-loading-indicator"},[(function (){var attrs55401 = frontend.components.svg.refresh;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs55401))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["animate-spin-reverse"], null)], null),attrs55401], 0))):{'className':"animate-spin-reverse"}),((cljs.core.map_QMARK_(attrs55401))?null:[daiquiri.interpreter.interpret(attrs55401)]));
})()]):null)]);
}),null,"frontend.extensions.zotero/zotero-search-item");
frontend.extensions.zotero.zotero_search = rum.core.lazy_build(rum.core.build_defc,(function (id){
var vec__55402 = rum.core.use_state("");
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55402,(0),null);
var set_term_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55402,(1),null);
var vec__55405 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var search_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55405,(0),null);
var set_search_result_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55405,(1),null);
var vec__55408 = rum.core.use_state("");
var prev_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55408,(0),null);
var set_prev_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55408,(1),null);
var vec__55411 = rum.core.use_state("");
var next_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55411,(0),null);
var set_next_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55411,(1),null);
var vec__55414 = rum.core.use_state("");
var prev_search_term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55414,(0),null);
var set_prev_search_term_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55414,(1),null);
var vec__55417 = rum.core.use_state(null);
var search_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55417,(0),null);
var set_search_error_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55417,(1),null);
var vec__55420 = rum.core.use_state(false);
var is_searching = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55420,(0),null);
var set_is_searching_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55420,(1),null);
var search_fn = (function (s_term,start){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55451){
var state_val_55452 = (state_55451[(1)]);
if((state_val_55452 === (1))){
var inst_55423 = clojure.string.blank_QMARK_(s_term);
var state_55451__$1 = state_55451;
if(inst_55423){
var statearr_55453_55780 = state_55451__$1;
(statearr_55453_55780[(1)] = (2));

} else {
var statearr_55454_55781 = state_55451__$1;
(statearr_55454_55781[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55452 === (2))){
var state_55451__$1 = state_55451;
var statearr_55455_55782 = state_55451__$1;
(statearr_55455_55782[(2)] = null);

(statearr_55455_55782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55452 === (3))){
var inst_55426 = (set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_is_searching_BANG_.call(null,true));
var inst_55428 = frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2(s_term,start);
var state_55451__$1 = (function (){var statearr_55456 = state_55451;
(statearr_55456[(7)] = inst_55426);

return statearr_55456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55451__$1,(5),inst_55428);
} else {
if((state_val_55452 === (4))){
var inst_55449 = (state_55451[(2)]);
var state_55451__$1 = state_55451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55451__$1,inst_55449);
} else {
if((state_val_55452 === (5))){
var inst_55431 = (state_55451[(8)]);
var inst_55430 = (state_55451[(2)]);
var inst_55431__$1 = cljs.core.__destructure_map(inst_55430);
var inst_55432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55431__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_55433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55431__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_55434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55431__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_55435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55431__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_55436 = inst_55432 === false;
var state_55451__$1 = (function (){var statearr_55457 = state_55451;
(statearr_55457[(9)] = inst_55435);

(statearr_55457[(10)] = inst_55434);

(statearr_55457[(8)] = inst_55431__$1);

(statearr_55457[(11)] = inst_55433);

return statearr_55457;
})();
if(cljs.core.truth_(inst_55436)){
var statearr_55458_55783 = state_55451__$1;
(statearr_55458_55783[(1)] = (6));

} else {
var statearr_55459_55784 = state_55451__$1;
(statearr_55459_55784[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55452 === (6))){
var inst_55431 = (state_55451[(8)]);
var inst_55438 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_55431);
var inst_55439 = (set_search_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_error_BANG_.cljs$core$IFn$_invoke$arity$1(inst_55438) : set_search_error_BANG_.call(null,inst_55438));
var state_55451__$1 = state_55451;
var statearr_55460_55785 = state_55451__$1;
(statearr_55460_55785[(2)] = inst_55439);

(statearr_55460_55785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55452 === (7))){
var inst_55435 = (state_55451[(9)]);
var inst_55434 = (state_55451[(10)]);
var inst_55433 = (state_55451[(11)]);
var inst_55441 = (set_prev_search_term_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prev_search_term_BANG_.cljs$core$IFn$_invoke$arity$1(s_term) : set_prev_search_term_BANG_.call(null,s_term));
var inst_55442 = (set_next_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_next_page_BANG_.cljs$core$IFn$_invoke$arity$1(inst_55433) : set_next_page_BANG_.call(null,inst_55433));
var inst_55443 = (set_prev_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prev_page_BANG_.cljs$core$IFn$_invoke$arity$1(inst_55434) : set_prev_page_BANG_.call(null,inst_55434));
var inst_55444 = (set_search_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_result_BANG_.cljs$core$IFn$_invoke$arity$1(inst_55435) : set_search_result_BANG_.call(null,inst_55435));
var state_55451__$1 = (function (){var statearr_55461 = state_55451;
(statearr_55461[(12)] = inst_55441);

(statearr_55461[(13)] = inst_55442);

(statearr_55461[(14)] = inst_55443);

return statearr_55461;
})();
var statearr_55462_55786 = state_55451__$1;
(statearr_55462_55786[(2)] = inst_55444);

(statearr_55462_55786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55452 === (8))){
var inst_55446 = (state_55451[(2)]);
var inst_55447 = (set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_is_searching_BANG_.call(null,false));
var state_55451__$1 = (function (){var statearr_55463 = state_55451;
(statearr_55463[(15)] = inst_55446);

return statearr_55463;
})();
var statearr_55464_55787 = state_55451__$1;
(statearr_55464_55787[(2)] = inst_55447);

(statearr_55464_55787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_55465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55465[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_55465[(1)] = (1));

return statearr_55465;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_55451){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55451);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55466){var ex__27576__auto__ = e55466;
var statearr_55467_55788 = state_55451;
(statearr_55467_55788[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55451[(4)]))){
var statearr_55468_55789 = state_55451;
(statearr_55468_55789[(1)] = cljs.core.first((state_55451[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55790 = state_55451;
state_55451 = G__55790;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_55451){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_55451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55469 = f__27596__auto__();
(statearr_55469[(6)] = c__27595__auto__);

return statearr_55469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var d_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.debounce_chan_mult,d_chan);

var c__27595__auto___55791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55480){
var state_val_55481 = (state_55480[(1)]);
if((state_val_55481 === (1))){
var state_55480__$1 = state_55480;
var statearr_55482_55792 = state_55480__$1;
(statearr_55482_55792[(2)] = null);

(statearr_55482_55792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55481 === (2))){
var state_55480__$1 = state_55480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55480__$1,(4),d_chan);
} else {
if((state_val_55481 === (3))){
var inst_55478 = (state_55480[(2)]);
var state_55480__$1 = state_55480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55480__$1,inst_55478);
} else {
if((state_val_55481 === (4))){
var inst_55472 = (state_55480[(2)]);
var inst_55473 = search_fn(inst_55472,"0");
var state_55480__$1 = state_55480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55480__$1,(5),inst_55473);
} else {
if((state_val_55481 === (5))){
var inst_55475 = (state_55480[(2)]);
var state_55480__$1 = (function (){var statearr_55483 = state_55480;
(statearr_55483[(7)] = inst_55475);

return statearr_55483;
})();
var statearr_55484_55793 = state_55480__$1;
(statearr_55484_55793[(2)] = null);

(statearr_55484_55793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_55485 = [null,null,null,null,null,null,null,null];
(statearr_55485[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_55485[(1)] = (1));

return statearr_55485;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_55480){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55480);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55486){var ex__27576__auto__ = e55486;
var statearr_55487_55794 = state_55480;
(statearr_55487_55794[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55480[(4)]))){
var statearr_55488_55795 = state_55480;
(statearr_55488_55795[(1)] = cljs.core.first((state_55480[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55796 = state_55480;
state_55480 = G__55796;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_55480){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_55480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55489 = f__27596__auto__();
(statearr_55489[(6)] = c__27595__auto___55791);

return statearr_55489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return (function (){
return cljs.core.async.untap(frontend.extensions.zotero.debounce_chan_mult,d_chan);
});
}),cljs.core.PersistentVector.EMPTY);

if(frontend.extensions.zotero.setting.valid_QMARK_()){
} else {
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"zotero-setting","zotero-setting",-1619504499)], null));

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Please setup Zotero API key and user/group id first!",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
}

return daiquiri.core.create_element("div",{'id':"zotero-search",'style':{'width':(720)},'className':"zotero-search p-4"},[daiquiri.core.create_element("div",{'className':"flex items-center mb-2"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.p-2.border.mr-2.flex-1.focus:outline-none","input.p-2.border.mr-2.flex-1.focus:outline-none",467501052),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search for your Zotero journal article (title, author, text, anything)",new cljs.core.Keyword(null,"value","value",305978217),term,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var c__27595__auto___55797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55495){
var state_val_55496 = (state_55495[(1)]);
if((state_val_55496 === (1))){
var inst_55491 = frontend.util.evalue(e);
var state_55495__$1 = state_55495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55495__$1,(2),frontend.extensions.zotero.term_chan,inst_55491);
} else {
if((state_val_55496 === (2))){
var inst_55493 = (state_55495[(2)]);
var state_55495__$1 = state_55495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55495__$1,inst_55493);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_55497 = [null,null,null,null,null,null,null];
(statearr_55497[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_55497[(1)] = (1));

return statearr_55497;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_55495){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55495);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55498){var ex__27576__auto__ = e55498;
var statearr_55499_55798 = state_55495;
(statearr_55499_55798[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55495[(4)]))){
var statearr_55500_55799 = state_55495;
(statearr_55500_55799[(1)] = cljs.core.first((state_55495[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55800 = state_55495;
state_55495 = G__55800;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_55495){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_55495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55501 = f__27596__auto__();
(statearr_55501[(6)] = c__27595__auto___55797);

return statearr_55501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


var G__55502 = frontend.util.evalue(e);
return (set_term_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_term_BANG_.cljs$core$IFn$_invoke$arity$1(G__55502) : set_term_BANG_.call(null,G__55502));
})], null)], null),daiquiri.core.create_element("span",{'style':{'visibility':(cljs.core.truth_(is_searching)?"visible":"hidden")},'className':"animate-spin-reverse"},[daiquiri.interpreter.interpret(frontend.components.svg.refresh)])], null))]),daiquiri.core.create_element("div",{'className':"h-2 text-sm text-red-400 mb-2"},[(cljs.core.truth_(search_error)?["Search error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_error)].join(''):"")]),(function (){var attrs55490 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return rum.core.with_key(frontend.extensions.zotero.zotero_search_item(item,id),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
}),search_result);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs55490))?daiquiri.interpreter.element_attributes(attrs55490):null),((cljs.core.map_QMARK_(attrs55490))?[((clojure.string.blank_QMARK_(prev_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("prev",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55518){
var state_val_55519 = (state_55518[(1)]);
if((state_val_55519 === (1))){
var inst_55514 = search_fn(prev_search_term,prev_page);
var state_55518__$1 = state_55518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55518__$1,(2),inst_55514);
} else {
if((state_val_55519 === (2))){
var inst_55516 = (state_55518[(2)]);
var state_55518__$1 = state_55518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55518__$1,inst_55516);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_55520 = [null,null,null,null,null,null,null];
(statearr_55520[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_55520[(1)] = (1));

return statearr_55520;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_55518){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55518);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55521){var ex__27576__auto__ = e55521;
var statearr_55522_55801 = state_55518;
(statearr_55522_55801[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55518[(4)]))){
var statearr_55523_55802 = state_55518;
(statearr_55523_55802[(1)] = cljs.core.first((state_55518[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55803 = state_55518;
state_55518 = G__55803;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_55518){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_55518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55524 = f__27596__auto__();
(statearr_55524[(6)] = c__27595__auto__);

return statearr_55524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0)))),((clojure.string.blank_QMARK_(next_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55540){
var state_val_55541 = (state_55540[(1)]);
if((state_val_55541 === (1))){
var inst_55536 = search_fn(prev_search_term,next_page);
var state_55540__$1 = state_55540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55540__$1,(2),inst_55536);
} else {
if((state_val_55541 === (2))){
var inst_55538 = (state_55540[(2)]);
var state_55540__$1 = state_55540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55540__$1,inst_55538);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_55542 = [null,null,null,null,null,null,null];
(statearr_55542[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_55542[(1)] = (1));

return statearr_55542;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_55540){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55540);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55543){var ex__27576__auto__ = e55543;
var statearr_55544_55804 = state_55540;
(statearr_55544_55804[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55540[(4)]))){
var statearr_55545_55805 = state_55540;
(statearr_55545_55805[(1)] = cljs.core.first((state_55540[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55806 = state_55540;
state_55540 = G__55806;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_55540){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_55540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55546 = f__27596__auto__();
(statearr_55546[(6)] = c__27595__auto__);

return statearr_55546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0))))]:[daiquiri.interpreter.interpret(attrs55490),((clojure.string.blank_QMARK_(prev_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("prev",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55562){
var state_val_55563 = (state_55562[(1)]);
if((state_val_55563 === (1))){
var inst_55558 = search_fn(prev_search_term,prev_page);
var state_55562__$1 = state_55562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55562__$1,(2),inst_55558);
} else {
if((state_val_55563 === (2))){
var inst_55560 = (state_55562[(2)]);
var state_55562__$1 = state_55562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55562__$1,inst_55560);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_55564 = [null,null,null,null,null,null,null];
(statearr_55564[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_55564[(1)] = (1));

return statearr_55564;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_55562){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55562);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55565){var ex__27576__auto__ = e55565;
var statearr_55566_55807 = state_55562;
(statearr_55566_55807[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55562[(4)]))){
var statearr_55567_55808 = state_55562;
(statearr_55567_55808[(1)] = cljs.core.first((state_55562[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55809 = state_55562;
state_55562 = G__55809;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_55562){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_55562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55568 = f__27596__auto__();
(statearr_55568[(6)] = c__27595__auto__);

return statearr_55568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0)))),((clojure.string.blank_QMARK_(next_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55584){
var state_val_55585 = (state_55584[(1)]);
if((state_val_55585 === (1))){
var inst_55580 = search_fn(prev_search_term,next_page);
var state_55584__$1 = state_55584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55584__$1,(2),inst_55580);
} else {
if((state_val_55585 === (2))){
var inst_55582 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55584__$1,inst_55582);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_55586 = [null,null,null,null,null,null,null];
(statearr_55586[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_55586[(1)] = (1));

return statearr_55586;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_55584){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55584);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55587){var ex__27576__auto__ = e55587;
var statearr_55588_55810 = state_55584;
(statearr_55588_55810[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55584[(4)]))){
var statearr_55589_55811 = state_55584;
(statearr_55589_55811[(1)] = cljs.core.first((state_55584[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55812 = state_55584;
state_55584 = G__55812;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_55584){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_55584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55590 = f__27596__auto__();
(statearr_55590[(6)] = c__27595__auto__);

return statearr_55590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0))))]));
})()]);
}),null,"frontend.extensions.zotero/zotero-search");
frontend.extensions.zotero.user_or_group_setting = rum.core.lazy_build(rum.core.build_defcs,(function (state){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_type"},["Zotero user or group?"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("select",{'value':cljs.core.name(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type","type",1174270348))),'onChange':rum.core.mark_sync_update((function (e){
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(frontend.util.evalue(e)));
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"type","type",1174270348),type);
})),'className':"form-select"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$extensions$zotero$iter__55593(s__55594){
return (new cljs.core.LazySeq(null,(function (){
var s__55594__$1 = s__55594;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55594__$1);
if(temp__5720__auto__){
var s__55594__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55594__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__55594__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__55596 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__55595 = (0);
while(true){
if((i__55595 < size__5519__auto__)){
var type = cljs.core._nth(c__5518__auto__,i__55595);
cljs.core.chunk_append(b__55596,daiquiri.core.create_element("option",{'key':type,'value':type},[clojure.string.capitalize(type)]));

var G__55813 = (i__55595 + (1));
i__55595 = G__55813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55596),frontend$extensions$zotero$iter__55593(cljs.core.chunk_rest(s__55594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55596),null);
}
} else {
var type = cljs.core.first(s__55594__$2);
return cljs.core.cons(daiquiri.core.create_element("option",{'key':type,'value':type},[clojure.string.capitalize(type)]),frontend$extensions$zotero$iter__55593(cljs.core.rest(s__55594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"group","group",582596132)], null)));
})())])])])]),daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_type_id"},["User or Group ID"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type-id","type-id",2030062700)),'placeholder':"User/Group id",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"type-id","type-id",2030062700),frontend.util.evalue(e));
}),'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795).cljs$core$IFn$_invoke$arity$1(state),frontend.util.evalue(e));
})),'className':"form-input block"},[])])])]),(((((!(clojure.string.blank_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795).cljs$core$IFn$_invoke$arity$1(state))))))) && (cljs.core.not(cljs.core.re_matches(/^\d+$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795).cljs$core$IFn$_invoke$arity$1(state))))))))?daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500","p.text-red-500",1193745313),"User ID is different from username and can be found on the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.zotero.org/settings/keys",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"https://www.zotero.org/settings/keys"], null)," page, it's a number of digits"], null))):null)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type-id","type-id",2030062700)),new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795)),rum.core.reactive], null),"frontend.extensions.zotero/user-or-group-setting");
frontend.extensions.zotero.overwrite_mode_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_overwrite_mode"},["Overwrite existing item page?"]),daiquiri.core.create_element("div",null,[(function (){var attrs55602 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs55602))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs55602], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs55602))?null:[daiquiri.interpreter.interpret(attrs55602)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409)))?daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500","p.text-red-500",1193745313),"Dangerous! This will delete and recreate Zotero existing page! Make sure to backup your notes first in case something goes wrong. Make sure you don't put any personal item in previous Zotero page and it's OK to overwrite the page!"], null))):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/overwrite-mode-setting");
frontend.extensions.zotero.attachment_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_include_attachment_links"},["Include attachment links?"]),daiquiri.core.create_element("div",null,[(function (){var attrs55605 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs55605))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs55605], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs55605))?null:[daiquiri.interpreter.interpret(attrs55605)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_attachments_block_text"},["Attachment under block of:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244)),'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_linked_attachment_base_directory"},["Zotero linked attachment base directory",daiquiri.core.create_element("a",{'title':"If you store attached files in Zotero \u2014 the default \u2014 this setting does not affect you. It only applies to linked files. If you're using the ZotFile plugin to help with a linked-file workflow, you should configure it to store linked files within the base directory you've configured. Click to learn more.",'href':"https://www.zotero.org/support/preferences/advanced#linked_attachment_base_directory",'target':"_blank",'className':"ml-2"},[daiquiri.interpreter.interpret(frontend.components.svg.info())])]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)),'placeholder':"/Users/Sarah/Dropbox",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/attachment-setting");
frontend.extensions.zotero.prefer_citekey_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'title':"Make sure to install Better BibTeX and pin your item first",'className':"title w-72",'htmlFor':"zotero_prefer_citekey"},["Use citekey as your page title?"]),daiquiri.core.create_element("div",null,[(function (){var attrs55610 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs55610))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs55610], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs55610))?null:[daiquiri.interpreter.interpret(attrs55610)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/prefer-citekey-setting");
frontend.extensions.zotero.api_key_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_api_key"},["Zotero API key"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.api_key(),'placeholder':"Please enter your Zotero API key",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_api_key(frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/api-key-setting");
frontend.extensions.zotero.notes_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_include_notes"},["Include notes?"]),daiquiri.core.create_element("div",null,[(function (){var attrs55615 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs55615))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs55615], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs55615))?null:[daiquiri.interpreter.interpret(attrs55615)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title",'htmlFor':"zotero_notes_block_text"},["Notes under block of:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518)),'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/notes-setting");
frontend.extensions.zotero.page_prefix_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title",'htmlFor':"zotero_page_prefix"},["Insert page name with prefix:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"page-insert-prefix","page-insert-prefix",1646035089)),'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"page-insert-prefix","page-insert-prefix",1646035089),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/page-prefix-setting");
frontend.extensions.zotero.extra_tags_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'title':"Extra tags to add for every imported page. Separate by comma, or leave it empty.",'className':"title",'htmlFor':"zotero_extra_tags"},["Extra tags to add:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"extra-tags","extra-tags",-1152617311)),'placeholder':"tag1,tag2,tag3",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"extra-tags","extra-tags",-1152617311),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/extra-tags-setting");
frontend.extensions.zotero.data_directory_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title",'htmlFor':"zotero_data_directory"},["Zotero data directory",daiquiri.core.create_element("a",{'title':"Set Zotero data directory to open pdf attachment in Logseq. Click to learn more.",'href':"https://www.zotero.org/support/zotero_data",'target':"_blank",'className':"ml-2"},[daiquiri.interpreter.interpret(frontend.components.svg.info())])]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088)),'placeholder':"/Users/<username>/Zotero",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/data-directory-setting");
frontend.extensions.zotero.profile_name_dialog_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,profile_STAR_,close_fn){
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.extensions.zotero","input","frontend.extensions.zotero/input",168338460));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"text-lg leading-6 font-medium"},["Please enter your profile name"])])]),daiquiri.core.create_element("input",{'autoFocus':true,'defaultValue':"",'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(input,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},[]),daiquiri.core.create_element("div",{'className':"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},[daiquiri.core.create_element("span",{'className':"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
var profile_name = clojure.string.trim(cljs.core.deref(input));
if(clojure.string.blank_QMARK_(profile_name)){
} else {
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.add_profile(profile_name),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.set_profile(profile_name),(function (___$1){
return promesa.protocols._promise(cljs.core.reset_BANG_(profile_STAR_,profile_name));
}));
}));
}));
}

return frontend.state.close_modal_BANG_();
}),'className':"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-720 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5 ui__modal-enter"},["Submit"])]),daiquiri.core.create_element("span",{'className':"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},[daiquiri.core.create_element("button",{'type':"button",'onClick':close_fn,'className':"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},["Cancel"])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.extensions.zotero","input","frontend.extensions.zotero/input",168338460))], null),"frontend.extensions.zotero/profile-name-dialog-inner");
frontend.extensions.zotero.zotero_profile_selector = rum.core.lazy_build(rum.core.build_defc,(function (profile_STAR_){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"mr-32",'htmlFor':"profile-select"},["Choose a profile:"]),daiquiri.core.create_element("span",{'className':"justify-evenly"},[daiquiri.core.create_element("select",{'value':cljs.core.deref(profile_STAR_),'onChange':rum.core.mark_sync_update((function (e){
var temp__5720__auto__ = frontend.util.evalue(e);
if(cljs.core.truth_(temp__5720__auto__)){
var profile = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.set_profile(profile),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(profile_STAR_,profile));
}));
}));
} else {
return null;
}
}))},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null);
}),frontend.extensions.zotero.setting.all_profiles()))]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("New profile",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"class","class",-2030961996),"ml-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (close_fn){
return frontend.extensions.zotero.profile_name_dialog_inner(profile_STAR_,close_fn);
}));
})], 0))),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Delete profile!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"background","background",-863952629),"red",new cljs.core.Keyword(null,"class","class",-2030961996),"ml-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.remove_profile(cljs.core.deref(profile_STAR_)),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(profile_STAR_,frontend.extensions.zotero.setting.profile()));
}));
}));
})], 0)))])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/zotero-profile-selector");
frontend.extensions.zotero.add_all_items = rum.core.lazy_build(rum.core.build_defcs,(function (state){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_import_all"},["Add all zotero items"]),(function (){var attrs55720 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55744){
var state_val_55745 = (state_55744[(1)]);
if((state_val_55745 === (1))){
var inst_55721 = new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state);
var inst_55722 = cljs.core.reset_BANG_(inst_55721,"Fetching..");
var inst_55723 = frontend.extensions.zotero.api.all_top_items_count();
var state_55744__$1 = (function (){var statearr_55746 = state_55744;
(statearr_55746[(7)] = inst_55722);

return statearr_55746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55744__$1,(2),inst_55723);
} else {
if((state_val_55745 === (2))){
var inst_55725 = (state_55744[(8)]);
var inst_55725__$1 = (state_55744[(2)]);
var inst_55726 = new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state);
var inst_55727 = cljs.core.reset_BANG_(inst_55726,"Add all");
var inst_55728 = ["This will import all your zotero items and add total number of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55725__$1)," pages. Do you wish to continue?"].join('');
var inst_55729 = window.confirm(inst_55728);
var state_55744__$1 = (function (){var statearr_55747 = state_55744;
(statearr_55747[(9)] = inst_55727);

(statearr_55747[(8)] = inst_55725__$1);

return statearr_55747;
})();
if(cljs.core.truth_(inst_55729)){
var statearr_55748_55828 = state_55744__$1;
(statearr_55748_55828[(1)] = (3));

} else {
var statearr_55749_55829 = state_55744__$1;
(statearr_55749_55829[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55745 === (3))){
var inst_55725 = (state_55744[(8)]);
var inst_55731 = new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state);
var inst_55732 = cljs.core.reset_BANG_(inst_55731,inst_55725);
var inst_55733 = new cljs.core.Keyword("frontend.extensions.zotero","progress","frontend.extensions.zotero/progress",-1187409602).cljs$core$IFn$_invoke$arity$1(state);
var inst_55734 = frontend.extensions.zotero.handler.add_all(inst_55733);
var state_55744__$1 = (function (){var statearr_55750 = state_55744;
(statearr_55750[(10)] = inst_55732);

return statearr_55750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55744__$1,(6),inst_55734);
} else {
if((state_val_55745 === (4))){
var state_55744__$1 = state_55744;
var statearr_55751_55830 = state_55744__$1;
(statearr_55751_55830[(2)] = null);

(statearr_55751_55830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55745 === (5))){
var inst_55742 = (state_55744[(2)]);
var state_55744__$1 = state_55744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55744__$1,inst_55742);
} else {
if((state_val_55745 === (6))){
var inst_55736 = (state_55744[(2)]);
var inst_55737 = new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state);
var inst_55738 = cljs.core.reset_BANG_(inst_55737,false);
var inst_55739 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Successfully added all items!",new cljs.core.Keyword(null,"success","success",1890645906));
var state_55744__$1 = (function (){var statearr_55752 = state_55744;
(statearr_55752[(11)] = inst_55738);

(statearr_55752[(12)] = inst_55736);

return statearr_55752;
})();
var statearr_55753_55831 = state_55744__$1;
(statearr_55753_55831[(2)] = inst_55739);

(statearr_55753_55831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_55754 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55754[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_55754[(1)] = (1));

return statearr_55754;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_55744){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55744);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55755){var ex__27576__auto__ = e55755;
var statearr_55756_55832 = state_55744;
(statearr_55756_55832[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55744[(4)]))){
var statearr_55757_55833 = state_55744;
(statearr_55757_55833[(1)] = cljs.core.first((state_55744[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55834 = state_55744;
state_55744 = G__55834;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_55744){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_55744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55758 = f__27596__auto__();
(statearr_55758[(6)] = c__27595__auto__);

return statearr_55758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs55720))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1","sm:mt-0","sm:col-span-2"], null)], null),attrs55720], 0))):{'className':"mt-1 sm:mt-0 sm:col-span-2"}),((cljs.core.map_QMARK_(attrs55720))?null:[daiquiri.interpreter.interpret(attrs55720)]));
})()]),daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),"If you have a lot of items in Zotero, adding them all can slow down Logseq. You can type /zotero to import specific item on demand instead.")),(cljs.core.truth_(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"bg-greenred-200 py-3 rounded-lg col-span-full"},[daiquiri.core.create_element("progress",{'max':(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state)) + (30)),'value':cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","progress","frontend.extensions.zotero/progress",-1187409602).cljs$core$IFn$_invoke$arity$1(state)),'className':"w-full"},[]),"Importing items from Zotero....Please wait..."])]):null)]);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.extensions.zotero","progress","frontend.extensions.zotero/progress",-1187409602)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901)),rum.core.local.cljs$core$IFn$_invoke$arity$2("Add all",new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561)),rum.core.reactive], null),"frontend.extensions.zotero/add-all-items");
frontend.extensions.zotero.setting_rows = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[frontend.extensions.zotero.api_key_setting(),frontend.extensions.zotero.user_or_group_setting(),frontend.extensions.zotero.prefer_citekey_setting(),frontend.extensions.zotero.attachment_setting(),frontend.extensions.zotero.notes_setting(),frontend.extensions.zotero.page_prefix_setting(),frontend.extensions.zotero.extra_tags_setting(),frontend.extensions.zotero.data_directory_setting(),frontend.extensions.zotero.overwrite_mode_setting()]);
}),null,"frontend.extensions.zotero/setting-rows");
frontend.extensions.zotero.settings = rum.core.lazy_build(rum.core.build_defcs,(function (state){
return daiquiri.core.create_element("div",{'className':"zotero-settings"},[daiquiri.core.create_element("h1",{'className':"mb-4 text-4xl font-bold mb-8"},["Zotero Settings"]),frontend.extensions.zotero.zotero_profile_selector(new cljs.core.Keyword("frontend.extensions.zotero","profile","frontend.extensions.zotero/profile",100514749).cljs$core$IFn$_invoke$arity$1(state)),rum.core.with_key(frontend.extensions.zotero.setting_rows(),cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","profile","frontend.extensions.zotero/profile",100514749).cljs$core$IFn$_invoke$arity$1(state))),frontend.extensions.zotero.add_all_items()]);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.all_profiles(),new cljs.core.Keyword("frontend.extensions.zotero","all-profiles","frontend.extensions.zotero/all-profiles",1393094078)),rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.profile(),new cljs.core.Keyword("frontend.extensions.zotero","profile","frontend.extensions.zotero/profile",100514749)),rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,_new_state){
var all_profiles = frontend.extensions.zotero.setting.all_profiles();
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(all_profiles,cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","all-profiles","frontend.extensions.zotero/all-profiles",1393094078).cljs$core$IFn$_invoke$arity$1(old_state)));
})], null)], null),"frontend.extensions.zotero/settings");
frontend.extensions.zotero.open_button = (function frontend$extensions$zotero$open_button(full_path){
if(clojure.string.ends_with_QMARK_(clojure.string.lower_case(full_path),"pdf")){
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("open",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5720__auto__ = frontend.extensions.pdf.assets.inflate_asset(full_path);
if(cljs.core.truth_(temp__5720__auto__)){
var current = temp__5720__auto__;
frontend.util.stop(e);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),current);
} else {
return null;
}
})], 0));
} else {
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("open",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),full_path], 0));
}
});
frontend.extensions.zotero.zotero_imported_file = rum.core.lazy_build(rum.core.build_defc,(function (item_key,filename){
if(clojure.string.blank_QMARK_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088)))){
return daiquiri.core.create_element("p",{'className':"warning"},["This is a zotero imported file, setting Zotero data directory would allow you to open the file in Logseq"]);
} else {
var filename__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(filename);
var full_path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__55767 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088));
var G__55768 = "storage";
var G__55769 = item_key;
var G__55770 = filename__$1;
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4(G__55767,G__55768,G__55769,G__55770) : frontend.util.node_path.join.call(null,G__55767,G__55768,G__55769,G__55770));
})())].join('');
return daiquiri.interpreter.interpret(frontend.extensions.zotero.open_button(full_path));
}
}),null,"frontend.extensions.zotero/zotero-imported-file");
frontend.extensions.zotero.zotero_linked_file = rum.core.lazy_build(rum.core.build_defc,(function (path){
if(clojure.string.blank_QMARK_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)))){
return daiquiri.core.create_element("p",{'className':"warning"},["This is a zotero linked file, setting Zotero linked attachment base directory would allow you to open the file in Logseq"]);
} else {
var path__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(path);
var full_path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__55775 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118));
var G__55776 = clojure.string.replace_first(path__$1,"attachments:","");
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__55775,G__55776) : frontend.util.node_path.join.call(null,G__55775,G__55776));
})())].join('');
return daiquiri.interpreter.interpret(frontend.extensions.zotero.open_button(full_path));
}
}),null,"frontend.extensions.zotero/zotero-linked-file");

//# sourceMappingURL=frontend.extensions.zotero.js.map
