(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrap"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrap"] = factory(root["React"], root["ReactDOM"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (undefined !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(116)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(119)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIs = __webpack_require__(125);

var _createChainableTypeChecker = __webpack_require__(34);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`,expected an element type (a string ') + ', component class, or function component).');
  }

  if (!(0, _reactIs.isValidElementType)(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + ', component class, or function component).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(47)('wks');
var uid = __webpack_require__(31);
var Symbol = __webpack_require__(8).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(5);
var ctx = __webpack_require__(19);
var hide = __webpack_require__(12);
var has = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(65);
var toPrimitive = __webpack_require__(41);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (undefined !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = uncontrollable;

var _react = _interopRequireDefault(__webpack_require__(0));

var _invariant = _interopRequireDefault(__webpack_require__(33));

var Utils = _interopRequireWildcard(__webpack_require__(120));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var isCompositeComponent = Utils.isReactComponent(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(Utils.defaultKey);
  !(isCompositeComponent || !methods.length) ? undefined !== "production" ? (0, _invariant.default)(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : invariant(false) : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          _this._values[propName] = value;
          if (!_this.unmounted) _this.forceUpdate();
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (isCompositeComponent) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let the forceUpdate trigger the update
      return !this._notifying;
    };

    _proto.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var props = this.props;
      this._values = Object.create(null);
      controlledProps.forEach(function (key) {
        _this2._values[key] = props[Utils.defaultKey(key)];
      });
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var props = this.props;
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        if (!Utils.isProp(nextProps, key) && Utils.isProp(props, key)) {
          _this3._values[key] = nextProps[Utils.defaultKey(key)];
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.getControlledInstance = function getControlledInstance() {
      return this.inner;
    };

    _proto.render = function render() {
      var _this4 = this;

      var props = _extends({}, this.props);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this4.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this4._values[propName];
      });
      return _react.default.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(_react.default.Component);

  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = Utils.uncontrolledPropTypes(controlledValues, displayName);
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _inner;

      return (_inner = this.inner)[method].apply(_inner, arguments);
    };
  });
  UncontrolledComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  UncontrolledComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };

  return UncontrolledComponent;
}

module.exports = exports["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(42);
var defined = __webpack_require__(44);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(64);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(67);
var enumBugKeys = __webpack_require__(48);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ownerDocument;
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(15);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM2.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);

  return false;
}
module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (componentOrElement) {
  return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
};

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ownerDocument = __webpack_require__(22);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(44);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = style;

var _camelizeStyle = __webpack_require__(83);

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

var _hyphenateStyle = __webpack_require__(153);

var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

var _getComputedStyle2 = __webpack_require__(155);

var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

var _removeStyle = __webpack_require__(156);

var _removeStyle2 = _interopRequireDefault(_removeStyle);

var _properties = __webpack_require__(58);

var _isTransform = __webpack_require__(157);

var _isTransform2 = _interopRequireDefault(_isTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];
    if (!value && value !== 0) {
      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
    } else if ((0, _isTransform2.default)(key)) {
      transforms += key + '(' + value + ') ';
    } else {
      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
    }
  });

  if (transforms) {
    css += _properties.transform + ': ' + transforms + ';';
  }

  node.style.cssText += ';' + css;
}
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(45);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (undefined !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(78);
var isArrayIter = __webpack_require__(79);
var anObject = __webpack_require__(20);
var toLength = __webpack_require__(30);
var getIterFn = __webpack_require__(80);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRequiredForA11y;
function isRequiredForA11y(validator) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}
module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(34);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }

  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);
module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;
function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}
module.exports = exports["default"];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getContainer;

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(container) || defaultContainer;
}
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(43);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(47)('keys');
var uid = __webpack_require__(31);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(31)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(9).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(20);
var dPs = __webpack_require__(108);
var enumBugKeys = __webpack_require__(48);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(66)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(109).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (undefined !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(51);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(68);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(28);
var $iterCreate = __webpack_require__(132);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(133);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(15);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _createChainableTypeChecker = __webpack_require__(34);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(15);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var on = function on() {};
if (_inDOM2.default) {
  on = function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

exports.default = on;
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(15);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var off = function off() {};
if (_inDOM2.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

exports.default = off;
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(183);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  if (propType !== 'function' && propType !== 'string') {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(66)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(101)(false);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(43);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(67);
var hiddenKeys = __webpack_require__(48).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(53);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (undefined !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(21);
var toIObject = __webpack_require__(18);
var isEnum = __webpack_require__(26).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(131)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(57)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(12);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(20);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(28);
var ITERATOR = __webpack_require__(6)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(81);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(28);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(43);
var TAG = __webpack_require__(6)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelizeStyleName;

var _camelize = __webpack_require__(84);

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^-ms-/; /**
                          * Copyright 2014-2015, Facebook, Inc.
                          * All rights reserved.
                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
                          */
function camelizeStyleName(string) {
  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
}
module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
module.exports = exports["default"];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _propTypes = __webpack_require__(1);

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PropTypes = __webpack_require__(158);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
var EXITED = exports.EXITED = 'exited';
var ENTERING = exports.ENTERING = 'entering';
var ENTERED = exports.ENTERED = 'entered';
var EXITING = exports.EXITING = 'exiting';

/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 *
 */

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    var parentGroup = context.transitionGroup;
    // In the context of a TransitionGroup all enters are really appears
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

    var initialStatus = void 0;
    _this.nextStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.nextStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  Transition.prototype.getChildContext = function getChildContext() {
    return { transitionGroup: null }; // allows for nested Transitions
  };

  Transition.prototype.componentDidMount = function componentDidMount() {
    this.updateStatus(true);
  };

  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _ref = this.pendingState || this.state,
        status = _ref.status;

    if (nextProps.in) {
      if (status === UNMOUNTED) {
        this.setState({ status: EXITED });
      }
      if (status !== ENTERING && status !== ENTERED) {
        this.nextStatus = ENTERING;
      }
    } else {
      if (status === ENTERING || status === ENTERED) {
        this.nextStatus = EXITING;
      }
    }
  };

  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateStatus();
  };

  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  Transition.prototype.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;

    var exit = void 0,
        enter = void 0,
        appear = void 0;

    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }
    return { exit: exit, enter: enter, appear: appear };
  };

  Transition.prototype.updateStatus = function updateStatus() {
    var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var nextStatus = this.nextStatus;

    if (nextStatus !== null) {
      this.nextStatus = null;
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  };

  Transition.prototype.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;

    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

    var timeouts = this.getTimeouts();

    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if (!mounting && !enter) {
      this.safeSetState({ status: ENTERED }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);

    this.safeSetState({ status: ENTERING }, function () {
      _this2.props.onEntering(node, appearing);

      // FIXME: appear timeout?
      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  Transition.prototype.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;

    var timeouts = this.getTimeouts();

    // no exit animation skip right to EXITED
    if (!exit) {
      this.safeSetState({ status: EXITED }, function () {
        _this3.props.onExited(node);
      });
      return;
    }
    this.props.onExit(node);

    this.safeSetState({ status: EXITING }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    var _this4 = this;

    // We need to track pending updates for instances where a cWRP fires quickly
    // after cDM and before the state flushes, which would double trigger a
    // transition
    this.pendingState = nextState;

    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, function () {
      _this4.pendingState = null;
      callback();
    });
  };

  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this5 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this5.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    var _props = this.props,
        children = _props.children,
        childProps = _objectWithoutProperties(_props, ['children']);
    // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react2.default.Children.only(children);
    return _react2.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react2.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};


Transition.propTypes = undefined !== "production" ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt.apply(undefined, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

exports.default = Transition;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = activeElement;

var _ownerDocument = __webpack_require__(22);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function activeElement() {
  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _ownerDocument2.default)();

  try {
    return doc.activeElement;
  } catch (e) {/* ie throws if no active element */}
}
module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */
keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode
    if (keyCode === null || keyCode === undefined) { return false; }
    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    
      // check aliases
      var foundNamedKey = aliases[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }
    return false;
  }
}

exports = module.exports = keyCode;

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}

/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _contains = __webpack_require__(23);

var _contains2 = _interopRequireDefault(_contains);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _addEventListener = __webpack_require__(89);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _ownerDocument = __webpack_require__(24);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var escapeKeyCode = 27;

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The `<RootCloseWrapper/>` component registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 */

var RootCloseWrapper = function (_React$Component) {
  _inherits(RootCloseWrapper, _React$Component);

  function RootCloseWrapper(props, context) {
    _classCallCheck(this, RootCloseWrapper);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.addEventListeners = function () {
      var event = _this.props.event;

      var doc = (0, _ownerDocument2.default)(_this);

      // Use capture for this listener so it fires before React's listener, to
      // avoid false positives in the contains() check below if the target DOM
      // element is removed in the React mouse callback.
      _this.documentMouseCaptureListener = (0, _addEventListener2.default)(doc, event, _this.handleMouseCapture, true);

      _this.documentMouseListener = (0, _addEventListener2.default)(doc, event, _this.handleMouse);

      _this.documentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', _this.handleKeyUp);
    };

    _this.removeEventListeners = function () {
      if (_this.documentMouseCaptureListener) {
        _this.documentMouseCaptureListener.remove();
      }

      if (_this.documentMouseListener) {
        _this.documentMouseListener.remove();
      }

      if (_this.documentKeyupListener) {
        _this.documentKeyupListener.remove();
      }
    };

    _this.handleMouseCapture = function (e) {
      _this.preventMouseRootClose = isModifiedEvent(e) || !isLeftClickEvent(e) || (0, _contains2.default)(_reactDom2.default.findDOMNode(_this), e.target);
    };

    _this.handleMouse = function (e) {
      if (!_this.preventMouseRootClose && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.handleKeyUp = function (e) {
      if (e.keyCode === escapeKeyCode && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.preventMouseRootClose = false;
    return _this;
  }

  RootCloseWrapper.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.disabled) {
      this.addEventListeners();
    }
  };

  RootCloseWrapper.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.props.disabled && prevProps.disabled) {
      this.addEventListeners();
    } else if (this.props.disabled && !prevProps.disabled) {
      this.removeEventListeners();
    }
  };

  RootCloseWrapper.prototype.componentWillUnmount = function componentWillUnmount() {
    if (!this.props.disabled) {
      this.removeEventListeners();
    }
  };

  RootCloseWrapper.prototype.render = function render() {
    return this.props.children;
  };

  return RootCloseWrapper;
}(_react2.default.Component);

RootCloseWrapper.displayName = 'RootCloseWrapper';

RootCloseWrapper.propTypes = {
  /**
   * Callback fired after click or mousedown. Also triggers when user hits `esc`.
   */
  onRootClose: _propTypes2.default.func,
  /**
   * Children to render.
   */
  children: _propTypes2.default.element,
  /**
   * Disable the the RootCloseWrapper, preventing it from triggering `onRootClose`.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Choose which document mouse event to bind to.
   */
  event: _propTypes2.default.oneOf(['click', 'mousedown'])
};

RootCloseWrapper.defaultProps = {
  event: 'click'
};

exports.default = RootCloseWrapper;
module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (node, event, handler, capture) {
  (0, _on2.default)(node, event, handler, capture);

  return {
    remove: function remove() {
      (0, _off2.default)(node, event, handler, capture);
    }
  };
};

var _on = __webpack_require__(60);

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(61);

var _off2 = _interopRequireDefault(_off);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = qsa;
// Zepto.js
// (c) 2010-2015 Thomas Fuchs
// Zepto.js may be freely distributed under the MIT license.
var simpleSelectorRE = /^[\w-]*$/;
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

function qsa(element, selector) {
  var maybeID = selector[0] === '#',
      maybeClass = selector[0] === '.',
      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
      isSimple = simpleSelectorRE.test(nameOnly),
      found;

  if (isSimple) {
    if (maybeID) {
      element = element.getElementById ? element : document;
      return (found = element.getElementById(nameOnly)) ? [found] : [];
    }

    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));

    return toArray(element.getElementsByTagName(selector));
  }

  return toArray(element.querySelectorAll(selector));
}
module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__(15);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = void 0;

module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isOverflowing;

var _isWindow = __webpack_require__(39);

var _isWindow2 = _interopRequireDefault(_isWindow);

var _ownerDocument = __webpack_require__(22);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument2.default)(node);
  var win = (0, _isWindow2.default)(doc);
  var fullWidth = win.innerWidth;

  // Support: ie8, no innerWidth
  if (!fullWidth) {
    var documentElementRect = doc.documentElement.getBoundingClientRect();
    fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }

  return doc.body.clientWidth < fullWidth;
}

function isOverflowing(container) {
  var win = (0, _isWindow2.default)(container);

  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(38);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getContainer = __webpack_require__(40);

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(24);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _LegacyPortal = __webpack_require__(174);

var _LegacyPortal2 = _interopRequireDefault(_LegacyPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.setContainer = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;

      _this._portalContainerNode = (0, _getContainer2.default)(props.container, (0, _ownerDocument2.default)(_this).body);
    }, _this.getMountNode = function () {
      return _this._portalContainerNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    this.setContainer();
    this.forceUpdate(this.props.onRendered);
  };

  Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps);
    }
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._portalContainerNode = null;
  };

  Portal.prototype.render = function render() {
    return this.props.children && this._portalContainerNode ? _reactDom2.default.createPortal(this.props.children, this._portalContainerNode) : null;
  };

  return Portal;
}(_react2.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  onRendered: _propTypes2.default.func
};
exports.default = _reactDom2.default.createPortal ? Portal : _LegacyPortal2.default;
module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = offset;

var _contains = __webpack_require__(23);

var _contains2 = _interopRequireDefault(_contains);

var _isWindow = __webpack_require__(39);

var _isWindow2 = _interopRequireDefault(_isWindow);

var _ownerDocument = __webpack_require__(22);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function offset(node) {
  var doc = (0, _ownerDocument2.default)(node),
      win = (0, _isWindow2.default)(doc),
      docElem = doc && doc.documentElement,
      box = { top: 0, left: 0, height: 0, width: 0 };

  if (!doc) return;

  // Make sure it's not a disconnected DOM node
  if (!(0, _contains2.default)(docElem, node)) return box;

  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();

  // IE8 getBoundingClientRect doesn't support width & height
  box = {
    top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
    left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
    width: (box.width == null ? node.offsetWidth : box.width) || 0,
    height: (box.height == null ? node.offsetHeight : box.height) || 0
  };

  return box;
}
module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTop;

var _isWindow = __webpack_require__(39);

var _isWindow2 = _interopRequireDefault(_isWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollTop(node, val) {
  var win = (0, _isWindow2.default)(node);

  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;

  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
}
module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var bootstrapUtils_namespaceObject = {};
__webpack_require__.d(bootstrapUtils_namespaceObject, "prefix", function() { return bootstrapUtils_prefix; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "bsClass", function() { return bootstrapUtils_bsClass; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "bsStyles", function() { return bsStyles; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "bsSizes", function() { return bsSizes; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "getClassSet", function() { return getClassSet; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "splitBsProps", function() { return splitBsProps; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "splitBsPropsAndOmit", function() { return splitBsPropsAndOmit; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "addStyle", function() { return addStyle; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "_curry", function() { return _curry; });
var utils_namespaceObject = {};
__webpack_require__.d(utils_namespaceObject, "bootstrapUtils", function() { return bootstrapUtils_namespaceObject; });
__webpack_require__.d(utils_namespaceObject, "createChainedFunction", function() { return utils_createChainedFunction; });
__webpack_require__.d(utils_namespaceObject, "ValidComponentChildren", function() { return ValidComponentChildren; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/core-js/object/assign.js
var object_assign = __webpack_require__(63);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/es6/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/es6/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype.__proto__ = superClass && superClass.prototype;
  subClass.__proto__ = superClass;
}
// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external___root___React___commonjs2___react___commonjs___react___amd___react__ = __webpack_require__(0);
var external___root___React___commonjs2___react___commonjs___react___amd___react___default = /*#__PURE__*/__webpack_require__.n(external___root___React___commonjs2___react___commonjs___react___amd___react__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__(103);
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/core-js/object/keys.js
var keys = __webpack_require__(112);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/es6/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/es6/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/uncontrollable/index.js
var uncontrollable = __webpack_require__(14);
var uncontrollable_default = /*#__PURE__*/__webpack_require__.n(uncontrollable);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/core-js/object/entries.js
var entries = __webpack_require__(56);
var entries_default = /*#__PURE__*/__webpack_require__.n(entries);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(33);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./src/utils/StyleConfig.js
var Size = {
  LARGE: 'large',
  SMALL: 'small',
  XSMALL: 'xsmall'
};
var SIZE_MAP = {
  large: 'lg',
  medium: 'md',
  small: 'sm',
  xsmall: 'xs',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};
var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var State = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
  // TODO: legacy, remove
  DEFAULT: 'default'
};
var Style = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LIGHT: 'light',
  DARK: 'dark',
  LINK: 'link',
  INVERSE: 'inverse',
  // TODO: legacy, remove
  DEFAULT: 'default'
};
// CONCATENATED MODULE: ./src/utils/bootstrapUtils.js


// TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.




function curry(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var last = args[args.length - 1];

    if (typeof last === 'function') {
      return fn.apply(void 0, args);
    }

    return function (Component) {
      return fn.apply(void 0, args.concat([Component]));
    };
  };
}

function bootstrapUtils_prefix(props, variant) {
  var bsClass = (props.bsClass || '').trim();
  !(bsClass != null) ? undefined !== "production" ? browser_default()(false, 'A `bsClass` prop is required for this component') : browser_default()(false) : void 0;
  return bsClass + (variant ? "-" + variant : '');
}
var bootstrapUtils_bsClass = curry(function (defaultClass, Component) {
  var propTypes = Component.propTypes || (Component.propTypes = {});
  var defaultProps = Component.defaultProps || (Component.defaultProps = {});
  propTypes.bsClass = prop_types_default.a.string;
  defaultProps.bsClass = defaultClass;
  return Component;
});
var bsStyles = curry(function (styles, defaultStyle, Component) {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }

  var existing = Component.STYLES || [];
  var propTypes = Component.propTypes || {};
  styles.forEach(function (style) {
    if (existing.indexOf(style) === -1) {
      existing.push(style);
    }
  });
  var propType = prop_types_default.a.oneOf(existing); // expose the values on the propType function for documentation

  Component.STYLES = existing;
  propType._values = existing;
  Component.propTypes = _extends({}, propTypes, {
    bsStyle: propType
  });

  if (defaultStyle !== undefined) {
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }

  return Component;
});
var bsSizes = curry(function (sizes, defaultSize, Component) {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }

  var existing = Component.SIZES || [];
  var propTypes = Component.propTypes || {};
  sizes.forEach(function (size) {
    if (existing.indexOf(size) === -1) {
      existing.push(size);
    }
  });
  var values = [];
  existing.forEach(function (size) {
    var mappedSize = SIZE_MAP[size];

    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }

    values.push(size);
  });
  var propType = prop_types_default.a.oneOf(values);
  propType._values = values; // expose the values on the propType function for documentation

  Component.SIZES = existing;
  Component.propTypes = _extends({}, propTypes, {
    bsSize: propType
  });

  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }

    Component.defaultProps.bsSize = defaultSize;
  }

  return Component;
});
function getClassSet(props) {
  var _classes;

  var classes = (_classes = {}, _classes[bootstrapUtils_prefix(props)] = true, _classes);

  if (props.bsSize) {
    var bsSize = SIZE_MAP[props.bsSize] || props.bsSize;
    classes[bootstrapUtils_prefix(props, bsSize)] = true;
  }

  if (props.bsStyle) {
    classes[bootstrapUtils_prefix(props, props.bsStyle)] = true;
  }

  return classes;
}

function getBsProps(props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole
  };
}

function isBsProp(propName) {
  return propName === 'bsClass' || propName === 'bsSize' || propName === 'bsStyle' || propName === 'bsRole';
}

function splitBsProps(props) {
  var elementProps = {};

  entries_default()(props).forEach(function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}
function splitBsPropsAndOmit(props, omittedPropNames) {
  var isOmittedProp = {};
  omittedPropNames.forEach(function (propName) {
    isOmittedProp[propName] = true;
  });
  var elementProps = {};

  entries_default()(props).forEach(function (_ref2) {
    var propName = _ref2[0],
        propValue = _ref2[1];

    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}
/**
 * Add a style variant to a Component. Mutates the propTypes of the component
 * in order to validate the new variant.
 */

function addStyle(Component) {
  for (var _len2 = arguments.length, styleVariant = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styleVariant[_key2 - 1] = arguments[_key2];
  }

  bsStyles(styleVariant, Component);
}
var _curry = curry;
// CONCATENATED MODULE: ./src/utils/ValidComponentChildren.js
// TODO: This module should be ElementChildren, and should use named exports.

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {object} Object containing the ordered map of results.
 */

function map(children, func, context) {
  var index = 0;
  return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Children.map(children, function (child) {
    if (!external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.isValidElement(child)) {
      return child;
    }

    return func.call(context, child, index++);
  });
}
/**
 * Iterates through children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for context.
 */


function forEach(children, func, context) {
  var index = 0;
  external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Children.forEach(children, function (child) {
    if (!external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.isValidElement(child)) {
      return;
    }

    func.call(context, child, index++);
  });
}
/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */


function ValidComponentChildren_count(children) {
  var result = 0;
  external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Children.forEach(children, function (child) {
    if (!external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.isValidElement(child)) {
      return;
    }

    ++result;
  });
  return result;
}
/**
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {array} of children that meet the func return statement
 */


function filter(children, func, context) {
  var index = 0;
  var result = [];
  external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Children.forEach(children, function (child) {
    if (!external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result.push(child);
    }
  });
  return result;
}

function find(children, func, context) {
  var index = 0;
  var result;
  external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Children.forEach(children, function (child) {
    if (result) {
      return;
    }

    if (!external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = child;
    }
  });
  return result;
}

function every(children, func, context) {
  var index = 0;
  var result = true;
  external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Children.forEach(children, function (child) {
    if (!result) {
      return;
    }

    if (!external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.isValidElement(child)) {
      return;
    }

    if (!func.call(context, child, index++)) {
      result = false;
    }
  });
  return result;
}

function some(children, func, context) {
  var index = 0;
  var result = false;
  external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Children.forEach(children, function (child) {
    if (result) {
      return;
    }

    if (!external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = true;
    }
  });
  return result;
}

function toArray(children) {
  var result = [];
  external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Children.forEach(children, function (child) {
    if (!external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.isValidElement(child)) {
      return;
    }

    result.push(child);
  });
  return result;
}

 // TODO REMOVE this

/* harmony default export */ var ValidComponentChildren = ({
  map: map,
  forEach: forEach,
  count: ValidComponentChildren_count,
  find: find,
  filter: filter,
  every: every,
  some: some,
  toArray: toArray
});
// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var createChainableTypeChecker = __webpack_require__(34);
var createChainableTypeChecker_default = /*#__PURE__*/__webpack_require__.n(createChainableTypeChecker);

// CONCATENATED MODULE: ./src/utils/PropTypes.js



var idPropType = prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]);
function generatedId(name) {
  return function (props) {
    var error = null;

    if (!props.generateChildId) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      error = idPropType.apply(void 0, [props].concat(args));

      if (!error && !props.id) {
        error = new Error("In order to properly initialize the " + name + " in a way that is accessible to assistive technologies " + ("(such as screen readers) an `id` or a `generateChildId` prop to " + name + " is required"));
      }
    }

    return error;
  };
}
function requiredRoles() {
  for (var _len2 = arguments.length, roles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    roles[_key2] = arguments[_key2];
  }

  return createChainableTypeChecker_default()(function (props, propName, component) {
    var missing;
    roles.every(function (role) {
      if (!ValidComponentChildren.some(props.children, function (child) {
        return child.props.bsRole === role;
      })) {
        missing = role;
        return false;
      }

      return true;
    });

    if (missing) {
      return new Error("(children) " + component + " - Missing a required child with bsRole: " + (missing + ". " + component + " must have at least one child of each of ") + ("the following bsRoles: " + roles.join(', ')));
    }

    return null;
  });
}
function exclusiveRoles() {
  for (var _len3 = arguments.length, roles = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    roles[_key3] = arguments[_key3];
  }

  return createChainableTypeChecker_default()(function (props, propName, component) {
    var duplicate;
    roles.every(function (role) {
      var childrenWithRole = ValidComponentChildren.filter(props.children, function (child) {
        return child.props.bsRole === role;
      });

      if (childrenWithRole.length > 1) {
        duplicate = role;
        return false;
      }

      return true;
    });

    if (duplicate) {
      return new Error("(children) " + component + " - Duplicate children detected of bsRole: " + (duplicate + ". Only one child each allowed with the following ") + ("bsRoles: " + roles.join(', ')));
    }

    return null;
  });
}
// CONCATENATED MODULE: ./src/PanelGroup.js




var _jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/PanelGroup.js";







var PanelGroup_propTypes = {
  accordion: prop_types_default.a.bool,

  /**
   * When `accordion` is enabled, `activeKey` controls the which child `Panel` is expanded. `activeKey` should
   * match a child Panel `eventKey` prop exactly.
   *
   * @controllable onSelect
   */
  activeKey: prop_types_default.a.any,

  /**
   * A callback fired when a child Panel collapse state changes. It's called with the next expanded `activeKey`
   *
   * @controllable activeKey
   */
  onSelect: prop_types_default.a.func,

  /**
   * An HTML role attribute
   */
  role: prop_types_default.a.string,

  /**
   * A function that takes an eventKey and type and returns a
   * unique id for each Panel heading and Panel Collapse. The function _must_ be a pure function,
   * meaning it should always return the _same_ id for the same set of inputs. The default
   * value requires that an `id` to be set for the PanelGroup.
   *
   * The `type` argument will either be `"body"` or `"heading"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${key}`
   */
  generateChildId: prop_types_default.a.func,

  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id: generatedId('PanelGroup')
};
var PanelGroup_defaultProps = {
  accordion: false
};
var childContextTypes = {
  $bs_panelGroup: prop_types_default.a.shape({
    getId: prop_types_default.a.func,
    headerRole: prop_types_default.a.string,
    panelRole: prop_types_default.a.string,
    activeKey: prop_types_default.a.any,
    onToggle: prop_types_default.a.func
  })
};

var PanelGroup_PanelGroup =
/*#__PURE__*/
function (_React$Component) {
  function PanelGroup() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleSelect = function (key, expanded, e) {
      if (expanded) {
        _this.props.onSelect(key, e);
      } else if (_this.props.activeKey === key) {
        _this.props.onSelect(null, e);
      }
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = PanelGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        activeKey = _this$props.activeKey,
        accordion = _this$props.accordion,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;
    var getId = null;

    if (accordion) {
      getId = generateChildId || function (key, type) {
        return id ? id + "-" + type + "-" + key : null;
      };
    }

    return {
      $bs_panelGroup: _extends({
        getId: getId,
        headerRole: 'tab',
        panelRole: 'tabpanel'
      }, accordion && {
        activeKey: activeKey,
        onToggle: this.handleSelect
      })
    };
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        accordion = _this$props2.accordion,
        className = _this$props2.className,
        children = _this$props2.children,
        props = _objectWithoutProperties(_this$props2, ["accordion", "className", "children"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['onSelect', 'activeKey']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    if (accordion) {
      elementProps.role = elementProps.role || 'tablist';
    }

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }), ValidComponentChildren.map(children, function (child) {
      return Object(external___root___React___commonjs2___react___commonjs___react___amd___react__["cloneElement"])(child, {
        bsStyle: child.props.bsStyle || bsProps.bsStyle
      });
    }));
  };

  _inheritsLoose(PanelGroup, _React$Component);

  return PanelGroup;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

PanelGroup_PanelGroup.propTypes = PanelGroup_propTypes;
PanelGroup_PanelGroup.defaultProps = PanelGroup_defaultProps;
PanelGroup_PanelGroup.childContextTypes = childContextTypes;
/* harmony default export */ var src_PanelGroup = (uncontrollable_default()(bootstrapUtils_bsClass('panel-group', PanelGroup_PanelGroup), {
  activeKey: 'onSelect'
}));
// CONCATENATED MODULE: ./src/Accordion.js


var Accordion__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Accordion.js";



var Accordion_Accordion =
/*#__PURE__*/
function (_React$Component) {
  function Accordion() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Accordion.prototype;

  _proto.render = function render() {
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_PanelGroup, _extends({}, this.props, {
      accordion: true,
      __source: {
        fileName: Accordion__jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), this.props.children);
  };

  _inheritsLoose(Accordion, _React$Component);

  return Accordion;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

/* harmony default export */ var src_Accordion = (Accordion_Accordion);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/core-js/object/values.js
var object_values = __webpack_require__(35);
var values_default = /*#__PURE__*/__webpack_require__.n(object_values);

// CONCATENATED MODULE: ./src/CloseButton.js

var CloseButton__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/CloseButton.js";


var CloseButton_propTypes = {
  label: prop_types_default.a.string.isRequired,
  onClick: prop_types_default.a.func
};
var CloseButton_defaultProps = {
  label: 'Close'
};

var CloseButton_CloseButton =
/*#__PURE__*/
function (_React$Component) {
  function CloseButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CloseButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        label = _this$props.label,
        onClick = _this$props.onClick;
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: onClick,
      __source: {
        fileName: CloseButton__jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", {
      "aria-hidden": "true",
      __source: {
        fileName: CloseButton__jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "\xD7"), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: CloseButton__jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, label));
  };

  _inheritsLoose(CloseButton, _React$Component);

  return CloseButton;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

CloseButton_CloseButton.propTypes = CloseButton_propTypes;
CloseButton_CloseButton.defaultProps = CloseButton_defaultProps;
/* harmony default export */ var src_CloseButton = (CloseButton_CloseButton);
// CONCATENATED MODULE: ./src/Alert.js




var Alert__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Alert.js";






var Alert_propTypes = {
  onDismiss: prop_types_default.a.func,
  closeLabel: prop_types_default.a.string
};
var Alert_defaultProps = {
  closeLabel: 'Close alert'
};

var Alert_Alert =
/*#__PURE__*/
function (_React$Component) {
  function Alert() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Alert.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        onDismiss = _this$props.onDismiss,
        closeLabel = _this$props.closeLabel,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["onDismiss", "closeLabel", "className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var dismissable = !!onDismiss;

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[bootstrapUtils_prefix(bsProps, 'dismissable')] = dismissable, _extends2));

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      role: "alert",
      className: classnames_default()(className, classes),
      __source: {
        fileName: Alert__jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), dismissable && external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_CloseButton, {
      onClick: onDismiss,
      label: closeLabel,
      __source: {
        fileName: Alert__jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), children);
  };

  _inheritsLoose(Alert, _React$Component);

  return Alert;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Alert_Alert.propTypes = Alert_propTypes;
Alert_Alert.defaultProps = Alert_defaultProps;
/* harmony default export */ var src_Alert = (bsStyles(values_default()(State), State.INFO, bootstrapUtils_bsClass('alert', Alert_Alert)));
// CONCATENATED MODULE: ./src/Badge.js




var Badge__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Badge.js";






var Badge_Badge =
/*#__PURE__*/
function (_React$Component) {
  function Badge() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        pill = _this$props.pill,
        props = _objectWithoutProperties(_this$props, ["className", "children", "pill"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[bootstrapUtils_prefix(bsProps, 'pill')] = pill, _extends2));

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Badge__jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), children);
  };

  _inheritsLoose(Badge, _React$Component);

  return Badge;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Badge_Badge.propTypes = {
  pill: prop_types_default.a.bool.isRequired
};
Badge_Badge.defaultProps = {
  pill: false
};
/* harmony default export */ var src_Badge = (bootstrapUtils_bsClass('badge', bsStyles(values_default()(State).concat([Style.PRIMARY, Style.SECONDARY, Style.LIGHT, Style.DARK]), Style.SECONDARY, Badge_Badge)));
// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/elementType.js
var elementType = __webpack_require__(3);
var elementType_default = /*#__PURE__*/__webpack_require__.n(elementType);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/core-js/map.js
var core_js_map = __webpack_require__(128);
var map_default = /*#__PURE__*/__webpack_require__.n(core_js_map);

// CONCATENATED MODULE: ./src/ThemeProvider.js





var ThemeProvider__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ThemeProvider.js";



var _React$createContext = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createContext(new map_default.a()),
    Provider = _React$createContext.Provider,
    ThemeProvider_Consumer = _React$createContext.Consumer;

var ThemeProvider_ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.variants = new map_default.a();

    entries_default()(_this.props.variants).forEach(function (_ref) {
      var key = _ref[0],
          value = _ref[1];

      _this.variants.set(key, value);
    });

    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Provider, {
      value: this.variants,
      __source: {
        fileName: ThemeProvider__jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, this.props.children);
  };

  _inheritsLoose(ThemeProvider, _React$Component);

  return ThemeProvider;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ThemeProvider_ThemeProvider.propTypes = {
  variants: prop_types_default.a.object.isRequired
};

function createBootstrapComponent(Component, prefix) {
  var name = Component.displayName || Component.name; // This looks like a function component but it's not,
  // it's passed to forwardRef directly, and named for the dev-tools
  // eslint-disable-next-line react/prop-types

  function forwardRef(_ref2, ref) {
    var bsPrefix = _ref2.bsPrefix,
        props = _objectWithoutProperties(_ref2, ["bsPrefix"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(ThemeProvider_Consumer, {
      __source: {
        fileName: ThemeProvider__jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, function (variants) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
        ref: ref,
        bsPrefix: bsPrefix || variants.get(prefix) || prefix,
        __source: {
          fileName: ThemeProvider__jsxFileName,
          lineNumber: 32
        },
        __self: this
      }));
    });
  }

  forwardRef.displayName = "Bootstrap(" + name + ")";
  return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.forwardRef(forwardRef);
}


/* harmony default export */ var src_ThemeProvider = (ThemeProvider_ThemeProvider);
// CONCATENATED MODULE: ./src/utils/createChainedFunction.js
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ var utils_createChainedFunction = (createChainedFunction);
// CONCATENATED MODULE: ./src/SafeAnchor.js




var SafeAnchor__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/SafeAnchor.js";




var SafeAnchor_propTypes = {
  href: prop_types_default.a.string,
  onClick: prop_types_default.a.func,
  onKeyDown: prop_types_default.a.func,
  disabled: prop_types_default.a.bool,
  role: prop_types_default.a.string,
  tabIndex: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * this is sort of silly but needed for Button
   */
  componentClass: elementType_default.a
};
var SafeAnchor_defaultProps = {
  componentClass: 'a'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, MenuItems, etc.
 */


var SafeAnchor_SafeAnchor =
/*#__PURE__*/
function (_React$Component) {
  function SafeAnchor(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = SafeAnchor.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        href = _this$props.href,
        onClick = _this$props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.componentClass,
        disabled = _this$props2.disabled,
        onKeyDown = _this$props2.onKeyDown,
        props = _objectWithoutProperties(_this$props2, ["componentClass", "disabled", "onKeyDown"]);

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')

      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      onClick: this.handleClick,
      onKeyDown: utils_createChainedFunction(this.handleKeyDown, onKeyDown),
      __source: {
        fileName: SafeAnchor__jsxFileName,
        lineNumber: 88
      },
      __self: this
    }));
  };

  _inheritsLoose(SafeAnchor, _React$Component);

  return SafeAnchor;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

SafeAnchor_SafeAnchor.propTypes = SafeAnchor_propTypes;
SafeAnchor_SafeAnchor.defaultProps = SafeAnchor_defaultProps;
/* harmony default export */ var src_SafeAnchor = (SafeAnchor_SafeAnchor);
// CONCATENATED MODULE: ./src/BreadcrumbItem.js



var BreadcrumbItem__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/BreadcrumbItem.js";







var BreadcrumbItem_BreadcrumbItem =
/*#__PURE__*/
function (_React$Component) {
  function BreadcrumbItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BreadcrumbItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        active = _this$props.active,
        className = _this$props.className,
        Component = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["bsPrefix", "active", "className", "componentClass"]);

    var href = props.href,
        title = props.title,
        target = props.target,
        elementProps = _objectWithoutProperties(props, ["href", "title", "target"]);

    var linkProps = {
      href: href,
      title: title,
      target: target
    };
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, {
      className: classnames_default()(bsPrefix, className, {
        active: active
      }),
      "aria-current": active ? 'page' : undefined,
      __source: {
        fileName: BreadcrumbItem__jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, active ? external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()({
        active: active
      }),
      __source: {
        fileName: BreadcrumbItem__jsxFileName,
        lineNumber: 59
      },
      __self: this
    })) : external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_SafeAnchor, _extends({}, elementProps, linkProps, {
      __source: {
        fileName: BreadcrumbItem__jsxFileName,
        lineNumber: 61
      },
      __self: this
    })));
  };

  _inheritsLoose(BreadcrumbItem, _React$Component);

  return BreadcrumbItem;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

BreadcrumbItem_BreadcrumbItem.propTypes = {
  /**
   * @default 'breadcrumb-item'
   */
  bsPrefix: prop_types_default.a.string,

  /**
   * Adds a visual "active" state to a Breadcrumb
   * Item and disables the link.
   */
  active: prop_types_default.a.bool,

  /**
   * `href` attribute for the inner `a` element
   */
  href: prop_types_default.a.string,

  /**
   * `title` attribute for the inner `a` element
   */
  title: prop_types_default.a.node,

  /**
   * `target` attribute for the inner `a` element
   */
  target: prop_types_default.a.string,
  componentClass: elementType_default.a
};
BreadcrumbItem_BreadcrumbItem.defaultProps = {
  active: false,
  componentClass: 'li'
};
/* harmony default export */ var src_BreadcrumbItem = (createBootstrapComponent(BreadcrumbItem_BreadcrumbItem, 'breadcrumb-item'));
// CONCATENATED MODULE: ./src/Breadcrumb.js



var Breadcrumb__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Breadcrumb.js";







var Breadcrumb_Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  function Breadcrumb() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Breadcrumb.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        listProps = _this$props.listProps,
        children = _this$props.children,
        label = _this$props.label,
        Component = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["bsPrefix", "className", "listProps", "children", "label", "componentClass"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({
      "aria-label": label,
      className: className
    }, props, {
      __source: {
        fileName: Breadcrumb__jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("ol", _extends({
      role: "navigation"
    }, listProps, {
      className: classnames_default()(bsPrefix, listProps.className),
      __source: {
        fileName: Breadcrumb__jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), children));
  };

  _inheritsLoose(Breadcrumb, _React$Component);

  return Breadcrumb;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Breadcrumb_Breadcrumb.propTypes = {
  /**
   * @default 'breadcrumb'
   */
  bsPrefix: prop_types_default.a.string,

  /**
   * ARIA label for the nav element
   * https://www.w3.org/TR/wai-aria-practices/#breadcrumb
   */
  label: prop_types_default.a.string,

  /**
   * Additional props passed as-is to the underlying `<ul>` element
   */
  listProps: prop_types_default.a.object,
  componentClass: elementType_default.a
};
Breadcrumb_Breadcrumb.defaultProps = {
  label: 'breadcrumb',
  listProps: {},
  componentClass: 'nav'
};
var DecoratedBreadcrumb = createBootstrapComponent(Breadcrumb_Breadcrumb, 'breadcrumb');
DecoratedBreadcrumb.Item = src_BreadcrumbItem;
/* harmony default export */ var src_Breadcrumb = (DecoratedBreadcrumb);
// CONCATENATED MODULE: ./src/Button.js



var Button__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Button.js";







var Button_Button =
/*#__PURE__*/
function (_React$Component) {
  function Button() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _0 = _this$props.bsRole,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        size = _this$props.size,
        active = _this$props.active,
        className = _this$props.className,
        block = _this$props.block,
        type = _this$props.type,
        componentClass = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["bsRole", "bsPrefix", "variant", "size", "active", "className", "block", "type", "componentClass"]);

    var classes = classnames_default()(className, bsPrefix, active && 'active', bsPrefix + "-" + variant, block && bsPrefix + "-block", size && bsPrefix + "-" + size);

    if (props.href) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_SafeAnchor, _extends({}, props, {
        componentClass: componentClass,
        className: classnames_default()(classes, props.disabled && 'disabled'),
        __source: {
          fileName: Button__jsxFileName,
          lineNumber: 93
        },
        __self: this
      }));
    }

    var Component = componentClass || 'button';
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      type: type,
      className: classes,
      __source: {
        fileName: Button__jsxFileName,
        lineNumber: 102
      },
      __self: this
    }));
  };

  _inheritsLoose(Button, _React$Component);

  return Button;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Button_Button.propTypes = {
  /**
   * @default 'btn'
   */
  bsPrefix: prop_types_default.a.string,

  /**
   * One or more button variant combinations
   *
   * buttons may be one of a variety of visual variants such as:
   *
   * `'primary', 'secondary', 'success', 'danger', 'warning', 'info, 'dark', 'light', 'link'`
   *
   * as well as "outline" versions (prefixed by 'outline-*')
   *
   * `'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info, 'outline-dark', 'outline-light'`
   */
  variant: prop_types_default.a.string,

  /**
   * Specifies a large or small button.
   *
   * @type ('sm'|'lg')
   */
  size: prop_types_default.a.string,

  /** Spans the full width of the Button parent */
  block: prop_types_default.a.bool,

  /** Manually set the visual state of the button to `:active` */
  active: prop_types_default.a.bool,

  /**
   * Disables the Button, preventing mouse events,
   * even if the underlying component is an `<a>` element
   */
  disabled: prop_types_default.a.bool,

  /** Providing a `href` will render an `<a>` element, _styled_ as a button. */
  href: prop_types_default.a.string,

  /**
   * Defines HTML button type attribute.
   *
   * @default 'button'
   */
  type: prop_types_default.a.oneOf(['button', 'reset', 'submit', null]),
  componentClass: elementType_default.a
};
Button_Button.defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};
/* harmony default export */ var src_Button = (createBootstrapComponent(Button_Button, 'btn'));
// CONCATENATED MODULE: ./src/ButtonGroup.js



var ButtonGroup__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ButtonGroup.js";






var ButtonGroup_ButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  function ButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _0 = _this$props.bsRole,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        toggle = _this$props.toggle,
        vertical = _this$props.vertical,
        className = _this$props.className,
        Component = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["bsRole", "bsPrefix", "size", "toggle", "vertical", "className", "componentClass"]);

    var baseClass = bsPrefix;
    if (vertical) baseClass = bsPrefix + "-vertical";
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, baseClass, size && bsPrefix + "-" + size, toggle && bsPrefix + "-toggle"),
      __source: {
        fileName: ButtonGroup__jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  };

  _inheritsLoose(ButtonGroup, _React$Component);

  return ButtonGroup;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ButtonGroup_ButtonGroup.propTypes = {
  /**
   * @default 'btn-group'
   */
  bsPrefix: prop_types_default.a.string,

  /**
   * Sets the size for all Buttons in the group.
   *
   * @type ('sm'|'lg')
   */
  size: prop_types_default.a.string,

  /** Make the set of Buttons appear vertically stacked. */
  vertical: prop_types_default.a.bool,

  /**
   * Display as a button toggle group.
   *
   * (Generally it's better to use `ToggleButtonGroup` directly)
   */
  toggle: prop_types_default.a.bool,

  /**
   * An ARIA role describing the button group. Usually the default
   * "group" role is fine. An `aria-label` or `aria-labelledby`
   * prop is also recommended.
   */
  role: prop_types_default.a.string,
  componentClass: elementType_default.a
};
ButtonGroup_ButtonGroup.defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group',
  componentClass: 'div'
};
/* harmony default export */ var src_ButtonGroup = (createBootstrapComponent(ButtonGroup_ButtonGroup, 'btn-group'));
// CONCATENATED MODULE: ./src/ButtonToolbar.js



