export const getBehaviourClasses = theme => ({
  outline: 'none',
  '&.mobile': {
    minWidth: 'initial',
  },
  '&.primary': {
    borderColor: theme.brandPrimaryDarkColor,
    backgroundColor: theme.brandPrimaryColor,
  },
  '&.primary:hover': {
    backgroundColor: theme.brandPrimaryDarkColor,
  },
  '&.secondary': {
    backgroundColor: 'transparent',
  },
  '&.secondary:hover': {
    borderColor: theme.brandPrimaryDarkColor,
    backgroundColor: theme.brandPrimaryColor,
  },
  '&.success': {
    borderColor: theme.brandSuccessDarkColor,
    backgroundColor: theme.brandSuccessLightColor,
  },
  '&.success:hover': {
    backgroundColor: theme.brandSuccessDarkColor,
  },
  '&.warning': {
    borderColor: theme.brandWarningDarkColor,
    backgroundColor: theme.brandWarningLightColor,
  },
  '&.warning:hover': {
    backgroundColor: theme.brandWarningDarkColor,
  },
  '&.info': {
    borderColor: theme.brandInfoDarkColor,
    backgroundColor: theme.brandInfoLightColor,
  },
  '&.info:hover': {
    backgroundColor: theme.brandInfoDarkColor,
  },
  '&.danger': {
    borderColor: theme.brandErrorDarkColor,
    backgroundColor: theme.brandErrorLightColor,
  },
  '&.danger:hover': {
    backgroundColor: theme.brandErrorDarkColor,
  },
  '&:disabled, &:disabled:hover, &.disabled, &.disabled:hover': {
    cursor: 'default',
    color: 'initial',
    borderColor: theme.brandGrayColor,
    backgroundColor: theme.brandLightGrayColor,
  },
  '&:focus, &.focus': {
    boxShadow: theme.focusBoxShadow,
  },
});

export const getButtonStyles = theme => ({
  minHeight: theme.controlHeight,
  border: theme.border,
  borderRadius: theme.borderRadius,
  cursor: 'pointer',
  transition: theme.backgroundColorTransition,
  minWidth: '80px',
  fontSize: theme.controlFontSize,
  fontWeight: theme.controlFontWeight,
  padding: '5px 7px',
  boxSizing: 'border-box',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default theme => ({
  root: {
    ...getButtonStyles(theme),
    ...getBehaviourClasses(theme),
  },
  spinner: {
    marginLeft: '5px',
  },
});
