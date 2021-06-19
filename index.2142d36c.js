// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1j6wU":[function(require,module,exports) {

var Refresh = require('react-refresh/runtime');

Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
  return function(type) {
    return type;
  };
};
},{"react-refresh/runtime":"592mh"}],"592mh":[function(require,module,exports) {
"use strict";
if ("development" === 'production') {
  module.exports = require('./cjs/react-refresh-runtime.production.min.js');
} else {
  module.exports = require('./cjs/react-refresh-runtime.development.js');
}

},{"./cjs/react-refresh-runtime.development.js":"2rNh6"}],"2rNh6":[function(require,module,exports) {
/** @license React v0.9.0
* react-refresh-runtime.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
"use strict";
if ("development" !== "production") {
  (function () {
    "use strict";
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    if (typeof Symbol === 'function' && Symbol.for) {
      var symbolFor = Symbol.for;
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
      REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
      REACT_PROFILER_TYPE = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      REACT_SCOPE_TYPE = symbolFor('react.scope');
      REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap();
    // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap();
    // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = [];
    // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map();
    // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set();
    // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set();
    // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = // $FlowIssue
    typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
      if (signature.fullKey !== null) {
        return signature.fullKey;
      }
      var fullKey = signature.ownKey;
      var hooks;
      try {
        hooks = signature.getCustomHooks();
      } catch (err) {
        // This can happen in an edge case, e.g. if expression like Foo.useSomething
        // depends on Foo which is lazily initialized during rendering.
        // In that case just assume we'll have to remount.
        signature.forceReset = true;
        signature.fullKey = fullKey;
        return fullKey;
      }
      for (var i = 0; i < hooks.length; i++) {
        var hook = hooks[i];
        if (typeof hook !== 'function') {
          // Something's wrong. Assume we need to remount.
          signature.forceReset = true;
          signature.fullKey = fullKey;
          return fullKey;
        }
        var nestedHookSignature = allSignaturesByType.get(hook);
        if (nestedHookSignature === undefined) {
          // No signature means Hook wasn't in the source code, e.g. in a library.
          // We'll skip it because we can assume it won't change during this session.
          continue;
        }
        var nestedHookKey = computeFullKey(nestedHookSignature);
        if (nestedHookSignature.forceReset) {
          signature.forceReset = true;
        }
        fullKey += '\n---\n' + nestedHookKey;
      }
      signature.fullKey = fullKey;
      return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
      var prevSignature = allSignaturesByType.get(prevType);
      var nextSignature = allSignaturesByType.get(nextType);
      if (prevSignature === undefined && nextSignature === undefined) {
        return true;
      }
      if (prevSignature === undefined || nextSignature === undefined) {
        return false;
      }
      if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
        return false;
      }
      if (nextSignature.forceReset) {
        return false;
      }
      return true;
    }
    function isReactClass(type) {
      return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
      if (isReactClass(prevType) || isReactClass(nextType)) {
        return false;
      }
      if (haveEqualSignatures(prevType, nextType)) {
        return true;
      }
      return false;
    }
    function resolveFamily(type) {
      // Only check updated types to keep lookups fast.
      return updatedFamiliesByType.get(type);
    }
    // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
      var clone = new Map();
      map.forEach(function (value, key) {
        clone.set(key, value);
      });
      return clone;
    }
    function cloneSet(set) {
      var clone = new Set();
      set.forEach(function (value) {
        clone.add(value);
      });
      return clone;
    }
    function performReactRefresh() {
      if (pendingUpdates.length === 0) {
        return null;
      }
      if (isPerformingRefresh) {
        return null;
      }
      isPerformingRefresh = true;
      try {
        var staleFamilies = new Set();
        var updatedFamilies = new Set();
        var updates = pendingUpdates;
        pendingUpdates = [];
        updates.forEach(function (_ref) {
          var family = _ref[0], nextType = _ref[1];
          // Now that we got a real edit, we can create associations
          // that will be read by the React reconciler.
          var prevType = family.current;
          updatedFamiliesByType.set(prevType, family);
          updatedFamiliesByType.set(nextType, family);
          family.current = nextType;
          // Determine whether this should be a re-render or a re-mount.
          if (canPreserveStateBetween(prevType, nextType)) {
            updatedFamilies.add(family);
          } else {
            staleFamilies.add(family);
          }
        });
        // TODO: rename these fields to something more meaningful.
        var update = {
          updatedFamilies: updatedFamilies,
          // Families that will re-render preserving state
          staleFamilies: staleFamilies
        };
        helpersByRendererID.forEach(function (helpers) {
          // Even if there are no roots, set the handler on first update.
          // This ensures that if *new* roots are mounted, they'll use the resolve handler.
          helpers.setRefreshHandler(resolveFamily);
        });
        var didError = false;
        var firstError = null;
        // We snapshot maps and sets that are mutated during commits.
        // If we don't do this, there is a risk they will be mutated while
        // we iterate over them. For example, trying to recover a failed root
        // may cause another root to be added to the failed list -- an infinite loop.
        var failedRootsSnapshot = cloneSet(failedRoots);
        var mountedRootsSnapshot = cloneSet(mountedRoots);
        var helpersByRootSnapshot = cloneMap(helpersByRoot);
        failedRootsSnapshot.forEach(function (root) {
          var helpers = helpersByRootSnapshot.get(root);
          if (helpers === undefined) {
            throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
          }
          if (!failedRoots.has(root)) {}
          if (rootElements === null) {
            return;
          }
          if (!rootElements.has(root)) {
            return;
          }
          var element = rootElements.get(root);
          try {
            helpers.scheduleRoot(root, element);
          } catch (err) {
            if (!didError) {
              didError = true;
              firstError = err;
            }
          }
        });
        mountedRootsSnapshot.forEach(function (root) {
          var helpers = helpersByRootSnapshot.get(root);
          if (helpers === undefined) {
            throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
          }
          if (!mountedRoots.has(root)) {}
          try {
            helpers.scheduleRefresh(root, update);
          } catch (err) {
            if (!didError) {
              didError = true;
              firstError = err;
            }
          }
        });
        if (didError) {
          throw firstError;
        }
        return update;
      } finally {
        isPerformingRefresh = false;
      }
    }
    function register(type, id) {
      {
        if (type === null) {
          return;
        }
        if (typeof type !== 'function' && typeof type !== 'object') {
          return;
        }
        // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) {
          return;
        }
        // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
          family = {
            current: type
          };
          allFamiliesByID.set(id, family);
        } else {
          pendingUpdates.push([family, type]);
        }
        allFamiliesByType.set(type, family);
        // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              register(type.render, id + '$render');
              break;
            case REACT_MEMO_TYPE:
              register(type.type, id + '$type');
              break;
          }
        }
      }
    }
    function setSignature(type, key) {
      var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
      {
        allSignaturesByType.set(type, {
          forceReset: forceReset,
          ownKey: key,
          fullKey: null,
          getCustomHooks: getCustomHooks || (function () {
            return [];
          })
        });
      }
    }
    // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
      {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) {
          computeFullKey(signature);
        }
      }
    }
    function getFamilyByID(id) {
      {
        return allFamiliesByID.get(id);
      }
    }
    function getFamilyByType(type) {
      {
        return allFamiliesByType.get(type);
      }
    }
    function findAffectedHostInstances(families) {
      {
        var affectedInstances = new Set();
        mountedRoots.forEach(function (root) {
          var helpers = helpersByRoot.get(root);
          if (helpers === undefined) {
            throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
          }
          var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
          instancesForRoot.forEach(function (inst) {
            affectedInstances.add(inst);
          });
        });
        return affectedInstances;
      }
    }
    function injectIntoGlobalHook(globalObject) {
      {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
          // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
          // Note that in this case it's important that renderer code runs *after* this method call.
          // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
          var nextID = 0;
          globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
            renderers: new Map(),
            supportsFiber: true,
            inject: function (injected) {
              return nextID++;
            },
            onScheduleFiberRoot: function (id, root, children) {},
            onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},
            onCommitFiberUnmount: function () {}
          };
        }
        // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function (injected) {
          var id = oldInject.apply(this, arguments);
          if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
            // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
          }
          return id;
        };
        // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function (injected, id) {
          if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
            // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
          }
        });
        // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || (function () {});
        hook.onScheduleFiberRoot = function (id, root, children) {
          if (!isPerformingRefresh) {
            // If it was intentionally scheduled, don't attempt to restore.
            // This includes intentionally scheduled unmounts.
            failedRoots.delete(root);
            if (rootElements !== null) {
              rootElements.set(root, children);
            }
          }
          return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {
          var helpers = helpersByRendererID.get(id);
          if (helpers === undefined) {
            return;
          }
          helpersByRoot.set(root, helpers);
          var current = root.current;
          var alternate = current.alternate;
          // We need to determine whether this root has just (un)mounted.
          // This logic is copy-pasted from similar logic in the DevTools backend.
          // If this breaks with some refactoring, you'll want to update DevTools too.
          if (alternate !== null) {
            var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
            var isMounted = current.memoizedState != null && current.memoizedState.element != null;
            if (!wasMounted && isMounted) {
              // Mount a new root.
              mountedRoots.add(root);
              failedRoots.delete(root);
            } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {
              // Unmount an existing root.
              mountedRoots.delete(root);
              if (didError) {
                // We'll remount it on future edits.
                failedRoots.add(root);
              } else {
                helpersByRoot.delete(root);
              }
            } else if (!wasMounted && !isMounted) {
              if (didError) {
                // We'll remount it on future edits.
                failedRoots.add(root);
              }
            }
          } else {
            // Mount a new root.
            mountedRoots.add(root);
          }
          return oldOnCommitFiberRoot.apply(this, arguments);
        };
      }
    }
    function hasUnrecoverableErrors() {
      // TODO: delete this after removing dependency in RN.
      return false;
    }
    // Exposed for testing.
    function _getMountedRootCount() {
      {
        return mountedRoots.size;
      }
    }
    // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    // 
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    // 
    // function Hello() {
    // const [foo, setFoo] = useState(0);
    // const value = useCustomHook();
    // _s(); /* Second call triggers collecting the custom Hook list.
    // * This doesn't happen during the module evaluation because we
    // * don't want to change the module order with inline requires.
    // * Next calls are noops. */
    // return <h1>Hi</h1>;
    // }
    // 
    // /* First call specifies the signature: */
    // _s(
    // Hello,
    // 'useState{[foo, setFoo]}(0)',
    // () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
      {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function (type, key, forceReset, getCustomHooks) {
          switch (status) {
            case 'needsSignature':
              if (type !== undefined) {
                // If we received an argument, this is the initial registration call.
                savedType = type;
                hasCustomHooks = typeof getCustomHooks === 'function';
                setSignature(type, key, forceReset, getCustomHooks);
                // The next call we expect is from inside a function, to fill in the custom Hooks.
                status = 'needsCustomHooks';
              }
              break;
            case 'needsCustomHooks':
              if (hasCustomHooks) {
                collectCustomHooksForSignature(savedType);
              }
              status = 'resolved';
              break;
          }
          return type;
        };
      }
    }
    function isLikelyComponentType(type) {
      {
        switch (typeof type) {
          case 'function':
            {
              // First, deal with classes.
              if (type.prototype != null) {
                if (type.prototype.isReactComponent) {
                  // React class.
                  return true;
                }
                var ownNames = Object.getOwnPropertyNames(type.prototype);
                if (ownNames.length > 1 || ownNames[0] !== 'constructor') {
                  // This looks like a class.
                  return false;
                }
                // eslint-disable-next-line no-proto
                if (type.prototype.__proto__ !== Object.prototype) {
                  // It has a superclass.
                  return false;
                }
              }
              // For plain functions and arrows, use name as a heuristic.
              var name = type.name || type.displayName;
              return typeof name === 'string' && (/^[A-Z]/).test(name);
            }
          case 'object':
            {
              if (type != null) {
                switch (type.$$typeof) {
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_MEMO_TYPE:
                    // Definitely React components.
                    return true;
                  default:
                    return false;
                }
              }
              return false;
            }
          default:
            {
              return false;
            }
        }
      }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
  })();
}

},{}],"21c8X":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "062e9a7565ca912a5f7d6b832142d36c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3L8AI":[function(require,module,exports) {
var _graphJs = require("./graph.js");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _graphJsDefault = _parcelHelpers.interopDefault(_graphJs);
require("./codeFromGraph.js");
canv = document.getElementById("myCanvas");
canv.width = window.innerWidth;
canv.height = window.innerHeight;
var context = canv.getContext("2d");
var rect = canv.getBoundingClientRect();
var graph = new _graphJsDefault.default();
// UI variables
var show_degree = false;
var show_id = false;
onDegree = () => {
  var checkbox = document.getElementById("degree");
  show_degree = checkbox.checked;
};
onNodeId = () => {
  var checkbox = document.getElementById("node_id");
  show_id = checkbox.checked;
};
modeChanger = () => {
  var selection = document.getElementById("shape").value;
  console.log(selection);
  var disabled_controls = ["solid_cube", "square"];
  if (disabled_controls.includes(selection)) height_slider.disabled = "disabled"; else height_slider.disabled = "";
  if (selection == "solid_cube") {
    width_slider.max = 15;
    width_slider.value = 10;
    n = 10;
  }
  if (selection == "square") {
    width_slider.max = 40;
    width_slider.value = 10;
    n = 10;
  }
  if (selection == "sheet") {
    width_slider.max = 40;
    height_slider.max = 40;
    width_slider.value = 10;
    height_slider.value = 20;
    n = 10;
    m = 20;
  }
  if (selection == "cylinder") {
    width_slider.max = 40;
    height_slider.max = 40;
    width_slider.value = 10;
    height_slider.value = 20;
    n = 10;
    m = 20;
  }
  if (selection == "torus") {
    width_slider.max = 40;
    height_slider.max = 40;
    width_slider.value = 10;
    height_slider.value = 20;
    n = 10;
    m = 20;
  }
  if (selection == "klein") {
    width_slider.max = 40;
    height_slider.max = 40;
    width_slider.value = 30;
    height_slider.value = 15;
    n = 30;
    m = 15;
  }
  if (selection == "mobius") {
    width_slider.max = 40;
    height_slider.max = 40;
    width_slider.value = 10;
    height_slider.value = 20;
    n = 10;
    m = 20;
  }
  mode = selection;
  generate();
};
generate = function () {
  console.log("a");
  if (mode == "solid_cube") graph.generateSolidCube(n);
  if (mode == "square") graph.generateSquare(n);
  if (mode == "sheet") graph.generateSheet(n, m);
  if (mode == "cylinder") graph.generateCyllinder(n, m);
  if (mode == "torus") graph.generateTorus(n, m);
  if (mode == "klein") graph.generateKlein(n, m);
  if (mode == "mobius") graph.generateMobius(n, m);
};
n = 10;
m = 20;
mode = "torus";
generate();
var width_slider = document.getElementById("width_slider");
var height_slider = document.getElementById("height_slider");
// height_slider.disabled = "disabled";
width_slider.oninput = function () {
  n = this.value;
  generate();
};
height_slider.oninput = function () {
  m = this.value;
  generate();
};
var drawNodes = function (graph, context) {
  graph.nodes.forEach(function (node) {
    context.beginPath();
    context.fillStyle = "black";
    context.arc(node.x, node.y, 5, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    context.font = "14px Arial";
    if (show_id) context.fillText(node.id, node.x + 5, node.y - 5);
    context.fillStyle = "red";
    context.font = "20px Arial";
    if (show_degree) context.fillText(node.degree, node.x - 20, node.y + 20);
  });
};
var drawEdges = function (graph, context) {
  graph.edges.forEach(function (edge) {
    context.beginPath();
    context.strokeStyle = "black";
    context.moveTo(edge.node1.x, edge.node1.y);
    context.lineTo(edge.node2.x, edge.node2.y);
    context.stroke();
  });
};
var update = () => {
  graph.edges.forEach(function (edge) {
    if (edge.node1 == undefined || edge.node2 == undefined) {
      console.log("undefined edge");
      return;
    }
    if (edge.node1.x == edge.node2.x && edge.node1.y == edge.node2.y) {
      console.log("invalid edge encountered");
      return;
    }
    let radiusx = edge.node2.x - edge.node1.x;
    let radiusy = edge.node2.y - edge.node1.y;
    let distance = Math.sqrt(radiusx * radiusx + radiusy * radiusy) + 1;
    if (distance == 0) {
      console.log("zero distance encountered");
    }
    let unitradiusx = radiusx / distance;
    let unitradiusy = radiusy / distance;
    let minusradiusx = -1 * unitradiusx;
    let minusradiusy = -1 * unitradiusy;
    var c1 = 0.1;
    var c2 = 1;
    edge.node1.nextX += unitradiusx * (c1 * Math.log(distance / c2) + 4 * distance) * 1 / 60;
    edge.node1.nextY += unitradiusy * (c1 * Math.log(distance / c2) + 4 * distance) * 1 / 60;
    edge.node2.nextX += minusradiusx * (c1 * Math.log(distance / c2) + 4 * distance) * 1 / 60;
    edge.node2.nextY += minusradiusy * (c1 * Math.log(distance / c2) + 4 * distance) * 1 / 60;
  });
  for (var i = 0; i < graph.nodes.length; i++) {
    for (var j = 0; j < graph.nodes.length; j++) {
      if (i == j) continue;
      let node = graph.nodes[i];
      let node2 = graph.nodes[j];
      if (node == undefined || node2 == undefined) {
        console.log("undefined edge");
        return;
      }
      let radiusx = node.x - node2.x;
      let radiusy = node.y - node2.y;
      let distance = Math.sqrt(radiusx * radiusx + radiusy * radiusy);
      let unitradiusx = radiusx / distance;
      let unitradiusy = radiusy / distance;
      let magnitude = 1000 / distance;
      node.nextX += unitradiusx * magnitude * 1 / 60;
      node.nextY += unitradiusy * magnitude * 1 / 60;
    }
  }
  for (var i = 0; i < graph.nodes.length; i++) {
    graph.nodes[i].x = graph.nodes[i].nextX;
    graph.nodes[i].y = graph.nodes[i].nextY;
  }
};
var draw = () => {
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canv.width, canv.height);
  context.restore();
  drawNodes(graph, context);
  drawEdges(graph, context);
};
var lastX = canv.width / 2, lastY = canv.height / 2;
var dragStart, dragged;
var lastX = canv.width / 2, lastY = canv.height / 2;
var dragStart, dragged;
canv.addEventListener("mousedown", function (evt) {
  document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = "none";
  lastX = evt.offsetX || evt.pageX - canv.offsetLeft;
  lastY = evt.offsetY || evt.pageY - canv.offsetTop;
  dragStart = context.transformedPoint(lastX, lastY);
  dragged = false;
}, false);
canv.addEventListener("mousemove", function (evt) {
  lastX = evt.offsetX || evt.pageX - canv.offsetLeft;
  lastY = evt.offsetY || evt.pageY - canv.offsetTop;
  dragged = true;
  if (dragStart) {
    var pt = context.transformedPoint(lastX, lastY);
    context.translate(pt.x - dragStart.x, pt.y - dragStart.y);
    draw();
  }
}, false);
canv.addEventListener("mouseup", function (evt) {
  dragStart = null;
}, false);
canv.addEventListener("dblclick", () => {
  context.setTransform(1, 0, 0, 1, 0, 0);
  var translateX = canv.width / 2;
  var translateY = canv.height / 2;
  context.translate(translateX, translateY);
});
var scaleFactor = 1.1;
var zoom = function (clicks) {
  var pt = context.transformedPoint(lastX, lastY);
  context.translate(pt.x, pt.y);
  var factor = Math.pow(scaleFactor, clicks);
  context.scale(factor, factor);
  context.translate(-pt.x, -pt.y);
  draw();
};
var handleScroll = function (evt) {
  var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
  if (delta) {
    zoom(delta);
  }
  return evt.preventDefault() && false;
};
canv.addEventListener("DOMMouseScroll", handleScroll, false);
canv.addEventListener("mousewheel", handleScroll, false);
var updateNDraw = function () {
  update();
  draw();
  requestAnimationFrame(updateNDraw);
};
function trackTransforms(ctx) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var xform = svg.createSVGMatrix();
  ctx.getTransform = function () {
    return xform;
  };
  var savedTransforms = [];
  var save = ctx.save;
  ctx.save = function () {
    savedTransforms.push(xform.translate(0, 0));
    return save.call(ctx);
  };
  var restore = ctx.restore;
  ctx.restore = function () {
    xform = savedTransforms.pop();
    return restore.call(ctx);
  };
  var scale = ctx.scale;
  ctx.scale = function (sx, sy) {
    xform = xform.scaleNonUniform(sx, sy);
    return scale.call(ctx, sx, sy);
  };
  var rotate = ctx.rotate;
  ctx.rotate = function (radians) {
    xform = xform.rotate(radians * 180 / Math.PI);
    return rotate.call(ctx, radians);
  };
  var translate = ctx.translate;
  ctx.translate = function (dx, dy) {
    xform = xform.translate(dx, dy);
    return translate.call(ctx, dx, dy);
  };
  var transform = ctx.transform;
  ctx.transform = function (a, b, c, d, e, f) {
    var m2 = svg.createSVGMatrix();
    m2.a = a;
    m2.b = b;
    m2.c = c;
    m2.d = d;
    m2.e = e;
    m2.f = f;
    xform = xform.multiply(m2);
    return transform.call(ctx, a, b, c, d, e, f);
  };
  var setTransform = ctx.setTransform;
  ctx.setTransform = function (a, b, c, d, e, f) {
    xform.a = a;
    xform.b = b;
    xform.c = c;
    xform.d = d;
    xform.e = e;
    xform.f = f;
    return setTransform.call(ctx, a, b, c, d, e, f);
  };
  var pt = svg.createSVGPoint();
  ctx.transformedPoint = function (x, y) {
    pt.x = x;
    pt.y = y;
    return pt.matrixTransform(xform.inverse());
  };
}
trackTransforms(context);
var translateX = canv.width / 2;
var translateY = canv.height / 2;
context.translate(translateX, translateY);
updateNDraw();

},{"./graph.js":"6m5hz","./codeFromGraph.js":"678mq","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6m5hz":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _nodeJs = require("./node.js");
var _nodeJsDefault = _parcelHelpers.interopDefault(_nodeJs);
var _edgeJs = require("./edge.js");
var _edgeJsDefault = _parcelHelpers.interopDefault(_edgeJs);
class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
  }
  generateSquare(n) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= n - 1; j++) {
        let node = this.addVertex();
        if (j - 1 >= 0) this.addEdge(i * n + j - 1, i * n + j);
        if (i - 1 >= 0) this.addEdge((i - 1) * n + j, i * n + j);
      }
    }
  }
  generateSheet(n, m) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= m - 1; j++) {
        let node = this.addVertex();
        if (j - 1 >= 0) this.addEdge(i * m + j - 1, i * m + j);
        if (i - 1 >= 0) this.addEdge((i - 1) * m + j, i * m + j);
      }
    }
  }
  generateCyllinder(radius, length) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    for (let i = 0; i <= radius - 1; i++) {
      for (let j = 0; j <= length - 1; j++) {
        let node = this.addVertex();
        if (j - 1 >= 0) this.addEdge(i * length + j - 1, i * length + j);
        if (i - 1 >= 0) this.addEdge((i - 1) * length + j, i * length + j);
      }
    }
    for (let j = 0; j <= length - 1; j++) {
      this.addEdge(j, (radius - 1) * length + j);
    }
  }
  generateTorus(radius, length) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    this.generateCyllinder(radius, length);
    for (var i = 0; i <= radius - 1; i++) {
      this.addEdge(i * length, i * length + length - 1);
    }
  }
  generateKlein(n) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    this.generateCyllinder(n, n);
    for (var i = 0; i <= n - 1; i++) {
      console.log(i);
      this.addEdge(i * n, (n - i) * n - 1);
    }
  }
  generateMobius(n, m) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    this.generateSheet(n, m);
    for (let i = 0; i <= n - 1; i++) {
      this.addEdge(i * m, (n - i) * m - 1);
    }
  }
  generateSolidCube(n) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    for (var k = 0; k <= n - 1; k++) {
      for (var i = 0; i <= n - 1; i++) {
        for (var j = 0; j <= n - 1; j++) {
          this.addVertex();
          if (j - 1 >= 0) this.addEdge(n * n * k + i * n + j - 1, n * n * k + i * n + j);
          if (i - 1 >= 0) this.addEdge(n * n * k + (i - 1) * n + j, n * n * k + i * n + j);
          if (k - 1 >= 0) this.addEdge(n * n * (k - 1) + i * n + j, n * n * k + i * n + j);
        }
      }
    }
  }
  generateCube(n) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    this.generateSheet(n, 4 * n);
    for (var i = 0; i <= n - 2; i++) {
      for (var j = 0; j <= n - 2; j++) {
        this.addVertex();
        if (j - 1 >= 0) this.addEdge(4 * n * n + i * (n - 1) + j - 1, 4 * n * n + i * (n - 1) + j);
        if (i - 1 >= 0) this.addEdge(4 * n * n + (i - 1) * (n - 1) + j, 4 * n * n + i * (n - 1) + j);
      }
    }
    for (var i = 0; i <= n - 2; i++) {
      this.addEdge((n - 1) * 4 * n + 2 * n + 1 + i, 4 * n * n + i);
    }
  }
  /*generateSphere(n)*/
  nextId() {
    if (this.nodes.length == 0) return 0; else return this.nodes[this.nodes.length - 1].id + 1;
  }
  addVertex() {
    var new_node = new _nodeJsDefault.default(this.nextId());
    this.nodes.push(new_node);
    this.nodeMap[new_node.id] = new_node;
    return new_node;
  }
  addEdge(u, v) {
    this.edges.push(new _edgeJsDefault.default(this.nodeMap[u], this.nodeMap[v]));
    if (typeof this.neighbors[u] == "undefined") {
      this.neighbors[u] = [v];
    } else this.neighbors[u].push(v);
    if (typeof this.neighbors[v] == "undefined") {
      this.neighbors[u] = [u];
    } else this.neighbors[u].push(u);
    this.nodeMap[u].degree += 1;
    this.nodeMap[v].degree += 1;
  }
}
exports.default = Graph;

},{"./node.js":"3rpHq","./edge.js":"3HbWb","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3rpHq":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class Node {
  constructor(id) {
    this.id = id;
    this.degree = 0;
    this.x = Math.random() * 100 - 50;
    this.y = Math.random() * 100 - 50;
    this.nextX = this.x;
    this.nextY = this.y;
  }
  secondaryConstructor(neighbor) {
    this.neighbors.push(neighbor);
    this.degree = 1;
    neighbor.neighbors.push(this);
    neighbor.degree += 1;
    this.x = Math.random() - 0.5;
    this.y = Math.random() - 0.5;
    this.nextX = this.x;
    this.nextY = this.y;
  }
}
exports.default = Node;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"3HbWb":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
require("./node.js");
class Edge {
  constructor(node1, node2) {
    this.node1 = node1;
    this.node2 = node2;
  }
}
exports.default = Edge;

},{"./node.js":"3rpHq","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"678mq":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "graphFromEncoding", function () {
  return graphFromEncoding;
});
_parcelHelpers.export(exports, "codeFromGraph", function () {
  return codeFromGraph;
});
_parcelHelpers.export(exports, "smallestLeaf", function () {
  return smallestLeaf;
});
_parcelHelpers.export(exports, "smallestNeighbor", function () {
  return smallestNeighbor;
});
_parcelHelpers.export(exports, "reduce", function () {
  return reduce;
});
var _graphJs = require("./graph.js");
var _graphJsDefault = _parcelHelpers.interopDefault(_graphJs);
function graphFromEncoding(encoding) {
  var copyGraph = new _graphJsDefault.default();
  copyGraph.addVertex();
  for (var i = 0; i < encoding.length; i++) {
    copyGraph.addVertexId(encoding[i]);
  }
  if (copyGraph.nodes.length - 1 != copyGraph.edges.length) {
    throw "incorrect construction from copy";
  }
  return copyGraph;
}
function codeFromGraph(graph) {
  var graphCopy = graphFromEncoding(graph.encoding);
  var result = "";
  while (graphCopy.nodes.length > 2) {
    let u = smallestLeaf(graphCopy);
    console.log("smallest leaf id= " + u.id);
    let i = smallestNeighbor(graphCopy, u);
    console.log("smallestNeighbor id= " + i.id);
    console.log("");
    result = result + " " + i.id;
    reduce(graphCopy, u);
  }
  console.log(result);
  return result;
}
function smallestLeaf(graphCopy) {
  console.log("trying to find smallest leaf with " + graphCopy.nodes.length + " nodes");
  for (var j = 0; j < graphCopy.nodes.length; j++) {
    let noder = graphCopy.nodes[j];
    if (noder.degree == 1) return noder;
  }
  throw "couldn't find a leaf in smallestLeaf subroutine";
}
function smallestNeighbor(graphCopy, vertex) {
  var id = Math.min.apply(Math, vertex.neighbors.map(x => x.id));
  for (var i = 0; i < vertex.neighbors.length; i++) {
    if (vertex.neighbors[i].id == id) return vertex.neighbors[i];
  }
  throw "coudln't find a smallest neighbor in smallestNeighbor subroutine";
}
function reduce(graphCopy, vertex) {
  let indexToRemove = vertex.id;
  console.log("remove vertex id " + vertex.id);
  for (var i = 0; i < vertex.neighbors.length; i++) {
    let neighbor = vertex.neighbors[i];
    neighbor.degree = neighbor.degree - 1;
    let index = neighbor.neighbors.indexOf(vertex);
    neighbor.neighbors.splice(index, 1);
  }
  for (var i = 0; i < graphCopy.edges.length; i++) {
    var edge = graphCopy.edges[i];
    if (edge.node1.id == indexToRemove || edge.node2.id == indexToRemove) {
      graphCopy.edges.splice(i, 1);
      console.log("removed edge");
    }
  }
  let indexinArrayToRemove = -1;
  for (var i = 0; i < graphCopy.nodes.length; i++) {
    if (graphCopy.nodes[i].id == vertex.id) {
      indexinArrayToRemove = i;
    }
  }
  if (indexinArrayToRemove == -1) {
    throw "coudln't find edge-to-remove in array with id = " + vertex.id;
  }
  graphCopy.nodes.splice(indexinArrayToRemove, 1);
}

},{"./graph.js":"6m5hz","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["1j6wU","21c8X","3L8AI"], "3L8AI", "parcelRequire513d")

//# sourceMappingURL=index.2142d36c.js.map