import styled from "styled-components";
import BG from "../../../../public/assets/images/MobileApp/App-bg.png";
import BgMobile from "../../../../public/assets/images/MobileApp/App-mobile-bg.png";
export const HeroHolder = styled.section`
  padding: 120px 0;
  background-image: url(${BG.src});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  br {
    display: none;
    @media screen and (max-width: 575px) {
      display: block;
    }
  }
  @media screen and (max-width: 575px) {
    background-image: url(${BgMobile.src});
    height: 100vh;
    padding-top: calc(50px + (100 - 50) * (100vw - 390px) / (1440 - 390));
    padding-bottom: 0;
  }
`;
export const HeroContent = styled.div`
  max-width: 569px;
  h1 {
    color: #fff;
    font-size: 60px;
    line-height: 65px;
    font-weight: 700;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
      line-height: calc(37px + (65 - 37) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #fff;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    margin-bottom: 40px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (28 - 22) * (100vw - 575px) / (1440 - 575));
      margin-bottom: calc(30px + (40 - 30) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 575px) {
      line-height: 35px;
    }
  }
`;
