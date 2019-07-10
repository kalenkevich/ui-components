import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Avatar from '../components/avatar';
import LabeledText from '../components/labeled-text';
import { getClassName } from '../services/Utils';
import Album from '../components/album';

export const image = {
  url: 'https://image.ibb.co/ckwzkq/MG-1418.jpg',
  comments: [
    {
      user: {
        name: 'Alexey Kalenkevich',
        avatarUrl: 'https://avatar-cdn.atlassian.com/5ba3e03512b3ea2f78b71046?by=id&sg=iDdadg265ubxOx3V4Ljf5D2%2FTDg%3D&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-5.svg&nocaching=0.6002600680772352',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor consectetur nibh quis feugiat. Sed malesuada suscipit lacus in condimentum.',
      likes: 100,
    }],
  likes: 100,
  views: 500,
  size: {
    width: 300,
    height: 200,
  },
};

export const contractor = {
  avatarUrl: 'https://avatar-cdn.atlassian.com/5ba3e03512b3ea2f78b71046?by=id&sg=iDdadg265ubxOx3V4Ljf5D2%2FTDg%3D&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-5.svg&nocaching=0.6002600680772352',
  name: 'Alexey Kalenkevich',
  rate: 100,
  industry: 'Software Developer Legend',
  pricePerHour: {
    value: 100000,
    currency: 'USD',
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor consectetur nibh quis feugiat. Sed malesuada suscipit lacus in condimentum. Phasellus a finibus nunc. Vivamus ut metus mi. Donec mattis volutpat facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas porttitor turpis ac velit fermentum, eget sollicitudin ex pretium. Ut pellentesque pharetra venenatis.\\n\' +\n' +
  '  \'\\n\' +\n' +
  '  \'Pellentesque ut odio eu lacus posuere luctus id nec dolor. Mauris lobortis interdum velit, in accumsan nibh scelerisque vel. Maecenas faucibus ornare mi, sit amet vestibulum metus posuere sed. Sed nulla arcu, rutrum vitae felis vel, pulvinar dictum risus. Donec lorem sem, mollis eu gravida vitae, suscipit id massa. Nullam imperdiet sem arcu. Nunc sit amet maximus elit.\' +\n' +
  '  \'Pellentesque ut odio eu lacus posuere luctus id nec dolor. Mauris lobortis interdum velit, in accumsan nibh scelerisque vel. Maecenas faucibus ornare mi, sit amet vestibulum metus posuere sed. Sed nulla arcu, rutrum vitae felis vel, pulvinar dictum risus. Donec lorem sem, mollis eu gravida vitae, suscipit id massa. Nullam imperdiet sem arcu. Nunc sit amet maximus elit.',
  location: 'Слоним',
  portfolio: {
    images: [
      image,
      {
        ...image,
        size: {
          width: 500,
          height: 400,
        },
      },
      image,
      image,
      {
        ...image,
        size: {
          width: 500,
          height: 400,
        },
      },
      image,
      image,
      {
        ...image,
        size: {
          width: 500,
          height: 400,
        },
      },
      image,
      image,
      {
        ...image,
        size: {
          width: 500,
          height: 400,
        },
      },
      image,
      image,
      {
        ...image,
        size: {
          width: 620,
          height: 480,
        },
      },
      image,
      image,
      {
        ...image,
        size: {
          width: 700,
          height: 300,
        },
      },
      image,
      {
        ...image,
        size: {
          width: 100,
          height: 50,
        },
      },
      image,
      image,
      image,
    ],
  },
};

export const ContractorPortfolioPageStyle = () => ({
  root: {
    display: 'flex',
  },
  contractorInfo: {
    width: '400px',
    flexShrink: '0',
  },
  album: {
    width: '100%',
    marginLeft: '10px',
  },
});

const ContractorPortfolioPage = (props) => {
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
      <div className={classes.contractorInfo}>
        <Avatar
          url={contractor.avatarUrl}
          rate={contractor.rate}
          size={'lg'}
        />
        <LabeledText
          reverse
          label={contractor.industry}
          content={contractor.name}
        />
        <LabeledText
          label='Место'
          content={contractor.location}
        />
        <LabeledText
          label='Описание'
          content={contractor.description}
        />
      </div>
      <Album
        className={classes.album}
        images={contractor.portfolio.images}
      />
    </div>
  );
};

ContractorPortfolioPage.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
};

export default withStyles(ContractorPortfolioPageStyle)(ContractorPortfolioPage);
