import styled from "styled-components";

export const StyledChallenge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  @media screen and (max-width: 628px) {
    padding: 100px 0 0 0;
  }
  h2 {
    color: #434956;
    font-family: Outfit;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    text-align: center;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    max-width: 1068px;
    color: #434956;
    text-align: center;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: normal;
    }
  }
`;
export const ChallegesSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  width: 100%;
  margin-top: 50px;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 628px) {
    grid-template-columns: 1fr;
  }
`;

export const ChallengeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.14);
  padding: 15px 60px 15px 15px;
  gap: 30px;
  @media screen and (max-width: 1424px) {
    padding: 15px;
  }
  @media screen and (max-width: 628px) {
    padding: 15px 40px 15px 15px;
    gap: 25px;
  }
  .Img {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #28b781;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 5px;
    img {
      max-width: 100%;
      height: auto;
    }
    @media screen and (max-width: 628px) {
      width: 53.333px;
      height: 53.333px;
    }
  }
  span {
    color: #434956;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
