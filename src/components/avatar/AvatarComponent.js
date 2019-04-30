import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import AvatarStyles from './AvatarStyle';
import { getClassName } from '../../services/Utils';

const Avatar = (props) => {
  const {
    classes,
    url,
    rate,
    size = 'md',
  } = props;

  const imgClassNames = getClassName([
    classes.image,
    size,
  ]);
  const rateClassNames = getClassName([
    classes.rate,
    size,
  ]);
  const rateBackgroundClassNames = getClassName([
    classes.rateBackground,
    size,
  ]);

  return (
    <div className={classes.root}>
      <img className={imgClassNames} src={url}/>
      { rate ? (
        <>
          <div className={rateBackgroundClassNames}/>
          <div className={rateClassNames}>{rate}</div>
        </>
      ) : null}
    </div>
  );
};

Avatar.propTypes = {
  classes: PropTypes.object,
  url: PropTypes.string,
  rate: PropTypes.number,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
};

export default withStyles(AvatarStyles)(Avatar);
