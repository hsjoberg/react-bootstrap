import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import PageItem, { First, Prev, Ellipsis, Next, Last } from './PageItem';
/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Pagination, _React$Component);

  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        children = _props.children,
        size = _props.size,
        props = _objectWithoutProperties(_props, ["bsPrefix", "className", "children", "size"]);

    return React.createElement("ul", _extends({}, props, {
      className: classNames(className, bsPrefix, size && bsPrefix + "-" + size)
    }), children);
  };

  return Pagination;
}(React.Component);

Pagination.propTypes = {
  /** @default 'pagination' */
  bsPrefix: PropTypes.string.isRequired,

  /**
   * Set's the size of all PageItems.
   *
   * @type {('sm'|'lg')}
   */
  size: PropTypes.string
};
var DecoratedPagination = createBootstrapComponent(Pagination, 'pagination');
DecoratedPagination.First = First;
DecoratedPagination.Prev = Prev;
DecoratedPagination.Ellipsis = Ellipsis;
DecoratedPagination.Item = PageItem;
DecoratedPagination.Next = Next;
DecoratedPagination.Last = Last;
export default DecoratedPagination;