import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/es6/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';
import NavbarContext from './NavbarContext';

var NavbarToggle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavbarToggle, _React$Component);

  function NavbarToggle() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      var onToggle = _this.navbarContext.onToggle;
      if (onClick) onClick(e);
      if (onToggle) onToggle();
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = NavbarToggle.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        children = _props.children,
        label = _props.label,
        Component = _props.as,
        props = _objectWithoutProperties(_props, ["bsPrefix", "className", "children", "label", "as"]);

    if (Component === 'button') {
      props.type = 'button';
    }

    return React.createElement(NavbarContext.Consumer, null, function (context) {
      _this2.navbarContext = context || {};
      return React.createElement(Component, _extends({}, props, {
        onClick: _this2.handleClick,
        "aria-label": label,
        className: classNames(className, bsPrefix, !!(context && context.expanded) && 'collapsed')
      }), children || React.createElement("span", {
        className: bsPrefix + "-icon"
      }));
    });
  };

  return NavbarToggle;
}(React.Component);

NavbarToggle.propTypes = {
  /** @default 'navbar-toggler' */
  bsPrefix: PropTypes.string,

  /** An accessible ARIA label for the toggler button. */
  label: PropTypes.string,

  /** @private */
  onClick: PropTypes.func,

  /**
   * The toggle content. When empty, the default toggle will be rendered.
   */
  children: PropTypes.node,
  as: elementType
};
NavbarToggle.defaultProps = {
  label: 'Toggle navigation',
  as: 'button'
};
export default createBootstrapComponent(NavbarToggle, 'navbar-toggler');