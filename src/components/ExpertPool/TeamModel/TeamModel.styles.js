import styled from "styled-components";

export const StyledTeamModel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 1440px;
  margin: 2rem auto;
  width: 100%;
  @media screen and (max-width: 1024px) {
    align-items: center;
  }
  @media screen and (max-width: 838px) {
    flex-direction: column;
  }
`;
export const TeamText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 50%;
  margin: 0 auto;
  padding-left: 45px;
  @media screen and (max-width: 838px) {
    width: 100%;
  }
  @media screen and (max-width: 624px) {
    padding-left: 20px;
  }

  h1 {
    color: #434956;

    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  h4 {
    color: #434956;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const TeamImage = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 838px) {
    width: 100%;
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
export const TeamPoints = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  img {
    margin-top: 5px;
  }
  p {
    color: #434956;

    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;