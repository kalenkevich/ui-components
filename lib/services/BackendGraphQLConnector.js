"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _unfetch = _interopRequireDefault(require("unfetch"));

var _apolloBoost = _interopRequireDefault(require("apollo-boost"));

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _NotificationService = _interopRequireDefault(require("./NotificationService"));

var defaultClientConfig = {
  cache: new _apolloCacheInmemory.InMemoryCache({
    addTypename: true
  }),
  credentials: 'include',
  fetch: _unfetch["default"]
};

var ApolloClientWrapper =
/*#__PURE__*/
function () {
  function ApolloClientWrapper(uri) {
    (0, _classCallCheck2["default"])(this, ApolloClientWrapper);
    this.setupNewClient((0, _objectSpread2["default"])({
      uri: uri
    }, defaultClientConfig));
  }

  (0, _createClass2["default"])(ApolloClientWrapper, [{
    key: "setupNewClient",
    value: function setupNewClient(clientConfig) {
      this.apolloClient = new _apolloBoost["default"](clientConfig);
    }
  }, {
    key: "setHeaders",
    value: function setHeaders(headers) {
      this.setupNewClient((0, _objectSpread2["default"])({}, defaultClientConfig, {
        headers: headers
      }));
    }
  }, {
    key: "mutate",
    value: function () {
      var _mutate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _this$apolloClient,
            _ref,
            data,
            _e$graphQLErrors,
            error,
            _args = arguments;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (_this$apolloClient = this.apolloClient).mutate.apply(_this$apolloClient, _args);

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                return _context.abrupt("return", data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _e$graphQLErrors = (0, _slicedToArray2["default"])(_context.t0.graphQLErrors, 1), error = _e$graphQLErrors[0];

                if (!error) {
                  _context.next = 16;
                  break;
                }

                _NotificationService["default"].showErrorNotification(error.message);

                throw error;

              case 16:
                throw _context.t0;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function mutate() {
        return _mutate.apply(this, arguments);
      }

      return mutate;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var _this$apolloClient2,
            result,
            _e$graphQLErrors2,
            error,
            _args2 = arguments;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (_this$apolloClient2 = this.apolloClient).query.apply(_this$apolloClient2, _args2);

              case 3:
                result = _context2.sent;
                return _context2.abrupt("return", result.data);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                _e$graphQLErrors2 = (0, _slicedToArray2["default"])(_context2.t0.graphQLErrors, 1), error = _e$graphQLErrors2[0];

                if (!error) {
                  _context2.next = 15;
                  break;
                }

                _NotificationService["default"].showErrorNotification(error.message);

                throw error;

              case 15:
                throw _context2.t0;

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function query() {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "watchQuery",
    value: function () {
      var _watchQuery = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var _this$apolloClient3,
            _ref2,
            data,
            _e$graphQLErrors3,
            error,
            _args3 = arguments;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return (_this$apolloClient3 = this.apolloClient).watchQuery.apply(_this$apolloClient3, _args3);

              case 3:
                _ref2 = _context3.sent;
                data = _ref2.data;
                return _context3.abrupt("return", data);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                _e$graphQLErrors3 = (0, _slicedToArray2["default"])(_context3.t0.graphQLErrors, 1), error = _e$graphQLErrors3[0];

                if (!error) {
                  _context3.next = 16;
                  break;
                }

                _NotificationService["default"].showErrorNotification(error.message);

                throw error;

              case 16:
                throw _context3.t0;

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function watchQuery() {
        return _watchQuery.apply(this, arguments);
      }

      return watchQuery;
    }()
  }]);
  return ApolloClientWrapper;
}();

var _default = function _default(uri) {
  return new ApolloClientWrapper(uri);
};

exports["default"] = _default;