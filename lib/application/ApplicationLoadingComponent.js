"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ApplicationLoadingStyles = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _HeaderComponentStyle = _interopRequireDefault(require("../components/header/HeaderComponentStyle"));

var ApplicationLoadingStyles = function ApplicationLoadingStyles(theme) {
  var headerStyle = (0, _HeaderComponentStyle["default"])(theme);
  return {
    root: {
      width: '100%',
      height: '100%'
    },
    header: (0, _objectSpread2["default"])({}, headerStyle.headerContainer, {
      border: 'none'
    }, theme.loading),
    content: (0, _objectSpread2["default"])({}, theme.loading, {
      borderRadius: theme.borderRadius,
      width: '100%',
      height: '100%'
    })
  };
};

exports.ApplicationLoadingStyles = ApplicationLoadingStyles;

var ApplicationLoadingComponent = function ApplicationLoadingComponent(_ref) {
  var classes = _ref.classes;
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement("div", {
    className: classes.header
  }), _react["default"].createElement("div", {
    className: classes.content
  }));
};

ApplicationLoadingComponent.propTypes = {
  classes: _propTypes["default"].object
};

var _default = (0, _reactJss["default"])(ApplicationLoadingStyles)(ApplicationLoadingComponent);

exports["default"] = _default;