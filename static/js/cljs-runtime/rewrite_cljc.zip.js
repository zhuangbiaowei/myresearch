goog.provide('rewrite_cljc.zip');
/**
 * Returns the current node in `zloc`.
 */
rewrite_cljc.zip.node = rewrite_cljc.custom_zipper.core.node;

/**
 * Returns the ones-based `[row col]` of the start of the current node in `zloc`.
 */
rewrite_cljc.zip.position = rewrite_cljc.custom_zipper.core.position;

/**
 * Returns the ones-based `[[start-row start-col] [end-row end-col]]` of the current node in `zloc`.
 */
rewrite_cljc.zip.position_span = rewrite_cljc.custom_zipper.core.position_span;

/**
 * Zips all the way up `zloc` and returns zipper at the root node, reflecting any changes.
 */
rewrite_cljc.zip.root = rewrite_cljc.custom_zipper.core.root;

/**
 * Return s-expression of children of current node in `zloc`.
 */
rewrite_cljc.zip.child_sexprs = rewrite_cljc.zip.base.child_sexprs;

/**
 * Create and return zipper from Clojure/ClojureScript/EDN `node` (likely parsed by [[rewrite-cljc.parse]]).
 * 
 * Set `:track-position?` in `options` to enable ones-based row/column tracking.
 * See [[rewrite-cljc.zip/position]].
 * 
 * NOTE: when position tracking is enabled, `clojure.zip` is not interchangeable with `rewrite-cljc.zip`, you must use `rewrite-cljc.zip`.
 */
rewrite_cljc.zip.edn_STAR_ = rewrite_cljc.zip.base.edn_STAR_;

/**
 * Create and return zipper from Clojure/ClojureScript/EDN `node` (likely parsed by [[rewrite-cljc.parse]])
 * and move to the first non-whitespace/non-comment child.
 * 
 * Set `:track-position?` in `options` to enable ones-based row/column tracking.
 * See [[rewrite-cljc.zip/position]].
 * 
 * NOTE: when position tracking is enabled, `clojure.zip` is not interchangeable with `rewrite-cljc.zip`, you must use `rewrite-cljc.zip`.
 */
rewrite_cljc.zip.edn = rewrite_cljc.zip.base.edn;

/**
 * Return tag of current node in `zloc`.
 */
rewrite_cljc.zip.tag = rewrite_cljc.zip.base.tag;

/**
 * Return s-expression of current node in `zloc`.
 */
rewrite_cljc.zip.sexpr = rewrite_cljc.zip.base.sexpr;

/**
 * Return length of printable string of current node in `zloc`.
 */
rewrite_cljc.zip.length = rewrite_cljc.zip.base.length;

/**
 * DEPRECATED. Return a tag/s-expression pair for inner nodes, or
 * the s-expression itself for leaves.
 */
rewrite_cljc.zip.value = rewrite_cljc.zip.base.value;

/**
 * Create and return zipper from all forms in Clojure/ClojureScript/EDN string `s`.
 * 
 * Set `:track-position?` in `options` to enable ones-based row/column tracking.
 * See [[rewrite-cljc.zip/position]].
 * 
 * NOTE: when position tracking is enabled, `clojure.zip` is not interchangeable with `rewrite-cljc.zip`, you must use `rewrite-cljc.zip`.
 */
rewrite_cljc.zip.of_string = rewrite_cljc.zip.base.of_string;

/**
 * Return string representing the current node in `zloc`.
 */
rewrite_cljc.zip.string = rewrite_cljc.zip.base.string;

/**
 * Return string representing the zipped-up `zloc` zipper.
 */
rewrite_cljc.zip.root_string = rewrite_cljc.zip.base.root_string;

/**
 * Print current node in `zloc`.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_cljc.zip.print = rewrite_cljc.zip.base.print;

/**
 * Zip up and print `zloc` from root node.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_cljc.zip.print_root = rewrite_cljc.zip.base.print_root;

/**
 * Return zipper with the current node in `zloc` replaced with `value`
 * which will be coerced to a node if possible.
 */
rewrite_cljc.zip.replace = rewrite_cljc.zip.editz.replace;

/**
 * Return zipper with the current node in `zloc` replaced with the result of:
 * 
 * (`f` (s-expression node) `args`)
 * 
 * The result of `f` will be coerced to a node if possible.
 */
