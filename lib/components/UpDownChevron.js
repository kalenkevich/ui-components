"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UpDownChevronStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _Utils = require("../services/Utils");

var UpDownChevronStyle = function UpDownChevronStyle(theme) {
  return {
    root: {
      cursor: 'pointer',
      transition: 'transform linear 100ms',
      color: theme.defaultIconColor,
      '&.up': {
        transform: 'rotateX(180deg)'
      },
      '&.disabled': {
        cursor: 'default'
      }
    }
  };
};

exports.UpDownChevronStyle = UpDownChevronStyle;

var UpDownChevron = function UpDownChevron(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$up = props.up,
      up = _props$up === void 0 ? false : _props$up,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className, up ? 'up' : '', disabled ? 'disabled' : '']);
  return _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: 'chevron-up',
    className: rootClasses,
    onClick: onClick
  });
};

UpDownChevron.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  up: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(UpDownChevronStyle)(UpDownChevron);

exports["default"] = _default;