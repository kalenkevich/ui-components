import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../services/Utils';
import Input from '../components/input';
import CurrencyInput from '../components/currency-input';
import NumberInput from '../components/number-input';
import Form, { FormSection } from '../components/form';
import Card from '../components/card';
import Select from '../components/select';
import { DateRangePicker } from '../components/datepicker';
import ContractorListItem from './components/contractor/ContractorListItem';

export const MainPageStyle = () => ({
  root: {
    display: 'flex',
  },
  filterForm: {
    display: 'flex',
    width: '400px',
    position: 'sticky',
    top: '10px',
    height: 'fit-content',
  },
  searchForm: {
    width: '100%',
    marginLeft: '10px',
  },
  searchInputCard: {
    padding: '20px',
  },
  searchInput: {},
  searchResult: {
    marginTop: '10px',
    boxSizing: 'border-box',
  },
  contractorListItem: {
    margin: '15px 0',
  },
});

const contractor = {
  avatarUrl: 'https://avatar-cdn.atlassian.com/5ba3e03512b3ea2f78b71046?by=id&sg=iDdadg265ubxOx3V4Ljf5D2%2FTDg%3D&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-5.svg&nocaching=0.6002600680772352',
  name: 'Alexey Kalenkevich',
  rate: 100,
  industry: 'Software Developer Legend',
  pricePerHour: {
    value: 100000,
    currency: 'USD',
  },
};

const contractors = [
  contractor,
  contractor,
  contractor,
  contractor,
  contractor,
  contractor,
  contractor,
  contractor,
  contractor,
  contractor,
  contractor,
  contractor,
  contractor,
  contractor,
];

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

const MainPage = (props) => {
  const {
    classes,
    className,
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const [filter, updateFilter] = useState({
    industry: 'photo',
    specialization: 'all',
    dateStart: new Date(),
    dateEnd: new Date(),
    location: 'Слоним',
    rateFrom: 3,
    pricePerHour: {
      value: 50,
      currency: 'BYN',
    },
    sortBy: 'rate_up',
    searchValue: '',
  });
  const setFilter = (newFilterValue) => {
    updateFilter(newFilterValue);
  };

  return (
    <div className={rootClasses}>
      <Form className={classes.filterForm}>
        <FormSection>
          <Select
            label={'Индустрия'}
            options={industries}
            value={filter.industry}
            onSelect={(option) => {
              setFilter({
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
              setFilter({
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
              setFilter({
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
              setFilter({
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
              setFilter({
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
              setFilter({
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
              setFilter({
                ...filter,
                sortBy: option.value,
              });
            }}
            options={sortOptions}
          />
        </FormSection>
      </Form>
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
          {(contractors || []).map((c, index) => (
            <ContractorListItem
              key={index}
              className={classes.contractorListItem}
              contractor={c}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
};

export default withStyles(MainPageStyle)(MainPage);
