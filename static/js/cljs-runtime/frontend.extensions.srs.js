goog.provide('frontend.extensions.srs');
goog.scope(function(){
  frontend.extensions.srs.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.srs !== 'undefined') && (typeof frontend.extensions.srs.global_cards_mode_QMARK_ !== 'undefined')){
} else {
frontend.extensions.srs.global_cards_mode_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.extensions.srs.card_hash_tag = "card";
frontend.extensions.srs.card_last_interval_property = new cljs.core.Keyword(null,"card-last-interval","card-last-interval",-1889773077);
frontend.extensions.srs.card_repeats_property = new cljs.core.Keyword(null,"card-repeats","card-repeats",1071489736);
frontend.extensions.srs.card_last_reviewed_property = new cljs.core.Keyword(null,"card-last-reviewed","card-last-reviewed",-965683716);
frontend.extensions.srs.card_next_schedule_property = new cljs.core.Keyword(null,"card-next-schedule","card-next-schedule",2132454825);
frontend.extensions.srs.card_last_easiness_factor_property = new cljs.core.Keyword(null,"card-ease-factor","card-ease-factor",-2122824488);
frontend.extensions.srs.card_last_score_property = new cljs.core.Keyword(null,"card-last-score","card-last-score",2121541607);
frontend.extensions.srs.default_card_properties_map = cljs.core.PersistentArrayMap.createAsIfByAssoc([frontend.extensions.srs.card_last_interval_property,(-1),frontend.extensions.srs.card_repeats_property,(0),frontend.extensions.srs.card_last_easiness_factor_property,2.5]);
/**
 * cloze syntax: {{cloze: ...}}
 */
frontend.extensions.srs.cloze_macro_name = "cloze";
/**
 * {{cards ...}}
 */
frontend.extensions.srs.query_macro_name = "cards";
/**
 * any number between 0 and 1 (the greater it is the faster the changes of the OF matrix)
 */
frontend.extensions.srs.learning_fraction_default = 0.5;
frontend.extensions.srs.learning_fraction = (function frontend$extensions$srs$learning_fraction(){
var temp__5718__auto__ = new cljs.core.Keyword("srs","learning-fraction","srs/learning-fraction",-869447179).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5718__auto__)){
var learning_fraction = temp__5718__auto__;
if(((typeof learning_fraction === 'number') && ((((learning_fraction < (1))) && ((learning_fraction > (0))))))){
return learning_fraction;
} else {
return frontend.extensions.srs.learning_fraction_default;
}
} else {
return frontend.extensions.srs.learning_fraction_default;
}
});
frontend.extensions.srs.of_matrix = frontend.util.persist_var.persist_var(null,"srs-of-matrix");
frontend.extensions.srs.initial_interval_default = (4);
frontend.extensions.srs.initial_interval = (function frontend$extensions$srs$initial_interval(){
var temp__5718__auto__ = new cljs.core.Keyword("srs","initial-interval","srs/initial-interval",-1802131142).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5718__auto__)){
var initial_interval = temp__5718__auto__;
if(((typeof initial_interval === 'number') && ((initial_interval > (0))))){
return initial_interval;
} else {
return frontend.extensions.srs.initial_interval_default;
}
} else {
return frontend.extensions.srs.initial_interval_default;
}
});
frontend.extensions.srs.get_block_card_properties = (function frontend$extensions$srs$get_block_card_properties(block){
var temp__5720__auto__ = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto__)){
var properties = temp__5720__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.extensions.srs.default_card_properties_map,cljs.core.select_keys(properties,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.srs.card_last_interval_property,frontend.extensions.srs.card_repeats_property,frontend.extensions.srs.card_last_reviewed_property,frontend.extensions.srs.card_next_schedule_property,frontend.extensions.srs.card_last_easiness_factor_property,frontend.extensions.srs.card_last_score_property], null))], 0));
} else {
return null;
}
});
frontend.extensions.srs.save_block_card_properties_BANG_ = (function frontend$extensions$srs$save_block_card_properties_BANG_(block,props){
return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$3(block,frontend.util.property.insert_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));
});
frontend.extensions.srs.reset_block_card_properties_BANG_ = (function frontend$extensions$srs$reset_block_card_properties_BANG_(block){
return frontend.extensions.srs.save_block_card_properties_BANG_(block,cljs.core.PersistentArrayMap.createAsIfByAssoc([frontend.extensions.srs.card_last_interval_property,(-1),frontend.extensions.srs.card_repeats_property,(0),frontend.extensions.srs.card_last_easiness_factor_property,2.5,frontend.extensions.srs.card_last_reviewed_property,"nil",frontend.extensions.srs.card_next_schedule_property,"nil",frontend.extensions.srs.card_last_score_property,"nil"]));
});
frontend.extensions.srs.card_block_QMARK_ = (function frontend$extensions$srs$card_block_QMARK_(block){
var card_entity = (function (){var G__47623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.extensions.srs.card_hash_tag], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__47623) : frontend.db.entity.call(null,G__47623));
})();
var refs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block));
return cljs.core.contains_QMARK_(refs,card_entity);
});
frontend.extensions.srs.fix_2f = (function frontend$extensions$srs$fix_2f(n){
return (Math.round(((100) * n)) / (100));
});
frontend.extensions.srs.get_of = (function frontend$extensions$srs$get_of(of_matrix,n,ef){
var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(of_matrix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,ef], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if((n <= (1))){
return frontend.extensions.srs.initial_interval();
} else {
return ef;
}
}
});
frontend.extensions.srs.set_of = (function frontend$extensions$srs$set_of(of_matrix,n,ef,of){
return cljs.core.assoc_in(of_matrix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,ef], null),frontend.extensions.srs.fix_2f(of));
});
frontend.extensions.srs.interval = (function frontend$extensions$srs$interval(n,ef,of_matrix){
if((n <= (1))){
return frontend.extensions.srs.get_of(of_matrix,(1),ef);
} else {
return (frontend.extensions.srs.get_of(of_matrix,n,ef) * (function (){var G__47624 = (n - (1));
var G__47625 = ef;
var G__47626 = of_matrix;
return (frontend.extensions.srs.interval.cljs$core$IFn$_invoke$arity$3 ? frontend.extensions.srs.interval.cljs$core$IFn$_invoke$arity$3(G__47624,G__47625,G__47626) : frontend.extensions.srs.interval.call(null,G__47624,G__47625,G__47626));
})());
}
});
frontend.extensions.srs.next_ef = (function frontend$extensions$srs$next_ef(ef,quality){
var ef_STAR_ = (ef + (0.1 - (((5) - quality) * (0.08 + (0.02 * ((5) - quality))))));
if((ef_STAR_ < 1.3)){
return 1.3;
} else {
return ef_STAR_;
}
});
frontend.extensions.srs.next_of_matrix = (function frontend$extensions$srs$next_of_matrix(of_matrix,n,quality,fraction,ef){
var of = frontend.extensions.srs.get_of(of_matrix,n,ef);
var of_STAR_ = (of * (0.72 + (quality * 0.07)));
var of_STAR__STAR_ = ((((1) - fraction) * of) + (of_STAR_ * fraction));
return frontend.extensions.srs.set_of(of_matrix,n,ef,of_STAR__STAR_);
});
/**
 * return [next-interval repeats next-ef of-matrix]
 */
