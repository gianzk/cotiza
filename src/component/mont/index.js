import React from "react";
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

const data = {
  monto: 35,
};

const Mont = () => {
  const history = useHistory();

  const finishButton = () => {
    history.push("/gracias");
  };

  return (
    <Detail>
      <DetailMont>
        <h3>Monto</h3>
        <p>$/{data.monto}</p>
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
