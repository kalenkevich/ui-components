import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import MobileContext from '../../context/MobileContext';
import ButtonStyle from './ButtonStyle';
import Tooltip from '../tooltip';

const ButtonComponent = (props) => {
  const {
    classes,
    type = 'secondary',
    children,
    onClick = () => {},
    className = '',
    disabled = false,
    tooltip = '',
  } = props;
  const { isMobile } = useContext(MobileContext);
  const [isHovered, setHoveredState] = useState(false);

  return (
    <>
      <Tooltip label={tooltip} show={isHovered}/>
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
        onMouseEnter={() => setHoveredState(true)}
        onMouseLeave={() => setHoveredState(false)}
        onKeyPress={(e) => {
          e.stopPropagation();

          if (e.key === 'Enter') {
            onClick();
          }
        }}
      >
        {children}
      </button>
    </>
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
  tooltip: PropTypes.string,
};

export default withStyle(ButtonStyle)(ButtonComponent);