var ButtonToolbar__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ButtonToolbar.js";





var ButtonToolbar_ButtonToolbar =
/*#__PURE__*/
function (_React$Component) {
  function ButtonToolbar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonToolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: ButtonToolbar__jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  };

  _inheritsLoose(ButtonToolbar, _React$Component);

  return ButtonToolbar;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ButtonToolbar_ButtonToolbar.propTypes = {
  /**
   * The ARIA role describing the button toolbar. Generally the default
   * "toolbar" role is correct. An `aria-label` or `aria-labelledby`
   * prop is also recommended.
   */
  role: prop_types_default.a.string
};
ButtonToolbar_ButtonToolbar.defaultProps = {
  role: 'toolbar'
};
/* harmony default export */ var src_ButtonToolbar = (bootstrapUtils_bsClass('btn-toolbar', ButtonToolbar_ButtonToolbar));
// CONCATENATED MODULE: ./src/CarouselCaption.js



var CarouselCaption__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/CarouselCaption.js";




var CarouselCaption_propTypes = {
  componentClass: elementType_default.a
};
var CarouselCaption_defaultProps = {
  componentClass: 'div'
};

var CarouselCaption_CarouselCaption =
/*#__PURE__*/
function (_React$Component) {
  function CarouselCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselCaption.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: CarouselCaption__jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  };

  _inheritsLoose(CarouselCaption, _React$Component);

  return CarouselCaption;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

CarouselCaption_CarouselCaption.propTypes = CarouselCaption_propTypes;
CarouselCaption_CarouselCaption.defaultProps = CarouselCaption_defaultProps;
/* harmony default export */ var src_CarouselCaption = (bootstrapUtils_bsClass('carousel-caption', CarouselCaption_CarouselCaption));
// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external___root___ReactDOM___commonjs2___react_dom___commonjs___react_dom___amd___react_dom__ = __webpack_require__(4);
var external___root___ReactDOM___commonjs2___react_dom___commonjs___react_dom___amd___react_dom___default = /*#__PURE__*/__webpack_require__.n(external___root___ReactDOM___commonjs2___react_dom___commonjs___react_dom___amd___react_dom__);

// EXTERNAL MODULE: ./node_modules/dom-helpers/transition/index.js
var dom_helpers_transition = __webpack_require__(151);
var transition_default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition);

// CONCATENATED MODULE: ./src/CarouselItem.js




var CarouselItem__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/CarouselItem.js";





var CarouselItem_propTypes = {
  direction: prop_types_default.a.oneOf(['prev', 'next']),
  onAnimateOutEnd: prop_types_default.a.func,
  active: prop_types_default.a.bool,
  animateIn: prop_types_default.a.bool,
  animateOut: prop_types_default.a.bool,
  index: prop_types_default.a.number
};
var CarouselItem_defaultProps = {
  active: false,
  animateIn: false,
  animateOut: false
};

var CarouselItem_CarouselItem =
/*#__PURE__*/
function (_React$Component) {
  function CarouselItem(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleAnimateOutEnd = _this.handleAnimateOutEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      direction: null
    };
    _this.isUnmounted = false;
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null
      });
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var active = this.props.active;
    var prevActive = prevProps.active;

    if (!active && prevActive) {
      transition_default.a.end(external___root___ReactDOM___commonjs2___react_dom___commonjs___react_dom___amd___react_dom___default.a.findDOMNode(this), this.handleAnimateOutEnd);
    }

    if (active !== prevActive) {
      setTimeout(function () {
        return _this2.startAnimation();
      }, 20);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isUnmounted = true;
  };

  _proto.handleAnimateOutEnd = function handleAnimateOutEnd() {
    if (this.isUnmounted) {
      return;
    }

    if (this.props.onAnimateOutEnd) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  };

  _proto.startAnimation = function startAnimation() {
    if (this.isUnmounted) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ? 'right' : 'left'
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        direction = _this$props.direction,
        active = _this$props.active,
        animateIn = _this$props.animateIn,
        animateOut = _this$props.animateOut,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["direction", "active", "animateIn", "animateOut", "className"]);

    delete props.onAnimateOutEnd;
    delete props.index;
    var classes = {
      item: true,
      active: active && !animateIn || animateOut
    };

    if (direction && active && animateIn) {
      classes[direction] = true;
    }

    if (this.state.direction && (animateIn || animateOut)) {
      classes[this.state.direction] = true;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, props, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: CarouselItem__jsxFileName,
        lineNumber: 102
      },
      __self: this
    }));
  };

  _inheritsLoose(CarouselItem, _React$Component);

  return CarouselItem;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

CarouselItem_CarouselItem.propTypes = CarouselItem_propTypes;
CarouselItem_CarouselItem.defaultProps = CarouselItem_defaultProps;
/* harmony default export */ var src_CarouselItem = (CarouselItem_CarouselItem);
// CONCATENATED MODULE: ./src/Glyphicon.js



var Glyphicon__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Glyphicon.js";




var Glyphicon_propTypes = {
  /**
   * An icon name without "glyphicon-" prefix. See e.g. http://getbootstrap.com/components/#glyphicons
   */
  glyph: prop_types_default.a.string.isRequired
};

var Glyphicon_Glyphicon =
/*#__PURE__*/
function (_React$Component) {
  function Glyphicon() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Glyphicon.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        glyph = _this$props.glyph,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["glyph", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[bootstrapUtils_prefix(bsProps, glyph)] = true, _extends2));

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Glyphicon__jsxFileName,
        lineNumber: 30
      },
      __self: this
    }));
  };

  _inheritsLoose(Glyphicon, _React$Component);

  return Glyphicon;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Glyphicon_Glyphicon.propTypes = Glyphicon_propTypes;
/* harmony default export */ var src_Glyphicon = (bootstrapUtils_bsClass('glyphicon', Glyphicon_Glyphicon));
// CONCATENATED MODULE: ./src/Carousel.js




var Carousel__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Carousel.js";








 // TODO: `slide` should be `animate`.
// TODO: Use uncontrollable.

