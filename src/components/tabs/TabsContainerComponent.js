import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import TabsContainerStyle from './TabsContainerStyle';

const TabsContainerComponent = (props) => {
  const {
    classes,
    children,
    className,
  } = props;

  const classNames = getClassName([
    classes.root,
    className,
  ]);

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

TabsContainerComponent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default withStyles(TabsContainerStyle)(TabsContainerComponent);
