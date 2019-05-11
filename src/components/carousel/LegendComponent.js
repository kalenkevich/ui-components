import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import LegendStyle from './LegendStyle';
import { getClassName } from '../../services/Utils';

const Legend = (props) => {
  const {
    classes,
    className,
    currentSlideIndex,
    totalLength,
    onChange,
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  const items = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < totalLength; i++) {
    items.push(i);
  }

  return (
    <div className={rootClasses}>
      {items.map((index) => {
        const itemClasses = getClassName([
          classes.item,
          index === currentSlideIndex ? 'selected' : '',
        ]);

        return (
          <div
            key={index}
            className={itemClasses}
            onClick={() => onChange(index)}
            tabIndex='0'
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                onChange(index);
              }
            }}
          />
        );
      })}
    </div>
  );
};

Legend.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  currentSlideIndex: PropTypes.number,
  totalLength: PropTypes.number,
  onChange: PropTypes.func,
};

export default withStyles(LegendStyle)(Legend);
