import background from "../../../assets/images/Services/SemServices/Sembg.png";
import styled from "styled-components";
export const HeroSection = styled.div`
  background-image: url(${background.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  /* padding: 60px 48px;
  @media screen and (max-width: 1244px) {
    padding: 50px 16px;
  } */
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 30px;
    @media screen and (max-width: 1023px) {
      flex-direction: column;
    }
  }
`;
export const HeroText = styled.section`
  width: 547px;
  @media screen and (max-width: 658px) {
    width: 95%;
    margin: auto;
  }
  @media screen and (max-width: 1023px) {
    width: 95%;
    margin: auto;
    text-align: center;
  }
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 23.4px;
    line-height: 35px;
    color: #ffffff;
  }
  h1 {
    font-family: "Outfit";
    font-style: normal;
    margin: 0;
    font-weight: 700;
    font-size: 60px;
    color: #ffffff;
    line-height: 76px;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    color: #ffffff;
    font-weight: 500;
    font-size: 22.5px;
    line-height: 30px;
  }
  @media screen and (max-width: 658px) {
    h2 {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
    p {
      font-weight: 500;
      margin-bottom: 26px;
      font-size: 16px;
      line-height: 20px;
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
  margin-bottom: 20px;

  p {
    margin-left: 10px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #2b2c2f;
  }
`;
// this is the form section in the webiste
export const Form = styled.section`
  /* color: #2b2c2f;
  width: 45%;
  background: white;
  border-top: 10px solid
    linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  border-radius: 20px;
  padding: 58px 10px; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 48px;
    color: #2b2c2f;
  }
  @media screen and (max-width: 1024px) {
    width: 46%;
    padding: 20px 20px;
  }
  @media screen and (max-width: 658px) {
    h1 {
      font-size: 23px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  ::before {
    content: "";
    width: 577px;
    border-radius: 20px;
    height: 10px;
    position: absolute;
    top: -8px;
  }
  @media screen and (max-width: 1200px) {
    ::before {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 1023px) {
    max-width: 95%;
  }
`;

export const FormClass = styled.section`
  width: 469px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
  z-index: 99;
  img {
    margin-right: 10px;
  }
  input {
    width: 100%;
    text-align: left;
    padding-left: 24px;
    height: 50px;
    outline: none;
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    border: 1px solid #2b2c2f;
    font-size: 18px;
    line-height: 23px;
    color: #2b2c2f;
    border: none;
    overflow: hidden;
  }
  button {
    background-color: white;
  }

  @media screen and (max-width: 551px) {
    width: 95%;
    input {
      padding-left: 16px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 440px) {
    input {
      padding-left: 4px;
      font-size: 15px;
    }
  }
`;
export const Button = styled.button`
  display: block;
  width: 70%;
  padding: 20px 30px;
  font-size: 15px;
  margin: 15px;
  color: white;
  font-style: normal;
  font-weight: 600;
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  border-radius: 8px;
  text-align: center;
  @media screen and (max-width: 658px) {
    margin: auto;
    width: 80%;
    font-size: 9px;
    padding: 12px;
  }
`;
export const Toggle = styled.section`
  background-color: white;
  box-shadow: 2px 3px 10px grey;
  display: flex;
  z-index: 100;
  position: absolute;
  top: 283px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  overflow: scroll;
  height: 160px;
  width: 450px;
  border: 1px solid transparent;
  padding: 10px;
  font-size: 20px;
  transition: width 0.5 all;
  small {
    font-size: 19px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 658px) {
    width: 75%;
    position: absolute;
    top: 305px;
    font-size: 13px;
    text-align: center;
  }
`;
export const ToggleOne = styled.section`
  background-color: white;
  box-shadow: 2px 3px 10px grey;
  display: flex;
  position: absolute;
  top: 368px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  width: 450px;
  height: 130px;
  overflow: scroll;
  border: 1px solid transparent;
  padding: 10px;
  font-size: 20px;
  transition: width 0.5 all;
  small {
    font-size: 19px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 658px) {
    width: 75%;
    position: absolute;
    top: 385px;
    font-size: 13px;
    text-align: center;
  }
`;
