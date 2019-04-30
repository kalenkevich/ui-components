import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import TabsBodyStyle from './TabsBodyStyle';

const TabsBodyComponent = (props) => {
  const {
    classes,
    children,
  } = props;

  const classNames = getClassName([
    classes.root,
  ]);

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

TabsBodyComponent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default withStyles(TabsBodyStyle)(TabsBodyComponent);
