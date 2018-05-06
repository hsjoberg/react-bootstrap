import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';

var NavbarBrand =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavbarBrand, _React$Component);

  function NavbarBrand() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarBrand.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        as = _props.as,
        props = _objectWithoutProperties(_props, ["bsPrefix", "className", "as"]);

    var Component = as || (props.href ? 'a' : 'span');
    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return NavbarBrand;
}(React.Component);

NavbarBrand.propTypes = {
  /** @default 'navbar' */
  bsPrefix: PropTypes.string,

  /**
   * An href, when provided the Brand will render as an `<a>` element (unless `as` is provided).
   */
  href: PropTypes.string,

  /**
   * Set a custom element for this component.
   */
  as: elementType
};
export default createBootstrapComponent(NavbarBrand, 'navbar-brand');