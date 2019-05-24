import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Avatar from '../../../components/avatar';
import LabeledText from '../../../components/labeled-text';
import Card from '../../../components/card';
import Button from '../../../components/button';
import ExpandableSection from '../../../components/expandable-section';
import { getClassName, getFormattedDateRange } from '../../../services/Utils';

export const OrderListItemStyle = () => ({
  rootWrapper: {
    display: 'flex',
    padding: '10px',
  },
  root: {
    display: 'flex',
    width: '100%',
  },
  userInfo: {
    display: 'flex',
    flexBasis: '20%',
  },
  orderInfo: {
    display: 'flex',
    justifyContent: 'center',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > *': {
      marginRight: '10px',
    },
  },
});

const OrderListItem = (props) => {
  const {
    classes,
    className,
    order,
  } = props;
  const rootClasses = getClassName([
    classes.rootWrapper,
    className,
  ]);

  return (
    <Card className={rootClasses}>
      <ExpandableSection childrenClassName={classes.root}
        expandedContent={() => (
          <>
            <LabeledText
              label={'Описание'}
              content={order.description}
            />
            <div className={classes.actions}>
              <Button type='success'>
                Начать
              </Button>
              <Button type='warning'>
                Отклонить
              </Button>
              <Button type='success'>
                Завершить
              </Button>
              <Button type='danger'>
                Отменить
              </Button>
            </div>
          </>
        )}
      >
        <div className={classes.userInfo}>
          <Avatar url={order.customer.avatarUrl} rate={order.customer.rate}/>
          <LabeledText
            reverse
            label={'Заказчик'}
            content={order.customer.name}
          />
        </div>
        <div className={classes.orderInfo}>
          <LabeledText
            label='Цена вопроса'
            content={`${order.budget.value} ${order.budget.currency}`}
          />
          <LabeledText
            label='Дата'
            content={getFormattedDateRange(order.dateStart, order.dateEnd)}
          />
          <LabeledText
            label='Место'
            content={order.location}
          />
        </div>
      </ExpandableSection>
    </Card>
  );
};

OrderListItem.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  order: PropTypes.object,
};

export default withStyles(OrderListItemStyle)(OrderListItem);
