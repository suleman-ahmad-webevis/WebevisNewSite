import styled from "styled-components";

export const ServiceSec = styled.div`
  width: 100%;
  margin: 4rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ServiceText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    text-align: center;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
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
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const OurServices = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
  margin-top: 3rem;
  @media screen and (max-width: 700px) {
    grid-template-columns: auto;
  }
`;
export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  color: #434956;
  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  padding: 2rem 2rem;
  transition: 0.2s all ease-in-out;
  &:hover {
    background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
    color: #fff;
  }
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
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
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (18 - 14) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
