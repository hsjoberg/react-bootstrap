import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import requiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';
import uncontrollable from 'uncontrollable';
import Nav from './Nav';
import NavLink from './NavLink';
import NavItem from './NavItem';
import UncontrolledTabContainer from './TabContainer';
import TabContent from './TabContent';
import TabPane from './TabPane';
import * as ValidComponentChildren from './utils/ValidComponentChildren';
var TabContainer = UncontrolledTabContainer.ControlledComponent;
var propTypes = {
  /**
   * Mark the Tab with a matching `eventKey` as active.
   *
   * @controllable onSelect
   */
  activeKey: PropTypes.any,

  /**
   * Navigation style
   *
   * @type {('tabs'| 'pills')}
   */
  variant: PropTypes.string,

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   *
   * @type {Transition | false}
   * @default {Fade}
   */
  transition: PropTypes.oneOfType([PropTypes.oneOf([false]), elementType]),

  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   *
   * @type {string}
   */
  id: requiredForA11y(PropTypes.string),

  /**
   * Callback fired when a Tab is selected.
   *
   * ```js
   * function (
   *   Any eventKey,
   *   SyntheticEvent event?
   * )
   * ```
   *
   * @controllable activeKey
   */
  onSelect: PropTypes.func,

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount tabs (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: PropTypes.bool
};
var defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  ValidComponentChildren.forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Tabs, _React$Component);

  function Tabs() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.renderTab = function renderTab(child) {
    var _child$props = child.props,
        title = _child$props.title,
        eventKey = _child$props.eventKey,
        disabled = _child$props.disabled,
        tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return React.createElement(NavItem, {
      as: NavLink,
      eventKey: eventKey,
      disabled: disabled,
      className: tabClassName
    }, title);
  };

  _proto.render = function render() {
    var _props = this.props,
        id = _props.id,
        onSelect = _props.onSelect,
        transition = _props.transition,
        mountOnEnter = _props.mountOnEnter,
        unmountOnExit = _props.unmountOnExit,
        children = _props.children,
        _props$activeKey = _props.activeKey,
        activeKey = _props$activeKey === void 0 ? getDefaultActiveKey(children) : _props$activeKey,
        props = _objectWithoutProperties(_props, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"]);

    return React.createElement(TabContainer, {
      id: id,
      activeKey: activeKey,
      onSelect: onSelect,
      transition: transition,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit
    }, React.createElement(Nav, _extends({}, props, {
      role: "tablist",
      as: "nav"
    }), ValidComponentChildren.map(children, this.renderTab)), React.createElement(TabContent, null, ValidComponentChildren.map(children, function (child) {
      var childProps = _extends({}, child.props);

      delete childProps.title;
      delete childProps.disabled;
      delete childProps.tabClassName;
      return React.createElement(TabPane, childProps);
    })));
  };

  return Tabs;
}(React.Component);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
export default uncontrollable(Tabs, {
  activeKey: 'onSelect'
});