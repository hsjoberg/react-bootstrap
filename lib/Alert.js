"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _ThemeProvider = require("./ThemeProvider");

var _Fade = _interopRequireDefault(require("./Fade"));

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

/**
 * @property {AlertHeading} Heading
 * @property {AlertLink} Link
 */
var Alert =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Alert, _React$Component);

  function Alert() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleClose = function (e) {
      _this.props.onClose(false, e);
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = Alert.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        show = _props.show,
        closeLabel = _props.closeLabel,
        className = _props.className,
        children = _props.children,
        variant = _props.variant,
        dismissible = _props.dismissible,
        Transition = _props.transition,
        _ = _props.onClose,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "dismissible", "transition", "onClose"]);

    var alert = _react.default.createElement("div", (0, _extends2.default)({
      role: "alert"
    }, Transition ? props : undefined, {
      className: (0, _classnames.default)(className, bsPrefix, variant && bsPrefix + "-" + variant, dismissible && bsPrefix + "-dismissible")
    }), dismissible && _react.default.createElement(_CloseButton.default, {
      onClick: this.handleClose,
      label: closeLabel
    }), children);

    if (!Transition) return show ? alert : null;
    return _react.default.createElement(Transition, (0, _extends2.default)({
      unmountOnExit: true
    }, props, {
      "in": show
    }), alert);
  };

  return Alert;
}(_react.default.Component);

Alert.propTypes = {
  /**
   * @default 'alert'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * The Alert visual variant
   *
   * @type('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')
   */
  variant: _propTypes.default.string,

  /**
   * Renders a properly aligned dismiss button, as well as
   * adding extra horizontal padding to the Alert.
   */
  dismissible: _propTypes.default.bool,

  /**
   * Controls the visual state of the Alert.
   *
   * @controllable onClose
   */
  show: _propTypes.default.bool,

  /**
   * Callback fired when alert is closed.
   *
   * @controllable show
   */
  onClose: _propTypes.default.func,

  /**
   * Sets the text for alert close button.
   */
  closeLabel: _propTypes.default.string,

  /** A `react-transition-group` Transition component used to animate the Alert on dismissal. */
  transition: _elementType.default
};
Alert.defaultProps = {
  show: true,
  transition: _Fade.default,
  closeLabel: 'Close alert'
};
var DecoratedAlert = (0, _uncontrollable.default)((0, _ThemeProvider.createBootstrapComponent)(Alert, 'alert'), {
  show: 'onClose'
});

var h4 = _react.default.forwardRef(function (p, ref) {
  return _react.default.createElement("div", (0, _extends2.default)({}, p, {
    ref: ref,
    className: (0, _classnames.default)(p.className, 'h4')
  }));
});

DecoratedAlert.Link = (0, _createWithBsPrefix.default)('alert-link', {
  Component: _SafeAnchor.default
});
DecoratedAlert.Heading = (0, _createWithBsPrefix.default)('alert-heading', {
  Component: h4
});
var _default = DecoratedAlert;
exports.default = _default;
module.exports = exports["default"];