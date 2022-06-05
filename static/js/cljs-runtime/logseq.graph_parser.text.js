goog.provide('logseq.graph_parser.text');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
logseq.graph_parser.text.page_ref_re_0 = /\[\[(.*)\]\]/;
logseq.graph_parser.text.org_page_ref_re = /\[\[(file:.*)\]\[.+?\]\]/;
logseq.graph_parser.text.markdown_page_ref_re = /\[(.*)\]\(file:.*\)/;
logseq.graph_parser.text.get_file_basename = (function logseq$graph_parser$text$get_file_basename(path){
if(clojure.string.blank_QMARK_(path)){
return null;
} else {
return module$node_modules$path$path.parse(clojure.string.replace(path,"+","/")).name;
}
});
logseq.graph_parser.text.get_page_name = (function logseq$graph_parser$text$get_page_name(s){
var and__5041__auto__ = typeof s === 'string';
if(and__5041__auto__){
var or__5043__auto__ = (function (){var temp__5720__auto__ = cljs.core.re_matches(logseq.graph_parser.text.markdown_page_ref_re,s);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__59181 = temp__5720__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59181,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59181,(1),null);
var _path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59181,(2),null);
return clojure.string.trim(label);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.re_matches(logseq.graph_parser.text.org_page_ref_re,s);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__59184 = temp__5720__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59184,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59184,(1),null);
var _label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59184,(2),null);
var G__59187 = logseq.graph_parser.text.get_file_basename(path);
if((G__59187 == null)){
return null;
} else {
return clojure.string.replace(G__59187,".","/");
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.second(cljs.core.re_matches(logseq.graph_parser.text.page_ref_re_0,s));
}
}
} else {
return and__5041__auto__;
}
});
logseq.graph_parser.text.page_ref_QMARK_ = (function logseq$graph_parser$text$page_ref_QMARK_(s){
return ((typeof s === 'string') && (((clojure.string.starts_with_QMARK_(s,"[[")) && (clojure.string.ends_with_QMARK_(s,"]]")))));
});
logseq.graph_parser.text.block_ref_re = /\(\(([a-zA-z0-9]{8}-[a-zA-z0-9]{4}-[a-zA-z0-9]{4}-[a-zA-z0-9]{4}-[a-zA-z0-9]{12})\)\)/;
logseq.graph_parser.text.get_block_ref = (function logseq$graph_parser$text$get_block_ref(s){
var and__5041__auto__ = typeof s === 'string';
if(and__5041__auto__){
return cljs.core.second(cljs.core.re_matches(logseq.graph_parser.text.block_ref_re,s));
} else {
return and__5041__auto__;
}
});
logseq.graph_parser.text.block_ref_QMARK_ = (function logseq$graph_parser$text$block_ref_QMARK_(s){
return cljs.core.boolean$(logseq.graph_parser.text.get_block_ref(s));
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.text !== 'undefined') && (typeof logseq.graph_parser.text.page_ref_re !== 'undefined')){
} else {
logseq.graph_parser.text.page_ref_re = /\[\[(.*?)\]\]/;
}
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.text !== 'undefined') && (typeof logseq.graph_parser.text.page_ref_re_2 !== 'undefined')){
} else {
logseq.graph_parser.text.page_ref_re_2 = /(\[\[.*?\]\])/;
}
logseq.graph_parser.text.page_ref_re_without_nested = /\[\[([^\[\]]+)\]\]/;
logseq.graph_parser.text.page_ref_un_brackets_BANG_ = (function logseq$graph_parser$text$page_ref_un_brackets_BANG_(s){
var or__5043__auto__ = logseq.graph_parser.text.get_page_name(s);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return s;
}
});
logseq.graph_parser.text.block_ref_un_brackets_BANG_ = (function logseq$graph_parser$text$block_ref_un_brackets_BANG_(s){
if(typeof s === 'string'){
if(logseq.graph_parser.text.block_ref_QMARK_(s)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),(((s).length) - (2)));
} else {
return s;
}
} else {
return null;
}
});
logseq.graph_parser.text.sep_by_comma = (function logseq$graph_parser$text$sep_by_comma(s){
if(cljs.core.truth_(s)){
var G__59188 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/[\,|，]{1}/);
var G__59188__$1 = (((G__59188 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,G__59188));
if((G__59188__$1 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,G__59188__$1);
}
} else {
return null;
}
});
logseq.graph_parser.text.sep_by_hashtag = (function logseq$graph_parser$text$sep_by_hashtag(s){
if(cljs.core.truth_(s)){
var G__59189 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/#/);
var G__59189__$1 = (((G__59189 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,G__59189));
if((G__59189__$1 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,G__59189__$1);
}
} else {
return null;
}
});
logseq.graph_parser.text.not_matched_nested_pages = (function logseq$graph_parser$text$not_matched_nested_pages(s){
return ((typeof s === 'string') && ((cljs.core.count(cljs.core.re_seq(/\[\[/,s)) > cljs.core.count(cljs.core.re_seq(/\]\]/,s)))));
});
logseq.graph_parser.text.ref_matched_QMARK_ = (function logseq$graph_parser$text$ref_matched_QMARK_(s){
var x = cljs.core.re_seq(/\[\[/,s);
var y = cljs.core.re_seq(/\]\]/,s);
return (((cljs.core.count(x) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y))));
});
logseq.graph_parser.text.get_nested_page_name = (function logseq$graph_parser$text$get_nested_page_name(page_name){
var temp__5720__auto__ = cljs.core.re_find(logseq.graph_parser.text.page_ref_re_without_nested,page_name);
if(cljs.core.truth_(temp__5720__auto__)){
var first_match = temp__5720__auto__;
return cljs.core.second(first_match);
} else {
return null;
}
});
logseq.graph_parser.text.concat_nested_pages = (function logseq$graph_parser$text$concat_nested_pages(coll){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__59190,s){
var vec__59191 = p__59190;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59191,(0),null);
var not_matched_s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59191,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = not_matched_s;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"]]");
} else {
return and__5041__auto__;
}
})())){
var s_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_matched_s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
if(logseq.graph_parser.text.ref_matched_QMARK_(s_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,s_SINGLEQUOTE_),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,s_SINGLEQUOTE_], null);
}
} else {
if(cljs.core.truth_(not_matched_s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_matched_s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null);
} else {
if(logseq.graph_parser.text.not_matched_nested_pages(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,s], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,s),not_matched_s], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),coll));
});
logseq.graph_parser.text.sep_by_quotes = (function logseq$graph_parser$text$sep_by_quotes(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(\"[^\"]*\")/);
});
logseq.graph_parser.text.markdown_link = /\[([^\[]+)\](\(.*\))/;
logseq.graph_parser.text.split_page_refs_without_brackets = (function logseq$graph_parser$text$split_page_refs_without_brackets(var_args){
var G__59196 = arguments.length;
switch (G__59196) {
case 1:
return logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$1 = (function (s){
return logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$2 = (function (s,p__59197){
var map__59198 = p__59197;
var map__59198__$1 = cljs.core.__destructure_map(map__59198);
var un_brackets_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59198__$1,new cljs.core.Keyword(null,"un-brackets?","un-brackets?",518613875),true);
if(((typeof s === 'string') && (logseq.graph_parser.util.wrapped_by_quotes_QMARK_(s)))){
return logseq.graph_parser.util.unquote_string(s);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = typeof s === 'string';
if(and__5041__auto__){
return cljs.core.re_find(logseq.graph_parser.text.markdown_link,s);
} else {
return and__5041__auto__;
}
})())){
return s;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = typeof s === 'string';
if(and__5041__auto__){
var or__5043__auto__ = logseq.graph_parser.util.safe_re_find(logseq.graph_parser.text.page_ref_re,s);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return logseq.graph_parser.util.safe_re_find(/[\,|，|#|\"]+/,s);
}
} else {
return and__5041__auto__;
}
})())){
var result = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s__$1){
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(s__$1)){
return null;
} else {
if(logseq.graph_parser.text.page_ref_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(un_brackets_QMARK_)?logseq.graph_parser.text.page_ref_un_brackets_BANG_(s__$1):s__$1)], null);
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.graph_parser.text.sep_by_hashtag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.text.sep_by_comma(s__$1)], 0));

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,logseq.graph_parser.text.concat_nested_pages(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s__$1){
if(clojure.string.ends_with_QMARK_(s__$1,"]]")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),(cljs.core.count(s__$1) - (2))),"]]"], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59194_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__59194_SHARP_,"");
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s__$1){
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(s__$1)){
return null;
} else {
if(clojure.string.includes_QMARK_(clojure.string.trimr(s__$1),"]],")){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s__$1,"]],");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),idx),"]]",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(idx + (3)))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1], null);

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s__$1){
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(clojure.string.trim(s__$1))){
return null;
} else {
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,logseq.graph_parser.text.page_ref_re_2);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.text.sep_by_quotes(s)], 0))], 0)))], 0))))], 0)));
if(((cljs.core.coll_QMARK_(result)) || (((typeof result === 'string') && (clojure.string.starts_with_QMARK_(result,"#")))))){
var result__$1 = (cljs.core.truth_(cljs.core.coll_QMARK_)?result:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null));
var result__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s__$1){
return clojure.string.replace(s__$1,/^#+/,"");
}),result__$1);
return cljs.core.set(result__$2);
} else {
return cljs.core.first(result);
}
} else {
return s;

}
}
}
}));

