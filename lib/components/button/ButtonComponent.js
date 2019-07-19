"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _MobileContext = _interopRequireDefault(require("../../context/MobileContext"));

var _ButtonStyle = _interopRequireDefault(require("./ButtonStyle"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _spinner = _interopRequireDefault(require("../spinner"));

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
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? '' : _props$tooltip,
      _props$spin = props.spin,
      spin = _props$spin === void 0 ? false : _props$spin;

  var _useContext = (0, _react.useContext)(_MobileContext["default"]),
      isMobile = _useContext.isMobile;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isHovered = _useState2[0],
      setHoveredState = _useState2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_tooltip["default"], {
    label: tooltip,
    show: isHovered
  }), _react["default"].createElement("button", {
    className: "".concat(classes.root, " ").concat(className, " ").concat(type, " ").concat(isMobile ? 'mobile' : ''),
    disabled: disabled,
    onClick: function onClick(e) {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      _onClick();
    },
    onMouseEnter: function onMouseEnter() {
      return setHoveredState(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHoveredState(false);
    },
    onKeyPress: function onKeyPress(e) {
      e.stopPropagation();

      if (e.key === 'Enter') {
        _onClick();
      }
    }
  }, children, spin && _react["default"].createElement(_spinner["default"], {
    className: classes.spinner,
    type: type,
    size: "sm"
  })));
};

ButtonComponent.propTypes = {
  classes: _propTypes["default"].object,
  type: _propTypes["default"].oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link', 'transparent']),
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].node.isRequired,
  disabled: _propTypes["default"].bool,
  tooltip: _propTypes["default"].string,
  spin: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(_ButtonStyle["default"])(ButtonComponent);

exports["default"] = _default;