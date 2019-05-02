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

var _DateUtils = require("./DateUtils");

var _DatePickerPopupComponent = _interopRequireDefault(require("./DatePickerPopupComponent"));

var _DatePickerComponentStyle = _interopRequireDefault(require("./DatePickerComponentStyle"));

var _Utils = require("../../services/Utils");

var DatePicker = function DatePicker(props) {
  var className = props.className,
      date = props.date,
      onChange = props.onChange,
      classes = props.classes,
      error = props.error,
      success = props.success,
      label = props.label,
      disabled = props.disabled,
      placeholder = props.placeholder,
      options = props.options;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpened = _useState2[0],
      setOpenState = _useState2[1];

  var formattedDate = (0, _DateUtils.getFormattedDate)(date);

  var onApplyClick = function onApplyClick(newDate) {
    onChange(newDate);
    setOpenState(false);
  };

  var onCloseClick = function onCloseClick() {
    setOpenState(false);
  };

  var onBackdropClick = function onBackdropClick(e) {
    e.stopPropagation();
    setOpenState(false);
  };

  return _react["default"].createElement("div", {
    className: rootClasses,
    onClick: function onClick() {
      return setOpenState(true);
    }
  }, _react["default"].createElement(_input["default"], {
    label: label,
    success: success,
    error: error,
    disabled: disabled,
    placeholder: placeholder,
    value: formattedDate,
    onChange: function onChange() {}
  }), isOpened ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: classes.backdrop,
    onClick: onBackdropClick
  }), _react["default"].createElement(_DatePickerPopupComponent["default"], {
    date: date,
    classes: classes,
    options: options,
    onApply: onApplyClick,
    onClose: onCloseClick
  })) : null);
};

DatePicker.propTypes = {
  className: _propTypes["default"].string,
  date: _propTypes["default"].object,
  classes: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  error: _propTypes["default"].bool,
  success: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  options: _propTypes["default"].object
};

var _default = (0, _reactJss["default"])(_DatePickerComponentStyle["default"])(DatePicker);

exports["default"] = _default;