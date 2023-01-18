import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 28px;
  border: none;
  border-radius: 8px;
  background-color: #1976bd;
  box-shadow: 0 0 1em #08263d59;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  
  :hover {
    transition: 1.2s;
    background-color: rgba(15, 70, 112);
  }
`;