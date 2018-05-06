import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { bsClass, prefix, splitBsProps } from './utils/bootstrapUtils';
var propTypes = {
  horizontal: PropTypes.bool,
  inline: PropTypes.bool,
  as: elementType
};
var defaultProps = {
  horizontal: false,
  inline: false,
  as: 'form'
};

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Form, _React$Component);

  function Form() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Form.prototype;

  _proto.render = function render() {
    var _props = this.props,
        horizontal = _props.horizontal,
        inline = _props.inline,
        Component = _props.as,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["horizontal", "inline", "as", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = [];

    if (horizontal) {
      classes.push(prefix(bsProps, 'horizontal'));
    }

    if (inline) {
      classes.push(prefix(bsProps, 'inline'));
    }

    return React.createElement(Component, _extends({}, elementProps, {
      className: classNames(className, classes)
    }));
  };

  return Form;
}(React.Component);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
export default bsClass('form', Form);