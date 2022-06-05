goog.provide('frontend.handler.file_sync');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
frontend.handler.file_sync.hiding_login_AMPERSAND_file_sync = cljs.core.not(frontend.config.dev_QMARK_);
frontend.handler.file_sync.refresh_file_sync_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.handler.file_sync.graph_txid_exists_QMARK_ = (function frontend$handler$file_sync$graph_txid_exists_QMARK_(){
var vec__55986 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var _user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55986,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55986,(1),null);
var _txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55986,(2),null);
return (!((graph_uuid == null)));
});
frontend.handler.file_sync.create_graph = (function frontend$handler$file_sync$create_graph(name){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_56030){
var state_val_56031 = (state_56030[(1)]);
if((state_val_56031 === (7))){
var inst_56001 = (state_56030[(7)]);
var state_56030__$1 = state_56030;
var statearr_56034_56481 = state_56030__$1;
(statearr_56034_56481[(2)] = inst_56001);

(statearr_56034_56481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (1))){
var inst_55991 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$create_graph$arity$2(null,name);
var state_56030__$1 = state_56030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56030__$1,(2),inst_55991);
} else {
if((state_val_56031 === (4))){
var inst_55993 = (state_56030[(8)]);
var inst_55997 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(inst_55993);
var state_56030__$1 = state_56030;
var statearr_56040_56482 = state_56030__$1;
(statearr_56040_56482[(2)] = inst_55997);

(statearr_56040_56482[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (13))){
var inst_55999 = (state_56030[(9)]);
var inst_56023 = ["Create graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55999)].join('');
var inst_56024 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_56023,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_56030__$1 = state_56030;
var statearr_56041_56485 = state_56030__$1;
(statearr_56041_56485[(2)] = inst_56024);

(statearr_56041_56485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (6))){
var inst_55999 = (state_56030[(9)]);
var inst_56003 = typeof inst_55999 === 'string';
var state_56030__$1 = state_56030;
var statearr_56046_56486 = state_56030__$1;
(statearr_56046_56486[(2)] = inst_56003);

(statearr_56046_56486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (3))){
var inst_55993 = (state_56030[(8)]);
var state_56030__$1 = state_56030;
var statearr_56047_56488 = state_56030__$1;
(statearr_56047_56488[(2)] = inst_55993);

(statearr_56047_56488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (12))){
var inst_56020 = ["Create graph failed: already existed graph: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var inst_56021 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_56020,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_56030__$1 = state_56030;
var statearr_56052_56489 = state_56030__$1;
(statearr_56052_56489[(2)] = inst_56021);

(statearr_56052_56489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (2))){
var inst_55993 = (state_56030[(8)]);
var inst_55993__$1 = (state_56030[(2)]);
var inst_55994 = (inst_55993__$1 instanceof cljs.core.ExceptionInfo);
var state_56030__$1 = (function (){var statearr_56053 = state_56030;
(statearr_56053[(8)] = inst_55993__$1);

return statearr_56053;
})();
if(cljs.core.truth_(inst_55994)){
var statearr_56054_56490 = state_56030__$1;
(statearr_56054_56490[(1)] = (3));

} else {
var statearr_56055_56491 = state_56030__$1;
(statearr_56055_56491[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (11))){
var inst_56028 = (state_56030[(2)]);
var state_56030__$1 = state_56030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56030__$1,inst_56028);
} else {
if((state_val_56031 === (9))){
var inst_55999 = (state_56030[(9)]);
var inst_56008 = frontend.handler.user.user_uuid();
var inst_56009 = frontend.state.get_current_repo();
var inst_56010 = frontend.fs.sync.update_graphs_txid_BANG_((0),inst_55999,inst_56008,inst_56009);
var inst_56011 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_56030__$1 = (function (){var statearr_56064 = state_56030;
(statearr_56064[(10)] = inst_56010);

return statearr_56064;
})();
var statearr_56067_56492 = state_56030__$1;
(statearr_56067_56492[(2)] = inst_56011);

(statearr_56067_56492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (5))){
var inst_56001 = (state_56030[(7)]);
var inst_55999 = (state_56030[(9)]);
var inst_55999__$1 = (state_56030[(2)]);
var inst_56000 = (inst_55999__$1 instanceof cljs.core.ExceptionInfo);
var inst_56001__$1 = cljs.core.not(inst_56000);
var state_56030__$1 = (function (){var statearr_56068 = state_56030;
(statearr_56068[(7)] = inst_56001__$1);

(statearr_56068[(9)] = inst_55999__$1);

return statearr_56068;
})();
if(inst_56001__$1){
var statearr_56069_56493 = state_56030__$1;
(statearr_56069_56493[(1)] = (6));

} else {
var statearr_56070_56494 = state_56030__$1;
(statearr_56070_56494[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (14))){
var inst_56026 = (state_56030[(2)]);
var state_56030__$1 = state_56030;
var statearr_56072_56495 = state_56030__$1;
(statearr_56072_56495[(2)] = inst_56026);

(statearr_56072_56495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (10))){
var inst_55999 = (state_56030[(9)]);
var inst_56013 = cljs.core.ex_data(inst_55999);
var inst_56014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56015 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_56016 = (new cljs.core.PersistentVector(null,2,(5),inst_56014,inst_56015,null));
var inst_56017 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_56013,inst_56016);
var inst_56018 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),inst_56017);
var state_56030__$1 = state_56030;
if(inst_56018){
var statearr_56078_56496 = state_56030__$1;
(statearr_56078_56496[(1)] = (12));

} else {
var statearr_56079_56497 = state_56030__$1;
(statearr_56079_56497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (8))){
var inst_56006 = (state_56030[(2)]);
var state_56030__$1 = state_56030;
if(cljs.core.truth_(inst_56006)){
var statearr_56083_56498 = state_56030__$1;
(statearr_56083_56498[(1)] = (9));

} else {
var statearr_56084_56499 = state_56030__$1;
(statearr_56084_56499[(1)] = (10));

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
});
return (function() {
var frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____0 = (function (){
var statearr_56087 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56087[(0)] = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__);

(statearr_56087[(1)] = (1));

return statearr_56087;
});
var frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1 = (function (state_56030){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_56030);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e56088){var ex__27576__auto__ = e56088;
var statearr_56089_56500 = state_56030;
(statearr_56089_56500[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_56030[(4)]))){
var statearr_56090_56501 = state_56030;
(statearr_56090_56501[(1)] = cljs.core.first((state_56030[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56502 = state_56030;
state_56030 = G__56502;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__ = function(state_56030){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1.call(this,state_56030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____0;
frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$create_graph_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$create_graph_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_56095 = f__27596__auto__();
(statearr_56095[(6)] = c__27595__auto__);

return statearr_56095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.delete_graph = (function frontend$handler$file_sync$delete_graph(graph_uuid){
frontend.fs.sync.sync_stop();

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_56130){
var state_val_56131 = (state_56130[(1)]);
if((state_val_56131 === (1))){
var inst_56103 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2(null,graph_uuid);
var state_56130__$1 = state_56130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56130__$1,(2),inst_56103);
} else {
if((state_val_56131 === (2))){
var inst_56105 = (state_56130[(2)]);
var inst_56106 = (inst_56105 instanceof cljs.core.ExceptionInfo);
var state_56130__$1 = state_56130;
if(cljs.core.truth_(inst_56106)){
var statearr_56137_56503 = state_56130__$1;
(statearr_56137_56503[(1)] = (3));

} else {
var statearr_56138_56504 = state_56130__$1;
(statearr_56138_56504[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56131 === (3))){
var inst_56108 = ["Delete graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)].join('');
var inst_56109 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_56108,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_56130__$1 = state_56130;
var statearr_56139_56509 = state_56130__$1;
(statearr_56139_56509[(2)] = inst_56109);

(statearr_56139_56509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56131 === (4))){
var inst_56114 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_56115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56114,(0),null);
var inst_56116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56114,(1),null);
var inst_56117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56114,(2),null);
var inst_56118 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_uuid,inst_56116);
var state_56130__$1 = (function (){var statearr_56146 = state_56130;
(statearr_56146[(7)] = inst_56117);

(statearr_56146[(8)] = inst_56115);

return statearr_56146;
})();
if(inst_56118){
var statearr_56147_56510 = state_56130__$1;
(statearr_56147_56510[(1)] = (6));

} else {
var statearr_56148_56511 = state_56130__$1;
(statearr_56148_56511[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56131 === (5))){
var inst_56128 = (state_56130[(2)]);
var state_56130__$1 = state_56130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56130__$1,inst_56128);
} else {
if((state_val_56131 === (6))){
var inst_56120 = frontend.state.get_current_repo();
var inst_56121 = frontend.fs.sync.clear_graphs_txid_BANG_(inst_56120);
var inst_56122 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_56130__$1 = (function (){var statearr_56151 = state_56130;
(statearr_56151[(9)] = inst_56121);

return statearr_56151;
})();
var statearr_56152_56512 = state_56130__$1;
(statearr_56152_56512[(2)] = inst_56122);

(statearr_56152_56512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56131 === (7))){
var state_56130__$1 = state_56130;
var statearr_56153_56513 = state_56130__$1;
(statearr_56153_56513[(2)] = null);

(statearr_56153_56513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56131 === (8))){
var inst_56125 = (state_56130[(2)]);
var inst_56126 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Graph deleted",new cljs.core.Keyword(null,"success","success",1890645906));
var state_56130__$1 = (function (){var statearr_56154 = state_56130;
(statearr_56154[(10)] = inst_56125);

return statearr_56154;
})();
var statearr_56155_56515 = state_56130__$1;
(statearr_56155_56515[(2)] = inst_56126);

(statearr_56155_56515[(1)] = (5));


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
var frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____0 = (function (){
var statearr_56156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56156[(0)] = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__);

(statearr_56156[(1)] = (1));

return statearr_56156;
});
var frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1 = (function (state_56130){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_56130);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e56157){var ex__27576__auto__ = e56157;
var statearr_56158_56522 = state_56130;
(statearr_56158_56522[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_56130[(4)]))){
var statearr_56159_56523 = state_56130;
(statearr_56159_56523[(1)] = cljs.core.first((state_56130[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56524 = state_56130;
state_56130 = G__56524;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__ = function(state_56130){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1.call(this,state_56130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____0;
frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$delete_graph_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_56160 = f__27596__auto__();
(statearr_56160[(6)] = c__27595__auto__);

return statearr_56160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.list_graphs = (function frontend$handler$file_sync$list_graphs(){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_56168){
var state_val_56169 = (state_56168[(1)]);
if((state_val_56169 === (1))){
var inst_56163 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_56168__$1 = state_56168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56168__$1,(2),inst_56163);
} else {
if((state_val_56169 === (2))){
var inst_56165 = (state_56168[(2)]);
var inst_56166 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_56165);
var state_56168__$1 = state_56168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56168__$1,inst_56166);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0 = (function (){
var statearr_56170 = [null,null,null,null,null,null,null];
(statearr_56170[(0)] = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__);

(statearr_56170[(1)] = (1));

return statearr_56170;
});
var frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1 = (function (state_56168){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_56168);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e56171){var ex__27576__auto__ = e56171;
var statearr_56172_56529 = state_56168;
(statearr_56172_56529[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_56168[(4)]))){
var statearr_56173_56530 = state_56168;
(statearr_56173_56530[(1)] = cljs.core.first((state_56168[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56531 = state_56168;
state_56168 = G__56531;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__ = function(state_56168){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1.call(this,state_56168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_graphs_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_56177 = f__27596__auto__();
(statearr_56177[(6)] = c__27595__auto__);

return statearr_56177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.download_all_files = (function frontend$handler$file_sync$download_all_files(repo,graph_uuid,user_uuid,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_56222){
var state_val_56223 = (state_56222[(1)]);
if((state_val_56223 === (1))){
var inst_56181 = frontend.state.reset_file_sync_download_init_state_BANG_();
var inst_56182 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"finished","finished",-1018867731),new cljs.core.Keyword(null,"downloading?","downloading?",38673093)];
var inst_56183 = [NaN,(0),true];
var inst_56184 = cljs.core.PersistentHashMap.fromArrays(inst_56182,inst_56183);
var inst_56185 = frontend.state.set_file_sync_download_init_state_BANG_(inst_56184);
var inst_56186 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,graph_uuid);
var state_56222__$1 = (function (){var statearr_56224 = state_56222;
(statearr_56224[(7)] = inst_56185);

(statearr_56224[(8)] = inst_56181);

return statearr_56224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56222__$1,(2),inst_56186);
} else {
if((state_val_56223 === (2))){
var inst_56188 = (state_56222[(2)]);
var inst_56189 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,graph_uuid,base_path);
var state_56222__$1 = (function (){var statearr_56225 = state_56222;
(statearr_56225[(9)] = inst_56188);

return statearr_56225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56222__$1,(3),inst_56189);
} else {
if((state_val_56223 === (3))){
var inst_56191 = (state_56222[(10)]);
var inst_56188 = (state_56222[(9)]);
var inst_56191__$1 = (state_56222[(2)]);
var inst_56192 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_56188,inst_56191__$1);
var inst_56193 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,graph_uuid);
var state_56222__$1 = (function (){var statearr_56226 = state_56222;
(statearr_56226[(11)] = inst_56192);

(statearr_56226[(10)] = inst_56191__$1);

return statearr_56226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56222__$1,(4),inst_56193);
} else {
if((state_val_56223 === (4))){
var inst_56192 = (state_56222[(11)]);
var inst_56196 = (state_56222[(12)]);
var inst_56191 = (state_56222[(10)]);
var inst_56188 = (state_56222[(9)]);
var inst_56195 = (state_56222[(2)]);
var inst_56196__$1 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_56195);
var inst_56197 = frontend.fs.sync.filepaths__GT_partitioned_filetxns((10),graph_uuid,user_uuid);
var inst_56198 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_56192);
var inst_56199 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_56197,inst_56198);
var inst_56200 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"finished","finished",-1018867731)];
var inst_56201 = cljs.core.count(inst_56192);
var inst_56202 = [inst_56201,(0)];
var inst_56203 = cljs.core.PersistentHashMap.fromArrays(inst_56200,inst_56202);
var inst_56204 = frontend.state.set_file_sync_download_init_state_BANG_(inst_56203);
var inst_56205 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var inst_56206 = (function (){var remote_all_files_meta = inst_56188;
var local_all_files_meta = inst_56191;
var diff_remote_files = inst_56192;
var latest_txid = inst_56196__$1;
var partitioned_filetxns = inst_56199;
return (function (filetxns){
return frontend.state.set_file_sync_download_init_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"downloading-files","downloading-files",1777262232),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,filetxns)], null));
});
})();
var inst_56207 = (function (){var remote_all_files_meta = inst_56188;
var local_all_files_meta = inst_56191;
var diff_remote_files = inst_56192;
var latest_txid = inst_56196__$1;
var partitioned_filetxns = inst_56199;
return (function (filetxns){
return frontend.state.set_file_sync_download_init_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"finished","finished",-1018867731),(cljs.core.count(filetxns) + (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(frontend.state.get_file_sync_download_init_state());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})())], null));
});
})();
var inst_56208 = frontend.fs.sync.apply_filetxns_partitions(null,user_uuid,graph_uuid,base_path,inst_56199,repo,null,inst_56205,inst_56206,inst_56207);
var state_56222__$1 = (function (){var statearr_56227 = state_56222;
(statearr_56227[(12)] = inst_56196__$1);

(statearr_56227[(13)] = inst_56204);

return statearr_56227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56222__$1,(5),inst_56208);
} else {
if((state_val_56223 === (5))){
var inst_56210 = (state_56222[(14)]);
var inst_56210__$1 = (state_56222[(2)]);
var inst_56211 = (inst_56210__$1 instanceof cljs.core.ExceptionInfo);
var state_56222__$1 = (function (){var statearr_56228 = state_56222;
(statearr_56228[(14)] = inst_56210__$1);

return statearr_56228;
})();
if(cljs.core.truth_(inst_56211)){
var statearr_56229_56537 = state_56222__$1;
(statearr_56229_56537[(1)] = (6));

} else {
var statearr_56230_56538 = state_56222__$1;
(statearr_56230_56538[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (6))){
var inst_56210 = (state_56222[(14)]);
var inst_56213 = cljs.core.ex_cause(inst_56210);
var inst_56214 = ["Download graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56213)].join('');
var inst_56215 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_56214,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_56222__$1 = state_56222;
var statearr_56231_56539 = state_56222__$1;
(statearr_56231_56539[(2)] = inst_56215);

(statearr_56231_56539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (7))){
var inst_56196 = (state_56222[(12)]);
var inst_56217 = frontend.state.reset_file_sync_download_init_state_BANG_();
var inst_56218 = frontend.fs.sync.update_graphs_txid_BANG_(inst_56196,graph_uuid,user_uuid,repo);
var state_56222__$1 = (function (){var statearr_56232 = state_56222;
(statearr_56232[(15)] = inst_56217);

return statearr_56232;
})();
var statearr_56233_56540 = state_56222__$1;
(statearr_56233_56540[(2)] = inst_56218);

(statearr_56233_56540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56223 === (8))){
var inst_56220 = (state_56222[(2)]);
var state_56222__$1 = state_56222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56222__$1,inst_56220);
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
var frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____0 = (function (){
var statearr_56234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56234[(0)] = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__);

(statearr_56234[(1)] = (1));

return statearr_56234;
});
var frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1 = (function (state_56222){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_56222);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e56235){var ex__27576__auto__ = e56235;
var statearr_56236_56542 = state_56222;
(statearr_56236_56542[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_56222[(4)]))){
var statearr_56237_56543 = state_56222;
(statearr_56237_56543[(1)] = cljs.core.first((state_56222[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56544 = state_56222;
state_56222 = G__56544;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__ = function(state_56222){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1.call(this,state_56222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____0;
frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$download_all_files_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_56238 = f__27596__auto__();
(statearr_56238[(6)] = c__27595__auto__);

return statearr_56238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.switch_graph = (function frontend$handler$file_sync$switch_graph(graph_uuid){
var repo = frontend.state.get_current_repo();
var base_path = frontend.config.get_repo_dir(repo);
var user_uuid = frontend.handler.user.user_uuid();
frontend.fs.sync.update_graphs_txid_BANG_((0),graph_uuid,user_uuid,repo);

frontend.handler.file_sync.download_all_files(repo,graph_uuid,user_uuid,base_path);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
});
frontend.handler.file_sync.download_version_file = (function frontend$handler$file_sync$download_version_file(graph_uuid,file_uuid,version_uuid){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_56273){
var state_val_56274 = (state_56273[(1)]);
if((state_val_56274 === (1))){
var inst_56241 = (state_56273[(7)]);
var inst_56241__$1 = module$node_modules$path$path.join("version-files",file_uuid,version_uuid);
var inst_56242 = frontend.state.get_current_repo();
var inst_56243 = frontend.config.get_repo_dir(inst_56242);
var inst_56244 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56245 = [inst_56241__$1];
var inst_56246 = (new cljs.core.PersistentVector(null,1,(5),inst_56244,inst_56245,null));
var inst_56247 = frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,inst_56243,inst_56246);
var state_56273__$1 = (function (){var statearr_56276 = state_56273;
(statearr_56276[(7)] = inst_56241__$1);

return statearr_56276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56273__$1,(2),inst_56247);
} else {
if((state_val_56274 === (2))){
var inst_56249 = (state_56273[(8)]);
var inst_56249__$1 = (state_56273[(2)]);
var inst_56250 = (inst_56249__$1 instanceof cljs.core.ExceptionInfo);
var state_56273__$1 = (function (){var statearr_56277 = state_56273;
(statearr_56277[(8)] = inst_56249__$1);

return statearr_56277;
})();
if(cljs.core.truth_(inst_56250)){
var statearr_56278_56545 = state_56273__$1;
(statearr_56278_56545[(1)] = (3));

} else {
var statearr_56279_56546 = state_56273__$1;
(statearr_56279_56546[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (3))){
var inst_56249 = (state_56273[(8)]);
var inst_56252 = cljs.core.ex_cause(inst_56249);
var inst_56253 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_56252,new cljs.core.Keyword(null,"error","error",-978969032));
var state_56273__$1 = state_56273;
var statearr_56280_56547 = state_56273__$1;
(statearr_56280_56547[(2)] = inst_56253);

(statearr_56280_56547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (4))){
var inst_56241 = (state_56273[(7)]);
var inst_56255 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56257 = [new cljs.core.Keyword(null,"div","div",1057191632),"Downloaded version file at: "];
var inst_56258 = (new cljs.core.PersistentVector(null,2,(5),inst_56256,inst_56257,null));
var inst_56259 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56260 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_56241];
var inst_56261 = (new cljs.core.PersistentVector(null,2,(5),inst_56259,inst_56260,null));
var inst_56262 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_56258,inst_56261];
var inst_56263 = (new cljs.core.PersistentVector(null,3,(5),inst_56255,inst_56262,null));
var inst_56264 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56263,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_56273__$1 = state_56273;
var statearr_56281_56548 = state_56273__$1;
(statearr_56281_56548[(2)] = inst_56264);

(statearr_56281_56548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (5))){
var inst_56249 = (state_56273[(8)]);
var inst_56266 = (state_56273[(2)]);
var inst_56267 = (inst_56249 instanceof cljs.core.ExceptionInfo);
var state_56273__$1 = (function (){var statearr_56282 = state_56273;
(statearr_56282[(9)] = inst_56266);

return statearr_56282;
})();
if(cljs.core.truth_(inst_56267)){
var statearr_56283_56552 = state_56273__$1;
(statearr_56283_56552[(1)] = (6));

} else {
var statearr_56285_56553 = state_56273__$1;
(statearr_56285_56553[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (6))){
var state_56273__$1 = state_56273;
var statearr_56286_56554 = state_56273__$1;
(statearr_56286_56554[(2)] = null);

(statearr_56286_56554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (7))){
var inst_56241 = (state_56273[(7)]);
var state_56273__$1 = state_56273;
var statearr_56287_56555 = state_56273__$1;
(statearr_56287_56555[(2)] = inst_56241);

(statearr_56287_56555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (8))){
var inst_56271 = (state_56273[(2)]);
var state_56273__$1 = state_56273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56273__$1,inst_56271);
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
var frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____0 = (function (){
var statearr_56288 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56288[(0)] = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__);

(statearr_56288[(1)] = (1));

return statearr_56288;
});
var frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1 = (function (state_56273){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_56273);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e56289){var ex__27576__auto__ = e56289;
var statearr_56290_56556 = state_56273;
(statearr_56290_56556[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_56273[(4)]))){
var statearr_56292_56557 = state_56273;
(statearr_56292_56557[(1)] = cljs.core.first((state_56273[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56558 = state_56273;
state_56273 = G__56558;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__ = function(state_56273){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1.call(this,state_56273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____0;
frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$download_version_file_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_56295 = f__27596__auto__();
(statearr_56295[(6)] = c__27595__auto__);

return statearr_56295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.list_file_local_versions = (function frontend$handler$file_sync$list_file_local_versions(page){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_56340){
var state_val_56341 = (state_56340[(1)]);
if((state_val_56341 === (7))){
var inst_56314 = (state_56340[(7)]);
var inst_56307 = (state_56340[(8)]);
var inst_56319 = (state_56340[(9)]);
var inst_56306 = (state_56340[(10)]);
var inst_56303 = (state_56340[(11)]);
var inst_56323 = (function (){var temp__5720__auto__ = inst_56303;
var path = inst_56303;
var base_path = inst_56306;
var rel_path = inst_56307;
var version_files_dir = inst_56314;
var version_file_paths_STAR_ = inst_56319;
return (function (dir_or_file){
return cljs.core.seq(new cljs.core.Keyword(null,"ext","ext",-996964541).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$path$path.parse(dir_or_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
});
})();
var inst_56324 = frontend.fs.readdir(inst_56314);
var inst_56325 = cljs.core.async.interop.p__GT_c(inst_56324);
var state_56340__$1 = (function (){var statearr_56345 = state_56340;
(statearr_56345[(12)] = inst_56323);

return statearr_56345;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56340__$1,(9),inst_56325);
} else {
if((state_val_56341 === (1))){
var inst_56303 = (state_56340[(11)]);
var inst_56302 = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
var inst_56303__$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(inst_56302);
var state_56340__$1 = (function (){var statearr_56346 = state_56340;
(statearr_56346[(11)] = inst_56303__$1);

return statearr_56346;
})();
if(cljs.core.truth_(inst_56303__$1)){
var statearr_56348_56560 = state_56340__$1;
(statearr_56348_56560[(1)] = (2));

} else {
var statearr_56349_56561 = state_56340__$1;
(statearr_56349_56561[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (4))){
var inst_56338 = (state_56340[(2)]);
var state_56340__$1 = state_56340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56340__$1,inst_56338);
} else {
if((state_val_56341 === (6))){
var state_56340__$1 = state_56340;
var statearr_56353_56562 = state_56340__$1;
(statearr_56353_56562[(2)] = null);

(statearr_56353_56562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (3))){
var state_56340__$1 = state_56340;
var statearr_56354_56563 = state_56340__$1;
(statearr_56354_56563[(2)] = null);

(statearr_56354_56563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (2))){
var inst_56314 = (state_56340[(7)]);
var inst_56307 = (state_56340[(8)]);
var inst_56306 = (state_56340[(10)]);
var inst_56303 = (state_56340[(11)]);
var inst_56305 = frontend.state.get_current_repo();
var inst_56306__$1 = frontend.config.get_repo_dir(inst_56305);
var inst_56307__$1 = clojure.string.replace_first(inst_56303,inst_56306__$1,"");
var inst_56308 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"name","name",1843675177));
var inst_56309 = (function (){var temp__5720__auto__ = inst_56303;
var path = inst_56303;
var base_path = inst_56306__$1;
var rel_path = inst_56307__$1;
return (function (p1__56296_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__56296_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
})();
var inst_56310 = module$node_modules$path$path.join("version-files/local",inst_56307__$1);
var inst_56311 = module$node_modules$path$path.parse(inst_56310);
var inst_56312 = inst_56309(inst_56311);
var inst_56313 = inst_56308(inst_56312);
var inst_56314__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$path$path.join,inst_56306__$1,inst_56313);
var inst_56316 = frontend.fs.readdir(inst_56314__$1);
var inst_56317 = cljs.core.async.interop.p__GT_c(inst_56316);
var state_56340__$1 = (function (){var statearr_56355 = state_56340;
(statearr_56355[(7)] = inst_56314__$1);

(statearr_56355[(8)] = inst_56307__$1);

(statearr_56355[(10)] = inst_56306__$1);

return statearr_56355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56340__$1,(5),inst_56317);
} else {
if((state_val_56341 === (9))){
var inst_56314 = (state_56340[(7)]);
var inst_56323 = (state_56340[(12)]);
var inst_56307 = (state_56340[(8)]);
var inst_56319 = (state_56340[(9)]);
var inst_56306 = (state_56340[(10)]);
var inst_56303 = (state_56340[(11)]);
var inst_56327 = (state_56340[(2)]);
var inst_56328 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_56327);
var inst_56329 = cljs.core.filterv(inst_56323,inst_56328);
var inst_56332 = (function (){var temp__5720__auto__ = inst_56303;
var path = inst_56303;
var base_path = inst_56306;
var rel_path = inst_56307;
var version_files_dir = inst_56314;
var version_file_paths_STAR_ = inst_56319;
var version_file_paths = inst_56329;
return (function (path__$1){
var create_time = (function (p1__56298_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH_mm_ss.SSSZZ"),p1__56298_SHARP_);
})(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$path$path.parse(path__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create-time","create-time",875410581),create_time,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172),clojure.string.replace_first(path__$1,base_path,"")], null);
});
})();
var inst_56333 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_56332,inst_56329);
var state_56340__$1 = state_56340;
var statearr_56356_56565 = state_56340__$1;
(statearr_56356_56565[(2)] = inst_56333);

(statearr_56356_56565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (5))){
var inst_56319 = (state_56340[(9)]);
var inst_56319__$1 = (state_56340[(2)]);
var inst_56320 = (inst_56319__$1 instanceof cljs.core.ExceptionInfo);
var state_56340__$1 = (function (){var statearr_56358 = state_56340;
(statearr_56358[(9)] = inst_56319__$1);

return statearr_56358;
})();
if(cljs.core.truth_(inst_56320)){
var statearr_56359_56567 = state_56340__$1;
(statearr_56359_56567[(1)] = (6));

} else {
var statearr_56360_56569 = state_56340__$1;
(statearr_56360_56569[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (8))){
var inst_56335 = (state_56340[(2)]);
var state_56340__$1 = state_56340;
var statearr_56361_56570 = state_56340__$1;
(statearr_56361_56570[(2)] = inst_56335);

(statearr_56361_56570[(1)] = (4));


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
});
return (function() {
var frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____0 = (function (){
var statearr_56362 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56362[(0)] = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__);

(statearr_56362[(1)] = (1));

return statearr_56362;
});
var frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1 = (function (state_56340){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_56340);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e56365){var ex__27576__auto__ = e56365;
var statearr_56366_56571 = state_56340;
(statearr_56366_56571[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_56340[(4)]))){
var statearr_56367_56572 = state_56340;
(statearr_56367_56572[(1)] = cljs.core.first((state_56340[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56573 = state_56340;
state_56340 = G__56573;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__ = function(state_56340){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1.call(this,state_56340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_local_versions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_56368 = f__27596__auto__();
(statearr_56368[(6)] = c__27595__auto__);

return statearr_56368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.file_sync.list_file_versions = (function frontend$handler$file_sync$list_file_versions(graph_uuid,page){
var file_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page));
var temp__5720__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(file_id) : frontend.db.entity.call(null,file_id)));
if(cljs.core.truth_(temp__5720__auto__)){
var path = temp__5720__auto__;
var base_path = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var path_STAR_ = clojure.string.replace_first(path,base_path,"");
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_56400){
var state_val_56401 = (state_56400[(1)]);
if((state_val_56401 === (1))){
var inst_56372 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3(null,graph_uuid,path_STAR_);
var state_56400__$1 = state_56400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56400__$1,(2),inst_56372);
} else {
if((state_val_56401 === (2))){
var inst_56374 = (state_56400[(2)]);
var inst_56375 = new cljs.core.Keyword(null,"VersionList","VersionList",-1189454538).cljs$core$IFn$_invoke$arity$1(inst_56374);
var inst_56376 = frontend.handler.file_sync.list_file_local_versions(page);
var state_56400__$1 = (function (){var statearr_56402 = state_56400;
(statearr_56402[(7)] = inst_56375);

return statearr_56402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56400__$1,(3),inst_56376);
} else {
if((state_val_56401 === (3))){
var inst_56375 = (state_56400[(7)]);
var inst_56378 = (state_56400[(2)]);
var inst_56379 = (function (){var version_list = inst_56375;
var local_version_list = inst_56378;
return (function (p1__56370_SHARP_){
var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(p1__56370_SHARP_));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(p1__56370_SHARP_);
}
});
})();
var inst_56380 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_56375,inst_56378);
var inst_56381 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(inst_56379,cljs.core._GT_,inst_56380);
var inst_56382 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56384 = [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"File history - ",path_STAR_];
var inst_56385 = (new cljs.core.PersistentVector(null,3,(5),inst_56383,inst_56384,null));
var inst_56386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56387 = [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)];
var inst_56388 = (new cljs.core.PersistentVector(null,1,(5),inst_56386,inst_56387,null));
var inst_56394 = (function (){var version_list = inst_56375;
var local_version_list = inst_56378;
var all_version_list = inst_56381;
return (function frontend$handler$file_sync$list_file_versions_$_iter__56389(s__56390){
return (new cljs.core.LazySeq(null,(function (){
var s__56390__$1 = s__56390;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__56390__$1);
if(temp__5720__auto____$1){
var s__56390__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56390__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__56390__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__56392 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__56391 = (0);
while(true){
if((i__56391 < size__5519__auto__)){
var version = cljs.core._nth(c__5518__auto__,i__56391);
cljs.core.chunk_append(b__56392,(function (){var version_uuid = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version);
}
})();
var local_QMARK_ = (!((new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version) == null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56391,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__56392,s__56390__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_56375,inst_56378,inst_56379,inst_56380,inst_56381,inst_56382,inst_56383,inst_56384,inst_56385,inst_56386,inst_56387,inst_56388,state_val_56401,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
if(local_QMARK_){
return window.apis.openPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(version));
} else {
var c__27595__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (i__56391,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__56392,s__56390__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_56375,inst_56378,inst_56379,inst_56380,inst_56381,inst_56382,inst_56383,inst_56384,inst_56385,inst_56386,inst_56387,inst_56388,state_val_56401,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = ((function (i__56391,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__56392,s__56390__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_56375,inst_56378,inst_56379,inst_56380,inst_56381,inst_56382,inst_56383,inst_56384,inst_56385,inst_56386,inst_56387,inst_56388,state_val_56401,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (state_56411){
var state_val_56412 = (state_56411[(1)]);
if((state_val_56412 === (1))){
var inst_56403 = new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version);
var inst_56404 = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
var inst_56405 = frontend.handler.file_sync.download_version_file(graph_uuid,inst_56403,inst_56404);
var state_56411__$1 = state_56411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56411__$1,(2),inst_56405);
} else {
if((state_val_56412 === (2))){
var inst_56407 = (state_56411[(2)]);
var inst_56408 = module$node_modules$path$path.join(base_path,inst_56407);
var inst_56409 = window.apis.openPath(inst_56408);
var state_56411__$1 = state_56411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56411__$1,inst_56409);
} else {
return null;
}
}
});})(i__56391,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__56392,s__56390__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_56375,inst_56378,inst_56379,inst_56380,inst_56381,inst_56382,inst_56383,inst_56384,inst_56385,inst_56386,inst_56387,inst_56388,state_val_56401,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
;
return ((function (i__56391,switch__27572__auto__,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__56392,s__56390__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_56375,inst_56378,inst_56379,inst_56380,inst_56381,inst_56382,inst_56383,inst_56384,inst_56385,inst_56386,inst_56387,inst_56388,state_val_56401,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function() {
var frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____0 = (function (){
var statearr_56414 = [null,null,null,null,null,null,null];
(statearr_56414[(0)] = frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__);

(statearr_56414[(1)] = (1));

return statearr_56414;
});
var frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____1 = (function (state_56411){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_56411);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e56415){var ex__27576__auto__ = e56415;
var statearr_56416_56589 = state_56411;
(statearr_56416_56589[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_56411[(4)]))){
var statearr_56417_56590 = state_56411;
(statearr_56417_56590[(1)] = cljs.core.first((state_56411[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56593 = state_56411;
state_56411 = G__56593;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__ = function(state_56411){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____1.call(this,state_56411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__;
})()
;})(i__56391,switch__27572__auto__,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__56392,s__56390__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_56375,inst_56378,inst_56379,inst_56380,inst_56381,inst_56382,inst_56383,inst_56384,inst_56385,inst_56386,inst_56387,inst_56388,state_val_56401,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
})();
var state__27597__auto__ = (function (){var statearr_56418 = f__27596__auto__();
(statearr_56418[(6)] = c__27595__auto____$1);

return statearr_56418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
});})(i__56391,c__27595__auto____$1,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__56392,s__56390__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_56375,inst_56378,inst_56379,inst_56380,inst_56381,inst_56382,inst_56383,inst_56384,inst_56385,inst_56386,inst_56387,inst_56388,state_val_56401,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
);

return c__27595__auto____$1;
}
});})(i__56391,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__56392,s__56390__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_56375,inst_56378,inst_56379,inst_56380,inst_56381,inst_56382,inst_56383,inst_56384,inst_56385,inst_56386,inst_56387,inst_56388,state_val_56401,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),((local_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago((function (){var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(version);
}
})())], null)], null);
})());

var G__56596 = (i__56391 + (1));
i__56391 = G__56596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56392),frontend$handler$file_sync$list_file_versions_$_iter__56389(cljs.core.chunk_rest(s__56390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56392),null);
}
} else {
var version = cljs.core.first(s__56390__$2);
return cljs.core.cons((function (){var version_uuid = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version);
}
})();
var local_QMARK_ = (!((new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version) == null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-xs.inline","a.text-xs.inline",1447653355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (version_uuid,local_QMARK_,version,s__56390__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_56375,inst_56378,inst_56379,inst_56380,inst_56381,inst_56382,inst_56383,inst_56384,inst_56385,inst_56386,inst_56387,inst_56388,state_val_56401,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id){
return (function (){
if(local_QMARK_){
return window.apis.openPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(version));
} else {
var c__27595__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_56454){
var state_val_56455 = (state_56454[(1)]);
if((state_val_56455 === (1))){
var inst_56446 = new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(version);
var inst_56447 = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(version);
var inst_56448 = frontend.handler.file_sync.download_version_file(graph_uuid,inst_56446,inst_56447);
var state_56454__$1 = state_56454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56454__$1,(2),inst_56448);
} else {
if((state_val_56455 === (2))){
var inst_56450 = (state_56454[(2)]);
var inst_56451 = module$node_modules$path$path.join(base_path,inst_56450);
var inst_56452 = window.apis.openPath(inst_56451);
var state_56454__$1 = state_56454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56454__$1,inst_56452);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____0 = (function (){
var statearr_56463 = [null,null,null,null,null,null,null];
(statearr_56463[(0)] = frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__);

(statearr_56463[(1)] = (1));

return statearr_56463;
});
var frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____1 = (function (state_56454){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_56454);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e56464){var ex__27576__auto__ = e56464;
var statearr_56465_56604 = state_56454;
(statearr_56465_56604[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_56454[(4)]))){
var statearr_56466_56605 = state_56454;
(statearr_56466_56605[(1)] = cljs.core.first((state_56454[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56606 = state_56454;
state_56454 = G__56606;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__ = function(state_56454){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____1.call(this,state_56454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_iter__56389_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_56467 = f__27596__auto__();
(statearr_56467[(6)] = c__27595__auto____$1);

return statearr_56467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto____$1;
}
});})(version_uuid,local_QMARK_,version,s__56390__$2,temp__5720__auto____$1,version_list,local_version_list,all_version_list,inst_56375,inst_56378,inst_56379,inst_56380,inst_56381,inst_56382,inst_56383,inst_56384,inst_56385,inst_56386,inst_56387,inst_56388,state_val_56401,c__27595__auto__,base_path,path_STAR_,path,temp__5720__auto__,file_id))
], null),version_uuid], null),((local_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),["Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(version))].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago((function (){var or__5043__auto__ = cljs_time.coerce.from_string(new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(version);
}
})())], null)], null);
})(),frontend$handler$file_sync$list_file_versions_$_iter__56389(cljs.core.rest(s__56390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
})();
var inst_56395 = inst_56394(inst_56381);
var inst_56396 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_56385,inst_56388,inst_56395];
var inst_56397 = (new cljs.core.PersistentVector(null,4,(5),inst_56382,inst_56396,null));
var inst_56398 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56397,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_56400__$1 = state_56400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56400__$1,inst_56398);
} else {
return null;
}
}
}
});
return (function() {
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__ = null;
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0 = (function (){
var statearr_56471 = [null,null,null,null,null,null,null,null];
(statearr_56471[(0)] = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__);

(statearr_56471[(1)] = (1));

return statearr_56471;
});
var frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1 = (function (state_56400){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_56400);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e56473){var ex__27576__auto__ = e56473;
var statearr_56476_56613 = state_56400;
(statearr_56476_56613[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_56400[(4)]))){
var statearr_56478_56614 = state_56400;
(statearr_56478_56614[(1)] = cljs.core.first((state_56400[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56616 = state_56400;
state_56400 = G__56616;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__ = function(state_56400){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1.call(this,state_56400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____0;
frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto____1;
return frontend$handler$file_sync$list_file_versions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_56480 = f__27596__auto__();
(statearr_56480[(6)] = c__27595__auto__);

return statearr_56480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
} else {
return null;
}
});
frontend.handler.file_sync.get_current_graph_uuid = (function frontend$handler$file_sync$get_current_graph_uuid(){
return cljs.core.second(cljs.core.deref(frontend.fs.sync.graphs_txid));
});

//# sourceMappingURL=frontend.handler.file_sync.js.map
