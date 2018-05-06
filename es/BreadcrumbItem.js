import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import SafeAnchor from './SafeAnchor';
import { createBootstrapComponent } from './ThemeProvider';

var BreadcrumbItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BreadcrumbItem.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        active = _props.active,
        className = _props.className,
        Component = _props.as,
        props = _objectWithoutProperties(_props, ["bsPrefix", "active", "className", "as"]);

    var href = props.href,
        title = props.title,
        target = props.target,
        elementProps = _objectWithoutProperties(props, ["href", "title", "target"]);

    var linkProps = {
      href: href,
      title: title,
      target: target
    };
    return React.createElement(Component, {
      className: classNames(bsPrefix, className, {
        active: active
      }),
      "aria-current": active ? 'page' : undefined
    }, active ? React.createElement("span", _extends({}, elementProps, {
      className: classNames({
        active: active
      })
    })) : React.createElement(SafeAnchor, _extends({}, elementProps, linkProps)));
  };

  return BreadcrumbItem;
}(React.Component);

BreadcrumbItem.propTypes = {
  /**
   * @default 'breadcrumb-item'
   */
  bsPrefix: PropTypes.string,

  /**
   * Adds a visual "active" state to a Breadcrumb
   * Item and disables the link.
   */
  active: PropTypes.bool,

  /**
   * `href` attribute for the inner `a` element
   */
  href: PropTypes.string,

  /**
   * `title` attribute for the inner `a` element
   */
  title: PropTypes.node,

  /**
   * `target` attribute for the inner `a` element
   */
  target: PropTypes.string,
  as: elementType
};
BreadcrumbItem.defaultProps = {
  active: false,
  as: 'li'
};
export default createBootstrapComponent(BreadcrumbItem, 'breadcrumb-item');