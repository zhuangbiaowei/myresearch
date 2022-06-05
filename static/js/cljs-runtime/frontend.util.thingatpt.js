goog.provide('frontend.util.thingatpt');
goog.scope(function(){
  frontend.util.thingatpt.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.util.thingatpt.thing_at_point = (function frontend$util$thingatpt$thing_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83306 = arguments.length;
var i__5767__auto___83307 = (0);
while(true){
if((i__5767__auto___83307 < len__5766__auto___83306)){
args__5772__auto__.push((arguments[i__5767__auto___83307]));

var G__83308 = (i__5767__auto___83307 + (1));
i__5767__auto___83307 = G__83308;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (bounds,p__83169){
var vec__83170 = p__83169;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83170,(0),null);
var ignore = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83170,(1),null);
var input__$1 = (function (){var or__5043__auto__ = input;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_input();
}
})();
var content = frontend.util.thingatpt.goog$module$goog$object.get(input__$1,"value");
var pos = frontend.util.cursor.pos(input__$1);
var vec__83173 = ((cljs.core.coll_QMARK_(bounds))?bounds:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds,bounds], null));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83173,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83173,(1),null);
if(clojure.string.blank_QMARK_(content)){
return null;
} else {
var start = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(content,left,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,right))?(pos - cljs.core.count(left)):(pos - (1))));
var end = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(content,right,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,right))?pos:((pos - cljs.core.count(right)) + (1))));
var end_STAR_ = (cljs.core.count(right) + end);
if(cljs.core.truth_((function (){var and__5041__auto__ = start;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = end;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,pos);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var thing = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(start + cljs.core.count(left)),end);
if(cljs.core.every_QMARK_(cljs.core.false_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__83166_SHARP_){
return clojure.string.includes_QMARK_(thing,p1__83166_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right,ignore], null)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"full-content","full-content",-817477443),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,start,end_STAR_),new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(start + cljs.core.count(left)),end),new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end_STAR_], null);
} else {
return null;
}
} else {
return null;
}
}
}));

(frontend.util.thingatpt.thing_at_point.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.util.thingatpt.thing_at_point.cljs$lang$applyTo = (function (seq83167){
var G__83168 = cljs.core.first(seq83167);
var seq83167__$1 = cljs.core.next(seq83167);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83168,seq83167__$1);
}));

frontend.util.thingatpt.line_at_point = (function frontend$util$thingatpt$line_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83314 = arguments.length;
var i__5767__auto___83315 = (0);
while(true){
if((i__5767__auto___83315 < len__5766__auto___83314)){
args__5772__auto__.push((arguments[i__5767__auto___83315]));

var G__83316 = (i__5767__auto___83315 + (1));
i__5767__auto___83315 = G__83316;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83195){
var vec__83196 = p__83195;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83196,(0),null);
var input__$1 = (function (){var or__5043__auto__ = input;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_input();
}
})();
var line_beginning_pos = frontend.util.cursor.line_beginning_pos(input__$1);
var line_end_pos = frontend.util.cursor.line_end_pos(input__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(line_beginning_pos,line_end_pos)){
var content = frontend.util.thingatpt.goog$module$goog$object.get(input__$1,"value");
var line = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,line_beginning_pos,line_end_pos);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"full-content","full-content",-817477443),line,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159),line,new cljs.core.Keyword(null,"start","start",-355208981),line_beginning_pos,new cljs.core.Keyword(null,"end","end",-268185958),line_end_pos], null);
} else {
return null;
}
}));

(frontend.util.thingatpt.line_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.line_at_point.cljs$lang$applyTo = (function (seq83182){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83182));
}));

frontend.util.thingatpt.block_ref_at_point = (function frontend$util$thingatpt$block_ref_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83318 = arguments.length;
var i__5767__auto___83319 = (0);
while(true){
if((i__5767__auto___83319 < len__5766__auto___83318)){
args__5772__auto__.push((arguments[i__5767__auto___83319]));

var G__83320 = (i__5767__auto___83319 + (1));
i__5767__auto___83319 = G__83320;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.block_ref_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83246){
var vec__83247 = p__83246;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83247,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((","))"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input," "], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var block_ref = temp__5720__auto__;
var temp__5720__auto____$1 = cljs.core.uuid(new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(block_ref));
if(cljs.core.truth_(temp__5720__auto____$1)){
var uuid = temp__5720__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block_ref,new cljs.core.Keyword(null,"type","type",1174270348),"block-ref",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"link","link",-1769163468),uuid], 0));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.util.thingatpt.block_ref_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.block_ref_at_point.cljs$lang$applyTo = (function (seq83208){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83208));
}));

