import styled from "styled-components";

export const FunSec = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 60px;
  @media screen and (max-width: 1200px) {
    br {
      display: none;
    }
  }
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 30px;
    @media screen and (max-width: 991px) {
      font-size: 35px;
    }
    @media screen and (max-width: 574px) {
      font-size: 28px;
    }
  }
  p {
    color: #434956;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
    margin-bottom: 80px;
    @media screen and (max-width: 991px) {
      font-size: 24px;
    }
    @media screen and (max-width: 574px) {
      font-size: 18px;
    }
  }
  .main_fun {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 28px;
    .fun {
      cursor: pointer;
      border-radius: 21px;
      background: #fff;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.17);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      max-width: 410px;
      height: 90px;
      padding: 0 50px;
      margin-bottom: 70px;
      @media screen and (max-width: 574px) {
        width: 100%;
        margin-bottom: 5px;
      }
      h5 {
        color: #434956;
        white-space: nowrap;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 36px */
        @media screen and (max-width: 574px) {
          font-size: 16px;
        }
      }
    }
  }
`;
