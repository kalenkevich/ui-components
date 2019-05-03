export default theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '8px 10px',
    cursor: 'pointer',
    transition: theme.backgroundColorTransition,
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
  },
});
