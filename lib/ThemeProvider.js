"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _entries = _interopRequireDefault(require("@babel/runtime/core-js/object/entries"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _map = _interopRequireDefault(require("@babel/runtime/core-js/map"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _React$createContext = _react.default.createContext(new _map.default()),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.ThemeConsumer = Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new _map.default();
    (0, _entries.default)(_this.props.prefixes).forEach(function (_ref) {
      var key = _ref[0],
          value = _ref[1];

      _this.prefixes.set(key, value);
    });
    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return _react.default.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(_react.default.Component);

ThemeProvider.propTypes = {
  prefixes: _propTypes.default.object.isRequired
};

function createBootstrapComponent(Component, prefix) {
  var name = Component.displayName || Component.name; // This looks like a function component but it's not,
  // it's passed to forwardRef directly, and named for the dev-tools
  // eslint-disable-next-line react/prop-types

  function forwardRef(_ref2, ref) {
    var bsPrefix = _ref2.bsPrefix,
        props = (0, _objectWithoutProperties2.default)(_ref2, ["bsPrefix"]);
    return _react.default.createElement(Consumer, null, function (prefixes) {
      return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
        ref: ref,
        bsPrefix: bsPrefix || prefixes.get(prefix) || prefix
      }));
    });
  }

  forwardRef.displayName = "Bootstrap(" + name + ")";
  return _react.default.forwardRef(forwardRef);
}

var _default = ThemeProvider;
exports.default = _default;