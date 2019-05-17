import { controlLabel } from '../input/InputComponentStyle';

export default theme => ({
  rootWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  root: {
    display: 'flex',
    width: '100%',
  },
  select: {
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    width: '60px',
    '& > input': {
      width: '40px',
      padding: '4px 2px 6px 6px',
    },
    '& > div': {
      width: '15px',
    },
  },
  input: {
    borderLeft: 'none',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
  },
  label: controlLabel(theme),
});
