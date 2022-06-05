goog.provide('frontend.extensions.age_encryption');
var module$node_modules$regenerator_runtime$runtime=shadow.js.require("module$node_modules$regenerator_runtime$runtime", {});
var module$node_modules$$kanru$rage_wasm$dist$index=shadow.js.require("module$node_modules$$kanru$rage_wasm$dist$index", {});
frontend.extensions.age_encryption.keygen = (function frontend$extensions$age_encryption$keygen(){
return module$node_modules$$kanru$rage_wasm$dist$index.keygen();
});
frontend.extensions.age_encryption.encrypt_with_x25519 = (function frontend$extensions$age_encryption$encrypt_with_x25519(public_key,content,armor){
return module$node_modules$$kanru$rage_wasm$dist$index.encrypt_with_x25519(public_key,content,armor);
});
frontend.extensions.age_encryption.decrypt_with_x25519 = (function frontend$extensions$age_encryption$decrypt_with_x25519(secret_key,content){
return module$node_modules$$kanru$rage_wasm$dist$index.decrypt_with_x25519(secret_key,content);
});
frontend.extensions.age_encryption.encrypt_with_user_passphrase = (function frontend$extensions$age_encryption$encrypt_with_user_passphrase(passphrase,content,armor){
return module$node_modules$$kanru$rage_wasm$dist$index.encrypt_with_user_passphrase(passphrase,content,armor);
});
frontend.extensions.age_encryption.decrypt_with_user_passphrase = (function frontend$extensions$age_encryption$decrypt_with_user_passphrase(passphrase,content){
return module$node_modules$$kanru$rage_wasm$dist$index.decrypt_with_user_passphrase(passphrase,content);
});

//# sourceMappingURL=frontend.extensions.age_encryption.js.map
