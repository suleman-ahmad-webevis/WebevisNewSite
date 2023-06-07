import styled from "styled-components";

export const SpeakWaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 0 20px;

  h2 {
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    color: #424954;
    margin: 50px 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px;
    margin: 20px 0;
    br {
      display: none;
    }
  }
`;

export const SpeakWaysOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1058px) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: ${({ fld }) => (fld ? "column-reverse" : "column")};
  }
`;

export const SpeakWaysCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  h3 {
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
    margin: 0;
    @media screen and (max-width: 1288px) {
      br {
        display: none;
      }
    }
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;
