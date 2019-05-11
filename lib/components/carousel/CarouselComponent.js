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

var _CarouselStyle = _interopRequireDefault(require("./CarouselStyle"));

var _SlideComponent = _interopRequireDefault(require("./SlideComponent"));

var _Utils = require("../../services/Utils");

var Carousel = function Carousel(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$slides = props.slides,
      slides = _props$slides === void 0 ? [] : _props$slides,
      _props$initialSlideIn = props.initialSlideIndex,
      initialSlideIndex = _props$initialSlideIn === void 0 ? 0 : _props$initialSlideIn,
      _props$onSlideClick = props.onSlideClick,
      onSlideClick = _props$onSlideClick === void 0 ? function () {} : _props$onSlideClick;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);

  var _useState = (0, _react.useState)(initialSlideIndex),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentSlideIndex = _useState2[0],
      setCurrentSlideIndex = _useState2[1];

  var onPrevClick = function onPrevClick() {
    if (currentSlideIndex - 1 < 0) {
      setCurrentSlideIndex(slides.length - 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  var onNextClick = function onNextClick() {
    if (currentSlideIndex + 1 === slides.length) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  var slide = slides[currentSlideIndex];
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement(_SlideComponent["default"], {
    slide: slide,
    onClick: function onClick() {
      return onSlideClick(slide);
    },
    onPrevClick: onPrevClick,
    onNextClick: onNextClick,
    currentSlideIndex: currentSlideIndex,
    totalLength: slides.length,
    onSlideChange: function onSlideChange(newIndex) {
      return setCurrentSlideIndex(newIndex);
    }
  }));
};

Carousel.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  slides: _propTypes["default"].array,
  initialSlideIndex: _propTypes["default"].number,
  slidesToShow: _propTypes["default"].number,
  onSlideClick: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_CarouselStyle["default"])(Carousel);

exports["default"] = _default;