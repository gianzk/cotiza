import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 2fr;
  width: 100vw;
  @media only screen and (max-width: 512px) {
    // display: flex;
    // flex-direction: column;
  }
`;
