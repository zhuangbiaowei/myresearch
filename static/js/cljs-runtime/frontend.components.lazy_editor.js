goog.provide('frontend.components.lazy_editor');
frontend.components.lazy_editor.lazy_editor = (new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["code-editor"], null),(function (){
return frontend.extensions.code.editor;
})));
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.lazy_editor !== 'undefined') && (typeof frontend.components.lazy_editor.loaded_QMARK_ !== 'undefined')){
} else {
frontend.components.lazy_editor.loaded_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.lazy_editor.editor = rum.core.lazy_build(rum.core.build_defc,(function (config,id,attr,code,options){
var loaded_QMARK_ = rum.core.react(frontend.components.lazy_editor.loaded_QMARK_);
var theme = frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
var code__$1 = (function (){var or__5043__auto__ = code;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var code__$2 = clojure.string.replace_first(code__$1,/\n$/,"");
if(cljs.core.truth_(loaded_QMARK_)){
return daiquiri.interpreter.interpret((function (){var fexpr__54077 = cljs.core.deref(frontend.components.lazy_editor.lazy_editor);
return (fexpr__54077.cljs$core$IFn$_invoke$arity$6 ? fexpr__54077.cljs$core$IFn$_invoke$arity$6(config,id,attr,code__$2,theme,options) : fexpr__54077.call(null,config,id,attr,code__$2,theme,options));
})());
} else {
return daiquiri.interpreter.interpret(frontend.ui.loading("CodeMirror"));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
shadow.lazy.load.cljs$core$IFn$_invoke$arity$2(frontend.components.lazy_editor.lazy_editor,(function (){
return cljs.core.reset_BANG_(frontend.components.lazy_editor.loaded_QMARK_,true);
}));

return state;
})], null)], null),"frontend.components.lazy-editor/editor");

//# sourceMappingURL=frontend.components.lazy_editor.js.map
