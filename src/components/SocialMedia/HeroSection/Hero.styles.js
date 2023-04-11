import styled from "styled-components";
export const HeroSection = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HeroText = styled.div`
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
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (60 - 32) * (100vw - 320px) / (1440 - 320));
    }
    p {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      color: #2b2c2f;
    }
  }
  /* @media screen and (max-width: 900px) {
    width: 80%;
  } */
`;
export const HeroImg = styled.div`
  position: relative;
  top: -130px;
  @media screen and (max-width: 920px) {
    top: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
