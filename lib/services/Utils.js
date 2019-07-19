"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormattedDateRange = exports.getFormattedDate = exports.getClassName = void 0;

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

var getFormattedDate = function getFormattedDate(date) {
  if (!date) {
    return '';
  }

  var formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
  return formatter.format(date);
};

exports.getFormattedDate = getFormattedDate;

var getFormattedDateRange = function getFormattedDateRange(dateStart, dateEnd) {
  var formatter = new Intl.DateTimeFormat('en', {
    month: 'numeric',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  return "".concat(formatter.format(new Date(dateStart)), " - ").concat(formatter.format(new Date(dateEnd)));
};

exports.getFormattedDateRange = getFormattedDateRange;