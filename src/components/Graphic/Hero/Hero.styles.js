import styled from "styled-components";
export const HeroHolder = styled.section`
  padding: 40px 0;
`;
export const ContentHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 40px;
  }
`;
export const Content = styled.div`
  max-width: 570px;
  @media screen and (max-width: 1440px) {
    max-width: calc(350px + (570 - 350) * (100vw - 390px) / (1440 - 992));
  }
  h1 {
    color: #2b2c2f;
    font-size: 60px;
    line-height: 65px;
    font-weight: 700;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
      line-height: calc(37px + (65 - 37) * (100vw - 390px) / (1440 - 390));
    }
    span {
      background: linear-gradient(97.77deg, #00c3fb 0.78%, #00feb1 77.81%),
        linear-gradient(0deg, #ffffff, #ffffff);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }
  p {
    color: #434956;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(32px + (28 - 23) * (100vw - 390px) / (1440 - 390));
    }
  }
`;

export const ImageHolder = styled.div`
  max-width: 608px;
  @media screen and (max-width: 1440px) {
    max-width: calc(350px + (608 - 350) * (100vw - 390px) / (1440 - 992));
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
