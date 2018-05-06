import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import _assertThisInitialized from "@babel/runtime/helpers/es6/assertThisInitialized";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import all from 'prop-types-extra/lib/all';
import SafeAnchor from './SafeAnchor';
import { bsClass, prefix, splitBsPropsAndOmit } from './utils/bootstrapUtils';
import createChainedFunction from './utils/createChainedFunction';
var propTypes = {
  /**
   * Highlight the menu item as active.
   */
  active: PropTypes.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: PropTypes.bool,

  /**
   * Styles the menu item as a horizontal rule, providing visual separation between
   * groups of menu items.
   */
  divider: all(PropTypes.bool, function (_ref) {
    var divider = _ref.divider,
        children = _ref.children;
    return divider && children ? new Error('Children will not be rendered for dividers') : null;
  }),

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: PropTypes.any,

  /**
   * Styles the menu item as a header label, useful for describing a group of menu items.
   */
  header: PropTypes.bool,

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: PropTypes.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Callback fired when the menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: PropTypes.func
};
var defaultProps = {
  divider: false,
  disabled: false,
  header: false
};

var MenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MenuItem, _React$Component);

  function MenuItem(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = MenuItem.prototype;

  _proto.handleClick = function handleClick(event) {
    var _props = this.props,
        href = _props.href,
        disabled = _props.disabled,
        onSelect = _props.onSelect,
        eventKey = _props.eventKey;

    if (!href || disabled) {
      event.preventDefault();
    }

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  };

  _proto.render = function render() {
    var _props2 = this.props,
        active = _props2.active,
        disabled = _props2.disabled,
        divider = _props2.divider,
        header = _props2.header,
        onClick = _props2.onClick,
        className = _props2.className,
        props = _objectWithoutProperties(_props2, ["active", "disabled", "divider", "header", "onClick", "className"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['eventKey', 'onSelect']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    if (divider) {
      // Forcibly blank out the children; separators shouldn't render any.
      elementProps.children = undefined;
      return React.createElement("div", _extends({}, elementProps, {
        role: "separator",
        className: classNames(className, prefix(bsProps, 'divider'))
      }));
    }

    if (header) {
      return React.createElement("div", _extends({}, elementProps, {
        role: "heading",
        className: classNames(className, prefix(bsProps, 'header'))
      }));
    }

    return React.createElement(SafeAnchor, _extends({}, elementProps, {
      role: "menuitem",
      tabIndex: "-1",
      className: classNames(className, prefix(bsProps, 'item'), {
        active: active,
        disabled: disabled
      }),
      onClick: createChainedFunction(onClick, this.handleClick)
    }));
  };

  return MenuItem;
}(React.Component);

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
export default bsClass('dropdown', MenuItem);