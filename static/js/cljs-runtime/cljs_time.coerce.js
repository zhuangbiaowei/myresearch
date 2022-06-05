goog.provide('cljs_time.coerce');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_52170 = (function (obj){
var x__5390__auto__ = (((obj == null))?null:obj);
var m__5391__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5391__auto__.call(null,obj));
} else {
var m__5389__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5389__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_52170(obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__52082 = millis;
if((G__52082 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__52082) : goog.date.UtcDateTime.fromTimestamp.call(null,G__52082));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__5520__auto__ = (function cljs_time$coerce$from_string_$_iter__52085(s__52086){
return (new cljs.core.LazySeq(null,(function (){
var s__52086__$1 = s__52086;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__52086__$1);
if(temp__5720__auto__){
var s__52086__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52086__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__52086__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__52088 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__52087 = (0);
while(true){
if((i__52087 < size__5519__auto__)){
var f = cljs.core._nth(c__5518__auto__,i__52087);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e52094){if((e52094 instanceof Error)){
var _ = e52094;
return null;
} else {
throw e52094;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__52088,d);

var G__52189 = (i__52087 + (1));
i__52087 = G__52189;
continue;
} else {
var G__52190 = (i__52087 + (1));
i__52087 = G__52190;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52088),cljs_time$coerce$from_string_$_iter__52085(cljs.core.chunk_rest(s__52086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52088),null);
}
} else {
var f = cljs.core.first(s__52086__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e52095){if((e52095 instanceof Error)){
var _ = e52095;
return null;
} else {
throw e52095;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__52085(cljs.core.rest(s__52086__$2)));
} else {
var G__52193 = cljs.core.rest(s__52086__$2);
s__52086__$1 = G__52193;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__52100 = date;
var G__52100__$1 = (((G__52100 == null))?null:G__52100.getTime());
if((G__52100__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__52100__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__52102 = obj;
var G__52102__$1 = (((G__52102 == null))?null:cljs_time.coerce.to_date_time(G__52102));
if((G__52102__$1 == null)){
return null;
} else {
return G__52102__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__5041__auto__ = millis;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__5041__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__52105 = obj;
var G__52105__$1 = (((G__52105 == null))?null:cljs_time.coerce.to_date_time(G__52105));
var G__52105__$2 = (((G__52105__$1 == null))?null:G__52105__$1.getTime());
if((G__52105__$2 == null)){
return null;
} else {
return (new Date(G__52105__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__52134 = obj;
var G__52134__$1 = (((G__52134 == null))?null:cljs_time.coerce.to_date_time(G__52134));
if((G__52134__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__52134__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5718__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5718__auto__)){
var dt = temp__5718__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5718__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5718__auto__)){
var dt = temp__5718__auto__;
var G__52144 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__52144.setHours(dt.getHours());

G__52144.setMinutes(dt.getMinutes());

G__52144.setSeconds(dt.getSeconds());

G__52144.setMilliseconds(dt.getMilliseconds());

return G__52144;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long(long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string(string);
}));

//# sourceMappingURL=cljs_time.coerce.js.map
