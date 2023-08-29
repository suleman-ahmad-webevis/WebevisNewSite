import styled from "styled-components";
export const DesignHolder = styled.section`
  padding: 50px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const Design = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 40px;
  }
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
  h3 {
    color: #28b781;
    font-size: 35px;
    font-weight: 400;
    line-height: 38px;
    margin-bottom: 15px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (35 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: calc(20px + (40 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (28 - 22) * (100vw - 390px) / (1440 - 390));
    }
  }
  .img-holder {
    max-width: 511px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .Design-content {
    max-width: 598px;
  }
`;
