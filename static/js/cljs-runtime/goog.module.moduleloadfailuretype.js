goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.module.ModuleLoadFailureType");
  goog.module.declareLegacyNamespace();
  exports = {UNAUTHORIZED:0, CONSECUTIVE_FAILURES:1, TIMEOUT:2, OLD_CODE_GONE:3, INIT_ERROR:4};
  exports.getReadableError = function(ft) {
    if (ft === null) {
      return "No error type specified";
    }
    switch(ft) {
      case exports.UNAUTHORIZED:
        return "Unauthorized";
      case exports.CONSECUTIVE_FAILURES:
        return "Consecutive load failures";
      case exports.TIMEOUT:
        return "Timed out";
      case exports.OLD_CODE_GONE:
        return "Out of date module id";
      case exports.INIT_ERROR:
        return "Init error";
      default:
        return `Unknown failure type ${ft}`;
    }
  };
  return exports;
});

//# sourceMappingURL=goog.module.moduleloadfailuretype.js.map
