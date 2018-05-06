"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _Col = _interopRequireDefault(require("./Col"));

var _bootstrapUtils = require("./utils/bootstrapUtils");

var propTypes = {
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  htmlFor: _propTypes.default.string,
  column: _propTypes.default.bool,
  srOnly: _propTypes.default.bool
};
var defaultProps = {
  column: false,
  srOnly: false
};
var contextTypes = {
  $bs_formGroup: _propTypes.default.object
};

var FormLabel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(FormLabel, _React$Component);

  function FormLabel() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormLabel.prototype;

  _proto.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;
    var _props = this.props,
        column = _props.column,
        _props$htmlFor = _props.htmlFor,
        htmlFor = _props$htmlFor === void 0 ? controlId : _props$htmlFor,
        srOnly = _props.srOnly,
        className = _props.className,
        props = (0, _objectWithoutProperties2.default)(_props, ["column", "htmlFor", "srOnly", "className"]);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    process.env.NODE_ENV !== "production" ? (0, _warning.default)(controlId == null || htmlFor === controlId, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
    var classes = (0, _extends2.default)({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      'sr-only': srOnly
    });

    if (column) {
      return _react.default.createElement(_Col.default, (0, _extends2.default)({}, elementProps, {
        as: "label",
        htmlFor: htmlFor,
        className: (0, _classnames.default)(className, 'col-form-label', classes)
      }));
    }

    return _react.default.createElement("label", (0, _extends2.default)({}, elementProps, {
      htmlFor: htmlFor,
      className: (0, _classnames.default)(className, classes)
    }));
  };

  return FormLabel;
}(_react.default.Component);

FormLabel.propTypes = propTypes;
FormLabel.defaultProps = defaultProps;
FormLabel.contextTypes = contextTypes;

var _default = (0, _bootstrapUtils.bsClass)('form-label', FormLabel);

exports.default = _default;
module.exports = exports["default"];