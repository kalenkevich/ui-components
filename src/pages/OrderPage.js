import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../services/Utils';
import Chat from '../components/chat';
import OrderForm from './components/order/OrderForm';

export const OrderPageStyle = theme => ({
  root: {
    display: 'flex',
  },
  chat: {
    marginLeft: '10px',
  },
});

const customer = {
  avatarUrl: 'https://avatar-cdn.atlassian.com/5bb76a711767377761ba792a?by=id&sg=V7yZWitF8hO6zkgcsqLaBO331%2BI%3D&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAC-1.svg',
  name: 'Артем Чалов',
  rate: 100,
};

const contractor = {
  avatarUrl: 'https://avatar-cdn.atlassian.com/5ba3e03512b3ea2f78b71046?by=id&sg=iDdadg265ubxOx3V4Ljf5D2%2FTDg%3D&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-5.svg&nocaching=0.6002600680772352',
  name: 'Алексей Каленкевич',
  rate: 100,
  phone: '+375441234567',
};

const order = {
  customer,
  contractor,
  dateStart: Date.now(),
  dateEnd: Date.now(),
  status: 'orderStatusValue1',
  type: 'default',
  serviceType: 'Предложение своей сделки',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor consectetur nibh quis feugiat. Sed malesuada suscipit lacus in condimentum. Phasellus a finibus nunc. Vivamus ut metus mi. Donec mattis volutpat facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas porttitor turpis ac velit fermentum, eget sollicitudin ex pretium. Ut pellentesque pharetra venenatis.\n' +
  '\n' +
  'Pellentesque ut odio eu lacus posuere luctus id nec dolor. Mauris lobortis interdum velit, in accumsan nibh scelerisque vel. Maecenas faucibus ornare mi, sit amet vestibulum metus posuere sed. Sed nulla arcu, rutrum vitae felis vel, pulvinar dictum risus. Donec lorem sem, mollis eu gravida vitae, suscipit id massa. Nullam imperdiet sem arcu. Nunc sit amet maximus elit.' +
  'Pellentesque ut odio eu lacus posuere luctus id nec dolor. Mauris lobortis interdum velit, in accumsan nibh scelerisque vel. Maecenas faucibus ornare mi, sit amet vestibulum metus posuere sed. Sed nulla arcu, rutrum vitae felis vel, pulvinar dictum risus. Donec lorem sem, mollis eu gravida vitae, suscipit id massa. Nullam imperdiet sem arcu. Nunc sit amet maximus elit.',
  price: {
    currency: 'BYN',
    value: 1000,
  },
  messages: [{
    id: 0,
    date: new Date(),
    sender: customer,
    content: 'asdasdasdasd',
  }, {
    id: 1,
    date: new Date(),
    sender: contractor,
    content: 'asdasdasdasd',
  }, {
    id: 2,
    date: new Date(),
    sender: customer,
    content: 'asdasdasdasd',
  }, {
    id: 3,
    date: new Date(),
    sender: contractor,
    content: 'asdasdasdasd',
  }, {
    id: 4,
    date: new Date(),
    sender: contractor,
    content: 'asdasdasdasd',
  }, {
    id: 5,
    date: new Date(),
    sender: contractor,
    content: 'asdasdasdasd',
  }, {
    id: 6,
    date: new Date(),
    sender: customer,
    content: 'asdasdasdasd',
  }, {
    id: 7,
    date: new Date(),
    sender: customer,
    content: 'asdasdasdasd',
  }],
};

const OrderPage = (props) => {
  const {
    classes,
    className,
  } = props;

  const [messages, setMessages] = useState(order.messages);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return (
    <div className={rootClasses}>
      <OrderForm order={order}/>
      <Chat
        className={classes.chat}
        messages={messages}
        onSendMessage={(messageContent) => {
          setMessages([
            ...messages, {
              content: messageContent,
              id: Date.now(),
              date: new Date(),
              sender: customer,
            },
          ]);
        }}
      />
    </div>
  );
};

OrderPage.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
};

export default withStyles(OrderPageStyle)(OrderPage);
