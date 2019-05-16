"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.formatter = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../../services/Utils");

var _avatar = _interopRequireDefault(require("../avatar"));

var _input = _interopRequireDefault(require("../input"));

var _card = _interopRequireDefault(require("../card"));

var _button = _interopRequireDefault(require("../button"));

var _ChatStyles = _interopRequireDefault(require("./ChatStyles"));

var formatter = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
});
exports.formatter = formatter;

var Chat = function Chat(props) {
  var classes = props.classes,
      className = props.className,
      messages = props.messages,
      onSendMessage = props.onSendMessage;
  var chatRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      newMessage = _useState2[0],
      setNewMessage = _useState2[1];

  var rootClasses = (0, _Utils.getClassName)([classes.chatWrapper, className]);

  var scrollToBottom = function scrollToBottom() {
    if (chatRef) {
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    }
  };

  var onSend = function onSend() {
    if (newMessage) {
      onSendMessage(newMessage);
      setNewMessage('');
      scrollToBottom();
    }
  };

  (0, _react.useEffect)(function () {
    return scrollToBottom();
  }, [messages]);
  return _react["default"].createElement(_card["default"], {
    className: rootClasses,
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') {
        onSend();
      }
    }
  }, _react["default"].createElement("div", {
    className: classes.chat,
    ref: chatRef
  }, (messages || []).map(function (message) {
    return _react["default"].createElement("div", {
      className: classes.chatMessageWrapper,
      key: message.id
    }, _react["default"].createElement("div", {
      className: classes.chatMessageUserInfo
    }, _react["default"].createElement(_avatar["default"], {
      className: classes.chatMessageUserInfoAvatar,
      size: 'xs',
      url: message.sender.avatarUrl
    }), _react["default"].createElement("div", {
      className: classes.messageSenderName
    }, message.sender.name)), _react["default"].createElement("div", {
      className: classes.messageContent
    }, message.content), _react["default"].createElement("div", {
      className: classes.messageDate
    }, formatter.format(message.date)));
  })), _react["default"].createElement("div", {
    className: classes.actionPanel
  }, _react["default"].createElement(_input["default"], {
    value: newMessage,
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
    onChange: function onChange(e) {
      return setNewMessage(e.target.value);
    }
  }), _react["default"].createElement(_button["default"], {
    className: classes.actionPanelButton,
    onClick: onSend
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")));
};

Chat.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  messages: _propTypes["default"].array,
  onSendMessage: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_ChatStyles["default"])(Chat);

exports["default"] = _default;