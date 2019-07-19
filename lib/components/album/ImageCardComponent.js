"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../../services/Utils");

var _ImageCardStyle = _interopRequireDefault(require("./ImageCardStyle"));

var ImageCard = function ImageCard(props) {
  var classes = props.classes,
      className = props.className,
      image = props.image,
      onClick = props.onClick;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  return _react["default"].createElement("img", {
    className: rootClasses,
    src: image.url,
    onClick: onClick,
    style: {
      width: image.size.width,
      height: image.size.height
    }
  });
};

ImageCard.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  image: _propTypes["default"].object,
  onClick: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_ImageCardStyle["default"])(ImageCard);

exports["default"] = _default;