frontend.extensions.srs.next_interval = (function frontend$extensions$srs$next_interval(_last_interval,repeats,ef,quality,of_matrix){
if((((quality <= (5))) && ((quality >= (0))))){
} else {
throw (new Error("Assert failed: (and (<= quality 5) (>= quality 0))"));
}

var ef__$1 = (function (){var or__5043__auto__ = ef;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return 2.5;
}
})();
var next_ef = frontend.extensions.srs.next_ef(ef__$1,quality);
var next_of_matrix = frontend.extensions.srs.next_of_matrix(of_matrix,repeats,quality,frontend.extensions.srs.learning_fraction(),ef__$1);
var next_interval = frontend.extensions.srs.interval(repeats,next_ef,next_of_matrix);
if((quality < (3))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),ef__$1,next_of_matrix], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.srs.fix_2f(next_interval),((1) + repeats),frontend.extensions.srs.fix_2f(next_ef),next_of_matrix], null);
}
});

/**
 * @interface
 */
frontend.extensions.srs.ICard = function(){};

var frontend$extensions$srs$ICard$get_root_block$dyn_47684 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.extensions.srs.get_root_block[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.extensions.srs.get_root_block["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICard.get-root-block",this$);
}
}
});
frontend.extensions.srs.get_root_block = (function frontend$extensions$srs$get_root_block(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$extensions$srs$ICard$get_root_block$arity$1 == null)))))){
return this$.frontend$extensions$srs$ICard$get_root_block$arity$1(this$);
} else {
return frontend$extensions$srs$ICard$get_root_block$dyn_47684(this$);
}
});


/**
 * @interface
 */
frontend.extensions.srs.ICardShow = function(){};

var frontend$extensions$srs$ICardShow$show_cycle$dyn_47685 = (function (this$,phase){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.extensions.srs.show_cycle[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,phase) : m__5391__auto__.call(null,this$,phase));
} else {
var m__5389__auto__ = (frontend.extensions.srs.show_cycle["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,phase) : m__5389__auto__.call(null,this$,phase));
} else {
throw cljs.core.missing_protocol("ICardShow.show-cycle",this$);
}
}
});
frontend.extensions.srs.show_cycle = (function frontend$extensions$srs$show_cycle(this$,phase){
if((((!((this$ == null)))) && ((!((this$.frontend$extensions$srs$ICardShow$show_cycle$arity$2 == null)))))){
return this$.frontend$extensions$srs$ICardShow$show_cycle$arity$2(this$,phase);
} else {
return frontend$extensions$srs$ICardShow$show_cycle$dyn_47685(this$,phase);
}
});

var frontend$extensions$srs$ICardShow$show_cycle_config$dyn_47686 = (function (this$,phase){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.extensions.srs.show_cycle_config[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,phase) : m__5391__auto__.call(null,this$,phase));
} else {
var m__5389__auto__ = (frontend.extensions.srs.show_cycle_config["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,phase) : m__5389__auto__.call(null,this$,phase));
} else {
throw cljs.core.missing_protocol("ICardShow.show-cycle-config",this$);
}
}
});
frontend.extensions.srs.show_cycle_config = (function frontend$extensions$srs$show_cycle_config(this$,phase){
if((((!((this$ == null)))) && ((!((this$.frontend$extensions$srs$ICardShow$show_cycle_config$arity$2 == null)))))){
return this$.frontend$extensions$srs$ICardShow$show_cycle_config$arity$2(this$,phase);
} else {
return frontend$extensions$srs$ICardShow$show_cycle_config$dyn_47686(this$,phase);
}
});

frontend.extensions.srs.has_cloze_QMARK_ = (function frontend$extensions$srs$has_cloze_QMARK_(blocks){
return cljs.core.some((function (p1__47627_SHARP_){
return clojure.string.includes_QMARK_(p1__47627_SHARP_,"{{cloze ");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","content","block/content",-161885195),blocks));
});
/**
 * Clear block's collapsed property if exists
 */
frontend.extensions.srs.clear_collapsed_property = (function frontend$extensions$srs$clear_collapsed_property(blocks){
var result = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)], null));
}),blocks);
return result;
});

/**
* @constructor
 * @implements {frontend.extensions.srs.ICardShow}
 * @implements {frontend.extensions.srs.ICard}
*/
frontend.extensions.srs.Sided_Cloze_Card = (function (block){
this.block = block;
});
(frontend.extensions.srs.Sided_Cloze_Card.prototype.frontend$extensions$srs$ICard$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.extensions.srs.Sided_Cloze_Card.prototype.frontend$extensions$srs$ICard$get_root_block$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var G__47628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(self__.block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__47628) : frontend.db.pull.call(null,G__47628));
}));

(frontend.extensions.srs.Sided_Cloze_Card.prototype.frontend$extensions$srs$ICardShow$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.extensions.srs.Sided_Cloze_Card.prototype.frontend$extensions$srs$ICardShow$show_cycle$arity$2 = (function (_this,phase){
var self__ = this;
var _this__$1 = this;
var blocks = frontend.extensions.srs.clear_collapsed_property((function (){var G__47629 = frontend.state.get_current_repo();
var G__47630 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(self__.block);
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(G__47629,G__47630) : frontend.db.get_block_and_children.call(null,G__47629,G__47630));
})());
var cloze_QMARK_ = frontend.extensions.srs.has_cloze_QMARK_(blocks);
var G__47631 = phase;
switch (G__47631) {
case (1):
var blocks_count = cljs.core.count(blocks);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.block], null),new cljs.core.Keyword(null,"next-phase","next-phase",-424821986),(((((blocks_count > (1))) || ((cloze_QMARK_ == null))))?(2):(3))], null);

break;
case (2):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),blocks,new cljs.core.Keyword(null,"next-phase","next-phase",-424821986),(cljs.core.truth_(cloze_QMARK_)?(3):(1))], null);

break;
case (3):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),blocks,new cljs.core.Keyword(null,"next-phase","next-phase",-424821986),(1)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47631)].join('')));

}
}));

