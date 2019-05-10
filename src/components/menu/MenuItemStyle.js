export default theme => ({
  root: {
    listStyle: 'none',
    height: '40px',
    width: '100%',
  },
  label: {
    textDecoration: 'none',
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    boxSizing: 'border-box',
    color: theme.fontColor,
    transition: theme.backgroundColorTransition,
    outline: 'none',
    '&:hover, &:focus': {
      backgroundColor: theme.brandPrimaryColor,
    },
  },
});
