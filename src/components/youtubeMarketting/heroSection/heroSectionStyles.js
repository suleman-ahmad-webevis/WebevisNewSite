import styled from "styled-components";

export const HeroSec = styled.section`
  background: #2b2c2f;
  padding: 20px 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
export const HeroText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  h1 {
    color: #fff;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (70 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    max-width: 565px;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }
  button {
    margin-top: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 20px;
  }
`;
export const HeroImages = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
