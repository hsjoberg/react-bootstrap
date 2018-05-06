import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';

var Container =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Container, _React$Component);

  function Container() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Container.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        fluid = _props.fluid,
        Component = _props.as,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["bsPrefix", "fluid", "as", "className"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix, fluid && bsPrefix + "-fluid")
    }));
  };

  return Container;
}(React.Component);

Container.propTypes = {
  /**
   * @default 'container'
   */
  bsPrefix: PropTypes.string,

  /**
   * Allow the Container to fill all of it's availble horizontal space.
   */
  fluid: PropTypes.bool,

  /**
   * You can use a custom element for this component
   */
  as: elementType
};
Container.defaultProps = {
  as: 'div',
  fluid: false
};
export default createBootstrapComponent(Container, 'container');