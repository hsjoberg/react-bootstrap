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

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _ThemeProvider = require("./ThemeProvider");

var propTypes = {
  /**
   * @default 'media'
   */
  bsPrefix: _propTypes.default.string.isRequired,
  as: _elementType.default
};
var defaultProps = {
  as: 'div'
};

var Media =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Media, _React$Component);

  function Media() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Media.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        Component = _props.as,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "className", "as"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }));
  };

  return Media;
}(_react.default.Component);

Media.propTypes = propTypes;
Media.defaultProps = defaultProps;
var DecoratedMedia = (0, _ThemeProvider.createBootstrapComponent)(Media, 'media');
DecoratedMedia.Body = (0, _createWithBsPrefix.default)('media-body');
var _default = DecoratedMedia;
exports.default = _default;
module.exports = exports["default"];