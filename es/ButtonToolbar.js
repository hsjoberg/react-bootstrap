import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var ButtonToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonToolbar.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["bsPrefix", "className"]);

    return React.createElement("div", _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return ButtonToolbar;
}(React.Component);

ButtonToolbar.propTypes = {
  /**
   * @default 'btn-toolbar'
   */
  bsPrefix: PropTypes.string,

  /**
   * The ARIA role describing the button toolbar. Generally the default
   * "toolbar" role is correct. An `aria-label` or `aria-labelledby`
   * prop is also recommended.
   */
  role: PropTypes.string
};
ButtonToolbar.defaultProps = {
  role: 'toolbar'
};
export default createBootstrapComponent(ButtonToolbar, 'btn-toolbar');