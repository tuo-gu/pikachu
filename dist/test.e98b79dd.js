// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/* \u4E0B\u9762\u6211\u5C06\u753B\u4E00\u53EA\u76AE\u5361\u4E18 */\n/* \u9996\u5148\u662F\u7ED9\u5B83\u4E00\u4E2A\u9EC4\u8272\u7684\u76AE\u80A4 */\n.skin{\n  position: relative;\n  height: 100vh;\n  background-color: #f7d40e;\n}\n.move{\n  position: relative;\n  top:-7vh;\n}\n@media (max-width:500px){\n  .move{\n    top:-10vh;\n  }\n}\n/*\u7136\u540E\u753B\u4E00\u4E2A\u9F3B\u5B50*/\n.nose{\n  position: absolute;\n  left: 50%;\n  top: 180px;\n  border-top: 14px solid black;\n  margin-left:-15px;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-radius: 50%  50% 0 0;\n  width: 0;\n  height: 0;\n}\n\n/*\u7ED9\u5B83\u753B\u4E00\u53CC\u773C\u775B*/\n.eye.left{\n  transform:translateX(-100px);\n}\n.eye.right{\n  transform:translateX(100px);\n}\n.eye{\n  left: 50%;\n  top: 150px;\n  margin-left: -25px;\n  position:absolute;\n  /*\u5148\u753B\u4E24\u4E2A\u65B9\u6846*/\n  border: 2px solid #000;\n  width: 50px;\n  height: 50px;\n  /*\u518D\u6539\u6210\u5706\u5F62*/\n  border-radius: 50%;\n  /*\u7ED9\u773C\u775B\u4E0A\u80CC\u666F\u8272*/\n  background: rgb(39, 37, 37);\n}\n\n/*\u8FD9\u65F6\u5019\u52A0\u4E24\u4E2A\u660E\u4EAE\u7684\u773C\u73E0\u5B50*/\n\n.eye::before{\n  content: '';\n  display: block;\n  border: 2px solid #000;\n  width:25px ;\n  height: 25px;\n  background: white;\n  border-radius: 50%;\n  position: relative;\n  left: 6px;\n  top: -1px;\n}\n/*\u7ED9\u5B83\u7684\u5C0F\u8138\u86CB\u4E0A\u52A0\u4E24\u4E2A\u7EA2\u8272\u7684\u8138\u988A*/\n.face.left{\n  transform:translateX(-140px);\n}\n.face.right{\n  transform:translateX(140px);\n}\n.face{\n  position:absolute;\n  margin-left: -40px;\n  left: 50%;\n  top: 250px;\n  border: 2px solid #000;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: red;\n}\n\n\n.mouth{\n  width: 160px;\n  height: 200px;\n  margin-left: -80px;\n  position: absolute;\n  left: 50%;\n  top:200px;\n}\n.mouth .up .lip{\n  background-color: #f7d40e;\n  border: 2px solid #000;\n  width: 78px;\n  height: 25px;\n  border-top: none;\n  position: absolute;\n  z-index: 1;\n}\n.mouth .up .lip.right{\n  right: 0;\n  border-radius: 0 0 25px 0;\n  border-left: none;\n  transform: rotate(20deg);\n}\n.mouth .up .lip.left{\n  left: 0;\n  border-radius: 0 0 0 25px ;\n  border-right: none;\n  transform: rotate(-20deg);\n}\n.mouth .down {\n  height: 160px;\n  position: absolute;\n  width: 100%;\n  overflow: hidden;\n  top:10px\n}\n.mouth .down .yuan1{\n  border:2px solid #000;\n  position:absolute;\n  left:50%;\n  transform: translate(-50%,-80%);\n  height: 800px;\n  width: 140px;\n  border-radius: 200px/600px;\n  background: rgb(156,30,12);\n  overflow: hidden;\n}\n.mouth .down .yuan2{\n  background: rgb(235, 132, 149);\n  height: 130px;\n  width: 140px;\n  position:absolute;\n  bottom: -10px;\n  border-radius: 50%;\n  \n}\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _css.default;
var demo1 = document.querySelector('#demo1');
var demo2 = document.querySelector('#demo2');
var stop = document.querySelector('#stop');
var quick = document.querySelector('#quick');
var slow = document.querySelector('#slow');
var play = document.querySelector('#play');
var speed = document.querySelector('#speed');
var n = 1;
var time = 20;
var speedSave = 0;
var oldTime = time;

var pause = function pause() {
  window.clearInterval(id);
};

var show = function show() {
  n += 1;
  demo1.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo1.scrollTop = demo1.scrollHeight; //标签是id的情况下，控制滚动高度

  if (n > string.length) {
    pause();
    console.log("end");
    return;
  }
};

var speedShow = function speedShow(times, a) {
  if (times < time) {
    a -= 1;
  } else if (times > time) {
    a += 1;
  } else if (times = time) {
    a = 0;
  } else {
    console.log("xxx");
  }

  speed.innerHTML = "倍速:" + (a === 0 ? "默认" : a + "倍");
  return speedSave = a;
};

var id = setInterval(show, time); //首次执行

speedShow();

var run = function run() {
  id = setInterval(show, time);
};

var butStyle = function butStyle(a) {
  stop.style.display = a;
  quick.style.display = a;
  slow.style.display = a;
  speed.style.display = a;
};

$(quick).on('click', function () {
  oldTime = time;
  console.log("quick");
  pause();
  time <= 0 ? time = 0 : time -= 10;
  run();
  speedShow(oldTime, speedSave);
  return oldTime;
});
$(slow).on('click', function () {
  console.log("slow");
  oldTime = time;
  pause();
  time <= 30 ? time += 20 : time += 10;
  run();
  speedShow(oldTime, speedSave);
  return oldTime;
});
$(stop).on('click', function () {
  console.log("stop");
  pause();
  butStyle("none");
  play.style.display = "block";
});
$(play).on('click', function () {
  console.log("play");
  butStyle("block");
  play.style.display = "none";
  run();
});
},{"./css.js":"css.js"}],"C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52591" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map