import styled from "styled-components";
export const ProcessHolder = styled.section`
  padding: 50px 0 100px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0
      calc(50px + (100 - 50) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const ProcessContent = styled.div`
  text-align: center;
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
  p {
    color: #434956;
    font-size: 28px;
    line-height: 35px;
    font-weight: 300;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: calc(20px + (32 - 20) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(30px + (50 - 30) * (100vw - 390px) / (1440 - 390));
    }
  }
  h3 {
    color: #424954;
    font-size: 30px;
    line-height: 35px;
    font-weight: 500;
    max-width: 170px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (30 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (35 - 22) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Col-holder {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    text-align: start;
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 575px) {
      grid-template-columns: 1fr 1fr;
    }
    .Col {
      max-width: 258px;
      padding: 20px 28px 40px 20px;
      border-radius: 20px;
      box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
      @media screen and (max-width: 1440px) {
        padding-bottom: calc(40px + (40 - 26) * (100vw - 768px) / (1440 - 768));
      }
      .img-holder {
        width: 70px;
        height: 70px;
        background-color: #e9f8f2;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;
