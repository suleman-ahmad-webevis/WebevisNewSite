import styled from "styled-components";

export const WebSec = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 20px;
  }
  h4 {
    color: #434956;
    text-align: center;
    font-size: 28px;
    margin-bottom: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
  }

  .main_web {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .circle {
      fill: #fff;
      background-color: white;
      filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.1));
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      margin-bottom: 30px;
    }
    /* column-gap: 80px; */
    .web {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        color: #434956;
        text-align: center;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 42px */
      }
      p {
        max-width: 253px;
        color: #434956;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 27px */
      }
    }
  }
`;
