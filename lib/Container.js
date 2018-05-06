"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _ThemeProvider = require("./ThemeProvider");

var Container =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Container, _React$Component);

  function Container() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Container.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        fluid = _props.fluid,
        Component = _props.as,
        className = _props.className,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "fluid", "as", "className"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, fluid && bsPrefix + "-fluid")
    }));
  };

  return Container;
}(_react.default.Component);

Container.propTypes = {
  /**
   * @default 'container'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * Allow the Container to fill all of it's availble horizontal space.
   */
  fluid: _propTypes.default.bool,

  /**
   * You can use a custom element for this component
   */
  as: _elementType.default
};
Container.defaultProps = {
  as: 'div',
  fluid: false
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(Container, 'container');

exports.default = _default;
module.exports = exports["default"];