goog.provide('frontend.handler.user');
frontend.handler.user.set_preferred_format_BANG_ = (function frontend$handler$user$set_preferred_format_BANG_(format){
if(cljs.core.truth_(format)){
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"preferred-format","preferred-format",-1784393121),format);

return frontend.state.set_preferred_format_BANG_(format);
} else {
return null;
}
});
frontend.handler.user.set_preferred_workflow_BANG_ = (function frontend$handler$user$set_preferred_workflow_BANG_(workflow){
if(cljs.core.truth_(workflow)){
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"preferred-workflow","preferred-workflow",-1794663444),workflow);

return frontend.state.set_preferred_workflow_BANG_(workflow);
} else {
return null;
}
});
frontend.handler.user.parse_jwt = (function frontend$handler$user$parse_jwt(jwt){
var G__48477 = jwt;
var G__48477__$1 = (((G__48477 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__48477,"."));
var G__48477__$2 = (((G__48477__$1 == null))?null:cljs.core.second(G__48477__$1));
var G__48477__$3 = (((G__48477__$2 == null))?null:atob(G__48477__$2));
var G__48477__$4 = (((G__48477__$3 == null))?null:JSON.parse(G__48477__$3));
if((G__48477__$4 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__48477__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
});
frontend.handler.user.expired_QMARK_ = (function frontend$handler$user$expired_QMARK_(parsed_jwt){
var G__48478 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__48478__$1 = (((G__48478 == null))?null:cljs_time.coerce.from_long(G__48478));
if((G__48478__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__48478__$1,cljs_time.core.now());
}
});
/**
 * return true when jwt will expire after 1h
 */
frontend.handler.user.almost_expired_QMARK_ = (function frontend$handler$user$almost_expired_QMARK_(parsed_jwt){
var G__48486 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__48486__$1 = (((G__48486 == null))?null:cljs_time.coerce.from_long(G__48486));
if((G__48486__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__48486__$1,cljs_time.core.from_now(cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((1))));
}
});
frontend.handler.user.email = (function frontend$handler$user$email(){
var G__48487 = frontend.state.get_auth_id_token();
var G__48487__$1 = (((G__48487 == null))?null:frontend.handler.user.parse_jwt(G__48487));
if((G__48487__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(G__48487__$1);
}
});
frontend.handler.user.user_uuid = (function frontend$handler$user$user_uuid(){
var G__48493 = frontend.state.get_auth_id_token();
var G__48493__$1 = (((G__48493 == null))?null:frontend.handler.user.parse_jwt(G__48493));
if((G__48493__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__48493__$1);
}
});
frontend.handler.user.logged_in_QMARK_ = (function frontend$handler$user$logged_in_QMARK_(){
return cljs.core.boolean$((function (){var G__48494 = frontend.state.get_auth_id_token();
var G__48494__$1 = (((G__48494 == null))?null:frontend.handler.user.parse_jwt(G__48494));
var G__48494__$2 = (((G__48494__$1 == null))?null:frontend.handler.user.expired_QMARK_(G__48494__$1));
if((G__48494__$2 == null)){
return null;
} else {
return cljs.core.not(G__48494__$2);
}
})());
});
frontend.handler.user.clear_tokens = (function frontend$handler$user$clear_tokens(){
frontend.state.set_auth_id_token(null);

frontend.state.set_auth_access_token(null);

return frontend.state.set_auth_refresh_token(null);
});
frontend.handler.user.set_tokens_BANG_ = (function frontend$handler$user$set_tokens_BANG_(var_args){
var G__48498 = arguments.length;
switch (G__48498) {
case 2:
return frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id_token,access_token){
frontend.state.set_auth_id_token(id_token);

return frontend.state.set_auth_access_token(access_token);
}));

(frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id_token,access_token,refresh_token){
frontend.state.set_auth_id_token(id_token);

frontend.state.set_auth_access_token(access_token);

return frontend.state.set_auth_refresh_token(refresh_token);
}));

(frontend.handler.user.set_tokens_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.user.login_callback = (function frontend$handler$user$login_callback(code){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48523){
var state_val_48524 = (state_48523[(1)]);
if((state_val_48524 === (1))){
var inst_48499 = ["https://",frontend.config.API_DOMAIN,"/auth_callback?code=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join('');
var inst_48500 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_48501 = [false];
var inst_48502 = cljs.core.PersistentHashMap.fromArrays(inst_48500,inst_48501);
var inst_48503 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_48499,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48502], 0));
var state_48523__$1 = state_48523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48523__$1,(2),inst_48503);
} else {
if((state_val_48524 === (2))){
var inst_48505 = (state_48523[(7)]);
var inst_48505__$1 = (state_48523[(2)]);
var inst_48506 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_48505__$1);
var inst_48507 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_48506);
var state_48523__$1 = (function (){var statearr_48526 = state_48523;
(statearr_48526[(7)] = inst_48505__$1);

return statearr_48526;
})();
if(inst_48507){
var statearr_48527_48708 = state_48523__$1;
(statearr_48527_48708[(1)] = (3));

} else {
var statearr_48528_48709 = state_48523__$1;
(statearr_48528_48709[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48524 === (3))){
var inst_48505 = (state_48523[(7)]);
var inst_48509 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48505);
var inst_48510 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_48509);
var inst_48512 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_48509);
var inst_48513 = new cljs.core.Keyword(null,"refresh_token","refresh_token",-162233815).cljs$core$IFn$_invoke$arity$1(inst_48509);
var inst_48514 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48510,inst_48512,inst_48513);
var state_48523__$1 = state_48523;
var statearr_48529_48710 = state_48523__$1;
(statearr_48529_48710[(2)] = inst_48514);