rewrite_cljc.zip.edit = rewrite_cljc.zip.editz.edit;

/**
 * Return zipper with the children of the current node in `zloc` merged into itself.
 * (akin to Clojure's `unquote-splicing` macro: `~@...`).
 * - if the node is not one that can have children, no modification will
 *   be performed.
 * - if the node has no or only whitespace children, it will be removed.
 * - otherwise, splicing will be performed, moving the zipper to the first
 *   non-whitespace child afterwards.
 */
rewrite_cljc.zip.splice = rewrite_cljc.zip.editz.splice;

/**
 * Return zipper with the current node in `zloc` prefixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, first line is prefixed.
 */
rewrite_cljc.zip.prefix = rewrite_cljc.zip.editz.prefix;

/**
 * Return zipper with the current node in `zloc` suffixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, last line is suffixed.
 */
rewrite_cljc.zip.suffix = rewrite_cljc.zip.editz.suffix;

/**
 * Return the first node satisfying predicate `p?` seaching from the current node
 * in `zloc` traversing by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.find = rewrite_cljc.zip.findz.find;

/**
 * Return the first node satisfying predicate `p?` searching one movement `f` from the current
 * node in `zloc` traversing by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.find_next = rewrite_cljc.zip.findz.find_next;

/**
 * Return first node satisfying predicate `p?` searching depth-first from
 * the current node in `zloc`.
 */
rewrite_cljc.zip.find_depth_first = rewrite_cljc.zip.findz.find_depth_first;

/**
 * Return the first node satisfying predicate `p?` searching depth-first from one
 * node after the current node in `zloc`
 */
rewrite_cljc.zip.find_next_depth_first = rewrite_cljc.zip.findz.find_next_depth_first;

/**
 * Return the first node with tag `t` searching from the current node in `zloc` traversing by
 * function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.find_tag = rewrite_cljc.zip.findz.find_tag;

/**
 * Return the first node with tag `t` searching one movement `f` from the current
 * node in `zloc` traversing by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.find_next_tag = rewrite_cljc.zip.findz.find_next_tag;

/**
 * Return the first token node with value `v` searching one movement `f` from the current node in `zloc` traversing
 * by function `f`.
 * 
 * `v` can be a single value or a set. When `v` is a set matches on any value in set.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.find_value = rewrite_cljc.zip.findz.find_value;

/**
 * Return the first token node with value `v` searching one movement `f` from the current node in `zloc` traversing
 * by function `f`.
 * 
 * `v` can be a single value or a set. When `v` is a set matches on any value in set.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.find_next_value = rewrite_cljc.zip.findz.find_next_value;

/**
 * Return the first token node satisfying predicate `p?` searching from the current node in `zloc` traversing
 * by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.find_token = rewrite_cljc.zip.findz.find_token;

/**
 * Return the first token node satisfying predicate `p?` searching from the current node in `zloc` traversing
 * by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.find_next_token = rewrite_cljc.zip.findz.find_next_token;

/**
 * Return the last node spanning position `pos` that satisfies predicate `p?`
 * searching depth-first from the current node in `zloc`.
 * 
 *   NOTE: Does not ignore whitespace/comment nodes.
 */
rewrite_cljc.zip.find_last_by_pos = rewrite_cljc.zip.findz.find_last_by_pos;

/**
 * Return the last node spanning position `pos` with tag `t` searching depth-first from the current node in `zloc`.
 */
rewrite_cljc.zip.find_tag_by_pos = rewrite_cljc.zip.findz.find_tag_by_pos;

/**
 * Return zipper with `item` inserted to the right of the current node in `zloc`.
 *   Will insert a space if necessary.
 */
rewrite_cljc.zip.insert_right = rewrite_cljc.zip.insert.insert_right;

/**
 * Return zipper with `item` inserted to the left of the current node in `zloc`.
 *   Will insert a space if necessary.
 */
rewrite_cljc.zip.insert_left = rewrite_cljc.zip.insert.insert_left;

/**
 * Return zipper with `item` inserted as the first child of the current node in `zloc`.
 */
rewrite_cljc.zip.insert_child = rewrite_cljc.zip.insert.insert_child;

/**
 * Return zipper with `item` appended as last child of the current node in `zloc`.
 *   Will insert a space if necessary.
 */
