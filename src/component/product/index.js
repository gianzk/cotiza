import React, { useState, useContext } from "react";
import Avatar from "./../../assets/img/avatar.svg";
import "./style.scss";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { DataSesion } from "../../context/DataSesion";

const data = {
  shield: "Placa: C2U-114",
  model: "Wolkswagen 2019 Golf",
};

const Product = () => {
  const { sesion, setSesion } = useContext(DataSesion);
  const [policy, setPolicy] = useState(14500);

  const addMont = () => {
    setPolicy(policy + 100);
  };

  const remMont = () => {
    setPolicy(policy - 100);
  };

  return (
    <div className="Colum">
      <div className="Detail">
        <div className="Detail-information">
          <h3>Placa :{sesion.form ? sesion.form.shield : ""}</h3>
          <p>{data.model}</p>
        </div>
        <div className="Detail-avatar">
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
      <div className="ChangeMont">
        <div className="ChangeMont-Rank">
          <h2>Indica la suma asegurada</h2>
          <div className="ChangeMont-Rank-Values">
            <span>MIN $12,500</span>
            <span>MIN $16,500</span>
          </div>
        </div>
        <div className="ChangeMont-Detail">
          <RemoveOutlinedIcon onClick={remMont}></RemoveOutlinedIcon>
          <span>${policy}</span>
          <AddOutlinedIcon onClick={addMont}></AddOutlinedIcon>
        </div>
      </div>
      <div className="Separator"></div>
    </div>
  );
};

export default Product;
