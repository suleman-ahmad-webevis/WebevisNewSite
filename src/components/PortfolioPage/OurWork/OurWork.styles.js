import styled from "styled-components";
import Hero from "../../../assets/images/Portfolio/bgImg.svg";
import HeroMini from "../../../assets/images/Portfolio/bgImgMini.svg";

export const WorkSection = styled.div`
  background: url(${Hero.src});
  width: 100%;
  /* min-height: calc(100vh - 80px); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px 0px;
  @media screen and (max-width: 390px) {
    background: url(${HeroMini.src});
    align-items: flex-start;
    padding: 30px 0px;

    min-height: 100vh;
  }

  .container {
    width: 100%;
  }
  .Headlines {
    width: 100%;
    max-width: 600px;
    h1 {
      color: #fff;
      text-align: center;
      font-size: 70px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: left;
      @media screen and (max-width: 1440px) {
        font-size: calc(28px + (70 - 28) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 390px) {
        text-align: center;
      }
    }
    p {
      color: #fff;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      @media screen and (max-width: 1440px) {
        font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 390px) {
        text-align: center;
      }
    }
  }
`;
