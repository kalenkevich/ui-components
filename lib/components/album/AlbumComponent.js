"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../../services/Utils");

var _ImageCardComponent = _interopRequireDefault(require("./ImageCardComponent"));

var _AlbumStyle = _interopRequireDefault(require("./AlbumStyle"));

var Album = function Album(props) {
  var classes = props.classes,
      className = props.className,
      images = props.images;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedImage = _useState2[0],
      setSelectedImage = _useState2[1];

  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);

  var onImageClick = function onImageClick(image) {};

  return _react["default"].createElement("div", {
    className: rootClasses
  }, (images || []).map(function (image) {
    return _react["default"].createElement(_ImageCardComponent["default"], {
      key: image.id,
      image: image,
      onClick: function onClick() {
        return onImageClick(image);
      }
    });
  }));
};

Album.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  images: _propTypes["default"].array
};

var _default = (0, _reactJss["default"])(_AlbumStyle["default"])(Album);

exports["default"] = _default;