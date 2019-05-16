export default theme => ({
  root: {
    listStyle: 'none',
    height: '40px',
    boxSizing: 'border-box',
    borderTopRightRadius: theme.borderRadius,
    borderBottomRightRadius: theme.borderRadius,
    '&.hover, &.focus': {
      backgroundColor: theme.brandPrimaryColor,
    },
    '&.expanded': {
      borderBottomRightRadius: '0',
      backgroundColor: theme.brandLightGrayColor,
    },
  },
  label: {
    padding: '0 20px',
    textDecoration: 'none',
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    color: theme.fontColor,
    transition: theme.backgroundColorTransition,
    outline: 'none',
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
  children: {
    paddingLeft: '20px',
    borderRadius: theme.borderRadius,
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    backgroundColor: theme.brandLightGrayColor,
  },
});
