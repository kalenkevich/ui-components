"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var ProtectedRoute = function ProtectedRoute(props) {
  var RouteComponent = props.component,
      canAccess = props.canAccess,
      _props$redirectTo = props.redirectTo,
      redirectTo = _props$redirectTo === void 0 ? '/sign-in' : _props$redirectTo,
      rest = (0, _objectWithoutProperties2["default"])(props, ["component", "canAccess", "redirectTo"]);
  return _react["default"].createElement(_reactRouterDom.Route, (0, _extends2["default"])({}, rest, {
    render: function render(prs) {
      if (canAccess) {
        return _react["default"].createElement(RouteComponent, prs);
      }

      return _react["default"].createElement(_reactRouterDom.Redirect, {
        to: redirectTo
      });
    }
  }));
};

ProtectedRoute.propTypes = {
  component: _propTypes["default"].func.isRequired,
  canAccess: _propTypes["default"].bool.isRequired,
  redirectTo: _propTypes["default"].string
};
var _default = ProtectedRoute;
exports["default"] = _default;