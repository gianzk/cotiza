import React, { useState } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import HomePage from "./../pages/home/homePage";
import PlanPage from "./../pages/plan/planPage";
import FinishPage from "./../pages/finish/finishPage";
import { DataSesion } from "./../context/DataSesion";

const AppRouter = () => {
  const [sesion, setSesion] = useState({
    name: "Gianmarco",
  });

  return (
    <DataSesion.Provider value={{ sesion, setSesion }}>
      <Switch>
        <Route exact path={`/login`} component={HomePage} />
        <Route exact path={`/arma-tu-plan`} component={PlanPage} />
        <Route exact path={`/gracias`} component={FinishPage} />
        <Route exact path={`*`} component={HomePage} />
      </Switch>
    </DataSesion.Provider>
  );
};
AppRouter.prototype = {
  modules: PropTypes.array,
};

export default AppRouter;
