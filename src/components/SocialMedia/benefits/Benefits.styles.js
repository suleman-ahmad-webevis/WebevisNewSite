import styled from "styled-components";
import bg from "../../../assets/images/SocialMedia/benefits.png";

export const BenefitsSec = styled.div`
  width: 85%;
  margin: 3rem auto 0 auto;
  background-image: url(${bg.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  padding: 2rem;
  color: white;
`;
export const BenefitsText = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
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
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
export const SmoServices = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 48% 48%;
  grid-gap: 10px;
  text-align: left;
`;
export const SMOitems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  span {
    width: 11.95px;
    height: 11.95px;
    border: 1.7071px solid #28b781;
    transform: rotate(45deg);
  }
  h5 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(12px + (18 - 12) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
