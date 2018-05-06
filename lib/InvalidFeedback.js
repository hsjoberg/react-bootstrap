"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _bootstrapUtils = require("./utils/bootstrapUtils");

var propTypes = {
  as: _elementType.default
};
var defaultProps = {
  as: 'div'
};

var InvalidFeedback =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(InvalidFeedback, _React$Component);

  function InvalidFeedback() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InvalidFeedback.prototype;

  _proto.render = function render() {
    var _props = this.props,
        className = _props.className,
        Component = _props.as,
        props = (0, _objectWithoutProperties2.default)(_props, ["className", "as"]);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    return _react.default.createElement(Component, (0, _extends2.default)({}, elementProps, {
      className: (0, _classnames.default)(className, (0, _bootstrapUtils.getClassSet)(bsProps))
    }));
  };

  return InvalidFeedback;
}(_react.default.Component);

InvalidFeedback.defaultProps = defaultProps;
InvalidFeedback.propTypes = propTypes;

var _default = (0, _bootstrapUtils.bsClass)('invalid-feedback', InvalidFeedback);

exports.default = _default;
module.exports = exports["default"];