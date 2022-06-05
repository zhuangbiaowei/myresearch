goog.provide('frontend.extensions.graph.pixi');
goog.scope(function(){
  frontend.extensions.graph.pixi.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$d3_force$src$index=shadow.js.require("module$node_modules$d3_force$src$index", {});
var module$node_modules$graphology$dist$graphology_umd_min=shadow.js.require("module$node_modules$graphology$dist$graphology_umd_min", {});
var module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs=shadow.js.require("module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs", {});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi._STAR_graph_instance !== 'undefined')){
} else {
frontend.extensions.graph.pixi._STAR_graph_instance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi._STAR_simulation !== 'undefined')){
} else {
frontend.extensions.graph.pixi._STAR_simulation = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.extensions.graph.pixi.Graph = frontend.extensions.graph.pixi.goog$module$goog$object.get(module$node_modules$graphology$dist$graphology_umd_min,"Graph");
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi.colors !== 'undefined')){
} else {
frontend.extensions.graph.pixi.colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"], null);
}
frontend.extensions.graph.pixi.default_style = (function frontend$extensions$graph$pixi$default_style(dark_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(function (node){
var or__5043__auto__ = node.size;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (8);
}
}),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(0)], null),new cljs.core.Keyword(null,"color","color",1011675173),(function (node){
var temp__5718__auto__ = frontend.extensions.graph.pixi.goog$module$goog$object.get(node,"parent");
if(cljs.core.truth_(temp__5718__auto__)){
var parent = temp__5718__auto__;
var temp__5720__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,"ls-selected-nodes"))?parent:node.id);
if(cljs.core.truth_(temp__5720__auto__)){
var parent__$1 = temp__5720__auto__;
var v = Math.abs(cljs.core.hash(parent__$1));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.colors,cljs.core.mod(v,cljs.core.count(frontend.extensions.graph.pixi.colors)));
} else {
return null;
}
} else {
return node.color;
}
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),(function (node){
return node.id;
}),new cljs.core.Keyword(null,"type","type",1174270348),module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs.TextType.TEXT,new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(12),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(dark_QMARK_)?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"),new cljs.core.Keyword(null,"padding","padding",1660304693),(4)], null)], null),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(dark_QMARK_)?"#094b5a":"#cccccc")], null)], null);
});
frontend.extensions.graph.pixi.default_hover_style = (function frontend$extensions$graph$pixi$default_hover_style(_dark_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6366F1",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(238, 238, 238, 1)",new cljs.core.Keyword(null,"color","color",1011675173),"#333333"], null)], null),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#A5B4FC"], null)], null);
});
frontend.extensions.graph.pixi.layout_BANG_ = (function frontend$extensions$graph$pixi$layout_BANG_(nodes,links){
var nodes_count = cljs.core.count(nodes);
var simulation = module$node_modules$d3_force$src$index.forceSimulation(nodes);
simulation.force("link",module$node_modules$d3_force$src$index.forceLink().id((function (d){
return d.id;
})).distance((180)).links(links)).force("charge",module$node_modules$d3_force$src$index.forceManyBody().distanceMax((((nodes_count > (500)))?(4000):(600))).theta(0.5).strength((-600))).force("collision",module$node_modules$d3_force$src$index.forceCollide().radius(((8) + (18))).iterations((2))).force("x",module$node_modules$d3_force$src$index.forceX((0)).strength(0.02)).force("y",module$node_modules$d3_force$src$index.forceY((0)).strength(0.02)).force("center",module$node_modules$d3_force$src$index.forceCenter()).velocityDecay(0.8);

cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_simulation,simulation);

return simulation;
});
frontend.extensions.graph.pixi.clear_nodes_BANG_ = (function frontend$extensions$graph$pixi$clear_nodes_BANG_(graph){
return graph.forEachNode((function (node){
return graph.dropNode(node);
}));
});
frontend.extensions.graph.pixi.destroy_instance_BANG_ = (function frontend$extensions$graph$pixi$destroy_instance_BANG_(){
var temp__5720__auto__ = new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instance));
if(cljs.core.truth_(temp__5720__auto__)){
var instance = temp__5720__auto__;
instance.destroy();

cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_graph_instance,null);

return cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_simulation,null);
} else {
return null;
}
});
frontend.extensions.graph.pixi.update_position_BANG_ = (function frontend$extensions$graph$pixi$update_position_BANG_(node,obj){
return node.updatePosition(({"x": obj.x, "y": obj.y}));
});
frontend.extensions.graph.pixi.tick_BANG_ = (function frontend$extensions$graph$pixi$tick_BANG_(pixi,_graph,nodes_js,links_js){
return (function (){
var nodes_objects = pixi.getNodesObjects();
var edges_objects = pixi.getEdgesObjects();
var seq__93881_93928 = cljs.core.seq(nodes_js);
var chunk__93882_93929 = null;
var count__93883_93930 = (0);
var i__93884_93931 = (0);
while(true){
if((i__93884_93931 < count__93883_93930)){
var node_93932 = chunk__93882_93929.cljs$core$IIndexed$_nth$arity$2(null,i__93884_93931);
var temp__5720__auto___93933 = nodes_objects.get(node_93932.id);
if(cljs.core.truth_(temp__5720__auto___93933)){
var node_object_93934 = temp__5720__auto___93933;
frontend.extensions.graph.pixi.update_position_BANG_(node_object_93934,node_93932);
} else {
}


var G__93935 = seq__93881_93928;
var G__93936 = chunk__93882_93929;
var G__93937 = count__93883_93930;
var G__93938 = (i__93884_93931 + (1));
seq__93881_93928 = G__93935;
chunk__93882_93929 = G__93936;
count__93883_93930 = G__93937;
i__93884_93931 = G__93938;
continue;
} else {
var temp__5720__auto___93939 = cljs.core.seq(seq__93881_93928);
if(temp__5720__auto___93939){
var seq__93881_93940__$1 = temp__5720__auto___93939;
if(cljs.core.chunked_seq_QMARK_(seq__93881_93940__$1)){
var c__5565__auto___93941 = cljs.core.chunk_first(seq__93881_93940__$1);
var G__93942 = cljs.core.chunk_rest(seq__93881_93940__$1);
var G__93943 = c__5565__auto___93941;
var G__93944 = cljs.core.count(c__5565__auto___93941);
var G__93945 = (0);
seq__93881_93928 = G__93942;
chunk__93882_93929 = G__93943;
count__93883_93930 = G__93944;
i__93884_93931 = G__93945;
continue;
} else {
var node_93946 = cljs.core.first(seq__93881_93940__$1);
var temp__5720__auto___93947__$1 = nodes_objects.get(node_93946.id);
if(cljs.core.truth_(temp__5720__auto___93947__$1)){
var node_object_93948 = temp__5720__auto___93947__$1;
frontend.extensions.graph.pixi.update_position_BANG_(node_object_93948,node_93946);
} else {
}


var G__93949 = cljs.core.next(seq__93881_93940__$1);
var G__93950 = null;
var G__93951 = (0);
var G__93952 = (0);
seq__93881_93928 = G__93949;
chunk__93882_93929 = G__93950;
count__93883_93930 = G__93951;
i__93884_93931 = G__93952;
continue;
}
} else {
}
}
break;
}

var seq__93885 = cljs.core.seq(links_js);
var chunk__93886 = null;
var count__93887 = (0);
var i__93888 = (0);
while(true){
if((i__93888 < count__93887)){
var edge = chunk__93886.cljs$core$IIndexed$_nth$arity$2(null,i__93888);
var temp__5720__auto___93954 = edges_objects.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge.index));
if(cljs.core.truth_(temp__5720__auto___93954)){
var edge_object_93955 = temp__5720__auto___93954;
edge_object_93955.updatePosition(({"x": edge.source.x, "y": edge.source.y}),({"x": edge.target.x, "y": edge.target.y}));
} else {
}


var G__93957 = seq__93885;
var G__93958 = chunk__93886;
var G__93959 = count__93887;
var G__93960 = (i__93888 + (1));
seq__93885 = G__93957;
chunk__93886 = G__93958;
count__93887 = G__93959;
i__93888 = G__93960;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__93885);
if(temp__5720__auto__){
var seq__93885__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__93885__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__93885__$1);
var G__93965 = cljs.core.chunk_rest(seq__93885__$1);
var G__93966 = c__5565__auto__;
var G__93967 = cljs.core.count(c__5565__auto__);
var G__93968 = (0);
seq__93885 = G__93965;
chunk__93886 = G__93966;
count__93887 = G__93967;
i__93888 = G__93968;
continue;
} else {
var edge = cljs.core.first(seq__93885__$1);
var temp__5720__auto___93969__$1 = edges_objects.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge.index));
if(cljs.core.truth_(temp__5720__auto___93969__$1)){
var edge_object_93970 = temp__5720__auto___93969__$1;
edge_object_93970.updatePosition(({"x": edge.source.x, "y": edge.source.y}),({"x": edge.target.x, "y": edge.target.y}));
} else {
}


var G__93971 = cljs.core.next(seq__93885__$1);
var G__93972 = null;
var G__93973 = (0);
var G__93974 = (0);
seq__93885 = G__93971;
chunk__93886 = G__93972;
count__93887 = G__93973;
i__93888 = G__93974;
continue;
}
} else {
return null;
}
}
break;
}
});
});
frontend.extensions.graph.pixi.set_up_listeners_BANG_ = (function frontend$extensions$graph$pixi$set_up_listeners_BANG_(pixi_graph){
if(cljs.core.truth_(pixi_graph)){
var _STAR_dragging_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var nodes = pixi_graph.getNodesObjects();
var on_drag_end = (function (_node,event){
event.stopPropagation();

var temp__5720__auto___93975 = cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation);
if(cljs.core.truth_(temp__5720__auto___93975)){
var s_93976 = temp__5720__auto___93975;
if(cljs.core.truth_(event.active)){
} else {
s_93976.alphaTarget((0));
}
} else {
}

return cljs.core.reset_BANG_(_STAR_dragging_QMARK_,false);
});
pixi_graph.on("nodeMousedown",(function (event,node_key){
var temp__5720__auto__ = nodes.get(node_key);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
var temp__5720__auto____$1 = cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation);
if(cljs.core.truth_(temp__5720__auto____$1)){
var s = temp__5720__auto____$1;
if(cljs.core.truth_(event.active)){
} else {
s.alphaTarget(0.3).restart();

setTimeout((function (){
return s.alphaTarget((0));
}),(2000));
}

return cljs.core.reset_BANG_(_STAR_dragging_QMARK_,true);
} else {
return null;
}
} else {
return null;
}
}));

