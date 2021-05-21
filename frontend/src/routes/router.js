// Packages
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

// Resources
import routesInfos from '../utils/routesInfos';

export function Router() {
  return (
    <Switch>
      <Route
        path={routesInfos.register.link}
        component={Register}
        exact
      />

      <Route
        path={routesInfos.login.link}
        component={Login}
        exact
      />

      <Route
        path={routesInfos.home.link}
        component={Home}
        exact
      />

      <Redirect from="/" to="/home" />
    </Switch>
  );
}
