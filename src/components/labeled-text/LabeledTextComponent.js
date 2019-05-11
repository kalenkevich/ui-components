import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Label from '../label';
import Tooltip from '../tooltip';
import LabeledTextStyle from './LabeledTextStyle';
import { getClassName } from '../../services/Utils';

const LabeledText = (props) => {
  const {
    classes,
    label,
    content,
    className,
    tooltip,
  } = props;

  const [isHovered, setHoveredState] = useState(false);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return (
    <>
      <Tooltip label={tooltip} show={isHovered}/>
      <div className={rootClasses} tabIndex='0'
        onMouseEnter={() => setHoveredState(true)}
        onMouseLeave={() => setHoveredState(false)}
      >
        <Label value={label} className={classes.label}/>
        <div className={classes.content}>
          {content}
        </div>
      </div>
    </>
  );
};

LabeledText.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  content: PropTypes.string,
  tooltip: PropTypes.string,
};

export default withStyles(LabeledTextStyle)(LabeledText);
