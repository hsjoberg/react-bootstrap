import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import warning from 'warning';
import InvalidFeedback from './InvalidFeedback';
import { bsClass, getClassSet, prefix, splitBsProps, bsSizes } from './utils/bootstrapUtils';
import { Size } from './utils/StyleConfig';
var propTypes = {
  as: elementType,

  /**
   * Render the input as plain text.
   */
  plaintext: PropTypes.bool,

  /** @ignore */
  readOnly: PropTypes.bool,

  /**
   * Only relevant if `as` is `'input'`.
   */
  type: PropTypes.string,

  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: PropTypes.string,

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <FormControl inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: PropTypes.func,
  isValid: PropTypes.bool.isRequired,
  isInvalid: PropTypes.bool.isRequired
};
var defaultProps = {
  as: 'input'
};
var contextTypes = {
  $bs_formGroup: PropTypes.object
};

var FormControl =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FormControl, _React$Component);

  function FormControl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControl.prototype;

  _proto.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _props = this.props,
        Component = _props.as,
        type = _props.type,
        _props$id = _props.id,
        id = _props$id === void 0 ? controlId : _props$id,
        inputRef = _props.inputRef,
        className = _props.className,
        isValid = _props.isValid,
        isInvalid = _props.isInvalid,
        plaintext = _props.plaintext,
        readOnly = _props.readOnly,
        props = _objectWithoutProperties(_props, ["as", "type", "id", "inputRef", "className", "isValid", "isInvalid", "plaintext", "readOnly"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    process.env.NODE_ENV !== "production" ? warning(controlId == null || id === controlId, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
    var classes;

    if (type === 'file') {
      var _classes;

      classes = (_classes = {}, _classes[prefix(bsProps, 'file')] = true, _classes);
    } else if (plaintext) {
      var _classes2;

      classes = (_classes2 = {}, _classes2[prefix(bsProps, 'plaintext')] = true, _classes2);
    } else {
      classes = getClassSet(bsProps);
    }

    return React.createElement(Component, _extends({}, elementProps, {
      type: type,
      id: id,
      ref: inputRef,
      readOnly: readOnly || plaintext,
      className: classNames(className, classes, isValid && prefix(bsProps, 'is-valid'), isInvalid && prefix(bsProps, 'is-invalid'))
    }));
  };

  return FormControl;
}(React.Component);

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;
FormControl.contextTypes = contextTypes;
FormControl.Feedback = InvalidFeedback;
export default bsClass('form-control', bsSizes([Size.SMALL, Size.LARGE], FormControl));