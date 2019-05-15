import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import Avatar from '../avatar';
import Input from '../input';
import Button from '../button';
import ChatStyles from './ChatStyles';

export const formatter = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

const Chat = (props) => {
  const {
    classes,
    className,
    messages,
    onSendMessage,
  } = props;
  const chatRef = useRef(null);
  const [newMessage, setNewMessage] = useState('');
  const rootClasses = getClassName([
    classes.chatWrapper,
    className,
  ]);
  const scrollToBottom = () => {
    if (chatRef) {
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    }
  };
  const onSend = () => {
    if (newMessage) {
      onSendMessage(newMessage);
      setNewMessage('');
      scrollToBottom();
    }
  };

  useEffect(() => scrollToBottom(), [messages]);

  return (
    <div className={rootClasses}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onSend();
        }
      }}
    >
      <div className={classes.chat} ref={chatRef}>
        {(messages || []).map(message => (
          <div className={classes.chatMessageWrapper} key={message.id}>
            <div className={classes.chatMessageUserInfo}>
              <Avatar
                className={classes.chatMessageUserInfoAvatar}
                size={'xs'}
                url={message.sender.avatarUrl}
              />
              <div className={classes.messageSenderName}>
                {message.sender.name}
              </div>
            </div>
            <div className={classes.messageContent}>
              {message.content}
            </div>
            <div className={classes.messageDate}>
              {formatter.format(message.date)}
            </div>
          </div>
        ))}
      </div>
      <div className={classes.actionPanel}>
        <Input
          value={newMessage}
          placeholder='Введите сообщение'
          onChange={e => setNewMessage(e.target.value)}
        />
        <Button
          className={classes.actionPanelButton}
          onClick={onSend}
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};

Chat.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  messages: PropTypes.array,
  onSendMessage: PropTypes.func,
};

export default withStyles(ChatStyles)(Chat);
