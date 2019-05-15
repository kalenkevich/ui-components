export default theme => ({
  chatWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    height: '650px',
    flexShrink: '0',
    border: theme.border,
    borderRadius: theme.borderRadius,
  },
  chat: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
    flexShrink: '0',
    width: '100%',
    height: '100%',
    padding: '10px 10px 50px 10px',
    boxSizing: 'border-box',
    '&::-webkit-scrollbar ': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.brandPrimaryColor,
    },
  },
  chatMessageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '&:nth-child(even)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      '& $messageContent': {
        backgroundColor: theme.brandLightGrayColor,
      },
    },
    '&:nth-child(odd)': {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      '& $messageContent': {
        backgroundColor: theme.brandPrimaryColor,
      },
    },
  },
  chatMessageUserInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  chatMessageUserInfoAvatar: {
    marginRight: '5px',
  },
  messageSenderName: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: '12px',
    color: theme.brandDarkGrayColor,
  },
  messageSenderInfo: {
    display: 'flex',
  },
  messageContent: {
    minWidth: '100px',
    maxWidth: '300px',
    whiteSpace: 'pre-line',
    overflow: 'hidden',
    wordBreak: 'break-all',
    border: theme.border,
    borderRadius: theme.borderRadius,
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0',
  },
  messageDate: {
    display: 'flex',
    justifyContent: 'flex-start',
    color: theme.brandDarkGrayColor,
    fontSize: '12px',
  },
  actionPanel: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: 'white',
    borderTop: theme.border,
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    height: '50px',
    width: '350px',
    boxSizing: 'border-box',
  },
  actionPanelButton: {
    flexShrink: '0',
    marginLeft: '10px',
  },
});
