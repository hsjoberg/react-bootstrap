import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Collapse from './Collapse';
import { createBootstrapComponent } from './ThemeProvider';
import NavbarContext from './NavbarContext';

var NavbarCollapse =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarCollapse.prototype;

  _proto.render = function render() {
    var _props = this.props,
        children = _props.children,
        bsPrefix = _props.bsPrefix,
        props = _objectWithoutProperties(_props, ["children", "bsPrefix"]);

    return React.createElement(NavbarContext.Consumer, null, function (context) {
      return React.createElement(Collapse, _extends({
        "in": !!(context && context.expanded)
      }, props), React.createElement("div", {
        className: bsPrefix
      }, children));
    });
  };

  return NavbarCollapse;
}(React.Component);

NavbarCollapse.propTypes = {
  /** @default 'navbar-collapse' */
  bsPrefix: PropTypes.string
};
export default createBootstrapComponent(NavbarCollapse, 'navbar-collapse');