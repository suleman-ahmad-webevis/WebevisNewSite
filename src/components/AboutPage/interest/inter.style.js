import styled from "styled-components";
export const InterSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed #28b781;
  margin-bottom: 4rem;
  padding: 40px;
  gap: 30px;
  p {
    color: #424954;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  h1 {
    max-width: 969px;
    font-weight: 700;
    font-size: 60px;
    line-height: 100%;
    text-align: center;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (60 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 658px) {
    gap: 25px;
  }
`;

export const Btn = styled.section`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 658px) {
    gap: 8px;
  }
`;

