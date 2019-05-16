"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getNodesAndEdges = exports.getAction = exports.OrderStatusQueueStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../../../services/Utils");

var _Node = _interopRequireDefault(require("./Node"));

var _Edge = _interopRequireDefault(require("./Edge"));

var OrderStatusQueueStyle = function OrderStatusQueueStyle() {
  return {
    root: {
      display: 'flex',
      padding: '10px'
    }
  };
};

exports.OrderStatusQueueStyle = OrderStatusQueueStyle;

var getAction = function getAction(index, currentStatusIndex) {
  if (typeof currentStatusIndex !== 'number') {
    return 'past';
  }

  if (index < currentStatusIndex) {
    return 'past';
  }

  if (index > currentStatusIndex) {
    return 'future';
  }

  return 'current';
};

exports.getAction = getAction;

var getNodesAndEdges = function getNodesAndEdges(statuses, currentStatus) {
  var isCurrentStatus = false;
  var currentStatusIndex = false;
  var nodesAndEdges = [];

  for (var i = 0; i < statuses.length; i++) {
    var status = statuses[i];
    var isLastStatus = i + 1 === statuses.length;

    if (status.value === currentStatus) {
      isCurrentStatus = true;
      currentStatusIndex = i;
    } else {
      isCurrentStatus = false;
    }

    var action = getAction(i, currentStatusIndex);
    var node = {
      name: 'node',
      value: status.value,
      label: status.label,
      type: status.type,
      current: isCurrentStatus,
      action: action
    };
    nodesAndEdges.push(node);

    if (!isLastStatus) {
      var edge = {
        name: 'edge',
        type: status.type,
        action: action
      };
      nodesAndEdges.push(edge);
    }
  }

  return nodesAndEdges;
};

exports.getNodesAndEdges = getNodesAndEdges;

var StatusQueue = function StatusQueue(props) {
  var classes = props.classes,
      className = props.className,
      statuses = props.statuses,
      currentStatus = props.currentStatus;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var nodesAndEdges = getNodesAndEdges(statuses, currentStatus);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, (nodesAndEdges || []).map(function (item, index) {
    if (item.name === 'node') {
      return _react["default"].createElement(_Node["default"], {
        key: index,
        label: item.label,
        type: item.type,
        action: item.action,
        current: item.current
      });
    }

    return _react["default"].createElement(_Edge["default"], {
      key: index,
      type: item.type,
      action: item.action
    });
  }));
};

StatusQueue.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  statuses: _propTypes["default"].array,
  currentStatus: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(OrderStatusQueueStyle)(StatusQueue);

exports["default"] = _default;