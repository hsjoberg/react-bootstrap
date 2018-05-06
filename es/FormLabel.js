import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import warning from 'warning';
import Col from './Col';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
var propTypes = {
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  htmlFor: PropTypes.string,
  column: PropTypes.bool,
  srOnly: PropTypes.bool
};
var defaultProps = {
  column: false,
  srOnly: false
};
var contextTypes = {
  $bs_formGroup: PropTypes.object
};

var FormLabel =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FormLabel, _React$Component);

  function FormLabel() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormLabel.prototype;

  _proto.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _props = this.props,
        column = _props.column,
        _props$htmlFor = _props.htmlFor,
        htmlFor = _props$htmlFor === void 0 ? controlId : _props$htmlFor,
        srOnly = _props.srOnly,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["column", "htmlFor", "srOnly", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    process.env.NODE_ENV !== "production" ? warning(controlId == null || htmlFor === controlId, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;

    var classes = _extends({}, getClassSet(bsProps), {
      'sr-only': srOnly
    });

    if (column) {
      return React.createElement(Col, _extends({}, elementProps, {
        as: "label",
        htmlFor: htmlFor,
        className: classNames(className, 'col-form-label', classes)
      }));
    }

    return React.createElement("label", _extends({}, elementProps, {
      htmlFor: htmlFor,
      className: classNames(className, classes)
    }));
  };

  return FormLabel;
}(React.Component);

FormLabel.propTypes = propTypes;
FormLabel.defaultProps = defaultProps;
FormLabel.contextTypes = contextTypes;
export default bsClass('form-label', FormLabel);