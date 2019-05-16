import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import HeaderComponentStyle from './HeaderComponentStyle';
import Card from '../card';
import Menu from '../menu';
import { getClassName } from '../../services/Utils';

const HeaderComponent = (props) => {
  const {
    classes,
    children,
    appName,
    className,
    menu,
  } = props;
  const rootClasses = getClassName([
    classes.headerContainer,
    className,
  ]);

  return (
    <Card className={rootClasses}>
      <Menu label={appName}>{menu}</Menu>
      {children}
    </Card>
  );
};

HeaderComponent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  menu: PropTypes.node,
  appName: PropTypes.string,
};

export default withRouter(withStyles(HeaderComponentStyle)(HeaderComponent));