(frontend.extensions.srs.Sided_Cloze_Card.prototype.frontend$extensions$srs$ICardShow$show_cycle_config$arity$2 = (function (_this,phase){
var self__ = this;
var _this__$1 = this;
var G__47632 = phase;
switch (G__47632) {
case (1):
return cljs.core.PersistentArrayMap.EMPTY;

break;
case (2):
return cljs.core.PersistentArrayMap.EMPTY;

break;
case (3):
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-cloze?","show-cloze?",1773680872),true], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47632)].join('')));

}
}));

(frontend.extensions.srs.Sided_Cloze_Card.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block","block",-1989749559,null)], null);
}));

(frontend.extensions.srs.Sided_Cloze_Card.cljs$lang$type = true);

(frontend.extensions.srs.Sided_Cloze_Card.cljs$lang$ctorStr = "frontend.extensions.srs/Sided-Cloze-Card");

(frontend.extensions.srs.Sided_Cloze_Card.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.extensions.srs/Sided-Cloze-Card");
}));

/**
 * Positional factory function for frontend.extensions.srs/Sided-Cloze-Card.
 */
frontend.extensions.srs.__GT_Sided_Cloze_Card = (function frontend$extensions$srs$__GT_Sided_Cloze_Card(block){
return (new frontend.extensions.srs.Sided_Cloze_Card(block));
});

frontend.extensions.srs.__GT_card = (function frontend$extensions$srs$__GT_card(block){
if(cljs.core.map_QMARK_(block)){
} else {
throw (new Error("Assert failed: (map? block)"));
}

return frontend.extensions.srs.__GT_Sided_Cloze_Card(block);
});
/**
 * Use same syntax as frontend.db.query-dsl.
 *   Add an extra condition: block's :block/refs contains `#card or [[card]]'
 */
frontend.extensions.srs.query = (function frontend$extensions$srs$query(var_args){
var G__47634 = arguments.length;
switch (G__47634) {
case 2:
return frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$2 = (function (repo,query_string){
return frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$3(repo,query_string,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$3 = (function (repo,query_string,p__47635){
var map__47636 = p__47635;
var map__47636__$1 = cljs.core.__destructure_map(map__47636);
var disable_reactive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47636__$1,new cljs.core.Keyword(null,"disable-reactive?","disable-reactive?",-1162731342));
var use_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47636__$1,new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),true);
if(typeof query_string === 'string'){
var query_string__$1 = frontend.template.resolve_dynamic_template_BANG_(query_string);
var map__47637 = frontend.db.query_dsl.parse(query_string__$1);
var map__47637__$1 = cljs.core.__destructure_map(map__47637);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47637__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47637__$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47637__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var query_STAR_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Symbol(null,"?bp","?bp",-568502339,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?bp","?bp",-568502339,null),new cljs.core.Keyword("block","name","block/name",1619760316),frontend.extensions.srs.card_hash_tag], null)], null),((cljs.core.coll_QMARK_(cljs.core.first(query)))?query:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query], null)));
var temp__5720__auto__ = frontend.db.query_dsl.query_wrapper(query_STAR_,true);
if(cljs.core.truth_(temp__5720__auto__)){
var query__$1 = temp__5720__auto__;
var result = frontend.db.query_react.react_query(repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.with_meta(query__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards-query?","cards-query?",1220374615),true], null)),new cljs.core.Keyword(null,"rules","rules",1198912366),(function (){var or__5043__auto__ = rules;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),use_cache_QMARK_], null),(function (){var G__47638 = (cljs.core.truth_(sort_by)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),sort_by], null):null);
if(cljs.core.truth_(disable_reactive_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47638,new cljs.core.Keyword(null,"disable-reactive?","disable-reactive?",-1162731342),true);
} else {
return G__47638;
}
})()], 0)));
if(cljs.core.truth_(result)){
return cljs.core.flatten(frontend.util.react(result));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.extensions.srs.query.cljs$lang$maxFixedArity = 3);

/**
 * Return blocks scheduled to 'time' or before
 */
frontend.extensions.srs.query_scheduled = (function frontend$extensions$srs$query_scheduled(_repo,blocks,time){
var filtered_result = cljs.core.filterv((function (b){
var props = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(b);
var next_sched = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,frontend.extensions.srs.card_next_schedule_property);
var next_sched_STAR_ = cljs_time.coerce.from_string(next_sched);
var repeats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,frontend.extensions.srs.card_repeats_property);
var or__5043__auto__ = (repeats == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (repeats < (1));
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = (next_sched == null);
if(or__5043__auto____$2){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = (next_sched_STAR_ == null);
if(or__5043__auto____$3){
return or__5043__auto____$3;
} else {
return cljs_time.core.before_QMARK_(next_sched_STAR_,time);
}
}
}
}
}),blocks);
var sort_by_next_shedule = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword("block","properties","block/properties",708347145)),frontend.extensions.srs.card_next_schedule_property);
}),filtered_result);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count(blocks),new cljs.core.Keyword(null,"result","result",1415092211),sort_by_next_shedule], null);
});
frontend.extensions.srs.get_next_interval = (function frontend$extensions$srs$get_next_interval(card,score){
if((((score <= (5))) && ((score >= (0))))){
} else {
throw (new Error("Assert failed: (and (<= score 5) (>= score 0))"));
}

if((((!((card == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === card.frontend$extensions$srs$ICard$))))?true:(((!card.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(frontend.extensions.srs.ICard,card):false)):cljs.core.native_satisfies_QMARK_(frontend.extensions.srs.ICard,card))){
} else {
throw (new Error("Assert failed: (satisfies? ICard card)"));
}

var block = card.block;
var props = frontend.extensions.srs.get_block_card_properties(block);
var last_interval = (function (){var or__5043__auto__ = frontend.util.safe_parse_float(cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,frontend.extensions.srs.card_last_interval_property));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var repeats = (function (){var or__5043__auto__ = frontend.util.safe_parse_int(cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,frontend.extensions.srs.card_repeats_property));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var last_ef = (function (){var or__5043__auto__ = frontend.util.safe_parse_float(cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,frontend.extensions.srs.card_last_easiness_factor_property));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return 2.5;
}
})();
var vec__47640 = frontend.extensions.srs.next_interval(last_interval,repeats,last_ef,score,cljs.core.deref(frontend.extensions.srs.of_matrix));
var next_interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47640,(0),null);
var next_repeats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47640,(1),null);
var next_ef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47640,(2),null);
var of_matrix_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47640,(3),null);
var next_interval_STAR_ = (((next_interval < (0)))?(0):next_interval);
var next_schedule = cljs_time.coerce.to_string(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.local.local_now(),cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(((24) * next_interval_STAR_))));
var now = cljs_time.coerce.to_string(cljs_time.local.local_now());
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"next-of-matrix","next-of-matrix",1337218979),of_matrix_STAR_,frontend.extensions.srs.card_last_interval_property,next_interval,frontend.extensions.srs.card_repeats_property,next_repeats,frontend.extensions.srs.card_last_easiness_factor_property,next_ef,frontend.extensions.srs.card_next_schedule_property,next_schedule,frontend.extensions.srs.card_last_reviewed_property,now,frontend.extensions.srs.card_last_score_property,score]);
});
frontend.extensions.srs.operation_score_BANG_ = (function frontend$extensions$srs$operation_score_BANG_(card,score){
if((((score <= (5))) && ((score >= (0))))){
} else {
throw (new Error("Assert failed: (and (<= score 5) (>= score 0))"));
}

if((((!((card == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === card.frontend$extensions$srs$ICard$))))?true:(((!card.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(frontend.extensions.srs.ICard,card):false)):cljs.core.native_satisfies_QMARK_(frontend.extensions.srs.ICard,card))){
} else {
throw (new Error("Assert failed: (satisfies? ICard card)"));
}

var block = card.block;
var result = frontend.extensions.srs.get_next_interval(card,score);
var next_of_matrix = new cljs.core.Keyword(null,"next-of-matrix","next-of-matrix",1337218979).cljs$core$IFn$_invoke$arity$1(result);
cljs.core.reset_BANG_(frontend.extensions.srs.of_matrix,next_of_matrix);

return frontend.extensions.srs.save_block_card_properties_BANG_((function (){var G__47644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__47644) : frontend.db.pull.call(null,G__47644));
})(),cljs.core.select_keys(result,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.srs.card_last_interval_property,frontend.extensions.srs.card_repeats_property,frontend.extensions.srs.card_last_easiness_factor_property,frontend.extensions.srs.card_next_schedule_property,frontend.extensions.srs.card_last_reviewed_property,frontend.extensions.srs.card_last_score_property], null)));
});
frontend.extensions.srs.operation_reset_BANG_ = (function frontend$extensions$srs$operation_reset_BANG_(card){
if((((!((card == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === card.frontend$extensions$srs$ICard$))))?true:(((!card.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(frontend.extensions.srs.ICard,card):false)):cljs.core.native_satisfies_QMARK_(frontend.extensions.srs.ICard,card))){
} else {
throw (new Error("Assert failed: (satisfies? ICard card)"));
}

var block = card.block;
return frontend.extensions.srs.reset_block_card_properties_BANG_((function (){var G__47646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__47646) : frontend.db.pull.call(null,G__47646));
})());
});
frontend.extensions.srs.operation_card_info_summary_BANG_ = (function frontend$extensions$srs$operation_card_info_summary_BANG_(review_records,review_cards,card_query_block){
if(cljs.core.truth_(card_query_block)){
var review_count = cljs.core.count(cljs.core.flatten(cljs.core.vals(review_records)));
var review_cards_count = cljs.core.count(review_cards);
var score_5_count = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(review_records,(5)));
var score_1_count = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(review_records,(1)));
return frontend.handler.editor.insert_block_tree_after_target(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(card_query_block),false,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Summary: %d items, %d review counts [[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([review_cards_count,review_count,frontend.date.today()], 0)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Remembered:   %d (%d%%)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([score_5_count,((100) * (score_5_count / review_count))], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Forgotten :   %d (%d%%)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([score_1_count,((100) * (score_1_count / review_count))], 0))], null)], null)], null)], null),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(card_query_block));
} else {
return null;
}
});
frontend.extensions.srs.dec_cards_due_count_BANG_ = (function frontend$extensions$srs$dec_cards_due_count_BANG_(){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746),(function (n){
if((n > (0))){
return (n - (1));
} else {
return n;
}
}));
});
frontend.extensions.srs.review_finished_QMARK_ = (function frontend$extensions$srs$review_finished_QMARK_(cards){
return (cljs.core.count(cards) <= (1));
});
frontend.extensions.srs.score_and_next_card = (function frontend$extensions$srs$score_and_next_card(score,card,_STAR_card_index,cards,_STAR_phase,_STAR_review_records,cb){
frontend.extensions.srs.operation_score_BANG_(card,score);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_review_records,(function (p1__47647_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__47647_SHARP_,score,(function (ov){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ov,card);
}));
}));

