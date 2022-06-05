goog.provide('frontend.components.commit');
goog.scope(function(){
  frontend.components.commit.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.commit.commit_and_push_BANG_ = (function frontend$components$commit$commit_and_push_BANG_(){
var value = frontend.components.commit.goog$module$goog$object.get(goog.dom.getElement("commit-message"),"value");
if(cljs.core.truth_((function (){var and__5041__auto__ = value;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(value) >= (1));
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["gitCommitAll",value], 0));
} else {
}

return frontend.state.close_modal_BANG_();
} else {
return null;
}
});
frontend.components.commit.add_commit_message = rum.core.lazy_build(rum.core.build_defcs,(function (state,_close_fn){
return daiquiri.core.create_element("div",{'style':{'padding':"48px 0"},'className':"w-full mx-auto sm:max-w-lg sm:w-96"},[daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left mb-2"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"text-lg leading-6 font-medium"},["Your commit message:"])])]),daiquiri.core.create_element("input",{'id':"commit-message",'autoFocus':true,'defaultValue':"",'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},null),daiquiri.core.create_element("div",{'className':"mt-5 sm:mt-4 flex"},[daiquiri.core.create_element("span",{'className':"flex w-full rounded-md shadow-sm"},[daiquiri.core.create_element("button",{'type':"button",'onClick':frontend.components.commit.commit_and_push_BANG_,'className':"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"},["Commit"])])])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
var temp__5720__auto___86133 = goog.dom.getElement("commit-message");
if(cljs.core.truth_(temp__5720__auto___86133)){
var input_86134 = temp__5720__auto___86133;
input_86134.focus();

frontend.util.cursor.move_cursor_to_end(input_86134);
} else {
}

return state;
})], null),frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
return frontend.mixins.on_enter.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),goog.dom.getElement("commit-message"),new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),(function (){
return frontend.components.commit.commit_and_push_BANG_();
})], 0));
}))], null),"frontend.components.commit/add-commit-message");
frontend.components.commit.show_commit_modal_BANG_ = (function frontend$components$commit$show_commit_modal_BANG_(e){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(frontend.util.input_QMARK_(frontend.components.commit.goog$module$goog$object.get(e,"target")))) && (((cljs.core.not(frontend.components.commit.goog$module$goog$object.get(e,"shiftKey"))) && (((cljs.core.not(frontend.components.commit.goog$module$goog$object.get(e,"ctrlKey"))) && (((cljs.core.not(frontend.components.commit.goog$module$goog$object.get(e,"altKey"))) && (cljs.core.not(frontend.components.commit.goog$module$goog$object.get(e,"metaKey"))))))))));
} else {
return and__5041__auto__;
}
})())){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo_url = temp__5720__auto__;
if(cljs.core.truth_(frontend.state.get_edit_input_id())){
return null;
} else {
frontend.util.stop(e);

return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.commit.add_commit_message);
}
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.components.commit.js.map
