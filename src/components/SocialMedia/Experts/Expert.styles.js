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
  position: relative;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    margin-bottom: 1rem;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1000px) {
      margin-bottom: 4rem;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 2rem;
    }
  }
  h2 {
    margin-top: 5rem;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    text-align: center;
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
export const FlootingText = styled.div`
  width: 22%;
  position: absolute;
  left: ${({ left }) => (left ? left : "5%")};
  top: ${({ top }) => (top ? top : "12%")};

  h6 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(12px + (18 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 1000px) {
    left: ${({ leftF }) => (leftF ? leftF : "5%")};
    top: ${({ topF }) => (topF ? topF : "12%")};
  }
  @media screen and (max-width: 790px) {
    width: 25%;
  }
`;
export const MobileFlootingText = styled.div`
  width: 25%;
  position: absolute;
  left: ${({ left }) => (left ? left : "60%")};
  top: ${({ top }) => (top ? top : "18%")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: ${({ color }) => (color ? "#28b781" : "#2B2C2F")};
    text-align: left;
  }
  h6 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(12px + (18 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }

  @media screen and (max-width: 625px) {
    width: 30%;
  }
  @media screen and (max-width: 525px) {
    width: 40%;
    left: ${({ leftF }) => (leftF ? leftF : "50%")};
    top: ${({ topF }) => (topF ? topF : "18%")};
  }
`;