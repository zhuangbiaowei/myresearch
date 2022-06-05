goog.provide('frontend.encrypt');
goog.scope(function(){
  frontend.encrypt.goog$module$shadow$loader = goog.module.get('shadow.loader');
});
if((typeof frontend !== 'undefined') && (typeof frontend.encrypt !== 'undefined') && (typeof frontend.encrypt.age_pem_header_line !== 'undefined')){
} else {
frontend.encrypt.age_pem_header_line = "-----BEGIN AGE ENCRYPTED FILE-----";
}
if((typeof frontend !== 'undefined') && (typeof frontend.encrypt !== 'undefined') && (typeof frontend.encrypt.age_version_line !== 'undefined')){
} else {
frontend.encrypt.age_version_line = "age-encryption.org/v1";
}
frontend.encrypt.content_encrypted_QMARK_ = (function frontend$encrypt$content_encrypted_QMARK_(content){
if(cljs.core.truth_(content)){
return ((clojure.string.starts_with_QMARK_(content,frontend.encrypt.age_pem_header_line)) || (clojure.string.starts_with_QMARK_(content,frontend.encrypt.age_version_line)));
} else {
return null;
}
});
frontend.encrypt.encrypted_db_QMARK_ = (function frontend$encrypt$encrypted_db_QMARK_(repo_url){
return frontend.db.utils.get_key_value.cljs$core$IFn$_invoke$arity$2(repo_url,new cljs.core.Keyword("db","encrypted?","db/encrypted?",491114125));
});
frontend.encrypt.get_key_pair = (function frontend$encrypt$get_key_pair(repo_url){
return frontend.db.utils.get_key_value.cljs$core$IFn$_invoke$arity$2(repo_url,new cljs.core.Keyword("db","encryption-keys","db/encryption-keys",-358833404));
});
frontend.encrypt.save_key_pair_BANG_ = (function frontend$encrypt$save_key_pair_BANG_(repo_url,keys){
var keys__$1 = ((typeof keys === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(keys):keys);
(frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3(repo_url,new cljs.core.Keyword("db","encryption-keys","db/encryption-keys",-358833404),keys__$1) : frontend.db.set_key_value.call(null,repo_url,new cljs.core.Keyword("db","encryption-keys","db/encryption-keys",-358833404),keys__$1));

return (frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3(repo_url,new cljs.core.Keyword("db","encrypted?","db/encrypted?",491114125),true) : frontend.db.set_key_value.call(null,repo_url,new cljs.core.Keyword("db","encrypted?","db/encrypted?",491114125),true));
});
frontend.encrypt.generate_key_pair = (function frontend$encrypt$generate_key_pair(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.goog$module$shadow$loader.load(new cljs.core.Keyword(null,"age-encryption","age-encryption",-236825227)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.age_encryption !== 'undefined') && (typeof frontend.extensions.age_encryption.keygen !== 'undefined'))?(new cljs.core.Var((function (){
return frontend.extensions.age_encryption.keygen;
}),cljs.core.with_meta(new cljs.core.Symbol("frontend.extensions.age-encryption","keygen","frontend.extensions.age-encryption/keygen",14015315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null),(function (lazy_keygen){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((lazy_keygen.cljs$core$IFn$_invoke$arity$0 ? lazy_keygen.cljs$core$IFn$_invoke$arity$0() : lazy_keygen.call(null)),(function (js_keys){
return promesa.protocols._promise(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(js_keys));
}));
}));
}));
}));
});
frontend.encrypt.generate_key_pair_and_save_BANG_ = (function frontend$encrypt$generate_key_pair_and_save_BANG_(repo_url){
if(cljs.core.truth_(frontend.encrypt.get_key_pair(repo_url))){
return null;
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.generate_key_pair(),(function (keys){
return promesa.protocols._promise((function (){
frontend.encrypt.save_key_pair_BANG_(repo_url,keys);

return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys], 0));
})()
);
}));
}));
}
});
frontend.encrypt.get_public_key = (function frontend$encrypt$get_public_key(repo_url){
return cljs.core.second(frontend.encrypt.get_key_pair(repo_url));
});
frontend.encrypt.get_secret_key = (function frontend$encrypt$get_secret_key(repo_url){
return cljs.core.first(frontend.encrypt.get_key_pair(repo_url));
});
frontend.encrypt.encrypt = (function frontend$encrypt$encrypt(var_args){
var G__42472 = arguments.length;
switch (G__42472) {
case 1:
return frontend.encrypt.encrypt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.encrypt.encrypt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.encrypt.encrypt.cljs$core$IFn$_invoke$arity$1 = (function (content){
return frontend.encrypt.encrypt.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),content);
}));

(frontend.encrypt.encrypt.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,content){
if(cljs.core.truth_(frontend.encrypt.encrypted_db_QMARK_(repo_url))){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.goog$module$shadow$loader.load(new cljs.core.Keyword(null,"age-encryption","age-encryption",-236825227)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.age_encryption !== 'undefined') && (typeof frontend.extensions.age_encryption.encrypt_with_x25519 !== 'undefined'))?(new cljs.core.Var((function (){
return frontend.extensions.age_encryption.encrypt_with_x25519;
}),cljs.core.with_meta(new cljs.core.Symbol("frontend.extensions.age-encryption","encrypt-with-x25519","frontend.extensions.age-encryption/encrypt-with-x25519",1917923813,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null),(function (lazy_encrypt_with_x25519){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.utf8.encode(content),(function (content__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.get_public_key(repo_url),(function (public_key){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((lazy_encrypt_with_x25519.cljs$core$IFn$_invoke$arity$3 ? lazy_encrypt_with_x25519.cljs$core$IFn$_invoke$arity$3(public_key,content__$1,true) : lazy_encrypt_with_x25519.call(null,public_key,content__$1,true)),(function (encrypted){
return promesa.protocols._promise(logseq.graph_parser.utf8.decode(encrypted));
}));
}));
}));
}));
}));
}));
} else {
return promesa.core.resolved(content);

}
}));