(logseq.graph_parser.text.split_page_refs_without_brackets.cljs$lang$maxFixedArity = 2);

logseq.graph_parser.text.remove_level_space_aux_BANG_ = (function logseq$graph_parser$text$remove_level_space_aux_BANG_(text,pattern,space_QMARK_,trim_left_QMARK_){
var pattern__$1 = goog.string.format((cljs.core.truth_(space_QMARK_)?"^[%s]+\\s+":"^[%s]+\\s?"),pattern);
var text__$1 = (cljs.core.truth_(trim_left_QMARK_)?clojure.string.triml(text):text);
return clojure.string.replace_first(text__$1,cljs.core.re_pattern(pattern__$1),"");
});
logseq.graph_parser.text.remove_level_spaces = (function logseq$graph_parser$text$remove_level_spaces(var_args){
var G__59200 = arguments.length;
switch (G__59200) {
case 3:
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$3 = (function (text,format,block_pattern){
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5(text,format,block_pattern,false,true);
}));

(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$4 = (function (text,format,block_pattern,space_QMARK_){
return logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5(text,format,block_pattern,space_QMARK_,true);
}));

(logseq.graph_parser.text.remove_level_spaces.cljs$core$IFn$_invoke$arity$5 = (function (text,format,block_pattern,space_QMARK_,trim_left_QMARK_){
if(cljs.core.truth_(format)){
if(clojure.string.blank_QMARK_(text)){
return "";
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("markdown",cljs.core.name(format))) && (clojure.string.starts_with_QMARK_(text,"---")))){
return text;
} else {
return logseq.graph_parser.text.remove_level_space_aux_BANG_(text,block_pattern,space_QMARK_,trim_left_QMARK_);

}
}
} else {
return null;
}
}));