if(frontend.extensions.srs.review_finished_QMARK_(cards)){
if(cljs.core.truth_(cb)){
var G__47648_47690 = cljs.core.deref(_STAR_review_records);
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47648_47690) : cb.call(null,G__47648_47690));
} else {
}
} else {
cljs.core.reset_BANG_(_STAR_phase,(1));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_card_index,cljs.core.inc);

if(cljs.core.truth_(cljs.core.deref(frontend.extensions.srs.global_cards_mode_QMARK_))){
return frontend.extensions.srs.dec_cards_due_count_BANG_();
} else {
return null;
}
});
frontend.extensions.srs.skip_card = (function frontend$extensions$srs$skip_card(card,_STAR_card_index,cards,_STAR_phase,_STAR_review_records,cb){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_review_records,(function (p1__47649_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__47649_SHARP_,"skip",(function (ov){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ov,card);
}));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_card_index,cljs.core.inc);

if(frontend.extensions.srs.review_finished_QMARK_(cards)){
if(cljs.core.truth_(cb)){
var G__47650 = cljs.core.deref(_STAR_review_records);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__47650) : cb.call(null,G__47650));
} else {
return null;
}
} else {
return cljs.core.reset_BANG_(_STAR_phase,(1));
}
});
frontend.extensions.srs.review_finished = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.p-2","p.p-2",1061889157),"Congrats, you've reviewed all the cards for this query, see you next time! \uD83D\uDCAF"], null);
frontend.extensions.srs.btn_with_shortcut = (function frontend$extensions$srs$btn_with_shortcut(p__47651){
var map__47652 = p__47651;
var map__47652__$1 = cljs.core.__destructure_map(map__47652);
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47652__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47652__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var btn_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47652__$1,new cljs.core.Keyword(null,"btn-text","btn-text",1312481577));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47652__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47652__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),btn_text," ",frontend.ui.render_keyboard_shortcut(shortcut)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"background","background",-863952629),background,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5720__auto___47691 = frontend.extensions.srs.goog$module$goog$object.get(e,"target");
if(cljs.core.truth_(temp__5720__auto___47691)){
var elem_47692 = temp__5720__auto___47691;
console.log(elem_47692.classList);

elem_47692.classList.add("opacity-25");
} else {
}

