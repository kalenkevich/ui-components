import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import ImageCard from './ImageCardComponent';
import AlbumStyles from './AlbumStyle';

const Album = (props) => {
  const {
    classes,
    className,
    images,
  } = props;

  const [selectedImage, setSelectedImage] = useState(null);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const onImageClick = (image) => {};

  return (
    <div className={rootClasses}>
      {(images || []).map(image => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
};

Album.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  images: PropTypes.array,
};

export default withStyles(AlbumStyles)(Album);
