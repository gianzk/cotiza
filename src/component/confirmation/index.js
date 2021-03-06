import React, { useContext } from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { DataSesion } from "../../context/DataSesion";

const Confirmation = () => {
  const { sesion, setSesion } = useContext(DataSesion);

  const history = useHistory();

  const revalidButton = () => {
    history.push("/login");
  };

  return (
    <div className="Confirmation">
      <h2 className="Confirmation-title">¡Te damos la bienvenida! </h2>
      <h1 className="Confirmation-message">
        Cuenta con nosotros para proteger tu vehículo
      </h1>
      <div className="Confirmation-Detail">
        <span>
          Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
          tu correo:
        </span>
        <p>{sesion.data.email}</p>
      </div>
      <button onClick={revalidButton} className="Confirmation-Button">
        COMO USAR MI SEGURO{" "}
      </button>
    </div>
  );
};

export default Confirmation;
