import styled from "styled-components";
import html from "../../../../public/assets/images/uiPage/html.png";
import responsiveImage from "../../../../public/assets/images/uiPage/responsiveImage.png";
export const HtmlSec = styled.div`
  background-image: url(${html.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 50px 0;
  @media screen and (max-width: 1300px) {
    background-size: 100% 100%;
    background-position: right;
    br {
      display: none;
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    background-image: url(${responsiveImage.src});
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    align-items: center;
  }
  .container {
    /* background: #eaf7ee; */
  }
  .text {
    flex-basis: 40%;
    margin-top: 30px;
    padding-left: 30px;

    @media screen and (max-width: 767px) {
      margin-bottom: 25px;
    }

    h3 {
      color: #2b2c2f;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
      margin-bottom: 30px;
      @media screen and (max-width: 1200px) {
        font-size: 35px;
      }
      @media screen and (max-width: 991px) {
        font-size: 26px;
      }
    }
    p {
      color: #434956;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 42px */
      margin-bottom: 30px;
      @media screen and (max-width: 1300px) {
        font-size: 22px;
      }
      @media screen and (max-width: 1200px) {
        font-size: 19px;
      }
      @media screen and (max-width: 991px) {
        font-size: 18px;
        width: 65%;
      }
      @media screen and (max-width: 574px) {
        width: 100%;
      }
    }
  }
  .parent {
    flex-basis: 60%;
    display: flex;
    gap: 20px;
    padding: 16px 0;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
  .card {
    border-radius: 67px;
    background: #fff;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 314px;
    height: 429px;
    h5 {
      color: #434956;
      font-size: 28px;
      font-style: normal;
      margin-bottom: 20px;
      font-weight: 700;
      line-height: 150%; /* 42px */
    }
    h4 {
      color: #434956;
      margin-bottom: 20px;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 27px */
    }
  }
  .card1 {
    border-radius: 67px;
    background: #fff;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 20px 84px 79px; */
    width: 314px;
    height: 429px;
    h5 {
      color: #434956;
      font-size: 28px;
      font-style: normal;
      margin-bottom: 20px;
      font-weight: 700;
      line-height: 150%; /* 42px */
    }
    h4 {
      color: #434956;
      margin-bottom: 20px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 27px */
    }
  }
`;
