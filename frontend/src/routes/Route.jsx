// Packages
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom';

export function Route({
    isPrivate = false,
    layout: Layout,
    component: Component,
    ...rest
  }) {
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === false ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location }
            }}
          />
        );
      }}
    />
  );
}
