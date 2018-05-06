import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import React from 'react';
import { bsClass, bsSizes, getClassSet, splitBsPropsAndOmit } from './utils/bootstrapUtils';
import { Size } from './utils/StyleConfig';
import ValidComponentChildren from './utils/ValidComponentChildren';
var propTypes = {
  as: elementType,

  /**
   * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
   */
  controlId: PropTypes.string,
  validationState: PropTypes.oneOf(['success', 'warning', 'error', null])
};
var defaultProps = {
  as: 'div'
};
var childContextTypes = {
  $bs_formGroup: PropTypes.object.isRequired
};

var FormGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FormGroup, _React$Component);

  function FormGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    var _props = this.props,
        controlId = _props.controlId,
        validationState = _props.validationState;
    return {
      $bs_formGroup: {
        controlId: controlId,
        validationState: validationState
      }
    };
  };

  _proto.hasFeedback = function hasFeedback(children) {
    var _this = this;

    return ValidComponentChildren.some(children, function (child) {
      return child.props.bsRole === 'feedback' || child.props.children && _this.hasFeedback(child.props.children);
    });
  };

  _proto.render = function render() {
    var _props2 = this.props,
        Component = _props2.as,
        validationState = _props2.validationState,
        className = _props2.className,
        children = _props2.children,
        props = _objectWithoutProperties(_props2, ["as", "validationState", "className", "children"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['controlId']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var classes = _extends({}, getClassSet(bsProps), {
      'has-feedback': this.hasFeedback(children)
    });

    if (validationState) {
      classes["has-" + validationState] = true;
    }

    return React.createElement(Component, _extends({}, elementProps, {
      className: classNames(className, classes)
    }), children);
  };

  return FormGroup;
}(React.Component);

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;
FormGroup.childContextTypes = childContextTypes;
export default bsClass('form-group', bsSizes([Size.LARGE, Size.SMALL], FormGroup));