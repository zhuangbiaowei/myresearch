goog.provide('frontend.util.clock');
frontend.util.clock.minutes__GT_hours_COLON_minutes = (function frontend$util$clock$minutes__GT_hours_COLON_minutes(minutes){
var hours = cljs.core.quot(minutes,(60));
var minutes__$1 = cljs.core.mod(minutes,(60));
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%02d:%02d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hours,minutes__$1], 0));
});
frontend.util.clock.seconds__GT_hours_COLON_minutes_COLON_seconds = (function frontend$util$clock$seconds__GT_hours_COLON_minutes_COLON_seconds(seconds){
var hours = cljs.core.quot(seconds,(3600));
var minutes = cljs.core.quot((seconds - (hours * (3600))),(60));
var seconds__$1 = cljs.core.mod(seconds,(60));
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%02d:%02d:%02d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hours,minutes,seconds__$1], 0));
});
frontend.util.clock.minutes__GT_days_COLON_hours_COLON_minutes = (function frontend$util$clock$minutes__GT_days_COLON_hours_COLON_minutes(minutes){
var days = cljs.core.quot(cljs.core.quot(minutes,(60)),(24));
var hours = cljs.core.quot((minutes - ((days * (60)) * (24))),(60));
var minutes__$1 = cljs.core.mod(minutes,(60));
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((days === (0)))?"":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(days),"d"].join('')),(((hours === (0)))?"":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hours),"h"].join('')),(((minutes__$1 === (0)))?"":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes__$1),"m"].join(''))], 0));
});
frontend.util.clock.support_seconds_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logbook","settings","logbook/settings",824968896),new cljs.core.Keyword(null,"with-second-support?","with-second-support?",1045118886)], null),true);
frontend.util.clock.now = (function frontend$util$clock$now(){
if(cljs.core.truth_(frontend.util.clock.support_seconds_QMARK_)){
return frontend.date.get_date_time_string_4();
} else {
return frontend.date.get_date_time_string_3();
}
});
frontend.util.clock.clock_interval = (function frontend$util$clock$clock_interval(stime,etime){
var vec__83077 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83076_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.clock.support_seconds_QMARK_)?frontend.date.custom_formatter_4:frontend.date.custom_formatter_3),p1__83076_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stime,etime], null));
var stime__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83077,(0),null);
var etime__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83077,(1),null);
var interval = cljs_time.core.interval(stime__$1,etime__$1);
var minutes = cljs_time.core.in_minutes(interval);
var seconds = cljs_time.core.in_seconds(interval);
if(cljs.core.truth_(frontend.util.clock.support_seconds_QMARK_)){
return frontend.util.clock.seconds__GT_hours_COLON_minutes_COLON_seconds(seconds);
} else {
return frontend.util.clock.minutes__GT_hours_COLON_minutes(minutes);
}
});
frontend.util.clock.clock_in = (function frontend$util$clock$clock_in(format,content){
return frontend.util.drawer.insert_drawer(format,content,"logbook",frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("CLOCK: [%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.clock.now()], 0)));
});
frontend.util.clock.clock_out = (function frontend$util$clock$clock_out(format,content){
try{var or__5043__auto__ = (function (){var temp__5720__auto__ = cljs.core.last(cljs.core.last(frontend.util.drawer.get_drawer_ast(format,content,"logbook")));
if(cljs.core.truth_(temp__5720__auto__)){
var clock_in_log = temp__5720__auto__;
var clock_in_log__$1 = clojure.string.trim(clock_in_log);
if(clojure.string.starts_with_QMARK_(clock_in_log__$1,"CLOCK:")){
var clock_start = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clock_in_log__$1,(8),(((clock_in_log__$1).length) - (1)));
var clock_end = frontend.util.clock.now();
var clock_span = frontend.util.clock.clock_interval(clock_start,clock_end);
var clock_out_log = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("CLOCK: [%s]--[%s] =>  %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clock_start,clock_end,clock_span], 0));
return clojure.string.replace(content,[clock_in_log__$1,"\n"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clock_out_log),"\n"].join(''));
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return content;
}
}catch (e83080){if((e83080 instanceof Error)){
var _e = e83080;
return content;
} else {
throw e83080;

}
}});
frontend.util.clock.clock_summary = (function frontend$util$clock$clock_summary(body,string_QMARK_){
var temp__5720__auto__ = frontend.util.drawer.get_logbook(body);
if(cljs.core.truth_(temp__5720__auto__)){
var logbook = temp__5720__auto__;
var temp__5720__auto____$1 = cljs.core.last(logbook);
if(cljs.core.truth_(temp__5720__auto____$1)){
var logbook_lines = temp__5720__auto____$1;
var temp__5720__auto____$2 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83081_SHARP_){
return clojure.string.starts_with_QMARK_(p1__83081_SHARP_,"CLOCK:");
}),logbook_lines));
if(temp__5720__auto____$2){
var clock_lines = temp__5720__auto____$2;
var vec__83084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83083_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,p1__83083_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83082_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__83082_SHARP_,"=>"))),":");
}),clock_lines)));
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83084,(0),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83084,(1),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83084,(2),null);
var duration = cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"hours","hours",58380855),hours,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds], 0));
var duration_in_minutes = cljs_time.core.in_minutes(duration);
var zero_minutes_QMARK_ = (duration_in_minutes === (0));
if(cljs.core.truth_(string_QMARK_)){
if(zero_minutes_QMARK_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(seconds),"s"].join('');
} else {
return clojure.string.replace(clojure.string.replace(clojure.string.replace(cljs_time.format.unparse_duration(duration),/\s+days?\s+/,"d"),/\s+hours?\s+/,"h"),/\s+minutes?$/,"m");
}
} else {
if(zero_minutes_QMARK_){
return seconds;
} else {
return duration_in_minutes;
}
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.util.clock.js.map
