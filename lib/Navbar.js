"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _NavbarBrand = _interopRequireDefault(require("./NavbarBrand"));

var _NavbarCollapse = _interopRequireDefault(require("./NavbarCollapse"));

var _NavbarToggle = _interopRequireDefault(require("./NavbarToggle"));

var _ThemeProvider = require("./ThemeProvider");

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

// TODO: Remove this pragma once we upgrade eslint-config-airbnb.

/* eslint-disable react/no-multi-comp */
var propTypes = {
  /** @default 'navbar' */
  bsPrefix: _propTypes.default.string.isRequired,

  /**
   * The general visual variant a the Navbar.
   * Use in combination with the `bg` prop, `background-color` utilities,
   * or your own background styles.
   *
   * @type {('light'|'dark')}
   */
  variant: _propTypes.default.string,

  /** The breakpoint, below which, the Navbar will collapse.
   * When `true` the Navbar will always be expanded regardless of screen size.
   */
  expand: _propTypes.default.oneOf([true, 'sm', 'md', 'lg', 'xl']).isRequired,

  /**
   * A convenience prop for adding `bg-*` utility classes since they are so commonly used here.
   * `light` and `dark` are common choices but any `bg-*` class is supported, including any custom ones you might define.
   *
   * Pairs nicely with the `variant` prop.
   */
  bg: _propTypes.default.string,

  /**
   * Create a fixed navbar along the top or bottom of the screen, that scrolls with the
   * page. A convenience prop for the `fixed-*` positioning classes.
   */
  fixed: _propTypes.default.oneOf(['top', 'bottom']),

  /**
   * Position the navbar at the top or bottom of the viewport,
   * but only after scrolling past it. . A convenience prop for the `sticky-*` positioning classes.
   *
   *  __Not supported in <= IE11 and other older browsers without a polyfill__
   */
  sticky: _propTypes.default.oneOf(['top', 'bottom']),

  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: _propTypes.default.bool,

  /**
   * Set a custom element for this component.
   */
  as: _elementType.default,

  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: _propTypes.default.func,

  /**
   * A callback fired when a descendant of a child `<Nav>` is selected. Should
   * be used to execute complex closing or other miscellaneous actions desired
   * after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`
   * descendants exist. The callback is called with an eventKey, which is a
   * prop from the selected `<Nav>` descendant, and an event.
   *
   * ```js
   * function (
   *  eventKey: mixed,
   *  event?: SyntheticEvent
   * )
   * ```
   *
   * For basic closing behavior after all `<Nav>` descendant onSelect events in
   * mobile viewports, try using collapseOnSelect.
   *
   * Note: If you are manually closing the navbar using this `OnSelect` prop,
   * ensure that you are setting `expanded` to false and not *toggling* between
   * true and false.
   */
  onSelect: _propTypes.default.func,

  /**
   * Toggles `expanded` to `false` after the onSelect event of a descendant of a
   * child `<Nav>` fires. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * Manually controlling `expanded` via the onSelect callback is recommended instead,
   * for more complex operations that need to be executed after
   * the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: _propTypes.default.bool,

  /**
   * Controls the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: _propTypes.default.bool,

  /**
   * The ARIA role for the navbar, will default to 'navigation' for
   * Navbars whose `as` is something other than `<nav>`.
   *
   * @default 'navigation'
   */
  role: _propTypes.default.string
};
var defaultProps = {
  as: 'nav',
  expand: true,
  fluid: true,
  variant: 'light',
  collapseOnSelect: false
};

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Navbar, _React$Component);

  Navbar.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var bsPrefix = _ref.bsPrefix,
        expanded = _ref.expanded;
    return {
      navbarContext: (0, _extends2.default)({}, prevState.navbarContext, {
        bsPrefix: bsPrefix,
        expanded: expanded
      })
    };
  };

  function Navbar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _initialiseProps.call((0, _assertThisInitialized2.default)(_this));

    _this.state = {
      navbarContext: {
        onToggle: _this.handleToggle,
        onSelect: _this.handleCollapse
      }
    };
    return _this;
  }

  var _proto = Navbar.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        expand = _props.expand,
        variant = _props.variant,
        bg = _props.bg,
        fixed = _props.fixed,
        sticky = _props.sticky,
        fluid = _props.fluid,
        className = _props.className,
        children = _props.children,
        Component = _props.as,
        _1 = _props.expanded,
        _2 = _props.onToggle,
        _3 = _props.onSelect,
        _4 = _props.collapseOnSelect,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "fluid", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]); // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one

    if (props.role === undefined && Component !== 'nav') {
      props.role = 'navigation';
    }

    var expandClass = bsPrefix + "-expand";
    if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
    return _react.default.createElement(_NavbarContext.default.Provider, {
      value: this.state.navbarContext
    }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
    }), fluid ? children : _react.default.createElement("div", {
      className: "container"
    }, children)));
  };

  return Navbar;
}(_react.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleCollapse = function () {
    var _this2$props = _this2.props,
        onToggle = _this2$props.onToggle,
        expanded = _this2$props.expanded,
        collapseOnSelect = _this2$props.collapseOnSelect,
        onSelect = _this2$props.onSelect;
    if (onSelect) onSelect.apply(void 0, arguments);

    if (collapseOnSelect && expanded) {
      onToggle(false);
    }
  };

  this.handleToggle = function () {
    var _this2$props2 = _this2.props,
        onToggle = _this2$props2.onToggle,
        expanded = _this2$props2.expanded;
    onToggle(!expanded);
  };
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
var DecoratedNavbar = (0, _ThemeProvider.createBootstrapComponent)((0, _uncontrollable.default)(Navbar, {
  expanded: 'onToggle'
}), 'navbar');
DecoratedNavbar.Brand = _NavbarBrand.default;
DecoratedNavbar.Toggle = _NavbarToggle.default;
DecoratedNavbar.Collapse = _NavbarCollapse.default;
DecoratedNavbar.Text = (0, _createWithBsPrefix.default)('navbar-text', {
  Component: 'span'
});
var _default = DecoratedNavbar;
exports.default = _default;
module.exports = exports["default"];