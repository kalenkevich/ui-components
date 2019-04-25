export default theme => ({
  headerContainer: {
    height: '40px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    border: theme.border,
    borderRadius: theme.borderRadius,
  },
  brandTitle: {
    fontSize: '24px',
    textDecoration: 'none',
    color: theme.brandDarkGrayColor,
  },
  actionPanel: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  actionPanelButton: {
    marginRight: '10px',
    '&:last-of-type': {
      marginRight: '0',
    },
  },
});
