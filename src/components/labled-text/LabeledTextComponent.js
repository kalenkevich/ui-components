import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Label from '../label';
import LabeledTextStyle from './LabeledTextStyle';

const LabeledText = (props) => {
  const {
    classes,
    label,
    content,
  } = props;

  return (
    <div className={classes.root}>
      <Label value={label} className={classes.label}/>
      <div className={classes.content}>
        {content}
      </div>
    </div>
  );
};

LabeledText.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  content: PropTypes.string,
};

export default withStyles(LabeledTextStyle)(LabeledText);
