import InputStyles from '../input/InputComponentStyle';

export default (theme) => {
  const inputStyles = InputStyles(theme);

  return ({
    ...inputStyles,
    root: {
      ...inputStyles.root,
      minHeight: '100px',
    },
  });
};