var Carousel_propTypes = {
  slide: prop_types_default.a.bool,
  indicators: prop_types_default.a.bool,

  /**
   * The amount of time to delay between automatically cycling an item.
   * If `null`, carousel will not automatically cycle.
   */
  interval: prop_types_default.a.number,
  controls: prop_types_default.a.bool,
  pauseOnHover: prop_types_default.a.bool,
  wrap: prop_types_default.a.bool,

  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: any, ?event: Object) => any
   * ```
   *
   * If this callback takes two or more arguments, the second argument will
   * be a persisted event object with `direction` set to the direction of the
   * transition.
   */
  onSelect: prop_types_default.a.func,
  onSlideEnd: prop_types_default.a.func,
  activeIndex: prop_types_default.a.number,
  defaultActiveIndex: prop_types_default.a.number,
  direction: prop_types_default.a.oneOf(['prev', 'next']),
  prevIcon: prop_types_default.a.node,

  /**
   * Label shown to screen readers only, can be used to show the previous element
   * in the carousel.
   * Set to null to deactivate.
   */
  prevLabel: prop_types_default.a.string,
  nextIcon: prop_types_default.a.node,

  /**
   * Label shown to screen readers only, can be used to show the next element
   * in the carousel.
   * Set to null to deactivate.
   */
  nextLabel: prop_types_default.a.string
};
var Carousel_defaultProps = {
  slide: true,
  interval: 5000,
  pauseOnHover: true,
  wrap: true,
  indicators: true,
  controls: true,
  prevIcon: external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Glyphicon, {
    glyph: "chevron-left",
    __source: {
      fileName: Carousel__jsxFileName,
      lineNumber: 71
    },
    __self: this
  }),
  prevLabel: 'Previous',
  nextIcon: external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Glyphicon, {
    glyph: "chevron-right",
    __source: {
      fileName: Carousel__jsxFileName,
      lineNumber: 73
    },
    __self: this
  }),
  nextLabel: 'Next'
};

var Carousel_Carousel =
/*#__PURE__*/
function (_React$Component) {
  function Carousel(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handlePrev = _this.handlePrev.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleNext = _this.handleNext.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleItemAnimateOutEnd = _this.handleItemAnimateOutEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    var defaultActiveIndex = props.defaultActiveIndex;
    _this.state = {
      activeIndex: defaultActiveIndex != null ? defaultActiveIndex : 0,
      previousActiveIndex: null,
      direction: null
    };
    _this.isUnmounted = false;
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.waitForNext();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var activeIndex = this.getActiveIndex();

    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }

    if (nextProps.activeIndex == null && this.state.activeIndex >= nextProps.children.length) {
      this.setState({
        activeIndex: 0,
        previousActiveIndex: null,
        direction: null
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
    this.isUnmounted = true;
  };

  _proto.getActiveIndex = function getActiveIndex() {
    var activeIndexProp = this.props.activeIndex;
    return activeIndexProp != null ? activeIndexProp : this.state.activeIndex;
  };

  _proto.getDirection = function getDirection(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  };

  _proto.handleItemAnimateOutEnd = function handleItemAnimateOutEnd() {
    var _this2 = this;

    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function () {
      _this2.waitForNext();

      if (_this2.props.onSlideEnd) {
        _this2.props.onSlideEnd();
      }
    });
  };

  _proto.handleMouseOut = function handleMouseOut() {
    if (this.isPaused) {
      this.play();
    }
  };

  _proto.handleMouseOver = function handleMouseOver() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  };

  _proto.handleNext = function handleNext(e) {
    var index = this.getActiveIndex() + 1;
    var count = ValidComponentChildren.count(this.props.children);

    if (index > count - 1) {
      if (!this.props.wrap) {
        return;
      }

      index = 0;
    }

    this.select(index, e, 'next');
  };

  _proto.handlePrev = function handlePrev(e) {
    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.wrap) {
        return;
      }

      index = ValidComponentChildren.count(this.props.children) - 1;
    }

    this.select(index, e, 'prev');
  }; // This might be a public API.


  _proto.pause = function pause() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  }; // This might be a public API.


  _proto.play = function play() {
    this.isPaused = false;
    this.waitForNext();
  };

  _proto.select = function select(index, e, direction) {
    clearTimeout(this.timeout); // TODO: Is this necessary? Seems like the only risk is if the component
    // unmounts while handleItemAnimateOutEnd fires.

    if (this.isUnmounted) {
      return;
    }

    var previousActiveIndex = this.props.slide ? this.getActiveIndex() : null;
    direction = direction || this.getDirection(previousActiveIndex, index);
    var onSelect = this.props.onSelect;

    if (onSelect) {
      if (onSelect.length > 1) {
        // React SyntheticEvents are pooled, so we need to remove this event
        // from the pool to add a custom property. To avoid unnecessarily
        // removing objects from the pool, only do this when the listener
        // actually wants the event.
        if (e) {
          e.persist();
          e.direction = direction;
        } else {
          e = {
            direction: direction
          };
        }

        onSelect(index, e);
      } else {
        onSelect(index);
      }
    }

    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queueing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  };

  _proto.waitForNext = function waitForNext() {
    var _this$props = this.props,
        slide = _this$props.slide,
        interval = _this$props.interval,
        activeIndexProp = _this$props.activeIndex;

    if (!this.isPaused && slide && interval && activeIndexProp == null) {
      this.timeout = setTimeout(this.handleNext, interval);
    }
  };

  _proto.renderControls = function renderControls(properties) {
    var wrap = properties.wrap,
        children = properties.children,
        activeIndex = properties.activeIndex,
        prevIcon = properties.prevIcon,
        nextIcon = properties.nextIcon,
        bsProps = properties.bsProps,
        prevLabel = properties.prevLabel,
        nextLabel = properties.nextLabel;
    var controlClassName = bootstrapUtils_prefix(bsProps, 'control');
    var count = ValidComponentChildren.count(children);
    return [(wrap || activeIndex !== 0) && external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_SafeAnchor, {
      key: "prev",
      className: classnames_default()(controlClassName, 'left'),
      onClick: this.handlePrev,
      __source: {
        fileName: Carousel__jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, prevIcon, prevLabel && external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: Carousel__jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, prevLabel)), (wrap || activeIndex !== count - 1) && external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_SafeAnchor, {
      key: "next",
      className: classnames_default()(controlClassName, 'right'),
      onClick: this.handleNext,
      __source: {
        fileName: Carousel__jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, nextIcon, nextLabel && external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: Carousel__jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, nextLabel))];
  };

  _proto.renderIndicators = function renderIndicators(children, activeIndex, bsProps) {
    var _this3 = this;

    var indicators = [];
    ValidComponentChildren.forEach(children, function (child, index) {
      indicators.push(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("li", {
        key: index,
        className: index === activeIndex ? 'active' : null,
        onClick: function onClick(e) {
          return _this3.select(index, e);
        },
        __source: {
          fileName: Carousel__jsxFileName,
          lineNumber: 318
        },
        __self: this
      }), // Force whitespace between indicator elements. Bootstrap requires
      // this for correct spacing of elements.
      ' ');
    });
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("ol", {
      className: bootstrapUtils_prefix(bsProps, 'indicators'),
      __source: {
        fileName: Carousel__jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, indicators);
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props2 = this.props,
        slide = _this$props2.slide,
        indicators = _this$props2.indicators,
        controls = _this$props2.controls,
        wrap = _this$props2.wrap,
        prevIcon = _this$props2.prevIcon,
        prevLabel = _this$props2.prevLabel,
        nextIcon = _this$props2.nextIcon,
        nextLabel = _this$props2.nextLabel,
        className = _this$props2.className,
        children = _this$props2.children,
        props = _objectWithoutProperties(_this$props2, ["slide", "indicators", "controls", "wrap", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children"]);

    var _this$state = this.state,
        previousActiveIndex = _this$state.previousActiveIndex,
        direction = _this$state.direction;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['interval', 'pauseOnHover', 'onSelect', 'onSlideEnd', 'activeIndex', // Accessed via this.getActiveIndex().
    'defaultActiveIndex', 'direction']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var activeIndex = this.getActiveIndex();

    var classes = _extends({}, getClassSet(bsProps), {
      slide: slide
    });

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      onMouseOver: this.handleMouseOver,
      onMouseOut: this.handleMouseOut,
      __source: {
        fileName: Carousel__jsxFileName,
        lineNumber: 368
      },
      __self: this
    }), indicators && this.renderIndicators(children, activeIndex, bsProps), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: bootstrapUtils_prefix(bsProps, 'inner'),
      __source: {
        fileName: Carousel__jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, ValidComponentChildren.map(children, function (child, index) {
      var active = index === activeIndex;
      var previousActive = slide && index === previousActiveIndex;
      return Object(external___root___React___commonjs2___react___commonjs___react___amd___react__["cloneElement"])(child, {
        active: active,
        index: index,
        animateOut: previousActive,
        animateIn: active && previousActiveIndex != null && slide,
        direction: direction,
        onAnimateOutEnd: previousActive ? _this4.handleItemAnimateOutEnd : null
      });
    })), controls && this.renderControls({
      wrap: wrap,
      children: children,
      activeIndex: activeIndex,
      prevIcon: prevIcon,
      prevLabel: prevLabel,
      nextIcon: nextIcon,
      nextLabel: nextLabel,
      bsProps: bsProps
    }));
  };

  _inheritsLoose(Carousel, _React$Component);

  return Carousel;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Carousel_Carousel.propTypes = Carousel_propTypes;
Carousel_Carousel.defaultProps = Carousel_defaultProps;
Carousel_Carousel.Caption = src_CarouselCaption;
Carousel_Carousel.Item = src_CarouselItem;
/* harmony default export */ var src_Carousel = (bootstrapUtils_bsClass('carousel', Carousel_Carousel));
// CONCATENATED MODULE: ./src/Checkbox.js



var Checkbox__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Checkbox.js";

/* eslint-disable jsx-a11y/label-has-for */




var Checkbox_propTypes = {
  inline: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  title: prop_types_default.a.string,
  isValid: prop_types_default.a.bool.isRequired,
  isInvalid: prop_types_default.a.bool.isRequired,

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: prop_types_default.a.func
};
var Checkbox_defaultProps = {
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};

var Checkbox_Checkbox =
/*#__PURE__*/
function (_React$Component) {
  function Checkbox() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Checkbox.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        isValid = _this$props.isValid,
        isInvalid = _this$props.isInvalid,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["inline", "disabled", "isValid", "isInvalid", "inputRef", "className", "style", "title", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: classnames_default()(className, disabled && 'disabled', inline && bootstrapUtils_prefix(bsProps, 'inline')),
      style: style,
      title: title,
      __source: {
        fileName: Checkbox__jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("label", {
      title: title,
      className: bootstrapUtils_prefix(bsProps, 'label'),
      __source: {
        fileName: Checkbox__jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("input", _extends({}, elementProps, {
      ref: inputRef,
      type: "checkbox",
      disabled: disabled,
      className: classnames_default()(bootstrapUtils_prefix(bsProps, 'input'), isValid && bootstrapUtils_prefix(bsProps, 'is-valid'), isInvalid && bootstrapUtils_prefix(bsProps, 'is-invalid')),
      __source: {
        fileName: Checkbox__jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), children));
  };

  _inheritsLoose(Checkbox, _React$Component);

  return Checkbox;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Checkbox_Checkbox.propTypes = Checkbox_propTypes;
Checkbox_Checkbox.defaultProps = Checkbox_defaultProps;
/* harmony default export */ var src_Checkbox = (bootstrapUtils_bsClass('form-check', Checkbox_Checkbox));
// CONCATENATED MODULE: ./src/utils/capitalize.js
function capitalize(string) {
  return "" + string.charAt(0).toUpperCase() + string.slice(1);
}
// CONCATENATED MODULE: ./src/Clearfix.js



var Clearfix__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Clearfix.js";







var Clearfix_propTypes = {
  componentClass: elementType_default.a,

  /**
   * Apply clearfix
   *
   * on Extra small devices Phones
   *
   * adds class `visible-xs-block`
   */
  visibleXsBlock: prop_types_default.a.bool,

  /**
   * Apply clearfix
   *
   * on Small devices Tablets
   *
   * adds class `visible-sm-block`
   */
  visibleSmBlock: prop_types_default.a.bool,

  /**
   * Apply clearfix
   *
   * on Medium devices Desktops
   *
   * adds class `visible-md-block`
   */
  visibleMdBlock: prop_types_default.a.bool,

  /**
   * Apply clearfix
   *
   * on Large devices Desktops
   *
   * adds class `visible-lg-block`
   */
  visibleLgBlock: prop_types_default.a.bool
};
var Clearfix_defaultProps = {
  componentClass: 'div'
};

var Clearfix_Clearfix =
/*#__PURE__*/
function (_React$Component) {
  function Clearfix() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Clearfix.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    DEVICE_SIZES.forEach(function (size) {
      var propName = "visible" + capitalize(size) + "Block";

      if (elementProps[propName]) {
        classes["visible-" + size + "-block"] = true;
      }

      delete elementProps[propName];
    });
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Clearfix__jsxFileName,
        lineNumber: 68
      },
      __self: this
    }));
  };

  _inheritsLoose(Clearfix, _React$Component);

  return Clearfix;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Clearfix_Clearfix.propTypes = Clearfix_propTypes;
Clearfix_Clearfix.defaultProps = Clearfix_defaultProps;
/* harmony default export */ var src_Clearfix = (bootstrapUtils_bsClass('clearfix', Clearfix_Clearfix));
// EXTERNAL MODULE: ./node_modules/warning/browser.js
var warning_browser = __webpack_require__(11);
var warning_browser_default = /*#__PURE__*/__webpack_require__.n(warning_browser);

// CONCATENATED MODULE: ./src/Col.js



var Col__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Col.js";






var Col_column = prop_types_default.a.oneOfType([prop_types_default.a.oneOf(['auto']), prop_types_default.a.number]);
var Col_propTypes = {
  componentClass: elementType_default.a,

  /**
   * The number of columns you wish to span
   *
   * for Extra small devices Phones (<576px)
   *
   * class-prefix `col-`
   */
  xs: Col_column,

  /**
   * The number of columns you wish to span
   *
   * for Small devices Tablets (≥576px)
   *
   * class-prefix `col-sm-`
   */
  sm: Col_column,

  /**
   * The number of columns you wish to span
   *
   * for Medium devices Desktops (≥768px)
   *
   * class-prefix `col-md-`
   */
  md: Col_column,

  /**
   * The number of columns you wish to span
   *
   * for Large devices Desktops (≥992px)
   *
   * class-prefix `col-lg-`
   */
  lg: Col_column,

  /**
   * The number of columns you wish to span
   *
   * for Large devices Desktops (≥1200px)
   *
   * class-prefix `col-xl-`
   */
  xl: Col_column
};
var Col_defaultProps = {
  componentClass: 'div'
};

var Col_Col =
/*#__PURE__*/
function (_React$Component) {
  function Col() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Col.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = [];
    DEVICE_SIZES.forEach(function (size) {
      var propValue = elementProps[size];
      if (propValue == null) return;

      if (size === 'xs') {
        // col and col-4
        classes.push(propValue === true ? bsProps.bsClass : bootstrapUtils_prefix(bsProps, "" + propValue));
      } else {
        // col-md-3
        classes.push(bootstrapUtils_prefix(bsProps, size + "-" + propValue));
      }

      delete elementProps[size];
    });

    if (!classes.length) {
      classes.push(bsProps.bsClass); // plain 'col'
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Col__jsxFileName,
        lineNumber: 99
      },
      __self: this
    }));
  };

  _inheritsLoose(Col, _React$Component);

  return Col;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Col_Col.propTypes = Col_propTypes;
Col_Col.defaultProps = Col_defaultProps;
/* harmony default export */ var src_Col = (bootstrapUtils_bsClass('col', Col_Col));
// CONCATENATED MODULE: ./src/FormLabel.js



var FormLabel__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/FormLabel.js";






var FormLabel_propTypes = {
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  htmlFor: prop_types_default.a.string,
  column: prop_types_default.a.bool,
  srOnly: prop_types_default.a.bool
};
var FormLabel_defaultProps = {
  column: false,
  srOnly: false
};
var contextTypes = {
  $bs_formGroup: prop_types_default.a.object
};

var FormLabel_FormLabel =
/*#__PURE__*/
function (_React$Component) {
  function FormLabel() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormLabel.prototype;

  _proto.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _this$props = this.props,
        column = _this$props.column,
        _this$props$htmlFor = _this$props.htmlFor,
        htmlFor = _this$props$htmlFor === void 0 ? controlId : _this$props$htmlFor,
        srOnly = _this$props.srOnly,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["column", "htmlFor", "srOnly", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    undefined !== "production" ? warning_browser_default()(controlId == null || htmlFor === controlId, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;

    var classes = _extends({}, getClassSet(bsProps), {
      'sr-only': srOnly
    });

    if (column) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Col, _extends({}, elementProps, {
        componentClass: "label",
        htmlFor: htmlFor,
        className: classnames_default()(className, 'col-form-label', classes),
        __source: {
          fileName: FormLabel__jsxFileName,
          lineNumber: 53
        },
        __self: this
      }));
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("label", _extends({}, elementProps, {
      htmlFor: htmlFor,
      className: classnames_default()(className, classes),
      __source: {
        fileName: FormLabel__jsxFileName,
        lineNumber: 62
      },
      __self: this
    }));
  };

  _inheritsLoose(FormLabel, _React$Component);

  return FormLabel;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

FormLabel_FormLabel.propTypes = FormLabel_propTypes;
FormLabel_FormLabel.defaultProps = FormLabel_defaultProps;
FormLabel_FormLabel.contextTypes = contextTypes;
/* harmony default export */ var src_FormLabel = (bootstrapUtils_bsClass('form-label', FormLabel_FormLabel));
// EXTERNAL MODULE: ./node_modules/dom-helpers/style/index.js
var dom_helpers_style = __webpack_require__(29);
var style_default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style);

// EXTERNAL MODULE: ./node_modules/react-transition-group/Transition.js
var react_transition_group_Transition = __webpack_require__(85);
var Transition_default = /*#__PURE__*/__webpack_require__.n(react_transition_group_Transition);

// CONCATENATED MODULE: ./src/Collapse.js





var _collapseStyles,
    Collapse__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Collapse.js";








var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
}; // reading a dimension prop will cause the browser to recalculate,
// which will let our animations work

function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

function getDimensionValue(dimension, elem) {
  var value = elem["offset" + capitalize(dimension)];
  var margins = MARGINS[dimension];
  return value + parseInt(style_default()(elem, margins[0]), 10) + parseInt(style_default()(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[react_transition_group_Transition["EXITED"]] = 'collapse', _collapseStyles[react_transition_group_Transition["EXITING"]] = 'collapsing', _collapseStyles[react_transition_group_Transition["ENTERING"]] = 'collapsing', _collapseStyles[react_transition_group_Transition["ENTERED"]] = 'collapse show', _collapseStyles);
var Collapse_propTypes = {
  /**
   * Show the component; triggers the expand or collapse animation
   */
  in: prop_types_default.a.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is collapsed
   */
  unmountOnExit: prop_types_default.a.bool,

  /**
   * Run the expand animation when the component mounts, if it is initially
   * shown
   */
  appear: prop_types_default.a.bool,

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout: prop_types_default.a.number,

  /**
   * Callback fired before the component expands
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to expand
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the component has expanded
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired before the component collapses
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the component has collapsed
   */
  onExited: prop_types_default.a.func,

  /**
   * The dimension used when collapsing, or a function that returns the
   * dimension
   *
   * _Note: Bootstrap only partially supports 'width'!
   * You will need to supply your own CSS animation for the `.width` CSS class._
   */
  dimension: prop_types_default.a.oneOfType([prop_types_default.a.oneOf(['height', 'width']), prop_types_default.a.func]),

  /**
   * Function that returns the height or width of the animating DOM node
   *
   * Allows for providing some custom logic for how much the Collapse component
   * should animate in its specified dimension. Called with the current
   * dimension prop value and the DOM node.
   */
  getDimensionValue: prop_types_default.a.func,

  /**
   * ARIA role of collapsible element
   */
  role: prop_types_default.a.string
};
var Collapse_defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  dimension: 'height',
  getDimensionValue: getDimensionValue
};

var Collapse_Collapse =
/*#__PURE__*/
function (_React$Component) {
  function Collapse() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleEnter = function (elem) {
      elem.style[_this.getDimension()] = '0';
    }, _this.handleEntering = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this._getScrollDimensionValue(elem, dimension);
    }, _this.handleEntered = function (elem) {
      elem.style[_this.getDimension()] = null;
    }, _this.handleExit = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this.props.getDimensionValue(dimension, elem) + "px";
      triggerBrowserReflow(elem);
    }, _this.handleExiting = function (elem) {
      elem.style[_this.getDimension()] = '0';
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Collapse.prototype;

  _proto.getDimension = function getDimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  }; // for testing


  _proto._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    return elem["scroll" + capitalize(dimension)] + "px";
  };
  /* -- Expanding -- */


  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children"]);

    delete props.dimension;
    delete props.getDimensionValue;
    var handleEnter = utils_createChainedFunction(this.handleEnter, onEnter);
    var handleEntering = utils_createChainedFunction(this.handleEntering, onEntering);
    var handleEntered = utils_createChainedFunction(this.handleEntered, onEntered);
    var handleExit = utils_createChainedFunction(this.handleExit, onExit);
    var handleExiting = utils_createChainedFunction(this.handleExiting, onExiting);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Transition_default.a, _extends({}, props, {
      "aria-expanded": props.role ? props.in : null,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExit: handleExit,
      onExiting: handleExiting,
      __source: {
        fileName: Collapse__jsxFileName,
        lineNumber: 201
      },
      __self: this
    }), function (state, innerProps) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.cloneElement(children, _extends({}, innerProps, {
        className: classnames_default()(className, children.props.className, collapseStyles[state], _this2.getDimension() === 'width' && 'width')
      }));
    });
  };

  _inheritsLoose(Collapse, _React$Component);

  return Collapse;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Collapse_Collapse.propTypes = Collapse_propTypes;
Collapse_Collapse.defaultProps = Collapse_defaultProps;
/* harmony default export */ var src_Collapse = (Collapse_Collapse);
// EXTERNAL MODULE: ./node_modules/dom-helpers/activeElement.js
var activeElement = __webpack_require__(86);
var activeElement_default = /*#__PURE__*/__webpack_require__.n(activeElement);

// EXTERNAL MODULE: ./node_modules/dom-helpers/query/contains.js
var contains = __webpack_require__(23);
var contains_default = /*#__PURE__*/__webpack_require__.n(contains);

// EXTERNAL MODULE: ./node_modules/keycode/index.js
var keycode = __webpack_require__(87);
var keycode_default = /*#__PURE__*/__webpack_require__.n(keycode);

// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/all.js
var lib_all = __webpack_require__(59);
var all_default = /*#__PURE__*/__webpack_require__.n(lib_all);

// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/isRequiredForA11y.js
var isRequiredForA11y = __webpack_require__(37);
var isRequiredForA11y_default = /*#__PURE__*/__webpack_require__.n(isRequiredForA11y);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/core-js/array/from.js
var from = __webpack_require__(159);
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/react-overlays/lib/RootCloseWrapper.js
var RootCloseWrapper = __webpack_require__(88);
var RootCloseWrapper_default = /*#__PURE__*/__webpack_require__.n(RootCloseWrapper);

// CONCATENATED MODULE: ./src/DropdownMenu.js





var DropdownMenu__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/DropdownMenu.js";









var DropdownMenu_propTypes = {
  open: prop_types_default.a.bool,
  pullRight: prop_types_default.a.bool,
  onClose: prop_types_default.a.func,
  labelledBy: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  onSelect: prop_types_default.a.func,
  rootCloseEvent: prop_types_default.a.oneOf(['click', 'mousedown'])
};
var DropdownMenu_defaultProps = {
  bsRole: 'menu',
  pullRight: false
};

var DropdownMenu_DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  function DropdownMenu(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleRootClose = _this.handleRootClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getFocusableMenuItems = function getFocusableMenuItems() {
    var node = external___root___ReactDOM___commonjs2___react_dom___commonjs___react_dom___amd___react_dom___default.a.findDOMNode(this);

    if (!node) {
      return [];
    }

    return from_default()(node.querySelectorAll('[tabIndex="-1"]'));
  };

  _proto.getItemsAndActiveIndex = function getItemsAndActiveIndex() {
    var items = this.getFocusableMenuItems();
    var activeIndex = items.indexOf(document.activeElement);
    return {
      items: items,
      activeIndex: activeIndex
    };
  };

  _proto.focusNext = function focusNext() {
    var _this$getItemsAndActi = this.getItemsAndActiveIndex(),
        items = _this$getItemsAndActi.items,
        activeIndex = _this$getItemsAndActi.activeIndex;

    if (items.length === 0) {
      return;
    }

    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    items[nextIndex].focus();
  };

  _proto.focusPrevious = function focusPrevious() {
    var _this$getItemsAndActi2 = this.getItemsAndActiveIndex(),
        items = _this$getItemsAndActi2.items,
        activeIndex = _this$getItemsAndActi2.activeIndex;

    if (items.length === 0) {
      return;
    }

    var prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    items[prevIndex].focus();
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case keycode_default.a.codes.down:
        this.focusNext();
        event.preventDefault();
        break;

      case keycode_default.a.codes.up:
        this.focusPrevious();
        event.preventDefault();
        break;

      case keycode_default.a.codes.esc:
      case keycode_default.a.codes.tab:
        this.props.onClose(event, {
          source: 'keydown'
        });
        break;

      default:
    }
  };

  _proto.handleRootClose = function handleRootClose(event) {
    this.props.onClose(event, {
      source: 'rootClose'
    });
  };

  _proto.render = function render() {
    var _extends2,
        _this2 = this;

    var _this$props = this.props,
        open = _this$props.open,
        pullRight = _this$props.pullRight,
        labelledBy = _this$props.labelledBy,
        onSelect = _this$props.onSelect,
        className = _this$props.className,
        rootCloseEvent = _this$props.rootCloseEvent,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["open", "pullRight", "labelledBy", "onSelect", "className", "rootCloseEvent", "children"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['onClose']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[bootstrapUtils_prefix(bsProps, 'right')] = pullRight, _extends2));

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(RootCloseWrapper_default.a, {
      disabled: !open,
      onRootClose: this.handleRootClose,
      event: rootCloseEvent,
      __source: {
        fileName: DropdownMenu__jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      role: "menu",
      className: classnames_default()(className, classes),
      "aria-labelledby": labelledBy,
      __source: {
        fileName: DropdownMenu__jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), ValidComponentChildren.map(children, function (child) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.cloneElement(child, {
        onKeyDown: utils_createChainedFunction(child.props.onKeyDown, _this2.handleKeyDown),
        onSelect: utils_createChainedFunction(child.props.onSelect, onSelect)
      });
    })));
  };

  _inheritsLoose(DropdownMenu, _React$Component);

  return DropdownMenu;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

DropdownMenu_DropdownMenu.propTypes = DropdownMenu_propTypes;
DropdownMenu_DropdownMenu.defaultProps = DropdownMenu_defaultProps;
/* harmony default export */ var src_DropdownMenu = (bootstrapUtils_bsClass('dropdown-menu', DropdownMenu_DropdownMenu));
// CONCATENATED MODULE: ./src/DropdownToggle.js



var DropdownToggle__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/DropdownToggle.js";






var DropdownToggle_propTypes = {
  open: prop_types_default.a.bool,
  title: prop_types_default.a.string,
  useAnchor: prop_types_default.a.bool
};
var DropdownToggle_defaultProps = {
  open: false,
  useAnchor: false,
  bsRole: 'toggle'
};

var DropdownToggle_DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  function DropdownToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        open = _this$props.open,
        useAnchor = _this$props.useAnchor,
        bsClass = _this$props.bsClass,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["open", "useAnchor", "bsClass", "className", "children"]);

    delete props.bsRole;
    var Component = useAnchor ? src_SafeAnchor : src_Button; // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.
    // FIXME: Should this really fall back to `title` as children?

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      role: "button",
      className: classnames_default()(className, bsClass),
      "aria-haspopup": true,
      "aria-expanded": open,
      __source: {
        fileName: DropdownToggle__jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), children || props.title);
  };

  _inheritsLoose(DropdownToggle, _React$Component);

  return DropdownToggle;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

DropdownToggle_DropdownToggle.propTypes = DropdownToggle_propTypes;
DropdownToggle_DropdownToggle.defaultProps = DropdownToggle_defaultProps;
/* harmony default export */ var src_DropdownToggle = (bootstrapUtils_bsClass('dropdown-toggle', DropdownToggle_DropdownToggle));
// CONCATENATED MODULE: ./src/Dropdown.js




var Dropdown__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Dropdown.js";



















var TOGGLE_ROLE = src_DropdownToggle.defaultProps.bsRole;
var MENU_ROLE = src_DropdownMenu.defaultProps.bsRole;
var Dropdown_propTypes = {
  /**
   * The menu will open above the dropdown button, instead of below it.
   */
  dropup: prop_types_default.a.bool,

  /**
   * An html id attribute, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: isRequiredForA11y_default()(prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])),
  componentClass: elementType_default.a,

  /**
   * The children of a Dropdown may be a `<Dropdown.Toggle>` or a `<Dropdown.Menu>`.
   * @type {node}
   */
  children: all_default()(requiredRoles(TOGGLE_ROLE, MENU_ROLE), exclusiveRoles(MENU_ROLE)),

  /**
   * Whether or not component is disabled.
   */
  disabled: prop_types_default.a.bool,

  /**
   * Align the menu to the right side of the Dropdown toggle
   */
  pullRight: prop_types_default.a.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  open: prop_types_default.a.bool,
  defaultOpen: prop_types_default.a.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `open` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```js
   * function(Boolean isOpen, Object event, { String source }) {}
   * ```
   * @controllable open
   */
  onToggle: prop_types_default.a.func,

  /**
   * A callback fired when a menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: prop_types_default.a.func,

  /**
   * If `'menuitem'`, causes the dropdown to behave like a menu item rather than
   * a menu button.
   */
  role: prop_types_default.a.string,

  /**
   * Which event when fired outside the component will cause it to be closed
   *
   * *Note: For custom dropdown components, you will have to pass the
   * `rootCloseEvent` to `<RootCloseWrapper>` in your custom dropdown menu
   * component ([similarly to how it is implemented in `<Dropdown.Menu>`](https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.5/src/DropdownMenu.js#L115-L119)).*
   */
  rootCloseEvent: prop_types_default.a.oneOf(['click', 'mousedown']),

  /**
   * @private
   */
  onMouseEnter: prop_types_default.a.func,

  /**
   * @private
   */
  onMouseLeave: prop_types_default.a.func
};
var Dropdown_defaultProps = {
  componentClass: src_ButtonGroup
};

var Dropdown_Dropdown =
/*#__PURE__*/
function (_React$Component) {
  function Dropdown(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._focusInDropdown = false;
    _this.lastOpenEventType = null;
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.focusNextOnOpen();
  };

  _proto.componentWillUpdate = function componentWillUpdate(nextProps) {
    if (!nextProps.open && this.props.open) {
      this._focusInDropdown = contains_default()(external___root___ReactDOM___commonjs2___react_dom___commonjs___react_dom___amd___react_dom___default.a.findDOMNode(this.menu), activeElement_default()(document));
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var open = this.props.open;
    var prevOpen = prevProps.open;

    if (open && !prevOpen) {
      this.focusNextOnOpen();
    }

    if (!open && prevOpen) {
      // if focus hasn't already moved from the menu let's return it
      // to the toggle
      if (this._focusInDropdown) {
        this._focusInDropdown = false;
        this.focus();
      }
    }
  };

  _proto.focus = function focus() {
    var toggle = external___root___ReactDOM___commonjs2___react_dom___commonjs___react_dom___amd___react_dom___default.a.findDOMNode(this.toggle);

    if (toggle && toggle.focus) {
      toggle.focus();
    }
  };

  _proto.focusNextOnOpen = function focusNextOnOpen() {
    var menu = this.menu;

    if (!menu.focusNext) {
      return;
    }

    if (this.lastOpenEventType === 'keydown' || this.props.role === 'menuitem') {
      menu.focusNext();
    }
  };

  _proto.handleClick = function handleClick(event) {
    if (this.props.disabled) {
      return;
    }

    this.toggleOpen(event, {
      source: 'click'
    });
  };

  _proto.handleClose = function handleClose(event, eventDetails) {
    if (!this.props.open) {
      return;
    }

    this.toggleOpen(event, eventDetails);
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (this.props.disabled) {
      return;
    }

    switch (event.keyCode) {
      case keycode_default.a.codes.down:
        if (!this.props.open) {
          this.toggleOpen(event, {
            source: 'keydown'
          });
        } else if (this.menu.focusNext) {
          this.menu.focusNext();
        }

        event.preventDefault();
        break;

      case keycode_default.a.codes.esc:
      case keycode_default.a.codes.tab:
        this.handleClose(event, {
          source: 'keydown'
        });
        break;

      default:
    }
  };

  _proto.toggleOpen = function toggleOpen(event, eventDetails) {
    var open = !this.props.open;

    if (open) {
      this.lastOpenEventType = eventDetails.source;
    }

    if (this.props.onToggle) {
      this.props.onToggle(open, event, eventDetails);
    }
  };

  _proto.renderMenu = function renderMenu(child, _ref) {
    var _this2 = this;

    var id = _ref.id,
        onSelect = _ref.onSelect,
        rootCloseEvent = _ref.rootCloseEvent,
        props = _objectWithoutProperties(_ref, ["id", "onSelect", "rootCloseEvent"]);

    var ref = function ref(c) {
      _this2.menu = c;
    };

    if (typeof child.ref === 'string') {
      undefined !== "production" ? warning_browser_default()(false, 'String refs are not supported on `<Dropdown.Menu>` components. ' + 'To apply a ref to the component use the callback signature:\n\n ' + 'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute') : void 0;
    } else {
      ref = utils_createChainedFunction(child.ref, ref);
    }

    return Object(external___root___React___commonjs2___react___commonjs___react___amd___react__["cloneElement"])(child, _extends({}, props, {
      ref: ref,
      labelledBy: id,
      bsClass: bootstrapUtils_prefix(props, 'menu'),
      onClose: utils_createChainedFunction(child.props.onClose, this.handleClose),
      onSelect: utils_createChainedFunction(child.props.onSelect, onSelect, function (key, event) {
        return _this2.handleClose(event, {
          source: 'select'
        });
      }),
      rootCloseEvent: rootCloseEvent
    }));
  };

  _proto.renderToggle = function renderToggle(child, props) {
    var _this3 = this;

    var ref = function ref(c) {
      _this3.toggle = c;
    };

    if (typeof child.ref === 'string') {
      undefined !== "production" ? warning_browser_default()(false, 'String refs are not supported on `<Dropdown.Toggle>` components. ' + 'To apply a ref to the component use the callback signature:\n\n ' + 'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute') : void 0;
    } else {
      ref = utils_createChainedFunction(child.ref, ref);
    }

    return Object(external___root___React___commonjs2___react___commonjs___react___amd___react__["cloneElement"])(child, _extends({}, props, {
      ref: ref,
      bsClass: bootstrapUtils_prefix(props, 'toggle'),
      onClick: utils_createChainedFunction(child.props.onClick, this.handleClick),
      onKeyDown: utils_createChainedFunction(child.props.onKeyDown, this.handleKeyDown)
    }));
  };

  _proto.render = function render() {
    var _classes,
        _this4 = this;

    var _this$props = this.props,
        Component = _this$props.componentClass,
        id = _this$props.id,
        dropup = _this$props.dropup,
        disabled = _this$props.disabled,
        pullRight = _this$props.pullRight,
        open = _this$props.open,
        onSelect = _this$props.onSelect,
        role = _this$props.role,
        bsClass = _this$props.bsClass,
        className = _this$props.className,
        rootCloseEvent = _this$props.rootCloseEvent,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["componentClass", "id", "dropup", "disabled", "pullRight", "open", "onSelect", "role", "bsClass", "className", "rootCloseEvent", "children"]);

    delete props.onToggle;
    var classes = (_classes = {}, _classes[bsClass] = true, _classes.open = open, _classes.disabled = disabled, _classes);

    if (dropup) {
      classes[bsClass] = false;
      classes.dropup = true;
    } // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.


    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Dropdown__jsxFileName,
        lineNumber: 328
      },
      __self: this
    }), ValidComponentChildren.map(children, function (child) {
      switch (child.props.bsRole) {
        case TOGGLE_ROLE:
          return _this4.renderToggle(child, {
            id: id,
            disabled: disabled,
            open: open,
            role: role,
            bsClass: bsClass
          });

        case MENU_ROLE:
          return _this4.renderMenu(child, {
            id: id,
            open: open,
            pullRight: pullRight,
            bsClass: bsClass,
            onSelect: onSelect,
            rootCloseEvent: rootCloseEvent
          });

        default:
          return child;
      }
    }));
  };

  _inheritsLoose(Dropdown, _React$Component);

  return Dropdown;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Dropdown_Dropdown.propTypes = Dropdown_propTypes;
Dropdown_Dropdown.defaultProps = Dropdown_defaultProps;
bootstrapUtils_bsClass('dropdown', Dropdown_Dropdown);
var UncontrolledDropdown = uncontrollable_default()(Dropdown_Dropdown, {
  open: 'onToggle'
});
UncontrolledDropdown.Toggle = src_DropdownToggle;
UncontrolledDropdown.Menu = src_DropdownMenu;
/* harmony default export */ var src_Dropdown = (UncontrolledDropdown);
// CONCATENATED MODULE: ./src/utils/splitComponentProps.js

function splitComponentProps(props, Component) {
  var componentPropTypes = Component.propTypes;
  var parentProps = {};
  var childProps = {};

  entries_default()(props).forEach(function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });

  return [parentProps, childProps];
}
// CONCATENATED MODULE: ./src/DropdownButton.js



var DropdownButton__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/DropdownButton.js";





var DropdownButton_propTypes = _extends({}, src_Dropdown.propTypes, {
  // Toggle props.
  bsStyle: prop_types_default.a.string,
  bsSize: prop_types_default.a.string,
  title: prop_types_default.a.node.isRequired,
  noCaret: prop_types_default.a.bool,
  // Override generated docs from <Dropdown>.

  /**
   * @private
   */
  children: prop_types_default.a.node
});

var DropdownButton_DropdownButton =
/*#__PURE__*/
function (_React$Component) {
  function DropdownButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsSize = _this$props.bsSize,
        bsStyle = _this$props.bsStyle,
        title = _this$props.title,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["bsSize", "bsStyle", "title", "children"]);

    var _splitComponentProps = splitComponentProps(props, src_Dropdown.ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        toggleProps = _splitComponentProps[1];

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Dropdown, _extends({}, dropdownProps, {
      bsSize: bsSize,
      bsStyle: bsStyle,
      __source: {
        fileName: DropdownButton__jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Dropdown.Toggle, _extends({}, toggleProps, {
      bsSize: bsSize,
      bsStyle: bsStyle,
      __source: {
        fileName: DropdownButton__jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), title), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Dropdown.Menu, {
      __source: {
        fileName: DropdownButton__jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, children));
  };

  _inheritsLoose(DropdownButton, _React$Component);

  return DropdownButton;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

DropdownButton_DropdownButton.propTypes = DropdownButton_propTypes;
/* harmony default export */ var src_DropdownButton = (DropdownButton_DropdownButton);
// CONCATENATED MODULE: ./src/Fade.js





var _fadeStyles,
    Fade__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Fade.js";





var Fade_propTypes = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  in: prop_types_default.a.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: prop_types_default.a.bool,

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear: prop_types_default.a.bool,

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: prop_types_default.a.number,

  /**
   * Callback fired before the component fades in
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the has component faded in
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired before the component fades out
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the component has faded out
   */
  onExited: prop_types_default.a.func
};
var Fade_defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[react_transition_group_Transition["ENTERING"]] = 'show', _fadeStyles[react_transition_group_Transition["ENTERED"]] = 'show', _fadeStyles);

function Fade_triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

var Fade_Fade =
/*#__PURE__*/
function (_React$Component) {
  function Fade() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleEnter = function (node) {
      Fade_triggerBrowserReflow(node);
      if (_this.props.onEnter) _this.props.onEnter(node);
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Fade.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["className", "children"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Transition_default.a, _extends({}, props, {
      onEnter: this.handleEnter,
      __source: {
        fileName: Fade__jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), function (status, innerProps) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.cloneElement(children, _extends({}, innerProps, {
        className: classnames_default()('fade', className, children.props.className, fadeStyles[status])
      }));
    });
  };

  _inheritsLoose(Fade, _React$Component);

  return Fade;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Fade_Fade.propTypes = Fade_propTypes;
Fade_Fade.defaultProps = Fade_defaultProps;
/* harmony default export */ var src_Fade = (Fade_Fade);
// CONCATENATED MODULE: ./src/Form.js



var Form__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Form.js";





var Form_propTypes = {
  horizontal: prop_types_default.a.bool,
  inline: prop_types_default.a.bool,
  componentClass: elementType_default.a
};
var Form_defaultProps = {
  horizontal: false,
  inline: false,
  componentClass: 'form'
};

var Form_Form =
/*#__PURE__*/
function (_React$Component) {
  function Form() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Form.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        horizontal = _this$props.horizontal,
        inline = _this$props.inline,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["horizontal", "inline", "componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = [];

    if (horizontal) {
      classes.push(bootstrapUtils_prefix(bsProps, 'horizontal'));
    }

    if (inline) {
      classes.push(bootstrapUtils_prefix(bsProps, 'inline'));
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Form__jsxFileName,
        lineNumber: 41
      },
      __self: this
    }));
  };

  _inheritsLoose(Form, _React$Component);

  return Form;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Form_Form.propTypes = Form_propTypes;
Form_Form.defaultProps = Form_defaultProps;
/* harmony default export */ var src_Form = (bootstrapUtils_bsClass('form', Form_Form));
// CONCATENATED MODULE: ./src/InvalidFeedback.js



var InvalidFeedback__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/InvalidFeedback.js";




var InvalidFeedback_propTypes = {
  componentClass: elementType_default.a
};
var InvalidFeedback_defaultProps = {
  componentClass: 'div'
};

var InvalidFeedback_InvalidFeedback =
/*#__PURE__*/
function (_React$Component) {
  function InvalidFeedback() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InvalidFeedback.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        Component = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["className", "componentClass"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, getClassSet(bsProps)),
      __source: {
        fileName: InvalidFeedback__jsxFileName,
        lineNumber: 21
      },
      __self: this
    }));
  };

  _inheritsLoose(InvalidFeedback, _React$Component);

  return InvalidFeedback;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

InvalidFeedback_InvalidFeedback.defaultProps = InvalidFeedback_defaultProps;
InvalidFeedback_InvalidFeedback.propTypes = InvalidFeedback_propTypes;
/* harmony default export */ var src_InvalidFeedback = (bootstrapUtils_bsClass('invalid-feedback', InvalidFeedback_InvalidFeedback));
// CONCATENATED MODULE: ./src/FormControl.js



var FormControl__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/FormControl.js";








var FormControl_propTypes = {
  componentClass: elementType_default.a,

  /**
   * Render the input as plain text.
   */
  plaintext: prop_types_default.a.bool,

  /** @ignore */
  readOnly: prop_types_default.a.bool,

  /**
   * Only relevant if `componentClass` is `'input'`.
   */
  type: prop_types_default.a.string,

  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: prop_types_default.a.string,

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <FormControl inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: prop_types_default.a.func,
  isValid: prop_types_default.a.bool.isRequired,
  isInvalid: prop_types_default.a.bool.isRequired
};
var FormControl_defaultProps = {
  componentClass: 'input'
};
var FormControl_contextTypes = {
  $bs_formGroup: prop_types_default.a.object
};

var FormControl_FormControl =
/*#__PURE__*/
function (_React$Component) {
  function FormControl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControl.prototype;

  _proto.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _this$props = this.props,
        Component = _this$props.componentClass,
        type = _this$props.type,
        _this$props$id = _this$props.id,
        id = _this$props$id === void 0 ? controlId : _this$props$id,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        isValid = _this$props.isValid,
        isInvalid = _this$props.isInvalid,
        plaintext = _this$props.plaintext,
        readOnly = _this$props.readOnly,
        props = _objectWithoutProperties(_this$props, ["componentClass", "type", "id", "inputRef", "className", "isValid", "isInvalid", "plaintext", "readOnly"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    undefined !== "production" ? warning_browser_default()(controlId == null || id === controlId, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
    var classes;

    if (type === 'file') {
      var _classes;

      classes = (_classes = {}, _classes[bootstrapUtils_prefix(bsProps, 'file')] = true, _classes);
    } else if (plaintext) {
      var _classes2;

      classes = (_classes2 = {}, _classes2[bootstrapUtils_prefix(bsProps, 'plaintext')] = true, _classes2);
    } else {
      classes = getClassSet(bsProps);
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      type: type,
      id: id,
      ref: inputRef,
      readOnly: readOnly || plaintext,
      className: classnames_default()(className, classes, isValid && bootstrapUtils_prefix(bsProps, 'is-valid'), isInvalid && bootstrapUtils_prefix(bsProps, 'is-invalid')),
      __source: {
        fileName: FormControl__jsxFileName,
        lineNumber: 89
      },
      __self: this
    }));
  };

  _inheritsLoose(FormControl, _React$Component);

  return FormControl;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

FormControl_FormControl.propTypes = FormControl_propTypes;
FormControl_FormControl.defaultProps = FormControl_defaultProps;
FormControl_FormControl.contextTypes = FormControl_contextTypes;
FormControl_FormControl.Feedback = src_InvalidFeedback;
/* harmony default export */ var src_FormControl = (bootstrapUtils_bsClass('form-control', bsSizes([Size.SMALL, Size.LARGE], FormControl_FormControl)));
// CONCATENATED MODULE: ./src/FormGroup.js



var FormGroup__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/FormGroup.js";







var FormGroup_propTypes = {
  componentClass: elementType_default.a,

  /**
   * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
   */
  controlId: prop_types_default.a.string,
  validationState: prop_types_default.a.oneOf(['success', 'warning', 'error', null])
};
var FormGroup_defaultProps = {
  componentClass: 'div'
};
var FormGroup_childContextTypes = {
  $bs_formGroup: prop_types_default.a.object.isRequired
};

var FormGroup_FormGroup =
/*#__PURE__*/
function (_React$Component) {
  function FormGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        controlId = _this$props.controlId,
        validationState = _this$props.validationState;
    return {
      $bs_formGroup: {
        controlId: controlId,
        validationState: validationState
      }
    };
  };

  _proto.hasFeedback = function hasFeedback(children) {
    var _this = this;

    return ValidComponentChildren.some(children, function (child) {
      return child.props.bsRole === 'feedback' || child.props.children && _this.hasFeedback(child.props.children);
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.componentClass,
        validationState = _this$props2.validationState,
        className = _this$props2.className,
        children = _this$props2.children,
        props = _objectWithoutProperties(_this$props2, ["componentClass", "validationState", "className", "children"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['controlId']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var classes = _extends({}, getClassSet(bsProps), {
      'has-feedback': this.hasFeedback(children)
    });

    if (validationState) {
      classes["has-" + validationState] = true;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: FormGroup__jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), children);
  };

  _inheritsLoose(FormGroup, _React$Component);

  return FormGroup;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

FormGroup_FormGroup.propTypes = FormGroup_propTypes;
FormGroup_FormGroup.defaultProps = FormGroup_defaultProps;
FormGroup_FormGroup.childContextTypes = FormGroup_childContextTypes;
/* harmony default export */ var src_FormGroup = (bootstrapUtils_bsClass('form-group', bsSizes([Size.LARGE, Size.SMALL], FormGroup_FormGroup)));
// CONCATENATED MODULE: ./src/Grid.js



var Grid__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Grid.js";





var Grid_propTypes = {
  /**
   * Turn any fixed-width grid layout into a full-width layout by this property.
   *
   * Adds `container-fluid` class.
   */
  fluid: prop_types_default.a.bool,

  /**
   * You can use a custom element for this component
   */
  componentClass: elementType_default.a
};
var Grid_defaultProps = {
  componentClass: 'div',
  fluid: false
};

var Grid_Grid =
/*#__PURE__*/
function (_React$Component) {
  function Grid() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Grid.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fluid = _this$props.fluid,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["fluid", "componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = bootstrapUtils_prefix(bsProps, fluid && 'fluid');
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Grid__jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));
  };

  _inheritsLoose(Grid, _React$Component);

  return Grid;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Grid_Grid.propTypes = Grid_propTypes;
Grid_Grid.defaultProps = Grid_defaultProps;
/* harmony default export */ var src_Grid = (bootstrapUtils_bsClass('container', Grid_Grid));
// CONCATENATED MODULE: ./src/HelpBlock.js



var HelpBlock__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/HelpBlock.js";




var HelpBlock_FormText =
/*#__PURE__*/
function (_React$Component) {
  function FormText() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormText.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: HelpBlock__jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
  };

  _inheritsLoose(FormText, _React$Component);

  return FormText;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

/* harmony default export */ var HelpBlock = (bootstrapUtils_bsClass('form-text', HelpBlock_FormText));
// CONCATENATED MODULE: ./src/Image.js



var Image__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Image.js";





var Image_Image =
/*#__PURE__*/
function (_React$Component) {
  function Image() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        fluid = _this$props.fluid,
        rounded = _this$props.rounded,
        roundedCircle = _this$props.roundedCircle,
        thumbnail = _this$props.thumbnail,
        props = _objectWithoutProperties(_this$props, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);

    var classes = classnames_default()(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("img", _extends({}, props, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Image__jsxFileName,
        lineNumber: 60
      },
      __self: this
    }));
  };

  _inheritsLoose(Image, _React$Component);

  return Image;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Image_Image.propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: prop_types_default.a.string,

  /**
   * Sets image as fluid image.
   */
  fluid: prop_types_default.a.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: prop_types_default.a.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: prop_types_default.a.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: prop_types_default.a.bool
};
Image_Image.defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
/* harmony default export */ var src_Image = (createBootstrapComponent(Image_Image, 'img'));
// CONCATENATED MODULE: ./src/FigureImage.js



var FigureImage__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/FigureImage.js";




var FigureImage_FigureImage =
/*#__PURE__*/
function (_React$Component) {
  function FigureImage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FigureImage.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["className"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Image, _extends({}, props, {
      className: classnames_default()(className, 'figure-img'),
      __source: {
        fileName: FigureImage__jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  };

  _inheritsLoose(FigureImage, _React$Component);

  return FigureImage;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

FigureImage_FigureImage.propTypes = src_Image.propTypes;
FigureImage_FigureImage.defaultProps = {
  fluid: true
};
/* harmony default export */ var src_FigureImage = (FigureImage_FigureImage);
// CONCATENATED MODULE: ./src/FigureCaption.js



var FigureCaption__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/FigureCaption.js";






var FigureCaption_FigureCaption =
/*#__PURE__*/
function (_React$Component) {
  function FigureCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FigureCaption.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "bsPrefix", "className"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, bsPrefix),
      __source: {
        fileName: FigureCaption__jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  };

  _inheritsLoose(FigureCaption, _React$Component);

  return FigureCaption;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

FigureCaption_FigureCaption.propTypes = {
  /**
   * @default 'figure-caption'
   */
  bsPrefix: prop_types_default.a.string,
  componentClass: elementType_default.a
};
FigureCaption_FigureCaption.defaultProps = {
  componentClass: 'figcaption'
};
/* harmony default export */ var src_FigureCaption = (createBootstrapComponent(FigureCaption_FigureCaption, 'figure-caption'));
// CONCATENATED MODULE: ./src/Figure.js



var Figure__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Figure.js";








var Figure_Figure =
/*#__PURE__*/
function (_React$Component) {
  function Figure() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Figure.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "bsPrefix", "className"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, bsPrefix),
      __source: {
        fileName: Figure__jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  };

  _inheritsLoose(Figure, _React$Component);

  return Figure;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Figure_Figure.propTypes = {
  /**
   * @default 'figure'
   */
  bsPrefix: prop_types_default.a.string,
  componentClass: elementType_default.a
};
Figure_Figure.defaultProps = {
  componentClass: 'figure'
};
var DecoratedFigure = createBootstrapComponent(Figure_Figure, 'figure');
DecoratedFigure.Image = src_FigureImage;
DecoratedFigure.Caption = src_FigureCaption;
/* harmony default export */ var src_Figure = (DecoratedFigure);
// CONCATENATED MODULE: ./src/InputGroupAddon.js



var InputGroupAddon__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/InputGroupAddon.js";




var InputGroupAddon_InputGroupAddon =
/*#__PURE__*/
function (_React$Component) {
  function InputGroupAddon() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroupAddon.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: InputGroupAddon__jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
  };

  _inheritsLoose(InputGroupAddon, _React$Component);

  return InputGroupAddon;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

/* harmony default export */ var src_InputGroupAddon = (bootstrapUtils_bsClass('input-group-addon', InputGroupAddon_InputGroupAddon));
// CONCATENATED MODULE: ./src/InputGroupButton.js



var InputGroupButton__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/InputGroupButton.js";




var InputGroupButton_InputGroupButton =
/*#__PURE__*/
function (_React$Component) {
  function InputGroupButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroupButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: InputGroupButton__jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
  };

  _inheritsLoose(InputGroupButton, _React$Component);

  return InputGroupButton;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

/* harmony default export */ var src_InputGroupButton = (bootstrapUtils_bsClass('input-group-btn', InputGroupButton_InputGroupButton));
// EXTERNAL MODULE: ./node_modules/dom-helpers/util/camelize.js
var camelize = __webpack_require__(84);
var camelize_default = /*#__PURE__*/__webpack_require__.n(camelize);

// CONCATENATED MODULE: ./src/utils/createWithBsPrefix.js



var createWithBsPrefix__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/utils/createWithBsPrefix.js";





var createWithBsPrefix_pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + camelize_default()(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _class, _temp2;

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? createWithBsPrefix_pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component;

  return createBootstrapComponent((_temp2 = _class =
  /*#__PURE__*/
  function (_React$Component) {
    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          bsPrefix = _this$props.bsPrefix,
          _this$props$component = _this$props.componentClass,
          Tag = _this$props$component === void 0 ? Component : _this$props$component,
          props = _objectWithoutProperties(_this$props, ["className", "bsPrefix", "componentClass"]);

      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Tag, _extends({}, props, {
        className: classnames_default()(className, bsPrefix),
        __source: {
          fileName: createWithBsPrefix__jsxFileName,
          lineNumber: 25
        },
        __self: this
      }));
    };

    _inheritsLoose(_class, _React$Component);

    return _class;
  }(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component), _class.displayName = displayName, _class.propTypes = {
    bsPrefix: function bsPrefix() {},
    componentClass: function componentClass() {}
  }, _temp2), prefix);
}
// CONCATENATED MODULE: ./src/InputGroupText.js

/* harmony default export */ var InputGroupText = (createWithBsPrefix('input-group-text'));
// CONCATENATED MODULE: ./src/InputGroupPrepend.js

/* harmony default export */ var InputGroupPrepend = (createWithBsPrefix('input-group-prepend'));
// CONCATENATED MODULE: ./src/InputGroupAppend.js

/* harmony default export */ var InputGroupAppend = (createWithBsPrefix('input-group-append'));
// CONCATENATED MODULE: ./src/InputGroup.js



var InputGroup__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/InputGroup.js";










var InputGroup_InputGroup =
/*#__PURE__*/
function (_React$Component) {
  function InputGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: InputGroup__jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  };

  _inheritsLoose(InputGroup, _React$Component);

  return InputGroup;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

InputGroup_InputGroup.Addon = src_InputGroupAddon;
InputGroup_InputGroup.Button = src_InputGroupButton;
InputGroup_InputGroup.Append = InputGroupAppend;
InputGroup_InputGroup.Prepend = InputGroupPrepend;
InputGroup_InputGroup.Text = InputGroupText;

InputGroup_InputGroup.Checkbox = function (props) {
  return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(InputGroupText, {
    __source: {
      fileName: InputGroup__jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("input", _extends({
    type: "checkbox"
  }, props, {
    __source: {
      fileName: InputGroup__jsxFileName,
      lineNumber: 37
    },
    __self: this
  })));
};

InputGroup_InputGroup.Radio = function (props) {
  return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(InputGroupText, {
    __source: {
      fileName: InputGroup__jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("input", _extends({
    type: "radio"
  }, props, {
    __source: {
      fileName: InputGroup__jsxFileName,
      lineNumber: 43
    },
    __self: this
  })));
};

/* harmony default export */ var src_InputGroup = (bootstrapUtils_bsClass('input-group', bsSizes([Size.LARGE, Size.SMALL], InputGroup_InputGroup)));
// CONCATENATED MODULE: ./src/Jumbotron.js



var Jumbotron__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Jumbotron.js";





var Jumbotron_propTypes = {
  componentClass: elementType_default.a,

  /** Make the jumbotron full width, and without rounded corners */
  fluid: prop_types_default.a.bool,

  /** @default 'jumbotron' */
  bsPrefix: prop_types_default.a.string
};
var Jumbotron_defaultProps = {
  componentClass: 'div',
  fluid: false
};

var Jumbotron_Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _classes;

    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        fluid = _this$props.fluid,
        bsPrefix = _this$props.bsPrefix,
        props = _objectWithoutProperties(_this$props, ["componentClass", "className", "fluid", "bsPrefix"]);

    var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Jumbotron__jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  };

  _inheritsLoose(Jumbotron, _React$Component);

  return Jumbotron;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Jumbotron_Jumbotron.propTypes = Jumbotron_propTypes;
Jumbotron_Jumbotron.defaultProps = Jumbotron_defaultProps;
/* harmony default export */ var src_Jumbotron = (createBootstrapComponent(Jumbotron_Jumbotron, 'jumbotron'));
// CONCATENATED MODULE: ./src/ListGroupItem.js




var ListGroupItem__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ListGroupItem.js";





var ListGroupItem_propTypes = {
  active: prop_types_default.a.any,
  disabled: prop_types_default.a.any,
  header: prop_types_default.a.node,
  listItem: prop_types_default.a.bool,
  onClick: prop_types_default.a.func,
  href: prop_types_default.a.string,
  type: prop_types_default.a.string
};
var ListGroupItem_defaultProps = {
  listItem: false
};

var ListGroupItem_ListGroupItem =
/*#__PURE__*/
function (_React$Component) {
  function ListGroupItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroupItem.prototype;

  _proto.renderHeader = function renderHeader(header, headingClassName) {
    if (external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.isValidElement(header)) {
      return Object(external___root___React___commonjs2___react___commonjs___react___amd___react__["cloneElement"])(header, {
        className: classnames_default()(header.props.className, headingClassName)
      });
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("h4", {
      className: headingClassName,
      __source: {
        fileName: ListGroupItem__jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, header);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        disabled = _this$props.disabled,
        className = _this$props.className,
        header = _this$props.header,
        listItem = _this$props.listItem,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["active", "disabled", "className", "header", "listItem", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), {
      active: active,
      disabled: disabled
    });

    var Component;

    if (elementProps.href) {
      Component = 'a';
    } else if (elementProps.onClick) {
      Component = 'button';
      elementProps.type = elementProps.type || 'button';
    } else if (listItem) {
      Component = 'li';
    } else {
      Component = 'span';
    }

    elementProps.className = classnames_default()(className, classes); // TODO: Deprecate `header` prop.

    if (header) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
        __source: {
          fileName: ListGroupItem__jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), this.renderHeader(header, bootstrapUtils_prefix(bsProps, 'heading')), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("p", {
        className: bootstrapUtils_prefix(bsProps, 'text'),
        __source: {
          fileName: ListGroupItem__jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, children));
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      __source: {
        fileName: ListGroupItem__jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), children);
  };

  _inheritsLoose(ListGroupItem, _React$Component);

  return ListGroupItem;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ListGroupItem_ListGroupItem.propTypes = ListGroupItem_propTypes;
ListGroupItem_ListGroupItem.defaultProps = ListGroupItem_defaultProps;
/* harmony default export */ var src_ListGroupItem = (bootstrapUtils_bsClass('list-group-item', bsStyles(values_default()(State), ListGroupItem_ListGroupItem)));
// CONCATENATED MODULE: ./src/ListGroup.js



var ListGroup__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ListGroup.js";






var ListGroup_propTypes = {
  /**
   * You can use a custom element type for this component.
   *
   * If not specified, it will be treated as `'li'` if every child is a
   * non-actionable `<ListGroupItem>`, and `'div'` otherwise.
   */
  componentClass: elementType_default.a
};

function getDefaultComponent(children) {
  if (!children) {
    // FIXME: This is the old behavior. Is this right?
    return 'div';
  }

  if (ValidComponentChildren.some(children, function (child) {
    return child.type !== src_ListGroupItem || child.props.href || child.props.onClick;
  })) {
    return 'div';
  }

  return 'ul';
}

var ListGroup_ListGroup =
/*#__PURE__*/
function (_React$Component) {
  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        _this$props$component = _this$props.componentClass,
        Component = _this$props$component === void 0 ? getDefaultComponent(children) : _this$props$component,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["children", "componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    var useListItem = Component === 'ul' && ValidComponentChildren.every(children, function (child) {
      return child.type === src_ListGroupItem;
    });
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: ListGroup__jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), useListItem ? ValidComponentChildren.map(children, function (child) {
      return Object(external___root___React___commonjs2___react___commonjs___react___amd___react__["cloneElement"])(child, {
        listItem: true
      });
    }) : children);
  };

  _inheritsLoose(ListGroup, _React$Component);

  return ListGroup;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ListGroup_ListGroup.propTypes = ListGroup_propTypes;
/* harmony default export */ var src_ListGroup = (bootstrapUtils_bsClass('list-group', ListGroup_ListGroup));
// CONCATENATED MODULE: ./src/MediaBody.js



var MediaBody__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/MediaBody.js";






var MediaBody_propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: prop_types_default.a.oneOf(['top', 'middle', 'bottom']),
  componentClass: elementType_default.a
};
var MediaBody_defaultProps = {
  componentClass: 'div'
};

var MediaBody_MediaBody =
/*#__PURE__*/
function (_React$Component) {
  function MediaBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        align = _this$props.align,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "align", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-left-top`.
      classes[bootstrapUtils_prefix(src_Media.defaultProps, align)] = true;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: MediaBody__jsxFileName,
        lineNumber: 45
      },
      __self: this
    }));
  };

  _inheritsLoose(MediaBody, _React$Component);

  return MediaBody;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

