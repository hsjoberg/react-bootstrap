import _extends from "@babel/runtime/helpers/es6/extends";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import React from 'react';
import PanelGroup from './PanelGroup';

var Accordion =
/*#__PURE__*/
function (_React$Component) {
  function Accordion() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Accordion.prototype;

  _proto.render = function render() {
    return React.createElement(PanelGroup, _extends({}, this.props, {
      accordion: true
    }), this.props.children);
  };

  _inheritsLoose(Accordion, _React$Component);

  return Accordion;
}(React.Component);

export default Accordion;