frontend.util.thingatpt.page_ref_at_point = (function frontend$util$thingatpt$page_ref_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83325 = arguments.length;
var i__5767__auto___83326 = (0);
while(true){
if((i__5767__auto___83326 < len__5766__auto___83325)){
args__5772__auto__.push((arguments[i__5767__auto___83326]));

var G__83327 = (i__5767__auto___83326 + (1));
i__5767__auto___83326 = G__83327;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.page_ref_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83251){
var vec__83252 = p__83251;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83252,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[[","]]"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var page_ref = temp__5720__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(page_ref,new cljs.core.Keyword(null,"type","type",1174270348),"page-ref",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"link","link",-1769163468),logseq.graph_parser.text.get_page_name(new cljs.core.Keyword(null,"full-content","full-content",-817477443).cljs$core$IFn$_invoke$arity$1(page_ref))], 0));
} else {
return null;
}
}));

(frontend.util.thingatpt.page_ref_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.page_ref_at_point.cljs$lang$applyTo = (function (seq83250){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83250));
}));

frontend.util.thingatpt.embed_macro_at_point = (function frontend$util$thingatpt$embed_macro_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83329 = arguments.length;
var i__5767__auto___83330 = (0);
while(true){
if((i__5767__auto___83330 < len__5766__auto___83329)){
args__5772__auto__.push((arguments[i__5767__auto___83330]));

var G__83331 = (i__5767__auto___83330 + (1));
i__5767__auto___83330 = G__83331;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.embed_macro_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83256){
var vec__83257 = p__83256;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83257,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{{embed","}}"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var macro = temp__5720__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(macro,new cljs.core.Keyword(null,"type","type",1174270348),"macro");
} else {
return null;
}
}));

(frontend.util.thingatpt.embed_macro_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.embed_macro_at_point.cljs$lang$applyTo = (function (seq83255){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83255));
}));

frontend.util.thingatpt.properties_at_point = (function frontend$util$thingatpt$properties_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83333 = arguments.length;
var i__5767__auto___83334 = (0);
while(true){
if((i__5767__auto___83334 < len__5766__auto___83333)){
args__5772__auto__.push((arguments[i__5767__auto___83334]));

var G__83335 = (i__5767__auto___83334 + (1));
i__5767__auto___83334 = G__83335;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83261){
var vec__83262 = p__83261;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83262,(0),null);
var temp__5720__auto__ = (function (){var G__83265 = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var G__83265__$1 = (((G__83265 instanceof cljs.core.Keyword))?G__83265.fqn:null);
switch (G__83265__$1) {
case "org":
return frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.graph_parser.property.properties_start,logseq.graph_parser.property.properties_end], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));

break;
default:
var temp__5720__auto__ = frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var line = temp__5720__auto__;
if(cljs.core.truth_(cljs.core.re_matches(/^[^\s.]+:: .*$/,new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(line)))){
return line;
} else {
return null;
}
} else {
return null;
}

}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var properties = temp__5720__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"type","type",1174270348),"properties-drawer");
} else {
return null;
}
}));

(frontend.util.thingatpt.properties_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.properties_at_point.cljs$lang$applyTo = (function (seq83260){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83260));
}));

frontend.util.thingatpt.property_key_at_point = (function frontend$util$thingatpt$property_key_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83338 = arguments.length;
var i__5767__auto___83339 = (0);
while(true){
if((i__5767__auto___83339 < len__5766__auto___83338)){
args__5772__auto__.push((arguments[i__5767__auto___83339]));

var G__83343 = (i__5767__auto___83339 + (1));
i__5767__auto___83339 = G__83343;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.property_key_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.property_key_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83267){
var vec__83268 = p__83267;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83268,(0),null);
if(cljs.core.truth_(frontend.util.thingatpt.properties_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)))){
var property = (function (){var G__83271 = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var G__83271__$1 = (((G__83271 instanceof cljs.core.Keyword))?G__83271.fqn:null);
switch (G__83271__$1) {
case "org":
return frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(":",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input,"\n"], 0));

break;
default:
var temp__5720__auto__ = new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0)));
if(cljs.core.truth_(temp__5720__auto__)){
var line = temp__5720__auto__;
var key = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,"::"));
var line_beginning_pos = frontend.util.cursor.line_beginning_pos(input);
var pos_in_line = (frontend.util.cursor.pos(input) - line_beginning_pos);
if(((((0) <= pos_in_line)) && ((pos_in_line <= (cljs.core.count(key) + (("::").length)))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-content","full-content",-817477443),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"::"].join(''),new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159),key,new cljs.core.Keyword(null,"start","start",-355208981),line_beginning_pos,new cljs.core.Keyword(null,"end","end",-268185958),(line_beginning_pos + (([cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"::"].join('')).length))], null);
} else {
return null;
}
} else {
return null;
}

}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(property,new cljs.core.Keyword(null,"type","type",1174270348),"property-key");
} else {
return null;
}
}));

