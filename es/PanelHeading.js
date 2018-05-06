import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import { prefix, bsClass, splitBsProps } from './utils/bootstrapUtils';
var propTypes = {
  componentClass: elementType
};
var defaultProps = {
  componentClass: 'div'
};
var contextTypes = {
  $bs_panel: PropTypes.shape({
    headingId: PropTypes.string,
    bsClass: PropTypes.string
  })
};

var PanelHeading =
/*#__PURE__*/
function (_React$Component) {
  function PanelHeading() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelHeading.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        Component = _this$props.componentClass,
        props = _objectWithoutProperties(_this$props, ["children", "className", "componentClass"]);

    var _ref = this.context.$bs_panel || {},
        headingId = _ref.headingId,
        _bsClass = _ref.bsClass;

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (headingId) {
      elementProps.role = elementProps.role || 'tab';
      elementProps.id = headingId;
    }

    return React.createElement(Component, _extends({}, elementProps, {
      className: cn(className, prefix(bsProps, 'heading'))
    }), children);
  };

  _inheritsLoose(PanelHeading, _React$Component);

  return PanelHeading;
}(React.Component);

PanelHeading.propTypes = propTypes;
PanelHeading.defaultProps = defaultProps;
PanelHeading.contextTypes = contextTypes;
export default bsClass('panel', PanelHeading);