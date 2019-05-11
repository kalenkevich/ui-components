import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import CarouselStyle from './CarouselStyle';
import Slide from './SlideComponent';
import { getClassName } from '../../services/Utils';

const Carousel = (props) => {
  const {
    classes = {},
    className = '',
    slides = [],
    initialSlideIndex = 0,
    onSlideClick = () => {},
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlideIndex);
  const onPrevClick = () => {
    if (currentSlideIndex - 1 < 0) {
      setCurrentSlideIndex(slides.length - 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  const onNextClick = () => {
    if (currentSlideIndex + 1 === slides.length) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const slide = slides[currentSlideIndex];

  return (
    <div className={rootClasses}>
      <Slide
        slide={slide}
        onClick={() => onSlideClick(slide)}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        currentSlideIndex={currentSlideIndex}
        totalLength={slides.length}
        onSlideChange={newIndex => setCurrentSlideIndex(newIndex)}
      />
    </div>
  );
};

Carousel.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  slides: PropTypes.array,
  initialSlideIndex: PropTypes.number,
  slidesToShow: PropTypes.number,
  onSlideClick: PropTypes.func,
};

export default withStyles(CarouselStyle)(Carousel);
