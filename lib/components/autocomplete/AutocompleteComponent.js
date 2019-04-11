"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AutocompleteStyles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _input = _interopRequireDefault(require("../input"));

var AutocompleteStyles = function AutocompleteStyles(theme) {
  return {
    root: {
      display: 'flex',
      position: 'relative'
    },
    input: {},
    options: {
      position: 'absolute',
      top: '32px',
      left: '0',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '240px',
      border: theme.border,
      borderRadius: theme.borderRadius,
      backgroundColor: '#FFFFFF',
      overflow: 'scroll'
    },
    option: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px',
      cursor: 'pointer',
      borderTop: theme.border,
      '': {
        '&:first-of-type': {
          borderTop: 'none'
        }
      },
      '&:hover': {
        backgroundColor: theme.brandPrimaryColor
      }
    }
  };
};

exports.AutocompleteStyles = AutocompleteStyles;

var Autocomplete = function Autocomplete(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      classes = props.classes,
      options = props.options,
      value = props.value,
      _onChange = props.onChange,
      _onEnter = props.onEnter,
      onSelect = props.onSelect;
  return _react["default"].createElement("div", {
    className: "".concat(classes.root, " ").concat(className)
  }, _react["default"].createElement(_input["default"], {
    className: classes.input,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    onEnter: function onEnter() {
      return _onEnter(value);
    }
  }), options.length ? _react["default"].createElement("div", {
    className: classes.options
  }, (options || []).map(function (option) {
    return _react["default"].createElement("div", {
      onClick: function onClick() {
        return onSelect(option);
      },
      className: classes.option,
      key: option.value
    }, option.label);
  })) : null);
};

Autocomplete.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  options: _propTypes["default"].array,
  value: _propTypes["default"].string,
  onEnter: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  onChange: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(AutocompleteStyles)(Autocomplete);

exports["default"] = _default;