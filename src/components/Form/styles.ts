import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-size: 14px;
  color: #656565;
  align-items: left;
  
  input {
    height: 37px;
    border-radius: 4px;
    background-color: #fff;
    color: #656565;
    box-shadow: 0 0 0.5em #08263d59;
  }

  .select-text {
    min-width: 100%;
    border: 2px solid;
    border-radius: 3px;
    color: #656565;
    margin-top: 10px;
    opacity: 100%;
    box-shadow: 0 0 0.5em #08263d59;
    }

  h3 {
    font-size: 24px;
    color: #656565;
  }

  label {
    padding-top: 10px;
    font-size: 14px;
    color: #656565;
  }
`;