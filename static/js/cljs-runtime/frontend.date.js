goog.provide('frontend.date');
goog.scope(function(){
  frontend.date.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$chrono_node$dist$index=shadow.js.require("module$node_modules$chrono_node$dist$index", {});
frontend.date.nld_parse = (function frontend$date$nld_parse(s){
if(typeof s === 'string'){
var fexpr__58996 = frontend.date.goog$module$goog$object.get(module$node_modules$chrono_node$dist$index,"parseDate");
return (fexpr__58996.cljs$core$IFn$_invoke$arity$1 ? fexpr__58996.cljs$core$IFn$_invoke$arity$1(s) : fexpr__58996.call(null,s));
} else {
return null;
}
});
frontend.date.custom_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ");
frontend.date.journal_title_formatters = (function frontend$date$journal_title_formatters(){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 27, ["MM_dd_yyyy",null,"EEE, yyyy/MM/dd",null,"MM-dd-yyyy",null,"yyyy-MM-dd",null,"MM/dd/yyyy",null,"MMM do, yyyy",null,"EEEE, dd.MM.yyyy",null,"do MMM yyyy",null,"EEE, dd-MM-yyyy",null,"yyyyMMdd",null,"EEEE, dd-MM-yyyy",null,"dd-MM-yyyy",null,"dd.MM.yyyy",null,"EEE, MM/dd/yyyy",null,"do MMMM yyyy",null,"E, dd.MM.yyyy",null,"E, MM/dd/yyyy",null,"EEE, dd.MM.yyyy",null,"yyyy\u5E74MM\u6708dd\u65E5",null,"yyyy_MM_dd",null,"EEEE, MM/dd/yyyy",null,"yyyy-MM-dd EEEE",null,"EEEE, yyyy/MM/dd",null,"E, dd-MM-yyyy",null,"E, yyyy/MM/dd",null,"MMMM do, yyyy",null,"yyyy/MM/dd",null], null), null),frontend.state.get_date_formatter());
});
frontend.date.get_date_time_string = (function frontend$date$get_date_time_string(var_args){
var G__58998 = arguments.length;
switch (G__58998) {
case 0:
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
}));

(frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1 = (function (date_time){
return cljs_time.format.unparse(frontend.date.custom_formatter,date_time);
}));

(frontend.date.get_date_time_string.cljs$lang$maxFixedArity = 1);

frontend.date.get_locale_string = (function frontend$date$get_locale_string(s){
try{return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMM do, yyyy"),cljs_time.core.to_default_time_zone(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671)) : cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671))),s)));
}catch (e59002){if((e59002 instanceof Error)){
var _e = e59002;
return null;
} else {
throw e59002;

}
}});
frontend.date.custom_formatter_2 = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd-HH-mm-ss");
frontend.date.get_date_time_string_2 = (function frontend$date$get_date_time_string_2(){
return cljs_time.format.unparse(frontend.date.custom_formatter_2,cljs_time.local.local_now());
});
frontend.date.custom_formatter_3 = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd E HH:mm");
frontend.date.get_date_time_string_3 = (function frontend$date$get_date_time_string_3(){
return cljs_time.format.unparse(frontend.date.custom_formatter_3,cljs_time.local.local_now());
});
frontend.date.custom_formatter_4 = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd E HH:mm:ss");
frontend.date.get_date_time_string_4 = (function frontend$date$get_date_time_string_4(){
return cljs_time.format.unparse(frontend.date.custom_formatter_4,cljs_time.local.local_now());
});
frontend.date.get_weekday = (function frontend$date$get_weekday(date){
return date.toLocaleString("en-us",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weekday","weekday",-1413046442),"long"], null)));
});
frontend.date.get_date = (function frontend$date$get_date(var_args){
var G__59004 = arguments.length;
switch (G__59004) {
case 0:
return frontend.date.get_date.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.get_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.get_date.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.get_date.cljs$core$IFn$_invoke$arity$1((new Date()));
}));

(frontend.date.get_date.cljs$core$IFn$_invoke$arity$1 = (function (date){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"year","year",335913393),date.getFullYear(),new cljs.core.Keyword(null,"month","month",-1960248533),(date.getMonth() + (1)),new cljs.core.Keyword(null,"day","day",-274800446),date.getDate(),new cljs.core.Keyword(null,"weekday","weekday",-1413046442),frontend.date.get_weekday(date)], null);
}));

(frontend.date.get_date.cljs$lang$maxFixedArity = 1);

frontend.date.year_month_day_padded = (function frontend$date$year_month_day_padded(var_args){
var G__59007 = arguments.length;
switch (G__59007) {
case 0:
return frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$1(frontend.date.get_date.cljs$core$IFn$_invoke$arity$0());
}));

(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$1 = (function (date){
var map__59009 = date;
var map__59009__$1 = cljs.core.__destructure_map(map__59009);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59009__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59009__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59009__$1,new cljs.core.Keyword(null,"day","day",-274800446));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),frontend.util.zero_pad(month),new cljs.core.Keyword(null,"day","day",-274800446),frontend.util.zero_pad(day)], null);
}));

(frontend.date.year_month_day_padded.cljs$lang$maxFixedArity = 1);

frontend.date.journal_name = (function frontend$date$journal_name(var_args){
var G__59012 = arguments.length;
switch (G__59012) {
case 0:
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.local.local_now());
}));

(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1 = (function (date){
return logseq.graph_parser.date_time_util.format(date,frontend.state.get_date_formatter());
}));

(frontend.date.journal_name.cljs$lang$maxFixedArity = 1);

