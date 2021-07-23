import React from "react";
import iconBack from "./../../assets/img/icon_Back.svg";
import Product from "./../product/index";
import Mont from "./../mont/index";
import "./style.scss";
import TabProducts from "./../tab/index";

const user = {
  userName: "Juan",
};

const Quotes = () => {
  return (
    <div className="Column">
      <div className="QuotesInfo">
        <div className="QuotesInfo-user">
          <img src={iconBack} alt="icon" />
          <p>VOLVER</p>
        </div>

        <div className="QuotesInfo-title">
          <h2>
            <span>!Hola,</span>
            {user.userName}
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
