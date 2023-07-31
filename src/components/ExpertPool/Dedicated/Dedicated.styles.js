import styled from "styled-components";
import numberbg from "../../../assets/images/Expert/numberbg.png";

export const StyledDedicated = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  h1 {
    color: #434956;
    text-align: center;
    font-size: 45px;
    line-height: 50px;
    font-style: normal;
    font-weight: 600;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Dedicatedinfo = styled.div`
  border-radius: 48px;
  background: #2b2c2f;
  width: 90%;
  margin: 39px auto 0 auto;
  padding: 58px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media screen and (max-width: 1440px) {
    padding: calc(30px + (58 - 30) * (100vw - 390px) / (1440 - 390))
      calc(10px + (100 - 10) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 926px) {
    gap: 1rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const DedicatedSteps = styled.div`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    order: ${({ order }) => (order ? order : "")};
  }
`;
export const DedicatedNumber = styled.div`
  background: url(${numberbg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-family: Outfit;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 79px;
  height: 79px;
`;
export const DedicatedText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  gap: 20px;
  h3 {
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (18 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
