"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Section = require("./Section");

var _input = _interopRequireDefault(require("../components/input"));

var _theme = require("../theme");

var ThemeSection = function ThemeSection(_ref) {
  var theme = _ref.theme,
      onChange = _ref.onChange;

  var onInputChange = function onInputChange(value, themeKey) {
    onChange((0, _defineProperty2["default"])({}, themeKey, value));
  };

  return _react["default"].createElement(_Section.Section, {
    title: 'Theme'
  }, _react["default"].createElement(_Section.SectionRow, {
    title: 'Colors'
  }, _react["default"].createElement(_input["default"], {
    value: theme.brandPrimaryColor,
    label: "brandPrimaryColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandPrimaryColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandPrimaryDarkColor,
    label: "brandPrimaryDarkColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandPrimaryDarkColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandSuccessLightColor,
    label: "brandSuccessLightColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandSuccessLightColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandSuccessDarkColor,
    label: "brandSuccessDarkColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandSuccessDarkColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandInfoLightColor,
    label: "brandInfoLightColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandInfoLightColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandInfoDarkColor,
    label: "brandInfoDarkColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandInfoDarkColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandWarningLightColor,
    label: "brandWarningLightColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandWarningLightColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandWarningDarkColor,
    label: "brandWarningDarkColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandWarningDarkColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandErrorLightColor,
    label: "brandErrorLightColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandErrorLightColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandErrorDarkColor,
    label: "brandErrorDarkColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandErrorDarkColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandGrayColor,
    label: "brandGrayColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandGrayColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandDarkGrayColor,
    label: "brandGrayColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandDarkGrayColor');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.brandLightGrayColor,
    label: "brandGrayColor",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'brandLightGrayColor');
    }
  })), _react["default"].createElement(_Section.SectionRow, {
    title: 'Controls'
  }, _react["default"].createElement(_input["default"], {
    value: theme.borderRadius,
    label: "borderRadius",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'borderRadius');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.controlFontSize,
    label: "controlFontSize",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'controlFontSize');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.controlFontWeight,
    label: "controlFontWeight",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'controlFontWeight');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.controlHeight,
    label: "controlHeight",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'controlHeight');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.boxShadow,
    label: "boxShadow",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'boxShadow');
    }
  }), _react["default"].createElement(_input["default"], {
    value: theme.backgroundColorTransition,
    label: "backgroundColorTransition",
    onChange: function onChange(e) {
      return onInputChange(e.target.value, 'backgroundColorTransition');
    }
  })));
};

ThemeSection.propTypes = {
  theme: _propTypes["default"].object,
  onChange: _propTypes["default"].func
};
var _default = ThemeSection;
exports["default"] = _default;