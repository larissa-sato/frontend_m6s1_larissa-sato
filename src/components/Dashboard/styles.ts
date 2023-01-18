import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .divForm{
    width: 370px;
    background-color: #fff;
  }

  .divCalculator{
    display: flex;
    position: absolute;
    flex-direction: row;
    border: solid 2px #D1DCE3;
    border-radius: 8px;
    color: #fff;
  }
`;

export default Container;