import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _Object$entries from "@babel/runtime/core-js/object/entries";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import _Map from "@babel/runtime/core-js/map";
import PropTypes from 'prop-types';
import React from 'react';

var _React$createContext = React.createContext(new _Map()),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new _Map();

    _Object$entries(_this.props.prefixes).forEach(function (_ref) {
      var key = _ref[0],
          value = _ref[1];

      _this.prefixes.set(key, value);
    });

    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return React.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(React.Component);

ThemeProvider.propTypes = {
  prefixes: PropTypes.object.isRequired
};

function createBootstrapComponent(Component, prefix) {
  var name = Component.displayName || Component.name; // This looks like a function component but it's not,
  // it's passed to forwardRef directly, and named for the dev-tools
  // eslint-disable-next-line react/prop-types

  function forwardRef(_ref2, ref) {
    var bsPrefix = _ref2.bsPrefix,
        props = _objectWithoutProperties(_ref2, ["bsPrefix"]);

    return React.createElement(Consumer, null, function (prefixes) {
      return React.createElement(Component, _extends({}, props, {
        ref: ref,
        bsPrefix: bsPrefix || prefixes.get(prefix) || prefix
      }));
    });
  }

  forwardRef.displayName = "Bootstrap(" + name + ")";
  return React.forwardRef(forwardRef);
}

export { createBootstrapComponent, Consumer as ThemeConsumer };
export default ThemeProvider;