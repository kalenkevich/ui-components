export default theme => ({
  root: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: theme.borderRadius,
    cursor: 'pointer',
    border: theme.border,
    borderColor: 'transparent',
    transition: '100ms border-color linear',
    '&:hover': {
      border: theme.border,
      borderColor: theme.brandPrimaryColor,
    },
  },
});
