import React, { useState, useContext, useEffect } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import tire from "./../../assets/img/tire.svg";
import shock from "./../../assets/img/shock.svg";
import accident from "./../../assets/img/accident.svg";
import { DataSesion } from "../../context/DataSesion";
import { statusEvaluate } from "../../helpers";
import "./style.scss";
import { SystemUpdateOutlined } from "@material-ui/icons";

const Accordion = ({ id, title, description }) => {
  const { sesion, info, setInfo } = useContext(DataSesion);
  const [expand, setExpand] = useState(true);
  const [status, setStatus] = useState(statusEvaluate(id, info));
  const [loading, setLoading] = useState(false);
  const switchValue = () => {
    setExpand(!expand);
  };

  const changeStatus = () => {
    switch (id) {
      case "tire":
        setInfo({ ...info, productTire: !sesion.productTire });
        setStatus(!info.productTire);

        break;
      case "shock":
        setInfo({ ...info, productShock: !info.productShock });
        setStatus(!info.productShock);
        break;
      case "accident":
        setInfo({
          ...info,
          productAccident: !info.productAccident,
        });
        setStatus(!info.productAccident);

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
