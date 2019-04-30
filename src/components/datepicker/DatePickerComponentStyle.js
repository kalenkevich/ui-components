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
  border: `1px solid ${theme.brandLightGrayColor}`,
  margin: '3px',
  transition: theme.backgroundColorTransition,
  '&.current': {
    border: theme.border,
    borderStyle: 'dashed',
    borderColor: theme.brandPrimaryColor,
  },
  '&.selected': {
    border: theme.border,
    backgroundColor: theme.brandPrimaryColor,
  },
  '&:hover': {
    border: theme.border,
    backgroundColor: theme.brandPrimaryColor,
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
    fontWeight: theme.controlFontWeight,
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
    boxShadow: theme.boxShadow,
  },
  years: {
    ...row(theme),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: theme.border,
  },
  year: cell(theme, 55, 35),
  months: {
    ...row(theme),
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: cell(theme, 55, 35),
  weeks: {
    ...row(theme),
    borderTop: theme.border,
    borderBottom: theme.border,
    color: theme.brandDarkGrayColor,
  },
  weekDay: {
    ...cell(theme, 55, 35),
    cursor: 'default',
    border: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.selected': {
      backgroundColor: theme.brandPrimaryColor,
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
