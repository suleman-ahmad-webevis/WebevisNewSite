import background from "../../../../public/assets/images/semservices/Sembg.png";
import styled from "styled-components";
export const HeroSection = styled.div`
  background-image: url(${background.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 30px;
    @media screen and (max-width: 1060px) {
      padding: 60px 20px;
    }
    @media screen and (max-width: 1023px) {
      flex-direction: column;
      padding: 30px 20px;
    }
  }
`;
export const HeroText = styled.section`
  width: 42%;
  padding: 14px 0px;
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
  @media screen and (max-width: 658px) {
    width: 93%;
  }
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 23.4px;
    line-height: 35px;
    color: #ffffff;
  }
  h1 {
    font-style: normal;
    margin: 0;
    font-weight: 700;
    font-size: 60px;
    color: #ffffff;
    @media screen and (max-width: 564px) {
      h1 {
        line-height: 35px;
      }
    }
  }
  p {
    font-style: normal;
    color: #ffffff;
    font-weight: 500;
    font-size: 22.5px;
    line-height: 30px;
  }
  @media screen and (max-width: 1440px) {
    h2 {
      font-size: calc(16px + (23.4 - 16) * (100vw - 390px) / (1440 - 390));
    }
    h1 {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(16px + (22.5 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const FlexText = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
export const FlexOne = styled.section`
  display: flex;
  img {
    margin-right: 20px;
  }
  span {
    margin-bottom: 30px;
    font-size: 18px;
    color: #ffffff;
    line-height: 23px;
  }
  @media screen and (max-width: 740px) {
    span {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 658px) {
    img {
      margin-right: 12px;
    }
  }
`;
export const FormFlex = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 25px;
  p {
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 16.361px;
    line-height: 23px;
    color: #2b2c2f;
  }
  @media screen and (max-width: 1440px) {
    p {
      font-size: calc(12px + (16.361 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 575px) {
    p {
      font-size: 10px !important;
    }
  }
`;
export const Form = styled.section`
  background-color: white;
  width: 50%;
  max-width: 509px;
  max-height: 474.461px;
  height: 100%;
  margin-right: 50px;
  border-top: 8px solid #434956 !important;
  border-radius: 17.27px;
  padding: 57px 27.27px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 658px) {
    width: 90%;
  }
  @media screen and (max-width: 504px) {
    width: 100%;
    padding: 57px 20px;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;

    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 48px;
    color: #2b2c2f;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(20px + (35 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 1180px) {
    margin-right: 30px;
  }
  @media screen and (max-width: 1110px) {
    margin-right: 10px;
  }
  @media screen and (max-width: 1040px) {
    margin-right: 0px;
  }
`;
export const FormInput = styled.section`
  width: 100%;
  border: 1px solid #2b2c2f;
  margin-bottom: 27px;
  position: relative;
  background-color: white;
  @media screen and (max-width: 575px) {
    margin-bottom: 20px;
  }
  select {
    width: 100%;
    height: 50px;
    outline: none;
    margin: 0;
    padding: 0px 10px;

    font-style: normal;
    font-weight: 500;
    font-size: 16.361px;
    border: none;
    line-height: 23px;
    position: relative;
    background-color: transparent;
    z-index: 1;
    cursor: pointer;
    overflow: hidden;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  img {
    position: absolute;
    top: 20px;
    z-index: 0;
    right: 15px;
  }
`;
export const HeroBtn = styled.section`
  margin-top: 40px;
  border-radius: 8px;
  @media screen and (max-width: 575px) {
    margin-top: 20px;
    text-align: center;
    width: 100% !important;
  }
  button {
    @media screen and (max-width: 575px) {
      width: 90% !important;
    }
  }
`;
