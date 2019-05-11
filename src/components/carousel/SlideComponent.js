import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Legend from './LegendComponent';
import SlideStyle from './SlideStyle';
import { getClassName } from '../../services/Utils';

const Slide = (props) => {
  const {
    classes,
    className,
    slide,
    onClick,
    onPrevClick,
    onNextClick,
    currentSlideIndex,
    totalLength,
    onSlideChange,
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const imageStyle = { backgroundImage: `url(${slide.imageUrl})` };

  return (
    <div className={rootClasses} style={imageStyle} onClick={onClick}>
      <FontAwesomeIcon
        className={classes.prevButton}
        icon='chevron-left'
        onClick={onPrevClick}
        tabIndex='0'
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onPrevClick();
          }
        }}
      />
      <div className={classes.titleWrapper}>
        <div className={classes.title}>{slide.title}</div>
        <div className={classes.description}>{slide.description}</div>
        <Legend
          currentSlideIndex={currentSlideIndex}
          totalLength={totalLength}
          onChange={onSlideChange}
        />
      </div>
      <FontAwesomeIcon
        className={classes.nextButton}
        icon='chevron-right'
        onClick={onNextClick}
        tabIndex='0'
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onNextClick();
          }
        }}
      />
    </div>
  );
};

Slide.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  slide: PropTypes.object,
  onClick: PropTypes.func,
  onNextClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  currentSlideIndex: PropTypes.number,
  totalLength: PropTypes.number,
  onSlideChange: PropTypes.func,
};

export default withStyles(SlideStyle)(Slide);
