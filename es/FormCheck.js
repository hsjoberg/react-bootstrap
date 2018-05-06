import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { bsClass, getClassSet, prefix, splitBsProps } from './utils/bootstrapUtils';
var propTypes = {
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  isValid: PropTypes.bool.isRequired,
  isInvalid: PropTypes.bool.isRequired,

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <FormCheck inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: PropTypes.func
};
var defaultProps = {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};

var FormCheck =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FormCheck, _React$Component);

  function FormCheck() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormCheck.prototype;

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
        type = _props.type,
        children = _props.children,
        props = _objectWithoutProperties(_props, ["inline", "disabled", "isValid", "isInvalid", "inputRef", "className", "style", "title", "type", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    return React.createElement("div", {
      className: classNames(className, getClassSet(bsProps), disabled && 'disabled', inline && prefix(bsProps, 'inline')),
      style: style,
      title: title
    }, React.createElement("label", {
      // eslint-disable-line jsx-a11y/label-has-for
      title: title,
      className: prefix(bsProps, 'label')
    }, React.createElement("input", _extends({}, elementProps, {
      ref: inputRef,
      type: type,
      disabled: disabled,
      className: classNames(prefix(bsProps, 'input'), isValid && prefix(bsProps, 'is-valid'), isInvalid && prefix(bsProps, 'is-invalid'))
    })), children));
  };

  return FormCheck;
}(React.Component);

FormCheck.propTypes = propTypes;
FormCheck.defaultProps = defaultProps;
export default bsClass('form-check', FormCheck);