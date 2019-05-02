"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NotificationApp = exports.NotificationConsumer = exports.NotificationProvider = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _notification = require("../components/notification");

var getId = function getId() {
  return Date.now();
};

var HIDE_ANIMATION_TIME = 1000;
var SHOW_ANIMATION_TIME = 5000;

var NotificationContext = _react["default"].createContext(null);

var NotificationProvider = NotificationContext.Provider;
exports.NotificationProvider = NotificationProvider;
var NotificationConsumer = NotificationContext.Consumer;
exports.NotificationConsumer = NotificationConsumer;

var NotificationApp =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(NotificationApp, _Component);

  function NotificationApp(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, NotificationApp);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NotificationApp).call(this, props));
    _this.state = {
      notifications: []
    };
    _this.showNotification = _this.showNotification.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(NotificationApp, [{
    key: "showNotification",
    value: function showNotification(notificationArgs) {
      var _this2 = this;

      var _notificationArgs$typ = notificationArgs.type,
          type = _notificationArgs$typ === void 0 ? 'info' : _notificationArgs$typ,
          message = notificationArgs.message,
          _notificationArgs$pos = notificationArgs.position,
          position = _notificationArgs$pos === void 0 ? 'tc' : _notificationArgs$pos,
          _notificationArgs$sho = notificationArgs.show,
          show = _notificationArgs$sho === void 0 ? SHOW_ANIMATION_TIME : _notificationArgs$sho;
      var newNotification = {
        id: getId(),
        position: position,
        type: type,
        message: message,
        hide: false
      };
      this.setNotifications([].concat((0, _toConsumableArray2["default"])(this.state.notifications), [newNotification]));
      setTimeout(function () {
        return _this2.hideNotification(newNotification);
      }, show);
    }
  }, {
    key: "hideNotification",
    value: function hideNotification(notification) {
      var _this3 = this;

      this.setNotifications((this.state.notifications || []).map(function (n) {
        if (n.id !== notification.id) {
          return n;
        }

        return (0, _objectSpread2["default"])({}, notification, {
          hide: true
        });
      }));
      setTimeout(function () {
        _this3.setNotifications((_this3.state.notifications || []).filter(function (_ref) {
          var id = _ref.id;
          return id !== notification.id;
        }));
      }, HIDE_ANIMATION_TIME);
    }
  }, {
    key: "setNotifications",
    value: function setNotifications(notifications) {
      this.setState({
        notifications: notifications
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react["default"].createElement(NotificationProvider, {
        value: {
          showNotification: this.showNotification
        }
      }, _react["default"].createElement("div", null, (this.state.notifications || []).map(function (notification) {
        return _react["default"].createElement(_notification.Notification, {
          key: notification.id,
          type: notification.type,
          position: notification.position,
          message: notification.message,
          hide: notification.hide,
          onClose: function onClose() {
            return _this4.hideNotification(notification);
          }
        });
      })), this.props.children);
    }
  }]);
  return NotificationApp;
}(_react.Component);

exports.NotificationApp = NotificationApp;
NotificationApp.propTypes = {
  children: _propTypes["default"].node
};
var _default = NotificationContext;
exports["default"] = _default;