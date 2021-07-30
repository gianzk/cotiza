import React, { useState, useContext } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Accordion from "./../acordion/index";
import { DataSesion } from "../../context/DataSesion";
import "./style.scss";

const TabProducts = () => {
  const [value, setValue] = useState(0);
  const { sesion, setSesion } = useContext(DataSesion);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggle = (paramet) => {
    console.log(paramet.target);
  };

  return (
    <div className="Tabs">
      <div className="Tabs-Title">
        <h2>Agrega o quita coberturas</h2>
      </div>
      <div className="Tabs-List">
        <Tabs
          value={value}
          indicatorColor="secondary"
          textColor="secondary"
          onChange={handleChange}
          variant="fullWidth"
          aria-label="disabled tabs example"
        >
          <Tab label="PROTEGE A TU AUTO" />
          <Tab label="PROTEGE A  LOS QUE TE RODEAN" />
          <Tab label="MEJORA TU PLAN" />
        </Tabs>
        {sesion.listProducts.map((e) => (
          <Accordion
            id={e.id}
            img={e.id}
            title={e.title}
            productStatus={e.id}
            key={e.id}
          ></Accordion>
        ))}
      </div>
    </div>
  );
};
export default TabProducts;
