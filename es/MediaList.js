import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';

var MediaList =
/*#__PURE__*/
function (_React$Component) {
  function MediaList() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaList.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return React.createElement("ul", _extends({}, elementProps, {
      className: classNames(className, classes)
    }));
  };

  _inheritsLoose(MediaList, _React$Component);

  return MediaList;
}(React.Component);

export default bsClass('media-list', MediaList);