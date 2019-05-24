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
    expandedContent,
  } = props;
  const rootWrapperClasses = getClassName([
    classes.rootWrapper,
    className,
  ]);
  const childrenClasses = getClassName([
    classes.children,
    childrenClassName,
  ]);
  const [isOpen, setOpenState] = useState(false);

  return (
    <div className={rootWrapperClasses}>
      <div className={classes.root}>
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
      { isOpen ? (
        <div className={classes.expandedContent}>
          { typeof expandedContent === 'function' ? expandedContent() : expandedContent }
        </div>
      ) : null }
    </div>
  );
};

ExpandableSection.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  childrenClassName: PropTypes.string,
  children: PropTypes.node,
  expandedContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

export default withStyles(ExpandableSectionStyle)(ExpandableSection);
