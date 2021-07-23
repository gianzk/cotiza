import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  @media only screen and (max-width: 512px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
