import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { USER_ICON } from './IconType';
import { getClassName } from '../../services/Utils';

export const getIconByType = (type, className, classes, width, height) => {
  switch (type) {
    case USER_ICON:
      return <img
        style={{ width, height }}
        className={`${className} ${classes.root}`}
        src={`https://via.placeholder.com/${width}/FFFF00/000000?Text=Avatar`}
      />;
    default:
      return null;
  }
};

export const styles = {
  root: {
    objectFit: 'contain',
  },
};

const Icon = ({
  src,
  type,
  className = '',
  classes,
  width = 50,
  height = 50,
}) => {
  const [imageLoadFail, setImageLoadFail] = useState(false);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  if (!src || imageLoadFail) {
    return getIconByType(type, className, classes, width, height);
  }

  return <img
    src={src}
    style={{ width, height }}
    className={rootClasses}
    onError={() => setImageLoadFail(true)}
  />;
};

Icon.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default withStyles(styles)(Icon);
