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

var NavbarBrand =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NavbarBrand, _React$Component);

  function NavbarBrand() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarBrand.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        as = _props.as,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "className", "as"]);
    var Component = as || (props.href ? 'a' : 'span');
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }));
  };

  return NavbarBrand;
}(_react.default.Component);

NavbarBrand.propTypes = {
  /** @default 'navbar' */
  bsPrefix: _propTypes.default.string,

  /**
   * An href, when provided the Brand will render as an `<a>` element (unless `as` is provided).
   */
  href: _propTypes.default.string,

  /**
   * Set a custom element for this component.
   */
  as: _elementType.default
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(NavbarBrand, 'navbar-brand');

exports.default = _default;
module.exports = exports["default"];