return setTimeout((function (){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
}),(10));
})], 0));
});
frontend.extensions.srs.view = rum.core.lazy_build(rum.core.build_defcs,(function (state,blocks,p__47653,card_index){
var map__47654 = p__47653;
var map__47654__$1 = cljs.core.__destructure_map(map__47654);
var preview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47654__$1,new cljs.core.Keyword(null,"preview?","preview?",590561578));
var modal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47654__$1,new cljs.core.Keyword(null,"modal?","modal?",2146094679));
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47654__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var cards = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.srs.__GT_card,blocks);
var review_records = new cljs.core.Keyword("frontend.extensions.srs","review-records","frontend.extensions.srs/review-records",955589499).cljs$core$IFn$_invoke$arity$1(state);
var card = (cljs.core.truth_(preview_QMARK_)?(cljs.core.truth_(card_index)?frontend.util.nth_safe(cards,cljs.core.deref(card_index)):null):cljs.core.first(cards));
if(cljs.core.not(card)){
return daiquiri.interpreter.interpret(frontend.extensions.srs.review_finished);
} else {
var phase = new cljs.core.Keyword("frontend.extensions.srs","phase","frontend.extensions.srs/phase",1185310974).cljs$core$IFn$_invoke$arity$1(state);
var map__47655 = frontend.extensions.srs.show_cycle(card,cljs.core.deref(phase));
var map__47655__$1 = cljs.core.__destructure_map(map__47655);
var blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"value","value",305978217));
var next_phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47655__$1,new cljs.core.Keyword(null,"next-phase","next-phase",-424821986));
var root_block = card.block;
var root_block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root_block);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ls-card","content",(cljs.core.truth_((function (){var or__5043__auto__ = preview_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return modal_QMARK_;
}
})())?frontend.util.hiccup__GT_class(".flex.flex-col.resize.overflow-y-auto"):null)], null))},[(function (){var repo = frontend.state.get_current_repo();
return daiquiri.core.create_element("div",{'style':{'marginTop':(20)}},[daiquiri.interpreter.interpret(frontend.components.block.breadcrumb(cljs.core.PersistentArrayMap.EMPTY,repo,root_block_id,cljs.core.PersistentArrayMap.EMPTY))]);
})(),frontend.components.block.blocks_container(blocks__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.extensions.srs.show_cycle_config(card,cljs.core.deref(phase)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_block_id),new cljs.core.Keyword(null,"editor-box","editor-box",708759870),frontend.components.editor.box,new cljs.core.Keyword(null,"review-cards?","review-cards?",-1467055076),true], null)], 0))),(cljs.core.truth_((function (){var or__5043__auto__ = preview_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return modal_QMARK_;
}
})())?(function (){var attrs47658 = ((((cljs.core.not(preview_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_phase,(1)))))?null:frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47662 = next_phase;
switch (G__47662) {
case (1):
return "Hide answers";

break;
case (2):
return "Show answers";

break;
case (3):
return "Show clozes";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47662)].join('')));

}
})(),frontend.ui.render_keyboard_shortcut(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),"card-answers",new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(phase,next_phase);
})], 0)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs47658))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","my-4","justify-between"], null)], null),attrs47658], 0))):{'className':"flex my-4 justify-between"}),((cljs.core.map_QMARK_(attrs47658))?[(cljs.core.truth_((function (){var and__5041__auto__ = (cljs.core.count(cards) > (1));
if(and__5041__auto__){
return preview_QMARK_;
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Next ",frontend.ui.render_keyboard_shortcut(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025)], null))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),"card-next",new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.skip_card(card,card_index,cards,phase,review_records,cb);
})], 0))):null),((((cljs.core.not(preview_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),next_phase))))?(function (){var attrs47659 = frontend.extensions.srs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),"Forgotten",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"f",new cljs.core.Keyword(null,"id","id",-1388402092),"card-forgotten",new cljs.core.Keyword(null,"background","background",-863952629),"red",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.extensions.srs.score_and_next_card((1),card,card_index,cards,phase,review_records,cb);

var tomorrow = cljs_time.coerce.to_string(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
return frontend.handler.editor.set_block_property_BANG_(root_block_id,frontend.extensions.srs.card_next_schedule_property,tomorrow);
})], null));
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs47659))?daiquiri.interpreter.element_attributes(attrs47659):null),((cljs.core.map_QMARK_(attrs47659))?[daiquiri.interpreter.interpret(frontend.extensions.srs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),(cljs.core.truth_(frontend.util.mobile_QMARK_())?"Hard":"Took a while to recall"),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"t",new cljs.core.Keyword(null,"id","id",-1388402092),"card-recall",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.score_and_next_card((3),card,card_index,cards,phase,review_records,cb);
})], null))),daiquiri.interpreter.interpret(frontend.extensions.srs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),"Remembered",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"r",new cljs.core.Keyword(null,"id","id",-1388402092),"card-remembered",new cljs.core.Keyword(null,"background","background",-863952629),"green",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.score_and_next_card((5),card,card_index,cards,phase,review_records,cb);
})], null)))]:[daiquiri.interpreter.interpret(attrs47659),daiquiri.interpreter.interpret(frontend.extensions.srs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),(cljs.core.truth_(frontend.util.mobile_QMARK_())?"Hard":"Took a while to recall"),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"t",new cljs.core.Keyword(null,"id","id",-1388402092),"card-recall",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.score_and_next_card((3),card,card_index,cards,phase,review_records,cb);
})], null))),daiquiri.interpreter.interpret(frontend.extensions.srs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),"Remembered",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"r",new cljs.core.Keyword(null,"id","id",-1388402092),"card-remembered",new cljs.core.Keyword(null,"background","background",-863952629),"green",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.score_and_next_card((5),card,card_index,cards,phase,review_records,cb);
})], null)))]));
})():null),(cljs.core.truth_(preview_QMARK_)?frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),"Reset this card so that you can review it immediately."], null),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Reset"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),"card-reset",new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.hiccup__GT_class("opacity-60.hover:opacity-100"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.operation_reset_BANG_(card);
})], 0))):null)]:[daiquiri.interpreter.interpret(attrs47658),(cljs.core.truth_((function (){var and__5041__auto__ = (cljs.core.count(cards) > (1));
if(and__5041__auto__){
return preview_QMARK_;
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Next ",frontend.ui.render_keyboard_shortcut(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025)], null))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),"card-next",new cljs.core.Keyword(null,"class","class",-2030961996),"mr-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.skip_card(card,card_index,cards,phase,review_records,cb);
})], 0))):null),((((cljs.core.not(preview_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),next_phase))))?(function (){var attrs47660 = frontend.extensions.srs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),"Forgotten",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"f",new cljs.core.Keyword(null,"id","id",-1388402092),"card-forgotten",new cljs.core.Keyword(null,"background","background",-863952629),"red",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.extensions.srs.score_and_next_card((1),card,card_index,cards,phase,review_records,cb);

var tomorrow = cljs_time.coerce.to_string(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
return frontend.handler.editor.set_block_property_BANG_(root_block_id,frontend.extensions.srs.card_next_schedule_property,tomorrow);
})], null));
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs47660))?daiquiri.interpreter.element_attributes(attrs47660):null),((cljs.core.map_QMARK_(attrs47660))?[daiquiri.interpreter.interpret(frontend.extensions.srs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),(cljs.core.truth_(frontend.util.mobile_QMARK_())?"Hard":"Took a while to recall"),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"t",new cljs.core.Keyword(null,"id","id",-1388402092),"card-recall",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.score_and_next_card((3),card,card_index,cards,phase,review_records,cb);
})], null))),daiquiri.interpreter.interpret(frontend.extensions.srs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),"Remembered",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"r",new cljs.core.Keyword(null,"id","id",-1388402092),"card-remembered",new cljs.core.Keyword(null,"background","background",-863952629),"green",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.score_and_next_card((5),card,card_index,cards,phase,review_records,cb);
})], null)))]:[daiquiri.interpreter.interpret(attrs47660),daiquiri.interpreter.interpret(frontend.extensions.srs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),(cljs.core.truth_(frontend.util.mobile_QMARK_())?"Hard":"Took a while to recall"),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"t",new cljs.core.Keyword(null,"id","id",-1388402092),"card-recall",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.score_and_next_card((3),card,card_index,cards,phase,review_records,cb);
})], null))),daiquiri.interpreter.interpret(frontend.extensions.srs.btn_with_shortcut(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"btn-text","btn-text",1312481577),"Remembered",new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"r",new cljs.core.Keyword(null,"id","id",-1388402092),"card-remembered",new cljs.core.Keyword(null,"background","background",-863952629),"green",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.score_and_next_card((5),card,card_index,cards,phase,review_records,cb);
})], null)))]));
})():null),(cljs.core.truth_(preview_QMARK_)?frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),"Reset this card so that you can review it immediately."], null),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Reset"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),"card-reset",new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.hiccup__GT_class("opacity-60.hover:opacity-100"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.extensions.srs.operation_reset_BANG_(card);
})], 0))):null)]));
})():(function (){var attrs47661 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Review cards",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs47661))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["my-3"], null)], null),attrs47661], 0))):{'className':"my-3"}),((cljs.core.map_QMARK_(attrs47661))?null:[daiquiri.interpreter.interpret(attrs47661)]));
})())]);
}
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,rum.core.local.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("frontend.extensions.srs","phase","frontend.extensions.srs/phase",1185310974)),rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("frontend.extensions.srs","review-records","frontend.extensions.srs/review-records",955589499)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
frontend.state.set_state_BANG_(new cljs.core.Keyword("srs","mode?","srs/mode?",-258295984),true);

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.set_state_BANG_(new cljs.core.Keyword("srs","mode?","srs/mode?",-258295984),false);

