import { Route, Switch } from 'react-router-dom';

import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

export function Router() {
  return (
    <Switch>
      <Route
        path="/register"
        component={Register}
        exact
      />

      <Route
        path="/login"
        component={Login}
        exact
      />

      <Route
        path="/"
        component={Home}
        exact
      />
    </Switch>
  );
}
