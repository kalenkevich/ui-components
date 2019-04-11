"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MobileApp = exports.MobileConsumer = exports.MobileProvider = exports.getMobileState = exports.getWindowDimension = exports.MOBILE_RESOLUTION_WIDTH = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var MobileContext = _react["default"].createContext(null);

var MOBILE_RESOLUTION_WIDTH = 1024;
exports.MOBILE_RESOLUTION_WIDTH = MOBILE_RESOLUTION_WIDTH;

var getWindowDimension = function getWindowDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

exports.getWindowDimension = getWindowDimension;

var getMobileState = function getMobileState(_ref) {
  var width = _ref.width;
  return width <= MOBILE_RESOLUTION_WIDTH;
};

exports.getMobileState = getMobileState;
var MobileProvider = MobileContext.Provider;
exports.MobileProvider = MobileProvider;
var MobileConsumer = MobileContext.Consumer;
exports.MobileConsumer = MobileConsumer;

var MobileApp = function MobileApp(_ref2) {
  var children = _ref2.children;

  var _useState = (0, _react.useState)(getWindowDimension()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      windowDimension = _useState2[0],
      setWindowDimension = _useState2[1];

  (0, _react.useEffect)(function () {
    window.onresize = function () {
      return setWindowDimension(getWindowDimension());
    };
  }, []);
  return _react["default"].createElement(MobileProvider, {
    value: (0, _objectSpread2["default"])({
      isMobile: getMobileState(windowDimension)
    }, windowDimension)
  }, children);
};

exports.MobileApp = MobileApp;
MobileApp.propTypes = {
  children: _propTypes["default"].node
};
var _default = MobileContext;
exports["default"] = _default;