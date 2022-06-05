goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__40391__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__40391__auto__["add"]).call(o__40391__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__40391__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__40391__auto__["delete"]).call(o__40391__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__40391__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__40391__auto__["has"]).call(o__40391__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__43548 = data;
var target__40408__auto__ = G__43548;
if(cljs.core.truth_(target__40408__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43548)].join(''),"\n","target__40408__auto__"].join('')));
}

(target__40408__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__43548;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_43586 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_43586);
} else {
var seq__43559_43587 = cljs.core.seq(json_ml);
var chunk__43560_43588 = null;
var count__43561_43589 = (0);
var i__43562_43590 = (0);
while(true){
if((i__43562_43590 < count__43561_43589)){
var item_43593 = chunk__43560_43588.cljs$core$IIndexed$_nth$arity$2(null,i__43562_43590);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_43593,new_depth_budget_43586) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_43593,new_depth_budget_43586));


var G__43595 = seq__43559_43587;
var G__43596 = chunk__43560_43588;
var G__43597 = count__43561_43589;
var G__43598 = (i__43562_43590 + (1));
seq__43559_43587 = G__43595;
chunk__43560_43588 = G__43596;
count__43561_43589 = G__43597;
i__43562_43590 = G__43598;
continue;
} else {
var temp__5720__auto___43599 = cljs.core.seq(seq__43559_43587);
if(temp__5720__auto___43599){
var seq__43559_43600__$1 = temp__5720__auto___43599;
if(cljs.core.chunked_seq_QMARK_(seq__43559_43600__$1)){
var c__5565__auto___43601 = cljs.core.chunk_first(seq__43559_43600__$1);
var G__43602 = cljs.core.chunk_rest(seq__43559_43600__$1);
var G__43603 = c__5565__auto___43601;
var G__43604 = cljs.core.count(c__5565__auto___43601);
var G__43605 = (0);
seq__43559_43587 = G__43602;
chunk__43560_43588 = G__43603;
count__43561_43589 = G__43604;
i__43562_43590 = G__43605;
continue;
} else {
var item_43606 = cljs.core.first(seq__43559_43600__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_43606,new_depth_budget_43586) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_43606,new_depth_budget_43586));


var G__43607 = cljs.core.next(seq__43559_43600__$1);
var G__43608 = null;
var G__43609 = (0);
var G__43610 = (0);
seq__43559_43587 = G__43607;
chunk__43560_43588 = G__43608;
count__43561_43589 = G__43609;
i__43562_43590 = G__43610;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5718__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5718__auto__)){
var initial_hierarchy_depth_budget = temp__5718__auto__;
var remaining_depth_budget = (function (){var or__5043__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