rewrite_cljc.zip.append_child = rewrite_cljc.zip.insert.append_child;

/**
 * Return zipper with location moved left to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.left = rewrite_cljc.zip.move.left;

/**
 * Return zipper with location moved right to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.right = rewrite_cljc.zip.move.right;

/**
 * Return zipper with location moved up to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.up = rewrite_cljc.zip.move.up;

/**
 * Return zipper with location moved down to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.down = rewrite_cljc.zip.move.down;

/**
 * Return zipper with location moved to the previous depth-first non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.prev = rewrite_cljc.zip.move.prev;

/**
 * Return zipper with location moved to the next depth-first non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.next = rewrite_cljc.zip.move.next;

/**
 * Return zipper with location moved to the leftmost non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.leftmost = rewrite_cljc.zip.move.leftmost;

/**
 * Return zipper with location moved to the rightmost non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.rightmost = rewrite_cljc.zip.move.rightmost;

/**
 * Return true if at leftmost non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.leftmost_QMARK_ = rewrite_cljc.zip.move.leftmost_QMARK_;

/**
 * Return true if at rightmost non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.rightmost_QMARK_ = rewrite_cljc.zip.move.rightmost_QMARK_;

/**
 * Return true if `zloc` is at end of depth-first traversal.
 */
rewrite_cljc.zip.end_QMARK_ = rewrite_cljc.zip.move.end_QMARK_;

/**
 * Return zipper with current node in `zloc` removed. Returned zipper location
 * is moved to the first non-whitespace node preceding removed node in a depth-first walk.
 * Removes whitespace appropriately.
 * 
 *   - `[1 |2  3]    => [|1 3]`
 *   - `[1 |2]       => [|1]`
 *   - `[|1 2]       => |[2]`
 *   - `[|1]         => |[]`
 *   - `[  |1  ]     => |[]`
 *   - `[1 [2 3] |4] => [1 [2 |3]]`
 *   - `[|1 [2 3] 4] => |[[2 3] 4]`
 * 
 * If the removed node is at the rightmost location, both preceding and trailing spaces are removed,
 * otherwise only trailing spaces are removed. This means that a following element
 * (no matter whether on the same line or not) will end up in the same position
 * (line/column) as the removed one, _unless_ a comment lies between the original
 * node and the neighbour.
 */
rewrite_cljc.zip.remove = rewrite_cljc.zip.removez.remove;

/**
 * Same as [[remove]] but preserves newlines.
 */
rewrite_cljc.zip.remove_preserve_newline = rewrite_cljc.zip.removez.remove_preserve_newline;

/**
 * Returns true if current node in `zloc` is a sequence.
 */
rewrite_cljc.zip.seq_QMARK_ = rewrite_cljc.zip.seqz.seq_QMARK_;

/**
 * Returns true if current node in `zloc` is a list.
 */
rewrite_cljc.zip.list_QMARK_ = rewrite_cljc.zip.seqz.list_QMARK_;

/**
 * Returns true if current node in `zloc` is a vector.
 */
rewrite_cljc.zip.vector_QMARK_ = rewrite_cljc.zip.seqz.vector_QMARK_;

/**
 * Returns true if current node in `zloc` is a set.
 */
rewrite_cljc.zip.set_QMARK_ = rewrite_cljc.zip.seqz.set_QMARK_;

/**
 * Returns true if current node in `zloc` is a map.
 */
rewrite_cljc.zip.map_QMARK_ = rewrite_cljc.zip.seqz.map_QMARK_;

/**
 * Returns zipper with function `f` applied to all value nodes of current node in `zloc`.
 * Current node must be a sequence node.
 * 
 * Iterates over:
 * - value nodes of maps
 * - each element of a seq
 */
rewrite_cljc.zip.map = rewrite_cljc.zip.seqz.map;

/**
 * Returns zipper with function `f` applied to all key nodes of the current node in `zloc`.
 * Current node must be map node.
 */
rewrite_cljc.zip.map_keys = rewrite_cljc.zip.seqz.map_keys;

/**
 * Returns zipper with function `f` applied to all value current node in `zloc`.
 * Current node must be map node.
 */
rewrite_cljc.zip.map_vals = rewrite_cljc.zip.seqz.map_vals;

