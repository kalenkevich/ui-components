import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

export const SectionStyles = theme => ({
  root: {
    border: theme.border,
    borderRadius: theme.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    margin: '10px',
  },
  title: {
    margin: '10px 0',
    fontSize: '24px',
  },
  children: {
    flexDirection: 'column',
  },
});

const SectionComponent = ({ classes, children, title }) => (
  <div className={classes.root}>
    <div className={classes.title}>{title}</div>
    <div className={classes.children}>{children}</div>
  </div>
);

SectionComponent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.string,
};

export const Section = withStyles(SectionStyles)(SectionComponent);

export const SectionItemStyle = theme => ({
  root: {
    borderBottom: theme.border,
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    padding: '5px 0',
    fontWeight: theme.controlFontWeight,
    '&:last-of-type': {
      borderBottom: 'none',
    },
    '& > *': {
      margin: '10px 10px 0 0',
      '&:first-of-type': {
        marginLeft: '0',
      },
    },
  },
});

const SectionRowComponent = ({ classes, children }) => (
  <div className={classes.root}>
    {children}
  </div>
);

SectionRowComponent.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
};

export const SectionRow = withStyles(SectionItemStyle)(SectionRowComponent);
