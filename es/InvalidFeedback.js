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

var InvalidFeedback =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InvalidFeedback, _React$Component);

  function InvalidFeedback() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InvalidFeedback.prototype;

  _proto.render = function render() {
    var _props = this.props,
        className = _props.className,
        Component = _props.as,
        props = _objectWithoutProperties(_props, ["className", "as"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    return React.createElement(Component, _extends({}, elementProps, {
      className: classNames(className, getClassSet(bsProps))
    }));
  };

  return InvalidFeedback;
}(React.Component);

InvalidFeedback.defaultProps = defaultProps;
InvalidFeedback.propTypes = propTypes;
export default bsClass('invalid-feedback', InvalidFeedback);