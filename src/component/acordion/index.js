import React, { useState, useContext, useEffect } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import tire from "./../../assets/img/tire.svg";
import shock from "./../../assets/img/shock.svg";
import accident from "./../../assets/img/accident.svg";
import { DataSesion } from "../../context/DataSesion";
import "./style.scss";

const Accordion = ({ id, img, title, data, productStatus }) => {
  const { sesion, setSesion } = useContext(DataSesion);
  const [expand, setExpand] = useState(true);
  const [chargue, setChargue] = useState(0);

  const switchValue = () => {
    setExpand(!expand);
  };

  const changeStatus = async () => {
    switch (id) {
      case "tire":
        await setSesion({ ...sesion, productTire: !sesion.productTire });

        break;
      case "shock":
        await setSesion({ ...sesion, productShock: !sesion.productShock });

        break;
      case "accident":
        await setSesion({
          ...sesion,
          productAccident: !sesion.productAccident,
        });

        break;
      default:
        return false;
    }
  };

  const renderImages = (id) => {
    switch (id) {
      case "tire":
        return <img src={tire} alt="logo" />;
      case "shock":
        return <img src={shock} alt="logo" />;
      case "accident":
        return <img src={accident} alt="logo" />;
      default:
        return <img src={tire} alt="logo" />;
    }
  };

  const statusEvaluate = (id) => {
    switch (id) {
      case "tire":
        return sesion.productTire;
      case "shock":
        return sesion.productShock;
      case "accident":
        return sesion.productAccident;
      default:
        return false;
    }
  };

  const status = statusEvaluate(id);

  return (
    <div className="Accordion">
      <div className="Accordion-title">
        <div className="Accordion-title-info">
          {renderImages(id)}
          <p>{title} </p>
        </div>
        {expand ? (
          <ExpandLessIcon onClick={switchValue} style={{ color: "#EF3340" }} />
        ) : (
          <ExpandMoreIcon onClick={switchValue} style={{ color: "#EF3340" }} />
        )}
      </div>
      <div className="Accordion-Group">
        {status ? (
          <div className="Accordion-Group-Button">
            <AddCircleOutlineIcon onClick={changeStatus} />
            <p>Agregar</p>
          </div>
        ) : (
          <div className="Accordion-Group-Button">
            <RemoveCircleOutlineIcon onClick={changeStatus} />
            <p>Quitar</p>
          </div>
        )}
      </div>
      <div className="Accordion-Content"></div>
    </div>
  );
};

export default Accordion;