pixi_graph.on("nodeMouseup",(function (event,node_key){
var temp__5720__auto__ = nodes.get(node_key);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return on_drag_end(node,event);
} else {
return null;
}
}));

return pixi_graph.on("nodeMousemove",(function (event,node_key){
var temp__5720__auto__ = nodes.get(node_key);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.truth_(cljs.core.deref(_STAR_dragging_QMARK_))){
return frontend.extensions.graph.pixi.update_position_BANG_(node,event);
} else {
return null;
}
} else {
return null;
}
}));
} else {
return null;
}
});
frontend.extensions.graph.pixi.render_BANG_ = (function frontend$extensions$graph$pixi$render_BANG_(state){
try{if(cljs.core.truth_(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instance))){
frontend.extensions.graph.pixi.clear_nodes_BANG_(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instance)));

frontend.extensions.graph.pixi.destroy_instance_BANG_();
} else {
}

var map__93894_93977 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var map__93894_93978__$1 = cljs.core.__destructure_map(map__93894_93977);
var nodes_93979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93894_93978__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var links_93980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93894_93978__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var style_93981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93894_93978__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var hover_style_93982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93894_93978__$1,new cljs.core.Keyword(null,"hover-style","hover-style",976094077));
var height_93983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93894_93978__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var register_handlers_fn_93984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93894_93978__$1,new cljs.core.Keyword(null,"register-handlers-fn","register-handlers-fn",2000178094));
var dark_QMARK__93985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93894_93978__$1,new cljs.core.Keyword(null,"dark?","dark?",622933231));
var style_93986__$1 = (function (){var or__5043__auto__ = style_93981;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.extensions.graph.pixi.default_style(dark_QMARK__93985);
}
})();
var hover_style_93987__$1 = (function (){var or__5043__auto__ = hover_style_93982;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.extensions.graph.pixi.default_hover_style(dark_QMARK__93985);
}
})();
var graph_93988 = (new frontend.extensions.graph.pixi.Graph());
var nodes_set_93989 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),nodes_93979));
var links_93990__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (link){
var and__5041__auto__ = (function (){var G__93897 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(link);
return (nodes_set_93989.cljs$core$IFn$_invoke$arity$1 ? nodes_set_93989.cljs$core$IFn$_invoke$arity$1(G__93897) : nodes_set_93989.call(null,G__93897));
})();
if(cljs.core.truth_(and__5041__auto__)){
var G__93898 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link);
return (nodes_set_93989.cljs$core$IFn$_invoke$arity$1 ? nodes_set_93989.cljs$core$IFn$_invoke$arity$1(G__93898) : nodes_set_93989.call(null,G__93898));
} else {
return and__5041__auto__;
}
}),links_93980));
var nodes_93991__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,nodes_93979);
var links_93992__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__93901){
var map__93902 = p__93901;
var map__93902__$1 = cljs.core.__destructure_map(map__93902);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93902__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93902__$1,new cljs.core.Keyword(null,"target","target",253001721));
return (((source == null)) || ((target == null)));
}),links_93990__$1);
var nodes_js_93993 = cljs_bean.core.__GT_js(nodes_93991__$1);
var links_js_93994 = cljs_bean.core.__GT_js(links_93992__$2);
var simulation_93995 = frontend.extensions.graph.pixi.layout_BANG_(nodes_js_93993,links_js_93994);
var seq__93903_93996 = cljs.core.seq(nodes_js_93993);
var chunk__93904_93997 = null;
var count__93905_93998 = (0);
var i__93906_93999 = (0);
while(true){
if((i__93906_93999 < count__93905_93998)){
var node_94000 = chunk__93904_93997.cljs$core$IIndexed$_nth$arity$2(null,i__93906_93999);
try{graph_93988.addNode(node_94000.id,node_94000);
}catch (e93909){if((e93909 instanceof Error)){
var e_94001 = e93909;
console.error(e_94001);
} else {
throw e93909;

}
}

var G__94002 = seq__93903_93996;
var G__94003 = chunk__93904_93997;
var G__94004 = count__93905_93998;
var G__94005 = (i__93906_93999 + (1));
seq__93903_93996 = G__94002;
chunk__93904_93997 = G__94003;
count__93905_93998 = G__94004;
i__93906_93999 = G__94005;
continue;
} else {
var temp__5720__auto___94006 = cljs.core.seq(seq__93903_93996);
if(temp__5720__auto___94006){
var seq__93903_94007__$1 = temp__5720__auto___94006;
if(cljs.core.chunked_seq_QMARK_(seq__93903_94007__$1)){
var c__5565__auto___94008 = cljs.core.chunk_first(seq__93903_94007__$1);
var G__94009 = cljs.core.chunk_rest(seq__93903_94007__$1);
var G__94010 = c__5565__auto___94008;
var G__94011 = cljs.core.count(c__5565__auto___94008);
var G__94012 = (0);
seq__93903_93996 = G__94009;
chunk__93904_93997 = G__94010;
count__93905_93998 = G__94011;
i__93906_93999 = G__94012;
continue;
} else {
var node_94013 = cljs.core.first(seq__93903_94007__$1);
try{graph_93988.addNode(node_94013.id,node_94013);
}catch (e93911){if((e93911 instanceof Error)){
var e_94014 = e93911;
console.error(e_94014);
} else {
throw e93911;

}
}

var G__94015 = cljs.core.next(seq__93903_94007__$1);
var G__94016 = null;
var G__94017 = (0);
var G__94018 = (0);
seq__93903_93996 = G__94015;
chunk__93904_93997 = G__94016;
count__93905_93998 = G__94017;
i__93906_93999 = G__94018;
continue;
}
} else {
}
}
break;
}

