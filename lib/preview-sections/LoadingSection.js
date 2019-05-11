"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Section = require("./Section");

var _progressBar = _interopRequireDefault(require("../components/progress-bar"));

var _spinner = _interopRequireDefault(require("../components/spinner"));

var ButtonSection = function ButtonSection() {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  (0, _react.useEffect)(function () {
    var intervalId = setInterval(function () {
      if (progress > 100) {
        setProgress(0);
      } else {
        setProgress(progress + 0.1);
      }
    }, 10);
    return function () {
      return clearInterval(intervalId);
    };
  });
  return _react["default"].createElement(_Section.Section, {
    title: "Loading"
  }, _react["default"].createElement(_Section.SectionRow, {
    title: "Progress bar"
  }, _react["default"].createElement(_progressBar["default"], {
    progress: progress
  }), _react["default"].createElement(_progressBar["default"], {
    progress: progress,
    type: "success"
  }), _react["default"].createElement(_progressBar["default"], {
    progress: progress,
    type: "info"
  }), _react["default"].createElement(_progressBar["default"], {
    progress: progress,
    type: "warning"
  }), _react["default"].createElement(_progressBar["default"], {
    progress: progress,
    type: "danger"
  })), _react["default"].createElement(_Section.SectionRow, {
    title: "Infinity progress bar"
  }, _react["default"].createElement(_progressBar["default"], {
    infinity: true
  }), _react["default"].createElement(_progressBar["default"], {
    infinity: true,
    type: "success"
  }), _react["default"].createElement(_progressBar["default"], {
    infinity: true,
    type: "info"
  }), _react["default"].createElement(_progressBar["default"], {
    infinity: true,
    type: "warning"
  }), _react["default"].createElement(_progressBar["default"], {
    infinity: true,
    type: "danger"
  })), _react["default"].createElement(_Section.SectionRow, {
    title: "Spinner sizes"
  }, _react["default"].createElement(_spinner["default"], {
    size: "sm"
  }), _react["default"].createElement(_spinner["default"], {
    size: "md"
  }), _react["default"].createElement(_spinner["default"], {
    size: "lg"
  })), _react["default"].createElement(_Section.SectionRow, {
    title: "Spinner "
  }, _react["default"].createElement(_spinner["default"], {
    size: "md",
    type: "primary"
  }), _react["default"].createElement(_spinner["default"], {
    size: "md",
    type: "secondary"
  }), _react["default"].createElement(_spinner["default"], {
    size: "md",
    type: "success"
  }), _react["default"].createElement(_spinner["default"], {
    size: "md",
    type: "info"
  }), _react["default"].createElement(_spinner["default"], {
    size: "md",
    type: "warning"
  }), _react["default"].createElement(_spinner["default"], {
    size: "md",
    type: "danger"
  })));
};

var _default = ButtonSection;
exports["default"] = _default;