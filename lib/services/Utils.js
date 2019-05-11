"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassName = void 0;

/* eslint-disable import/prefer-default-export */
var getClassName = function getClassName(classNames) {
  return (classNames || []).reduce(function (result, className) {
    if (!className) {
      return result;
    }

    if (result.length === 0) {
      return className;
    }

    return "".concat(result, " ").concat(className);
  }, '');
};

exports.getClassName = getClassName;