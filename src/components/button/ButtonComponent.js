import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import MobileContext from '../../context/MobileContext';
import ButtonStyle from './ButtonStyle';

const ButtonComponent = (props) => {
  const {
    classes,
    type = 'secondary',
    children,
    onClick = () => {},
    className = '',
    disabled = false,
  } = props;
  const { isMobile } = useContext(MobileContext);

  return (
    <button
      className={`${classes.root} ${className} ${type} ${isMobile ? 'mobile' : ''}`}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();

        if (disabled) {
          return;
        }

        onClick();
      }}
      onKeyPress={(e) => {
        e.stopPropagation();

        if (e.key === 'Enter') {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  classes: PropTypes.object,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default withStyle(ButtonStyle)(ButtonComponent);
