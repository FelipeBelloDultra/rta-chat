// Packages
import { Redirect, Switch } from 'react-router-dom';

// Resources
import routesInfos from '../utils/routesInfos';
import { Route } from './Route';

// Pages
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

// Layouts
import { None } from '../layouts/None';

function Routes() {
  return (
    <Switch
      atEnter={{ opacity: 0, top: -100 }}
      atLeave={{ opacity: 0, top: -100 }}
      atActive={{ opacity: 1, top: 0 }}
    >
      <Route
        layout={None}
        path={routesInfos.register.link}
        component={Register}
        exact
      />

      <Route
        layout={None}
        path={routesInfos.login.link}
        component={Login}
        exact
      />

      <Route
        layout={None}
        path={routesInfos.home.link}
        component={Home}
        exact
      />

      <Redirect from="/" to={routesInfos.home.link} />
    </Switch>
  );
}

export default Routes;
