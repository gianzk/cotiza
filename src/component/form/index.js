import React, { useState, useContext } from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { DataSesion } from "./../../context/DataSesion";
import { useHistory } from "react-router-dom";

import "./style.scss";

const GreenCheckbox = withStyles({
  root: {
    "&$checked": {
      color: "#43B748 ",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const FormInit = () => {
  const { sesion, setSesion } = useContext(DataSesion);

  const [state, setState] = useState({
    checkedG: false,
  });

  const history = useHistory();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const revalidButton = () => {
    history.push("/arma-tu-plan");
  };

  return (
    <ContainerForm>
      <div className="Form">
        <div className="Form-title">
          <h2 className="Form-title-text">Déjanos tus datos</h2>
        </div>
        <div className="Form-Control">
          <div className="Form-Control-Group">
            <select className="Form-Control-select">
              <option value="DNI">DNI</option>
            </select>
            <input
              className="Form-Control-input-md"
              type="text"
              placeholder="Nro de Documento"
            ></input>
          </div>
        </div>
        <div className="Form-Control">
          <input
            className="Form-Control-input-lg"
            placeholder="Celular"
          ></input>
        </div>
        <div className="Form-Control">
          <input className="Form-Control-input-lg" placeholder="Placa"></input>
        </div>
        <div className="Form-Control">
          <div className="Form-Control-Group-Message">
            <GreenCheckbox
              checked={state.checkedG}
              onChange={handleChange}
              name="checkedG"
            />
            <p>
              Acepto la Política de Protecciòn de Datos Personales y los
              Términos y Condiciones.
            </p>
          </div>
        </div>
        <div className="Form-Control">
          <button
            onClick={revalidButton}
            className="Form-Control-button-primary"
          >
            COTÍZALO
          </button>
        </div>
      </div>
    </ContainerForm>
  );
};

export default FormInit;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
`;