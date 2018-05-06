import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';

var NavItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavItem, _React$Component);

  function NavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavItem.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        children = _props.children,
        Component = _props.as,
        props = _objectWithoutProperties(_props, ["bsPrefix", "className", "children", "as"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }), children);
  };

  return NavItem;
}(React.Component);

NavItem.propTypes = {
  /**
   * @default 'nav-item'
   */
  bsPrefix: PropTypes.string,

  /** The ARIA role of the component */
  role: PropTypes.string,
  as: elementType
};
NavItem.defaultProps = {
  role: 'presentaton',
  as: 'li'
};
export default createBootstrapComponent(NavItem, 'nav-item');