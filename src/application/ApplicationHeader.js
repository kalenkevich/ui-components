import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import Avatar from '../components/avatar';
import Button from '../components/button';
import Select from '../components/select';
import Header from '../components/header';
import { MenuItem } from '../components/menu';
import HeaderComponentStyle from '../components/header/HeaderComponentStyle';
import AuthorizationContext from '../context/AuthorizationContext';
import MobileContext from '../context/MobileContext';
import SettingsContext from '../context/SettingsContext';

const HeaderComponent = (props) => {
  const {
    classes,
    history,
  } = props;
  const settings = useContext(SettingsContext);
  const { isMobile } = useContext(MobileContext);
  const { user: authorizedUser } = useContext(AuthorizationContext);
  const goToSignUp = () => {
    const safeUrl = encodeURIComponent(window.location.href);

    window.location.href = `${settings.AuthFrontendUrl}/sign-up?returnUrl=${safeUrl}`;
  };
  const goToProfilePage = () => {
    window.location.href = `${settings.AuthFrontendUrl}/user/me`;
  };
  const goToSignIn = () => {
    const safeUrl = encodeURIComponent(window.location.href);

    window.location.href = `${settings.AuthFrontendUrl}/sign-in?returnUrl=${safeUrl}`;
  };
  const goToSignOut = () => {
    const safeUrl = encodeURIComponent(window.location.href);

    window.location.href = `${settings.AuthFrontendUrl}/sign-out?returnUrl=${safeUrl}`;
  };

  let ResultPanel = null;
  if (authorizedUser) {
    ResultPanel = (
      <div className={classes.actionPanel}>
        <Select
          value={''}
          onSelect={({ value }) => {
            if (value === 'signOut') {
              return goToSignOut();
            }

            if (value === 'profile') {
              return goToProfilePage();
            }

            return null;
          }}
          options={[{
            label: 'My Profile',
            value: 'profile',
          }, {
            label: 'Sign Out',
            value: 'signOut',
          }]}
          preview={() => (
            <div className={classes.userPanel}>
              <Avatar
                className={classes.userAvatar}
                url={authorizedUser.avatarUrl}
                size='sm'
              />
              { !isMobile ? <div className={classes.userName}>{authorizedUser.name}</div> : null }
            </div>
          )}
        />
      </div>
    );
  } else {
    ResultPanel = (
      <div className={classes.actionPanel}>
        <Button className={classes.actionPanelButton}
          onClick={goToSignIn}
        >
          Sign In
        </Button>
        <Button className={classes.actionPanelButton}
          onClick={goToSignUp}
        >
          Sign Up
        </Button>
      </div>
    );
  }

  return (
    <Header appName={settings.AppName}
      menu={(
        <>
          <MenuItem label='Components'>
            <MenuItem label={'Basic'} onClick={() => history.push('/components/basic')}/>
            <MenuItem label={'Custom'} onClick={() => history.push('/components/custom')}/>
          </MenuItem>
          <MenuItem label='Widgets' onClick={() => history.push('/widgets')}/>
          <MenuItem label='Pages'>
            <MenuItem label='Main Page' onClick={() => history.push('/pages/main')}/>
            <MenuItem label='Order Page' onClick={() => history.push('/pages/order')}/>
            <MenuItem label='Orders Page' onClick={() => history.push('/pages/orders')}/>
            <MenuItem label='Tenders Page' onClick={() => history.push('/pages/tenders')}/>
            <MenuItem label='Contractor Portfolio Page' onClick={() => history.push('/pages/contractor-portfolio')}/>
          </MenuItem>
        </>
      )}
    >
      {ResultPanel}
    </Header>
  );
};

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  signOut: PropTypes.func,
};

export default withRouter(withStyles(HeaderComponentStyle)(HeaderComponent));
