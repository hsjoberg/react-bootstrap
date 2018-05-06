import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import SafeAnchor from './SafeAnchor';
import { bsClass as setBsClass } from './utils/bootstrapUtils';
var propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  useAnchor: PropTypes.bool
};
var defaultProps = {
  open: false,
  useAnchor: false,
  bsRole: 'toggle'
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownToggle, _React$Component);

  function DropdownToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.render = function render() {
    var _props = this.props,
        open = _props.open,
        useAnchor = _props.useAnchor,
        bsClass = _props.bsClass,
        className = _props.className,
        children = _props.children,
        props = _objectWithoutProperties(_props, ["open", "useAnchor", "bsClass", "className", "children"]);

    delete props.bsRole;
    var Component = useAnchor ? SafeAnchor : Button; // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.
    // FIXME: Should this really fall back to `title` as children?

    return React.createElement(Component, _extends({}, props, {
      role: "button",
      className: classNames(className, bsClass),
      "aria-haspopup": true,
      "aria-expanded": open
    }), children || props.title);
  };

  return DropdownToggle;
}(React.Component);

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
export default setBsClass('dropdown-toggle', DropdownToggle);