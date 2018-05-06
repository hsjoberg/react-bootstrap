import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/es6/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SafeAnchor from './SafeAnchor';
import NavContext from './NavContext';
import { createBootstrapComponent } from './ThemeProvider';
var propTypes = {
  /**
   * @default 'nav-link'
   */
  bsPrefix: PropTypes.string,

  /**
   * The active state of the NavItem item.
   */
  active: PropTypes.bool,

  /**
   * The disabled state of the NavItem item.
   */
  disabled: PropTypes.bool,

  /**
   * The ARIA role for the `NavLink`, In the context of a 'tablist' parent Nav,
   * the role defaults to 'tab'
   * */
  role: PropTypes.string,

  /** The HTML href attribute for the `NavLink` */
  href: PropTypes.string,

  /**
   * Uniquely idenifies the `NavItem` amoungst its siblings,
   * used to determine and control the active state of its parent `Nav`
   */
  eventKey: PropTypes.any,

  /** @private */
  onClick: PropTypes.func
};
var defaultProps = {
  disabled: false
};

var NavLink =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavLink, _React$Component);

  function NavLink() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          eventKey = _this$props.eventKey,
          href = _this$props.href;
      if (onClick) onClick(e);
      if (_this.navContext) _this.navContext.onSelect(String(eventKey || href));
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = NavLink.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return React.createElement(NavContext.Consumer, null, function (navContext) {
      var _this2$props = _this2.props,
          active = _this2$props.active,
          bsPrefix = _this2$props.bsPrefix,
          disabled = _this2$props.disabled,
          className = _this2$props.className,
          eventKey = _this2$props.eventKey,
          href = _this2$props.href,
          propsRole = _this2$props.role,
          _ = _this2$props.onClick,
          props = _objectWithoutProperties(_this2$props, ["active", "bsPrefix", "disabled", "className", "eventKey", "href", "role", "onClick"]);

      delete props.onSelect;
      var navItemKey = String(eventKey || href);
      var isActive = active == null ? String(navContext.activeKey) === navItemKey : active;
      var role = propsRole;

      if (navContext.role === 'tablist') {
        role = 'tab';
        props['data-rb-event-key'] = navItemKey;
        props['aria-selected'] = isActive;
        props.tabIndex = isActive ? props.tabIndex : -1;
      }

      _this2.navContext = navContext;
      return React.createElement(SafeAnchor, _extends({
        id: navContext.getControllerId(navItemKey),
        "aria-controls": navContext.getControlledId(navItemKey)
      }, props, {
        role: role,
        href: href,
        disabled: disabled,
        onClick: _this2.handleClick,
        className: classNames(className, bsPrefix, isActive && 'active', disabled && 'disabled')
      }));
    });
  };

  return NavLink;
}(React.Component);

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;
export default createBootstrapComponent(NavLink, 'nav-link');