import styled from "styled-components";
export const Market = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px 0;
  @media screen and (max-width: 768px) {
    margin: 60px 0;
  }
`;
export const MarketCenter = styled.div`
  h1 {
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
    max-width: 1236px;
    color: #434956;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const MarketParent = styled.div`
  display: flex;
  padding: 0px 30px;
  gap: 15px;
  margin-top: 60px;
  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 60px;
  }
`;
export const MarketFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
`;
export const MarketFlex1 = styled.div`
  max-width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    margin-top: 173px;
    @media screen and (max-width: 991px) {
      margin-top: 41px;
    }
  }
  @media screen and (max-width: 1440px) {
    max-width: calc(370px + (460 - 370) * (100vw - 390px) / (1440 - 390));
  }
`;
export const MarketFlex2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  justify-content: flex-start;
`;
export const HeadingDiv = styled.section`
  background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
  width: 46px;
  height: 46px;
  text-align: center;
  border-radius: 13px;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
  }
`;
export const FlexOne = styled.div`
  h1 {
    margin: 0 auto;
    margin-top: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    max-width: 357px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (18 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const FlexImage = styled.section`
  img {
    object-fit: contain;
  }
`;

