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

var _button = _interopRequireDefault(require("../button"));

var _Backdrop = _interopRequireDefault(require("../Backdrop"));

var _card = _interopRequireDefault(require("../card"));

var _DatePickerPopupComponent = _interopRequireDefault(require("./DatePickerPopupComponent"));

var _DatePickerStyle = _interopRequireDefault(require("./DatePickerStyle"));

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
      options = props.options,
      tooltip = props.tooltip;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpened = _useState2[0],
      setOpenState = _useState2[1];

  var _useState3 = (0, _react.useState)(date),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      internalDate = _useState4[0],
      setDate = _useState4[1];

  var formattedDate = (0, _Utils.getFormattedDate)(date);

  var onApplyClick = function onApplyClick() {
    onChange(internalDate);
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
      if (disabled) {
        return;
      }

      setOpenState(true);
    }
  }, _react["default"].createElement(_input["default"], {
    label: label,
    success: success,
    error: error,
    disabled: disabled,
    placeholder: placeholder,
    value: formattedDate,
    tooltip: tooltip,
    onChange: function onChange() {}
  }), isOpened ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Backdrop["default"], {
    onClick: onBackdropClick
  }), _react["default"].createElement(_card["default"], {
    className: classes.popup
  }, _react["default"].createElement(_DatePickerPopupComponent["default"], {
    date: internalDate,
    classes: classes,
    options: options,
    onChange: function onChange(newDate) {
      return setDate(newDate);
    }
  }), _react["default"].createElement("div", {
    className: classes.actionPanel
  }, _react["default"].createElement(_button["default"], {
    className: classes.actionPanelButton,
    type: "secondary",
    onClick: onCloseClick
  }, "Cancel"), _react["default"].createElement(_button["default"], {
    type: 'primary',
    className: classes.actionPanelButton,
    onClick: onApplyClick
  }, "Apply")))) : null);
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
  options: _propTypes["default"].object,
  tooltip: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_DatePickerStyle["default"])(DatePicker);

exports["default"] = _default;