MediaBody_MediaBody.propTypes = MediaBody_propTypes;
MediaBody_MediaBody.defaultProps = MediaBody_defaultProps;
/* harmony default export */ var src_MediaBody = (bootstrapUtils_bsClass('media-body', MediaBody_MediaBody));
// CONCATENATED MODULE: ./src/MediaHeading.js



var MediaHeading__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/MediaHeading.js";




var MediaHeading_propTypes = {
  componentClass: elementType_default.a
};
var MediaHeading_defaultProps = {
  componentClass: 'h4'
};

var MediaHeading_MediaHeading =
/*#__PURE__*/
function (_React$Component) {
  function MediaHeading() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaHeading.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: MediaHeading__jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  };

  _inheritsLoose(MediaHeading, _React$Component);

  return MediaHeading;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

MediaHeading_MediaHeading.propTypes = MediaHeading_propTypes;
MediaHeading_MediaHeading.defaultProps = MediaHeading_defaultProps;
/* harmony default export */ var src_MediaHeading = (bootstrapUtils_bsClass('media-heading', MediaHeading_MediaHeading));
// CONCATENATED MODULE: ./src/MediaLeft.js



var MediaLeft__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/MediaLeft.js";





var MediaLeft_propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: prop_types_default.a.oneOf(['top', 'middle', 'bottom'])
};

var MediaLeft_MediaLeft =
/*#__PURE__*/
function (_React$Component) {
  function MediaLeft() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaLeft.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        align = _this$props.align,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["align", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-left-top`.
      classes[bootstrapUtils_prefix(src_Media.defaultProps, align)] = true;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: MediaLeft__jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  };

  _inheritsLoose(MediaLeft, _React$Component);

  return MediaLeft;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

MediaLeft_MediaLeft.propTypes = MediaLeft_propTypes;
/* harmony default export */ var src_MediaLeft = (bootstrapUtils_bsClass('media-left', MediaLeft_MediaLeft));
// CONCATENATED MODULE: ./src/MediaList.js



var MediaList__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/MediaList.js";




var MediaList_MediaList =
/*#__PURE__*/
function (_React$Component) {
  function MediaList() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaList.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("ul", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: MediaList__jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  };

  _inheritsLoose(MediaList, _React$Component);

  return MediaList;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

/* harmony default export */ var src_MediaList = (bootstrapUtils_bsClass('media-list', MediaList_MediaList));
// CONCATENATED MODULE: ./src/MediaListItem.js



var MediaListItem__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/MediaListItem.js";




var MediaListItem_MediaListItem =
/*#__PURE__*/
function (_React$Component) {
  function MediaListItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaListItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("li", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: MediaListItem__jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  };

  _inheritsLoose(MediaListItem, _React$Component);

  return MediaListItem;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

/* harmony default export */ var src_MediaListItem = (bootstrapUtils_bsClass('media', MediaListItem_MediaListItem));
// CONCATENATED MODULE: ./src/MediaRight.js



var MediaRight__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/MediaRight.js";





var MediaRight_propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: prop_types_default.a.oneOf(['top', 'middle', 'bottom'])
};

var MediaRight_MediaRight =
/*#__PURE__*/
function (_React$Component) {
  function MediaRight() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaRight.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        align = _this$props.align,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["align", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-right-top`.
      classes[bootstrapUtils_prefix(src_Media.defaultProps, align)] = true;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: MediaRight__jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  };

  _inheritsLoose(MediaRight, _React$Component);

  return MediaRight;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

MediaRight_MediaRight.propTypes = MediaRight_propTypes;
/* harmony default export */ var src_MediaRight = (bootstrapUtils_bsClass('media-right', MediaRight_MediaRight));
// CONCATENATED MODULE: ./src/Media.js



var Media__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Media.js";










var Media_propTypes = {
  componentClass: elementType_default.a
};
var Media_defaultProps = {
  componentClass: 'div'
};

var Media_Media =
/*#__PURE__*/
function (_React$Component) {
  function Media() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Media.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Media__jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  };

  _inheritsLoose(Media, _React$Component);

  return Media;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Media_Media.propTypes = Media_propTypes;
Media_Media.defaultProps = Media_defaultProps;
Media_Media.Heading = src_MediaHeading;
Media_Media.Body = src_MediaBody;
Media_Media.Left = src_MediaLeft;
Media_Media.Right = src_MediaRight;
Media_Media.List = src_MediaList;
Media_Media.ListItem = src_MediaListItem;
/* harmony default export */ var src_Media = (bootstrapUtils_bsClass('media', Media_Media));
// CONCATENATED MODULE: ./src/MenuItem.js




var MenuItem__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/MenuItem.js";







var MenuItem_propTypes = {
  /**
   * Highlight the menu item as active.
   */
  active: prop_types_default.a.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: prop_types_default.a.bool,

  /**
   * Styles the menu item as a horizontal rule, providing visual separation between
   * groups of menu items.
   */
  divider: all_default()(prop_types_default.a.bool, function (_ref) {
    var divider = _ref.divider,
        children = _ref.children;
    return divider && children ? new Error('Children will not be rendered for dividers') : null;
  }),

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: prop_types_default.a.any,

  /**
   * Styles the menu item as a header label, useful for describing a group of menu items.
   */
  header: prop_types_default.a.bool,

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: prop_types_default.a.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: prop_types_default.a.func,

  /**
   * Callback fired when the menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: prop_types_default.a.func
};
var MenuItem_defaultProps = {
  divider: false,
  disabled: false,
  header: false
};

var MenuItem_MenuItem =
/*#__PURE__*/
function (_React$Component) {
  function MenuItem(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = MenuItem.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        href = _this$props.href,
        disabled = _this$props.disabled,
        onSelect = _this$props.onSelect,
        eventKey = _this$props.eventKey;

    if (!href || disabled) {
      event.preventDefault();
    }

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        active = _this$props2.active,
        disabled = _this$props2.disabled,
        divider = _this$props2.divider,
        header = _this$props2.header,
        onClick = _this$props2.onClick,
        className = _this$props2.className,
        props = _objectWithoutProperties(_this$props2, ["active", "disabled", "divider", "header", "onClick", "className"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['eventKey', 'onSelect']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    if (divider) {
      // Forcibly blank out the children; separators shouldn't render any.
      elementProps.children = undefined;
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
        role: "separator",
        className: classnames_default()(className, bootstrapUtils_prefix(bsProps, 'divider')),
        __source: {
          fileName: MenuItem__jsxFileName,
          lineNumber: 113
        },
        __self: this
      }));
    }

    if (header) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
        role: "heading",
        className: classnames_default()(className, bootstrapUtils_prefix(bsProps, 'header')),
        __source: {
          fileName: MenuItem__jsxFileName,
          lineNumber: 123
        },
        __self: this
      }));
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_SafeAnchor, _extends({}, elementProps, {
      role: "menuitem",
      tabIndex: "-1",
      className: classnames_default()(className, bootstrapUtils_prefix(bsProps, 'item'), {
        active: active,
        disabled: disabled
      }),
      onClick: utils_createChainedFunction(onClick, this.handleClick),
      __source: {
        fileName: MenuItem__jsxFileName,
        lineNumber: 132
      },
      __self: this
    }));
  };

  _inheritsLoose(MenuItem, _React$Component);

  return MenuItem;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

MenuItem_MenuItem.propTypes = MenuItem_propTypes;
MenuItem_MenuItem.defaultProps = MenuItem_defaultProps;
/* harmony default export */ var src_MenuItem = (bootstrapUtils_bsClass('dropdown', MenuItem_MenuItem));
// EXTERNAL MODULE: ./node_modules/dom-helpers/events/index.js
var events = __webpack_require__(164);
var events_default = /*#__PURE__*/__webpack_require__.n(events);

// EXTERNAL MODULE: ./node_modules/dom-helpers/ownerDocument.js
var ownerDocument = __webpack_require__(22);
var ownerDocument_default = /*#__PURE__*/__webpack_require__.n(ownerDocument);

// EXTERNAL MODULE: ./node_modules/dom-helpers/util/inDOM.js
var inDOM = __webpack_require__(15);
var inDOM_default = /*#__PURE__*/__webpack_require__.n(inDOM);

// EXTERNAL MODULE: ./node_modules/dom-helpers/util/scrollbarSize.js
var scrollbarSize = __webpack_require__(91);
var scrollbarSize_default = /*#__PURE__*/__webpack_require__.n(scrollbarSize);

// EXTERNAL MODULE: ./node_modules/react-overlays/lib/Modal.js
var lib_Modal = __webpack_require__(167);
var Modal_default = /*#__PURE__*/__webpack_require__.n(lib_Modal);

// EXTERNAL MODULE: ./node_modules/react-overlays/lib/utils/isOverflowing.js
var isOverflowing = __webpack_require__(93);
var isOverflowing_default = /*#__PURE__*/__webpack_require__.n(isOverflowing);

// CONCATENATED MODULE: ./src/ModalBody.js



var ModalBody__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ModalBody.js";




var ModalBody_propTypes = {
  componentClass: elementType_default.a
};
var ModalBody_defaultProps = {
  componentClass: 'div'
};

var ModalBody_ModalBody =
/*#__PURE__*/
function (_React$Component) {
  function ModalBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: ModalBody__jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  };

  _inheritsLoose(ModalBody, _React$Component);

  return ModalBody;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ModalBody_ModalBody.propTypes = ModalBody_propTypes;
ModalBody_ModalBody.defaultProps = ModalBody_defaultProps;
/* harmony default export */ var src_ModalBody = (bootstrapUtils_bsClass('modal-body', ModalBody_ModalBody));
// CONCATENATED MODULE: ./src/ModalDialog.js



var ModalDialog__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ModalDialog.js";





var ModalDialog_propTypes = {
  /**
   * A css class to apply to the Modal dialog DOM node.
   */
  dialogClassName: prop_types_default.a.string
};

var ModalDialog_ModalDialog =
/*#__PURE__*/
function (_React$Component) {
  function ModalDialog() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalDialog.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        dialogClassName = _this$props.dialogClassName,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["dialogClassName", "className", "style", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var bsClassName = bootstrapUtils_prefix(bsProps);

    var modalStyle = _extends({
      display: 'block'
    }, style);

    var dialogClasses = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[bsClassName] = false, _extends2[bootstrapUtils_prefix(bsProps, 'dialog')] = true, _extends2));

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      tabIndex: "-1",
      role: "dialog",
      style: modalStyle,
      className: classnames_default()(className, bsClassName),
      __source: {
        fileName: ModalDialog__jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: classnames_default()(dialogClassName, dialogClasses),
      __source: {
        fileName: ModalDialog__jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: bootstrapUtils_prefix(bsProps, 'content'),
      role: "document",
      __source: {
        fileName: ModalDialog__jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, children)));
  };

  _inheritsLoose(ModalDialog, _React$Component);

  return ModalDialog;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ModalDialog_ModalDialog.propTypes = ModalDialog_propTypes;
/* harmony default export */ var src_ModalDialog = (bootstrapUtils_bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], ModalDialog_ModalDialog)));
// CONCATENATED MODULE: ./src/ModalFooter.js



var ModalFooter__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ModalFooter.js";




var ModalFooter_propTypes = {
  componentClass: elementType_default.a
};
var ModalFooter_defaultProps = {
  componentClass: 'div'
};

var ModalFooter_ModalFooter =
/*#__PURE__*/
function (_React$Component) {
  function ModalFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalFooter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: ModalFooter__jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  };

  _inheritsLoose(ModalFooter, _React$Component);

  return ModalFooter;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ModalFooter_ModalFooter.propTypes = ModalFooter_propTypes;
ModalFooter_ModalFooter.defaultProps = ModalFooter_defaultProps;
/* harmony default export */ var src_ModalFooter = (bootstrapUtils_bsClass('modal-footer', ModalFooter_ModalFooter));
// CONCATENATED MODULE: ./src/ModalHeader.js



var ModalHeader__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ModalHeader.js";





 // TODO: `aria-label` should be `closeLabel`.

var ModalHeader_propTypes = {
  /**
   * Provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  closeLabel: prop_types_default.a.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: prop_types_default.a.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Modal component, the onHide will automatically be propagated up to the
   * parent Modal `onHide`.
   */
  onHide: prop_types_default.a.func
};
var ModalHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
var ModalHeader_contextTypes = {
  $bs_modal: prop_types_default.a.shape({
    onHide: prop_types_default.a.func
  })
};

var ModalHeader_ModalHeader =
/*#__PURE__*/
function (_React$Component) {
  function ModalHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        closeLabel = _this$props.closeLabel,
        closeButton = _this$props.closeButton,
        onHide = _this$props.onHide,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["closeLabel", "closeButton", "onHide", "className", "children"]);

    var modal = this.context.$bs_modal;

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: ModalHeader__jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), closeButton && external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_CloseButton, {
      label: closeLabel,
      onClick: utils_createChainedFunction(modal && modal.onHide, onHide),
      __source: {
        fileName: ModalHeader__jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), children);
  };

  _inheritsLoose(ModalHeader, _React$Component);

  return ModalHeader;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ModalHeader_ModalHeader.propTypes = ModalHeader_propTypes;
ModalHeader_ModalHeader.defaultProps = ModalHeader_defaultProps;
ModalHeader_ModalHeader.contextTypes = ModalHeader_contextTypes;
/* harmony default export */ var src_ModalHeader = (bootstrapUtils_bsClass('modal-header', ModalHeader_ModalHeader));
// CONCATENATED MODULE: ./src/ModalTitle.js



var ModalTitle__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ModalTitle.js";




var ModalTitle_propTypes = {
  componentClass: elementType_default.a
};
var ModalTitle_defaultProps = {
  componentClass: 'h4'
};

var ModalTitle_ModalTitle =
/*#__PURE__*/
function (_React$Component) {
  function ModalTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: ModalTitle__jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  };

  _inheritsLoose(ModalTitle, _React$Component);

  return ModalTitle;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ModalTitle_ModalTitle.propTypes = ModalTitle_propTypes;
ModalTitle_ModalTitle.defaultProps = ModalTitle_defaultProps;
/* harmony default export */ var src_ModalTitle = (bootstrapUtils_bsClass('modal-title', ModalTitle_ModalTitle));
// CONCATENATED MODULE: ./src/Modal.js




var Modal__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Modal.js";






















var Modal_propTypes = _extends({}, Modal_default.a.propTypes, src_ModalDialog.propTypes, {
  /**
   * Include a backdrop component. Specify 'static' for a backdrop that doesn't
   * trigger an "onHide" when clicked.
   */
  backdrop: prop_types_default.a.oneOf(['static', true, false]),

  /**
   * Add an optional extra class name to .modal-backdrop
   * It could end up looking like class="modal-backdrop foo-modal-backdrop in".
   */
  backdropClassName: prop_types_default.a.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: prop_types_default.a.bool,

  /**
   * Open and close the Modal with a slide and fade animation.
   */
  animation: prop_types_default.a.bool,

  /**
   * A Component type that provides the modal content Markup. This is a useful
   * prop when you want to use your own styles and markup to create a custom
   * modal component.
   */
  dialogComponentClass: elementType_default.a,

  /**
   * When `true` The modal will automatically shift focus to itself when it
   * opens, and replace it to the last focused element when it closes.
   * Generally this should never be set to false as it makes the Modal less
   * accessible to assistive technologies, like screen-readers.
   */
  autoFocus: prop_types_default.a.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while
   * open. Consider leaving the default value here, as it is necessary to make
   * the Modal work well with assistive technologies, such as screen readers.
   */
  enforceFocus: prop_types_default.a.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: prop_types_default.a.bool,

  /**
   * When `true` The modal will show itself.
   */
  show: prop_types_default.a.bool,

  /**
   * A callback fired when the header closeButton or non-static backdrop is
   * clicked. Required if either are specified.
   */
  onHide: prop_types_default.a.func,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: prop_types_default.a.func,

  /**
   * @private
   */
  container: Modal_default.a.propTypes.container
});

var Modal_defaultProps = _extends({}, Modal_default.a.defaultProps, {
  animation: true,
  dialogComponentClass: src_ModalDialog
});

var Modal_childContextTypes = {
  $bs_modal: prop_types_default.a.shape({
    onHide: prop_types_default.a.func
  })
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Fade, _extends({}, props, {
    timeout: Modal_Modal.TRANSITION_DURATION,
    __source: {
      fileName: Modal__jsxFileName,
      lineNumber: 139
    },
    __self: this
  }));
}

function BackdropTransition(props) {
  return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Fade, _extends({}, props, {
    timeout: Modal_Modal.BACKDROP_TRANSITION_DURATION,
    __source: {
      fileName: Modal__jsxFileName,
      lineNumber: 143
    },
    __self: this
  }));
}
/* eslint-enable no-use-before-define */


