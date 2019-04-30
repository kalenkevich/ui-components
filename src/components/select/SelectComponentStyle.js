import { controlLabel } from '../input/InputComponentStyle';

export default theme => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  rootWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  valueOption: {
    display: 'flex',
    alignItems: 'center',
    border: theme.border,
    borderRadius: theme.borderRadius,
    fontSize: theme.controlFontSize,
    fontWeight: theme.controlFontWeight,
    height: theme.controlHeight,
    boxSizing: 'border-box',
    paddingLeft: '8px',
    width: '300px',
    cursor: 'pointer',
    '&.disabled': {
      cursor: 'default',
      color: theme.brandDarkGrayColor,
      backgroundColor: theme.brandLightGrayColor,
    },
    '&.success': {
      color: theme.brandSuccessLightColor,
      borderColor: theme.brandSuccessLightColor,
    },
    '&.error': {
      color: theme.brandErrorLightColor,
      borderColor: theme.brandErrorLightColor,
    },
    '&.placeholder': {
      color: theme.brandDarkGrayColor,
    },
  },
  options: {
    position: 'absolute',
    top: `calc(${theme.controlHeight} + 3px)`,
    left: '0',
    width: 'calc(100% - 2px)',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '240px',
    border: theme.border,
    borderRadius: theme.borderRadius,
    backgroundColor: '#FFFFFF',
    overflow: 'auto',
    zIndex: '1',
    boxShadow: theme.boxShadow,
  },
  option: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '8px 10px',
    cursor: 'pointer',
    borderTop: theme.border,
    transition: theme.backgroundColorTransition,
    '&:first-of-type': {
      borderTop: 'none',
    },
    '&:hover': {
      backgroundColor: theme.brandPrimaryColor,
    },
  },
  icon: {
    position: 'absolute',
    right: '10px',
    top: '8px',
    cursor: 'pointer',
    transition: 'transform linear 100ms',
    '&.up': {
      transform: 'rotateX(180deg)',
    },
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '1',
  },
  label: controlLabel(theme),
});
