"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NodeStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../../../services/Utils");

var NodeStyle = function NodeStyle(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '80px',
      margin: '0 10px'
    },
    circle: {
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      border: '1px solid',
      '&.success.current': {
        borderColor: theme.brandSuccessDarkColor,
        backgroundColor: theme.brandSuccessLightColor
      },
      '&.error.current': {
        borderColor: theme.brandErrorDarkColor,
        backgroundColor: theme.brandErrorLightColor
      },
      '&.success.past': {
        borderColor: theme.brandDarkGrayColor,
        backgroundColor: theme.brandDarkGrayColor
      },
      '&.error.past': {
        borderColor: theme.brandDarkGrayColor,
        backgroundColor: theme.brandDarkGrayColor
      },
      '&.success.future': {
        borderColor: theme.brandLightGrayColor,
        backgroundColor: theme.brandLightGrayColor
      },
      '&.error.future': {
        borderColor: theme.brandLightGrayColor,
        backgroundColor: theme.brandLightGrayColor
      }
    },
    label: {
      fontSize: '12px',
      textAlign: 'center',
      '&.success.current': {
        color: theme.brandSuccessLightColor
      },
      '&.error.current': {
        color: theme.brandErrorLightColor
      },
      '&.success.past': {
        color: theme.brandDarkGrayColor
      },
      '&.error.past': {
        color: theme.brandDarkGrayColor
      },
      '&.success.future': {
        color: theme.brandLightGrayColor
      },
      '&.error.future': {
        color: theme.brandLightGrayColor
      }
    }
  };
};

exports.NodeStyle = NodeStyle;

var Node = function Node(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      _props$type = props.type,
      type = _props$type === void 0 ? '' : _props$type,
      _props$action = props.action,
      action = _props$action === void 0 ? '' : _props$action,
      _props$current = props.current,
      current = _props$current === void 0 ? false : _props$current;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var circleClasses = (0, _Utils.getClassName)([classes.circle, type, action, current ? 'current' : '']);
  var labelClasses = (0, _Utils.getClassName)([classes.label, type, action, current ? 'current' : '']);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement("div", {
    className: circleClasses
  }), _react["default"].createElement("div", {
    className: labelClasses
  }, label));
};

Node.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  label: _propTypes["default"].string,
  current: _propTypes["default"].bool,
  action: _propTypes["default"].oneOf(['active', 'past', 'future']),
  type: _propTypes["default"].oneOf(['success', 'error'])
};

var _default = (0, _reactJss["default"])(NodeStyle)(Node);

exports["default"] = _default;