(logseq.graph_parser.text.remove_level_spaces.cljs$lang$maxFixedArity = 5);

logseq.graph_parser.text.namespace_page_QMARK_ = (function logseq$graph_parser$text$namespace_page_QMARK_(p){
return ((typeof p === 'string') && (((clojure.string.includes_QMARK_(p,"/")) && ((((!(clojure.string.starts_with_QMARK_(p,"../")))) && ((((!(clojure.string.starts_with_QMARK_(p,"./")))) && (cljs.core.not(logseq.graph_parser.util.url_QMARK_(p))))))))));
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.text !== 'undefined') && (typeof logseq.graph_parser.text.non_parsing_properties !== 'undefined')){
} else {
logseq.graph_parser.text.non_parsing_properties = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["background-color",null,"background_color",null], null), null));
}
logseq.graph_parser.text.parse_property = (function logseq$graph_parser$text$parse_property(var_args){
var G__59202 = arguments.length;
switch (G__59202) {
case 3:
return logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$3 = (function (k,v,config_state){
return logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"markdown","markdown",1227225089),k,v,config_state);
}));

(logseq.graph_parser.text.parse_property.cljs$core$IFn$_invoke$arity$4 = (function (format,k,v,config_state){
var k__$1 = cljs.core.name(k);
var v__$1 = (((((v instanceof cljs.core.Symbol)) || ((v instanceof cljs.core.Keyword))))?cljs.core.name(v):cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
var v__$2 = clojure.string.trim(v__$1);
if(cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["filters",null,"title",null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(config_state,new cljs.core.Keyword(null,"ignored-page-references-keywords","ignored-page-references-keywords",44006978))),k__$1)){
return v__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$2,"true")){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$2,"false")){
return false;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,"alias");
if(and__5041__auto__){
return logseq.graph_parser.util.safe_re_find(/^\d+$/,v__$2);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.parse_long(v__$2);
} else {
if(logseq.graph_parser.util.wrapped_by_quotes_QMARK_(v__$2)){
return v__$2;
} else {
if(cljs.core.contains_QMARK_(cljs.core.deref(logseq.graph_parser.text.non_parsing_properties),clojure.string.lower_case(k__$1))){
return v__$2;
} else {
if(cljs.core.truth_(logseq.graph_parser.mldoc.link_QMARK_(format,v__$2))){
return v__$2;
} else {
return logseq.graph_parser.text.split_page_refs_without_brackets.cljs$core$IFn$_invoke$arity$1(v__$2);

}
}
}
}
}
}
}
}));

(logseq.graph_parser.text.parse_property.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=logseq.graph_parser.text.js.map
