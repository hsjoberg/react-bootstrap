import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/es6/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { createBootstrapComponent } from './ThemeProvider';
import createWithBsPrefix from './utils/createWithBsPrefix';
import CardContext from './CardContext';
import CardImg from './CardImg';
var CardBody = createWithBsPrefix('card-body');

var Card =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Card, _React$Component);

  function Card() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {}, _temp) || _assertThisInitialized(_this);
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
        props = _objectWithoutProperties(_props, ["bsPrefix", "className", "as", "bg", "text", "border", "body", "children"]);

    var classes = classNames(className, bsPrefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border);
    return React.createElement(CardContext.Provider, {
      value: this.state.cardContext
    }, React.createElement(Component, _extends({
      className: classes
    }, props), body ? React.createElement(CardBody, null, children) : children));
  };

  return Card;
}(React.Component);

Card.propTypes = {
  /**
   * @default 'card'
   */
  bsPrefix: PropTypes.string.isRequired,

  /**
   * Sets card background
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
   */
  bg: PropTypes.string,

  /**
   * Sets card text color
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light'|'white'|'muted')}
   */
  text: PropTypes.string,

  /**
   * Sets card border color
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
   */
  border: PropTypes.string,

  /**
   * When this prop is set, it creates a Card with a Card.Body inside
   * passing the children directly to it
   */
  body: PropTypes.bool,
  as: elementType
};
Card.defaultProps = {
  as: 'div',
  body: false
};

var divWithHeadingClass = function divWithHeadingClass(headingClass) {
  return React.forwardRef(function (p, ref) {
    return React.createElement("div", _extends({}, p, {
      ref: ref,
      className: classNames(p.className, headingClass)
    }));
  });
};

var DecoratedCard = createBootstrapComponent(Card, 'card');
DecoratedCard.Img = CardImg;
DecoratedCard.Title = createWithBsPrefix('card-title', {
  Component: divWithHeadingClass('h5')
});
DecoratedCard.Subtitle = createWithBsPrefix('card-subtitle', {
  Component: divWithHeadingClass('h6')
});
DecoratedCard.Body = CardBody;
DecoratedCard.Link = createWithBsPrefix('card-link', {
  Component: 'a'
});
DecoratedCard.Text = createWithBsPrefix('card-text', {
  Component: 'p'
});
DecoratedCard.Header = createWithBsPrefix('card-header');
DecoratedCard.Footer = createWithBsPrefix('card-footer');
DecoratedCard.ImgOverlay = createWithBsPrefix('card-img-overlay');
export default DecoratedCard;