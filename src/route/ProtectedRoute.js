import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const {
    component: RouteComponent,
    canAccess,
    redirectTo = '/sign-in',
    ...rest
  } = props;

  return (
    <Route {...rest}
      render={(prs) => {
        if (canAccess) {
          return <RouteComponent {...prs} />;
        }

        return <Redirect to={redirectTo}/>;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  canAccess: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string,
};

export default ProtectedRoute;
