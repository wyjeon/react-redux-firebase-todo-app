import React from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from './Components/PrivateRoute';
import SignIn from './Routes/SignIn';
import Todos from './Routes/Todos';

function App() {
  return (
    <Switch>
      <PrivateRoute path="/todos">
        <Todos />
      </PrivateRoute>
      <Route path="/">
        <SignIn />
      </Route>
    </Switch>
  );
}

export default App;
