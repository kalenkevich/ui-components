import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Card from '../card';
import { getClassName } from '../../services/Utils';
import FormStyles from './FormStyles';

const Form = (props) => {
  const {
    classes,
    className,
    children,
    title,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return (
    <Card className={rootClasses}>
      <div className={classes.title}>{title}</div>
      <div className={classes.children}>{children}</div>
    </Card>
  );
};

Form.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles(FormStyles)(Form);
