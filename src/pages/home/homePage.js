import React from "react";

import SlideBar from "../../component/slidebar";
import FormInit from "./../../component/form/index";
import { Container } from "./style";

const HomePage = () => {
  return (
    <Container>
      <SlideBar></SlideBar>
      <FormInit></FormInit>
    </Container>
  );
};

export default HomePage;