frontend.date.journal_name_s = (function frontend$date$journal_name_s(s){
try{return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),s));
}catch (e59015){if((e59015 instanceof Error)){
var _e = e59015;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.date",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parse-journal-date","parse-journal-date",-1090640805),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Unable to parse date to journal name, skipping.",new cljs.core.Keyword(null,"date-str","date-str",1641747607),s], null),new cljs.core.Keyword(null,"line","line",212345235),113], null)),null);

return null;
} else {
throw e59015;

}
}});
frontend.date.today = (function frontend$date$today(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();
});
frontend.date.tomorrow = (function frontend$date$tomorrow(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
});
frontend.date.yesterday = (function frontend$date$yesterday(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
});
frontend.date.ymd = (function frontend$date$ymd(var_args){
var G__59021 = arguments.length;
switch (G__59021) {
case 0:
return frontend.date.ymd.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.ymd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.date.ymd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.ymd.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.ymd.cljs$core$IFn$_invoke$arity$1((new Date()));
}));

(frontend.date.ymd.cljs$core$IFn$_invoke$arity$1 = (function (date){
return frontend.date.ymd.cljs$core$IFn$_invoke$arity$2(date,"/");
}));

(frontend.date.ymd.cljs$core$IFn$_invoke$arity$2 = (function (date,sep){
var map__59023 = frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$1(frontend.date.get_date.cljs$core$IFn$_invoke$arity$1(date));
var map__59023__$1 = cljs.core.__destructure_map(map__59023);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"day","day",-274800446));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('');
}));

(frontend.date.ymd.cljs$lang$maxFixedArity = 2);

frontend.date.get_local_date = (function frontend$date$get_local_date(){
var date = (new Date());
var year = date.getFullYear();
var month = (date.getMonth() + (1));
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"day","day",-274800446),day,new cljs.core.Keyword(null,"hour","hour",-555989214),hour,new cljs.core.Keyword(null,"minute","minute",-642875969),minute], null);
});
frontend.date.get_current_time = (function frontend$date$get_current_time(){
var d = (new Date());
return d.toLocaleTimeString(frontend.date.goog$module$goog$object.get(window.navigator,"language"),cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hour","hour",-555989214),"2-digit",new cljs.core.Keyword(null,"minute","minute",-642875969),"2-digit",new cljs.core.Keyword(null,"hourCycle","hourCycle",-1723448226),"h23"], null)));
});
frontend.date.valid_QMARK_ = (function frontend$date$valid_QMARK_(s){
return cljs.core.some((function (formatter){
try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(formatter),s);
}catch (e59032){if((e59032 instanceof Error)){
var _e = e59032;
return false;
} else {
throw e59032;

}
}}),frontend.date.journal_title_formatters());
});
frontend.date.valid_journal_title_QMARK_ = (function frontend$date$valid_journal_title_QMARK_(title){
var and__5041__auto__ = title;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.date.valid_QMARK_(logseq.graph_parser.util.capitalize_all(title));
} else {
return and__5041__auto__;
}
});
frontend.date.journal_title__GT_ = (function frontend$date$journal_title__GT_(var_args){
var G__59036 = arguments.length;
switch (G__59036) {
case 2:
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2 = (function (journal_title,then_fn){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3(journal_title,then_fn,logseq.graph_parser.date_time_util.safe_journal_title_formatters(frontend.state.get_date_formatter()));
}));

(frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3 = (function (journal_title,then_fn,formatters){
return logseq.graph_parser.date_time_util.journal_title__GT_(journal_title,then_fn,formatters);
}));

(frontend.date.journal_title__GT_.cljs$lang$maxFixedArity = 3);

frontend.date.journal_title__GT_int = (function frontend$date$journal_title__GT_int(journal_title){
return logseq.graph_parser.date_time_util.journal_title__GT_int(journal_title,logseq.graph_parser.date_time_util.safe_journal_title_formatters(frontend.state.get_date_formatter()));
});
frontend.date.journal_day__GT_ts = (function frontend$date$journal_day__GT_ts(day){
if(cljs.core.truth_(day)){
return cljs_time.coerce.to_long(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)));
} else {
return null;
}
});
frontend.date.journal_title__GT_long = (function frontend$date$journal_title__GT_long(journal_title){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title,(function (p1__59042_SHARP_){
return cljs_time.coerce.to_long(p1__59042_SHARP_);
}));
});
frontend.date.default_journal_title_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy_MM_dd");
frontend.date.journal_title__GT_default = (function frontend$date$journal_title__GT_default(journal_title){
var formatter = (function (){var temp__5718__auto__ = frontend.state.get_journal_file_name_format();
if(cljs.core.truth_(temp__5718__auto__)){
var format = temp__5718__auto__;
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format);
} else {
return frontend.date.default_journal_title_formatter;
}
})();
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title,(function (p1__59044_SHARP_){
return cljs_time.format.unparse(formatter,p1__59044_SHARP_);
}));
});
frontend.date.date__GT_file_name = (function frontend$date$date__GT_file_name(date){
var formatter = (function (){var temp__5718__auto__ = frontend.state.get_journal_file_name_format();
if(cljs.core.truth_(temp__5718__auto__)){
var format = temp__5718__auto__;
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format);
} else {
return frontend.date.default_journal_title_formatter;
}
})();
return cljs_time.format.unparse(formatter,date);
});
frontend.date.journal_title__GT_custom_format = (function frontend$date$journal_title__GT_custom_format(journal_title){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title,(function (p1__59053_SHARP_){
return logseq.graph_parser.date_time_util.format(p1__59053_SHARP_,frontend.state.get_date_formatter());
}));
});
frontend.date.int__GT_local_time_2 = (function frontend$date$int__GT_local_time_2(n){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm"),cljs_time.core.to_default_time_zone(cljs_time.coerce.from_long(n)));
});

//# sourceMappingURL=frontend.date.js.map
