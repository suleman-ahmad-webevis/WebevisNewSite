import styled from "styled-components";

export const CompetitorServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 50px auto;

  h2 {
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    margin: 30px 0 60px 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
`;

export const CompetitorServicesCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 130px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }
`;

export const CompetitorService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;