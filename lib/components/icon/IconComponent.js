"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = exports.getIconByType = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _IconType = require("./IconType");

var _Utils = require("../../services/Utils");

var getIconByType = function getIconByType(type, className, classes, width, height) {
  switch (type) {
    case _IconType.USER_ICON:
      return _react["default"].createElement("img", {
        style: {
          width: width,
          height: height
        },
        className: "".concat(className, " ").concat(classes.root),
        src: "https://via.placeholder.com/".concat(width, "/FFFF00/000000?Text=Avatar")
      });

    default:
      return null;
  }
};

exports.getIconByType = getIconByType;
var styles = {
  root: {
    objectFit: 'contain'
  }
};
exports.styles = styles;

var Icon = function Icon(_ref) {
  var src = _ref.src,
      type = _ref.type,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      classes = _ref.classes,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 50 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 50 : _ref$height;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      imageLoadFail = _useState2[0],
      setImageLoadFail = _useState2[1];

  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);

  if (!src || imageLoadFail) {
    return getIconByType(type, className, classes, width, height);
  }

  return _react["default"].createElement("img", {
    src: src,
    style: {
      width: width,
      height: height
    },
    className: rootClasses,
    onError: function onError() {
      return setImageLoadFail(true);
    }
  });
};

Icon.propTypes = {
  src: _propTypes["default"].string,
  type: _propTypes["default"].string,
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number
};

var _default = (0, _reactJss["default"])(styles)(Icon);

exports["default"] = _default;