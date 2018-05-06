import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';

var FigureCaption =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FigureCaption, _React$Component);

  function FigureCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FigureCaption.prototype;

  _proto.render = function render() {
    var _props = this.props,
        Component = _props.as,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["as", "bsPrefix", "className"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return FigureCaption;
}(React.Component);

FigureCaption.propTypes = {
  /**
   * @default 'figure-caption'
   */
  bsPrefix: PropTypes.string,
  as: elementType
};
FigureCaption.defaultProps = {
  as: 'figcaption'
};
export default createBootstrapComponent(FigureCaption, 'figure-caption');