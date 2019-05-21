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

var _Utils = require("../../services/Utils");

var _MenuItemStyle = _interopRequireDefault(require("./MenuItemStyle"));

var _UpDownChevron = _interopRequireDefault(require("../UpDownChevron"));

var MenuItemComponent = function MenuItemComponent(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      _props$onClick = props.onClick,
      _onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      children = props.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isHovered = _useState2[0],
      setHoveredState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isFocus = _useState4[0],
      setFocusState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isExpanded = _useState6[0],
      setExpandedState = _useState6[1];

  var rootClasses = (0, _Utils.getClassName)([classes.root, className, isFocus ? 'focus' : '', isHovered ? 'hover' : '', children ? 'withChildren' : '', isExpanded ? 'expanded' : '']);
  var labelClasses = (0, _Utils.getClassName)([classes.label]);

  if (children) {
    return _react["default"].createElement("li", {
      className: rootClasses
    }, _react["default"].createElement("a", {
      className: labelClasses,
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        setExpandedState(!isExpanded);
        setFocusState(false);
      },
      onFocus: function onFocus() {
        setFocusState(true);
      },
      onBlur: function onBlur() {
        setFocusState(false);
      },
      onMouseEnter: function onMouseEnter() {
        return setHoveredState(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setHoveredState(false);
      }
    }, label, _react["default"].createElement(_UpDownChevron["default"], {
      up: !isExpanded,
      onClick: function onClick() {
        return setExpandedState(!isExpanded);
      }
    })), isExpanded ? _react["default"].createElement("ul", {
      className: classes.children
    }, children) : null);
  }

  return _react["default"].createElement("li", {
    className: rootClasses
  }, _react["default"].createElement("a", {
    className: labelClasses,
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick();
    },
    onFocus: function onFocus() {
      setFocusState(true);
    },
    onBlur: function onBlur() {
      setFocusState(false);
    },
    onMouseEnter: function onMouseEnter() {
      return setHoveredState(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHoveredState(false);
    }
  }, label));
};

MenuItemComponent.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  label: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_MenuItemStyle["default"])(MenuItemComponent);

exports["default"] = _default;