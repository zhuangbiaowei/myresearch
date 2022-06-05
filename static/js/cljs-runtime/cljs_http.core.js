goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = (function (){var fexpr__85119 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__85119.cljs$core$IFn$_invoke$arity$1 ? fexpr__85119.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__85119.call(null,channel));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__85132){
var vec__85133 = p__85132;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85133,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__85141 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__85141)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__85141)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__85141)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__85141)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__85141)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__85141)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85141)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__85142){
var map__85143 = p__85142;
var map__85143__$1 = cljs.core.__destructure_map(map__85143);
var request = map__85143__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85143__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85143__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85143__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__85145 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__85145,default_headers);

cljs_http.core.apply_response_type_BANG_(G__85145,response_type);

G__85145.setTimeoutInterval(timeout);

G__85145.setWithCredentials(send_credentials);

return G__85145;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__85146){
var map__85148 = p__85146;
var map__85148__$1 = cljs.core.__destructure_map(map__85148);
var request = map__85148__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85148__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85148__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85148__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85148__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85148__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85148__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5043__auto__ = request_method;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__85151 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__85151) : cljs_http.core.error_kw.call(null,G__85151));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_85234 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__85161_85235 = xhr;
G__85161_85235.setProgressEventsEnabled(true);

G__85161_85235.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_85234,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__85161_85235.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_85234,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__34378__auto___85236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_85172){
var state_val_85173 = (state_85172[(1)]);
if((state_val_85173 === (1))){
var state_85172__$1 = state_85172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85172__$1,(2),cancel);
} else {
if((state_val_85173 === (2))){
var inst_85163 = (state_85172[(2)]);
var inst_85164 = xhr.isComplete();
var inst_85165 = cljs.core.not(inst_85164);
var state_85172__$1 = (function (){var statearr_85174 = state_85172;
(statearr_85174[(7)] = inst_85163);

return statearr_85174;
})();
if(inst_85165){
var statearr_85176_85237 = state_85172__$1;
(statearr_85176_85237[(1)] = (3));

} else {
var statearr_85177_85238 = state_85172__$1;
(statearr_85177_85238[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85173 === (3))){
var inst_85167 = xhr.abort();
var state_85172__$1 = state_85172;
var statearr_85178_85239 = state_85172__$1;
(statearr_85178_85239[(2)] = inst_85167);

(statearr_85178_85239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85173 === (4))){
var state_85172__$1 = state_85172;
var statearr_85179_85240 = state_85172__$1;
(statearr_85179_85240[(2)] = null);

(statearr_85179_85240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85173 === (5))){
var inst_85170 = (state_85172[(2)]);
var state_85172__$1 = state_85172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_85172__$1,inst_85170);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__34225__auto__ = null;
var cljs_http$core$xhr_$_state_machine__34225__auto____0 = (function (){
var statearr_85180 = [null,null,null,null,null,null,null,null];
(statearr_85180[(0)] = cljs_http$core$xhr_$_state_machine__34225__auto__);

(statearr_85180[(1)] = (1));

return statearr_85180;
});
var cljs_http$core$xhr_$_state_machine__34225__auto____1 = (function (state_85172){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_85172);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e85181){var ex__34228__auto__ = e85181;
var statearr_85182_85241 = state_85172;
(statearr_85182_85241[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_85172[(4)]))){
var statearr_85183_85242 = state_85172;
(statearr_85183_85242[(1)] = cljs.core.first((state_85172[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85243 = state_85172;
state_85172 = G__85243;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__34225__auto__ = function(state_85172){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__34225__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__34225__auto____1.call(this,state_85172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__34225__auto____0;
cljs_http$core$xhr_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__34225__auto____1;
return cljs_http$core$xhr_$_state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_85184 = f__34379__auto__();
(statearr_85184[(6)] = c__34378__auto___85236);

return statearr_85184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__85186){
var map__85187 = p__85186;
var map__85187__$1 = cljs.core.__destructure_map(map__85187);
var request = map__85187__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85187__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85187__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85187__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85187__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_85244 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_85244], null));

if(cljs.core.truth_(cancel)){
var c__34378__auto___85245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_85192){
var state_val_85193 = (state_85192[(1)]);
if((state_val_85193 === (1))){
var state_85192__$1 = state_85192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_85192__$1,(2),cancel);
} else {
if((state_val_85193 === (2))){
var inst_85189 = (state_85192[(2)]);
var inst_85190 = jsonp.cancel(req_85244);
var state_85192__$1 = (function (){var statearr_85195 = state_85192;
(statearr_85195[(7)] = inst_85189);

return statearr_85195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_85192__$1,inst_85190);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__34225__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__34225__auto____0 = (function (){
var statearr_85196 = [null,null,null,null,null,null,null,null];
(statearr_85196[(0)] = cljs_http$core$jsonp_$_state_machine__34225__auto__);

(statearr_85196[(1)] = (1));

return statearr_85196;
});
var cljs_http$core$jsonp_$_state_machine__34225__auto____1 = (function (state_85192){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_85192);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e85198){var ex__34228__auto__ = e85198;
var statearr_85199_85246 = state_85192;
(statearr_85199_85246[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_85192[(4)]))){
var statearr_85201_85247 = state_85192;
(statearr_85201_85247[(1)] = cljs.core.first((state_85192[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85248 = state_85192;
state_85192 = G__85248;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__34225__auto__ = function(state_85192){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__34225__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__34225__auto____1.call(this,state_85192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__34225__auto____0;
cljs_http$core$jsonp_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__34225__auto____1;
return cljs_http$core$jsonp_$_state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_85203 = f__34379__auto__();
(statearr_85203[(6)] = c__34378__auto___85245);

return statearr_85203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__85207){
var map__85208 = p__85207;
var map__85208__$1 = cljs.core.__destructure_map(map__85208);
var request = map__85208__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85208__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
