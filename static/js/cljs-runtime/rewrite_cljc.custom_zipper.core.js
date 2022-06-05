goog.provide('rewrite_cljc.custom_zipper.core');
rewrite_cljc.custom_zipper.core.custom_zipper = (function rewrite_cljc$custom_zipper$core$custom_zipper(root){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-cljc.custom-zipper.core","custom?","rewrite-cljc.custom-zipper.core/custom?",462907050),true,new cljs.core.Keyword(null,"node","node",581201198),root,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.List.EMPTY], null);
});
rewrite_cljc.custom_zipper.core.zipper = (function rewrite_cljc$custom_zipper$core$zipper(root){
return clojure.zip.zipper(rewrite_cljc.node.protocols.inner_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,rewrite_cljc.node.protocols.children),rewrite_cljc.node.protocols.replace_children,root);
});
rewrite_cljc.custom_zipper.core.custom_zipper_QMARK_ = (function rewrite_cljc$custom_zipper$core$custom_zipper_QMARK_(value){
return new cljs.core.Keyword("rewrite-cljc.custom-zipper.core","custom?","rewrite-cljc.custom-zipper.core/custom?",462907050).cljs$core$IFn$_invoke$arity$1(value);
});
/**
 * Returns the current node in `zloc`.
 */
rewrite_cljc.custom_zipper.core.node = (function rewrite_cljc$custom_zipper$core$node(G__78545){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78545))){
var zloc = G__78545;
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.node(G__78545);
}
});
/**
 * Returns true if the current node in `zloc` is a branch.
 */
rewrite_cljc.custom_zipper.core.branch_QMARK_ = (function rewrite_cljc$custom_zipper$core$branch_QMARK_(G__78547){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78547))){
var zloc = G__78547;
return rewrite_cljc.node.protocols.inner_QMARK_(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.branch_QMARK_(G__78547);
}
});
/**
 * Returns a seq of the children of current node in `zloc`, which must be a branch.
 */
rewrite_cljc.custom_zipper.core.children = (function rewrite_cljc$custom_zipper$core$children(G__78548){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78548))){
var map__78549 = G__78548;
var map__78549__$1 = cljs.core.__destructure_map(map__78549);
var zloc = map__78549__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78549__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc))){
return cljs.core.seq(rewrite_cljc.node.protocols.children(node));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("called children on a leaf node",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return clojure.zip.children(G__78548);
}
});
/**
 * Returns a new branch node, given an existing `node` and new
 *   `children`. 
 */
rewrite_cljc.custom_zipper.core.make_node = (function rewrite_cljc$custom_zipper$core$make_node(G__78550,G__78551,G__78552){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78550))){
var _zloc = G__78550;
var node = G__78551;
var children = G__78552;
return rewrite_cljc.node.protocols.replace_children(node,children);
} else {
return clojure.zip.make_node(G__78550,G__78551,G__78552);
}
});
/**
 * Returns the ones-based `[row col]` of the start of the current node in `zloc`.
 */
