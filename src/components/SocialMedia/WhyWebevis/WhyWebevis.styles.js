import styled from "styled-components";
import map from "../../../../public/assets/images/SocialMedia/map.png";

export const MainSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;
export const StoryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  max-width: 1025px;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    margin: 2rem auto;

    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const StorySec = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (45 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const ItemsDetails = styled.div`
  width: 100%;
  background-image: url(${map.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .container-wrapper {
    padding: 20px 0;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 50px;
    grid-column-gap: 16px;
  }
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 37px;
    background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
    width: 112px;
    padding: 15px;
    aspect-ratio: 1/1;
    @media screen and (max-width: 1440px) {
      width: calc(74px + (112 - 74) * (100vw - 390px) / (1440 - 390));
      border-radius: calc(25px + (37 - 25) * (100vw - 390px) / (1440 - 390));
      aspect-ratio: 1/1;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }

  p {
    margin: 0;

    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