(frontend.encrypt.encrypt.cljs$lang$maxFixedArity = 2);

frontend.encrypt.decrypt = (function frontend$encrypt$decrypt(var_args){
var G__42474 = arguments.length;
switch (G__42474) {
case 1:
return frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1 = (function (content){
return frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),content);
}));

(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,content){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.encrypt.encrypted_db_QMARK_(repo_url);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.encrypt.content_encrypted_QMARK_(content);
} else {
return and__5041__auto__;
}
})())){
var content__$1 = logseq.graph_parser.utf8.encode(content);
var temp__5718__auto__ = frontend.encrypt.get_secret_key(repo_url);
if(cljs.core.truth_(temp__5718__auto__)){
var secret_key = temp__5718__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.goog$module$shadow$loader.load(new cljs.core.Keyword(null,"age-encryption","age-encryption",-236825227)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.age_encryption !== 'undefined') && (typeof frontend.extensions.age_encryption.decrypt_with_x25519 !== 'undefined'))?(new cljs.core.Var((function (){
return frontend.extensions.age_encryption.decrypt_with_x25519;
}),cljs.core.with_meta(new cljs.core.Symbol("frontend.extensions.age-encryption","decrypt-with-x25519","frontend.extensions.age-encryption/decrypt-with-x25519",1395416998,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null),(function (lazy_decrypt_with_x25519){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((lazy_decrypt_with_x25519.cljs$core$IFn$_invoke$arity$2 ? lazy_decrypt_with_x25519.cljs$core$IFn$_invoke$arity$2(secret_key,content__$1) : lazy_decrypt_with_x25519.call(null,secret_key,content__$1)),(function (decrypted){
return promesa.protocols._promise(logseq.graph_parser.utf8.decode(decrypted));
}));
}));
}));
}));
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.encrypt",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("encrypt","empty-secret-key","encrypt/empty-secret-key",1319065223),["Can't find the secret key for repo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo_url)].join(''),new cljs.core.Keyword(null,"line","line",212345235),85], null)),null);
}
} else {
return promesa.core.resolved(content);

}
}));

(frontend.encrypt.decrypt.cljs$lang$maxFixedArity = 2);

frontend.encrypt.encrypt_with_passphrase = (function frontend$encrypt$encrypt_with_passphrase(passphrase,content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.goog$module$shadow$loader.load(new cljs.core.Keyword(null,"age-encryption","age-encryption",-236825227)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.age_encryption !== 'undefined') && (typeof frontend.extensions.age_encryption.encrypt_with_user_passphrase !== 'undefined'))?(new cljs.core.Var((function (){
return frontend.extensions.age_encryption.encrypt_with_user_passphrase;
}),cljs.core.with_meta(new cljs.core.Symbol("frontend.extensions.age-encryption","encrypt-with-user-passphrase","frontend.extensions.age-encryption/encrypt-with-user-passphrase",390908103,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null),(function (lazy_encrypt_with_user_passphrase){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.utf8.encode(content),(function (content__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__42475 = cljs.core.deref(lazy_encrypt_with_user_passphrase);
return (fexpr__42475.cljs$core$IFn$_invoke$arity$3 ? fexpr__42475.cljs$core$IFn$_invoke$arity$3(passphrase,content__$1,true) : fexpr__42475.call(null,passphrase,content__$1,true));
})(),(function (encrypted){
return promesa.protocols._promise(logseq.graph_parser.utf8.decode(encrypted));
}));
}));
}));
}));
}));
});
frontend.encrypt.decrypt_with_passphrase = (function frontend$encrypt$decrypt_with_passphrase(passphrase,content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.goog$module$shadow$loader.load(new cljs.core.Keyword(null,"age-encryption","age-encryption",-236825227)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.age_encryption !== 'undefined') && (typeof frontend.extensions.age_encryption.decrypt_with_user_passphrase !== 'undefined'))?(new cljs.core.Var((function (){
return frontend.extensions.age_encryption.decrypt_with_user_passphrase;
}),cljs.core.with_meta(new cljs.core.Symbol("frontend.extensions.age-encryption","decrypt-with-user-passphrase","frontend.extensions.age-encryption/decrypt-with-user-passphrase",-426771960,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null),(function (lazy_decrypt_with_user_passphrase){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.utf8.encode(content),(function (content__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((lazy_decrypt_with_user_passphrase.cljs$core$IFn$_invoke$arity$2 ? lazy_decrypt_with_user_passphrase.cljs$core$IFn$_invoke$arity$2(passphrase,content__$1) : lazy_decrypt_with_user_passphrase.call(null,passphrase,content__$1)),(function (decrypted){
return promesa.protocols._promise(logseq.graph_parser.utf8.decode(decrypted));
}));
}));
}));
}));
}));
});

//# sourceMappingURL=frontend.encrypt.js.map
