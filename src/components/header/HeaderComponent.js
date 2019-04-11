import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link, withRouter } from 'react-router-dom';
import HeaderComponentStyle from './HeaderComponentStyle';

const HeaderComponent = (props) => {
  const {
    classes,
    children,
    appName,
  } = props;

  return (
    <div className={classes.headerContainer}>
      <Link className={classes.brandTitle} to='/'>{appName}</Link>
      {children}
    </div>
  );
};

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  appName: PropTypes.string,
};

export default withRouter(withStyles(HeaderComponentStyle)(HeaderComponent));
