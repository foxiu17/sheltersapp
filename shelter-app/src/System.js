import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router";
import { useStateContextAuthorization } from "./context/auth-context";

import routes from "./routes/routes";
import userRoutes from "./routes/user-routes";
import adminRoutes from "./routes/admin-routes";

const System = () => {
  const [auth] = useStateContextAuthorization();

  console.log("auth system: ", auth);

  return (
    <>
      <Switch>
        {/* Routes for superadministrator */}
        {Object.getOwnPropertyNames(auth).length !== 0 && auth.type === 2
          ? adminRoutes.map(({ path, exact, name, component }) => {
              return (
                <Route
                  key={name}
                  path={path}
                  exact={exact}
                  name={name}
                  component={component}
                />
              );
            })
          // Routes for logged in users
          : Object.getOwnPropertyNames(auth).length !== 0 && auth.type === 1
          ? userRoutes.map(({ path, exact, name, component }) => {
              return (
                <Route
                  key={name}
                  path={path}
                  exact={exact}
                  name={name}
                  component={component}
                />
              );
            })
          // Default routes
          : routes.map(({ path, exact, name, component }) => {
              return (
                <Route
                  key={name}
                  path={path}
                  exact={exact}
                  name={name}
                  component={component}
                />
              );
            })}
        {Object.getOwnPropertyNames(auth).length !== 0 &&
          auth.tokenValidate && <Redirect to="/" />}
      </Switch>
    </>
  );
};

export default withRouter(System);
