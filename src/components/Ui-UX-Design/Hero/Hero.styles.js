import styled from "styled-components";
import Bg from "../../../../public/assets/images/UI-UX/Hero-bg.png";
import MobileBg from "../../../../public/assets/images/UI-UX/Hero-bg-mobile.png";
export const HeroHolder = styled.section`
  padding: 70px 0;
  background-image: url(${Bg.src});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 50% 100%;
  @media screen and (max-width: 991px) {
    padding: 40px 0;
  }
  @media screen and (max-width: 991px) {
    background-image: none;
  }
`;
export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
  .Content {
    max-width: 579px;
    @media screen and (max-width: 991px) {
      padding-bottom: 50px;
    }
    h1 {
      color: #2b2c2f;
      font-size: 70px;
      line-height: 75px;
      font-weight: 700;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(32px + (70 - 32) * (100vw - 390px) / (1440 - 390));
        line-height: calc(37px + (75 - 37) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(10px + (20 - 10) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      color: #2b2c2f;
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 40px;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: calc(22px + (28 - 22) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(20px + (40 - 20) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  .mobile-bg {
    background-image: none;
    @media screen and (max-width: 991px) {
      background-image: url(${MobileBg.src});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-bottom: -40px;
      width: 115%;
    }
  }
  .img-holder {
    max-width: 611px;
    @media screen and (max-width: 1440px) {
      max-width: calc(350px + (611 - 350) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 991px) {
      padding-top: 60px;
      margin: 0 auto;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
