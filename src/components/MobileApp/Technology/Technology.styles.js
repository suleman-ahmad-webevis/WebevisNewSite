import styled from "styled-components";
export const SliderHolder = styled.section`
  padding: 50px 0 60px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0
      calc(30px + (60 - 30) * (100vw - 390px) / (1440 - 390)) 0;
  }

  text-align: center;
  h2 {
    color: #424954;
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(36px + (52 - 36) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(15px + (30 - 15) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    max-width: 1185px;
    margin: 0 auto;
    color: #434956;
    font-size: 28px;
    line-height: 32px;
    font-weight: 400;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(15px + (30 - 15) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
