goog.provide('frontend.components.encryption');
frontend.components.encryption.encryption_dialog_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,repo_url,close_fn){
var reveal_secret_phrase_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.encryption","reveal-secret-phrase?","frontend.components.encryption/reveal-secret-phrase?",-1672016298));
var public_key = frontend.encrypt.get_public_key(repo_url);
var private_key = frontend.encrypt.get_secret_key(repo_url);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"text-lg leading-6 font-medium"},["This graph is encrypted with ",daiquiri.core.create_element("a",{'href':"https://age-encryption.org/",'target':"_blank",'rel':"noopener"},["age-encryption.org/v1"])])])]),daiquiri.core.create_element("div",{'className':"mt-1"},[daiquiri.core.create_element("div",{'className':"max-w-2xl rounded-md shadow-sm sm:max-w-xl"},[daiquiri.core.create_element("div",{'onClick':(function (){
if(cljs.core.not(cljs.core.deref(reveal_secret_phrase_QMARK_))){
return cljs.core.reset_BANG_(reveal_secret_phrase_QMARK_,true);
} else {
return null;
}
}),'className':"cursor-pointer block w-full rounded-sm p-2"},[daiquiri.core.create_element("div",{'className':"font-medium"},["Public Key:"]),(function (){var attrs57698 = public_key;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs57698))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-mono","select-all","break-all"], null)], null),attrs57698], 0))):{'className':"font-mono select-all break-all"}),((cljs.core.map_QMARK_(attrs57698))?null:[daiquiri.interpreter.interpret(attrs57698)]));
})(),(cljs.core.truth_(cljs.core.deref(reveal_secret_phrase_QMARK_))?daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"mt-1 font-medium"},["Private Key:"]),(function (){var attrs57709 = private_key;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs57709))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-mono","select-all","break-all"], null)], null),attrs57709], 0))):{'className':"font-mono select-all break-all"}),((cljs.core.map_QMARK_(attrs57709))?null:[daiquiri.interpreter.interpret(attrs57709)]));
})()]):daiquiri.core.create_element("div",{'className':"underline"},["click to view the private key"]))])])]),daiquiri.core.create_element("div",{'className':"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},[daiquiri.core.create_element("span",{'className':"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},[daiquiri.core.create_element("button",{'type':"button",'onClick':close_fn,'className':"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"close","close",1835149582)], 0)))])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.encryption","reveal-secret-phrase?","frontend.components.encryption/reveal-secret-phrase?",-1672016298))], null),"frontend.components.encryption/encryption-dialog-inner");
frontend.components.encryption.encryption_dialog = (function frontend$components$encryption$encryption_dialog(repo_url){
return (function (close_fn){
return frontend.components.encryption.encryption_dialog_inner(repo_url,close_fn);
});
});
frontend.components.encryption.input_password_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,repo_url,close_fn){
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.encryption","password","frontend.components.encryption/password",778875014));
var password_confirm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.encryption","password-confirm","frontend.components.encryption/password-confirm",1584705873));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"text-lg leading-6 font-medium font-bold"},["Enter a password"])])]),daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-70","div.opacity-70",1944542243),"Choose a strong and hard to guess password.\nIf you lose your password, all the data can't be decrypted!! Please make sure you remember the password you have set, or you can keep a secure backup of the password."], null))),daiquiri.core.create_element("input",{'type':"password",'placeholder':"Password",'autoFocus':true,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(password,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},[]),daiquiri.core.create_element("input",{'type':"password",'placeholder':"Re-enter the password",'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(password_confirm,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},[]),daiquiri.core.create_element("div",{'className':"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},[daiquiri.core.create_element("span",{'className':"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
var value = cljs.core.deref(password);
if(clojure.string.blank_QMARK_(value)){
return null;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(password),cljs.core.deref(password_confirm))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("The passwords are not matched.",new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.generate_key_pair_and_save_BANG_(repo_url),(function (keys){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.encrypt_with_passphrase(value,keys),(function (db_encrypted_secret){
return promesa.protocols._promise((function (){
frontend.handler.metadata.set_db_encrypted_secret_BANG_(db_encrypted_secret);

return (close_fn.cljs$core$IFn$_invoke$arity$1 ? close_fn.cljs$core$IFn$_invoke$arity$1(true) : close_fn.call(null,true));
})()
);
}));
}));
}));

}
}
}),'className':"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"},["Submit"])])])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.encryption","password","frontend.components.encryption/password",778875014)),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.encryption","password-confirm","frontend.components.encryption/password-confirm",1584705873))], null),"frontend.components.encryption/input-password-inner");
frontend.components.encryption.input_password = (function frontend$components$encryption$input_password(repo_url,close_fn){
return (function (_close_fn){
return frontend.components.encryption.input_password_inner(repo_url,close_fn);
});
});
frontend.components.encryption.encryption_setup_dialog_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,repo_url,close_fn){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"text-lg leading-6 font-medium"},["Do you want to create an encrypted graph?"])])]),daiquiri.core.create_element("div",{'className':"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},[daiquiri.core.create_element("span",{'className':"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.encryption.input_password(repo_url,close_fn));
}),'className':"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0)))])]),daiquiri.core.create_element("span",{'className':"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
return (close_fn.cljs$core$IFn$_invoke$arity$1 ? close_fn.cljs$core$IFn$_invoke$arity$1(false) : close_fn.call(null,false));
}),'className':"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"no","no",-390373634)], 0)))])])])]);
}),null,"frontend.components.encryption/encryption-setup-dialog-inner");
frontend.components.encryption.encryption_setup_dialog = (function frontend$components$encryption$encryption_setup_dialog(repo_url,close_fn){
return (function (close_modal_fn){
var close_fn__$1 = (function (encrypted_QMARK_){
(close_fn.cljs$core$IFn$_invoke$arity$1 ? close_fn.cljs$core$IFn$_invoke$arity$1(encrypted_QMARK_) : close_fn.call(null,encrypted_QMARK_));

return (close_modal_fn.cljs$core$IFn$_invoke$arity$0 ? close_modal_fn.cljs$core$IFn$_invoke$arity$0() : close_modal_fn.call(null));
});
return frontend.components.encryption.encryption_setup_dialog_inner(repo_url,close_fn__$1);
});
});
frontend.components.encryption.encryption_input_secret_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,_repo_url,db_encrypted_secret,close_fn){
var secret = new cljs.core.Keyword("frontend.components.encryption","secret","frontend.components.encryption/secret",2070865901).cljs$core$IFn$_invoke$arity$1(state);
var loading = new cljs.core.Keyword("frontend.components.encryption","loading","frontend.components.encryption/loading",-308077002).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"text-lg leading-6 font-medium"},["Enter your password"])])]),daiquiri.core.create_element("input",{'type':"password",'autoFocus':true,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(secret,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},[]),daiquiri.core.create_element("div",{'className':"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},[daiquiri.core.create_element("span",{'className':"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
cljs.core.reset_BANG_(loading,true);

var value = cljs.core.deref(secret);
if(clojure.string.blank_QMARK_(value)){
return null;
} else {
var repo = frontend.state.get_current_repo();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt_with_passphrase(value,db_encrypted_secret),(function (keys){
frontend.encrypt.save_key_pair_BANG_(repo,keys);

(close_fn.cljs$core$IFn$_invoke$arity$1 ? close_fn.cljs$core$IFn$_invoke$arity$1(true) : close_fn.call(null,true));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("encryption","graph-parsing?","encryption/graph-parsing?",1059330925),false);
})),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("The password is not matched.",new cljs.core.Keyword(null,"warning","warning",-1685650671),true);
})),(function (){
return cljs.core.reset_BANG_(loading,false);
})));
}));
}
}),'className':"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"},[(cljs.core.truth_(cljs.core.deref(loading))?daiquiri.interpreter.interpret(frontend.ui.loading("Decrypting")):"Decrypt")])])])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.encryption","secret","frontend.components.encryption/secret",2070865901)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.encryption","loading","frontend.components.encryption/loading",-308077002))], null),"frontend.components.encryption/encryption-input-secret-inner");
frontend.components.encryption.encryption_input_secret_dialog = (function frontend$components$encryption$encryption_input_secret_dialog(repo_url,db_encrypted_secret,close_fn){
return (function (close_modal_fn){
var close_fn__$1 = (function (encrypted_QMARK_){
(close_fn.cljs$core$IFn$_invoke$arity$1 ? close_fn.cljs$core$IFn$_invoke$arity$1(encrypted_QMARK_) : close_fn.call(null,encrypted_QMARK_));

return (close_modal_fn.cljs$core$IFn$_invoke$arity$0 ? close_modal_fn.cljs$core$IFn$_invoke$arity$0() : close_modal_fn.call(null));
});
return frontend.components.encryption.encryption_input_secret_inner(repo_url,db_encrypted_secret,close_fn__$1);
});
});

//# sourceMappingURL=frontend.components.encryption.js.map