rewrite_cljc.custom_zipper.core.position = (function rewrite_cljc$custom_zipper$core$position(zloc){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["to use position functions, please construct your zipper with ","':track-position?'  set to true."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Returns the ones-based `[[start-row start-col] [end-row end-col]]` of the current node in `zloc`.
 */
rewrite_cljc.custom_zipper.core.position_span = (function rewrite_cljc$custom_zipper$core$position_span(zloc){
var start_pos = rewrite_cljc.custom_zipper.core.position(zloc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_pos,rewrite_cljc.node.protocols._PLUS_extent(start_pos,rewrite_cljc.node.protocols.extent(rewrite_cljc.custom_zipper.core.node(zloc)))], null);
});
/**
 * Returns a seq of the left siblings of current node in `zloc`.
 */
rewrite_cljc.custom_zipper.core.lefts = (function rewrite_cljc$custom_zipper$core$lefts(G__78553){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78553))){
var zloc = G__78553;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.lefts(G__78553);
}
});
/**
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 */
rewrite_cljc.custom_zipper.core.down = (function rewrite_cljc$custom_zipper$core$down(G__78554){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78554))){
var zloc = G__78554;
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc))){
var map__78555 = zloc;
var map__78555__$1 = cljs.core.__destructure_map(map__78555);
var vec__78556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78555__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78556,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78556,(1),null);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78555__$1,new cljs.core.Keyword(null,"node","node",581201198));
var vec__78559 = rewrite_cljc.custom_zipper.core.children(zloc);
var seq__78560 = cljs.core.seq(vec__78559);
var first__78561 = cljs.core.first(seq__78560);
var seq__78560__$1 = cljs.core.next(seq__78560);
var c = first__78561;
var cnext = seq__78560__$1;
var cs = vec__78559;
if(cljs.core.truth_(cs)){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-cljc.custom-zipper.core","custom?","rewrite-cljc.custom-zipper.core/custom?",462907050),true,new cljs.core.Keyword(null,"node","node",581201198),c,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + rewrite_cljc.node.protocols.leader_length(node))], null),new cljs.core.Keyword(null,"parent","parent",-878878779),zloc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cnext], null);
} else {
return null;
}
} else {
return null;
}
} else {
return clojure.zip.down(G__78554);
}
});
/**
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 */
rewrite_cljc.custom_zipper.core.up = (function rewrite_cljc$custom_zipper$core$up(G__78562){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78562))){
var zloc = G__78562;
var map__78563 = zloc;
var map__78563__$1 = cljs.core.__destructure_map(map__78563);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78563__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78563__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78563__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78563__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78563__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
if(cljs.core.truth_(parent)){
if(cljs.core.truth_(changed_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_cljc.custom_zipper.core.make_node(zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,left),cljs.core.cons(node,right)))], 0));
} else {
return parent;
}
} else {
return null;
}
} else {
return clojure.zip.up(G__78562);
}
});
/**
 * Zips all the way up `zloc` and returns zipper at the root node, reflecting any changes.
 */
rewrite_cljc.custom_zipper.core.root = (function rewrite_cljc$custom_zipper$core$root(G__78564){
while(true){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78564))){
var map__78565 = G__78564;
var map__78565__$1 = cljs.core.__destructure_map(map__78565);
var zloc = map__78565__$1;
var end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78565__$1,new cljs.core.Keyword(null,"end?","end?",-1423391609));
if(cljs.core.truth_(end_QMARK_)){
return rewrite_cljc.custom_zipper.core.node(zloc);
} else {
var p = rewrite_cljc.custom_zipper.core.up(zloc);
if(cljs.core.truth_(p)){
var G__78621 = p;
G__78564 = G__78621;
continue;
} else {
return rewrite_cljc.custom_zipper.core.node(zloc);
}
}
} else {
return clojure.zip.root(G__78564);
}
break;
}
});
/**
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 */
rewrite_cljc.custom_zipper.core.right = (function rewrite_cljc$custom_zipper$core$right(G__78567){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78567))){
var zloc = G__78567;
var map__78568 = zloc;
var map__78568__$1 = cljs.core.__destructure_map(map__78568);
var vec__78569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78568__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__78570 = cljs.core.seq(vec__78569);
var first__78571 = cljs.core.first(seq__78570);
var seq__78570__$1 = cljs.core.next(seq__78570);
var r = first__78571;
var rnext = seq__78570__$1;
var right = vec__78569;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78568__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78568__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78568__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78568__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return right;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,position], null)),new cljs.core.Keyword(null,"right","right",-452581833),rnext,new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_cljc.node.protocols._PLUS_extent(position,rewrite_cljc.node.protocols.extent(node))], 0));
} else {
return null;
}
} else {
return clojure.zip.right(G__78567);
}
});
/**
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 */
rewrite_cljc.custom_zipper.core.rightmost = (function rewrite_cljc$custom_zipper$core$rightmost(G__78572){
while(true){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78572))){
var zloc = G__78572;
var temp__5718__auto__ = rewrite_cljc.custom_zipper.core.right(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var next = temp__5718__auto__;
var G__78622 = next;
G__78572 = G__78622;
continue;
} else {
return zloc;
}
} else {
return clojure.zip.rightmost(G__78572);
}
break;
}
});
/**
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 */
rewrite_cljc.custom_zipper.core.left = (function rewrite_cljc$custom_zipper$core$left(G__78573){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78573))){
var zloc = G__78573;
var map__78574 = zloc;
var map__78574__$1 = cljs.core.__destructure_map(map__78574);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78574__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78574__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78574__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78574__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(left);
} else {
return and__5041__auto__;
}
})())){
var vec__78575 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78575,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78575,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(node,right)], 0));
} else {
return null;
}
} else {
return clojure.zip.left(G__78573);
}
});
/**
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 */
rewrite_cljc.custom_zipper.core.leftmost = (function rewrite_cljc$custom_zipper$core$leftmost(G__78578){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78578))){
var zloc = G__78578;
var map__78579 = zloc;
var map__78579__$1 = cljs.core.__destructure_map(map__78579);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78579__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78579__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78579__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78579__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(left);
} else {
return and__5041__auto__;
}
})())){
var vec__78580 = cljs.core.first(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78580,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78580,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(left)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([right], 0))], 0));
} else {
return zloc;
}
} else {
return clojure.zip.leftmost(G__78578);
}
});
/**
 * Returns zipper with `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 */
