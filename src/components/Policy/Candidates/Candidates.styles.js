import styled from "styled-components";
export const CandidateHolder = styled.section`
  padding-top: 100px;
  @media screen and (max-width: 1440px) {
    padding-top: calc(50px + (100 - 50) * (100vw - 390px) / (1440 - 390));
  }
`;
export const Candidate = styled.div`
  h2 {
    color: #424954;
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (45 - 32) * (100vw - 390px) / (1440 - 390));
      line-height: calc(37px + (50 - 37) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  p,
  li {
    color: #434956;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(22px + (28 - 22) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(35px + (50 - 30) * (100vw - 390px) / (1440 - 390));
    }
  }
  ul {
    padding-left: 40px;
    @media screen and (max-width: 1440px) {
      padding-left: calc(25px + (40 - 25) * (100vw - 390px) / (1440 - 390));
    }
    li {
      margin-bottom: 20px;
      list-style-type: disc;
      @media screen and (max-width: 1440px) {
        margin-bottom: calc(12px + (20 - 12) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  .info {
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      margin-bottom: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  a {
    color: #434956;
    text-decoration: underline;
  }
`;
