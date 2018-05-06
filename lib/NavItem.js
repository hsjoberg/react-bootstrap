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

var NavItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NavItem, _React$Component);

  function NavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavItem.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        children = _props.children,
        Component = _props.as,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "className", "children", "as"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }), children);
  };

  return NavItem;
}(_react.default.Component);

NavItem.propTypes = {
  /**
   * @default 'nav-item'
   */
  bsPrefix: _propTypes.default.string,

  /** The ARIA role of the component */
  role: _propTypes.default.string,
  as: _elementType.default
};
NavItem.defaultProps = {
  role: 'presentaton',
  as: 'li'
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(NavItem, 'nav-item');

exports.default = _default;
module.exports = exports["default"];