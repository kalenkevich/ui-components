import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../../components/card';
import Avatar from '../../../components/avatar';
import LabeledText from '../../../components/labeled-text';
import Button from '../../../components/button';
import Form, { FormSection, FormSectionAction } from '../../../components/form';
import OrderStatusQueue from '../status-queue/StatusQueue';
import { getClassName, getFormattedDateRange } from '../../../services/Utils';

export const OrderPageStyle = theme => ({
  root: {
    display: 'flex',
  },
  usersContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: theme.border,
    borderRadius: theme.borderRadius,
  },
  userInfoAvatarCrown: {
    color: theme.brandPrimaryColor,
  },
  userInfo: {
    display: 'flex',
    padding: '10px',
  },
  userInfoLabel: {
    marginLeft: '10px',
  },
  orderForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  chat: {
    marginLeft: '10px',
  },
  orderContainer: {
    marginTop: '10px',
    border: theme.border,
    borderRadius: theme.borderRadius,
  },
});

const orderStatuses = [{
  value: 'orderStatusValue1',
  label: 'Предложение сделки',
  type: 'success',
}, {
  value: 'orderStatusValue2',
  label: 'Сделка в рассмотрении',
  type: 'success',
}, {
  value: 'orderStatusValue3',
  label: 'Сделка принята',
  type: 'success',
}, {
  value: 'orderStatusValue4',
  label: 'Сделка началась',
  type: 'success',
}, {
  value: 'orderStatusValue5',
  label: 'Завершение сделки',
  type: 'success',
}, {
  value: 'orderStatusValue6',
  label: 'Сделка завершена',
  type: 'success',
}];

const OrderPage = (props) => {
  const {
    classes,
    className,
    order,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const contractorClasses = getClassName([
    classes.userInfo,
    classes.contractor,
  ]);

  return (
    <div className={rootClasses}>
      <div className={classes.orderForm}>
        <Card className={classes.usersContainer}>
          <div className={contractorClasses}>
            <Avatar
              url={order.contractor.avatarUrl}
              rate={order.contractor.rate}
            />
            <LabeledText
              className={classes.userInfoLabel}
              label={'Исполнитель'}
              content={order.contractor.name}
              reverse
            />
            <FontAwesomeIcon icon={'crown'} className={classes.userInfoAvatarCrown}/>
          </div>
          <OrderStatusQueue
            statuses={orderStatuses}
            currentStatus={order.status}
          />
        </Card>
        <Form className={classes.orderContainer} title={'Детали заказа'}>
          <FormSection size='6'>
            <FormSection>
              <LabeledText
                label={'Цифры исполнителя'}
                content={order.contractor.phone}
              />
            </FormSection>
            <FormSection>
              <LabeledText
                label={'Цена вопроса'}
                content={`${order.price.value} ${order.price.currency}`}
              />
            </FormSection>
            <FormSection>
              <LabeledText
                label={'Сроки'}
                content={getFormattedDateRange(order.dateStart, order.dateEnd)}
              />
            </FormSection>
            <FormSection>
              <LabeledText
                label={'Услуга'}
                content={order.serviceType}
              />
            </FormSection>
            <FormSection>
              <LabeledText
                label={'Статус'}
                content={order.status}
              />
            </FormSection>
          </FormSection>
          <FormSection size='6'>
            <LabeledText
              label={'Описание'}
              content={order.description}
            />
          </FormSection>
          <FormSectionAction>
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
          </FormSectionAction>
        </Form>
      </div>
    </div>
  );
};

OrderPage.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  order: PropTypes.object,
};

export default withStyles(OrderPageStyle)(OrderPage);
