import styled from "styled-components";
export const AgencyCount = styled.div`
  max-width: 1440px;

  width: 958px;
  margin: 0 auto;
  background: #434956;
  border-radius: 0px 0px 60px 60px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1440px) {
    height: calc(58.46px + (160 - 58.46) * (100vw - 390px) / (1440 - 390));
    width: calc(350px + (958 - 350) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 389px) {
    height: 58.46px;
    width: 350px;
    width: calc(290px + (350 - 290) * (100vw - 290px) / (390 - 290));
    margin: 0 auto;
  }

  @media screen and (max-width: 971px) {
    border-radius: 0px 0px 21.9207px 21.9207px;
  }
`;
export const CounterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h4 {
    font-family: "outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 150%;
    color: #ffffff;
    margin: 0;
    display: flex;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (44 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-family: "outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    color: #ffffff;
    margin: 0;

    @media screen and (max-width: 1440px) {
      font-size: calc(12px + (24 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
