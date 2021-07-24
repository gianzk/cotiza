import React, { useState, useContext } from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import phone from "./../../assets/img/ic_phone.svg";
import { withStyles } from "@material-ui/core/styles";
import { DataSesion } from "./../../context/DataSesion";
import { useHistory } from "react-router-dom";
import { useForm } from "./../../hooks/formHook";

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
  const { form, handleChangeForm } = useForm({});

  const [state, setState] = useState({
    checkedG: false,
  });
  const [isValid, setIsValid] = useState(true);

  const history = useHistory();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const revalidButton = () => {
    if (
      form.hasOwnProperty("document") &&
      form.hasOwnProperty("celphone") &&
      form.hasOwnProperty("shield") &&
      state.checkedG
    ) {
      setSesion({ ...sesion, form });
      history.push("/arma-tu-plan");
    } else {
      setIsValid(false);
    }
  };

  return (
    <ContainerForm>
      <div className="Header-home">
        <Group>
          <Img src={phone}></Img>
          <p>(01) 411 6001</p>
        </Group>
      </div>
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
              className={
                isValid
                  ? "Form-Control-input-md"
                  : "Form-Control-input-md error"
              }
              type="text"
              placeholder="Nro de Documento"
              name="document"
              onChange={handleChangeForm}
            ></input>
          </div>
        </div>
        <div className="Form-Control">
          <input
            className={
              isValid ? "Form-Control-input-lg" : "Form-Control-input-md error"
            }
            placeholder="Celular"
            name="celphone"
            onChange={handleChangeForm}
          ></input>
        </div>
        <div className="Form-Control">
          <input
            className={
              isValid ? "Form-Control-input-lg" : "Form-Control-input-md error"
            }
            placeholder="Placa"
            name="shield"
            onChange={handleChangeForm}
          ></input>
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

export const Group = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    padding-left: 5px;
    color: #6f7dff;
  }
`;

export const Img = styled.img`
  width: 13px;
  height: 16px;
  margin-left: 5px;
`;
