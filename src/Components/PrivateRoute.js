import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { Redirect, Route } from 'react-router';

function PrivateRoute({ children, ...remainingProps }) {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
