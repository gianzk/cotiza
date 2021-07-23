import React from "react";

import { Background, Logo, Imagen, Text, Footer } from "./style.jsx";
import imgLogo from "./../../assets/img/logo.svg";
import ilustration from "./../../assets/img/display.svg";

const year = new Date().getFullYear();

const messages = {
  textOne: "¡NUEVO!",
  textTwo: " Vehicular Tracking",
  textThree: "Cuentanos donde le haras seguimiento a tu seguro",
  footerMessage: `© ${year} RIMAC Seguros y Reaseguros`,
};

const SlideBar = () => {
  return (
    <Background>
      <Logo src={imgLogo} />

      <Imagen src={ilustration} />

      <Text>
        <h4>{messages.textOne}</h4>
        <h2>
          {" "}
          <span>Seguro</span>
          {messages.textTwo}
        </h2>
        <h5>{messages.textThree}</h5>
      </Text>

      <Footer>{messages.footerMessage}</Footer>
    </Background>
  );
};

export default SlideBar;
