import {
  controlLabel,
  getBehaviourClasses,
} from '../input/InputComponentStyle';

export default theme => ({
  rootWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    border: theme.border,
    borderRadius: theme.borderRadius,
    ...getBehaviourClasses(theme),
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    fontSize: theme.controlFontSize,
    fontWeight: theme.controlFontWeight,
    height: theme.controlHeight,
    boxSizing: 'border-box',
    paddingLeft: '8px',
    width: '270px',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    '&:placeholder': {
      color: theme.brandDarkGrayColor,
    },
  },
  optionsWrapper: {
    position: 'relative',
  },
  options: {
    position: 'absolute',
    top: '3px',
    left: '0',
    width: 'calc(100% - 2px)',
    minWidth: '90px',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '240px',
    border: theme.border,
    borderRadius: theme.borderRadius,
    backgroundColor: '#FFFFFF',
    overflow: 'auto',
    zIndex: '1',
    padding: '10px 0',
    boxShadow: theme.boxShadow,
    '&::-webkit-scrollbar ': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.brandPrimaryColor,
    },
    margin: '0',
  },
  option: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '8px 10px',
    cursor: 'pointer',
    transition: theme.backgroundColorTransition,
    outline: 'none',
    color: theme.fontColor,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: theme.brandPrimaryColor,
    },
    '&.disabled': {
      cursor: 'initial',
      backgroundColor: theme.brandLightGrayColor,
      '&:hover': {
        backgroundColor: theme.brandLightGrayColor,
      },
    },
    '&:focus': {
      border: `1px solid ${theme.brandPrimaryColor}`,
      borderRadius: theme.borderRadius,
      padding: '7px 9px',
    },
  },
  iconWrapper: {
    width: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&.disabled': {
      cursor: 'default',
      backgroundColor: theme.brandLightGrayColor,
    },
  },
  icon: {
    cursor: 'pointer',
    transition: 'transform linear 100ms',
    color: theme.brandDarkGrayColor,
    '&.up': {
      transform: 'rotateX(180deg)',
    },
    '&.disabled': {
      cursor: 'default',
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
