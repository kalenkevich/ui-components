import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import ExpandableSectionStyle from './ExpandableSectionStyle';
import { getClassName } from '../../services/Utils';
import UpDownChevron from '../UpDownChevron';

const ExpandableSection = (props) => {
  const {
    classes,
    className,
    children,
    childrenClassName,
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const childrenClasses = getClassName([
    classes.children,
    childrenClassName,
  ]);
  const [isOpen, setOpenState] = useState(false);

  return (
    <div className={rootClasses}>
      <div className={childrenClasses}>
        {children}
      </div>
      <div className={classes.iconWrapper}>
        <UpDownChevron
          up={!isOpen}
          onClick={() => setOpenState(!isOpen)}
        />
      </div>
    </div>
  );
};

ExpandableSection.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  childrenClassName: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles(ExpandableSectionStyle)(ExpandableSection);
