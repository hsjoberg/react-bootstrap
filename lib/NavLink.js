"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var _NavContext = _interopRequireDefault(require("./NavContext"));

var _ThemeProvider = require("./ThemeProvider");

var propTypes = {
  /**
   * @default 'nav-link'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * The active state of the NavItem item.
   */
  active: _propTypes.default.bool,

  /**
   * The disabled state of the NavItem item.
   */
  disabled: _propTypes.default.bool,

  /**
   * The ARIA role for the `NavLink`, In the context of a 'tablist' parent Nav,
   * the role defaults to 'tab'
   * */
  role: _propTypes.default.string,

  /** The HTML href attribute for the `NavLink` */
  href: _propTypes.default.string,

  /**
   * Uniquely idenifies the `NavItem` amoungst its siblings,
   * used to determine and control the active state of its parent `Nav`
   */
  eventKey: _propTypes.default.any,

  /** @private */
  onClick: _propTypes.default.func
};
var defaultProps = {
  disabled: false
};

var NavLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NavLink, _React$Component);

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
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = NavLink.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return _react.default.createElement(_NavContext.default.Consumer, null, function (navContext) {
      var _this2$props = _this2.props,
          active = _this2$props.active,
          bsPrefix = _this2$props.bsPrefix,
          disabled = _this2$props.disabled,
          className = _this2$props.className,
          eventKey = _this2$props.eventKey,
          href = _this2$props.href,
          propsRole = _this2$props.role,
          _ = _this2$props.onClick,
          props = (0, _objectWithoutProperties2.default)(_this2$props, ["active", "bsPrefix", "disabled", "className", "eventKey", "href", "role", "onClick"]);
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
      return _react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({
        id: navContext.getControllerId(navItemKey),
        "aria-controls": navContext.getControlledId(navItemKey)
      }, props, {
        role: role,
        href: href,
        disabled: disabled,
        onClick: _this2.handleClick,
        className: (0, _classnames.default)(className, bsPrefix, isActive && 'active', disabled && 'disabled')
      }));
    });
  };

  return NavLink;
}(_react.default.Component);

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(NavLink, 'nav-link');

exports.default = _default;
module.exports = exports["default"];