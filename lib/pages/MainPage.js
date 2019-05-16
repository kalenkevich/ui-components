"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MainPageStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../services/Utils");

var _input = _interopRequireDefault(require("../components/input"));

var _form = _interopRequireWildcard(require("../components/form"));

var _card = _interopRequireDefault(require("../components/card"));

var _select = _interopRequireDefault(require("../components/select"));

var _datepicker = require("../components/datepicker");

var _ContractorListItem = _interopRequireDefault(require("./components/contractor/ContractorListItem"));

var MainPageStyle = function MainPageStyle() {
  return {
    root: {
      display: 'flex'
    },
    filterForm: {
      display: 'flex',
      width: '400px',
      position: 'sticky',
      top: '10px',
      height: 'fit-content'
    },
    searchForm: {
      width: '100%',
      marginLeft: '10px'
    },
    searchInputCard: {
      padding: '20px'
    },
    searchInput: {},
    searchResult: {
      marginTop: '10px',
      boxSizing: 'border-box'
    },
    contractorListItem: {
      margin: '15px 0'
    }
  };
};

exports.MainPageStyle = MainPageStyle;
var contractor = {
  avatarUrl: 'https://avatar-cdn.atlassian.com/5ba3e03512b3ea2f78b71046?by=id&sg=iDdadg265ubxOx3V4Ljf5D2%2FTDg%3D&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-5.svg&nocaching=0.6002600680772352',
  name: 'Alexey Kalenkevich',
  rate: 100,
  industry: 'Software Developer Legend',
  pricePerHour: {
    value: 100000,
    currency: 'USD'
  }
};
var contractors = [contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor];

var MainPage = function MainPage(props) {
  var classes = props.classes,
      className = props.className;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement(_form["default"], {
    className: classes.filterForm
  }, _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_select["default"], {
    label: 'Сортировка'
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_datepicker.DateRangePicker, {
    label: 'Сроки',
    startDate: new Date(),
    endDate: new Date()
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_input["default"], {
    label: 'Место'
  })), _react["default"].createElement(_form.FormSection, {
    size: '6'
  }, _react["default"].createElement(_input["default"], {
    label: 'Рейтинг от'
  })), _react["default"].createElement(_form.FormSection, {
    size: '6'
  }, _react["default"].createElement(_input["default"], {
    label: 'Цена в час'
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_select["default"], {
    label: 'Индустрия'
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_select["default"], {
    label: 'Специализация'
  }))), _react["default"].createElement("div", {
    className: classes.searchForm
  }, _react["default"].createElement(_card["default"], {
    className: classes.searchInputCard
  }, _react["default"].createElement(_input["default"], {
    className: classes.searchInput
  })), _react["default"].createElement("div", {
    className: classes.searchResult
  }, (contractors || []).map(function (c, index) {
    return _react["default"].createElement(_ContractorListItem["default"], {
      key: index,
      className: classes.contractorListItem,
      contractor: c
    });
  }))));
};

MainPage.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(MainPageStyle)(MainPage);

exports["default"] = _default;