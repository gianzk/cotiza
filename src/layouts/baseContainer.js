import React from "react";
import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

const Container = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Container;
