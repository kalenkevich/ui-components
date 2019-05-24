import { getButtonStyles, getBehaviourClasses } from '../button/ButtonStyle';

export default theme => ({
  rootWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    width: '100%',
    border: theme.border,
    borderRadius: theme.borderRadius,
    ...getBehaviourClasses(theme),
  },
  button: {
    ...getButtonStyles(theme),
    width: '100%',
    justifyContent: 'flex-start',
    textAlign: 'left',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    borderRadius: '0',
  },
  iconWrapper: {
    width: '30px',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    '&.separate': {
      borderLeft: theme.border,
    },
    '&.disabled': {
      cursor: 'default',
    },
  },
});
