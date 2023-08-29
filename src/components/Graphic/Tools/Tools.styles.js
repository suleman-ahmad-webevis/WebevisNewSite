import styled from "styled-components";
export const ToolHolder = styled.section`
  padding: 50px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const Tool = styled.div`
  text-align: center;
  padding: 0 20px;
  h2 {
    color: #424954;
    font-size: 45px;
    font-weight: 600;
    line-height: 50px;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
      line-height: calc(28px + (50 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    font-size: 28px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 20px;
    max-width: 703px;
    margin: 0 auto;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
