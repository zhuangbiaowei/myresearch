goog.provide('frontend.components.git');
frontend.components.git.set_git_username_and_email = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.git","username","frontend.components.git/username",363897048));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.git","email","frontend.components.git/email",1650425180));
return daiquiri.core.create_element("div",{'className':"container"},[daiquiri.core.create_element("div",{'className':"text-lg mb-4"},["Git requires to setup your username and email address to commit, both of them will be stored locally."]),daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"leading-6 font-medium"},["Your username:"])])]),daiquiri.core.create_element("input",{'autoFocus':true,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(username,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2 mb-4"},[]),daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"leading-6 font-medium"},["Your email address:"])])]),daiquiri.core.create_element("input",{'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(email,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},[]),daiquiri.core.create_element("div",{'className':"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},[daiquiri.core.create_element("span",{'className':"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
var username__$1 = cljs.core.deref(username);
var email__$1 = cljs.core.deref(email);
if((((!(clojure.string.blank_QMARK_(username__$1)))) && ((!(clojure.string.blank_QMARK_(email__$1)))))){
return frontend.handler.shell.set_git_username_and_email(username__$1,email__$1);
} else {
return null;
}
}),'className':"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"},["Submit"])])])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.git","username","frontend.components.git/username",363897048)),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.git","email","frontend.components.git/email",1650425180))], null),"frontend.components.git/set-git-username-and-email");
frontend.components.git.file_specific_version = rum.core.lazy_build(rum.core.build_defc,(function (path,hash,content){
return daiquiri.core.create_element("div",{'style':{'width':(700)},'className':"w-full sm:max-w-lg"},[daiquiri.core.create_element("div",{'className':"font-bold mb-4"},[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(" (%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hash], 0)))].join('')]),(function (){var attrs57838 = content;
return daiquiri.core.create_element("pre",((cljs.core.map_QMARK_(attrs57838))?daiquiri.interpreter.element_attributes(attrs57838):null),((cljs.core.map_QMARK_(attrs57838))?null:[daiquiri.interpreter.interpret(attrs57838)]));
})(),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Revert",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.file.alter_file(frontend.state.get_current_repo(),path,content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
})], 0)))]);
}),null,"frontend.components.git/file-specific-version");

//# sourceMappingURL=frontend.components.git.js.map
