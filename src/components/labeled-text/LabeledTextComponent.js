import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Label from '../label';
import LabeledTextStyle from './LabeledTextStyle';
import { getClassName } from '../../services/Utils';

const LabeledText = (props) => {
  const {
    classes,
    label,
    content,
    className,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return (
    <div className={rootClasses} tabIndex='0'>
      <Label value={label} className={classes.label}/>
      <div className={classes.content}>
        {content}
      </div>
    </div>
  );
};

LabeledText.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  content: PropTypes.string,
};

export default withStyles(LabeledTextStyle)(LabeledText);
