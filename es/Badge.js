import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var Badge =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Badge, _React$Component);

  function Badge() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        variant = _props.variant,
        pill = _props.pill,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["bsPrefix", "variant", "pill", "className"]);

    return React.createElement("span", _extends({}, props, {
      className: classNames(className, bsPrefix, pill && bsPrefix + "-pill", variant && bsPrefix + "-" + variant)
    }));
  };

  return Badge;
}(React.Component);

Badge.propTypes = {
  /** @default 'badge' */
  bsPrefix: PropTypes.string.isRequired,

  /**
   * The visual style of the badge
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info|'light'|'dark')}
   */
  variant: PropTypes.string,

  /**
   * Add the `pill` modifier to make badges more rounded with
   * some additional horizontal padding
   */
  pill: PropTypes.bool.isRequired
};
Badge.defaultProps = {
  pill: false
};
export default createBootstrapComponent(Badge, 'badge');