goog.provide('frontend.util.text');
if((typeof frontend !== 'undefined') && (typeof frontend.util !== 'undefined') && (typeof frontend.util.text !== 'undefined') && (typeof frontend.util.text.between_re !== 'undefined')){
} else {
frontend.util.text.between_re = /\(between ([^\)]+)\)/;
}
frontend.util.text.bilibili_regex = /^((?:https?:)?\/\/)?((?:www).)?((?:bilibili.com))(\/(?:video\/)?)([\w-]+)(\S+)?$/;
frontend.util.text.loom_regex = /^((?:https?:)?\/\/)?((?:www).)?((?:loom.com))(\/(?:share\/|embed\/))([\w-]+)(\S+)?$/;
frontend.util.text.vimeo_regex = /^((?:https?:)?\/\/)?((?:www).)?((?:player.vimeo.com|vimeo.com))(\/(?:video\/)?)([\w-]+)(\S+)?$/;
frontend.util.text.youtube_regex = /^((?:https?:)?\/\/)?((?:www|m).)?((?:youtube.com|youtu.be|y2u.be|youtube-nocookie.com))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)([\S^\?]+)?$/;
frontend.util.text.get_matched_video = (function frontend$util$text$get_matched_video(url){
var or__5043__auto__ = cljs.core.re_find(frontend.util.text.youtube_regex,url);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.re_find(frontend.util.text.loom_regex,url);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = cljs.core.re_find(frontend.util.text.vimeo_regex,url);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return cljs.core.re_find(frontend.util.text.bilibili_regex,url);
}
}
}
});
frontend.util.text.build_data_value = (function frontend$util$text$build_data_value(col){
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item),"\""].join('');
}),col);
return goog.string.format("[%s]",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",items));
});
frontend.util.text.media_link_QMARK_ = (function frontend$util$text$media_link_QMARK_(media_formats,s){
return cljs.core.some((function (fmt){
return frontend.util.safe_re_find(cljs.core.re_pattern(["(?i)\\.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt),"(?:\\?([^#]*))?(?:#(.*))?$"].join('')),s);
}),media_formats);
});
frontend.util.text.add_timestamp = (function frontend$util$text$add_timestamp(content,key,value){
var new_line = [clojure.string.upper_case(key),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
var lines = clojure.string.split_lines(content);
var new_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return clojure.string.trim(((clojure.string.starts_with_QMARK_(clojure.string.lower_case(line),key))?new_line:line));
}),lines);
var new_lines__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,lines),new_lines))?new_lines:cljs.core.cons(cljs.core.first(new_lines),cljs.core.cons(new_line,cljs.core.rest(new_lines))));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new_lines__$1);
});
frontend.util.text.remove_timestamp = (function frontend$util$text$remove_timestamp(content,key){
var lines = clojure.string.split_lines(content);
var new_lines = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (line){
return (!(clojure.string.starts_with_QMARK_(clojure.string.lower_case(line),key)));
}),lines);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new_lines);
});
frontend.util.text.get_current_line_by_pos = (function frontend$util$text$get_current_line_by_pos(s,pos){
var lines = clojure.string.split_lines(s);
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,line){
var new_pos = (acc + cljs.core.count(line));
if((new_pos >= pos)){
return cljs.core.reduced(line);
} else {
return (new_pos + (1));
}
}),(0),lines);
if(typeof result === 'string'){
return result;
} else {
return null;
}
});
/**
 * `pos` must be surrounded by `before` and `and` in string `value`, e.g. ((|))
 */
frontend.util.text.surround_by_QMARK_ = (function frontend$util$text$surround_by_QMARK_(value,pos,before,end){
var start_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),before))?(0):(pos - cljs.core.count(before)));
var end_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),end))?cljs.core.count(value):(pos + cljs.core.count(end)));
if((cljs.core.count(value) >= end_pos)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),end)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),before))))?"":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),end))?before:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),before))?end:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(before),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('')
))),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,start_pos,end_pos));
} else {
return null;
}
});
/**
 * Get all indexes of `value` in the string `s`.
 */
frontend.util.text.get_string_all_indexes = (function frontend$util$text$get_string_all_indexes(s,value){
var acc = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
var temp__5718__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,value,i);
if(cljs.core.truth_(temp__5718__auto__)){
var i__$1 = temp__5718__auto__;
var G__58876 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,i__$1);
var G__58877 = (i__$1 + cljs.core.count(value));
acc = G__58876;
i = G__58877;
continue;
} else {
return acc;
}
break;
}
});
/**
 * `pos` must be wrapped by `before` and `and` in string `value`, e.g. ((a|b))
 */
frontend.util.text.wrapped_by_QMARK_ = (function frontend$util$text$wrapped_by_QMARK_(value,pos,before,end){
var before_matches = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"before","before",-1633692388)], null);
}),frontend.util.text.get_string_all_indexes(value,before));
var end_matches = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"end","end",-268185958)], null);
}),frontend.util.text.get_string_all_indexes(value,end));
var indexes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before_matches,end_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,new cljs.core.Keyword(null,"between","between",1131099276)], null)], null)], 0)));
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,indexes);
var q = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"end","end",-268185958)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,k))){
return cljs.core.reduced(true);
} else {
return cljs.core.vec(cljs.core.take_last((2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,k)));
}
}),cljs.core.PersistentVector.EMPTY,ks) === true;
});
frontend.util.text.get_graph_name_from_path = (function frontend$util$text$get_graph_name_from_path(path){
if(typeof path === 'string'){
var parts = cljs.core.take_last((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
return decodeURI(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parts),"0"))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",parts):cljs.core.last(parts)));
} else {
return null;
}
});
frontend.util.text.extract_all_block_refs = (function frontend$util$text$extract_all_block_refs(content){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.re_seq(/\(\(([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})\)\)/,content));
});

//# sourceMappingURL=frontend.util.text.js.map
