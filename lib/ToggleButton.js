"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var propTypes = {
  /**
   * The `<input>` element `type`
   */
  type: _propTypes.default.oneOf(['checkbox', 'radio']),

  /**
   * The HTML input name, used to group like checkboxes or radio buttons together
   * semantically
   */
  name: _propTypes.default.string,

  /**
   * The checked state of the input, managed by `<ToggleButtonGroup>`` automatically
   */
  checked: _propTypes.default.bool,

  /**
   * The disabled state of both the label and input
   */
  disabled: _propTypes.default.bool,

  /**
   * A callback fired when the underlying input element changes. This is passed
   * directly to the `<input>` so shares the same signature as a native `onChange` event.
   */
  onChange: _propTypes.default.func,

  /**
   * The value of the input, should be unique amoungst it's siblings when nested in a
   * `ToggleButtonGroup`.
   */
  value: _propTypes.default.any.isRequired
};

var ToggleButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ToggleButton, _React$Component);

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
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = ToggleButton.prototype;

  _proto.render = function render() {
    var _props = this.props,
        children = _props.children,
        name = _props.name,
        className = _props.className,
        checked = _props.checked,
        type = _props.type,
        onChange = _props.onChange,
        value = _props.value,
        props = (0, _objectWithoutProperties2.default)(_props, ["children", "name", "className", "checked", "type", "onChange", "value"]);
    var focused = this.state.focused;
    var disabled = props.disabled;
    return _react.default.createElement(_Button.default, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, focused && 'focus'),
      type: null,
      active: !!checked,
      as: "label"
    }), _react.default.createElement("input", {
      name: name,
      type: type,
      value: value,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChange: onChange
    }), children);
  };

  return ToggleButton;
}(_react.default.Component);

ToggleButton.propTypes = propTypes;
var _default = ToggleButton;
exports.default = _default;
module.exports = exports["default"];