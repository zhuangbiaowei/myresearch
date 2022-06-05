goog.provide('frontend.regex');
frontend.regex.re_specials = /([\-\\/\\\^\$\*\+\?\.\(\)\|\[\]\{\}])/;
/**
 * Escapes regex characters in string, e.g., 'C++' -> 'C\+\+'.
 */
frontend.regex.escape = (function frontend$regex$escape(s){
return clojure.string.replace(s,frontend.regex.re_specials,"\\$1");
});

//# sourceMappingURL=frontend.regex.js.map
