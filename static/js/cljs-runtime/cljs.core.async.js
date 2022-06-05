goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44148 = arguments.length;
switch (G__44148) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44151 = (function (f,blockable,meta44152){
this.f = f;
this.blockable = blockable;
this.meta44152 = meta44152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44153,meta44152__$1){
var self__ = this;
var _44153__$1 = this;
return (new cljs.core.async.t_cljs$core$async44151(self__.f,self__.blockable,meta44152__$1));
}));

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44153){
var self__ = this;
var _44153__$1 = this;
return self__.meta44152;
}));

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44152","meta44152",-260975648,null)], null);
}));

(cljs.core.async.t_cljs$core$async44151.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44151");

(cljs.core.async.t_cljs$core$async44151.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44151");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44151.
 */
cljs.core.async.__GT_t_cljs$core$async44151 = (function cljs$core$async$__GT_t_cljs$core$async44151(f__$1,blockable__$1,meta44152){
return (new cljs.core.async.t_cljs$core$async44151(f__$1,blockable__$1,meta44152));
});

}

return (new cljs.core.async.t_cljs$core$async44151(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44157 = arguments.length;
switch (G__44157) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44159 = arguments.length;
switch (G__44159) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44174 = arguments.length;
switch (G__44174) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46056 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46056) : fn1.call(null,val_46056));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46056) : fn1.call(null,val_46056));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44185 = arguments.length;
switch (G__44185) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___46058 = n;
var x_46059 = (0);
while(true){
if((x_46059 < n__5633__auto___46058)){
(a[x_46059] = x_46059);

var G__46060 = (x_46059 + (1));
x_46059 = G__46060;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44188 = (function (flag,meta44189){
this.flag = flag;
this.meta44189 = meta44189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44190,meta44189__$1){
var self__ = this;
var _44190__$1 = this;
return (new cljs.core.async.t_cljs$core$async44188(self__.flag,meta44189__$1));
}));

(cljs.core.async.t_cljs$core$async44188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44190){
var self__ = this;
var _44190__$1 = this;
return self__.meta44189;
}));

(cljs.core.async.t_cljs$core$async44188.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44189","meta44189",1214752699,null)], null);
}));

(cljs.core.async.t_cljs$core$async44188.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44188");

(cljs.core.async.t_cljs$core$async44188.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44188");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44188.
 */
cljs.core.async.__GT_t_cljs$core$async44188 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44188(flag__$1,meta44189){
return (new cljs.core.async.t_cljs$core$async44188(flag__$1,meta44189));
});

}

return (new cljs.core.async.t_cljs$core$async44188(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44193 = (function (flag,cb,meta44194){
this.flag = flag;
this.cb = cb;
this.meta44194 = meta44194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44195,meta44194__$1){
var self__ = this;
var _44195__$1 = this;
return (new cljs.core.async.t_cljs$core$async44193(self__.flag,self__.cb,meta44194__$1));
}));

(cljs.core.async.t_cljs$core$async44193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44195){
var self__ = this;
var _44195__$1 = this;
return self__.meta44194;
}));

(cljs.core.async.t_cljs$core$async44193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44194","meta44194",1424079017,null)], null);
}));

(cljs.core.async.t_cljs$core$async44193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44193");

(cljs.core.async.t_cljs$core$async44193.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44193.
 */
cljs.core.async.__GT_t_cljs$core$async44193 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44193(flag__$1,cb__$1,meta44194){
return (new cljs.core.async.t_cljs$core$async44193(flag__$1,cb__$1,meta44194));
});

}

