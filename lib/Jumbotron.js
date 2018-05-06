"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _ThemeProvider = require("./ThemeProvider");

var propTypes = {
  as: _elementType.default,

  /** Make the jumbotron full width, and without rounded corners */
  fluid: _propTypes.default.bool,

  /** @default 'jumbotron' */
  bsPrefix: _propTypes.default.string
};
var defaultProps = {
  as: 'div',
  fluid: false
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Jumbotron, _React$Component);

  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _classes;

    var _props = this.props,
        Component = _props.as,
        className = _props.className,
        fluid = _props.fluid,
        bsPrefix = _props.bsPrefix,
        props = (0, _objectWithoutProperties2.default)(_props, ["as", "className", "fluid", "bsPrefix"]);
    var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, classes)
    }));
  };

  return Jumbotron;
}(_react.default.Component);

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(Jumbotron, 'jumbotron');

exports.default = _default;
module.exports = exports["default"];