import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../services/Utils';
import Input from '../components/input';
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

const MainPage = (props) => {
  const {
    classes,
    className,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return (
    <div className={rootClasses}>
      <Form className={classes.filterForm}>
        <FormSection>
          <Select
            label={'Сортировка'}
          />
        </FormSection>
        <FormSection>
          <DateRangePicker
            label={'Сроки'}
            startDate={new Date()}
            endDate={new Date()}
          />
        </FormSection>
        <FormSection>
          <Input label={'Место'}/>
        </FormSection>
        <FormSection size={'6'}>
          <Input label={'Рейтинг от'}/>
        </FormSection>
        <FormSection size={'6'}>
          <Input label={'Цена в час'}/>
        </FormSection>
        <FormSection>
          <Select
            label={'Индустрия'}
          />
        </FormSection>
        <FormSection>
          <Select
            label={'Специализация'}
          />
        </FormSection>
      </Form>
      <div className={classes.searchForm}>
        <Card className={classes.searchInputCard}>
          <Input className={classes.searchInput}/>
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
