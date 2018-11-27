import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthorized } from '../../session';

const GuestRoute = ({ component, ...rest }) => {
  const Component = component;

  return (
    <Route
      render={props => (isAuthorized() ? <Redirect to={'/tasks'} /> : <Component {...props} />)}
      {...rest}
    />
  );
};

export default GuestRoute;