rewrite_cljc.custom_zipper.core.insert_left = (function rewrite_cljc$custom_zipper$core$insert_left(G__78583,G__78584){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78583))){
var zloc = G__78583;
var item = G__78584;
var map__78585 = zloc;
var map__78585__$1 = cljs.core.__destructure_map(map__78585);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78585__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78585__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78585__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert left at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,position], null)),new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_cljc.node.protocols._PLUS_extent(position,rewrite_cljc.node.protocols.extent(item))], 0));
}
} else {
return clojure.zip.insert_left(G__78583,G__78584);
}
});
/**
 * Returns zipper with `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 */
rewrite_cljc.custom_zipper.core.insert_right = (function rewrite_cljc$custom_zipper$core$insert_right(G__78586,G__78587){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78586))){
var zloc = G__78586;
var item = G__78587;
var map__78588 = zloc;
var map__78588__$1 = cljs.core.__destructure_map(map__78588);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78588__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78588__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert right at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(item,right)], 0));
}
} else {
return clojure.zip.insert_right(G__78586,G__78587);
}
});
/**
 * Returns zipper with `node` replacing current node in `zloc`, without moving location.
 */
rewrite_cljc.custom_zipper.core.replace = (function rewrite_cljc$custom_zipper$core$replace(G__78589,G__78590){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78589))){
var zloc = G__78589;
var node = G__78590;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),node], 0));
} else {
return clojure.zip.replace(G__78589,G__78590);
}
});
/**
 * Returns zipper with value of `(f current-node args)` replacing current node in `zloc`
 */
rewrite_cljc.custom_zipper.core.edit = (function rewrite_cljc$custom_zipper$core$edit(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78626 = arguments.length;
var i__5767__auto___78627 = (0);
while(true){
if((i__5767__auto___78627 < len__5766__auto___78626)){
args__5772__auto__.push((arguments[i__5767__auto___78627]));

var G__78628 = (i__5767__auto___78627 + (1));
i__5767__auto___78627 = G__78628;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return rewrite_cljc.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(rewrite_cljc.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return rewrite_cljc.custom_zipper.core.replace(zloc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rewrite_cljc.custom_zipper.core.node(zloc),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.zip.edit,zloc,f,args);
}
}));

(rewrite_cljc.custom_zipper.core.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_cljc.custom_zipper.core.edit.cljs$lang$applyTo = (function (seq78591){
var G__78592 = cljs.core.first(seq78591);
var seq78591__$1 = cljs.core.next(seq78591);
var G__78593 = cljs.core.first(seq78591__$1);
var seq78591__$2 = cljs.core.next(seq78591__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78592,G__78593,seq78591__$2);
}));

/**
 * Returns zipper with `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 */
rewrite_cljc.custom_zipper.core.insert_child = (function rewrite_cljc$custom_zipper$core$insert_child(G__78594,G__78595){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78594))){
var zloc = G__78594;
var item = G__78595;
return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.custom_zipper.core.make_node(zloc,rewrite_cljc.custom_zipper.core.node(zloc),cljs.core.cons(item,rewrite_cljc.custom_zipper.core.children(zloc))));
} else {
return clojure.zip.insert_child(G__78594,G__78595);
}
});
/**
 * Returns zipper with `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 */
