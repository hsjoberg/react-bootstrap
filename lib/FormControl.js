"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _warning = _interopRequireDefault(require("warning"));

var _InvalidFeedback = _interopRequireDefault(require("./InvalidFeedback"));

var _bootstrapUtils = require("./utils/bootstrapUtils");

var _StyleConfig = require("./utils/StyleConfig");

var propTypes = {
  as: _elementType.default,

  /**
   * Render the input as plain text.
   */
  plaintext: _propTypes.default.bool,

  /** @ignore */
  readOnly: _propTypes.default.bool,

  /**
   * Only relevant if `as` is `'input'`.
   */
  type: _propTypes.default.string,

  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: _propTypes.default.string,

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <FormControl inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: _propTypes.default.func,
  isValid: _propTypes.default.bool.isRequired,
  isInvalid: _propTypes.default.bool.isRequired
};
var defaultProps = {
  as: 'input'
};
var contextTypes = {
  $bs_formGroup: _propTypes.default.object
};

var FormControl =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(FormControl, _React$Component);

  function FormControl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControl.prototype;

  _proto.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;
    var _props = this.props,
        Component = _props.as,
        type = _props.type,
        _props$id = _props.id,
        id = _props$id === void 0 ? controlId : _props$id,
        inputRef = _props.inputRef,
        className = _props.className,
        isValid = _props.isValid,
        isInvalid = _props.isInvalid,
        plaintext = _props.plaintext,
        readOnly = _props.readOnly,
        props = (0, _objectWithoutProperties2.default)(_props, ["as", "type", "id", "inputRef", "className", "isValid", "isInvalid", "plaintext", "readOnly"]);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    process.env.NODE_ENV !== "production" ? (0, _warning.default)(controlId == null || id === controlId, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
    var classes;

    if (type === 'file') {
      var _classes;

      classes = (_classes = {}, _classes[(0, _bootstrapUtils.prefix)(bsProps, 'file')] = true, _classes);
    } else if (plaintext) {
      var _classes2;

      classes = (_classes2 = {}, _classes2[(0, _bootstrapUtils.prefix)(bsProps, 'plaintext')] = true, _classes2);
    } else {
      classes = (0, _bootstrapUtils.getClassSet)(bsProps);
    }

    return _react.default.createElement(Component, (0, _extends2.default)({}, elementProps, {
      type: type,
      id: id,
      ref: inputRef,
      readOnly: readOnly || plaintext,
      className: (0, _classnames.default)(className, classes, isValid && (0, _bootstrapUtils.prefix)(bsProps, 'is-valid'), isInvalid && (0, _bootstrapUtils.prefix)(bsProps, 'is-invalid'))
    }));
  };

  return FormControl;
}(_react.default.Component);

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;
FormControl.contextTypes = contextTypes;
FormControl.Feedback = _InvalidFeedback.default;

var _default = (0, _bootstrapUtils.bsClass)('form-control', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.SMALL, _StyleConfig.Size.LARGE], FormControl));

exports.default = _default;
module.exports = exports["default"];