return state;
})], null)], null),"frontend.extensions.srs/view");
frontend.extensions.srs.view_modal = rum.core.lazy_build(rum.core.build_defc,(function (blocks,option,card_index){
var option__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword(null,"random-mode?","random-mode?",160495452),(function (v){
if(frontend.util.atom_QMARK_(v)){
return cljs.core.deref(v);
} else {
return v;
}
}));
var blocks__$1 = ((cljs.core.fn_QMARK_(blocks))?(blocks.cljs$core$IFn$_invoke$arity$0 ? blocks.cljs$core$IFn$_invoke$arity$0() : blocks.call(null)):blocks);
var blocks__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"random-mode?","random-mode?",160495452).cljs$core$IFn$_invoke$arity$1(option__$1))?cljs.core.shuffle(blocks__$1):blocks__$1);
if(cljs.core.seq(blocks__$2)){
return frontend.extensions.srs.view(blocks__$2,option__$1,card_index);
} else {
return daiquiri.interpreter.interpret(frontend.extensions.srs.review_finished);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.modules.shortcut.core.mixin(new cljs.core.Keyword("shortcut.handler","cards","shortcut.handler/cards",-979698196)),rum.core.reactive,frontend.db_mixins.query], null),"frontend.extensions.srs/view-modal");
frontend.extensions.srs.preview_cp = rum.core.lazy_build(rum.core.build_defc,(function (block_id){
var blocks_f = (function (){
var G__47663 = frontend.state.get_current_repo();
var G__47664 = block_id;
var G__47665 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),block_id], null);
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(G__47663,G__47664,G__47665) : frontend.db.get_paginated_blocks.call(null,G__47663,G__47664,G__47665));
});
return frontend.extensions.srs.view_modal(blocks_f,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preview?","preview?",590561578),true], null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)));
}),null,"frontend.extensions.srs/preview-cp");
frontend.extensions.srs.preview = (function frontend$extensions$srs$preview(block_id){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.extensions.srs.preview_cp(block_id);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"srs","srs",1327991978)], null));
});
frontend.extensions.srs.cloze_macro_show = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,options){
var shown_QMARK__STAR_ = new cljs.core.Keyword(null,"shown?","shown?",1568009366).cljs$core$IFn$_invoke$arity$1(state);
var shown_QMARK_ = rum.core.react(shown_QMARK__STAR_);
var toggle_BANG_ = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shown_QMARK__STAR_,cljs.core.not);
});
if(cljs.core.truth_((function (){var or__5043__auto__ = shown_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"show-cloze?","show-cloze?",1773680872).cljs$core$IFn$_invoke$arity$1(config);
}
})())){
return daiquiri.core.create_element("a",{'onClick':toggle_BANG_,'className':"cloze-revealed"},[daiquiri.interpreter.interpret(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(options))], 0)))]);
} else {
return daiquiri.core.create_element("a",{'onClick':toggle_BANG_,'className':"cloze"},["[...]"]);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var config = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var shown_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show-cloze?","show-cloze?",1773680872).cljs$core$IFn$_invoke$arity$1(config));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"shown?","shown?",1568009366),shown_QMARK_);
})], null)], null),"frontend.extensions.srs/cloze-macro-show");
frontend.components.macro.register(frontend.extensions.srs.cloze_macro_name,frontend.extensions.srs.cloze_macro_show);
frontend.extensions.srs.cards_total = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
frontend.extensions.srs.get_srs_cards_total = (function frontend$extensions$srs$get_srs_cards_total(){
try{var repo = frontend.state.get_current_repo();
var query_string = "";
var blocks = frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$3(repo,query_string,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false,new cljs.core.Keyword(null,"disable-reactive?","disable-reactive?",-1162731342),true], null));
if(cljs.core.seq(blocks)){
var map__47667 = frontend.extensions.srs.query_scheduled(repo,blocks,cljs_time.local.local_now());
var map__47667__$1 = cljs.core.__destructure_map(map__47667);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var count = cljs.core.count(result);
cljs.core.reset_BANG_(frontend.extensions.srs.cards_total,count);

return count;
} else {
return null;
}
}catch (e47666){if((e47666 instanceof Error)){
var e = e47666;
console.error(e);

return (0);
} else {
throw e47666;

}
}});
frontend.extensions.srs.cards = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,options){
var _STAR_random_mode_QMARK_ = new cljs.core.Keyword("frontend.extensions.srs","random-mode?","frontend.extensions.srs/random-mode?",-303322398).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_preview_mode_QMARK_ = new cljs.core.Keyword("frontend.extensions.srs","preview-mode?","frontend.extensions.srs/preview-mode?",-572584).cljs$core$IFn$_invoke$arity$1(state);
var repo = frontend.state.get_current_repo();
var query_string = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(options));
var query_result = frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$2(repo,query_string);
var _STAR_card_index = new cljs.core.Keyword("frontend.extensions.srs","card-index","frontend.extensions.srs/card-index",1206694388).cljs$core$IFn$_invoke$arity$1(state);
var global_QMARK_ = new cljs.core.Keyword(null,"global?","global?",-2022837689).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.seq(query_result)){
var map__47668 = frontend.extensions.srs.query_scheduled(repo,query_result,cljs_time.local.local_now());
var map__47668__$1 = cljs.core.__destructure_map(map__47668);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47668__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47668__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var review_cards = result;
var card_query_block = (function (){var G__47669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__47669) : frontend.db.entity.call(null,G__47669));
})();
var filtered_total = cljs.core.count(result);
var modal_QMARK_ = new cljs.core.Keyword(null,"modal?","modal?",2146094679).cljs$core$IFn$_invoke$arity$1(config);
var callback_fn = (function (review_records){
if(cljs.core.truth_(cljs.core.deref(_STAR_preview_mode_QMARK_))){
return null;
} else {
frontend.extensions.srs.operation_card_info_summary_BANG_(review_records,review_cards,card_query_block);

return frontend.util.persist_var.persist_save(frontend.extensions.srs.of_matrix);
}
});
return daiquiri.core.create_element("div",{'style':daiquiri.interpreter.element_attributes((cljs.core.truth_(modal_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null):null)),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1","cards-review",(cljs.core.truth_(global_QMARK_)?"":"shadow-xl")], null))},[daiquiri.core.create_element("div",{'className':"flex flex-row items-center justify-between cards-title"},[(function (){var attrs47670 = (cljs.core.truth_(cljs.core.deref(_STAR_preview_mode_QMARK_))?frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("book",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)):frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("infinity",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs47670))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center"], null)], null),attrs47670], 0))):{'className':"flex flex-row items-center"}),((cljs.core.map_QMARK_(attrs47670))?[(function (){var attrs47671 = ((clojure.string.blank_QMARK_(query_string))?"All":query_string);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs47671))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1","text-sm","font-medium"], null)], null),attrs47671], 0))):{'className':"ml-1 text-sm font-medium"}),((cljs.core.map_QMARK_(attrs47671))?null:[attrs47671]));
})()]:[daiquiri.interpreter.interpret(attrs47670),(function (){var attrs47672 = ((clojure.string.blank_QMARK_(query_string))?"All":query_string);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs47672))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ml-1","text-sm","font-medium"], null)], null),attrs47672], 0))):{'className':"ml-1 text-sm font-medium"}),((cljs.core.map_QMARK_(attrs47672))?null:[attrs47672]));
})()]));
})(),(function (){var attrs47673 = (cljs.core.truth_(cljs.core.deref(_STAR_preview_mode_QMARK_))?frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),"current/total"], null),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-60.text-sm.mr-3","div.opacity-60.text-sm.mr-3",408914794),cljs.core.deref(_STAR_card_index),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"/"], null),total], null)):frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),"overdue/total"], null),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-60.text-sm.mr-3","div.opacity-60.text-sm.mr-3",408914794),filtered_total,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"/"], null),total], null)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs47673))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center"], null)], null),attrs47673], 0))):{'className':"flex flex-row items-center"}),((cljs.core.map_QMARK_(attrs47673))?[frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),"Toggle preview mode"], null),new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-60.hover:opacity-100.svg-small.inline.font-bold","a.opacity-60.hover:opacity-100.svg-small.inline.font-bold",94613611),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"preview-all-cards",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref(_STAR_preview_mode_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_preview_mode_QMARK_,cljs.core.not);