var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  function Modal(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleEntering = _this.handleEntering.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWindowResize = _this.handleWindowResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDialogClick = _this.handleDialogClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setModalRef = _this.setModalRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      style: {}
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      $bs_modal: {
        onHide: this.props.onHide
      }
    };
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  };

  _proto.setModalRef = function setModalRef(ref) {
    this._modal = ref;
  };

  _proto.handleDialogClick = function handleDialogClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onHide();
  };

  _proto.handleEntering = function handleEntering() {
    // FIXME: This should work even when animation is disabled.
    events_default.a.on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  };

  _proto.handleExited = function handleExited() {
    // FIXME: This should work even when animation is disabled.
    events_default.a.off(window, 'resize', this.handleWindowResize);
  };

  _proto.handleWindowResize = function handleWindowResize() {
    this.updateStyle();
  };

  _proto.updateStyle = function updateStyle() {
    if (!inDOM_default.a) {
      return;
    }

    var dialogNode = this._modal.getDialogElement();

    var dialogHeight = dialogNode.scrollHeight;
    var document = ownerDocument_default()(dialogNode);
    var bodyIsOverflowing = isOverflowing_default()(external___root___ReactDOM___commonjs2___react_dom___commonjs___react_dom___amd___react_dom___default.a.findDOMNode(this.props.container || document.body));
    var modalIsOverflowing = dialogHeight > document.documentElement.clientHeight;
    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? scrollbarSize_default()() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? scrollbarSize_default()() : undefined
      }
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        backdrop = _this$props.backdrop,
        backdropClassName = _this$props.backdropClassName,
        animation = _this$props.animation,
        show = _this$props.show,
        Dialog = _this$props.dialogComponentClass,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        onEntering = _this$props.onEntering,
        onExited = _this$props.onExited,
        props = _objectWithoutProperties(_this$props, ["backdrop", "backdropClassName", "animation", "show", "dialogComponentClass", "className", "style", "children", "onEntering", "onExited"]);

    var _splitComponentProps = splitComponentProps(props, Modal_default.a),
        baseModalProps = _splitComponentProps[0],
        dialogProps = _splitComponentProps[1];

    var inClassName = show && !animation && 'in';
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Modal_default.a, _extends({}, baseModalProps, {
      ref: this.setModalRef,
      show: show,
      containerClassName: bootstrapUtils_prefix(props, 'open'),
      transition: animation ? DialogTransition : undefined,
      backdrop: backdrop,
      backdropTransition: animation ? BackdropTransition : undefined,
      backdropClassName: classnames_default()(bootstrapUtils_prefix(props, 'backdrop'), backdropClassName, inClassName),
      onEntering: utils_createChainedFunction(onEntering, this.handleEntering),
      onExited: utils_createChainedFunction(onExited, this.handleExited),
      __source: {
        fileName: Modal__jsxFileName,
        lineNumber: 252
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Dialog, _extends({}, dialogProps, {
      style: _extends({}, this.state.style, style),
      className: classnames_default()(className, inClassName),
      onClick: backdrop === true ? this.handleDialogClick : null,
      __source: {
        fileName: Modal__jsxFileName,
        lineNumber: 268
      },
      __self: this
    }), children));
  };

  _inheritsLoose(Modal, _React$Component);

  return Modal;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Modal_Modal.propTypes = Modal_propTypes;
Modal_Modal.defaultProps = Modal_defaultProps;
Modal_Modal.childContextTypes = Modal_childContextTypes;
Modal_Modal.Body = src_ModalBody;
Modal_Modal.Header = src_ModalHeader;
Modal_Modal.Title = src_ModalTitle;
Modal_Modal.Footer = src_ModalFooter;
Modal_Modal.Dialog = src_ModalDialog;
Modal_Modal.TRANSITION_DURATION = 300;
Modal_Modal.BACKDROP_TRANSITION_DURATION = 150;
/* harmony default export */ var src_Modal = (bootstrapUtils_bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], Modal_Modal)));
// EXTERNAL MODULE: ./node_modules/dom-helpers/query/querySelectorAll.js
var querySelectorAll = __webpack_require__(90);
var querySelectorAll_default = /*#__PURE__*/__webpack_require__.n(querySelectorAll);

// CONCATENATED MODULE: ./src/TabContext.js

var TabContext = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createContext(null);
/* harmony default export */ var src_TabContext = (TabContext);
// CONCATENATED MODULE: ./src/utils/mapContextToProps.js

var mapContextToProps__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/utils/mapContextToProps.js";

function mapContextToProps(Component, consumers, mapToProps) {
  var name = Component.name || Component.displayName;
  if (!Array.isArray(consumers)) consumers = [consumers];
  var SingleConsumer = consumers[0];

  function singleRender(props, ref) {
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(SingleConsumer, {
      __source: {
        fileName: mapContextToProps__jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, function (value) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({
        ref: ref
      }, props, mapToProps(value, props), {
        __source: {
          fileName: mapContextToProps__jsxFileName,
          lineNumber: 13
        },
        __self: this
      }));
    });
  }

  function multiRender(props, ref) {
    var contexts = Array(consumers.length);
    return consumers.reduce(function (child, Consumer, idx) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Consumer, {
        __source: {
          fileName: mapContextToProps__jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, function (value) {
        contexts[idx] = value;
        return child || external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({
          ref: ref
        }, props, mapToProps.apply(void 0, contexts.concat([props])), {
          __source: {
            fileName: mapContextToProps__jsxFileName,
            lineNumber: 28
          },
          __self: this
        }));
      });
    }, null);
  }

  var contextTransform = consumers.length === 1 ? singleRender : multiRender;
  contextTransform.displayName = "ContextTransform(" + name + ")";
  return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.forwardRef(contextTransform);
}
// CONCATENATED MODULE: ./src/NavContext.js

var NavContext = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createContext({
  activeKey: null,
  onSelect: function onSelect() {}
});
/* harmony default export */ var src_NavContext = (NavContext);
// CONCATENATED MODULE: ./src/NavbarContext.js

/* harmony default export */ var NavbarContext = (external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createContext(null));
// CONCATENATED MODULE: ./src/NavItem.js



var NavItem__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/NavItem.js";






var NavItem_NavItem =
/*#__PURE__*/
function (_React$Component) {
  function NavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        Component = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["bsPrefix", "className", "children", "componentClass"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, bsPrefix),
      __source: {
        fileName: NavItem__jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), children);
  };

  _inheritsLoose(NavItem, _React$Component);

  return NavItem;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

NavItem_NavItem.propTypes = {
  /**
   * @default 'nav-item'
   */
  bsPrefix: prop_types_default.a.string,

  /** The ARIA role of the component */
  role: prop_types_default.a.string,
  componentClass: elementType_default.a
};
NavItem_NavItem.defaultProps = {
  role: 'presentaton',
  componentClass: 'li'
};
/* harmony default export */ var src_NavItem = (createBootstrapComponent(NavItem_NavItem, 'nav-item'));
// CONCATENATED MODULE: ./src/NavLink.js




var NavLink__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/NavLink.js";






var NavLink_propTypes = {
  /**
   * @default 'nav-link'
   */
  bsPrefix: prop_types_default.a.string,

  /**
   * The active state of the NavItem item.
   */
  active: prop_types_default.a.bool,

  /**
   * The disabled state of the NavItem item.
   */
  disabled: prop_types_default.a.bool,

  /**
   * The ARIA role for the `NavLink`, In the context of a 'tablist' parent Nav,
   * the role defaults to 'tab'
   * */
  role: prop_types_default.a.string,

  /** The HTML href attribute for the `NavLink` */
  href: prop_types_default.a.string,

  /**
   * Uniquely idenifies the `NavItem` amoungst its siblings,
   * used to determine and control the active state of its parent `Nav`
   */
  eventKey: prop_types_default.a.any,

  /** @private */
  onClick: prop_types_default.a.func
};
var NavLink_defaultProps = {
  disabled: false
};

var NavLink_NavLink =
/*#__PURE__*/
function (_React$Component) {
  function NavLink() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          eventKey = _this$props.eventKey,
          href = _this$props.href;
      if (onClick) onClick(e);
      if (_this.navContext) _this.navContext.onSelect(String(eventKey || href));
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = NavLink.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_NavContext.Consumer, {
      __source: {
        fileName: NavLink__jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, function (navContext) {
      var _this2$props = _this2.props,
          active = _this2$props.active,
          bsPrefix = _this2$props.bsPrefix,
          disabled = _this2$props.disabled,
          className = _this2$props.className,
          eventKey = _this2$props.eventKey,
          href = _this2$props.href,
          propsRole = _this2$props.role,
          _ = _this2$props.onClick,
          props = _objectWithoutProperties(_this2$props, ["active", "bsPrefix", "disabled", "className", "eventKey", "href", "role", "onClick"]);

      delete props.onSelect;
      var navItemKey = String(eventKey || href);
      var isActive = active == null ? String(navContext.activeKey) === navItemKey : active;
      var role = propsRole;

      if (navContext.role === 'tablist') {
        role = 'tab';
        props['data-rb-event-key'] = navItemKey;
        props['aria-selected'] = isActive;
        props.tabIndex = isActive ? props.tabIndex : -1;
      }

      _this2.navContext = navContext;
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_SafeAnchor, _extends({
        id: navContext.getControllerId(navItemKey),
        "aria-controls": navContext.getControlledId(navItemKey)
      }, props, {
        role: role,
        href: href,
        disabled: disabled,
        onClick: _this2.handleClick,
        className: classnames_default()(className, bsPrefix, isActive && 'active', disabled && 'disabled'),
        __source: {
          fileName: NavLink__jsxFileName,
          lineNumber: 91
        },
        __self: this
      }));
    });
  };

  _inheritsLoose(NavLink, _React$Component);

  return NavLink;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

NavLink_NavLink.propTypes = NavLink_propTypes;
NavLink_NavLink.defaultProps = NavLink_defaultProps;
/* harmony default export */ var src_NavLink = (createBootstrapComponent(NavLink_NavLink, 'nav-link'));
// CONCATENATED MODULE: ./src/Nav.js



var Nav__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Nav.js";















var noop = function noop() {};

var Nav_Nav =
/*#__PURE__*/
function (_React$Component) {
  Nav.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var activeKey = _ref.activeKey,
        getControlledId = _ref.getControlledId,
        getControllerId = _ref.getControllerId,
        role = _ref.role,
        onSelect = _ref.onSelect;
    return {
      navContext: {
        role: role,
        // used by NavLink to determine it's role
        onSelect: onSelect,
        activeKey: activeKey,
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      }
    };
  };

  function Nav() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          onKeyDown = _this$props.onKeyDown,
          onSelect = _this$props.onSelect;
      if (onKeyDown) onKeyDown(event);
      var nextActiveChild;

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          nextActiveChild = _this.getNextActiveChild(-1);
          break;

        case 'ArrowRight':
        case 'ArrowDown':
          nextActiveChild = _this.getNextActiveChild(1);
          break;

        default:
          return;
      }

      if (!nextActiveChild) return;
      event.preventDefault();
      onSelect(nextActiveChild.dataset.rbEventKey);
      _this._needsRefocus = true;
    };

    _this.attachRef = function (ref) {
      _this.listNode = ref;
    };

    _this.state = {
      navContext: null
    };
    return _this;
  }

  var _proto = Nav.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (!this._needsRefocus || !this.listNode) return;
    var activeChild = this.listNode.querySelector('[data-rb-event-key].active');
    if (activeChild) activeChild.focus();
  };

  _proto.getNextActiveChild = function getNextActiveChild(offset) {
    if (!this.listNode) return null;
    var items = querySelectorAll_default()(this.listNode, '[data-rb-event-key]:not(.disabled)');
    var activeChild = this.listNode.querySelector('.active');
    var index = items.indexOf(activeChild);
    return index === -1 ? null : items[index + offset];
  };

  _proto.render = function render() {
    var _classNames;

    var _this$props2 = this.props,
        bsPrefix = _this$props2.bsPrefix,
        navbarBsPrefix = _this$props2.navbarBsPrefix,
        variant = _this$props2.variant,
        fill = _this$props2.fill,
        justify = _this$props2.justify,
        navbar = _this$props2.navbar,
        className = _this$props2.className,
        children = _this$props2.children,
        Component = _this$props2.componentClass,
        props = _objectWithoutProperties(_this$props2, ["bsPrefix", "navbarBsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "componentClass"]);

    delete props.activeKey;
    delete props.onSelect;
    delete props.getControlledId;
    delete props.getControllerId;

    if (props.role === 'tablist') {
      props.onKeyDown = this.handleKeyDown;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_NavContext.Provider, {
      value: this.state.navContext,
      __source: {
        fileName: Nav__jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      ref: this.attachRef,
      className: classnames_default()(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames)),
      __source: {
        fileName: Nav__jsxFileName,
        lineNumber: 195
      },
      __self: this
    }), children));
  };

  _inheritsLoose(Nav, _React$Component);

  return Nav;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Nav_Nav.propTypes = {
  /**
   * @default 'nav'
   */
  bsPrefix: prop_types_default.a.string,

  /** @private */
  navbarBsPrefix: prop_types_default.a.string,

  /**
   * The visual variant of the nav items.
   *
   * @type {('tabs'|'pills')}
   */
  variant: prop_types_default.a.string,

  /**
   * Marks the NavItem with a matching `eventKey` (or `href` if present) as active.
   *
   * @type {string}
   */
  activeKey: prop_types_default.a.any,

  /**
   * Have all `NavItem`s to proportionatly fill all available width.
   */
  fill: prop_types_default.a.bool,

  /**
   * Have all `NavItem`s to evenly fill all available width.
   *
   * @type {boolean}
   */
  justify: all_default()(prop_types_default.a.bool, function (_ref3) {
    var justify = _ref3.justify,
        navbar = _ref3.navbar;
    return justify && navbar ? Error('justify navbar `Nav`s are not supported') : null;
  }),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   */
  onSelect: prop_types_default.a.func,

  /**
   * ARIA role for the Nav, in the context of a TabContainer, the default will
   * be set to "tablist", but can be overridden by the Nav when set explicitly.
   *
   * When the role is "tablist", NavLink focus is managed according to
   * the ARIA authoring practices for tabs:
   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
   */
  role: prop_types_default.a.string,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: prop_types_default.a.bool,
  componentClass: elementType_default.a,

  /** @private */
  onKeyDown: prop_types_default.a.func
};
Nav_Nav.defaultProps = {
  justify: false,
  fill: false,
  componentClass: 'ul'
};
var UncontrolledNav = uncontrollable_default()(createBootstrapComponent(Nav_Nav, 'nav'), {
  activeKey: 'onSelect'
});
var DecoratedNav = mapContextToProps(UncontrolledNav, [src_TabContext.Consumer, NavbarContext.Consumer], function (tabContext, navbarContext, _ref2) {
  var role = _ref2.role,
      navbar = _ref2.navbar;
  if (!tabContext && !navbarContext) return null;
  if (navbarContext) return {
    onSelect: navbarContext.onSelect,
    navbarBsPrefix: navbarContext.bsPrefix,
    navbar: navbar == null ? true : navbar
  };
  var activeKey = tabContext.activeKey,
      onSelect = tabContext.onSelect,
      getControllerId = tabContext.getControllerId,
      getControlledId = tabContext.getControlledId;
  return {
    activeKey: activeKey,
    onSelect: onSelect,
    getControllerId: getControllerId,
    getControlledId: getControlledId,
    role: role || 'tablist'
  };
});
DecoratedNav.Item = src_NavItem;
DecoratedNav.Link = src_NavLink;
DecoratedNav._Nav = Nav_Nav; // for Testing until enzyme is working with context

/* harmony default export */ var src_Nav = (DecoratedNav);
// CONCATENATED MODULE: ./src/NavbarBrand.js



var NavbarBrand__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/NavbarBrand.js";






var NavbarBrand_NavbarBrand =
/*#__PURE__*/
function (_React$Component) {
  function NavbarBrand() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarBrand.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        componentClass = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["bsPrefix", "className", "componentClass"]);

    var Component = componentClass || (props.href ? 'a' : 'span');
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, bsPrefix),
      __source: {
        fileName: NavbarBrand__jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  };

  _inheritsLoose(NavbarBrand, _React$Component);

  return NavbarBrand;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

NavbarBrand_NavbarBrand.propTypes = {
  /** @default 'navbar' */
  bsPrefix: prop_types_default.a.string,

  /**
   * An href, when provided the Brand will render as an `<a>` element (unless `componentClass` is provided).
   */
  href: prop_types_default.a.string,

  /**
   * Set a custom element for this component.
   */
  componentClass: elementType_default.a
};
/* harmony default export */ var src_NavbarBrand = (createBootstrapComponent(NavbarBrand_NavbarBrand, 'navbar-brand'));
// CONCATENATED MODULE: ./src/NavbarCollapse.js



var NavbarCollapse__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/NavbarCollapse.js";






var NavbarCollapse_NavbarCollapse =
/*#__PURE__*/
function (_React$Component) {
  function NavbarCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarCollapse.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        props = _objectWithoutProperties(_this$props, ["children", "bsPrefix"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(NavbarContext.Consumer, {
      __source: {
        fileName: NavbarCollapse__jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, function (context) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Collapse, _extends({
        "in": !!(context && context.expanded)
      }, props, {
        __source: {
          fileName: NavbarCollapse__jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
        className: bsPrefix,
        __source: {
          fileName: NavbarCollapse__jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, children));
    });
  };

  _inheritsLoose(NavbarCollapse, _React$Component);

  return NavbarCollapse;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

NavbarCollapse_NavbarCollapse.propTypes = {
  /** @default 'navbar-collapse' */
  bsPrefix: prop_types_default.a.string
};
/* harmony default export */ var src_NavbarCollapse = (createBootstrapComponent(NavbarCollapse_NavbarCollapse, 'navbar-collapse'));
// CONCATENATED MODULE: ./src/NavbarToggle.js




var NavbarToggle__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/NavbarToggle.js";







var NavbarToggle_NavbarToggle =
/*#__PURE__*/
function (_React$Component) {
  function NavbarToggle() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      var onToggle = _this.navbarContext.onToggle;
      if (onClick) onClick(e);
      if (onToggle) onToggle();
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = NavbarToggle.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        label = _this$props.label,
        Component = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["bsPrefix", "className", "children", "label", "componentClass"]);

    if (Component === 'button') {
      props.type = 'button';
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(NavbarContext.Consumer, {
      __source: {
        fileName: NavbarToggle__jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, function (context) {
      _this2.navbarContext = context || {};
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
        onClick: _this2.handleClick,
        "aria-label": label,
        className: classnames_default()(className, bsPrefix, !!(context && context.expanded) && 'collapsed'),
        __source: {
          fileName: NavbarToggle__jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), children || external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", {
        className: bsPrefix + "-icon",
        __source: {
          fileName: NavbarToggle__jsxFileName,
          lineNumber: 69
        },
        __self: this
      }));
    });
  };

  _inheritsLoose(NavbarToggle, _React$Component);

  return NavbarToggle;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

NavbarToggle_NavbarToggle.propTypes = {
  /** @default 'navbar-toggler' */
  bsPrefix: prop_types_default.a.string,

  /** An accessible ARIA label for the toggler button. */
  label: prop_types_default.a.string,

  /** @private */
  onClick: prop_types_default.a.func,

  /**
   * The toggle content. When empty, the default toggle will be rendered.
   */
  children: prop_types_default.a.node,
  componentClass: elementType_default.a
};
NavbarToggle_NavbarToggle.defaultProps = {
  label: 'Toggle navigation',
  componentClass: 'button'
};
/* harmony default export */ var src_NavbarToggle = (createBootstrapComponent(NavbarToggle_NavbarToggle, 'navbar-toggler'));
// CONCATENATED MODULE: ./src/Navbar.js



var Navbar__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Navbar.js";
// TODO: Remove this pragma once we upgrade eslint-config-airbnb.

/* eslint-disable react/no-multi-comp */











var Navbar_propTypes = {
  /** @default 'navbar' */
  bsPrefix: prop_types_default.a.string.isRequired,

  /**
   * The general visual variant a the Navbar.
   * Use in combination with the `bg` prop, `background-color` utilities,
   * or your own background styles.
   *
   * @type {('light'|'dark')}
   */
  variant: prop_types_default.a.string,

  /** The breakpoint, below which, the Navbar will collapse.
   * When `true` the Navbar will always be expanded regardless of screen size.
   */
  expand: prop_types_default.a.oneOf([true, 'sm', 'md', 'lg', 'xl']).isRequired,

  /**
   * A convenience prop for adding `bg-*` utility classes since they are so commonly used here.
   * `light` and `dark` are common choices but any `bg-*` class is supported, including any custom ones you might define.
   *
   * Pairs nicely with the `variant` prop.
   */
  bg: prop_types_default.a.string,

  /**
   * Create a fixed navbar along the top or bottom of the screen, that scrolls with the
   * page. A convenience prop for the `fixed-*` positioning classes.
   */
  fixed: prop_types_default.a.oneOf(['top', 'bottom']),

  /**
   * Position the navbar at the top or bottom of the viewport,
   * but only after scrolling past it. . A convenience prop for the `sticky-*` positioning classes.
   *
   *  __Not supported in <= IE11 and other older browsers without a polyfill__
   */
  sticky: prop_types_default.a.oneOf(['top', 'bottom']),

  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: prop_types_default.a.bool,

  /**
   * Set a custom element for this component.
   */
  componentClass: elementType_default.a,

  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: prop_types_default.a.func,

  /**
   * A callback fired when a descendant of a child `<Nav>` is selected. Should
   * be used to execute complex closing or other miscellaneous actions desired
   * after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`
   * descendants exist. The callback is called with an eventKey, which is a
   * prop from the selected `<Nav>` descendant, and an event.
   *
   * ```js
   * function (
   *  eventKey: mixed,
   *  event?: SyntheticEvent
   * )
   * ```
   *
   * For basic closing behavior after all `<Nav>` descendant onSelect events in
   * mobile viewports, try using collapseOnSelect.
   *
   * Note: If you are manually closing the navbar using this `OnSelect` prop,
   * ensure that you are setting `expanded` to false and not *toggling* between
   * true and false.
   */
  onSelect: prop_types_default.a.func,

  /**
   * Toggles `expanded` to `false` after the onSelect event of a descendant of a
   * child `<Nav>` fires. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * Manually controlling `expanded` via the onSelect callback is recommended instead,
   * for more complex operations that need to be executed after
   * the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: prop_types_default.a.bool,

  /**
   * Controls the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: prop_types_default.a.bool,

  /**
   * The ARIA role for the navbar, will default to 'navigation' for
   * Navbars whose `componentClass` is something other than `<nav>`.
   *
   * @default 'navigation'
   */
  role: prop_types_default.a.string
};
var Navbar_defaultProps = {
  componentClass: 'nav',
  expand: true,
  fluid: true,
  variant: 'light',
  collapseOnSelect: false
};

var Navbar_Navbar =
/*#__PURE__*/
function (_React$Component) {
  Navbar.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var bsPrefix = _ref.bsPrefix,
        expanded = _ref.expanded;
    return {
      navbarContext: _extends({}, prevState.navbarContext, {
        bsPrefix: bsPrefix,
        expanded: expanded
      })
    };
  };

  function Navbar() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleCollapse = function () {
      var _this$props = _this.props,
          onToggle = _this$props.onToggle,
          expanded = _this$props.expanded,
          collapseOnSelect = _this$props.collapseOnSelect,
          onSelect = _this$props.onSelect;
      if (onSelect) onSelect.apply(void 0, arguments);

      if (collapseOnSelect && expanded) {
        onToggle(false);
      }
    };

    _this.handleToggle = function () {
      var _this$props2 = _this.props,
          onToggle = _this$props2.onToggle,
          expanded = _this$props2.expanded;
      onToggle(!expanded);
    };

    _this.state = {
      navbarContext: {
        onToggle: _this.handleToggle,
        onSelect: _this.handleCollapse
      }
    };
    return _this;
  }

  var _proto = Navbar.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        bsPrefix = _this$props3.bsPrefix,
        expand = _this$props3.expand,
        variant = _this$props3.variant,
        bg = _this$props3.bg,
        fixed = _this$props3.fixed,
        sticky = _this$props3.sticky,
        fluid = _this$props3.fluid,
        className = _this$props3.className,
        children = _this$props3.children,
        Component = _this$props3.componentClass,
        _1 = _this$props3.expanded,
        _2 = _this$props3.onToggle,
        _3 = _this$props3.onSelect,
        _4 = _this$props3.collapseOnSelect,
        props = _objectWithoutProperties(_this$props3, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "fluid", "className", "children", "componentClass", "expanded", "onToggle", "onSelect", "collapseOnSelect"]); // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one


    if (props.role === undefined && Component !== 'nav') {
      props.role = 'navigation';
    }

    var expandClass = bsPrefix + "-expand";
    if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(NavbarContext.Provider, {
      value: this.state.navbarContext,
      __source: {
        fileName: Navbar__jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed),
      __source: {
        fileName: Navbar__jsxFileName,
        lineNumber: 201
      },
      __self: this
    }), fluid ? children : external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: Navbar__jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, children)));
  };

  _inheritsLoose(Navbar, _React$Component);

  return Navbar;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Navbar_Navbar.propTypes = Navbar_propTypes;
Navbar_Navbar.defaultProps = Navbar_defaultProps;
var DecoratedNavbar = createBootstrapComponent(uncontrollable_default()(Navbar_Navbar, {
  expanded: 'onToggle'
}), 'navbar');
DecoratedNavbar.Brand = src_NavbarBrand;
DecoratedNavbar.Toggle = src_NavbarToggle;
DecoratedNavbar.Collapse = src_NavbarCollapse;
DecoratedNavbar.Text = createWithBsPrefix('navbar-text', {
  Component: 'span'
});
/* harmony default export */ var src_Navbar = (DecoratedNavbar);
// CONCATENATED MODULE: ./src/NavDropdown.js



var NavDropdown__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/NavDropdown.js";







var NavDropdown_propTypes = _extends({}, src_Dropdown.propTypes, {
  // Toggle props.
  title: prop_types_default.a.node.isRequired,
  noCaret: prop_types_default.a.bool,
  active: prop_types_default.a.bool,
  activeKey: prop_types_default.a.any,
  activeHref: prop_types_default.a.string,
  // Override generated docs from <Dropdown>.

  /**
   * @private
   */
  children: prop_types_default.a.node
});

var NavDropdown_NavDropdown =
/*#__PURE__*/
function (_React$Component) {
  function NavDropdown() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavDropdown.prototype;

  _proto.isActive = function isActive(_ref, activeKey, activeHref) {
    var _this = this;

    var props = _ref.props;

    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
      return true;
    }

    if (ValidComponentChildren.some(props.children, function (child) {
      return _this.isActive(child, activeKey, activeHref);
    })) {
      return true;
    }

    return props.active;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        title = _this$props.title,
        activeKey = _this$props.activeKey,
        activeHref = _this$props.activeHref,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["title", "activeKey", "activeHref", "className", "style", "children"]);

    var active = this.isActive(this, activeKey, activeHref);
    delete props.active; // Accessed via this.isActive().

    delete props.eventKey; // Accessed via this.isActive().

    var _splitComponentProps = splitComponentProps(props, src_Dropdown.ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        toggleProps = _splitComponentProps[1]; // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
    // rather than the `<Dropdown.Toggle>`.


    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Dropdown, _extends({}, dropdownProps, {
      componentClass: "li",
      className: classnames_default()(className, {
        active: active
      }),
      style: style,
      __source: {
        fileName: NavDropdown__jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Dropdown.Toggle, _extends({}, toggleProps, {
      useAnchor: true,
      __source: {
        fileName: NavDropdown__jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), title), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Dropdown.Menu, {
      __source: {
        fileName: NavDropdown__jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, ValidComponentChildren.map(children, function (child) {
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.cloneElement(child, {
        active: _this2.isActive(child, activeKey, activeHref)
      });
    })));
  };

  _inheritsLoose(NavDropdown, _React$Component);

  return NavDropdown;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

NavDropdown_NavDropdown.propTypes = NavDropdown_propTypes;
/* harmony default export */ var src_NavDropdown = (NavDropdown_NavDropdown);
// EXTERNAL MODULE: ./node_modules/react-overlays/lib/Overlay.js
var lib_Overlay = __webpack_require__(177);
var Overlay_default = /*#__PURE__*/__webpack_require__.n(lib_Overlay);

// CONCATENATED MODULE: ./src/Overlay.js



var Overlay__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Overlay.js";







var Overlay_propTypes = _extends({}, Overlay_default.a.propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: prop_types_default.a.bool,

  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: prop_types_default.a.bool,

  /**
   * A callback invoked by the overlay when it wishes to be hidden. Required if
   * `rootClose` is specified.
   */
  onHide: prop_types_default.a.func,

  /**
   * Use animation
   */
  animation: prop_types_default.a.oneOfType([prop_types_default.a.bool, elementType_default.a]),

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: prop_types_default.a.func,

  /**
   * Sets the direction of the Overlay.
   */
  placement: prop_types_default.a.oneOf(['top', 'right', 'bottom', 'left'])
});

var Overlay_defaultProps = {
  animation: src_Fade,
  rootClose: false,
  show: false,
  placement: 'right'
};

var Overlay_Overlay =
/*#__PURE__*/
function (_React$Component) {
  function Overlay() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Overlay.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        animation = _this$props.animation,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["animation", "children"]);

    var transition = animation === true ? src_Fade : animation || null;
    var child;

    if (!transition) {
      child = Object(external___root___React___commonjs2___react___commonjs___react___amd___react__["cloneElement"])(children, {
        className: classnames_default()(children.props.className, 'in')
      });
    } else {
      child = children;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Overlay_default.a, _extends({}, props, {
      transition: transition,
      __source: {
        fileName: Overlay__jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), child);
  };

  _inheritsLoose(Overlay, _React$Component);

  return Overlay;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Overlay_Overlay.propTypes = Overlay_propTypes;
Overlay_Overlay.defaultProps = Overlay_defaultProps;
/* harmony default export */ var src_Overlay = (Overlay_Overlay);
// CONCATENATED MODULE: ./src/OverlayTrigger.js




var OverlayTrigger__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/OverlayTrigger.js";







/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */

function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }

  return one === of;
}

var triggerType = prop_types_default.a.oneOf(['click', 'hover', 'focus']);

var OverlayTrigger_propTypes = _extends({}, src_Overlay.propTypes, {
  /**
   * Specify which action or actions trigger Overlay visibility
   */
  trigger: prop_types_default.a.oneOfType([triggerType, prop_types_default.a.arrayOf(triggerType)]),

  /**
   * A millisecond delay amount to show and hide the Overlay once triggered
   */
  delay: prop_types_default.a.number,

  /**
   * A millisecond delay amount before showing the Overlay once triggered.
   */
  delayShow: prop_types_default.a.number,

  /**
   * A millisecond delay amount before hiding the Overlay once triggered.
   */
  delayHide: prop_types_default.a.number,
  // FIXME: This should be `defaultShow`.

  /**
   * The initial visibility state of the Overlay. For more nuanced visibility
   * control, consider using the Overlay component directly.
   */
  defaultOverlayShown: prop_types_default.a.bool,

  /**
   * An element or text to overlay next to the target.
   */
  overlay: prop_types_default.a.node.isRequired,

  /**
   * @private
   */
  onBlur: prop_types_default.a.func,

  /**
   * @private
   */
  onClick: prop_types_default.a.func,

  /**
   * @private
   */
  onFocus: prop_types_default.a.func,

  /**
   * @private
   */
  onMouseOut: prop_types_default.a.func,

  /**
   * @private
   */
  onMouseOver: prop_types_default.a.func,
  // Overridden props from `<Overlay>`.

  /**
   * @private
   */
  target: prop_types_default.a.oneOf([null]),

  /**
   * @private
   */
  onHide: prop_types_default.a.oneOf([null]),

  /**
   * @private
   */
  show: prop_types_default.a.oneOf([null])
});

var OverlayTrigger_defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus']
};

var OverlayTrigger_OverlayTrigger =
/*#__PURE__*/
function (_React$Component) {
  function OverlayTrigger(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDelayedShow = _this.handleDelayedShow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDelayedHide = _this.handleDelayedHide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleHide = _this.handleHide.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.handleMouseOver = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedShow, e, 'fromElement');
    };

    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedHide, e, 'toElement');
    };

    _this._mountNode = null;
    _this.state = {
      show: props.defaultOverlayShown
    };
    return _this;
  }

  var _proto = OverlayTrigger.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.renderOverlay();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    external___root___ReactDOM___commonjs2___react_dom___commonjs___react_dom___amd___react_dom___default.a.unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
    clearTimeout(this._hoverShowDelay);
    clearTimeout(this._hoverHideDelay);
  };

  _proto.handleDelayedHide = function handleDelayedHide() {
    var _this2 = this;

    if (this._hoverShowDelay != null) {
      clearTimeout(this._hoverShowDelay);
      this._hoverShowDelay = null;
      return;
    }

    if (!this.state.show || this._hoverHideDelay != null) {
      return;
    }

    var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;

    if (!delay) {
      this.hide();
      return;
    }

    this._hoverHideDelay = setTimeout(function () {
      _this2._hoverHideDelay = null;

      _this2.hide();
    }, delay);
  };

  _proto.handleDelayedShow = function handleDelayedShow() {
    var _this3 = this;

    if (this._hoverHideDelay != null) {
      clearTimeout(this._hoverHideDelay);
      this._hoverHideDelay = null;
      return;
    }

    if (this.state.show || this._hoverShowDelay != null) {
      return;
    }

    var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;

    if (!delay) {
      this.show();
      return;
    }

    this._hoverShowDelay = setTimeout(function () {
      _this3._hoverShowDelay = null;

      _this3.show();
    }, delay);
  };

  _proto.handleHide = function handleHide() {
    this.hide();
  }; // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.


  _proto.handleMouseOverOut = function handleMouseOverOut(handler, e, relatedNative) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];

    if ((!related || related !== target) && !contains_default()(target, related)) {
      handler(e);
    }
  };

  _proto.handleToggle = function handleToggle() {
    if (this.state.show) {
      this.hide();
    } else {
      this.show();
    }
  };

  _proto.hide = function hide() {
    this.setState({
      show: false
    });
  };

  _proto.makeOverlay = function makeOverlay(overlay, props) {
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Overlay, _extends({}, props, {
      show: this.state.show,
      onHide: this.handleHide,
      target: this,
      __source: {
        fileName: OverlayTrigger__jsxFileName,
        lineNumber: 220
      },
      __self: this
    }), overlay);
  };

  _proto.show = function show() {
    this.setState({
      show: true
    });
  };

  _proto.renderOverlay = function renderOverlay() {
    external___root___ReactDOM___commonjs2___react_dom___commonjs___react_dom___amd___react_dom___default.a.unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        trigger = _this$props.trigger,
        overlay = _this$props.overlay,
        children = _this$props.children,
        onBlur = _this$props.onBlur,
        onClick = _this$props.onClick,
        onFocus = _this$props.onFocus,
        onMouseOut = _this$props.onMouseOut,
        onMouseOver = _this$props.onMouseOver,
        props = _objectWithoutProperties(_this$props, ["trigger", "overlay", "children", "onBlur", "onClick", "onFocus", "onMouseOut", "onMouseOver"]);

    delete props.delay;
    delete props.delayShow;
    delete props.delayHide;
    delete props.defaultOverlayShown;
    var child = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Children.only(children);
    var childProps = child.props;
    var triggerProps = {};

    if (this.state.show) {
      triggerProps['aria-describedby'] = overlay.props.id;
    } // FIXME: The logic here for passing through handlers on this component is
    // inconsistent. We shouldn't be passing any of these props through.


    triggerProps.onClick = utils_createChainedFunction(childProps.onClick, onClick);

    if (isOneOf('click', trigger)) {
      triggerProps.onClick = utils_createChainedFunction(triggerProps.onClick, this.handleToggle);
    }

    if (isOneOf('hover', trigger)) {
      undefined !== "production" ? warning_browser_default()(!(trigger === 'hover'), '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' + 'visibility of the overlay to just mouse users. Consider also ' + 'including the `"focus"` trigger so that touch and keyboard only ' + 'users can see the overlay as well.') : void 0;
      triggerProps.onMouseOver = utils_createChainedFunction(childProps.onMouseOver, onMouseOver, this.handleMouseOver);
      triggerProps.onMouseOut = utils_createChainedFunction(childProps.onMouseOut, onMouseOut, this.handleMouseOut);
    }

    if (isOneOf('focus', trigger)) {
      triggerProps.onFocus = utils_createChainedFunction(childProps.onFocus, onFocus, this.handleDelayedShow);
      triggerProps.onBlur = utils_createChainedFunction(childProps.onBlur, onBlur, this.handleDelayedHide);
    }

    this._overlay = this.makeOverlay(overlay, props);
    return Object(external___root___React___commonjs2___react___commonjs___react___amd___react__["cloneElement"])(child, triggerProps);
  };

  _inheritsLoose(OverlayTrigger, _React$Component);

  return OverlayTrigger;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

