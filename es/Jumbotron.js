import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';
var propTypes = {
  as: elementType,

  /** Make the jumbotron full width, and without rounded corners */
  fluid: PropTypes.bool,

  /** @default 'jumbotron' */
  bsPrefix: PropTypes.string
};
var defaultProps = {
  as: 'div',
  fluid: false
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Jumbotron, _React$Component);

  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _classes;

    var _props = this.props,
        Component = _props.as,
        className = _props.className,
        fluid = _props.fluid,
        bsPrefix = _props.bsPrefix,
        props = _objectWithoutProperties(_props, ["as", "className", "fluid", "bsPrefix"]);

    var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, classes)
    }));
  };

  return Jumbotron;
}(React.Component);

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;
export default createBootstrapComponent(Jumbotron, 'jumbotron');