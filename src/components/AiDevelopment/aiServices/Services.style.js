import styled from "styled-components";

export const ServiceSec = styled.div`
display: flex;
align-items: center;
flex-direction: column;
  margin: 100px 0;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    @media screen and (max-width: 991px) {
      font-size: 35px;
      br {
        display: none;
      }
    }
    @media screen and (max-width: 574px) {
      font-size: 28px;
    }
  }
  h5 {
    color: #434956;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
  }
  .main_services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    row-gap: 80px;
    margin-top: 90px;
    margin-bottom: 50px;
    @media screen and (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
      width: 70%;
      margin: auto;
      margin-top: 90px;
    }
    @media screen and (max-width: 574px) {
      width: 100%;
    }
    .card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #fff;
      box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.15);
      padding: 0 20px;
      .image {
        border-radius: 25px;
        border: 1px solid #28b781;
        background: #fff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
        width: 108px;
        height: 108px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -50px;
        img {
        }
      }
      h3 {
        color: #434956;
        text-align: center;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 42px */
        margin-bottom: 20px;
        margin-top: 10px;
        @media screen and (max-width: 1200px) {
          font-size: 24px;
        }
      }
      p {
        color: #434956;
        text-align: center;
        margin-bottom: 40px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 27px */
        max-width: 328px;
        @media screen and (max-width: 1200px) {
          font-size: 16px;
        }
      }
    }
  }
`;