OverlayTrigger_OverlayTrigger.propTypes = OverlayTrigger_propTypes;
OverlayTrigger_OverlayTrigger.defaultProps = OverlayTrigger_defaultProps;
/* harmony default export */ var src_OverlayTrigger = (OverlayTrigger_OverlayTrigger);
// CONCATENATED MODULE: ./src/PageItem.js



var PageItem__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/PageItem.js";

/* eslint-disable react/no-multi-comp */




var PageItem_propTypes = {
  className: prop_types_default.a.string,
  onSelect: prop_types_default.a.func,
  disabled: prop_types_default.a.bool,
  active: prop_types_default.a.bool,
  activeLabel: prop_types_default.a.string.isRequired
};
var PageItem_defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
function PageItem(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);

  var Component = active || disabled ? 'span' : src_SafeAnchor;
  return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("li", {
    style: style,
    className: classnames_default()(className, 'page-item', {
      active: active,
      disabled: disabled
    }),
    __source: {
      fileName: PageItem__jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({
    className: "page-link",
    disabled: disabled
  }, props, {
    __source: {
      fileName: PageItem__jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), children, active && external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: PageItem__jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, activeLabel)));
}
PageItem.propTypes = PageItem_propTypes;
PageItem.defaultProps = PageItem_defaultProps;

function createButton(name, defaultValue, label) {
  var _class, _temp;

  if (label === void 0) {
    label = name;
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["children"]);

      delete props.active;
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(PageItem, _extends({}, props, {
        __source: {
          fileName: PageItem__jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: PageItem__jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, children || defaultValue), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: PageItem__jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, label));
    };

    _inheritsLoose(_class, _React$Component);

    return _class;
  }(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component), _class.displayName = name, _temp;
}

var First = createButton('First', "\xAB");
var Prev = createButton('Prev', "\u2039", 'Previous');
var Ellipsis = createButton('Ellipsis', "\u2026", 'More');
var Next = createButton('Next', "\u203A");
var Last = createButton('Last', "\xBB");
// CONCATENATED MODULE: ./src/Pagination.js



var Pagination__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Pagination.js";





var Pagination_Pagination =
/*#__PURE__*/
function (_React$Component) {
  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("ul", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Pagination__jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), children);
  };

  _inheritsLoose(Pagination, _React$Component);

  return Pagination;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

bootstrapUtils_bsClass('pagination', Pagination_Pagination);
Pagination_Pagination.First = First;
Pagination_Pagination.Prev = Prev;
Pagination_Pagination.Ellipsis = Ellipsis;
Pagination_Pagination.Item = PageItem;
Pagination_Pagination.Next = Next;
Pagination_Pagination.Last = Last;
/* harmony default export */ var src_Pagination = (Pagination_Pagination);
// CONCATENATED MODULE: ./src/PanelCollapse.js


var PanelCollapse__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/PanelCollapse.js";




var PanelCollapse_propTypes = {
  /**
   * Callback fired before the component expands
   */
  onEnter: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to expand
   */
  onEntering: prop_types_default.a.func,

  /**
   * Callback fired after the component has expanded
   */
  onEntered: prop_types_default.a.func,

  /**
   * Callback fired before the component collapses
   */
  onExit: prop_types_default.a.func,

  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: prop_types_default.a.func,

  /**
   * Callback fired after the component has collapsed
   */
  onExited: prop_types_default.a.func
};
var PanelCollapse_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    headingId: prop_types_default.a.string,
    bodyId: prop_types_default.a.string,
    bsClass: prop_types_default.a.string,
    expanded: prop_types_default.a.bool
  })
};

var PanelCollapse_PanelCollapse =
/*#__PURE__*/
function (_React$Component) {
  function PanelCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelCollapse.prototype;

  _proto.render = function render() {
    var children = this.props.children;

    var _ref = this.context.$bs_panel || {},
        headingId = _ref.headingId,
        bodyId = _ref.bodyId,
        _bsClass = _ref.bsClass,
        expanded = _ref.expanded;

    var _splitBsProps = splitBsProps(this.props),
        bsProps = _splitBsProps[0],
        props = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (headingId && bodyId) {
      props.id = bodyId;
      props.role = props.role || 'tabpanel';
      props['aria-labelledby'] = headingId;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Collapse, _extends({
      "in": expanded
    }, props, {
      __source: {
        fileName: PanelCollapse__jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: bootstrapUtils_prefix(bsProps, 'collapse'),
      __source: {
        fileName: PanelCollapse__jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, children));
  };

  _inheritsLoose(PanelCollapse, _React$Component);

  return PanelCollapse;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

PanelCollapse_PanelCollapse.propTypes = PanelCollapse_propTypes;
PanelCollapse_PanelCollapse.contextTypes = PanelCollapse_contextTypes;
/* harmony default export */ var src_PanelCollapse = (bootstrapUtils_bsClass('panel', PanelCollapse_PanelCollapse));
// CONCATENATED MODULE: ./src/PanelBody.js


var PanelBody__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/PanelBody.js";





var PanelBody_propTypes = {
  /**
   * A convenience prop that renders a Collapse component around the Body for
   * situations when the parent Panel only contains a single Panel.Body child.
   *
   * renders:
   * ```jsx
   * <Panel.Collapse>
   *  <Panel.Body />
   * </Panel.Collapse>
   * ```
   */
  collapsible: prop_types_default.a.bool.isRequired
};
var PanelBody_defaultProps = {
  collapsible: false
};
var PanelBody_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string
  })
};

var PanelBody_PanelBody =
/*#__PURE__*/
function (_React$Component) {
  function PanelBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        collapsible = _this$props.collapsible;

    var _ref = this.context.$bs_panel || {},
        _bsClass = _ref.bsClass;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(this.props, ['collapsible']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;
    var body = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, bootstrapUtils_prefix(bsProps, 'body')),
      __source: {
        fileName: PanelBody__jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), children);

    if (collapsible) {
      body = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_PanelCollapse, {
        __source: {
          fileName: PanelBody__jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, body);
    }

    return body;
  };

  _inheritsLoose(PanelBody, _React$Component);

  return PanelBody;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

PanelBody_PanelBody.propTypes = PanelBody_propTypes;
PanelBody_PanelBody.defaultProps = PanelBody_defaultProps;
PanelBody_PanelBody.contextTypes = PanelBody_contextTypes;
/* harmony default export */ var src_PanelBody = (bootstrapUtils_bsClass('panel', PanelBody_PanelBody));
// EXTERNAL MODULE: ./node_modules/react-prop-types/lib/elementType.js
var lib_elementType = __webpack_require__(62);
var lib_elementType_default = /*#__PURE__*/__webpack_require__.n(lib_elementType);

// CONCATENATED MODULE: ./src/PanelHeading.js



var PanelHeading__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/PanelHeading.js";





var PanelHeading_propTypes = {
  componentClass: lib_elementType_default.a
};
var PanelHeading_defaultProps = {
  componentClass: 'div'
};
var PanelHeading_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    headingId: prop_types_default.a.string,
    bsClass: prop_types_default.a.string
  })
};

var PanelHeading_PanelHeading =
/*#__PURE__*/
function (_React$Component) {
  function PanelHeading() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelHeading.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        Component = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["children", "className", "componentClass"]);

    var _ref = this.context.$bs_panel || {},
        headingId = _ref.headingId,
        _bsClass = _ref.bsClass;

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (headingId) {
      elementProps.role = elementProps.role || 'tab';
      elementProps.id = headingId;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, bootstrapUtils_prefix(bsProps, 'heading')),
      __source: {
        fileName: PanelHeading__jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), children);
  };

  _inheritsLoose(PanelHeading, _React$Component);

  return PanelHeading;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

PanelHeading_PanelHeading.propTypes = PanelHeading_propTypes;
PanelHeading_PanelHeading.defaultProps = PanelHeading_defaultProps;
PanelHeading_PanelHeading.contextTypes = PanelHeading_contextTypes;
/* harmony default export */ var src_PanelHeading = (bootstrapUtils_bsClass('panel', PanelHeading_PanelHeading));
// CONCATENATED MODULE: ./src/PanelToggle.js




var PanelToggle__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/PanelToggle.js";






var PanelToggle_propTypes = {
  /**
   * only here to satisfy linting, just the html onClick handler.
   *
   * @private
   */
  onClick: prop_types_default.a.func,

  /**
   * You can use a custom element for this component
   */
  componentClass: lib_elementType_default.a
};
var PanelToggle_defaultProps = {
  componentClass: src_SafeAnchor
};
var PanelToggle_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    bodyId: prop_types_default.a.string,
    onToggle: prop_types_default.a.func,
    expanded: prop_types_default.a.bool
  })
};

var PanelToggle_PanelToggle =
/*#__PURE__*/
function (_React$Component) {
  function PanelToggle() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = PanelToggle.prototype;

  _proto.handleToggle = function handleToggle(event) {
    var _ref = this.context.$bs_panel || {},
        onToggle = _ref.onToggle;

    if (onToggle) {
      onToggle(event);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        onClick = _this$props.onClick,
        className = _this$props.className,
        componentClass = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["onClick", "className", "componentClass"]);

    var _ref2 = this.context.$bs_panel || {},
        expanded = _ref2.expanded,
        bodyId = _ref2.bodyId;

    var Component = componentClass;
    props.onClick = utils_createChainedFunction(onClick, this.handleToggle);
    props['aria-expanded'] = expanded;
    props.className = classnames_default()(className, !expanded && 'collapsed');

    if (bodyId) {
      props['aria-controls'] = bodyId;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      __source: {
        fileName: PanelToggle__jsxFileName,
        lineNumber: 62
      },
      __self: this
    }));
  };

  _inheritsLoose(PanelToggle, _React$Component);

  return PanelToggle;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

PanelToggle_PanelToggle.propTypes = PanelToggle_propTypes;
PanelToggle_PanelToggle.defaultProps = PanelToggle_defaultProps;
PanelToggle_PanelToggle.contextTypes = PanelToggle_contextTypes;
/* harmony default export */ var src_PanelToggle = (PanelToggle_PanelToggle);
// CONCATENATED MODULE: ./src/PanelTitle.js



var PanelTitle__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/PanelTitle.js";






var PanelTitle_propTypes = {
  componentClass: lib_elementType_default.a,

  /**
   * A convenience prop that renders the Panel.Title as a panel collapse toggle component
   * for the common use-case.
   */
  toggle: prop_types_default.a.bool
};
var PanelTitle_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string
  })
};
var PanelTitle_defaultProps = {
  componentClass: 'div'
};

var PanelTitle_PanelTitle =
/*#__PURE__*/
function (_React$Component) {
  function PanelTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        toggle = _this$props.toggle,
        Component = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["children", "className", "toggle", "componentClass"]);

    var _ref = this.context.$bs_panel || {},
        _bsClass = _ref.bsClass;

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (toggle) {
      children = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_PanelToggle, {
        __source: {
          fileName: PanelTitle__jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, children);
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, bootstrapUtils_prefix(bsProps, 'title')),
      __source: {
        fileName: PanelTitle__jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), children);
  };

  _inheritsLoose(PanelTitle, _React$Component);

  return PanelTitle;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

PanelTitle_PanelTitle.propTypes = PanelTitle_propTypes;
PanelTitle_PanelTitle.defaultProps = PanelTitle_defaultProps;
PanelTitle_PanelTitle.contextTypes = PanelTitle_contextTypes;
/* harmony default export */ var src_PanelTitle = (bootstrapUtils_bsClass('panel', PanelTitle_PanelTitle));
// CONCATENATED MODULE: ./src/PanelFooter.js


var PanelFooter__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/PanelFooter.js";




var PanelFooter_contextTypes = {
  $bs_panel: prop_types_default.a.shape({
    bsClass: prop_types_default.a.string
  })
};

var PanelFooter_PanelFooter =
/*#__PURE__*/
function (_React$Component) {
  function PanelFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelFooter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className;

    var _ref = this.context.$bs_panel || {},
        _bsClass = _ref.bsClass;

    var _splitBsProps = splitBsProps(this.props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, bootstrapUtils_prefix(bsProps, 'footer')),
      __source: {
        fileName: PanelFooter__jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), children);
  };

  _inheritsLoose(PanelFooter, _React$Component);

  return PanelFooter;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

PanelFooter_PanelFooter.contextTypes = PanelFooter_contextTypes;
/* harmony default export */ var src_PanelFooter = (bootstrapUtils_bsClass('panel', PanelFooter_PanelFooter));
// CONCATENATED MODULE: ./src/Panel.js





var Panel__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Panel.js";













var has = Object.prototype.hasOwnProperty;

var defaultGetId = function defaultGetId(id, type) {
  return id ? id + "--" + type : null;
};

var Panel_propTypes = {
  /**
   * Controls the collapsed/expanded state ofthe Panel. Requires
   * a `Panel.Collapse` or `<Panel.Body collapsible>` child component
   * in order to actually animate out or in.
   *
   * @controllable onToggle
   */
  expanded: prop_types_default.a.bool,

  /**
   * A callback fired when the collapse state changes.
   *
   * @controllable expanded
   */
  onToggle: prop_types_default.a.func,
  eventKey: prop_types_default.a.any,

  /**
   * An HTML `id` attribute uniquely identifying the Panel component.
   */
  id: prop_types_default.a.string
};
var Panel_contextTypes = {
  $bs_panelGroup: prop_types_default.a.shape({
    getId: prop_types_default.a.func,
    activeKey: prop_types_default.a.any,
    onToggle: prop_types_default.a.func
  })
};
var Panel_childContextTypes = {
  $bs_panel: prop_types_default.a.shape({
    headingId: prop_types_default.a.string,
    bodyId: prop_types_default.a.string,
    bsClass: prop_types_default.a.string,
    onToggle: prop_types_default.a.func,
    expanded: prop_types_default.a.bool
  })
};

var Panel_Panel =
/*#__PURE__*/
function (_React$Component) {
  function Panel() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleToggle = function (e) {
      var panelGroup = _this.context.$bs_panelGroup;
      var expanded = !_this.getExpanded();

      if (panelGroup && panelGroup.onToggle) {
        panelGroup.onToggle(_this.props.eventKey, expanded, e);
      } else {
        _this.props.onToggle(expanded, e);
      }
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Panel.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        eventKey = _this$props.eventKey,
        id = _this$props.id;
    var idKey = eventKey == null ? id : eventKey;
    var ids;

    if (idKey !== null) {
      var panelGroup = this.context.$bs_panelGroup;
      var getId = panelGroup && panelGroup.getId || defaultGetId;
      ids = {
        headingId: getId(idKey, 'heading'),
        bodyId: getId(idKey, 'body')
      };
    }

    return {
      $bs_panel: _extends({}, ids, {
        bsClass: this.props.bsClass,
        expanded: this.getExpanded(),
        onToggle: this.handleToggle
      })
    };
  };

  _proto.getExpanded = function getExpanded() {
    var panelGroup = this.context.$bs_panelGroup;

    if (panelGroup && has.call(panelGroup, 'activeKey')) {
      undefined !== "production" ? warning_browser_default()(this.props.expanded == null, 'Specifying `<Panel>` `expanded` in the context of an accordion ' + '`<PanelGroup>` is not supported. Set `activeKey` on the ' + '`<PanelGroup>` instead.') : void 0;
      return panelGroup.activeKey === this.props.eventKey;
    }

    return !!this.props.expanded;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        children = _this$props2.children;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(this.props, ['onToggle', 'eventKey', 'expanded']),
        bsProps = _splitBsPropsAndOmit[0],
        props = _splitBsPropsAndOmit[1];

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, props, {
      className: classnames_default()(className, getClassSet(bsProps)),
      __source: {
        fileName: Panel__jsxFileName,
        lineNumber: 130
      },
      __self: this
    }), children);
  };

  _inheritsLoose(Panel, _React$Component);

  return Panel;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Panel_Panel.propTypes = Panel_propTypes;
Panel_Panel.contextTypes = Panel_contextTypes;
Panel_Panel.childContextTypes = Panel_childContextTypes;
var UncontrolledPanel = uncontrollable_default()(bootstrapUtils_bsClass('panel', bsStyles(values_default()(State).concat([Style.DEFAULT, Style.PRIMARY]), Style.DEFAULT, Panel_Panel)), {
  expanded: 'onToggle'
});

assign_default()(UncontrolledPanel, {
  Heading: src_PanelHeading,
  Title: src_PanelTitle,
  Body: src_PanelBody,
  Footer: src_PanelFooter,
  Toggle: src_PanelToggle,
  Collapse: src_PanelCollapse
});

/* harmony default export */ var src_Panel = (UncontrolledPanel);
// CONCATENATED MODULE: ./src/Popover.js



var Popover__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Popover.js";





var Popover_propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string}
   * @required
   */
  id: isRequiredForA11y_default()(prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])),

  /**
   * Sets the direction the Popover is positioned towards.
   */
  placement: prop_types_default.a.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Popover.
   */
  positionTop: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "left" position value for the Popover.
   */
  positionLeft: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "top" position value for the Popover arrow.
   */
  arrowOffsetTop: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "left" position value for the Popover arrow.
   */
  arrowOffsetLeft: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * Title content
   */
  title: prop_types_default.a.node
};
var Popover_defaultProps = {
  placement: 'right'
};

