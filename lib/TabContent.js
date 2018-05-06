"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _ThemeProvider = require("./ThemeProvider");

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(TabContent, _React$Component);

  function TabContent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        Component = _props.as,
        className = _props.className,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "as", "className"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }));
  };

  return TabContent;
}(_react.default.Component);

TabContent.propTypes = {
  /**
   * @default 'tab-content'
   */
  bsPrefix: _propTypes.default.string,
  as: _elementType.default
};
TabContent.defaultProps = {
  as: 'div'
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(TabContent, 'tab-content');

exports.default = _default;
module.exports = exports["default"];