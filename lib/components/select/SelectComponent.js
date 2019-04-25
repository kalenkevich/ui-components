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

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _label = _interopRequireDefault(require("../label"));

var _SelectComponentStyle = _interopRequireDefault(require("./SelectComponentStyle"));

var _Utils = require("../../services/Utils");

var Select = function Select(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? function () {} : _props$onSelect,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$success = props.success,
      success = _props$success === void 0 ? false : _props$success,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpenState = _useState2[1];

  var valueOption = (options || []).find(function (option) {
    return option.value === value;
  });
  var classNames = (0, _Utils.getClassName)([classes.valueOption, error ? ' error' : '', success ? 'success' : '', disabled ? 'disabled' : '', !valueOption && placeholder ? 'placeholder' : '']);
  return _react["default"].createElement("div", {
    className: classes.rootWrapper
  }, label ? _react["default"].createElement(_label["default"], {
    className: "".concat(classes.label).concat(error ? ' error' : '').concat(success ? ' success' : ''),
    value: label
  }) : null, _react["default"].createElement("div", {
    className: "".concat(classes.root, " ").concat(className)
  }, _react["default"].createElement("div", {
    className: classNames,
    onClick: function onClick() {
      if (!disabled) {
        setOpenState(true);
      }
    }
  }, valueOption ? valueOption.label : placeholder), _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: classes.icon,
    icon: isOpen ? 'chevron-up' : 'chevron-down'
  }), !disabled && isOpen && options.length ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
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
  }))) : null));
};

Select.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  options: _propTypes["default"].array,
  value: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  success: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(_SelectComponentStyle["default"])(Select);

exports["default"] = _default;