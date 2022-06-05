goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_40660 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._header[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._header["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_40660(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_40661 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._has_body[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._has_body["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_40661(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_40665 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._body[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._body["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_40665(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40548 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40548["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40549 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40549["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40550 = temp__5718__auto____$2;
return (o40550["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40551 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40551["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40552 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40552["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40553 = temp__5718__auto____$2;
return (o40553["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40556 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40556["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40557 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40557["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40558 = temp__5718__auto____$2;
return (o40558["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40559 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40559["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40560 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40560["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40561 = temp__5718__auto____$2;
return (o40561["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40565 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40565["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40566 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40566["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40567 = temp__5718__auto____$2;
return (o40567["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40571 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40571["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40572 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40572["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40573 = temp__5718__auto____$2;
return (o40573["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40577 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40577["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40578 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40578["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40579 = temp__5718__auto____$2;
return (o40579["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40681 = arguments.length;
var i__5767__auto___40682 = (0);
while(true){
if((i__5767__auto___40682 < len__5766__auto___40681)){
args__5772__auto__.push((arguments[i__5767__auto___40682]));

var G__40683 = (i__5767__auto___40682 + (1));
i__5767__auto___40682 = G__40683;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq40582){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40582));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40685 = arguments.length;
var i__5767__auto___40686 = (0);
while(true){
if((i__5767__auto___40686 < len__5766__auto___40685)){
args__5772__auto__.push((arguments[i__5767__auto___40686]));

var G__40687 = (i__5767__auto___40686 + (1));
i__5767__auto___40686 = G__40687;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq40586){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40586));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40688 = arguments.length;
var i__5767__auto___40690 = (0);
while(true){
if((i__5767__auto___40690 < len__5766__auto___40688)){
args__5772__auto__.push((arguments[i__5767__auto___40690]));

var G__40691 = (i__5767__auto___40690 + (1));
i__5767__auto___40690 = G__40691;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq40589){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40589));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40692 = arguments.length;
var i__5767__auto___40693 = (0);
while(true){
if((i__5767__auto___40693 < len__5766__auto___40692)){
args__5772__auto__.push((arguments[i__5767__auto___40693]));

var G__40694 = (i__5767__auto___40693 + (1));
i__5767__auto___40693 = G__40694;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq40595){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40595));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40698 = arguments.length;
var i__5767__auto___40699 = (0);
while(true){
if((i__5767__auto___40699 < len__5766__auto___40698)){
args__5772__auto__.push((arguments[i__5767__auto___40699]));

var G__40700 = (i__5767__auto___40699 + (1));
i__5767__auto___40699 = G__40700;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq40596){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40596));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40701 = arguments.length;
var i__5767__auto___40702 = (0);
while(true){
if((i__5767__auto___40702 < len__5766__auto___40701)){
args__5772__auto__.push((arguments[i__5767__auto___40702]));

var G__40703 = (i__5767__auto___40702 + (1));
i__5767__auto___40702 = G__40703;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq40605){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40605));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40704 = arguments.length;
var i__5767__auto___40705 = (0);
while(true){
if((i__5767__auto___40705 < len__5766__auto___40704)){
args__5772__auto__.push((arguments[i__5767__auto___40705]));

var G__40706 = (i__5767__auto___40705 + (1));
i__5767__auto___40705 = G__40706;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq40610){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40610));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40707 = arguments.length;
var i__5767__auto___40708 = (0);
while(true){
if((i__5767__auto___40708 < len__5766__auto___40707)){
args__5772__auto__.push((arguments[i__5767__auto___40708]));

var G__40709 = (i__5767__auto___40708 + (1));
i__5767__auto___40708 = G__40709;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40620){
var vec__40621 = p__40620;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40621,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__40616_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__40616_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq40618){
var G__40619 = cljs.core.first(seq40618);
var seq40618__$1 = cljs.core.next(seq40618);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40619,seq40618__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__40624 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__40625 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__40626 = (function (){var G__40627 = new cljs.core.Keyword(null,"li","li",723558921);
var G__40628 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__40629 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__40627,G__40628,G__40629) : devtools.format.make_template_fn.call(null,G__40627,G__40628,G__40629));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__40624,G__40625,G__40626) : devtools.format.make_template_fn.call(null,G__40624,G__40625,G__40626));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40710 = arguments.length;
var i__5767__auto___40711 = (0);
while(true){
if((i__5767__auto___40711 < len__5766__auto___40710)){
args__5772__auto__.push((arguments[i__5767__auto___40711]));

var G__40712 = (i__5767__auto___40711 + (1));
i__5767__auto___40711 = G__40712;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq40635){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40635));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40713 = arguments.length;
var i__5767__auto___40714 = (0);
while(true){
if((i__5767__auto___40714 < len__5766__auto___40713)){
args__5772__auto__.push((arguments[i__5767__auto___40714]));

var G__40715 = (i__5767__auto___40714 + (1));
i__5767__auto___40714 = G__40715;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq40642){
var G__40643 = cljs.core.first(seq40642);
var seq40642__$1 = cljs.core.next(seq40642);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40643,seq40642__$1);
}));


//# sourceMappingURL=devtools.format.js.map
