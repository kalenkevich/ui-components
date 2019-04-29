export const cell = (theme, width = 50, height = 50) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: `${width}px`,
  height: `${height}px`,
  cursor: 'pointer',
  flexShrink: '0',
  flexGrow: '0',
  borderRadius: theme.borderRadius,
  boxSizing: 'border-box',
  margin: '3px',
  '&.selected, &:hover': {
    border: theme.border,
    borderColor: theme.brandPrimaryColor,
  },
});

export const row = theme => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  flexShrink: '0',
  flexGrow: '0',
  '&:first-of-type': {
    borderTop: 'none',
  },
});

export default theme => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
    '& > input': {
      cursor: 'pointer',
    },
  },
  popup: {
    position: 'absolute',
    top: '65px',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '750px',
    border: theme.border,
    borderRadius: theme.borderRadius,
    backgroundColor: 'white',
    zIndex: '1',
    marginBottom: '100px',
  },
  years: {
    ...row(theme),
    justifyContent: 'center',
    alignItems: 'center',
  },
  year: cell(theme),
  months: {
    ...row(theme),
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: cell(theme),
  weeks: row(theme),
  weekDay: {
    ...cell(theme, 100),
    cursor: 'default',
    '&:hover': {
      border: 'none',
    },
    '&.selected': {
      border: theme.border,
      borderColor: theme.brandPrimaryColor,
    },
  },
  week: row(theme),
  day: cell(theme, 100),
  actionPanel: {
    ...row(theme),
    borderTop: theme.border,
    boxSizing: 'border-box',
    justifyContent: 'flex-end',
    padding: '10px',
  },
  actionPanelButton: {
    marginLeft: '10px',
    '&:first-of-type': {
      marginLeft: '0',
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
});
