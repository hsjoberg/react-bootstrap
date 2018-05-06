"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _ThemeProvider = require("./ThemeProvider");

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _CardContext = _interopRequireDefault(require("./CardContext"));

var _CardImg = _interopRequireDefault(require("./CardImg"));

var CardBody = (0, _createWithBsPrefix.default)('card-body');

var Card =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Card, _React$Component);

  function Card() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {}, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  Card.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var bsPrefix = _ref.bsPrefix;
    return {
      cardContext: {
        cardHeaderBsPrefix: bsPrefix + "-header"
      }
    };
  };

  var _proto = Card.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        Component = _props.as,
        bg = _props.bg,
        text = _props.text,
        border = _props.border,
        body = _props.body,
        children = _props.children,
        props = (0, _objectWithoutProperties2.default)(_props, ["bsPrefix", "className", "as", "bg", "text", "border", "body", "children"]);
    var classes = (0, _classnames.default)(className, bsPrefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border);
    return _react.default.createElement(_CardContext.default.Provider, {
      value: this.state.cardContext
    }, _react.default.createElement(Component, (0, _extends2.default)({
      className: classes
    }, props), body ? _react.default.createElement(CardBody, null, children) : children));
  };

  return Card;
}(_react.default.Component);

Card.propTypes = {
  /**
   * @default 'card'
   */
  bsPrefix: _propTypes.default.string.isRequired,

  /**
   * Sets card background
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
   */
  bg: _propTypes.default.string,

  /**
   * Sets card text color
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light'|'white'|'muted')}
   */
  text: _propTypes.default.string,

  /**
   * Sets card border color
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
   */
  border: _propTypes.default.string,

  /**
   * When this prop is set, it creates a Card with a Card.Body inside
   * passing the children directly to it
   */
  body: _propTypes.default.bool,
  as: _elementType.default
};
Card.defaultProps = {
  as: 'div',
  body: false
};

var divWithHeadingClass = function divWithHeadingClass(headingClass) {
  return _react.default.forwardRef(function (p, ref) {
    return _react.default.createElement("div", (0, _extends2.default)({}, p, {
      ref: ref,
      className: (0, _classnames.default)(p.className, headingClass)
    }));
  });
};

var DecoratedCard = (0, _ThemeProvider.createBootstrapComponent)(Card, 'card');
DecoratedCard.Img = _CardImg.default;
DecoratedCard.Title = (0, _createWithBsPrefix.default)('card-title', {
  Component: divWithHeadingClass('h5')
});
DecoratedCard.Subtitle = (0, _createWithBsPrefix.default)('card-subtitle', {
  Component: divWithHeadingClass('h6')
});
DecoratedCard.Body = CardBody;
DecoratedCard.Link = (0, _createWithBsPrefix.default)('card-link', {
  Component: 'a'
});
DecoratedCard.Text = (0, _createWithBsPrefix.default)('card-text', {
  Component: 'p'
});
DecoratedCard.Header = (0, _createWithBsPrefix.default)('card-header');
DecoratedCard.Footer = (0, _createWithBsPrefix.default)('card-footer');
DecoratedCard.ImgOverlay = (0, _createWithBsPrefix.default)('card-img-overlay');
var _default = DecoratedCard;
exports.default = _default;
module.exports = exports["default"];