/**
 * Returns value node mapped to key `k` when current node in `zloc` is a map node.
 * Returns nth `k` value node when current node in `zloc` is a sequence node.
 */
rewrite_cljc.zip.get = rewrite_cljc.zip.seqz.get;

/**
 * Returns zipper with key `k` set to value `v` when current node in `zloc` is a map node.
 * Returns zipper with index `k` set to value `v` when current node in `zloc` is a sequence.
 */
rewrite_cljc.zip.assoc = rewrite_cljc.zip.seqz.assoc;

/**
 * Return zipper applying function `f` to `zloc`. The resulting
 * zipper will be located at the same path (i.e. the same number of
 * downwards and right movements from the root) incoming `zloc`.
 */
rewrite_cljc.zip.edit_node = rewrite_cljc.zip.subedit.edit_node;

/**
 * Return zipper replacing current node in `zloc` with result of `f` applied to said node as an isolated sub-tree.
 * The resulting zipper will be located on the root of the modified sub-tree.
 */
rewrite_cljc.zip.subedit_node = rewrite_cljc.zip.subedit.subedit_node;

/**
 * Create and return a zipper whose root is the current node in `zloc`.
 */
rewrite_cljc.zip.subzip = rewrite_cljc.zip.subedit.subzip;

/**
 * Return zipper modified by an isolated depth-first pre-order traversal.
 * Traversal starts at the current node in `zloc` and continues to the end of the isolated sub-tree.
 * Function `f` is called on the zipper locations satisfying predicate `p?`, or all locations when `p?` is absent,
 * and must return a valid zipper - modified or not.
 * 
 * Note that by default a newly created zipper automatically navigates to the first non-whitespace
 * node. If you want to be sure to walk all forms in a zipper, you'll want to navigate one up prior to your walk:
 * 
 * ```Clojure
 * (-> (zip/of-string "my clojure forms")
 *     zip/up
 *     (zip/prewalk ...))
 * ```
 * 
 * WARNING: when function `f` changes the location in the zipper, normal traversal will be affected.
 */
rewrite_cljc.zip.prewalk = rewrite_cljc.zip.walk.prewalk;

/**
 * Return zipper modified by an isolated depth-first post-order traversal.
 * Traversal starts at the current node in `zloc` and continues to the end of the isolated sub-tree.
 * Function `f` is called on the zipper locations satisfying predicate `p?`, or all locations when `p?` is absent,
 * and must return a valid zipper - modified or not.
 * 
 * Note that by default a newly created zipper automatically navigates to the first non-whitespace
 * node. If you want to be sure to walk all forms in a zipper, you'll want to navigate one up prior to your walk:
 * 
 * ```Clojure
 * (-> (zip/of-string "my clojure forms")
 *     zip/up
 *     (zip/postwalk ...))
 * ```
 * 
 * WARNING: when function `f` changes the location in the zipper, normal traversal will be affected.
 */
rewrite_cljc.zip.postwalk = rewrite_cljc.zip.walk.postwalk;

/**
 * Returns true when the current the node in `zloc` is a Clojure whitespace (which includes the comma).
 */
rewrite_cljc.zip.whitespace_QMARK_ = rewrite_cljc.zip.whitespace.whitespace_QMARK_;

/**
 * Returns true when the current node in `zloc` is a linebreak.
 */
rewrite_cljc.zip.linebreak_QMARK_ = rewrite_cljc.zip.whitespace.linebreak_QMARK_;

/**
 * Returns true when current node in `zloc` is whitespace or a comment.
 */
rewrite_cljc.zip.whitespace_or_comment_QMARK_ = rewrite_cljc.zip.whitespace.whitespace_or_comment_QMARK_;

/**
 * Return zipper with location moved to first location not satisfying predicate `p?` starting from the node in
 * `zloc` and traversing by function `f`.
 */
rewrite_cljc.zip.skip = rewrite_cljc.zip.whitespace.skip;

/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc`
 * and traversing by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.skip_whitespace = rewrite_cljc.zip.whitespace.skip_whitespace;

/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc` traversing left.
 */
rewrite_cljc.zip.skip_whitespace_left = rewrite_cljc.zip.whitespace.skip_whitespace_left;

