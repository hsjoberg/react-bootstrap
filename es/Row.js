import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var Row =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Row, _React$Component);

  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        noGutters = _props.noGutters,
        Component = _props.as,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["bsPrefix", "noGutters", "as", "className"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix, noGutters && 'no-gutters')
    }));
  };

  return Row;
}(React.Component);

Row.propTypes = {
  /**
   * @default 'row'
   */
  bsPrefix: PropTypes.string.isRequired,

  /** Removes the gutter spacing between `Col`s as well as any added negative margins. */
  noGutters: PropTypes.bool.isRequired,
  as: elementType
};
Row.defaultProps = {
  as: 'div',
  noGutters: false
};
export default createBootstrapComponent(Row, 'row');