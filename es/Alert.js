import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/es6/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import uncontrollable from 'uncontrollable';
import createWithBsPrefix from './utils/createWithBsPrefix';
import { createBootstrapComponent } from './ThemeProvider';
import Fade from './Fade';
import CloseButton from './CloseButton';
import SafeAnchor from './SafeAnchor';
/**
 * @property {AlertHeading} Heading
 * @property {AlertLink} Link
 */

var Alert =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Alert, _React$Component);

  function Alert() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleClose = function (e) {
      _this.props.onClose(false, e);
    }, _temp) || _assertThisInitialized(_this);
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
        props = _objectWithoutProperties(_props, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "dismissible", "transition", "onClose"]);

    var alert = React.createElement("div", _extends({
      role: "alert"
    }, Transition ? props : undefined, {
      className: classNames(className, bsPrefix, variant && bsPrefix + "-" + variant, dismissible && bsPrefix + "-dismissible")
    }), dismissible && React.createElement(CloseButton, {
      onClick: this.handleClose,
      label: closeLabel
    }), children);
    if (!Transition) return show ? alert : null;
    return React.createElement(Transition, _extends({
      unmountOnExit: true
    }, props, {
      "in": show
    }), alert);
  };

  return Alert;
}(React.Component);

Alert.propTypes = {
  /**
   * @default 'alert'
   */
  bsPrefix: PropTypes.string,

  /**
   * The Alert visual variant
   *
   * @type('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')
   */
  variant: PropTypes.string,

  /**
   * Renders a properly aligned dismiss button, as well as
   * adding extra horizontal padding to the Alert.
   */
  dismissible: PropTypes.bool,

  /**
   * Controls the visual state of the Alert.
   *
   * @controllable onClose
   */
  show: PropTypes.bool,

  /**
   * Callback fired when alert is closed.
   *
   * @controllable show
   */
  onClose: PropTypes.func,

  /**
   * Sets the text for alert close button.
   */
  closeLabel: PropTypes.string,

  /** A `react-transition-group` Transition component used to animate the Alert on dismissal. */
  transition: elementType
};
Alert.defaultProps = {
  show: true,
  transition: Fade,
  closeLabel: 'Close alert'
};
var DecoratedAlert = uncontrollable(createBootstrapComponent(Alert, 'alert'), {
  show: 'onClose'
});
var h4 = React.forwardRef(function (p, ref) {
  return React.createElement("div", _extends({}, p, {
    ref: ref,
    className: classNames(p.className, 'h4')
  }));
});
DecoratedAlert.Link = createWithBsPrefix('alert-link', {
  Component: SafeAnchor
});
DecoratedAlert.Heading = createWithBsPrefix('alert-heading', {
  Component: h4
});
export default DecoratedAlert;