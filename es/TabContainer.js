import _extends from "@babel/runtime/helpers/es6/extends";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import _assertThisInitialized from "@babel/runtime/helpers/es6/assertThisInitialized";
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import uncontrollable from 'uncontrollable';
import TabContext from './TabContext';

var TabContainer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TabContainer, _React$Component);

  TabContainer.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var onSelect = _ref.onSelect,
        activeKey = _ref.activeKey,
        mountOnEnter = _ref.mountOnEnter,
        unmountOnExit = _ref.unmountOnExit,
        transition = _ref.transition;
    return {
      tabContext: _extends({}, prevState.tabContext, {
        activeKey: activeKey,
        onSelect: onSelect,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        transition: transition
      })
    };
  };

  function TabContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _initialiseProps.call(_assertThisInitialized(_this));

    _this.state = {
      tabContext: {
        onSelect: _this.props.onSelect,
        activeKey: _this.props.activeKey,
        transition: _this.props.transition,
        mountOnEnter: _this.props.mountOnEnter,
        unmountOnExit: _this.props.unmountOnExit,
        getControlledId: _this.getControlledId,
        getControllerId: _this.getControllerId
      }
    };
    return _this;
  }

  var _proto = TabContainer.prototype;

  _proto.getKey = function getKey(key, type) {
    var _props = this.props,
        generateChildId = _props.generateChildId,
        id = _props.id;
    if (generateChildId) return generateChildId(key, type);
    return id ? id + "-" + type + "-" + key : null;
  };

  _proto.render = function render() {
    var children = this.props.children;
    return React.createElement(TabContext.Provider, {
      value: this.state.tabContext
    }, children);
  };

  return TabContainer;
}(React.Component);

TabContainer.propTypes = {
  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   *
   * @type {string}
   */
  id: function id(props) {
    var error = null;

    if (!props.generateChildId) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      error = PropTypes.string.apply(PropTypes, [props].concat(args));

      if (!error && !props.id) {
        error = new Error('In order to properly initialize Tabs in a way that is accessible ' + 'to assistive technologies (such as screen readers) an `id` or a ' + '`generateChildId` prop to TabContainer is required');
      }
    }

    return error;
  },

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   *
   * @type {{Transition | false}}
   * @default {Fade}
   */
  transition: PropTypes.oneOfType([PropTypes.oneOf([false]), elementType]),

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: PropTypes.bool,

  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${eventKey}`
   */
  generateChildId: PropTypes.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: PropTypes.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: PropTypes.any
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getControlledId = function (key) {
    return _this2.getKey(key, 'tabpane');
  };

  this.getControllerId = function (key) {
    return _this2.getKey(key, 'tab');
  };
};

export default uncontrollable(TabContainer, {
  activeKey: 'onSelect'
});