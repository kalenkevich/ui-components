import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import TabsHeaderStyles from './TabsHeaderStyle';

const TabsHeaderComponent = (props) => {
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

TabsHeaderComponent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default withStyles(TabsHeaderStyles)(TabsHeaderComponent);
