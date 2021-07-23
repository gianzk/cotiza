import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  height: 100vh;
  @media only screen and (max-width: 512px) {
    display: flex;
    flex-direction: column;
  }
`;
