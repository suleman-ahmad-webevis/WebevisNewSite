import styled from "styled-components";
import line from "../../../assets/images/SocialMedia/textLine.png";
// import line from "../../../assets/images/SocialMedia/textLine.png";

export const HeroSection = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;
export const HeroText = styled.div`
  position: relative;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    text-align: center;
    color: #2b2c2f;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      height: 23px;
      width: 100%;
      background: linear-gradient(
        90.39deg,
        #28b781 8.43%,
        rgba(255, 204, 3, 0.68) 28.07%,
        #28b781 70.49%,
        #cfef00 109.94%
      );
      mix-blend-mode: hard-light;
      opacity: 0.93;
      border-radius: 32px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      top: 50%;
      left: 0;
      z-index: -1;
      opacity: 0.7;
      @media screen and (max-width: 1200px) {
        height: calc(12.16px + (23 - 12.16) * (100vw - 390px) / (1440 - 390));
      }
    }
    @media screen and (max-width: 1200px) {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  img {
    max-width: 100%;
    position: absolute;
    top: 45px;
    z-index: -1;
    opacity: 0.75;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const HeroImg = styled.div`
  position: relative;
  top: -100px;
  @media screen and (max-width: 920px) {
    top: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
