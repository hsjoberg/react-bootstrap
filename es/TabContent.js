import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TabContent, _React$Component);

  function TabContent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        Component = _props.as,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["bsPrefix", "as", "className"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return TabContent;
}(React.Component);

TabContent.propTypes = {
  /**
   * @default 'tab-content'
   */
  bsPrefix: PropTypes.string,
  as: elementType
};
TabContent.defaultProps = {
  as: 'div'
};
export default createBootstrapComponent(TabContent, 'tab-content');