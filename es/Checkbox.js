import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";

/* eslint-disable jsx-a11y/label-has-for */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { bsClass, prefix, splitBsProps } from './utils/bootstrapUtils';
var propTypes = {
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
  isInvalid: PropTypes.bool.isRequired,

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: PropTypes.func
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
  _inheritsLoose(Checkbox, _React$Component);

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
        props = _objectWithoutProperties(_props, ["inline", "disabled", "isValid", "isInvalid", "inputRef", "className", "style", "title", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    return React.createElement("div", {
      className: classNames(className, disabled && 'disabled', inline && prefix(bsProps, 'inline')),
      style: style,
      title: title
    }, React.createElement("label", {
      title: title,
      className: prefix(bsProps, 'label')
    }, React.createElement("input", _extends({}, elementProps, {
      ref: inputRef,
      type: "checkbox",
      disabled: disabled,
      className: classNames(prefix(bsProps, 'input'), isValid && prefix(bsProps, 'is-valid'), isInvalid && prefix(bsProps, 'is-invalid'))
    })), children));
  };

  return Checkbox;
}(React.Component);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
export default bsClass('form-check', Checkbox);