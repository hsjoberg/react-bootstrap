import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React, { cloneElement } from 'react';
import elementType from 'prop-types-extra/lib/elementType';
import ListGroupItem from './ListGroupItem';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
import ValidComponentChildren from './utils/ValidComponentChildren';
var propTypes = {
  /**
   * You can use a custom element type for this component.
   *
   * If not specified, it will be treated as `'li'` if every child is a
   * non-actionable `<ListGroupItem>`, and `'div'` otherwise.
   */
  as: elementType
};

function getDefaultComponent(children) {
  if (!children) {
    // FIXME: This is the old behavior. Is this right?
    return 'div';
  }

  if (ValidComponentChildren.some(children, function (child) {
    return child.type !== ListGroupItem || child.props.href || child.props.onClick;
  })) {
    return 'div';
  }

  return 'ul';
}

var ListGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ListGroup, _React$Component);

  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroup.prototype;

  _proto.render = function render() {
    var _props = this.props,
        children = _props.children,
        _props$as = _props.as,
        Component = _props$as === void 0 ? getDefaultComponent(children) : _props$as,
        className = _props.className,
        props = _objectWithoutProperties(_props, ["children", "as", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    var useListItem = Component === 'ul' && ValidComponentChildren.every(children, function (child) {
      return child.type === ListGroupItem;
    });
    return React.createElement(Component, _extends({}, elementProps, {
      className: classNames(className, classes)
    }), useListItem ? ValidComponentChildren.map(children, function (child) {
      return cloneElement(child, {
        listItem: true
      });
    }) : children);
  };

  return ListGroup;
}(React.Component);

ListGroup.propTypes = propTypes;
export default bsClass('list-group', ListGroup);