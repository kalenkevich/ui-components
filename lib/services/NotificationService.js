"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NOTIFICATION_TYPES = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var NOTIFICATION_TYPES = {
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  SUCCESS: 'SUCCESS',
  INFO: 'INFO'
};
exports.NOTIFICATION_TYPES = NOTIFICATION_TYPES;

var NotificationService =
/*#__PURE__*/
function () {
  function NotificationService() {
    (0, _classCallCheck2["default"])(this, NotificationService);
  }

  (0, _createClass2["default"])(NotificationService, null, [{
    key: "showErrorNotification",
    value: function showErrorNotification(message) {
      return this.showNotification(message, NOTIFICATION_TYPES.ERROR);
    }
  }, {
    key: "showWargingNotification",
    value: function showWargingNotification(message) {
      return this.showNotification(message, NOTIFICATION_TYPES.WARNING);
    }
  }, {
    key: "showSuccessNotification",
    value: function showSuccessNotification(message) {
      return this.showNotification(message, NOTIFICATION_TYPES.SUCCESS);
    }
  }, {
    key: "showInfoNotification",
    value: function showInfoNotification(message) {
      return this.showNotification(message, NOTIFICATION_TYPES.INFO);
    }
  }, {
    key: "showNotification",
    value: function showNotification() {}
  }, {
    key: "hideNotification",
    value: function hideNotification() {}
  }]);
  return NotificationService;
}();

exports["default"] = NotificationService;