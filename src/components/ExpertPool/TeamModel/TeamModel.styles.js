import styled from "styled-components";

export const StyledTeamModel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 2rem auto;
  width: 100%;
`;
export const TeamText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 0 auto;
  padding-left: 40px;

  h1 {
    color: #434956;
    font-family: Outfit;
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
    font-family: Outfit;
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
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