var Popover_Popover =
/*#__PURE__*/
function (_React$Component) {
  function Popover() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Popover.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        placement = _this$props.placement,
        positionTop = _this$props.positionTop,
        positionLeft = _this$props.positionLeft,
        arrowOffsetTop = _this$props.arrowOffsetTop,
        arrowOffsetLeft = _this$props.arrowOffsetLeft,
        title = _this$props.title,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["placement", "positionTop", "positionLeft", "arrowOffsetTop", "arrowOffsetLeft", "title", "className", "style", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[placement] = true, _extends2));

    var outerStyle = _extends({
      display: 'block',
      top: positionTop,
      left: positionLeft
    }, style);

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    };
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      role: "tooltip",
      className: classnames_default()(className, classes),
      style: outerStyle,
      __source: {
        fileName: Popover__jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: "arrow",
      style: arrowStyle,
      __source: {
        fileName: Popover__jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), title && external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("h3", {
      className: bootstrapUtils_prefix(bsProps, 'title'),
      __source: {
        fileName: Popover__jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, title), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: bootstrapUtils_prefix(bsProps, 'content'),
      __source: {
        fileName: Popover__jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, children));
  };

  _inheritsLoose(Popover, _React$Component);

  return Popover;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Popover_Popover.propTypes = Popover_propTypes;
Popover_Popover.defaultProps = Popover_defaultProps;
/* harmony default export */ var src_Popover = (bootstrapUtils_bsClass('popover', Popover_Popover));
// CONCATENATED MODULE: ./src/ProgressBar.js



var ProgressBar__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ProgressBar.js";





var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;
  external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Children.forEach(children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */


    var element = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(DecoratedProgressBar, {
      __source: {
        fileName: ProgressBar__jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
    if (child.type === element.type) return;
    var childIdentifier = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });
  return error;
}

var ProgressBar_propTypes = {
  /**
   * Minimum value progress can begin from
   */
  min: prop_types_default.a.number,

  /**
   * Current value of progress
   */
  now: prop_types_default.a.number,

  /**
   * Maximum value progress can reach
   */
  max: prop_types_default.a.number,

  /**
   * Show label that represents visual percentage.
   * EG. 60%
   */
  label: prop_types_default.a.node,

  /**
   * Hide's the label visually.
   */
  srOnly: prop_types_default.a.bool,

  /**
   * Uses a gradient to create a striped effect.
   */
  striped: prop_types_default.a.bool,

  /**
   * Animate's the stripes from right to left
   */
  animated: prop_types_default.a.bool,

  /**
   * @private
   * @default 'progress-bar'
   */
  bsPrefix: prop_types_default.a.string,

  /**
   * Sets the background class of the progress bar.
   *
   * @type ('success'|'danger'|'warning'|'info')
   */
  variant: prop_types_default.a.string,

  /**
   * Child elements (only allows elements of type <ProgressBar />)
   */
  children: onlyProgressBar,

  /**
   * @private
   */
  isChild: prop_types_default.a.bool
};
var ProgressBar_defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar_ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  function ProgressBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.renderProgressBar = function renderProgressBar(_ref) {
    var _classes;

    var min = _ref.min,
        now = _ref.now,
        max = _ref.max,
        label = _ref.label,
        srOnly = _ref.srOnly,
        striped = _ref.striped,
        animated = _ref.animated,
        className = _ref.className,
        style = _ref.style,
        variant = _ref.variant,
        bsPrefix = _ref.bsPrefix,
        props = _objectWithoutProperties(_ref, ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"]);

    var classes = (_classes = {}, _classes[bsPrefix] = true, _classes["bg-" + variant] = variant, _classes[bsPrefix + "-animated"] = animated, _classes[bsPrefix + "-striped"] = animated || striped, _classes);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, props, {
      role: "progressbar",
      className: classnames_default()(className, classes),
      style: _extends({
        width: getPercentage(now, min, max) + "%"
      }, style),
      "aria-valuenow": now,
      "aria-valuemin": min,
      "aria-valuemax": max,
      __source: {
        fileName: ProgressBar__jsxFileName,
        lineNumber: 146
      },
      __self: this
    }), srOnly ? external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("span", {
      className: "sr-only",
      __source: {
        fileName: ProgressBar__jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, label) : label);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isChild = _this$props.isChild,
        props = _objectWithoutProperties(_this$props, ["isChild"]);

    if (isChild) {
      return this.renderProgressBar(props);
    }

    var min = props.min,
        now = props.now,
        max = props.max,
        label = props.label,
        srOnly = props.srOnly,
        striped = props.striped,
        animated = props.animated,
        bsPrefix = props.bsPrefix,
        variant = props.variant,
        className = props.className,
        children = props.children,
        wrapperProps = _objectWithoutProperties(props, ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, wrapperProps, {
      className: classnames_default()(className, 'progress'),
      __source: {
        fileName: ProgressBar__jsxFileName,
        lineNumber: 183
      },
      __self: this
    }), children ? ValidComponentChildren.map(children, function (child) {
      return Object(external___root___React___commonjs2___react___commonjs___react___amd___react__["cloneElement"])(child, {
        isChild: true
      });
    }) : this.renderProgressBar({
      min: min,
      now: now,
      max: max,
      label: label,
      srOnly: srOnly,
      striped: striped,
      animated: animated,
      bsPrefix: bsPrefix,
      variant: variant
    }));
  };

  _inheritsLoose(ProgressBar, _React$Component);

  return ProgressBar;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ProgressBar_ProgressBar.propTypes = ProgressBar_propTypes;
ProgressBar_ProgressBar.defaultProps = ProgressBar_defaultProps;
var DecoratedProgressBar = createBootstrapComponent(ProgressBar_ProgressBar, 'progress-bar');
/* harmony default export */ var src_ProgressBar = (DecoratedProgressBar);
// CONCATENATED MODULE: ./src/Radio.js



var Radio__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Radio.js";

/* eslint-disable jsx-a11y/label-has-for */





var Radio_propTypes = {
  inline: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  title: prop_types_default.a.string,

  /**
   * Only valid if `inline` is not set.
   */
  validationState: prop_types_default.a.oneOf(['success', 'warning', 'error', null]),

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Radio inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: prop_types_default.a.func
};
var Radio_defaultProps = {
  inline: false,
  disabled: false,
  title: ''
};

var Radio_Radio =
/*#__PURE__*/
function (_React$Component) {
  function Radio() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Radio.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        validationState = _this$props.validationState,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["inline", "disabled", "validationState", "inputRef", "className", "style", "title", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var input = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("input", _extends({}, elementProps, {
      ref: inputRef,
      type: "radio",
      disabled: disabled,
      __source: {
        fileName: Radio__jsxFileName,
        lineNumber: 56
      },
      __self: this
    }));

    if (inline) {
      var _classes2;

      var _classes = (_classes2 = {}, _classes2[bootstrapUtils_prefix(bsProps, 'inline')] = true, _classes2.disabled = disabled, _classes2); // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.


      undefined !== "production" ? warning_browser_default()(!validationState, '`validationState` is ignored on `<Radio inline>`. To display ' + 'validation state on an inline radio, set `validationState` on a ' + 'parent `<FormGroup>` or other element instead.') : void 0;
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("label", {
        className: classnames_default()(className, _classes),
        style: style,
        title: title,
        __source: {
          fileName: Radio__jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, input, children);
    }

    var classes = _extends({}, getClassSet(bsProps), {
      disabled: disabled
    });

    if (validationState) {
      classes["has-" + validationState] = true;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: classnames_default()(className, classes),
      style: style,
      __source: {
        fileName: Radio__jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("label", {
      title: title,
      __source: {
        fileName: Radio__jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, input, children));
  };

  _inheritsLoose(Radio, _React$Component);

  return Radio;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Radio_Radio.propTypes = Radio_propTypes;
Radio_Radio.defaultProps = Radio_defaultProps;
/* harmony default export */ var src_Radio = (bootstrapUtils_bsClass('radio', Radio_Radio));
// CONCATENATED MODULE: ./src/ResponsiveEmbed.js



var ResponsiveEmbed__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ResponsiveEmbed.js";




 // TODO: This should probably take a single `aspectRatio` prop.

var ResponsiveEmbed_propTypes = {
  /**
   * This component requires a single child element
   */
  children: prop_types_default.a.element.isRequired,

  /**
   * 16by9 aspect ratio
   */
  a16by9: prop_types_default.a.bool,

  /**
   * 4by3 aspect ratio
   */
  a4by3: prop_types_default.a.bool
};
var ResponsiveEmbed_defaultProps = {
  a16by9: false,
  a4by3: false
};

var ResponsiveEmbed_ResponsiveEmbed =
/*#__PURE__*/
function (_React$Component) {
  function ResponsiveEmbed() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ResponsiveEmbed.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        a16by9 = _this$props.a16by9,
        a4by3 = _this$props.a4by3,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["a16by9", "a4by3", "className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    undefined !== "production" ? warning_browser_default()(a16by9 || a4by3, 'Either `a16by9` or `a4by3` must be set.') : void 0;
    undefined !== "production" ? warning_browser_default()(!(a16by9 && a4by3), 'Only one of `a16by9` or `a4by3` can be set.') : void 0;

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[bootstrapUtils_prefix(bsProps, '16by9')] = a16by9, _extends2[bootstrapUtils_prefix(bsProps, '4by3')] = a4by3, _extends2));

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: classnames_default()(classes),
      __source: {
        fileName: ResponsiveEmbed__jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, Object(external___root___React___commonjs2___react___commonjs___react___amd___react__["cloneElement"])(children, _extends({}, elementProps, {
      className: classnames_default()(className, bootstrapUtils_prefix(bsProps, 'item'))
    })));
  };

  _inheritsLoose(ResponsiveEmbed, _React$Component);

  return ResponsiveEmbed;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ResponsiveEmbed_ResponsiveEmbed.propTypes = ResponsiveEmbed_propTypes;
ResponsiveEmbed_ResponsiveEmbed.defaultProps = ResponsiveEmbed_defaultProps;
/* harmony default export */ var src_ResponsiveEmbed = (bootstrapUtils_bsClass('embed-responsive', ResponsiveEmbed_ResponsiveEmbed));
// CONCATENATED MODULE: ./src/Row.js



var Row__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Row.js";




var Row_propTypes = {
  componentClass: elementType_default.a
};
var Row_defaultProps = {
  componentClass: 'div'
};

var Row_Row =
/*#__PURE__*/
function (_React$Component) {
  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Row__jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  };

  _inheritsLoose(Row, _React$Component);

  return Row;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Row_Row.propTypes = Row_propTypes;
Row_Row.defaultProps = Row_defaultProps;
/* harmony default export */ var src_Row = (bootstrapUtils_bsClass('row', Row_Row));
// CONCATENATED MODULE: ./src/SplitToggle.js


var SplitToggle__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/SplitToggle.js";



var SplitToggle_SplitToggle =
/*#__PURE__*/
function (_React$Component) {
  function SplitToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SplitToggle.prototype;

  _proto.render = function render() {
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_DropdownToggle, _extends({}, this.props, {
      useAnchor: false,
      noCaret: false,
      __source: {
        fileName: SplitToggle__jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
  };

  _inheritsLoose(SplitToggle, _React$Component);

  return SplitToggle;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

SplitToggle_SplitToggle.defaultProps = src_DropdownToggle.defaultProps;
/* harmony default export */ var src_SplitToggle = (SplitToggle_SplitToggle);
// CONCATENATED MODULE: ./src/SplitButton.js



var SplitButton__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/SplitButton.js";







var SplitButton_propTypes = _extends({}, src_Dropdown.propTypes, {
  // Toggle props.
  bsStyle: prop_types_default.a.string,
  bsSize: prop_types_default.a.string,
  href: prop_types_default.a.string,
  onClick: prop_types_default.a.func,

  /**
   * The content of the split button.
   */
  title: prop_types_default.a.node.isRequired,

  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: prop_types_default.a.string,
  // Override generated docs from <Dropdown>.

  /**
   * @private
   */
  children: prop_types_default.a.node
});

var SplitButton_SplitButton =
/*#__PURE__*/
function (_React$Component) {
  function SplitButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SplitButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsSize = _this$props.bsSize,
        bsStyle = _this$props.bsStyle,
        title = _this$props.title,
        toggleLabel = _this$props.toggleLabel,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["bsSize", "bsStyle", "title", "toggleLabel", "children"]);

    var _splitComponentProps = splitComponentProps(props, src_Dropdown.ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        buttonProps = _splitComponentProps[1];

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Dropdown, _extends({}, dropdownProps, {
      bsSize: bsSize,
      bsStyle: bsStyle,
      __source: {
        fileName: SplitButton__jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Button, _extends({}, buttonProps, {
      disabled: props.disabled,
      bsSize: bsSize,
      bsStyle: bsStyle,
      __source: {
        fileName: SplitButton__jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), title), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_SplitToggle, {
      "aria-label": toggleLabel || title,
      bsSize: bsSize,
      bsStyle: bsStyle,
      __source: {
        fileName: SplitButton__jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Dropdown.Menu, {
      __source: {
        fileName: SplitButton__jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, children));
  };

  _inheritsLoose(SplitButton, _React$Component);

  return SplitButton;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

SplitButton_SplitButton.propTypes = SplitButton_propTypes;
SplitButton_SplitButton.Toggle = src_SplitToggle;
/* harmony default export */ var src_SplitButton = (SplitButton_SplitButton);
// CONCATENATED MODULE: ./src/TabContainer.js


var TabContainer__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/TabContainer.js";






var TabContainer_TabContainer =
/*#__PURE__*/
function (_React$Component) {
  TabContainer.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var onSelect = _ref.onSelect,
        activeKey = _ref.activeKey,
        mountOnEnter = _ref.mountOnEnter,
        unmountOnExit = _ref.unmountOnExit,
        transition = _ref.transition;
    return {
      tabContext: _extends({}, prevState.tabContext, {
        activeKey: activeKey,
        onSelect: onSelect,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        transition: transition
      })
    };
  };

  function TabContainer() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.getControlledId = function (key) {
      return _this.getKey(key, 'tabpane');
    };

    _this.getControllerId = function (key) {
      return _this.getKey(key, 'tab');
    };

    _this.state = {
      tabContext: {
        onSelect: _this.props.onSelect,
        activeKey: _this.props.activeKey,
        transition: _this.props.transition,
        mountOnEnter: _this.props.mountOnEnter,
        unmountOnExit: _this.props.unmountOnExit,
        getControlledId: _this.getControlledId,
        getControllerId: _this.getControllerId
      }
    };
    return _this;
  }

  var _proto = TabContainer.prototype;

  _proto.getKey = function getKey(key, type) {
    var _this$props = this.props,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;
    if (generateChildId) return generateChildId(key, type);
    return id ? id + "-" + type + "-" + key : null;
  };

  _proto.render = function render() {
    var children = this.props.children;
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_TabContext.Provider, {
      value: this.state.tabContext,
      __source: {
        fileName: TabContainer__jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, children);
  };

  _inheritsLoose(TabContainer, _React$Component);

  return TabContainer;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

TabContainer_TabContainer.propTypes = {
  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   *
   * @type {string}
   */
  id: function id(props) {
    var error = null;

    if (!props.generateChildId) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      error = prop_types_default.a.string.apply(prop_types_default.a, [props].concat(args));

      if (!error && !props.id) {
        error = new Error('In order to properly initialize Tabs in a way that is accessible ' + 'to assistive technologies (such as screen readers) an `id` or a ' + '`generateChildId` prop to TabContainer is required');
      }
    }

    return error;
  },

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   *
   * @type {{Transition | false}}
   * @default {Fade}
   */
  transition: prop_types_default.a.oneOfType([prop_types_default.a.oneOf([false]), elementType_default.a]),

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: prop_types_default.a.bool,

  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${eventKey}`
   */
  generateChildId: prop_types_default.a.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: prop_types_default.a.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: prop_types_default.a.any
};
/* harmony default export */ var src_TabContainer = (uncontrollable_default()(TabContainer_TabContainer, {
  activeKey: 'onSelect'
}));
// CONCATENATED MODULE: ./src/TabContent.js



var TabContent__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/TabContent.js";






var TabContent_TabContent =
/*#__PURE__*/
function (_React$Component) {
  function TabContent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["bsPrefix", "componentClass", "className"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, props, {
      className: classnames_default()(className, bsPrefix),
      __source: {
        fileName: TabContent__jsxFileName,
        lineNumber: 30
      },
      __self: this
    }));
  };

  _inheritsLoose(TabContent, _React$Component);

  return TabContent;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

TabContent_TabContent.propTypes = {
  /**
   * @default 'tab-content'
   */
  bsPrefix: prop_types_default.a.string,
  componentClass: elementType_default.a
};
TabContent_TabContent.defaultProps = {
  componentClass: 'div'
};
/* harmony default export */ var src_TabContent = (createBootstrapComponent(TabContent_TabContent, 'tab-content'));
// CONCATENATED MODULE: ./src/TabPane.js



var TabPane__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/TabPane.js";









var TabPane_TabPane =
/*#__PURE__*/
function (_React$Component) {
  function TabPane() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabPane.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        active = _this$props.active,
        eventKey = _this$props.eventKey,
        className = _this$props.className,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        onExited = _this$props.onExited,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        Transition = _this$props.transition,
        props = _objectWithoutProperties(_this$props, ["bsPrefix", "active", "eventKey", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition"]);

    if (!active && unmountOnExit) return null;
    var pane = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, props, {
      role: "tabpanel",
      "aria-hidden": !active,
      className: classnames_default()(className, bsPrefix, {
        active: active
      }),
      __source: {
        fileName: TabPane__jsxFileName,
        lineNumber: 111
      },
      __self: this
    }));
    if (Transition) pane = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Transition, {
      "in": active,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited,
      mountOnEnter: mountOnEnter,
      unmountOnExit: mountOnEnter,
      __source: {
        fileName: TabPane__jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
    // conflict with the top level one.

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_TabContext.Provider, {
      value: null,
      __source: {
        fileName: TabPane__jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, pane);
  };

  _inheritsLoose(TabPane, _React$Component);

  return TabPane;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

TabPane_TabPane.propTypes = {
  /**
   * @default 'tab-pane'
   */
  bsPrefix: prop_types_default.a.string,

  /**
   * A key that associates the `TabPane` with it's controlling `NavLink`.
   */
  eventKey: prop_types_default.a.any,

  /**
   * Toggles the active state of the TabPane, this is generally controlled by a
   * TabContainer.
   */
  active: prop_types_default.a.bool,

  /**
   * Use animation when showing or hiding `<TabPane>`s. Use `false` to disable,
   * `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  transition: prop_types_default.a.oneOfType([prop_types_default.a.bool, elementType_default.a]),

  /**
   *
   * @default 'tab-pane'
   */
  bsClass: prop_types_default.a.string,

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: prop_types_default.a.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: prop_types_default.a.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: prop_types_default.a.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: prop_types_default.a.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: prop_types_default.a.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: prop_types_default.a.func,

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: prop_types_default.a.bool,

  /** @private * */
  id: prop_types_default.a.string,

  /** @private * */
  'aria-labelledby': prop_types_default.a.string
};
/* harmony default export */ var src_TabPane = (mapContextToProps(createBootstrapComponent(TabPane_TabPane, 'tab-pane'), src_TabContext.Consumer, function (context, props) {
  if (!context) return null;

  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = _objectWithoutProperties(context, ["activeKey", "getControlledId", "getControllerId"]);

  var shouldTransition = props.transition !== false && rest.transition !== false;
  return {
    active: String(activeKey) === String(props.eventKey),
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || src_Fade),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  };
}));
// CONCATENATED MODULE: ./src/Tab.js






/* eslint-disable react/require-render-return, react/no-unused-prop-types */

var Tab_Tab =
/*#__PURE__*/
function (_React$Component) {
  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
  };

  _inheritsLoose(Tab, _React$Component);

  return Tab;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Tab_Tab.propTypes = {
  title: prop_types_default.a.node.isRequired
};
Tab_Tab.Container = src_TabContainer;
Tab_Tab.Content = src_TabContent;
Tab_Tab.Pane = src_TabPane;
/* harmony default export */ var src_Tab = (Tab_Tab);
// CONCATENATED MODULE: ./src/Table.js



var Table__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Table.js";





var Table_Table =
/*#__PURE__*/
function (_React$Component) {
  function Table() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Table.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        striped = _this$props.striped,
        bordered = _this$props.bordered,
        hover = _this$props.hover,
        size = _this$props.size,
        variant = _this$props.variant,
        responsive = _this$props.responsive,
        props = _objectWithoutProperties(_this$props, ["bsPrefix", "striped", "bordered", "hover", "size", "variant", "responsive"]);

    var classes = classnames_default()(bsPrefix, variant && bsPrefix + "-" + variant, size && bsPrefix + "-" + size, striped && bsPrefix + "-striped", bordered && bsPrefix + "-bordered", hover && bsPrefix + "-hover");
    var table = external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("table", _extends({}, props, {
      className: classes,
      __source: {
        fileName: Table__jsxFileName,
        lineNumber: 74
      },
      __self: this
    }));

    if (responsive) {
      var responsiveClass = bsPrefix + "-responsive";

      if (typeof responsive === 'string') {
        responsiveClass = responsiveClass + "-" + responsive;
      }

      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
        className: responsiveClass,
        __source: {
          fileName: Table__jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, table);
    }

    return table;
  };

  _inheritsLoose(Table, _React$Component);

  return Table;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Table_Table.propTypes = {
  /**
   * @default 'table'
   */
  bsPrefix: prop_types_default.a.string,

  /**
   * Adds zebra-striping to any table row within the `<tbody>`.
   */
  striped: prop_types_default.a.bool,

  /**
   * Adds borders on all sides of the table and cells.
   */
  bordered: prop_types_default.a.bool,

  /**
   * Enable a hover state on table rows within a `<tbody>`.
   */
  hover: prop_types_default.a.bool,

  /**
   * Make tables more compact by cutting cell padding in half by setting
   * size as `sm`.
   */
  size: prop_types_default.a.string,

  /**
   * Invert the colors of the table — with light text on dark backgrounds
   * by setting variant as `dark`.
   */
  variant: prop_types_default.a.string,

  /**
   * Responsive tables allow tables to be scrolled horizontally with ease.
   * Across every breakpoint, use `responsive` for horizontally
   * scrolling tables. Responsive tables are wrapped automatically in a `div`.
   * Use `responsive="sm"`, `responsive="md"`, `responsive="lg"`, or
   * `responsive="xl"` as needed to create responsive tables up to
   * a particular breakpoint. From that breakpoint and up, the table will
   * behave normally and not scroll horizontally.
   */
  responsive: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.string])
};
/* harmony default export */ var src_Table = (createBootstrapComponent(Table_Table, 'table'));
// CONCATENATED MODULE: ./src/Tabs.js



var Tabs__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Tabs.js";












var Tabs_TabContainer = src_TabContainer.ControlledComponent;
var Tabs_propTypes = {
  /**
   * Mark the Tab with a matching `eventKey` as active.
   *
   * @controllable onSelect
   */
  activeKey: prop_types_default.a.any,

  /**
   * Navigation style
   *
   * @type {('tabs'| 'pills')}
   */
  variant: prop_types_default.a.string,

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   *
   * @type {Transition | false}
   * @default {Fade}
   */
  transition: prop_types_default.a.oneOfType([prop_types_default.a.oneOf([false]), elementType_default.a]),

  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   *
   * @type {string}
   */
  id: isRequiredForA11y_default()(prop_types_default.a.string),

  /**
   * Callback fired when a Tab is selected.
   *
   * ```js
   * function (
   *   Any eventKey,
   *   SyntheticEvent event?
   * )
   * ```
   *
   * @controllable activeKey
   */
  onSelect: prop_types_default.a.func,

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,

  /**
   * Unmount tabs (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: prop_types_default.a.bool
};
var Tabs_defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

var Tabs_Tabs =
/*#__PURE__*/
function (_React$Component) {
  function Tabs() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.renderTab = function renderTab(child) {
    var _child$props = child.props,
        title = _child$props.title,
        eventKey = _child$props.eventKey,
        disabled = _child$props.disabled,
        tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_NavItem, {
      componentClass: src_NavLink,
      eventKey: eventKey,
      disabled: disabled,
      className: tabClassName,
      __source: {
        fileName: Tabs__jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, title);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        onSelect = _this$props.onSelect,
        transition = _this$props.transition,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        _this$props$activeKey = _this$props.activeKey,
        activeKey = _this$props$activeKey === void 0 ? getDefaultActiveKey(children) : _this$props$activeKey,
        props = _objectWithoutProperties(_this$props, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "className", "style", "children", "activeKey"]);

    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Tabs_TabContainer, {
      id: id,
      activeKey: activeKey,
      onSelect: onSelect,
      transition: transition,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit,
      __source: {
        fileName: Tabs__jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Nav, _extends({}, props, {
      role: "tablist",
      componentClass: "nav",
      __source: {
        fileName: Tabs__jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), map(children, this.renderTab)), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_TabContent, {
      __source: {
        fileName: Tabs__jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, map(children, function (child) {
      var childProps = _extends({}, child.props);

      delete childProps.title;
      delete childProps.disabled;
      delete childProps.tabClassName;
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_TabPane, _extends({}, childProps, {
        __source: {
          fileName: Tabs__jsxFileName,
          lineNumber: 146
        },
        __self: this
      }));
    })));
  };

  _inheritsLoose(Tabs, _React$Component);

  return Tabs;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Tabs_Tabs.propTypes = Tabs_propTypes;
Tabs_Tabs.defaultProps = Tabs_defaultProps;
/* harmony default export */ var src_Tabs = (uncontrollable_default()(Tabs_Tabs, {
  activeKey: 'onSelect'
}));
// CONCATENATED MODULE: ./src/Thumbnail.js



var Thumbnail__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Thumbnail.js";

/* eslint-disable jsx-a11y/alt-text */





var Thumbnail_propTypes = {
  /**
   * src property that is passed down to the image inside this component
   */
  src: prop_types_default.a.string,

  /**
   * alt property that is passed down to the image inside this component
   */
  alt: prop_types_default.a.string,

  /**
   * href property that is passed down to the image inside this component
   */
  href: prop_types_default.a.string,

  /**
   * onError callback that is passed down to the image inside this component
   */
  onError: prop_types_default.a.func,

  /**
   * onLoad callback that is passed down to the image inside this component
   */
  onLoad: prop_types_default.a.func
};

var Thumbnail_Thumbnail =
/*#__PURE__*/
function (_React$Component) {
  function Thumbnail() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Thumbnail.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        src = _this$props.src,
        alt = _this$props.alt,
        onError = _this$props.onError,
        onLoad = _this$props.onLoad,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["src", "alt", "onError", "onLoad", "className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var Component = elementProps.href ? src_SafeAnchor : 'div';
    var classes = getClassSet(bsProps);
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __source: {
        fileName: Thumbnail__jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("img", _extends({
      src: src,
      alt: alt,
      onError: onError,
      onLoad: onLoad
    }, {
      __source: {
        fileName: Thumbnail__jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), children && external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: "caption",
      __source: {
        fileName: Thumbnail__jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, children));
  };

  _inheritsLoose(Thumbnail, _React$Component);

  return Thumbnail;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Thumbnail_Thumbnail.propTypes = Thumbnail_propTypes;
/* harmony default export */ var src_Thumbnail = (bootstrapUtils_bsClass('thumbnail', Thumbnail_Thumbnail));
// CONCATENATED MODULE: ./src/ToggleButton.js




var ToggleButton__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ToggleButton.js";




var ToggleButton_propTypes = {
  /**
   * The `<input>` element `type`
   */
  type: prop_types_default.a.oneOf(['checkbox', 'radio']),

  /**
   * The HTML input name, used to group like checkboxes or radio buttons together
   * semantically
   */
  name: prop_types_default.a.string,

  /**
   * The checked state of the input, managed by `<ToggleButtonGroup>`` automatically
   */
  checked: prop_types_default.a.bool,

  /**
   * The disabled state of both the label and input
   */
  disabled: prop_types_default.a.bool,

  /**
   * A callback fired when the underlying input element changes. This is passed
   * directly to the `<input>` so shares the same signature as a native `onChange` event.
   */
  onChange: prop_types_default.a.func,

  /**
   * The value of the input, should be unique amoungst it's siblings when nested in a
   * `ToggleButtonGroup`.
   */
  value: prop_types_default.a.any.isRequired
};

var ToggleButton_ToggleButton =
/*#__PURE__*/
function (_React$Component) {
  function ToggleButton() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      focused: false
    }, _this.handleFocus = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: true
      });
    }, _this.handleBlur = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: false
      });
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = ToggleButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        name = _this$props.name,
        className = _this$props.className,
        checked = _this$props.checked,
        type = _this$props.type,
        onChange = _this$props.onChange,
        value = _this$props.value,
        props = _objectWithoutProperties(_this$props, ["children", "name", "className", "checked", "type", "onChange", "value"]);

    var focused = this.state.focused;
    var disabled = props.disabled;
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_Button, _extends({}, props, {
      className: classnames_default()(className, focused && 'focus'),
      type: null,
      active: !!checked,
      componentClass: "label",
      __source: {
        fileName: ToggleButton__jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("input", {
      name: name,
      type: type,
      value: value,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChange: onChange,
      __source: {
        fileName: ToggleButton__jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), children);
  };

  _inheritsLoose(ToggleButton, _React$Component);

  return ToggleButton;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ToggleButton_ToggleButton.propTypes = ToggleButton_propTypes;
/* harmony default export */ var src_ToggleButton = (ToggleButton_ToggleButton);
// CONCATENATED MODULE: ./src/ToggleButtonGroup.js



var ToggleButtonGroup__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/ToggleButtonGroup.js";








var ToggleButtonGroup_propTypes = {
  /**
   * An HTML `<input>` name for each child button.
   *
   * __Required if `type` is set to `'radio'`__
   */
  name: prop_types_default.a.string,

  /**
   * The value, or array of values, of the active (pressed) buttons
   *
   * @controllable onChange
   */
  value: prop_types_default.a.any,

  /**
   * Callback fired when a button is pressed, depending on whether the `type`
   * is `'radio'` or `'checkbox'`, `onChange` will be called with the value or
   * array of active values
   *
   * @controllable values
   */
  onChange: prop_types_default.a.func,

  /**
   * The input `type` of the rendered buttons, determines the toggle behavior
   * of the buttons
   */
  type: prop_types_default.a.oneOf(['checkbox', 'radio']).isRequired
};
var ToggleButtonGroup_defaultProps = {
  type: 'radio'
};

var ToggleButtonGroup_ToggleButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  function ToggleButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButtonGroup.prototype;

  _proto.getValues = function getValues() {
    var value = this.props.value;
    return value == null ? [] : [].concat(value);
  };

  _proto.handleToggle = function handleToggle(value, event) {
    var _this$props = this.props,
        type = _this$props.type,
        onChange = _this$props.onChange;
    var values = this.getValues();
    var isActive = values.indexOf(value) !== -1;

    if (type === 'radio') {
      if (!isActive) onChange(value, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== value;
      }), event);
    } else {
      onChange(values.concat([value]), event);
    }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        type = _this$props2.type,
        name = _this$props2.name,
        props = _objectWithoutProperties(_this$props2, ["children", "type", "name"]);

    delete props.onChange;
    delete props.value;
    var values = this.getValues();
    !(type !== 'radio' || !!name) ? undefined !== "production" ? browser_default()(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : browser_default()(false) : void 0;
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(src_ButtonGroup, _extends({}, props, {
      toggle: true,
      __source: {
        fileName: ToggleButtonGroup__jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), ValidComponentChildren.map(children, function (child) {
      var _child$props = child.props,
          value = _child$props.value,
          onChange = _child$props.onChange;

      var handler = function handler(e) {
        return _this.handleToggle(value, e);
      };

      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.cloneElement(child, {
        type: type,
        name: child.name || name,
        checked: values.indexOf(value) !== -1,
        onChange: utils_createChainedFunction(onChange, handler)
      });
    }));
  };

  _inheritsLoose(ToggleButtonGroup, _React$Component);

  return ToggleButtonGroup;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

ToggleButtonGroup_ToggleButtonGroup.propTypes = ToggleButtonGroup_propTypes;
ToggleButtonGroup_ToggleButtonGroup.defaultProps = ToggleButtonGroup_defaultProps;
var UncontrolledToggleButtonGroup = uncontrollable_default()(ToggleButtonGroup_ToggleButtonGroup, {
  value: 'onChange'
});
UncontrolledToggleButtonGroup.Button = src_ToggleButton;
/* harmony default export */ var src_ToggleButtonGroup = (UncontrolledToggleButtonGroup);
// CONCATENATED MODULE: ./src/Tooltip.js



var Tooltip__jsxFileName = "/home/coco/Projects/Node/react-bootstrap/src/Tooltip.js";





var Tooltip_propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string|number}
   * @required
   */
  id: isRequiredForA11y_default()(prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])),

  /**
   * Sets the direction the Tooltip is positioned towards.
   */
  placement: prop_types_default.a.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Tooltip.
   */
  positionTop: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "left" position value for the Tooltip.
   */
  positionLeft: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "top" position value for the Tooltip arrow.
   */
  arrowOffsetTop: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),

  /**
   * The "left" position value for the Tooltip arrow.
   */
  arrowOffsetLeft: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string])
};
var Tooltip_defaultProps = {
  placement: 'right'
};

var Tooltip_Tooltip =
/*#__PURE__*/
function (_React$Component) {
  function Tooltip() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tooltip.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        placement = _this$props.placement,
        positionTop = _this$props.positionTop,
        positionLeft = _this$props.positionLeft,
        arrowOffsetTop = _this$props.arrowOffsetTop,
        arrowOffsetLeft = _this$props.arrowOffsetLeft,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = _objectWithoutProperties(_this$props, ["placement", "positionTop", "positionLeft", "arrowOffsetTop", "arrowOffsetLeft", "className", "style", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[placement] = true, _extends2));

    var outerStyle = _extends({
      top: positionTop,
      left: positionLeft
    }, style);

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    };
    return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", _extends({}, elementProps, {
      role: "tooltip",
      className: classnames_default()(className, classes),
      style: outerStyle,
      __source: {
        fileName: Tooltip__jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: bootstrapUtils_prefix(bsProps, 'arrow'),
      style: arrowStyle,
      __source: {
        fileName: Tooltip__jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
      className: bootstrapUtils_prefix(bsProps, 'inner'),
      __source: {
        fileName: Tooltip__jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, children));
  };

  _inheritsLoose(Tooltip, _React$Component);

  return Tooltip;
}(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Component);

Tooltip_Tooltip.propTypes = Tooltip_propTypes;
Tooltip_Tooltip.defaultProps = Tooltip_defaultProps;
/* harmony default export */ var src_Tooltip = (bootstrapUtils_bsClass('tooltip', Tooltip_Tooltip));
// CONCATENATED MODULE: ./src/utils/index.js






// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Accordion", function() { return src_Accordion; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Alert", function() { return src_Alert; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Badge", function() { return src_Badge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return src_Breadcrumb; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return src_BreadcrumbItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Button", function() { return src_Button; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return src_ButtonGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ButtonToolbar", function() { return src_ButtonToolbar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Carousel", function() { return src_Carousel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return src_CarouselItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return src_Checkbox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Clearfix", function() { return src_Clearfix; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CloseButton", function() { return src_CloseButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormLabel", function() { return src_FormLabel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Col", function() { return src_Col; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Collapse", function() { return src_Collapse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return src_Dropdown; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DropdownButton", function() { return src_DropdownButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Fade", function() { return src_Fade; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Form", function() { return src_Form; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormControl", function() { return src_FormControl; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormGroup", function() { return src_FormGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Glyphicon", function() { return src_Glyphicon; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Grid", function() { return src_Grid; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HelpBlock", function() { return HelpBlock; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Image", function() { return src_Image; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Figure", function() { return src_Figure; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "InputGroup", function() { return src_InputGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return src_Jumbotron; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListGroup", function() { return src_ListGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListGroupItem", function() { return src_ListGroupItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Media", function() { return src_Media; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MenuItem", function() { return src_MenuItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Modal", function() { return src_Modal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ModalBody", function() { return src_ModalBody; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ModalDialog", function() { return src_ModalDialog; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return src_ModalFooter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return src_ModalTitle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Nav", function() { return src_Nav; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Navbar", function() { return src_Navbar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NavbarBrand", function() { return src_NavbarBrand; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NavDropdown", function() { return src_NavDropdown; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NavItem", function() { return src_NavItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Overlay", function() { return src_Overlay; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "OverlayTrigger", function() { return src_OverlayTrigger; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PageItem", function() { return PageItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Pagination", function() { return src_Pagination; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Panel", function() { return src_Panel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PanelGroup", function() { return src_PanelGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Popover", function() { return src_Popover; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return src_ProgressBar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Radio", function() { return src_Radio; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ResponsiveEmbed", function() { return src_ResponsiveEmbed; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Row", function() { return src_Row; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SafeAnchor", function() { return src_SafeAnchor; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SplitButton", function() { return src_SplitButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tab", function() { return src_Tab; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabContainer", function() { return src_TabContainer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabContent", function() { return src_TabContent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Table", function() { return src_Table; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabPane", function() { return src_TabPane; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return src_Tabs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Thumbnail", function() { return src_Thumbnail; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return src_ToggleButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ToggleButtonGroup", function() { return src_ToggleButtonGroup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tooltip", function() { return src_Tooltip; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utils", function() { return utils_namespaceObject; });







































































































































/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(5).Object.assign;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(100) });


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(26);
var toObject = __webpack_require__(27);
var IObject = __webpack_require__(42);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(16)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(30);
var toAbsoluteIndex = __webpack_require__(102);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(104);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
module.exports = __webpack_require__(5).Object.getOwnPropertySymbols;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(8);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(68);
var META = __webpack_require__(50).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(47);
var setToStringTag = __webpack_require__(32);
var uid = __webpack_require__(31);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(69);
var wksDefine = __webpack_require__(106);
var enumKeys = __webpack_require__(107);
var isArray = __webpack_require__(70);
var anObject = __webpack_require__(20);
var isObject = __webpack_require__(13);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(41);
var createDesc = __webpack_require__(25);
var _create = __webpack_require__(52);
var gOPNExt = __webpack_require__(110);
var $GOPD = __webpack_require__(111);
var $DP = __webpack_require__(9);
var $keys = __webpack_require__(21);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(71).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(26).f = $propertyIsEnumerable;
  __webpack_require__(49).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(51)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(5);
var LIBRARY = __webpack_require__(51);
var wksExt = __webpack_require__(69);
var defineProperty = __webpack_require__(9).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(26);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var anObject = __webpack_require__(20);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(71).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(26);
var createDesc = __webpack_require__(25);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(41);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(65);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(113);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
module.exports = __webpack_require__(5).Object.keys;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(27);
var $keys = __webpack_require__(21);

__webpack_require__(115)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(5);
var fails = __webpack_require__(16);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(53);
var invariant = __webpack_require__(54);
var warning = __webpack_require__(72);
var assign = __webpack_require__(117);

var ReactPropTypesSecret = __webpack_require__(55);
var checkPropTypes = __webpack_require__(118);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (undefined !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (undefined !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      undefined !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      undefined !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (undefined !== 'production') {
  var invariant = __webpack_require__(54);
  var warning = __webpack_require__(72);
  var ReactPropTypesSecret = __webpack_require__(55);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (undefined !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(53);
var invariant = __webpack_require__(54);
var ReactPropTypesSecret = __webpack_require__(55);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.uncontrolledPropTypes = uncontrolledPropTypes;
exports.isProp = isProp;
exports.defaultKey = defaultKey;
exports.isReactComponent = isReactComponent;

var _invariant = _interopRequireDefault(__webpack_require__(33));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (undefined !== 'production') {
      var handler = controlledValues[prop];
      !(typeof handler === 'string' && handler.trim().length) ? undefined !== "production" ? (0, _invariant.default)(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : invariant(false) : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}

function isProp(props, prop) {
  return props[prop] !== undefined;
}

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */


function isReactComponent(component) {
  return !!(component && component.prototype && component.prototype.isReactComponent);
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
module.exports = __webpack_require__(5).Object.entries;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(7);
var $entries = __webpack_require__(73)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
module.exports = __webpack_require__(5).Object.values;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(7);
var $values = __webpack_require__(73)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (undefined === 'production') {
  module.exports = __webpack_require__(126);
} else {
  module.exports = __webpack_require__(127);
}


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.3.2
 * react-is.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var b="function"===typeof Symbol&&Symbol["for"],c=b?Symbol["for"]("react.element"):60103,d=b?Symbol["for"]("react.portal"):60106,e=b?Symbol["for"]("react.fragment"):60107,f=b?Symbol["for"]("react.strict_mode"):60108,g=b?Symbol["for"]("react.provider"):60109,h=b?Symbol["for"]("react.context"):60110,k=b?Symbol["for"]("react.async_mode"):60111,l=b?Symbol["for"]("react.forward_ref"):60112;
function m(a){if("object"===typeof a&&null!==a){var n=a.$$typeof;switch(n){case c:switch(a=a.type,a){case k:case e:case f:return a;default:switch(a=a&&a.$$typeof,a){case h:case l:case g:return a;default:return n}}case d:return n}}}exports.typeOf=m;exports.AsyncMode=k;exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=c;exports.ForwardRef=l;exports.Fragment=e;exports.Portal=d;exports.StrictMode=f;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===k||a===f||"object"===typeof a&&null!==a&&(a.$$typeof===g||a.$$typeof===h||a.$$typeof===l)};exports.isAsyncMode=function(a){return m(a)===k};exports.isContextConsumer=function(a){return m(a)===h};exports.isContextProvider=function(a){return m(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return m(a)===l};
exports.isFragment=function(a){return m(a)===e};exports.isPortal=function(a){return m(a)===d};exports.isStrictMode=function(a){return m(a)===f};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.3.2
 * react-is.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (undefined !== "production") {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;


var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol['for']('react.strict_mode') : 0xeacc;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol['for']('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol['for']('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol['for']('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol['for']('react.forward_ref') : 0xead0;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_STRICT_MODE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Portal = REACT_PORTAL_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;

function isAsyncMode(object) {
  return typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Portal = Portal;
exports.StrictMode = StrictMode;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isPortal = isPortal;
exports.isStrictMode = isStrictMode;
  })();
}


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(129);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
__webpack_require__(74);
__webpack_require__(134);
__webpack_require__(137);
__webpack_require__(144);
__webpack_require__(147);
__webpack_require__(149);
module.exports = __webpack_require__(5).Map;


/***/ }),
/* 130 */
/***/ (function(module, exports) {



/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45);
var defined = __webpack_require__(44);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(52);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(27);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
var global = __webpack_require__(8);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(28);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(136);
var step = __webpack_require__(75);
var Iterators = __webpack_require__(28);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(57)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(138);
var validate = __webpack_require__(82);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(140)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(9).f;
var create = __webpack_require__(52);
var redefineAll = __webpack_require__(76);
var ctx = __webpack_require__(19);
var anInstance = __webpack_require__(77);
var forOf = __webpack_require__(36);
var $iterDefine = __webpack_require__(57);
var step = __webpack_require__(75);
var setSpecies = __webpack_require__(139);
var DESCRIPTORS = __webpack_require__(10);
var fastKey = __webpack_require__(50).fastKey;
var validate = __webpack_require__(82);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var core = __webpack_require__(5);
var dP = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(10);
var SPECIES = __webpack_require__(6)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var $export = __webpack_require__(7);
var meta = __webpack_require__(50);
var fails = __webpack_require__(16);
var hide = __webpack_require__(12);
var redefineAll = __webpack_require__(76);
var forOf = __webpack_require__(36);
var anInstance = __webpack_require__(77);
var isObject = __webpack_require__(13);
var setToStringTag = __webpack_require__(32);
var dP = __webpack_require__(9).f;
var each = __webpack_require__(141)(0);
var DESCRIPTORS = __webpack_require__(10);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(19);
var IObject = __webpack_require__(42);
var toObject = __webpack_require__(27);
var toLength = __webpack_require__(30);
var asc = __webpack_require__(142);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(143);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var isArray = __webpack_require__(70);
var SPECIES = __webpack_require__(6)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(7);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(145)('Map') });


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(81);
var from = __webpack_require__(146);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(36);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(148)('Map');


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(7);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(150)('Map');


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(7);
var aFunction = __webpack_require__(64);
var ctx = __webpack_require__(19);
var forOf = __webpack_require__(36);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.properties = exports.end = undefined;

var _end = __webpack_require__(152);

var _end2 = _interopRequireDefault(_end);

var _properties = __webpack_require__(58);

var _properties2 = _interopRequireDefault(_properties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.end = _end2.default;
exports.properties = _properties2.default;
exports.default = { end: _end2.default, properties: _properties2.default };

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properties = __webpack_require__(58);

var _properties2 = _interopRequireDefault(_properties);

var _style = __webpack_require__(29);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onEnd(node, handler, duration) {
  var fakeEvent = {
    target: node,
    currentTarget: node
  },
      backup;

  if (!_properties2.default.end) duration = 0;else if (duration == null) duration = parseDuration(node) || 0;

  if (_properties2.default.end) {
    node.addEventListener(_properties2.default.end, done, false);

    backup = setTimeout(function () {
      return done(fakeEvent);
    }, (duration || 100) * 1.5);
  } else setTimeout(done.bind(null, fakeEvent), 0);

  function done(event) {
    if (event.target !== event.currentTarget) return;
    clearTimeout(backup);
    event.target.removeEventListener(_properties2.default.end, done);
    handler.call(this);
  }
}

onEnd._parseDuration = parseDuration;

exports.default = onEnd;


function parseDuration(node) {
  var str = (0, _style2.default)(node, _properties2.default.duration),
      mult = str.indexOf('ms') === -1 ? 1000 : 1;

  return parseFloat(str) * mult;
}
module.exports = exports['default'];

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateStyleName;

var _hyphenate = __webpack_require__(154);

var _hyphenate2 = _interopRequireDefault(_hyphenate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^ms-/; /**
                         * Copyright 2013-2014, Facebook, Inc.
                         * All rights reserved.
                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
                         */

function hyphenateStyleName(string) {
  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
}
module.exports = exports['default'];

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenate;

var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getComputedStyle;

var _camelizeStyle = __webpack_require__(83);

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _camelizeStyle2.default)(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}
module.exports = exports['default'];

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStyle;
function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}
module.exports = exports['default'];

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}
module.exports = exports["default"];

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
  enter: _propTypes2.default.number,
  exit: _propTypes2.default.number
}).isRequired]);

var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterDone: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  exitDone: _propTypes2.default.string,
  exitActive: _propTypes2.default.string
})]);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
__webpack_require__(161);
module.exports = __webpack_require__(5).Array.from;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(19);
var $export = __webpack_require__(7);
var toObject = __webpack_require__(27);
var call = __webpack_require__(78);
var isArrayIter = __webpack_require__(79);
var toLength = __webpack_require__(30);
var createProperty = __webpack_require__(162);
var getIterFn = __webpack_require__(80);

$export($export.S + $export.F * !__webpack_require__(163)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(9);
var createDesc = __webpack_require__(25);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(6)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = exports.filter = exports.off = exports.on = undefined;

var _on = __webpack_require__(60);

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(61);

var _off2 = _interopRequireDefault(_off);

var _filter = __webpack_require__(165);

var _filter2 = _interopRequireDefault(_filter);

var _listen = __webpack_require__(166);

var _listen2 = _interopRequireDefault(_listen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.on = _on2.default;
exports.off = _off2.default;
exports.filter = _filter2.default;
exports.listen = _listen2.default;
exports.default = { on: _on2.default, off: _off2.default, filter: _filter2.default, listen: _listen2.default };

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterEvents;

var _contains = __webpack_require__(23);

var _contains2 = _interopRequireDefault(_contains);

var _querySelectorAll = __webpack_require__(90);

var _querySelectorAll2 = _interopRequireDefault(_querySelectorAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget,
        target = e.target,
        matches = (0, _querySelectorAll2.default)(top, selector);

    if (matches.some(function (match) {
      return (0, _contains2.default)(match, target);
    })) handler.call(this, e);
  };
}
module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(15);

var _inDOM2 = _interopRequireDefault(_inDOM);

var _on = __webpack_require__(60);

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(61);

var _off2 = _interopRequireDefault(_off);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listen = function listen() {};

if (_inDOM2.default) {
  listen = function listen(node, eventName, handler, capture) {
    (0, _on2.default)(node, eventName, handler, capture);
    return function () {
      (0, _off2.default)(node, eventName, handler, capture);
    };
  };
}

exports.default = listen;
module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _activeElement = __webpack_require__(86);

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = __webpack_require__(23);

var _contains2 = _interopRequireDefault(_contains);

var _inDOM = __webpack_require__(15);

var _inDOM2 = _interopRequireDefault(_inDOM);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(38);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _deprecated = __webpack_require__(168);

var _deprecated2 = _interopRequireDefault(_deprecated);

var _elementType = __webpack_require__(3);

var _elementType2 = _interopRequireDefault(_elementType);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _warning = __webpack_require__(11);

var _warning2 = _interopRequireDefault(_warning);

var _ModalManager = __webpack_require__(169);

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _Portal = __webpack_require__(94);

var _Portal2 = _interopRequireDefault(_Portal);

var _RefHolder = __webpack_require__(175);

var _RefHolder2 = _interopRequireDefault(_RefHolder);

var _addEventListener = __webpack_require__(89);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _addFocusListener = __webpack_require__(176);

var _addFocusListener2 = _interopRequireDefault(_addFocusListener);

var _getContainer = __webpack_require__(40);

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(24);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prop-types */

var modalManager = new _ModalManager2.default();

/**
 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 * - Easily pluggable animations via a `<Transition/>` component.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Modal.prototype.omitProps = function omitProps(props, propTypes) {

    var keys = Object.keys(props);
    var newProps = {};
    keys.map(function (prop) {
      if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
        newProps[prop] = props[prop];
      }
    });

    return newProps;
  };

  Modal.prototype.render = function render() {
    var _props = this.props,
        show = _props.show,
        container = _props.container,
        children = _props.children,
        Transition = _props.transition,
        backdrop = _props.backdrop,
        className = _props.className,
        style = _props.style,
        onExit = _props.onExit,
        onExiting = _props.onExiting,
        onEnter = _props.onEnter,
        onEntering = _props.onEntering,
        onEntered = _props.onEntered;


    var dialog = _react2.default.Children.only(children);
    var filteredProps = this.omitProps(this.props, Modal.propTypes);

    var mountModal = show || Transition && !this.state.exited;
    if (!mountModal) {
      return null;
    }

    var _dialog$props = dialog.props,
        role = _dialog$props.role,
        tabIndex = _dialog$props.tabIndex;


    if (role === undefined || tabIndex === undefined) {
      dialog = (0, _react.cloneElement)(dialog, {
        role: role === undefined ? 'document' : role,
        tabIndex: tabIndex == null ? '-1' : tabIndex
      });
    }

    if (Transition) {
      dialog = _react2.default.createElement(
        Transition,
        {
          appear: true,
          unmountOnExit: true,
          'in': show,
          onExit: onExit,
          onExiting: onExiting,
          onExited: this.handleHidden,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        },
        dialog
      );
    }

    return _react2.default.createElement(
      _Portal2.default,
      {
        ref: this.setMountNode,
        container: container,
        onRendered: this.onPortalRendered
      },
      _react2.default.createElement(
        'div',
        _extends({
          ref: this.setModalNodeRef,
          role: role || 'dialog'
        }, filteredProps, {
          style: style,
          className: className
        }),
        backdrop && this.renderBackdrop(),
        _react2.default.createElement(
          _RefHolder2.default,
          { ref: this.setDialogRef },
          dialog
        )
      )
    );
  };

  Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({ exited: false });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({ exited: true });
    }
  };

  Modal.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.checkForFocus();
    }
  };

  Modal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    if (this.props.show) {
      this.onShow();
    }
  };

  Modal.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var transition = this.props.transition;


    if (prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    var _props2 = this.props,
        show = _props2.show,
        transition = _props2.transition;


    this._isMounted = false;

    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  };

  Modal.prototype.autoFocus = function autoFocus() {
    if (!this.props.autoFocus) {
      return;
    }

    var dialogElement = this.getDialogElement();
    var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(this));

    if (dialogElement && !(0, _contains2.default)(dialogElement, currentActiveElement)) {
      this.lastFocus = currentActiveElement;

      if (!dialogElement.hasAttribute('tabIndex')) {
        (0, _warning2.default)(false, 'The modal content node does not accept focus. For the benefit of ' + 'assistive technologies, the tabIndex of the node is being set ' + 'to "-1".');

        dialogElement.setAttribute('tabIndex', -1);
      }

      dialogElement.focus();
    }
  };

  Modal.prototype.restoreLastFocus = function restoreLastFocus() {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  };

  Modal.prototype.getDialogElement = function getDialogElement() {
    return _reactDom2.default.findDOMNode(this.dialog);
  };

  Modal.prototype.isTopModal = function isTopModal() {
    return this.props.manager.isTopModal(this);
  };

  return Modal;
}(_react2.default.Component);

Modal.propTypes = _extends({}, _Portal2.default.propTypes, {

  /**
   * Set the visibility of the Modal
   */
  show: _propTypes2.default.bool,

  /**
   * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: _propTypes2.default.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: _propTypes2.default.func,

  /**
   * Include a backdrop component.
   */
  backdrop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: _propTypes2.default.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   */
  onEscapeKeyDown: _propTypes2.default.func,

  /**
   * Support for this function will be deprecated. Please use `onEscapeKeyDown` instead
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   * @deprecated
   */
  onEscapeKeyUp: (0, _deprecated2.default)(_propTypes2.default.func, 'Please use onEscapeKeyDown instead for consistency'),

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: _propTypes2.default.func,

  /**
   * A style object for the backdrop component.
   */
  backdropStyle: _propTypes2.default.object,

  /**
   * A css class or classes for the backdrop component.
   */
  backdropClassName: _propTypes2.default.string,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: _propTypes2.default.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: _propTypes2.default.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: _elementType2.default,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: _elementType2.default,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: _propTypes2.default.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: _propTypes2.default.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: _propTypes2.default.bool,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: _propTypes2.default.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: _propTypes2.default.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: _propTypes2.default.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: _propTypes2.default.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: _propTypes2.default.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: _propTypes2.default.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: _propTypes2.default.object.isRequired
});
Modal.defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  onHide: function onHide() {},
  manager: modalManager,
  renderBackdrop: function renderBackdrop(props) {
    return _react2.default.createElement('div', props);
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = { exited: !this.props.show };

  this.renderBackdrop = function () {
    var _props3 = _this2.props,
        backdropStyle = _props3.backdropStyle,
        backdropClassName = _props3.backdropClassName,
        renderBackdrop = _props3.renderBackdrop,
        Transition = _props3.backdropTransition;


    var backdropRef = function backdropRef(ref) {
      return _this2.backdrop = ref;
    };

    var backdrop = renderBackdrop({
      ref: backdropRef,
      style: backdropStyle,
      className: backdropClassName,
      onClick: _this2.handleBackdropClick
    });

    if (Transition) {
      backdrop = _react2.default.createElement(
        Transition,
        {
          appear: true,
          'in': _this2.props.show
        },
        backdrop
      );
    }

    return backdrop;
  };

  this.onPortalRendered = function () {
    _this2.autoFocus();

    if (_this2.props.onShow) {
      _this2.props.onShow();
    }
  };

  this.onShow = function () {
    var doc = (0, _ownerDocument2.default)(_this2);
    var container = (0, _getContainer2.default)(_this2.props.container, doc.body);

    _this2.props.manager.add(_this2, container, _this2.props.containerClassName);

    _this2._onDocumentKeydownListener = (0, _addEventListener2.default)(doc, 'keydown', _this2.handleDocumentKeyDown);

    _this2._onDocumentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', _this2.handleDocumentKeyUp);

    _this2._onFocusinListener = (0, _addFocusListener2.default)(_this2.enforceFocus);
  };

  this.onHide = function () {
    _this2.props.manager.remove(_this2);

    _this2._onDocumentKeydownListener.remove();

    _this2._onDocumentKeyupListener.remove();

    _this2._onFocusinListener.remove();

    if (_this2.props.restoreFocus) {
      _this2.restoreLastFocus();
    }
  };

  this.setMountNode = function (ref) {
    _this2.mountNode = ref ? ref.getMountNode() : ref;
  };

  this.setModalNodeRef = function (ref) {
    _this2.modalNode = ref;
  };

  this.setDialogRef = function (ref) {
    _this2.dialog = ref;
  };

  this.handleHidden = function () {
    _this2.setState({ exited: true });
    _this2.onHide();

    if (_this2.props.onExited) {
      var _props4;

      (_props4 = _this2.props).onExited.apply(_props4, arguments);
    }
  };

  this.handleBackdropClick = function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (_this2.props.onBackdropClick) {
      _this2.props.onBackdropClick(e);
    }

    if (_this2.props.backdrop === true) {
      _this2.props.onHide();
    }
  };

  this.handleDocumentKeyDown = function (e) {
    if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyDown) {
        _this2.props.onEscapeKeyDown(e);
      }

      _this2.props.onHide();
    }
  };

  this.handleDocumentKeyUp = function (e) {
    if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyUp) {
        _this2.props.onEscapeKeyUp(e);
      }
    }
  };

  this.checkForFocus = function () {
    if (_inDOM2.default) {
      _this2.lastFocus = (0, _activeElement2.default)();
    }
  };

  this.enforceFocus = function () {
    if (!_this2.props.enforceFocus || !_this2._isMounted || !_this2.isTopModal()) {
      return;
    }

    var dialogElement = _this2.getDialogElement();
    var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(_this2));

    if (dialogElement && !(0, _contains2.default)(dialogElement, currentActiveElement)) {
      dialogElement.focus();
    }
  };
};

