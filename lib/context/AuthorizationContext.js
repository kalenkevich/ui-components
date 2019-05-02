"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Authorization = exports.AuthorizationConsumer = exports.AuthorizationProvider = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _AuthorizationService = require("../services/AuthorizationService");

var _ApplicationLoadingComponent = _interopRequireDefault(require("../application/ApplicationLoadingComponent"));

var AuthorizationContext = _react["default"].createContext({
  user: null,
  signIn: function signIn() {},
  signUp: function signUp() {},
  signOut: function signOut() {}
});

var AuthorizationProvider = AuthorizationContext.Provider;
exports.AuthorizationProvider = AuthorizationProvider;
var AuthorizationConsumer = AuthorizationContext.Consumer;
exports.AuthorizationConsumer = AuthorizationConsumer;

var AuthorizationComponent = function AuthorizationComponent(_ref) {
  var children = _ref.children,
      history = _ref.history;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      authorizedUser = _useState2[0],
      setAuthorizedUser = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      authorizationProcess = _useState4[0],
      setAuthorizationProcessState = _useState4[1];

  var authorize =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var user, error;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = null;
              error = null;
              _context.prev = 2;
              _context.next = 5;
              return _AuthorizationService.AuthorizationService.authorize();

            case 5:
              user = _context.sent;
              setAuthorizedUser(user);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              error = _context.t0;

            case 12:
              _context.prev = 12;
              setAuthorizationProcessState(false);
              return _context.finish(12);

            case 15:
              return _context.abrupt("return", [user, error]);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9, 12, 15]]);
    }));

    return function authorize() {
      return _ref2.apply(this, arguments);
    };
  }();

  var signIn =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var user,
          error,
          _args2 = arguments;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              user = null;
              error = null;
              _context2.prev = 2;
              _context2.next = 5;
              return _AuthorizationService.AuthorizationService.signIn.apply(_AuthorizationService.AuthorizationService, _args2);

            case 5:
              user = _context2.sent;
              setAuthorizedUser(user);
              history.push('');
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);
              error = _context2.t0;

            case 13:
              _context2.prev = 13;
              setAuthorizationProcessState(false);
              return _context2.finish(13);

            case 16:
              return _context2.abrupt("return", [user, error]);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 10, 13, 16]]);
    }));

    return function signIn() {
      return _ref3.apply(this, arguments);
    };
  }();

  var signUp =
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var user,
          error,
          _args3 = arguments;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              user = null;
              error = null;
              _context3.prev = 2;
              _context3.next = 5;
              return _AuthorizationService.AuthorizationService.signUp.apply(_AuthorizationService.AuthorizationService, _args3);

            case 5:
              user = _context3.sent;
              setAuthorizedUser(user);
              history.push('');
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](2);
              error = _context3.t0;

            case 13:
              _context3.prev = 13;
              setAuthorizationProcessState(false);
              return _context3.finish(13);

            case 16:
              return _context3.abrupt("return", [user, error]);

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 10, 13, 16]]);
    }));

    return function signUp() {
      return _ref4.apply(this, arguments);
    };
  }();

  var signOut =
  /*#__PURE__*/
  function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      var user,
          error,
          _args4 = arguments;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              user = authorizedUser;
              error = null;
              _context4.prev = 2;
              _context4.next = 5;
              return _AuthorizationService.AuthorizationService.signOut.apply(_AuthorizationService.AuthorizationService, _args4);

            case 5:
              setAuthorizedUser(null);
              user = null;
              history.push('');
              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](2);
              error = _context4.t0;

            case 13:
              _context4.prev = 13;
              setAuthorizationProcessState(false);
              return _context4.finish(13);

            case 16:
              return _context4.abrupt("return", [user, error]);

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 10, 13, 16]]);
    }));

    return function signOut() {
      return _ref5.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    authorize();
  }, []);
  return authorizationProcess ? _react["default"].createElement(_ApplicationLoadingComponent["default"], null) : _react["default"].createElement(AuthorizationProvider, {
    value: {
      user: authorizedUser,
      signIn: signIn,
      signUp: signUp,
      signOut: signOut
    }
  }, children);
};

AuthorizationComponent.propTypes = {
  children: _propTypes["default"].node,
  history: _propTypes["default"].object
};
var Authorization = (0, _reactRouterDom.withRouter)(AuthorizationComponent);
exports.Authorization = Authorization;
var _default = AuthorizationContext;
exports["default"] = _default;