return cljs.core.reset_BANG_(_STAR_card_index,(0));
})], null),"A"], null)),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),"Toggle random mode"], null),new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mt-1.ml-2.block.opacity-60.hover:opacity-100","a.mt-1.ml-2.block.opacity-60.hover:opacity-100",1610089683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_random_mode_QMARK_,cljs.core.not);
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("arrows-shuffle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__47675 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600)], null);
if(cljs.core.truth_(cljs.core.deref(_STAR_random_mode_QMARK_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47675,new cljs.core.Keyword(null,"color","color",1011675173),"orange");
} else {
return G__47675;
}
})()], null))], null))]:[daiquiri.interpreter.interpret(attrs47673),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),"Toggle preview mode"], null),new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-60.hover:opacity-100.svg-small.inline.font-bold","a.opacity-60.hover:opacity-100.svg-small.inline.font-bold",94613611),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"preview-all-cards",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref(_STAR_preview_mode_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
frontend.util.stop(e);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_preview_mode_QMARK_,cljs.core.not);

return cljs.core.reset_BANG_(_STAR_card_index,(0));
})], null),"A"], null)),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),"Toggle random mode"], null),new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mt-1.ml-2.block.opacity-60.hover:opacity-100","a.mt-1.ml-2.block.opacity-60.hover:opacity-100",1610089683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_random_mode_QMARK_,cljs.core.not);
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("arrows-shuffle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__47677 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600)], null);
if(cljs.core.truth_(cljs.core.deref(_STAR_random_mode_QMARK_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47677,new cljs.core.Keyword(null,"color","color",1011675173),"orange");
} else {
return G__47677;
}
})()], null))], null))]));
})()]),((cljs.core.seq(review_cards))?(function (){var attrs47678 = (cljs.core.truth_(modal_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var blocks_f = (cljs.core.truth_(cljs.core.deref(_STAR_preview_mode_QMARK_))?(function (){
return frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$2(repo,query_string);
}):(function (){
var query_result__$1 = frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$2(repo,query_string);
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(frontend.extensions.srs.query_scheduled(repo,query_result__$1,cljs_time.local.local_now()));
}));
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.extensions.srs.view_modal(blocks_f,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"modal?","modal?",2146094679),true,new cljs.core.Keyword(null,"random-mode?","random-mode?",160495452),_STAR_random_mode_QMARK_,new cljs.core.Keyword(null,"preview?","preview?",590561578),cljs.core.deref(_STAR_preview_mode_QMARK_),new cljs.core.Keyword(null,"callback","callback",-705136228),callback_fn], null),_STAR_card_index);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"srs","srs",1327991978)], null));
})], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs47678))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-1"], null)], null),attrs47678], 0))):{'className':"px-1"}),((cljs.core.map_QMARK_(attrs47678))?[(function (){var view_fn = (cljs.core.truth_(modal_QMARK_)?frontend.extensions.srs.view_modal:frontend.extensions.srs.view);
var blocks_fn = (cljs.core.truth_(cljs.core.deref(_STAR_preview_mode_QMARK_))?(function (){
return frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$2(repo,query_string);
}):review_cards);
return daiquiri.interpreter.interpret(view_fn(blocks_fn,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"global?","global?",-2022837689),global_QMARK_,new cljs.core.Keyword(null,"random-mode?","random-mode?",160495452),cljs.core.deref(_STAR_random_mode_QMARK_),new cljs.core.Keyword(null,"preview?","preview?",590561578),cljs.core.deref(_STAR_preview_mode_QMARK_),new cljs.core.Keyword(null,"callback","callback",-705136228),callback_fn], null)], 0)),_STAR_card_index));
})()]:[daiquiri.interpreter.interpret(attrs47678),(function (){var view_fn = (cljs.core.truth_(modal_QMARK_)?frontend.extensions.srs.view_modal:frontend.extensions.srs.view);
var blocks_fn = (cljs.core.truth_(cljs.core.deref(_STAR_preview_mode_QMARK_))?(function (){
return frontend.extensions.srs.query.cljs$core$IFn$_invoke$arity$2(repo,query_string);
}):review_cards);
return daiquiri.interpreter.interpret(view_fn(blocks_fn,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"global?","global?",-2022837689),global_QMARK_,new cljs.core.Keyword(null,"random-mode?","random-mode?",160495452),cljs.core.deref(_STAR_random_mode_QMARK_),new cljs.core.Keyword(null,"preview?","preview?",590561578),cljs.core.deref(_STAR_preview_mode_QMARK_),new cljs.core.Keyword(null,"callback","callback",-705136228),callback_fn], null)], 0)),_STAR_card_index));
})()]));
})():daiquiri.interpreter.interpret(frontend.extensions.srs.review_finished))]);
} else {
if(cljs.core.truth_(global_QMARK_)){
return daiquiri.core.create_element("div",{'className':"ls-card content"},[daiquiri.core.create_element("h1",{'className':"title"},["Time to create a card!"]),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["You can add \"#card\" to any block to turn it into a card or trigger \"/cloze\" to add some clozes."]),daiquiri.core.create_element("img",{'src':"https://docs.logseq.com/assets/2021-07-22_22.28.02_1626964258528_0.gif",'className':"my-4"},null),daiquiri.core.create_element("p",null,["You can ",daiquiri.core.create_element("a",{'href':"https://docs.logseq.com/#/page/cards",'target':"_blank"},["click this link"])," to check the documentation."])])]);
} else {
return daiquiri.core.create_element("div",{'className':"opacity-60 custom-query-title ls-card content"},[daiquiri.core.create_element("div",{'className':"w-full flex-1"},[daiquiri.core.create_element("code",{'className':"p-1"},[["Cards: ",query_string].join('')])]),daiquiri.core.create_element("div",{'className':"mt-2 ml-2 font-medium"},["No matched cards"])]);
}
}
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query,rum.core.local.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword("frontend.extensions.srs","card-index","frontend.extensions.srs/card-index",1206694388)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.extensions.srs","random-mode?","frontend.extensions.srs/random-mode?",-303322398)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.extensions.srs","preview-mode?","frontend.extensions.srs/preview-mode?",-572584))], null),"frontend.extensions.srs/cards");
frontend.extensions.srs.global_cards = rum.core.lazy_build(rum.core.build_defc,(function (){
return frontend.extensions.srs.cards(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal?","modal?",2146094679),true,new cljs.core.Keyword(null,"global?","global?",-2022837689),true], null),cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
cljs.core.reset_BANG_(frontend.extensions.srs.global_cards_mode_QMARK_,true);

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.extensions.srs.global_cards_mode_QMARK_,false);

return state;
})], null)], null),"frontend.extensions.srs/global-cards");
frontend.components.macro.register(frontend.extensions.srs.query_macro_name,frontend.extensions.srs.cards);
frontend.util.property.register_built_in_properties(cljs.core.PersistentHashSet.createAsIfByAssoc([frontend.extensions.srs.card_last_score_property,frontend.extensions.srs.card_last_reviewed_property,frontend.extensions.srs.card_next_schedule_property,frontend.extensions.srs.card_last_interval_property,frontend.extensions.srs.card_repeats_property,frontend.extensions.srs.card_last_easiness_factor_property]));
frontend.commands.register_slash_command(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cards",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{cards }}",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null),"Create a cards query"], null));
frontend.commands.register_slash_command(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cloze",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","input","editor/input",-288966104),"{{cloze }}",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backward-pos","backward-pos",1129767133),(2)], null)], null)], null),"Create a cloze"], null));
frontend.extensions.srs.make_block_a_card_BANG_ = (function frontend$extensions$srs$make_block_a_card_BANG_(block_id){
var temp__5720__auto__ = (function (){var G__47683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__47683) : frontend.db.entity.call(null,G__47683));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto____$1)){
var content = temp__5720__auto____$1;
var content__$1 = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),content));
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),block_id,[clojure.string.trim(content__$1)," #",frontend.extensions.srs.card_hash_tag].join(''));
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.srs.update_cards_due_count_BANG_ = (function frontend$extensions$srs$update_cards_due_count_BANG_(){
return setTimeout((function (){
var total = frontend.extensions.srs.get_srs_cards_total();
return frontend.state.set_state_BANG_(new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746),total);
}),(200));
});

//# sourceMappingURL=frontend.extensions.srs.js.map
