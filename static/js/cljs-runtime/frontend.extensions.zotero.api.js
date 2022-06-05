goog.provide('frontend.extensions.zotero.api');
frontend.extensions.zotero.api.config = (function frontend$extensions$zotero$api$config(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"api-version","api-version",108847181),(3),new cljs.core.Keyword(null,"base","base",185279322),"https://api.zotero.org",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(150000),new cljs.core.Keyword(null,"api-key","api-key",1037904031),frontend.extensions.zotero.setting.api_key(),new cljs.core.Keyword(null,"type","type",1174270348),frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"type-id","type-id",2030062700),frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type-id","type-id",2030062700))], null);
});
/**
 * Creates a channel which will change put a new value to the output channel
 * after timeout has passed. Each value change resets the timeout. If value
 * changes more frequently only the latest value is put out.
 * When input channel closes, the output channel is closed.
 */
frontend.extensions.zotero.api.debounce = (function frontend$extensions$zotero$api$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__27595__auto___54870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54569){
var state_val_54570 = (state_54569[(1)]);
if((state_val_54570 === (7))){
var inst_54513 = (state_54569[(2)]);
var state_54569__$1 = state_54569;
var statearr_54571_54871 = state_54569__$1;
(statearr_54571_54871[(2)] = inst_54513);

(statearr_54571_54871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (20))){
var state_54569__$1 = state_54569;
var statearr_54572_54872 = state_54569__$1;
(statearr_54572_54872[(2)] = null);

(statearr_54572_54872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (1))){
var inst_54508 = null;
var state_54569__$1 = (function (){var statearr_54573 = state_54569;
(statearr_54573[(7)] = inst_54508);

return statearr_54573;
})();
var statearr_54574_54873 = state_54569__$1;
(statearr_54574_54873[(2)] = null);

(statearr_54574_54873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (4))){
var state_54569__$1 = state_54569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54569__$1,(7),in$);
} else {
if((state_val_54570 === (15))){
var inst_54516 = (state_54569[(8)]);
var inst_54530 = (state_54569[(9)]);
var inst_54552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54530,(0),null);
var state_54569__$1 = (function (){var statearr_54575 = state_54569;
(statearr_54575[(10)] = inst_54552);

return statearr_54575;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54569__$1,(18),out,inst_54516);
} else {
if((state_val_54570 === (21))){
var inst_54561 = (state_54569[(2)]);
var state_54569__$1 = state_54569;
var statearr_54577_54874 = state_54569__$1;
(statearr_54577_54874[(2)] = inst_54561);

(statearr_54577_54874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (13))){
var inst_54543 = cljs.core.async.close_BANG_(out);
var state_54569__$1 = state_54569;
var statearr_54578_54875 = state_54569__$1;
(statearr_54578_54875[(2)] = inst_54543);

(statearr_54578_54875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (6))){
var inst_54517 = (state_54569[(11)]);
var inst_54525 = (state_54569[(12)]);
var inst_54516 = (state_54569[(2)]);
var inst_54517__$1 = cljs.core.async.timeout(ms);
var inst_54525__$1 = in$;
var inst_54526 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54527 = [inst_54525__$1,inst_54517__$1];
var inst_54528 = (new cljs.core.PersistentVector(null,2,(5),inst_54526,inst_54527,null));
var state_54569__$1 = (function (){var statearr_54579 = state_54569;
(statearr_54579[(11)] = inst_54517__$1);

(statearr_54579[(8)] = inst_54516);

(statearr_54579[(12)] = inst_54525__$1);

return statearr_54579;
})();
return cljs.core.async.ioc_alts_BANG_(state_54569__$1,(8),inst_54528);
} else {
if((state_val_54570 === (17))){
var inst_54563 = (state_54569[(2)]);
var state_54569__$1 = state_54569;
var statearr_54580_54876 = state_54569__$1;
(statearr_54580_54876[(2)] = inst_54563);

(statearr_54580_54876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (3))){
var inst_54567 = (state_54569[(2)]);
var state_54569__$1 = state_54569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54569__$1,inst_54567);
} else {
if((state_val_54570 === (12))){
var inst_54539 = (state_54569[(13)]);
var inst_54508 = inst_54539;
var state_54569__$1 = (function (){var statearr_54581 = state_54569;
(statearr_54581[(7)] = inst_54508);

return statearr_54581;
})();
var statearr_54582_54877 = state_54569__$1;
(statearr_54582_54877[(2)] = null);

(statearr_54582_54877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (2))){
var inst_54508 = (state_54569[(7)]);
var inst_54510 = (inst_54508 == null);
var state_54569__$1 = state_54569;
if(cljs.core.truth_(inst_54510)){
var statearr_54583_54878 = state_54569__$1;
(statearr_54583_54878[(1)] = (4));

} else {
var statearr_54584_54879 = state_54569__$1;
(statearr_54584_54879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (19))){
var inst_54531 = (state_54569[(14)]);
var state_54569__$1 = state_54569;
var statearr_54585_54880 = state_54569__$1;
(statearr_54585_54880[(2)] = inst_54531);

(statearr_54585_54880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (11))){
var inst_54565 = (state_54569[(2)]);
var state_54569__$1 = state_54569;
var statearr_54586_54881 = state_54569__$1;
(statearr_54586_54881[(2)] = inst_54565);

(statearr_54586_54881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (9))){
var inst_54539 = (state_54569[(13)]);
var inst_54530 = (state_54569[(9)]);
var inst_54539__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54530,(0),null);
var state_54569__$1 = (function (){var statearr_54587 = state_54569;
(statearr_54587[(13)] = inst_54539__$1);

return statearr_54587;
})();
if(cljs.core.truth_(inst_54539__$1)){
var statearr_54588_54882 = state_54569__$1;
(statearr_54588_54882[(1)] = (12));

} else {
var statearr_54589_54883 = state_54569__$1;
(statearr_54589_54883[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (5))){
var inst_54508 = (state_54569[(7)]);
var state_54569__$1 = state_54569;
var statearr_54590_54884 = state_54569__$1;
(statearr_54590_54884[(2)] = inst_54508);

(statearr_54590_54884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (14))){
var inst_54545 = (state_54569[(2)]);
var state_54569__$1 = state_54569;
var statearr_54591_54885 = state_54569__$1;
(statearr_54591_54885[(2)] = inst_54545);

(statearr_54591_54885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (16))){
var inst_54532 = (state_54569[(15)]);
var inst_54557 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54532,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_54569__$1 = state_54569;
if(inst_54557){
var statearr_54595_54886 = state_54569__$1;
(statearr_54595_54886[(1)] = (19));

} else {
var statearr_54596_54887 = state_54569__$1;
(statearr_54596_54887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (10))){
var inst_54517 = (state_54569[(11)]);
var inst_54532 = (state_54569[(15)]);
var inst_54547 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54532,inst_54517);
var state_54569__$1 = state_54569;
if(inst_54547){
var statearr_54598_54888 = state_54569__$1;
(statearr_54598_54888[(1)] = (15));

} else {
var statearr_54599_54889 = state_54569__$1;
(statearr_54599_54889[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (18))){
var inst_54554 = (state_54569[(2)]);
var inst_54508 = null;
var state_54569__$1 = (function (){var statearr_54600 = state_54569;
(statearr_54600[(16)] = inst_54554);

(statearr_54600[(7)] = inst_54508);

return statearr_54600;
})();
var statearr_54601_54890 = state_54569__$1;
(statearr_54601_54890[(2)] = null);

(statearr_54601_54890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54570 === (8))){
var inst_54532 = (state_54569[(15)]);
var inst_54530 = (state_54569[(9)]);
var inst_54525 = (state_54569[(12)]);
var inst_54530__$1 = (state_54569[(2)]);
var inst_54531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54530__$1,(0),null);
var inst_54532__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54530__$1,(1),null);
var inst_54533 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54532__$1,inst_54525);
var state_54569__$1 = (function (){var statearr_54602 = state_54569;
(statearr_54602[(14)] = inst_54531);

(statearr_54602[(15)] = inst_54532__$1);

(statearr_54602[(9)] = inst_54530__$1);

return statearr_54602;
})();
if(inst_54533){
var statearr_54603_54891 = state_54569__$1;
(statearr_54603_54891[(1)] = (9));

} else {
var statearr_54604_54892 = state_54569__$1;
(statearr_54604_54892[(1)] = (10));

}

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
});
return (function() {
var frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____0 = (function (){
var statearr_54605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54605[(0)] = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__);

(statearr_54605[(1)] = (1));

return statearr_54605;
});
var frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1 = (function (state_54569){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54569);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54606){var ex__27576__auto__ = e54606;
var statearr_54607_54893 = state_54569;
(statearr_54607_54893[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54569[(4)]))){
var statearr_54608_54894 = state_54569;
(statearr_54608_54894[(1)] = cljs.core.first((state_54569[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54895 = state_54569;
state_54569 = G__54895;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__ = function(state_54569){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1.call(this,state_54569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$debounce_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54609 = f__27596__auto__();
(statearr_54609[(6)] = c__27595__auto___54870);

return statearr_54609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return out;
});
frontend.extensions.zotero.api.parse_start = (function frontend$extensions$zotero$api$parse_start(headers,next_or_prev){
var inclue_text = (function (){var G__54611 = next_or_prev;
var G__54611__$1 = (((G__54611 instanceof cljs.core.Keyword))?G__54611.fqn:null);
switch (G__54611__$1) {
case "next":
return "rel=\"next\"";

break;
case "prev":
return "rel=\"prev\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54611__$1)].join('')));

}
})();
var links = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,headers)),",");
var next_link = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (l){
return clojure.string.includes_QMARK_(l,inclue_text);
}),links));
if(cljs.core.truth_(next_link)){
var start = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(next_link,"<");
var end = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(next_link,">;");
var next_url = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(next_link,(start + (1)),end);
var or__5043__auto__ = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(cljs_http.client.parse_url(next_url)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "0";
}
} else {
return null;
}
});
frontend.extensions.zotero.api.results_count = (function frontend$extensions$zotero$api$results_count(headers){
return frontend.util.safe_parse_int(new cljs.core.Keyword(null,"total-results","total-results",-1147068713).cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,headers)));
});
frontend.extensions.zotero.api.get_STAR_ = (function frontend$extensions$zotero$api$get_STAR_(var_args){
var G__54613 = arguments.length;
switch (G__54613) {
case 2:
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (config,api){
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(config,api,null);
}));

(frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (config,api,query_params){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54673){
var state_val_54674 = (state_54673[(1)]);
if((state_val_54674 === (7))){
var inst_54641 = (state_54673[(7)]);
var state_54673__$1 = state_54673;
var statearr_54675_54898 = state_54673__$1;
(statearr_54675_54898[(2)] = inst_54641);

(statearr_54675_54898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (1))){
var inst_54617 = config;
var inst_54618 = cljs.core.__destructure_map(inst_54617);
var inst_54619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54618,new cljs.core.Keyword(null,"api-version","api-version",108847181));
var inst_54620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54618,new cljs.core.Keyword(null,"base","base",185279322));
var inst_54621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54618,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_54622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54618,new cljs.core.Keyword(null,"type-id","type-id",2030062700));
var inst_54623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54618,new cljs.core.Keyword(null,"api-key","api-key",1037904031));
var inst_54624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54618,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_54625 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54621,new cljs.core.Keyword(null,"user","user",1532431356));
var state_54673__$1 = (function (){var statearr_54676 = state_54673;
(statearr_54676[(8)] = inst_54619);

(statearr_54676[(9)] = inst_54620);

(statearr_54676[(10)] = inst_54622);

(statearr_54676[(11)] = inst_54624);

(statearr_54676[(12)] = inst_54623);

return statearr_54676;
})();
if(inst_54625){
var statearr_54678_54899 = state_54673__$1;
(statearr_54678_54899[(1)] = (3));

} else {
var statearr_54680_54900 = state_54673__$1;
(statearr_54680_54900[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (4))){
var state_54673__$1 = state_54673;
var statearr_54681_54901 = state_54673__$1;
(statearr_54681_54901[(2)] = "/groups/");

(statearr_54681_54901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (15))){
var inst_54649 = (state_54673[(13)]);
var inst_54663 = (state_54673[(14)]);
var inst_54665 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54663,new cljs.core.Keyword(null,"count","count",2139924085),inst_54649);
var state_54673__$1 = state_54673;
var statearr_54683_54902 = state_54673__$1;
(statearr_54683_54902[(2)] = inst_54665);

(statearr_54683_54902[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (13))){
var inst_54658 = (state_54673[(15)]);
var state_54673__$1 = state_54673;
var statearr_54684_54903 = state_54673__$1;
(statearr_54684_54903[(2)] = inst_54658);

(statearr_54684_54903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (6))){
var inst_54643 = (state_54673[(16)]);
var inst_54647 = (state_54673[(17)]);
var inst_54644 = (state_54673[(18)]);
var inst_54646 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,inst_54643);
var inst_54647__$1 = frontend.extensions.zotero.api.parse_start(inst_54644,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_54648 = frontend.extensions.zotero.api.parse_start(inst_54644,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_54649 = frontend.extensions.zotero.api.results_count(inst_54644);
var inst_54651 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_54652 = [inst_54646];
var inst_54653 = cljs.core.PersistentHashMap.fromArrays(inst_54651,inst_54652);
var state_54673__$1 = (function (){var statearr_54685 = state_54673;
(statearr_54685[(19)] = inst_54648);

(statearr_54685[(17)] = inst_54647__$1);

(statearr_54685[(13)] = inst_54649);

(statearr_54685[(20)] = inst_54653);

return statearr_54685;
})();
if(cljs.core.truth_(inst_54647__$1)){
var statearr_54686_54904 = state_54673__$1;
(statearr_54686_54904[(1)] = (9));

} else {
var statearr_54687_54905 = state_54673__$1;
(statearr_54687_54905[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (17))){
var inst_54668 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
var statearr_54690_54906 = state_54673__$1;
(statearr_54690_54906[(2)] = inst_54668);

(statearr_54690_54906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (3))){
var state_54673__$1 = state_54673;
var statearr_54691_54907 = state_54673__$1;
(statearr_54691_54907[(2)] = "/users/");

(statearr_54691_54907[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (12))){
var inst_54648 = (state_54673[(19)]);
var inst_54658 = (state_54673[(15)]);
var inst_54660 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54658,new cljs.core.Keyword(null,"prev","prev",-1597069226),inst_54648);
var state_54673__$1 = state_54673;
var statearr_54692_54908 = state_54673__$1;
(statearr_54692_54908[(2)] = inst_54660);

(statearr_54692_54908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (2))){
var inst_54641 = (state_54673[(7)]);
var inst_54640 = (state_54673[(2)]);
var inst_54641__$1 = cljs.core.__destructure_map(inst_54640);
var inst_54642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54641__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_54643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54641__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_54644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54641__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var state_54673__$1 = (function (){var statearr_54703 = state_54673;
(statearr_54703[(7)] = inst_54641__$1);

(statearr_54703[(16)] = inst_54643);

(statearr_54703[(18)] = inst_54644);

return statearr_54703;
})();
if(cljs.core.truth_(inst_54642)){
var statearr_54704_54909 = state_54673__$1;
(statearr_54704_54909[(1)] = (6));

} else {
var statearr_54705_54910 = state_54673__$1;
(statearr_54705_54910[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (11))){
var inst_54648 = (state_54673[(19)]);
var inst_54658 = (state_54673[(2)]);
var state_54673__$1 = (function (){var statearr_54706 = state_54673;
(statearr_54706[(15)] = inst_54658);

return statearr_54706;
})();
if(cljs.core.truth_(inst_54648)){
var statearr_54707_54911 = state_54673__$1;
(statearr_54707_54911[(1)] = (12));

} else {
var statearr_54708_54912 = state_54673__$1;
(statearr_54708_54912[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (9))){
var inst_54647 = (state_54673[(17)]);
var inst_54653 = (state_54673[(20)]);
var inst_54655 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54653,new cljs.core.Keyword(null,"next","next",-117701485),inst_54647);
var state_54673__$1 = state_54673;
var statearr_54709_54913 = state_54673__$1;
(statearr_54709_54913[(2)] = inst_54655);

(statearr_54709_54913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (5))){
var inst_54619 = (state_54673[(8)]);
var inst_54620 = (state_54673[(9)]);
var inst_54622 = (state_54673[(10)]);
var inst_54624 = (state_54673[(11)]);
var inst_54623 = (state_54673[(12)]);
var inst_54629 = (state_54673[(2)]);
var inst_54630 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54620),inst_54629,cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54622),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api)].join('');
var inst_54631 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_54632 = ["Zotero-API-Key","Zotero-API-Version"];
var inst_54633 = [inst_54623,inst_54619];
var inst_54634 = cljs.core.PersistentHashMap.fromArrays(inst_54632,inst_54633);
var inst_54635 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_camelCaseString,query_params);
var inst_54636 = [inst_54624,false,inst_54634,inst_54635];
var inst_54637 = cljs.core.PersistentHashMap.fromArrays(inst_54631,inst_54636);
var inst_54638 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_54630,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54637], 0));
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54673__$1,(2),inst_54638);
} else {
if((state_val_54674 === (14))){
var inst_54649 = (state_54673[(13)]);
var inst_54663 = (state_54673[(2)]);
var state_54673__$1 = (function (){var statearr_54710 = state_54673;
(statearr_54710[(14)] = inst_54663);

return statearr_54710;
})();
if(cljs.core.truth_(inst_54649)){
var statearr_54711_54914 = state_54673__$1;
(statearr_54711_54914[(1)] = (15));

} else {
var statearr_54712_54915 = state_54673__$1;
(statearr_54712_54915[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (16))){
var inst_54663 = (state_54673[(14)]);
var state_54673__$1 = state_54673;
var statearr_54713_54916 = state_54673__$1;
(statearr_54713_54916[(2)] = inst_54663);

(statearr_54713_54916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (10))){
var inst_54653 = (state_54673[(20)]);
var state_54673__$1 = state_54673;
var statearr_54714_54917 = state_54673__$1;
(statearr_54714_54917[(2)] = inst_54653);

(statearr_54714_54917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (8))){
var inst_54671 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54673__$1,inst_54671);
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
}
}
});
return (function() {
var frontend$extensions$zotero$api$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$state_machine__27573__auto____0 = (function (){
var statearr_54715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54715[(0)] = frontend$extensions$zotero$api$state_machine__27573__auto__);

(statearr_54715[(1)] = (1));

return statearr_54715;
});
var frontend$extensions$zotero$api$state_machine__27573__auto____1 = (function (state_54673){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54673);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54716){var ex__27576__auto__ = e54716;
var statearr_54717_54918 = state_54673;
(statearr_54717_54918[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54673[(4)]))){
var statearr_54718_54919 = state_54673;
(statearr_54718_54919[(1)] = cljs.core.first((state_54673[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54920 = state_54673;
state_54673 = G__54920;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$state_machine__27573__auto__ = function(state_54673){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$state_machine__27573__auto____1.call(this,state_54673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$state_machine__27573__auto____0;
frontend$extensions$zotero$api$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$state_machine__27573__auto____1;
return frontend$extensions$zotero$api$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54719 = f__27596__auto__();
(statearr_54719[(6)] = c__27595__auto__);

return statearr_54719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.extensions.zotero.api.get_STAR_.cljs$lang$maxFixedArity = 3);

frontend.extensions.zotero.api.item = (function frontend$extensions$zotero$api$item(key){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.api.config(),["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')));
});
frontend.extensions.zotero.api.all_top_items_count = (function frontend$extensions$zotero$api$all_top_items_count(){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54729){
var state_val_54730 = (state_54729[(1)]);
if((state_val_54730 === (1))){
var inst_54720 = frontend.extensions.zotero.api.config();
var inst_54721 = [new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"item-type","item-type",-73995695)];
var inst_54722 = [(1),"-attachment"];
var inst_54723 = cljs.core.PersistentHashMap.fromArrays(inst_54721,inst_54722);
var inst_54724 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_54720,"/items/top",inst_54723);
var state_54729__$1 = state_54729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54729__$1,(2),inst_54724);
} else {
if((state_val_54730 === (2))){
var inst_54726 = (state_54729[(2)]);
var inst_54727 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(inst_54726);
var state_54729__$1 = state_54729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54729__$1,inst_54727);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0 = (function (){
var statearr_54731 = [null,null,null,null,null,null,null];
(statearr_54731[(0)] = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__);

(statearr_54731[(1)] = (1));

return statearr_54731;
});
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1 = (function (state_54729){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54729);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54732){var ex__27576__auto__ = e54732;
var statearr_54733_54921 = state_54729;
(statearr_54733_54921[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54729[(4)]))){
var statearr_54734_54922 = state_54729;
(statearr_54734_54922[(1)] = cljs.core.first((state_54729[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54923 = state_54729;
state_54729 = G__54923;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__ = function(state_54729){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1.call(this,state_54729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54735 = f__27596__auto__();
(statearr_54735[(6)] = c__27595__auto__);

return statearr_54735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.extensions.zotero.api.all_top_items = (function frontend$extensions$zotero$api$all_top_items(){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54775){
var state_val_54776 = (state_54775[(1)]);
if((state_val_54776 === (7))){
var inst_54771 = (state_54775[(2)]);
var state_54775__$1 = state_54775;
var statearr_54777_54924 = state_54775__$1;
(statearr_54777_54924[(2)] = inst_54771);

(statearr_54777_54924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54776 === (1))){
var inst_54736 = cljs.core.PersistentVector.EMPTY;
var inst_54737 = "0";
var inst_54738 = inst_54736;
var state_54775__$1 = (function (){var statearr_54778 = state_54775;
(statearr_54778[(7)] = inst_54738);

(statearr_54778[(8)] = inst_54737);

return statearr_54778;
})();
var statearr_54779_54925 = state_54775__$1;
(statearr_54779_54925[(2)] = null);

(statearr_54779_54925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54776 === (4))){
var inst_54747 = (state_54775[(2)]);
var inst_54748 = cljs.core.__destructure_map(inst_54747);
var inst_54749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54748,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_54750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54748,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_54751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54748,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54752 = inst_54749 === false;
var state_54775__$1 = (function (){var statearr_54781 = state_54775;
(statearr_54781[(9)] = inst_54751);

(statearr_54781[(10)] = inst_54750);

return statearr_54781;
})();
if(cljs.core.truth_(inst_54752)){
var statearr_54782_54926 = state_54775__$1;
(statearr_54782_54926[(1)] = (5));

} else {
var statearr_54784_54927 = state_54775__$1;
(statearr_54784_54927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54776 === (13))){
var inst_54767 = (state_54775[(2)]);
var state_54775__$1 = state_54775;
var statearr_54785_54928 = state_54775__$1;
(statearr_54785_54928[(2)] = inst_54767);

(statearr_54785_54928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54776 === (6))){
var inst_54750 = (state_54775[(10)]);
var state_54775__$1 = state_54775;
if(cljs.core.truth_(inst_54750)){
var statearr_54786_54929 = state_54775__$1;
(statearr_54786_54929[(1)] = (8));

} else {
var statearr_54787_54930 = state_54775__$1;
(statearr_54787_54930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54776 === (3))){
var inst_54773 = (state_54775[(2)]);
var state_54775__$1 = state_54775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54775__$1,inst_54773);
} else {
if((state_val_54776 === (12))){
var state_54775__$1 = state_54775;
var statearr_54788_54931 = state_54775__$1;
(statearr_54788_54931[(2)] = null);

(statearr_54788_54931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54776 === (2))){
var inst_54737 = (state_54775[(8)]);
var inst_54741 = frontend.extensions.zotero.api.config();
var inst_54742 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_54743 = ["-attachment",inst_54737];
var inst_54744 = cljs.core.PersistentHashMap.fromArrays(inst_54742,inst_54743);
var inst_54745 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_54741,"/items/top",inst_54744);
var state_54775__$1 = state_54775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54775__$1,(4),inst_54745);
} else {
if((state_val_54776 === (11))){
var inst_54738 = (state_54775[(7)]);
var inst_54751 = (state_54775[(9)]);
var inst_54762 = cljs.core.PersistentVector.EMPTY;
var inst_54763 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_54738,inst_54751);
var inst_54764 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_54762,inst_54763);
var state_54775__$1 = state_54775;
var statearr_54789_54932 = state_54775__$1;
(statearr_54789_54932[(2)] = inst_54764);

(statearr_54789_54932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54776 === (9))){
var state_54775__$1 = state_54775;
var statearr_54790_54933 = state_54775__$1;
(statearr_54790_54933[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54776 === (5))){
var inst_54738 = (state_54775[(7)]);
var state_54775__$1 = state_54775;
var statearr_54792_54934 = state_54775__$1;
(statearr_54792_54934[(2)] = inst_54738);

(statearr_54792_54934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54776 === (10))){
var inst_54769 = (state_54775[(2)]);
var state_54775__$1 = state_54775;
var statearr_54793_54935 = state_54775__$1;
(statearr_54793_54935[(2)] = inst_54769);

(statearr_54793_54935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54776 === (8))){
var inst_54738 = (state_54775[(7)]);
var inst_54751 = (state_54775[(9)]);
var inst_54750 = (state_54775[(10)]);
var inst_54756 = cljs.core.PersistentVector.EMPTY;
var inst_54757 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_54738,inst_54751);
var inst_54758 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_54756,inst_54757);
var inst_54737 = inst_54750;
var inst_54738__$1 = inst_54758;
var state_54775__$1 = (function (){var statearr_54794 = state_54775;
(statearr_54794[(7)] = inst_54738__$1);

(statearr_54794[(8)] = inst_54737);

return statearr_54794;
})();
var statearr_54795_54936 = state_54775__$1;
(statearr_54795_54936[(2)] = null);

(statearr_54795_54936[(1)] = (2));


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
}
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____0 = (function (){
var statearr_54797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54797[(0)] = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__);

(statearr_54797[(1)] = (1));

return statearr_54797;
});
var frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1 = (function (state_54775){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54775);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54798){var ex__27576__auto__ = e54798;
var statearr_54799_54937 = state_54775;
(statearr_54799_54937[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54775[(4)]))){
var statearr_54800_54938 = state_54775;
(statearr_54800_54938[(1)] = cljs.core.first((state_54775[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54939 = state_54775;
state_54775 = G__54939;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__ = function(state_54775){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1.call(this,state_54775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_top_items_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54801 = f__27596__auto__();
(statearr_54801[(6)] = c__27595__auto__);

return statearr_54801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
/**
 * Query all top level items except attachments
 */
frontend.extensions.zotero.api.query_top_items = (function frontend$extensions$zotero$api$query_top_items(var_args){
var G__54803 = arguments.length;
switch (G__54803) {
case 1:
return frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$1 = (function (term){
return frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2(term,"0");
}));

(frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2 = (function (term,start){
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.api.config(),"/items/top",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qmode","qmode",1066956365),"everything",new cljs.core.Keyword(null,"q","q",689001697),term,new cljs.core.Keyword(null,"limit","limit",-1355822363),(10),new cljs.core.Keyword(null,"item-type","item-type",-73995695),"-attachment",new cljs.core.Keyword(null,"start","start",-355208981),start], null));
}));

(frontend.extensions.zotero.api.query_top_items.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.api.all_children_items = (function frontend$extensions$zotero$api$all_children_items(key,type){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54845){
var state_val_54846 = (state_54845[(1)]);
if((state_val_54846 === (7))){
var inst_54841 = (state_54845[(2)]);
var state_54845__$1 = state_54845;
var statearr_54847_54941 = state_54845__$1;
(statearr_54847_54941[(2)] = inst_54841);

(statearr_54847_54941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54846 === (1))){
var inst_54805 = cljs.core.PersistentVector.EMPTY;
var inst_54806 = "0";
var inst_54807 = inst_54805;
var state_54845__$1 = (function (){var statearr_54848 = state_54845;
(statearr_54848[(7)] = inst_54807);

(statearr_54848[(8)] = inst_54806);

return statearr_54848;
})();
var statearr_54849_54942 = state_54845__$1;
(statearr_54849_54942[(2)] = null);

(statearr_54849_54942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54846 === (4))){
var inst_54817 = (state_54845[(2)]);
var inst_54818 = cljs.core.__destructure_map(inst_54817);
var inst_54819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54818,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_54820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54818,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_54821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54818,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54822 = inst_54819 === false;
var state_54845__$1 = (function (){var statearr_54851 = state_54845;
(statearr_54851[(9)] = inst_54820);

(statearr_54851[(10)] = inst_54821);

return statearr_54851;
})();
if(cljs.core.truth_(inst_54822)){
var statearr_54852_54943 = state_54845__$1;
(statearr_54852_54943[(1)] = (5));

} else {
var statearr_54853_54944 = state_54845__$1;
(statearr_54853_54944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54846 === (13))){
var inst_54837 = (state_54845[(2)]);
var state_54845__$1 = state_54845;
var statearr_54854_54945 = state_54845__$1;
(statearr_54854_54945[(2)] = inst_54837);

(statearr_54854_54945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54846 === (6))){
var inst_54820 = (state_54845[(9)]);
var state_54845__$1 = state_54845;
if(cljs.core.truth_(inst_54820)){
var statearr_54855_54946 = state_54845__$1;
(statearr_54855_54946[(1)] = (8));

} else {
var statearr_54856_54947 = state_54845__$1;
(statearr_54856_54947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54846 === (3))){
var inst_54843 = (state_54845[(2)]);
var state_54845__$1 = state_54845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54845__$1,inst_54843);
} else {
if((state_val_54846 === (12))){
var state_54845__$1 = state_54845;
var statearr_54857_54948 = state_54845__$1;
(statearr_54857_54948[(2)] = null);

(statearr_54857_54948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54846 === (2))){
var inst_54806 = (state_54845[(8)]);
var inst_54810 = frontend.extensions.zotero.api.config();
var inst_54811 = ["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"/children"].join('');
var inst_54812 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_54813 = [type,inst_54806];
var inst_54814 = cljs.core.PersistentHashMap.fromArrays(inst_54812,inst_54813);
var inst_54815 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_54810,inst_54811,inst_54814);
var state_54845__$1 = state_54845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54845__$1,(4),inst_54815);
} else {
if((state_val_54846 === (11))){
var inst_54807 = (state_54845[(7)]);
var inst_54821 = (state_54845[(10)]);
var inst_54832 = cljs.core.PersistentVector.EMPTY;
var inst_54833 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_54807,inst_54821);
var inst_54834 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_54832,inst_54833);
var state_54845__$1 = state_54845;
var statearr_54858_54949 = state_54845__$1;
(statearr_54858_54949[(2)] = inst_54834);

(statearr_54858_54949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54846 === (9))){
var state_54845__$1 = state_54845;
var statearr_54859_54950 = state_54845__$1;
(statearr_54859_54950[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54846 === (5))){
var inst_54807 = (state_54845[(7)]);
var state_54845__$1 = state_54845;
var statearr_54861_54951 = state_54845__$1;
(statearr_54861_54951[(2)] = inst_54807);

(statearr_54861_54951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54846 === (10))){
var inst_54839 = (state_54845[(2)]);
var state_54845__$1 = state_54845;
var statearr_54862_54952 = state_54845__$1;
(statearr_54862_54952[(2)] = inst_54839);

(statearr_54862_54952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54846 === (8))){
var inst_54807 = (state_54845[(7)]);
var inst_54820 = (state_54845[(9)]);
var inst_54821 = (state_54845[(10)]);
var inst_54826 = cljs.core.PersistentVector.EMPTY;
var inst_54827 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_54807,inst_54821);
var inst_54828 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_54826,inst_54827);
var inst_54806 = inst_54820;
var inst_54807__$1 = inst_54828;
var state_54845__$1 = (function (){var statearr_54863 = state_54845;
(statearr_54863[(7)] = inst_54807__$1);

(statearr_54863[(8)] = inst_54806);

return statearr_54863;
})();
var statearr_54864_54953 = state_54845__$1;
(statearr_54864_54953[(2)] = null);

(statearr_54864_54953[(1)] = (2));


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
}
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____0 = (function (){
var statearr_54865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54865[(0)] = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__);

(statearr_54865[(1)] = (1));

return statearr_54865;
});
var frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1 = (function (state_54845){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54845);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54866){var ex__27576__auto__ = e54866;
var statearr_54867_54954 = state_54845;
(statearr_54867_54954[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54845[(4)]))){
var statearr_54868_54955 = state_54845;
(statearr_54868_54955[(1)] = cljs.core.first((state_54845[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54956 = state_54845;
state_54845 = G__54956;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__ = function(state_54845){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1.call(this,state_54845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____0;
frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$api$all_children_items_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54869 = f__27596__auto__();
(statearr_54869[(6)] = c__27595__auto__);

return statearr_54869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.extensions.zotero.api.notes = (function frontend$extensions$zotero$api$notes(key){
return frontend.extensions.zotero.api.all_children_items(key,"note");
});
frontend.extensions.zotero.api.attachments = (function frontend$extensions$zotero$api$attachments(key){
return frontend.extensions.zotero.api.all_children_items(key,"attachment");
});

//# sourceMappingURL=frontend.extensions.zotero.api.js.map