var seq__93912_94019 = cljs.core.seq(links_js_93994);
var chunk__93913_94020 = null;
var count__93914_94021 = (0);
var i__93915_94022 = (0);
while(true){
if((i__93915_94022 < count__93914_94021)){
var link_94023 = chunk__93913_94020.cljs$core$IIndexed$_nth$arity$2(null,i__93915_94022);
var source_94024 = link_94023.source.id;
var target_94025 = link_94023.target.id;
try{graph_93988.addEdge(source_94024,target_94025,link_94023);
}catch (e93920){if((e93920 instanceof Error)){
var e_94026 = e93920;
console.error(e_94026);
} else {
throw e93920;

}
}

var G__94027 = seq__93912_94019;
var G__94028 = chunk__93913_94020;
var G__94029 = count__93914_94021;
var G__94030 = (i__93915_94022 + (1));
seq__93912_94019 = G__94027;
chunk__93913_94020 = G__94028;
count__93914_94021 = G__94029;
i__93915_94022 = G__94030;
continue;
} else {
var temp__5720__auto___94031 = cljs.core.seq(seq__93912_94019);
if(temp__5720__auto___94031){
var seq__93912_94032__$1 = temp__5720__auto___94031;
if(cljs.core.chunked_seq_QMARK_(seq__93912_94032__$1)){
var c__5565__auto___94033 = cljs.core.chunk_first(seq__93912_94032__$1);
var G__94034 = cljs.core.chunk_rest(seq__93912_94032__$1);
var G__94035 = c__5565__auto___94033;
var G__94036 = cljs.core.count(c__5565__auto___94033);
var G__94037 = (0);
seq__93912_94019 = G__94034;
chunk__93913_94020 = G__94035;
count__93914_94021 = G__94036;
i__93915_94022 = G__94037;
continue;
} else {
var link_94038 = cljs.core.first(seq__93912_94032__$1);
var source_94039 = link_94038.source.id;
var target_94040 = link_94038.target.id;
try{graph_93988.addEdge(source_94039,target_94040,link_94038);
}catch (e93921){if((e93921 instanceof Error)){
var e_94041 = e93921;
console.error(e_94041);
} else {
throw e93921;

}
}

var G__94042 = cljs.core.next(seq__93912_94032__$1);
var G__94043 = null;
var G__94044 = (0);
var G__94045 = (0);
seq__93912_94019 = G__94042;
chunk__93913_94020 = G__94043;
count__93914_94021 = G__94044;
i__93915_94022 = G__94045;
continue;
}
} else {
}
}
break;
}