/**
 * Return zipper with `n` space whitespace node inserted to the left of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.insert_space_left = rewrite_cljc.zip.whitespace.insert_space_left;

/**
 * Return zipper with `n` space whitespace node inserted to the right of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.insert_space_right = rewrite_cljc.zip.whitespace.insert_space_right;

/**
 * Return zipper with `n` newlines node inserted to the left of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.insert_newline_left = rewrite_cljc.zip.whitespace.insert_newline_left;

/**
 * Return zipper with `n` newlines node inserted to the right of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.insert_newline_right = rewrite_cljc.zip.whitespace.insert_newline_right;

/**
 * DEPRECATED: renamed to [[insert-space-left]].
 */
rewrite_cljc.zip.prepend_space = rewrite_cljc.zip.whitespace.prepend_space;

/**
 * DEPRECATED: renamed to [[insert-space-right]].
 */
rewrite_cljc.zip.append_space = rewrite_cljc.zip.whitespace.append_space;

/**
 * DEPRECATED: renamed to [[insert-newline-left]].
 */
rewrite_cljc.zip.prepend_newline = rewrite_cljc.zip.whitespace.prepend_newline;

/**
 * DEPRECATED: renamed to [[insert-newline-right]].
 */
rewrite_cljc.zip.append_newline = rewrite_cljc.zip.whitespace.append_newline;

/**
 * Raw version of [[right]].
 * 
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.right_STAR_ = rewrite_cljc.custom_zipper.core.right;

/**
 * Raw version of [[left]].
 * 
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.left_STAR_ = rewrite_cljc.custom_zipper.core.left;

/**
 * Raw version of [[up]].
 * 
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.up_STAR_ = rewrite_cljc.custom_zipper.core.up;

/**
 * Raw version of [[down]].
 * 
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.down_STAR_ = rewrite_cljc.custom_zipper.core.down;

/**
 * Raw version of [[next]].
 * 
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.next_STAR_ = rewrite_cljc.custom_zipper.core.next;

/**
 * Raw version of [[prev]].
 * 
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.prev_STAR_ = rewrite_cljc.custom_zipper.core.prev;

/**
 * Raw version of [[rightmost]].
 * 
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.rightmost_STAR_ = rewrite_cljc.custom_zipper.core.rightmost;

/**
 * Raw version of [[leftmost]].
 * 
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.leftmost_STAR_ = rewrite_cljc.custom_zipper.core.leftmost;

/**
 * Raw version of [[replace]].
 * 
 * Returns zipper with `node` replacing current node in `zloc`, without moving location.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.replace_STAR_ = rewrite_cljc.custom_zipper.core.replace;

/**
 * Raw version of [[edit]].
 * 
 * Returns zipper with value of `(f current-node args)` replacing current node in `zloc`
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.edit_STAR_ = rewrite_cljc.custom_zipper.core.edit;

/**
 * Raw version of [[remove]].
 * 
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.remove_STAR_ = rewrite_cljc.custom_zipper.core.remove;

/**
 * Raw version of [[insert-left]].
 * 
 * Returns zipper with `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.insert_left_STAR_ = rewrite_cljc.custom_zipper.core.insert_left;

/**
 * Raw version of [[insert-right]].
 * 
 * Returns zipper with `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.insert_right_STAR_ = rewrite_cljc.custom_zipper.core.insert_right;

/**
 * Raw version of [[insert-child]].
 * 
 * Returns zipper with `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.insert_child_STAR_ = rewrite_cljc.custom_zipper.core.insert_child;

/**
 * Raw version of [[append-child]].
 * 
 * Returns zipper with `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 * 
 * NOTE: This function does not skip, nor provide any special handling for whitespace/comment nodes.
 */
rewrite_cljc.zip.append_child_STAR_ = rewrite_cljc.custom_zipper.core.append_child;

/**
 * DEPRECATED. Renamed to [[string]].
 */
rewrite_cljc.zip.__GT_string = (function rewrite_cljc$zip$__GT_string(zloc){
return rewrite_cljc.zip.base.string(zloc);
});
/**
 * DEPRECATED. Renamed to [[root-string]].
 */
rewrite_cljc.zip.__GT_root_string = (function rewrite_cljc$zip$__GT_root_string(zloc){
return rewrite_cljc.zip.base.root_string(zloc);
});

//# sourceMappingURL=rewrite_cljc.zip.js.map
