import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';
import FigureImage from './FigureImage';
import FigureCaption from './FigureCaption';

var Figure =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Figure, _React$Component);

  function Figure() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Figure.prototype;

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

  return Figure;
}(React.Component);

Figure.propTypes = {
  /**
   * @default 'figure'
   */
  bsPrefix: PropTypes.string,
  as: elementType
};
Figure.defaultProps = {
  as: 'figure'
};
var DecoratedFigure = createBootstrapComponent(Figure, 'figure');
DecoratedFigure.Image = FigureImage;
DecoratedFigure.Caption = FigureCaption;
export default DecoratedFigure;