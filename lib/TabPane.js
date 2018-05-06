"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _mapContextToProps = _interopRequireDefault(require("./utils/mapContextToProps"));

var _ThemeProvider = require("./ThemeProvider");

var _TabContext = _interopRequireDefault(require("./TabContext"));

var _Fade = _interopRequireDefault(require("./Fade"));

var TabPane =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(TabPane, _React$Component);

  function TabPane() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabPane.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        active = _props.active,
        eventKey = _props.eventKey,
        className = _props.className,
        onEnter = _props.onEnter,
        onEntering = _props.onEntering,
        onEntered = _props.onEntered,
        onExit = _props.onExit,
        onExiting = _props.onExiting,
        onExited = _props.onExited,
        mountOnEnter = _props.mountOnEnter,
        unmountOnExit = _props.unmountOnExit,
        Transition = _props.transition,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "active", "eventKey", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition"]);
    if (!active && unmountOnExit) return null;

    var pane = _react.default.createElement("div", (0, _extends2.default)({}, props, {
      role: "tabpanel",
      "aria-hidden": !active,
      className: (0, _classnames.default)(className, bsPrefix, {
        active: active
      })
    }));

    if (Transition) pane = _react.default.createElement(Transition, {
      "in": active,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited,
      mountOnEnter: mountOnEnter,
      unmountOnExit: mountOnEnter
    }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
    // conflict with the top level one.

    return _react.default.createElement(_TabContext.default.Provider, {
      value: null
    }, pane);
  };

  return TabPane;
}(_react.default.Component);

TabPane.propTypes = {
  /**
   * @default 'tab-pane'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * A key that associates the `TabPane` with it's controlling `NavLink`.
   */
  eventKey: _propTypes.default.any,

  /**
   * Toggles the active state of the TabPane, this is generally controlled by a
   * TabContainer.
   */
  active: _propTypes.default.bool,

  /**
   * Use animation when showing or hiding `<TabPane>`s. Use `false` to disable,
   * `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  transition: _propTypes.default.oneOfType([_propTypes.default.bool, _elementType.default]),

  /**
   *
   * @default 'tab-pane'
   */
  bsClass: _propTypes.default.string,

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: _propTypes.default.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: _propTypes.default.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: _propTypes.default.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: _propTypes.default.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: _propTypes.default.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: _propTypes.default.func,

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter: _propTypes.default.bool,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: _propTypes.default.bool,

  /** @private * */
  id: _propTypes.default.string,

  /** @private * */
  'aria-labelledby': _propTypes.default.string
};

var _default = (0, _mapContextToProps.default)((0, _ThemeProvider.createBootstrapComponent)(TabPane, 'tab-pane'), _TabContext.default.Consumer, function (context, props) {
  if (!context) return null;
  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = (0, _objectWithoutProperties2.default)(context, ["activeKey", "getControlledId", "getControllerId"]);
  var shouldTransition = props.transition !== false && rest.transition !== false;
  return {
    active: String(activeKey) === String(props.eventKey),
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || _Fade.default),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  };
});

exports.default = _default;
module.exports = exports["default"];