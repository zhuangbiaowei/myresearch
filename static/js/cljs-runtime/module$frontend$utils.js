var module$node_modules$path$path = shadow.js.require("module$node_modules$path$path", {});
var module$node_modules$$capacitor$status_bar$dist$plugin_cjs = shadow.js.require("module$node_modules$$capacitor$status_bar$dist$plugin_cjs", {});
var module$node_modules$$capacitor$clipboard$dist$plugin_cjs = shadow.js.require("module$node_modules$$capacitor$clipboard$dist$plugin_cjs", {});
if (typeof window === "undefined") {
  global.window = {};
}
var closest$$module$frontend$utils = (target, selector) => {
  for (; target;) {
    if (target.matches && target.matches(selector)) {
      return target;
    }
    target = target.parentNode;
  }
  return null;
};
var getOffsetRect$$module$frontend$utils = elem => {
  const box = elem.getBoundingClientRect();
  const body = document.body;
  const docElem = document.documentElement;
  const scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
  const clientTop = docElem.clientTop || body.clientTop || 0;
  const clientLeft = docElem.clientLeft || body.clientLeft || 0;
  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;
  return {top:Math.round(top), left:Math.round(left)};
};
var focus$$module$frontend$utils = elem => elem === document.activeElement && document.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
var timeConversion$$module$frontend$utils = millisec => {
  let seconds = (millisec / 1000).toFixed(0);
  let minutes = (millisec / (1000 * 60)).toFixed(0);
  let hours = (millisec / (1000 * 60 * 60)).toFixed(1);
  let days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
  if (seconds < 60) {
    return seconds + "s";
  } else if (minutes < 60) {
    return minutes + "m";
  } else if (hours < 24) {
    return hours + "h";
  } else {
    return days + "d";
  }
};
var getSelectionText$$module$frontend$utils = () => {
  const selection = (window.getSelection() || "").toString().trim();
  if (selection) {
    return selection;
  }
  const activeElement = window.document.activeElement;
  if (activeElement) {
    if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") {
      const el = activeElement;
      return el.value.slice(el.selectionStart || 0, el.selectionEnd || 0);
    }
  }
  return "";
};
var getFiles$$module$frontend$utils = async(dirHandle, recursive, cb, path = dirHandle.name) => {
  const dirs = [];
  const files = [];
  for await (const entry of dirHandle.values()) {
    const nestedPath = `${path}/${entry.name}`;
    if (entry.kind === "file") {
      cb(nestedPath, entry);
      files.push(entry.getFile().then(file => {
        Object.defineProperty(file, "webkitRelativePath", {configurable:true, enumerable:true, get:() => nestedPath,});
        Object.defineProperty(file, "handle", {configurable:true, enumerable:true, get:() => entry,});
        return file;
      }));
    } else if (entry.kind === "directory" && recursive) {
      cb(nestedPath, entry);
      dirs.push(getFiles$$module$frontend$utils(entry, recursive, cb, nestedPath));
    }
  }
  return [await Promise.all(dirs), await Promise.all(files)];
};
var verifyPermission$$module$frontend$utils = async(handle, readWrite) => {
  const options = {};
  if (readWrite) {
    options.mode = "readwrite";
  }
  if (await handle.queryPermission(options) === "granted") {
    return;
  }
  if (await handle.requestPermission(options) === "granted") {
    return;
  }
  throw new Error("Permission is not granted");
};
var openDirectory$$module$frontend$utils = async(options = {}, cb) => {
  options.recursive = options.recursive || false;
  const handle = await window.showDirectoryPicker({mode:"readwrite"});
  const _ask = await verifyPermission$$module$frontend$utils(handle, true);
  return [handle, getFiles$$module$frontend$utils(handle, options.recursive, cb)];
};
var writeFile$$module$frontend$utils = async(fileHandle, contents) => {
  const writable = await fileHandle.createWritable();
  if (contents instanceof ReadableStream) {
    await contents.pipeTo(writable);
  } else {
    await writable.write(contents);
    await writable.close();
  }
};
var nfsSupported$$module$frontend$utils = () => {
  if ("chooseFileSystemEntries" in self) {
    return "chooseFileSystemEntries";
  } else if ("showOpenFilePicker" in self) {
    return "showOpenFilePicker";
  }
  return false;
};
var inputTypes$$module$frontend$utils = [window.HTMLInputElement, window.HTMLSelectElement, window.HTMLTextAreaElement,];
var triggerInputChange$$module$frontend$utils = (node, value = "", name = "change") => {
  if (inputTypes$$module$frontend$utils.indexOf(node.__proto__.constructor) > -1) {
    const setValue = Object.getOwnPropertyDescriptor(node.__proto__, "value").set;
    const event = new Event("change", {bubbles:true});
    setValue.call(node, value);
    node.dispatchEvent(event);
  }
};
var reversePatch$$module$frontend$utils = patch => patch.map(patchObj => ({diffs:patchObj.diffs.map(([op, val]) => [op * -1, val]), start1:patchObj.start2, start2:patchObj.start1, length1:patchObj.length2, length2:patchObj.length1}));
var win32$$module$frontend$utils = path => {
  const splitDeviceRe = /^([a-zA-Z]:|[\\/]{2}[^\\/]+[\\/]+[^\\/]+)?([\\/])?([\s\S]*?)$/;
  const result = splitDeviceRe.exec(path);
  const device = result[1] || "";
  const isUnc = Boolean(device && device.charAt(1) !== ":");
  return Boolean(result[2] || isUnc);
};
var ios$$module$frontend$utils = () => ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
var getClipText$$module$frontend$utils = (cb, errorHandler) => {
  navigator.permissions.query({name:"clipboard-read"}).then(result => {
    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.readText().then(text => {
        cb(text);
      }).catch(err => {
        errorHandler(err);
      });
    }
  });
};
var writeClipboard$$module$frontend$utils = ({text, html}) => {
  if (typeof navigator.permissions == "undefined") {
    module$node_modules$$capacitor$clipboard$dist$plugin_cjs.Clipboard.write({string:text});
    return;
  }
  navigator.permissions.query({name:"clipboard-write"}).then(result => {
    if (result.state != "granted" && result.state != "prompt") {
      console.debug("Copy without `clipboard-write` permission:", text);
      return;
    }
    let promise_written = null;
    if (typeof ClipboardItem !== "undefined") {
      let blob = new Blob([text], {type:["text/plain"]});
      let data = [new ClipboardItem({["text/plain"]:blob})];
      if (html) {
        let richBlob = new Blob([html], {type:["text/html"]});
        data = [new ClipboardItem({["text/plain"]:blob, ["text/html"]:richBlob})];
      }
      promise_written = navigator.clipboard.write(data);
    } else {
      console.debug("Degraded copy without `ClipboardItem` support:", text);
      promise_written = navigator.clipboard.writeText(text);
    }
    promise_written.then(() => {
    }).catch(e => {
      console.log(e, "fail");
    });
  });
};
var toPosixPath$$module$frontend$utils = input => input && input.replace(/\\+/g, "/");
var nodePath$$module$frontend$utils = Object.assign({}, module$node_modules$path$path, {basename(input) {
  input = toPosixPath$$module$frontend$utils(input);
  return module$node_modules$path$path.basename(input);
}, name(input) {
  input = toPosixPath$$module$frontend$utils(input);
  return module$node_modules$path$path.parse(input).name;
}, dirname(input) {
  input = toPosixPath$$module$frontend$utils(input);
  return module$node_modules$path$path.dirname(input);
}, extname(input) {
  input = toPosixPath$$module$frontend$utils(input);
  return module$node_modules$path$path.extname(input);
}});
/** @const */ 
var module$frontend$utils = {};
/** @const */ 
module$frontend$utils.closest = closest$$module$frontend$utils;
/** @const */ 
module$frontend$utils.focus = focus$$module$frontend$utils;
/** @const */ 
module$frontend$utils.getClipText = getClipText$$module$frontend$utils;
/** @const */ 
module$frontend$utils.getFiles = getFiles$$module$frontend$utils;
/** @const */ 
module$frontend$utils.getOffsetRect = getOffsetRect$$module$frontend$utils;
/** @const */ 
module$frontend$utils.getSelectionText = getSelectionText$$module$frontend$utils;
/** @const */ 
module$frontend$utils.ios = ios$$module$frontend$utils;
/** @const */ 
module$frontend$utils.nfsSupported = nfsSupported$$module$frontend$utils;
/** @const */ 
module$frontend$utils.nodePath = nodePath$$module$frontend$utils;
/** @const */ 
module$frontend$utils.openDirectory = openDirectory$$module$frontend$utils;
/** @const */ 
module$frontend$utils.reversePatch = reversePatch$$module$frontend$utils;
/** @const */ 
module$frontend$utils.timeConversion = timeConversion$$module$frontend$utils;
/** @const */ 
module$frontend$utils.toPosixPath = toPosixPath$$module$frontend$utils;
/** @const */ 
module$frontend$utils.triggerInputChange = triggerInputChange$$module$frontend$utils;
/** @const */ 
module$frontend$utils.verifyPermission = verifyPermission$$module$frontend$utils;
/** @const */ 
module$frontend$utils.win32 = win32$$module$frontend$utils;
/** @const */ 
module$frontend$utils.writeClipboard = writeClipboard$$module$frontend$utils;
/** @const */ 
module$frontend$utils.writeFile = writeFile$$module$frontend$utils;

$CLJS.module$frontend$utils=module$frontend$utils;
//# sourceMappingURL=module$frontend$utils.js.map
