export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
    padding: '5px',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    '&:focus': {
      boxShadow: theme.focusBoxShadow,
    },
  },
  label: {
    color: theme.brandDarkGrayColor,
  },
  context: {
    paddingTop: '4px',
  },
});
