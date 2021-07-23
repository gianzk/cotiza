import React, { useContext } from "react";

import SlideBar from "../../component/slidebar";
import FormInit from "./../../component/form/index";
import { Container } from "./style";
import { DataSesion } from "./../../context/DataSesion";
import { getUser } from "./../../services/index";

const HomePage = () => {
  const { sesion, setSesion } = useContext(DataSesion);

  return (
    <Container>
      <SlideBar></SlideBar>
      <FormInit></FormInit>
    </Container>
  );
};

export default HomePage;
