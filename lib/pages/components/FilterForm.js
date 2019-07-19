"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FilterStyles = exports.specializations = exports.sortOptions = exports.industries = exports.currencies = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../../services/Utils");

var _input = _interopRequireDefault(require("../../components/input"));

var _currencyInput = _interopRequireDefault(require("../../components/currency-input"));

var _numberInput = _interopRequireDefault(require("../../components/number-input"));

var _form = _interopRequireWildcard(require("../../components/form"));

var _select = _interopRequireDefault(require("../../components/select"));

var _datepicker = require("../../components/datepicker");

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

var FilterStyles = function FilterStyles() {
  return {
    root: {
      display: 'flex',
      width: '400px',
      position: 'sticky',
      top: '10px',
      height: 'fit-content'
    }
  };
};

exports.FilterStyles = FilterStyles;

var FilterForm = function FilterForm(props) {
  var classes = props.classes,
      className = props.className,
      filter = props.filter,
      _onChange = props.onChange;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  return _react["default"].createElement(_form["default"], {
    className: rootClasses
  }, _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_select["default"], {
    label: 'Индустрия',
    options: industries,
    value: filter.industry,
    onSelect: function onSelect(option) {
      _onChange((0, _objectSpread2["default"])({}, filter, {
        industry: option.value
      }));
    }
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_select["default"], {
    label: 'Специализация',
    value: filter.specialization,
    options: specializations,
    onSelect: function onSelect(option) {
      _onChange((0, _objectSpread2["default"])({}, filter, {
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

      _onChange((0, _objectSpread2["default"])({}, filter, {
        dateStart: startDate,
        dateEnd: endDate
      }));
    }
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_input["default"], {
    label: 'Место',
    value: filter.location,
    onChange: function onChange(e) {
      _onChange((0, _objectSpread2["default"])({}, filter, {
        location: e.target.value
      }));
    }
  })), _react["default"].createElement(_form.FormSection, {
    size: '6'
  }, _react["default"].createElement(_numberInput["default"], {
    label: 'Рейтинг от',
    value: filter.rateFrom,
    onChange: function onChange(val) {
      _onChange((0, _objectSpread2["default"])({}, filter, {
        rateFrom: val
      }));
    }
  })), _react["default"].createElement(_form.FormSection, {
    size: '6'
  }, _react["default"].createElement(_currencyInput["default"], {
    label: 'Цена в час',
    price: filter.pricePerHour,
    onChange: function onChange(val) {
      _onChange((0, _objectSpread2["default"])({}, filter, {
        pricePerHour: val
      }));
    },
    currencies: currencies
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_select["default"], {
    label: 'Сортировка',
    value: filter.sortBy,
    onSelect: function onSelect(option) {
      _onChange((0, _objectSpread2["default"])({}, filter, {
        sortBy: option.value
      }));
    },
    options: sortOptions
  })));
};

FilterForm.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  filter: _propTypes["default"].object,
  onChange: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(FilterStyles)(FilterForm);

exports["default"] = _default;