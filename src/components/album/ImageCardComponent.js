import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import ImageCardStyles from './ImageCardStyle';

const ImageCard = (props) => {
  const {
    classes,
    className,
    image,
    onClick,
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return (
    <img
      className={rootClasses}
      src={image.url}
      onClick={onClick}
      style={{
        width: image.size.width,
        height: image.size.height,
      }}
    />
  );
};

ImageCard.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  image: PropTypes.object,
  onClick: PropTypes.func,
};

export default withStyles(ImageCardStyles)(ImageCard);
