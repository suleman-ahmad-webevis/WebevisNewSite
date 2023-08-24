import styled from "styled-components";
export const HireHolder = styled.section`
  text-align: center;
  padding-bottom: 60px;
`;
export const Hire = styled.div`
  h2 {
    color: #434956;
    font-size: 45px;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(32px + (50 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Hire {
    max-width: 1111px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    border-bottom: 1px solid #d9d9d9;
    margin: 0 auto;
    text-align: start;
    @media screen and (max-width: 767px) {
      padding: 20px 0;
    }

    h3 {
      color: #434956;
      font-size: 28px;
      font-weight: 600;
      line-height: 32px;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  .Hire:nth-child(2) {
    padding-top: 0;
  }
`;
