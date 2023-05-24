import styled from "styled-components";

export const ExpertSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
export const ExpertText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    margin-bottom: 1rem;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 320px) / (1440 - 320));
    }
  }
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 320px) / (1440 - 320));
    }
  }
  p {
    width: 80%;
    /* margin: auto; */
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (28 - 14) * (100vw - 320px) / (1440 - 320));
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
