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
    @media screen and (max-width: 1023px) {
      font-size: 35px;
    }
    @media screen and (max-width: 767px) {
      font-size: 28px;
    }
  }
  h4 {
    color: #434956;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
    max-width: 790px;
    margin: auto;
    margin-bottom: 60px;
    @media screen and (max-width: 1023px) {
      font-size: 24px;
    }
    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
  }

  .main_web {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    @media screen and (max-width: 1200px) {
      gap: 34px;
    }
    @media screen and (max-width: 1023px) {
      flex-wrap: wrap;
      row-gap: 42px;
    }
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
    .web {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      h3 {
        color: #434956;
        text-align: center;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 42px */
        @media screen and (max-width: 1200px) {
          font-size: 24px;
        }
      }
      p {
        max-width: 253px;
        color: #434956;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 27px */
        @media screen and (max-width: 1200px) {
          font-size: 16px;
        }
        @media screen and (max-width: 574px) {
          max-width: 100%;

        }
      }
    }
  }
`;
