export default theme => ({
  root: {
    display: 'inline-block',
    '&:after': {
      content: '" "',
      display: 'block',
      margin: '1px',
      borderRadius: '50%',
      border: `5px solid ${theme.brandPrimaryColor}`,
      borderColor: `${theme.brandPrimaryColor} transparent ${theme.brandPrimaryColor} transparent`,
      animation: 'lds-dual-ring 1.2s linear infinite',
    },
    '&.sm': {
      width: '16px',
      height: '16px',
      '&:after': {
        width: '16px',
        height: '16px',
      },
    },
    '&.md': {
      width: '64px',
      height: '64px',
      '&:after': {
        width: '64px',
        height: '64px',
      },
    },
    '&.lg': {
      width: '128px',
      height: '128px',
      '&:after': {
        width: '128px',
        height: '128px',
      },
    },
    '&.primary': {
      '&:after': {
        borderColor: `${theme.brandPrimaryColor} transparent ${theme.brandPrimaryColor} transparent`,
      },
    },
    '&.success': {
      '&:after': {
        borderColor: `${theme.brandSuccessLightColor} transparent ${theme.brandSuccessLightColor} transparent`,
      },
    },
    '&.info': {
      '&:after': {
        borderColor: `${theme.brandInfoLightColor} transparent ${theme.brandInfoLightColor} transparent`,
      },
    },
    '&.warning': {
      '&:after': {
        borderColor: `${theme.brandWarningLightColor} transparent ${theme.brandWarningLightColor} transparent`,
      },
    },
    '&.danger': {
      '&:after': {
        borderColor: `${theme.brandErrorLightColor} transparent ${theme.brandErrorLightColor} transparent`,
      },
    },
  },
  '@global': {
    '@keyframes lds-dual-ring': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
});
