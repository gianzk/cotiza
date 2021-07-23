import React from "react";
import Avatar from "./../../assets/img/avatar.svg";
import "./style.scss";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
const data = {
  shield: "Placa: C2U-114",
  model: "Wolkswagen 2019 Golf",
};

const Product = () => {
  return (
    <div className="Colum">
      <div className="Detail">
        <div className="Detail-information">
          <h3>{data.shield}</h3>
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
          <RemoveOutlinedIcon></RemoveOutlinedIcon>
          <span>$12313213</span>
          <AddOutlinedIcon></AddOutlinedIcon>
        </div>
      </div>
      <div className="Separator"></div>
    </div>
  );
};

export default Product;
