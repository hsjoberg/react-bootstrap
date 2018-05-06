import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';
import BreadcrumbItem from './BreadcrumbItem';

var Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Breadcrumb, _React$Component);

  function Breadcrumb() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Breadcrumb.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        listProps = _props.listProps,
        children = _props.children,
        label = _props.label,
        Component = _props.as,
        props = _objectWithoutProperties(_props, ["bsPrefix", "className", "listProps", "children", "label", "as"]);

    return React.createElement(Component, _extends({
      "aria-label": label,
      className: className
    }, props), React.createElement("ol", _extends({
      role: "navigation"
    }, listProps, {
      className: classNames(bsPrefix, listProps.className)
    }), children));
  };

  return Breadcrumb;
}(React.Component);

Breadcrumb.propTypes = {
  /**
   * @default 'breadcrumb'
   */
  bsPrefix: PropTypes.string,

  /**
   * ARIA label for the nav element
   * https://www.w3.org/TR/wai-aria-practices/#breadcrumb
   */
  label: PropTypes.string,

  /**
   * Additional props passed as-is to the underlying `<ul>` element
   */
  listProps: PropTypes.object,
  as: elementType
};
Breadcrumb.defaultProps = {
  label: 'breadcrumb',
  listProps: {},
  as: 'nav'
};
var DecoratedBreadcrumb = createBootstrapComponent(Breadcrumb, 'breadcrumb');
DecoratedBreadcrumb.Item = BreadcrumbItem;
export default DecoratedBreadcrumb;