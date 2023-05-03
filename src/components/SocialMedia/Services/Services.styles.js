import styled from "styled-components";

export const ServiceSec = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ServiceText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;

    @media screen and (max-width: 1440px) {
      font-size: calc(22px + (45 - 22) * (100vw - 320px) / (1440 - 320));
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
export const OurServices = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
  margin-top: 3rem;
`;
export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background: #f2faf6;
  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  padding: 2rem 1rem;
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 320px) / (1440 - 320));
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (18 - 14) * (100vw - 320px) / (1440 - 320));
    }
  }
`;