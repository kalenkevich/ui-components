import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import Input from '../../components/input';
import CurrencyInput from '../../components/currency-input';
import NumberInput from '../../components/number-input';
import Form, { FormSection } from '../../components/form';
import Select from '../../components/select';
import { DateRangePicker } from '../../components/datepicker';

export const currencies = [{
  label: 'BYN',
  value: 'BYN',
}, {
  label: 'USD',
  value: 'USD',
}, {
  label: 'EUR',
  value: 'EUR',
}];

export const industries = [{
  label: 'Фото',
  value: 'photo',
}, {
  label: 'Ведущий',
  value: 'manager',
}, {
  label: 'Ресторан',
  value: 'restaurant',
}];

export const sortOptions = [{
  label: 'Возрастанию рейтинга',
  value: 'rate_up',
}, {
  label: 'Убыванию рейтинга',
  value: 'rate_down',
}, {
  label: 'Возрастанию цены в час',
  value: 'price_up',
}, {
  label: 'Убыванию цены в час',
  value: 'price_down',
}];

export const specializations = [{
  label: 'Все',
  value: 'all',
}];

export const FilterStyles = () => ({
  root: {
    display: 'flex',
    width: '400px',
    position: 'sticky',
    top: '10px',
    height: 'fit-content',
  },
});

const FilterForm = (props) => {
  const {
    classes,
    className,
    filter,
    onChange,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return (
    <Form className={rootClasses}>
      <FormSection>
        <Select
          label={'Индустрия'}
          options={industries}
          value={filter.industry}
          onSelect={(option) => {
            onChange({
              ...filter,
              industry: option.value,
            });
          }}
        />
      </FormSection>
      <FormSection>
        <Select
          label={'Специализация'}
          value={filter.specialization}
          options={specializations}
          onSelect={(option) => {
            onChange({
              ...filter,
              specialization: option.value,
            });
          }}
        />
      </FormSection>
      <FormSection>
        <DateRangePicker
          label={'Сроки'}
          startDate={filter.dateStart}
          endDate={filter.dateEnd}
          onChange={({ startDate, endDate }) => {
            onChange({
              ...filter,
              dateStart: startDate,
              dateEnd: endDate,
            });
          }}
        />
      </FormSection>
      <FormSection>
        <Input
          label={'Место'}
          value={filter.location}
          onChange={(e) => {
            onChange({
              ...filter,
              location: e.target.value,
            });
          }}
        />
      </FormSection>
      <FormSection size={'6'}>
        <NumberInput
          label={'Рейтинг от'}
          value={filter.rateFrom}
          onChange={(val) => {
            onChange({
              ...filter,
              rateFrom: val,
            });
          }}
        />
      </FormSection>
      <FormSection size={'6'}>
        <CurrencyInput
          label={'Цена в час'}
          price={filter.pricePerHour}
          onChange={(val) => {
            onChange({
              ...filter,
              pricePerHour: val,
            });
          }}
          currencies={currencies}
        />
      </FormSection>
      <FormSection>
        <Select
          label={'Сортировка'}
          value={filter.sortBy}
          onSelect={(option) => {
            onChange({
              ...filter,
              sortBy: option.value,
            });
          }}
          options={sortOptions}
        />
      </FormSection>
    </Form>
  );
};

FilterForm.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  filter: PropTypes.object,
  onChange: PropTypes.func,
};

export default withStyles(FilterStyles)(FilterForm);
