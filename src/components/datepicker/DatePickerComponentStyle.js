export const cell = (theme, width = 55, height = 55) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: `${width}px`,
  height: `${height}px`,
  cursor: 'pointer',
  flexShrink: '0',
  borderRadius: theme.borderRadius,
  boxSizing: 'border-box',
  margin: '3px',
  '&.selected, &:hover': {
    border: theme.border,
    backgroundColor: theme.brandPrimaryColor,
  },
  '&.current': {
    border: theme.border,
    borderStyle: 'dashed',
    borderColor: theme.brandPrimaryColor,
  },
});

export const row = theme => ({
  display: 'flex',
  width: '100%',
  flexShrink: '0',
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
    borderBottom: theme.border,
  },
  year: cell(theme),
  months: {
    ...row(theme),
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: cell(theme),
  weeks: {
    ...row(theme),
    borderTop: theme.border,
    borderBottom: theme.border,
  },
  weekDay: {
    ...cell(theme),
    cursor: 'default',
    '&:hover': {
      border: 'none',
      backgroundColor: 'transparent',
    },
    '&.selected': {
      border: theme.border,
      borderColor: theme.brandPrimaryColor,
    },
  },
  week: row(theme),
  day: cell(theme),
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
