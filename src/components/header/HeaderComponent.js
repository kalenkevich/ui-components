import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link, withRouter } from 'react-router-dom';
import HeaderComponentStyle from './HeaderComponentStyle';
import { getClassName } from '../../services/Utils';

const HeaderComponent = (props) => {
  const {
    classes,
    children,
    appName,
    className,
  } = props;
  const rootClasses = getClassName([
    classes.headerContainer,
    className,
  ]);

  return (
    <div className={rootClasses}>
      <Link className={classes.brandTitle} to='/'>{appName}</Link>
      {children}
    </div>
  );
};

HeaderComponent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  appName: PropTypes.string,
};

export default withRouter(withStyles(HeaderComponentStyle)(HeaderComponent));
