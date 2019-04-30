"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tabs3 = exports.tabs2 = exports.tabs1 = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Section = require("./Section");

var _tabs = require("../components/tabs");

var _label = _interopRequireDefault(require("../components/label"));

/* eslint-disable react/display-name */
var tabs1 = [{
  label: 'First tab',
  value: 'tab1',
  content: 'Tab 1 Content'
}, {
  label: 'Second tab',
  value: 'tab2',
  content: 'Tab 2 Content'
}, {
  label: 'Third tab',
  value: 'tab3',
  content: 'Tab 3 Content'
}];
exports.tabs1 = tabs1;
var tabs2 = [{
  label: 'First tab',
  value: 'tab1',
  content: 'Tab 1 Content'
}, {
  label: 'Second tab',
  value: 'tab2',
  content: 'Tab 2 Content'
}, {
  label: 'Third tab',
  value: 'tab3',
  content: 'Tab 3 Content'
}, {
  label: 'Disabled tab',
  value: 'tab4',
  disabled: true,
  content: 'Disabled Content'
}];
exports.tabs2 = tabs2;
var tabs3 = [{
  label: 'First tab',
  value: 'tab1',
  content: 'Tab 1 Content'
}, {
  label: 'Second tab',
  value: 'tab2',
  marked: true,
  content: 'Tab 2 Content'
}, {
  label: 'Third tab',
  value: 'tab3',
  content: 'Tab 3 Content'
}, {
  label: 'Fourth tab',
  value: 'tab4',
  marked: true,
  content: 'Tab 4 Content'
}];
exports.tabs3 = tabs3;

var TabsSection = function TabsSection() {
  var _useState = (0, _react.useState)(tabs1[0].value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedValue1 = _useState2[0],
      selectTab1 = _useState2[1];

  var _useState3 = (0, _react.useState)(tabs2[3].value),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      selectedValue2 = _useState4[0],
      selectTab2 = _useState4[1];

  var _useState5 = (0, _react.useState)(tabs3[3].value),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      selectedValue3 = _useState6[0],
      selectTab3 = _useState6[1];

  var selectedTab1 = (tabs1 || []).find(function (_ref) {
    var value = _ref.value;
    return selectedValue1 === value;
  });
  var selectedTab2 = (tabs2 || []).find(function (_ref2) {
    var value = _ref2.value;
    return selectedValue2 === value;
  });
  var selectedTab3 = (tabs3 || []).find(function (_ref3) {
    var value = _ref3.value;
    return selectedValue3 === value;
  });
  return _react["default"].createElement(_Section.Section, {
    title: 'Tabs'
  }, _react["default"].createElement(_Section.SectionRow, {
    title: "First tabs"
  }, _react["default"].createElement(_tabs.TabsContainer, null, _react["default"].createElement(_tabs.TabsHeader, null, (tabs1 || []).map(function (tab) {
    return _react["default"].createElement(_tabs.Tab, {
      key: tab.value,
      selected: tab.value === selectedValue1,
      label: tab.label,
      value: tab.value,
      onSelect: selectTab1
    });
  })), _react["default"].createElement(_tabs.TabsBody, null, _react["default"].createElement(_label["default"], {
    value: selectedTab1.content
  })))), _react["default"].createElement(_Section.SectionRow, {
    title: "Second tabs"
  }, _react["default"].createElement(_tabs.TabsContainer, null, _react["default"].createElement(_tabs.TabsHeader, null, (tabs2 || []).map(function (tab) {
    return _react["default"].createElement(_tabs.Tab, {
      key: tab.value,
      selected: tab.value === selectedValue2,
      label: tab.label,
      value: tab.value,
      disabled: tab.disabled,
      onSelect: selectTab2
    });
  })), _react["default"].createElement(_tabs.TabsBody, null, _react["default"].createElement(_label["default"], {
    value: selectedTab2.content
  })))), _react["default"].createElement(_Section.SectionRow, {
    title: "Third tabs"
  }, _react["default"].createElement(_tabs.TabsContainer, null, _react["default"].createElement(_tabs.TabsHeader, null, (tabs3 || []).map(function (tab) {
    return _react["default"].createElement(_tabs.Tab, {
      key: tab.value,
      selected: tab.value === selectedValue3,
      label: tab.label,
      value: tab.value,
      marked: tab.marked,
      disabled: tab.disabled,
      onSelect: selectTab3
    });
  })), _react["default"].createElement(_tabs.TabsBody, null, _react["default"].createElement(_label["default"], {
    value: selectedTab3.content
  })))));
};

var _default = TabsSection;
exports["default"] = _default;