(statearr_48529_48710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48524 === (4))){
var inst_48505 = (state_48523[(7)]);
var inst_48519 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["login-callback",inst_48505], 0));
var state_48523__$1 = state_48523;
var statearr_48530_48711 = state_48523__$1;
(statearr_48530_48711[(2)] = inst_48519);

(statearr_48530_48711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48524 === (5))){
var inst_48521 = (state_48523[(2)]);
var state_48523__$1 = state_48523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48523__$1,inst_48521);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$user$login_callback_$_state_machine__27573__auto__ = null;
var frontend$handler$user$login_callback_$_state_machine__27573__auto____0 = (function (){
var statearr_48531 = [null,null,null,null,null,null,null,null];
(statearr_48531[(0)] = frontend$handler$user$login_callback_$_state_machine__27573__auto__);

(statearr_48531[(1)] = (1));

return statearr_48531;
});
var frontend$handler$user$login_callback_$_state_machine__27573__auto____1 = (function (state_48523){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48523);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48532){var ex__27576__auto__ = e48532;
var statearr_48533_48712 = state_48523;
(statearr_48533_48712[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48523[(4)]))){
var statearr_48534_48713 = state_48523;
(statearr_48534_48713[(1)] = cljs.core.first((state_48523[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48714 = state_48523;
state_48523 = G__48714;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$login_callback_$_state_machine__27573__auto__ = function(state_48523){
switch(arguments.length){
case 0:
return frontend$handler$user$login_callback_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$login_callback_$_state_machine__27573__auto____1.call(this,state_48523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$login_callback_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$login_callback_$_state_machine__27573__auto____0;
frontend$handler$user$login_callback_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$login_callback_$_state_machine__27573__auto____1;
return frontend$handler$user$login_callback_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48535 = f__27596__auto__();
(statearr_48535[(6)] = c__27595__auto__);

return statearr_48535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.handler.user.logout = (function frontend$handler$user$logout(){
return frontend.handler.user.clear_tokens();
});
/**
 * refresh id-token and access-token, if refresh_token expired, clear all tokens
 * return true if success, else false
 */
frontend.handler.user.refresh_id_token_AMPERSAND_access_token = (function frontend$handler$user$refresh_id_token_AMPERSAND_access_token(){
var temp__5720__auto__ = frontend.state.get_auth_refresh_token();
if(cljs.core.truth_(temp__5720__auto__)){
var refresh_token = temp__5720__auto__;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48565){
var state_val_48566 = (state_48565[(1)]);
if((state_val_48566 === (1))){
var inst_48540 = ["https://",frontend.config.API_DOMAIN,"/auth_refresh_token?refresh_token=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(refresh_token)].join('');
var inst_48541 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_48542 = [false];
var inst_48543 = cljs.core.PersistentHashMap.fromArrays(inst_48541,inst_48542);
var inst_48544 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_48540,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48543], 0));
var state_48565__$1 = state_48565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48565__$1,(2),inst_48544);
} else {
if((state_val_48566 === (2))){
var inst_48546 = (state_48565[(7)]);
var inst_48546__$1 = (state_48565[(2)]);
var inst_48547 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_48546__$1);
var inst_48548 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((400),inst_48547);
var state_48565__$1 = (function (){var statearr_48568 = state_48565;
(statearr_48568[(7)] = inst_48546__$1);

return statearr_48568;
})();
if(inst_48548){
var statearr_48569_48717 = state_48565__$1;
(statearr_48569_48717[(1)] = (3));

} else {
var statearr_48570_48718 = state_48565__$1;
(statearr_48570_48718[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48566 === (3))){
var inst_48550 = frontend.handler.user.clear_tokens();
var state_48565__$1 = (function (){var statearr_48571 = state_48565;
(statearr_48571[(8)] = inst_48550);

return statearr_48571;
})();
var statearr_48572_48719 = state_48565__$1;
(statearr_48572_48719[(2)] = false);

(statearr_48572_48719[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48566 === (4))){
var inst_48553 = (state_48565[(9)]);
var inst_48546 = (state_48565[(7)]);
var inst_48552 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_48546);
var inst_48553__$1 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_48552) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_48552));
var state_48565__$1 = (function (){var statearr_48573 = state_48565;
(statearr_48573[(9)] = inst_48553__$1);

return statearr_48573;
})();
if(cljs.core.truth_(inst_48553__$1)){
var statearr_48574_48720 = state_48565__$1;
(statearr_48574_48720[(1)] = (6));

} else {
var statearr_48575_48721 = state_48565__$1;
(statearr_48575_48721[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48566 === (5))){
var inst_48563 = (state_48565[(2)]);
var state_48565__$1 = state_48565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48565__$1,inst_48563);
} else {
if((state_val_48566 === (6))){
var inst_48546 = (state_48565[(7)]);
var state_48565__$1 = state_48565;
var statearr_48576_48723 = state_48565__$1;
(statearr_48576_48723[(2)] = inst_48546);

(statearr_48576_48723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48566 === (7))){
var inst_48553 = (state_48565[(9)]);
var state_48565__$1 = state_48565;
var statearr_48577_48724 = state_48565__$1;
(statearr_48577_48724[(2)] = inst_48553);

(statearr_48577_48724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48566 === (8))){
var inst_48557 = (state_48565[(2)]);
var inst_48558 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48557);
var inst_48559 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_48558);
var inst_48560 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_48558);
var inst_48561 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48559,inst_48560);
var state_48565__$1 = (function (){var statearr_48578 = state_48565;
(statearr_48578[(10)] = inst_48561);

return statearr_48578;
})();
var statearr_48579_48726 = state_48565__$1;
(statearr_48579_48726[(2)] = true);

(statearr_48579_48726[(1)] = (5));


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
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__ = null;
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____0 = (function (){
var statearr_48580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48580[(0)] = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__);

(statearr_48580[(1)] = (1));

return statearr_48580;
});
var frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1 = (function (state_48565){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48565);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48581){var ex__27576__auto__ = e48581;
var statearr_48582_48729 = state_48565;
(statearr_48582_48729[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48565[(4)]))){
var statearr_48583_48730 = state_48565;
(statearr_48583_48730[(1)] = cljs.core.first((state_48565[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48731 = state_48565;
state_48565 = G__48731;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__ = function(state_48565){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1.call(this,state_48565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____0;
frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto____1;
return frontend$handler$user$refresh_id_token_AMPERSAND_access_token_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48584 = f__27596__auto__();
(statearr_48584[(6)] = c__27595__auto__);

return statearr_48584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
} else {
return null;
}
});
frontend.handler.user.stop_refresh = false;
frontend.handler.user.refresh_tokens_loop = (function frontend$handler$user$refresh_tokens_loop(){
frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start refresh-tokens-loop"], 0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48621){
var state_val_48622 = (state_48621[(1)]);
if((state_val_48622 === (7))){
var inst_48612 = (state_48621[(2)]);
var state_48621__$1 = (function (){var statearr_48623 = state_48621;
(statearr_48623[(7)] = inst_48612);

return statearr_48623;
})();
if(frontend.handler.user.stop_refresh){
var statearr_48624_48733 = state_48621__$1;
(statearr_48624_48733[(1)] = (14));

} else {
var statearr_48626_48734 = state_48621__$1;
(statearr_48626_48734[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (1))){
var state_48621__$1 = state_48621;
var statearr_48632_48735 = state_48621__$1;
(statearr_48632_48735[(2)] = null);

(statearr_48632_48735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (4))){
var inst_48588 = (state_48621[(2)]);
var inst_48589 = frontend.state.get_auth_refresh_token();
var state_48621__$1 = (function (){var statearr_48633 = state_48621;
(statearr_48633[(8)] = inst_48588);

return statearr_48633;
})();
if(cljs.core.truth_(inst_48589)){
var statearr_48634_48736 = state_48621__$1;
(statearr_48634_48736[(1)] = (5));

} else {
var statearr_48635_48737 = state_48621__$1;
(statearr_48635_48737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (15))){
var state_48621__$1 = state_48621;
var statearr_48636_48738 = state_48621__$1;
(statearr_48636_48738[(2)] = null);

(statearr_48636_48738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (13))){
var inst_48609 = (state_48621[(2)]);
var state_48621__$1 = state_48621;
var statearr_48640_48739 = state_48621__$1;
(statearr_48640_48739[(2)] = inst_48609);

(statearr_48640_48739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (6))){
var state_48621__$1 = state_48621;
var statearr_48641_48740 = state_48621__$1;
(statearr_48641_48740[(2)] = null);

(statearr_48641_48740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (3))){
var inst_48619 = (state_48621[(2)]);
var state_48621__$1 = state_48621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48621__$1,inst_48619);
} else {
if((state_val_48622 === (12))){
var state_48621__$1 = state_48621;
var statearr_48642_48743 = state_48621__$1;
(statearr_48642_48743[(2)] = null);

(statearr_48642_48743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (2))){
var inst_48586 = cljs.core.async.timeout((60000));
var state_48621__$1 = state_48621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48621__$1,(4),inst_48586);
} else {
if((state_val_48622 === (11))){
var inst_48602 = cljs_time.core.now();
var inst_48603 = cljs_time.coerce.to_string(inst_48602);
var inst_48604 = ["refresh tokens... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48603)].join('');
var inst_48605 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48604], 0));
var inst_48606 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_48621__$1 = (function (){var statearr_48643 = state_48621;
(statearr_48643[(9)] = inst_48605);

return statearr_48643;
})();
var statearr_48644_48751 = state_48621__$1;
(statearr_48644_48751[(2)] = inst_48606);

(statearr_48644_48751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (9))){
var inst_48591 = (state_48621[(10)]);
var inst_48596 = frontend.handler.user.parse_jwt(inst_48591);
var inst_48597 = frontend.handler.user.almost_expired_QMARK_(inst_48596);
var state_48621__$1 = state_48621;
var statearr_48647_48752 = state_48621__$1;
(statearr_48647_48752[(2)] = inst_48597);

(statearr_48647_48752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (5))){
var inst_48591 = (state_48621[(10)]);
var inst_48592 = (state_48621[(11)]);
var inst_48591__$1 = frontend.state.get_auth_id_token();
var inst_48592__$1 = (inst_48591__$1 == null);
var state_48621__$1 = (function (){var statearr_48648 = state_48621;
(statearr_48648[(10)] = inst_48591__$1);

(statearr_48648[(11)] = inst_48592__$1);

return statearr_48648;
})();
if(cljs.core.truth_(inst_48592__$1)){
var statearr_48649_48754 = state_48621__$1;
(statearr_48649_48754[(1)] = (8));

} else {
var statearr_48651_48755 = state_48621__$1;
(statearr_48651_48755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (14))){
var state_48621__$1 = state_48621;
var statearr_48660_48756 = state_48621__$1;
(statearr_48660_48756[(2)] = null);

(statearr_48660_48756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (16))){
var inst_48617 = (state_48621[(2)]);
var state_48621__$1 = state_48621;
var statearr_48661_48757 = state_48621__$1;
(statearr_48661_48757[(2)] = inst_48617);

(statearr_48661_48757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (10))){
var inst_48600 = (state_48621[(2)]);
var state_48621__$1 = state_48621;
if(cljs.core.truth_(inst_48600)){
var statearr_48662_48758 = state_48621__$1;
(statearr_48662_48758[(1)] = (11));

} else {
var statearr_48663_48759 = state_48621__$1;
(statearr_48663_48759[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (8))){
var inst_48592 = (state_48621[(11)]);
var state_48621__$1 = state_48621;
var statearr_48665_48760 = state_48621__$1;
(statearr_48665_48760[(2)] = inst_48592);

(statearr_48665_48760[(1)] = (10));


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
});
return (function() {
var frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__ = null;
var frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____0 = (function (){
var statearr_48667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48667[(0)] = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__);

(statearr_48667[(1)] = (1));

return statearr_48667;
});
var frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1 = (function (state_48621){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48621);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48668){var ex__27576__auto__ = e48668;
var statearr_48669_48765 = state_48621;
(statearr_48669_48765[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48621[(4)]))){
var statearr_48670_48766 = state_48621;
(statearr_48670_48766[(1)] = cljs.core.first((state_48621[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48767 = state_48621;
state_48621 = G__48767;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__ = function(state_48621){
switch(arguments.length){
case 0:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1.call(this,state_48621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____0;
frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto____1;
return frontend$handler$user$refresh_tokens_loop_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48671 = f__27596__auto__();
(statearr_48671[(6)] = c__27595__auto__);

return statearr_48671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.handler.user.js.map
