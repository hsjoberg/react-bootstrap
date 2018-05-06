import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import camelize from 'dom-helpers/util/camelize';
import { createBootstrapComponent } from '../ThemeProvider';

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + camelize(str).slice(1);
};

export default function createWithBsPrefix(prefix, _temp) {
  var _class, _temp2;

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component;

  return createBootstrapComponent((_temp2 = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _props = this.props,
          className = _props.className,
          bsPrefix = _props.bsPrefix,
          _props$as = _props.as,
          Tag = _props$as === void 0 ? Component : _props$as,
          props = _objectWithoutProperties(_props, ["className", "bsPrefix", "as"]);

      return React.createElement(Tag, _extends({}, props, {
        className: classNames(className, bsPrefix)
      }));
    };

    return _class;
  }(React.Component), _class.displayName = displayName, _class.propTypes = {
    bsPrefix: function bsPrefix() {},
    as: function as() {}
  }, _temp2), prefix);
}