"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../../services/Utils");

var _label = _interopRequireDefault(require("../label"));

var _TabStyle = _interopRequireDefault(require("./TabStyle"));

var TabComponent = function TabComponent(props) {
  var classes = props.classes,
      label = props.label,
      value = props.value,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$marked = props.marked,
      marked = _props$marked === void 0 ? false : _props$marked,
      onSelect = props.onSelect,
      children = props.children,
      className = props.className;
  var classNames = (0, _Utils.getClassName)([classes.root, disabled ? 'disabled' : '', selected ? 'selected' : '', className]);
  return _react["default"].createElement("div", {
    className: classNames,
    onClick: function onClick() {
      if (!disabled) {
        onSelect(value);
      }
    }
  }, marked ? _react["default"].createElement("div", {
    className: classes.mark
  }) : null, _react["default"].createElement(_label["default"], {
    value: label
  }), selected ? _react["default"].createElement("div", {
    className: classes.children
  }, children) : null);
};

TabComponent.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  disabled: _propTypes["default"].bool,
  selected: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func,
  value: _propTypes["default"].any,
  label: _propTypes["default"].string,
  marked: _propTypes["default"].bool,
  children: _propTypes["default"].node
};

var _default = (0, _reactJss["default"])(_TabStyle["default"])(TabComponent);

exports["default"] = _default;