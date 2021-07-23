import styled from "styled-components";
import backgroundImage from "./../../assets/img/fondo.svg";
import allColors from "./../../styles/colors";

export const Background = styled.div`
  display: flex;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  flex-direction: column;
  padding: 2% 6% 0% 6%;
`;
export const Logo = styled.img`
  width: 99px;
  height: 16px;
  padding: 1% 2%;
  margin-left: 5%;
  margin-top: 3%;
  margin-bottom: 10%;
`;

export const Imagen = styled.img`
  width: 320px;
  height: 250px;
  padding: 1% 4%;
  margin-left: 10%;
`;

export const Text = styled.div`
  font-family: Lato;
  margin-left: 10%;
  padding: 1% 4%;
  & > h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: ${allColors.grayTitle};
    margin: 1%;
  }
  & > h2 {
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.2px;
    color: ${allColors.red};
    margin: 1%;
    & > span {
      color: ${allColors.grayTitle};
    }
  }
  & > h5 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${allColors.grayTwo};
  }
`;

export const Footer = styled.div`
  margin-left: 5%;
  margin-top: 8%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  color: ${allColors.grayThree};
`;
