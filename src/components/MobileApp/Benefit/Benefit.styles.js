import styled from "styled-components";
export const BenefitHolder = styled.section`
  padding: 100px 0 50px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(50px + (100 - 50) * (100vw - 390px) / (1440 - 390)) 0
      calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const BenefitContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  .Content {
    max-width: 649px;
    h2 {
      color: #424954;
      font-size: 45px;
      line-height: 50px;
      font-weight: 600;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
        line-height: calc(32px + (52 - 32) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(15px + (20 - 15) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      color: #434956;
      font-size: 28px;
      line-height: 35px;
      font-weight: 400;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 767px) {
        margin-bottom: 20px;
      }
    }
  }
  .image-holder {
    max-width: 614px;
    border-radius: 20px;
    box-shadow: -1.68px 0.95436px 9.54358px 4.77179px rgba(40, 183, 129, 0.46);
    img {
      display: block;
      max-width: 100%;
      height: auto;
      border-radius: 20px;
    }
  }
`;
