"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ButtonSection = _interopRequireDefault(require("../preview-sections/ButtonSection"));

var _InputSection = _interopRequireDefault(require("../preview-sections/InputSection"));

var _TextAreaSection = _interopRequireDefault(require("../preview-sections/TextAreaSection"));

var _SelectSection = _interopRequireDefault(require("../preview-sections/SelectSection"));

var _CheckboxSection = _interopRequireDefault(require("../preview-sections/CheckboxSection"));

var _RadioSection = _interopRequireDefault(require("../preview-sections/RadioSection"));

var _AvatarSection = _interopRequireDefault(require("../preview-sections/AvatarSection"));

var _TabsSection = _interopRequireDefault(require("../preview-sections/TabsSection"));

var _LabeledTextSection = _interopRequireDefault(require("../preview-sections/LabeledTextSection"));

var _NotificationSection = _interopRequireDefault(require("../preview-sections/NotificationSection"));

var _DatePickerSection = _interopRequireDefault(require("../preview-sections/DatePickerSection"));

var _ThemeSection = _interopRequireDefault(require("../preview-sections/ThemeSection"));

var _DropdownSection = _interopRequireDefault(require("../preview-sections/DropdownSection"));

var _LoadingSection = _interopRequireDefault(require("../preview-sections/LoadingSection"));

var _CarouselSection = _interopRequireDefault(require("../preview-sections/CarouselSection"));

var _NumberInputSection = _interopRequireDefault(require("../preview-sections/NumberInputSection"));

var _CurrencyInputSection = _interopRequireDefault(require("../preview-sections/CurrencyInputSection"));

var _OrderPage = _interopRequireDefault(require("../pages/OrderPage"));

var _MainPage = _interopRequireDefault(require("../pages/MainPage"));

var BasicComponents = function BasicComponents() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ThemeSection["default"], null), _react["default"].createElement(_ButtonSection["default"], null), _react["default"].createElement(_DropdownSection["default"], null), _react["default"].createElement(_InputSection["default"], null), _react["default"].createElement(_SelectSection["default"], null), _react["default"].createElement(_CheckboxSection["default"], null), _react["default"].createElement(_RadioSection["default"], null), _react["default"].createElement(_TextAreaSection["default"], null), _react["default"].createElement(_LabeledTextSection["default"], null), _react["default"].createElement(_AvatarSection["default"], null), _react["default"].createElement(_TabsSection["default"], null), _react["default"].createElement(_NotificationSection["default"], null), _react["default"].createElement(_LoadingSection["default"], null));
};

var CustomComponents = function CustomComponents() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_NumberInputSection["default"], null), _react["default"].createElement(_CurrencyInputSection["default"], null));
};

var Widgets = function Widgets() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_DatePickerSection["default"], null), _react["default"].createElement(_CarouselSection["default"], null));
};

var Routes = function Routes() {
  return _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
    path: "/components/basic",
    component: BasicComponents
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/components/custom",
    component: CustomComponents
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/widgets",
    component: Widgets
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/pages/main",
    component: _MainPage["default"]
  }), _react["default"].createElement(_reactRouterDom.Route, {
    path: "/pages/order",
    component: _OrderPage["default"]
  }), _react["default"].createElement(_reactRouterDom.Redirect, {
    from: '',
    to: '/components/basic'
  }));
};

var _default = Routes;
exports["default"] = _default;