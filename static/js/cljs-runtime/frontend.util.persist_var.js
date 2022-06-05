goog.provide('frontend.util.persist_var');
frontend.util.persist_var.load_path = (function frontend$util$persist_var$load_path(location){
return frontend.config.get_file_path(frontend.state.get_current_repo(),[frontend.config.app_name,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location),".edn"].join(''));
});

/**
 * @interface
 */
frontend.util.persist_var.ILoad = function(){};

var frontend$util$persist_var$ILoad$_load$dyn_49868 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.util.persist_var._load[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.util.persist_var._load["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILoad.-load",this$);
}
}
});
frontend.util.persist_var._load = (function frontend$util$persist_var$_load(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$util$persist_var$ILoad$_load$arity$1 == null)))))){
return this$.frontend$util$persist_var$ILoad$_load$arity$1(this$);
} else {
return frontend$util$persist_var$ILoad$_load$dyn_49868(this$);
}
});

var frontend$util$persist_var$ILoad$_loaded_QMARK_$dyn_49872 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.util.persist_var._loaded_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.util.persist_var._loaded_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILoad.-loaded?",this$);
}
}
});
frontend.util.persist_var._loaded_QMARK_ = (function frontend$util$persist_var$_loaded_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$util$persist_var$ILoad$_loaded_QMARK_$arity$1 == null)))))){
return this$.frontend$util$persist_var$ILoad$_loaded_QMARK_$arity$1(this$);
} else {
return frontend$util$persist_var$ILoad$_loaded_QMARK_$dyn_49872(this$);
}
});


/**
 * @interface
 */
frontend.util.persist_var.ISave = function(){};

var frontend$util$persist_var$ISave$_save$dyn_49874 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.util.persist_var._save[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.util.persist_var._save["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ISave.-save",this$);
}
}
});
frontend.util.persist_var._save = (function frontend$util$persist_var$_save(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$util$persist_var$ISave$_save$arity$1 == null)))))){
return this$.frontend$util$persist_var$ISave$_save$arity$1(this$);
} else {
return frontend$util$persist_var$ISave$_save$dyn_49874(this$);
}
});


/**
 * @interface
 */
frontend.util.persist_var.IResetValue = function(){};

var frontend$util$persist_var$IResetValue$_reset_value_BANG_$dyn_49876 = (function (this$,new$,graph){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.util.persist_var._reset_value_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,graph) : m__5391__auto__.call(null,this$,new$,graph));
} else {
var m__5389__auto__ = (frontend.util.persist_var._reset_value_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,graph) : m__5389__auto__.call(null,this$,new$,graph));
} else {
throw cljs.core.missing_protocol("IResetValue.-reset-value!",this$);
}
}
});
frontend.util.persist_var._reset_value_BANG_ = (function frontend$util$persist_var$_reset_value_BANG_(this$,new$,graph){
if((((!((this$ == null)))) && ((!((this$.frontend$util$persist_var$IResetValue$_reset_value_BANG_$arity$3 == null)))))){
return this$.frontend$util$persist_var$IResetValue$_reset_value_BANG_$arity$3(this$,new$,graph);
} else {
return frontend$util$persist_var$IResetValue$_reset_value_BANG_$dyn_49876(this$,new$,graph);
}
});


/**
* @constructor
 * @implements {frontend.util.persist_var.ISave}
 * @implements {cljs.core.IReset}
 * @implements {frontend.util.persist_var.IResetValue}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {frontend.util.persist_var.ILoad}
*/
frontend.util.persist_var.PersistVar = (function (_STAR_value,location){
this._STAR_value = _STAR_value;
this.location = location;
this.cljs$lang$protocol_mask$partition0$ = 2147516416;
this.cljs$lang$protocol_mask$partition1$ = 32768;
});
(frontend.util.persist_var.PersistVar.prototype.frontend$util$persist_var$IResetValue$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.util.persist_var.PersistVar.prototype.frontend$util$persist_var$IResetValue$_reset_value_BANG_$arity$3 = (function (_,new$,graph){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__._STAR_value,cljs.core.assoc_in(cljs.core.deref(self__._STAR_value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph,new cljs.core.Keyword(null,"value","value",305978217)], null),new$));
}));

