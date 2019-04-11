"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.borderRadius = exports.brandPrimaryColor = void 0;
var brandPrimaryColor = 'rgba(204,204,204, 0.5)';
exports.brandPrimaryColor = brandPrimaryColor;
var borderRadius = '2px';
exports.borderRadius = borderRadius;
var _default = {
  borderRadius: borderRadius,
  titleColor: '#757575',
  authorColor: '#1F7BBD',
  titleHoverColor: '#000000',
  brandPrimaryColor: brandPrimaryColor,
  brandErrorColor: '#FF5A5F',
  border: "1px solid ".concat(brandPrimaryColor),
  loading: {
    borderRadius: borderRadius,
    animation: 'blink 1.5s linear infinite'
  }
};
exports["default"] = _default;