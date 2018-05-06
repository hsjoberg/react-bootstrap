import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/es6/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
var propTypes = {
  /**
   * The `<input>` element `type`
   */
  type: PropTypes.oneOf(['checkbox', 'radio']),

  /**
   * The HTML input name, used to group like checkboxes or radio buttons together
   * semantically
   */
  name: PropTypes.string,

  /**
   * The checked state of the input, managed by `<ToggleButtonGroup>`` automatically
   */
  checked: PropTypes.bool,

  /**
   * The disabled state of both the label and input
   */
  disabled: PropTypes.bool,

  /**
   * A callback fired when the underlying input element changes. This is passed
   * directly to the `<input>` so shares the same signature as a native `onChange` event.
   */
  onChange: PropTypes.func,

  /**
   * The value of the input, should be unique amoungst it's siblings when nested in a
   * `ToggleButtonGroup`.
   */
  value: PropTypes.any.isRequired
};

var ToggleButton =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ToggleButton, _React$Component);

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
    }, _temp) || _assertThisInitialized(_this);
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
        props = _objectWithoutProperties(_props, ["children", "name", "className", "checked", "type", "onChange", "value"]);

    var focused = this.state.focused;
    var disabled = props.disabled;
    return React.createElement(Button, _extends({}, props, {
      className: classNames(className, focused && 'focus'),
      type: null,
      active: !!checked,
      as: "label"
    }), React.createElement("input", {
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
}(React.Component);

ToggleButton.propTypes = propTypes;
export default ToggleButton;