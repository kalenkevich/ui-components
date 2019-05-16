import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../services/Utils';

export const MainPageStyle = () => ({
  root: {
    display: 'flex',
  },
  chat: {
    marginLeft: '10px',
  },
});

const MainPage = (props) => {
  const {
    classes,
    className,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return (
    <div className={rootClasses}>
    </div>
  );
};

MainPage.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
};

export default withStyles(MainPageStyle)(MainPage);
