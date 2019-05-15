import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../services/Utils';
import Node from './Node';
import Edge from './Edge';

export const OrderStatusQueueStyle = () => ({
  root: {
    display: 'flex',
    padding: '10px',
  },
});

export const getAction = (index, currentStatusIndex) => {
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

export const getNodesAndEdges = (statuses, currentStatus) => {
  let isCurrentStatus = false;
  let currentStatusIndex = false;
  const nodesAndEdges = [];

  for (let i = 0; i < statuses.length; i++) {
    const status = statuses[i];
    const isLastStatus = i + 1 === statuses.length;

    if (status.value === currentStatus) {
      isCurrentStatus = true;
      currentStatusIndex = i;
    } else {
      isCurrentStatus = false;
    }

    const action = getAction(i, currentStatusIndex);
    const node = {
      name: 'node',
      value: status.value,
      label: status.label,
      type: status.type,
      current: isCurrentStatus,
      action,
    };

    nodesAndEdges.push(node);

    if (!isLastStatus) {
      const edge = {
        name: 'edge',
        type: status.type,
        action,
      };

      nodesAndEdges.push(edge);
    }
  }

  return nodesAndEdges;
};

const StatusQueue = (props) => {
  const {
    classes,
    className,
    statuses,
    currentStatus,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const nodesAndEdges = getNodesAndEdges(statuses, currentStatus);

  return (
    <div className={rootClasses}>
      {(nodesAndEdges || []).map((item, index) => {
        if (item.name === 'node') {
          return (
            <Node
              key={index}
              label={item.label}
              type={item.type}
              action={item.action}
              current={item.current}
            />
          );
        }

        return <Edge
          key={index}
          type={item.type}
          action={item.action}
        />;
      })}
    </div>
  );
};

StatusQueue.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  statuses: PropTypes.array,
  currentStatus: PropTypes.string,
};

export default withStyles(OrderStatusQueueStyle)(StatusQueue);
