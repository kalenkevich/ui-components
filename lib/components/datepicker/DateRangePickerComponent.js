"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _input = _interopRequireDefault(require("../input"));

var _button = _interopRequireDefault(require("../button"));

var _Backdrop = _interopRequireDefault(require("../Backdrop"));

var _card = _interopRequireDefault(require("../card"));

var _DateUtils = require("./DateUtils");

var _DatePickerPopupComponent = _interopRequireDefault(require("./DatePickerPopupComponent"));

var _DatePickerStyle = _interopRequireDefault(require("./DatePickerStyle"));

var _Utils = require("../../services/Utils");

var DatePicker = function DatePicker(props) {
  var className = props.className,
      classes = props.classes,
      error = props.error,
      success = props.success,
      label = props.label,
      disabled = props.disabled,
      placeholder = props.placeholder,
      options = props.options,
      tooltip = props.tooltip,
      onChange = props.onChange,
      startDate = props.startDate,
      endDate = props.endDate;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpened = _useState2[0],
      setOpenState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    startDate: startDate,
    endDate: endDate
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      internalDate = _useState4[0],
      setDate = _useState4[1];

  var formattedStartDate = (0, _DateUtils.getFormattedDate)(internalDate.startDate);
  var formattedEndDate = (0, _DateUtils.getFormattedDate)(internalDate.endDate);

  var onDateChangeClick = function onDateChangeClick(newDate, key) {
    setDate((0, _defineProperty2["default"])({
      startDate: startDate,
      endDate: endDate
    }, key, newDate));
  };

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

  var rangeDays = (0, _DateUtils.getDaysRange)(internalDate.startDate, internalDate.endDate);
  var resultOptions = (0, _objectSpread2["default"])({}, options, {
    dates: [].concat((0, _toConsumableArray2["default"])((options || {}).dates || []), (0, _toConsumableArray2["default"])(rangeDays))
  });
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
    value: "".concat(formattedStartDate, " - ").concat(formattedEndDate),
    tooltip: tooltip,
    onChange: function onChange() {}
  }), isOpened ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Backdrop["default"], {
    onClick: onBackdropClick
  }), _react["default"].createElement(_card["default"], {
    className: classes.popup
  }, _react["default"].createElement("div", {
    className: classes.popupWrapper
  }, _react["default"].createElement(_DatePickerPopupComponent["default"], {
    className: classes.leftPopup,
    date: internalDate.startDate,
    classes: classes,
    options: resultOptions,
    onChange: function onChange(newDate) {
      return onDateChangeClick(newDate, 'startDate');
    },
    onClose: onCloseClick
  }), _react["default"].createElement(_DatePickerPopupComponent["default"], {
    className: classes.rightPopup,
    date: internalDate.endDate,
    classes: classes,
    options: resultOptions,
    onChange: function onChange(newDate) {
      return onDateChangeClick(newDate, 'endDate');
    },
    onClose: onCloseClick
  })), _react["default"].createElement("div", {
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
  classes: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  error: _propTypes["default"].bool,
  success: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  options: _propTypes["default"].object,
  tooltip: _propTypes["default"].string,
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object
};

var _default = (0, _reactJss["default"])(_DatePickerStyle["default"])(DatePicker);

exports["default"] = _default;