Modal.Manager = _ModalManager2.default;

exports.default = Modal;
module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecated;

var _warning = __webpack_require__(11);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warned = {};

function deprecated(validator, reason) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] != null) {
      var messageKey = componentName + '.' + propName;

      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));

      warned[messageKey] = true;
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}

/* eslint-disable no-underscore-dangle */
function _resetWarned() {
  warned = {};
}

deprecated._resetWarned = _resetWarned;
/* eslint-enable no-underscore-dangle */

module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _class = __webpack_require__(170);

var _class2 = _interopRequireDefault(_class);

var _style = __webpack_require__(29);

var _style2 = _interopRequireDefault(_style);

var _scrollbarSize = __webpack_require__(91);

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _isOverflowing = __webpack_require__(93);

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _manageAriaHidden = __webpack_require__(173);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
  });
  return idx;
}

function findContainer(data, modal) {
  return findIndexOf(data, function (d) {
    return d.modals.indexOf(modal) !== -1;
  });
}

function setContainerStyle(state, container) {
  var style = { overflow: 'hidden' };

  // we are only interested in the actual `style` here
  // becasue we will override it
  state.style = {
    overflow: container.style.overflow,
    paddingRight: container.style.paddingRight
  };

  if (state.overflowing) {
    // use computed style, here to get the real padding
    // to add our scrollbar width
    style.paddingRight = parseInt((0, _style2.default)(container, 'paddingRight') || 0, 10) + (0, _scrollbarSize2.default)() + 'px';
  }

  (0, _style2.default)(container, style);
}

function removeContainerStyle(_ref, container) {
  var style = _ref.style;


  Object.keys(style).forEach(function (key) {
    return container.style[key] = style[key];
  });
}
/**
 * Proper state managment for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */

var ModalManager = function ModalManager() {
  var _this = this;

  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$hideSiblingNode = _ref2.hideSiblingNodes,
      hideSiblingNodes = _ref2$hideSiblingNode === undefined ? true : _ref2$hideSiblingNode,
      _ref2$handleContainer = _ref2.handleContainerOverflow,
      handleContainerOverflow = _ref2$handleContainer === undefined ? true : _ref2$handleContainer;

  _classCallCheck(this, ModalManager);

  this.add = function (modal, container, className) {
    var modalIdx = _this.modals.indexOf(modal);
    var containerIdx = _this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = _this.modals.length;
    _this.modals.push(modal);

    if (_this.hideSiblingNodes) {
      (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
    }

    if (containerIdx !== -1) {
      _this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    var data = {
      modals: [modal],
      //right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],

      overflowing: (0, _isOverflowing2.default)(container)
    };

    if (_this.handleContainerOverflow) {
      setContainerStyle(data, container);
    }

    data.classes.forEach(_class2.default.addClass.bind(null, container));

    _this.containers.push(container);
    _this.data.push(data);

    return modalIdx;
  };

  this.remove = function (modal) {
    var modalIdx = _this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = findContainer(_this.data, modal);
    var data = _this.data[containerIdx];
    var container = _this.containers[containerIdx];

    data.modals.splice(data.modals.indexOf(modal), 1);

    _this.modals.splice(modalIdx, 1);

    // if that was the last modal in a container,
    // clean up the container
    if (data.modals.length === 0) {
      data.classes.forEach(_class2.default.removeClass.bind(null, container));

      if (_this.handleContainerOverflow) {
        removeContainerStyle(data, container);
      }

      if (_this.hideSiblingNodes) {
        (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
      }
      _this.containers.splice(containerIdx, 1);
      _this.data.splice(containerIdx, 1);
    } else if (_this.hideSiblingNodes) {
      //otherwise make sure the next top modal is visible to a SR
      (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
    }
  };

  this.isTopModal = function (modal) {
    return !!_this.modals.length && _this.modals[_this.modals.length - 1] === modal;
  };

  this.hideSiblingNodes = hideSiblingNodes;
  this.handleContainerOverflow = handleContainerOverflow;
  this.modals = [];
  this.containers = [];
  this.data = [];
};

exports.default = ModalManager;
module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = exports.removeClass = exports.addClass = undefined;

var _addClass = __webpack_require__(171);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(172);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _hasClass = __webpack_require__(92);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.addClass = _addClass2.default;
exports.removeClass = _removeClass2.default;
exports.hasClass = _hasClass2.default;
exports.default = { addClass: _addClass2.default, removeClass: _removeClass2.default, hasClass: _hasClass2.default };

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(92);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports['default'];

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;

var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, mount, cb) {
  mount = [].concat(mount);

  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(show, node) {
  if (!node) {
    return;
  }
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(38);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getContainer = __webpack_require__(40);

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(24);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._mountOverlayTarget = function () {
      if (!_this._overlayTarget) {
        _this._overlayTarget = document.createElement('div');
        _this._portalContainerNode = (0, _getContainer2.default)(_this.props.container, (0, _ownerDocument2.default)(_this).body);
        _this._portalContainerNode.appendChild(_this._overlayTarget);
      }
    }, _this._unmountOverlayTarget = function () {
      if (_this._overlayTarget) {
        _this._portalContainerNode.removeChild(_this._overlayTarget);
        _this._overlayTarget = null;
      }
      _this._portalContainerNode = null;
    }, _this._renderOverlay = function () {
      var overlay = !_this.props.children ? null : _react2.default.Children.only(_this.props.children);

      // Save reference for future access.
      if (overlay !== null) {
        _this._mountOverlayTarget();

        var initialRender = !_this._overlayInstance;

        _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, overlay, _this._overlayTarget, function () {
          if (initialRender && _this.props.onRendered) {
            _this.props.onRendered();
          }
        });
      } else {
        // Unrender if the component is null for transitions to null
        _this._unrenderOverlay();
        _this._unmountOverlayTarget();
      }
    }, _this._unrenderOverlay = function () {
      if (_this._overlayTarget) {
        _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);
        _this._overlayInstance = null;
      }
    }, _this.getMountNode = function () {
      return _this._overlayTarget;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this._renderOverlay();
  };

  Portal.prototype.componentDidUpdate = function componentDidUpdate() {
    this._renderOverlay();
  };

  Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this._overlayTarget && nextProps.container !== this.props.container) {
      this._portalContainerNode.removeChild(this._overlayTarget);
      this._portalContainerNode = (0, _getContainer2.default)(nextProps.container, (0, _ownerDocument2.default)(this).body);
      this._portalContainerNode.appendChild(this._overlayTarget);
    }
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this._unrenderOverlay();
    this._unmountOverlayTarget();
  };

  Portal.prototype.render = function render() {
    return null;
  };

  return Portal;
}(_react2.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  onRendered: _propTypes2.default.func
};
exports.default = Portal;
module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  children: _propTypes2.default.node
};

/**
 * Internal helper component to allow attaching a non-conflicting ref to a
 * child element that may not accept refs.
 */

var RefHolder = function (_React$Component) {
  _inherits(RefHolder, _React$Component);

  function RefHolder() {
    _classCallCheck(this, RefHolder);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  RefHolder.prototype.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(_react2.default.Component);

RefHolder.propTypes = propTypes;

exports.default = RefHolder;
module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = addFocusListener;
/**
 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
 *
 * We only allow one Listener at a time to avoid stack overflows
 */
function addFocusListener(handler) {
  var useFocusin = !document.addEventListener;
  var remove = void 0;

  if (useFocusin) {
    document.attachEvent('onfocusin', handler);
    remove = function remove() {
      return document.detachEvent('onfocusin', handler);
    };
  } else {
    document.addEventListener('focus', handler, true);
    remove = function remove() {
      return document.removeEventListener('focus', handler, true);
    };
  }

  return { remove: remove };
}
module.exports = exports['default'];

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementType = __webpack_require__(3);

var _elementType2 = _interopRequireDefault(_elementType);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Portal = __webpack_require__(94);

var _Portal2 = _interopRequireDefault(_Portal);

var _Position = __webpack_require__(178);

var _Position2 = _interopRequireDefault(_Position);

var _RootCloseWrapper = __webpack_require__(88);

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is great for custom tooltip overlays.
 */
var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay(props, context) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleHidden = function () {
      _this.setState({ exited: true });

      if (_this.props.onExited) {
        var _this$props;

        (_this$props = _this.props).onExited.apply(_this$props, arguments);
      }
    };

    _this.state = { exited: !props.show };
    _this.onHiddenListener = _this.handleHidden.bind(_this);
    return _this;
  }

  Overlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({ exited: false });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({ exited: true });
    }
  };

  Overlay.prototype.render = function render() {
    var _props = this.props,
        container = _props.container,
        containerPadding = _props.containerPadding,
        target = _props.target,
        placement = _props.placement,
        shouldUpdatePosition = _props.shouldUpdatePosition,
        rootClose = _props.rootClose,
        children = _props.children,
        Transition = _props.transition,
        props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'shouldUpdatePosition', 'rootClose', 'children', 'transition']);

    // Don't un-render the overlay while it's transitioning out.


    var mountOverlay = props.show || Transition && !this.state.exited;
    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null;
    }

    var child = children;

    // Position is be inner-most because it adds inline styles into the child,
    // which the other wrappers don't forward correctly.
    child = _react2.default.createElement(
      _Position2.default,
      { container: container, containerPadding: containerPadding, target: target, placement: placement, shouldUpdatePosition: shouldUpdatePosition },
      child
    );

    if (Transition) {
      var onExit = props.onExit,
          onExiting = props.onExiting,
          onEnter = props.onEnter,
          onEntering = props.onEntering,
          onEntered = props.onEntered;

      // This animates the child node by injecting props, so it must precede
      // anything that adds a wrapping div.

      child = _react2.default.createElement(
        Transition,
        {
          'in': props.show,
          appear: true,
          onExit: onExit,
          onExiting: onExiting,
          onExited: this.onHiddenListener,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        },
        child
      );
    }

    // This goes after everything else because it adds a wrapping div.
    if (rootClose) {
      child = _react2.default.createElement(
        _RootCloseWrapper2.default,
        { onRootClose: props.onHide },
        child
      );
    }

    return _react2.default.createElement(
      _Portal2.default,
      { container: container },
      child
    );
  };

  return Overlay;
}(_react2.default.Component);

Overlay.propTypes = _extends({}, _Portal2.default.propTypes, _Position2.default.propTypes, {

  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes2.default.bool,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: _propTypes2.default.bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    var propType = _propTypes2.default.func;
    if (props.rootClose) {
      propType = propType.isRequired;
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return propType.apply(undefined, [props].concat(args));
  },


  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  transition: _elementType2.default,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes2.default.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes2.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes2.default.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes2.default.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes2.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes2.default.func
});

exports.default = Overlay;
module.exports = exports['default'];

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__(38);

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _calculatePosition = __webpack_require__(179);

var _calculatePosition2 = _interopRequireDefault(_calculatePosition);

var _getContainer = __webpack_require__(40);

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__(24);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Position component calculates the coordinates for its child, to position
 * it relative to a `target` component or node. Useful for creating callouts
 * and tooltips, the Position component injects a `style` props with `left` and
 * `top` values for positioning your component.
 *
 * It also injects "arrow" `left`, and `top` values for styling callout arrows
 * for giving your components a sense of directionality.
 */
var Position = function (_React$Component) {
  _inherits(Position, _React$Component);

  function Position(props, context) {
    _classCallCheck(this, Position);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.getTarget = function () {
      var target = _this.props.target;

      var targetElement = typeof target === 'function' ? target() : target;
      return targetElement && _reactDom2.default.findDOMNode(targetElement) || null;
    };

    _this.maybeUpdatePosition = function (placementChanged) {
      var target = _this.getTarget();

      if (!_this.props.shouldUpdatePosition && target === _this._lastTarget && !placementChanged) {
        return;
      }

      _this.updatePosition(target);
    };

    _this.state = {
      positionLeft: 0,
      positionTop: 0,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };

    _this._needsFlush = false;
    _this._lastTarget = null;
    return _this;
  }

  Position.prototype.componentDidMount = function componentDidMount() {
    this.updatePosition(this.getTarget());
  };

  Position.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this._needsFlush = true;
  };

  Position.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this._needsFlush) {
      this._needsFlush = false;
      this.maybeUpdatePosition(this.props.placement !== prevProps.placement);
    }
  };

  Position.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        props = _objectWithoutProperties(_props, ['children', 'className']);

    var _state = this.state,
        positionLeft = _state.positionLeft,
        positionTop = _state.positionTop,
        arrowPosition = _objectWithoutProperties(_state, ['positionLeft', 'positionTop']);

    // These should not be forwarded to the child.


    delete props.target;
    delete props.container;
    delete props.containerPadding;
    delete props.shouldUpdatePosition;

    var child = _react2.default.Children.only(children);
    return (0, _react.cloneElement)(child, _extends({}, props, arrowPosition, {
      // FIXME: Don't forward `positionLeft` and `positionTop` via both props
      // and `props.style`.
      positionLeft: positionLeft,
      positionTop: positionTop,
      className: (0, _classnames2.default)(className, child.props.className),
      style: _extends({}, child.props.style, {
        left: positionLeft,
        top: positionTop
      })
    }));
  };

  Position.prototype.updatePosition = function updatePosition(target) {
    this._lastTarget = target;

    if (!target) {
      this.setState({
        positionLeft: 0,
        positionTop: 0,
        arrowOffsetLeft: null,
        arrowOffsetTop: null
      });

      return;
    }

    var overlay = _reactDom2.default.findDOMNode(this);
    var container = (0, _getContainer2.default)(this.props.container, (0, _ownerDocument2.default)(this).body);

    this.setState((0, _calculatePosition2.default)(this.props.placement, overlay, target, container, this.props.containerPadding));
  };

  return Position;
}(_react2.default.Component);

Position.propTypes = {
  /**
   * A node, element, or function that returns either. The child will be
   * be positioned next to the `target` specified.
   */
  target: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  /**
   * "offsetParent" of the component
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  /**
   * Minimum spacing in pixels between container border and component border
   */
  containerPadding: _propTypes2.default.number,
  /**
   * How to position the component relative to the target
   */
  placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * Whether the position should be changed on each update
   */
  shouldUpdatePosition: _propTypes2.default.bool
};

Position.displayName = 'Position';

Position.defaultProps = {
  containerPadding: 0,
  placement: 'right',
  shouldUpdatePosition: false
};

exports.default = Position;
module.exports = exports['default'];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calculatePosition;

var _offset = __webpack_require__(95);

var _offset2 = _interopRequireDefault(_offset);

var _position = __webpack_require__(180);

var _position2 = _interopRequireDefault(_position);

var _scrollTop = __webpack_require__(96);

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _ownerDocument = __webpack_require__(24);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainerDimensions(containerNode) {
  var width = void 0,
      height = void 0,
      scroll = void 0;

  if (containerNode.tagName === 'BODY') {
    width = window.innerWidth;
    height = window.innerHeight;

    scroll = (0, _scrollTop2.default)((0, _ownerDocument2.default)(containerNode).documentElement) || (0, _scrollTop2.default)(containerNode);
  } else {
    var _getOffset = (0, _offset2.default)(containerNode);

    width = _getOffset.width;
    height = _getOffset.height;

    scroll = (0, _scrollTop2.default)(containerNode);
  }

  return { width: width, height: height, scroll: scroll };
}

function getTopDelta(top, overlayHeight, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerScroll = containerDimensions.scroll;
  var containerHeight = containerDimensions.height;

  var topEdgeOffset = top - padding - containerScroll;
  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

  if (topEdgeOffset < 0) {
    return -topEdgeOffset;
  } else if (bottomEdgeOffset > containerHeight) {
    return containerHeight - bottomEdgeOffset;
  } else {
    return 0;
  }
}

function getLeftDelta(left, overlayWidth, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerWidth = containerDimensions.width;

  var leftEdgeOffset = left - padding;
  var rightEdgeOffset = left + padding + overlayWidth;

  if (leftEdgeOffset < 0) {
    return -leftEdgeOffset;
  } else if (rightEdgeOffset > containerWidth) {
    return containerWidth - rightEdgeOffset;
  }

  return 0;
}

function calculatePosition(placement, overlayNode, target, container, padding) {
  var childOffset = container.tagName === 'BODY' ? (0, _offset2.default)(target) : (0, _position2.default)(target, container);

  var _getOffset2 = (0, _offset2.default)(overlayNode),
      overlayHeight = _getOffset2.height,
      overlayWidth = _getOffset2.width;

  var positionLeft = void 0,
      positionTop = void 0,
      arrowOffsetLeft = void 0,
      arrowOffsetTop = void 0;

  if (placement === 'left' || placement === 'right') {
    positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

    if (placement === 'left') {
      positionLeft = childOffset.left - overlayWidth;
    } else {
      positionLeft = childOffset.left + childOffset.width;
    }

    var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);

    positionTop += topDelta;
    arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
    arrowOffsetLeft = void 0;
  } else if (placement === 'top' || placement === 'bottom') {
    positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

    if (placement === 'top') {
      positionTop = childOffset.top - overlayHeight;
    } else {
      positionTop = childOffset.top + childOffset.height;
    }

    var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);

    positionLeft += leftDelta;
    arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
    arrowOffsetTop = void 0;
  } else {
    throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
  }

  return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
}
module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = position;

var _offset = __webpack_require__(95);

var _offset2 = _interopRequireDefault(_offset);

var _offsetParent = __webpack_require__(181);

var _offsetParent2 = _interopRequireDefault(_offsetParent);

var _scrollTop = __webpack_require__(96);

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _scrollLeft = __webpack_require__(182);

var _scrollLeft2 = _interopRequireDefault(_scrollLeft);

var _style = __webpack_require__(29);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function position(node, offsetParent) {
  var parentOffset = { top: 0, left: 0 },
      offset;

  // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent
  if ((0, _style2.default)(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    offsetParent = offsetParent || (0, _offsetParent2.default)(node);
    offset = (0, _offset2.default)(node);

    if (nodeName(offsetParent) !== 'html') parentOffset = (0, _offset2.default)(offsetParent);

    parentOffset.top += parseInt((0, _style2.default)(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop2.default)(offsetParent) || 0;
    parentOffset.left += parseInt((0, _style2.default)(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft2.default)(offsetParent) || 0;
  }

  // Subtract parent offsets and node margins
  return _extends({}, offset, {
    top: offset.top - parentOffset.top - (parseInt((0, _style2.default)(node, 'marginTop'), 10) || 0),
    left: offset.left - parentOffset.left - (parseInt((0, _style2.default)(node, 'marginLeft'), 10) || 0)
  });
}
module.exports = exports['default'];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = offsetParent;

var _ownerDocument = __webpack_require__(22);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _style = __webpack_require__(29);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function offsetParent(node) {
  var doc = (0, _ownerDocument2.default)(node),
      offsetParent = node && node.offsetParent;

  while (offsetParent && nodeName(node) !== 'html' && (0, _style2.default)(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || doc.documentElement;
}
module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTop;

var _isWindow = __webpack_require__(39);

var _isWindow2 = _interopRequireDefault(_isWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollTop(node, val) {
  var win = (0, _isWindow2.default)(node);

  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;

  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
}
module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

/***/ })
/******/ ]);
});