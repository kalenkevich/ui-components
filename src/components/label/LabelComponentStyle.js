export default theme => ({
  root: {
    fontSize: theme.controlFontSize,
    fontWeight: theme.controlFontWeight,
    '&.error': {
      color: theme.brandErrorDarkColor,
    },
  },
});
