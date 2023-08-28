import styled from "styled-components";
import bg from "../../../assets/images/Services/AWAServices/background.png";

export const HeroSec = styled.div`
  width: 100%;
  background: url(${bg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 991px) {
 gap:44px;
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`;

export const HeroText = styled.div`
 @media screen and (max-width: 767px) {
  text-align: center;

    }
  h2 {
    font-weight: 700;
    font-size: 70px;
    margin-bottom: 20px;
    line-height: 76px;
    color: #ffffff;
    @media screen and (max-width: 1244px) {
      font-size: 50px;
    }
    @media screen and (max-width: 991px) {
      font-size: 40px;
      line-height: 28px;
    }
    @media screen and (max-width: 767px) {
  margin-top:50px;

    }
  }
  p {
    max-width: 576px;
    color: #fff;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 40px;
    @media screen and (max-width: 1244px) {
      font-size: 20px;
    }
    @media screen and (max-width: 991px) {
      font-size: 16px;
    }

    /* @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 900px) {
      width: 65%;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
    } */
  }
  /* button { */
  /* @media screen and (max-width: 1440px) {
        font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      }
    }
    span {
      font-weight: 700;
      line-height: 32px;
      background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      cursor: pointer;
    
  } */
`;

export const ImageContainer = styled.div`
  margin: 81px 0;
  @media screen and (max-width: 767px) {
    margin: 20px 0;

    }
  img {
    @media screen and (max-width: 1244px) {
      max-width: 100%;
      height: auto;
    }
  }
  // width: 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // margin-top: -150px;
  // @media screen and (max-width: 1440px) {
  //   margin-top: calc(-140px + (-150 + 140) * (100vw - 390px) / (1440 - 390));
  // }
  // img {
  //   max-width: 100%;
  //   height: auto;
  // }
`;
