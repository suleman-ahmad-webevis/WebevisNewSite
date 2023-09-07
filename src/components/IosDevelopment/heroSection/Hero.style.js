import styled from "styled-components";
import heroImage from "../../../../public/assets/images/IosDevelopment/heroImage.png";
import responsiveImage from "../../../../public/assets/images/IosDevelopment/responsiveHero.png";
export const HeroSec = styled.div`
  background-image: url(${heroImage.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  @media screen and (max-width: 1350px) {
    background-position: right;
  }
  @media screen and (max-width: 574px) {
    background-image: url(${responsiveImage.src});
    background-position: bottom right;
    background-size: cover;
    height: 100vh;
  }
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 82px 0;
    @media screen and (max-width: 574px) {
      padding: 70px 0;
    }
  }
  .hero_text {
    padding-left: 20px;
    h1 {
      color: #2b2c2f;

      font-size: 70px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
      margin-bottom: 30px;
      @media screen and (max-width: 991px) {
        font-size: 45px;
      }
      @media screen and (max-width: 767px) {
        font-size: 38px;
      }
      @media screen and (max-width: 574px) {
        font-size: 32px;
      }
    }
    p {
      max-width: 391px;
      color: #2b2c2f;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 125% */
      text-transform: capitalize;
      margin-bottom: 40px;
      @media screen and (max-width: 991px) {
        font-size: 20px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }
  }
`;