rewrite_cljc.custom_zipper.core.append_child = (function rewrite_cljc$custom_zipper$core$append_child(G__78596,G__78597){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78596))){
var zloc = G__78596;
var item = G__78597;
return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.custom_zipper.core.make_node(zloc,rewrite_cljc.custom_zipper.core.node(zloc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.children(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
} else {
return clojure.zip.append_child(G__78596,G__78597);
}
});
/**
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 */
rewrite_cljc.custom_zipper.core.next = (function rewrite_cljc$custom_zipper$core$next(G__78598){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78598))){
var map__78599 = G__78598;
var map__78599__$1 = cljs.core.__destructure_map(map__78599);
var zloc = map__78599__$1;
var end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78599__$1,new cljs.core.Keyword(null,"end?","end?",-1423391609));
if(cljs.core.truth_(end_QMARK_)){
return zloc;
} else {
var or__5043__auto__ = (function (){var and__5041__auto__ = rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc);
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_cljc.custom_zipper.core.down(zloc);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = rewrite_cljc.custom_zipper.core.right(zloc);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var p = zloc;
while(true){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.up(p))){
var or__5043__auto____$2 = rewrite_cljc.custom_zipper.core.right(rewrite_cljc.custom_zipper.core.up(p));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var G__78629 = rewrite_cljc.custom_zipper.core.up(p);
p = G__78629;
continue;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"end?","end?",-1423391609),true);
}
break;
}
}
}
}
} else {
return clojure.zip.next(G__78598);
}
});
/**
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 */
rewrite_cljc.custom_zipper.core.prev = (function rewrite_cljc$custom_zipper$core$prev(G__78600){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78600))){
var zloc = G__78600;
var temp__5718__auto__ = rewrite_cljc.custom_zipper.core.left(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var lloc = temp__5718__auto__;
var zloc__$1 = lloc;
while(true){
var temp__5718__auto____$1 = (function (){var and__5041__auto__ = rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_cljc.custom_zipper.core.down(zloc__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var child = temp__5718__auto____$1;
var G__78630 = rewrite_cljc.custom_zipper.core.rightmost(child);
zloc__$1 = G__78630;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return rewrite_cljc.custom_zipper.core.up(zloc);
}
} else {
return clojure.zip.prev(G__78600);
}
});
/**
 * Returns true if at end of depth-first walk in `zloc`.
 */
rewrite_cljc.custom_zipper.core.end_QMARK_ = (function rewrite_cljc$custom_zipper$core$end_QMARK_(G__78601){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78601))){
var zloc = G__78601;
return new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.end_QMARK_(G__78601);
}
});
/**
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 */
rewrite_cljc.custom_zipper.core.remove = (function rewrite_cljc$custom_zipper$core$remove(G__78602){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78602))){
var zloc = G__78602;
var map__78603 = zloc;
var map__78603__$1 = cljs.core.__destructure_map(map__78603);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78603__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78603__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78603__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.seq(left)){
var zloc__$1 = (function (){var vec__78607 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78607,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78607,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left)], 0));
})();
while(true){
var temp__5718__auto__ = (function (){var and__5041__auto__ = rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_cljc.custom_zipper.core.down(zloc__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
var G__78631 = rewrite_cljc.custom_zipper.core.rightmost(child);
zloc__$1 = G__78631;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_cljc.custom_zipper.core.make_node(zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),right)], 0));
}
}
} else {
return clojure.zip.remove(G__78602);
}
});

//# sourceMappingURL=rewrite_cljc.custom_zipper.core.js.map
