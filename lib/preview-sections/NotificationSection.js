"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _Section = require("./Section");

var _button = _interopRequireDefault(require("../components/button"));

var _NotificationContext = _interopRequireDefault(require("../context/NotificationContext"));

var _notification = require("../components/notification");

var ButtonSection = function ButtonSection() {
  var _useContext = (0, _react.useContext)(_NotificationContext["default"]),
      showNotification = _useContext.showNotification;

  var _useState = (0, _react.useState)(99),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      notificationCount = _useState2[0],
      setNotificationCount = _useState2[1];

  return _react["default"].createElement(_Section.Section, {
    title: 'Notification'
  }, _react["default"].createElement(_Section.SectionRow, {
    title: 'Notification bell'
  }, _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      if (notificationCount - 1 >= 0) {
        setNotificationCount(notificationCount - 1);
      }
    }
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: 'chevron-down'
  })), _react["default"].createElement(_notification.NotificationBell, {
    notificationCount: notificationCount
  }), _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      return setNotificationCount(notificationCount + 1);
    }
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: 'chevron-up'
  }))), _react["default"].createElement(_Section.SectionRow, {
    title: 'Notification types'
  }, _react["default"].createElement(_button["default"], {
    type: "success",
    onClick: function onClick() {
      showNotification({
        type: 'success',
        message: 'Success Notification Here!',
        position: 'tc'
      });
    }
  }, "Success notification"), _react["default"].createElement(_button["default"], {
    type: "info",
    onClick: function onClick() {
      showNotification({
        type: 'info',
        message: 'Info Notification Here!',
        position: 'tc'
      });
    }
  }, "Info notification"), _react["default"].createElement(_button["default"], {
    type: "warning",
    onClick: function onClick() {
      showNotification({
        type: 'warning',
        message: 'Warning Notification Here!',
        position: 'tc'
      });
    }
  }, "Warning notification"), _react["default"].createElement(_button["default"], {
    type: "danger",
    onClick: function onClick() {
      showNotification({
        type: 'error',
        message: 'Error Notification Here!',
        position: 'tc'
      });
    }
  }, "Error notification")), _react["default"].createElement(_Section.SectionRow, {
    title: 'Notification positions'
  }, _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      showNotification({
        type: 'info',
        message: 'Top Left Notification Here!',
        position: 'tl'
      });
    }
  }, "Top Left"), _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      showNotification({
        type: 'info',
        message: 'Top Center Notification Here!',
        position: 'tc'
      });
    }
  }, "Top Center"), _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      showNotification({
        type: 'info',
        message: 'Top Right Notification Here!',
        position: 'tr'
      });
    }
  }, "Top Right"), _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      showNotification({
        type: 'info',
        message: 'Center Left Notification Here!',
        position: 'cl'
      });
    }
  }, "Center Left"), _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      showNotification({
        type: 'info',
        message: 'Center Notification Here!',
        position: 'cc'
      });
    }
  }, "Center"), _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      showNotification({
        type: 'info',
        message: 'Center Right Notification Here!',
        position: 'cr'
      });
    }
  }, "Center Right"), _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      showNotification({
        type: 'info',
        message: 'Bottom Left Notification Here!',
        position: 'bl'
      });
    }
  }, "Bottom Left"), _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      showNotification({
        type: 'info',
        message: 'Bottom Center Notification Here!',
        position: 'bc'
      });
    }
  }, "Bottom Center"), _react["default"].createElement(_button["default"], {
    type: "secondary",
    onClick: function onClick() {
      showNotification({
        type: 'info',
        message: 'Bottom Rights Notification Here!',
        position: 'br'
      });
    }
  }, "Bottom Right")));
};

var _default = ButtonSection;
exports["default"] = _default;