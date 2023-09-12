import styled from "styled-components";
export const OurAppHolder = styled.section`
  padding: 50px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const OurAppContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
  .img-holder {
    max-width: 602px;
    @media screen and (max-width: 991px) {
      margin-bottom: 30px;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .Content {
    max-width: 670px;
  }
  h2 {
    color: #424954;
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(32px + (50 - 32) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(10px + (20 - 10) * (100vw - 390px) / (1440 - 390));
    }
  }
  P {
    color: #434956;
    font-size: 28px;
    line-height: 32px;
    font-weight: 400;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (32 - 20) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }

  ul {
    color: #434956;
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    padding-left: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (28 - 2) * (100vw - 390px) / (1440 - 390));
    }
    li {
      position: relative;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        margin-bottom: calc(15px + (20 - 15) * (100vw - 390px) / (1440 - 390));
      }
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      &::before {
        content: "";
        position: absolute;
        top: 10px;
        left: -28px;
        width: 14px;
        height: 14px;
        border-radius: 100%;
        background: linear-gradient(98deg, #1fabd3 0.78%, #1ccc97 77.81%);
      }
    }
  }
`;
