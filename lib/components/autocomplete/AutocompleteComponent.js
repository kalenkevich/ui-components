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

var _input = _interopRequireDefault(require("../input"));

var _SelectComponentStyle = _interopRequireDefault(require("../select/SelectComponentStyle"));

var Autocomplete = function Autocomplete(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      classes = props.classes,
      options = props.options,
      value = props.value,
      _onChange = props.onChange,
      _onEnter = props.onEnter,
      onSelect = props.onSelect,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$success = props.success,
      success = _props$success === void 0 ? false : _props$success;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpenState = _useState2[1];

  return _react["default"].createElement("div", {
    className: "".concat(classes.root, " ").concat(className)
  }, _react["default"].createElement(_input["default"], {
    className: classes.input,
    label: label,
    error: error,
    success: success,
    value: value,
    onBlur: function onBlur() {
      return setOpenState(true);
    },
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    onEnter: function onEnter() {
      return _onEnter(value);
    }
  }), isOpen && options.length ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: classes.backdrop,
    onClick: function onClick() {
      return setOpenState(false);
    }
  }), _react["default"].createElement("div", {
    className: classes.options
  }, (options || []).map(function (option) {
    return _react["default"].createElement("div", {
      onClick: function onClick() {
        onSelect(option);
        setOpenState(false);
      },
      className: classes.option,
      key: option.value
    }, option.label);
  }))) : null);
};

Autocomplete.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  options: _propTypes["default"].array,
  value: _propTypes["default"].string,
  onEnter: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  label: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  success: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(_SelectComponentStyle["default"])(Autocomplete);

exports["default"] = _default;