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

  const { sesion, setSesion } = useContext(DataSesion);
  const [charge, setcharge] = useState(0);

  const finishButton = () => {
    history.push("/gracias");
  };
  useEffect(() => {
    let charge = 20;
    if (sesion.productTire) {
      charge += 15;
    }
    if (sesion.productShock) {
      charge += 20;
    }
    if (sesion.productAccident) {
      charge += 50;
    }
    setSesion({ ...sesion, mont: charge });
  }, []);

  return (
    <Detail>
      <DetailMont>
        <h3>Monto</h3>
        <p>$/{sesion.mont}</p>
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
