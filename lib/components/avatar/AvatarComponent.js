"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _AvatarStyle = _interopRequireDefault(require("./AvatarStyle"));

var _icon = _interopRequireDefault(require("../icon"));

var _Utils = require("../../services/Utils");

var Avatar = function Avatar(props) {
  var className = props.className,
      classes = props.classes,
      url = props.url,
      rate = props.rate,
      _props$size = props.size,
      size = _props$size === void 0 ? 'md' : _props$size;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var imgClassNames = (0, _Utils.getClassName)([classes.image, size]);
  var rateClassNames = (0, _Utils.getClassName)([classes.rate, size]);
  var rateBackgroundClassNames = (0, _Utils.getClassName)([classes.rateBackground, size]);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement(_icon["default"], {
    className: imgClassNames,
    src: url
  }), rate ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: rateBackgroundClassNames
  }), _react["default"].createElement("div", {
    className: rateClassNames
  }, rate)) : null);
};

Avatar.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  url: _propTypes["default"].string,
  rate: _propTypes["default"].number,
  size: _propTypes["default"].oneOf(['lg', 'md', 'sm'])
};

var _default = (0, _reactJss["default"])(_AvatarStyle["default"])(Avatar);

exports["default"] = _default;