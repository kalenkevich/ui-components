import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const DropdownItemSeparatorStyle = theme => ({
  root: {
    margin: '10px 0',
    borderTop: theme.border,
  },
});

const DropdownItemSeparator = ({ classes }) => <div className={classes.root}/>;

DropdownItemSeparator.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(DropdownItemSeparatorStyle)(DropdownItemSeparator);
