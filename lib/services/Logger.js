"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Logger =
/*#__PURE__*/
function () {
  function Logger(env, settings) {
    (0, _classCallCheck2["default"])(this, Logger);
    this.settings = settings;
    this.isProduction = env === 'production';
  }

  (0, _createClass2["default"])(Logger, [{
    key: "info",
    value: function info(message) {
      if (!this.isProduction) {
        // eslint-disable-next-line no-console
        console.log(message);
      }
    }
  }, {
    key: "warn",
    value: function warn(message) {
      if (!this.isProduction) {
        // eslint-disable-next-line no-console
        console.warn(message);
      }
    }
  }, {
    key: "error",
    value: function error(message) {
      if (!this.isProduction) {
        // eslint-disable-next-line no-console
        console.error(message);
      }
    }
  }]);
  return Logger;
}();

var _default = function _default(env, settings) {
  return new Logger(env, settings);
};

exports["default"] = _default;