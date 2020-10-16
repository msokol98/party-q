import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { oauthHost } from 'config';

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (user) {
          return <Component member={user} {...rest} {...props} />
        } else {
          window.location = `${oauthHost}/login`
        }
      }
    } />
  )
}

export default ProtectedRoute;