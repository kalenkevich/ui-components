import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import MobileContext from '../../context/MobileContext';

export const style = theme => ({
  root: {
    minHeight: theme.controlHeight,
    border: theme.border,
    borderRadius: theme.borderRadius,
    cursor: 'pointer',
    transition: theme.backgroundColorTransition,
    outline: 'none',
    minWidth: '80px',
    fontSize: theme.controlFontSize,
    fontWeight: theme.controlFontWeight,
    '&.mobile': {
      minWidth: 'initial',
    },
    '&.primary': {
      borderColor: '#EBBF57',
      backgroundColor: theme.brandPrimaryColor,
    },
    '&.primary:hover': {
      backgroundColor: theme.brandPrimaryDarkColor,
    },
    '&.secondary': {
      backgroundColor: 'transparent',
    },
    '&.secondary:hover': {
      backgroundColor: theme.brandPrimaryColor,
    },
    '&.danger': {
      backgroundColor: theme.brandErrorLightColor,
    },
    '&.danger:hover': {
      backgroundColor: theme.brandErrorDarkColor,
    },
    '&.success': {
      backgroundColor: theme.brandSuccessLightColor,
    },
    '&.success:hover': {
      backgroundColor: theme.brandSuccessDarkColor,
    },
    '&:disabled, &:disabled:hover': {
      cursor: 'default',
      color: 'initial',
      borderColor: theme.brandGrayColor,
      backgroundColor: theme.brandLightGrayColor,
    },
  },
});

const ButtonComponent = (props) => {
  const {
    classes,
    type = 'primary',
    children,
    onClick,
    className = '',
    disabled = false,
  } = props;
  const { isMobile } = useContext(MobileContext);

  return (
    <button
      className={`${classes.root} ${className} ${type} ${isMobile ? 'mobile' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  classes: PropTypes.object,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default withStyle(style)(ButtonComponent);