(frontend.util.persist_var.PersistVar.prototype.frontend$util$persist_var$ILoad$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.util.persist_var.PersistVar.prototype.frontend$util$persist_var$ILoad$_load$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0())){
return null;
} else {
var repo = frontend.state.get_current_repo();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(frontend.state.get_current_repo()),frontend.util.persist_var.load_path(self__.location)),cljs.core.constantly(null)),(function (content){
return promesa.protocols._promise((function (){var temp__5720__auto__ = (function (){var and__5041__auto__ = (!((content == null)));
if(and__5041__auto__){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(content);
}catch (e49856){if((e49856 instanceof Error)){
var e = e49856;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("load persist-var failed: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.persist_var.load_path(self__.location)], 0))], 0));

return console.dir(e);
} else {
throw e49856;

}
}} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var content__$1 = temp__5720__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__._STAR_value,(function (o){
return cljs.core.assoc_in(cljs.core.assoc_in(o,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"value","value",305978217)], null),content__$1);
}));
} else {
return null;
}
})());
}));
}));
}
}));

(frontend.util.persist_var.PersistVar.prototype.frontend$util$persist_var$ILoad$_loaded_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__._STAR_value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206)], null));
}));

(frontend.util.persist_var.PersistVar.prototype.frontend$util$persist_var$ISave$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.util.persist_var.PersistVar.prototype.frontend$util$persist_var$ISave$_save$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0())){
return null;
} else {
var path = frontend.util.persist_var.load_path(self__.location);
var repo = frontend.state.get_current_repo();
var content = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__._STAR_value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"value","value",305978217)], null)));
var dir = frontend.config.get_repo_dir(repo);
return frontend.fs.write_file_BANG_(repo,dir,path,content,null);
}
}));

(frontend.util.persist_var.PersistVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__._STAR_value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),new cljs.core.Keyword(null,"value","value",305978217)], null));
}));

(frontend.util.persist_var.PersistVar.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__._STAR_value,(function (___$2){
return cljs.core.assoc_in(cljs.core.deref(self__._STAR_value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),new cljs.core.Keyword(null,"value","value",305978217)], null),new_value);
}));
}));

(frontend.util.persist_var.PersistVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,w,_opts){
var self__ = this;
var ___$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["#PersistVar[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._STAR_value)),", loc: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.location),"]"].join('')], 0));
}));

(frontend.util.persist_var.PersistVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*value","*value",541202822,null),new cljs.core.Symbol(null,"location","location",-838836381,null)], null);
}));

(frontend.util.persist_var.PersistVar.cljs$lang$type = true);

(frontend.util.persist_var.PersistVar.cljs$lang$ctorStr = "frontend.util.persist-var/PersistVar");

(frontend.util.persist_var.PersistVar.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.util.persist-var/PersistVar");
}));

/**
 * Positional factory function for frontend.util.persist-var/PersistVar.
 */
frontend.util.persist_var.__GT_PersistVar = (function frontend$util$persist_var$__GT_PersistVar(_STAR_value,location){
return (new frontend.util.persist_var.PersistVar(_STAR_value,location));
});

frontend.util.persist_var._STAR_all_persist_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
frontend.util.persist_var.load_vars = (function frontend$util$persist_var$load_vars(){
return promesa.core.all(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.util.persist_var._load,cljs.core.deref(frontend.util.persist_var._STAR_all_persist_vars)));
});
/**
 * This var is stored at logseq/LOCATION.edn
 */
frontend.util.persist_var.persist_var = (function frontend$util$persist_var$persist_var(init_value,location){
var var$ = frontend.util.persist_var.__GT_PersistVar(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),init_value,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),false], null)])),location);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.util.persist_var._STAR_all_persist_vars,cljs.core.conj,var$);

return var$;
});
frontend.util.persist_var.persist_save = (function frontend$util$persist_var$persist_save(v){
if((((!((v == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === v.frontend$util$persist_var$ISave$))))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(frontend.util.persist_var.ISave,v):false)):cljs.core.native_satisfies_QMARK_(frontend.util.persist_var.ISave,v))){
} else {
throw (new Error("Assert failed: (satisfies? ISave v)"));
}

return frontend.util.persist_var._save(v);
});

//# sourceMappingURL=frontend.util.persist_var.js.map
