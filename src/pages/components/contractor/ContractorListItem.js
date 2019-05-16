import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../services/Utils';
import Avatar from '../../../components/avatar';
import LabeledText from '../../../components/labeled-text';
import Card from '../../../components/card';
import Checkbox from '../../../components/checkbox';

export const ContractorListItemStyle = {
  root: {
    display: 'flex',
    padding: '10px',
  },
  userInfo: {
    display: 'flex',
    flexBasis: '40%',
  },
  contractorInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '30%',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexBasis: '30%',
  },

};

const ContractorListItem = (props) => {
  const {
    classes,
    className,
    contractor,
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const [checked, setCheckedState] = useState(false);

  return (
    <Card className={rootClasses}>
      <div className={classes.userInfo}>
        <Avatar url={contractor.avatarUrl} rate={contractor.rate}/>
        <LabeledText
          reverse
          label={contractor.industry}
          content={contractor.name}
        />
      </div>
      <div className={classes.contractorInfo}>
        <LabeledText
          label={'Решит вопрос за'}
          content={`${contractor.pricePerHour.value} ${contractor.pricePerHour.currency}`}
        />
      </div>
      <div className={classes.actions}>
        <Checkbox checked={checked} onChange={() => setCheckedState(!checked)}/>
      </div>
    </Card>
  );
};

ContractorListItem.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  contractor: PropTypes.object,
};

export default withStyles(ContractorListItemStyle)(ContractorListItem);