return (new cljs.core.async.t_cljs$core$async44193(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44197_SHARP_){
var G__44201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44197_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44201) : fret.call(null,G__44201));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44198_SHARP_){
var G__44203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44198_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44203) : fret.call(null,G__44203));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46065 = (i + (1));
i = G__46065;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46066 = arguments.length;
var i__5767__auto___46067 = (0);
while(true){
if((i__5767__auto___46067 < len__5766__auto___46066)){
args__5772__auto__.push((arguments[i__5767__auto___46067]));

var G__46068 = (i__5767__auto___46067 + (1));
i__5767__auto___46067 = G__46068;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44206){
var map__44207 = p__44206;
var map__44207__$1 = cljs.core.__destructure_map(map__44207);
var opts = map__44207__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44204){
var G__44205 = cljs.core.first(seq44204);
var seq44204__$1 = cljs.core.next(seq44204);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44205,seq44204__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44210 = arguments.length;
switch (G__44210) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34378__auto___46071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_44240){
var state_val_44241 = (state_44240[(1)]);
if((state_val_44241 === (7))){
var inst_44235 = (state_44240[(2)]);
var state_44240__$1 = state_44240;
var statearr_44244_46072 = state_44240__$1;
(statearr_44244_46072[(2)] = inst_44235);

(statearr_44244_46072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44241 === (1))){
var state_44240__$1 = state_44240;
var statearr_44246_46073 = state_44240__$1;
(statearr_44246_46073[(2)] = null);

(statearr_44246_46073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44241 === (4))){
var inst_44214 = (state_44240[(7)]);
var inst_44214__$1 = (state_44240[(2)]);
var inst_44218 = (inst_44214__$1 == null);
var state_44240__$1 = (function (){var statearr_44250 = state_44240;
(statearr_44250[(7)] = inst_44214__$1);

return statearr_44250;
})();
if(cljs.core.truth_(inst_44218)){
var statearr_44251_46075 = state_44240__$1;
(statearr_44251_46075[(1)] = (5));

} else {
var statearr_44252_46076 = state_44240__$1;
(statearr_44252_46076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44241 === (13))){
var state_44240__$1 = state_44240;
var statearr_44253_46077 = state_44240__$1;
(statearr_44253_46077[(2)] = null);

(statearr_44253_46077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44241 === (6))){
var inst_44214 = (state_44240[(7)]);
var state_44240__$1 = state_44240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44240__$1,(11),to,inst_44214);
} else {
if((state_val_44241 === (3))){
var inst_44237 = (state_44240[(2)]);
var state_44240__$1 = state_44240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44240__$1,inst_44237);
} else {
if((state_val_44241 === (12))){
var state_44240__$1 = state_44240;
var statearr_44254_46078 = state_44240__$1;
(statearr_44254_46078[(2)] = null);

(statearr_44254_46078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44241 === (2))){
var state_44240__$1 = state_44240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44240__$1,(4),from);
} else {
if((state_val_44241 === (11))){
var inst_44228 = (state_44240[(2)]);
var state_44240__$1 = state_44240;
if(cljs.core.truth_(inst_44228)){
var statearr_44257_46080 = state_44240__$1;
(statearr_44257_46080[(1)] = (12));

} else {
var statearr_44262_46081 = state_44240__$1;
(statearr_44262_46081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44241 === (9))){
var state_44240__$1 = state_44240;
var statearr_44265_46083 = state_44240__$1;
(statearr_44265_46083[(2)] = null);

(statearr_44265_46083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44241 === (5))){
var state_44240__$1 = state_44240;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44270_46084 = state_44240__$1;
(statearr_44270_46084[(1)] = (8));

} else {
var statearr_44271_46085 = state_44240__$1;
(statearr_44271_46085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44241 === (14))){
var inst_44233 = (state_44240[(2)]);
var state_44240__$1 = state_44240;
var statearr_44273_46087 = state_44240__$1;
(statearr_44273_46087[(2)] = inst_44233);

(statearr_44273_46087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44241 === (10))){
var inst_44224 = (state_44240[(2)]);
var state_44240__$1 = state_44240;
var statearr_44277_46088 = state_44240__$1;
(statearr_44277_46088[(2)] = inst_44224);

(statearr_44277_46088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44241 === (8))){
var inst_44221 = cljs.core.async.close_BANG_(to);
var state_44240__$1 = state_44240;
var statearr_44279_46089 = state_44240__$1;
(statearr_44279_46089[(2)] = inst_44221);

(statearr_44279_46089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_44284 = [null,null,null,null,null,null,null,null];
(statearr_44284[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_44284[(1)] = (1));

return statearr_44284;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_44240){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44240);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44287){var ex__34228__auto__ = e44287;
var statearr_44288_46090 = state_44240;
(statearr_44288_46090[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44240[(4)]))){
var statearr_44289_46091 = state_44240;
(statearr_44289_46091[(1)] = cljs.core.first((state_44240[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46092 = state_44240;
state_44240 = G__46092;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_44240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_44240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_44290 = f__34379__auto__();
(statearr_44290[(6)] = c__34378__auto___46071);

return statearr_44290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__44291){
var vec__44292 = p__44291;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44292,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44292,(1),null);
var job = vec__44292;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34378__auto___46096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_44301){
var state_val_44302 = (state_44301[(1)]);
if((state_val_44302 === (1))){
var state_44301__$1 = state_44301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44301__$1,(2),res,v);
} else {
if((state_val_44302 === (2))){
var inst_44298 = (state_44301[(2)]);
var inst_44299 = cljs.core.async.close_BANG_(res);
var state_44301__$1 = (function (){var statearr_44305 = state_44301;
(statearr_44305[(7)] = inst_44298);

return statearr_44305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44301__$1,inst_44299);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_44308 = [null,null,null,null,null,null,null,null];
(statearr_44308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__);

(statearr_44308[(1)] = (1));

return statearr_44308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1 = (function (state_44301){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44301);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44309){var ex__34228__auto__ = e44309;
var statearr_44310_46097 = state_44301;
(statearr_44310_46097[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44301[(4)]))){
var statearr_44311_46098 = state_44301;
(statearr_44311_46098[(1)] = cljs.core.first((state_44301[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46099 = state_44301;
state_44301 = G__46099;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = function(state_44301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1.call(this,state_44301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_44314 = f__34379__auto__();
(statearr_44314[(6)] = c__34378__auto___46096);

return statearr_44314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44317){
var vec__44318 = p__44317;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44318,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44318,(1),null);
var job = vec__44318;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___46102 = n;
var __46103 = (0);
while(true){
if((__46103 < n__5633__auto___46102)){
var G__44321_46104 = type;
var G__44321_46105__$1 = (((G__44321_46104 instanceof cljs.core.Keyword))?G__44321_46104.fqn:null);
switch (G__44321_46105__$1) {
case "compute":
var c__34378__auto___46107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46103,c__34378__auto___46107,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async){
return (function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = ((function (__46103,c__34378__auto___46107,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async){
return (function (state_44340){
var state_val_44341 = (state_44340[(1)]);
if((state_val_44341 === (1))){
var state_44340__$1 = state_44340;
var statearr_44348_46109 = state_44340__$1;
(statearr_44348_46109[(2)] = null);

(statearr_44348_46109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44341 === (2))){
var state_44340__$1 = state_44340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44340__$1,(4),jobs);
} else {
if((state_val_44341 === (3))){
var inst_44337 = (state_44340[(2)]);
var state_44340__$1 = state_44340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44340__$1,inst_44337);
} else {
if((state_val_44341 === (4))){
var inst_44326 = (state_44340[(2)]);
var inst_44327 = process__$1(inst_44326);
var state_44340__$1 = state_44340;
if(cljs.core.truth_(inst_44327)){
var statearr_44350_46110 = state_44340__$1;
(statearr_44350_46110[(1)] = (5));

} else {
var statearr_44351_46111 = state_44340__$1;
(statearr_44351_46111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44341 === (5))){
var state_44340__$1 = state_44340;
var statearr_44352_46112 = state_44340__$1;
(statearr_44352_46112[(2)] = null);

(statearr_44352_46112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44341 === (6))){
var state_44340__$1 = state_44340;
var statearr_44353_46113 = state_44340__$1;
(statearr_44353_46113[(2)] = null);

(statearr_44353_46113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44341 === (7))){
var inst_44332 = (state_44340[(2)]);
var state_44340__$1 = state_44340;
var statearr_44354_46114 = state_44340__$1;
(statearr_44354_46114[(2)] = inst_44332);

(statearr_44354_46114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46103,c__34378__auto___46107,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async))
;
return ((function (__46103,switch__34224__auto__,c__34378__auto___46107,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_44357 = [null,null,null,null,null,null,null];
(statearr_44357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__);

(statearr_44357[(1)] = (1));

return statearr_44357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1 = (function (state_44340){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44340);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44358){var ex__34228__auto__ = e44358;
var statearr_44359_46117 = state_44340;
(statearr_44359_46117[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44340[(4)]))){
var statearr_44361_46118 = state_44340;
(statearr_44361_46118[(1)] = cljs.core.first((state_44340[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46119 = state_44340;
state_44340 = G__46119;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = function(state_44340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1.call(this,state_44340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__;
})()
;})(__46103,switch__34224__auto__,c__34378__auto___46107,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async))
})();
var state__34380__auto__ = (function (){var statearr_44372 = f__34379__auto__();
(statearr_44372[(6)] = c__34378__auto___46107);

return statearr_44372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
});})(__46103,c__34378__auto___46107,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async))
);


break;
case "async":
var c__34378__auto___46120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46103,c__34378__auto___46120,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async){
return (function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = ((function (__46103,c__34378__auto___46120,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async){
return (function (state_44389){
var state_val_44390 = (state_44389[(1)]);
if((state_val_44390 === (1))){
var state_44389__$1 = state_44389;
var statearr_44393_46121 = state_44389__$1;
(statearr_44393_46121[(2)] = null);

(statearr_44393_46121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (2))){
var state_44389__$1 = state_44389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44389__$1,(4),jobs);
} else {
if((state_val_44390 === (3))){
var inst_44387 = (state_44389[(2)]);
var state_44389__$1 = state_44389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44389__$1,inst_44387);
} else {
if((state_val_44390 === (4))){
var inst_44377 = (state_44389[(2)]);
var inst_44378 = async(inst_44377);
var state_44389__$1 = state_44389;
if(cljs.core.truth_(inst_44378)){
var statearr_44397_46122 = state_44389__$1;
(statearr_44397_46122[(1)] = (5));

} else {
var statearr_44400_46123 = state_44389__$1;
(statearr_44400_46123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (5))){
var state_44389__$1 = state_44389;
var statearr_44402_46124 = state_44389__$1;
(statearr_44402_46124[(2)] = null);

(statearr_44402_46124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (6))){
var state_44389__$1 = state_44389;
var statearr_44403_46125 = state_44389__$1;
(statearr_44403_46125[(2)] = null);

(statearr_44403_46125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44390 === (7))){
var inst_44385 = (state_44389[(2)]);
var state_44389__$1 = state_44389;
var statearr_44404_46126 = state_44389__$1;
(statearr_44404_46126[(2)] = inst_44385);

(statearr_44404_46126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46103,c__34378__auto___46120,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async))
;
return ((function (__46103,switch__34224__auto__,c__34378__auto___46120,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_44409 = [null,null,null,null,null,null,null];
(statearr_44409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__);

(statearr_44409[(1)] = (1));

return statearr_44409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1 = (function (state_44389){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44389);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44411){var ex__34228__auto__ = e44411;
var statearr_44412_46130 = state_44389;
(statearr_44412_46130[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44389[(4)]))){
var statearr_44413_46131 = state_44389;
(statearr_44413_46131[(1)] = cljs.core.first((state_44389[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46132 = state_44389;
state_44389 = G__46132;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = function(state_44389){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1.call(this,state_44389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__;
})()
;})(__46103,switch__34224__auto__,c__34378__auto___46120,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async))
})();
var state__34380__auto__ = (function (){var statearr_44416 = f__34379__auto__();
(statearr_44416[(6)] = c__34378__auto___46120);

return statearr_44416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
});})(__46103,c__34378__auto___46120,G__44321_46104,G__44321_46105__$1,n__5633__auto___46102,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44321_46105__$1)].join('')));

}

var G__46133 = (__46103 + (1));
__46103 = G__46133;
continue;
} else {
}
break;
}

var c__34378__auto___46134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_44440){
var state_val_44441 = (state_44440[(1)]);
if((state_val_44441 === (7))){
var inst_44436 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
var statearr_44442_46135 = state_44440__$1;
(statearr_44442_46135[(2)] = inst_44436);

(statearr_44442_46135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (1))){
var state_44440__$1 = state_44440;
var statearr_44444_46136 = state_44440__$1;
(statearr_44444_46136[(2)] = null);

(statearr_44444_46136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (4))){
var inst_44421 = (state_44440[(7)]);
var inst_44421__$1 = (state_44440[(2)]);
var inst_44422 = (inst_44421__$1 == null);
var state_44440__$1 = (function (){var statearr_44445 = state_44440;
(statearr_44445[(7)] = inst_44421__$1);

return statearr_44445;
})();
if(cljs.core.truth_(inst_44422)){
var statearr_44446_46137 = state_44440__$1;
(statearr_44446_46137[(1)] = (5));

} else {
var statearr_44447_46138 = state_44440__$1;
(statearr_44447_46138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (6))){
var inst_44426 = (state_44440[(8)]);
var inst_44421 = (state_44440[(7)]);
var inst_44426__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44428 = [inst_44421,inst_44426__$1];
var inst_44429 = (new cljs.core.PersistentVector(null,2,(5),inst_44427,inst_44428,null));
var state_44440__$1 = (function (){var statearr_44448 = state_44440;
(statearr_44448[(8)] = inst_44426__$1);

return statearr_44448;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44440__$1,(8),jobs,inst_44429);
} else {
if((state_val_44441 === (3))){
var inst_44438 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44440__$1,inst_44438);
} else {
if((state_val_44441 === (2))){
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44440__$1,(4),from);
} else {
if((state_val_44441 === (9))){
var inst_44433 = (state_44440[(2)]);
var state_44440__$1 = (function (){var statearr_44449 = state_44440;
(statearr_44449[(9)] = inst_44433);

return statearr_44449;
})();
var statearr_44451_46142 = state_44440__$1;
(statearr_44451_46142[(2)] = null);

(statearr_44451_46142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (5))){
var inst_44424 = cljs.core.async.close_BANG_(jobs);
var state_44440__$1 = state_44440;
var statearr_44454_46143 = state_44440__$1;
(statearr_44454_46143[(2)] = inst_44424);

(statearr_44454_46143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (8))){
var inst_44426 = (state_44440[(8)]);
var inst_44431 = (state_44440[(2)]);
var state_44440__$1 = (function (){var statearr_44464 = state_44440;
(statearr_44464[(10)] = inst_44431);

return statearr_44464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44440__$1,(9),results,inst_44426);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_44465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__);

(statearr_44465[(1)] = (1));

return statearr_44465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1 = (function (state_44440){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44440);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44466){var ex__34228__auto__ = e44466;
var statearr_44467_46144 = state_44440;
(statearr_44467_46144[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44440[(4)]))){
var statearr_44468_46145 = state_44440;
(statearr_44468_46145[(1)] = cljs.core.first((state_44440[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46146 = state_44440;
state_44440 = G__46146;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = function(state_44440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1.call(this,state_44440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_44469 = f__34379__auto__();
(statearr_44469[(6)] = c__34378__auto___46134);

return statearr_44469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


var c__34378__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_44507){
var state_val_44508 = (state_44507[(1)]);
if((state_val_44508 === (7))){
var inst_44503 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44510_46148 = state_44507__$1;
(statearr_44510_46148[(2)] = inst_44503);

(statearr_44510_46148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (20))){
var state_44507__$1 = state_44507;
var statearr_44511_46149 = state_44507__$1;
(statearr_44511_46149[(2)] = null);

(statearr_44511_46149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (1))){
var state_44507__$1 = state_44507;
var statearr_44512_46150 = state_44507__$1;
(statearr_44512_46150[(2)] = null);

(statearr_44512_46150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (4))){
var inst_44472 = (state_44507[(7)]);
var inst_44472__$1 = (state_44507[(2)]);
var inst_44473 = (inst_44472__$1 == null);
var state_44507__$1 = (function (){var statearr_44513 = state_44507;
(statearr_44513[(7)] = inst_44472__$1);

return statearr_44513;
})();
if(cljs.core.truth_(inst_44473)){
var statearr_44514_46152 = state_44507__$1;
(statearr_44514_46152[(1)] = (5));

} else {
var statearr_44515_46153 = state_44507__$1;
(statearr_44515_46153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (15))){
var inst_44485 = (state_44507[(8)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44507__$1,(18),to,inst_44485);
} else {
if((state_val_44508 === (21))){
var inst_44498 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44528_46154 = state_44507__$1;
(statearr_44528_46154[(2)] = inst_44498);

(statearr_44528_46154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (13))){
var inst_44500 = (state_44507[(2)]);
var state_44507__$1 = (function (){var statearr_44529 = state_44507;
(statearr_44529[(9)] = inst_44500);

return statearr_44529;
})();
var statearr_44530_46155 = state_44507__$1;
(statearr_44530_46155[(2)] = null);

(statearr_44530_46155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (6))){
var inst_44472 = (state_44507[(7)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44507__$1,(11),inst_44472);
} else {
if((state_val_44508 === (17))){
var inst_44493 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
if(cljs.core.truth_(inst_44493)){
var statearr_44531_46160 = state_44507__$1;
(statearr_44531_46160[(1)] = (19));

} else {
var statearr_44532_46161 = state_44507__$1;
(statearr_44532_46161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (3))){
var inst_44505 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44507__$1,inst_44505);
} else {
if((state_val_44508 === (12))){
var inst_44482 = (state_44507[(10)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44507__$1,(14),inst_44482);
} else {
if((state_val_44508 === (2))){
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44507__$1,(4),results);
} else {
if((state_val_44508 === (19))){
var state_44507__$1 = state_44507;
var statearr_44533_46162 = state_44507__$1;
(statearr_44533_46162[(2)] = null);

(statearr_44533_46162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (11))){
var inst_44482 = (state_44507[(2)]);
var state_44507__$1 = (function (){var statearr_44534 = state_44507;
(statearr_44534[(10)] = inst_44482);

return statearr_44534;
})();
var statearr_44535_46163 = state_44507__$1;
(statearr_44535_46163[(2)] = null);

(statearr_44535_46163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (9))){
var state_44507__$1 = state_44507;
var statearr_44536_46164 = state_44507__$1;
(statearr_44536_46164[(2)] = null);

(statearr_44536_46164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (5))){
var state_44507__$1 = state_44507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44537_46165 = state_44507__$1;
(statearr_44537_46165[(1)] = (8));

} else {
var statearr_44538_46166 = state_44507__$1;
(statearr_44538_46166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (14))){
var inst_44487 = (state_44507[(11)]);
var inst_44485 = (state_44507[(8)]);
var inst_44485__$1 = (state_44507[(2)]);
var inst_44486 = (inst_44485__$1 == null);
var inst_44487__$1 = cljs.core.not(inst_44486);
var state_44507__$1 = (function (){var statearr_44539 = state_44507;
(statearr_44539[(11)] = inst_44487__$1);

(statearr_44539[(8)] = inst_44485__$1);

return statearr_44539;
})();
if(inst_44487__$1){
var statearr_44540_46168 = state_44507__$1;
(statearr_44540_46168[(1)] = (15));

} else {
var statearr_44541_46169 = state_44507__$1;
(statearr_44541_46169[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (16))){
var inst_44487 = (state_44507[(11)]);
var state_44507__$1 = state_44507;
var statearr_44548_46170 = state_44507__$1;
(statearr_44548_46170[(2)] = inst_44487);

(statearr_44548_46170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (10))){
var inst_44479 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44549_46171 = state_44507__$1;
(statearr_44549_46171[(2)] = inst_44479);

(statearr_44549_46171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (18))){
var inst_44490 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44550_46172 = state_44507__$1;
(statearr_44550_46172[(2)] = inst_44490);

(statearr_44550_46172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (8))){
var inst_44476 = cljs.core.async.close_BANG_(to);
var state_44507__$1 = state_44507;
var statearr_44551_46173 = state_44507__$1;
(statearr_44551_46173[(2)] = inst_44476);

(statearr_44551_46173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_44552 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44552[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__);

(statearr_44552[(1)] = (1));

return statearr_44552;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1 = (function (state_44507){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44507);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44553){var ex__34228__auto__ = e44553;
var statearr_44554_46175 = state_44507;
(statearr_44554_46175[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44507[(4)]))){
var statearr_44555_46177 = state_44507;
(statearr_44555_46177[(1)] = cljs.core.first((state_44507[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46178 = state_44507;
state_44507 = G__46178;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = function(state_44507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1.call(this,state_44507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_44556 = f__34379__auto__();
(statearr_44556[(6)] = c__34378__auto__);

return statearr_44556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));

return c__34378__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44558 = arguments.length;
switch (G__44558) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44560 = arguments.length;
switch (G__44560) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44562 = arguments.length;
switch (G__44562) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34378__auto___46193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_44588){
var state_val_44589 = (state_44588[(1)]);
if((state_val_44589 === (7))){
var inst_44584 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
var statearr_44590_46194 = state_44588__$1;
(statearr_44590_46194[(2)] = inst_44584);

(statearr_44590_46194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (1))){
var state_44588__$1 = state_44588;
var statearr_44591_46198 = state_44588__$1;
(statearr_44591_46198[(2)] = null);

(statearr_44591_46198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (4))){
var inst_44565 = (state_44588[(7)]);
var inst_44565__$1 = (state_44588[(2)]);
var inst_44566 = (inst_44565__$1 == null);
var state_44588__$1 = (function (){var statearr_44592 = state_44588;
(statearr_44592[(7)] = inst_44565__$1);

return statearr_44592;
})();
if(cljs.core.truth_(inst_44566)){
var statearr_44593_46200 = state_44588__$1;
(statearr_44593_46200[(1)] = (5));

} else {
var statearr_44594_46201 = state_44588__$1;
(statearr_44594_46201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (13))){
var state_44588__$1 = state_44588;
var statearr_44595_46202 = state_44588__$1;
(statearr_44595_46202[(2)] = null);

(statearr_44595_46202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (6))){
var inst_44565 = (state_44588[(7)]);
var inst_44571 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44565) : p.call(null,inst_44565));
var state_44588__$1 = state_44588;
if(cljs.core.truth_(inst_44571)){
var statearr_44596_46206 = state_44588__$1;
(statearr_44596_46206[(1)] = (9));

} else {
var statearr_44597_46207 = state_44588__$1;
(statearr_44597_46207[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (3))){
var inst_44586 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44588__$1,inst_44586);
} else {
if((state_val_44589 === (12))){
var state_44588__$1 = state_44588;
var statearr_44598_46208 = state_44588__$1;
(statearr_44598_46208[(2)] = null);

(statearr_44598_46208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (2))){
var state_44588__$1 = state_44588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44588__$1,(4),ch);
} else {
if((state_val_44589 === (11))){
var inst_44565 = (state_44588[(7)]);
var inst_44575 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44588__$1,(8),inst_44575,inst_44565);
} else {
if((state_val_44589 === (9))){
var state_44588__$1 = state_44588;
var statearr_44599_46216 = state_44588__$1;
(statearr_44599_46216[(2)] = tc);

(statearr_44599_46216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (5))){
var inst_44568 = cljs.core.async.close_BANG_(tc);
var inst_44569 = cljs.core.async.close_BANG_(fc);
var state_44588__$1 = (function (){var statearr_44600 = state_44588;
(statearr_44600[(8)] = inst_44568);

return statearr_44600;
})();
var statearr_44601_46217 = state_44588__$1;
(statearr_44601_46217[(2)] = inst_44569);

(statearr_44601_46217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (14))){
var inst_44582 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
var statearr_44602_46218 = state_44588__$1;
(statearr_44602_46218[(2)] = inst_44582);

(statearr_44602_46218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (10))){
var state_44588__$1 = state_44588;
var statearr_44603_46222 = state_44588__$1;
(statearr_44603_46222[(2)] = fc);

(statearr_44603_46222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44589 === (8))){
var inst_44577 = (state_44588[(2)]);
var state_44588__$1 = state_44588;
if(cljs.core.truth_(inst_44577)){
var statearr_44604_46223 = state_44588__$1;
(statearr_44604_46223[(1)] = (12));

} else {
var statearr_44605_46225 = state_44588__$1;
(statearr_44605_46225[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_44606 = [null,null,null,null,null,null,null,null,null];
(statearr_44606[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_44606[(1)] = (1));

return statearr_44606;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_44588){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44588);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44607){var ex__34228__auto__ = e44607;
var statearr_44608_46229 = state_44588;
(statearr_44608_46229[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44588[(4)]))){
var statearr_44609_46230 = state_44588;
(statearr_44609_46230[(1)] = cljs.core.first((state_44588[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46231 = state_44588;
state_44588 = G__46231;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_44588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_44588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_44610 = f__34379__auto__();
(statearr_44610[(6)] = c__34378__auto___46193);

return statearr_44610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34378__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_44632){
var state_val_44633 = (state_44632[(1)]);
if((state_val_44633 === (7))){
var inst_44628 = (state_44632[(2)]);
var state_44632__$1 = state_44632;
var statearr_44634_46235 = state_44632__$1;
(statearr_44634_46235[(2)] = inst_44628);

(statearr_44634_46235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44633 === (1))){
var inst_44611 = init;
var inst_44612 = inst_44611;
var state_44632__$1 = (function (){var statearr_44635 = state_44632;
(statearr_44635[(7)] = inst_44612);

return statearr_44635;
})();
var statearr_44636_46236 = state_44632__$1;
(statearr_44636_46236[(2)] = null);

(statearr_44636_46236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44633 === (4))){
var inst_44615 = (state_44632[(8)]);
var inst_44615__$1 = (state_44632[(2)]);
var inst_44616 = (inst_44615__$1 == null);
var state_44632__$1 = (function (){var statearr_44637 = state_44632;
(statearr_44637[(8)] = inst_44615__$1);

return statearr_44637;
})();
if(cljs.core.truth_(inst_44616)){
var statearr_44638_46238 = state_44632__$1;
(statearr_44638_46238[(1)] = (5));

} else {
var statearr_44639_46239 = state_44632__$1;
(statearr_44639_46239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44633 === (6))){
var inst_44619 = (state_44632[(9)]);
var inst_44612 = (state_44632[(7)]);
var inst_44615 = (state_44632[(8)]);
var inst_44619__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44612,inst_44615) : f.call(null,inst_44612,inst_44615));
var inst_44620 = cljs.core.reduced_QMARK_(inst_44619__$1);
var state_44632__$1 = (function (){var statearr_44640 = state_44632;
(statearr_44640[(9)] = inst_44619__$1);

return statearr_44640;
})();
if(inst_44620){
var statearr_44641_46241 = state_44632__$1;
(statearr_44641_46241[(1)] = (8));

} else {
var statearr_44642_46242 = state_44632__$1;
(statearr_44642_46242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44633 === (3))){
var inst_44630 = (state_44632[(2)]);
var state_44632__$1 = state_44632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44632__$1,inst_44630);
} else {
if((state_val_44633 === (2))){
var state_44632__$1 = state_44632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44632__$1,(4),ch);
} else {
if((state_val_44633 === (9))){
var inst_44619 = (state_44632[(9)]);
var inst_44612 = inst_44619;
var state_44632__$1 = (function (){var statearr_44643 = state_44632;
(statearr_44643[(7)] = inst_44612);

return statearr_44643;
})();
var statearr_44644_46243 = state_44632__$1;
(statearr_44644_46243[(2)] = null);

(statearr_44644_46243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44633 === (5))){
var inst_44612 = (state_44632[(7)]);
var state_44632__$1 = state_44632;
var statearr_44645_46244 = state_44632__$1;
(statearr_44645_46244[(2)] = inst_44612);

(statearr_44645_46244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44633 === (10))){
var inst_44626 = (state_44632[(2)]);
var state_44632__$1 = state_44632;
var statearr_44646_46245 = state_44632__$1;
(statearr_44646_46245[(2)] = inst_44626);

(statearr_44646_46245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44633 === (8))){
var inst_44619 = (state_44632[(9)]);
var inst_44622 = cljs.core.deref(inst_44619);
var state_44632__$1 = state_44632;
var statearr_44647_46246 = state_44632__$1;
(statearr_44647_46246[(2)] = inst_44622);

(statearr_44647_46246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34225__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34225__auto____0 = (function (){
var statearr_44648 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44648[(0)] = cljs$core$async$reduce_$_state_machine__34225__auto__);

(statearr_44648[(1)] = (1));

return statearr_44648;
});
var cljs$core$async$reduce_$_state_machine__34225__auto____1 = (function (state_44632){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44632);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44649){var ex__34228__auto__ = e44649;
var statearr_44650_46247 = state_44632;
(statearr_44650_46247[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44632[(4)]))){
var statearr_44651_46249 = state_44632;
(statearr_44651_46249[(1)] = cljs.core.first((state_44632[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46250 = state_44632;
state_44632 = G__46250;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34225__auto__ = function(state_44632){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34225__auto____1.call(this,state_44632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34225__auto____0;
cljs$core$async$reduce_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34225__auto____1;
return cljs$core$async$reduce_$_state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_44652 = f__34379__auto__();
(statearr_44652[(6)] = c__34378__auto__);

return statearr_44652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));

return c__34378__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34378__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_44658){
var state_val_44659 = (state_44658[(1)]);
if((state_val_44659 === (1))){
var inst_44653 = cljs.core.async.reduce(f__$1,init,ch);
var state_44658__$1 = state_44658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44658__$1,(2),inst_44653);
} else {
if((state_val_44659 === (2))){
var inst_44655 = (state_44658[(2)]);
var inst_44656 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44655) : f__$1.call(null,inst_44655));
var state_44658__$1 = state_44658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44658__$1,inst_44656);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34225__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34225__auto____0 = (function (){
var statearr_44660 = [null,null,null,null,null,null,null];
(statearr_44660[(0)] = cljs$core$async$transduce_$_state_machine__34225__auto__);

(statearr_44660[(1)] = (1));

return statearr_44660;
});
var cljs$core$async$transduce_$_state_machine__34225__auto____1 = (function (state_44658){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44658);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44661){var ex__34228__auto__ = e44661;
var statearr_44662_46252 = state_44658;
(statearr_44662_46252[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44658[(4)]))){
var statearr_44663_46253 = state_44658;
(statearr_44663_46253[(1)] = cljs.core.first((state_44658[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46254 = state_44658;
state_44658 = G__46254;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34225__auto__ = function(state_44658){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34225__auto____1.call(this,state_44658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34225__auto____0;
cljs$core$async$transduce_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34225__auto____1;
return cljs$core$async$transduce_$_state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_44664 = f__34379__auto__();
(statearr_44664[(6)] = c__34378__auto__);

return statearr_44664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));

return c__34378__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44666 = arguments.length;
switch (G__44666) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34378__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_44691){
var state_val_44692 = (state_44691[(1)]);
if((state_val_44692 === (7))){
var inst_44673 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
var statearr_44693_46258 = state_44691__$1;
(statearr_44693_46258[(2)] = inst_44673);

(statearr_44693_46258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (1))){
var inst_44667 = cljs.core.seq(coll);
var inst_44668 = inst_44667;
var state_44691__$1 = (function (){var statearr_44694 = state_44691;
(statearr_44694[(7)] = inst_44668);

return statearr_44694;
})();
var statearr_44695_46262 = state_44691__$1;
(statearr_44695_46262[(2)] = null);

(statearr_44695_46262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (4))){
var inst_44668 = (state_44691[(7)]);
var inst_44671 = cljs.core.first(inst_44668);
var state_44691__$1 = state_44691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44691__$1,(7),ch,inst_44671);
} else {
if((state_val_44692 === (13))){
var inst_44685 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
var statearr_44696_46266 = state_44691__$1;
(statearr_44696_46266[(2)] = inst_44685);

(statearr_44696_46266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (6))){
var inst_44676 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
if(cljs.core.truth_(inst_44676)){
var statearr_44697_46267 = state_44691__$1;
(statearr_44697_46267[(1)] = (8));

} else {
var statearr_44698_46268 = state_44691__$1;
(statearr_44698_46268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (3))){
var inst_44689 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44691__$1,inst_44689);
} else {
if((state_val_44692 === (12))){
var state_44691__$1 = state_44691;
var statearr_44699_46270 = state_44691__$1;
(statearr_44699_46270[(2)] = null);

(statearr_44699_46270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (2))){
var inst_44668 = (state_44691[(7)]);
var state_44691__$1 = state_44691;
if(cljs.core.truth_(inst_44668)){
var statearr_44700_46272 = state_44691__$1;
(statearr_44700_46272[(1)] = (4));

} else {
var statearr_44701_46273 = state_44691__$1;
(statearr_44701_46273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (11))){
var inst_44682 = cljs.core.async.close_BANG_(ch);
var state_44691__$1 = state_44691;
var statearr_44702_46274 = state_44691__$1;
(statearr_44702_46274[(2)] = inst_44682);

(statearr_44702_46274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (9))){
var state_44691__$1 = state_44691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44703_46275 = state_44691__$1;
(statearr_44703_46275[(1)] = (11));

} else {
var statearr_44704_46276 = state_44691__$1;
(statearr_44704_46276[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (5))){
var inst_44668 = (state_44691[(7)]);
var state_44691__$1 = state_44691;
var statearr_44705_46277 = state_44691__$1;
(statearr_44705_46277[(2)] = inst_44668);

(statearr_44705_46277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (10))){
var inst_44687 = (state_44691[(2)]);
var state_44691__$1 = state_44691;
var statearr_44706_46278 = state_44691__$1;
(statearr_44706_46278[(2)] = inst_44687);

(statearr_44706_46278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44692 === (8))){
var inst_44668 = (state_44691[(7)]);
var inst_44678 = cljs.core.next(inst_44668);
var inst_44668__$1 = inst_44678;
var state_44691__$1 = (function (){var statearr_44707 = state_44691;
(statearr_44707[(7)] = inst_44668__$1);

return statearr_44707;
})();
var statearr_44708_46279 = state_44691__$1;
(statearr_44708_46279[(2)] = null);

(statearr_44708_46279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_44709 = [null,null,null,null,null,null,null,null];
(statearr_44709[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_44709[(1)] = (1));

return statearr_44709;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_44691){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44691);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44710){var ex__34228__auto__ = e44710;
var statearr_44711_46281 = state_44691;
(statearr_44711_46281[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44691[(4)]))){
var statearr_44712_46282 = state_44691;
(statearr_44712_46282[(1)] = cljs.core.first((state_44691[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46286 = state_44691;
state_44691 = G__46286;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_44691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_44691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_44713 = f__34379__auto__();
(statearr_44713[(6)] = c__34378__auto__);

return statearr_44713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));

return c__34378__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44715 = arguments.length;
switch (G__44715) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_46292 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_46292(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46306 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_46306(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46309 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_46309(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46310 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_46310(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44716 = (function (ch,cs,meta44717){
this.ch = ch;
this.cs = cs;
this.meta44717 = meta44717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44718,meta44717__$1){
var self__ = this;
var _44718__$1 = this;
return (new cljs.core.async.t_cljs$core$async44716(self__.ch,self__.cs,meta44717__$1));
}));

(cljs.core.async.t_cljs$core$async44716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44718){
var self__ = this;
var _44718__$1 = this;
return self__.meta44717;
}));

(cljs.core.async.t_cljs$core$async44716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44716.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44716.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44716.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44716.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44717","meta44717",-944722540,null)], null);
}));

(cljs.core.async.t_cljs$core$async44716.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44716");

(cljs.core.async.t_cljs$core$async44716.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44716");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44716.
 */
cljs.core.async.__GT_t_cljs$core$async44716 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44716(ch__$1,cs__$1,meta44717){
return (new cljs.core.async.t_cljs$core$async44716(ch__$1,cs__$1,meta44717));
});

}

return (new cljs.core.async.t_cljs$core$async44716(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34378__auto___46317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_44862){
var state_val_44863 = (state_44862[(1)]);
if((state_val_44863 === (7))){
var inst_44858 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44864_46318 = state_44862__$1;
(statearr_44864_46318[(2)] = inst_44858);

(statearr_44864_46318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (20))){
var inst_44759 = (state_44862[(7)]);
var inst_44772 = cljs.core.first(inst_44759);
var inst_44773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44772,(0),null);
var inst_44774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44772,(1),null);
var state_44862__$1 = (function (){var statearr_44865 = state_44862;
(statearr_44865[(8)] = inst_44773);

return statearr_44865;
})();
if(cljs.core.truth_(inst_44774)){
var statearr_44866_46321 = state_44862__$1;
(statearr_44866_46321[(1)] = (22));

} else {
var statearr_44867_46322 = state_44862__$1;
(statearr_44867_46322[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (27))){
var inst_44728 = (state_44862[(9)]);
var inst_44807 = (state_44862[(10)]);
var inst_44805 = (state_44862[(11)]);
var inst_44812 = (state_44862[(12)]);
var inst_44812__$1 = cljs.core._nth(inst_44805,inst_44807);
var inst_44813 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44812__$1,inst_44728,done);
var state_44862__$1 = (function (){var statearr_44868 = state_44862;
(statearr_44868[(12)] = inst_44812__$1);

return statearr_44868;
})();
if(cljs.core.truth_(inst_44813)){
var statearr_44869_46324 = state_44862__$1;
(statearr_44869_46324[(1)] = (30));

} else {
var statearr_44870_46325 = state_44862__$1;
(statearr_44870_46325[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (1))){
var state_44862__$1 = state_44862;
var statearr_44871_46328 = state_44862__$1;
(statearr_44871_46328[(2)] = null);

(statearr_44871_46328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (24))){
var inst_44759 = (state_44862[(7)]);
var inst_44781 = (state_44862[(2)]);
var inst_44782 = cljs.core.next(inst_44759);
var inst_44737 = inst_44782;
var inst_44738 = null;
var inst_44739 = (0);
var inst_44740 = (0);
var state_44862__$1 = (function (){var statearr_44872 = state_44862;
(statearr_44872[(13)] = inst_44781);

(statearr_44872[(14)] = inst_44737);

(statearr_44872[(15)] = inst_44740);

(statearr_44872[(16)] = inst_44738);

(statearr_44872[(17)] = inst_44739);

return statearr_44872;
})();
var statearr_44873_46333 = state_44862__$1;
(statearr_44873_46333[(2)] = null);

(statearr_44873_46333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (39))){
var state_44862__$1 = state_44862;
var statearr_44877_46334 = state_44862__$1;
(statearr_44877_46334[(2)] = null);

(statearr_44877_46334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (4))){
var inst_44728 = (state_44862[(9)]);
var inst_44728__$1 = (state_44862[(2)]);
var inst_44729 = (inst_44728__$1 == null);
var state_44862__$1 = (function (){var statearr_44878 = state_44862;
(statearr_44878[(9)] = inst_44728__$1);

return statearr_44878;
})();
if(cljs.core.truth_(inst_44729)){
var statearr_44879_46341 = state_44862__$1;
(statearr_44879_46341[(1)] = (5));

} else {
var statearr_44880_46342 = state_44862__$1;
(statearr_44880_46342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (15))){
var inst_44737 = (state_44862[(14)]);
var inst_44740 = (state_44862[(15)]);
var inst_44738 = (state_44862[(16)]);
var inst_44739 = (state_44862[(17)]);
var inst_44755 = (state_44862[(2)]);
var inst_44756 = (inst_44740 + (1));
var tmp44874 = inst_44737;
var tmp44875 = inst_44738;
var tmp44876 = inst_44739;
var inst_44737__$1 = tmp44874;
var inst_44738__$1 = tmp44875;
var inst_44739__$1 = tmp44876;
var inst_44740__$1 = inst_44756;
var state_44862__$1 = (function (){var statearr_44881 = state_44862;
(statearr_44881[(18)] = inst_44755);

(statearr_44881[(14)] = inst_44737__$1);

(statearr_44881[(15)] = inst_44740__$1);

(statearr_44881[(16)] = inst_44738__$1);

(statearr_44881[(17)] = inst_44739__$1);

return statearr_44881;
})();
var statearr_44882_46346 = state_44862__$1;
(statearr_44882_46346[(2)] = null);

(statearr_44882_46346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (21))){
var inst_44786 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44886_46348 = state_44862__$1;
(statearr_44886_46348[(2)] = inst_44786);

(statearr_44886_46348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (31))){
var inst_44812 = (state_44862[(12)]);
var inst_44816 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44812);
var state_44862__$1 = state_44862;
var statearr_44887_46350 = state_44862__$1;
(statearr_44887_46350[(2)] = inst_44816);

(statearr_44887_46350[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (32))){
var inst_44806 = (state_44862[(19)]);
var inst_44807 = (state_44862[(10)]);
var inst_44804 = (state_44862[(20)]);
var inst_44805 = (state_44862[(11)]);
var inst_44818 = (state_44862[(2)]);
var inst_44819 = (inst_44807 + (1));
var tmp44883 = inst_44806;
var tmp44884 = inst_44804;
var tmp44885 = inst_44805;
var inst_44804__$1 = tmp44884;
var inst_44805__$1 = tmp44885;
var inst_44806__$1 = tmp44883;
var inst_44807__$1 = inst_44819;
var state_44862__$1 = (function (){var statearr_44888 = state_44862;
(statearr_44888[(19)] = inst_44806__$1);

(statearr_44888[(21)] = inst_44818);

(statearr_44888[(10)] = inst_44807__$1);

(statearr_44888[(20)] = inst_44804__$1);

(statearr_44888[(11)] = inst_44805__$1);

return statearr_44888;
})();
var statearr_44889_46355 = state_44862__$1;
(statearr_44889_46355[(2)] = null);

(statearr_44889_46355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (40))){
var inst_44831 = (state_44862[(22)]);
var inst_44835 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44831);
var state_44862__$1 = state_44862;
var statearr_44890_46359 = state_44862__$1;
(statearr_44890_46359[(2)] = inst_44835);

(statearr_44890_46359[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (33))){
var inst_44822 = (state_44862[(23)]);
var inst_44824 = cljs.core.chunked_seq_QMARK_(inst_44822);
var state_44862__$1 = state_44862;
if(inst_44824){
var statearr_44891_46361 = state_44862__$1;
(statearr_44891_46361[(1)] = (36));

} else {
var statearr_44892_46362 = state_44862__$1;
(statearr_44892_46362[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (13))){
var inst_44749 = (state_44862[(24)]);
var inst_44752 = cljs.core.async.close_BANG_(inst_44749);
var state_44862__$1 = state_44862;
var statearr_44893_46366 = state_44862__$1;
(statearr_44893_46366[(2)] = inst_44752);

(statearr_44893_46366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (22))){
var inst_44773 = (state_44862[(8)]);
var inst_44778 = cljs.core.async.close_BANG_(inst_44773);
var state_44862__$1 = state_44862;
var statearr_44894_46367 = state_44862__$1;
(statearr_44894_46367[(2)] = inst_44778);

(statearr_44894_46367[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (36))){
var inst_44822 = (state_44862[(23)]);
var inst_44826 = cljs.core.chunk_first(inst_44822);
var inst_44827 = cljs.core.chunk_rest(inst_44822);
var inst_44828 = cljs.core.count(inst_44826);
var inst_44804 = inst_44827;
var inst_44805 = inst_44826;
var inst_44806 = inst_44828;
var inst_44807 = (0);
var state_44862__$1 = (function (){var statearr_44895 = state_44862;
(statearr_44895[(19)] = inst_44806);

(statearr_44895[(10)] = inst_44807);

(statearr_44895[(20)] = inst_44804);

(statearr_44895[(11)] = inst_44805);

return statearr_44895;
})();
var statearr_44896_46378 = state_44862__$1;
(statearr_44896_46378[(2)] = null);

(statearr_44896_46378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (41))){
var inst_44822 = (state_44862[(23)]);
var inst_44837 = (state_44862[(2)]);
var inst_44838 = cljs.core.next(inst_44822);
var inst_44804 = inst_44838;
var inst_44805 = null;
var inst_44806 = (0);
var inst_44807 = (0);
var state_44862__$1 = (function (){var statearr_44897 = state_44862;
(statearr_44897[(19)] = inst_44806);

(statearr_44897[(10)] = inst_44807);

(statearr_44897[(20)] = inst_44804);

(statearr_44897[(11)] = inst_44805);

(statearr_44897[(25)] = inst_44837);

return statearr_44897;
})();
var statearr_44898_46383 = state_44862__$1;
(statearr_44898_46383[(2)] = null);

(statearr_44898_46383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (43))){
var state_44862__$1 = state_44862;
var statearr_44899_46384 = state_44862__$1;
(statearr_44899_46384[(2)] = null);

(statearr_44899_46384[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (29))){
var inst_44846 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44900_46386 = state_44862__$1;
(statearr_44900_46386[(2)] = inst_44846);

(statearr_44900_46386[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (44))){
var inst_44855 = (state_44862[(2)]);
var state_44862__$1 = (function (){var statearr_44901 = state_44862;
(statearr_44901[(26)] = inst_44855);

return statearr_44901;
})();
var statearr_44902_46390 = state_44862__$1;
(statearr_44902_46390[(2)] = null);

(statearr_44902_46390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (6))){
var inst_44796 = (state_44862[(27)]);
var inst_44795 = cljs.core.deref(cs);
var inst_44796__$1 = cljs.core.keys(inst_44795);
var inst_44797 = cljs.core.count(inst_44796__$1);
var inst_44798 = cljs.core.reset_BANG_(dctr,inst_44797);
var inst_44803 = cljs.core.seq(inst_44796__$1);
var inst_44804 = inst_44803;
var inst_44805 = null;
var inst_44806 = (0);
var inst_44807 = (0);
var state_44862__$1 = (function (){var statearr_44903 = state_44862;
(statearr_44903[(19)] = inst_44806);

(statearr_44903[(10)] = inst_44807);

(statearr_44903[(27)] = inst_44796__$1);

(statearr_44903[(20)] = inst_44804);

(statearr_44903[(11)] = inst_44805);

(statearr_44903[(28)] = inst_44798);

return statearr_44903;
})();
var statearr_44904_46395 = state_44862__$1;
(statearr_44904_46395[(2)] = null);

(statearr_44904_46395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (28))){
var inst_44822 = (state_44862[(23)]);
var inst_44804 = (state_44862[(20)]);
var inst_44822__$1 = cljs.core.seq(inst_44804);
var state_44862__$1 = (function (){var statearr_44905 = state_44862;
(statearr_44905[(23)] = inst_44822__$1);

return statearr_44905;
})();
if(inst_44822__$1){
var statearr_44906_46396 = state_44862__$1;
(statearr_44906_46396[(1)] = (33));

} else {
var statearr_44907_46397 = state_44862__$1;
(statearr_44907_46397[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (25))){
var inst_44806 = (state_44862[(19)]);
var inst_44807 = (state_44862[(10)]);
var inst_44809 = (inst_44807 < inst_44806);
var inst_44810 = inst_44809;
var state_44862__$1 = state_44862;
if(cljs.core.truth_(inst_44810)){
var statearr_44908_46399 = state_44862__$1;
(statearr_44908_46399[(1)] = (27));

} else {
var statearr_44909_46400 = state_44862__$1;
(statearr_44909_46400[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (34))){
var state_44862__$1 = state_44862;
var statearr_44910_46401 = state_44862__$1;
(statearr_44910_46401[(2)] = null);

(statearr_44910_46401[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (17))){
var state_44862__$1 = state_44862;
var statearr_44911_46404 = state_44862__$1;
(statearr_44911_46404[(2)] = null);

(statearr_44911_46404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (3))){
var inst_44860 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44862__$1,inst_44860);
} else {
if((state_val_44863 === (12))){
var inst_44791 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44912_46406 = state_44862__$1;
(statearr_44912_46406[(2)] = inst_44791);

(statearr_44912_46406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (2))){
var state_44862__$1 = state_44862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44862__$1,(4),ch);
} else {
if((state_val_44863 === (23))){
var state_44862__$1 = state_44862;
var statearr_44913_46407 = state_44862__$1;
(statearr_44913_46407[(2)] = null);

(statearr_44913_46407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (35))){
var inst_44844 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44914_46409 = state_44862__$1;
(statearr_44914_46409[(2)] = inst_44844);

(statearr_44914_46409[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (19))){
var inst_44759 = (state_44862[(7)]);
var inst_44763 = cljs.core.chunk_first(inst_44759);
var inst_44765 = cljs.core.chunk_rest(inst_44759);
var inst_44766 = cljs.core.count(inst_44763);
var inst_44737 = inst_44765;
var inst_44738 = inst_44763;
var inst_44739 = inst_44766;
var inst_44740 = (0);
var state_44862__$1 = (function (){var statearr_44915 = state_44862;
(statearr_44915[(14)] = inst_44737);

(statearr_44915[(15)] = inst_44740);

(statearr_44915[(16)] = inst_44738);

(statearr_44915[(17)] = inst_44739);

return statearr_44915;
})();
var statearr_44916_46411 = state_44862__$1;
(statearr_44916_46411[(2)] = null);

(statearr_44916_46411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (11))){
var inst_44737 = (state_44862[(14)]);
var inst_44759 = (state_44862[(7)]);
var inst_44759__$1 = cljs.core.seq(inst_44737);
var state_44862__$1 = (function (){var statearr_44917 = state_44862;
(statearr_44917[(7)] = inst_44759__$1);

return statearr_44917;
})();
if(inst_44759__$1){
var statearr_44918_46414 = state_44862__$1;
(statearr_44918_46414[(1)] = (16));

} else {
var statearr_44919_46415 = state_44862__$1;
(statearr_44919_46415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (9))){
var inst_44793 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44920_46416 = state_44862__$1;
(statearr_44920_46416[(2)] = inst_44793);

(statearr_44920_46416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (5))){
var inst_44735 = cljs.core.deref(cs);
var inst_44736 = cljs.core.seq(inst_44735);
var inst_44737 = inst_44736;
var inst_44738 = null;
var inst_44739 = (0);
var inst_44740 = (0);
var state_44862__$1 = (function (){var statearr_44921 = state_44862;
(statearr_44921[(14)] = inst_44737);

(statearr_44921[(15)] = inst_44740);

(statearr_44921[(16)] = inst_44738);

(statearr_44921[(17)] = inst_44739);

return statearr_44921;
})();
var statearr_44922_46418 = state_44862__$1;
(statearr_44922_46418[(2)] = null);

(statearr_44922_46418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (14))){
var state_44862__$1 = state_44862;
var statearr_44923_46419 = state_44862__$1;
(statearr_44923_46419[(2)] = null);

(statearr_44923_46419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (45))){
var inst_44852 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44924_46420 = state_44862__$1;
(statearr_44924_46420[(2)] = inst_44852);

(statearr_44924_46420[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (26))){
var inst_44796 = (state_44862[(27)]);
var inst_44848 = (state_44862[(2)]);
var inst_44849 = cljs.core.seq(inst_44796);
var state_44862__$1 = (function (){var statearr_44925 = state_44862;
(statearr_44925[(29)] = inst_44848);

return statearr_44925;
})();
if(inst_44849){
var statearr_44926_46424 = state_44862__$1;
(statearr_44926_46424[(1)] = (42));

} else {
var statearr_44927_46425 = state_44862__$1;
(statearr_44927_46425[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (16))){
var inst_44759 = (state_44862[(7)]);
var inst_44761 = cljs.core.chunked_seq_QMARK_(inst_44759);
var state_44862__$1 = state_44862;
if(inst_44761){
var statearr_44928_46426 = state_44862__$1;
(statearr_44928_46426[(1)] = (19));

} else {
var statearr_44929_46427 = state_44862__$1;
(statearr_44929_46427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (38))){
var inst_44841 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44930_46428 = state_44862__$1;
(statearr_44930_46428[(2)] = inst_44841);

(statearr_44930_46428[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (30))){
var state_44862__$1 = state_44862;
var statearr_44931_46430 = state_44862__$1;
(statearr_44931_46430[(2)] = null);

(statearr_44931_46430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (10))){
var inst_44740 = (state_44862[(15)]);
var inst_44738 = (state_44862[(16)]);
var inst_44748 = cljs.core._nth(inst_44738,inst_44740);
var inst_44749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44748,(0),null);
var inst_44750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44748,(1),null);
var state_44862__$1 = (function (){var statearr_44932 = state_44862;
(statearr_44932[(24)] = inst_44749);

return statearr_44932;
})();
if(cljs.core.truth_(inst_44750)){
var statearr_44933_46432 = state_44862__$1;
(statearr_44933_46432[(1)] = (13));

} else {
var statearr_44934_46434 = state_44862__$1;
(statearr_44934_46434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (18))){
var inst_44789 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44935_46436 = state_44862__$1;
(statearr_44935_46436[(2)] = inst_44789);

(statearr_44935_46436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (42))){
var state_44862__$1 = state_44862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44862__$1,(45),dchan);
} else {
if((state_val_44863 === (37))){
var inst_44831 = (state_44862[(22)]);
var inst_44728 = (state_44862[(9)]);
var inst_44822 = (state_44862[(23)]);
var inst_44831__$1 = cljs.core.first(inst_44822);
var inst_44832 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44831__$1,inst_44728,done);
var state_44862__$1 = (function (){var statearr_44936 = state_44862;
(statearr_44936[(22)] = inst_44831__$1);

return statearr_44936;
})();
if(cljs.core.truth_(inst_44832)){
var statearr_44937_46437 = state_44862__$1;
(statearr_44937_46437[(1)] = (39));

} else {
var statearr_44938_46439 = state_44862__$1;
(statearr_44938_46439[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (8))){
var inst_44740 = (state_44862[(15)]);
var inst_44739 = (state_44862[(17)]);
var inst_44742 = (inst_44740 < inst_44739);
var inst_44743 = inst_44742;
var state_44862__$1 = state_44862;
if(cljs.core.truth_(inst_44743)){
var statearr_44939_46440 = state_44862__$1;
(statearr_44939_46440[(1)] = (10));

} else {
var statearr_44940_46441 = state_44862__$1;
(statearr_44940_46441[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34225__auto__ = null;
var cljs$core$async$mult_$_state_machine__34225__auto____0 = (function (){
var statearr_44941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44941[(0)] = cljs$core$async$mult_$_state_machine__34225__auto__);

(statearr_44941[(1)] = (1));

return statearr_44941;
});
var cljs$core$async$mult_$_state_machine__34225__auto____1 = (function (state_44862){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44862);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44942){var ex__34228__auto__ = e44942;
var statearr_44943_46445 = state_44862;
(statearr_44943_46445[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44862[(4)]))){
var statearr_44944_46446 = state_44862;
(statearr_44944_46446[(1)] = cljs.core.first((state_44862[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46447 = state_44862;
state_44862 = G__46447;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34225__auto__ = function(state_44862){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34225__auto____1.call(this,state_44862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34225__auto____0;
cljs$core$async$mult_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34225__auto____1;
return cljs$core$async$mult_$_state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_44945 = f__34379__auto__();
(statearr_44945[(6)] = c__34378__auto___46317);

return statearr_44945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44947 = arguments.length;
switch (G__44947) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_46459 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_46459(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46465 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_46465(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46470 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46470(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46476 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_46476(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46481 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46481(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46490 = arguments.length;
var i__5767__auto___46491 = (0);
while(true){
if((i__5767__auto___46491 < len__5766__auto___46490)){
args__5772__auto__.push((arguments[i__5767__auto___46491]));

var G__46493 = (i__5767__auto___46491 + (1));
i__5767__auto___46491 = G__46493;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44958){
var map__44959 = p__44958;
var map__44959__$1 = cljs.core.__destructure_map(map__44959);
var opts = map__44959__$1;
var statearr_44960_46496 = state;
(statearr_44960_46496[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44961_46499 = state;
(statearr_44961_46499[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_44962_46501 = state;
(statearr_44962_46501[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44954){
var G__44955 = cljs.core.first(seq44954);
var seq44954__$1 = cljs.core.next(seq44954);
var G__44956 = cljs.core.first(seq44954__$1);
var seq44954__$2 = cljs.core.next(seq44954__$1);
var G__44957 = cljs.core.first(seq44954__$2);
var seq44954__$3 = cljs.core.next(seq44954__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44955,G__44956,G__44957,seq44954__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44963 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44964){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44964 = meta44964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44965,meta44964__$1){
var self__ = this;
var _44965__$1 = this;
return (new cljs.core.async.t_cljs$core$async44963(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44964__$1));
}));

(cljs.core.async.t_cljs$core$async44963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44965){
var self__ = this;
var _44965__$1 = this;
return self__.meta44964;
}));

(cljs.core.async.t_cljs$core$async44963.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44963.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44963.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44963.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44963.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44963.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44963.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44963.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44964","meta44964",58396370,null)], null);
}));

(cljs.core.async.t_cljs$core$async44963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44963");

(cljs.core.async.t_cljs$core$async44963.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44963.
 */
cljs.core.async.__GT_t_cljs$core$async44963 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44963(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44964){
return (new cljs.core.async.t_cljs$core$async44963(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44964));
});

}

return (new cljs.core.async.t_cljs$core$async44963(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34378__auto___46531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_45045){
var state_val_45046 = (state_45045[(1)]);
if((state_val_45046 === (7))){
var inst_45005 = (state_45045[(2)]);
var state_45045__$1 = state_45045;
if(cljs.core.truth_(inst_45005)){
var statearr_45047_46535 = state_45045__$1;
(statearr_45047_46535[(1)] = (8));

} else {
var statearr_45048_46536 = state_45045__$1;
(statearr_45048_46536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (20))){
var inst_44998 = (state_45045[(7)]);
var state_45045__$1 = state_45045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45045__$1,(23),out,inst_44998);
} else {
if((state_val_45046 === (1))){
var inst_44981 = calc_state();
var inst_44982 = cljs.core.__destructure_map(inst_44981);
var inst_44983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44982,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44982,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44982,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44986 = inst_44981;
var state_45045__$1 = (function (){var statearr_45049 = state_45045;
(statearr_45049[(8)] = inst_44985);

(statearr_45049[(9)] = inst_44986);

(statearr_45049[(10)] = inst_44984);

(statearr_45049[(11)] = inst_44983);

return statearr_45049;
})();
var statearr_45050_46540 = state_45045__$1;
(statearr_45050_46540[(2)] = null);

(statearr_45050_46540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (24))){
var inst_44989 = (state_45045[(12)]);
var inst_44986 = inst_44989;
var state_45045__$1 = (function (){var statearr_45051 = state_45045;
(statearr_45051[(9)] = inst_44986);

return statearr_45051;
})();
var statearr_45052_46543 = state_45045__$1;
(statearr_45052_46543[(2)] = null);

(statearr_45052_46543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (4))){
var inst_45000 = (state_45045[(13)]);
var inst_44998 = (state_45045[(7)]);
var inst_44997 = (state_45045[(2)]);
var inst_44998__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44997,(0),null);
var inst_44999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44997,(1),null);
var inst_45000__$1 = (inst_44998__$1 == null);
var state_45045__$1 = (function (){var statearr_45053 = state_45045;
(statearr_45053[(13)] = inst_45000__$1);

(statearr_45053[(14)] = inst_44999);

(statearr_45053[(7)] = inst_44998__$1);

return statearr_45053;
})();
if(cljs.core.truth_(inst_45000__$1)){
var statearr_45055_46546 = state_45045__$1;
(statearr_45055_46546[(1)] = (5));

} else {
var statearr_45056_46547 = state_45045__$1;
(statearr_45056_46547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (15))){
var inst_45019 = (state_45045[(15)]);
var inst_44990 = (state_45045[(16)]);
var inst_45019__$1 = cljs.core.empty_QMARK_(inst_44990);
var state_45045__$1 = (function (){var statearr_45057 = state_45045;
(statearr_45057[(15)] = inst_45019__$1);

return statearr_45057;
})();
if(inst_45019__$1){
var statearr_45058_46551 = state_45045__$1;
(statearr_45058_46551[(1)] = (17));

} else {
var statearr_45059_46552 = state_45045__$1;
(statearr_45059_46552[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (21))){
var inst_44989 = (state_45045[(12)]);
var inst_44986 = inst_44989;
var state_45045__$1 = (function (){var statearr_45065 = state_45045;
(statearr_45065[(9)] = inst_44986);

return statearr_45065;
})();
var statearr_45066_46554 = state_45045__$1;
(statearr_45066_46554[(2)] = null);

(statearr_45066_46554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (13))){
var inst_45012 = (state_45045[(2)]);
var inst_45013 = calc_state();
var inst_44986 = inst_45013;
var state_45045__$1 = (function (){var statearr_45067 = state_45045;
(statearr_45067[(9)] = inst_44986);

(statearr_45067[(17)] = inst_45012);

return statearr_45067;
})();
var statearr_45068_46557 = state_45045__$1;
(statearr_45068_46557[(2)] = null);

(statearr_45068_46557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (22))){
var inst_45039 = (state_45045[(2)]);
var state_45045__$1 = state_45045;
var statearr_45069_46559 = state_45045__$1;
(statearr_45069_46559[(2)] = inst_45039);

(statearr_45069_46559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (6))){
var inst_44999 = (state_45045[(14)]);
var inst_45003 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44999,change);
var state_45045__$1 = state_45045;
var statearr_45070_46560 = state_45045__$1;
(statearr_45070_46560[(2)] = inst_45003);

(statearr_45070_46560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (25))){
var state_45045__$1 = state_45045;
var statearr_45071_46562 = state_45045__$1;
(statearr_45071_46562[(2)] = null);

(statearr_45071_46562[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (17))){
var inst_44999 = (state_45045[(14)]);
var inst_44991 = (state_45045[(18)]);
var inst_45021 = (inst_44991.cljs$core$IFn$_invoke$arity$1 ? inst_44991.cljs$core$IFn$_invoke$arity$1(inst_44999) : inst_44991.call(null,inst_44999));
var inst_45022 = cljs.core.not(inst_45021);
var state_45045__$1 = state_45045;
var statearr_45073_46566 = state_45045__$1;
(statearr_45073_46566[(2)] = inst_45022);

(statearr_45073_46566[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (3))){
var inst_45043 = (state_45045[(2)]);
var state_45045__$1 = state_45045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45045__$1,inst_45043);
} else {
if((state_val_45046 === (12))){
var state_45045__$1 = state_45045;
var statearr_45074_46567 = state_45045__$1;
(statearr_45074_46567[(2)] = null);

(statearr_45074_46567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (2))){
var inst_44986 = (state_45045[(9)]);
var inst_44989 = (state_45045[(12)]);
var inst_44989__$1 = cljs.core.__destructure_map(inst_44986);
var inst_44990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44989__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44989__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44989__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45045__$1 = (function (){var statearr_45075 = state_45045;
(statearr_45075[(12)] = inst_44989__$1);

(statearr_45075[(18)] = inst_44991);

(statearr_45075[(16)] = inst_44990);

return statearr_45075;
})();
return cljs.core.async.ioc_alts_BANG_(state_45045__$1,(4),inst_44992);
} else {
if((state_val_45046 === (23))){
var inst_45030 = (state_45045[(2)]);
var state_45045__$1 = state_45045;
if(cljs.core.truth_(inst_45030)){
var statearr_45076_46572 = state_45045__$1;
(statearr_45076_46572[(1)] = (24));

} else {
var statearr_45077_46573 = state_45045__$1;
(statearr_45077_46573[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (19))){
var inst_45025 = (state_45045[(2)]);
var state_45045__$1 = state_45045;
var statearr_45078_46574 = state_45045__$1;
(statearr_45078_46574[(2)] = inst_45025);

(statearr_45078_46574[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (11))){
var inst_44999 = (state_45045[(14)]);
var inst_45009 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44999);
var state_45045__$1 = state_45045;
var statearr_45079_46576 = state_45045__$1;
(statearr_45079_46576[(2)] = inst_45009);

(statearr_45079_46576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (9))){
var inst_44999 = (state_45045[(14)]);
var inst_45016 = (state_45045[(19)]);
var inst_44990 = (state_45045[(16)]);
var inst_45016__$1 = (inst_44990.cljs$core$IFn$_invoke$arity$1 ? inst_44990.cljs$core$IFn$_invoke$arity$1(inst_44999) : inst_44990.call(null,inst_44999));
var state_45045__$1 = (function (){var statearr_45084 = state_45045;
(statearr_45084[(19)] = inst_45016__$1);

return statearr_45084;
})();
if(cljs.core.truth_(inst_45016__$1)){
var statearr_45085_46581 = state_45045__$1;
(statearr_45085_46581[(1)] = (14));

} else {
var statearr_45086_46582 = state_45045__$1;
(statearr_45086_46582[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (5))){
var inst_45000 = (state_45045[(13)]);
var state_45045__$1 = state_45045;
var statearr_45087_46583 = state_45045__$1;
(statearr_45087_46583[(2)] = inst_45000);

(statearr_45087_46583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (14))){
var inst_45016 = (state_45045[(19)]);
var state_45045__$1 = state_45045;
var statearr_45088_46585 = state_45045__$1;
(statearr_45088_46585[(2)] = inst_45016);

(statearr_45088_46585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (26))){
var inst_45035 = (state_45045[(2)]);
var state_45045__$1 = state_45045;
var statearr_45089_46586 = state_45045__$1;
(statearr_45089_46586[(2)] = inst_45035);

(statearr_45089_46586[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (16))){
var inst_45027 = (state_45045[(2)]);
var state_45045__$1 = state_45045;
if(cljs.core.truth_(inst_45027)){
var statearr_45090_46590 = state_45045__$1;
(statearr_45090_46590[(1)] = (20));

} else {
var statearr_45091_46591 = state_45045__$1;
(statearr_45091_46591[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (10))){
var inst_45041 = (state_45045[(2)]);
var state_45045__$1 = state_45045;
var statearr_45092_46592 = state_45045__$1;
(statearr_45092_46592[(2)] = inst_45041);

(statearr_45092_46592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (18))){
var inst_45019 = (state_45045[(15)]);
var state_45045__$1 = state_45045;
var statearr_45093_46597 = state_45045__$1;
(statearr_45093_46597[(2)] = inst_45019);

(statearr_45093_46597[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (8))){
var inst_44998 = (state_45045[(7)]);
var inst_45007 = (inst_44998 == null);
var state_45045__$1 = state_45045;
if(cljs.core.truth_(inst_45007)){
var statearr_45094_46599 = state_45045__$1;
(statearr_45094_46599[(1)] = (11));

} else {
var statearr_45095_46600 = state_45045__$1;
(statearr_45095_46600[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34225__auto__ = null;
var cljs$core$async$mix_$_state_machine__34225__auto____0 = (function (){
var statearr_45096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45096[(0)] = cljs$core$async$mix_$_state_machine__34225__auto__);

(statearr_45096[(1)] = (1));

return statearr_45096;
});
var cljs$core$async$mix_$_state_machine__34225__auto____1 = (function (state_45045){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45045);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45097){var ex__34228__auto__ = e45097;
var statearr_45098_46604 = state_45045;
(statearr_45098_46604[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45045[(4)]))){
var statearr_45099_46606 = state_45045;
(statearr_45099_46606[(1)] = cljs.core.first((state_45045[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46607 = state_45045;
state_45045 = G__46607;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34225__auto__ = function(state_45045){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34225__auto____1.call(this,state_45045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34225__auto____0;
cljs$core$async$mix_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34225__auto____1;
return cljs$core$async$mix_$_state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_45100 = f__34379__auto__();
(statearr_45100[(6)] = c__34378__auto___46531);

return statearr_45100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_46612 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_46612(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46621 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_46621(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46631 = (function() {
var G__46635 = null;
var G__46635__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__46635__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__46635 = function(p,v){
switch(arguments.length){
case 1:
return G__46635__1.call(this,p);
case 2:
return G__46635__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46635.cljs$core$IFn$_invoke$arity$1 = G__46635__1;
G__46635.cljs$core$IFn$_invoke$arity$2 = G__46635__2;
return G__46635;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45102 = arguments.length;
switch (G__45102) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46631(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46631(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45105 = arguments.length;
switch (G__45105) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45103_SHARP_){
if(cljs.core.truth_((p1__45103_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45103_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45103_SHARP_.call(null,topic)))){
return p1__45103_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45103_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45108 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45109){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45109 = meta45109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45110,meta45109__$1){
var self__ = this;
var _45110__$1 = this;
return (new cljs.core.async.t_cljs$core$async45108(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45109__$1));
}));

(cljs.core.async.t_cljs$core$async45108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45110){
var self__ = this;
var _45110__$1 = this;
return self__.meta45109;
}));

(cljs.core.async.t_cljs$core$async45108.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45108.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45108.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45108.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45108.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45108.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45109","meta45109",1860822000,null)], null);
}));

(cljs.core.async.t_cljs$core$async45108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45108");

(cljs.core.async.t_cljs$core$async45108.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45108.
 */
cljs.core.async.__GT_t_cljs$core$async45108 = (function cljs$core$async$__GT_t_cljs$core$async45108(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45109){
return (new cljs.core.async.t_cljs$core$async45108(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45109));
});

}

return (new cljs.core.async.t_cljs$core$async45108(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34378__auto___46662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_45200){
var state_val_45201 = (state_45200[(1)]);
if((state_val_45201 === (7))){
var inst_45196 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45204_46663 = state_45200__$1;
(statearr_45204_46663[(2)] = inst_45196);

(statearr_45204_46663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (20))){
var state_45200__$1 = state_45200;
var statearr_45205_46664 = state_45200__$1;
(statearr_45205_46664[(2)] = null);

(statearr_45205_46664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (1))){
var state_45200__$1 = state_45200;
var statearr_45206_46665 = state_45200__$1;
(statearr_45206_46665[(2)] = null);

(statearr_45206_46665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (24))){
var inst_45179 = (state_45200[(7)]);
var inst_45188 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45179);
var state_45200__$1 = state_45200;
var statearr_45207_46666 = state_45200__$1;
(statearr_45207_46666[(2)] = inst_45188);

(statearr_45207_46666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (4))){
var inst_45128 = (state_45200[(8)]);
var inst_45128__$1 = (state_45200[(2)]);
var inst_45129 = (inst_45128__$1 == null);
var state_45200__$1 = (function (){var statearr_45211 = state_45200;
(statearr_45211[(8)] = inst_45128__$1);

return statearr_45211;
})();
if(cljs.core.truth_(inst_45129)){
var statearr_45212_46667 = state_45200__$1;
(statearr_45212_46667[(1)] = (5));

} else {
var statearr_45213_46668 = state_45200__$1;
(statearr_45213_46668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (15))){
var inst_45173 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45214_46669 = state_45200__$1;
(statearr_45214_46669[(2)] = inst_45173);

(statearr_45214_46669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (21))){
var inst_45193 = (state_45200[(2)]);
var state_45200__$1 = (function (){var statearr_45215 = state_45200;
(statearr_45215[(9)] = inst_45193);

return statearr_45215;
})();
var statearr_45216_46670 = state_45200__$1;
(statearr_45216_46670[(2)] = null);

(statearr_45216_46670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (13))){
var inst_45155 = (state_45200[(10)]);
var inst_45157 = cljs.core.chunked_seq_QMARK_(inst_45155);
var state_45200__$1 = state_45200;
if(inst_45157){
var statearr_45217_46671 = state_45200__$1;
(statearr_45217_46671[(1)] = (16));

} else {
var statearr_45218_46672 = state_45200__$1;
(statearr_45218_46672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (22))){
var inst_45185 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
if(cljs.core.truth_(inst_45185)){
var statearr_45219_46673 = state_45200__$1;
(statearr_45219_46673[(1)] = (23));

} else {
var statearr_45220_46674 = state_45200__$1;
(statearr_45220_46674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (6))){
var inst_45181 = (state_45200[(11)]);
var inst_45179 = (state_45200[(7)]);
var inst_45128 = (state_45200[(8)]);
var inst_45179__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45128) : topic_fn.call(null,inst_45128));
var inst_45180 = cljs.core.deref(mults);
var inst_45181__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45180,inst_45179__$1);
var state_45200__$1 = (function (){var statearr_45221 = state_45200;
(statearr_45221[(11)] = inst_45181__$1);

(statearr_45221[(7)] = inst_45179__$1);

return statearr_45221;
})();
if(cljs.core.truth_(inst_45181__$1)){
var statearr_45222_46675 = state_45200__$1;
(statearr_45222_46675[(1)] = (19));

} else {
var statearr_45223_46676 = state_45200__$1;
(statearr_45223_46676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (25))){
var inst_45190 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45224_46677 = state_45200__$1;
(statearr_45224_46677[(2)] = inst_45190);

(statearr_45224_46677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (17))){
var inst_45155 = (state_45200[(10)]);
var inst_45164 = cljs.core.first(inst_45155);
var inst_45165 = cljs.core.async.muxch_STAR_(inst_45164);
var inst_45166 = cljs.core.async.close_BANG_(inst_45165);
var inst_45167 = cljs.core.next(inst_45155);
var inst_45138 = inst_45167;
var inst_45139 = null;
var inst_45140 = (0);
var inst_45141 = (0);
var state_45200__$1 = (function (){var statearr_45225 = state_45200;
(statearr_45225[(12)] = inst_45139);

(statearr_45225[(13)] = inst_45140);

(statearr_45225[(14)] = inst_45141);

(statearr_45225[(15)] = inst_45138);

(statearr_45225[(16)] = inst_45166);

return statearr_45225;
})();
var statearr_45226_46680 = state_45200__$1;
(statearr_45226_46680[(2)] = null);

(statearr_45226_46680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (3))){
var inst_45198 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45200__$1,inst_45198);
} else {
if((state_val_45201 === (12))){
var inst_45175 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45227_46681 = state_45200__$1;
(statearr_45227_46681[(2)] = inst_45175);

(statearr_45227_46681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (2))){
var state_45200__$1 = state_45200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45200__$1,(4),ch);
} else {
if((state_val_45201 === (23))){
var state_45200__$1 = state_45200;
var statearr_45228_46682 = state_45200__$1;
(statearr_45228_46682[(2)] = null);

(statearr_45228_46682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (19))){
var inst_45181 = (state_45200[(11)]);
var inst_45128 = (state_45200[(8)]);
var inst_45183 = cljs.core.async.muxch_STAR_(inst_45181);
var state_45200__$1 = state_45200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45200__$1,(22),inst_45183,inst_45128);
} else {
if((state_val_45201 === (11))){
var inst_45138 = (state_45200[(15)]);
var inst_45155 = (state_45200[(10)]);
var inst_45155__$1 = cljs.core.seq(inst_45138);
var state_45200__$1 = (function (){var statearr_45229 = state_45200;
(statearr_45229[(10)] = inst_45155__$1);

return statearr_45229;
})();
if(inst_45155__$1){
var statearr_45230_46683 = state_45200__$1;
(statearr_45230_46683[(1)] = (13));

} else {
var statearr_45231_46684 = state_45200__$1;
(statearr_45231_46684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (9))){
var inst_45177 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45232_46685 = state_45200__$1;
(statearr_45232_46685[(2)] = inst_45177);

(statearr_45232_46685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (5))){
var inst_45135 = cljs.core.deref(mults);
var inst_45136 = cljs.core.vals(inst_45135);
var inst_45137 = cljs.core.seq(inst_45136);
var inst_45138 = inst_45137;
var inst_45139 = null;
var inst_45140 = (0);
var inst_45141 = (0);
var state_45200__$1 = (function (){var statearr_45233 = state_45200;
(statearr_45233[(12)] = inst_45139);

(statearr_45233[(13)] = inst_45140);

(statearr_45233[(14)] = inst_45141);

(statearr_45233[(15)] = inst_45138);

return statearr_45233;
})();
var statearr_45234_46686 = state_45200__$1;
(statearr_45234_46686[(2)] = null);

(statearr_45234_46686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (14))){
var state_45200__$1 = state_45200;
var statearr_45238_46687 = state_45200__$1;
(statearr_45238_46687[(2)] = null);

(statearr_45238_46687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (16))){
var inst_45155 = (state_45200[(10)]);
var inst_45159 = cljs.core.chunk_first(inst_45155);
var inst_45160 = cljs.core.chunk_rest(inst_45155);
var inst_45161 = cljs.core.count(inst_45159);
var inst_45138 = inst_45160;
var inst_45139 = inst_45159;
var inst_45140 = inst_45161;
var inst_45141 = (0);
var state_45200__$1 = (function (){var statearr_45239 = state_45200;
(statearr_45239[(12)] = inst_45139);

(statearr_45239[(13)] = inst_45140);

(statearr_45239[(14)] = inst_45141);

(statearr_45239[(15)] = inst_45138);

return statearr_45239;
})();
var statearr_45240_46688 = state_45200__$1;
(statearr_45240_46688[(2)] = null);

(statearr_45240_46688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (10))){
var inst_45139 = (state_45200[(12)]);
var inst_45140 = (state_45200[(13)]);
var inst_45141 = (state_45200[(14)]);
var inst_45138 = (state_45200[(15)]);
var inst_45146 = cljs.core._nth(inst_45139,inst_45141);
var inst_45150 = cljs.core.async.muxch_STAR_(inst_45146);
var inst_45151 = cljs.core.async.close_BANG_(inst_45150);
var inst_45152 = (inst_45141 + (1));
var tmp45235 = inst_45139;
var tmp45236 = inst_45140;
var tmp45237 = inst_45138;
var inst_45138__$1 = tmp45237;
var inst_45139__$1 = tmp45235;
var inst_45140__$1 = tmp45236;
var inst_45141__$1 = inst_45152;
var state_45200__$1 = (function (){var statearr_45241 = state_45200;
(statearr_45241[(12)] = inst_45139__$1);

(statearr_45241[(13)] = inst_45140__$1);

(statearr_45241[(17)] = inst_45151);

(statearr_45241[(14)] = inst_45141__$1);

(statearr_45241[(15)] = inst_45138__$1);

return statearr_45241;
})();
var statearr_45242_46689 = state_45200__$1;
(statearr_45242_46689[(2)] = null);

(statearr_45242_46689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (18))){
var inst_45170 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45243_46690 = state_45200__$1;
(statearr_45243_46690[(2)] = inst_45170);

(statearr_45243_46690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (8))){
var inst_45140 = (state_45200[(13)]);
var inst_45141 = (state_45200[(14)]);
var inst_45143 = (inst_45141 < inst_45140);
var inst_45144 = inst_45143;
var state_45200__$1 = state_45200;
if(cljs.core.truth_(inst_45144)){
var statearr_45244_46691 = state_45200__$1;
(statearr_45244_46691[(1)] = (10));

} else {
var statearr_45245_46694 = state_45200__$1;
(statearr_45245_46694[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45246[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45246[(1)] = (1));

return statearr_45246;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45200){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45200);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45247){var ex__34228__auto__ = e45247;
var statearr_45248_46695 = state_45200;
(statearr_45248_46695[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45200[(4)]))){
var statearr_45249_46696 = state_45200;
(statearr_45249_46696[(1)] = cljs.core.first((state_45200[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46697 = state_45200;
state_45200 = G__46697;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_45250 = f__34379__auto__();
(statearr_45250[(6)] = c__34378__auto___46662);

return statearr_45250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45252 = arguments.length;
switch (G__45252) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45255 = arguments.length;
switch (G__45255) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45257 = arguments.length;
switch (G__45257) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34378__auto___46714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_45323){
var state_val_45324 = (state_45323[(1)]);
if((state_val_45324 === (7))){
var state_45323__$1 = state_45323;
var statearr_45326_46715 = state_45323__$1;
(statearr_45326_46715[(2)] = null);

(statearr_45326_46715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (1))){
var state_45323__$1 = state_45323;
var statearr_45327_46716 = state_45323__$1;
(statearr_45327_46716[(2)] = null);

(statearr_45327_46716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (4))){
var inst_45283 = (state_45323[(7)]);
var inst_45284 = (state_45323[(8)]);
var inst_45286 = (inst_45284 < inst_45283);
var state_45323__$1 = state_45323;
if(cljs.core.truth_(inst_45286)){
var statearr_45330_46717 = state_45323__$1;
(statearr_45330_46717[(1)] = (6));

} else {
var statearr_45331_46718 = state_45323__$1;
(statearr_45331_46718[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (15))){
var inst_45309 = (state_45323[(9)]);
var inst_45314 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45309);
var state_45323__$1 = state_45323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45323__$1,(17),out,inst_45314);
} else {
if((state_val_45324 === (13))){
var inst_45309 = (state_45323[(9)]);
var inst_45309__$1 = (state_45323[(2)]);
var inst_45310 = cljs.core.some(cljs.core.nil_QMARK_,inst_45309__$1);
var state_45323__$1 = (function (){var statearr_45332 = state_45323;
(statearr_45332[(9)] = inst_45309__$1);

return statearr_45332;
})();
if(cljs.core.truth_(inst_45310)){
var statearr_45344_46723 = state_45323__$1;
(statearr_45344_46723[(1)] = (14));

} else {
var statearr_45350_46724 = state_45323__$1;
(statearr_45350_46724[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (6))){
var state_45323__$1 = state_45323;
var statearr_45356_46725 = state_45323__$1;
(statearr_45356_46725[(2)] = null);

(statearr_45356_46725[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (17))){
var inst_45316 = (state_45323[(2)]);
var state_45323__$1 = (function (){var statearr_45359 = state_45323;
(statearr_45359[(10)] = inst_45316);

return statearr_45359;
})();
var statearr_45360_46729 = state_45323__$1;
(statearr_45360_46729[(2)] = null);

(statearr_45360_46729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (3))){
var inst_45321 = (state_45323[(2)]);
var state_45323__$1 = state_45323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45323__$1,inst_45321);
} else {
if((state_val_45324 === (12))){
var _ = (function (){var statearr_45365 = state_45323;
(statearr_45365[(4)] = cljs.core.rest((state_45323[(4)])));

return statearr_45365;
})();
var state_45323__$1 = state_45323;
var ex45358 = (state_45323__$1[(2)]);
var statearr_45378_46731 = state_45323__$1;
(statearr_45378_46731[(5)] = ex45358);


if((ex45358 instanceof Object)){
var statearr_45384_46732 = state_45323__$1;
(statearr_45384_46732[(1)] = (11));

(statearr_45384_46732[(5)] = null);

} else {
throw ex45358;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (2))){
var inst_45282 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45283 = cnt;
var inst_45284 = (0);
var state_45323__$1 = (function (){var statearr_45385 = state_45323;
(statearr_45385[(11)] = inst_45282);

(statearr_45385[(7)] = inst_45283);

(statearr_45385[(8)] = inst_45284);

return statearr_45385;
})();
var statearr_45386_46733 = state_45323__$1;
(statearr_45386_46733[(2)] = null);

(statearr_45386_46733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (11))){
var inst_45288 = (state_45323[(2)]);
var inst_45289 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45323__$1 = (function (){var statearr_45398 = state_45323;
(statearr_45398[(12)] = inst_45288);

return statearr_45398;
})();
var statearr_45404_46737 = state_45323__$1;
(statearr_45404_46737[(2)] = inst_45289);

(statearr_45404_46737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (9))){
var inst_45284 = (state_45323[(8)]);
var _ = (function (){var statearr_45410 = state_45323;
(statearr_45410[(4)] = cljs.core.cons((12),(state_45323[(4)])));

return statearr_45410;
})();
var inst_45295 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45284) : chs__$1.call(null,inst_45284));
var inst_45296 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45284) : done.call(null,inst_45284));
var inst_45297 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45295,inst_45296);
var ___$1 = (function (){var statearr_45411 = state_45323;
(statearr_45411[(4)] = cljs.core.rest((state_45323[(4)])));

return statearr_45411;
})();
var state_45323__$1 = state_45323;
var statearr_45412_46743 = state_45323__$1;
(statearr_45412_46743[(2)] = inst_45297);

(statearr_45412_46743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (5))){
var inst_45307 = (state_45323[(2)]);
var state_45323__$1 = (function (){var statearr_45413 = state_45323;
(statearr_45413[(13)] = inst_45307);

return statearr_45413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45323__$1,(13),dchan);
} else {
if((state_val_45324 === (14))){
var inst_45312 = cljs.core.async.close_BANG_(out);
var state_45323__$1 = state_45323;
var statearr_45415_46748 = state_45323__$1;
(statearr_45415_46748[(2)] = inst_45312);

(statearr_45415_46748[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (16))){
var inst_45319 = (state_45323[(2)]);
var state_45323__$1 = state_45323;
var statearr_45417_46749 = state_45323__$1;
(statearr_45417_46749[(2)] = inst_45319);

(statearr_45417_46749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (10))){
var inst_45284 = (state_45323[(8)]);
var inst_45300 = (state_45323[(2)]);
var inst_45301 = (inst_45284 + (1));
var inst_45284__$1 = inst_45301;
var state_45323__$1 = (function (){var statearr_45419 = state_45323;
(statearr_45419[(14)] = inst_45300);

(statearr_45419[(8)] = inst_45284__$1);

return statearr_45419;
})();
var statearr_45420_46751 = state_45323__$1;
(statearr_45420_46751[(2)] = null);

(statearr_45420_46751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (8))){
var inst_45305 = (state_45323[(2)]);
var state_45323__$1 = state_45323;
var statearr_45422_46752 = state_45323__$1;
(statearr_45422_46752[(2)] = inst_45305);

(statearr_45422_46752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45424[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45424[(1)] = (1));

return statearr_45424;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45323){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45323);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45426){var ex__34228__auto__ = e45426;
var statearr_45428_46757 = state_45323;
(statearr_45428_46757[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45323[(4)]))){
var statearr_45429_46758 = state_45323;
(statearr_45429_46758[(1)] = cljs.core.first((state_45323[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46759 = state_45323;
state_45323 = G__46759;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_45438 = f__34379__auto__();
(statearr_45438[(6)] = c__34378__auto___46714);

return statearr_45438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45447 = arguments.length;
switch (G__45447) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34378__auto___46763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_45485){
var state_val_45486 = (state_45485[(1)]);
if((state_val_45486 === (7))){
var inst_45463 = (state_45485[(7)]);
var inst_45462 = (state_45485[(8)]);
var inst_45462__$1 = (state_45485[(2)]);
var inst_45463__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45462__$1,(0),null);
var inst_45464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45462__$1,(1),null);
var inst_45465 = (inst_45463__$1 == null);
var state_45485__$1 = (function (){var statearr_45495 = state_45485;
(statearr_45495[(7)] = inst_45463__$1);

(statearr_45495[(8)] = inst_45462__$1);

(statearr_45495[(9)] = inst_45464);

return statearr_45495;
})();
if(cljs.core.truth_(inst_45465)){
var statearr_45496_46764 = state_45485__$1;
(statearr_45496_46764[(1)] = (8));

} else {
var statearr_45497_46765 = state_45485__$1;
(statearr_45497_46765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45486 === (1))){
var inst_45452 = cljs.core.vec(chs);
var inst_45453 = inst_45452;
var state_45485__$1 = (function (){var statearr_45502 = state_45485;
(statearr_45502[(10)] = inst_45453);

return statearr_45502;
})();
var statearr_45504_46770 = state_45485__$1;
(statearr_45504_46770[(2)] = null);

(statearr_45504_46770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45486 === (4))){
var inst_45453 = (state_45485[(10)]);
var state_45485__$1 = state_45485;
return cljs.core.async.ioc_alts_BANG_(state_45485__$1,(7),inst_45453);
} else {
if((state_val_45486 === (6))){
var inst_45480 = (state_45485[(2)]);
var state_45485__$1 = state_45485;
var statearr_45505_46779 = state_45485__$1;
(statearr_45505_46779[(2)] = inst_45480);

(statearr_45505_46779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45486 === (3))){
var inst_45482 = (state_45485[(2)]);
var state_45485__$1 = state_45485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45485__$1,inst_45482);
} else {
if((state_val_45486 === (2))){
var inst_45453 = (state_45485[(10)]);
var inst_45455 = cljs.core.count(inst_45453);
var inst_45456 = (inst_45455 > (0));
var state_45485__$1 = state_45485;
if(cljs.core.truth_(inst_45456)){
var statearr_45508_46780 = state_45485__$1;
(statearr_45508_46780[(1)] = (4));

} else {
var statearr_45510_46781 = state_45485__$1;
(statearr_45510_46781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45486 === (11))){
var inst_45453 = (state_45485[(10)]);
var inst_45473 = (state_45485[(2)]);
var tmp45506 = inst_45453;
var inst_45453__$1 = tmp45506;
var state_45485__$1 = (function (){var statearr_45512 = state_45485;
(statearr_45512[(11)] = inst_45473);

(statearr_45512[(10)] = inst_45453__$1);

return statearr_45512;
})();
var statearr_45514_46782 = state_45485__$1;
(statearr_45514_46782[(2)] = null);

(statearr_45514_46782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45486 === (9))){
var inst_45463 = (state_45485[(7)]);
var state_45485__$1 = state_45485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45485__$1,(11),out,inst_45463);
} else {
if((state_val_45486 === (5))){
var inst_45478 = cljs.core.async.close_BANG_(out);
var state_45485__$1 = state_45485;
var statearr_45515_46786 = state_45485__$1;
(statearr_45515_46786[(2)] = inst_45478);

(statearr_45515_46786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45486 === (10))){
var inst_45476 = (state_45485[(2)]);
var state_45485__$1 = state_45485;
var statearr_45516_46788 = state_45485__$1;
(statearr_45516_46788[(2)] = inst_45476);

(statearr_45516_46788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45486 === (8))){
var inst_45453 = (state_45485[(10)]);
var inst_45463 = (state_45485[(7)]);
var inst_45462 = (state_45485[(8)]);
var inst_45464 = (state_45485[(9)]);
var inst_45467 = (function (){var cs = inst_45453;
var vec__45458 = inst_45462;
var v = inst_45463;
var c = inst_45464;
return (function (p1__45445_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45445_SHARP_);
});
})();
var inst_45468 = cljs.core.filterv(inst_45467,inst_45453);
var inst_45453__$1 = inst_45468;
var state_45485__$1 = (function (){var statearr_45521 = state_45485;
(statearr_45521[(10)] = inst_45453__$1);

return statearr_45521;
})();
var statearr_45522_46789 = state_45485__$1;
(statearr_45522_46789[(2)] = null);

(statearr_45522_46789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45523 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45523[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45523[(1)] = (1));

return statearr_45523;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45485){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45485);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45524){var ex__34228__auto__ = e45524;
var statearr_45525_46794 = state_45485;
(statearr_45525_46794[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45485[(4)]))){
var statearr_45526_46795 = state_45485;
(statearr_45526_46795[(1)] = cljs.core.first((state_45485[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46796 = state_45485;
state_45485 = G__46796;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_45529 = f__34379__auto__();
(statearr_45529[(6)] = c__34378__auto___46763);

return statearr_45529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45538 = arguments.length;
switch (G__45538) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34378__auto___46801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_45564){
var state_val_45565 = (state_45564[(1)]);
if((state_val_45565 === (7))){
var inst_45546 = (state_45564[(7)]);
var inst_45546__$1 = (state_45564[(2)]);
var inst_45547 = (inst_45546__$1 == null);
var inst_45548 = cljs.core.not(inst_45547);
var state_45564__$1 = (function (){var statearr_45570 = state_45564;
(statearr_45570[(7)] = inst_45546__$1);

return statearr_45570;
})();
if(inst_45548){
var statearr_45571_46803 = state_45564__$1;
(statearr_45571_46803[(1)] = (8));

} else {
var statearr_45572_46804 = state_45564__$1;
(statearr_45572_46804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45565 === (1))){
var inst_45541 = (0);
var state_45564__$1 = (function (){var statearr_45573 = state_45564;
(statearr_45573[(8)] = inst_45541);

return statearr_45573;
})();
var statearr_45574_46805 = state_45564__$1;
(statearr_45574_46805[(2)] = null);

(statearr_45574_46805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45565 === (4))){
var state_45564__$1 = state_45564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45564__$1,(7),ch);
} else {
if((state_val_45565 === (6))){
var inst_45559 = (state_45564[(2)]);
var state_45564__$1 = state_45564;
var statearr_45575_46807 = state_45564__$1;
(statearr_45575_46807[(2)] = inst_45559);

(statearr_45575_46807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45565 === (3))){
var inst_45561 = (state_45564[(2)]);
var inst_45562 = cljs.core.async.close_BANG_(out);
var state_45564__$1 = (function (){var statearr_45576 = state_45564;
(statearr_45576[(9)] = inst_45561);

return statearr_45576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45564__$1,inst_45562);
} else {
if((state_val_45565 === (2))){
var inst_45541 = (state_45564[(8)]);
var inst_45543 = (inst_45541 < n);
var state_45564__$1 = state_45564;
if(cljs.core.truth_(inst_45543)){
var statearr_45583_46808 = state_45564__$1;
(statearr_45583_46808[(1)] = (4));

} else {
var statearr_45585_46809 = state_45564__$1;
(statearr_45585_46809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45565 === (11))){
var inst_45541 = (state_45564[(8)]);
var inst_45551 = (state_45564[(2)]);
var inst_45552 = (inst_45541 + (1));
var inst_45541__$1 = inst_45552;
var state_45564__$1 = (function (){var statearr_45586 = state_45564;
(statearr_45586[(8)] = inst_45541__$1);

(statearr_45586[(10)] = inst_45551);

return statearr_45586;
})();
var statearr_45587_46810 = state_45564__$1;
(statearr_45587_46810[(2)] = null);

(statearr_45587_46810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45565 === (9))){
var state_45564__$1 = state_45564;
var statearr_45589_46811 = state_45564__$1;
(statearr_45589_46811[(2)] = null);

(statearr_45589_46811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45565 === (5))){
var state_45564__$1 = state_45564;
var statearr_45590_46812 = state_45564__$1;
(statearr_45590_46812[(2)] = null);

(statearr_45590_46812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45565 === (10))){
var inst_45556 = (state_45564[(2)]);
var state_45564__$1 = state_45564;
var statearr_45592_46817 = state_45564__$1;
(statearr_45592_46817[(2)] = inst_45556);

(statearr_45592_46817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45565 === (8))){
var inst_45546 = (state_45564[(7)]);
var state_45564__$1 = state_45564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45564__$1,(11),out,inst_45546);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45594[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45594[(1)] = (1));

return statearr_45594;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45564){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45564);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45595){var ex__34228__auto__ = e45595;
var statearr_45596_46822 = state_45564;
(statearr_45596_46822[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45564[(4)]))){
var statearr_45597_46823 = state_45564;
(statearr_45597_46823[(1)] = cljs.core.first((state_45564[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46824 = state_45564;
state_45564 = G__46824;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_45598 = f__34379__auto__();
(statearr_45598[(6)] = c__34378__auto___46801);

return statearr_45598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45601 = (function (f,ch,meta45602){
this.f = f;
this.ch = ch;
this.meta45602 = meta45602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45603,meta45602__$1){
var self__ = this;
var _45603__$1 = this;
return (new cljs.core.async.t_cljs$core$async45601(self__.f,self__.ch,meta45602__$1));
}));

(cljs.core.async.t_cljs$core$async45601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45603){
var self__ = this;
var _45603__$1 = this;
return self__.meta45602;
}));

(cljs.core.async.t_cljs$core$async45601.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45601.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45601.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45627 = (function (f,ch,meta45602,_,fn1,meta45628){
this.f = f;
this.ch = ch;
this.meta45602 = meta45602;
this._ = _;
this.fn1 = fn1;
this.meta45628 = meta45628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45629,meta45628__$1){
var self__ = this;
var _45629__$1 = this;
return (new cljs.core.async.t_cljs$core$async45627(self__.f,self__.ch,self__.meta45602,self__._,self__.fn1,meta45628__$1));
}));

(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45629){
var self__ = this;
var _45629__$1 = this;
return self__.meta45628;
}));

(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45600_SHARP_){
var G__45630 = (((p1__45600_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45600_SHARP_) : self__.f.call(null,p1__45600_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45630) : f1.call(null,G__45630));
});
}));

(cljs.core.async.t_cljs$core$async45627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45602","meta45602",348026884,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45601","cljs.core.async/t_cljs$core$async45601",1270362679,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45628","meta45628",-149494562,null)], null);
}));

(cljs.core.async.t_cljs$core$async45627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45627");

(cljs.core.async.t_cljs$core$async45627.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45627.
 */
cljs.core.async.__GT_t_cljs$core$async45627 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45627(f__$1,ch__$1,meta45602__$1,___$2,fn1__$1,meta45628){
return (new cljs.core.async.t_cljs$core$async45627(f__$1,ch__$1,meta45602__$1,___$2,fn1__$1,meta45628));
});

}

return (new cljs.core.async.t_cljs$core$async45627(self__.f,self__.ch,self__.meta45602,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45631 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45631) : self__.f.call(null,G__45631));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45601.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45602","meta45602",348026884,null)], null);
}));

(cljs.core.async.t_cljs$core$async45601.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45601");

(cljs.core.async.t_cljs$core$async45601.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45601");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45601.
 */
cljs.core.async.__GT_t_cljs$core$async45601 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45601(f__$1,ch__$1,meta45602){
return (new cljs.core.async.t_cljs$core$async45601(f__$1,ch__$1,meta45602));
});

}

return (new cljs.core.async.t_cljs$core$async45601(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45632 = (function (f,ch,meta45633){
this.f = f;
this.ch = ch;
this.meta45633 = meta45633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45634,meta45633__$1){
var self__ = this;
var _45634__$1 = this;
return (new cljs.core.async.t_cljs$core$async45632(self__.f,self__.ch,meta45633__$1));
}));

(cljs.core.async.t_cljs$core$async45632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45634){
var self__ = this;
var _45634__$1 = this;
return self__.meta45633;
}));

(cljs.core.async.t_cljs$core$async45632.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45632.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45632.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45632.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45632.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45632.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45633","meta45633",-598800390,null)], null);
}));

(cljs.core.async.t_cljs$core$async45632.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45632");

(cljs.core.async.t_cljs$core$async45632.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45632");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45632.
 */
cljs.core.async.__GT_t_cljs$core$async45632 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45632(f__$1,ch__$1,meta45633){
return (new cljs.core.async.t_cljs$core$async45632(f__$1,ch__$1,meta45633));
});

}

return (new cljs.core.async.t_cljs$core$async45632(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45655 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45655 = (function (p,ch,meta45656){
this.p = p;
this.ch = ch;
this.meta45656 = meta45656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45657,meta45656__$1){
var self__ = this;
var _45657__$1 = this;
return (new cljs.core.async.t_cljs$core$async45655(self__.p,self__.ch,meta45656__$1));
}));

(cljs.core.async.t_cljs$core$async45655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45657){
var self__ = this;
var _45657__$1 = this;
return self__.meta45656;
}));

(cljs.core.async.t_cljs$core$async45655.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45655.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45655.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45655.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45655.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45655.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45655.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45656","meta45656",617025991,null)], null);
}));

(cljs.core.async.t_cljs$core$async45655.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45655");

(cljs.core.async.t_cljs$core$async45655.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45655");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45655.
 */
cljs.core.async.__GT_t_cljs$core$async45655 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45655(p__$1,ch__$1,meta45656){
return (new cljs.core.async.t_cljs$core$async45655(p__$1,ch__$1,meta45656));
});

}

return (new cljs.core.async.t_cljs$core$async45655(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45659 = arguments.length;
switch (G__45659) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34378__auto___46856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_45680){
var state_val_45681 = (state_45680[(1)]);
if((state_val_45681 === (7))){
var inst_45676 = (state_45680[(2)]);
var state_45680__$1 = state_45680;
var statearr_45682_46857 = state_45680__$1;
(statearr_45682_46857[(2)] = inst_45676);

(statearr_45682_46857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45681 === (1))){
var state_45680__$1 = state_45680;
var statearr_45683_46862 = state_45680__$1;
(statearr_45683_46862[(2)] = null);

(statearr_45683_46862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45681 === (4))){
var inst_45662 = (state_45680[(7)]);
var inst_45662__$1 = (state_45680[(2)]);
var inst_45663 = (inst_45662__$1 == null);
var state_45680__$1 = (function (){var statearr_45684 = state_45680;
(statearr_45684[(7)] = inst_45662__$1);

return statearr_45684;
})();
if(cljs.core.truth_(inst_45663)){
var statearr_45685_46867 = state_45680__$1;
(statearr_45685_46867[(1)] = (5));

} else {
var statearr_45686_46868 = state_45680__$1;
(statearr_45686_46868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45681 === (6))){
var inst_45662 = (state_45680[(7)]);
var inst_45667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45662) : p.call(null,inst_45662));
var state_45680__$1 = state_45680;
if(cljs.core.truth_(inst_45667)){
var statearr_45687_46869 = state_45680__$1;
(statearr_45687_46869[(1)] = (8));

} else {
var statearr_45688_46870 = state_45680__$1;
(statearr_45688_46870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45681 === (3))){
var inst_45678 = (state_45680[(2)]);
var state_45680__$1 = state_45680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45680__$1,inst_45678);
} else {
if((state_val_45681 === (2))){
var state_45680__$1 = state_45680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45680__$1,(4),ch);
} else {
if((state_val_45681 === (11))){
var inst_45670 = (state_45680[(2)]);
var state_45680__$1 = state_45680;
var statearr_45689_46872 = state_45680__$1;
(statearr_45689_46872[(2)] = inst_45670);

(statearr_45689_46872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45681 === (9))){
var state_45680__$1 = state_45680;
var statearr_45690_46876 = state_45680__$1;
(statearr_45690_46876[(2)] = null);

(statearr_45690_46876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45681 === (5))){
var inst_45665 = cljs.core.async.close_BANG_(out);
var state_45680__$1 = state_45680;
var statearr_45691_46878 = state_45680__$1;
(statearr_45691_46878[(2)] = inst_45665);

(statearr_45691_46878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45681 === (10))){
var inst_45673 = (state_45680[(2)]);
var state_45680__$1 = (function (){var statearr_45692 = state_45680;
(statearr_45692[(8)] = inst_45673);

return statearr_45692;
})();
var statearr_45693_46879 = state_45680__$1;
(statearr_45693_46879[(2)] = null);

(statearr_45693_46879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45681 === (8))){
var inst_45662 = (state_45680[(7)]);
var state_45680__$1 = state_45680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45680__$1,(11),out,inst_45662);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45694 = [null,null,null,null,null,null,null,null,null];
(statearr_45694[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45694[(1)] = (1));

return statearr_45694;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45680){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45680);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45695){var ex__34228__auto__ = e45695;
var statearr_45696_46880 = state_45680;
(statearr_45696_46880[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45680[(4)]))){
var statearr_45697_46881 = state_45680;
(statearr_45697_46881[(1)] = cljs.core.first((state_45680[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46883 = state_45680;
state_45680 = G__46883;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_45698 = f__34379__auto__();
(statearr_45698[(6)] = c__34378__auto___46856);

return statearr_45698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45701 = arguments.length;
switch (G__45701) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34378__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_45764){
var state_val_45765 = (state_45764[(1)]);
if((state_val_45765 === (7))){
var inst_45760 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
var statearr_45766_46889 = state_45764__$1;
(statearr_45766_46889[(2)] = inst_45760);

(statearr_45766_46889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (20))){
var inst_45730 = (state_45764[(7)]);
var inst_45741 = (state_45764[(2)]);
var inst_45742 = cljs.core.next(inst_45730);
var inst_45716 = inst_45742;
var inst_45717 = null;
var inst_45718 = (0);
var inst_45719 = (0);
var state_45764__$1 = (function (){var statearr_45767 = state_45764;
(statearr_45767[(8)] = inst_45719);

(statearr_45767[(9)] = inst_45741);

(statearr_45767[(10)] = inst_45716);

(statearr_45767[(11)] = inst_45718);

(statearr_45767[(12)] = inst_45717);

return statearr_45767;
})();
var statearr_45768_46894 = state_45764__$1;
(statearr_45768_46894[(2)] = null);

(statearr_45768_46894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (1))){
var state_45764__$1 = state_45764;
var statearr_45770_46895 = state_45764__$1;
(statearr_45770_46895[(2)] = null);

(statearr_45770_46895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (4))){
var inst_45705 = (state_45764[(13)]);
var inst_45705__$1 = (state_45764[(2)]);
var inst_45706 = (inst_45705__$1 == null);
var state_45764__$1 = (function (){var statearr_45772 = state_45764;
(statearr_45772[(13)] = inst_45705__$1);

return statearr_45772;
})();
if(cljs.core.truth_(inst_45706)){
var statearr_45773_46896 = state_45764__$1;
(statearr_45773_46896[(1)] = (5));

} else {
var statearr_45774_46897 = state_45764__$1;
(statearr_45774_46897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (15))){
var state_45764__$1 = state_45764;
var statearr_45779_46898 = state_45764__$1;
(statearr_45779_46898[(2)] = null);

(statearr_45779_46898[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (21))){
var state_45764__$1 = state_45764;
var statearr_45781_46899 = state_45764__$1;
(statearr_45781_46899[(2)] = null);

(statearr_45781_46899[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (13))){
var inst_45719 = (state_45764[(8)]);
var inst_45716 = (state_45764[(10)]);
var inst_45718 = (state_45764[(11)]);
var inst_45717 = (state_45764[(12)]);
var inst_45726 = (state_45764[(2)]);
var inst_45727 = (inst_45719 + (1));
var tmp45776 = inst_45716;
var tmp45777 = inst_45718;
var tmp45778 = inst_45717;
var inst_45716__$1 = tmp45776;
var inst_45717__$1 = tmp45778;
var inst_45718__$1 = tmp45777;
var inst_45719__$1 = inst_45727;
var state_45764__$1 = (function (){var statearr_45782 = state_45764;
(statearr_45782[(8)] = inst_45719__$1);

(statearr_45782[(10)] = inst_45716__$1);

(statearr_45782[(14)] = inst_45726);

(statearr_45782[(11)] = inst_45718__$1);

(statearr_45782[(12)] = inst_45717__$1);

return statearr_45782;
})();
var statearr_45784_46901 = state_45764__$1;
(statearr_45784_46901[(2)] = null);

(statearr_45784_46901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (22))){
var state_45764__$1 = state_45764;
var statearr_45785_46902 = state_45764__$1;
(statearr_45785_46902[(2)] = null);

(statearr_45785_46902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (6))){
var inst_45705 = (state_45764[(13)]);
var inst_45714 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45705) : f.call(null,inst_45705));
var inst_45715 = cljs.core.seq(inst_45714);
var inst_45716 = inst_45715;
var inst_45717 = null;
var inst_45718 = (0);
var inst_45719 = (0);
var state_45764__$1 = (function (){var statearr_45786 = state_45764;
(statearr_45786[(8)] = inst_45719);

(statearr_45786[(10)] = inst_45716);

(statearr_45786[(11)] = inst_45718);

(statearr_45786[(12)] = inst_45717);

return statearr_45786;
})();
var statearr_45787_46903 = state_45764__$1;
(statearr_45787_46903[(2)] = null);

(statearr_45787_46903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (17))){
var inst_45730 = (state_45764[(7)]);
var inst_45734 = cljs.core.chunk_first(inst_45730);
var inst_45735 = cljs.core.chunk_rest(inst_45730);
var inst_45736 = cljs.core.count(inst_45734);
var inst_45716 = inst_45735;
var inst_45717 = inst_45734;
var inst_45718 = inst_45736;
var inst_45719 = (0);
var state_45764__$1 = (function (){var statearr_45788 = state_45764;
(statearr_45788[(8)] = inst_45719);

(statearr_45788[(10)] = inst_45716);

(statearr_45788[(11)] = inst_45718);

(statearr_45788[(12)] = inst_45717);

return statearr_45788;
})();
var statearr_45790_46904 = state_45764__$1;
(statearr_45790_46904[(2)] = null);

(statearr_45790_46904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (3))){
var inst_45762 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45764__$1,inst_45762);
} else {
if((state_val_45765 === (12))){
var inst_45750 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
var statearr_45791_46905 = state_45764__$1;
(statearr_45791_46905[(2)] = inst_45750);

(statearr_45791_46905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (2))){
var state_45764__$1 = state_45764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45764__$1,(4),in$);
} else {
if((state_val_45765 === (23))){
var inst_45758 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
var statearr_45792_46906 = state_45764__$1;
(statearr_45792_46906[(2)] = inst_45758);

(statearr_45792_46906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (19))){
var inst_45745 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
var statearr_45793_46907 = state_45764__$1;
(statearr_45793_46907[(2)] = inst_45745);

(statearr_45793_46907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (11))){
var inst_45716 = (state_45764[(10)]);
var inst_45730 = (state_45764[(7)]);
var inst_45730__$1 = cljs.core.seq(inst_45716);
var state_45764__$1 = (function (){var statearr_45794 = state_45764;
(statearr_45794[(7)] = inst_45730__$1);

return statearr_45794;
})();
if(inst_45730__$1){
var statearr_45795_46910 = state_45764__$1;
(statearr_45795_46910[(1)] = (14));

} else {
var statearr_45796_46911 = state_45764__$1;
(statearr_45796_46911[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (9))){
var inst_45752 = (state_45764[(2)]);
var inst_45753 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45764__$1 = (function (){var statearr_45797 = state_45764;
(statearr_45797[(15)] = inst_45752);

return statearr_45797;
})();
if(cljs.core.truth_(inst_45753)){
var statearr_45798_46912 = state_45764__$1;
(statearr_45798_46912[(1)] = (21));

} else {
var statearr_45799_46913 = state_45764__$1;
(statearr_45799_46913[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (5))){
var inst_45708 = cljs.core.async.close_BANG_(out);
var state_45764__$1 = state_45764;
var statearr_45800_46914 = state_45764__$1;
(statearr_45800_46914[(2)] = inst_45708);

(statearr_45800_46914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (14))){
var inst_45730 = (state_45764[(7)]);
var inst_45732 = cljs.core.chunked_seq_QMARK_(inst_45730);
var state_45764__$1 = state_45764;
if(inst_45732){
var statearr_45802_46915 = state_45764__$1;
(statearr_45802_46915[(1)] = (17));

} else {
var statearr_45803_46916 = state_45764__$1;
(statearr_45803_46916[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (16))){
var inst_45748 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
var statearr_45804_46917 = state_45764__$1;
(statearr_45804_46917[(2)] = inst_45748);

(statearr_45804_46917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (10))){
var inst_45719 = (state_45764[(8)]);
var inst_45717 = (state_45764[(12)]);
var inst_45724 = cljs.core._nth(inst_45717,inst_45719);
var state_45764__$1 = state_45764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45764__$1,(13),out,inst_45724);
} else {
if((state_val_45765 === (18))){
var inst_45730 = (state_45764[(7)]);
var inst_45739 = cljs.core.first(inst_45730);
var state_45764__$1 = state_45764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45764__$1,(20),out,inst_45739);
} else {
if((state_val_45765 === (8))){
var inst_45719 = (state_45764[(8)]);
var inst_45718 = (state_45764[(11)]);
var inst_45721 = (inst_45719 < inst_45718);
var inst_45722 = inst_45721;
var state_45764__$1 = state_45764;
if(cljs.core.truth_(inst_45722)){
var statearr_45805_46918 = state_45764__$1;
(statearr_45805_46918[(1)] = (10));

} else {
var statearr_45806_46919 = state_45764__$1;
(statearr_45806_46919[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_45807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45807[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__);

(statearr_45807[(1)] = (1));

return statearr_45807;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____1 = (function (state_45764){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45764);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45808){var ex__34228__auto__ = e45808;
var statearr_45809_46921 = state_45764;
(statearr_45809_46921[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45764[(4)]))){
var statearr_45810_46922 = state_45764;
(statearr_45810_46922[(1)] = cljs.core.first((state_45764[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46923 = state_45764;
state_45764 = G__46923;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__ = function(state_45764){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____1.call(this,state_45764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_45812 = f__34379__auto__();
(statearr_45812[(6)] = c__34378__auto__);

return statearr_45812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));

return c__34378__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45814 = arguments.length;
switch (G__45814) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45816 = arguments.length;
switch (G__45816) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45819 = arguments.length;
switch (G__45819) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34378__auto___46930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_45844){
var state_val_45845 = (state_45844[(1)]);
if((state_val_45845 === (7))){
var inst_45839 = (state_45844[(2)]);
var state_45844__$1 = state_45844;
var statearr_45847_46931 = state_45844__$1;
(statearr_45847_46931[(2)] = inst_45839);

(statearr_45847_46931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (1))){
var inst_45821 = null;
var state_45844__$1 = (function (){var statearr_45848 = state_45844;
(statearr_45848[(7)] = inst_45821);

return statearr_45848;
})();
var statearr_45849_46932 = state_45844__$1;
(statearr_45849_46932[(2)] = null);

(statearr_45849_46932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (4))){
var inst_45824 = (state_45844[(8)]);
var inst_45824__$1 = (state_45844[(2)]);
var inst_45825 = (inst_45824__$1 == null);
var inst_45826 = cljs.core.not(inst_45825);
var state_45844__$1 = (function (){var statearr_45850 = state_45844;
(statearr_45850[(8)] = inst_45824__$1);

return statearr_45850;
})();
if(inst_45826){
var statearr_45851_46933 = state_45844__$1;
(statearr_45851_46933[(1)] = (5));

} else {
var statearr_45852_46934 = state_45844__$1;
(statearr_45852_46934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (6))){
var state_45844__$1 = state_45844;
var statearr_45853_46935 = state_45844__$1;
(statearr_45853_46935[(2)] = null);

(statearr_45853_46935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (3))){
var inst_45841 = (state_45844[(2)]);
var inst_45842 = cljs.core.async.close_BANG_(out);
var state_45844__$1 = (function (){var statearr_45854 = state_45844;
(statearr_45854[(9)] = inst_45841);

return statearr_45854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45844__$1,inst_45842);
} else {
if((state_val_45845 === (2))){
var state_45844__$1 = state_45844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45844__$1,(4),ch);
} else {
if((state_val_45845 === (11))){
var inst_45824 = (state_45844[(8)]);
var inst_45833 = (state_45844[(2)]);
var inst_45821 = inst_45824;
var state_45844__$1 = (function (){var statearr_45856 = state_45844;
(statearr_45856[(10)] = inst_45833);

(statearr_45856[(7)] = inst_45821);

return statearr_45856;
})();
var statearr_45857_46936 = state_45844__$1;
(statearr_45857_46936[(2)] = null);

(statearr_45857_46936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (9))){
var inst_45824 = (state_45844[(8)]);
var state_45844__$1 = state_45844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45844__$1,(11),out,inst_45824);
} else {
if((state_val_45845 === (5))){
var inst_45824 = (state_45844[(8)]);
var inst_45821 = (state_45844[(7)]);
var inst_45828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45824,inst_45821);
var state_45844__$1 = state_45844;
if(inst_45828){
var statearr_45859_46937 = state_45844__$1;
(statearr_45859_46937[(1)] = (8));

} else {
var statearr_45860_46938 = state_45844__$1;
(statearr_45860_46938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (10))){
var inst_45836 = (state_45844[(2)]);
var state_45844__$1 = state_45844;
var statearr_45861_46939 = state_45844__$1;
(statearr_45861_46939[(2)] = inst_45836);

(statearr_45861_46939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (8))){
var inst_45821 = (state_45844[(7)]);
var tmp45858 = inst_45821;
var inst_45821__$1 = tmp45858;
var state_45844__$1 = (function (){var statearr_45862 = state_45844;
(statearr_45862[(7)] = inst_45821__$1);

return statearr_45862;
})();
var statearr_45863_46940 = state_45844__$1;
(statearr_45863_46940[(2)] = null);

(statearr_45863_46940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45864[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45864[(1)] = (1));

return statearr_45864;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45844){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45844);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45866){var ex__34228__auto__ = e45866;
var statearr_45867_46942 = state_45844;
(statearr_45867_46942[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45844[(4)]))){
var statearr_45868_46943 = state_45844;
(statearr_45868_46943[(1)] = cljs.core.first((state_45844[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46944 = state_45844;
state_45844 = G__46944;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_45869 = f__34379__auto__();
(statearr_45869[(6)] = c__34378__auto___46930);

return statearr_45869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45872 = arguments.length;
switch (G__45872) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34378__auto___46946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_45911){
var state_val_45912 = (state_45911[(1)]);
if((state_val_45912 === (7))){
var inst_45907 = (state_45911[(2)]);
var state_45911__$1 = state_45911;
var statearr_45913_46947 = state_45911__$1;
(statearr_45913_46947[(2)] = inst_45907);

(statearr_45913_46947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45912 === (1))){
var inst_45873 = (new Array(n));
var inst_45874 = inst_45873;
var inst_45875 = (0);
var state_45911__$1 = (function (){var statearr_45914 = state_45911;
(statearr_45914[(7)] = inst_45874);

(statearr_45914[(8)] = inst_45875);

return statearr_45914;
})();
var statearr_45915_46948 = state_45911__$1;
(statearr_45915_46948[(2)] = null);

(statearr_45915_46948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45912 === (4))){
var inst_45878 = (state_45911[(9)]);
var inst_45878__$1 = (state_45911[(2)]);
var inst_45879 = (inst_45878__$1 == null);
var inst_45880 = cljs.core.not(inst_45879);
var state_45911__$1 = (function (){var statearr_45917 = state_45911;
(statearr_45917[(9)] = inst_45878__$1);

return statearr_45917;
})();
if(inst_45880){
var statearr_45918_46949 = state_45911__$1;
(statearr_45918_46949[(1)] = (5));

} else {
var statearr_45919_46950 = state_45911__$1;
(statearr_45919_46950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45912 === (15))){
var inst_45901 = (state_45911[(2)]);
var state_45911__$1 = state_45911;
var statearr_45920_46951 = state_45911__$1;
(statearr_45920_46951[(2)] = inst_45901);

(statearr_45920_46951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45912 === (13))){
var state_45911__$1 = state_45911;
var statearr_45921_46952 = state_45911__$1;
(statearr_45921_46952[(2)] = null);

(statearr_45921_46952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45912 === (6))){
var inst_45875 = (state_45911[(8)]);
var inst_45897 = (inst_45875 > (0));
var state_45911__$1 = state_45911;
if(cljs.core.truth_(inst_45897)){
var statearr_45922_46953 = state_45911__$1;
(statearr_45922_46953[(1)] = (12));

} else {
var statearr_45923_46954 = state_45911__$1;
(statearr_45923_46954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45912 === (3))){
var inst_45909 = (state_45911[(2)]);
var state_45911__$1 = state_45911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45911__$1,inst_45909);
} else {
if((state_val_45912 === (12))){
var inst_45874 = (state_45911[(7)]);
var inst_45899 = cljs.core.vec(inst_45874);
var state_45911__$1 = state_45911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45911__$1,(15),out,inst_45899);
} else {
if((state_val_45912 === (2))){
var state_45911__$1 = state_45911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45911__$1,(4),ch);
} else {
if((state_val_45912 === (11))){
var inst_45891 = (state_45911[(2)]);
var inst_45892 = (new Array(n));
var inst_45874 = inst_45892;
var inst_45875 = (0);
var state_45911__$1 = (function (){var statearr_45925 = state_45911;
(statearr_45925[(7)] = inst_45874);

(statearr_45925[(10)] = inst_45891);

(statearr_45925[(8)] = inst_45875);

return statearr_45925;
})();
var statearr_45926_46955 = state_45911__$1;
(statearr_45926_46955[(2)] = null);

(statearr_45926_46955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45912 === (9))){
var inst_45874 = (state_45911[(7)]);
var inst_45889 = cljs.core.vec(inst_45874);
var state_45911__$1 = state_45911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45911__$1,(11),out,inst_45889);
} else {
if((state_val_45912 === (5))){
var inst_45874 = (state_45911[(7)]);
var inst_45878 = (state_45911[(9)]);
var inst_45883 = (state_45911[(11)]);
var inst_45875 = (state_45911[(8)]);
var inst_45882 = (inst_45874[inst_45875] = inst_45878);
var inst_45883__$1 = (inst_45875 + (1));
var inst_45884 = (inst_45883__$1 < n);
var state_45911__$1 = (function (){var statearr_45927 = state_45911;
(statearr_45927[(11)] = inst_45883__$1);

(statearr_45927[(12)] = inst_45882);

return statearr_45927;
})();
if(cljs.core.truth_(inst_45884)){
var statearr_45928_46956 = state_45911__$1;
(statearr_45928_46956[(1)] = (8));

} else {
var statearr_45929_46957 = state_45911__$1;
(statearr_45929_46957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45912 === (14))){
var inst_45904 = (state_45911[(2)]);
var inst_45905 = cljs.core.async.close_BANG_(out);
var state_45911__$1 = (function (){var statearr_45932 = state_45911;
(statearr_45932[(13)] = inst_45904);

return statearr_45932;
})();
var statearr_45933_46958 = state_45911__$1;
(statearr_45933_46958[(2)] = inst_45905);

(statearr_45933_46958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45912 === (10))){
var inst_45895 = (state_45911[(2)]);
var state_45911__$1 = state_45911;
var statearr_45934_46959 = state_45911__$1;
(statearr_45934_46959[(2)] = inst_45895);

(statearr_45934_46959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45912 === (8))){
var inst_45874 = (state_45911[(7)]);
var inst_45883 = (state_45911[(11)]);
var tmp45930 = inst_45874;
var inst_45874__$1 = tmp45930;
var inst_45875 = inst_45883;
var state_45911__$1 = (function (){var statearr_45935 = state_45911;
(statearr_45935[(7)] = inst_45874__$1);

(statearr_45935[(8)] = inst_45875);

return statearr_45935;
})();
var statearr_45936_46960 = state_45911__$1;
(statearr_45936_46960[(2)] = null);

(statearr_45936_46960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45937[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45937[(1)] = (1));

return statearr_45937;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45911){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45911);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45938){var ex__34228__auto__ = e45938;
var statearr_45939_46963 = state_45911;
(statearr_45939_46963[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45911[(4)]))){
var statearr_45941_46964 = state_45911;
(statearr_45941_46964[(1)] = cljs.core.first((state_45911[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46965 = state_45911;
state_45911 = G__46965;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_45942 = f__34379__auto__();
(statearr_45942[(6)] = c__34378__auto___46946);

return statearr_45942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45944 = arguments.length;
switch (G__45944) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34378__auto___46967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34379__auto__ = (function (){var switch__34224__auto__ = (function (state_45990){
var state_val_45991 = (state_45990[(1)]);
if((state_val_45991 === (7))){
var inst_45986 = (state_45990[(2)]);
var state_45990__$1 = state_45990;
var statearr_45993_46968 = state_45990__$1;
(statearr_45993_46968[(2)] = inst_45986);

(statearr_45993_46968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (1))){
var inst_45946 = [];
var inst_45947 = inst_45946;
var inst_45948 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45990__$1 = (function (){var statearr_45994 = state_45990;
(statearr_45994[(7)] = inst_45947);

(statearr_45994[(8)] = inst_45948);

return statearr_45994;
})();
var statearr_45995_46970 = state_45990__$1;
(statearr_45995_46970[(2)] = null);

(statearr_45995_46970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (4))){
var inst_45951 = (state_45990[(9)]);
var inst_45951__$1 = (state_45990[(2)]);
var inst_45952 = (inst_45951__$1 == null);
var inst_45953 = cljs.core.not(inst_45952);
var state_45990__$1 = (function (){var statearr_45996 = state_45990;
(statearr_45996[(9)] = inst_45951__$1);

return statearr_45996;
})();
if(inst_45953){
var statearr_45997_46974 = state_45990__$1;
(statearr_45997_46974[(1)] = (5));

} else {
var statearr_45998_46975 = state_45990__$1;
(statearr_45998_46975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (15))){
var inst_45947 = (state_45990[(7)]);
var inst_45978 = cljs.core.vec(inst_45947);
var state_45990__$1 = state_45990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45990__$1,(18),out,inst_45978);
} else {
if((state_val_45991 === (13))){
var inst_45973 = (state_45990[(2)]);
var state_45990__$1 = state_45990;
var statearr_45999_46976 = state_45990__$1;
(statearr_45999_46976[(2)] = inst_45973);

(statearr_45999_46976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (6))){
var inst_45947 = (state_45990[(7)]);
var inst_45975 = inst_45947.length;
var inst_45976 = (inst_45975 > (0));
var state_45990__$1 = state_45990;
if(cljs.core.truth_(inst_45976)){
var statearr_46000_46978 = state_45990__$1;
(statearr_46000_46978[(1)] = (15));

} else {
var statearr_46002_46979 = state_45990__$1;
(statearr_46002_46979[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (17))){
var inst_45983 = (state_45990[(2)]);
var inst_45984 = cljs.core.async.close_BANG_(out);
var state_45990__$1 = (function (){var statearr_46003 = state_45990;
(statearr_46003[(10)] = inst_45983);

return statearr_46003;
})();
var statearr_46004_46982 = state_45990__$1;
(statearr_46004_46982[(2)] = inst_45984);

(statearr_46004_46982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (3))){
var inst_45988 = (state_45990[(2)]);
var state_45990__$1 = state_45990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45990__$1,inst_45988);
} else {
if((state_val_45991 === (12))){
var inst_45947 = (state_45990[(7)]);
var inst_45966 = cljs.core.vec(inst_45947);
var state_45990__$1 = state_45990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45990__$1,(14),out,inst_45966);
} else {
if((state_val_45991 === (2))){
var state_45990__$1 = state_45990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45990__$1,(4),ch);
} else {
if((state_val_45991 === (11))){
var inst_45951 = (state_45990[(9)]);
var inst_45947 = (state_45990[(7)]);
var inst_45955 = (state_45990[(11)]);
var inst_45963 = inst_45947.push(inst_45951);
var tmp46005 = inst_45947;
var inst_45947__$1 = tmp46005;
var inst_45948 = inst_45955;
var state_45990__$1 = (function (){var statearr_46006 = state_45990;
(statearr_46006[(7)] = inst_45947__$1);

(statearr_46006[(12)] = inst_45963);

(statearr_46006[(8)] = inst_45948);

return statearr_46006;
})();
var statearr_46007_46986 = state_45990__$1;
(statearr_46007_46986[(2)] = null);

(statearr_46007_46986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (9))){
var inst_45948 = (state_45990[(8)]);
var inst_45959 = cljs.core.keyword_identical_QMARK_(inst_45948,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45990__$1 = state_45990;
var statearr_46009_46988 = state_45990__$1;
(statearr_46009_46988[(2)] = inst_45959);

(statearr_46009_46988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (5))){
var inst_45951 = (state_45990[(9)]);
var inst_45948 = (state_45990[(8)]);
var inst_45955 = (state_45990[(11)]);
var inst_45956 = (state_45990[(13)]);
var inst_45955__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45951) : f.call(null,inst_45951));
var inst_45956__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45955__$1,inst_45948);
var state_45990__$1 = (function (){var statearr_46010 = state_45990;
(statearr_46010[(11)] = inst_45955__$1);

(statearr_46010[(13)] = inst_45956__$1);

return statearr_46010;
})();
if(inst_45956__$1){
var statearr_46011_46990 = state_45990__$1;
(statearr_46011_46990[(1)] = (8));

} else {
var statearr_46012_46991 = state_45990__$1;
(statearr_46012_46991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (14))){
var inst_45951 = (state_45990[(9)]);
var inst_45955 = (state_45990[(11)]);
var inst_45968 = (state_45990[(2)]);
var inst_45969 = [];
var inst_45970 = inst_45969.push(inst_45951);
var inst_45947 = inst_45969;
var inst_45948 = inst_45955;
var state_45990__$1 = (function (){var statearr_46013 = state_45990;
(statearr_46013[(7)] = inst_45947);

(statearr_46013[(14)] = inst_45970);

(statearr_46013[(8)] = inst_45948);

(statearr_46013[(15)] = inst_45968);

return statearr_46013;
})();
var statearr_46014_46992 = state_45990__$1;
(statearr_46014_46992[(2)] = null);

(statearr_46014_46992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (16))){
var state_45990__$1 = state_45990;
var statearr_46015_46993 = state_45990__$1;
(statearr_46015_46993[(2)] = null);

(statearr_46015_46993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (10))){
var inst_45961 = (state_45990[(2)]);
var state_45990__$1 = state_45990;
if(cljs.core.truth_(inst_45961)){
var statearr_46017_46994 = state_45990__$1;
(statearr_46017_46994[(1)] = (11));

} else {
var statearr_46018_46995 = state_45990__$1;
(statearr_46018_46995[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (18))){
var inst_45980 = (state_45990[(2)]);
var state_45990__$1 = state_45990;
var statearr_46019_46997 = state_45990__$1;
(statearr_46019_46997[(2)] = inst_45980);

(statearr_46019_46997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45991 === (8))){
var inst_45956 = (state_45990[(13)]);
var state_45990__$1 = state_45990;
var statearr_46020_46999 = state_45990__$1;
(statearr_46020_46999[(2)] = inst_45956);

(statearr_46020_46999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_46021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46021[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_46021[(1)] = (1));

return statearr_46021;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45990){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45990);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e46022){var ex__34228__auto__ = e46022;
var statearr_46023_47000 = state_45990;
(statearr_46023_47000[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45990[(4)]))){
var statearr_46024_47001 = state_45990;
(statearr_46024_47001[(1)] = cljs.core.first((state_45990[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47002 = state_45990;
state_45990 = G__47002;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34380__auto__ = (function (){var statearr_46026 = f__34379__auto__();
(statearr_46026[(6)] = c__34378__auto___46967);

return statearr_46026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34380__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
