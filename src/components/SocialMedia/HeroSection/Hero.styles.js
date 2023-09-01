import styled from "styled-components";


export const HeroSection = styled.div`
  width: 90%;
  margin: 2rem auto 0 auto;
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
  max-width: 1025px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    text-align: center;
    position: relative;

    @media screen and (max-width: 1200px) {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
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
  button {
    z-index: 1;
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
