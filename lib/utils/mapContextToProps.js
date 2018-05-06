"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = mapContextToProps;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

function mapContextToProps(Component, consumers, mapToProps) {
  var name = Component.name || Component.displayName;
  if (!Array.isArray(consumers)) consumers = [consumers];
  var SingleConsumer = consumers[0];

  function singleRender(props, ref) {
    return _react.default.createElement(SingleConsumer, null, function (value) {
      return _react.default.createElement(Component, (0, _extends2.default)({
        ref: ref
      }, props, mapToProps(value, props)));
    });
  }

  function multiRender(props, ref) {
    var contexts = Array(consumers.length);
    return consumers.reduce(function (child, Consumer, idx) {
      return _react.default.createElement(Consumer, null, function (value) {
        contexts[idx] = value;
        return child || _react.default.createElement(Component, (0, _extends2.default)({
          ref: ref
        }, props, mapToProps.apply(void 0, contexts.concat([props]))));
      });
    }, null);
  }

  var contextTransform = consumers.length === 1 ? singleRender : multiRender;
  contextTransform.displayName = "ContextTransform(" + name + ")";
  return _react.default.forwardRef(contextTransform);
}

module.exports = exports["default"];