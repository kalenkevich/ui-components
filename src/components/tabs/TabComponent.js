import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import Label from '../label';
import TabStyles from './TabStyle';

const TabComponent = (props) => {
  const {
    classes,
    label,
    value,
    selected = false,
    disabled = false,
    marked = false,
    onSelect,
    children,
  } = props;

  const classNames = getClassName([
    classes.root,
    disabled ? 'disabled' : '',
    selected ? 'selected' : '',
  ]);

  return (
    <div className={classNames} onClick={() => {
      if (!disabled) {
        onSelect(value);
      }
    }}>
      {marked ? <div className={classes.mark}/> : null}
      <Label value={label}/>
      {selected ? <div className={classes.children}>{children}</div> : null}
    </div>
  );
};

TabComponent.propTypes = {
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  value: PropTypes.any,
  label: PropTypes.string,
  marked: PropTypes.bool,
  children: PropTypes.node,
};

export default withStyles(TabStyles)(TabComponent);
