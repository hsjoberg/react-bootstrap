import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _Array$from from "@babel/runtime/core-js/array/from";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import _assertThisInitialized from "@babel/runtime/helpers/es6/assertThisInitialized";
import classNames from 'classnames';
import keycode from 'keycode';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';
import { bsClass, getClassSet, prefix, splitBsPropsAndOmit } from './utils/bootstrapUtils';
import createChainedFunction from './utils/createChainedFunction';
import ValidComponentChildren from './utils/ValidComponentChildren';
var propTypes = {
  open: PropTypes.bool,
  pullRight: PropTypes.bool,
  onClose: PropTypes.func,
  labelledBy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
  rootCloseEvent: PropTypes.oneOf(['click', 'mousedown'])
};
var defaultProps = {
  bsRole: 'menu',
  pullRight: false
};

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleRootClose = _this.handleRootClose.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getFocusableMenuItems = function getFocusableMenuItems() {
    var node = ReactDOM.findDOMNode(this);

    if (!node) {
      return [];
    }

    return _Array$from(node.querySelectorAll('[tabIndex="-1"]'));
  };

  _proto.getItemsAndActiveIndex = function getItemsAndActiveIndex() {
    var items = this.getFocusableMenuItems();
    var activeIndex = items.indexOf(document.activeElement);
    return {
      items: items,
      activeIndex: activeIndex
    };
  };

  _proto.focusNext = function focusNext() {
    var _getItemsAndActiveInd = this.getItemsAndActiveIndex(),
        items = _getItemsAndActiveInd.items,
        activeIndex = _getItemsAndActiveInd.activeIndex;

    if (items.length === 0) {
      return;
    }

    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    items[nextIndex].focus();
  };

  _proto.focusPrevious = function focusPrevious() {
    var _getItemsAndActiveInd2 = this.getItemsAndActiveIndex(),
        items = _getItemsAndActiveInd2.items,
        activeIndex = _getItemsAndActiveInd2.activeIndex;

    if (items.length === 0) {
      return;
    }

    var prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    items[prevIndex].focus();
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case keycode.codes.down:
        this.focusNext();
        event.preventDefault();
        break;

      case keycode.codes.up:
        this.focusPrevious();
        event.preventDefault();
        break;

      case keycode.codes.esc:
      case keycode.codes.tab:
        this.props.onClose(event, {
          source: 'keydown'
        });
        break;

      default:
    }
  };

  _proto.handleRootClose = function handleRootClose(event) {
    this.props.onClose(event, {
      source: 'rootClose'
    });
  };

  _proto.render = function render() {
    var _extends2,
        _this2 = this;

    var _props = this.props,
        open = _props.open,
        pullRight = _props.pullRight,
        labelledBy = _props.labelledBy,
        onSelect = _props.onSelect,
        className = _props.className,
        rootCloseEvent = _props.rootCloseEvent,
        children = _props.children,
        props = _objectWithoutProperties(_props, ["open", "pullRight", "labelledBy", "onSelect", "className", "rootCloseEvent", "children"]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['onClose']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[prefix(bsProps, 'right')] = pullRight, _extends2));

    return React.createElement(RootCloseWrapper, {
      disabled: !open,
      onRootClose: this.handleRootClose,
      event: rootCloseEvent
    }, React.createElement("div", _extends({}, elementProps, {
      role: "menu",
      className: classNames(className, classes),
      "aria-labelledby": labelledBy
    }), ValidComponentChildren.map(children, function (child) {
      return React.cloneElement(child, {
        onKeyDown: createChainedFunction(child.props.onKeyDown, _this2.handleKeyDown),
        onSelect: createChainedFunction(child.props.onSelect, onSelect)
      });
    })));
  };

  return DropdownMenu;
}(React.Component);

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
export default bsClass('dropdown-menu', DropdownMenu);