"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _querySelectorAll = _interopRequireDefault(require("dom-helpers/query/querySelectorAll"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _all = _interopRequireDefault(require("prop-types-extra/lib/all"));

var _react = _interopRequireDefault(require("react"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _ThemeProvider = require("./ThemeProvider");

var _TabContext = _interopRequireDefault(require("./TabContext"));

var _mapContextToProps = _interopRequireDefault(require("./utils/mapContextToProps"));

var _NavContext = _interopRequireDefault(require("./NavContext"));

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var _CardContext = _interopRequireDefault(require("./CardContext"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

var noop = function noop() {};

var Nav =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Nav, _React$Component);

  Nav.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var activeKey = _ref.activeKey,
        getControlledId = _ref.getControlledId,
        getControllerId = _ref.getControllerId,
        role = _ref.role,
        onSelect = _ref.onSelect;
    return {
      navContext: {
        role: role,
        // used by NavLink to determine it's role
        onSelect: onSelect,
        activeKey: activeKey,
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      }
    };
  };

  function Nav() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          onKeyDown = _this$props.onKeyDown,
          onSelect = _this$props.onSelect;
      if (onKeyDown) onKeyDown(event);
      var nextActiveChild;

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          nextActiveChild = _this.getNextActiveChild(-1);
          break;

        case 'ArrowRight':
        case 'ArrowDown':
          nextActiveChild = _this.getNextActiveChild(1);
          break;

        default:
          return;
      }

      if (!nextActiveChild) return;
      event.preventDefault();
      onSelect(nextActiveChild.dataset.rbEventKey);
      _this._needsRefocus = true;
    };

    _this.attachRef = function (ref) {
      _this.listNode = ref;
    };

    _this.state = {
      navContext: null
    };
    return _this;
  }

  var _proto = Nav.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (!this._needsRefocus || !this.listNode) return;
    var activeChild = this.listNode.querySelector('[data-rb-event-key].active');
    if (activeChild) activeChild.focus();
  };

  _proto.getNextActiveChild = function getNextActiveChild(offset) {
    if (!this.listNode) return null;
    var items = (0, _querySelectorAll.default)(this.listNode, '[data-rb-event-key]:not(.disabled)');
    var activeChild = this.listNode.querySelector('.active');
    var index = items.indexOf(activeChild);
    return index === -1 ? null : items[index + offset];
  };

  _proto.render = function render() {
    var _classNames;

    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        navbarBsPrefix = _props.navbarBsPrefix,
        cardHeaderBsPrefix = _props.cardHeaderBsPrefix,
        variant = _props.variant,
        fill = _props.fill,
        justify = _props.justify,
        navbar = _props.navbar,
        className = _props.className,
        children = _props.children,
        Component = _props.as,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "navbarBsPrefix", "cardHeaderBsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "as"]);
    delete props.activeKey;
    delete props.onSelect;
    delete props.getControlledId;
    delete props.getControllerId;

    if (props.role === 'tablist') {
      props.onKeyDown = this.handleKeyDown;
    }

    return _react.default.createElement(_NavContext.default.Provider, {
      value: this.state.navContext
    }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      ref: this.attachRef,
      className: (0, _classnames.default)(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
    }), children));
  };

  return Nav;
}(_react.default.Component);

Nav.propTypes = {
  /**
   * @default 'nav'
   */
  bsPrefix: _propTypes.default.string,

  /** @private */
  navbarBsPrefix: _propTypes.default.string,

  /** @private */
  cardHeaderBsPrefix: _propTypes.default.string,

  /**
   * The visual variant of the nav items.
   *
   * @type {('tabs'|'pills')}
   */
  variant: _propTypes.default.string,

  /**
   * Marks the NavItem with a matching `eventKey` (or `href` if present) as active.
   *
   * @type {string}
   */
  activeKey: _propTypes.default.any,

  /**
   * Have all `NavItem`s to proportionatly fill all available width.
   */
  fill: _propTypes.default.bool,

  /**
   * Have all `NavItem`s to evenly fill all available width.
   *
   * @type {boolean}
   */
  justify: (0, _all.default)(_propTypes.default.bool, function (_ref3) {
    var justify = _ref3.justify,
        navbar = _ref3.navbar;
    return justify && navbar ? Error('justify navbar `Nav`s are not supported') : null;
  }),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   */
  onSelect: _propTypes.default.func,

  /**
   * ARIA role for the Nav, in the context of a TabContainer, the default will
   * be set to "tablist", but can be overridden by the Nav when set explicitly.
   *
   * When the role is "tablist", NavLink focus is managed according to
   * the ARIA authoring practices for tabs:
   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
   */
  role: _propTypes.default.string,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: _propTypes.default.bool,
  as: _elementType.default,

  /** @private */
  onKeyDown: _propTypes.default.func
};
Nav.defaultProps = {
  justify: false,
  fill: false,
  as: 'ul'
};
var UncontrolledNav = (0, _uncontrollable.default)((0, _ThemeProvider.createBootstrapComponent)(Nav, 'nav'), {
  activeKey: 'onSelect'
});
var DecoratedNav = (0, _mapContextToProps.default)(UncontrolledNav, [_TabContext.default.Consumer, _NavbarContext.default.Consumer, _CardContext.default.Consumer], function (tabContext, navbarContext, cardContext, _ref2) {
  var role = _ref2.role,
      navbar = _ref2.navbar;
  if (!tabContext && !navbarContext && !cardContext) return null;
  if (navbarContext) return {
    onSelect: navbarContext.onSelect,
    navbarBsPrefix: navbarContext.bsPrefix,
    navbar: navbar == null ? true : navbar
  };
  if (cardContext) return {
    cardHeaderBsPrefix: cardContext.cardHeaderBsPrefix
  };
  var activeKey = tabContext.activeKey,
      onSelect = tabContext.onSelect,
      getControllerId = tabContext.getControllerId,
      getControlledId = tabContext.getControlledId;
  return {
    activeKey: activeKey,
    onSelect: onSelect,
    getControllerId: getControllerId,
    getControlledId: getControlledId,
    role: role || 'tablist'
  };
});
DecoratedNav.Item = _NavItem.default;
DecoratedNav.Link = _NavLink.default;
DecoratedNav._Nav = Nav; // for Testing until enzyme is working with context

var _default = DecoratedNav;
exports.default = _default;
module.exports = exports["default"];