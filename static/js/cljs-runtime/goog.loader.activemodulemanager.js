goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.loader.activeModuleManager");
  goog.module.declareLegacyNamespace();
  const AbstractModuleManager = goog.require("goog.loader.AbstractModuleManager");
  const asserts = goog.require("goog.asserts");
  let moduleManager = null;
  let getDefault = null;
  function get() {
    if (!moduleManager && getDefault) {
      moduleManager = getDefault();
    }
    asserts.assert(moduleManager != null, "The module manager has not yet been set.");
    return moduleManager;
  }
  function set(newModuleManager) {
    asserts.assert(moduleManager == null, "The module manager cannot be redefined.");
    moduleManager = newModuleManager;
  }
  function setDefault(fn) {
    getDefault = fn;
  }
  function beforeLoadModuleCode(id) {
    if (moduleManager) {
      moduleManager.beforeLoadModuleCode(id);
    }
  }
  function setLoaded() {
    if (moduleManager) {
      moduleManager.setLoaded();
    }
  }
  function maybeInitialize(info, loadingModuleIds) {
    if (!moduleManager) {
      if (!getDefault) {
        return;
      }
      moduleManager = getDefault();
    }
    moduleManager.setAllModuleInfoString(info, loadingModuleIds);
  }
  const reset = function() {
    moduleManager = null;
  };
  exports = {get, set, setDefault, beforeLoadModuleCode, setLoaded, maybeInitialize, reset,};
  return exports;
});

//# sourceMappingURL=goog.loader.activemodulemanager.js.map
