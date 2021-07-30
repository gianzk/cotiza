import React, { useState } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import HomePage from "./../pages/home/homePage";
import PlanPage from "./../pages/plan/planPage";
import FinishPage from "./../pages/finish/finishPage";
import { DataSesion } from "./../context/DataSesion";

const AppRouter = () => {
  const [sesion, setSesion] = useState({
    listProducts: [
      { id: "tire", title: "Llanta robada" },
      { id: "shock", title: "Choque y/o pasarte la luz roja" },
      {
        id: "accident",
        title: "Atropello en la vía Evitamiento",
      },
    ],
  });
  const [info, setInfo] = useState({
    mont: 20,
    productTire: false,
    productShock: true,
    productAccident: false,
  });

  return (
    <DataSesion.Provider value={{ sesion, setSesion, info, setInfo }}>
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
