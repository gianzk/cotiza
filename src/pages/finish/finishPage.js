import React from "react";
import { Main, Banner } from "./style";
import Header from "../../layouts/header";
import Confirmation from "../../component/confirmation/index";
import BannerImg from "./../../assets/img/banner.svg";
const FinishPage = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <Banner>
          <img src={BannerImg} alt="avatar" />
        </Banner>
        <Confirmation></Confirmation>
      </Main>
    </>
  );
};

export default FinishPage;
