import styled from "styled-components";
import bg from "../../../assets/images/Services/AICompetitorAnalysis/Background.png";

export const UnlockContainer = styled.div`
  background: url(${bg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 102px;
  margin: 50px 0;
  padding: 0 20px;

  h2 {
    font-weight: 700;
    font-size: 35px;
    line-height: 44px;
    color: #ffffff;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (35 - 28) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.34);
  border-radius: 8px;
  width: 358px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1440px) {
    font-size: calc(40px + (50 - 40) * (100vw - 390px) / (1440 - 390));
  }

  label {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;