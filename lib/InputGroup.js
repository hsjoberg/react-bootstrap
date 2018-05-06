"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _react = _interopRequireDefault(require("react"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _ThemeProvider = require("./ThemeProvider");

/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
var InputGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(InputGroup, _React$Component);

  function InputGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroup.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        size = _props.size,
        className = _props.className,
        Component = _props.as,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "size", "className", "as"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, size && bsPrefix + "-" + size)
    }));
  };

  return InputGroup;
}(_react.default.Component);

InputGroup.propTypes = {
  /** @default 'input-group */
  bsPrefix: _propTypes.default.string.isRequired,

  /**
   * Control the size of buttons and form elements from the top-level .
   *
   * @type {('sm'|'lg')}
   */
  size: _propTypes.default.string.isRequired,
  as: _elementType.default
};
InputGroup.defaultProps = {
  as: 'div'
};
var InputGroupAppend = (0, _createWithBsPrefix.default)('input-group-append');
var InputGroupPrepend = (0, _createWithBsPrefix.default)('input-group-prepend');
var InputGroupText = (0, _createWithBsPrefix.default)('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return _react.default.createElement(InputGroupText, null, _react.default.createElement("input", (0, _extends2.default)({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return _react.default.createElement(InputGroupText, null, _react.default.createElement("input", (0, _extends2.default)({
    type: "radio"
  }, props)));
};

var DecoratedInputGroup = (0, _ThemeProvider.createBootstrapComponent)(InputGroup, 'input-group');
DecoratedInputGroup.Text = InputGroupText;
DecoratedInputGroup.Radio = InputGroupRadio;
DecoratedInputGroup.Checkbox = InputGroupCheckbox;
DecoratedInputGroup.Append = InputGroupAppend;
DecoratedInputGroup.Prepend = InputGroupPrepend;
var _default = DecoratedInputGroup;
exports.default = _default;
module.exports = exports["default"];