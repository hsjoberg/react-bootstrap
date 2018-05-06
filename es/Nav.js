import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import qsa from 'dom-helpers/query/querySelectorAll';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import all from 'prop-types-extra/lib/all';
import React from 'react';
import uncontrollable from 'uncontrollable';
import { createBootstrapComponent } from './ThemeProvider';
import TabContext from './TabContext';
import mapContextToProps from './utils/mapContextToProps';
import NavContext from './NavContext';
import NavbarContext from './NavbarContext';
import CardContext from './CardContext';
import NavItem from './NavItem';
import NavLink from './NavLink';

var noop = function noop() {};

var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Nav, _React$Component);

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
    var items = qsa(this.listNode, '[data-rb-event-key]:not(.disabled)');
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
        props = _objectWithoutProperties(_props, ["bsPrefix", "navbarBsPrefix", "cardHeaderBsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "as"]);

    delete props.activeKey;
    delete props.onSelect;
    delete props.getControlledId;
    delete props.getControllerId;

    if (props.role === 'tablist') {
      props.onKeyDown = this.handleKeyDown;
    }

    return React.createElement(NavContext.Provider, {
      value: this.state.navContext
    }, React.createElement(Component, _extends({}, props, {
      ref: this.attachRef,
      className: classNames(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
    }), children));
  };

  return Nav;
}(React.Component);

Nav.propTypes = {
  /**
   * @default 'nav'
   */
  bsPrefix: PropTypes.string,

  /** @private */
  navbarBsPrefix: PropTypes.string,

  /** @private */
  cardHeaderBsPrefix: PropTypes.string,

  /**
   * The visual variant of the nav items.
   *
   * @type {('tabs'|'pills')}
   */
  variant: PropTypes.string,

  /**
   * Marks the NavItem with a matching `eventKey` (or `href` if present) as active.
   *
   * @type {string}
   */
  activeKey: PropTypes.any,

  /**
   * Have all `NavItem`s to proportionatly fill all available width.
   */
  fill: PropTypes.bool,

  /**
   * Have all `NavItem`s to evenly fill all available width.
   *
   * @type {boolean}
   */
  justify: all(PropTypes.bool, function (_ref3) {
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
  onSelect: PropTypes.func,

  /**
   * ARIA role for the Nav, in the context of a TabContainer, the default will
   * be set to "tablist", but can be overridden by the Nav when set explicitly.
   *
   * When the role is "tablist", NavLink focus is managed according to
   * the ARIA authoring practices for tabs:
   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
   */
  role: PropTypes.string,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: PropTypes.bool,
  as: elementType,

  /** @private */
  onKeyDown: PropTypes.func
};
Nav.defaultProps = {
  justify: false,
  fill: false,
  as: 'ul'
};
var UncontrolledNav = uncontrollable(createBootstrapComponent(Nav, 'nav'), {
  activeKey: 'onSelect'
});
var DecoratedNav = mapContextToProps(UncontrolledNav, [TabContext.Consumer, NavbarContext.Consumer, CardContext.Consumer], function (tabContext, navbarContext, cardContext, _ref2) {
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
DecoratedNav.Item = NavItem;
DecoratedNav.Link = NavLink;
DecoratedNav._Nav = Nav; // for Testing until enzyme is working with context

export default DecoratedNav;