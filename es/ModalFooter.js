import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import elementType from 'prop-types-extra/lib/elementType';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
var propTypes = {
  as: elementType
};
var defaultProps = {
  as: 'div'
};

var ModalFooter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ModalFooter, _React$Component);

  function ModalFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalFooter.prototype;

  _proto.render = function render() {
    var _props = this.props,
        Component = _props.as,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["as", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return React.createElement(Component, _extends({}, elementProps, {
      className: classNames(className, classes)
    }));
  };

  return ModalFooter;
}(React.Component);

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;
export default bsClass('modal-footer', ModalFooter);