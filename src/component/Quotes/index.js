import React, { useContext } from "react";
import iconBack from "./../../assets/img/icon_Back.svg";
import Product from "./../product/index";
import Mont from "./../mont/index";
import "./style.scss";
import TabProducts from "./../tab/index";
import { useHistory } from "react-router-dom";
import { DataSesion } from "./../../context/DataSesion";

const Quotes = () => {
  const { sesion } = useContext(DataSesion);

  const history = useHistory();

  const back = () => {
    history.push("/login");
  };

  return (
    <div className="Column">
      <div className="QuotesInfo">
        <div onClick={back} className="QuotesInfo-user">
          <img src={iconBack} alt="icon" />
          <p>VOLVER</p>
        </div>

        <div className="QuotesInfo-title">
          <h2>
            <span>!Hola,</span>
            {sesion.data ? sesion.data.name : ""}
          </h2>
          <p>Conoce las coberturas para tu plan</p>
        </div>
      </div>

      <div className="Quotes">
        <div className="Quotes-product">
          <Product></Product>
          <TabProducts></TabProducts>
        </div>
        <div className="Quotes-Mont">
          <Mont></Mont>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
