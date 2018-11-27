import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthorized } from '../../session';

const PrivateRoute = ({ component, ...rest }) => {
  const Component = component;

  return (
    <Route
      render={props => (!isAuthorized() ? <Redirect to={'/login'} /> : <Component {...props} />)}
      {...rest}
    />
  );
};

export default PrivateRoute;
