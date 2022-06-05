goog.provide('borkdude.rewrite_edn');
/**
 * Same as rewrite-cljc.parser/parse-string-all
 */
borkdude.rewrite_edn.parse_string = (function borkdude$rewrite_edn$parse_string(s){
return rewrite_cljc.parser.parse_string_all(s);
});
/**
 * Same as rewrite-cljc.node/sexpr
 */
borkdude.rewrite_edn.sexpr = (function borkdude$rewrite_edn$sexpr(node){
return rewrite_cljc.node.sexpr(node);
});
/**
 * Associates k to v in node (which may be a forms node as returned by parse-string or map node).
 *   Both k and v are coerced into nodes.
 */
borkdude.rewrite_edn.assoc = (function borkdude$rewrite_edn$assoc(node,k,v){
return borkdude.rewrite_edn.impl.assoc(node,k,v);
});
/**
 * Associates value under keys ks in map node with v.
 */
borkdude.rewrite_edn.assoc_in = (function borkdude$rewrite_edn$assoc_in(node,ks,v){
return borkdude.rewrite_edn.impl.assoc_in(node,ks,v);
});
/**
 * Updates value under key k in map node. Function f receives
 *   node. Return value is coerced into node.
 */
borkdude.rewrite_edn.update = (function borkdude$rewrite_edn$update(node,k,f){
return borkdude.rewrite_edn.impl.update(node,k,f);
});
/**
 * Updates value under keys ks in map node. Function f receives
 *   node. Return value is coerced into node.
 */
borkdude.rewrite_edn.update_in = (function borkdude$rewrite_edn$update_in(node,ks,f){
return borkdude.rewrite_edn.impl.update_in(node,ks,f);
});
/**
 * Maps f over keys of node (which may be a forms node as returned by
 *   parse-string or map node).
 */
borkdude.rewrite_edn.map_keys = (function borkdude$rewrite_edn$map_keys(f,node){
return borkdude.rewrite_edn.impl.map_keys(f,node);
});

//# sourceMappingURL=borkdude.rewrite_edn.js.map
