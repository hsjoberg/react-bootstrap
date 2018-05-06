import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';

var ButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ButtonGroup, _React$Component);

  function ButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonGroup.prototype;

  _proto.render = function render() {
    var _props = this.props,
        _0 = _props.bsRole,
        bsPrefix = _props.bsPrefix,
        size = _props.size,
        toggle = _props.toggle,
        vertical = _props.vertical,
        className = _props.className,
        Component = _props.as,
        props = _objectWithoutProperties(_props, ["bsRole", "bsPrefix", "size", "toggle", "vertical", "className", "as"]);

    var baseClass = bsPrefix;
    if (vertical) baseClass = bsPrefix + "-vertical";
    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, baseClass, size && bsPrefix + "-" + size, toggle && bsPrefix + "-toggle")
    }));
  };

  return ButtonGroup;
}(React.Component);

ButtonGroup.propTypes = {
  /**
   * @default 'btn-group'
   */
  bsPrefix: PropTypes.string,

  /**
   * Sets the size for all Buttons in the group.
   *
   * @type ('sm'|'lg')
   */
  size: PropTypes.string,

  /** Make the set of Buttons appear vertically stacked. */
  vertical: PropTypes.bool,

  /**
   * Display as a button toggle group.
   *
   * (Generally it's better to use `ToggleButtonGroup` directly)
   */
  toggle: PropTypes.bool,

  /**
   * An ARIA role describing the button group. Usually the default
   * "group" role is fine. An `aria-label` or `aria-labelledby`
   * prop is also recommended.
   */
  role: PropTypes.string,
  as: elementType
};
ButtonGroup.defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group',
  as: 'div'
};
export default createBootstrapComponent(ButtonGroup, 'btn-group');