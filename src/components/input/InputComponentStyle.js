export const controlLabel = theme => ({
  color: theme.brandDarkGrayColor,
  fontSize: theme.controlFontSize,
  fontWeight: theme.controlFontWeight,
  marginBottom: '5px',
});

export const getBehaviourClasses = theme => ({
  outline: 'none',
  '&:disabled, &.disabled': {
    backgroundColor: theme.brandLightGrayColor,
  },
  '&.success': {
    color: theme.brandSuccessLightColor,
    borderColor: theme.brandSuccessLightColor,
    '&:placeholder': {
      color: theme.brandSuccessLightColor,
    },
  },
  '&.error': {
    color: theme.brandErrorLightColor,
    borderColor: theme.brandErrorLightColor,
    '&:placeholder': {
      color: theme.brandErrorLightColor,
    },
  },
  '&:focus, &.focus': {
    boxShadow: theme.focusBoxShadow,
  },
});

export default theme => ({
  root: {
    height: theme.controlHeight,
    border: theme.border,
    borderRadius: theme.borderRadius,
    backgroundColor: 'transparent',
    outline: 'none',
    width: '300px',
    padding: '6px 8px',
    paddingTop: '4px',
    fontSize: theme.controlFontSize,
    fontWeight: theme.controlFontWeight,
    boxSizing: 'border-box',
    ...getBehaviourClasses(theme),
  },
  rootWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: controlLabel(theme),
});
