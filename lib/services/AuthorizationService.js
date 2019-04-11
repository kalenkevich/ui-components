"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _userFragment = _interopRequireDefault(require("../fragments/userFragment"));

var _BackendGraphQLConnector = _interopRequireDefault(require("./BackendGraphQLConnector"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        query SignOut {\n        signOut\n      }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        mutation SignIn($signInData: UserSignInInput!) {\n          signIn(signInData: $signInData) {\n            ...UserFragment\n          }\n        }\n        ", "\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        mutation SignUp($signUpData: UserSignUpInput!) {\n          signUp(signUpData: $signUpData) {\n            ...UserFragment\n          }\n        }\n        ", "\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        query Authorize {\n          authorize {\n            ...UserFragment\n          }\n        }\n        ", "\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var AuthorizationService =
/*#__PURE__*/
function () {
  function AuthorizationService(authUrl) {
    (0, _classCallCheck2["default"])(this, AuthorizationService);
    this.backendGraphQLConnector = (0, _BackendGraphQLConnector["default"])(authUrl);
  }

  (0, _createClass2["default"])(AuthorizationService, [{
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _ref, user;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.backendGraphQLConnector.query({
                  query: (0, _graphqlTag["default"])(_templateObject(), _userFragment["default"])
                });

              case 2:
                _ref = _context.sent;
                user = _ref.authorize;
                return _context.abrupt("return", user);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function authorize() {
        return _authorize.apply(this, arguments);
      }

      return authorize;
    }()
  }, {
    key: "signUp",
    value: function () {
      var _signUp = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(name, email, password) {
        var _ref2, user;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.backendGraphQLConnector.mutate({
                  variables: {
                    signUpData: {
                      name: name,
                      email: email,
                      password: password
                    }
                  },
                  mutation: (0, _graphqlTag["default"])(_templateObject2(), _userFragment["default"])
                });

              case 2:
                _ref2 = _context2.sent;
                user = _ref2.signUp;
                return _context2.abrupt("return", user);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function signUp(_x, _x2, _x3) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }, {
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(email, password) {
        var _ref3, user;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.backendGraphQLConnector.mutate({
                  variables: {
                    signInData: {
                      email: email,
                      password: password
                    }
                  },
                  mutation: (0, _graphqlTag["default"])(_templateObject3(), _userFragment["default"])
                });

              case 2:
                _ref3 = _context3.sent;
                user = _ref3.signIn;
                return _context3.abrupt("return", user);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function signIn(_x4, _x5) {
        return _signIn.apply(this, arguments);
      }

      return signIn;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        var _ref4, result;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.backendGraphQLConnector.query({
                  query: (0, _graphqlTag["default"])(_templateObject4())
                });

              case 2:
                _ref4 = _context4.sent;
                result = _ref4.signOut;
                return _context4.abrupt("return", result);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function signOut() {
        return _signOut.apply(this, arguments);
      }

      return signOut;
    }()
  }]);
  return AuthorizationService;
}();

var _default = function _default(authUrl) {
  return new AuthorizationService(authUrl);
};

exports["default"] = _default;