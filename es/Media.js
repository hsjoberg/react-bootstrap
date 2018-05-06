import _extends from "@babel/runtime/helpers/es6/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/es6/objectWithoutProperties";
import _inheritsLoose from "@babel/runtime/helpers/es6/inheritsLoose";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import elementType from 'prop-types-extra/lib/elementType';
import createWithBsPrefix from './utils/createWithBsPrefix';
import { createBootstrapComponent } from './ThemeProvider';
var propTypes = {
  /**
   * @default 'media'
   */
  bsPrefix: PropTypes.string.isRequired,
  as: elementType
};
var defaultProps = {
  as: 'div'
};

var Media =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Media, _React$Component);

  function Media() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Media.prototype;

  _proto.render = function render() {
    var _props = this.props,
        bsPrefix = _props.bsPrefix,
        className = _props.className,
        Component = _props.as,
        props = _objectWithoutProperties(_props, ["bsPrefix", "className", "as"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return Media;
}(React.Component);

Media.propTypes = propTypes;
Media.defaultProps = defaultProps;
var DecoratedMedia = createBootstrapComponent(Media, 'media');
DecoratedMedia.Body = createWithBsPrefix('media-body');
export default DecoratedMedia;