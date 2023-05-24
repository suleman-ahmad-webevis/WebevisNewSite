import styled from "styled-components";
import map from "../../../assets/images/SocialMedia/map.png";

export const MainSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
export const StorySec = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${map.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 3rem;

  p {
    width: 75%;
    margin: 2rem auto;
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
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (45 - 14) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
export const ItemsDetails = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 3rem;
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (28 - 14) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
