import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getStoredAuthToken } from 'shared/utils/authToken';

const AuthenticatedRoute = ({ Component, ...rest }) => {
  const token = getStoredAuthToken();

  return (
    <Route
      {...rest}
      render={props => (token ? <Component {...props} /> : <Redirect to="/authenticate" />)}
    />
  );
};

export default AuthenticatedRoute;
