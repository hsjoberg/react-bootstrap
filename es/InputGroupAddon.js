import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';

var InputGroupAddon =
/*#__PURE__*/
function (_React$Component) {
  function InputGroupAddon() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroupAddon.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return React.createElement("span", _extends({}, elementProps, {
      className: classNames(className, classes)
    }));
  };

  _inheritsLoose(InputGroupAddon, _React$Component);

  return InputGroupAddon;
}(React.Component);

export default bsClass('input-group-addon', InputGroupAddon);