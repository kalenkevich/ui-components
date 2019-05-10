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

var _Backdrop = _interopRequireDefault(require("../Backdrop"));

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
      isFocus = _useState2[0],
      setFocusState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isOpen = _useState4[0],
      setOpenState = _useState4[1];

  var valueOption = (options || []).find(function (option) {
    return option.value === value;
  });
  var behaviourClasses = [error ? ' error' : '', success ? 'success' : '', disabled ? 'disabled' : '', isFocus ? 'focus' : ''];
  var rootClasses = (0, _Utils.getClassName)([classes.root, className].concat(behaviourClasses));
  var iconClasses = (0, _Utils.getClassName)([classes.icon, disabled ? 'disabled' : '', isOpen ? 'down' : 'up']);
  return _react["default"].createElement("div", {
    className: classes.rootWrapper
  }, label ? _react["default"].createElement(_label["default"], {
    className: "".concat(classes.label).concat(error ? ' error' : '').concat(success ? ' success' : ''),
    value: label
  }) : null, _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement("input", {
    className: classes.input,
    onChange: function onChange() {},
    value: valueOption ? valueOption.label : '',
    placeholder: placeholder,
    onClick: function onClick() {
      if (disabled) {
        return;
      }

      setOpenState(!isOpen);
    },
    onFocus: function onFocus() {
      if (disabled) {
        return;
      }

      setFocusState(true);
    },
    onBlur: function onBlur() {
      if (disabled) {
        return;
      }

      setFocusState(false);
    },
    onKeyPress: function onKeyPress(e) {
      e.preventDefault();

      if (disabled) {
        return;
      }

      if (e.key === 'Enter') {
        setOpenState(!isOpen);
      }
    }
  }), _react["default"].createElement("div", {
    className: classes.iconWrapper,
    onClick: function onClick() {
      if (!disabled) {
        setOpenState(true);
      }
    }
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: iconClasses,
    icon: 'chevron-up'
  }))), _react["default"].createElement("div", {
    className: classes.optionsWrapper
  }, !disabled && isOpen && options.length ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Backdrop["default"], {
    onClick: function onClick() {
      return setOpenState(false);
    }
  }), _react["default"].createElement("ul", {
    className: classes.options
  }, (options || []).map(function (option) {
    return _react["default"].createElement("li", {
      key: option.value
    }, _react["default"].createElement("a", {
      href: "#",
      tabIndex: option.disabled ? '-1' : '0',
      onClick: function onClick(e) {
        e.preventDefault();

        if (option.disabled) {
          return;
        }

        onSelect(option);
        setOpenState(false);
      },
      className: "".concat(classes.option, " ").concat(option.disabled ? 'disabled' : '')
    }, option.label));
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