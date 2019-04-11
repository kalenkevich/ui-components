"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.style = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _MobileContext = _interopRequireDefault(require("../../context/MobileContext"));

var style = function style(theme) {
  return {
    root: {
      minHeight: '32px',
      border: "1px solid ".concat(theme.brandPrimaryColor),
      borderRadius: theme.borderRadius,
      cursor: 'pointer',
      transition: 'background-color linear 100ms',
      outline: 'none',
      minWidth: '80px',
      fontSize: '14px',
      '&.mobile': {
        minWidth: 'initial'
      },
      '&.primary': {
        backgroundColor: 'transparent'
      },
      '&.primary:hover': {
        backgroundColor: theme.brandPrimaryColor
      },
      '&.secondary': {
        backgroundColor: 'transparent'
      },
      '&.secondary:hover': {
        backgroundColor: 'transparent'
      },
      '&.danger': {
        backgroundColor: '#ef5350'
      },
      '&.danger:hover': {
        backgroundColor: '#d32f2f'
      },
      '&.success': {
        backgroundColor: '#8bc34a'
      },
      '&.success:hover': {
        backgroundColor: '#689f38'
      },
      '&:disabled': {
        cursor: 'default',
        backgroundColor: theme.brandPrimaryColor
      },
      '&:disabled:hover': {
        cursor: 'default',
        backgroundColor: theme.brandPrimaryColor
      }
    }
  };
};

exports.style = style;

var ButtonComponent = function ButtonComponent(props) {
  var classes = props.classes,
      _props$type = props.type,
      type = _props$type === void 0 ? 'primary' : _props$type,
      children = props.children,
      onClick = props.onClick,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled;

  var _useContext = (0, _react.useContext)(_MobileContext["default"]),
      isMobile = _useContext.isMobile;

  return _react["default"].createElement("button", {
    className: "".concat(classes.root, " ").concat(className, " ").concat(type, " ").concat(isMobile ? 'mobile' : ''),
    disabled: disabled,
    onClick: onClick
  }, children);
};

ButtonComponent.propTypes = {
  classes: _propTypes["default"].object,
  type: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].node.isRequired,
  disabled: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(style)(ButtonComponent);

exports["default"] = _default;