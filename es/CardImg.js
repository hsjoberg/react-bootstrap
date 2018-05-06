import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';

var CardImg =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CardImg, _React$Component);

  function CardImg() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CardImg.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        variant = _props.variant,
        Component = _props.as,
        props = _objectWithoutProperties(_props, ["bsPrefix", "className", "variant", "as"]);

    var baseClass = variant ? bsPrefix + "-" + variant : bsPrefix;
    return React.createElement(Component, _extends({
      className: classNames(baseClass, className)
    }, props));
  };

  return CardImg;
}(React.Component);

CardImg.propTypes = {
  /**
   * @default 'card-img'
   */
  bsPrefix: PropTypes.string.isRequired,

  /**
   * Defines image position inside
   * the card.
   *
   * @type {('top'|'bottom')}
   */
  variant: PropTypes.oneOf(['top', 'bottom', null]),
  as: elementType
};
CardImg.defaultProps = {
  as: 'img',
  variant: null
};
export default createBootstrapComponent(CardImg, 'card-img');