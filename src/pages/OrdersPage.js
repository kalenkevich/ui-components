import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../services/Utils';
import Input from '../components/input';
import Card from '../components/card';
import OrderListItem from './components/order/OrderListItem';

export const MainPageStyle = () => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  searchResult: {
    width: '100%',
  },
  searchForm: {
    width: '100%',
    marginLeft: '10px',
    maxWidth: '750px',
  },
  searchInputCard: {
    padding: '20px',
  },
  searchInput: {},
  orderListItem: {
    margin: '15px 0',
  },
});

const customer = {
  avatarUrl: 'https://avatar-cdn.atlassian.com/5ba3e03512b3ea2f78b71046?by=id&sg=iDdadg265ubxOx3V4Ljf5D2%2FTDg%3D&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-5.svg&nocaching=0.6002600680772352',
  name: 'Alexey Kalenkevich',
  rate: 100,
};

const order = {
  customer,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor consectetur nibh quis feugiat. Sed malesuada suscipit lacus in condimentum. Phasellus a finibus nunc. Vivamus ut metus mi. Donec mattis volutpat facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas porttitor turpis ac velit fermentum, eget sollicitudin ex pretium. Ut pellentesque pharetra venenatis.\\n\' +\n' +
    '  \'\\n\' +\n' +
    '  \'Pellentesque ut odio eu lacus posuere luctus id nec dolor. Mauris lobortis interdum velit, in accumsan nibh scelerisque vel. Maecenas faucibus ornare mi, sit amet vestibulum metus posuere sed. Sed nulla arcu, rutrum vitae felis vel, pulvinar dictum risus. Donec lorem sem, mollis eu gravida vitae, suscipit id massa. Nullam imperdiet sem arcu. Nunc sit amet maximus elit.\' +\n' +
    '  \'Pellentesque ut odio eu lacus posuere luctus id nec dolor. Mauris lobortis interdum velit, in accumsan nibh scelerisque vel. Maecenas faucibus ornare mi, sit amet vestibulum metus posuere sed. Sed nulla arcu, rutrum vitae felis vel, pulvinar dictum risus. Donec lorem sem, mollis eu gravida vitae, suscipit id massa. Nullam imperdiet sem arcu. Nunc sit amet maximus elit.',
  budget: {
    value: 250,
    currency: 'USD',
  },
  dateStart: new Date(),
  dateEnd: new Date(),
  location: 'Слоним',
};

const orders = [
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
  order,
];

const OrdersPage = (props) => {
  const {
    classes,
    className,
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const [filter, updateFilter] = useState({
    searchValue: '',
  });
  const setFilter = (newFilterValue) => {
    updateFilter(newFilterValue);
  };

  return (
    <div className={rootClasses}>
      <div className={classes.searchForm}>
        <Card className={classes.searchInputCard}>
          <Input
            className={classes.searchInput}
            value={filter.searchValue}
            onChange={(e) => {
              setFilter({
                ...filter,
                searchValue: e.target.value,
              });
            }}
          />
        </Card>
        <div className={classes.searchResult}>
          {(orders || []).map((or, index) => (
            <OrderListItem
              key={index}
              className={classes.orderListItem}
              order={or}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

OrdersPage.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
};

export default withStyles(MainPageStyle)(OrdersPage);
