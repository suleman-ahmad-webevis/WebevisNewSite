import styled from "styled-components";
import bg from "../../../assets/images/Services/AWAServices/aibg.png";

export const HeroSectionContainer = styled.div`
  max-width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export const HeroContainer = styled.div`
  background: url(${bg.src});
  /* height: 625px; */
  /* top: 50px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* @media screen and (max-width: 1440px) {
    height: calc(393px + (625 - 393) * (100vw - 390px) / (1440 - 390));
  } */

  h2 {
    margin-top: 70px;
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    width: 50%;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 900px) {
      width: 65%;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }
`;

export const AWAButton = styled.button`
  background: #ffffff;
  border-radius: 40px;
  width: 356px;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 210px;

  label {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 1440px) {
    width: calc(350px + (356 - 350) * (100vw - 390px) / (1440 - 390));
    height: calc(40px + (50 - 40) * (100vw - 390px) / (1440 - 390));
  }
`;

export const CrawlLogContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -150px;
  @media screen and (max-width: 1440px) {
    margin-top: calc(-140px + (-150 + 140) * (100vw - 390px) / (1440 - 390));
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;