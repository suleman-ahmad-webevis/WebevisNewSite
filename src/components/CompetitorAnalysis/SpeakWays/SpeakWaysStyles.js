import styled from "styled-components";

export const SpeakWaysContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 0 20px;

  h2 {
    max-width: 727px;
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
  width: 100%;
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
  gap: 10px;

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
    color: #434956;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin: 0;
  }
`;
export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;