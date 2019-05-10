"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _MobileContext = _interopRequireDefault(require("../../context/MobileContext"));

var _ButtonStyle = _interopRequireDefault(require("./ButtonStyle"));

var ButtonComponent = function ButtonComponent(props) {
  var classes = props.classes,
      _props$type = props.type,
      type = _props$type === void 0 ? 'secondary' : _props$type,
      children = props.children,
      _props$onClick = props.onClick,
      _onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled;

  var _useContext = (0, _react.useContext)(_MobileContext["default"]),
      isMobile = _useContext.isMobile;

  return _react["default"].createElement("button", {
    className: "".concat(classes.root, " ").concat(className, " ").concat(type, " ").concat(isMobile ? 'mobile' : ''),
    disabled: disabled,
    onClick: function onClick(e) {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      _onClick();
    },
    onKeyPress: function onKeyPress(e) {
      e.stopPropagation();

      if (e.key === 'Enter') {
        _onClick();
      }
    }
  }, children);
};

ButtonComponent.propTypes = {
  classes: _propTypes["default"].object,
  type: _propTypes["default"].oneOf(['primary', 'secondary', 'secondary', 'success', 'info', 'warning', 'danger']),
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].node.isRequired,
  disabled: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(_ButtonStyle["default"])(ButtonComponent);

exports["default"] = _default;