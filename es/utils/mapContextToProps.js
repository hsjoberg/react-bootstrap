import _extends from "@babel/runtime/helpers/es6/extends";
import React from 'react';
export default function mapContextToProps(Component, consumers, mapToProps) {
  var name = Component.name || Component.displayName;
  if (!Array.isArray(consumers)) consumers = [consumers];
  var SingleConsumer = consumers[0];

  function singleRender(props, ref) {
    return React.createElement(SingleConsumer, null, function (value) {
      return React.createElement(Component, _extends({
        ref: ref
      }, props, mapToProps(value, props)));
    });
  }

  function multiRender(props, ref) {
    var contexts = Array(consumers.length);
    return consumers.reduce(function (child, Consumer, idx) {
      return React.createElement(Consumer, null, function (value) {
        contexts[idx] = value;
        return child || React.createElement(Component, _extends({
          ref: ref
        }, props, mapToProps.apply(void 0, contexts.concat([props]))));
      });
    }, null);
  }

  var contextTransform = consumers.length === 1 ? singleRender : multiRender;
  contextTransform.displayName = "ContextTransform(" + name + ")";
  return React.forwardRef(contextTransform);
}