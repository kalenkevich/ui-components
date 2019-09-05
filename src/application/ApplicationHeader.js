import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { withRouter } from 'react-router-dom';
import Button from '../components/button';
import Header from '../components/header';
import { MenuItem } from '../components/menu';
import HeaderComponentStyle from '../components/header/HeaderComponentStyle';
import AuthorizationContext from '../context/AuthorizationContext';
import SettingsContext from '../context/SettingsContext';
import ProfileMenu from '../components/profile-menu';

const HeaderComponent = (props) => {
  const {
    classes,
    history,
  } = props;
  const settings = useContext(SettingsContext);
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
    const actions = [{
      label: 'My Profile',
      value: 'profile',
      onClick: goToProfilePage,
    }, {
      label: 'Sign Out',
      value: 'signOut',
      onClick: goToSignOut,
    }];

    ResultPanel = <ProfileMenu user={authorizedUser} actions={actions}/>;
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
