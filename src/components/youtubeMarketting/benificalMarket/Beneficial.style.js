import styled from "styled-components";
export const FlexText = styled.section`
  margin: 50px auto 0 auto;
  h1 {
    margin: auto;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    max-width: 1190px;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 30px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const FlexCard = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 23px;
  padding: 0 20px;
  margin: 60px auto 50px 0;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 658px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const BCard = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 51px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.17);
  padding: 20px 30px 50px;
  text-align: left;
  color: #434956;

  img {
    max-width: 100%;
    height: auto;
  }
  h1 {
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    margin-bottom: 10px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  &:hover {
    color: #fff;
    background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
    img {
      filter: invert(100%) sepia(13%) saturate(2%) hue-rotate(335deg)
        brightness(150%) contrast(100%);
    }
  }
`;
