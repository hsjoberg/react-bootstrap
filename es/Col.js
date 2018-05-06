import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';
var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var colSize = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.oneOf(['auto'])]);
var stringOrNumber = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var column = PropTypes.oneOfType([colSize, PropTypes.shape({
  size: colSize,
  order: stringOrNumber,
  offset: stringOrNumber
})]);

var Col =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Col, _React$Component);

  function Col() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Col.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        Component = _props.as,
        props = _objectWithoutProperties(_props, ["bsPrefix", "className", "as"]);

    var spans = [];
    var classes = [];
    DEVICE_SIZES.forEach(function (brkPoint) {
      var propValue = props[brkPoint];
      delete props[brkPoint];
      var span, offset, order;

      if (propValue != null && typeof propValue === 'object') {
        var _propValue$span = propValue.span;
        span = _propValue$span === void 0 ? true : _propValue$span;
        offset = propValue.offset;
        order = propValue.order;
      } else {
        span = propValue;
      }

      var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
      if (span != null) spans.push(span === true ? "" + bsPrefix + infix : "" + bsPrefix + infix + "-" + span);
      if (order != null) classes.push("order" + infix + "-" + order);
      if (offset != null) classes.push("offset" + infix + "-" + offset);
    });

    if (!spans.length) {
      spans.push(bsPrefix); // plain 'col'
    }

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, spans, classes)
    }));
  };

  return Col;
}(React.Component);

Col.propTypes = {
  /**
   * @default 'col'
   */
  bsPrefix: PropTypes.string,
  as: elementType,

  /**
   * The number of columns to span on sxtra small devices (<576px) HII!
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  xs: column,

  /**
   * The number of columns to span on small devices (≥576px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  sm: column,

  /**
   * The number of columns to span on medium devices (≥768px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  md: column,

  /**
   * The number of columns to span on large devices (≥992px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  lg: column,

  /**
   * The number of columns to span on extra large devices (≥1200px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  xl: column
};
Col.defaultProps = {
  as: 'div'
};
export default createBootstrapComponent(Col, 'col');