export const cell = (theme, width = 37, height = 37) => ({
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
  transition: theme.backgroundColorTransition,
  '&.current': {
    border: theme.border,
    borderColor: theme.brandPrimaryDarkColor,
    borderStyle: 'dashed',
  },
  '&.selected': {
    border: theme.border,
    borderColor: theme.brandPrimaryDarkColor,
    backgroundColor: theme.brandPrimaryColor,
  },
  '&:hover': {
    border: theme.border,
    borderColor: theme.brandPrimaryDarkColor,
    backgroundColor: theme.brandPrimaryColor,
  },
  '&.current.selected': {
    border: 'none',
  },
});

export const row = () => ({
  display: 'flex',
  width: '100%',
  flexShrink: '0',
  cursor: 'default',
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
    minWidth: '300px',
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
    padding: '3px 0',
  },
  month: {
    ...cell(theme),
  },
  weekLegend: {
    ...row(theme),
    cursor: 'default',
    justifyContent: 'center',
    borderTop: theme.border,
    borderBottom: theme.border,
    color: theme.brandDarkGrayColor,
  },
  weekDay: {
    ...cell(theme),
    justifyContent: 'center',
    cursor: 'default',
    border: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.selected': {
      '&:hover': {
        backgroundColor: theme.brandPrimaryColor,
      },
      backgroundColor: theme.brandPrimaryColor,
    },
  },
  weeks: {
    padding: '3px 0',
  },
  week: {
    ...row(theme),
    justifyContent: 'center',
  },
  day: {
    ...cell(theme),
    '&.another-month': {
      backgroundColor: theme.brandLightGrayColor,
      cursor: 'default',
      '&:hover': {
        borderColor: theme.brandLightGrayColor,
        backgroundColor: theme.brandLightGrayColor,
      },
    },
  },
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
});
