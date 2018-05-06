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

var _bootstrapUtils = require("./utils/bootstrapUtils");

/* eslint-disable jsx-a11y/label-has-for */
var propTypes = {
  inline: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  title: _propTypes.default.string,
  isValid: _propTypes.default.bool.isRequired,
  isInvalid: _propTypes.default.bool.isRequired,

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: _propTypes.default.func
};
var defaultProps = {
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};

var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Checkbox, _React$Component);

  function Checkbox() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Checkbox.prototype;

  _proto.render = function render() {
    var _props = this.props,
        inline = _props.inline,
        disabled = _props.disabled,
        isValid = _props.isValid,
        isInvalid = _props.isInvalid,
        inputRef = _props.inputRef,
        className = _props.className,
        style = _props.style,
        title = _props.title,
        children = _props.children,
        props = (0, _objectWithoutProperties2.default)(_props, ["inline", "disabled", "isValid", "isInvalid", "inputRef", "className", "style", "title", "children"]);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    return _react.default.createElement("div", {
      className: (0, _classnames.default)(className, disabled && 'disabled', inline && (0, _bootstrapUtils.prefix)(bsProps, 'inline')),
      style: style,
      title: title
    }, _react.default.createElement("label", {
      title: title,
      className: (0, _bootstrapUtils.prefix)(bsProps, 'label')
    }, _react.default.createElement("input", (0, _extends2.default)({}, elementProps, {
      ref: inputRef,
      type: "checkbox",
      disabled: disabled,
      className: (0, _classnames.default)((0, _bootstrapUtils.prefix)(bsProps, 'input'), isValid && (0, _bootstrapUtils.prefix)(bsProps, 'is-valid'), isInvalid && (0, _bootstrapUtils.prefix)(bsProps, 'is-invalid'))
    })), children));
  };

  return Checkbox;
}(_react.default.Component);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

var _default = (0, _bootstrapUtils.bsClass)('form-check', Checkbox);

exports.default = _default;
module.exports = exports["default"];