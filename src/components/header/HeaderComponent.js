import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Link, withRouter } from 'react-router-dom';
import HeaderComponentStyle from './HeaderComponentStyle';
import SettingsContext from '../../context/SettingsContext';

const HeaderComponent = (props) => {
  const {
    classes,
    children,
  } = props;
  const { appName } = useContext(SettingsContext);

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
};

export default withRouter(withStyles(HeaderComponentStyle)(HeaderComponent));
