import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/es6/extends";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import _assertThisInitialized from "@babel/runtime/helpers/es6/assertThisInitialized";
// TODO: Remove this pragma once we upgrade eslint-config-airbnb.

/* eslint-disable react/no-multi-comp */
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import uncontrollable from 'uncontrollable';
import createWithBsPrefix from './utils/createWithBsPrefix';
import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import NavbarToggle from './NavbarToggle';
import { createBootstrapComponent } from './ThemeProvider';
import NavbarContext from './NavbarContext';
var propTypes = {
  /** @default 'navbar' */
  bsPrefix: PropTypes.string.isRequired,

  /**
   * The general visual variant a the Navbar.
   * Use in combination with the `bg` prop, `background-color` utilities,
   * or your own background styles.
   *
   * @type {('light'|'dark')}
   */
  variant: PropTypes.string,

  /** The breakpoint, below which, the Navbar will collapse.
   * When `true` the Navbar will always be expanded regardless of screen size.
   */
  expand: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl']).isRequired,

  /**
   * A convenience prop for adding `bg-*` utility classes since they are so commonly used here.
   * `light` and `dark` are common choices but any `bg-*` class is supported, including any custom ones you might define.
   *
   * Pairs nicely with the `variant` prop.
   */
  bg: PropTypes.string,

  /**
   * Create a fixed navbar along the top or bottom of the screen, that scrolls with the
   * page. A convenience prop for the `fixed-*` positioning classes.
   */
  fixed: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Position the navbar at the top or bottom of the viewport,
   * but only after scrolling past it. . A convenience prop for the `sticky-*` positioning classes.
   *
   *  __Not supported in <= IE11 and other older browsers without a polyfill__
   */
  sticky: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: PropTypes.bool,

  /**
   * Set a custom element for this component.
   */
  as: elementType,

  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: PropTypes.func,

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
  onSelect: PropTypes.func,

  /**
   * Toggles `expanded` to `false` after the onSelect event of a descendant of a
   * child `<Nav>` fires. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * Manually controlling `expanded` via the onSelect callback is recommended instead,
   * for more complex operations that need to be executed after
   * the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: PropTypes.bool,

  /**
   * Controls the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: PropTypes.bool,

  /**
   * The ARIA role for the navbar, will default to 'navigation' for
   * Navbars whose `as` is something other than `<nav>`.
   *
   * @default 'navigation'
   */
  role: PropTypes.string
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
  _inheritsLoose(Navbar, _React$Component);

  Navbar.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var bsPrefix = _ref.bsPrefix,
        expanded = _ref.expanded;
    return {
      navbarContext: _extends({}, prevState.navbarContext, {
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

    _initialiseProps.call(_assertThisInitialized(_this));

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
        props = _objectWithoutProperties(_props, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "fluid", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]); // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one


    if (props.role === undefined && Component !== 'nav') {
      props.role = 'navigation';
    }

    var expandClass = bsPrefix + "-expand";
    if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
    return React.createElement(NavbarContext.Provider, {
      value: this.state.navbarContext
    }, React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
    }), fluid ? children : React.createElement("div", {
      className: "container"
    }, children)));
  };

  return Navbar;
}(React.Component);

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
var DecoratedNavbar = createBootstrapComponent(uncontrollable(Navbar, {
  expanded: 'onToggle'
}), 'navbar');
DecoratedNavbar.Brand = NavbarBrand;
DecoratedNavbar.Toggle = NavbarToggle;
DecoratedNavbar.Collapse = NavbarCollapse;
DecoratedNavbar.Text = createWithBsPrefix('navbar-text', {
  Component: 'span'
});
export default DecoratedNavbar;