import styled from "styled-components";

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`;

export const DetailMont = styled.div`
  display: flex;
  flex-direction: column;
  & > h3 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #494f66;
    margin: 1% 0%;
  }
  & > p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 36px;
    margin: 1% 0%;
  }
  & > span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #676f8f;
    margin: 1% 0%;
  }
`;

export const Separator = styled.div`
  display: flex;
  border-bottom: 1px solid #e4e8f7;
  margin-right: 20%;
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  & > h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #494f66;
  }
`;

export const List = styled.li`
  list-style: none;
  display: flex;
  & > p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
`;

export const ButtonPrimary = styled.button`
  width: 192px;
  height: 56px;
  background: #ef3340;
  border-radius: 8px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
