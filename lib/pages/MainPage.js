"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.specializations = exports.sortOptions = exports.industries = exports.currencies = exports.MainPageStyle = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../services/Utils");

var _input = _interopRequireDefault(require("../components/input"));

var _currencyInput = _interopRequireDefault(require("../components/currency-input"));

var _numberInput = _interopRequireDefault(require("../components/number-input"));

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
var currencies = [{
  label: 'BYN',
  value: 'BYN'
}, {
  label: 'USD',
  value: 'USD'
}, {
  label: 'EUR',
  value: 'EUR'
}];
exports.currencies = currencies;
var industries = [{
  label: 'Фото',
  value: 'photo'
}, {
  label: 'Ведущий',
  value: 'manager'
}, {
  label: 'Ресторан',
  value: 'restaurant'
}];
exports.industries = industries;
var sortOptions = [{
  label: 'Возрастанию рейтинга',
  value: 'rate_up'
}, {
  label: 'Убыванию рейтинга',
  value: 'rate_down'
}, {
  label: 'Возрастанию цены в час',
  value: 'price_up'
}, {
  label: 'Убыванию цены в час',
  value: 'price_down'
}];
exports.sortOptions = sortOptions;
var specializations = [{
  label: 'Все',
  value: 'all'
}];
exports.specializations = specializations;

var MainPage = function MainPage(props) {
  var classes = props.classes,
      className = props.className;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);

  var _useState = (0, _react.useState)({
    industry: 'photo',
    specialization: 'all',
    dateStart: new Date(),
    dateEnd: new Date(),
    location: 'Слоним',
    rateFrom: 3,
    pricePerHour: {
      value: 50,
      currency: 'BYN'
    },
    sortBy: 'rate_up',
    searchValue: ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      filter = _useState2[0],
      updateFilter = _useState2[1];

  var setFilter = function setFilter(newFilterValue) {
    updateFilter(newFilterValue);
  };

  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement(_form["default"], {
    className: classes.filterForm
  }, _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_select["default"], {
    label: 'Индустрия',
    options: industries,
    value: filter.industry,
    onSelect: function onSelect(option) {
      setFilter((0, _objectSpread2["default"])({}, filter, {
        industry: option.value
      }));
    }
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_select["default"], {
    label: 'Специализация',
    value: filter.specialization,
    options: specializations,
    onSelect: function onSelect(option) {
      setFilter((0, _objectSpread2["default"])({}, filter, {
        specialization: option.value
      }));
    }
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_datepicker.DateRangePicker, {
    label: 'Сроки',
    startDate: filter.dateStart,
    endDate: filter.dateEnd,
    onChange: function onChange(_ref) {
      var startDate = _ref.startDate,
          endDate = _ref.endDate;
      setFilter((0, _objectSpread2["default"])({}, filter, {
        dateStart: startDate,
        dateEnd: endDate
      }));
    }
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_input["default"], {
    label: 'Место',
    value: filter.location,
    onChange: function onChange(e) {
      setFilter((0, _objectSpread2["default"])({}, filter, {
        location: e.target.value
      }));
    }
  })), _react["default"].createElement(_form.FormSection, {
    size: '6'
  }, _react["default"].createElement(_numberInput["default"], {
    label: 'Рейтинг от',
    value: filter.rateFrom,
    onChange: function onChange(val) {
      setFilter((0, _objectSpread2["default"])({}, filter, {
        rateFrom: val
      }));
    }
  })), _react["default"].createElement(_form.FormSection, {
    size: '6'
  }, _react["default"].createElement(_currencyInput["default"], {
    label: 'Цена в час',
    price: filter.pricePerHour,
    onChange: function onChange(val) {
      setFilter((0, _objectSpread2["default"])({}, filter, {
        pricePerHour: val
      }));
    },
    currencies: currencies
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_select["default"], {
    label: 'Сортировка',
    value: filter.sortBy,
    onSelect: function onSelect(option) {
      setFilter((0, _objectSpread2["default"])({}, filter, {
        sortBy: option.value
      }));
    },
    options: sortOptions
  }))), _react["default"].createElement("div", {
    className: classes.searchForm
  }, _react["default"].createElement(_card["default"], {
    className: classes.searchInputCard
  }, _react["default"].createElement(_input["default"], {
    className: classes.searchInput,
    value: filter.searchValue,
    onChange: function onChange(e) {
      setFilter((0, _objectSpread2["default"])({}, filter, {
        searchValue: e.target.value
      }));
    }
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