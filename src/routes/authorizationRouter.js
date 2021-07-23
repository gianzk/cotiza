import { Route, Switch, Redirect } from "react-router-dom";

import React from "react";

const AuthRouter = () => {
  const existSession = () => {
    return false;
  };

  return (
    <Switch>
      <Route
        component={() =>
          existSession() ? (
            <Redirect to="/arma-tu-plan" />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </Switch>
  );
};

export default AuthRouter;
