import styled from "styled-components";
import background from "../../../../public/assets/images/uiPage/background.png";

export const HeroSec = styled.div`
  background-image: url(${background.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1250px) {
      br {
        display: none;
      }
    }
    @media screen and (max-width: 991px) {
      flex-direction: column;
    }
  }
`;
export const HeroText = styled.div`
  flex-basis: 75%;
  margin: 102px 0;
  @media screen and (max-width: 991px) {
    text-align: center;
  }
  @media screen and (max-width: 574px) {
    text-align: left;
    margin: 70px 0 20px;
  }
  h1 {
    color: #fff;
    /* max-width: 698px; */
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 30px;
    @media screen and (max-width: 1200px) {
      font-size: 50px;
    }
    @media screen and (max-width: 574px) {
      font-size: 32px;
    }
  }
  p {
    color: #fff;
    /* max-width: 569px; */
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */
    margin-bottom: 30px;
    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }
    @media screen and (max-width: 574px) {
      font-size: 18px;
    }
  }
`;
export const HeroImage = styled.div`
  flex-basis: 25%;
  margin: 51px 0;
  @media screen and (max-width: 574px) {
    margin: 0;

    img {
      max-width: 100%;
      object-fit: contain;
    }
  }
`;
