import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/es6/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";

var _fadeStyles;

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Transition, { ENTERED, ENTERING } from 'react-transition-group/Transition';
var propTypes = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  in: PropTypes.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear: PropTypes.bool,

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: PropTypes.number,

  /**
   * Callback fired before the component fades in
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the has component faded in
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the component fades out
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the component has faded out
   */
  onExited: PropTypes.func
};
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[ENTERING] = 'show', _fadeStyles[ENTERED] = 'show', _fadeStyles);

function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

var Fade =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Fade, _React$Component);

  function Fade() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleEnter = function (node) {
      triggerBrowserReflow(node);
      if (_this.props.onEnter) _this.props.onEnter(node);
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Fade.prototype;

  _proto.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        props = _objectWithoutProperties(_props, ["className", "children"]);

    return React.createElement(Transition, _extends({}, props, {
      onEnter: this.handleEnter
    }), function (status, innerProps) {
      return React.cloneElement(children, _extends({}, innerProps, {
        className: classNames('fade', className, children.props.className, fadeStyles[status])
      }));
    });
  };

  return Fade;
}(React.Component);

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;
export default Fade;