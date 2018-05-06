import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import _extends from "@babel/runtime/helpers/es6/extends";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import splitComponentProps from './utils/splitComponentProps';
import ValidComponentChildren from './utils/ValidComponentChildren';

var propTypes = _extends({}, Dropdown.propTypes, {
  // Toggle props.
  title: PropTypes.node.isRequired,
  noCaret: PropTypes.bool,
  active: PropTypes.bool,
  activeKey: PropTypes.any,
  activeHref: PropTypes.string,
  // Override generated docs from <Dropdown>.

  /**
   * @private
   */
  children: PropTypes.node
});

var NavDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavDropdown, _React$Component);

  function NavDropdown() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavDropdown.prototype;

  _proto.isActive = function isActive(_ref, activeKey, activeHref) {
    var _this = this;

    var props = _ref.props;

    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
      return true;
    }

    if (ValidComponentChildren.some(props.children, function (child) {
      return _this.isActive(child, activeKey, activeHref);
    })) {
      return true;
    }

    return props.active;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _props = this.props,
        title = _props.title,
        activeKey = _props.activeKey,
        activeHref = _props.activeHref,
        className = _props.className,
        style = _props.style,
        children = _props.children,
        props = _objectWithoutProperties(_props, ["title", "activeKey", "activeHref", "className", "style", "children"]);

    var active = this.isActive(this, activeKey, activeHref);
    delete props.active; // Accessed via this.isActive().

    delete props.eventKey; // Accessed via this.isActive().

    var _splitComponentProps = splitComponentProps(props, Dropdown.ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        toggleProps = _splitComponentProps[1]; // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
    // rather than the `<Dropdown.Toggle>`.


    return React.createElement(Dropdown, _extends({}, dropdownProps, {
      as: "li",
      className: classNames(className, {
        active: active
      }),
      style: style
    }), React.createElement(Dropdown.Toggle, _extends({}, toggleProps, {
      useAnchor: true
    }), title), React.createElement(Dropdown.Menu, null, ValidComponentChildren.map(children, function (child) {
      return React.cloneElement(child, {
        active: _this2.isActive(child, activeKey, activeHref)
      });
    })));
  };

  return NavDropdown;
}(React.Component);

NavDropdown.propTypes = propTypes;
export default NavDropdown;