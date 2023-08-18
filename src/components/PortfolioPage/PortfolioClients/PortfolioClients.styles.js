import styled from "styled-components";

export const ClientSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .Headlines {
    text-align: center;
    margin-bottom: 40px;
    h1 {
      color: var(--secondary, #434956);
      text-align: center;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      @media screen and (max-width: 1440px) {
        font-size: calc(20px + (45 - 20) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      max-width: 905px;
      color: var(--secondary, #434956);
      text-align: center;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      @media screen and (max-width: 767px) {
        font-size: 16px;
      }
    }
  }
`;
