"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _LegendComponent = _interopRequireDefault(require("./LegendComponent"));

var _SlideStyle = _interopRequireDefault(require("./SlideStyle"));

var _Utils = require("../../services/Utils");

var Slide = function Slide(props) {
  var classes = props.classes,
      className = props.className,
      slide = props.slide,
      onClick = props.onClick,
      onPrevClick = props.onPrevClick,
      onNextClick = props.onNextClick,
      currentSlideIndex = props.currentSlideIndex,
      totalLength = props.totalLength,
      onSlideChange = props.onSlideChange;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var imageStyle = {
    backgroundImage: "url(".concat(slide.imageUrl, ")")
  };
  return _react["default"].createElement("div", {
    className: rootClasses,
    style: imageStyle,
    onClick: onClick
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: classes.prevButton,
    icon: "chevron-left",
    onClick: onPrevClick,
    tabIndex: "0",
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') {
        onPrevClick();
      }
    }
  }), _react["default"].createElement("div", {
    className: classes.titleWrapper
  }, _react["default"].createElement("div", {
    className: classes.title
  }, slide.title), _react["default"].createElement("div", {
    className: classes.description
  }, slide.description), _react["default"].createElement(_LegendComponent["default"], {
    currentSlideIndex: currentSlideIndex,
    totalLength: totalLength,
    onChange: onSlideChange
  })), _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: classes.nextButton,
    icon: "chevron-right",
    onClick: onNextClick,
    tabIndex: "0",
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') {
        onNextClick();
      }
    }
  }));
};

Slide.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  slide: _propTypes["default"].object,
  onClick: _propTypes["default"].func,
  onNextClick: _propTypes["default"].func,
  onPrevClick: _propTypes["default"].func,
  currentSlideIndex: _propTypes["default"].number,
  totalLength: _propTypes["default"].number,
  onSlideChange: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_SlideStyle["default"])(Slide);

exports["default"] = _default;