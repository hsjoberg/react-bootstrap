import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import Image from './Image';

var FigureImage =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FigureImage, _React$Component);

  function FigureImage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FigureImage.prototype;

  _proto.render = function render() {
    var _props = this.props,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["className"]);

    return React.createElement(Image, _extends({}, props, {
      className: classNames(className, 'figure-img')
    }));
  };

  return FigureImage;
}(React.Component);

FigureImage.propTypes = Image.propTypes;
FigureImage.defaultProps = {
  fluid: true
};
export default FigureImage;