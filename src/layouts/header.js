import React from "react";
import styled from "styled-components";
import phone from "./../assets/img/ic_phone.svg";
import imgLogo from "./../assets/img/logo.svg";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  border: 1px solid #e4e8f7;
`;

export const Logo = styled.img`
  width: 99px;
  height: 16px;
  margin-left: 10%;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #676f8f;
  }
  margin-right: 10%;
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
    color: #6f7dff;
  }
`;

export const Img = styled.img`
  width: 13px;
  height: 16px;
  margin-left: 5px;
`;

const Header = () => {
  return (
    <Content>
      <Logo src={imgLogo}></Logo>
      <Contact>
        <p>¿Tienes alguna duda?</p>
        <Group>
          <Img src={phone}></Img>
          <p>(01) 411 6001</p>
        </Group>
      </Contact>
    </Content>
  );
};

export default Header;
