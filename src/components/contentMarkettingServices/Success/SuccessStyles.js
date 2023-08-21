import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  h2 {
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 1440px) {
    h2 {
      font-size: calc(24px + (45 - 24) * (100vw - 320px) / (1440 - 320));
    }
  }
`;

export const SuccessCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 50px;
  @media screen and (max-width: 450px) {
    grid-gap: 20px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  position: relative;
  @media screen and (max-width: 450px) {
    img {
      width: 96px;
      height: 96px;
    }
  }
`;
export const Card = styled.div`
  width: 172px;
  height: 172px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eaf7ee;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  position: absolute;
  top: 105px;
  z-index: -1;

  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 1440px) {
    h2 {
      font-size: calc(16px + (28 - 16) * (100vw - 320px) / (1440 - 320));
    }
  }
  @media screen and (max-width: 450px) {
    width: 107px;
    height: 107px;
    top: 65px;
  }
`;

