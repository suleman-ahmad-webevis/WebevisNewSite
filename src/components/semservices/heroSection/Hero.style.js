import background from "../../../assets/images/Services/SemServices/Sembg.png";
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
    @media screen and (max-width: 1023px) {
      flex-direction: column;
    }
  }
`;
export const HeroText = styled.section`
  width: 50%;
  padding: 14px 0px;
  @media screen and (max-width: 1103px) {
    // width: 45%;
  }
  // @media screen and (max-width: 658px) {
  //   width: 95%;
  //   margin: auto;
  // }
  // @media screen and (max-width: 1023px) {
  //   width: 95%;
  //   margin: auto;
  //   text-align: center;
  // }
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
  // @media screen and (max-width: 658px) {
  //   h2 {
  //     font-size: 16px;
  //     line-height: 20px;
  //     margin-bottom: 20px;
  //   }
  //   h1 {
  //     font-size: 32px;
  //     line-height: 40px;
  //   }
  //   p {
  //     font-weight: 500;
  //     margin-bottom: 26px;
  //     font-size: 16px;
  //     line-height: 20px;
  //   }
  // }
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
    font-family: "Outfit";
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
`;
export const Form = styled.section`
  background-color: white;
  width: 50%;
  max-width: 509px;
  max-height: 474.461px;
  height: 100%;
  margin-right: 50px;
  border-top: 10px solid #434956 !important;
  border-radius: 17.27px;
  padding: 57px 27.27px;
  margin-top: 4px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 48px;
    color: #2b2c2f;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(20px + (38 - 20) * (100vw - 390px) / (1440 - 390));
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

export const FormClass = styled.section`
  width: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 27px;
  padding: 0px 10px;
  // position: relative;
  // z-index: 99;
  // img {
  //   margin-right: 10px;
  // }
  input {
    width: 100%;
    text-align: left;
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

  // @media screen and (max-width: 551px) {
  //   width: 95%;
  //   input {
  //     padding-left: 16px;
  //     font-size: 16px;
  //   }
  // }
  // @media screen and (max-width: 440px) {
  //   input {
  //     padding-left: 4px;
  //     font-size: 15px;
  //   }
  // }
`;
export const Button = styled.button`
  display: block;
  width: 80%;
  margin: auto;
  margin-top: 54px;
  padding: 20px 30px;
  font-size: 18px;
  color: white;
  font-style: normal;
  font-weight: 600;
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  border-radius: 7.271px;
  text-align: center;
  // @media screen and (max-width: 658px) {
  //   margin: auto;
  //   width: 80%;
  //   font-size: 9px;
  //   padding: 12px;
  // }
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