(frontend.util.thingatpt.property_key_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.property_key_at_point.cljs$lang$applyTo = (function (seq83266){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83266));
}));

frontend.util.thingatpt.get_list_item_indent_AMPERSAND_bullet = (function frontend$util$thingatpt$get_list_item_indent_AMPERSAND_bullet(line){
if(clojure.string.blank_QMARK_(line)){
return null;
} else {
var or__5043__auto__ = cljs.core.re_matches(/^([ \t\r]*)(\+|\*|-){1} (\[[X ]\])?.*$/,line);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.re_matches(/^([\s]*)(\d+){1}\. (\[[X ]\])?.*$/,line);
}
}
});
frontend.util.thingatpt.list_item_at_point = (function frontend$util$thingatpt$list_item_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83345 = arguments.length;
var i__5767__auto___83346 = (0);
while(true){
if((i__5767__auto___83346 < len__5766__auto___83345)){
args__5772__auto__.push((arguments[i__5767__auto___83346]));

var G__83347 = (i__5767__auto___83346 + (1));
i__5767__auto___83346 = G__83347;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.list_item_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83273){
var vec__83274 = p__83273;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83274,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.line_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var line = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.util.thingatpt.get_list_item_indent_AMPERSAND_bullet(new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(line));
if(cljs.core.truth_(temp__5720__auto____$1)){
var vec__83277 = temp__5720__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83277,(0),null);
var indent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83277,(1),null);
var bullet = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83277,(2),null);
var checkbox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83277,(3),null);
var bullet__$1 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(bullet);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(line,new cljs.core.Keyword(null,"type","type",1174270348),"list-item",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"indent","indent",-148200125),indent,new cljs.core.Keyword(null,"bullet","bullet",726988937),bullet__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),checkbox,new cljs.core.Keyword(null,"ordered","ordered",1187041426),cljs.core.int_QMARK_(bullet__$1)], 0));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.util.thingatpt.list_item_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.list_item_at_point.cljs$lang$applyTo = (function (seq83272){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83272));
}));

frontend.util.thingatpt.get_markup_at_point = (function frontend$util$thingatpt$get_markup_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83349 = arguments.length;
var i__5767__auto___83350 = (0);
while(true){
if((i__5767__auto___83350 < len__5766__auto___83349)){
args__5772__auto__.push((arguments[i__5767__auto___83350]));

var G__83351 = (i__5767__auto___83350 + (1));
i__5767__auto___83350 = G__83351;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.get_markup_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.get_markup_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83281){
var vec__83282 = p__83281;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83282,(0),null);
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var or__5043__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_hr(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_bold(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_italic(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_underline(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_strike_through(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_highlight(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
return frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_code(format),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
}
}
}
}
}
}));

(frontend.util.thingatpt.get_markup_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.get_markup_at_point.cljs$lang$applyTo = (function (seq83280){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83280));
}));

frontend.util.thingatpt.markup_at_point = (function frontend$util$thingatpt$markup_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83356 = arguments.length;
var i__5767__auto___83357 = (0);
while(true){
if((i__5767__auto___83357 < len__5766__auto___83356)){
args__5772__auto__.push((arguments[i__5767__auto___83357]));

var G__83358 = (i__5767__auto___83357 + (1));
i__5767__auto___83357 = G__83358;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.markup_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.markup_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83286){
var vec__83287 = p__83286;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83287,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.get_markup_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var markup = temp__5720__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(markup,new cljs.core.Keyword(null,"type","type",1174270348),"markup");
} else {
return null;
}
}));

(frontend.util.thingatpt.markup_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.markup_at_point.cljs$lang$applyTo = (function (seq83285){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83285));
}));

frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point = (function frontend$util$thingatpt$org_admonition_AMPERSAND_src_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83359 = arguments.length;
var i__5767__auto___83360 = (0);
while(true){
if((i__5767__auto___83360 < len__5766__auto___83359)){
args__5772__auto__.push((arguments[i__5767__auto___83360]));

var G__83361 = (i__5767__auto___83360 + (1));
i__5767__auto___83360 = G__83361;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83291){
var vec__83292 = p__83291;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83292,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#+BEGIN_","#+END_"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var admonition_AMPERSAND_src = temp__5720__auto__;
var params = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clojure.string.split_lines(new cljs.core.Keyword(null,"full-content","full-content",-817477443).cljs$core$IFn$_invoke$arity$1(admonition_AMPERSAND_src))),/\s/);
if(cljs.core.coll_QMARK_(params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(admonition_AMPERSAND_src,new cljs.core.Keyword(null,"type","type",1174270348),"source-block",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"language","language",-1591107564),cljs.core.ffirst(params),new cljs.core.Keyword(null,"headers","headers",-835030129),(((cljs.core.count(params) > (2)))?cljs.core.last((params.cljs$core$IFn$_invoke$arity$0 ? params.cljs$core$IFn$_invoke$arity$0() : params.call(null))):null),new cljs.core.Keyword(null,"end","end",-268185958),(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(admonition_AMPERSAND_src) + (("src").length))], 0));
} else {
var temp__5720__auto____$1 = clojure.string.trim(clojure.string.replace(params,"#+BEGIN_",""));
if(cljs.core.truth_(temp__5720__auto____$1)){
var name = temp__5720__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(admonition_AMPERSAND_src,new cljs.core.Keyword(null,"type","type",1174270348),"admonition-block",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"end","end",-268185958),(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(admonition_AMPERSAND_src) + ((name).length))], 0));
} else {
return null;
}

}
} else {
return null;
}
}));

(frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$lang$applyTo = (function (seq83290){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83290));
}));

frontend.util.thingatpt.markdown_src_at_point = (function frontend$util$thingatpt$markdown_src_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83362 = arguments.length;
var i__5767__auto___83363 = (0);
while(true){
if((i__5767__auto___83363 < len__5766__auto___83362)){
args__5772__auto__.push((arguments[i__5767__auto___83363]));

var G__83364 = (i__5767__auto___83363 + (1));
i__5767__auto___83363 = G__83364;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83296){
var vec__83297 = p__83296;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83297,(0),null);
var temp__5720__auto__ = frontend.util.thingatpt.thing_at_point.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["```","```"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(temp__5720__auto__)){
var markdown_src = temp__5720__auto__;
var language = clojure.string.trim(clojure.string.replace(cljs.core.first(clojure.string.split_lines(new cljs.core.Keyword(null,"full-content","full-content",-817477443).cljs$core$IFn$_invoke$arity$1(markdown_src))),"```",""));
var raw_content = new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(markdown_src);
var blank_raw_content_QMARK_ = clojure.string.blank_QMARK_(raw_content);
var action = ((((blank_raw_content_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(raw_content),language))))?new cljs.core.Keyword(null,"into-code-editor","into-code-editor",-2140962343):new cljs.core.Keyword(null,"none","none",1333468478));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(markdown_src,new cljs.core.Keyword(null,"type","type",1174270348),"source-block",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"language","language",-1591107564),language,new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"headers","headers",-835030129),null], 0));
} else {
return null;
}
}));

(frontend.util.thingatpt.markdown_src_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.markdown_src_at_point.cljs$lang$applyTo = (function (seq83295){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83295));
}));

frontend.util.thingatpt.admonition_AMPERSAND_src_at_point = (function frontend$util$thingatpt$admonition_AMPERSAND_src_at_point(var_args){
var args__5772__auto__ = [];
var len__5766__auto___83368 = arguments.length;
var i__5767__auto___83369 = (0);
while(true){
if((i__5767__auto___83369 < len__5766__auto___83368)){
args__5772__auto__.push((arguments[i__5767__auto___83369]));

var G__83370 = (i__5767__auto___83369 + (1));
i__5767__auto___83369 = G__83370;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic = (function (p__83301){
var vec__83302 = p__83301;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83302,(0),null);
var or__5043__auto__ = frontend.util.thingatpt.org_admonition_AMPERSAND_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.thingatpt.markdown_src_at_point.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
}
}));

(frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.util.thingatpt.admonition_AMPERSAND_src_at_point.cljs$lang$applyTo = (function (seq83300){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83300));
}));

frontend.util.thingatpt.default_settings = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"admonition&src?","admonition&src?",1506556328),true,new cljs.core.Keyword(null,"markup?","markup?",-1222732996),false,new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853),true,new cljs.core.Keyword(null,"page-ref?","page-ref?",677685143),true,new cljs.core.Keyword(null,"properties?","properties?",3428414),true,new cljs.core.Keyword(null,"list?","list?",-1642026156),true], null);
frontend.util.thingatpt.get_setting = (function frontend$util$thingatpt$get_setting(setting){
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dwim","settings","dwim/settings",1559339906),setting], null));
if((!((value == null)))){
return value;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.util.thingatpt.default_settings,setting);
}
});

//# sourceMappingURL=frontend.util.thingatpt.js.map
