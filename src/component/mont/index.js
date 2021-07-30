import React, { useState, useContext, useEffect } from "react";
import {
  Detail,
  DetailMont,
  Separator,
  ButtonPrimary,
  List,
  ListItems,
} from "./style";
import check from "./../../assets/img/ic_check.svg";
import { useHistory } from "react-router-dom";
import { DataSesion } from "../../context/DataSesion";
import {
  SentimentSatisfied,
  SentimentSatisfiedOutlined,
} from "@material-ui/icons";

const include = [
  {
    id: 1,
    name: "Llanta de repuesto",
  },
  {
    id: 2,
    name: "Analisis de motor",
  },
  {
    id: 3,
    name: "Aros Gratis",
  },
];

const Mont = () => {
  const history = useHistory();

  const { sesion, setSesion, info, setInfo } = useContext(DataSesion);

  const finishButton = () => {
    history.push("/gracias");
  };
  useEffect(() => {
    let charge = 20;
    if (info.productTire) {
      charge += 15;
    }
    if (info.productShock) {
      charge += 20;
    }
    if (info.productAccident) {
      charge += 50;
    }
    setInfo({ ...info, mont: charge });
  }, [info.productTire, info.productShock, info.productAccident]);

  return (
    <Detail>
      <DetailMont>
        <h3>Monto</h3>
        <p>$/{info.mont}</p>
        <span>mensuales</span>
      </DetailMont>
      <Separator />
      <ListItems>
        <h2>Precio incluye</h2>
        {include.map((e) => (
          <List key={e.id}>
            <img src={check} alt="check" />
            <p>{e.name}</p>
          </List>
        ))}
      </ListItems>
      <ButtonPrimary onClick={finishButton}>LO QUIERO</ButtonPrimary>
    </Detail>
  );
};

export default Mont;