var temp__5720__auto___94046 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___94046)){
var container_ref_94047 = temp__5720__auto___94046;
var pixi_graph_94048 = (new module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs.PixiGraph(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"container","container",-1736937707),cljs.core.deref(container_ref_94047),new cljs.core.Keyword(null,"graph","graph",1558099509),graph_93988,new cljs.core.Keyword(null,"style","style",-496642736),style_93986__$1,new cljs.core.Keyword(null,"hoverStyle","hoverStyle",1695150190),hover_style_93987__$1,new cljs.core.Keyword(null,"height","height",1025178622),height_93983], null))));
cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_graph_instance,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph_93988,new cljs.core.Keyword(null,"pixi","pixi",808009198),pixi_graph_94048], null));

if(cljs.core.truth_(register_handlers_fn_93984)){
(register_handlers_fn_93984.cljs$core$IFn$_invoke$arity$1 ? register_handlers_fn_93984.cljs$core$IFn$_invoke$arity$1(pixi_graph_94048) : register_handlers_fn_93984.call(null,pixi_graph_94048));
} else {
}

frontend.extensions.graph.pixi.set_up_listeners_BANG_(pixi_graph_94048);

simulation_93995.on("tick",frontend.extensions.graph.pixi.tick_BANG_(pixi_graph_94048,graph_93988,nodes_js_93993,links_js_93994));
} else {
}
}catch (e93892){if((e93892 instanceof Error)){
var e_94049 = e93892;
console.error(e_94049);
} else {
throw e93892;

}
}
return state;
});

//# sourceMappingURL=frontend.extensions.graph.pixi.js.map
