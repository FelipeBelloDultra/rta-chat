import { Route, Switch } from 'react-router-dom';

import { Register } from '../pages/Register';
import { Login } from '../pages/Login';

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
    </Switch>
  );
}
