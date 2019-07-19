"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OrderPageStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _card = _interopRequireDefault(require("../../../components/card"));

var _avatar = _interopRequireDefault(require("../../../components/avatar"));

var _labeledText = _interopRequireDefault(require("../../../components/labeled-text"));

var _button = _interopRequireDefault(require("../../../components/button"));

var _form = _interopRequireWildcard(require("../../../components/form"));

var _StatusQueue = _interopRequireDefault(require("../status-queue/StatusQueue"));

var _Utils = require("../../../services/Utils");

var OrderPageStyle = function OrderPageStyle(theme) {
  return {
    root: {
      display: 'flex'
    },
    usersContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      border: theme.border,
      borderRadius: theme.borderRadius
    },
    userInfoAvatarCrown: {
      color: theme.brandPrimaryColor
    },
    userInfo: {
      display: 'flex',
      padding: '10px'
    },
    userInfoLabel: {
      marginLeft: '10px'
    },
    orderForm: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    chat: {
      marginLeft: '10px'
    },
    orderContainer: {
      marginTop: '10px',
      border: theme.border,
      borderRadius: theme.borderRadius
    }
  };
};

exports.OrderPageStyle = OrderPageStyle;
var orderStatuses = [{
  value: 'orderStatusValue1',
  label: 'Предложение сделки',
  type: 'success'
}, {
  value: 'orderStatusValue2',
  label: 'Сделка в рассмотрении',
  type: 'success'
}, {
  value: 'orderStatusValue3',
  label: 'Сделка принята',
  type: 'success'
}, {
  value: 'orderStatusValue4',
  label: 'Сделка началась',
  type: 'success'
}, {
  value: 'orderStatusValue5',
  label: 'Завершение сделки',
  type: 'success'
}, {
  value: 'orderStatusValue6',
  label: 'Сделка завершена',
  type: 'success'
}];

var OrderPage = function OrderPage(props) {
  var classes = props.classes,
      className = props.className,
      order = props.order;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var contractorClasses = (0, _Utils.getClassName)([classes.userInfo, classes.contractor]);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement("div", {
    className: classes.orderForm
  }, _react["default"].createElement(_card["default"], {
    className: classes.usersContainer
  }, _react["default"].createElement("div", {
    className: contractorClasses
  }, _react["default"].createElement(_avatar["default"], {
    url: order.contractor.avatarUrl,
    rate: order.contractor.rate
  }), _react["default"].createElement(_labeledText["default"], {
    className: classes.userInfoLabel,
    label: 'Исполнитель',
    content: order.contractor.name,
    reverse: true
  }), _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: 'crown',
    className: classes.userInfoAvatarCrown
  })), _react["default"].createElement(_StatusQueue["default"], {
    statuses: orderStatuses,
    currentStatus: order.status
  })), _react["default"].createElement(_form["default"], {
    className: classes.orderContainer,
    title: 'Детали заказа'
  }, _react["default"].createElement(_form.FormSection, {
    size: "6"
  }, _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_labeledText["default"], {
    label: 'Цифры исполнителя',
    content: order.contractor.phone
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_labeledText["default"], {
    label: 'Цена вопроса',
    content: "".concat(order.price.value, " ").concat(order.price.currency)
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_labeledText["default"], {
    label: 'Сроки',
    content: (0, _Utils.getFormattedDateRange)(order.dateStart, order.dateEnd)
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_labeledText["default"], {
    label: 'Услуга',
    content: order.serviceType
  })), _react["default"].createElement(_form.FormSection, null, _react["default"].createElement(_labeledText["default"], {
    label: 'Статус',
    content: order.status
  }))), _react["default"].createElement(_form.FormSection, {
    size: "6"
  }, _react["default"].createElement(_labeledText["default"], {
    label: 'Описание',
    content: order.description
  })), _react["default"].createElement(_form.FormSectionAction, null, _react["default"].createElement(_button["default"], {
    type: "success"
  }, "\u041D\u0430\u0447\u0430\u0442\u044C"), _react["default"].createElement(_button["default"], {
    type: "warning"
  }, "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C"), _react["default"].createElement(_button["default"], {
    type: "success"
  }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C"), _react["default"].createElement(_button["default"], {
    type: "danger"
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")))));
};

OrderPage.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  order: _propTypes["default"].object
};

var _default = (0, _reactJss["default"])(OrderPageStyle)(OrderPage);

exports["default"] = _default;